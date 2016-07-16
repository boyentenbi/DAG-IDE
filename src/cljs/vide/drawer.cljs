(ns vide.drawer
  (:require
    [vide.helpers :refer [eval-str try-read try-eval do-prn drop-nth find-indices first? firstx evalx]]))

(defn childless? [uuid subgraph]
  (not-any?  #{uuid} (->> subgraph
                          (map :edges-in)
                          (apply concat)
                          (map :start))))

(defn find-childless [graph-remaining]
  (filter #(childless? % (vals graph-remaining)) (keys graph-remaining)))

(defn has-child-in [uuid layer edges]
  (let [possible-edges (map #(hash-map :start uuid :end %) layer)
        unlabelled-edges (map #(dissoc % :label) edges)]
    (some (set unlabelled-edges) possible-edges)))

(defn get-layer-idx [uuid layers checking-idx graph]
  (if (= checking-idx -1)
    0
    (if (childless? uuid (map graph (nth layers checking-idx)))
      (recur uuid layers (dec checking-idx) graph)
      (inc checking-idx))))

;; Sort the nodes into layers recursively: first remove a node which has no children in
;; 'remaining-uuids' (by checking 'remaining-edges'), then remove all edges it is the end
;; node of from 'remaining-edges'. Place the node in a new layer if it has children in the
;; uppermost layer. If it doesn't, descend layers until we reach one above a layer in which
;; it does have children, or the 0th layer.
(defn get-layers-inner [graph-remaining layers graph]
  (if (empty? graph-remaining)
    layers
    (let [uuid (first (find-childless graph-remaining))
          n-layers (count layers)
          layer-idx (get-layer-idx uuid layers (dec n-layers) graph)
          graph-remaining-new (dissoc graph-remaining uuid)
          layers-new (if (= layer-idx n-layers)
                       (conj layers [uuid])
                       (update layers layer-idx #(conj % uuid)))]
      (recur graph-remaining-new layers-new graph))))

;; Wrap the recursive 'get-layers-inner' function so it uses less args, and take nodes instead of idxs
(defn get-layers [graph]
 (vec (reverse (get-layers-inner graph [] graph))))

;; Get the coordinates of a node given the layers and the layer index
(defn coords-from-layer-idx [uuid layers layer-idx]
  (let [layer (nth layers layer-idx)
        x-coords (find-indices #(= uuid %) layer)
        pairs (map #(vec (list % layer-idx)) x-coords)]
    pairs))

;; Get the coordinates of a node in the layers
(defn coords-from-layers [uuid layers]
  (let [layer-idxs (find-indices #(some #{uuid} %) layers)
        wrapped-coords (map #(coords-from-layer-idx uuid layers %) layer-idxs)]
    (apply concat wrapped-coords)))

(defn remove-one [x mylist]
  (let [[n m] (split-with (partial not= x) mylist)] (concat n (rest m))))

(defn get-perms [mylist]
  (if (empty? mylist)
    [[]]
    (vec (apply concat
                (for [x mylist]
                  (map #(conj % x) (get-perms (remove-one x mylist))))))))

(defn get-node-cost [node layers]
  (let [[end {node-name :name edges-in :edges-in}] node
        end-x (first (apply concat (coords-from-layers end layers)))
        start-xs (map #(first (apply concat (coords-from-layers % layers))) (map :start edges-in))
        x-diffs (map #(- end-x %) start-xs)
        sq-x-diffs (map #(* % %) x-diffs)
        cost (reduce + sq-x-diffs)]
    cost))

(defn get-graph-cost [layers graph]
  (reduce + (map #(get-node-cost % layers) graph)))

;; Greedily search through orderings of each layer to minimize a simple square distance
(defn sort-layers-from [n layers graph]
  (if (<= n 0)
    layers
    (let [layer (nth layers n)
          perms (get-perms layer)
          possible-layers (map #(assoc layers n %) perms)
          best-layers (apply (partial min-key #(get-graph-cost % graph)) possible-layers)]
      (recur (dec n) best-layers graph))))

(defn get-best-layers [graph]
  (let [init-layers (get-layers graph)
        n-layers (count init-layers)
        best-layers (sort-layers-from (dec n-layers) init-layers graph)]
    best-layers))

(defn get-activated [graph node-activations node-defs-atom]
  (let [node-activations-new
        (->>  (apply (partial dissoc graph) (keys node-activations))
              (map (fn [[end {end-name :name edges-in :edges-in}]]
                     (let [parent-uuids (map :start edges-in)]
                       (when (and (seq parent-uuids)
                                  (every? node-activations parent-uuids))
                         (let [func (if-let [user-node (@node-defs-atom end-name)]
                                      (:fn user-node)
                                      (when-let [func  (try-eval (try-read end-name))]
                                        (swap! node-defs-atom #(assoc-in % [end-name :fn] func))
                                        (prn "added " end-name " to node-defs")
                                        func))
                               args  (map node-activations parent-uuids)]
                           [end (or (apply  func args)
;;                                   (try-eval (cons func args))
                                    )])))))
              (remove nil?)
              (into {})
              (merge node-activations))]
    (if (= node-activations node-activations-new)
      node-activations
      (recur graph node-activations-new node-defs-atom)
      )))

;;         hlts (merge (zipmap edges (repeat (count edges) nil)) hltd)
;;         input-edges  (filter #(not-any? #{(:start %)} (map :end edges)) edges)
;;         ;;         hltable-edges (remove (set input-edges) init-not-hltd)
;;         ]
;;     (loop [hlts hlts]
;;       (let [not-hltd (into {} (filter #(nil? (val %)) hlts ))
;;              poss-add-hltd  (into {}
;;                                   (filter #(not-any? #{(:start (first %))} (map :end (keys not-hltd))) not-hltd))
;;             add-hltd (apply (partial dissoc poss-add-hltd)  input-edges)
;; ;;             active-nodes (distinc)
;;             with-vals (zipmap (keys add-hltd) (repeat (count add-hltd) 1)) ;; this is the part where you calculate the values and assoc them in
;;             ]
;;         (if (empty? add-hltd)
;;           hlts
;;           (recur (merge hlts with-vals)))))))
