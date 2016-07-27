(ns vide.components
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]
            [clojure.walk :as w]
;;             [reanimated.core :as anim]
            [cljs.reader :refer [read-string]]
            [clojure.set :refer [rename-keys]]
;;             [slurp.core :include-macros true :refer [slurp]]
            [vide.helpers :refer [try-eval try-read do-prn drop-nth find-indices first? firstx]]
            [vide.drawer :refer [childless? get-best-layers coords-from-layers get-activated]]
            [vide.parser :refer [parse-defn-let]]
            [vide.parser2 :refer [model-pipeline parse-defn assoc-coords get-height get-width]]
            ))
;; ----------------------------------------style params----------------------------------------------

(enable-console-print!)

(def node-h 9)
(def node-w 12)
(def spacing-right 22)
(def spacing-down 18)
(def font-size 2)
(def same-edge-spacing (* 0.3 node-w))
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
    "(defn square [x] (let [y (* x x)] y))"

    "(defn inc-vec [myvec] (let [incd (map inc myvec)] incd))"

;;     "(defn square-vec [myvec] (let [squared (map square myvec)] squared))"
    ;;     "(defn dupe [x] (let [duped [x x]] duped))"

    "(defn incincinc [x] (let [y (+ x x) \n
    a (inc y) \n
    b (inc a) \n
    c (inc b) \n] c))"

    "(defn higher [x y z] (let [a (+ x y)
                           b (repeat 5 z)
                           c  (conj b a)
                           d (map square c)
                           e (reduce + d)
                           u (identity e)] u))"

    "(defn fact [prod n] (if (= n 1)
                                   (identity prod)
                                   (let [prod-new  (* prod n)
                                         n-new (dec n)]
                                     (fact prod-new n-new))))"
    "(defn nested-let [x] (let [y (+ x x) a (inc y) b (dec (dec y)) c (repeat 5 (+ a b))]  c))"))

(defn load-node-defs []
  (let [code pretend-code
        forms  (read-string (str \( pretend-code \) ))
        defn-let-forms (filter #(= 'defn (first %)) forms) ;; for now this should be all there is
        names (map #(str (second %)) defn-let-forms)
        codes (map str defn-let-forms) ;;that name lol
        compiled-codes  (map try-read codes)
        evald-codes (map try-eval (map #(cons 'fn %) (map #(drop 1 %) compiled-codes)))
        defs (map #(hash-map :code %1 :fn %2) codes
                  evald-codes)
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
            evald (try-eval (cons 'fn (drop 1  compiled)))
            ]
        (swap! node-defs-atom #(assoc-in % [current-node :code] new-text))
        (when evald (swap! node-defs-atom #(assoc-in % [current-node :fn] evald)))
        (when-let [model (parse-defn (try-read new-text))]
            (do
              (swap! node-defs-atom #(assoc-in % [current-node :model] model))
;;               (doseq [node-name (map :name (vals model))]
;;                 (when-not #(some #{node-name} %) (keys @node-defs-atom)
;;                   (swap! node-defs-atom #(assoc-in % [node-name :fn] (try-read node-name)))
;;                   (prn "added " node-name " to node-defs"))
;;                 )
              )
          ))
      ;;                                         (reset! node-defs-atom
      ;;                                                 (rename-keys new-node-defs {current-node (str func-name)}))
      ;;                                         (reset! node-history-atom new-node-history))
      )))
(.on @cm-atom
     "change"
     (on-cm-update))
(.setSize @cm-atom "100%" "100%")
(.refresh @cm-atom)

;; ---------------------------------------- given edge values ----------------------------------------------

(def given-values-atom (atom {}))

;; -----------------------------------------functions---------------------------------------------

(defn next-graph [node]
  (do
    (swap! node-history-atom #(conj (remove #{node} %) node))
    (.setValue @cm-atom (get-in @node-defs-atom [node :code]))
    @node-history-atom))

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
  [:g
   {:on-click (when (@node-defs-atom node)
                #(next-graph node))
    :key uuid}
   [:rect {:width node-w
           :height node-h
           :x x
           :y y
           :style {:fill "white"
                   :stroke "orange"
                   :stroke-width 0.8
                   :opacity 1}}]
   [:text {:x (+ x (* 0.35 font-size))
           :y (+ y (* 1.15 font-size))
           :style {:fill node-text
                   :font-size font-size
                   :font-family "Ubuntu"}}
    node]])


(defn button-view [text callback]
  [:button {:style {:position "absolute"
                    :top 10
                    :left 10
                     :background-color "#f44336"
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
            :position "absolute"
            :right 10
            :top 10
            :outline "none"
            :background-color "orange"
            :border "solid orange"
            :border-radius "2px"
            :color "white"
            :text-align "left"
            :text-decoration "none"
            :display "inline-block"
            :font-family "Ubuntu"
            ;;             :width "40%"
            :font-size "14px"
            :padding "5px 16px"}}

   (conj (for [node (keys @node-defs-atom)]
           (dropdown-node node))
         [:option {:key "select-label"} "Choose node"])])

;; (defn edge-freq-view [x1 y1 x2 y2 freq label start]
;;   (let [bend-y (+ y1 (* 0.2 spacing-down))
;;         n-spaces (dec freq)
;;         left-adjust  (* -1 0.5 n-spaces same-edge-spacing)
;;         col "black"
;;         word-len (* -0.6 font-size (+ 0.7  (count label)))
;; ;;         value (reaction (@given-values-atom start))
;;         col (if (get-in @given-values-atom [start :compiled]) "#00ffff" arrow-fill)
;;         id (gensym (str "edge-"))]
;;     [:g {:key id
;;          :id id
;;          }
;;      [:line {:x1 x1
;;              :y1 y1
;;              :x2 x1
;;              :y2 bend-y
;;              :style {:stroke col
;;                      :stroke-linecap "round"
;;                      :stroke-width 0.4
;;                      :opacity 1}}]

;;      (for [i (range freq)]
;;        (let [end-x (+ left-adjust x2 (* i same-edge-spacing))
;;               arrowhead-x (+ (* 0.3 x1)     (* 0.7 end-x))
;;              arrowhead-y (+ (* 0.3 bend-y) (* 0.7 y2))
;;              th (+ 3.1416 (.atan js/Math (/ (- end-x x1) (- y2 bend-y))))]
;;          [:g {:key (gensym (str id "-end-"))}
;;           [:line {:x1 x1
;;                   :y1 bend-y
;;                   :x2 end-x
;;                   :y2 y2
;;                   :style {:stroke col
;;                           :stroke-width 0.4
;;                           :opacity 1}}]
;;           (arrowhead-view arrowhead-x arrowhead-y th col)]))

;;      (when label
;;        [:text {:x (+ x1 word-len)
;;                :y (+ (* 0.83 bend-y) (* 0.17 y1))
;;                :style {:font-size font-size
;;                        :font-family "Ubuntu"
;;                        :color col}}
;;         ;;         (str label " " value)
;;         label
;;         ])]))

(defn get-freq-info [edge-freq layers graph-height graph-width]
  (let [[{start :start end :end label :label} freq] edge-freq
        [x1-rel y1-rel] (first (coords-from-layers start layers))
        [x2-rel y2-rel] (first (coords-from-layers end layers))
        x1 (-> x1-rel
               (* spacing-right)
               (+  (* 0.5 node-w))
               )
        y1 (-> y1-rel
               (* spacing-down)
               (+  node-h)
               )
        x2 (-> x2-rel
               (* spacing-right)
               (+ (* 0.5 node-w))
               )
        y2 (-> y2-rel
               (* spacing-down)
               )
        ;;         value (activated start)
        ]
    [x1 y1 x2 y2 freq label start]))

(defn get-literal-nodes [graph]
  (->> graph
       (filter (fn [[uuid {node-name :name edges-in :edges-in}]]
                 (and
                   (empty? edges-in) ;; you cannot have parents if you are literal
                   (or (@node-defs-atom node-name)
                       (not (symbol? (try-read node-name))))
                   )))
       (into {})))

(defn get-family [ancs descs graph]
  (let [anc-parents  (->> (map graph ancs)
                          (map :edges-in)
                          (apply concat)
                          (map :start)
                          (distinct))
        desc-children  (->> graph
                            (filter (fn [[uuid {node-name :name edges-in :edges-in}]]
                                      (some (set descs) (map :start edges-in))))
                            (map first))
        ancs-new (distinct (concat ancs anc-parents))
        descs-new (distinct (concat descs desc-children))]
    (if (and (= ancs-new ancs)
             (= descs-new descs))
      (distinct (concat ancs descs))
      (recur ancs-new descs-new graph))))

(defn give-value [start input graph]
  (let [read-value  (try-read input)
        literal-nodes  (get-literal-nodes graph)
        invalidated-uuids (get-family [start] [start] graph)]

    (swap! given-values-atom #(apply (partial dissoc %) invalidated-uuids))
    (swap! given-values-atom #(assoc %
                                start
                                {:raw input :compiled read-value}))
    (doseq [[uuid {node-name :name edges-in :edges-in}] literal-nodes]
      (swap! given-values-atom
             #(assoc %
                uuid
                {:raw nil
                 :compiled (or (get-in @node-defs-atom [node-name :fn]
                                       (try-read node-name)))})))
    (let [given-values (zipmap (keys @given-values-atom)
                               (map :compiled (vals @given-values-atom)))
          activated  (get-activated graph given-values node-defs-atom)]
      (doseq [[uuid value] activated]
        (swap! given-values-atom #(assoc-in % [uuid :compiled] value))))))

(defn input-view [x y start graph graph-width graph-height]
  (let [signal (reaction (@given-values-atom start))
        value (str (or (:compiled @signal) (:raw @signal)))
        graph-view  (js/document.getElementById "graph-view")
        parent-height (.-clientHeight graph-view)
        parent-width (.-clientWidth graph-view)
        ratio-w (/ parent-width graph-width)
        ratio-h (/ parent-height graph-height)]
    [:input {:type "text"
             :key start
             :on-change
             (fn [this ]
               (let [input (-> this .-target .-value)]
                 (give-value start input graph)))
               :value  value
               :style {
                        :position "absolute"
                        :left  (* (- x (+ (* 0.5 (- node-w spacing-right)))) ratio-w)
                        :top   (* (- y (+ (* -0.05 spacing-down ) (* 0.5 (- node-h spacing-down)))) ratio-h)
                        :width (* ratio-h font-size 2.4)
                        :height (* ratio-h font-size 0.4)
                        :font-size (* ratio-h font-size 0.5)
                        }}]))



















(def graph-model (atom nil))

(def node-h2 0.46)
(def node-w2 0.6)
(def arrowhead-angle (/ 6.283 24))
(def arrowhead-l 0.15)
(def endpt-adjust ())

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

(defn edge-group [x1 y1 endpoints label]
  (let [col "black"
        bend-y (+ y1 0.15)]
    (vec
      (concat
      [:g
       [:line {:x1 x1
               :y1 y1
               :x2 x1
               :y2 bend-y
               :style {:stroke col
                       :stroke-width 0.016
                       :opacity 1}}]
       (when label
         [:text {:x (+ x1 0.05)
                 :y (+ y1 0.16)
                 :style {:font-size 0.15
                         :font-family "Ubuntu"
                         :color col}}
          label])]

         (for [[x2 y2] endpoints]
           (let [arrowhead-x (+ (* 0.4 x1)     (* 0.6 x2))
                 arrowhead-y (+ (* 0.4 bend-y) (* 0.6 y2))
                 th (+ 3.1416 (.atan js/Math (/ (- x2 x1) (- y2 bend-y))))]
              [:g
               [:line {:x1 x1
                      :y1 bend-y
                      :x2 x2
                      :y2 y2
                      :style {:stroke col
                              :stroke-width 0.016
                              :opacity 1}}]
              (arrowhead-view arrowhead-x arrowhead-y th col)]))
       ))))

(defn separator-view [x y w h]
  [:rect {:transform (str "translate(" x " " y ")")
          :width w
          :height h
          :stroke "black"
          :stroke-width 0.01
          :stroke-dasharray "0.01, 0.02"
          :fill "none"}])

(defn node-view2 [x y text]
  [:g {:transform (str "translate(" (+ x (* 0.5 (- 1 node-w2))) " " (+ y (* 0.5 (- 1 node-h2))) ")")}
   [:rect {:height node-h2 :width node-w2 :stroke-width 0.045 :stroke "orange" :fill "white"}]
   [:text {:transform (str "translate(" 0.06 " " 0.17 ")")} text]])

(defn if-view [if-model]
  (let [{:keys [height width coords-rel syms-used head pred then else]} if-model
        pred-height (get-height pred)
        else-width (get-width else)
        then-width (get-width then)]
    [:g {:transform (str "translate" coords-rel )}
     [:text (str head)]
     [:g
      (separator-view 0 0 width height)
      (separator-view 0 pred-height else-width (- height pred-height))
      (separator-view else-width pred-height then-width (- height pred-height))
      pred
      then
      else]]))

(defn let-view [let-model]
  (let [{:keys [height width coords-rel coords-abs syms-used head layers final]} let-model
        seqd (rest (tree-seq
                     #(and (map? %)
                           (:syms-used %))
                     #(or
                        (when-let [layers (:layers %)]
                          (conj
                            (for [layer layers
                                  pair layer]
                              (second pair))
                            (:final %)))
                        (:forms %)
                        (when-let [pred (:pred %)]
                          (seq (list pred (:then %) (:else %)))))
                     let-model))
        all-pairs (for [layer layers
                        pair layer] pair)
        syms-removed (vec (map second all-pairs))
        edge-groups
        (for [pair all-pairs]
          (let [[sym form] pair
                [form-x form-y] (get form :coords-rel)
                form-height (get form :height)
                form-width (get form :width)
                x1 (+ form-x (* 0.5 form-width))
                y1 (+ form-y (- form-height (* 0.5 (- 1 node-h2))))
                targets  (filter
                          (fn
                            [targ-form]
                            (when-let [targ-id (:id targ-form)]
                              (some #{sym} (targ-id (:syms-used targ-form))))) seqd)
                ;;                 _ (prn (str "targets = "
                ;;                             (map #(get % :head) targets )
                ;;                             " at "
                ;;                             (map #(get % :coords-abs) targets)))
                endpoints (for [target targets]
                            (map + [(* 0.5 (get-width target))
                                      (- (get-height target) (+ node-h2 (* 0.5 (- 1 node-h2))))]
                                   (map -  (get target :coords-abs) coords-abs)))
                edge-group  (edge-group x1 y1 endpoints sym)]
            edge-group))]
    (vec (concat [:g {:transform (str "translate" coords-rel)}
;;                   [:text (str head)]
;;                   (separator-view 0 0 width height)
                  ]
                 edge-groups
                 syms-removed
                 [final]))))

(defn basic-view [basic-model]
  (let [{:keys [height width coords-rel coords-abs syms-used head forms]} basic-model
        head-x (- (* 0.5 width) 0.5)
        head-y (dec height)
        ;;         _ (prn (str "head: " head))
        ;;         _ (prn (str "coords-abs: " coords-abs))
        ;;         _ (prn (str "form-heads: " (map #(or (get % :head) %) forms)))

        form-coords-abs (remove nil? (map :coords-abs forms))
        form-coords-rel (map #(map - % coords-abs) form-coords-abs)
        form-head-coords-rel (remove nil?
                                     (map (fn [form]
                                            (when-let [width (get form :width)]
                                              (vector (- (* 0.5 width) 0.5)
                                                      (dec (get form :height )))))
                                          forms))

        arrow-starts  (for [rel form-head-coords-rel]
                        (map + [0.5 (- 1 (* 0.5 (- 1 node-h2)))] rel))
        ;;         arrows-end ()
        edge-groups (for [[x1 y1] arrow-starts]
                      (edge-group x1 y1 [[(+ head-x 0.5) (+ head-y (* 0.5 (- 1 node-h2)) )]] nil))]
    (vec (concat [:g {:transform (str "translate" coords-rel)} ]
                 forms
                 [(node-view2 head-x head-y (str head))]
                 edge-groups))))

(defn set-anc-changed [inner]
  (if (and (map? inner)
          ( :syms-used inner))
    (let [{:keys [head]} inner]
        (cond

          (and
            (:anc-changed inner)
            (= head 'if))
          (let [{:keys [pred then else]} inner
                [pred-new then-new else-new] (map #(if (map? %)
                                                     (assoc %
                                                       :raw-input nil
                                                       :evaluation nil
                                                       :anc-changed true)
                                                     %) [pred then else])]
            (do (prn (str (get inner :id) " has anc-changed, setting anc changed for children: "
                          (map #(or (:id %) %) [pred then else])))
              (assoc inner :pred pred-new :then then-new :else else-new)))

          (= head 'let)
          ;; set all children
          (let [{:keys [layers final]} inner
                all-pairs (for [layer layers pair layer] pair)
                syms-removed (map second all-pairs)]
            (if (:anc-changed inner)
              (let [layers-new (for [layer layers]
                                 (for [pair layer]
                                   (update pair 1 #(if (map? %)
                                                     (assoc %
                                                       :raw-input nil
                                                       :evaluation nil
                                                       :anc-changed true)
                                                     %))))
                    final-new (if (map? final)
                                (assoc final
                                  :raw-input nil
                                  :evaluation nil
                                  :anc-changed true)
                                final)]
                (do (prn (str (get inner :id) " has anc-changed, setting anc changed for children: "
                              (map #(or (:id %) %) (conj syms-removed final))))
                  (assoc inner :layers layers-new :final final-new)))
              ;;____________________________________________________________
              (let [_ (do-prn (str "pairs: " all-pairs ))
                     bad-pairs (filter (fn [sym form]
                                        (:anc-changed form)) all-pairs)
                    _ (do-prn (str "bad pairs: " bad-pairs))
                    add-bad-forms (mapcat
                                    #(or
                                       (when-let [layers (:layers %)]
                                         (conj
                                           (for [layer layers
                                                 pair layer]
                                             (second pair))
                                           (:final %)))
                                       (:forms %)
                                       (when-let [pred (:pred %)]
                                         (seq (list pred (:then %) (:else %)))))
                                    (map second bad-pairs))
                    add-bad-ids (for [form add-bad-forms] (or (get form :id) form))
                    _ (prn (str "bad-ids: " add-bad-ids))]

                (w/postwalk #(cond

                               (and (map? %)
                                    (:id %)
                                    ((set add-bad-ids) (:id %)))
                               (assoc % :anc-changed true)

                               (and (sequential? %)
                                    (= 2 (count %)) ;; looking for
                                    ((set add-bad-ids) (first %)))
                               (update % 1 (fn [thing] (assoc thing
                                                         :raw-input nil
                                                         :evaluation nil
                                                         :anc-changed true)) )

                               :else %
                               )
                            inner)

                )
              ;;___________________________________________________________
;;               inner
              )
            )

          (and
            (:anc-changed inner)
            (ifn? head))
          (let [{:keys [forms]} inner
                forms-new  (for [form forms]
                             (if (map? form)
                               (assoc form
                                 :raw-input nil
                                 :evaluation nil
                                 :anc-changed true)
                               form))]
            (do (prn (str (get inner :id) " has anc-changed, setting anc changed for children: "
                          (map #(or (:id %) %) forms) ))
              (assoc inner :forms forms-new)))
          :else inner))
    inner))






;; (defn set-anc-vals [inner]
;;   (if (and (map?  inner)
;;            (:syms-used inner))
;;     (do (prn (str "setting anc changed for " (get inner :id) "  " ))
;;       (let [{:keys [head]} inner]
;;         (cond

;;           (= head 'if)
;;           (let [{:keys [pred then else]} inner]
;;             (do (prn (str "checking children: " (map #(or (:id %) %) [pred then else]) " for desc changes"))
;;               (if (some true?  (map :anc-changed [pred then else]) )
;;                 (do (prn (str (get inner :id) " had a desc change. "))
;;                   (assoc inner
;;                     :raw-input nil
;;                     :evaluation nil
;;                     :anc-changed true))
;;                 (assoc inner
;;                   :anc-changed false))))

;;           (= head 'let)
;;           (let [{:keys [layers final]} inner
;;                 all-pairs (for [layer layers pair layer] pair)
;;                 syms-removed (map second all-pairs)]
;;             (do (prn (str "checking children: " (map #(or (:id %) %) (conj syms-removed final)) " for desc changes" ))
;;               (if (some true? (map :anc-changed (conj syms-removed final)))
;;                 (do (prn (str (get inner :id) " had a desc change. "))
;;                   (assoc inner
;;                     :raw-input nil
;;                     :evaluation nil
;;                     :anc-changed true))
;;                 (assoc inner
;;                   :anc-changed false))))

;;           (ifn? head)
;;           (let [{:keys [forms]} inner]
;;             (do (prn (str "checking children: " (map #(or (:id %) %) forms) " for desc changes"))
;;               (if (some true? (map :anc-changed forms) )
;;                 (do (prn (str (get inner :id) " had a desc change. "))
;;                   (assoc inner
;;                     :raw-input nil
;;                     :evaluation nil
;;                     :anc-changed true))
;;                 (assoc inner
;;                   :anc-changed false))))
;;           :else inner)))))

(defn update-model [input-node-id raw-input evaluation [args model]]
  "An inner model's dependencies are its children AS A MODEL. E.g a 'let' depends on its layers.
  Thus, during the PREWALK we set all child input values of the overridden input node to nil.
  This is because those values are no longer necessarily consistent with the override value.

  An inner model's dependents are its parents as a model. Thus, during the POSTWALK we propagate the
  override value and remaining inferred valued."
  (->>
      model
      ;; preliminary prewalk to assoc the input and evaluation to input model
      (w/prewalk
        (fn [inner]
          (cond

            (and (map? inner)
                   (= (get inner :id) input-node-id))
            (do
              (prn (str "changing input for " input-node-id " to: " raw-input))
              (prn (str "with evaluation: " evaluation))
              (assoc inner
                :raw-input raw-input
                :evaluation evaluation
                :anc-changed true))

            (and (map? inner)
                 (:syms-used inner))
            (assoc inner :anc-changed false)

            :else inner)))
      ;;  set :anc-changed on descendants
      (w/prewalk
        set-anc-changed)
;;     (w/postwalk
;;       set-desc-vals)
      (conj [args])))

(defn input-view2 [current-node input-inner head-x head-y ratio-w ratio-h]
  (let [{:keys [id forms head]} input-inner
        input-x (* ratio-w (- (* 0.5 (get-width input-inner)) (* 0.5 node-w2)))
        input-y (* ratio-h (- (get-height input-inner) (* 0.5 (- 1 node-h2))))]
    (vec
      (concat
        [:div {:style {:position "absolute"
                       :top head-y
                       :left head-x
                       }}
         [:input {:type "text"
                  :value (str (or (:evaluation input-inner)
                                  (:raw-input input-inner)
                                  ""))
                  :on-change
                  (fn [this]
                      (let [raw-input (-> this .-target .-value)
                          evaluation  (try-read raw-input)]

                      (swap! node-defs-atom
                             (fn [node-defs-atom]
                               (update-in node-defs-atom [current-node :model]
                                          #(update-model id raw-input evaluation %))))))

                  :style {:z-index 1
                          :position "absolute"
                          :left  input-x
                          :top   input-y
                          :width (* ratio-h node-w2)
                          :height (* ratio-h node-h2 0.25)
                          :font-size (* ratio-h node-h2 0.25)
                          }}]]
        forms))))

(defn graph-view2 [current-node]
  (let [[args model] (get-in @node-defs-atom [current-node :model])
        ;;          code (get-in @node-defs-atom [@current-node :code])
        ;;         form (try-read code)
        ;;         [args model] (parse-defn form)
        svg-height (get model :height)
        svg-width (get model :width)
        ;;         _ (prn (str "svg dims: " svg-width ", " svg-height))
        seqd-model (tree-seq
                     #(and (map? %)
                           (:syms-used %))
                     #(or
                        (when-let [layers (:layers %)]
                          (conj
                            (for [layer layers
                                  pair layer]
                              (second pair))
                            (:final %)))
                        (:forms %)
                        (when-let [pred (:pred %)]
                          (seq (list pred (:then %) (:else %)))))
                     model)
        arg-edges (->>
                    (for [i (range (count args))
                          inner seqd-model
                          :when (and (:id inner)
                                     (some #{(nth args i)} ((:id inner)(:syms-used inner))))]
                      (let [[model-x model-y] (get inner :coords-abs)
                            [x2 y2] [(+ (* 0.5 (get-width inner)) model-x)
                                     (+ (- (get-height inner)
                                           (+ node-h2 (* 0.5 (- 1 node-h2)))) model-y)]
                            x1 (* (inc i) (/ svg-width (inc (count args )) ))
                            y1 0]
                        (edge-group x1 y1 [[x2 y2]] (nth args i))))
                    (remove nil?)
                    (vec))
        svg-inner (->>  model
                        (w/prewalk
                          (fn [inner]
                            (if (and (map? inner)
                                     (:syms-used inner))
                              (let [head  (:head inner)]
                                (cond
                                  (= head 'if )
                                  (if-view inner)

                                  (= head 'let)
                                  (let-view inner)

                                  (ifn? head)
                                  (basic-view inner)))
                              inner
                              )))
                        ;;           (conj [:g {:transform "translate(0 1)"}])

                        (#(apply (partial conj %) arg-edges)))
        inputs  (w/prewalk
                  (fn [inner]
                    (if (and (map? inner)
                             (:syms-used inner))
                      (let [{:keys [head height width coords-rel id]} inner
                            [x-model y-model] (get inner :coords-rel)
                            graph-view (js/document.getElementById "graph-view")
                            svg-inner-view (js/document.getElementById "svg-inner")
                            graph-height (.-clientHeight graph-view)
                            graph-width (.-clientWidth graph-view)
                            ;;                                 _ (prn (str "graph dims: " graph-width " " graph-height))
                            ratio-h (/ graph-height svg-height)
                            ratio-w ratio-h
                            ;;                               _ (prn (str "ratios: " ratio-w " " ratio-h))
                            ;;                                   x-adjust (* ratio-w )
                            x-actual (* x-model ratio-w)
                                  y-actual (* y-model ratio-h)
;;                               _(prn (str "coords: " x-actual " " y-actual))
                              ]
                          (cond
                            (= head 'if )
                            (let [{:keys [syms-used pred then else]} inner
                                  pred-height (get-height pred)
                                  else-width (get-width else)
                                  then-width (get-width then)
                                  ]
                              [:div {:style {:position "absolute"
                                             :top y-actual
                                             :left x-actual}}
                               pred then else])

                            (= head 'let)
                            (let [{:keys [ layers final]} inner
                                  all-pairs (for [layer layers
                                                  pair layer] pair)
                                  syms-removed (vec (map second all-pairs))]
                              (vec (concat [:div {:style {:position "absolute"
                                             :top y-actual
                                             :left x-actual
                                             }}]
                                      syms-removed
                                      [final])))

                            (ifn? head)
                            (input-view2 current-node inner x-actual y-actual ratio-w ratio-h)))
                     inner
                     )) model)]

    [:div {:id "graph-view"
           :style {:height "80%"
                   :position "relative"}}
;;      [:input {:type "text"
;;               :style {:z-index 1}}]
     [:div {:style {:position "absolute"
                    :width "100%"
                    :height "100%"
                    :font-size 0.15}}
       inputs]
     [:svg {:width "100%"
            :height "100%"
            :view-box (str 0 " "
                           0 " "
                           svg-width " "
                           svg-height)
            :style {:position "absolute"
                    :font-size 0.15}}
      svg-inner]



     ]))























;; (defn graph-view [current-node]
;;   (let [graph  (reaction (get-in @node-defs-atom [@current-node :graph]))
;;         uuids (reaction (keys @graph))
;;         layers (reaction (get-best-layers @graph))
;;         graph-height (reaction (* spacing-down (count @layers)))
;;         graph-width (reaction (* spacing-right (or (apply max (map count @layers)) 0)))
;;         edges (reaction (apply concat
;;                                (map (fn [[end {node-name :name edges-in :edges-in}]]
;;                                       (map (fn [start-and-label]
;;                                              (assoc start-and-label :end end))
;;                                            edges-in))  @graph)))
;;         edge-freqs  (reaction (frequencies @edges))
;;         edge-freq-infos (reaction (map #(get-freq-info  % @layers @graph-height @graph-width) @edge-freqs))
;;         input-infos (reaction (map (fn [[x1 y1 x2 y2 freq label start]]
;;                                      [x1 y1 start]) @edge-freq-infos))
;;         literal-nodes  (get-literal-nodes @graph)]

;;     (doseq [[uuid {node-name :name edges-in :edges-in}] literal-nodes]
;;       (swap! given-values-atom
;;              #(assoc %
;;                 uuid
;;                 {:raw nil
;;                  :compiled  (or (get-in @node-defs-atom [node-name :fn])
;;                                (try-read node-name))})))

;;     [:div {:id "graph-view"
;;            :style {:height "85%"
;;                    :position "relative"}}
;;      [:svg
;;       {:width "100%"
;;        :height "100%"
;;        :view-box (str  (* 0.5 (- node-w spacing-right))  " "
;;                        (* 0.5 (- node-h spacing-down)) " "
;;                        @graph-width " "
;;                        @graph-height)
;;        :style {:position "absolute"
;;                ;;                :z-index -1
;;                }}
;;       (doall (for [[x1 y1 x2 y2 freq label start] @edge-freq-infos]
;;                (edge-freq-view x1 y1 x2 y2 freq label start)))
;;       (doall (for [uuid @uuids]
;;                (let [node-name (reaction (get-in @graph [uuid :name]))
;;                      [x y] (first (coords-from-layers uuid @layers))] ;; use first because we assume there is only 1 of each node
;;                  (node-view (* spacing-right x)
;;                             (* spacing-down y)
;;                             @node-name
;;                             uuid))))]

;;      (doall
;;        (let [literal-nodes (get-literal-nodes @graph)]
;;          (for [[x y start] @input-infos]
;;            (when-not (literal-nodes start)
;;              (input-view x y start @graph @graph-width @graph-height)
;;              ))
;;          ))]))

(defn focus-view []
  (let [current-node   (first @node-history-atom)
        ;;               code (get-in @node-defs-atom [current-node :code])
        ]
    [:div {:style {
                    ;;                       :display "block"
                    :position "absolute"
                    :right 0
                      :top 0
                      :height "100%"
                      :width "50%"}}
       [:div {:style {:float "top"
                      :height "20%"
                      :width "100%"
                      }}
        (button-view "back" #(prev-graph))

        (nodes-dropdown)
       [:p {:style {:position "absolute"
                    :top 30
                    :left 30
                     :font-size 30
                     :font-family "Ubuntu"}} current-node]]
       [graph-view2 current-node]
       ]
      ))


(defn editor-view []
  (do (prn "rendering editor view")
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
     :component-did-mount    (update-editor "cm-wrapper")})))

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





