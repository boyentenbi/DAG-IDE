// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.propagation');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('vide.helpers');
goog.require('vide.parser2');
vide.propagation.prop_values = (function vide$propagation$prop_values(model){
return clojure.walk.postwalk((function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
var map__25980 = inner;
var map__25980__$1 = ((((!((map__25980 == null)))?((((map__25980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25980):map__25980);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25980__$1,cljs.core.cst$kw$head);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25980__$1,cljs.core.cst$kw$id);
var sym_vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25980__$1,cljs.core.cst$kw$sym_DASH_vals);
var eval_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25980__$1,cljs.core.cst$kw$eval_QMARK_);
var evaluation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25980__$1,cljs.core.cst$kw$evaluation);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
var map__25982 = inner;
var map__25982__$1 = ((((!((map__25982 == null)))?((((map__25982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25982):map__25982);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25982__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25982__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25982__$1,cljs.core.cst$kw$else);
var eval_QMARK__then = (function (){var and__6232__auto__ = eval_QMARK_;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(pred);
} else {
return and__6232__auto__;
}
})();
var eval_QMARK__else = (function (){var and__6232__auto__ = eval_QMARK_;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not(cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(pred));
} else {
return and__6232__auto__;
}
})();
var vec__25983 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__25982,map__25982__$1,pred,then,else$,eval_QMARK__then,eval_QMARK__else,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p1__25871_SHARP_){
if(cljs.core.map_QMARK_(p1__25871_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25871_SHARP_,cljs.core.cst$kw$sym_DASH_vals,sym_vals);
} else {
return p1__25871_SHARP_;
}
});})(map__25982,map__25982__$1,pred,then,else$,eval_QMARK__then,eval_QMARK__else,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eval_QMARK_,eval_QMARK__then,eval_QMARK__else], null));
var pred_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983,(0),null);
var then_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983,(1),null);
var else_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25983,(2),null);
var evaluation_new = (cljs.core.truth_(eval_QMARK_)?(cljs.core.truth_(eval_QMARK__then)?cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(then):cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(else$)):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$pred,pred_new,cljs.core.array_seq([cljs.core.cst$kw$then,then_new,cljs.core.cst$kw$else,else_new,cljs.core.cst$kw$evaluation,evaluation_new], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
var map__25987 = inner;
var map__25987__$1 = ((((!((map__25987 == null)))?((((map__25987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25987):map__25987);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25987__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25987__$1,cljs.core.cst$kw$final);
var evaluation_new = (function (){var or__6244__auto__ = cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(final$);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (sym_vals.cljs$core$IFn$_invoke$arity$1 ? sym_vals.cljs$core$IFn$_invoke$arity$1(final$) : sym_vals.call(null,final$));
}
})();
var layers_new = (function (){var iter__7024__auto__ = ((function (map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function vide$propagation$prop_values_$_iter__25989(s__25990){
return (new cljs.core.LazySeq(null,((function (map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (){
var s__25990__$1 = s__25990;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25990__$1);
if(temp__4657__auto__){
var s__25990__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25990__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__25990__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__25992 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__25991 = (0);
while(true){
if((i__25991 < size__7023__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__25991);
cljs.core.chunk_append(b__25992,(function (){var iter__7024__auto__ = ((function (i__25991,layer,c__7022__auto__,size__7023__auto__,b__25992,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function vide$propagation$prop_values_$_iter__25989_$_iter__26031(s__26032){
return (new cljs.core.LazySeq(null,((function (i__25991,layer,c__7022__auto__,size__7023__auto__,b__25992,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (){
var s__26032__$1 = s__26032;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26032__$1);
if(temp__4657__auto____$1){
var s__26032__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26032__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__26032__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__26034 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__26033 = (0);
while(true){
if((i__26033 < size__7023__auto____$1)){
var vec__26043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__26033);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26043,(1),null);
cljs.core.chunk_append(b__26034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$sym_DASH_vals,sym_vals):form)], null));

var G__26084 = (i__26033 + (1));
i__26033 = G__26084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26034),vide$propagation$prop_values_$_iter__25989_$_iter__26031(cljs.core.chunk_rest(s__26032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26034),null);
}
} else {
var vec__26046 = cljs.core.first(s__26032__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26046,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26046,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$sym_DASH_vals,sym_vals):form)], null),vide$propagation$prop_values_$_iter__25989_$_iter__26031(cljs.core.rest(s__26032__$2)));
}
} else {
return null;
}
break;
}
});})(i__25991,layer,c__7022__auto__,size__7023__auto__,b__25992,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,null,null));
});})(i__25991,layer,c__7022__auto__,size__7023__auto__,b__25992,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
;
return iter__7024__auto__(layer);
})());

var G__26085 = (i__25991 + (1));
i__25991 = G__26085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25992),vide$propagation$prop_values_$_iter__25989(cljs.core.chunk_rest(s__25990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25992),null);
}
} else {
var layer = cljs.core.first(s__25990__$2);
return cljs.core.cons((function (){var iter__7024__auto__ = ((function (layer,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function vide$propagation$prop_values_$_iter__25989_$_iter__26049(s__26050){
return (new cljs.core.LazySeq(null,((function (layer,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (){
var s__26050__$1 = s__26050;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26050__$1);
if(temp__4657__auto____$1){
var s__26050__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26050__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26050__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26052 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26051 = (0);
while(true){
if((i__26051 < size__7023__auto__)){
var vec__26061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26051);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(1),null);
cljs.core.chunk_append(b__26052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$sym_DASH_vals,sym_vals):form)], null));

var G__26086 = (i__26051 + (1));
i__26051 = G__26086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26052),vide$propagation$prop_values_$_iter__25989_$_iter__26049(cljs.core.chunk_rest(s__26050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26052),null);
}
} else {
var vec__26064 = cljs.core.first(s__26050__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26064,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26064,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,((cljs.core.map_QMARK_(form))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$sym_DASH_vals,sym_vals):form)], null),vide$propagation$prop_values_$_iter__25989_$_iter__26049(cljs.core.rest(s__26050__$2)));
}
} else {
return null;
}
break;
}
});})(layer,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,null,null));
});})(layer,s__25990__$2,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
;
return iter__7024__auto__(layer);
})(),vide$propagation$prop_values_$_iter__25989(cljs.core.rest(s__25990__$2)));
}
} else {
return null;
}
break;
}
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,null,null));
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
;
return iter__7024__auto__(layers);
})();
var final_new = ((cljs.core.map_QMARK_(final$))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(final$,cljs.core.cst$kw$sym_DASH_vals,sym_vals):final$);
var all_pairs = (function (){var iter__7024__auto__ = ((function (map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function vide$propagation$prop_values_$_iter__26067(s__26068){
return (new cljs.core.LazySeq(null,((function (map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (){
var s__26068__$1 = s__26068;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26068__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__26068__$1,layer,xs__5205__auto__,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function vide$propagation$prop_values_$_iter__26067_$_iter__26069(s__26070){
return (new cljs.core.LazySeq(null,((function (s__26068__$1,layer,xs__5205__auto__,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (){
var s__26070__$1 = s__26070;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26070__$1);
if(temp__4657__auto____$1){
var s__26070__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26070__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26070__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26072 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26071 = (0);
while(true){
if((i__26071 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26071);
cljs.core.chunk_append(b__26072,pair);

var G__26087 = (i__26071 + (1));
i__26071 = G__26087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26072),vide$propagation$prop_values_$_iter__26067_$_iter__26069(cljs.core.chunk_rest(s__26070__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26072),null);
}
} else {
var pair = cljs.core.first(s__26070__$2);
return cljs.core.cons(pair,vide$propagation$prop_values_$_iter__26067_$_iter__26069(cljs.core.rest(s__26070__$2)));
}
} else {
return null;
}
break;
}
});})(s__26068__$1,layer,xs__5205__auto__,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,null,null));
});})(s__26068__$1,layer,xs__5205__auto__,temp__4657__auto__,map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$propagation$prop_values_$_iter__26067(cljs.core.rest(s__26068__$1)));
} else {
var G__26088 = cljs.core.rest(s__26068__$1);
s__26068__$1 = G__26088;
continue;
}
} else {
return null;
}
break;
}
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,null,null));
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
;
return iter__7024__auto__(layers);
})();
var add_sym_vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,all_pairs,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p__26078){
var vec__26079 = p__26078;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(form)], null);
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,all_pairs,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,all_pairs,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p1__25872_SHARP_){
return cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__25872_SHARP_));
});})(map__25987,map__25987__$1,layers,final$,evaluation_new,layers_new,final_new,all_pairs,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,all_pairs)));
var sym_vals_new = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([sym_vals,add_sym_vals], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$layers,layers_new,cljs.core.array_seq([cljs.core.cst$kw$final,final_new,cljs.core.cst$kw$sym_DASH_vals,sym_vals_new,cljs.core.cst$kw$evaluation,evaluation_new], 0));
} else {
if(cljs.core.ifn_QMARK_(head)){
var map__26082 = inner;
var map__26082__$1 = ((((!((map__26082 == null)))?((((map__26082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26082):map__26082);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$forms);
var is_ready = cljs.core.every_QMARK_(((function (map__26082,map__26082__$1,forms,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p1__25873_SHARP_){
var or__6244__auto__ = cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(p1__25873_SHARP_);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sym_vals,p1__25873_SHARP_);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return (cljs.core.not(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__25873_SHARP_))) && (!((p1__25873_SHARP_ instanceof cljs.core.Symbol)));
}
}
});})(map__26082,map__26082__$1,forms,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,forms);
var evaluation_new = (cljs.core.truth_((function (){var and__6232__auto__ = eval_QMARK_;
if(cljs.core.truth_(and__6232__auto__)){
return (is_ready) && (cljs.core.not(evaluation));
} else {
return and__6232__auto__;
}
})())?(function (){var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26082,map__26082__$1,forms,is_ready,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p1__25874_SHARP_){
var or__6244__auto__ = cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(p1__25874_SHARP_);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sym_vals,p1__25874_SHARP_);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__25874_SHARP_,cljs.core.cst$kw$id))){
return null;
} else {
return p1__25874_SHARP_;
}
}
}
});})(map__26082,map__26082__$1,forms,is_ready,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,forms);
var form = cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$fn),args);
var value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$fn),args);
return value;
})():evaluation);
var forms_new = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26082,map__26082__$1,forms,is_ready,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation){
return (function (p1__25875_SHARP_){
if(cljs.core.map_QMARK_(p1__25875_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25875_SHARP_,cljs.core.cst$kw$sym_DASH_vals,sym_vals);
} else {
return p1__25875_SHARP_;
}
});})(map__26082,map__26082__$1,forms,is_ready,evaluation_new,map__25980,map__25980__$1,head,id,sym_vals,eval_QMARK_,evaluation))
,forms);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$forms,forms_new,cljs.core.array_seq([cljs.core.cst$kw$evaluation,evaluation_new], 0));
} else {
return inner;

}
}
}
} else {
return inner;
}
}),model);
});
vide.propagation.set_desc_changed = (function vide$propagation$set_desc_changed(model,input_node_id){
return clojure.walk.postwalk((function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
var map__26203 = inner;
var map__26203__$1 = ((((!((map__26203 == null)))?((((map__26203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26203):map__26203);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$head);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$id);
var raw_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$raw_DASH_input);
var evaluation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$evaluation);
var syms_desc_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$syms_DASH_desc_DASH_changed);
var desc_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$desc_DASH_changed);
var anc_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26203__$1,cljs.core.cst$kw$anc_DASH_changed);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
var map__26205 = inner;
var map__26205__$1 = ((((!((map__26205 == null)))?((((map__26205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26205):map__26205);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26205__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26205__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26205__$1,cljs.core.cst$kw$else);
var syms_anc_changed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26205,map__26205__$1,pred,then,else$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (p1__26089_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26089_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26089_SHARP_], null);
} else {
return null;
}
}
});})(map__26205,map__26205__$1,pred,then,else$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null)], 0));
var desc_changed_new = (function (){var or__6244__auto__ = desc_changed;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.some(cljs.core.cst$kw$desc_DASH_changed,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null));
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return cljs.core.some(cljs.core.set(syms_desc_changed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null));
}
}
})();
var raw_input_new = (cljs.core.truth_((function (){var and__6232__auto__ = desc_changed;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id);
} else {
return and__6232__auto__;
}
})())?null:raw_input);
var evaluation_new = (cljs.core.truth_((function (){var and__6232__auto__ = desc_changed;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id);
} else {
return and__6232__auto__;
}
})())?null:evaluation);
var vec__26206 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26205,map__26205__$1,pred,then,else$,syms_anc_changed,desc_changed_new,raw_input_new,evaluation_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (p1__26090_SHARP_){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(p1__26090_SHARP_);
if(and__6232__auto__){
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26090_SHARP_,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed], 0));
} else {
return p1__26090_SHARP_;
}
});})(map__26205,map__26205__$1,pred,then,else$,syms_anc_changed,desc_changed_new,raw_input_new,evaluation_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null));
var pred_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26206,(0),null);
var then_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26206,(1),null);
var else_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26206,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$desc_DASH_changed,desc_changed_new,cljs.core.array_seq([cljs.core.cst$kw$raw_DASH_input,raw_input_new,cljs.core.cst$kw$evaluation,evaluation_new,cljs.core.cst$kw$pred,pred_new,cljs.core.cst$kw$then,then_new,cljs.core.cst$kw$else,else_new,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
var map__26210 = inner;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26210):map__26210);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,cljs.core.cst$kw$final);
var all_pairs = (function (){var iter__7024__auto__ = ((function (map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26212(s__26213){
return (new cljs.core.LazySeq(null,((function (map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26213__$1 = s__26213;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26213__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__26213__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26212_$_iter__26214(s__26215){
return (new cljs.core.LazySeq(null,((function (s__26213__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26215__$1 = s__26215;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26215__$1);
if(temp__4657__auto____$1){
var s__26215__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26215__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26215__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26217 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26216 = (0);
while(true){
if((i__26216 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26216);
cljs.core.chunk_append(b__26217,pair);

var G__26313 = (i__26216 + (1));
i__26216 = G__26313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26217),vide$propagation$set_desc_changed_$_iter__26212_$_iter__26214(cljs.core.chunk_rest(s__26215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26217),null);
}
} else {
var pair = cljs.core.first(s__26215__$2);
return cljs.core.cons(pair,vide$propagation$set_desc_changed_$_iter__26212_$_iter__26214(cljs.core.rest(s__26215__$2)));
}
} else {
return null;
}
break;
}
});})(s__26213__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(s__26213__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$propagation$set_desc_changed_$_iter__26212(cljs.core.rest(s__26213__$1)));
} else {
var G__26314 = cljs.core.rest(s__26213__$1);
s__26213__$1 = G__26314;
continue;
}
} else {
return null;
}
break;
}
});})(map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(map__26210,map__26210__$1,layers,final$,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
return iter__7024__auto__(layers);
})();
var syms_removed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pairs);
var syms_anc_changed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (p1__26091_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26091_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(anc_changed)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26091_SHARP_], null);
} else {
return null;
}
}
});})(map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,cljs.core.array_seq([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms_removed,final$)], 0));
var bad_pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (p__26223){
var vec__26224 = p__26223;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26224,(1),null);
return cljs.core.cst$kw$desc_DASH_changed.cljs$core$IFn$_invoke$arity$1(form);
});})(map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,all_pairs);
var add_syms_desc_changed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bad_pairs);
var syms_desc_changed_new = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(add_syms_desc_changed,syms_desc_changed));
var layers_new = (function (){var iter__7024__auto__ = ((function (map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26227(s__26228){
return (new cljs.core.LazySeq(null,((function (map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26228__$1 = s__26228;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26228__$1);
if(temp__4657__auto__){
var s__26228__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26228__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26228__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26230 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26229 = (0);
while(true){
if((i__26229 < size__7023__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26229);
cljs.core.chunk_append(b__26230,(function (){var iter__7024__auto__ = ((function (i__26229,layer,c__7022__auto__,size__7023__auto__,b__26230,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26227_$_iter__26269(s__26270){
return (new cljs.core.LazySeq(null,((function (i__26229,layer,c__7022__auto__,size__7023__auto__,b__26230,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26270__$1 = s__26270;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26270__$1);
if(temp__4657__auto____$1){
var s__26270__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26270__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__26270__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__26272 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__26271 = (0);
while(true){
if((i__26271 < size__7023__auto____$1)){
var vec__26281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__26271);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281,(1),null);
cljs.core.chunk_append(b__26272,(function (){var should_reset = (function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(should_reset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new)):form)], null);
})());

var G__26315 = (i__26271 + (1));
i__26271 = G__26315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26272),vide$propagation$set_desc_changed_$_iter__26227_$_iter__26269(cljs.core.chunk_rest(s__26270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26272),null);
}
} else {
var vec__26284 = cljs.core.first(s__26270__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(1),null);
return cljs.core.cons((function (){var should_reset = (function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(should_reset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new)):form)], null);
})(),vide$propagation$set_desc_changed_$_iter__26227_$_iter__26269(cljs.core.rest(s__26270__$2)));
}
} else {
return null;
}
break;
}
});})(i__26229,layer,c__7022__auto__,size__7023__auto__,b__26230,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(i__26229,layer,c__7022__auto__,size__7023__auto__,b__26230,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
return iter__7024__auto__(layer);
})());

var G__26316 = (i__26229 + (1));
i__26229 = G__26316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26230),vide$propagation$set_desc_changed_$_iter__26227(cljs.core.chunk_rest(s__26228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26230),null);
}
} else {
var layer = cljs.core.first(s__26228__$2);
return cljs.core.cons((function (){var iter__7024__auto__ = ((function (layer,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26227_$_iter__26287(s__26288){
return (new cljs.core.LazySeq(null,((function (layer,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26288__$1 = s__26288;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26288__$1);
if(temp__4657__auto____$1){
var s__26288__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26288__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26288__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26290 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26289 = (0);
while(true){
if((i__26289 < size__7023__auto__)){
var vec__26299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26289);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
cljs.core.chunk_append(b__26290,(function (){var should_reset = (function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(should_reset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new)):form)], null);
})());

var G__26317 = (i__26289 + (1));
i__26289 = G__26317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26290),vide$propagation$set_desc_changed_$_iter__26227_$_iter__26287(cljs.core.chunk_rest(s__26288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26290),null);
}
} else {
var vec__26302 = cljs.core.first(s__26288__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(1),null);
return cljs.core.cons((function (){var should_reset = (function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(should_reset)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new)):form)], null);
})(),vide$propagation$set_desc_changed_$_iter__26227_$_iter__26287(cljs.core.rest(s__26288__$2)));
}
} else {
return null;
}
break;
}
});})(layer,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(layer,s__26228__$2,temp__4657__auto__,map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
return iter__7024__auto__(layer);
})(),vide$propagation$set_desc_changed_$_iter__26227(cljs.core.rest(s__26228__$2)));
}
} else {
return null;
}
break;
}
});})(map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(map__26210,map__26210__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,bad_pairs,add_syms_desc_changed,syms_desc_changed_new,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
return iter__7024__auto__(layers);
})();
var final_new = (cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(final$))?(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(final$,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(final$,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed_new)):final$);
var desc_changed_new = cljs.core.boolean$((function (){var or__6244__auto__ = desc_changed;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.some(cljs.core.cst$kw$desc_DASH_changed,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms_removed,final$));
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return cljs.core.some(cljs.core.set(syms_desc_changed),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms_removed,final$));
}
}
})());
var raw_input_new = (((desc_changed_new) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id)))?null:raw_input);
var evaluation_new = (((desc_changed_new) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id)))?null:evaluation);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$layers,layers_new,cljs.core.array_seq([cljs.core.cst$kw$final,final_new,cljs.core.cst$kw$desc_DASH_changed,desc_changed_new,cljs.core.cst$kw$raw_DASH_input,raw_input_new,cljs.core.cst$kw$evaluation,evaluation_new,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
if(cljs.core.ifn_QMARK_(head)){
var map__26305 = inner;
var map__26305__$1 = ((((!((map__26305 == null)))?((((map__26305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26305):map__26305);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26305__$1,cljs.core.cst$kw$forms);
var syms_anc_changed = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26305,map__26305__$1,forms,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (p1__26092_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26092_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26092_SHARP_], null);
} else {
return null;
}
}
});})(map__26305,map__26305__$1,forms,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,cljs.core.array_seq([forms], 0)));
var forms_new = (function (){var iter__7024__auto__ = ((function (map__26305,map__26305__$1,forms,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function vide$propagation$set_desc_changed_$_iter__26307(s__26308){
return (new cljs.core.LazySeq(null,((function (map__26305,map__26305__$1,forms,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed){
return (function (){
var s__26308__$1 = s__26308;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26308__$1);
if(temp__4657__auto__){
var s__26308__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26308__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26308__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26310 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26309 = (0);
while(true){
if((i__26309 < size__7023__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26309);
cljs.core.chunk_append(b__26310,(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed)):form));

var G__26318 = (i__26309 + (1));
i__26309 = G__26318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26310),vide$propagation$set_desc_changed_$_iter__26307(cljs.core.chunk_rest(s__26308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26310),null);
}
} else {
var form = cljs.core.first(s__26308__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form))?(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,syms_desc_changed)):form),vide$propagation$set_desc_changed_$_iter__26307(cljs.core.rest(s__26308__$2)));
}
} else {
return null;
}
break;
}
});})(map__26305,map__26305__$1,forms,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
,null,null));
});})(map__26305,map__26305__$1,forms,syms_anc_changed,map__26203,map__26203__$1,head,id,raw_input,evaluation,syms_desc_changed,desc_changed,anc_changed))
;
return iter__7024__auto__(forms);
})();
var desc_changed_new = cljs.core.boolean$((function (){var or__6244__auto__ = desc_changed;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.some(cljs.core.cst$kw$desc_DASH_changed,forms);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return cljs.core.some(cljs.core.set(syms_desc_changed),forms);
}
}
})());
var raw_input_new = (cljs.core.truth_((function (){var and__6232__auto__ = desc_changed;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id);
} else {
return and__6232__auto__;
}
})())?null:raw_input);
var evaluation_new = (cljs.core.truth_((function (){var and__6232__auto__ = desc_changed;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,input_node_id);
} else {
return and__6232__auto__;
}
})())?null:evaluation);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$forms,forms_new,cljs.core.array_seq([cljs.core.cst$kw$desc_DASH_changed,desc_changed_new,cljs.core.cst$kw$raw_DASH_input,raw_input_new,cljs.core.cst$kw$evaluation,evaluation_new,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
return inner;

}
}
}
} else {
return inner;
}
}),model);
});
vide.propagation.set_anc_changed = (function vide$propagation$set_anc_changed(model){
return clojure.walk.postwalk((function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
var map__26429 = inner;
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26429):map__26429);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26429__$1,cljs.core.cst$kw$head);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26429__$1,cljs.core.cst$kw$id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
var map__26431 = inner;
var map__26431__$1 = ((((!((map__26431 == null)))?((((map__26431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26431):map__26431);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26431__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26431__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26431__$1,cljs.core.cst$kw$else);
var vec__26432 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26431,map__26431__$1,pred,then,else$,map__26429,map__26429__$1,head,id){
return (function (p1__26319_SHARP_){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(p1__26319_SHARP_);
if(and__6232__auto__){
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26319_SHARP_,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0));
} else {
return p1__26319_SHARP_;
}
});})(map__26431,map__26431__$1,pred,then,else$,map__26429,map__26429__$1,head,id))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null));
var pred_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26432,(0),null);
var then_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26432,(1),null);
var else_new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26432,(2),null);
var syms_anc_changed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26431,map__26431__$1,pred,then,else$,vec__26432,pred_new,then_new,else_new,map__26429,map__26429__$1,head,id){
return (function (p1__26320_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26320_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26320_SHARP_], null);
} else {
return null;
}
}
});})(map__26431,map__26431__$1,pred,then,else$,vec__26432,pred_new,then_new,else_new,map__26429,map__26429__$1,head,id))
,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,then,else$], null)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$pred,pred_new,cljs.core.array_seq([cljs.core.cst$kw$then,then_new,cljs.core.cst$kw$else,else_new,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
var map__26436 = inner;
var map__26436__$1 = ((((!((map__26436 == null)))?((((map__26436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26436):map__26436);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26436__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26436__$1,cljs.core.cst$kw$final);
var all_pairs = (function (){var iter__7024__auto__ = ((function (map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26438(s__26439){
return (new cljs.core.LazySeq(null,((function (map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id){
return (function (){
var s__26439__$1 = s__26439;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26439__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__26439__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26438_$_iter__26440(s__26441){
return (new cljs.core.LazySeq(null,((function (s__26439__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id){
return (function (){
var s__26441__$1 = s__26441;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26441__$1);
if(temp__4657__auto____$1){
var s__26441__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26441__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26441__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26443 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26442 = (0);
while(true){
if((i__26442 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26442);
cljs.core.chunk_append(b__26443,pair);

var G__26535 = (i__26442 + (1));
i__26442 = G__26535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26443),vide$propagation$set_anc_changed_$_iter__26438_$_iter__26440(cljs.core.chunk_rest(s__26441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26443),null);
}
} else {
var pair = cljs.core.first(s__26441__$2);
return cljs.core.cons(pair,vide$propagation$set_anc_changed_$_iter__26438_$_iter__26440(cljs.core.rest(s__26441__$2)));
}
} else {
return null;
}
break;
}
});})(s__26439__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id))
,null,null));
});})(s__26439__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$propagation$set_anc_changed_$_iter__26438(cljs.core.rest(s__26439__$1)));
} else {
var G__26536 = cljs.core.rest(s__26439__$1);
s__26439__$1 = G__26536;
continue;
}
} else {
return null;
}
break;
}
});})(map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id))
,null,null));
});})(map__26436,map__26436__$1,layers,final$,map__26429,map__26429__$1,head,id))
;
return iter__7024__auto__(layers);
})();
var syms_removed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pairs);
var syms_anc_changed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,map__26429,map__26429__$1,head,id){
return (function (p1__26321_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26321_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26321_SHARP_], null);
} else {
return null;
}
}
});})(map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,map__26429,map__26429__$1,head,id))
,cljs.core.array_seq([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms_removed,final$)], 0));
var layers_new = (function (){var iter__7024__auto__ = ((function (map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26449(s__26450){
return (new cljs.core.LazySeq(null,((function (map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function (){
var s__26450__$1 = s__26450;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26450__$1);
if(temp__4657__auto__){
var s__26450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26450__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26450__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26452 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26451 = (0);
while(true){
if((i__26451 < size__7023__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26451);
cljs.core.chunk_append(b__26452,(function (){var iter__7024__auto__ = ((function (i__26451,layer,c__7022__auto__,size__7023__auto__,b__26452,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26449_$_iter__26491(s__26492){
return (new cljs.core.LazySeq(null,((function (i__26451,layer,c__7022__auto__,size__7023__auto__,b__26452,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function (){
var s__26492__$1 = s__26492;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26492__$1);
if(temp__4657__auto____$1){
var s__26492__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26492__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__26492__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__26494 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__26493 = (0);
while(true){
if((i__26493 < size__7023__auto____$1)){
var vec__26503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__26493);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26503,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26503,(1),null);
cljs.core.chunk_append(b__26494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form)], null));

var G__26537 = (i__26493 + (1));
i__26493 = G__26537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26494),vide$propagation$set_anc_changed_$_iter__26449_$_iter__26491(cljs.core.chunk_rest(s__26492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26494),null);
}
} else {
var vec__26506 = cljs.core.first(s__26492__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form)], null),vide$propagation$set_anc_changed_$_iter__26449_$_iter__26491(cljs.core.rest(s__26492__$2)));
}
} else {
return null;
}
break;
}
});})(i__26451,layer,c__7022__auto__,size__7023__auto__,b__26452,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
,null,null));
});})(i__26451,layer,c__7022__auto__,size__7023__auto__,b__26452,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
;
return iter__7024__auto__(layer);
})());

var G__26538 = (i__26451 + (1));
i__26451 = G__26538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26452),vide$propagation$set_anc_changed_$_iter__26449(cljs.core.chunk_rest(s__26450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26452),null);
}
} else {
var layer = cljs.core.first(s__26450__$2);
return cljs.core.cons((function (){var iter__7024__auto__ = ((function (layer,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26449_$_iter__26509(s__26510){
return (new cljs.core.LazySeq(null,((function (layer,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function (){
var s__26510__$1 = s__26510;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26510__$1);
if(temp__4657__auto____$1){
var s__26510__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26510__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26510__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26512 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26511 = (0);
while(true){
if((i__26511 < size__7023__auto__)){
var vec__26521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26511);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26521,(1),null);
cljs.core.chunk_append(b__26512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form)], null));

var G__26539 = (i__26511 + (1));
i__26511 = G__26539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26512),vide$propagation$set_anc_changed_$_iter__26449_$_iter__26509(cljs.core.chunk_rest(s__26510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26512),null);
}
} else {
var vec__26524 = cljs.core.first(s__26510__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26524,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.set(syms_anc_changed).call(null,sym);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form)], null),vide$propagation$set_anc_changed_$_iter__26449_$_iter__26509(cljs.core.rest(s__26510__$2)));
}
} else {
return null;
}
break;
}
});})(layer,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
,null,null));
});})(layer,s__26450__$2,temp__4657__auto__,map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
;
return iter__7024__auto__(layer);
})(),vide$propagation$set_anc_changed_$_iter__26449(cljs.core.rest(s__26450__$2)));
}
} else {
return null;
}
break;
}
});})(map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
,null,null));
});})(map__26436,map__26436__$1,layers,final$,all_pairs,syms_removed,syms_anc_changed,map__26429,map__26429__$1,head,id))
;
return iter__7024__auto__(layers);
})();
var final_new = (cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(final$);
if(and__6232__auto__){
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(final$,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):final$);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$layers,layers_new,cljs.core.array_seq([cljs.core.cst$kw$final,final_new,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
if(cljs.core.ifn_QMARK_(head)){
var map__26527 = inner;
var map__26527__$1 = ((((!((map__26527 == null)))?((((map__26527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26527):map__26527);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26527__$1,cljs.core.cst$kw$forms);
var syms_anc_changed = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (map__26527,map__26527__$1,forms,map__26429,map__26429__$1,head,id){
return (function (p1__26322_SHARP_){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26322_SHARP_,cljs.core.cst$kw$syms_DASH_anc_DASH_changed);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26322_SHARP_], null);
} else {
return null;
}
}
});})(map__26527,map__26527__$1,forms,map__26429,map__26429__$1,head,id))
,cljs.core.array_seq([forms], 0)));
var forms_new = (function (){var iter__7024__auto__ = ((function (map__26527,map__26527__$1,forms,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function vide$propagation$set_anc_changed_$_iter__26529(s__26530){
return (new cljs.core.LazySeq(null,((function (map__26527,map__26527__$1,forms,syms_anc_changed,map__26429,map__26429__$1,head,id){
return (function (){
var s__26530__$1 = s__26530;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26530__$1);
if(temp__4657__auto__){
var s__26530__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26530__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26530__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26532 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26531 = (0);
while(true){
if((i__26531 < size__7023__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26531);
cljs.core.chunk_append(b__26532,(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(form);
if(and__6232__auto__){
var and__6232__auto____$1 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__6232__auto____$1)){
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form));

var G__26540 = (i__26531 + (1));
i__26531 = G__26540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26532),vide$propagation$set_anc_changed_$_iter__26529(cljs.core.chunk_rest(s__26530__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26532),null);
}
} else {
var form = cljs.core.first(s__26530__$2);
return cljs.core.cons((cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(form);
if(and__6232__auto__){
var and__6232__auto____$1 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__6232__auto____$1)){
return cljs.core.cst$kw$anc_DASH_changed.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.cst$kw$raw_DASH_input,null,cljs.core.array_seq([cljs.core.cst$kw$evaluation,null,cljs.core.cst$kw$anc_DASH_changed,true], 0)):form),vide$propagation$set_anc_changed_$_iter__26529(cljs.core.rest(s__26530__$2)));
}
} else {
return null;
}
break;
}
});})(map__26527,map__26527__$1,forms,syms_anc_changed,map__26429,map__26429__$1,head,id))
,null,null));
});})(map__26527,map__26527__$1,forms,syms_anc_changed,map__26429,map__26429__$1,head,id))
;
return iter__7024__auto__(forms);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$forms,forms_new,cljs.core.array_seq([cljs.core.cst$kw$syms_DASH_anc_DASH_changed,syms_anc_changed], 0));
} else {
return inner;

}
}
}
} else {
return inner;
}
}),model);
});
vide.propagation.update_model = (function vide$propagation$update_model(input_node_id,model){
var updated = vide.helpers.recursive_wrap(vide.propagation.prop_values).call(null,vide.helpers.recursive_wrap((function (p1__26541_SHARP_){
return vide.propagation.set_desc_changed(p1__26541_SHARP_,input_node_id);
})).call(null,model));
return updated;
});
vide.propagation.model_update_input = (function vide$propagation$model_update_input(p__26542,input_node_id,raw_input,evaluation){
var vec__26546 = p__26542;
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26546,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26546,(1),null);
var updated_model = vide.propagation.update_model(input_node_id,clojure.walk.postwalk(((function (vec__26546,args,model){
return (function (inner){
if((cljs.core.map_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$id),input_node_id))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$raw_DASH_input,raw_input,cljs.core.array_seq([cljs.core.cst$kw$evaluation,evaluation,cljs.core.cst$kw$anc_DASH_changed,true,cljs.core.cst$kw$desc_DASH_changed,true,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,null,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,null,cljs.core.cst$kw$eval_QMARK_,true,cljs.core.cst$kw$sym_DASH_vals,cljs.core.PersistentArrayMap.EMPTY], 0));
} else {
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$anc_DASH_changed,false,cljs.core.array_seq([cljs.core.cst$kw$desc_DASH_changed,false,cljs.core.cst$kw$syms_DASH_anc_DASH_changed,null,cljs.core.cst$kw$syms_DASH_desc_DASH_changed,null,cljs.core.cst$kw$eval_QMARK_,true,cljs.core.cst$kw$sym_DASH_vals,cljs.core.PersistentArrayMap.EMPTY], 0));
} else {
return inner;

}
}
});})(vec__26546,args,model))
,model));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,updated_model], null);
});
vide.propagation.model_update_arg_input = (function vide$propagation$model_update_arg_input(p__26549,arg_sym,raw_input,evaluation){
var vec__26553 = p__26549;
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26553,(1),null);
return clojure.walk.postwalk(((function (vec__26553,args,model){
return (function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("setting :sym-vals of "),cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner)),cljs.core.str("to "),cljs.core.str(cljs.core.PersistentArrayMap.fromArray([arg_sym,evaluation], true, false))].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym_DASH_vals,cljs.core.PersistentArrayMap.fromArray([arg_sym,evaluation], true, false)], null);
})()
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inner,cljs.core.cst$kw$anc_DASH_changed,false,cljs.core.array_seq([cljs.core.cst$kw$desc_DASH_changed,(function (){var temp__4657__auto__ = cljs.core.boolean$(cljs.core.set(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner).call(null,cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner))).call(null,arg_sym));
if(temp__4657__auto__){
var bool = temp__4657__auto__;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner)),cljs.core.str(" had desc-changed set to true")].join('')], 0));

return bool;
} else {
return null;
}
})()], 0))], 0));
} else {
return inner;
}
});})(vec__26553,args,model))
,model);
});
