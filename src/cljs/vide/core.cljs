(ns vide.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [clojure.string :as string]
              [cljs.reader :refer [read-string]]
              [clojure.set :refer [rename-keys]]
              [vide.helpers :refer [try-read do-prn drop-nth find-indices first? firstx evalx]]
              [vide.drawer :refer [childless? get-best-layers coords-from-layers]]
              [vide.parser :refer [parse-defn-let]]
              [vide.init :refer [focus-view app-state next-graph load-node-defs]]
              [cljs.pprint :refer [pprint]]
              [vide.code_mirror :refer [code-mirror]]))
;; -------------------------
;; Functions

(defn editor-did-mount [node-defs-atom node-history-atom cm-atom]
  (fn [this]
    (do (prn "editor mounted!")
      (let [codemirror (js/CodeMirror.
                                     (reagent/dom-node this)
                                     (clj->js {:mode "clojure"
                                          :lineNumbers true
;;                                           :value (@node-defs-atom (last @node-history-atom))
                                          }))
          doc  (.getDoc codemirror)]
;; (. (->cm-ed e) (setValue (or v "")))
      (do
        (.on codemirror "change" #(do
;;                                   (reset! output (str (evalx (try-read @input))))
                                  (let [node-defs @node-defs-atom
                                        node-history @node-history-atom
                                        current-node (last @node-history-atom)
                                        new-text (.getValue %)
                                        [compiled value] (try-read new-text)
                                        [_ func-name args let-form] value
                                        new-node-defs (assoc node-defs current-node new-text)
                                        new-node-history (-> node-history
                                                             (drop-last)
                                                             (vec)
                                                             (conj (str func-name)))]
                                    (do
                                      (do-prn (reset! node-defs-atom new-node-defs))

;;                                       (when compiled
;;                                         (reset! node-defs-atom
;;                                                 (rename-keys new-node-defs {current-node (str func-name)}))
;;                                         (reset! node-history-atom new-node-history))
                                      ))))
        (do-prn (reset! cm-atom codemirror))
;;         (.setValue @cm-atom (or  "" (@node-defs-atom (last @node-history-atom))))
        )
      ))))

;; (defn editor-did-update [node-defs-atom node-history-atom cm-atom]
;;   (when @cm-atom
;;     (.setValue @cm-atom (or  "" (@node-defs-atom (last @node-history-atom))))))
;; (defn )
(defn update-editor [cm-atom wrapper-id]
  (fn [this]
    (when @cm-atom
      (prn(str "Updating editor with atom " @cm-atom) )
      (when-let [node (or (js/document.getElementById wrapper-id)
                          (reagent/dom-node this))]
        (.appendChild node (.getWrapperElement @cm-atom))
        ))))

;; (defn render-code [this]
;;   (->> this reagent/dom-node (.highlightBlock js/hljs)))

;;    [:div [:a {:href "/about"} "go to about page"]]

;; (defn result-view [output]
;;   (do-prn (reagent/create-class
;;    {:render (fn []
;;               [:pre>code.clj
;;                (with-out-str (pprint @output))])
;;     :component-did-update render-code})))

;; -------------------------
;; Views



(defn editor [cm-atom]
  (reagent/create-class
         {:reagent-render         (fn [] @cm-atom [:div {:id "cm-wrapper"
                                                         :style {:top 0
                                                                 :left 0
                                                                  :height "100%"}
                                                         }])
          :component-did-update   (update-editor cm-atom "cm-wrapper")
          :component-did-mount    (update-editor cm-atom "cm-wrapper")}))


(defn home-page []
  (let [node-defs-atom (atom {})
        cm-atom (atom (js/CodeMirror.
             (.createElement js/document "div")
             (clj->js {:mode "clojure"
                       :lineNumbers true})))
        node-history-atom (atom [])
        uuid-history-atom (atom [])
        _  (load-node-defs node-defs-atom)
        ]
    (.on @cm-atom
         "change"
;;          #()
         #(when-let [current-node (do-prn (last @node-history-atom))]
            (let [new-text (.getValue %)
;;                   [compiled value] (try-read new-text)
;;                   [_ func-name args let-form] value
                  new-node-defs (assoc @node-defs-atom current-node new-text)
;;                   new-node-history (-> @node-history-atom
;;                                        (drop-last)
;;                                        (vec)
;;                                        (conj (str func-name)))
                  ]
              (do-prn (reset! node-defs-atom new-node-defs)))

            ;;                                       (when compiled
            ;;                                         (reset! node-defs-atom
            ;;                                                 (rename-keys new-node-defs {current-node (str func-name)}))
            ;;                                         (reset! node-history-atom new-node-history))
            )
         )
    (fn []
      ;;       @cm-atom
      [:div {:style {:height "85%"
                     :width "50%"
                     :left 0
                     :top 0
                     }}

       [editor cm-atom]

       (focus-view node-defs-atom uuid-history-atom node-history-atom cm-atom)])))


(defn about-page []
  [:div [:h2 "About vide"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])




;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
