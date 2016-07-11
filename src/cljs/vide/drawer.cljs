(ns vide.drawer
  (:require
    [vide.helpers :refer [do-prn drop-nth find-indices first? firstx evalx]]))

(defn childless? [edges uuid]
  (nil? (some #(= uuid (:start %)) edges)))


(defn find-childless [uuids edges]
  (filter #(childless? edges %) uuids))

(defn has-child-in [uuid layer edges]
  (let [possible-edges (map #(hash-map :start uuid :end %) layer)
        unlabelled-edges (map #(dissoc % :label) edges)]
    (some (set unlabelled-edges) possible-edges)))

(defn get-layer-idx [uuid layers edges checking-idx]
  (if (= checking-idx -1)
    0
    (if (has-child-in uuid (nth layers checking-idx) edges)
      (inc checking-idx)
      (recur uuid layers edges (dec checking-idx)))))

;; Sort the nodes into layers recursively: first remove a node which has no children in
;; 'remaining-uuids' (by checking 'remaining-edges'), then remove all edges it is the end
;; node of from 'remaining-edges'. Place the node in a new layer if it has children in the
;; uppermost layer. If it doesn't, descend layers until we reach one above a layer in which
;; it does have children, or the 0th layer.
(defn get-layers-inner [remaining-uuids layers remaining-edges all-edges]
  (if (empty? remaining-uuids)
    layers
    (let [uuid (first (find-childless remaining-uuids remaining-edges))
          n-layers (count layers)
          layer-idx (get-layer-idx uuid layers all-edges (dec n-layers))
          unsorted-new (remove #{uuid} remaining-uuids)
          layers-new (if (= layer-idx n-layers)
                       (conj layers [uuid])
                       (assoc layers layer-idx (conj (nth layers layer-idx) uuid)))
          edges-new (vec (remove #(= (:end %) uuid) remaining-edges))]
      (recur unsorted-new layers-new  edges-new all-edges))))

;; Wrap the recursive 'get-layers-inner' function so it uses less args, and take nodes instead of idxs
(defn get-layers [uuids all-edges]
  (get-layers-inner uuids [] all-edges all-edges))

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

(defn get-edge-cost [edge layers]
  (let [{start :start end :end label :label} edge
        [x1 y1] (apply concat (coords-from-layers start layers))
        [x2 y2] (apply concat (coords-from-layers end layers))
        x-diff (- x2 x1)
        cost (* x-diff x-diff)]
    cost))
(defn get-total-cost [layers edges]
  (reduce + (map #(get-edge-cost % layers) edges)))


;; Greedily search through orderings of each layer to minimize a simple square distance
(defn sort-layers-from [n layers edges]
  (if (<= n 0)
    layers
    (let [layer (nth layers n)
          perms (get-perms layer)
          possible-layers (map #(assoc layers n %) perms)
          best-layers (apply (partial min-key #(get-total-cost % edges)) possible-layers)]
      (recur (dec n) best-layers edges))))

(defn get-best-layers [uuids all-edges]
  (let [init-layers (get-layers uuids all-edges)
        n-layers (count init-layers)
        best-layers (sort-layers-from (dec n-layers) init-layers all-edges)]
    best-layers))

(defn find-hltd [edges hltd]
  (let [not-hltd (remove (set hltd) edges)
         input-edges (filter #(not-any? #{(:start %)} (map :end not-hltd)) not-hltd )
;;         hltable-edges (remove (set input-edges) init-not-hltd)
        ]
    (loop [not-hltd not-hltd
           hltd hltd]
      (let [poss-add-hltd (filter #(not-any? #{(:start %)} (map :end not-hltd)) not-hltd)
            add-hltd (remove (set input-edges) poss-add-hltd)]
        (if (empty? add-hltd)
          hltd
          (recur (remove #{add-hltd} not-hltd) (concat hltd add-hltd)))))))
