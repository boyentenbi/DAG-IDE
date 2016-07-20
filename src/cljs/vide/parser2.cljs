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
            [cljs.pprint :refer [pprint]]
            ))
(enable-console-print!)
(defn do-prn [a]
  (do (prn a) a))

(defn firstx [thing]
  (if (sequential? thing)
    (first thing)
    thing))
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
            insert-idx (get-insertion-idx [] first-pair)
            layers-new (if (= insert-idx (count layers))
                         (conj layers [first-form])
                         (update layers insert-idx #(conj % first-form)))]
        (recur layers-new rest-forms)))))

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
                    layers (do-prn (layer-let [[]] pairs pairs))] ;; we need to organize all of the inner graphs when we have a 'let' head
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

(def form '(if (= n 1)
             prod
             (let [prod-new ( * prod n)
                   n-new (dec n)]
               (fact prod-new n-new))))

(defn pipeline [form]
  (->> form
       (convert-seqs)
       (label-form)
       (connect-labelled)))


(def pipelined (pipeline form))

(keys pipelined)
(:pred pipelined)
(:else pipelined)
(:width pipelined)
(:height pipelined)
(:connected pipelined)
(:head pipelined)
(:then pipelined)
(:syms-used pipelined)




(defn get-name-tree [form]
  (w/prewalk #(if (literal? %) (str %) %)
             form))
(defn get-uuid-tree [form]
  (w/prewalk #(if (literal? %) (keyword (gensym "node-")) %)
             form))



(defn form-to-graph [form]
  (let [uuid-tree (get-uuid-tree form)
        name-tree (get-name-tree form)
        uuid-tree-seq (tree-seq seq? rest uuid-tree)
        name-tree-seq (tree-seq seq? rest name-tree)
        subgraphs (for [i (range (count uuid-tree-seq))]
                    (let [uuid-form (nth uuid-tree-seq i)
                          name-form (nth name-tree-seq i)]
                      (if (seq? uuid-form)
                        {(firstx uuid-form) {:name (firstx name-form)
                                             :edges-in (mapv #(hash-map
                                                                :start (firstx %)
                                                                :label nil) (rest uuid-form))}}
                        {(firstx uuid-form) {:name (firstx name-form)
                                             :edges-in []}})))
        graph (apply merge subgraphs)]
    graph))

(defn try-read [code-string]
  (try
    (read-string code-string)
    (catch js/Error e (str "caught exception: " e))))


;; special parser for the 'let' special form
;; This is likely to be the most used parser because
;; let allows easy labelling of edges

(defn fix-edge [{start :start label :label} naive-merged symbol-from]
  (let [start-name (:name (naive-merged start))]
    (if-let [end-uuid (symbol-from start-name)]
      {:start end-uuid
       :label start-name}
      {:start start
       :label label})))

(defn parse-defn-let [defn-let-form]
  (let
    [[_ func-name args let-form] defn-let-form
     [__ defs final-form] let-form
     duped-args (map #(list % %) args) ;; use args as structs and their own forms
     struct-form-pairs  (concat duped-args (partition 2 defs))
     structures  (vec (map first struct-form-pairs))
     forms    (-> struct-form-pairs
                  (#(map second %)) ;; get the forms
                  (vec)
                  (conj final-form)) ;; put the final form at the end
     symbols  (->> structures
                   (map wrap) ;; do this so the unwrapped symbols don't get removed
                   (map flatten)
                   (map #(filter symbol? %))
                   (map #(map str %))
                   (vec)
                   (#(conj % (list "final")))) ;; add a dummy symbol for the final form
     graphs (map form-to-graph forms)
     naive-merged  (apply merge graphs)
     end-uuids  (map #(first (keys %)) graphs) ;; because the first node is always the end node
     ;;         nodes  (apply merge (map vals graphs))
     ;;         edges (apply concat (map :edges graphs))
     end-uuids-rep-syms (apply concat (map #(repeat (count %1) %2) symbols end-uuids))
     symbol-from   (zipmap (flatten symbols) end-uuids-rep-syms)
     ;; ^ this tells us the uuid of the node that each symbol node is the child of
     arg-node-uuids (flatten (map keys (take (count args) graphs)))
     symbols-removed (->> naive-merged
                          (remove (fn [[uuid {node-name :name edges-in :edges-in}]]
                                    (and (some #{node-name} (flatten symbols))
                                         (not (some #{uuid} arg-node-uuids)))))
                          (into {}))
     merged (->> symbols-removed
                 (map (fn [[uuid node]]
                        {uuid (update
                          node
                          :edges-in
                          (fn [edges-in]
                            (mapv #(fix-edge % naive-merged symbol-from)
                                 edges-in)))}))
                 (apply merge ))]
              merged))
