(ns vide.parser
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [clojure.walk :as w]
            [cljs.js :refer [eval empty-state js-eval]]
            [cljs.reader :refer [read-string]]
            [vide.helpers :refer [replace-seqs do-prn drop-nth
                                 find-indices first? firstx evalx wrap invert-noninj]]
            ))


(defn literal? [form]
    (cond
      (not (sequential? form)) true ;; obviously
      (and (list? form) (ifn? (first form))) false

      (some false? (map literal? form)) false
      :else true))

(map literal? [identity 1 'a :a "a" + map '(inc 1) '(1 2 3) [:a :b :c] {:a 1 :b 2}
               '(+ 1 1) '(reverse [1 2]) ['(+ 1 1) 1]])
;; (prn (map literal? [a 'a :a 1 [1 2 3] '(1 2 3) '(+ 1 2 3)]))



(defn get-name-tree [form]
  (w/prewalk #(if (literal? %) (str %) %)
             form))
(defn get-uuid-tree [form]
  (w/prewalk #(if (literal? %) (keyword (gensym "node-")) %)
             form))

(defn form-to-graph [form]
  (let [uuid-tree (get-uuid-tree form)
        name-tree (get-name-tree form)
        nodes (zipmap (flatten (list uuid-tree)) (flatten (list name-tree)))
        uuid-tree-seq (tree-seq seq? identity uuid-tree)
        edges (apply concat (for [form uuid-tree-seq]
                              (when (seq? form)
                                (map #(vector (firstx %) (firstx form)) (rest form)))))]
    {:nodes nodes :edges (vec edges)}))

(defn try-read [code-string]
  (try
    (read-string code-string)
    (catch js/Error e (str "caught exception: " e))))

;; Follow the edge until we reach the end of the path
;; This terminates because we have a DAG
;; The result is determined uniquely by the edges because the DAG has a single childless node,
;; by nature of Lisp
(defn find-end [edge-idx edges]
  (let [edge (nth edges edge-idx)
        node-uuid (last edge)
        next-edge-idx (first (find-indices #(=(first %) node-uuid) edges))]
    (if next-edge-idx
      (recur next-edge-idx edges)
      node-uuid)))



;; special parser for the 'let' special form
;; This is likely to be the most used parser because
;; let allows easy labelling of edges

(defn parse-defn-let [defn-let-form]
  (let [[_ func-name args let-form] defn-let-form
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
        end-uuids (map #(first (keys (:nodes %))) graphs) ;; because the first node is always the end node
        nodes  (apply merge (map :nodes graphs))
        edges (apply concat (map :edges graphs))
        end-uuids-rep-syms (apply concat (map #(repeat (count %1) %2) symbols end-uuids))
        symbol-from  (zipmap (flatten symbols) end-uuids-rep-syms)
        ;; ^ this tells us the uuid of the node that each symbol node is the child of
        get-uuids  (invert-noninj nodes)
        ;; ^ this tells us ALL the uuids with a particular node name
        symbol-uuids (map get-uuids (flatten symbols)) ;; the uuids of nodes for each symbol
        end-uuids-rep-syms-uses (flatten (map #(repeat (count %1) %2) symbol-uuids end-uuids-rep-syms))
        replace-symbol-uuid  (zipmap (flatten symbol-uuids) end-uuids-rep-syms-uses)
        uuid-identity (zipmap (keys nodes) (keys nodes))
        replace-uuid (merge uuid-identity replace-symbol-uuid)
        edges-fixed (map #(vec(map replace-uuid %)) edges)
        arg-node-uuids (keys (apply merge (map :nodes (take (count args) graphs))))
        node-uuids-to-remove (remove (set arg-node-uuids) (flatten symbol-uuids)) ;; all symbol nodes except args
        nodes-fixed (apply (partial dissoc nodes) node-uuids-to-remove) ;; remove the symbol nodes
        graph {:nodes nodes-fixed :edges (vec edges-fixed)}]
    graph))

;; (def dupe-defn (read-string "(defn dupe [x] (let [duped [x x]] duped))"))
;; (def let-form (nth dupe-defn 3))
;; replace-seqs
;; (def defs (nth let-form 1))
;; (def final-form (nth let-form 2))
;; (def struct-form-pairs (partition 2 defs))
;; (def structures (vec (map first struct-form-pairs)))
;; (def forms  (map replace-seqs (conj (vec (map second struct-form-pairs)) final-form)))
;; (def symbols (->> structures
;;              (map wrap) ;; do this so the unwrapped symbols don't get removed
;;              (map flatten)
;;              (map #(filter symbol? %))
;;              (map #(map str %))
;;              (vec)
;;              (#(conj % (list "final"))))) ;; add a dummy symbol for the final form
;; (def graphs (map form-to-graph forms))
;; (def end-uuids (map #(first (keys (:nodes %))) graphs)) ;; because the first node is always the end node
;; (def nodes  (apply merge (map :nodes graphs)))
;; (def edges (apply concat (map :edges graphs)))
;; (def end-uuids-rep-syms (apply concat (map #(repeat (count %1) %2) symbols end-uuids)))
;; (def symbol-from (zipmap (flatten symbols) end-uuids-rep-syms))
;; ;; ^ this tells us the uuid of the node that each symbol node is the child of
;; (def get-uuids (invert-noninj nodes))
;; ;; ^ this tells us ALL the uuids with a particular node name
;; (def symbol-uuids (map get-uuids (flatten symbols))) ;; the uuids of nodes for each symbol
;; (def end-uuids-rep-syms-uses (flatten (map #(repeat (count %1) %2) symbol-uuids end-uuids-rep-syms)))
;; (def replace-symbol-uuid (zipmap (flatten symbol-uuids) end-uuids-rep-syms-uses))
;; (def uuid-identity (zipmap (keys nodes) (keys nodes)))
;; (def replace-uuid (merge uuid-identity replace-symbol-uuid))
;; (def edges-fixed (map #(vec(map replace-uuid %)) edges))
;; (def nodes-fixed (apply (partial dissoc nodes) (flatten symbol-uuids))) ;; remove the symbol nodes
;; (def graph {:nodes nodes-fixed :edges (vec edges-fixed)})
