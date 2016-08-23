// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.drawer');
goog.require('cljs.core');
goog.require('vide.helpers');
vide.drawer.childless_QMARK_ = (function vide$drawer$childless_QMARK_(uuid,subgraph){
return cljs.core.not_any_QMARK_(cljs.core.PersistentHashSet.fromArray([uuid], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edges_DASH_in,subgraph))));
});
vide.drawer.find_childless = (function vide$drawer$find_childless(graph_remaining){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19718_SHARP_){
return vide.drawer.childless_QMARK_(p1__19718_SHARP_,cljs.core.vals(graph_remaining));
}),cljs.core.keys(graph_remaining));
});
vide.drawer.has_child_in = (function vide$drawer$has_child_in(uuid,layer,edges){
var possible_edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19719_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$start,cljs.core.cst$kw$end],[uuid,p1__19719_SHARP_]);
}),layer);
var unlabelled_edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (possible_edges){
return (function (p1__19720_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19720_SHARP_,cljs.core.cst$kw$label);
});})(possible_edges))
,edges);
return cljs.core.some(cljs.core.set(unlabelled_edges),possible_edges);
});
vide.drawer.get_layer_idx = (function vide$drawer$get_layer_idx(uuid,layers,checking_idx,graph){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(checking_idx,(-1))){
return (0);
} else {
if(cljs.core.truth_(vide.drawer.childless_QMARK_(uuid,cljs.core.map.cljs$core$IFn$_invoke$arity$2(graph,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,checking_idx))))){
var G__19721 = uuid;
var G__19722 = layers;
var G__19723 = (checking_idx - (1));
var G__19724 = graph;
uuid = G__19721;
layers = G__19722;
checking_idx = G__19723;
graph = G__19724;
continue;
} else {
return (checking_idx + (1));
}
}
break;
}
});
vide.drawer.get_layers_inner = (function vide$drawer$get_layers_inner(graph_remaining,layers,graph){
while(true){
if(cljs.core.empty_QMARK_(graph_remaining)){
return layers;
} else {
var uuid = cljs.core.first(vide.drawer.find_childless(graph_remaining));
var n_layers = cljs.core.count(layers);
var layer_idx = vide.drawer.get_layer_idx(uuid,layers,(n_layers - (1)),graph);
var graph_remaining_new = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(graph_remaining,uuid);
var layers_new = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layer_idx,n_layers))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(layers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null)):cljs.core.update.cljs$core$IFn$_invoke$arity$3(layers,layer_idx,((function (graph_remaining,layers,graph,uuid,n_layers,layer_idx,graph_remaining_new){
return (function (p1__19725_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19725_SHARP_,uuid);
});})(graph_remaining,layers,graph,uuid,n_layers,layer_idx,graph_remaining_new))
));
var G__19726 = graph_remaining_new;
var G__19727 = layers_new;
var G__19728 = graph;
graph_remaining = G__19726;
layers = G__19727;
graph = G__19728;
continue;
}
break;
}
});
vide.drawer.get_layers = (function vide$drawer$get_layers(graph){
return cljs.core.vec(cljs.core.reverse(vide.drawer.get_layers_inner(graph,cljs.core.PersistentVector.EMPTY,graph)));
});
vide.drawer.coords_from_layer_idx = (function vide$drawer$coords_from_layer_idx(uuid,layers,layer_idx){
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,layer_idx);
var x_coords = vide.helpers.find_indices(((function (layer){
return (function (p1__19729_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,p1__19729_SHARP_);
});})(layer))
,layer);
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer,x_coords){
return (function (p1__19730_SHARP_){
return cljs.core.vec((function (){var x__7078__auto__ = p1__19730_SHARP_;
return cljs.core._conj((function (){var x__7078__auto____$1 = layer_idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
})());
});})(layer,x_coords))
,x_coords);
return pairs;
});
vide.drawer.coords_from_layers = (function vide$drawer$coords_from_layers(uuid,layers){
var layer_idxs = vide.helpers.find_indices((function (p1__19731_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([uuid], true),p1__19731_SHARP_);
}),layers);
var wrapped_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layer_idxs){
return (function (p1__19732_SHARP_){
return vide.drawer.coords_from_layer_idx(uuid,layers,p1__19732_SHARP_);
});})(layer_idxs))
,layer_idxs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,wrapped_coords);
});
vide.drawer.remove_one = (function vide$drawer$remove_one(x,mylist){
var vec__19736 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,x),mylist);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(n,cljs.core.rest(m));
});
vide.drawer.get_perms = (function vide$drawer$get_perms(mylist){
if(cljs.core.empty_QMARK_(mylist)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7024__auto__ = (function vide$drawer$get_perms_$_iter__19750(s__19751){
return (new cljs.core.LazySeq(null,(function (){
var s__19751__$1 = s__19751;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19751__$1);
if(temp__4657__auto__){
var s__19751__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19751__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__19751__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__19753 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__19752 = (0);
while(true){
if((i__19752 < size__7023__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__19752);
cljs.core.chunk_append(b__19753,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__19752,x,c__7022__auto__,size__7023__auto__,b__19753,s__19751__$2,temp__4657__auto__){
return (function (p1__19739_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19739_SHARP_,x);
});})(i__19752,x,c__7022__auto__,size__7023__auto__,b__19753,s__19751__$2,temp__4657__auto__))
,vide$drawer$get_perms(vide.drawer.remove_one(x,mylist))));

var G__19756 = (i__19752 + (1));
i__19752 = G__19756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19753),vide$drawer$get_perms_$_iter__19750(cljs.core.chunk_rest(s__19751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19753),null);
}
} else {
var x = cljs.core.first(s__19751__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x,s__19751__$2,temp__4657__auto__){
return (function (p1__19739_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19739_SHARP_,x);
});})(x,s__19751__$2,temp__4657__auto__))
,vide$drawer$get_perms(vide.drawer.remove_one(x,mylist))),vide$drawer$get_perms_$_iter__19750(cljs.core.rest(s__19751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7024__auto__(mylist);
})()));
}
});
vide.drawer.get_node_cost = (function vide$drawer$get_node_cost(node,layers){
var vec__19765 = node;
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(0),null);
var map__19768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(1),null);
var map__19768__$1 = ((((!((map__19768 == null)))?((((map__19768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19768):map__19768);
var node_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19768__$1,cljs.core.cst$kw$name);
var edges_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19768__$1,cljs.core.cst$kw$edges_DASH_in);
var end_x = cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,vide.drawer.coords_from_layers(end,layers)));
var start_xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x){
return (function (p1__19757_SHARP_){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,vide.drawer.coords_from_layers(p1__19757_SHARP_,layers)));
});})(vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,edges_in));
var x_diffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x,start_xs){
return (function (p1__19758_SHARP_){
return (end_x - p1__19758_SHARP_);
});})(vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x,start_xs))
,start_xs);
var sq_x_diffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x,start_xs,x_diffs){
return (function (p1__19759_SHARP_){
return (p1__19759_SHARP_ * p1__19759_SHARP_);
});})(vec__19765,end,map__19768,map__19768__$1,node_name,edges_in,end_x,start_xs,x_diffs))
,x_diffs);
var cost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sq_x_diffs);
return cost;
});
vide.drawer.get_graph_cost = (function vide$drawer$get_graph_cost(layers,graph){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19770_SHARP_){
return vide.drawer.get_node_cost(p1__19770_SHARP_,layers);
}),graph));
});
vide.drawer.sort_layers_from = (function vide$drawer$sort_layers_from(n,layers,graph){
while(true){
if((n <= (0))){
return layers;
} else {
var layer = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(layers,n);
var perms = vide.drawer.get_perms(layer);
var possible_layers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n,layers,graph,layer,perms){
return (function (p1__19771_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layers,n,p1__19771_SHARP_);
});})(n,layers,graph,layer,perms))
,perms);
var best_layers = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min_key,((function (n,layers,graph,layer,perms,possible_layers){
return (function (p1__19772_SHARP_){
return vide.drawer.get_graph_cost(p1__19772_SHARP_,graph);
});})(n,layers,graph,layer,perms,possible_layers))
),possible_layers);
var G__19773 = (n - (1));
var G__19774 = best_layers;
var G__19775 = graph;
n = G__19773;
layers = G__19774;
graph = G__19775;
continue;
}
break;
}
});
vide.drawer.get_best_layers = (function vide$drawer$get_best_layers(graph){
var init_layers = vide.drawer.get_layers(graph);
var n_layers = cljs.core.count(init_layers);
var best_layers = vide.drawer.sort_layers_from((n_layers - (1)),init_layers,graph);
return best_layers;
});
vide.drawer.get_activated = (function vide$drawer$get_activated(graph,node_activations,node_defs_atom){
while(true){
var node_activations_new = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_activations,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (graph,node_activations,node_defs_atom){
return (function (p__19783){
var vec__19784 = p__19783;
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(0),null);
var map__19787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19784,(1),null);
var map__19787__$1 = ((((!((map__19787 == null)))?((((map__19787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19787):map__19787);
var end_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,cljs.core.cst$kw$name);
var edges_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19787__$1,cljs.core.cst$kw$edges_DASH_in);
var parent_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,edges_in);
if((cljs.core.seq(parent_uuids)) && (cljs.core.every_QMARK_(node_activations,parent_uuids))){
var func = (function (){var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_defs_atom) : cljs.core.deref.call(null,node_defs_atom)).call(null,vide.helpers.do_prn(end_name));
if(cljs.core.truth_(temp__4655__auto__)){
var user_node = temp__4655__auto__;
return cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(user_node);
} else {
var temp__4657__auto__ = vide.helpers.try_eval(vide.helpers.try_read(end_name));
if(cljs.core.truth_(temp__4657__auto__)){
var func = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(node_defs_atom,((function (graph,node_activations,node_defs_atom,func,temp__4657__auto__,temp__4655__auto__,parent_uuids,vec__19784,end,map__19787,map__19787__$1,end_name,edges_in){
return (function (p1__19776_SHARP_){
return cljs.core.assoc_in(p1__19776_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_name,cljs.core.cst$kw$fn], null),func);
});})(graph,node_activations,node_defs_atom,func,temp__4657__auto__,temp__4655__auto__,parent_uuids,vec__19784,end,map__19787,map__19787__$1,end_name,edges_in))
);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["added ",end_name," to node-defs"], 0));

return func;
} else {
return null;
}
}
})();
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node_activations,parent_uuids);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,(function (){var or__6244__auto__ = vide.helpers.try_eval(cljs.core.cons(func,args));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
})()], null);
} else {
return null;
}
});})(graph,node_activations,node_defs_atom))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,graph),cljs.core.keys(node_activations)))))], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_activations,node_activations_new)){
return node_activations;
} else {
var G__19789 = graph;
var G__19790 = node_activations_new;
var G__19791 = node_defs_atom;
graph = G__19789;
node_activations = G__19790;
node_defs_atom = G__19791;
continue;
}
break;
}
});
