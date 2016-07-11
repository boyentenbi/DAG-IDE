(ns vide.components
  (:require [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]
;;             [reanimated.core :as anim]
            [cljs.reader :refer [read-string]]
            [clojure.set :refer [rename-keys]]
;;             [slurp.core :include-macros true :refer [slurp]]
            [vide.helpers :refer [try-read do-prn drop-nth find-indices first? firstx evalx]]
            [vide.drawer :refer [childless? get-best-layers coords-from-layers get-hltd]]
            [vide.parser :refer [parse-defn-let]]
            ))
;; ----------------------------------------style params----------------------------------------------

(enable-console-print!)

(def scale 100)
(def node-h (* 0.09 scale))
(def node-w (* 0.12 scale))
(def offset-right (* 0.4 scale))
(def offset-down (* 1 scale))
(def spacing-right (* 0.22 scale))
(def spacing-down (* 0.18 scale))
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

;; ---------------------------------------- node definitions ----------------------------------------------

(def node-defs-atom (atom {}))
(def pretend-code
  (str
    "(defn double [x] (let [y (+ x x)] y))"
    "(defn inc-vec [myvec] (let [incd (map inc myvec)] incd))"
    "(defn double-vec [myvec] (let [doubled (map double myvec)] doubled))"
    ;;     "(defn dupe [x] (let [duped [x x]] duped))"
    "(defn incincinc [x] (let [y (+ x x) \n
    a (inc y) \n
    b (inc a) \n
    c (inc b) \n
    d (inc c) \n
                       e (inc d)] y))"))
(defn load-node-defs []
  (let [code pretend-code
        forms  (read-string (str \( pretend-code \) ))
        defn-let-forms (filter #(= 'defn (first %)) forms) ;; for now this should be all there is
        names (map #(str (second %)) defn-let-forms)
        codes (map str defn-let-forms) ;;that name lol
        defs (map #(hash-map :code %) codes)
        node-defs (zipmap names defs)]
    (reset! node-defs-atom node-defs)))

(load-node-defs)

;; ---------------------------------------- node history ----------------------------------------------

(def node-history-atom (atom '()))

;; ---------------------------------------- codemirror state ----------------------------------------------

(def cm-atom (atom (js/CodeMirror.
                     (.createElement js/document "div")
                     (clj->js {:mode "clojure"
                               ;;                        :lineNumbers true
                               ;;                        :theme "pastel-on-dark"
                               :cursorHeight 0.85
                               :lineWrapping true
                               :autoMatchParens true
                               }))))
(defn on-cm-update []
  (fn [this]
    (when-let [current-node (first @node-history-atom)]
      (let [new-text (.getValue this)

            compiled (try-read new-text)
            ;;                   [_ func-name args let-form] value
            ;;                   new-node-history (-> @node-history-atom
            ;;                                        (drop-last)
            ;;                                        (vec)
            ;;                                        (conj (str func-name)))
            ]
        (swap! node-defs-atom #(assoc-in % [current-node :code] new-text))
        (when compiled
          (let [{nodes :nodes
                 edges :edges} (parse-defn-let (try-read new-text))]

            (swap! node-defs-atom #(assoc-in % [current-node :nodes] nodes))
            (swap! node-defs-atom #(assoc-in % [current-node :edges] edges))))
        ;;                                         (reset! node-defs-atom
        ;;                                                 (rename-keys new-node-defs {current-node (str func-name)}))
        ;;                                         (reset! node-history-atom new-node-history))
        ))))
  (.on @cm-atom
       "change"
       (on-cm-update))
  (.setSize @cm-atom "100%" "100%" )
  (.refresh @cm-atom)

  ;; ---------------------------------------- given edge values ----------------------------------------------

  (def given-values-atom (atom {}))

  ;; -----------------------------------------functions---------------------------------------------


  (defn next-graph [node]
    (do
    (swap! node-history-atom #(conj (remove #{node} %) node))
    (.setValue @cm-atom (get-in @node-defs-atom [node :code]))))

(defn prev-graph []
  (do
    (swap! node-history-atom #(drop 1 %))

    (if-let [current-node (first @node-history-atom)]
      (.setValue @cm-atom (get-in @node-defs-atom [current-node :code]))
      (.setValue @cm-atom ""))))

(defn update-editor [wrapper-id]
  (fn [this]
    (when @cm-atom
      (when-let [node (or (js/document.getElementById wrapper-id)
                          (reagent/dom-node this))]
        (.appendChild node (.getWrapperElement @cm-atom))
        ))))

;; ----------------------------------------basic views----------------------------------------------

(defn node-view [x y node uuid]
  ;; appends the node idx to the focus path to get the correct node
  [:g  {:on-click #(next-graph node)
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

(defn arrowhead-view [x y th col]
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
               :style {:fill col
                       :opacity 1}}]))

(defn edge-view [x1 y1 x2 y2 label value]
  (let [arrowhead-x (+ (* 0.4 x1) (* 0.6 x2))
        arrowhead-y (+ (* 0.4 y1) (* 0.6 y2))
        th (+ 3.1416 (.atan js/Math (/ (- x2 x1) (- y2 y1))))
        col (if value "blue" arrow-fill)]
    [:g {:key (gensym (str "edge-"))
         }
     [:line {:x1 x1
             :y1 y1
             :x2 x2
             :y2 y2
             :style {:stroke col
                     :stroke-width 0.4
                     :opacity 1}}]
     (arrowhead-view arrowhead-x arrowhead-y th col)
     (when label
       [:text {:x (+ (* 0.36 font-size) arrowhead-x)
               :y (+ (* -1 0.15 font-size) arrowhead-y)
               :style {:font-size font-size
                       :font-family "Ubuntu"
                       :color col}} label value])]))

(defn button-view [text callback]
  [:button {:style {:background-color "#f44336"
                    :border "solid #f44336"
                    :border-radius "2px"
                    :color "white"
                    :text-align "center"
                    :text-decoration "none"
                    :display "inline-block"
                    :font-size 14
                    :padding "5px 16px"
                    :font-family "Ubuntu"}
            :on-click callback} text])

(defn dropdown-node [node]
  [:option {:key (gensym "dropdown-")
            :style {:outline "none"}} node])

;; ---------------------------------------- composite views ----------------------------------------------

(defn nodes-dropdown []
  [:select
   {:id "node-select"
    :on-change #(let [node (-> % .-target .-value)]
                  (next-graph node))
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

(defn space-edges [x1 y1 x2 y2 freq label hltd]
  (let [n-spaces (dec freq)
        left-adjust  (* -1 0.5 n-spaces same-edge-spacing)
        info-tuples (for [i (range freq)]
                      (vector (+ left-adjust x1 (* i same-edge-spacing))
                              y1
                              (+ left-adjust x2 (* i same-edge-spacing))
                              y2
                              (when (= i (dec freq))label)
                              hltd))]
    info-tuples))

(defn get-freq-info [hltd-edges edge-freq layers graph-height graph-width]
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
        value (get-in hltd-edges [(first edge-freq)]
                     )]
    [x1 y1 x2 y2 freq label value]))

(defn edge-input-view [x y edge-name graph-height graph-width edge]
  (let [graph-view  (js/document.getElementById "graph-view")
        parent-height (.-clientHeight graph-view)
        parent-width (.-clientWidth graph-view)
        ratio-w (/ parent-width (+ spacing-right graph-width))
        ratio-h (/ parent-height (+ spacing-down graph-height))
        ]
    [:div {:key (gensym "edge-input-")
           :style {:position "absolute"
                   :z-index 1
                   :left  (* x ratio-w)
                   :top   (* y ratio-h)
                   :display "inline"
                   :font-size (* font-size ratio-h)
                   }} edge-name
     [:input {:type "text"
              :style {:width (* ratio-w 3)
                      :height (* ratio-h 3)
                      ;;                       :position "absolute"
                      }
              :on-change (fn [this]
                           (swap!
                             given-values-atom
                             #(assoc % edge
                                (try-read (-> this .-target .-value)))))}]]))

(defn graph-view [nodes edges]
  (do (prn "rendering graph view")
    (let [uuids (keys nodes)
          layers (get-best-layers uuids edges)
          graph-height (* spacing-down (count layers))
          graph-width (* spacing-right (or (apply max (map count layers)) 0))
          edge-freqs  (frequencies edges)
          hltd-edges (do-prn (get-hltd edges  @given-values-atom))
          per-freq-infos (map #(get-freq-info hltd-edges % layers graph-height graph-width) edge-freqs)
          per-edge-infos (apply concat (map #(apply space-edges %) per-freq-infos))

          ;;         _ (.clientHeight (js/document.getElementById ))
          ]
      [:div {:id "graph-view"
             :style {
                      :width "100%"
                      :height "100%"}}
       [:svg
        {:width "100%"
         :height "100%"
         :view-box (str "0 "
                        "0 "
                        (+ spacing-right graph-width) " "
                        (+ spacing-down  graph-height))
         :style {:z-index -1}}

        (map
          (partial apply edge-view)
          per-edge-infos)

        (for [uuid uuids]
          (let [node (uuid nodes)
                [x y] (first (coords-from-layers uuid layers))] ;; use first because we assume there is only 1 of each node
            (node-view (+ graph-width (* -1 spacing-right x))
                       (+ graph-height (* -1 spacing-down y))
                       node
                       uuid)))]
       (let [edge-input-infos  (map (fn [edge-freq-info] (apply #(vector
                                                                   (+ (* 0.88 %1) (* 0.12 %3))
                                                                   (+ (* 0.88 %2) (* 0.12 %4))
                                                                   %6
                                                                   graph-height
                                                                   graph-width) edge-freq-info))
                                    per-freq-infos)]
         (map #(apply edge-input-view %)
              (map #(conj %1 %2) edge-input-infos (keys edge-freqs))))])))

(defn focus-view []
  (do (prn "rendering focus view")
    (let [current-node  (first @node-history-atom)
          ;;               code (get-in @node-defs-atom [current-node :code])
          {nodes :nodes
           edges :edges
           code :code}  (when current-node (@node-defs-atom current-node))]
      [:div {:style {
                      :position "absolute"
                      :right 10
                      :top 0
                      :height "100%"
                      :width "48%"}}
       [:div {:style {:position "absolute"
                      :left 10
                      :top 10}}
        (button-view "back" #(prev-graph))]
       [:p {:style {:position "absolute"
                    :top 50
                    :left 20
                    :font-size 30
                    :font-family "Ubuntu"}} current-node]
       (nodes-dropdown)
       (graph-view nodes edges)])))


(defn editor []
  (reagent/create-class
    {:reagent-render         (fn [] @cm-atom [:div {:id "cm-wrapper"
                                                    :style {:position "absolute"
                                                            :top 0
                                                            :left 0
                                                            :height "100%"
                                                            :width "50%"
                                                            :border-right "solid grey 2px"}
                                                    }])
     :component-did-update   (update-editor "cm-wrapper")
     :component-did-mount    (update-editor "cm-wrapper")}))

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





