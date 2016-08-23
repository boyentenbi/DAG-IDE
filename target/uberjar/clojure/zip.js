// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
 * Creates a new zipper structure. 
 * 
 *   branch? is a fn that, given a node, returns true if can have
 *   children, even if it currently doesn't.
 * 
 *   children is a fn that, given a branch node, returns a seq of its
 *   children.
 * 
 *   make-node is a fn that, given an existing node and a seq of
 *   children, returns a new branch node with the supplied children.
 *   root is the root node.
 */
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zip_SLASH_branch_QMARK_,branch_QMARK_,cljs.core.cst$kw$zip_SLASH_children,children,cljs.core.cst$kw$zip_SLASH_make_DASH_node,make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 *   given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.cst$kw$content),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,(function (){var and__6232__auto__ = children;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__6232__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((0)) : loc.call(null,(0)));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
return cljs.core.cst$kw$zip_SLASH_branch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
return cljs.core.cst$kw$zip_SLASH_children.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 *   children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
return cljs.core.cst$kw$zip_SLASH_make_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,node,children);
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq(cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1)))));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 *   nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var vec__18532 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(1),null);
var vec__18535 = clojure.zip.children(loc);
var seq__18536 = cljs.core.seq(vec__18535);
var first__18537 = cljs.core.first(seq__18536);
var seq__18536__$1 = cljs.core.next(seq__18536);
var c = first__18537;
var cnext = seq__18536__$1;
var cs = vec__18535;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$pnodes,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.cst$kw$ppath,path,cljs.core.cst$kw$r,cnext], null)], null),cljs.core.meta(loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 *   the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__18543 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18543,(0),null);
var map__18546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18543,(1),null);
var map__18546__$1 = ((((!((map__18546 == null)))?((((map__18546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18546):map__18546);
var path = map__18546__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,cljs.core.cst$kw$pnodes);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,cljs.core.cst$kw$r);
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18546__$1,cljs.core.cst$kw$changed_QMARK_);
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek(pnodes);
return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__6232__auto__ = ppath;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__6232__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return clojure.zip.node(loc);
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__18548 = p;
loc = G__18548;
continue;
} else {
return clojure.zip.node(loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__18557 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18557,(0),null);
var map__18560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18557,(1),null);
var map__18560__$1 = ((((!((map__18560 == null)))?((((map__18560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18560):map__18560);
var path = map__18560__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,cljs.core.cst$kw$l);
var vec__18561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,cljs.core.cst$kw$r);
var seq__18562 = cljs.core.seq(vec__18561);
var first__18563 = cljs.core.first(seq__18562);
var seq__18562__$1 = cljs.core.next(seq__18562);
var r = first__18563;
var rnext = seq__18562__$1;
var rs = vec__18561;
if(cljs.core.truth_((function (){var and__6232__auto__ = path;
if(cljs.core.truth_(and__6232__auto__)){
return rs;
} else {
return and__6232__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.array_seq([cljs.core.cst$kw$r,rnext], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__18570 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18570,(0),null);
var map__18573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18570,(1),null);
var map__18573__$1 = ((((!((map__18573 == null)))?((((map__18573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18573):map__18573);
var path = map__18573__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18573__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18573__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__6232__auto__ = path;
if(cljs.core.truth_(and__6232__auto__)){
return r;
} else {
return and__6232__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.array_seq([cljs.core.cst$kw$r,null], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__18580 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(0),null);
var map__18583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(1),null);
var map__18583__$1 = ((((!((map__18583 == null)))?((((map__18583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18583):map__18583);
var path = map__18583__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18583__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__6232__auto__ = path;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.seq(l);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.array_seq([cljs.core.cst$kw$r,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__18590 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18590,(0),null);
var map__18593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18590,(1),null);
var map__18593__$1 = ((((!((map__18593 == null)))?((((map__18593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18593):map__18593);
var path = map__18593__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__6232__auto__ = path;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.seq(l);
} else {
return and__6232__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$r,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.array_seq([r], 0))], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 *  without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__18600 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18600,(0),null);
var map__18603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18600,(1),null);
var map__18603__$1 = ((((!((map__18603 == null)))?((((map__18603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18603):map__18603);
var path = map__18603__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,cljs.core.cst$kw$l);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.array_seq([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 *   without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__18610 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18610,(0),null);
var map__18613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18610,(1),null);
var map__18613__$1 = ((((!((map__18613 == null)))?((((map__18613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18613):map__18613);
var path = map__18613__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18613__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$r,cljs.core.cons(item,r),cljs.core.array_seq([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__18618 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18618,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18618,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(var_args){
var args__7326__auto__ = [];
var len__7319__auto___18624 = arguments.length;
var i__7320__auto___18625 = (0);
while(true){
if((i__7320__auto___18625 < len__7319__auto___18624)){
args__7326__auto__.push((arguments[i__7320__auto___18625]));

var G__18626 = (i__7320__auto___18625 + (1));
i__7320__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((2) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((2)),(0),null)):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7327__auto__);
});

clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
});

clojure.zip.edit.cljs$lang$maxFixedArity = (2);

clojure.zip.edit.cljs$lang$applyTo = (function (seq18621){
var G__18622 = cljs.core.first(seq18621);
var seq18621__$1 = cljs.core.next(seq18621);
var G__18623 = cljs.core.first(seq18621__$1);
var seq18621__$2 = cljs.core.next(seq18621__$1);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__18622,G__18623,seq18621__$2);
});

/**
 * Inserts the item as the leftmost child of the node at this loc,
 *   without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 *   without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return loc;
} else {
var or__6244__auto__ = (function (){var and__6232__auto__ = clojure.zip.branch_QMARK_(loc);
if(cljs.core.truth_(and__6232__auto__)){
return clojure.zip.down(loc);
} else {
return and__6232__auto__;
}
})();
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = clojure.zip.right(loc);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__6244__auto____$2 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__6244__auto____$2)){
return or__6244__auto____$2;
} else {
var G__18627 = clojure.zip.up(p);
p = G__18627;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.cst$kw$end], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 *   at the root, returns nil.
 */
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__4655__auto__ = clojure.zip.left(loc);
if(cljs.core.truth_(temp__4655__auto__)){
var lloc = temp__4655__auto__;
var loc__$1 = lloc;
while(true){
var temp__4655__auto____$1 = (function (){var and__6232__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__6232__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__6232__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var child = temp__4655__auto____$1;
var G__18628 = clojure.zip.rightmost(child);
loc__$1 = G__18628;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 *   it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__18634 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18634,(0),null);
var map__18637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18634,(1),null);
var map__18637__$1 = ((((!((map__18637 == null)))?((((map__18637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18637):map__18637);
var path = map__18637__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,cljs.core.cst$kw$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18637__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count(l) > (0))){
var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.array_seq([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
while(true){
var temp__4655__auto__ = (function (){var and__6232__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__6232__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__6232__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var child = temp__4655__auto__;
var G__18639 = clojure.zip.rightmost(child);
loc__$1 = G__18639;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__6232__auto__ = ppath;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__6232__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});
