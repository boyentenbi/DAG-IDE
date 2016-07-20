(ns vide.parser2
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [clojure.walk :as w]
            ;;             [vide.helpers :refer [wrap]]
            [cljs.js :refer [eval empty-state js-eval]]
            [cljs.reader :refer [read-string]]
            ;;             [vide.helpers :refer [replace-seqs do-prn drop-nth
            ;;                                  find-indices first? firstx evalx wrap invert-noninj]]
            [clojure.zip :refer [zipper]]
            [vide.helpers :refer [do-prn firstx]]
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
  (let [syms-used (vals (:syms-used form))]
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
    (symbol? form) 1
    :else 1))
(defn get-width [form]
  (cond
    (map? form) (:width form)
    (symbol? form) 1
    :else 1))
(defn get-syms-used [id form]
  (cond
    (map? form) (:syms-used form)
    (symbol? form) {id form}
    :else {}))

(defn connect-labelled [labelled-form]
  (w/postwalk
    (fn [inner-labelled]
      (if (map? inner-labelled)
        (->
          (let [connected (:connected inner-labelled)
                head (:head inner-labelled)
                id (:id inner-labelled)] ;; we have these keys regardless of the head type
            (cond
              connected inner-labelled ;; if already done, don't do it again!

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
                  :syms-used (apply merge (map #(get-syms-used id %)
                                               [pred then else]))))

              (= 'let head)
              (let [bindings (:bindings inner-labelled)
                    pairs (partition 2 bindings)
                    syms-provided (map first pairs)
                    forms (map second pairs)
                    syms-used (->> forms
                                  (map #(get-syms-used id %))
                                  (apply merge)
                                  (remove #((set syms-provided) (second %)))
                                  (into {}))
                    layers  (layer-let pairs)] ;; we need to organize all of the inner graphs when we have a 'let' head
                (assoc inner-labelled
                  :height (reduce + (map #(apply max (map  get-height %)) layers))
                  :width (apply max (map #(reduce + (map get-height %)) layers))
                  :syms-used syms-used))

              (ifn? head)
              (let [forms (:forms inner-labelled)]
                (assoc inner-labelled
                  :height (->> forms
                               (map get-height)
                               (apply max)
                               (inc))
                  :width (->> forms
                              (map get-width)
                              (reduce + )
                              (max 1))
                  :syms-used (apply merge (map #(get-syms-used id %) forms))))
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
          (assoc :connected true))
        inner-labelled)) labelled-form))

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
       (connect-labelled)))


(defn parse-defn [defn-form]
  (let
    [[_ func-name args form]  defn-form]
    (model-pipeline form)))

