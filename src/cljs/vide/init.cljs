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
(def same-edge-spacing (* 0.15 node-w))
(def arrowhead-angle (/ 6.283 24))
(def arrowhead-l (* 0.15 spacing-down))

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
      :uuid-history [] ;; This changes every time you zoom/unzoom
      :node-history [] ;; Makes it easier to get previous node (instead of using idx history)
      }))

(def compiled-state
  (atom nil))

(def focus-state
  (atom {:nodes [] :edges []})) ;; we need this so we can keep the graph when the code is invalid
;; ----------------------------------------------------------------------------------------------------


(defn update-state [key-list value]
  (swap! app-state #(assoc-in % key-list value)))


(defn next-graph [uuid node uuid-history-atom node-history-atom ]
  (do
    (reset! uuid-history-atom (conj @uuid-history-atom uuid))
    (reset! node-history-atom (conj @node-history-atom node))))

(defn load-node-defs [node-defs-atom]
  (let [code pretend-code
        forms  (read-string (str \( pretend-code \) ))
        defn-let-forms (filter #(= 'defn (first %)) forms) ;; for now this should be all there is
        names (map #(str (second %)) defn-let-forms)
        codes (map str defn-let-forms) ;;that name lol
        node-defs (zipmap names codes)]
     (reset! node-defs-atom node-defs )))



;; (defn compiled-view []
;;     [:div {:style {:border "solid"
;;                   :padding "10 10 10 10"
;;                   :height "10%"
;;                   :width "100%"
;;                   :font-family "Ubuntu"
;;                   :font-size 14
;;                   :overflow-y "scroll"
;;                   }}
;;      (let [node-defs (:node-defs @app-state)
;;            current-node (last (:node-history @app-state))
;;             code-string (node-defs current-node)
;;            [compiled value] (try-read code-string)]
;;        (do
;;          (when compiled
;;            (reset! focus-state (parse-defn-let value)))
;;          (str value)))])

;; (defn editor-view [node-defs-atom node-history-atom]
;;   (let [node-defs @node-defs-atom
;;         node-history @node-history-atom
;;         current-node (last @node-history-atom)]
;;     [:div {:style {:position "absolute"
;;                    :height "84%"
;;                    :width "50%"
;;                    :left 10
;;                    :top 10}}
;;      [:textarea {
;;                   :value (node-defs current-node)
;;                   :placeholder "Write code here"
;;                   :overflow "scroll"
;;                   :wrap "soft"
;;                   :spellCheck "false"
;;                   :style {:height "100%"
;;                           :width "100%"
;;                           :font-size 14}
;;                   :on-change #(let [new-text (-> % .-target .-value)
;;                                     [compiled value] (try-read new-text)
;;                                     [_ func-name args let-form] value
;;                                     new-node-defs (assoc node-defs current-node new-text)
;;                                     new-node-history (-> node-history
;;                                                     (drop-last)
;;                                                     (vec)
;;                                                     (conj (str func-name)))]
;;                                 (do
;;                                   (reset! node-defs-atom new-node-defs)

;;                                   (when compiled
;;                                     (reset! node-defs-atom
;;                                             (rename-keys new-node-defs {current-node (str func-name)})))
;;                                     (reset! node-history-atom new-node-history)))}]]))

(defn node-view [x y node uuid uuid-history-atom node-history-atom] ;; appends the node idx to the focus path to get the correct node

  [:g  {:on-click #(next-graph uuid node uuid-history-atom node-history-atom)
        :key uuid}
   [:rect {:width node-w
           :height node-h
           :x x
           :y y
           :style {:fill "white"
                   :stroke "darkorange"
                   :stroke-width 1
                   :opacity 1}}]
   [:text {:x (+ x (* 0.35 font-size))
           :y (+ y (* 1.15 font-size))
           :style {:font-size font-size
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
        p3 (str x3 "," y3)
        ]
    [:polygon {:points (str p1 " " p2 " " p3)
               :style {:fill "black"}
;;                :key (gensym "arrowhead-")
               }
     ]))

(defn edge-view [x1 y1 x2 y2]
  [:g {:key (gensym (str "edge-"))}
   [:line {:x1 x1
          :y1 y1
          :x2 x2
          :y2 y2
          :style {:stroke "rgb(0,0,0)"
                  :stroke-width 0.3
                  :opacity 1}
          }]
   (arrowhead-view (+ (* 0.4 x1) (* 0.6 x2))
                   (+ (* 0.4 y1) (* 0.6 y2))
                   (+ 3.1416 (.atan js/Math (/ (- x2 x1) (- y2 y1)))))])

(defn button-view [text callback]
  [:button {:style {:background-color "#4CAF50"
                    :border "none"
                    :color "white"
                    :padding "15px 32px"
                    :text-align "center"
                    :text-decoration "none"
                    :display "inline-block"
                    :font-size "18px"
                    :font-family "Ubuntu"}
            :on-click callback} text])

(defn dropdown-node [node node-defs-atom uuid-history-atom node-history-atom cm-atom]
  [:li {
         :key (gensym "dropdown-")}
   [:button {:style {:background-color "#4CAF50"
                     :border "none"
                     :color "white"
                     :text-align "center"
                     :text-decoration "none"
                     :display "inline-block"
                     :font-size "16px"}
             :on-click #(do
                          (next-graph :placeholder-dropdown-uuid node
                                    uuid-history-atom node-history-atom)
                          (.setValue @cm-atom (@node-defs-atom node)))
             }
    node]])

(defn nodes-dropdown [node-defs-atom uuid-history-atom node-history-atom cm-atom]
  [:ul {:style {:list-style-type "none"
                :right 0
                :top 0
                :position "absolute"}}
   (for [node (keys @node-defs-atom)]
     (dropdown-node node node-defs-atom uuid-history-atom node-history-atom cm-atom))])

(defn space-edges [x1 y1 x2 y2 freq]
  (let [n-spaces (dec freq)
        left-adjust  (* -1 0.5 n-spaces same-edge-spacing)
        quadtuples (map #(vector (+ left-adjust x1 (* % same-edge-spacing))
                                 y1
                                 (+ left-adjust x2 (* % same-edge-spacing))
                                 y2)
                        (range freq))]
    quadtuples))

(defn graph-view [nodes edges uuid-history-atom node-history-atom]
  (let [uuids (keys nodes)
        layers  (get-best-layers uuids edges)
        graph-height (* spacing-down (count layers))
        graph-width (* spacing-right (apply max (map count layers)))
        edge-freqs  (frequencies edges)]
    [:svg
     {
       :width "100%"
       :height "100%"
       :view-box (str "0 "
                      "0 "
                      (+ spacing-right graph-width) " "
                      (+ spacing-down graph-height))}
     (concat
       (apply concat (map
                       (fn [edge-freq]
                         (let [[[start end] freq] edge-freq
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
                               quadtuples  (space-edges x1 y1 x2 y2 freq)]
                           (map (partial apply edge-view) quadtuples)))
                       edge-freqs)))
     (doall (for [uuid uuids]
              (let [node (uuid nodes)
                    [x y] (first (coords-from-layers uuid layers))] ;; use first because we assume there is only 1 of each node
                (node-view (+ graph-width (* -1 spacing-right x))
                           (+ graph-height (* -1 spacing-down y))
                           node
                           uuid
                           uuid-history-atom
                           node-history-atom))))]))

(defn focus-view [node-defs-atom uuid-history-atom node-history-atom cm-atom]
  (let [_ (prn "loading focus view")

         node-defs @node-defs-atom
        uuid-history @uuid-history-atom
        node-history @node-history-atom
        last-node  (last node-history)

        code (get-in node-defs [last-node])
        {nodes :nodes
         edges :edges}  (if last-node
                          (parse-defn-let (read-string code))
                          nil)
        ]

    [:div {:style {:border "solid"
                   :position "absolute"
                   :right 10
                   :top 10
                   :height "95%"
                   :width "45%"}}
     [:div {:style {:position "absolute"
                    :left 10
                    :top 10}}
      (button-view "back" #(do
                             (reset! uuid-history-atom (vec (drop-last uuid-history)))
                             (reset! uuid-history-atom (vec (drop-last node-history)))))
      ]
     [:p {:style {:position "absolute"
                  :top 50
                  :left 20
                  :font-size 30
                  :font-family "Ubuntu"}} last-node ]
     (nodes-dropdown node-defs-atom uuid-history-atom node-history-atom  cm-atom)
     [:div {:style {:position "absolute"
                    :left 10
                    :bottom 10}}
      (button-view "+" #())
      ]
     (graph-view nodes edges uuid-history-atom node-history-atom)]))


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





