// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.helpers');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.js');
goog.require('cljs.pprint');
vide.helpers.func_list = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._PLUS_,cljs.core._,cljs.core._STAR_,cljs.core._EQ_,cljs.core.map,cljs.core.reduce,cljs.core.inc,cljs.core.dec,cljs.core.identity,cljs.core.conj,cljs.core.cons,cljs.core.repeat], null);
vide.helpers.func_dict = cljs.core.zipmap(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$map,cljs.core.cst$sym$reduce,cljs.core.cst$sym$inc,cljs.core.cst$sym$dec,cljs.core.cst$sym$identity,cljs.core.cst$sym$conj,cljs.core.cst$sym$cons,cljs.core.cst$sym$repeat], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._PLUS_,cljs.core._,cljs.core._STAR_,cljs.core._EQ_,cljs.core.map,cljs.core.reduce,cljs.core.inc,cljs.core.dec,cljs.core.identity,cljs.core.conj,cljs.core.cons,cljs.core.repeat], null));
vide.helpers.recursive_wrap = (function vide$helpers$recursive_wrap(func){
return (function (thing){
while(true){
var new_thing = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(thing) : func.call(null,thing));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_thing,thing)){
return thing;
} else {
var G__18314 = new_thing;
thing = G__18314;
continue;
}
break;
}
});
});
vide.helpers.do_prn = (function vide$helpers$do_prn(a){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(a);

return a;
});
vide.helpers.drop_nth = (function vide$helpers$drop_nth(myvec,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(myvec,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(myvec,(n + (1)))));
});
vide.helpers.find_indices = (function vide$helpers$find_indices(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__18316_SHARP_,p2__18315_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__18315_SHARP_) : pred.call(null,p2__18315_SHARP_)))){
return p1__18316_SHARP_;
} else {
return null;
}
}),coll);
});
vide.helpers.first_QMARK_ = (function vide$helpers$first_QMARK_(x,coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(coll));
});
vide.helpers.firstx = (function vide$helpers$firstx(thing){
if(cljs.core.sequential_QMARK_(thing)){
return cljs.core.first(thing);
} else {
return thing;
}
});
vide.helpers.evalx = (function vide$helpers$evalx(form){
var or__6244__auto__ = (vide.helpers.func_dict.cljs$core$IFn$_invoke$arity$1 ? vide.helpers.func_dict.cljs$core$IFn$_invoke$arity$1(form) : vide.helpers.func_dict.call(null,form));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null),((function (or__6244__auto__){
return (function (result){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(result);
});})(or__6244__auto__))
);
}
});
vide.helpers.eval_str = (function vide$helpers$eval_str(s){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),cljs.reader.read_string(s),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null),(function (result){
return result;
}));
});
vide.helpers.wrap = (function vide$helpers$wrap(x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
});
vide.helpers.fix_group = (function vide$helpers$fix_group(group){
var vec__18320 = group;
var node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(0),null);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(1),null);
return cljs.core.PersistentHashMap.fromArrays([node_name],[cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs))]);
});
vide.helpers.invert_noninj = (function vide$helpers$invert_noninj(some_map){
var groups = cljs.core.group_by(cljs.core.val,some_map);
var fixed_groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.helpers.fix_group,groups);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,fixed_groups);
});
vide.helpers.mergex = (function vide$helpers$mergex(var_args){
var args__7326__auto__ = [];
var len__7319__auto___18328 = arguments.length;
var i__7320__auto___18329 = (0);
while(true){
if((i__7320__auto___18329 < len__7319__auto___18328)){
args__7326__auto__.push((arguments[i__7320__auto___18329]));

var G__18330 = (i__7320__auto___18329 + (1));
i__7320__auto___18329 = G__18330;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((0) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((0)),(0),null)):null);
return vide.helpers.mergex.cljs$core$IFn$_invoke$arity$variadic(argseq__7327__auto__);
});

vide.helpers.mergex.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18324){
var vec__18325 = p__18324;
var map_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(0),null);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_key,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.array_seq([pairs], 0)))], null);
}),cljs.core.group_by(cljs.core.first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,maps)))));
});

vide.helpers.mergex.cljs$lang$maxFixedArity = (0);

vide.helpers.mergex.cljs$lang$applyTo = (function (seq18323){
return vide.helpers.mergex.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18323));
});

vide.helpers.replace_seq = (function vide$helpers$replace_seq(form){
if(cljs.core.vector_QMARK_(form)){
return cljs.core.cons(cljs.core.vector,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,form));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.cons(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,form));
} else {
return form;

}
}
});
vide.helpers.replace_seqs = (function vide$helpers$replace_seqs(form){
return clojure.walk.postwalk(vide.helpers.replace_seq,form);
});
vide.helpers.try_read = (function vide$helpers$try_read(string){
try{return cljs.reader.read_string(string);
}catch (e18332){if((e18332 instanceof Error)){
var je = e18332;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("caught js exception in try-read: "),cljs.core.str(je)].join('')], 0));
} else {
throw e18332;

}
}});
vide.helpers.try_eval = (function vide$helpers$try_eval(form){
try{return vide.helpers.evalx(form);
}catch (e18334){if((e18334 instanceof Error)){
var je = e18334;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("caught js exception in try-eval: "),cljs.core.str(je)].join('')], 0));
} else {
throw e18334;

}
}});
vide.helpers.ifx = (function vide$helpers$ifx(pred,then,then_args,else$,else_args){
if(cljs.core.truth_(pred)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(then,then_args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(else$,else_args);
}
});
