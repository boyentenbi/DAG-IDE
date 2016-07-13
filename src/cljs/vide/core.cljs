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
              [vide.components :refer [editor-view focus-view next-graph load-node-defs]]
              [cljs.pprint :refer [pprint]]
              ))

;; -------------------------
;; Views

(defn home-page []
    [:div
     [editor-view]
     (focus-view)])

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
