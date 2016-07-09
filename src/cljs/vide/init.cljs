(ns vide.init
  (:require [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]
;;             [reanimated.core :as anim]
            [cljs.reader :refer [read-string]]
            [clojure.set :refer [rename-keys]]
;;             [slurp.core :include-macros true :refer [slurp]]
            [vide.helpers :refer [try-read do-prn drop-nth find-indices first? firstx evalx]]
            [vide.drawer :refer [childless? get-best-layers coords-from-layers]]
            [vide.parser :refer [parse-defn-let]]
            ))


(enable-console-print!)

(def scale 100)
(def node-h (* 0.12 scale))
(def node-w (* 0.15 scale))
(def offset-right (* 0.4 scale))
(def offset-down (* 1 scale))
(def spacing-right (* 0.22 scale))
(def spacing-down (* 0.25 scale))
(def font-size 3)
(def same-edge-spacing (* 0.3 node-w))
(def arrowhead-angle (/ 6.283 20))
(def arrowhead-l (* 0.12 spacing-down))
(def node-style {:fill "white"
                   :stroke "orange"
                   :stroke-width 0.8
                   :opacity 1})
(def node-text "black")
(def arrow-fill "black")
(def button-)

(def pretend-code
  (str
    "(defn double [x] (let [y (+ x x)] y))"
    "(defn inc-vec [myvec] (let [incd (map inc myvec)] incd))"
    "(defn double-vec [myvec] (let [doubled (map double myvec)] doubled))"
    ;;     "(defn dupe [x] (let [duped [x x]] duped))"
    )
  )

;; ----------------------------------------all the state----------------------------------------------
;; The "database" of your client side UI.
(def app-state
  (atom
    {;; These only change when you modify the graph
      :node-defs {}
      :node-history [] ;; Makes it easier to get previous node (instead of using idx history)
      }))

(def compiled-state
  (atom nil))

(def focus-state
  (atom {:nodes [] :edges []})) ;; we need this so we can keep the graph when the code is invalid
;; ----------------------------------------------------------------------------------------------------


(defn update-state [key-list value]
  (swap! app-state #(assoc-in % key-list value)))


(defn next-graph [node node-defs-atom node-history-atom cm-atom]
  (do
    (swap! node-history-atom #(conj (remove #{node} %) node))
    (.setValue @cm-atom (@node-defs-atom node))))

(defn prev-graph [node-defs-atom node-history-atom cm-atom]
  (do
    (swap! node-history-atom #(drop 1 %))

    (if-let [current-node (first @node-history-atom)]
      (.setValue @cm-atom (@node-defs-atom current-node))
      (.setValue @cm-atom ""))))

(defn load-node-defs [node-defs-atom]
  (let [code pretend-code
        forms  (read-string (str \( pretend-code \) ))
        defn-let-forms (filter #(= 'defn (first %)) forms) ;; for now this should be all there is
        names (map #(str (second %)) defn-let-forms)
        codes (map str defn-let-forms) ;;that name lol
        node-defs (zipmap names codes)]
    (reset! node-defs-atom node-defs)))

(defn node-view [x y node uuid node-defs-atom node-history-atom cm-atom]
  ;; appends the node idx to the focus path to get the correct node
  [:g  {:on-click #(next-graph node node-defs-atom node-history-atom cm-atom)
        :key uuid}
   [:rect {:width node-w
           :height node-h
           :x x
           :y y
           :style node-style}]
   [:text {:x (+ x (* 0.35 font-size))
           :y (+ y (* 1.15 font-size))
           :style {:fill node-text
                    :font-size font-size
                   :font-family "Ubuntu"}}
    node]])

(defn arrowhead-view [x y th]
  (let [p1 (str x "," y)
        a2 (+ th arrowhead-angle)
        a3 (- th arrowhead-angle)
        x2 (+ x (* arrowhead-l (.sin js/Math a2)))
        y2 (+ y ( * arrowhead-l (.cos js/Math a2)))
        p2 (str x2 "," y2)
        x3 (+ x (* arrowhead-l (.sin js/Math a3)))
        y3 (+ y ( * arrowhead-l (.cos js/Math a3)))
        p3 (str x3 "," y3)]
    [:polygon {:points (str p1 " " p2 " " p3)
               :style {:fill arrow-fill}}]))

(defn edge-view [x1 y1 x2 y2 label]
  (let [_ (prn (str x1 y1 x2 y2 label))
         arrowhead-x (+ (* 0.4 x1) (* 0.6 x2))
        arrowhead-y (+ (* 0.4 y1) (* 0.6 y2))
        th (+ 3.1416 (.atan js/Math (/ (- x2 x1) (- y2 y1))))]
    [:g {:key (gensym (str "edge-"))}
     [:line {:x1 x1
             :y1 y1
             :x2 x2
             :y2 y2
             :style {:stroke arrow-fill
                     :stroke-width 0.3
                     :opacity 1}}]
     (arrowhead-view arrowhead-x arrowhead-y th)
     (when label
       [:text {:x (+ (* 0.36 font-size) arrowhead-x)
               :y (+ (* -1 0.3 font-size) arrowhead-y)
               :style {:font-size font-size
                       :font-family "Ubuntu"}} label])]))

(defn button-view [text callback]
  [:button {:style {:background-color "#f44336"
                    :border "solid #f44336"
                    :border-radius "2px"
                    :color "white"
                    :text-align "center"
                    :text-decoration "none"
                    :display "inline-block"
                    :font-size 14
                    :padding "8px 16px"
                    :font-family "Ubuntu"}
            :on-click callback} text])

(defn dropdown-node [node]
  [:option {:key (gensym "dropdown-")
            :style {:outline "none"}} node])

(defn nodes-dropdown [node-defs-atom  node-history-atom cm-atom]
  [:select
   {:id "node-select"
    :on-change #(let [node (-> % .-target .-value)]
                          (next-graph node node-defs-atom
                                      node-history-atom  cm-atom))

    :style {:list-style-type "none"
            :right 10
            :top 10
            :outline "none"
            :position "absolute"
            :background-color "orange"
            :border "solid orange"
            :border-radius "2px"
            :color "white"
            :text-align "left"
            :text-decoration "none"
            :display "inline-block"
            :font-family "Ubuntu"
            :width "40%"
            :font-size "12px"
            :padding "5px 16px"}}

   (conj (for [node (keys @node-defs-atom)]
     (dropdown-node node))
         [:option {:key "select-label"} "Choose node"])])

(defn space-edges [x1 y1 x2 y2 freq label]
  (let [n-spaces (dec freq)
        left-adjust  (* -1 0.5 n-spaces same-edge-spacing)
        info-tuples (map #(vector (+ left-adjust x1 (* % same-edge-spacing))
                                 y1
                                 (+ left-adjust x2 (* % same-edge-spacing))
                                 y2
                                  label)
                        (range freq))]
     info-tuples))

(defn graph-view [nodes edges node-defs-atom node-history-atom cm-atom]
  (let [uuids (keys nodes)
        layers (get-best-layers uuids edges)
        graph-height (* spacing-down (count layers))
        graph-width (* spacing-right (or (apply max (map count layers)) 0))
        edge-freqs  (frequencies edges)]
    [:svg
     {:width "100%"
      :height "100%"
      :view-box (str "0 "
                     "0 "
                     (+ spacing-right graph-width) " "
                     (+ spacing-down graph-height))}
     (concat
       (apply concat (map
                       (fn [edge-freq]
                         (let [[{start :start end :end label :label} freq] edge-freq
                               [x1-rel y1-rel] (first (coords-from-layers start layers))
                               [x2-rel y2-rel] (first (coords-from-layers end layers))
                               x1 (-> x1-rel
                                      (* spacing-right -1)
                                      (+ graph-width (* 0.5 node-w)))
                               y1 (-> y1-rel
                                      (* spacing-down -1)
                                      (+ graph-height node-h))
                               x2 (-> x2-rel
                                      (* spacing-right -1)
                                      (+ graph-width (* 0.5 node-w)))
                               y2 (-> y2-rel
                                      (* spacing-down -1)
                                      (+ graph-height))
                               info-tuples  (space-edges x1 y1 x2 y2 freq label)]
                           (map (partial apply edge-view) info-tuples)))
                       edge-freqs)))
     (doall (for [uuid uuids]
              (let [node (uuid nodes)
                    [x y] (first (coords-from-layers uuid layers))] ;; use first because we assume there is only 1 of each node
                (node-view (+ graph-width (* -1 spacing-right x))
                           (+ graph-height (* -1 spacing-down y))
                           node
                           uuid
                           node-defs-atom
                           node-history-atom
                           cm-atom))))]))

(defn focus-view [node-defs-atom node-history-atom cm-atom]
  (let [current-node  (first @node-history-atom)
        code (get-in @node-defs-atom [current-node])
        {nodes :nodes
         edges :edges}  (if current-node
                          (parse-defn-let (read-string code))
                          nil)]
    [:div {:style {
                    :position "absolute"
                    :right 10
                    :top 0
                    :height "100%"
                    :width "48%"}}
     [:div {:style {:position "absolute"
                    :left 10
                    :top 10}}
      (button-view "back" #(prev-graph node-defs-atom node-history-atom cm-atom))]
     [:p {:style {:position "absolute"
                  :top 80
                  :left 20
                  :font-size 30
                  :font-family "Ubuntu"}} current-node ]
     (nodes-dropdown node-defs-atom node-history-atom  cm-atom)
     [:div {:style {:position "absolute"
                    :left 10
                    :bottom 10}}
      (button-view "+" #())]
     (graph-view nodes edges node-defs-atom node-history-atom cm-atom)]))


;; (defn all-view []
;;   [:div
;;    [editor-view]
;;    [focus-view]
;;    ])


;; Render the root comp
;; (defn start []
;;   (render-component
;;     [all-view]
;;     (.getElementById js/document "root")))





