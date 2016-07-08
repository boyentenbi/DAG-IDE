(ns vide.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [vide.middleware :refer [wrap-middleware]]
            [config.core :refer [env]]))

(def mount-target
  [:div#app
   [:h3 "ClojureScript has not been compiled!"]
   [:p "please run "
    [:b "lein figwheel"]
    " in order to start the compiler"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css
     "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.8.0/codemirror.min.css"
      "//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/default.min.css"
     (if (env :dev) "css/site.css" "css/site.min.css"))])

(def loading-page
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js
       "//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js"
       "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.8.0/codemirror.min.js"
       "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.8.0/mode/clojure/clojure.min.js"
       "js/app.js")]))


(defroutes routes
  (GET "/" [] loading-page)
  (GET "/about" [] loading-page)

  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
