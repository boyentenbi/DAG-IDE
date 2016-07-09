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
              ))
;; -------------------------
;; Functions

(defn update-editor [cm-atom wrapper-id]
  (fn [this]
    (when @cm-atom
      (when-let [node (or (js/document.getElementById wrapper-id)
                          (reagent/dom-node this))]
        (.appendChild node (.getWrapperElement @cm-atom))
        ))))
(defn on-cm-update [node-defs-atom node-history-atom]
  (fn [this]
    (when-let [current-node (first @node-history-atom)]
            (let [new-text (.getValue this)
                  [compiled value] (try-read new-text)
;;                   [_ func-name args let-form] value
;;                   new-node-history (-> @node-history-atom
;;                                        (drop-last)
;;                                        (vec)
;;                                        (conj (str func-name)))
                  ]
              (swap! node-defs-atom #(assoc % current-node new-text)))

            ;;                                       (when compiled
            ;;                                         (reset! node-defs-atom
            ;;                                                 (rename-keys new-node-defs {current-node (str func-name)}))
            ;;                                         (reset! node-history-atom new-node-history))
            )))

;; -------------------------
;; Views


(defn editor [cm-atom]
  (reagent/create-class
         {:reagent-render         (fn [] @cm-atom [:div {:id "cm-wrapper"
                                                         :style {:position "absolute"
                                                                  :top 0
                                                                 :left 0
                                                                  :height "100%"
                                                                 :width "50%"
                                                                 :border-right "solid grey 2px"}
                                                         }])
          :component-did-update   (update-editor cm-atom "cm-wrapper")
          :component-did-mount    (update-editor cm-atom "cm-wrapper")}))


(defn home-page []
  (let [node-defs-atom (atom {})
        cm-atom (atom (js/CodeMirror.
             (.createElement js/document "div")
             (clj->js {:mode "clojure"
;;                        :lineNumbers true
;;                        :theme "pastel-on-dark"
                       :cursorHeight 0.85
                       :lineWrapping true
                       })))
        node-history-atom (atom '())
        _  (load-node-defs node-defs-atom)]
    (.on @cm-atom
         "change"
         (on-cm-update node-defs-atom node-history-atom ))
    (.setSize @cm-atom "100%" "100%" )
    (.refresh @cm-atom)
    (fn []
      ;;       @cm-atom
      [:div
       [editor cm-atom]

       (focus-view node-defs-atom node-history-atom cm-atom)])))


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
