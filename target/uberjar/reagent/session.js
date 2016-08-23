// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21353 = arguments.length;
var i__7320__auto___21354 = (0);
while(true){
if((i__7320__auto___21354 < len__7319__auto___21353)){
args__7326__auto__.push((arguments[i__7320__auto___21354]));

var G__21355 = (i__7320__auto___21354 + (1));
i__7320__auto___21354 = G__21355;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21349){
var vec__21350 = p__21349;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21350,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a)) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq21347){
var G__21348 = cljs.core.first(seq21347);
var seq21347__$1 = cljs.core.next(seq21347);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__21348,seq21347__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21364 = arguments.length;
var i__7320__auto___21365 = (0);
while(true){
if((i__7320__auto___21365 < len__7319__auto___21364)){
args__7326__auto__.push((arguments[i__7320__auto___21365]));

var G__21366 = (i__7320__auto___21365 + (1));
i__7320__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21358){
var vec__21359 = p__21358;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21359,(0),null);
var or__6244__auto__ = (function (){var G__21363 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21363) : cljs.core.deref.call(null,G__21363));
})();
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq21356){
var G__21357 = cljs.core.first(seq21356);
var seq21356__$1 = cljs.core.next(seq21356);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__21357,seq21356__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21369 = arguments.length;
var i__7320__auto___21370 = (0);
while(true){
if((i__7320__auto___21370 < len__7319__auto___21369)){
args__7326__auto__.push((arguments[i__7320__auto___21370]));

var G__21371 = (i__7320__auto___21370 + (1));
i__7320__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq21367){
var G__21368 = cljs.core.first(seq21367);
var seq21367__$1 = cljs.core.next(seq21367);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21368,seq21367__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__21374 = reagent.session.state;
var G__21375 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21374,G__21375) : cljs.core.reset_BANG_.call(null,G__21374,G__21375));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21382 = arguments.length;
var i__7320__auto___21383 = (0);
while(true){
if((i__7320__auto___21383 < len__7319__auto___21382)){
args__7326__auto__.push((arguments[i__7320__auto___21383]));

var G__21384 = (i__7320__auto___21383 + (1));
i__7320__auto___21383 = G__21384;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21378){
var vec__21379 = p__21378;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21379,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq21376){
var G__21377 = cljs.core.first(seq21376);
var seq21376__$1 = cljs.core.next(seq21376);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21377,seq21376__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21391 = arguments.length;
var i__7320__auto___21392 = (0);
while(true){
if((i__7320__auto___21392 < len__7319__auto___21391)){
args__7326__auto__.push((arguments[i__7320__auto___21392]));

var G__21393 = (i__7320__auto___21392 + (1));
i__7320__auto___21392 = G__21393;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21387){
var vec__21388 = p__21387;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21388,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq21385){
var G__21386 = cljs.core.first(seq21385);
var seq21385__$1 = cljs.core.next(seq21385);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21386,seq21385__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21398 = arguments.length;
var i__7320__auto___21399 = (0);
while(true){
if((i__7320__auto___21399 < len__7319__auto___21398)){
args__7326__auto__.push((arguments[i__7320__auto___21399]));

var G__21400 = (i__7320__auto___21399 + (1));
i__7320__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__21394_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__21394_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq21395){
var G__21396 = cljs.core.first(seq21395);
var seq21395__$1 = cljs.core.next(seq21395);
var G__21397 = cljs.core.first(seq21395__$1);
var seq21395__$2 = cljs.core.next(seq21395__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21396,G__21397,seq21395__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21405 = arguments.length;
var i__7320__auto___21406 = (0);
while(true){
if((i__7320__auto___21406 < len__7319__auto___21405)){
args__7326__auto__.push((arguments[i__7320__auto___21406]));

var G__21407 = (i__7320__auto___21406 + (1));
i__7320__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__21401_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__21401_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq21402){
var G__21403 = cljs.core.first(seq21402);
var seq21402__$1 = cljs.core.next(seq21402);
var G__21404 = cljs.core.first(seq21402__$1);
var seq21402__$2 = cljs.core.next(seq21402__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21403,G__21404,seq21402__$2);
});

