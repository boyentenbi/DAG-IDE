// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19799 = arguments.length;
var i__7320__auto___19800 = (0);
while(true){
if((i__7320__auto___19800 < len__7319__auto___19799)){
args__7326__auto__.push((arguments[i__7320__auto___19800]));

var G__19801 = (i__7320__auto___19800 + (1));
i__7320__auto___19800 = G__19801;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__7078__auto__ = form;
return cljs.core._conj((function (){var x__7078__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})());
var G__19802 = threaded;
var G__19803 = cljs.core.next(forms__$1);
x__$1 = G__19802;
forms__$1 = G__19803;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19795){
var G__19796 = cljs.core.first(seq19795);
var seq19795__$1 = cljs.core.next(seq19795);
var G__19797 = cljs.core.first(seq19795__$1);
var seq19795__$2 = cljs.core.next(seq19795__$1);
var G__19798 = cljs.core.first(seq19795__$2);
var seq19795__$3 = cljs.core.next(seq19795__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19796,G__19797,G__19798,seq19795__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19808 = arguments.length;
var i__7320__auto___19809 = (0);
while(true){
if((i__7320__auto___19809 < len__7319__auto___19808)){
args__7326__auto__.push((arguments[i__7320__auto___19809]));

var G__19810 = (i__7320__auto___19809 + (1));
i__7320__auto___19809 = G__19810;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.next(form),cljs.core.array_seq([(function (){var x__7078__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__7078__auto__ = form;
return cljs.core._conj((function (){var x__7078__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})());
var G__19811 = threaded;
var G__19812 = cljs.core.next(forms__$1);
x__$1 = G__19811;
forms__$1 = G__19812;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19804){
var G__19805 = cljs.core.first(seq19804);
var seq19804__$1 = cljs.core.next(seq19804);
var G__19806 = cljs.core.first(seq19804__$1);
var seq19804__$2 = cljs.core.next(seq19804__$1);
var G__19807 = cljs.core.first(seq19804__$2);
var seq19804__$3 = cljs.core.next(seq19804__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19805,G__19806,G__19807,seq19804__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args19813 = [];
var len__7319__auto___19821 = arguments.length;
var i__7320__auto___19822 = (0);
while(true){
if((i__7320__auto___19822 < len__7319__auto___19821)){
args19813.push((arguments[i__7320__auto___19822]));

var G__19823 = (i__7320__auto___19822 + (1));
i__7320__auto___19822 = G__19823;
continue;
} else {
}
break;
}

var G__19820 = args19813.length;
switch (G__19820) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args19813.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19814){
var G__19815 = cljs.core.first(seq19814);
var seq19814__$1 = cljs.core.next(seq19814);
var G__19816 = cljs.core.first(seq19814__$1);
var seq19814__$2 = cljs.core.next(seq19814__$1);
var G__19817 = cljs.core.first(seq19814__$2);
var seq19814__$3 = cljs.core.next(seq19814__$2);
var G__19818 = cljs.core.first(seq19814__$3);
var seq19814__$4 = cljs.core.next(seq19814__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19815,G__19816,G__19817,G__19818,seq19814__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19828 = arguments.length;
var i__7320__auto___19829 = (0);
while(true){
if((i__7320__auto___19829 < len__7319__auto___19828)){
args__7326__auto__.push((arguments[i__7320__auto___19829]));

var G__19830 = (i__7320__auto___19829 + (1));
i__7320__auto___19829 = G__19830;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19825){
var G__19826 = cljs.core.first(seq19825);
var seq19825__$1 = cljs.core.next(seq19825);
var G__19827 = cljs.core.first(seq19825__$1);
var seq19825__$2 = cljs.core.next(seq19825__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19826,G__19827,seq19825__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19834 = arguments.length;
var i__7320__auto___19835 = (0);
while(true){
if((i__7320__auto___19835 < len__7319__auto___19834)){
args__7326__auto__.push((arguments[i__7320__auto___19835]));

var G__19836 = (i__7320__auto___19835 + (1));
i__7320__auto___19835 = G__19836;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__7078__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__7078__auto____$2 = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19831){
var G__19832 = cljs.core.first(seq19831);
var seq19831__$1 = cljs.core.next(seq19831);
var G__19833 = cljs.core.first(seq19831__$1);
var seq19831__$2 = cljs.core.next(seq19831__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19832,G__19833,seq19831__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19841 = arguments.length;
var i__7320__auto___19842 = (0);
while(true){
if((i__7320__auto___19842 < len__7319__auto___19841)){
args__7326__auto__.push((arguments[i__7320__auto___19842]));

var G__19843 = (i__7320__auto___19842 + (1));
i__7320__auto___19842 = G__19843;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19837_SHARP_){
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__19837_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19838){
var G__19839 = cljs.core.first(seq19838);
var seq19838__$1 = cljs.core.next(seq19838);
var G__19840 = cljs.core.first(seq19838__$1);
var seq19838__$2 = cljs.core.next(seq19838__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19839,G__19840,seq19838__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19848 = arguments.length;
var i__7320__auto___19849 = (0);
while(true){
if((i__7320__auto___19849 < len__7319__auto___19848)){
args__7326__auto__.push((arguments[i__7320__auto___19849]));

var G__19850 = (i__7320__auto___19849 + (1));
i__7320__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__7078__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19844){
var G__19845 = cljs.core.first(seq19844);
var seq19844__$1 = cljs.core.next(seq19844);
var G__19846 = cljs.core.first(seq19844__$1);
var seq19844__$2 = cljs.core.next(seq19844__$1);
var G__19847 = cljs.core.first(seq19844__$2);
var seq19844__$3 = cljs.core.next(seq19844__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19845,G__19846,G__19847,seq19844__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__19851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__19852 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__19851;
s = G__19852;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__19857){
var vec__19858 = p__19857;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19858,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19865 = arguments.length;
var i__7320__auto___19866 = (0);
while(true){
if((i__7320__auto___19866 < len__7319__auto___19865)){
args__7326__auto__.push((arguments[i__7320__auto___19866]));

var G__19867 = (i__7320__auto___19866 + (1));
i__7320__auto___19866 = G__19867;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19861){
var G__19862 = cljs.core.first(seq19861);
var seq19861__$1 = cljs.core.next(seq19861);
var G__19863 = cljs.core.first(seq19861__$1);
var seq19861__$2 = cljs.core.next(seq19861__$1);
var G__19864 = cljs.core.first(seq19861__$2);
var seq19861__$3 = cljs.core.next(seq19861__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19862,G__19863,G__19864,seq19861__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__19868 = cljs.core.next(params__$1);
var G__19869 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__19870 = lets;
params__$1 = G__19868;
new_params = G__19869;
lets = G__19870;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__19871 = cljs.core.next(params__$1);
var G__19872 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__19873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__19871;
new_params = G__19872;
lets = G__19873;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19880 = arguments.length;
var i__7320__auto___19881 = (0);
while(true){
if((i__7320__auto___19881 < len__7319__auto___19880)){
args__7326__auto__.push((arguments[i__7320__auto___19881]));

var G__19882 = (i__7320__auto___19881 + (1));
i__7320__auto___19881 = G__19882;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__7078__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first(sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__19877 = sig;
var seq__19878 = cljs.core.seq(vec__19877);
var first__19879 = cljs.core.first(seq__19878);
var seq__19878__$1 = cljs.core.next(seq__19878);
var params = first__19879;
var body = seq__19878__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__6244__auto__ = conds;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__7078__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19877,seq__19878,first__19879,seq__19878__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7078__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});})(vec__19877,seq__19878,first__19879,seq__19878__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19877,seq__19878,first__19879,seq__19878__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7078__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});})(vec__19877,seq__19878,first__19879,seq__19878__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19874){
var G__19875 = cljs.core.first(seq19874);
var seq19874__$1 = cljs.core.next(seq19874);
var G__19876 = cljs.core.first(seq19874__$1);
var seq19874__$2 = cljs.core.next(seq19874__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19875,G__19876,seq19874__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19887 = arguments.length;
var i__7320__auto___19888 = (0);
while(true){
if((i__7320__auto___19888 < len__7319__auto___19887)){
args__7326__auto__.push((arguments[i__7320__auto___19888]));

var G__19889 = (i__7320__auto___19888 + (1));
i__7320__auto___19888 = G__19889;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19883){
var G__19884 = cljs.core.first(seq19883);
var seq19883__$1 = cljs.core.next(seq19883);
var G__19885 = cljs.core.first(seq19883__$1);
var seq19883__$2 = cljs.core.next(seq19883__$1);
var G__19886 = cljs.core.first(seq19883__$2);
var seq19883__$3 = cljs.core.next(seq19883__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19884,G__19885,G__19886,seq19883__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args19891 = [];
var len__7319__auto___19900 = arguments.length;
var i__7320__auto___19901 = (0);
while(true){
if((i__7320__auto___19901 < len__7319__auto___19900)){
args19891.push((arguments[i__7320__auto___19901]));

var G__19902 = (i__7320__auto___19901 + (1));
i__7320__auto___19901 = G__19902;
continue;
} else {
}
break;
}

var G__19899 = args19891.length;
switch (G__19899) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args19891.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7338__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7078__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19890__auto__),(function (){var x__7078__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19890__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19890__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19892){
var G__19893 = cljs.core.first(seq19892);
var seq19892__$1 = cljs.core.next(seq19892);
var G__19894 = cljs.core.first(seq19892__$1);
var seq19892__$2 = cljs.core.next(seq19892__$1);
var G__19895 = cljs.core.first(seq19892__$2);
var seq19892__$3 = cljs.core.next(seq19892__$2);
var G__19896 = cljs.core.first(seq19892__$3);
var seq19892__$4 = cljs.core.next(seq19892__$3);
var G__19897 = cljs.core.first(seq19892__$4);
var seq19892__$5 = cljs.core.next(seq19892__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19893,G__19894,G__19895,G__19896,G__19897,seq19892__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args19904 = [];
var len__7319__auto___19907 = arguments.length;
var i__7320__auto___19908 = (0);
while(true){
if((i__7320__auto___19908 < len__7319__auto___19907)){
args19904.push((arguments[i__7320__auto___19908]));

var G__19909 = (i__7320__auto___19908 + (1));
i__7320__auto___19908 = G__19909;
continue;
} else {
}
break;
}

var G__19906 = args19904.length;
switch (G__19906) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args19904.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19916 = arguments.length;
var i__7320__auto___19917 = (0);
while(true){
if((i__7320__auto___19917 < len__7319__auto___19916)){
args__7326__auto__.push((arguments[i__7320__auto___19917]));

var G__19918 = (i__7320__auto___19917 + (1));
i__7320__auto___19917 = G__19918;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19911_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__19911_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19912){
var G__19913 = cljs.core.first(seq19912);
var seq19912__$1 = cljs.core.next(seq19912);
var G__19914 = cljs.core.first(seq19912__$1);
var seq19912__$2 = cljs.core.next(seq19912__$1);
var G__19915 = cljs.core.first(seq19912__$2);
var seq19912__$3 = cljs.core.next(seq19912__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19913,G__19914,G__19915,seq19912__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19923 = arguments.length;
var i__7320__auto___19924 = (0);
while(true){
if((i__7320__auto___19924 < len__7319__auto___19923)){
args__7326__auto__.push((arguments[i__7320__auto___19924]));

var G__19925 = (i__7320__auto___19924 + (1));
i__7320__auto___19924 = G__19925;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19919){
var G__19920 = cljs.core.first(seq19919);
var seq19919__$1 = cljs.core.next(seq19919);
var G__19921 = cljs.core.first(seq19919__$1);
var seq19919__$2 = cljs.core.next(seq19919__$1);
var G__19922 = cljs.core.first(seq19919__$2);
var seq19919__$3 = cljs.core.next(seq19919__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19920,G__19921,G__19922,seq19919__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19930 = arguments.length;
var i__7320__auto___19931 = (0);
while(true){
if((i__7320__auto___19931 < len__7319__auto___19930)){
args__7326__auto__.push((arguments[i__7320__auto___19931]));

var G__19932 = (i__7320__auto___19931 + (1));
i__7320__auto___19931 = G__19932;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__7078__auto__ = test;
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19926){
var G__19927 = cljs.core.first(seq19926);
var seq19926__$1 = cljs.core.next(seq19926);
var G__19928 = cljs.core.first(seq19926__$1);
var seq19926__$2 = cljs.core.next(seq19926__$1);
var G__19929 = cljs.core.first(seq19926__$2);
var seq19926__$3 = cljs.core.next(seq19926__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19927,G__19928,G__19929,seq19926__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19941 = arguments.length;
var i__7320__auto___19942 = (0);
while(true){
if((i__7320__auto___19942 < len__7319__auto___19941)){
args__7326__auto__.push((arguments[i__7320__auto___19942]));

var G__19943 = (i__7320__auto___19942 + (1));
i__7320__auto___19942 = G__19943;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__19938 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__19933__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__19933__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19934){
var G__19935 = cljs.core.first(seq19934);
var seq19934__$1 = cljs.core.next(seq19934);
var G__19936 = cljs.core.first(seq19934__$1);
var seq19934__$2 = cljs.core.next(seq19934__$1);
var G__19937 = cljs.core.first(seq19934__$2);
var seq19934__$3 = cljs.core.next(seq19934__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19935,G__19936,G__19937,seq19934__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19949 = arguments.length;
var i__7320__auto___19950 = (0);
while(true){
if((i__7320__auto___19950 < len__7319__auto___19949)){
args__7326__auto__.push((arguments[i__7320__auto___19950]));

var G__19951 = (i__7320__auto___19950 + (1));
i__7320__auto___19950 = G__19951;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19944__auto__),(function (){var x__7078__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19944__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__19944__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19945){
var G__19946 = cljs.core.first(seq19945);
var seq19945__$1 = cljs.core.next(seq19945);
var G__19947 = cljs.core.first(seq19945__$1);
var seq19945__$2 = cljs.core.next(seq19945__$1);
var G__19948 = cljs.core.first(seq19945__$2);
var seq19945__$3 = cljs.core.next(seq19945__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19946,G__19947,G__19948,seq19945__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19956 = arguments.length;
var i__7320__auto___19957 = (0);
while(true){
if((i__7320__auto___19957 < len__7319__auto___19956)){
args__7326__auto__.push((arguments[i__7320__auto___19957]));

var G__19958 = (i__7320__auto___19957 + (1));
i__7320__auto___19957 = G__19958;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),null),x__7078__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19952){
var G__19953 = cljs.core.first(seq19952);
var seq19952__$1 = cljs.core.next(seq19952);
var G__19954 = cljs.core.first(seq19952__$1);
var seq19952__$2 = cljs.core.next(seq19952__$1);
var G__19955 = cljs.core.first(seq19952__$2);
var seq19952__$3 = cljs.core.next(seq19952__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19953,G__19954,G__19955,seq19952__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19963 = arguments.length;
var i__7320__auto___19964 = (0);
while(true){
if((i__7320__auto___19964 < len__7319__auto___19963)){
args__7326__auto__.push((arguments[i__7320__auto___19964]));

var G__19965 = (i__7320__auto___19964 + (1));
i__7320__auto___19964 = G__19965;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body,(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19959){
var G__19960 = cljs.core.first(seq19959);
var seq19959__$1 = cljs.core.next(seq19959);
var G__19961 = cljs.core.first(seq19959__$1);
var seq19959__$2 = cljs.core.next(seq19959__$1);
var G__19962 = cljs.core.first(seq19959__$2);
var seq19959__$3 = cljs.core.next(seq19959__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19960,G__19961,G__19962,seq19959__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19974 = arguments.length;
var i__7320__auto___19975 = (0);
while(true){
if((i__7320__auto___19975 < len__7319__auto___19974)){
args__7326__auto__.push((arguments[i__7320__auto___19975]));

var G__19976 = (i__7320__auto___19975 + (1));
i__7320__auto___19975 = G__19976;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__19970){
var vec__19971 = p__19970;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19971,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19971,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq19966){
var G__19967 = cljs.core.first(seq19966);
var seq19966__$1 = cljs.core.next(seq19966);
var G__19968 = cljs.core.first(seq19966__$1);
var seq19966__$2 = cljs.core.next(seq19966__$1);
var G__19969 = cljs.core.first(seq19966__$2);
var seq19966__$3 = cljs.core.next(seq19966__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19967,G__19968,G__19969,seq19966__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19985 = arguments.length;
var i__7320__auto___19986 = (0);
while(true){
if((i__7320__auto___19986 < len__7319__auto___19985)){
args__7326__auto__.push((arguments[i__7320__auto___19986]));

var G__19987 = (i__7320__auto___19986 + (1));
i__7320__auto___19986 = G__19987;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__19981){
var vec__19982 = p__19981;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq19977){
var G__19978 = cljs.core.first(seq19977);
var seq19977__$1 = cljs.core.next(seq19977);
var G__19979 = cljs.core.first(seq19977__$1);
var seq19977__$2 = cljs.core.next(seq19977__$1);
var G__19980 = cljs.core.first(seq19977__$2);
var seq19977__$3 = cljs.core.next(seq19977__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19978,G__19979,G__19980,seq19977__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___19993 = arguments.length;
var i__7320__auto___19994 = (0);
while(true){
if((i__7320__auto___19994 < len__7319__auto___19993)){
args__7326__auto__.push((arguments[i__7320__auto___19994]));

var G__19995 = (i__7320__auto___19994 + (1));
i__7320__auto___19994 = G__19995;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq19988){
var G__19989 = cljs.core.first(seq19988);
var seq19988__$1 = cljs.core.next(seq19988);
var G__19990 = cljs.core.first(seq19988__$1);
var seq19988__$2 = cljs.core.next(seq19988__$1);
var G__19991 = cljs.core.first(seq19988__$2);
var seq19988__$3 = cljs.core.next(seq19988__$2);
var G__19992 = cljs.core.first(seq19988__$3);
var seq19988__$4 = cljs.core.next(seq19988__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19989,G__19990,G__19991,G__19992,seq19988__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20000 = arguments.length;
var i__7320__auto___20001 = (0);
while(true){
if((i__7320__auto___20001 < len__7319__auto___20000)){
args__7326__auto__.push((arguments[i__7320__auto___20001]));

var G__20002 = (i__7320__auto___20001 + (1));
i__7320__auto___20001 = G__20002;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq19996){
var G__19997 = cljs.core.first(seq19996);
var seq19996__$1 = cljs.core.next(seq19996);
var G__19998 = cljs.core.first(seq19996__$1);
var seq19996__$2 = cljs.core.next(seq19996__$1);
var G__19999 = cljs.core.first(seq19996__$2);
var seq19996__$3 = cljs.core.next(seq19996__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19997,G__19998,G__19999,seq19996__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20007 = arguments.length;
var i__7320__auto___20008 = (0);
while(true){
if((i__7320__auto___20008 < len__7319__auto___20007)){
args__7326__auto__.push((arguments[i__7320__auto___20008]));

var G__20009 = (i__7320__auto___20008 + (1));
i__7320__auto___20008 = G__20009;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq20003){
var G__20004 = cljs.core.first(seq20003);
var seq20003__$1 = cljs.core.next(seq20003);
var G__20005 = cljs.core.first(seq20003__$1);
var seq20003__$2 = cljs.core.next(seq20003__$1);
var G__20006 = cljs.core.first(seq20003__$2);
var seq20003__$3 = cljs.core.next(seq20003__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20004,G__20005,G__20006,seq20003__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args20011 = [];
var len__7319__auto___20020 = arguments.length;
var i__7320__auto___20021 = (0);
while(true){
if((i__7320__auto___20021 < len__7319__auto___20020)){
args20011.push((arguments[i__7320__auto___20021]));

var G__20022 = (i__7320__auto___20021 + (1));
i__7320__auto___20021 = G__20022;
continue;
} else {
}
break;
}

var G__20019 = args20011.length;
switch (G__20019) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20011.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7338__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__7078__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20010__auto__),(function (){var x__7078__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20010__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20010__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq20012){
var G__20013 = cljs.core.first(seq20012);
var seq20012__$1 = cljs.core.next(seq20012);
var G__20014 = cljs.core.first(seq20012__$1);
var seq20012__$2 = cljs.core.next(seq20012__$1);
var G__20015 = cljs.core.first(seq20012__$2);
var seq20012__$3 = cljs.core.next(seq20012__$2);
var G__20016 = cljs.core.first(seq20012__$3);
var seq20012__$4 = cljs.core.next(seq20012__$3);
var G__20017 = cljs.core.first(seq20012__$4);
var seq20012__$5 = cljs.core.next(seq20012__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__20013,G__20014,G__20015,G__20016,G__20017,seq20012__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20029 = arguments.length;
var i__7320__auto___20030 = (0);
while(true){
if((i__7320__auto___20030 < len__7319__auto___20029)){
args__7326__auto__.push((arguments[i__7320__auto___20030]));

var G__20031 = (i__7320__auto___20030 + (1));
i__7320__auto___20030 = G__20031;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20024__auto__),(function (){var x__7078__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20024__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__20024__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq20025){
var G__20026 = cljs.core.first(seq20025);
var seq20025__$1 = cljs.core.next(seq20025);
var G__20027 = cljs.core.first(seq20025__$1);
var seq20025__$2 = cljs.core.next(seq20025__$1);
var G__20028 = cljs.core.first(seq20025__$2);
var seq20025__$3 = cljs.core.next(seq20025__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__20026,G__20027,G__20028,seq20025__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20032_SHARP_){
if(cljs.core.seq_QMARK_(p1__20032_SHARP_)){
return cljs.core.first(p1__20032_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__20032_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__20032_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__20033_SHARP_){
return cljs.core.vector_QMARK_(p1__20033_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first(bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__20034 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__20035 = cljs.core.next(fdecls);
ret = G__20034;
fdecls = G__20035;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__7078__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.array_seq([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.array_seq([cljs.core._conj((function (){var x__7078__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq)], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__20059 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__20060 = n;
var G__20061 = cljs.core.nnext(bs);
var G__20062 = true;
ret = G__20059;
n = G__20060;
bs = G__20061;
seen_rest_QMARK_ = G__20062;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__20063 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.array_seq([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7078__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7078__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__7078__auto__ = gvec;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__20064 = (n + (1));
var G__20065 = cljs.core.next(bs);
var G__20066 = seen_rest_QMARK_;
ret = G__20063;
n = G__20064;
bs = G__20065;
seen_rest_QMARK_ = G__20066;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.array_seq([(function (){var x__7078__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.array_seq([(function (){var x__7078__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))));
var bes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (p1__20036_SHARP_,p2__20037_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20036_SHARP_,p2__20037_SHARP_,cljs.core.val(entry).call(null,p2__20037_SHARP_));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.array_seq([cljs.core.cst$kw$or], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__20038_SHARP_){
if((p1__20038_SHARP_ instanceof cljs.core.Keyword)){
return p1__20038_SHARP_;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(p1__20038_SHARP_)].join(''));
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.cst$kw$strs,cljs.core.str,cljs.core.cst$kw$syms,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__20039_SHARP_){
return cljs.core._conj((function (){var x__7078__auto__ = p1__20039_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$quote);
});})(ret,gmap,defaults,pvec,bents))
], null));
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var bv = ((cljs.core.contains_QMARK_(defaults,bb))?cljs.core._conj((function (){var x__7078__auto__ = gmap;
return cljs.core._conj((function (){var x__7078__auto____$1 = bk;
return cljs.core._conj((function (){var x__7078__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(bb) : defaults.call(null,bb));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj((function (){var x__7078__auto__ = gmap;
return cljs.core._conj((function (){var x__7078__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__20067 = (((bb instanceof cljs.core.Symbol))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(cljs.core.namespace(bb))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(bb)):bb)),bv):(((bb instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(bb)),cljs.core.array_seq([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv)
));
var G__20068 = cljs.core.next(bes);
ret = G__20067;
bes = G__20068;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__20040_SHARP_){
return (cljs.core.first(p1__20040_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7078__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__7078__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20073 = arguments.length;
var i__7320__auto___20074 = (0);
while(true){
if((i__7320__auto___20074 < len__7319__auto___20073)){
args__7326__auto__.push((arguments[i__7320__auto___20074]));

var G__20075 = (i__7320__auto___20074 + (1));
i__7320__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__7078__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq20069){
var G__20070 = cljs.core.first(seq20069);
var seq20069__$1 = cljs.core.next(seq20069);
var G__20071 = cljs.core.first(seq20069__$1);
var seq20069__$2 = cljs.core.next(seq20069__$1);
var G__20072 = cljs.core.first(seq20069__$2);
var seq20069__$3 = cljs.core.next(seq20069__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__20070,G__20071,G__20072,seq20069__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20084 = arguments.length;
var i__7320__auto___20085 = (0);
while(true){
if((i__7320__auto___20085 < len__7319__auto___20084)){
args__7326__auto__.push((arguments[i__7320__auto___20085]));

var G__20086 = (i__7320__auto___20085 + (1));
i__7320__auto___20085 = G__20086;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7078__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__20080){
var vec__20081 = p__20080;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20081,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20081,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq20076){
var G__20077 = cljs.core.first(seq20076);
var seq20076__$1 = cljs.core.next(seq20076);
var G__20078 = cljs.core.first(seq20076__$1);
var seq20076__$2 = cljs.core.next(seq20076__$1);
var G__20079 = cljs.core.first(seq20076__$2);
var seq20076__$3 = cljs.core.next(seq20076__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__20077,G__20078,G__20079,seq20076__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20087_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(p1__20087_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap], true)),cljs.core.iterate((function (p__20088){
var vec__20089 = p__20088;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20089,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20095 = arguments.length;
var i__7320__auto___20096 = (0);
while(true){
if((i__7320__auto___20096 < len__7319__auto___20095)){
args__7326__auto__.push((arguments[i__7320__auto___20096]));

var G__20097 = (i__7320__auto___20096 + (1));
i__7320__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq20092){
var G__20093 = cljs.core.first(seq20092);
var seq20092__$1 = cljs.core.next(seq20092);
var G__20094 = cljs.core.first(seq20092__$1);
var seq20092__$2 = cljs.core.next(seq20092__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__20093,G__20094,seq20092__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__6232__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__6232__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__6232__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args20101 = [];
var len__7319__auto___20108 = arguments.length;
var i__7320__auto___20109 = (0);
while(true){
if((i__7320__auto___20109 < len__7319__auto___20108)){
args20101.push((arguments[i__7320__auto___20109]));

var G__20110 = (i__7320__auto___20109 + (1));
i__7320__auto___20109 = G__20110;
continue;
} else {
}
break;
}

var G__20107 = args20101.length;
switch (G__20107) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20101.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7338__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__20098_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__20098_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__20099_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20099_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7078__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__20100__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__20100__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__20100__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq20102){
var G__20103 = cljs.core.first(seq20102);
var seq20102__$1 = cljs.core.next(seq20102);
var G__20104 = cljs.core.first(seq20102__$1);
var seq20102__$2 = cljs.core.next(seq20102__$1);
var G__20105 = cljs.core.first(seq20102__$2);
var seq20102__$3 = cljs.core.next(seq20102__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__20103,G__20104,G__20105,seq20102__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args20115 = [];
var len__7319__auto___20122 = arguments.length;
var i__7320__auto___20123 = (0);
while(true){
if((i__7320__auto___20123 < len__7319__auto___20122)){
args20115.push((arguments[i__7320__auto___20123]));

var G__20124 = (i__7320__auto___20123 + (1));
i__7320__auto___20123 = G__20124;
continue;
} else {
}
break;
}

var G__20121 = args20115.length;
switch (G__20121) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20115.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7338__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__20112_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__20112_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__20113_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20113_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7078__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__20114__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__20114__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__20114__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq20116){
var G__20117 = cljs.core.first(seq20116);
var seq20116__$1 = cljs.core.next(seq20116);
var G__20118 = cljs.core.first(seq20116__$1);
var seq20116__$2 = cljs.core.next(seq20116__$1);
var G__20119 = cljs.core.first(seq20116__$2);
var seq20116__$3 = cljs.core.next(seq20116__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__20117,G__20118,G__20119,seq20116__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = obj;
return cljs.core._conj((function (){var x__7078__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = key;
return cljs.core._conj((function (){var x__7078__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__7078__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__20130 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__20131 = cljs.core.seq(vec__20130);
var first__20132 = cljs.core.first(seq__20131);
var seq__20131__$1 = cljs.core.next(seq__20131);
var x = first__20132;
var ys = seq__20131__$1;
return cljs.core._conj((function (){var x__7078__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20130,seq__20131,first__20132,seq__20131__$1,x,ys){
return (function (p1__20126_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace(p1__20126_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__20130,seq__20131,first__20132,seq__20131__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj((function (){var x__7078__auto__ = cast_expr;
return cljs.core._conj((function (){var x__7078__auto____$1 = x;
return cljs.core._conj((function (){var x__7078__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__7078__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = a;
return cljs.core._conj((function (){var x__7078__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__20133__auto__),(function (){var x__7078__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20134__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20134__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__20133__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args20135 = [];
var len__7319__auto___20143 = arguments.length;
var i__7320__auto___20144 = (0);
while(true){
if((i__7320__auto___20144 < len__7319__auto___20143)){
args20135.push((arguments[i__7320__auto___20144]));

var G__20145 = (i__7320__auto___20144 + (1));
i__7320__auto___20144 = G__20145;
continue;
} else {
}
break;
}

var G__20142 = args20135.length;
switch (G__20142) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20135.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = a;
return cljs.core._conj((function (){var x__7078__auto____$1 = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7078__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq20136){
var G__20137 = cljs.core.first(seq20136);
var seq20136__$1 = cljs.core.next(seq20136);
var G__20138 = cljs.core.first(seq20136__$1);
var seq20136__$2 = cljs.core.next(seq20136__$1);
var G__20139 = cljs.core.first(seq20136__$2);
var seq20136__$3 = cljs.core.next(seq20136__$2);
var G__20140 = cljs.core.first(seq20136__$3);
var seq20136__$4 = cljs.core.next(seq20136__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__20137,G__20138,G__20139,G__20140,seq20136__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args20147 = [];
var len__7319__auto___20156 = arguments.length;
var i__7320__auto___20157 = (0);
while(true){
if((i__7320__auto___20157 < len__7319__auto___20156)){
args20147.push((arguments[i__7320__auto___20157]));

var G__20158 = (i__7320__auto___20157 + (1));
i__7320__auto___20157 = G__20158;
continue;
} else {
}
break;
}

var G__20155 = args20147.length;
switch (G__20155) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20147.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7338__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = a;
return cljs.core._conj((function (){var x__7078__auto____$1 = i;
return cljs.core._conj((function (){var x__7078__auto____$2 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7078__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq20148){
var G__20149 = cljs.core.first(seq20148);
var seq20148__$1 = cljs.core.next(seq20148);
var G__20150 = cljs.core.first(seq20148__$1);
var seq20148__$2 = cljs.core.next(seq20148__$1);
var G__20151 = cljs.core.first(seq20148__$2);
var seq20148__$3 = cljs.core.next(seq20148__$2);
var G__20152 = cljs.core.first(seq20148__$3);
var seq20148__$4 = cljs.core.next(seq20148__$3);
var G__20153 = cljs.core.first(seq20148__$4);
var seq20148__$5 = cljs.core.next(seq20148__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__20149,G__20150,G__20151,G__20152,G__20153,seq20148__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args20160 = [];
var len__7319__auto___20168 = arguments.length;
var i__7320__auto___20169 = (0);
while(true){
if((i__7320__auto___20169 < len__7319__auto___20168)){
args20160.push((arguments[i__7320__auto___20169]));

var G__20170 = (i__7320__auto___20169 + (1));
i__7320__auto___20169 = G__20170;
continue;
} else {
}
break;
}

var G__20167 = args20160.length;
switch (G__20167) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20160.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq20161){
var G__20162 = cljs.core.first(seq20161);
var seq20161__$1 = cljs.core.next(seq20161);
var G__20163 = cljs.core.first(seq20161__$1);
var seq20161__$2 = cljs.core.next(seq20161__$1);
var G__20164 = cljs.core.first(seq20161__$2);
var seq20161__$3 = cljs.core.next(seq20161__$2);
var G__20165 = cljs.core.first(seq20161__$3);
var seq20161__$4 = cljs.core.next(seq20161__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__20162,G__20163,G__20164,G__20165,seq20161__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20175 = arguments.length;
var i__7320__auto___20176 = (0);
while(true){
if((i__7320__auto___20176 < len__7319__auto___20175)){
args__7326__auto__.push((arguments[i__7320__auto___20176]));

var G__20177 = (i__7320__auto___20176 + (1));
i__7320__auto___20176 = G__20177;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq20172){
var G__20173 = cljs.core.first(seq20172);
var seq20172__$1 = cljs.core.next(seq20172);
var G__20174 = cljs.core.first(seq20172__$1);
var seq20172__$2 = cljs.core.next(seq20172__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__20173,G__20174,seq20172__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20181 = arguments.length;
var i__7320__auto___20182 = (0);
while(true){
if((i__7320__auto___20182 < len__7319__auto___20181)){
args__7326__auto__.push((arguments[i__7320__auto___20182]));

var G__20183 = (i__7320__auto___20182 + (1));
i__7320__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq20178){
var G__20179 = cljs.core.first(seq20178);
var seq20178__$1 = cljs.core.next(seq20178);
var G__20180 = cljs.core.first(seq20178__$1);
var seq20178__$2 = cljs.core.next(seq20178__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__20179,G__20180,seq20178__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20187 = arguments.length;
var i__7320__auto___20188 = (0);
while(true){
if((i__7320__auto___20188 < len__7319__auto___20187)){
args__7326__auto__.push((arguments[i__7320__auto___20188]));

var G__20189 = (i__7320__auto___20188 + (1));
i__7320__auto___20188 = G__20189;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq20184){
var G__20185 = cljs.core.first(seq20184);
var seq20184__$1 = cljs.core.next(seq20184);
var G__20186 = cljs.core.first(seq20184__$1);
var seq20184__$2 = cljs.core.next(seq20184__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__20185,G__20186,seq20184__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20193 = arguments.length;
var i__7320__auto___20194 = (0);
while(true){
if((i__7320__auto___20194 < len__7319__auto___20193)){
args__7326__auto__.push((arguments[i__7320__auto___20194]));

var G__20195 = (i__7320__auto___20194 + (1));
i__7320__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq20190){
var G__20191 = cljs.core.first(seq20190);
var seq20190__$1 = cljs.core.next(seq20190);
var G__20192 = cljs.core.first(seq20190__$1);
var seq20190__$2 = cljs.core.next(seq20190__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__20191,G__20192,seq20190__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20199 = arguments.length;
var i__7320__auto___20200 = (0);
while(true){
if((i__7320__auto___20200 < len__7319__auto___20199)){
args__7326__auto__.push((arguments[i__7320__auto___20200]));

var G__20201 = (i__7320__auto___20200 + (1));
i__7320__auto___20200 = G__20201;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq20196){
var G__20197 = cljs.core.first(seq20196);
var seq20196__$1 = cljs.core.next(seq20196);
var G__20198 = cljs.core.first(seq20196__$1);
var seq20196__$2 = cljs.core.next(seq20196__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__20197,G__20198,seq20196__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mod),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20205 = arguments.length;
var i__7320__auto___20206 = (0);
while(true){
if((i__7320__auto___20206 < len__7319__auto___20205)){
args__7326__auto__.push((arguments[i__7320__auto___20206]));

var G__20207 = (i__7320__auto___20206 + (1));
i__7320__auto___20206 = G__20207;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq20202){
var G__20203 = cljs.core.first(seq20202);
var seq20202__$1 = cljs.core.next(seq20202);
var G__20204 = cljs.core.first(seq20202__$1);
var seq20202__$2 = cljs.core.next(seq20202__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__20203,G__20204,seq20202__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20211 = arguments.length;
var i__7320__auto___20212 = (0);
while(true){
if((i__7320__auto___20212 < len__7319__auto___20211)){
args__7326__auto__.push((arguments[i__7320__auto___20212]));

var G__20213 = (i__7320__auto___20212 + (1));
i__7320__auto___20212 = G__20213;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq20208){
var G__20209 = cljs.core.first(seq20208);
var seq20208__$1 = cljs.core.next(seq20208);
var G__20210 = cljs.core.first(seq20208__$1);
var seq20208__$2 = cljs.core.next(seq20208__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__20209,G__20210,seq20208__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args20214 = [];
var len__7319__auto___20222 = arguments.length;
var i__7320__auto___20223 = (0);
while(true){
if((i__7320__auto___20223 < len__7319__auto___20222)){
args20214.push((arguments[i__7320__auto___20223]));

var G__20224 = (i__7320__auto___20223 + (1));
i__7320__auto___20223 = G__20224;
continue;
} else {
}
break;
}

var G__20221 = args20214.length;
switch (G__20221) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20214.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq20215){
var G__20216 = cljs.core.first(seq20215);
var seq20215__$1 = cljs.core.next(seq20215);
var G__20217 = cljs.core.first(seq20215__$1);
var seq20215__$2 = cljs.core.next(seq20215__$1);
var G__20218 = cljs.core.first(seq20215__$2);
var seq20215__$3 = cljs.core.next(seq20215__$2);
var G__20219 = cljs.core.first(seq20215__$3);
var seq20215__$4 = cljs.core.next(seq20215__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__20216,G__20217,G__20218,G__20219,seq20215__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args20226 = [];
var len__7319__auto___20234 = arguments.length;
var i__7320__auto___20235 = (0);
while(true){
if((i__7320__auto___20235 < len__7319__auto___20234)){
args20226.push((arguments[i__7320__auto___20235]));

var G__20236 = (i__7320__auto___20235 + (1));
i__7320__auto___20235 = G__20236;
continue;
} else {
}
break;
}

var G__20233 = args20226.length;
switch (G__20233) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20226.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq20227){
var G__20228 = cljs.core.first(seq20227);
var seq20227__$1 = cljs.core.next(seq20227);
var G__20229 = cljs.core.first(seq20227__$1);
var seq20227__$2 = cljs.core.next(seq20227__$1);
var G__20230 = cljs.core.first(seq20227__$2);
var seq20227__$3 = cljs.core.next(seq20227__$2);
var G__20231 = cljs.core.first(seq20227__$3);
var seq20227__$4 = cljs.core.next(seq20227__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20228,G__20229,G__20230,G__20231,seq20227__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args20238 = [];
var len__7319__auto___20246 = arguments.length;
var i__7320__auto___20247 = (0);
while(true){
if((i__7320__auto___20247 < len__7319__auto___20246)){
args20238.push((arguments[i__7320__auto___20247]));

var G__20248 = (i__7320__auto___20247 + (1));
i__7320__auto___20247 = G__20248;
continue;
} else {
}
break;
}

var G__20245 = args20238.length;
switch (G__20245) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20238.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq20239){
var G__20240 = cljs.core.first(seq20239);
var seq20239__$1 = cljs.core.next(seq20239);
var G__20241 = cljs.core.first(seq20239__$1);
var seq20239__$2 = cljs.core.next(seq20239__$1);
var G__20242 = cljs.core.first(seq20239__$2);
var seq20239__$3 = cljs.core.next(seq20239__$2);
var G__20243 = cljs.core.first(seq20239__$3);
var seq20239__$4 = cljs.core.next(seq20239__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__20240,G__20241,G__20242,G__20243,seq20239__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args20250 = [];
var len__7319__auto___20258 = arguments.length;
var i__7320__auto___20259 = (0);
while(true){
if((i__7320__auto___20259 < len__7319__auto___20258)){
args20250.push((arguments[i__7320__auto___20259]));

var G__20260 = (i__7320__auto___20259 + (1));
i__7320__auto___20259 = G__20260;
continue;
} else {
}
break;
}

var G__20257 = args20250.length;
switch (G__20257) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20250.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq20251){
var G__20252 = cljs.core.first(seq20251);
var seq20251__$1 = cljs.core.next(seq20251);
var G__20253 = cljs.core.first(seq20251__$1);
var seq20251__$2 = cljs.core.next(seq20251__$1);
var G__20254 = cljs.core.first(seq20251__$2);
var seq20251__$3 = cljs.core.next(seq20251__$2);
var G__20255 = cljs.core.first(seq20251__$3);
var seq20251__$4 = cljs.core.next(seq20251__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__20252,G__20253,G__20254,G__20255,seq20251__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args20262 = [];
var len__7319__auto___20270 = arguments.length;
var i__7320__auto___20271 = (0);
while(true){
if((i__7320__auto___20271 < len__7319__auto___20270)){
args20262.push((arguments[i__7320__auto___20271]));

var G__20272 = (i__7320__auto___20271 + (1));
i__7320__auto___20271 = G__20272;
continue;
} else {
}
break;
}

var G__20269 = args20262.length;
switch (G__20269) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20262.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq20263){
var G__20264 = cljs.core.first(seq20263);
var seq20263__$1 = cljs.core.next(seq20263);
var G__20265 = cljs.core.first(seq20263__$1);
var seq20263__$2 = cljs.core.next(seq20263__$1);
var G__20266 = cljs.core.first(seq20263__$2);
var seq20263__$3 = cljs.core.next(seq20263__$2);
var G__20267 = cljs.core.first(seq20263__$3);
var seq20263__$4 = cljs.core.next(seq20263__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__20264,G__20265,G__20266,G__20267,seq20263__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args20274 = [];
var len__7319__auto___20282 = arguments.length;
var i__7320__auto___20283 = (0);
while(true){
if((i__7320__auto___20283 < len__7319__auto___20282)){
args20274.push((arguments[i__7320__auto___20283]));

var G__20284 = (i__7320__auto___20283 + (1));
i__7320__auto___20283 = G__20284;
continue;
} else {
}
break;
}

var G__20281 = args20274.length;
switch (G__20281) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20274.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq20275){
var G__20276 = cljs.core.first(seq20275);
var seq20275__$1 = cljs.core.next(seq20275);
var G__20277 = cljs.core.first(seq20275__$1);
var seq20275__$2 = cljs.core.next(seq20275__$1);
var G__20278 = cljs.core.first(seq20275__$2);
var seq20275__$3 = cljs.core.next(seq20275__$2);
var G__20279 = cljs.core.first(seq20275__$3);
var seq20275__$4 = cljs.core.next(seq20275__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20276,G__20277,G__20278,G__20279,seq20275__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args20286 = [];
var len__7319__auto___20294 = arguments.length;
var i__7320__auto___20295 = (0);
while(true){
if((i__7320__auto___20295 < len__7319__auto___20294)){
args20286.push((arguments[i__7320__auto___20295]));

var G__20296 = (i__7320__auto___20295 + (1));
i__7320__auto___20295 = G__20296;
continue;
} else {
}
break;
}

var G__20293 = args20286.length;
switch (G__20293) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20286.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq20287){
var G__20288 = cljs.core.first(seq20287);
var seq20287__$1 = cljs.core.next(seq20287);
var G__20289 = cljs.core.first(seq20287__$1);
var seq20287__$2 = cljs.core.next(seq20287__$1);
var G__20290 = cljs.core.first(seq20287__$2);
var seq20287__$3 = cljs.core.next(seq20287__$2);
var G__20291 = cljs.core.first(seq20287__$3);
var seq20287__$4 = cljs.core.next(seq20287__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__20288,G__20289,G__20290,G__20291,seq20287__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args20298 = [];
var len__7319__auto___20306 = arguments.length;
var i__7320__auto___20307 = (0);
while(true){
if((i__7320__auto___20307 < len__7319__auto___20306)){
args20298.push((arguments[i__7320__auto___20307]));

var G__20308 = (i__7320__auto___20307 + (1));
i__7320__auto___20307 = G__20308;
continue;
} else {
}
break;
}

var G__20305 = args20298.length;
switch (G__20305) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20298.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq20299){
var G__20300 = cljs.core.first(seq20299);
var seq20299__$1 = cljs.core.next(seq20299);
var G__20301 = cljs.core.first(seq20299__$1);
var seq20299__$2 = cljs.core.next(seq20299__$1);
var G__20302 = cljs.core.first(seq20299__$2);
var seq20299__$3 = cljs.core.next(seq20299__$2);
var G__20303 = cljs.core.first(seq20299__$3);
var seq20299__$4 = cljs.core.next(seq20299__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20300,G__20301,G__20302,G__20303,seq20299__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args20310 = [];
var len__7319__auto___20318 = arguments.length;
var i__7320__auto___20319 = (0);
while(true){
if((i__7320__auto___20319 < len__7319__auto___20318)){
args20310.push((arguments[i__7320__auto___20319]));

var G__20320 = (i__7320__auto___20319 + (1));
i__7320__auto___20319 = G__20320;
continue;
} else {
}
break;
}

var G__20317 = args20310.length;
switch (G__20317) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20310.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq20311){
var G__20312 = cljs.core.first(seq20311);
var seq20311__$1 = cljs.core.next(seq20311);
var G__20313 = cljs.core.first(seq20311__$1);
var seq20311__$2 = cljs.core.next(seq20311__$1);
var G__20314 = cljs.core.first(seq20311__$2);
var seq20311__$3 = cljs.core.next(seq20311__$2);
var G__20315 = cljs.core.first(seq20311__$3);
var seq20311__$4 = cljs.core.next(seq20311__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20312,G__20313,G__20314,G__20315,seq20311__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args20324 = [];
var len__7319__auto___20332 = arguments.length;
var i__7320__auto___20333 = (0);
while(true){
if((i__7320__auto___20333 < len__7319__auto___20332)){
args20324.push((arguments[i__7320__auto___20333]));

var G__20334 = (i__7320__auto___20333 + (1));
i__7320__auto___20333 = G__20334;
continue;
} else {
}
break;
}

var G__20331 = args20324.length;
switch (G__20331) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20324.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20322__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20323__auto__),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20322__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20323__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20322__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20323__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq20325){
var G__20326 = cljs.core.first(seq20325);
var seq20325__$1 = cljs.core.next(seq20325);
var G__20327 = cljs.core.first(seq20325__$1);
var seq20325__$2 = cljs.core.next(seq20325__$1);
var G__20328 = cljs.core.first(seq20325__$2);
var seq20325__$3 = cljs.core.next(seq20325__$2);
var G__20329 = cljs.core.first(seq20325__$3);
var seq20325__$4 = cljs.core.next(seq20325__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__20326,G__20327,G__20328,G__20329,seq20325__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args20338 = [];
var len__7319__auto___20346 = arguments.length;
var i__7320__auto___20347 = (0);
while(true){
if((i__7320__auto___20347 < len__7319__auto___20346)){
args20338.push((arguments[i__7320__auto___20347]));

var G__20348 = (i__7320__auto___20347 + (1));
i__7320__auto___20347 = G__20348;
continue;
} else {
}
break;
}

var G__20345 = args20338.length;
switch (G__20345) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20338.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20336__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20337__auto__),(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20336__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20337__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20336__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__20337__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq20339){
var G__20340 = cljs.core.first(seq20339);
var seq20339__$1 = cljs.core.next(seq20339);
var G__20341 = cljs.core.first(seq20339__$1);
var seq20339__$2 = cljs.core.next(seq20339__$1);
var G__20342 = cljs.core.first(seq20339__$2);
var seq20339__$3 = cljs.core.next(seq20339__$2);
var G__20343 = cljs.core.first(seq20339__$3);
var seq20339__$4 = cljs.core.next(seq20339__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__20340,G__20341,G__20342,G__20343,seq20339__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = num;
return cljs.core._conj((function (){var x__7078__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args20350 = [];
var len__7319__auto___20358 = arguments.length;
var i__7320__auto___20359 = (0);
while(true){
if((i__7320__auto___20359 < len__7319__auto___20358)){
args20350.push((arguments[i__7320__auto___20359]));

var G__20360 = (i__7320__auto___20359 + (1));
i__7320__auto___20359 = G__20360;
continue;
} else {
}
break;
}

var G__20357 = args20350.length;
switch (G__20357) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20350.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq20351){
var G__20352 = cljs.core.first(seq20351);
var seq20351__$1 = cljs.core.next(seq20351);
var G__20353 = cljs.core.first(seq20351__$1);
var seq20351__$2 = cljs.core.next(seq20351__$1);
var G__20354 = cljs.core.first(seq20351__$2);
var seq20351__$3 = cljs.core.next(seq20351__$2);
var G__20355 = cljs.core.first(seq20351__$3);
var seq20351__$4 = cljs.core.next(seq20351__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20352,G__20353,G__20354,G__20355,seq20351__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args20362 = [];
var len__7319__auto___20370 = arguments.length;
var i__7320__auto___20371 = (0);
while(true){
if((i__7320__auto___20371 < len__7319__auto___20370)){
args20362.push((arguments[i__7320__auto___20371]));

var G__20372 = (i__7320__auto___20371 + (1));
i__7320__auto___20371 = G__20372;
continue;
} else {
}
break;
}

var G__20369 = args20362.length;
switch (G__20369) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20362.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq20363){
var G__20364 = cljs.core.first(seq20363);
var seq20363__$1 = cljs.core.next(seq20363);
var G__20365 = cljs.core.first(seq20363__$1);
var seq20363__$2 = cljs.core.next(seq20363__$1);
var G__20366 = cljs.core.first(seq20363__$2);
var seq20363__$3 = cljs.core.next(seq20363__$2);
var G__20367 = cljs.core.first(seq20363__$3);
var seq20363__$4 = cljs.core.next(seq20363__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20364,G__20365,G__20366,G__20367,seq20363__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args20374 = [];
var len__7319__auto___20382 = arguments.length;
var i__7320__auto___20383 = (0);
while(true){
if((i__7320__auto___20383 < len__7319__auto___20382)){
args20374.push((arguments[i__7320__auto___20383]));

var G__20384 = (i__7320__auto___20383 + (1));
i__7320__auto___20383 = G__20384;
continue;
} else {
}
break;
}

var G__20381 = args20374.length;
switch (G__20381) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20374.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq20375){
var G__20376 = cljs.core.first(seq20375);
var seq20375__$1 = cljs.core.next(seq20375);
var G__20377 = cljs.core.first(seq20375__$1);
var seq20375__$2 = cljs.core.next(seq20375__$1);
var G__20378 = cljs.core.first(seq20375__$2);
var seq20375__$3 = cljs.core.next(seq20375__$2);
var G__20379 = cljs.core.first(seq20375__$3);
var seq20375__$4 = cljs.core.next(seq20375__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__20376,G__20377,G__20378,G__20379,seq20375__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args20386 = [];
var len__7319__auto___20394 = arguments.length;
var i__7320__auto___20395 = (0);
while(true){
if((i__7320__auto___20395 < len__7319__auto___20394)){
args20386.push((arguments[i__7320__auto___20395]));

var G__20396 = (i__7320__auto___20395 + (1));
i__7320__auto___20395 = G__20396;
continue;
} else {
}
break;
}

var G__20393 = args20386.length;
switch (G__20393) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20386.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq20387){
var G__20388 = cljs.core.first(seq20387);
var seq20387__$1 = cljs.core.next(seq20387);
var G__20389 = cljs.core.first(seq20387__$1);
var seq20387__$2 = cljs.core.next(seq20387__$1);
var G__20390 = cljs.core.first(seq20387__$2);
var seq20387__$3 = cljs.core.next(seq20387__$2);
var G__20391 = cljs.core.first(seq20387__$3);
var seq20387__$4 = cljs.core.next(seq20387__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__20388,G__20389,G__20390,G__20391,seq20387__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args20398 = [];
var len__7319__auto___20406 = arguments.length;
var i__7320__auto___20407 = (0);
while(true){
if((i__7320__auto___20407 < len__7319__auto___20406)){
args20398.push((arguments[i__7320__auto___20407]));

var G__20408 = (i__7320__auto___20407 + (1));
i__7320__auto___20407 = G__20408;
continue;
} else {
}
break;
}

var G__20405 = args20398.length;
switch (G__20405) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args20398.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq20399){
var G__20400 = cljs.core.first(seq20399);
var seq20399__$1 = cljs.core.next(seq20399);
var G__20401 = cljs.core.first(seq20399__$1);
var seq20399__$2 = cljs.core.next(seq20399__$1);
var G__20402 = cljs.core.first(seq20399__$2);
var seq20399__$3 = cljs.core.next(seq20399__$2);
var G__20403 = cljs.core.first(seq20399__$3);
var seq20399__$4 = cljs.core.next(seq20399__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__20400,G__20401,G__20402,G__20403,seq20399__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = x;
return cljs.core._conj((function (){var x__7078__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = hash;
return cljs.core._conj((function (){var x__7078__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__7078__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__),(function (){var x__7078__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__20410__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20411__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20411__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20419 = arguments.length;
var i__7320__auto___20420 = (0);
while(true){
if((i__7320__auto___20420 < len__7319__auto___20419)){
args__7326__auto__.push((arguments[i__7320__auto___20420]));

var G__20421 = (i__7320__auto___20420 + (1));
i__7320__auto___20420 = G__20421;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((6) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7327__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq20412){
var G__20413 = cljs.core.first(seq20412);
var seq20412__$1 = cljs.core.next(seq20412);
var G__20414 = cljs.core.first(seq20412__$1);
var seq20412__$2 = cljs.core.next(seq20412__$1);
var G__20415 = cljs.core.first(seq20412__$2);
var seq20412__$3 = cljs.core.next(seq20412__$2);
var G__20416 = cljs.core.first(seq20412__$3);
var seq20412__$4 = cljs.core.next(seq20412__$3);
var G__20417 = cljs.core.first(seq20412__$4);
var seq20412__$5 = cljs.core.next(seq20412__$4);
var G__20418 = cljs.core.first(seq20412__$5);
var seq20412__$6 = cljs.core.next(seq20412__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__20413,G__20414,G__20415,G__20416,G__20417,G__20418,seq20412__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = clojure.walk.postwalk((function (p1__20422_SHARP_){
if(cljs.core.sequential_QMARK_(p1__20422_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__20422_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([k], true),p1__20422_SHARP_));
} else {
return p1__20422_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__20423,fkv){
var vec__20427 = p__20423;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20427,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20427,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20433 = arguments.length;
var i__7320__auto___20434 = (0);
while(true){
if((i__7320__auto___20434 < len__7319__auto___20433)){
args__7326__auto__.push((arguments[i__7320__auto___20434]));

var G__20435 = (i__7320__auto___20434 + (1));
i__7320__auto___20434 = G__20435;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str("t_"),cljs.core.str(clojure.string.replace([cljs.core.str(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__7078__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__7078__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__7078__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq20430){
var G__20431 = cljs.core.first(seq20430);
var seq20430__$1 = cljs.core.next(seq20430);
var G__20432 = cljs.core.first(seq20430__$1);
var seq20430__$2 = cljs.core.next(seq20430__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__20431,G__20432,seq20430__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20440 = arguments.length;
var i__7320__auto___20441 = (0);
while(true){
if((i__7320__auto___20441 < len__7319__auto___20440)){
args__7326__auto__.push((arguments[i__7320__auto___20441]));

var G__20442 = (i__7320__auto___20441 + (1));
i__7320__auto___20441 = G__20442;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq20436){
var G__20437 = cljs.core.first(seq20436);
var seq20436__$1 = cljs.core.next(seq20436);
var G__20438 = cljs.core.first(seq20436__$1);
var seq20436__$2 = cljs.core.next(seq20436__$1);
var G__20439 = cljs.core.first(seq20436__$2);
var seq20436__$3 = cljs.core.next(seq20436__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20437,G__20438,G__20439,seq20436__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20447 = arguments.length;
var i__7320__auto___20448 = (0);
while(true){
if((i__7320__auto___20448 < len__7319__auto___20447)){
args__7326__auto__.push((arguments[i__7320__auto___20448]));

var G__20449 = (i__7320__auto___20448 + (1));
i__7320__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq20443){
var G__20444 = cljs.core.first(seq20443);
var seq20443__$1 = cljs.core.next(seq20443);
var G__20445 = cljs.core.first(seq20443__$1);
var seq20443__$2 = cljs.core.next(seq20443__$1);
var G__20446 = cljs.core.first(seq20443__$2);
var seq20443__$3 = cljs.core.next(seq20443__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__20444,G__20445,G__20446,seq20443__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20454 = arguments.length;
var i__7320__auto___20455 = (0);
while(true){
if((i__7320__auto___20455 < len__7319__auto___20454)){
args__7326__auto__.push((arguments[i__7320__auto___20455]));

var G__20456 = (i__7320__auto___20455 + (1));
i__7320__auto___20455 = G__20456;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq20450){
var G__20451 = cljs.core.first(seq20450);
var seq20450__$1 = cljs.core.next(seq20450);
var G__20452 = cljs.core.first(seq20450__$1);
var seq20450__$2 = cljs.core.next(seq20450__$1);
var G__20453 = cljs.core.first(seq20450__$2);
var seq20450__$3 = cljs.core.next(seq20450__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__20451,G__20452,G__20453,seq20450__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6232__auto__)){
var and__6232__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__6232__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__20457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__20458 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__20457;
s = G__20458;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__20459){
var vec__20467 = p__20459;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20467,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20467,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__20467,p,sigs){
return (function (p__20470){
var vec__20471 = p__20470;
var seq__20472 = cljs.core.seq(vec__20471);
var first__20473 = cljs.core.first(seq__20472);
var seq__20472__$1 = cljs.core.next(seq__20472);
var f = first__20473;
var meths = seq__20472__$1;
var form = vec__20471;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__20467,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__7169__auto__ = (function (){var G__20474 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20474) : cljs.core.atom.call(null,G__20474));
})();
var prefer_table__7170__auto__ = (function (){var G__20475 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20475) : cljs.core.atom.call(null,G__20475));
})();
var method_cache__7171__auto__ = (function (){var G__20476 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20476) : cljs.core.atom.call(null,G__20476));
})();
var cached_hierarchy__7172__auto__ = (function (){var G__20477 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20477) : cljs.core.atom.call(null,G__20477));
})();
var hierarchy__7173__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__7169__auto__,prefer_table__7170__auto__,method_cache__7171__auto__,cached_hierarchy__7172__auto__,hierarchy__7173__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__7169__auto__,prefer_table__7170__auto__,method_cache__7171__auto__,cached_hierarchy__7172__auto__,hierarchy__7173__auto__))
,cljs.core.cst$kw$default,hierarchy__7173__auto__,method_table__7169__auto__,prefer_table__7170__auto__,method_cache__7171__auto__,cached_hierarchy__7172__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7078__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7078__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__7078__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__20478){
var vec__20485 = p__20478;
var seq__20486 = cljs.core.seq(vec__20485);
var first__20487 = cljs.core.first(seq__20486);
var seq__20486__$1 = cljs.core.next(seq__20486);
var vec__20488 = first__20487;
var seq__20489 = cljs.core.seq(vec__20488);
var first__20490 = cljs.core.first(seq__20489);
var seq__20489__$1 = cljs.core.next(seq__20489);
var this$ = first__20490;
var args = seq__20489__$1;
var sig = vec__20488;
var body = seq__20486__$1;
var x__7078__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__20491){
var vec__20498 = p__20491;
var seq__20499 = cljs.core.seq(vec__20498);
var first__20500 = cljs.core.first(seq__20499);
var seq__20499__$1 = cljs.core.next(seq__20499);
var vec__20501 = first__20500;
var seq__20502 = cljs.core.seq(vec__20501);
var first__20503 = cljs.core.first(seq__20502);
var seq__20502__$1 = cljs.core.next(seq__20502);
var this$ = first__20503;
var args = seq__20502__$1;
var sig = vec__20501;
var body = seq__20499__$1;
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7078__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__20504){
var vec__20511 = p__20504;
var seq__20512 = cljs.core.seq(vec__20511);
var first__20513 = cljs.core.first(seq__20512);
var seq__20512__$1 = cljs.core.next(seq__20512);
var vec__20514 = first__20513;
var seq__20515 = cljs.core.seq(vec__20514);
var first__20516 = cljs.core.first(seq__20515);
var seq__20515__$1 = cljs.core.next(seq__20515);
var this$ = first__20516;
var args = seq__20515__$1;
var sig = vec__20514;
var body = seq__20512__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7078__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__20517){
var vec__20524 = p__20517;
var seq__20525 = cljs.core.seq(vec__20524);
var first__20526 = cljs.core.first(seq__20525);
var seq__20525__$1 = cljs.core.next(seq__20525);
var vec__20527 = first__20526;
var seq__20528 = cljs.core.seq(vec__20527);
var first__20529 = cljs.core.first(seq__20528);
var seq__20528__$1 = cljs.core.next(seq__20528);
var this$ = first__20529;
var args = seq__20528__$1;
var sig = vec__20527;
var body = seq__20525__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(cljs.core.cons(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),args));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7078__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20538){
var vec__20539 = p__20538;
var seq__20540 = cljs.core.seq(vec__20539);
var first__20541 = cljs.core.first(seq__20540);
var seq__20540__$1 = cljs.core.next(seq__20540);
var f = first__20541;
var meths = seq__20540__$1;
var form = vec__20539;
var vec__20542 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20542,f__$1,meths__$1,vec__20539,seq__20540,first__20541,seq__20540__$1,f,meths,form){
return (function (p1__20530_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__20530_SHARP_);
});})(vec__20542,f__$1,meths__$1,vec__20539,seq__20540,first__20541,seq__20540__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__20546){
var vec__20554 = p__20546;
var seq__20555 = cljs.core.seq(vec__20554);
var first__20556 = cljs.core.first(seq__20555);
var seq__20555__$1 = cljs.core.next(seq__20555);
var f = first__20556;
var meths = seq__20555__$1;
var form = vec__20554;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20554,seq__20555,first__20556,seq__20555__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (function (){var G__20559 = type_sym;
var G__20560 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__20559,G__20560) : cljs.core$macros.extend_prefix.call(null,G__20559,G__20560));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(vec__20554,seq__20555,first__20556,seq__20555__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20554,seq__20555,first__20556,seq__20555__$1,f,meths,form){
return (function (p1__20545_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__20545_SHARP_);
});})(vec__20554,seq__20555,first__20556,seq__20555__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__20562){
var vec__20566 = p__20562;
var seq__20567 = cljs.core.seq(vec__20566);
var first__20568 = cljs.core.first(seq__20567);
var seq__20567__$1 = cljs.core.next(seq__20567);
var f = first__20568;
var meths = seq__20567__$1;
var form = vec__20566;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20566,seq__20567,first__20568,seq__20567__$1,f,meths,form){
return (function (p1__20561_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__20561_SHARP_);
});})(vec__20566,seq__20567,first__20568,seq__20567__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.cst$sym$call) : cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$call));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.cst$sym$apply) : cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.cst$sym$apply));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__7078__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__7078__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__20569){
var vec__20585 = p__20569;
var seq__20586 = cljs.core.seq(vec__20585);
var first__20587 = cljs.core.first(seq__20586);
var seq__20586__$1 = cljs.core.next(seq__20586);
var f = first__20587;
var meths = seq__20586__$1;
var form = vec__20585;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (function (){var G__20590 = type_sym;
var G__20591 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__20590,G__20591) : cljs.core$macros.extend_prefix.call(null,G__20590,G__20591));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__20585,seq__20586,first__20587,seq__20586__$1,f,meths,form){
return (function (p__20592){
var vec__20593 = p__20592;
var seq__20594 = cljs.core.seq(vec__20593);
var first__20595 = cljs.core.first(seq__20594);
var seq__20594__$1 = cljs.core.next(seq__20594);
var sig = first__20595;
var body = seq__20594__$1;
var meth = vec__20593;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (function (){var G__20598 = type_sym;
var G__20599 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__20598,G__20599) : cljs.core$macros.extend_prefix.call(null,G__20598,G__20599));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(pf,vec__20585,seq__20586,first__20587,seq__20586__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__20600){
var vec__20604 = p__20600;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20604,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20604,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__20604,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__20604,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__20610 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_20613 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_20613))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__20614 = cljs.core.next(sigs__$1);
var G__20615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__20614;
seen = G__20615;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_20622 = cljs.core.PersistentHashSet.EMPTY;
var methods_20623__$1 = methods$;
while(true){
if(cljs.core.seq(methods_20623__$1)){
var vec__20619_20624 = cljs.core.first(methods_20623__$1);
var fname_20625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619_20624,(0),null);
var method_20626 = vec__20619_20624;
if(cljs.core.contains_QMARK_(seen_20622,fname_20625)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_20625], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_20626);

var G__20627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_20622,fname_20625);
var G__20628 = cljs.core.next(methods_20623__$1);
seen_20622 = G__20627;
methods_20623__$1 = G__20628;
continue;
} else {
}
break;
}

var G__20629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__20630 = impls__$2;
protos = G__20629;
impls__$1 = G__20630;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20639 = arguments.length;
var i__7320__auto___20640 = (0);
while(true){
if((i__7320__auto___20640 < len__7319__auto___20639)){
args__7326__auto__.push((arguments[i__7320__auto___20640]));

var G__20641 = (i__7320__auto___20640 + (1));
i__7320__auto___20640 = G__20641;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__20636 = (function (){var temp__4655__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20636,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20636,(1),null);
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6232__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__6232__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__20636,type,assign_impls){
return (function (p1__20631_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__20631_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__20631_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__20636,type,assign_impls))
,cljs.core.array_seq([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq20632){
var G__20633 = cljs.core.first(seq20632);
var seq20632__$1 = cljs.core.next(seq20632);
var G__20634 = cljs.core.first(seq20632__$1);
var seq20632__$2 = cljs.core.next(seq20632__$1);
var G__20635 = cljs.core.first(seq20632__$2);
var seq20632__$3 = cljs.core.next(seq20632__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__20633,G__20634,G__20635,seq20632__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__20643){
var vec__20647 = p__20643;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20647,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20647,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20647,f,sigs){
return (function (p1__20642_SHARP_){
return cljs.core.cons(cljs.core.second(p1__20642_SHARP_),cljs.core.nnext(p1__20642_SHARP_));
});})(vec__20647,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args20650 = [];
var len__7319__auto___20653 = arguments.length;
var i__7320__auto___20654 = (0);
while(true){
if((i__7320__auto___20654 < len__7319__auto___20653)){
args20650.push((arguments[i__7320__auto___20654]));

var G__20655 = (i__7320__auto___20654 + (1));
i__7320__auto___20654 = G__20655;
continue;
} else {
}
break;
}

var G__20652 = args20650.length;
switch (G__20652) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20650.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__20657 = ret__$1;
var G__20658 = specs__$2;
ret = G__20657;
specs__$1 = G__20658;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20659_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__20659_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$sym$_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7078__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20671 = arguments.length;
var i__7320__auto___20672 = (0);
while(true){
if((i__7320__auto___20672 < len__7319__auto___20671)){
args__7326__auto__.push((arguments[i__7320__auto___20672]));

var G__20673 = (i__7320__auto___20672 + (1));
i__7320__auto___20672 = G__20673;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__20668 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20668,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20660__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20661__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__20662__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20661__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq20663){
var G__20664 = cljs.core.first(seq20663);
var seq20663__$1 = cljs.core.next(seq20663);
var G__20665 = cljs.core.first(seq20663__$1);
var seq20663__$2 = cljs.core.next(seq20663__$1);
var G__20666 = cljs.core.first(seq20663__$2);
var seq20663__$3 = cljs.core.next(seq20663__$2);
var G__20667 = cljs.core.first(seq20663__$3);
var seq20663__$4 = cljs.core.next(seq20663__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__20664,G__20665,G__20666,G__20667,seq20663__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__20674_SHARP_){
return cljs.core.with_meta(p1__20674_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace(rname)),cljs.core.str("."),cljs.core.str(cljs.core.name(rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.array_seq([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20675__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20676__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20676__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hash_DASH_imap),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IEquiv,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20677__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__20678__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__20678__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20677__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__20678__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_equiv_DASH_map),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20677__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__20678__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20679__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20680__auto__),(function (){var x__7078__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20681__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20682__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20681__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20682__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20683__auto__),(function (){var x__7078__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__20684__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7078__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([(function (){var x__7078__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__20684__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20685__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7078__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20686__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__20687__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__20687__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20686__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__20687__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__20687__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20686__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__20687__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20688__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20689__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20689__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([fld,gs,cljs.core.cst$sym$__hash,null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20689__auto__),(function (){var x__7078__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20690__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20691__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20691__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20690__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20691__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__20691__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20693__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20692_SHARP_){
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20692_SHARP_);
return cljs.core._conj((function (){var x__7078__auto____$1 = p1__20692_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__7078__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20695__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20696__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__20697__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__20698__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__20699__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20696__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__20697__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__20699__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20696__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__20698__auto__),(function (){var x__7078__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__20697__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20694_SHARP_){
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20694_SHARP_);
return cljs.core._conj((function (){var x__7078__auto____$1 = p1__20694_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null));
var vec__20703 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20703,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20703,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__7078__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7078__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7078__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7078__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20713 = arguments.length;
var i__7320__auto___20714 = (0);
while(true){
if((i__7320__auto___20714 < len__7319__auto___20713)){
args__7326__auto__.push((arguments[i__7320__auto___20714]));

var G__20715 = (i__7320__auto___20714 + (1));
i__7320__auto___20714 = G__20715;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7078__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7078__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__7078__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20706__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7078__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7078__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__20706__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20707__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__20707__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq20708){
var G__20709 = cljs.core.first(seq20708);
var seq20708__$1 = cljs.core.next(seq20708);
var G__20710 = cljs.core.first(seq20708__$1);
var seq20708__$2 = cljs.core.next(seq20708__$1);
var G__20711 = cljs.core.first(seq20708__$2);
var seq20708__$3 = cljs.core.next(seq20708__$2);
var G__20712 = cljs.core.first(seq20708__$3);
var seq20708__$4 = cljs.core.next(seq20708__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__20709,G__20710,G__20711,G__20712,seq20708__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20743 = arguments.length;
var i__7320__auto___20744 = (0);
while(true){
if((i__7320__auto___20744 < len__7319__auto___20743)){
args__7326__auto__.push((arguments[i__7320__auto___20744]));

var G__20745 = (i__7320__auto___20744 + (1));
i__7320__auto___20744 = G__20745;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__20722 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20722,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20722,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__20722,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__20722,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__20725 = cljs.core.seq(methods$);
var chunk__20726 = null;
var count__20727 = (0);
var i__20728 = (0);
while(true){
if((i__20728 < count__20727)){
var vec__20729 = chunk__20726.cljs$core$IIndexed$_nth$arity$2(null,i__20728);
var seq__20730 = cljs.core.seq(vec__20729);
var first__20731 = cljs.core.first(seq__20730);
var seq__20730__$1 = cljs.core.next(seq__20730);
var mname = first__20731;
var arities = seq__20730__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20746 = seq__20725;
var G__20747 = chunk__20726;
var G__20748 = count__20727;
var G__20749 = (i__20728 + (1));
seq__20725 = G__20746;
chunk__20726 = G__20747;
count__20727 = G__20748;
i__20728 = G__20749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20725);
if(temp__4657__auto__){
var seq__20725__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20725__$1)){
var c__7055__auto__ = cljs.core.chunk_first(seq__20725__$1);
var G__20750 = cljs.core.chunk_rest(seq__20725__$1);
var G__20751 = c__7055__auto__;
var G__20752 = cljs.core.count(c__7055__auto__);
var G__20753 = (0);
seq__20725 = G__20750;
chunk__20726 = G__20751;
count__20727 = G__20752;
i__20728 = G__20753;
continue;
} else {
var vec__20732 = cljs.core.first(seq__20725__$1);
var seq__20733 = cljs.core.seq(vec__20732);
var first__20734 = cljs.core.first(seq__20733);
var seq__20733__$1 = cljs.core.next(seq__20733);
var mname = first__20734;
var arities = seq__20733__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20754 = cljs.core.next(seq__20725__$1);
var G__20755 = null;
var G__20756 = (0);
var G__20757 = (0);
seq__20725 = G__20754;
chunk__20726 = G__20755;
count__20727 = G__20756;
i__20728 = G__20757;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = sig;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),sig], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20716__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7078__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__20716__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__),sig)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7078__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__20717__auto__),sig)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__7078__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.first(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});})(p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__20735){
var vec__20736 = p__20735;
var seq__20737 = cljs.core.seq(vec__20736);
var first__20738 = cljs.core.first(seq__20737);
var seq__20737__$1 = cljs.core.next(seq__20737);
var fname = first__20738;
var sigs = seq__20737__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__20739){
var vec__20740 = p__20739;
var seq__20741 = cljs.core.seq(vec__20740);
var first__20742 = cljs.core.first(seq__20741);
var seq__20741__$1 = cljs.core.next(seq__20741);
var fname = first__20742;
var sigs = seq__20741__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7078__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__20740,seq__20741,first__20742,seq__20741__$1,fname,sigs,p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__20740,seq__20741,first__20742,seq__20741__$1,fname,sigs,p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__20722,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7078__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq20718){
var G__20719 = cljs.core.first(seq20718);
var seq20718__$1 = cljs.core.next(seq20718);
var G__20720 = cljs.core.first(seq20718__$1);
var seq20718__$2 = cljs.core.next(seq20718__$1);
var G__20721 = cljs.core.first(seq20718__$2);
var seq20718__$3 = cljs.core.next(seq20718__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__20719,G__20720,G__20721,seq20718__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__20761 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20761,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7078__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7078__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__20767 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7078__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7078__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7078__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7078__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7078__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7078__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20773 = arguments.length;
var i__7320__auto___20774 = (0);
while(true){
if((i__7320__auto___20774 < len__7319__auto___20773)){
args__7326__auto__.push((arguments[i__7320__auto___20774]));

var G__20775 = (i__7320__auto___20774 + (1));
i__7320__auto___20774 = G__20775;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq20770){
var G__20771 = cljs.core.first(seq20770);
var seq20770__$1 = cljs.core.next(seq20770);
var G__20772 = cljs.core.first(seq20770__$1);
var seq20770__$2 = cljs.core.next(seq20770__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__20771,G__20772,seq20770__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20779 = arguments.length;
var i__7320__auto___20780 = (0);
while(true){
if((i__7320__auto___20780 < len__7319__auto___20779)){
args__7326__auto__.push((arguments[i__7320__auto___20780]));

var G__20781 = (i__7320__auto___20780 + (1));
i__7320__auto___20780 = G__20781;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq20776){
var G__20777 = cljs.core.first(seq20776);
var seq20776__$1 = cljs.core.next(seq20776);
var G__20778 = cljs.core.first(seq20776__$1);
var seq20776__$2 = cljs.core.next(seq20776__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__20777,G__20778,seq20776__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20790 = arguments.length;
var i__7320__auto___20791 = (0);
while(true){
if((i__7320__auto___20791 < len__7319__auto___20790)){
args__7326__auto__.push((arguments[i__7320__auto___20791]));

var G__20792 = (i__7320__auto___20791 + (1));
i__7320__auto___20791 = G__20792;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__20786){
var vec__20787 = p__20786;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787,(1),null);
return cljs.core._conj((function (){var x__7078__auto__ = k;
return cljs.core._conj((function (){var x__7078__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq20782){
var G__20783 = cljs.core.first(seq20782);
var seq20782__$1 = cljs.core.next(seq20782);
var G__20784 = cljs.core.first(seq20782__$1);
var seq20782__$2 = cljs.core.next(seq20782__$1);
var G__20785 = cljs.core.first(seq20782__$2);
var seq20782__$3 = cljs.core.next(seq20782__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__20783,G__20784,G__20785,seq20782__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20797 = arguments.length;
var i__7320__auto___20798 = (0);
while(true){
if((i__7320__auto___20798 < len__7319__auto___20797)){
args__7326__auto__.push((arguments[i__7320__auto___20798]));

var G__20799 = (i__7320__auto___20798 + (1));
i__7320__auto___20798 = G__20799;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__7078__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq20793){
var G__20794 = cljs.core.first(seq20793);
var seq20793__$1 = cljs.core.next(seq20793);
var G__20795 = cljs.core.first(seq20793__$1);
var seq20793__$2 = cljs.core.next(seq20793__$1);
var G__20796 = cljs.core.first(seq20793__$2);
var seq20793__$3 = cljs.core.next(seq20793__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__20794,G__20795,G__20796,seq20793__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20818 = arguments.length;
var i__7320__auto___20819 = (0);
while(true){
if((i__7320__auto___20819 < len__7319__auto___20818)){
args__7326__auto__.push((arguments[i__7320__auto___20819]));

var G__20820 = (i__7320__auto___20819 + (1));
i__7320__auto___20819 = G__20820;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__20812 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__20815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20815,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20815,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20815,(2),null);
var clause = vec__20815;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__7078__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__20800__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__20800__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq20801){
var G__20802 = cljs.core.first(seq20801);
var seq20801__$1 = cljs.core.next(seq20801);
var G__20803 = cljs.core.first(seq20801__$1);
var seq20801__$2 = cljs.core.next(seq20801__$1);
var G__20804 = cljs.core.first(seq20801__$2);
var seq20801__$3 = cljs.core.next(seq20801__$2);
var G__20805 = cljs.core.first(seq20801__$3);
var seq20801__$4 = cljs.core.next(seq20801__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__20802,G__20803,G__20804,G__20805,seq20801__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__6232__auto__ = cljs.core.list_QMARK_(x);
if(and__6232__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__6232__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__7326__auto__ = [];
var len__7319__auto___20841 = arguments.length;
var i__7320__auto___20842 = (0);
while(true){
if((i__7320__auto___20842 < len__7319__auto___20841)){
args__7326__auto__.push((arguments[i__7320__auto___20842]));

var G__20843 = (i__7320__auto___20842 + (1));
i__7320__auto___20842 = G__20843;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__7078__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__20829){
var vec__20830 = p__20829;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__20830,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__7078__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__20830,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__7078__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__20821_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__20821_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__20822_SHARP_){
if(cljs.core.seq_QMARK_(p1__20822_SHARP_)){
return cljs.core.vec(p1__20822_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20822_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__20824_SHARP_){
if(cljs.core.seq_QMARK_(p1__20824_SHARP_)){
return cljs.core.vec(p1__20824_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20824_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__20823_SHARP_){
return [cljs.core.str(p1__20823_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__7078__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__7078__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__20837){
var vec__20838 = p__20837;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20838,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7078__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7078__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20825){
var G__20826 = cljs.core.first(seq20825);
var seq20825__$1 = cljs.core.next(seq20825);
var G__20827 = cljs.core.first(seq20825__$1);
var seq20825__$2 = cljs.core.next(seq20825__$1);
var G__20828 = cljs.core.first(seq20825__$2);
var seq20825__$3 = cljs.core.next(seq20825__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__20826,G__20827,G__20828,seq20825__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args20844 = [];
var len__7319__auto___20847 = arguments.length;
var i__7320__auto___20848 = (0);
while(true){
if((i__7320__auto___20848 < len__7319__auto___20847)){
args20844.push((arguments[i__7320__auto___20848]));

var G__20849 = (i__7320__auto___20848 + (1));
i__7320__auto___20848 = G__20849;
continue;
} else {
}
break;
}

var G__20846 = args20844.length;
switch (G__20846) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args20844.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([(function (){var x__7078__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__7078__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__20937){
var vec__20938 = p__20937;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__21018__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21018 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21019__i = 0, G__21019__a = new Array(arguments.length -  0);
while (G__21019__i < G__21019__a.length) {G__21019__a[G__21019__i] = arguments[G__21019__i + 0]; ++G__21019__i;}
  msg = new cljs.core.IndexedSeq(G__21019__a,0);
} 
return G__21018__delegate.call(this,msg);};
G__21018.cljs$lang$maxFixedArity = 0;
G__21018.cljs$lang$applyTo = (function (arglist__21020){
var msg = cljs.core.seq(arglist__21020);
return G__21018__delegate(msg);
});
G__21018.cljs$core$IFn$_invoke$arity$variadic = G__21018__delegate;
return G__21018;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__20941){
var vec__20980 = p__20941;
var seq__20981 = cljs.core.seq(vec__20980);
var first__20982 = cljs.core.first(seq__20981);
var seq__20981__$1 = cljs.core.next(seq__20981);
var vec__20983 = first__20982;
var seq__20984 = cljs.core.seq(vec__20983);
var first__20985 = cljs.core.first(seq__20984);
var seq__20984__$1 = cljs.core.next(seq__20984);
var bind = first__20985;
var first__20985__$1 = cljs.core.first(seq__20984__$1);
var seq__20984__$2 = cljs.core.next(seq__20984__$1);
var expr = first__20985__$1;
var mod_pairs = seq__20984__$2;
var vec__20986 = seq__20981__$1;
var vec__20989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20986,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20989,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20989,(1),null);
var next_groups = vec__20986;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__20980,seq__20981,first__20982,seq__20981__$1,vec__20983,seq__20984,first__20985,seq__20984__$1,bind,first__20985__$1,seq__20984__$2,expr,mod_pairs,vec__20986,vec__20989,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20992){
var vec__20999 = p__20992;
var seq__21000 = cljs.core.seq(vec__20999);
var first__21001 = cljs.core.first(seq__21000);
var seq__21000__$1 = cljs.core.next(seq__21000);
var vec__21002 = first__21001;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21002,(1),null);
var pair = vec__21002;
var etc = seq__21000__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__20851__auto__),(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__20852__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__20851__auto__),(function (){var x__7078__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__20852__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__20852__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__7078__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__20980,seq__20981,first__20982,seq__20981__$1,vec__20983,seq__20984,first__20985,seq__20984__$1,bind,first__20985__$1,seq__20984__$2,expr,mod_pairs,vec__20986,vec__20989,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__20980,seq__20981,first__20982,seq__20981__$1,vec__20983,seq__20984,first__20985,seq__20984__$1,bind,first__20985__$1,seq__20984__$2,expr,mod_pairs,vec__20986,vec__20989,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__21005){
var vec__21012 = p__21005;
var seq__21013 = cljs.core.seq(vec__21012);
var first__21014 = cljs.core.first(seq__21013);
var seq__21013__$1 = cljs.core.next(seq__21013);
var vec__21015 = first__21014;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,(1),null);
var pair = vec__21015;
var etc = seq__21013__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7078__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__7078__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7078__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__20980,seq__20981,first__20982,seq__20981__$1,vec__20983,seq__20984,first__20985,seq__20984__$1,bind,first__20985__$1,seq__20984__$2,expr,mod_pairs,vec__20986,vec__20989,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__20853__auto__),(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/peter/vide/target/uberjar/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2298),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2298),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__20854__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__20853__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__20854__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__20854__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__20853__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7078__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7078__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7078__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__20855__auto__),(function (){var x__7078__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__20855__auto__),(function (){var x__7078__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21030 = arguments.length;
var i__7320__auto___21031 = (0);
while(true){
if((i__7320__auto___21031 < len__7319__auto___21030)){
args__7326__auto__.push((arguments[i__7320__auto___21031]));

var G__21032 = (i__7320__auto___21031 + (1));
i__7320__auto___21031 = G__21032;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__21033__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21033 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21034__i = 0, G__21034__a = new Array(arguments.length -  0);
while (G__21034__i < G__21034__a.length) {G__21034__a[G__21034__i] = arguments[G__21034__i + 0]; ++G__21034__i;}
  msg = new cljs.core.IndexedSeq(G__21034__a,0);
} 
return G__21033__delegate.call(this,msg);};
G__21033.cljs$lang$maxFixedArity = 0;
G__21033.cljs$lang$applyTo = (function (arglist__21035){
var msg = cljs.core.seq(arglist__21035);
return G__21033__delegate(msg);
});
G__21033.cljs$core$IFn$_invoke$arity$variadic = G__21033__delegate;
return G__21033;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7078__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7078__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__7078__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__7078__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__21021__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__21021__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__21021__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7078__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq21022){
var G__21023 = cljs.core.first(seq21022);
var seq21022__$1 = cljs.core.next(seq21022);
var G__21024 = cljs.core.first(seq21022__$1);
var seq21022__$2 = cljs.core.next(seq21022__$1);
var G__21025 = cljs.core.first(seq21022__$2);
var seq21022__$3 = cljs.core.next(seq21022__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__21023,G__21024,G__21025,seq21022__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21039 = arguments.length;
var i__7320__auto___21040 = (0);
while(true){
if((i__7320__auto___21040 < len__7319__auto___21039)){
args__7326__auto__.push((arguments[i__7320__auto___21040]));

var G__21041 = (i__7320__auto___21040 + (1));
i__7320__auto___21040 = G__21041;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq21036){
var G__21037 = cljs.core.first(seq21036);
var seq21036__$1 = cljs.core.next(seq21036);
var G__21038 = cljs.core.first(seq21036__$1);
var seq21036__$2 = cljs.core.next(seq21036__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__21037,G__21038,seq21036__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args21045 = [];
var len__7319__auto___21053 = arguments.length;
var i__7320__auto___21054 = (0);
while(true){
if((i__7320__auto___21054 < len__7319__auto___21053)){
args21045.push((arguments[i__7320__auto___21054]));

var G__21055 = (i__7320__auto___21054 + (1));
i__7320__auto___21054 = G__21055;
continue;
} else {
}
break;
}

var G__21052 = args21045.length;
switch (G__21052) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21045.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7338__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__7078__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7078__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__21042__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__21043__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7078__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21044__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__21043__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__21043__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21044__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__21042__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__21043__auto__)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq21046){
var G__21047 = cljs.core.first(seq21046);
var seq21046__$1 = cljs.core.next(seq21046);
var G__21048 = cljs.core.first(seq21046__$1);
var seq21046__$2 = cljs.core.next(seq21046__$1);
var G__21049 = cljs.core.first(seq21046__$2);
var seq21046__$3 = cljs.core.next(seq21046__$2);
var G__21050 = cljs.core.first(seq21046__$3);
var seq21046__$4 = cljs.core.next(seq21046__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__21047,G__21048,G__21049,G__21050,seq21046__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args21058 = [];
var len__7319__auto___21065 = arguments.length;
var i__7320__auto___21066 = (0);
while(true){
if((i__7320__auto___21066 < len__7319__auto___21065)){
args21058.push((arguments[i__7320__auto___21066]));

var G__21067 = (i__7320__auto___21066 + (1));
i__7320__auto___21066 = G__21067;
continue;
} else {
}
break;
}

var G__21064 = args21058.length;
switch (G__21064) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21058.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7338__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__21057__auto__),(function (){var x__7078__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__21057__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq21059){
var G__21060 = cljs.core.first(seq21059);
var seq21059__$1 = cljs.core.next(seq21059);
var G__21061 = cljs.core.first(seq21059__$1);
var seq21059__$2 = cljs.core.next(seq21059__$1);
var G__21062 = cljs.core.first(seq21059__$2);
var seq21059__$3 = cljs.core.next(seq21059__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__21060,G__21061,G__21062,seq21059__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args21069 = [];
var len__7319__auto___21075 = arguments.length;
var i__7320__auto___21076 = (0);
while(true){
if((i__7320__auto___21076 < len__7319__auto___21075)){
args21069.push((arguments[i__7320__auto___21076]));

var G__21077 = (i__7320__auto___21076 + (1));
i__7320__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var G__21074 = args21069.length;
switch (G__21074) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21069.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7338__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7078__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq21070){
var G__21071 = cljs.core.first(seq21070);
var seq21070__$1 = cljs.core.next(seq21070);
var G__21072 = cljs.core.first(seq21070__$1);
var seq21070__$2 = cljs.core.next(seq21070__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__21071,G__21072,seq21070__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args21081 = [];
var len__7319__auto___21087 = arguments.length;
var i__7320__auto___21088 = (0);
while(true){
if((i__7320__auto___21088 < len__7319__auto___21087)){
args21081.push((arguments[i__7320__auto___21088]));

var G__21089 = (i__7320__auto___21088 + (1));
i__7320__auto___21088 = G__21089;
continue;
} else {
}
break;
}

var G__21086 = args21081.length;
switch (G__21086) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21081.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7338__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__21079_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21079_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__21080_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__21080_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7078__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq21082){
var G__21083 = cljs.core.first(seq21082);
var seq21082__$1 = cljs.core.next(seq21082);
var G__21084 = cljs.core.first(seq21082__$1);
var seq21082__$2 = cljs.core.next(seq21082__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__21083,G__21084,seq21082__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args21091 = [];
var len__7319__auto___21097 = arguments.length;
var i__7320__auto___21098 = (0);
while(true){
if((i__7320__auto___21098 < len__7319__auto___21097)){
args21091.push((arguments[i__7320__auto___21098]));

var G__21099 = (i__7320__auto___21098 + (1));
i__7320__auto___21098 = G__21099;
continue;
} else {
}
break;
}

var G__21096 = args21091.length;
switch (G__21096) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21091.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7338__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq21092){
var G__21093 = cljs.core.first(seq21092);
var seq21092__$1 = cljs.core.next(seq21092);
var G__21094 = cljs.core.first(seq21092__$1);
var seq21092__$2 = cljs.core.next(seq21092__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__21093,G__21094,seq21092__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args21103 = [];
var len__7319__auto___21109 = arguments.length;
var i__7320__auto___21110 = (0);
while(true){
if((i__7320__auto___21110 < len__7319__auto___21109)){
args21103.push((arguments[i__7320__auto___21110]));

var G__21111 = (i__7320__auto___21110 + (1));
i__7320__auto___21110 = G__21111;
continue;
} else {
}
break;
}

var G__21108 = args21103.length;
switch (G__21108) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7338__auto__ = (new cljs.core.IndexedSeq(args21103.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7338__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__21101_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__21101_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21102_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__21102_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq21104){
var G__21105 = cljs.core.first(seq21104);
var seq21104__$1 = cljs.core.next(seq21104);
var G__21106 = cljs.core.first(seq21104__$1);
var seq21104__$2 = cljs.core.next(seq21104__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__21105,G__21106,seq21104__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21128 = arguments.length;
var i__7320__auto___21129 = (0);
while(true){
if((i__7320__auto___21129 < len__7319__auto___21128)){
args__7326__auto__.push((arguments[i__7320__auto___21129]));

var G__21130 = (i__7320__auto___21129 + (1));
i__7320__auto___21129 = G__21130;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__21116){
var vec__21117 = p__21116;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21117,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21117,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__7078__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__21120){
var vec__21121 = p__21120;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21121,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__21124){
var vec__21125 = p__21124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21125,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__7078__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq21113){
var G__21114 = cljs.core.first(seq21113);
var seq21113__$1 = cljs.core.next(seq21113);
var G__21115 = cljs.core.first(seq21113__$1);
var seq21113__$2 = cljs.core.next(seq21113__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__21114,G__21115,seq21113__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__21131__auto__),(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__21131__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__21131__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__21132__auto__),(function (){var x__7078__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__7078__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__21132__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7078__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21138 = arguments.length;
var i__7320__auto___21139 = (0);
while(true){
if((i__7320__auto___21139 < len__7319__auto___21138)){
args__7326__auto__.push((arguments[i__7320__auto___21139]));

var G__21140 = (i__7320__auto___21139 + (1));
i__7320__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__21133__auto__),(function (){var x__7078__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__21133__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body,(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7078__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq21134){
var G__21135 = cljs.core.first(seq21134);
var seq21134__$1 = cljs.core.next(seq21134);
var G__21136 = cljs.core.first(seq21134__$1);
var seq21134__$2 = cljs.core.next(seq21134__$1);
var G__21137 = cljs.core.first(seq21134__$2);
var seq21134__$3 = cljs.core.next(seq21134__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__21135,G__21136,G__21137,seq21134__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21144 = arguments.length;
var i__7320__auto___21145 = (0);
while(true){
if((i__7320__auto___21145 < len__7319__auto___21144)){
args__7326__auto__.push((arguments[i__7320__auto___21145]));

var G__21146 = (i__7320__auto___21145 + (1));
i__7320__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21141_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__21141_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq21142){
var G__21143 = cljs.core.first(seq21142);
var seq21142__$1 = cljs.core.next(seq21142);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__21143,seq21142__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21156 = arguments.length;
var i__7320__auto___21157 = (0);
while(true){
if((i__7320__auto___21157 < len__7319__auto___21156)){
args__7326__auto__.push((arguments[i__7320__auto___21157]));

var G__21158 = (i__7320__auto___21157 + (1));
i__7320__auto___21157 = G__21158;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__7078__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__21147__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__21148__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__21149__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__21150__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__21151__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__7078__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7078__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__21151__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__21147__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__21148__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__21149__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__21150__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq21152){
var G__21153 = cljs.core.first(seq21152);
var seq21152__$1 = cljs.core.next(seq21152);
var G__21154 = cljs.core.first(seq21152__$1);
var seq21152__$2 = cljs.core.next(seq21152__$1);
var G__21155 = cljs.core.first(seq21152__$2);
var seq21152__$3 = cljs.core.next(seq21152__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__21153,G__21154,G__21155,seq21152__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21164 = arguments.length;
var i__7320__auto___21165 = (0);
while(true){
if((i__7320__auto___21165 < len__7319__auto___21164)){
args__7326__auto__.push((arguments[i__7320__auto___21165]));

var G__21166 = (i__7320__auto___21165 + (1));
i__7320__auto___21165 = G__21166;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__7078__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq21159){
var G__21160 = cljs.core.first(seq21159);
var seq21159__$1 = cljs.core.next(seq21159);
var G__21161 = cljs.core.first(seq21159__$1);
var seq21159__$2 = cljs.core.next(seq21159__$1);
var G__21162 = cljs.core.first(seq21159__$2);
var seq21159__$3 = cljs.core.next(seq21159__$2);
var G__21163 = cljs.core.first(seq21159__$3);
var seq21159__$4 = cljs.core.next(seq21159__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__21160,G__21161,G__21162,G__21163,seq21159__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__21167__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__21168__auto__),(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__21167__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__21168__auto__)], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21183 = arguments.length;
var i__7320__auto___21184 = (0);
while(true){
if((i__7320__auto___21184 < len__7319__auto___21183)){
args__7326__auto__.push((arguments[i__7320__auto___21184]));

var G__21185 = (i__7320__auto___21184 + (1));
i__7320__auto___21184 = G__21185;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((5) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7327__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__21180){
var map__21181 = p__21180;
var map__21181__$1 = ((((!((map__21181 == null)))?((((map__21181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21181):map__21181);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21181__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__21169__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__21170__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___21171__auto__),(function (){var x__7078__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__21172__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__21173__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__21172__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__21169__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__7078__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__7078__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__7078__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__21173__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq21174){
var G__21175 = cljs.core.first(seq21174);
var seq21174__$1 = cljs.core.next(seq21174);
var G__21176 = cljs.core.first(seq21174__$1);
var seq21174__$2 = cljs.core.next(seq21174__$1);
var G__21177 = cljs.core.first(seq21174__$2);
var seq21174__$3 = cljs.core.next(seq21174__$2);
var G__21178 = cljs.core.first(seq21174__$3);
var seq21174__$4 = cljs.core.next(seq21174__$3);
var G__21179 = cljs.core.first(seq21174__$4);
var seq21174__$5 = cljs.core.next(seq21174__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__21175,G__21176,G__21177,G__21178,G__21179,seq21174__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args21186 = [];
var len__7319__auto___21193 = arguments.length;
var i__7320__auto___21194 = (0);
while(true){
if((i__7320__auto___21194 < len__7319__auto___21193)){
args21186.push((arguments[i__7320__auto___21194]));

var G__21195 = (i__7320__auto___21194 + (1));
i__7320__auto___21194 = G__21195;
continue;
} else {
}
break;
}

var G__21188 = args21186.length;
switch (G__21188) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21186.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = (function (){var G__21192 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__21192) : cljs.core$macros.cs.call(null,G__21192));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([(function (){var x__7078__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([(function (){var x__7078__auto__ = prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21202 = arguments.length;
var i__7320__auto___21203 = (0);
while(true){
if((i__7320__auto___21203 < len__7319__auto___21202)){
args__7326__auto__.push((arguments[i__7320__auto___21203]));

var G__21204 = (i__7320__auto___21203 + (1));
i__7320__auto___21203 = G__21204;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__21197__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__21198__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__21197__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__21198__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__21197__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq21199){
var G__21200 = cljs.core.first(seq21199);
var seq21199__$1 = cljs.core.next(seq21199);
var G__21201 = cljs.core.first(seq21199__$1);
var seq21199__$2 = cljs.core.next(seq21199__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__21200,G__21201,seq21199__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21209 = arguments.length;
var i__7320__auto___21210 = (0);
while(true){
if((i__7320__auto___21210 < len__7319__auto___21209)){
args__7326__auto__.push((arguments[i__7320__auto___21210]));

var G__21211 = (i__7320__auto___21210 + (1));
i__7320__auto___21210 = G__21211;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21205_SHARP_){
return cljs.core._conj((function (){var x__7078__auto__ = p1__21205_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq21206){
var G__21207 = cljs.core.first(seq21206);
var seq21206__$1 = cljs.core.next(seq21206);
var G__21208 = cljs.core.first(seq21206__$1);
var seq21206__$2 = cljs.core.next(seq21206__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__21207,G__21208,seq21206__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__7078__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__7078__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__21212__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__21212__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__21213){
var vec__21225 = p__21213;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21225,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21225,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7078__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21225,quote,ns){
return (function (p__21232){
var vec__21233 = p__21232;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21233,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21233,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7078__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
});})(vec__21225,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__21236,p__21237){
var vec__21244 = p__21236;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21244,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21244,(1),null);
var vec__21247 = p__21237;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21247,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21247,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,cljs.core.cst$sym$quote)) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__7078__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21255 = arguments.length;
var i__7320__auto___21256 = (0);
while(true){
if((i__7320__auto___21256 < len__7319__auto___21255)){
args__7326__auto__.push((arguments[i__7320__auto___21256]));

var G__21257 = (i__7320__auto___21256 + (1));
i__7320__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((4) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7327__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__7078__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__7078__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq21250){
var G__21251 = cljs.core.first(seq21250);
var seq21250__$1 = cljs.core.next(seq21250);
var G__21252 = cljs.core.first(seq21250__$1);
var seq21250__$2 = cljs.core.next(seq21250__$1);
var G__21253 = cljs.core.first(seq21250__$2);
var seq21250__$3 = cljs.core.next(seq21250__$2);
var G__21254 = cljs.core.first(seq21250__$3);
var seq21250__$4 = cljs.core.next(seq21250__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21251,G__21252,G__21253,G__21254,seq21250__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21262 = arguments.length;
var i__7320__auto___21263 = (0);
while(true){
if((i__7320__auto___21263 < len__7319__auto___21262)){
args__7326__auto__.push((arguments[i__7320__auto___21263]));

var G__21264 = (i__7320__auto___21263 + (1));
i__7320__auto___21263 = G__21264;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq21258){
var G__21259 = cljs.core.first(seq21258);
var seq21258__$1 = cljs.core.next(seq21258);
var G__21260 = cljs.core.first(seq21258__$1);
var seq21258__$2 = cljs.core.next(seq21258__$1);
var G__21261 = cljs.core.first(seq21258__$2);
var seq21258__$3 = cljs.core.next(seq21258__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__21259,G__21260,G__21261,seq21258__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__7078__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7078__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__21265 = form_SINGLEQUOTE_;
var G__21266 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__21265;
form_SINGLEQUOTE_ = G__21266;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7078__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__6232__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__6232__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__6232__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args21267 = [];
var len__7319__auto___21274 = arguments.length;
var i__7320__auto___21275 = (0);
while(true){
if((i__7320__auto___21275 < len__7319__auto___21274)){
args21267.push((arguments[i__7320__auto___21275]));

var G__21276 = (i__7320__auto___21275 + (1));
i__7320__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var G__21269 = args21267.length;
switch (G__21269) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21267.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__21270,solo){
var vec__21271 = p__21270;
var seq__21272 = cljs.core.seq(vec__21271);
var first__21273 = cljs.core.first(seq__21272);
var seq__21272__$1 = cljs.core.next(seq__21272);
var arglist = first__21273;
var body = seq__21272__$1;
var method = vec__21271;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(get_delegate())].join(''));
});})(sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/peter/vide/target/uberjar/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2748),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2748),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/peter/vide/target/uberjar/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2749),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2749),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))));
});})(sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7078__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),params,cljs.core.array_seq([(function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7078__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
}
});})(sig,restarg,vec__21271,seq__21272,first__21273,seq__21272__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())))):null),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__21278__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21279__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21279__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__21278__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__7078__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21279__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__21279__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__21282,emit_var_QMARK_){
var vec__21289 = p__21282;
var vec__21292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21289,(0),null);
var seq__21293 = cljs.core.seq(vec__21292);
var first__21294 = cljs.core.first(seq__21293);
var seq__21293__$1 = cljs.core.next(seq__21293);
var arglist = first__21294;
var body = seq__21293__$1;
var method = vec__21292;
var fdecl = vec__21289;
var dest_args = ((function (vec__21289,vec__21292,seq__21293,first__21294,seq__21293__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21289,vec__21292,seq__21293,first__21294,seq__21293__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});})(vec__21289,vec__21292,seq__21293,first__21294,seq__21293__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__21289,vec__21292,seq__21293,first__21294,seq__21293__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__7078__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7078__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__21280__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__21280__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__21281__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7078__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__21280__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/peter/vide/target/uberjar/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2796),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2796),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__21280__auto__),cljs.core.array_seq([(function (){var x__7078__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__21281__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__21319){
var vec__21323 = p__21319;
var seq__21324 = cljs.core.seq(vec__21323);
var first__21325 = cljs.core.first(seq__21324);
var seq__21324__$1 = cljs.core.next(seq__21324);
var sig = first__21325;
var body = seq__21324__$1;
var method = vec__21323;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__21295_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__21295_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7078__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),(function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__21296_SHARP_){
return fixed_arity(rname,p1__21296_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),(function (){var x__7078__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7078__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__21297__auto__),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7078__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/peter/vide/target/uberjar/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2854),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2854),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),(function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__21297__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0)))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7078__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7078__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.array_seq([(function (){var x__7078__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),(function (){var x__7078__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7078__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__7078__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj((function (){var x__7078__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__21326__i = 0, G__21326__a = new Array(arguments.length -  3);
while (G__21326__i < G__21326__a.length) {G__21326__a[G__21326__i] = arguments[G__21326__i + 3]; ++G__21326__i;}
  fdecl = new cljs.core.IndexedSeq(G__21326__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__21327){
var _AMPERSAND_form = cljs.core.first(arglist__21327);
arglist__21327 = cljs.core.next(arglist__21327);
var _AMPERSAND_env = cljs.core.first(arglist__21327);
arglist__21327 = cljs.core.next(arglist__21327);
var name = cljs.core.first(arglist__21327);
var fdecl = cljs.core.rest(arglist__21327);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__7326__auto__ = [];
var len__7319__auto___21332 = arguments.length;
var i__7320__auto___21333 = (0);
while(true){
if((i__7320__auto___21333 < len__7319__auto___21332)){
args__7326__auto__.push((arguments[i__7320__auto___21333]));

var G__21334 = (i__7320__auto___21333 + (1));
i__7320__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__7078__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__21335 = cljs.core.cons(f,p);
var G__21336 = cljs.core.next(args__$1);
p = G__21335;
args__$1 = G__21336;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__21337 = cljs.core.cons(f,p);
var G__21338 = cljs.core.next(args__$1);
p = G__21337;
args__$1 = G__21338;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__21339 = cljs.core.next(fd);
fd = G__21339;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__21340 = cljs.core.next(fd);
fd = G__21340;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__7078__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__21341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__21342 = cljs.core.next(ds);
acc = G__21341;
ds = G__21342;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__21343 = cljs.core.next(p);
var G__21344 = cljs.core.cons(cljs.core.first(p),d);
p = G__21343;
d = G__21344;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj((function (){var x__7078__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7078__auto____$1 = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__7078__auto____$1);
})(),cljs.core.cst$sym$set_BANG_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq21328){
var G__21329 = cljs.core.first(seq21328);
var seq21328__$1 = cljs.core.next(seq21328);
var G__21330 = cljs.core.first(seq21328__$1);
var seq21328__$2 = cljs.core.next(seq21328__$1);
var G__21331 = cljs.core.first(seq21328__$2);
var seq21328__$3 = cljs.core.next(seq21328__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__21329,G__21330,G__21331,seq21328__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
