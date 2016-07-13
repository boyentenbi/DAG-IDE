(ns vide.parser
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [clojure.walk :as w]
;;             [vide.helpers :refer [wrap]]
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

;; ;; Follow the edge until we reach the end of the path
;; ;; This terminates because we have a DAG
;; ;; The result is determined uniquely by the edges because the DAG has a single childless node,
;; ;; by nature of Lisp
;; (defn find-end [edge-idx edges]
;;   (let [edge (nth edges edge-idx)
;;         node-uuid (last edge)
;;         next-edge-idx (first (find-indices #(=(first %) node-uuid) edges))]
;;     (if next-edge-idx
;;       (recur next-edge-idx edges)
;;       node-uuid)))



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
                 (apply merge ))

     ;;         mega-graph (apply merge
     ;;                           (map
              ;;                             (fn [graph]
              ;;                               (into {}
              ;;                                     (map
              ;;                                       (fn [[uuid {node-name :name parent-nodes :parents}]]
              ;;                                         (if-let [end-uuid (symbol-from node-name)]
              ;;                                           [end-uuid {:name node-name :parents parent-nodes}]
              ;;                                           [uuid {:name node-name :parents parent-nodes}]))
              ;;                                       graph)))
              ;;                             graphs))

              ;;         get-uuids  (invert-noninj nodes)
              ;;         ;; ^ this tells us ALL the uuids with a particular node name
              ;;         symbol-uuids (map get-uuids (flatten symbols)) ;; the uuids of nodes for each symbol
              ;;         end-uuids-rep-syms-uses (flatten
              ;;                                   (map #(repeat (count %1) %2)
              ;;                                        symbol-uuids
              ;;                                        end-uuids-rep-syms))
              ;;         replace-symbol-uuid  (zipmap (flatten symbol-uuids) end-uuids-rep-syms-uses)
              ;;         replace-uuid #(or (replace-symbol-uuid %) %)
              ;;         symbol-nodes (select-keys nodes (flatten symbol-uuids))
              ;;         edges-fixed (map
              ;;                               #(merge
              ;;                                  (zipmap [:start :end] (map replace-uuid %))
              ;;                                  {:label (symbol-nodes (first %))})
              ;;                               edges)
              ;;         arg-node-uuids (keys (apply merge (map :nodes (take (count args) graphs))))
              ;;         node-uuids-to-remove (remove (set arg-node-uuids) (flatten symbol-uuids)) ;; all symbol nodes except args
              ;;         nodes-fixed (apply (partial dissoc nodes) node-uuids-to-remove) ;; remove the symbol nodes
              ;;         graph {:nodes nodes-fixed :edges (vec edges-fixed)}
              ]
              merged))
