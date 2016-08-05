(ns vide.propagation
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [clojure.string :as string]
            [reagent.core :as reagent :refer [atom]]
            [clojure.walk :as w]
;;             [reanimated.core :as anim]
            [cljs.reader :refer [read-string]]
            [vide.helpers :refer [recursive-wrap try-eval try-read do-prn drop-nth find-indices first? firstx]]
            [vide.parser2 :refer [literal? model-pipeline parse-defn assoc-coords get-height get-width]]
            ))

(defn prop-values [model]
  (w/postwalk
    (fn [inner]
      (if (and (map? inner)
               (:id inner))
        (let [{:keys [head id sym-vals eval? evaluation]} inner]
          (cond
            (= head 'if)
            (let [{:keys [pred then else]} inner
                  eval?-then (and eval? (:evaluation pred))
                  eval?-else (and eval? (not (:evaluation pred)))
                  [pred-new then-new else-new] (map #(if (map? %)
                                                       (assoc %
                                                         :sym-vals sym-vals)
                                                       %)
                                                    [pred then else]
                                                    [eval? eval?-then eval?-else])
                  evaluation-new (when eval?
                                   (if eval?-then
                                     (:evaluation then)
                                     (:evaluation else)))]
              (do
;;                 (prn (str evaluation-new))
                (assoc inner
                :pred pred-new
                :then then-new
                :else else-new
                :evaluation evaluation-new
                )))

            (= head 'let)
            ;; set all children
            (let [{:keys [layers final]} inner
                  evaluation-new (or (:evaluation final) (sym-vals final))
                  layers-new (for [layer layers]
                               (for [[sym form] layer]
                                 [sym (if (map? form)
                                        (assoc form
                                          :sym-vals sym-vals)
                                        form)] ))
                  final-new (if (map? final)
                              (assoc final :sym-vals sym-vals)
                              final)
                  all-pairs (for [layer layers pair layer] pair)
                  add-sym-vals (->> all-pairs
                                    (filter  #(:evaluation (second %)))
                                    (map (fn [[sym form]] [sym (:evaluation form)]))
                                    (into {}))
                  sym-vals-new (merge sym-vals add-sym-vals)]
              (do
;;                 (prn (str evaluation-new))
                (assoc inner
                :layers layers-new
                :final final-new
                :sym-vals sym-vals-new
                :evaluation evaluation-new)))

            (ifn? head)
            (let [{:keys [forms]} inner


                  is-ready (every? #(or (:evaluation %)
                                        (get sym-vals %)
                                        (and (not (:id %))
                                             (not (symbol? %)))) forms)
                  evaluation-new
                  (if (and eval? is-ready (not evaluation))
                    (let [args (map #(or (:evaluation %)
                                          (get sym-vals %)
                                          (when-not (get % :id) %)) forms)
                           form (cons (get inner :fn) args)
                           value  (apply (get inner :fn) args)
                           ]
                      value)
                    evaluation)

                  forms-new (map #(if (map? %)
                                    (assoc % :sym-vals sym-vals )
                                    %) forms)]

              (do
;;                 (prn (str evaluation-new))
                (assoc inner
                :forms forms-new
                :evaluation evaluation-new)))

            :else inner))
        inner))
    model))

(defn set-desc-changed [model input-node-id]
  (w/postwalk
    (fn [inner]
      (if (and (map? inner)
               (:id inner))
        (let [{:keys [head id raw-input evaluation syms-desc-changed desc-changed anc-changed]} inner]

;;                   (prn (str "desc changed for " id " : " desc-changed))
;;                   (prn (str id " has syms-desc-changed " syms-desc-changed))
          (cond

            (= head 'if)
            (let [{:keys [pred then else]} inner

                  syms-anc-changed (mapcat #(or (get % :syms-anc-changed)
                                        (when (:anc-changed inner) [%])) [pred then else])

                  desc-changed-new (or desc-changed
                                 (some :desc-changed [pred then else])
                                   (some (set syms-desc-changed) [pred then else]))
                  raw-input-new (if (and desc-changed (not= id input-node-id))
                                  nil

                                  raw-input)
                  evaluation-new (if (and desc-changed (not= id input-node-id))
                                   nil

                                   evaluation)

                  [pred-new then-new else-new] (map #(if (and (map? %)
                                                              (:anc-changed inner))
                                                       (assoc %
                                                         :raw-input nil
                                                         :evaluation nil
                                                         :anc-changed true
                                                         :syms-desc-changed syms-desc-changed)
                                                       %) [pred then else])
                  ]
              (assoc inner
                :desc-changed desc-changed-new
                :raw-input raw-input-new
                :evaluation evaluation-new
                :pred pred-new
                :then then-new
                :else else-new
                :syms-anc-changed syms-anc-changed))

            (= head 'let)
            ;; set all children
            (let [{:keys [layers final]} inner

                  all-pairs (for [layer layers pair layer] pair)
                  syms-removed (map second all-pairs)
                  syms-anc-changed (mapcat #(or (get % :syms-anc-changed)
                                        (when anc-changed [%])) (conj syms-removed final))

                  bad-pairs (filter (fn [[sym form]] (:desc-changed form)) all-pairs)
                  add-syms-desc-changed (map first bad-pairs)
;;                   _ (prn (str "add-syms-desc-changed for " id " : " add-syms-desc-changed))
                  syms-desc-changed-new (distinct (concat add-syms-desc-changed syms-desc-changed))
;;                   _ (prn (str "syms-desc-changed-new for " id " : " syms-desc-changed-new))

                  layers-new (for [layer layers]
                               (for [[sym form] layer]
                                 (let [should-reset (or ((set syms-anc-changed) sym)
                                                        (:anc-changed inner))]
                                   [sym (if (:id form)
                                          (if should-reset
                                            (assoc form
                                              :raw-input nil
                                              :evaluation nil
                                              :anc-changed true
                                              :syms-desc-changed syms-desc-changed-new)
                                            (assoc form
                                              :syms-desc-changed syms-desc-changed-new))
                                          form)])))
                  final-new (if (:id final)
                              (if
                                (:anc-changed inner)
                                (assoc final
                                  :raw-input nil
                                  :evaluation nil
                                  :anc-changed true
                                  :syms-desc-changed syms-desc-changed-new)
                                (assoc final :syms-desc-changed syms-desc-changed-new))
                              final)

                  desc-changed-new  (boolean (or desc-changed
                                                 (some :desc-changed (conj syms-removed final))
                                                 (some (set syms-desc-changed) (conj syms-removed final))))

                  raw-input-new (if (and desc-changed-new (not= id input-node-id))
                                  nil
                                  raw-input)
                  evaluation-new (if (and desc-changed-new (not= id input-node-id))
                                   nil
                                   evaluation)]
              (assoc inner
                :layers layers-new
                :final final-new
                :desc-changed desc-changed-new
                :raw-input raw-input-new
                :evaluation evaluation-new
                :syms-anc-changed syms-anc-changed
;;                 :syms-desc-changed syms-desc-changed-new
                ))

            (ifn? head)
            (let [{:keys [forms]} inner

                  syms-anc-changed (remove nil? (mapcat #(or (get % :syms-anc-changed)
                                                     (when (:anc-changed inner) [%])) forms))
                  forms-new  (for [form forms]
                               (if (:id form)
                                 (if (:anc-changed inner)
                                   (assoc form
                                     :raw-input nil
                                     :evaluation nil
                                     :anc-changed true
                                     :syms-desc-changed syms-desc-changed)
                                   (assoc form :syms-desc-changed syms-desc-changed))
                                 form))

                  desc-changed-new (boolean (or desc-changed
                                                (some :desc-changed forms)
                                                (some (set syms-desc-changed) forms)))
;;                   _ (prn (str id " has desc-changed-new " desc-changed-new))
;;                   _(prn (str id " has forms " (map #(or (:id %) %) forms)))

                  raw-input-new (if (and desc-changed (not= id input-node-id))
                                  nil
                                  raw-input)
                  evaluation-new (if (and desc-changed (not= id input-node-id))
                                   nil
                                   evaluation)]
              (assoc inner
                :forms forms-new
                :desc-changed desc-changed-new
                :raw-input raw-input-new
                :evaluation evaluation-new
                :syms-anc-changed syms-anc-changed))
            :else inner))
        inner))
    model))

(defn set-anc-changed [model]
  (w/postwalk
    (fn [inner]
      (if (and (map? inner)
               (:id inner))
        (let [{:keys [head id ]} inner]
          (cond

            (= head 'if)
            (let [{:keys [pred then else]} inner
                  [pred-new then-new else-new] (map #(if (and (map? %)
                                                              (:anc-changed inner))
                                                       (assoc %
                                                         :raw-input nil
                                                         :evaluation nil
                                                         :anc-changed true)
                                                       %) [pred then else])
                  syms-anc-changed (mapcat #(or (get % :syms-anc-changed)
                                        (when (:anc-changed inner) [%])) [pred then else])]
              (assoc inner
                :pred pred-new
                :then then-new
                :else else-new
                :syms-anc-changed syms-anc-changed))

            (= head 'let)
            ;; set all children
            (let [{:keys [layers final]} inner
                  all-pairs (for [layer layers pair layer] pair)
                  syms-removed (map second all-pairs)
                  syms-anc-changed (mapcat #(or (get % :syms-anc-changed)
                                        (when (:anc-changed inner) [%])) (conj syms-removed final))

                  layers-new (for [layer layers]
                               (for [[sym form] layer]
                                 [sym (if (or ((set syms-anc-changed) sym)
                                              (:anc-changed inner))
                                        (assoc form
                                          :raw-input nil
                                          :evaluation nil
                                          :anc-changed true)
                                        form)]))
                  final-new (if (and (map? final)
                                     (:anc-changed inner))
                              (assoc final
                                :raw-input nil
                                :evaluation nil
                                :anc-changed true)
                              final)]
              (assoc inner
                :layers layers-new
                :final final-new
                :syms-anc-changed syms-anc-changed))

            (ifn? head)
            (let [{:keys [forms]} inner
                  syms-anc-changed (remove nil? (mapcat #(or (get % :syms-anc-changed)
                                                     (when (:anc-changed inner) [%])) forms))
                  forms-new  (for [form forms]
                               (if (and (map? form)
                                        (:id form)
                                        (:anc-changed inner))
                                 (assoc form
                                   :raw-input nil
                                   :evaluation nil
                                   :anc-changed true)

                                 form))]
              (assoc inner
                :forms forms-new
                :syms-anc-changed syms-anc-changed))

            :else inner))
        inner))
    model))

(defn update-model [input-node-id model]

  (let [updated (->> model
;;                      ((recursive-wrap set-anc-changed))
                     ((recursive-wrap #(set-desc-changed  % input-node-id)))
                     ((recursive-wrap prop-values)))]
    updated))

(defn model-update-input [[args model] input-node-id raw-input evaluation]
  (let [updated-model (->> model
                           (w/postwalk
                             (fn [inner]
                               (cond

                                 (and (map? inner)
                                      (= (get inner :id) input-node-id))

                                 (assoc inner
                                   :raw-input raw-input
                                   :evaluation evaluation
                                   :anc-changed true
                                   :desc-changed true
                                   :syms-anc-changed nil
                                   :syms-desc-changed nil
                                   :eval? true
                                   :sym-vals {})

                                 (and (map? inner)
                                      (:syms-used inner))

                                 (assoc inner
                                   :anc-changed false
                                   :desc-changed false
                                   :syms-anc-changed nil
                                   :syms-desc-changed nil
                                   :eval? true
                                   :sym-vals {})

                                 :else inner)))
                           (update-model input-node-id))]
    [args updated-model]))

(defn model-update-arg-input [[args model] arg-sym raw-input evaluation]
  (w/postwalk
    (fn [inner]
      (if (and (map? inner)
               (:id inner))
        (merge (do (prn (str "setting :sym-vals of " (:id inner) "to " {arg-sym evaluation}))
                 {:sym-vals {arg-sym evaluation}})
               (assoc inner
                 :anc-changed false
                 :desc-changed (when-let [ bool (boolean ((set ((:id inner) (:syms-used inner))) arg-sym))]
                                 (do (prn (str (:id inner) " had desc-changed set to true"))
                                   bool))) )
        inner))
    model))
