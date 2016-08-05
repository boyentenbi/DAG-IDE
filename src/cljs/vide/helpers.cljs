(ns vide.helpers
  (:require [clojure.walk :as w]
            [cljs.reader :refer [read-string]]
            [cljs.js :refer [eval empty-state js-eval]]
            [cljs.pprint :refer [pprint]]))

(def func-list [+ - * =  map reduce inc dec identity conj cons repeat])
(def func-dict (zipmap ['+ '- '* '=  'map 'reduce 'inc 'dec 'identity 'conj 'cons 'repeat]
                       [+ - * =  map reduce inc dec identity conj cons repeat]))

(defn recursive-wrap [func]
  (fn [thing]
    (let [new-thing (func thing)]
      (if (= new-thing thing)
      thing
      (recur new-thing)))))

(defn do-prn [a]
  (do (pprint a) a))

(defn drop-nth [myvec n]
  (vec (concat (subvec myvec 0 n) (subvec myvec (inc n)))))

(defn find-indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(defn first? [x coll]
  (= x (first coll)))

(defn firstx [thing]
  (if (sequential? thing)
    (first thing)
    thing))

(defn evalx [form]
  (or (func-dict form)
    (eval (empty-state)
        form
        {:eval       js-eval
         :source-map true
         :context    :expr}
        (fn [result] (:value result)))))


(defn eval-str [s]
  (eval (empty-state)
        (read-string s)
        {:eval       js-eval
         :source-map true
         :context    :expr}
        (fn [result] result)))


(defn wrap [x] ;; wrap in a vector
  [x])

(defn fix-group [group]
  (let [[node-name pairs] group]
    (hash-map node-name (vec (map first pairs)))))

(defn invert-noninj [some-map]
  (let [groups (group-by val some-map)
        fixed-groups (map fix-group groups)]
    (apply merge fixed-groups)))

(defn mergex [& maps]
  (->> maps
       (map seq)
       (apply concat)
       (group-by first)
       (map (fn [[map-key pairs]] [map-key (vec (mapcat second pairs))]))
       (into {})))

(defn replace-seq [form]
  (cond
    (vector? form) (cons vector (apply list form))
    (map? form) (cons hash-map (apply list form))
    :else form))

(defn replace-seqs [form]
  (w/postwalk replace-seq form))

(defn try-read [string]
  (try
    (read-string string)
    (catch js/Error je  (prn (str "caught js exception in try-read: " je)))
    ))
(defn try-eval [form]
  (try
    (evalx form)
    ;;     (catch Exception e (prn (str "caught cljs exception : " e)))
    (catch js/Error je (prn (str "caught js exception in try-eval: " je)))))

(defn ifx [pred then then-args else else-args]
  (if pred
    (apply then then-args)
    (apply else else-args)))
