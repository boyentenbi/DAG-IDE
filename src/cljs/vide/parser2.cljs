(ns vide.parser2
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [clojure.walk :as w]
            ;;             [vide.helpers :refer [wrap]]
            [cljs.js :refer [eval empty-state js-eval]]
            [cljs.reader :refer [read-string]]
;;                         [vide.helpers :refer [replace-seqs do-prn drop-nth mergex
;;                                              find-indices first? firstx evalx wrap invert-noninj]]
            [clojure.zip :refer [zipper]]
            [vide.helpers :refer [do-prn firstx mergex ]]
            ))
(enable-console-print!)

(defn literal? [form]
  (cond
    (not (sequential? form)) true ;; obviously
    (and (list? form) (ifn? (first form))) false
    (some false? (map literal? form)) false
    :else true))


(defn convert-seqs [form]
  "Convert any maps and vectors which use the special brace syntax"
  (w/prewalk #(cond
                (vector? %) (cons 'vec (apply list %))
                (map? %) (cons 'hash-map (apply list %))
                :else %) form))

(defn label-form [form]
  (w/prewalk (fn [inner-form]
               (if (seq? inner-form)
                 (let [head (first inner-form)
                       tail (rest inner-form)]
                   (cond
                     (= 'if head) {:head head :id (gensym (str head "-")) :pred (first tail) :then (second tail) :else (last tail)}
                     (= 'let head) {:head head :id (gensym (str head "-")) :bindings (vec (rest (first tail))) :final (last tail)}
                     (= 'do head) {:head head :id (gensym (str head "-")) :side-effects (vec (drop-last tail)) :final (last tail)}
                     (ifn? head) {:head head :id (gensym (str head "-")) :forms (vec tail)}))
                 inner-form)) form))

(defn get-insertion-idx [layers form]
  (let [syms-used (apply concat (vals (:syms-used form)))]
    (loop [checking-idx (dec (count layers))]

      (if (= checking-idx -1)
        0
        (let [layer (nth layers checking-idx)]
          (if (some (set (map first layer)) syms-used)
            (recur (dec checking-idx))
            checking-idx))))))

(defn layer-let [pairs]
  (loop [layers []
         remaining-pairs pairs]
    (if (empty? remaining-pairs)
      layers
      (let [first-pair (first remaining-pairs)
            rest-pairs (rest remaining-pairs)
            insert-idx (get-insertion-idx layers first-pair)
            layers-new (if (= insert-idx (count layers))
                         (conj layers [first-pair])
                         (update  layers insert-idx #(conj % first-pair)))]
        (recur layers-new rest-pairs)))))

(defn get-height [form]
  (cond
    (map? form) (:height form)
    (symbol? form) 0
    :else 1))
(defn get-width [form]
  (cond
    (map? form) (:width form)
    (symbol? form) 0
    :else 1))
(defn get-syms-used [id form]
  (cond
    (map? form) (:syms-used form)
    (symbol? form) {id [form]}
    :else {}))

(defn connect-labelled [labelled-form]
  (w/postwalk
    (fn [inner-labelled]
      (if (map? inner-labelled)
        (let [head (:head inner-labelled)
              id (:id inner-labelled)] ;; we have these keys regardless of the head type
          (cond

            (:syms-used inner-labelled)
            inner-labelled ;; if already done, don't do it again!

            (= 'if head)
            (let [pred (:pred inner-labelled)
                  then (:then inner-labelled)
                  else (:else inner-labelled)] ;; 3 forms if we have an 'if' head
              (assoc inner-labelled
                :height (+ (max (get-height then)
                                (get-height else))
                           (get-height pred))
                :width (max (+ (get-width then)
                               (get-width else))
                            (get-width pred))
                :syms-used (->> [pred then else]
                             (map #(get-syms-used id %))
                             (apply mergex))))

            (= 'let head)
            (let [{:keys [final bindings]} inner-labelled
                  pairs (partition 2 bindings)
                  syms-generated (map first pairs)
                  forms (map second pairs)
                  syms-used (->> (conj forms final)
                                 (map #(get-syms-used id %))
                                 (apply mergex))
                  layers  (layer-let pairs)
                  layers-height (reduce + (map #(apply max (map  get-height (map second %))) layers))
                  layers-width (apply max (map #(reduce + (map get-width (map second %))) layers))
                  height (+ layers-height (get-height final))
                  width (max layers-width (get-width final))] ;; we need to organize all of the inner graphs when we have a 'let' head
              (-> inner-labelled
                  (assoc
                    :height height
                    :width width
                    :syms-used syms-used
                    :layers layers
                    :syms-generated syms-generated)
                  (dissoc :bindings)))

            (ifn?  head)
            (let [forms  (:forms inner-labelled)]
              (assoc inner-labelled
                :height (->> forms
                             (map get-height)
                             (apply max)
                             (inc))
                :width (->>  forms
                            (map get-width)
                            (reduce +)
                            (max 1)
                            )
                :syms-used (->> forms
                                 (map #(get-syms-used id %))
                                 (apply mergex))))
            ;;                       (= 'do head) (let [side-effects (:side-effects inner-labelled)]
            ;;                                      (assoc inner-labelled
            ;;                                        :height (->> side-effects
            ;;                                                     (map #(cond
            ;;                                                             (map? %) (:height %)
            ;;                                                             (symbol? %) 1
            ;;                                                             :else 1))
            ;;                                                     (apply #(reduce + %))
            ;;                                                     (inc))))
            ))
        inner-labelled)) labelled-form))

(defn assoc-coords [model]
  (->>
    model
    (#(assoc % :coords-rel (list 0 0)
               :coords-abs (list 0 0)));; make the outermost group have coords-rel 0 0
    (w/prewalk
      (fn [inner-model]
        (if (and (map? inner-model)
                 (:syms-used inner-model))
          (let [{:keys [height width head coords-abs coords-rel]} inner-model]
            (cond
              (= head 'if )
              (let [{:keys [pred then else]} inner-model
                    pred-height (get-in inner-model [:pred :height])
                    pred-width (get-in inner-model [:pred :width])
                    pred-x (+ (* 0.5 width) (* -0.5 pred-width))
                    then-height (get-in inner-model [:then :height])
                    then-width (get-in inner-model [:then :width])
                    else-height (get-in inner-model [:else :height])
                    else-width (get-in inner-model [:else :width])
                    pred-rel (list pred-x 0)
                    then-rel (list else-width pred-height)
                    else-rel (list 0 pred-height)
                    pred-abs (map + coords-abs pred-rel)
                    then-abs (map + coords-abs then-rel)
                    else-abs (map + coords-abs else-rel)
                    pred-new (if (map? pred)
                               (assoc pred
                                 :coords-rel pred-rel
                                 :coords-abs pred-abs)
                                 pred)
                    then-new (if (map? then)
                               (assoc then
                                 :coords-rel then-rel
                                 :coords-abs then-abs)
                               then)
                    else-new (if (map? else)
                               (assoc else
                                 :coords-rel else-rel
                                 :coords-abs else-abs)
                               else)]
                (assoc inner-model :pred pred-new :then then-new :else else-new))

              (= head 'let)
              (let [{:keys [layers final]} inner-model
                    new-layers
                    (vec (for [i (range (count layers))]
                           (vec (for [j (range (count (nth layers i)))]
                                  (let [layer (nth layers i)
                                        pair (nth layer j)
                                        layers-up-to (take i layers)
                                        pairs-up-to (take j layer)
                                        y (or (reduce + (for [layer layers-up-to]
                                                          (apply max (map #(:height (second %)) layer)))) 0)
                                        x (or (reduce +  (map #(:width (second %)) pairs-up-to)) 0)
                                        pair-rel (list x y)
                                        pair-abs (map + coords-abs pair-rel)]
                                    (if (map? (second pair))
                                      (update (vec pair) 1 #(assoc %
                                                              :coords-rel pair-rel
                                                              :coords-abs pair-abs))
                                      pair))))))
                    final-x (+ (* 0.5 width) (* -0.5 (get-width final)))
                    final-y (count layers)
                    final-rel (list final-x final-y)
                    final-abs (map + coords-abs final-rel)]
                (assoc inner-model
                  :layers
                  new-layers
                  :final
                  (assoc final
                    :coords-rel final-rel
                    :coords-abs final-abs)))

              (ifn?  head)
              (let [forms  (:forms inner-model)
                    forms-new (for [i (range (count forms))]
                                (let [form (nth forms i)
                                      forms-up-to (take i forms)
                                      x (or (reduce + (map :width forms-up-to)) 0)
                                      form-rel (list x 0)
                                      form-abs (map + coords-abs form-rel)
                                      form-new (if (map? form)
                                                 (assoc form
                                                   :coords-rel form-rel
                                                   :coords-abs form-abs)
                                                 form)]
                                  form-new))]
                (assoc inner-model :forms forms-new))))
          inner-model)
        ))))








(def defn-form '(defn fact [prod n]
                  (if (= n 1)
                    prod
                    (let [prod-new ( * prod n)
                          n-new (dec n)]
                 (fact prod-new n-new)))))

(defn model-pipeline [form]
  (->> form
       (convert-seqs)
       (label-form)
       (connect-labelled)
       (assoc-coords)))


(defn parse-defn [defn-form]
  (let
    [[_ func-name args form]  defn-form]
    (model-pipeline form)))

