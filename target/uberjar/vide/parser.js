// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('cljs.js');
goog.require('cljs.reader');
goog.require('vide.helpers');
vide.parser.literal_QMARK_ = (function vide$parser$literal_QMARK_(form){
if(!(cljs.core.sequential_QMARK_(form))){
return true;
} else {
if((cljs.core.list_QMARK_(form)) && (cljs.core.ifn_QMARK_(cljs.core.first(form)))){
return false;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide$parser$literal_QMARK_,form)))){
return false;
} else {
return true;

}
}
}
});
vide.parser.get_name_tree = (function vide$parser$get_name_tree(form){
return clojure.walk.prewalk((function (p1__21412_SHARP_){
if(cljs.core.truth_(vide.parser.literal_QMARK_(p1__21412_SHARP_))){
return [cljs.core.str(p1__21412_SHARP_)].join('');
} else {
return p1__21412_SHARP_;
}
}),form);
});
vide.parser.get_uuid_tree = (function vide$parser$get_uuid_tree(form){
return clojure.walk.prewalk((function (p1__21413_SHARP_){
if(cljs.core.truth_(vide.parser.literal_QMARK_(p1__21413_SHARP_))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node-"));
} else {
return p1__21413_SHARP_;
}
}),form);
});
vide.parser.form_to_graph = (function vide$parser$form_to_graph(form){
var uuid_tree = vide.parser.get_uuid_tree(form);
var name_tree = vide.parser.get_name_tree(form);
var uuid_tree_seq = cljs.core.tree_seq(cljs.core.seq_QMARK_,cljs.core.rest,uuid_tree);
var name_tree_seq = cljs.core.tree_seq(cljs.core.seq_QMARK_,cljs.core.rest,name_tree);
var subgraphs = (function (){var iter__7024__auto__ = ((function (uuid_tree,name_tree,uuid_tree_seq,name_tree_seq){
return (function vide$parser$form_to_graph_$_iter__21421(s__21422){
return (new cljs.core.LazySeq(null,((function (uuid_tree,name_tree,uuid_tree_seq,name_tree_seq){
return (function (){
var s__21422__$1 = s__21422;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21422__$1);
if(temp__4657__auto__){
var s__21422__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21422__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__21422__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__21424 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__21423 = (0);
while(true){
if((i__21423 < size__7023__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__21423);
cljs.core.chunk_append(b__21424,(function (){var uuid_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uuid_tree_seq,i);
var name_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name_tree_seq,i);
if(cljs.core.seq_QMARK_(uuid_form)){
return cljs.core.PersistentArrayMap.fromArray([vide.helpers.firstx(uuid_form),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,vide.helpers.firstx(name_form),cljs.core.cst$kw$edges_DASH_in,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__21423,uuid_form,name_form,i,c__7022__auto__,size__7023__auto__,b__21424,s__21422__$2,temp__4657__auto__,uuid_tree,name_tree,uuid_tree_seq,name_tree_seq){
return (function (p1__21414_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$start,cljs.core.cst$kw$label],[vide.helpers.firstx(p1__21414_SHARP_),null]);
});})(i__21423,uuid_form,name_form,i,c__7022__auto__,size__7023__auto__,b__21424,s__21422__$2,temp__4657__auto__,uuid_tree,name_tree,uuid_tree_seq,name_tree_seq))
,cljs.core.rest(uuid_form))], null)], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([vide.helpers.firstx(uuid_form),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,vide.helpers.firstx(name_form),cljs.core.cst$kw$edges_DASH_in,cljs.core.PersistentVector.EMPTY], null)], true, false);
}
})());

var G__21427 = (i__21423 + (1));
i__21423 = G__21427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21424),vide$parser$form_to_graph_$_iter__21421(cljs.core.chunk_rest(s__21422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21424),null);
}
} else {
var i = cljs.core.first(s__21422__$2);
return cljs.core.cons((function (){var uuid_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uuid_tree_seq,i);
var name_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name_tree_seq,i);
if(cljs.core.seq_QMARK_(uuid_form)){
return cljs.core.PersistentArrayMap.fromArray([vide.helpers.firstx(uuid_form),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,vide.helpers.firstx(name_form),cljs.core.cst$kw$edges_DASH_in,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (uuid_form,name_form,i,s__21422__$2,temp__4657__auto__,uuid_tree,name_tree,uuid_tree_seq,name_tree_seq){
return (function (p1__21414_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$start,cljs.core.cst$kw$label],[vide.helpers.firstx(p1__21414_SHARP_),null]);
});})(uuid_form,name_form,i,s__21422__$2,temp__4657__auto__,uuid_tree,name_tree,uuid_tree_seq,name_tree_seq))
,cljs.core.rest(uuid_form))], null)], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([vide.helpers.firstx(uuid_form),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,vide.helpers.firstx(name_form),cljs.core.cst$kw$edges_DASH_in,cljs.core.PersistentVector.EMPTY], null)], true, false);
}
})(),vide$parser$form_to_graph_$_iter__21421(cljs.core.rest(s__21422__$2)));
}
} else {
return null;
}
break;
}
});})(uuid_tree,name_tree,uuid_tree_seq,name_tree_seq))
,null,null));
});})(uuid_tree,name_tree,uuid_tree_seq,name_tree_seq))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(uuid_tree_seq)));
})();
var graph = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,subgraphs);
return graph;
});
vide.parser.try_read = (function vide$parser$try_read(code_string){
try{return cljs.reader.read_string(code_string);
}catch (e21429){if((e21429 instanceof Error)){
var e = e21429;
return [cljs.core.str("caught exception: "),cljs.core.str(e)].join('');
} else {
throw e21429;

}
}});
vide.parser.fix_edge = (function vide$parser$fix_edge(p__21430,naive_merged,symbol_from){
var map__21433 = p__21430;
var map__21433__$1 = ((((!((map__21433 == null)))?((((map__21433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21433):map__21433);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433__$1,cljs.core.cst$kw$start);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433__$1,cljs.core.cst$kw$label);
var start_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((naive_merged.cljs$core$IFn$_invoke$arity$1 ? naive_merged.cljs$core$IFn$_invoke$arity$1(start) : naive_merged.call(null,start)));
var temp__4655__auto__ = (symbol_from.cljs$core$IFn$_invoke$arity$1 ? symbol_from.cljs$core$IFn$_invoke$arity$1(start_name) : symbol_from.call(null,start_name));
if(cljs.core.truth_(temp__4655__auto__)){
var end_uuid = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,end_uuid,cljs.core.cst$kw$label,start_name], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,start,cljs.core.cst$kw$label,label], null);
}
});
vide.parser.parse_defn_let = (function vide$parser$parse_defn_let(defn_let_form){
var vec__21460 = defn_let_form;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21460,(0),null);
var func_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21460,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21460,(2),null);
var let_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21460,(3),null);
var vec__21463 = let_form;
var __ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,(0),null);
var defs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,(1),null);
var final_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21463,(2),null);
var duped_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form){
return (function (p1__21435_SHARP_){
var x__7078__auto__ = p1__21435_SHARP_;
return cljs.core._conj((function (){var x__7078__auto____$1 = p1__21435_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$1);
})(),x__7078__auto__);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form))
,args);
var struct_form_pairs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(duped_args,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),defs));
var structures = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,struct_form_pairs));
var forms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures){
return (function (p1__21436_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__21436_SHARP_);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures))
.call(null,struct_form_pairs)),final_form);
var symbols = ((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms){
return (function (p1__21439_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21439_SHARP_,cljs.core._conj(cljs.core.List.EMPTY,"final"));
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms))
.call(null,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms){
return (function (p1__21438_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__21438_SHARP_);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms){
return (function (p1__21437_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,p1__21437_SHARP_);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.helpers.wrap,structures))))));
var graphs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.parser.form_to_graph,forms);
var naive_merged = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,graphs);
var end_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged){
return (function (p1__21440_SHARP_){
return cljs.core.first(cljs.core.keys(p1__21440_SHARP_));
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged))
,graphs);
var end_uuids_rep_syms = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids){
return (function (p1__21441_SHARP_,p2__21442_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__21441_SHARP_),p2__21442_SHARP_);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids))
,symbols,end_uuids));
var symbol_from = cljs.core.zipmap(cljs.core.flatten(symbols),end_uuids_rep_syms);
var arg_node_uuids = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),graphs)));
var symbols_removed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids){
return (function (p__21466){
var vec__21467 = p__21466;
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21467,(0),null);
var map__21470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21467,(1),null);
var map__21470__$1 = ((((!((map__21470 == null)))?((((map__21470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21470):map__21470);
var node_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,cljs.core.cst$kw$name);
var edges_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,cljs.core.cst$kw$edges_DASH_in);
var and__6232__auto__ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([node_name], true),cljs.core.flatten(symbols));
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([uuid], true),arg_node_uuids));
} else {
return and__6232__auto__;
}
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids))
,naive_merged));
var merged = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed){
return (function (p__21472){
var vec__21473 = p__21472;
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21473,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21473,(1),null);
return cljs.core.PersistentArrayMap.fromArray([uuid,cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$edges_DASH_in,((function (vec__21473,uuid,node,vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed){
return (function (edges_in){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__21473,uuid,node,vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed){
return (function (p1__21443_SHARP_){
return vide.parser.fix_edge(p1__21443_SHARP_,naive_merged,symbol_from);
});})(vec__21473,uuid,node,vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed))
,edges_in);
});})(vec__21473,uuid,node,vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed))
)], true, false);
});})(vec__21460,_,func_name,args,let_form,vec__21463,__,defs,final_form,duped_args,struct_form_pairs,structures,forms,symbols,graphs,naive_merged,end_uuids,end_uuids_rep_syms,symbol_from,arg_node_uuids,symbols_removed))
,symbols_removed));
return merged;
});
