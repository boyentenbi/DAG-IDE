// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__18438__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18439__i = 0, G__18439__a = new Array(arguments.length -  0);
while (G__18439__i < G__18439__a.length) {G__18439__a[G__18439__i] = arguments[G__18439__i + 0]; ++G__18439__i;}
  args = new cljs.core.IndexedSeq(G__18439__a,0);
} 
return G__18438__delegate.call(this,args);};
G__18438.cljs$lang$maxFixedArity = 0;
G__18438.cljs$lang$applyTo = (function (arglist__18440){
var args = cljs.core.seq(arglist__18440);
return G__18438__delegate(args);
});
G__18438.cljs$core$IFn$_invoke$arity$variadic = G__18438__delegate;
return G__18438;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18441__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18442__i = 0, G__18442__a = new Array(arguments.length -  0);
while (G__18442__i < G__18442__a.length) {G__18442__a[G__18442__i] = arguments[G__18442__i + 0]; ++G__18442__i;}
  args = new cljs.core.IndexedSeq(G__18442__a,0);
} 
return G__18441__delegate.call(this,args);};
G__18441.cljs$lang$maxFixedArity = 0;
G__18441.cljs$lang$applyTo = (function (arglist__18443){
var args = cljs.core.seq(arglist__18443);
return G__18441__delegate(args);
});
G__18441.cljs$core$IFn$_invoke$arity$variadic = G__18441__delegate;
return G__18441;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
