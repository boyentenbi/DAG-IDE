// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.parser2');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('clojure.walk');
goog.require('vide.helpers');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
vide.parser2.literal_QMARK_ = (function vide$parser2$literal_QMARK_(form){
if(!(cljs.core.sequential_QMARK_(form))){
return true;
} else {
if((cljs.core.list_QMARK_(form)) && (cljs.core.ifn_QMARK_(cljs.core.first(form)))){
return false;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide$parser2$literal_QMARK_,form)))){
return false;
} else {
return true;

}
}
}
});
vide.parser2.try_if_sym = (function vide$parser2$try_if_sym(form){
if((form instanceof cljs.core.Symbol)){
var or__6244__auto__ = (vide.helpers.func_dict.cljs$core$IFn$_invoke$arity$1 ? vide.helpers.func_dict.cljs$core$IFn$_invoke$arity$1(form) : vide.helpers.func_dict.call(null,form));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return form;
}
} else {
return form;
}
});
vide.parser2.eval_syms = (function vide$parser2$eval_syms(model){
return clojure.walk.prewalk((function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$id);
} else {
return and__6232__auto__;
}
})())){
var map__19144 = inner;
var map__19144__$1 = ((((!((map__19144 == null)))?((((map__19144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19144):map__19144);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19144__$1,cljs.core.cst$kw$head);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,head)){
var map__19146 = inner;
var map__19146__$1 = ((((!((map__19146 == null)))?((((map__19146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19146):map__19146);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.cst$kw$else);
var vec__19147 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.try_if_sym,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null));
var pred_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(0),null);
var then_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(1),null);
var else_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19147,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$pred,pred_new,cljs.core.array_seq([cljs.core.cst$kw$then,then_new,cljs.core.cst$kw$else,else_new], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,head)){
var map__19151 = inner;
var map__19151__$1 = ((((!((map__19151 == null)))?((((map__19151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19151):map__19151);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,cljs.core.cst$kw$layers);
var layers_new = (function (){var iter__7024__auto__ = ((function (map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head){
return (function vide$parser2$eval_syms_$_iter__19153(s__19154){
return (new cljs.core.LazySeq(null,((function (map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head){
return (function (){
var s__19154__$1 = s__19154;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19154__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__19154__$1,layer,xs__5205__auto__,temp__4657__auto__,map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head){
return (function vide$parser2$eval_syms_$_iter__19153_$_iter__19155(s__19156){
return (new cljs.core.LazySeq(null,((function (s__19154__$1,layer,xs__5205__auto__,temp__4657__auto__,map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head){
return (function (){
var s__19156__$1 = s__19156;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19156__$1);
if(temp__4657__auto____$1){
var s__19156__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19156__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19156__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19158 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19157 = (0);
while(true){
if((i__19157 < size__7023__auto__)){
var vec__19182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19157);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19182,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19182,(1),null);
cljs.core.chunk_append(b__19158,vide.parser2.try_if_sym(form));

var G__19190 = (i__19157 + (1));
i__19157 = G__19190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19158),vide$parser2$eval_syms_$_iter__19153_$_iter__19155(cljs.core.chunk_rest(s__19156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19158),null);
}
} else {
var vec__19185 = cljs.core.first(s__19156__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(1),null);
return cljs.core.cons(vide.parser2.try_if_sym(form),vide$parser2$eval_syms_$_iter__19153_$_iter__19155(cljs.core.rest(s__19156__$2)));
}
} else {
return null;
}
break;
}
});})(s__19154__$1,layer,xs__5205__auto__,temp__4657__auto__,map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head))
,null,null));
});})(s__19154__$1,layer,xs__5205__auto__,temp__4657__auto__,map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$parser2$eval_syms_$_iter__19153(cljs.core.rest(s__19154__$1)));
} else {
var G__19191 = cljs.core.rest(s__19154__$1);
s__19154__$1 = G__19191;
continue;
}
} else {
return null;
}
break;
}
});})(map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head))
,null,null));
});})(map__19151,map__19151__$1,layers,map__19144,map__19144__$1,head))
;
return iter__7024__auto__(layers);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner,cljs.core.cst$kw$layers,layers_new);
} else {
if(cljs.core.ifn_QMARK_(head)){
var map__19188 = inner;
var map__19188__$1 = ((((!((map__19188 == null)))?((((map__19188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19188):map__19188);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19188__$1,cljs.core.cst$kw$forms);
var forms_new = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.try_if_sym,forms);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner,cljs.core.cst$kw$forms,forms_new);
} else {
return null;
}
}
}
} else {
return inner;
}
}),model);
});
vide.parser2.convert_seqs = (function vide$parser2$convert_seqs(form){

return clojure.walk.prewalk((function (p1__19192_SHARP_){
if(cljs.core.vector_QMARK_(p1__19192_SHARP_)){
return cljs.core.cons(cljs.core.cst$sym$vec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__19192_SHARP_));
} else {
if(cljs.core.map_QMARK_(p1__19192_SHARP_)){
return cljs.core.cons(cljs.core.cst$sym$hash_DASH_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__19192_SHARP_));
} else {
return p1__19192_SHARP_;

}
}
}),form);
});
vide.parser2.label_form = (function vide$parser2$label_form(form){
return clojure.walk.prewalk((function (inner_form){
if(cljs.core.seq_QMARK_(inner_form)){
var head = cljs.core.first(inner_form);
var tail = cljs.core.rest(inner_form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,head)){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$head,head,cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(head),cljs.core.str("-")].join('')),cljs.core.cst$kw$pred,cljs.core.first(tail),cljs.core.cst$kw$then,cljs.core.second(tail),cljs.core.cst$kw$else,cljs.core.last(tail)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,head)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$head,head,cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(head),cljs.core.str("-")].join('')),cljs.core.cst$kw$bindings,cljs.core.vec(cljs.core.rest(cljs.core.first(tail))),cljs.core.cst$kw$final,cljs.core.last(tail)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,head)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$head,head,cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(head),cljs.core.str("-")].join('')),cljs.core.cst$kw$side_DASH_effects,cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(tail)),cljs.core.cst$kw$final,cljs.core.last(tail)], null);
} else {
if(cljs.core.ifn_QMARK_(head)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$head,head,cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(head),cljs.core.str("-")].join('')),cljs.core.cst$kw$forms,cljs.core.vec(tail)], null);
} else {
return null;
}
}
}
}
} else {
return inner_form;
}
}),form);
});
vide.parser2.get_insertion_idx = (function vide$parser2$get_insertion_idx(layers,pair){
var form = cljs.core.second(pair);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$id);
var syms_used = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(form)));
var checking_idx = cljs.core.count(layers);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(checking_idx,(0))){
return (0);
} else {
var layer_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,(checking_idx - (1)));
if(cljs.core.truth_(cljs.core.some(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,layer_below)),syms_used))){
return checking_idx;
} else {
var G__19193 = (checking_idx - (1));
checking_idx = G__19193;
continue;
}
}
break;
}
});
vide.parser2.layer_let = (function vide$parser2$layer_let(pairs){
var layers = cljs.core.PersistentVector.EMPTY;
var remaining_pairs = pairs;
while(true){
if(cljs.core.empty_QMARK_(remaining_pairs)){
return layers;
} else {
var first_pair = cljs.core.first(remaining_pairs);
var first_head = cljs.core.cst$kw$head.cljs$core$IFn$_invoke$arity$1(cljs.core.second(first_pair));
var rest_pairs = cljs.core.rest(remaining_pairs);
var insert_idx = vide.parser2.get_insertion_idx(layers,first_pair);
var layers_new = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(insert_idx,cljs.core.count(layers)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(layers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_pair], null)):cljs.core.update.cljs$core$IFn$_invoke$arity$3(layers,insert_idx,((function (layers,remaining_pairs,first_pair,first_head,rest_pairs,insert_idx){
return (function (p1__19194_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19194_SHARP_,first_pair);
});})(layers,remaining_pairs,first_pair,first_head,rest_pairs,insert_idx))
));
var G__19195 = layers_new;
var G__19196 = rest_pairs;
layers = G__19195;
remaining_pairs = G__19196;
continue;
}
break;
}
});
vide.parser2.get_height = (function vide$parser2$get_height(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(form);
} else {
if((form instanceof cljs.core.Symbol)){
return (0);
} else {
return (0);

}
}
});
vide.parser2.get_width = (function vide$parser2$get_width(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(form);
} else {
if((form instanceof cljs.core.Symbol)){
return (0);
} else {
return (0);

}
}
});
vide.parser2.get_syms_used = (function vide$parser2$get_syms_used(id,form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(form);
} else {
if((form instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.fromArray([id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null)], true, false);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});
vide.parser2.connect_labelled = (function vide$parser2$connect_labelled(labelled_form){
return clojure.walk.postwalk((function (inner_labelled){
if(cljs.core.map_QMARK_(inner_labelled)){
var map__19208 = inner_labelled;
var map__19208__$1 = ((((!((map__19208 == null)))?((((map__19208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19208):map__19208);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,cljs.core.cst$kw$head);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19208__$1,cljs.core.cst$kw$id);
if(cljs.core.truth_(cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner_labelled))){
return inner_labelled;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,head)){
var map__19210 = inner_labelled;
var map__19210__$1 = ((((!((map__19210 == null)))?((((map__19210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19210):map__19210);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$else);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner_labelled,cljs.core.cst$kw$height,((function (){var x__6575__auto__ = vide.parser2.get_height(then);
var y__6576__auto__ = vide.parser2.get_height(else$);
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})() + vide.parser2.get_height(pred)),cljs.core.array_seq([cljs.core.cst$kw$width,(function (){var x__6575__auto__ = (vide.parser2.get_width(then) + vide.parser2.get_width(else$));
var y__6576__auto__ = vide.parser2.get_width(pred);
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})(),cljs.core.cst$kw$syms_DASH_used,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(vide.helpers.mergex,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19210,map__19210__$1,pred,then,else$,map__19208,map__19208__$1,head,id){
return (function (p1__19197_SHARP_){
return vide.parser2.get_syms_used(id,p1__19197_SHARP_);
});})(map__19210,map__19210__$1,pred,then,else$,map__19208,map__19208__$1,head,id))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null)))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,head)){
var map__19212 = inner_labelled;
var map__19212__$1 = ((((!((map__19212 == null)))?((((map__19212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19212):map__19212);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,cljs.core.cst$kw$final);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,cljs.core.cst$kw$bindings);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var syms_generated = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var forms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var syms_used = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(vide.helpers.mergex,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,map__19208,map__19208__$1,head,id){
return (function (p1__19198_SHARP_){
return vide.parser2.get_syms_used(id,p1__19198_SHARP_);
});})(map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,map__19208,map__19208__$1,head,id))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms,final$)));
var layers = vide.parser2.layer_let(pairs);
var layers_height = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,syms_used,layers,map__19208,map__19208__$1,head,id){
return (function (p1__19199_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.get_height,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__19199_SHARP_)));
});})(map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,syms_used,layers,map__19208,map__19208__$1,head,id))
,layers));
var layers_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,syms_used,layers,layers_height,map__19208,map__19208__$1,head,id){
return (function (p1__19200_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.get_width,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__19200_SHARP_)));
});})(map__19212,map__19212__$1,final$,bindings,pairs,syms_generated,forms,syms_used,layers,layers_height,map__19208,map__19208__$1,head,id))
,layers));
var height = (layers_height + vide.parser2.get_height(final$));
var width = (function (){var x__6575__auto__ = layers_width;
var y__6576__auto__ = vide.parser2.get_width(final$);
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner_labelled,cljs.core.cst$kw$height,height,cljs.core.array_seq([cljs.core.cst$kw$width,width,cljs.core.cst$kw$syms_DASH_used,syms_used,cljs.core.cst$kw$layers,layers,cljs.core.cst$kw$syms_DASH_generated,syms_generated], 0)),cljs.core.cst$kw$bindings);
} else {
if(cljs.core.ifn_QMARK_(head)){
var forms = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(inner_labelled);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner_labelled,cljs.core.cst$kw$height,(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.get_height,forms)) + (1)),cljs.core.array_seq([cljs.core.cst$kw$width,(function (){var x__6575__auto__ = (1);
var y__6576__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser2.get_width,forms));
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})(),cljs.core.cst$kw$syms_DASH_used,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(vide.helpers.mergex,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms,map__19208,map__19208__$1,head,id){
return (function (p1__19201_SHARP_){
return vide.parser2.get_syms_used(id,p1__19201_SHARP_);
});})(forms,map__19208,map__19208__$1,head,id))
,forms)),cljs.core.cst$kw$fn,vide.helpers.try_eval(head)], 0));
} else {
return null;
}
}
}
}
} else {
return inner_labelled;
}
}),labelled_form);
});
vide.parser2.assoc_coords = (function vide$parser2$assoc_coords(model){
return clojure.walk.prewalk((function (inner_model){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner_model);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner_model);
} else {
return and__6232__auto__;
}
})())){
var map__19460 = inner_model;
var map__19460__$1 = ((((!((map__19460 == null)))?((((map__19460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19460):map__19460);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$id);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$width);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$head);
var coords_abs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$coords_DASH_abs);
var coords_rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19460__$1,cljs.core.cst$kw$coords_DASH_rel);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
var map__19462 = inner_model;
var map__19462__$1 = ((((!((map__19462 == null)))?((((map__19462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19462):map__19462);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19462__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19462__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19462__$1,cljs.core.cst$kw$else);
var pred_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pred,cljs.core.cst$kw$height], null));
var pred_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pred,cljs.core.cst$kw$width], null));
var pred_x = ((0.5 * width) + (-0.5 * pred_width));
var then_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$then,cljs.core.cst$kw$height], null));
var then_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$then,cljs.core.cst$kw$width], null));
var else_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,cljs.core.cst$kw$height], null));
var else_width = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inner_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,cljs.core.cst$kw$width], null));
var pred_rel = (function (){var x__7078__auto__ = pred_x;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__7078__auto__);
})();
var then_rel = (function (){var x__7078__auto__ = else_width;
return cljs.core._conj((function (){var x__7078__auto____$1 = pred_height;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var else_rel = cljs.core._conj((function (){var x__7078__auto__ = pred_height;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(0));
var pred_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,pred_rel);
var then_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,then_rel);
var else_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,else_rel);
var pred_new = ((cljs.core.map_QMARK_(pred))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pred,cljs.core.cst$kw$coords_DASH_rel,pred_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,pred_abs,cljs.core.cst$kw$parent_DASH_id,id], 0)):pred);
var then_new = ((cljs.core.map_QMARK_(then))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(then,cljs.core.cst$kw$coords_DASH_rel,then_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,then_abs,cljs.core.cst$kw$parent_DASH_id,id], 0)):then);
var else_new = ((cljs.core.map_QMARK_(else$))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(else$,cljs.core.cst$kw$coords_DASH_rel,else_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,else_abs,cljs.core.cst$kw$parent_DASH_id,id], 0)):else$);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner_model,cljs.core.cst$kw$pred,pred_new,cljs.core.array_seq([cljs.core.cst$kw$then,then_new,cljs.core.cst$kw$else,else_new], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
var map__19464 = inner_model;
var map__19464__$1 = ((((!((map__19464 == null)))?((((map__19464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19464):map__19464);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19464__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19464__$1,cljs.core.cst$kw$final);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19464__$1,cljs.core.cst$kw$width);
var new_layers = cljs.core.vec((function (){var iter__7024__auto__ = ((function (map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466(s__19467){
return (new cljs.core.LazySeq(null,((function (map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19467__$1 = s__19467;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19467__$1);
if(temp__4657__auto__){
var s__19467__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19467__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19467__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19469 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19468 = (0);
while(true){
if((i__19468 < size__7023__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19468);
cljs.core.chunk_append(b__19469,cljs.core.vec((function (){var iter__7024__auto__ = ((function (i__19468,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19580(s__19581){
return (new cljs.core.LazySeq(null,((function (i__19468,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19581__$1 = s__19581;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19581__$1);
if(temp__4657__auto____$1){
var s__19581__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19581__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__19581__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__19583 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__19582 = (0);
while(true){
if((i__19582 < size__7023__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__19582);
cljs.core.chunk_append(b__19583,(function (){var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i);
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layer,j);
var layers_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,layers);
var pairs_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,layer);
var width_before = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19215_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19215_SHARP_));
});})(i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,pairs_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var layer_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19216_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19216_SHARP_));
});})(i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer));
var y = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7024__auto__ = ((function (i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19616(s__19617){
return (new cljs.core.LazySeq(null,((function (i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19617__$1 = s__19617;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__19617__$1);
if(temp__4657__auto____$2){
var s__19617__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__19617__$2)){
var c__7022__auto____$2 = cljs.core.chunk_first(s__19617__$2);
var size__7023__auto____$2 = cljs.core.count(c__7022__auto____$2);
var b__19619 = cljs.core.chunk_buffer(size__7023__auto____$2);
if((function (){var i__19618 = (0);
while(true){
if((i__19618 < size__7023__auto____$2)){
var layer__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$2,i__19618);
cljs.core.chunk_append(b__19619,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19618,i__19582,i__19468,layer__$1,c__7022__auto____$2,size__7023__auto____$2,b__19619,s__19617__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19618,i__19582,i__19468,layer__$1,c__7022__auto____$2,size__7023__auto____$2,b__19619,s__19617__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)));

var G__19700 = (i__19618 + (1));
i__19618 = G__19700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19619),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19616(cljs.core.chunk_rest(s__19617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19619),null);
}
} else {
var layer__$1 = cljs.core.first(s__19617__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19582,i__19468,layer__$1,s__19617__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19582,i__19468,layer__$1,s__19617__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19616(cljs.core.rest(s__19617__$2)));
}
} else {
return null;
}
break;
}
});})(i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(layers_up_to);
})());
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var x = (width_before + (0.5 * (width__$1 - layer_width)));
var pair_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var pair_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,pair_rel);
if(cljs.core.map_QMARK_(cljs.core.second(pair))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(pair),(1),((function (i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19218_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19218_SHARP_,cljs.core.cst$kw$coords_DASH_rel,pair_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,pair_abs,cljs.core.cst$kw$parent_DASH_id,id], 0));
});})(i__19582,i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,c__7022__auto____$1,size__7023__auto____$1,b__19583,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
);
} else {
return pair;
}
})());

var G__19701 = (i__19582 + (1));
i__19582 = G__19701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19583),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580(cljs.core.chunk_rest(s__19581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19583),null);
}
} else {
var j = cljs.core.first(s__19581__$2);
return cljs.core.cons((function (){var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i);
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layer,j);
var layers_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,layers);
var pairs_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,layer);
var width_before = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19468,layer,pair,layers_up_to,pairs_up_to,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19215_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19215_SHARP_));
});})(i__19468,layer,pair,layers_up_to,pairs_up_to,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,pairs_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var layer_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19216_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19216_SHARP_));
});})(i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer));
var y = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7024__auto__ = ((function (i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19628(s__19629){
return (new cljs.core.LazySeq(null,((function (i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19629__$1 = s__19629;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__19629__$1);
if(temp__4657__auto____$2){
var s__19629__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__19629__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__19629__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__19631 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__19630 = (0);
while(true){
if((i__19630 < size__7023__auto____$1)){
var layer__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__19630);
cljs.core.chunk_append(b__19631,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19630,i__19468,layer__$1,c__7022__auto____$1,size__7023__auto____$1,b__19631,s__19629__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19630,i__19468,layer__$1,c__7022__auto____$1,size__7023__auto____$1,b__19631,s__19629__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)));

var G__19702 = (i__19630 + (1));
i__19630 = G__19702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19631),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19628(cljs.core.chunk_rest(s__19629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19631),null);
}
} else {
var layer__$1 = cljs.core.first(s__19629__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19468,layer__$1,s__19629__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19468,layer__$1,s__19629__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580_$_iter__19628(cljs.core.rest(s__19629__$2)));
}
} else {
return null;
}
break;
}
});})(i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(layers_up_to);
})());
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var x = (width_before + (0.5 * (width__$1 - layer_width)));
var pair_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var pair_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,pair_rel);
if(cljs.core.map_QMARK_(cljs.core.second(pair))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(pair),(1),((function (i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19218_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19218_SHARP_,cljs.core.cst$kw$coords_DASH_rel,pair_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,pair_abs,cljs.core.cst$kw$parent_DASH_id,id], 0));
});})(i__19468,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,s__19581__$2,temp__4657__auto____$1,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
);
} else {
return pair;
}
})(),vide$parser2$assoc_coords_$_iter__19466_$_iter__19580(cljs.core.rest(s__19581__$2)));
}
} else {
return null;
}
break;
}
});})(i__19468,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(i__19468,i,c__7022__auto__,size__7023__auto__,b__19469,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i))));
})()));

var G__19703 = (i__19468 + (1));
i__19468 = G__19703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19469),vide$parser2$assoc_coords_$_iter__19466(cljs.core.chunk_rest(s__19467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19469),null);
}
} else {
var i = cljs.core.first(s__19467__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__7024__auto__ = ((function (i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19634(s__19635){
return (new cljs.core.LazySeq(null,((function (i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19635__$1 = s__19635;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__19635__$1);
if(temp__4657__auto____$1){
var s__19635__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19635__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19635__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19637 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19636 = (0);
while(true){
if((i__19636 < size__7023__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19636);
cljs.core.chunk_append(b__19637,(function (){var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i);
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layer,j);
var layers_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,layers);
var pairs_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,layer);
var width_before = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19636,layer,pair,layers_up_to,pairs_up_to,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19215_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19215_SHARP_));
});})(i__19636,layer,pair,layers_up_to,pairs_up_to,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,pairs_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var layer_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19216_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19216_SHARP_));
});})(i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer));
var y = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7024__auto__ = ((function (i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19670(s__19671){
return (new cljs.core.LazySeq(null,((function (i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19671__$1 = s__19671;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__19671__$1);
if(temp__4657__auto____$2){
var s__19671__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__19671__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__19671__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__19673 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__19672 = (0);
while(true){
if((i__19672 < size__7023__auto____$1)){
var layer__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__19672);
cljs.core.chunk_append(b__19673,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19672,i__19636,layer__$1,c__7022__auto____$1,size__7023__auto____$1,b__19673,s__19671__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19672,i__19636,layer__$1,c__7022__auto____$1,size__7023__auto____$1,b__19673,s__19671__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)));

var G__19704 = (i__19672 + (1));
i__19672 = G__19704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19673),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19670(cljs.core.chunk_rest(s__19671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19673),null);
}
} else {
var layer__$1 = cljs.core.first(s__19671__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19636,layer__$1,s__19671__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19636,layer__$1,s__19671__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19670(cljs.core.rest(s__19671__$2)));
}
} else {
return null;
}
break;
}
});})(i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(layers_up_to);
})());
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var x = (width_before + (0.5 * (width__$1 - layer_width)));
var pair_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var pair_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,pair_rel);
if(cljs.core.map_QMARK_(cljs.core.second(pair))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(pair),(1),((function (i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19218_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19218_SHARP_,cljs.core.cst$kw$coords_DASH_rel,pair_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,pair_abs,cljs.core.cst$kw$parent_DASH_id,id], 0));
});})(i__19636,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,c__7022__auto__,size__7023__auto__,b__19637,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
);
} else {
return pair;
}
})());

var G__19705 = (i__19636 + (1));
i__19636 = G__19705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19637),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634(cljs.core.chunk_rest(s__19635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19637),null);
}
} else {
var j = cljs.core.first(s__19635__$2);
return cljs.core.cons((function (){var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i);
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layer,j);
var layers_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,layers);
var pairs_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,layer);
var width_before = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer,pair,layers_up_to,pairs_up_to,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19215_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19215_SHARP_));
});})(layer,pair,layers_up_to,pairs_up_to,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,pairs_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var layer_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer,pair,layers_up_to,pairs_up_to,width_before,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19216_SHARP_){
return cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19216_SHARP_));
});})(layer,pair,layers_up_to,pairs_up_to,width_before,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer));
var y = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7024__auto__ = ((function (layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19682(s__19683){
return (new cljs.core.LazySeq(null,((function (layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19683__$1 = s__19683;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__19683__$1);
if(temp__4657__auto____$2){
var s__19683__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__19683__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19683__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19685 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19684 = (0);
while(true){
if((i__19684 < size__7023__auto__)){
var layer__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19684);
cljs.core.chunk_append(b__19685,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19684,layer__$1,c__7022__auto__,size__7023__auto__,b__19685,s__19683__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(i__19684,layer__$1,c__7022__auto__,size__7023__auto__,b__19685,s__19683__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)));

var G__19706 = (i__19684 + (1));
i__19684 = G__19706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19685),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19682(cljs.core.chunk_rest(s__19683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19685),null);
}
} else {
var layer__$1 = cljs.core.first(s__19683__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer__$1,s__19683__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19217_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19217_SHARP_));
});})(layer__$1,s__19683__$2,temp__4657__auto____$2,layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer__$1)),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634_$_iter__19682(cljs.core.rest(s__19683__$2)));
}
} else {
return null;
}
break;
}
});})(layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(layers_up_to);
})());
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var x = (width_before + (0.5 * (width__$1 - layer_width)));
var pair_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var pair_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,pair_rel);
if(cljs.core.map_QMARK_(cljs.core.second(pair))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(pair),(1),((function (layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19218_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19218_SHARP_,cljs.core.cst$kw$coords_DASH_rel,pair_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,pair_abs,cljs.core.cst$kw$parent_DASH_id,id], 0));
});})(layer,pair,layers_up_to,pairs_up_to,width_before,layer_width,y,x,pair_rel,pair_abs,j,s__19635__$2,temp__4657__auto____$1,i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
);
} else {
return pair;
}
})(),vide$parser2$assoc_coords_$_iter__19466_$_iter__19634(cljs.core.rest(s__19635__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(i,s__19467__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,i))));
})()),vide$parser2$assoc_coords_$_iter__19466(cljs.core.rest(s__19467__$2)));
}
} else {
return null;
}
break;
}
});})(map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(map__19464,map__19464__$1,layers,final$,width__$1,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(layers)));
})());
var final_x = ((0.5 * width__$1) + (-0.5 * vide.parser2.get_width(final$)));
var final_y = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7024__auto__ = ((function (map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19688(s__19689){
return (new cljs.core.LazySeq(null,((function (map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19689__$1 = s__19689;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19689__$1);
if(temp__4657__auto__){
var s__19689__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19689__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19689__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19691 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19690 = (0);
while(true){
if((i__19690 < size__7023__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19690);
cljs.core.chunk_append(b__19691,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19690,layer,c__7022__auto__,size__7023__auto__,b__19691,s__19689__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19219_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19219_SHARP_));
});})(i__19690,layer,c__7022__auto__,size__7023__auto__,b__19691,s__19689__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer)));

var G__19707 = (i__19690 + (1));
i__19690 = G__19707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19691),vide$parser2$assoc_coords_$_iter__19688(cljs.core.chunk_rest(s__19689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19691),null);
}
} else {
var layer = cljs.core.first(s__19689__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer,s__19689__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (p1__19219_SHARP_){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19219_SHARP_));
});})(layer,s__19689__$2,temp__4657__auto__,map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,layer)),vide$parser2$assoc_coords_$_iter__19688(cljs.core.rest(s__19689__$2)));
}
} else {
return null;
}
break;
}
});})(map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(map__19464,map__19464__$1,layers,final$,width__$1,new_layers,final_x,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(layers);
})());
var final_rel = (function (){var x__7078__auto__ = final_x;
return cljs.core._conj((function (){var x__7078__auto____$1 = final_y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})();
var final_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,final_rel);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner_model,cljs.core.cst$kw$layers,new_layers,cljs.core.array_seq([cljs.core.cst$kw$final,((cljs.core.map_QMARK_(final$))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(final$,cljs.core.cst$kw$coords_DASH_rel,final_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,final_abs], 0)):final$)], 0));
} else {
if(cljs.core.ifn_QMARK_(head)){
var forms = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(inner_model);
var forms_new = (function (){var iter__7024__auto__ = ((function (forms,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function vide$parser2$assoc_coords_$_iter__19694(s__19695){
return (new cljs.core.LazySeq(null,((function (forms,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel){
return (function (){
var s__19695__$1 = s__19695;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19695__$1);
if(temp__4657__auto__){
var s__19695__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19695__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19695__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19697 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19696 = (0);
while(true){
if((i__19696 < size__7023__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19696);
cljs.core.chunk_append(b__19697,(function (){var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i);
var forms_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,forms);
var x = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$width,forms_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var form_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__7078__auto__);
})();
var form_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,form_rel);
var form_new = ((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$coords_DASH_rel,form_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,form_abs,cljs.core.cst$kw$parent_DASH_id,id], 0)):form);
return form_new;
})());

var G__19708 = (i__19696 + (1));
i__19696 = G__19708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19697),vide$parser2$assoc_coords_$_iter__19694(cljs.core.chunk_rest(s__19695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19697),null);
}
} else {
var i = cljs.core.first(s__19695__$2);
return cljs.core.cons((function (){var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i);
var forms_up_to = cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,forms);
var x = (function (){var or__6244__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$width,forms_up_to));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})();
var form_rel = (function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),x__7078__auto__);
})();
var form_abs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coords_abs,form_rel);
var form_new = ((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$coords_DASH_rel,form_rel,cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,form_abs,cljs.core.cst$kw$parent_DASH_id,id], 0)):form);
return form_new;
})(),vide$parser2$assoc_coords_$_iter__19694(cljs.core.rest(s__19695__$2)));
}
} else {
return null;
}
break;
}
});})(forms,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
,null,null));
});})(forms,map__19460,map__19460__$1,id,height,width,head,coords_abs,coords_rel))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms)));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner_model,cljs.core.cst$kw$forms,forms_new);
} else {
return null;
}
}
}
} else {
return inner_model;
}
}),(function (p1__19214_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__19214_SHARP_,cljs.core.cst$kw$coords_DASH_rel,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),(0)),cljs.core.array_seq([cljs.core.cst$kw$coords_DASH_abs,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(0)),(0))], 0));
}).call(null,model));
});
vide.parser2.model_pipeline = (function vide$parser2$model_pipeline(form){
return vide.parser2.assoc_coords(vide.parser2.connect_labelled(vide.parser2.eval_syms(vide.parser2.label_form(vide.parser2.convert_seqs(form)))));
});
vide.parser2.parse_defn = (function vide$parser2$parse_defn(defn_form){
var vec__19713 = defn_form;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(0),null);
var func_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(2),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19713,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19713,_,func_name,args,form){
return (function (p1__19709_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19709_SHARP_,null],null));
});})(vec__19713,_,func_name,args,form))
,args)),vide.parser2.model_pipeline(form)], null);
});
