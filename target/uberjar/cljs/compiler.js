// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__14802 = s;
var map__14802__$1 = ((((!((map__14802 == null)))?((((map__14802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14802):map__14802);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14802__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14802__$1,cljs.core.cst$kw$info);
var d = (0);
var G__14805 = info;
var map__14806 = G__14805;
var map__14806__$1 = ((((!((map__14806 == null)))?((((map__14806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14806):map__14806);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14806__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__14805__$1 = G__14805;
while(true){
var d__$2 = d__$1;
var map__14808 = G__14805__$1;
var map__14808__$1 = ((((!((map__14808 == null)))?((((map__14808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14808):map__14808);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14808__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__14810 = (d__$2 + (1));
var G__14811 = shadow__$1;
d__$1 = G__14810;
G__14805__$1 = G__14811;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14812){
var map__14818 = p__14812;
var map__14818__$1 = ((((!((map__14818 == null)))?((((map__14818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14818):map__14818);
var name_var = map__14818__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14818__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__14820 = info;
var map__14820__$1 = ((((!((map__14820 == null)))?((((map__14820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14820):map__14820);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14820__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14820__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__14822 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__14822) : cljs.compiler.munge.call(null,G__14822));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args14823 = [];
var len__7319__auto___14826 = arguments.length;
var i__7320__auto___14827 = (0);
while(true){
if((i__7320__auto___14827 < len__7319__auto___14826)){
args14823.push((arguments[i__7320__auto___14827]));

var G__14828 = (i__7320__auto___14827 + (1));
i__7320__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var G__14825 = args14823.length;
switch (G__14825) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14823.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__14831 = cp;
switch (G__14831) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__14837_14841 = cljs.core.seq(s);
var chunk__14838_14842 = null;
var count__14839_14843 = (0);
var i__14840_14844 = (0);
while(true){
if((i__14840_14844 < count__14839_14843)){
var c_14845 = chunk__14838_14842.cljs$core$IIndexed$_nth$arity$2(null,i__14840_14844);
sb.append(cljs.compiler.escape_char(c_14845));

var G__14846 = seq__14837_14841;
var G__14847 = chunk__14838_14842;
var G__14848 = count__14839_14843;
var G__14849 = (i__14840_14844 + (1));
seq__14837_14841 = G__14846;
chunk__14838_14842 = G__14847;
count__14839_14843 = G__14848;
i__14840_14844 = G__14849;
continue;
} else {
var temp__4657__auto___14850 = cljs.core.seq(seq__14837_14841);
if(temp__4657__auto___14850){
var seq__14837_14851__$1 = temp__4657__auto___14850;
if(cljs.core.chunked_seq_QMARK_(seq__14837_14851__$1)){
var c__7055__auto___14852 = cljs.core.chunk_first(seq__14837_14851__$1);
var G__14853 = cljs.core.chunk_rest(seq__14837_14851__$1);
var G__14854 = c__7055__auto___14852;
var G__14855 = cljs.core.count(c__7055__auto___14852);
var G__14856 = (0);
seq__14837_14841 = G__14853;
chunk__14838_14842 = G__14854;
count__14839_14843 = G__14855;
i__14840_14844 = G__14856;
continue;
} else {
var c_14857 = cljs.core.first(seq__14837_14851__$1);
sb.append(cljs.compiler.escape_char(c_14857));

var G__14858 = cljs.core.next(seq__14837_14851__$1);
var G__14859 = null;
var G__14860 = (0);
var G__14861 = (0);
seq__14837_14841 = G__14858;
chunk__14838_14842 = G__14859;
count__14839_14843 = G__14860;
i__14840_14844 = G__14861;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7169__auto__ = (function (){var G__14862 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14862) : cljs.core.atom.call(null,G__14862));
})();
var prefer_table__7170__auto__ = (function (){var G__14863 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14863) : cljs.core.atom.call(null,G__14863));
})();
var method_cache__7171__auto__ = (function (){var G__14864 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14864) : cljs.core.atom.call(null,G__14864));
})();
var cached_hierarchy__7172__auto__ = (function (){var G__14865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14865) : cljs.core.atom.call(null,G__14865));
})();
var hierarchy__7173__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__7173__auto__,method_table__7169__auto__,prefer_table__7170__auto__,method_cache__7171__auto__,cached_hierarchy__7172__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__12888__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__12888__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14871_14876 = ast;
var map__14871_14877__$1 = ((((!((map__14871_14876 == null)))?((((map__14871_14876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14871_14876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14871_14876):map__14871_14876);
var env_14878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14871_14877__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_14878))){
var map__14873_14879 = env_14878;
var map__14873_14880__$1 = ((((!((map__14873_14879 == null)))?((((map__14873_14879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14873_14879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14873_14879):map__14873_14879);
var line_14881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873_14880__$1,cljs.core.cst$kw$line);
var column_14882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873_14880__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__){
return (function (m){
var minfo = (function (){var G__14875 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14875,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__14875;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_14881 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14882)?(column_14882 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__))
,cljs.core.sorted_map()));
});})(map__14873_14879,map__14873_14880__$1,line_14881,column_14882,map__14871_14876,map__14871_14877__$1,env_14878,val__12888__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__12888__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7326__auto__ = [];
var len__7319__auto___14889 = arguments.length;
var i__7320__auto___14890 = (0);
while(true){
if((i__7320__auto___14890 < len__7319__auto___14889)){
args__7326__auto__.push((arguments[i__7320__auto___14890]));

var G__14891 = (i__7320__auto___14890 + (1));
i__7320__auto___14890 = G__14891;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((0) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7327__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14885_14892 = cljs.core.seq(xs);
var chunk__14886_14893 = null;
var count__14887_14894 = (0);
var i__14888_14895 = (0);
while(true){
if((i__14888_14895 < count__14887_14894)){
var x_14896 = chunk__14886_14893.cljs$core$IIndexed$_nth$arity$2(null,i__14888_14895);
if((x_14896 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_14896)){
cljs.compiler.emit(x_14896);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_14896)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_14896);
} else {
if(goog.isFunction(x_14896)){
(x_14896.cljs$core$IFn$_invoke$arity$0 ? x_14896.cljs$core$IFn$_invoke$arity$0() : x_14896.call(null));
} else {
var s_14897 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_14896], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__14885_14892,chunk__14886_14893,count__14887_14894,i__14888_14895,s_14897,x_14896){
return (function (p1__14883_SHARP_){
return (p1__14883_SHARP_ + cljs.core.count(s_14897));
});})(seq__14885_14892,chunk__14886_14893,count__14887_14894,i__14888_14895,s_14897,x_14896))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_14897], 0));

}
}
}
}

var G__14898 = seq__14885_14892;
var G__14899 = chunk__14886_14893;
var G__14900 = count__14887_14894;
var G__14901 = (i__14888_14895 + (1));
seq__14885_14892 = G__14898;
chunk__14886_14893 = G__14899;
count__14887_14894 = G__14900;
i__14888_14895 = G__14901;
continue;
} else {
var temp__4657__auto___14902 = cljs.core.seq(seq__14885_14892);
if(temp__4657__auto___14902){
var seq__14885_14903__$1 = temp__4657__auto___14902;
if(cljs.core.chunked_seq_QMARK_(seq__14885_14903__$1)){
var c__7055__auto___14904 = cljs.core.chunk_first(seq__14885_14903__$1);
var G__14905 = cljs.core.chunk_rest(seq__14885_14903__$1);
var G__14906 = c__7055__auto___14904;
var G__14907 = cljs.core.count(c__7055__auto___14904);
var G__14908 = (0);
seq__14885_14892 = G__14905;
chunk__14886_14893 = G__14906;
count__14887_14894 = G__14907;
i__14888_14895 = G__14908;
continue;
} else {
var x_14909 = cljs.core.first(seq__14885_14903__$1);
if((x_14909 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_14909)){
cljs.compiler.emit(x_14909);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_14909)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_14909);
} else {
if(goog.isFunction(x_14909)){
(x_14909.cljs$core$IFn$_invoke$arity$0 ? x_14909.cljs$core$IFn$_invoke$arity$0() : x_14909.call(null));
} else {
var s_14910 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_14909], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__14885_14892,chunk__14886_14893,count__14887_14894,i__14888_14895,s_14910,x_14909,seq__14885_14903__$1,temp__4657__auto___14902){
return (function (p1__14883_SHARP_){
return (p1__14883_SHARP_ + cljs.core.count(s_14910));
});})(seq__14885_14892,chunk__14886_14893,count__14887_14894,i__14888_14895,s_14910,x_14909,seq__14885_14903__$1,temp__4657__auto___14902))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_14910], 0));

}
}
}
}

var G__14911 = cljs.core.next(seq__14885_14903__$1);
var G__14912 = null;
var G__14913 = (0);
var G__14914 = (0);
seq__14885_14892 = G__14911;
chunk__14886_14893 = G__14912;
count__14887_14894 = G__14913;
i__14888_14895 = G__14914;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq14884){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14884));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7326__auto__ = [];
var len__7319__auto___14919 = arguments.length;
var i__7320__auto___14920 = (0);
while(true){
if((i__7320__auto___14920 < len__7319__auto___14919)){
args__7326__auto__.push((arguments[i__7320__auto___14920]));

var G__14921 = (i__7320__auto___14920 + (1));
i__7320__auto___14920 = G__14921;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((0) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7327__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__14916){
var map__14917 = p__14916;
var map__14917__$1 = ((((!((map__14917 == null)))?((((map__14917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14917):map__14917);
var m = map__14917__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14917__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14915){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14915));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7230__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14924_14926 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14925_14927 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14924_14926,_STAR_print_fn_STAR_14925_14927,sb__7230__auto__){
return (function (x__7231__auto__){
return sb__7230__auto__.append(x__7231__auto__);
});})(_STAR_print_newline_STAR_14924_14926,_STAR_print_fn_STAR_14925_14927,sb__7230__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14925_14927;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14924_14926;
}
return [cljs.core.str(sb__7230__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7169__auto__ = (function (){var G__14928 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14928) : cljs.core.atom.call(null,G__14928));
})();
var prefer_table__7170__auto__ = (function (){var G__14929 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14929) : cljs.core.atom.call(null,G__14929));
})();
var method_cache__7171__auto__ = (function (){var G__14930 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14930) : cljs.core.atom.call(null,G__14930));
})();
var cached_hierarchy__7172__auto__ = (function (){var G__14931 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14931) : cljs.core.atom.call(null,G__14931));
})();
var hierarchy__7173__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7173__auto__,method_table__7169__auto__,prefer_table__7170__auto__,method_cache__7171__auto__,cached_hierarchy__7172__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__14932 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14937_14939 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14937_14939) : cljs.compiler.emit_constant.call(null,G__14937_14939));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14938_14940 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14938_14940) : cljs.compiler.emit_constant.call(null,G__14938_14940));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14942_14943 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14942_14943) : cljs.compiler.emit_constant.call(null,G__14942_14943));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__14944 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__14944) : x.call(null,G__14944));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__14945 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__14945) : x.call(null,G__14945));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__14947){
var map__14948 = p__14947;
var map__14948__$1 = ((((!((map__14948 == null)))?((((map__14948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14948):map__14948);
var arg = map__14948__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14948__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14948__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14948__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__6244__auto__ = js_module_name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14950 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__14950);
} else {
return G__14950;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__14951){
var map__14952 = p__14951;
var map__14952__$1 = ((((!((map__14952 == null)))?((((map__14952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14952):map__14952);
var arg = map__14952__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14952__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14952__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14952__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14952__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14954 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__14954__$1 = ((((!((map__14954 == null)))?((((map__14954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14954):map__14954);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14954__$1,cljs.core.cst$kw$name);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__14956){
var map__14957 = p__14956;
var map__14957__$1 = ((((!((map__14957 == null)))?((((map__14957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14957):map__14957);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14957__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__14959_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__14959_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__14960){
var map__14961 = p__14960;
var map__14961__$1 = ((((!((map__14961 == null)))?((((map__14961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14961):map__14961);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14961__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14961__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14961__$1,cljs.core.cst$kw$vals);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__14963){
var map__14964 = p__14963;
var map__14964__$1 = ((((!((map__14964 == null)))?((((map__14964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14964):map__14964);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__14966){
var map__14967 = p__14966;
var map__14967__$1 = ((((!((map__14967 == null)))?((((map__14967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14967):map__14967);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_14969 = cljs.core.count(items);
if((cnt_14969 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_14969,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__14970_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__14970_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__14971){
var map__14972 = p__14971;
var map__14972__$1 = ((((!((map__14972 == null)))?((((map__14972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14972):map__14972);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14972__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14972__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__14974){
var map__14975 = p__14974;
var map__14975__$1 = ((((!((map__14975 == null)))?((((map__14975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14975):map__14975);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14975__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4657__auto___14993 = cljs.core.seq(items);
if(temp__4657__auto___14993){
var items_14994__$1 = temp__4657__auto___14993;
var vec__14977_14995 = items_14994__$1;
var seq__14978_14996 = cljs.core.seq(vec__14977_14995);
var first__14979_14997 = cljs.core.first(seq__14978_14996);
var seq__14978_14998__$1 = cljs.core.next(seq__14978_14996);
var vec__14980_14999 = first__14979_14997;
var k_15000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980_14999,(0),null);
var v_15001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980_14999,(1),null);
var r_15002 = seq__14978_14998__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_15000),"\": ",v_15001], 0));

var seq__14983_15003 = cljs.core.seq(r_15002);
var chunk__14984_15004 = null;
var count__14985_15005 = (0);
var i__14986_15006 = (0);
while(true){
if((i__14986_15006 < count__14985_15005)){
var vec__14987_15007 = chunk__14984_15004.cljs$core$IIndexed$_nth$arity$2(null,i__14986_15006);
var k_15008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987_15007,(0),null);
var v_15009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987_15007,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_15008__$1),"\": ",v_15009__$1], 0));

var G__15010 = seq__14983_15003;
var G__15011 = chunk__14984_15004;
var G__15012 = count__14985_15005;
var G__15013 = (i__14986_15006 + (1));
seq__14983_15003 = G__15010;
chunk__14984_15004 = G__15011;
count__14985_15005 = G__15012;
i__14986_15006 = G__15013;
continue;
} else {
var temp__4657__auto___15014__$1 = cljs.core.seq(seq__14983_15003);
if(temp__4657__auto___15014__$1){
var seq__14983_15015__$1 = temp__4657__auto___15014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14983_15015__$1)){
var c__7055__auto___15016 = cljs.core.chunk_first(seq__14983_15015__$1);
var G__15017 = cljs.core.chunk_rest(seq__14983_15015__$1);
var G__15018 = c__7055__auto___15016;
var G__15019 = cljs.core.count(c__7055__auto___15016);
var G__15020 = (0);
seq__14983_15003 = G__15017;
chunk__14984_15004 = G__15018;
count__14985_15005 = G__15019;
i__14986_15006 = G__15020;
continue;
} else {
var vec__14990_15021 = cljs.core.first(seq__14983_15015__$1);
var k_15022__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990_15021,(0),null);
var v_15023__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990_15021,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_15022__$1),"\": ",v_15023__$1], 0));

var G__15024 = cljs.core.next(seq__14983_15015__$1);
var G__15025 = null;
var G__15026 = (0);
var G__15027 = (0);
seq__14983_15003 = G__15024;
chunk__14984_15004 = G__15025;
count__14985_15005 = G__15026;
i__14986_15006 = G__15027;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__15028){
var map__15029 = p__15028;
var map__15029__$1 = ((((!((map__15029 == null)))?((((map__15029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15029):map__15029);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__15031){
var map__15034 = p__15031;
var map__15034__$1 = ((((!((map__15034 == null)))?((((map__15034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15034):map__15034);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15034__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15034__$1,cljs.core.cst$kw$form);
var and__6232__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__6232__auto__){
var and__6232__auto____$1 = form;
if(cljs.core.truth_(and__6232__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__15036){
var map__15039 = p__15036;
var map__15039__$1 = ((((!((map__15039 == null)))?((((map__15039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15039):map__15039);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15039__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__6244__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__15041){
var map__15042 = p__15041;
var map__15042__$1 = ((((!((map__15042 == null)))?((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15042):map__15042);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__6244__auto__ = unchecked;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__15044){
var map__15045 = p__15044;
var map__15045__$1 = ((((!((map__15045 == null)))?((((map__15045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15045):map__15045);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15045__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__15047_15065 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__15048_15066 = null;
var count__15049_15067 = (0);
var i__15050_15068 = (0);
while(true){
if((i__15050_15068 < count__15049_15067)){
var vec__15051_15069 = chunk__15048_15066.cljs$core$IIndexed$_nth$arity$2(null,i__15050_15068);
var ts_15070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051_15069,(0),null);
var then_15071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051_15069,(1),null);
var seq__15054_15072 = cljs.core.seq(ts_15070);
var chunk__15055_15073 = null;
var count__15056_15074 = (0);
var i__15057_15075 = (0);
while(true){
if((i__15057_15075 < count__15056_15074)){
var test_15076 = chunk__15055_15073.cljs$core$IIndexed$_nth$arity$2(null,i__15057_15075);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_15076,":"], 0));

var G__15077 = seq__15054_15072;
var G__15078 = chunk__15055_15073;
var G__15079 = count__15056_15074;
var G__15080 = (i__15057_15075 + (1));
seq__15054_15072 = G__15077;
chunk__15055_15073 = G__15078;
count__15056_15074 = G__15079;
i__15057_15075 = G__15080;
continue;
} else {
var temp__4657__auto___15081 = cljs.core.seq(seq__15054_15072);
if(temp__4657__auto___15081){
var seq__15054_15082__$1 = temp__4657__auto___15081;
if(cljs.core.chunked_seq_QMARK_(seq__15054_15082__$1)){
var c__7055__auto___15083 = cljs.core.chunk_first(seq__15054_15082__$1);
var G__15084 = cljs.core.chunk_rest(seq__15054_15082__$1);
var G__15085 = c__7055__auto___15083;
var G__15086 = cljs.core.count(c__7055__auto___15083);
var G__15087 = (0);
seq__15054_15072 = G__15084;
chunk__15055_15073 = G__15085;
count__15056_15074 = G__15086;
i__15057_15075 = G__15087;
continue;
} else {
var test_15088 = cljs.core.first(seq__15054_15082__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_15088,":"], 0));

var G__15089 = cljs.core.next(seq__15054_15082__$1);
var G__15090 = null;
var G__15091 = (0);
var G__15092 = (0);
seq__15054_15072 = G__15089;
chunk__15055_15073 = G__15090;
count__15056_15074 = G__15091;
i__15057_15075 = G__15092;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_15071], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_15071], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__15093 = seq__15047_15065;
var G__15094 = chunk__15048_15066;
var G__15095 = count__15049_15067;
var G__15096 = (i__15050_15068 + (1));
seq__15047_15065 = G__15093;
chunk__15048_15066 = G__15094;
count__15049_15067 = G__15095;
i__15050_15068 = G__15096;
continue;
} else {
var temp__4657__auto___15097 = cljs.core.seq(seq__15047_15065);
if(temp__4657__auto___15097){
var seq__15047_15098__$1 = temp__4657__auto___15097;
if(cljs.core.chunked_seq_QMARK_(seq__15047_15098__$1)){
var c__7055__auto___15099 = cljs.core.chunk_first(seq__15047_15098__$1);
var G__15100 = cljs.core.chunk_rest(seq__15047_15098__$1);
var G__15101 = c__7055__auto___15099;
var G__15102 = cljs.core.count(c__7055__auto___15099);
var G__15103 = (0);
seq__15047_15065 = G__15100;
chunk__15048_15066 = G__15101;
count__15049_15067 = G__15102;
i__15050_15068 = G__15103;
continue;
} else {
var vec__15058_15104 = cljs.core.first(seq__15047_15098__$1);
var ts_15105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058_15104,(0),null);
var then_15106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058_15104,(1),null);
var seq__15061_15107 = cljs.core.seq(ts_15105);
var chunk__15062_15108 = null;
var count__15063_15109 = (0);
var i__15064_15110 = (0);
while(true){
if((i__15064_15110 < count__15063_15109)){
var test_15111 = chunk__15062_15108.cljs$core$IIndexed$_nth$arity$2(null,i__15064_15110);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_15111,":"], 0));

var G__15112 = seq__15061_15107;
var G__15113 = chunk__15062_15108;
var G__15114 = count__15063_15109;
var G__15115 = (i__15064_15110 + (1));
seq__15061_15107 = G__15112;
chunk__15062_15108 = G__15113;
count__15063_15109 = G__15114;
i__15064_15110 = G__15115;
continue;
} else {
var temp__4657__auto___15116__$1 = cljs.core.seq(seq__15061_15107);
if(temp__4657__auto___15116__$1){
var seq__15061_15117__$1 = temp__4657__auto___15116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15061_15117__$1)){
var c__7055__auto___15118 = cljs.core.chunk_first(seq__15061_15117__$1);
var G__15119 = cljs.core.chunk_rest(seq__15061_15117__$1);
var G__15120 = c__7055__auto___15118;
var G__15121 = cljs.core.count(c__7055__auto___15118);
var G__15122 = (0);
seq__15061_15107 = G__15119;
chunk__15062_15108 = G__15120;
count__15063_15109 = G__15121;
i__15064_15110 = G__15122;
continue;
} else {
var test_15123 = cljs.core.first(seq__15061_15117__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_15123,":"], 0));

var G__15124 = cljs.core.next(seq__15061_15117__$1);
var G__15125 = null;
var G__15126 = (0);
var G__15127 = (0);
seq__15061_15107 = G__15124;
chunk__15062_15108 = G__15125;
count__15063_15109 = G__15126;
i__15064_15110 = G__15127;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_15106], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_15106], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__15128 = cljs.core.next(seq__15047_15098__$1);
var G__15129 = null;
var G__15130 = (0);
var G__15131 = (0);
seq__15047_15065 = G__15128;
chunk__15048_15066 = G__15129;
count__15049_15067 = G__15130;
i__15050_15068 = G__15131;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__15132){
var map__15133 = p__15132;
var map__15133__$1 = ((((!((map__15133 == null)))?((((map__15133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15133):map__15133);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15133__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15133__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__15144 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type(env,rstr):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__15144,fstr,rstr,ret_t,axstr){
return (function (p1__15135_SHARP_){
return cljs$compiler$resolve_type(env,p1__15135_SHARP_);
});})(idx,vec__15144,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__15147 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__15147),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__15147;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__15148_SHARP_){
return cljs.compiler.resolve_type(env,p1__15148_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__15155 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__15156 = cljs.core.seq(vec__15155);
var first__15157 = cljs.core.first(seq__15156);
var seq__15156__$1 = cljs.core.next(seq__15156);
var p = first__15157;
var first__15157__$1 = cljs.core.first(seq__15156__$1);
var seq__15156__$2 = cljs.core.next(seq__15156__$1);
var ts = first__15157__$1;
var first__15157__$2 = cljs.core.first(seq__15156__$2);
var seq__15156__$3 = cljs.core.next(seq__15156__$2);
var n = first__15157__$2;
var xs = seq__15156__$3;
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__6232__auto__){
var and__6232__auto____$1 = ts;
if(cljs.core.truth_(and__6232__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__15158 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__15159 = cljs.core.seq(vec__15158);
var first__15160 = cljs.core.first(seq__15159);
var seq__15159__$1 = cljs.core.next(seq__15159);
var p = first__15160;
var first__15160__$1 = cljs.core.first(seq__15159__$1);
var seq__15159__$2 = cljs.core.next(seq__15159__$1);
var ts = first__15160__$1;
var xs = seq__15159__$2;
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__6232__auto__){
var and__6232__auto____$1 = ts;
if(cljs.core.truth_(and__6232__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn,null,cljs.core.cst$kw$error,null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args15162 = [];
var len__7319__auto___15197 = arguments.length;
var i__7320__auto___15198 = (0);
while(true){
if((i__7320__auto___15198 < len__7319__auto___15197)){
args15162.push((arguments[i__7320__auto___15198]));

var G__15199 = (i__7320__auto___15198 + (1));
i__7320__auto___15198 = G__15199;
continue;
} else {
}
break;
}

var G__15164 = args15162.length;
switch (G__15164) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15162.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__15186 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__15161_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__15161_SHARP_);
} else {
return p1__15161_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__15187 = cljs.core.seq(vec__15186);
var first__15188 = cljs.core.first(seq__15187);
var seq__15187__$1 = cljs.core.next(seq__15187);
var x = first__15188;
var ys = seq__15187__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__15189 = cljs.core.seq(ys);
var chunk__15190 = null;
var count__15191 = (0);
var i__15192 = (0);
while(true){
if((i__15192 < count__15191)){
var next_line = chunk__15190.cljs$core$IIndexed$_nth$arity$2(null,i__15192);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__15201 = seq__15189;
var G__15202 = chunk__15190;
var G__15203 = count__15191;
var G__15204 = (i__15192 + (1));
seq__15189 = G__15201;
chunk__15190 = G__15202;
count__15191 = G__15203;
i__15192 = G__15204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15189);
if(temp__4657__auto__){
var seq__15189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15189__$1)){
var c__7055__auto__ = cljs.core.chunk_first(seq__15189__$1);
var G__15205 = cljs.core.chunk_rest(seq__15189__$1);
var G__15206 = c__7055__auto__;
var G__15207 = cljs.core.count(c__7055__auto__);
var G__15208 = (0);
seq__15189 = G__15205;
chunk__15190 = G__15206;
count__15191 = G__15207;
i__15192 = G__15208;
continue;
} else {
var next_line = cljs.core.first(seq__15189__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__15209 = cljs.core.next(seq__15189__$1);
var G__15210 = null;
var G__15211 = (0);
var G__15212 = (0);
seq__15189 = G__15209;
chunk__15190 = G__15210;
count__15191 = G__15211;
i__15192 = G__15212;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__15193_15213 = cljs.core.seq(docs__$2);
var chunk__15194_15214 = null;
var count__15195_15215 = (0);
var i__15196_15216 = (0);
while(true){
if((i__15196_15216 < count__15195_15215)){
var e_15217 = chunk__15194_15214.cljs$core$IIndexed$_nth$arity$2(null,i__15196_15216);
if(cljs.core.truth_(e_15217)){
print_comment_lines(e_15217);
} else {
}

var G__15218 = seq__15193_15213;
var G__15219 = chunk__15194_15214;
var G__15220 = count__15195_15215;
var G__15221 = (i__15196_15216 + (1));
seq__15193_15213 = G__15218;
chunk__15194_15214 = G__15219;
count__15195_15215 = G__15220;
i__15196_15216 = G__15221;
continue;
} else {
var temp__4657__auto___15222 = cljs.core.seq(seq__15193_15213);
if(temp__4657__auto___15222){
var seq__15193_15223__$1 = temp__4657__auto___15222;
if(cljs.core.chunked_seq_QMARK_(seq__15193_15223__$1)){
var c__7055__auto___15224 = cljs.core.chunk_first(seq__15193_15223__$1);
var G__15225 = cljs.core.chunk_rest(seq__15193_15223__$1);
var G__15226 = c__7055__auto___15224;
var G__15227 = cljs.core.count(c__7055__auto___15224);
var G__15228 = (0);
seq__15193_15213 = G__15225;
chunk__15194_15214 = G__15226;
count__15195_15215 = G__15227;
i__15196_15216 = G__15228;
continue;
} else {
var e_15229 = cljs.core.first(seq__15193_15223__$1);
if(cljs.core.truth_(e_15229)){
print_comment_lines(e_15229);
} else {
}

var G__15230 = cljs.core.next(seq__15193_15223__$1);
var G__15231 = null;
var G__15232 = (0);
var G__15233 = (0);
seq__15193_15213 = G__15230;
chunk__15194_15214 = G__15231;
count__15195_15215 = G__15232;
i__15196_15216 = G__15233;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$options);
var and__6232__auto__ = cljs.core.some(((function (opts){
return (function (p1__15235_SHARP_){
return goog.string.startsWith(p1__15235_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6232__auto__)){
var and__6232__auto____$1 = opts;
if(cljs.core.truth_(and__6232__auto____$1)){
var and__6232__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__6232__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__6232__auto____$2;
}
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__15236){
var map__15237 = p__15236;
var map__15237__$1 = ((((!((map__15237 == null)))?((((map__15237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15237):map__15237);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__6244__auto__ = init;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6232__auto__)){
return test;
} else {
return and__6232__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15239){
var map__15260 = p__15239;
var map__15260__$1 = ((((!((map__15260 == null)))?((((map__15260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15260):map__15260);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15260__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15260__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15260__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__15262_15280 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__15263_15281 = null;
var count__15264_15282 = (0);
var i__15265_15283 = (0);
while(true){
if((i__15265_15283 < count__15264_15282)){
var vec__15266_15284 = chunk__15263_15281.cljs$core$IIndexed$_nth$arity$2(null,i__15265_15283);
var i_15285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266_15284,(0),null);
var param_15286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266_15284,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_15286);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__15287 = seq__15262_15280;
var G__15288 = chunk__15263_15281;
var G__15289 = count__15264_15282;
var G__15290 = (i__15265_15283 + (1));
seq__15262_15280 = G__15287;
chunk__15263_15281 = G__15288;
count__15264_15282 = G__15289;
i__15265_15283 = G__15290;
continue;
} else {
var temp__4657__auto___15291 = cljs.core.seq(seq__15262_15280);
if(temp__4657__auto___15291){
var seq__15262_15292__$1 = temp__4657__auto___15291;
if(cljs.core.chunked_seq_QMARK_(seq__15262_15292__$1)){
var c__7055__auto___15293 = cljs.core.chunk_first(seq__15262_15292__$1);
var G__15294 = cljs.core.chunk_rest(seq__15262_15292__$1);
var G__15295 = c__7055__auto___15293;
var G__15296 = cljs.core.count(c__7055__auto___15293);
var G__15297 = (0);
seq__15262_15280 = G__15294;
chunk__15263_15281 = G__15295;
count__15264_15282 = G__15296;
i__15265_15283 = G__15297;
continue;
} else {
var vec__15269_15298 = cljs.core.first(seq__15262_15292__$1);
var i_15299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15269_15298,(0),null);
var param_15300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15269_15298,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_15300);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__15301 = cljs.core.next(seq__15262_15292__$1);
var G__15302 = null;
var G__15303 = (0);
var G__15304 = (0);
seq__15262_15280 = G__15301;
chunk__15263_15281 = G__15302;
count__15264_15282 = G__15303;
i__15265_15283 = G__15304;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__15272_15305 = cljs.core.seq(params);
var chunk__15273_15306 = null;
var count__15274_15307 = (0);
var i__15275_15308 = (0);
while(true){
if((i__15275_15308 < count__15274_15307)){
var param_15309 = chunk__15273_15306.cljs$core$IIndexed$_nth$arity$2(null,i__15275_15308);
cljs.compiler.emit(param_15309);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15309,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15310 = seq__15272_15305;
var G__15311 = chunk__15273_15306;
var G__15312 = count__15274_15307;
var G__15313 = (i__15275_15308 + (1));
seq__15272_15305 = G__15310;
chunk__15273_15306 = G__15311;
count__15274_15307 = G__15312;
i__15275_15308 = G__15313;
continue;
} else {
var temp__4657__auto___15314 = cljs.core.seq(seq__15272_15305);
if(temp__4657__auto___15314){
var seq__15272_15315__$1 = temp__4657__auto___15314;
if(cljs.core.chunked_seq_QMARK_(seq__15272_15315__$1)){
var c__7055__auto___15316 = cljs.core.chunk_first(seq__15272_15315__$1);
var G__15317 = cljs.core.chunk_rest(seq__15272_15315__$1);
var G__15318 = c__7055__auto___15316;
var G__15319 = cljs.core.count(c__7055__auto___15316);
var G__15320 = (0);
seq__15272_15305 = G__15317;
chunk__15273_15306 = G__15318;
count__15274_15307 = G__15319;
i__15275_15308 = G__15320;
continue;
} else {
var param_15321 = cljs.core.first(seq__15272_15315__$1);
cljs.compiler.emit(param_15321);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15321,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15322 = cljs.core.next(seq__15272_15315__$1);
var G__15323 = null;
var G__15324 = (0);
var G__15325 = (0);
seq__15272_15305 = G__15322;
chunk__15273_15306 = G__15323;
count__15274_15307 = G__15324;
i__15275_15308 = G__15325;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__15276_15326 = cljs.core.seq(params);
var chunk__15277_15327 = null;
var count__15278_15328 = (0);
var i__15279_15329 = (0);
while(true){
if((i__15279_15329 < count__15278_15328)){
var param_15330 = chunk__15277_15327.cljs$core$IIndexed$_nth$arity$2(null,i__15279_15329);
cljs.compiler.emit(param_15330);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15330,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15331 = seq__15276_15326;
var G__15332 = chunk__15277_15327;
var G__15333 = count__15278_15328;
var G__15334 = (i__15279_15329 + (1));
seq__15276_15326 = G__15331;
chunk__15277_15327 = G__15332;
count__15278_15328 = G__15333;
i__15279_15329 = G__15334;
continue;
} else {
var temp__4657__auto___15335 = cljs.core.seq(seq__15276_15326);
if(temp__4657__auto___15335){
var seq__15276_15336__$1 = temp__4657__auto___15335;
if(cljs.core.chunked_seq_QMARK_(seq__15276_15336__$1)){
var c__7055__auto___15337 = cljs.core.chunk_first(seq__15276_15336__$1);
var G__15338 = cljs.core.chunk_rest(seq__15276_15336__$1);
var G__15339 = c__7055__auto___15337;
var G__15340 = cljs.core.count(c__7055__auto___15337);
var G__15341 = (0);
seq__15276_15326 = G__15338;
chunk__15277_15327 = G__15339;
count__15278_15328 = G__15340;
i__15279_15329 = G__15341;
continue;
} else {
var param_15342 = cljs.core.first(seq__15276_15336__$1);
cljs.compiler.emit(param_15342);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15342,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15343 = cljs.core.next(seq__15276_15336__$1);
var G__15344 = null;
var G__15345 = (0);
var G__15346 = (0);
seq__15276_15326 = G__15343;
chunk__15277_15327 = G__15344;
count__15278_15328 = G__15345;
i__15279_15329 = G__15346;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__15351 = cljs.core.seq(params);
var chunk__15352 = null;
var count__15353 = (0);
var i__15354 = (0);
while(true){
if((i__15354 < count__15353)){
var param = chunk__15352.cljs$core$IIndexed$_nth$arity$2(null,i__15354);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15355 = seq__15351;
var G__15356 = chunk__15352;
var G__15357 = count__15353;
var G__15358 = (i__15354 + (1));
seq__15351 = G__15355;
chunk__15352 = G__15356;
count__15353 = G__15357;
i__15354 = G__15358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15351);
if(temp__4657__auto__){
var seq__15351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15351__$1)){
var c__7055__auto__ = cljs.core.chunk_first(seq__15351__$1);
var G__15359 = cljs.core.chunk_rest(seq__15351__$1);
var G__15360 = c__7055__auto__;
var G__15361 = cljs.core.count(c__7055__auto__);
var G__15362 = (0);
seq__15351 = G__15359;
chunk__15352 = G__15360;
count__15353 = G__15361;
i__15354 = G__15362;
continue;
} else {
var param = cljs.core.first(seq__15351__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15363 = cljs.core.next(seq__15351__$1);
var G__15364 = null;
var G__15365 = (0);
var G__15366 = (0);
seq__15351 = G__15363;
chunk__15352 = G__15364;
count__15353 = G__15365;
i__15354 = G__15366;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15367){
var map__15370 = p__15367;
var map__15370__$1 = ((((!((map__15370 == null)))?((((map__15370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15370):map__15370);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15370__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15372){
var map__15383 = p__15372;
var map__15383__$1 = ((((!((map__15383 == null)))?((((map__15383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15383):map__15383);
var f = map__15383__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15383__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_15393__$1 = (function (){var or__6244__auto__ = name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_15394 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_15393__$1);
var delegate_name_15395 = [cljs.core.str(mname_15394),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_15395," = function ("], 0));

var seq__15385_15396 = cljs.core.seq(params);
var chunk__15386_15397 = null;
var count__15387_15398 = (0);
var i__15388_15399 = (0);
while(true){
if((i__15388_15399 < count__15387_15398)){
var param_15400 = chunk__15386_15397.cljs$core$IIndexed$_nth$arity$2(null,i__15388_15399);
cljs.compiler.emit(param_15400);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15400,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15401 = seq__15385_15396;
var G__15402 = chunk__15386_15397;
var G__15403 = count__15387_15398;
var G__15404 = (i__15388_15399 + (1));
seq__15385_15396 = G__15401;
chunk__15386_15397 = G__15402;
count__15387_15398 = G__15403;
i__15388_15399 = G__15404;
continue;
} else {
var temp__4657__auto___15405 = cljs.core.seq(seq__15385_15396);
if(temp__4657__auto___15405){
var seq__15385_15406__$1 = temp__4657__auto___15405;
if(cljs.core.chunked_seq_QMARK_(seq__15385_15406__$1)){
var c__7055__auto___15407 = cljs.core.chunk_first(seq__15385_15406__$1);
var G__15408 = cljs.core.chunk_rest(seq__15385_15406__$1);
var G__15409 = c__7055__auto___15407;
var G__15410 = cljs.core.count(c__7055__auto___15407);
var G__15411 = (0);
seq__15385_15396 = G__15408;
chunk__15386_15397 = G__15409;
count__15387_15398 = G__15410;
i__15388_15399 = G__15411;
continue;
} else {
var param_15412 = cljs.core.first(seq__15385_15406__$1);
cljs.compiler.emit(param_15412);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15412,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15413 = cljs.core.next(seq__15385_15406__$1);
var G__15414 = null;
var G__15415 = (0);
var G__15416 = (0);
seq__15385_15396 = G__15413;
chunk__15386_15397 = G__15414;
count__15387_15398 = G__15415;
i__15388_15399 = G__15416;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_15394," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_15417 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_15417,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_15395,".call(this,"], 0));

var seq__15389_15418 = cljs.core.seq(params);
var chunk__15390_15419 = null;
var count__15391_15420 = (0);
var i__15392_15421 = (0);
while(true){
if((i__15392_15421 < count__15391_15420)){
var param_15422 = chunk__15390_15419.cljs$core$IIndexed$_nth$arity$2(null,i__15392_15421);
cljs.compiler.emit(param_15422);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15422,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15423 = seq__15389_15418;
var G__15424 = chunk__15390_15419;
var G__15425 = count__15391_15420;
var G__15426 = (i__15392_15421 + (1));
seq__15389_15418 = G__15423;
chunk__15390_15419 = G__15424;
count__15391_15420 = G__15425;
i__15392_15421 = G__15426;
continue;
} else {
var temp__4657__auto___15427 = cljs.core.seq(seq__15389_15418);
if(temp__4657__auto___15427){
var seq__15389_15428__$1 = temp__4657__auto___15427;
if(cljs.core.chunked_seq_QMARK_(seq__15389_15428__$1)){
var c__7055__auto___15429 = cljs.core.chunk_first(seq__15389_15428__$1);
var G__15430 = cljs.core.chunk_rest(seq__15389_15428__$1);
var G__15431 = c__7055__auto___15429;
var G__15432 = cljs.core.count(c__7055__auto___15429);
var G__15433 = (0);
seq__15389_15418 = G__15430;
chunk__15390_15419 = G__15431;
count__15391_15420 = G__15432;
i__15392_15421 = G__15433;
continue;
} else {
var param_15434 = cljs.core.first(seq__15389_15428__$1);
cljs.compiler.emit(param_15434);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_15434,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__15435 = cljs.core.next(seq__15389_15428__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__15389_15418 = G__15435;
chunk__15390_15419 = G__15436;
count__15391_15420 = G__15437;
i__15392_15421 = G__15438;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15394,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15394,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_15393__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15394,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15395,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_15394,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__15442){
var map__15443 = p__15442;
var map__15443__$1 = ((((!((map__15443 == null)))?((((map__15443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15443):map__15443);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15439_SHARP_){
var and__6232__auto__ = p1__15439_SHARP_;
if(cljs.core.truth_(and__6232__auto__)){
var G__15445 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__15439_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15445) : cljs.core.deref.call(null,G__15445));
} else {
return and__6232__auto__;
}
});})(map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_15479__$1 = (function (){var or__6244__auto__ = name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_15480 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_15479__$1);
var maxparams_15481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_15482 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_15479__$1,mname_15480,maxparams_15481,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_15480),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15479__$1,mname_15480,maxparams_15481,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_15483 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_15479__$1,mname_15480,maxparams_15481,mmap_15482,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15440_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__15440_SHARP_)));
});})(name_15479__$1,mname_15480,maxparams_15481,mmap_15482,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_15482));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_15480," = null;"], 0));

var seq__15446_15484 = cljs.core.seq(ms_15483);
var chunk__15447_15485 = null;
var count__15448_15486 = (0);
var i__15449_15487 = (0);
while(true){
if((i__15449_15487 < count__15448_15486)){
var vec__15450_15488 = chunk__15447_15485.cljs$core$IIndexed$_nth$arity$2(null,i__15449_15487);
var n_15489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450_15488,(0),null);
var meth_15490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450_15488,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_15489," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15490))){
cljs.compiler.emit_variadic_fn_method(meth_15490);
} else {
cljs.compiler.emit_fn_method(meth_15490);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__15491 = seq__15446_15484;
var G__15492 = chunk__15447_15485;
var G__15493 = count__15448_15486;
var G__15494 = (i__15449_15487 + (1));
seq__15446_15484 = G__15491;
chunk__15447_15485 = G__15492;
count__15448_15486 = G__15493;
i__15449_15487 = G__15494;
continue;
} else {
var temp__4657__auto___15495 = cljs.core.seq(seq__15446_15484);
if(temp__4657__auto___15495){
var seq__15446_15496__$1 = temp__4657__auto___15495;
if(cljs.core.chunked_seq_QMARK_(seq__15446_15496__$1)){
var c__7055__auto___15497 = cljs.core.chunk_first(seq__15446_15496__$1);
var G__15498 = cljs.core.chunk_rest(seq__15446_15496__$1);
var G__15499 = c__7055__auto___15497;
var G__15500 = cljs.core.count(c__7055__auto___15497);
var G__15501 = (0);
seq__15446_15484 = G__15498;
chunk__15447_15485 = G__15499;
count__15448_15486 = G__15500;
i__15449_15487 = G__15501;
continue;
} else {
var vec__15453_15502 = cljs.core.first(seq__15446_15496__$1);
var n_15503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453_15502,(0),null);
var meth_15504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453_15502,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_15503," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15504))){
cljs.compiler.emit_variadic_fn_method(meth_15504);
} else {
cljs.compiler.emit_fn_method(meth_15504);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__15505 = cljs.core.next(seq__15446_15496__$1);
var G__15506 = null;
var G__15507 = (0);
var G__15508 = (0);
seq__15446_15484 = G__15505;
chunk__15447_15485 = G__15506;
count__15448_15486 = G__15507;
i__15449_15487 = G__15508;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_15481),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_15481)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_15481));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__15456_15509 = cljs.core.seq(ms_15483);
var chunk__15457_15510 = null;
var count__15458_15511 = (0);
var i__15459_15512 = (0);
while(true){
if((i__15459_15512 < count__15458_15511)){
var vec__15460_15513 = chunk__15457_15510.cljs$core$IIndexed$_nth$arity$2(null,i__15459_15512);
var n_15514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460_15513,(0),null);
var meth_15515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15460_15513,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15515))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_15516 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_15516," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_15517 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_15516," = new cljs.core.IndexedSeq(",a_15517,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15514,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_15481)),(((cljs.core.count(maxparams_15481) > (1)))?", ":null),restarg_15516,");"], 0));
} else {
var pcnt_15518 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_15515));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_15518,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15514,".call(this",(((pcnt_15518 === (0)))?null:cljs.core._conj((function (){var x__7078__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_15518,maxparams_15481));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),",")),");"], 0));
}

var G__15519 = seq__15456_15509;
var G__15520 = chunk__15457_15510;
var G__15521 = count__15458_15511;
var G__15522 = (i__15459_15512 + (1));
seq__15456_15509 = G__15519;
chunk__15457_15510 = G__15520;
count__15458_15511 = G__15521;
i__15459_15512 = G__15522;
continue;
} else {
var temp__4657__auto___15523 = cljs.core.seq(seq__15456_15509);
if(temp__4657__auto___15523){
var seq__15456_15524__$1 = temp__4657__auto___15523;
if(cljs.core.chunked_seq_QMARK_(seq__15456_15524__$1)){
var c__7055__auto___15525 = cljs.core.chunk_first(seq__15456_15524__$1);
var G__15526 = cljs.core.chunk_rest(seq__15456_15524__$1);
var G__15527 = c__7055__auto___15525;
var G__15528 = cljs.core.count(c__7055__auto___15525);
var G__15529 = (0);
seq__15456_15509 = G__15526;
chunk__15457_15510 = G__15527;
count__15458_15511 = G__15528;
i__15459_15512 = G__15529;
continue;
} else {
var vec__15463_15530 = cljs.core.first(seq__15456_15524__$1);
var n_15531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15463_15530,(0),null);
var meth_15532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15463_15530,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15532))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_15533 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_15533," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_15534 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_15533," = new cljs.core.IndexedSeq(",a_15534,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15531,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_15481)),(((cljs.core.count(maxparams_15481) > (1)))?", ":null),restarg_15533,");"], 0));
} else {
var pcnt_15535 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_15532));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_15535,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15531,".call(this",(((pcnt_15535 === (0)))?null:cljs.core._conj((function (){var x__7078__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_15535,maxparams_15481));
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto__);
})(),",")),");"], 0));
}

var G__15536 = cljs.core.next(seq__15456_15524__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__15456_15509 = G__15536;
chunk__15457_15510 = G__15537;
count__15458_15511 = G__15538;
i__15459_15512 = G__15539;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$lang$applyTo = ",cljs.core.some(((function (name_15479__$1,mname_15480,maxparams_15481,mmap_15482,ms_15483,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15441_SHARP_){
var vec__15466 = p1__15441_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15479__$1,mname_15480,maxparams_15481,mmap_15482,ms_15483,loop_locals,map__15443,map__15443__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_15483),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__15469_15540 = cljs.core.seq(ms_15483);
var chunk__15470_15541 = null;
var count__15471_15542 = (0);
var i__15472_15543 = (0);
while(true){
if((i__15472_15543 < count__15471_15542)){
var vec__15473_15544 = chunk__15470_15541.cljs$core$IIndexed$_nth$arity$2(null,i__15472_15543);
var n_15545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473_15544,(0),null);
var meth_15546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15473_15544,(1),null);
var c_15547 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_15546));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15546))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$core$IFn$_invoke$arity$variadic = ",n_15545,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$core$IFn$_invoke$arity$",c_15547," = ",n_15545,";"], 0));
}

var G__15548 = seq__15469_15540;
var G__15549 = chunk__15470_15541;
var G__15550 = count__15471_15542;
var G__15551 = (i__15472_15543 + (1));
seq__15469_15540 = G__15548;
chunk__15470_15541 = G__15549;
count__15471_15542 = G__15550;
i__15472_15543 = G__15551;
continue;
} else {
var temp__4657__auto___15552 = cljs.core.seq(seq__15469_15540);
if(temp__4657__auto___15552){
var seq__15469_15553__$1 = temp__4657__auto___15552;
if(cljs.core.chunked_seq_QMARK_(seq__15469_15553__$1)){
var c__7055__auto___15554 = cljs.core.chunk_first(seq__15469_15553__$1);
var G__15555 = cljs.core.chunk_rest(seq__15469_15553__$1);
var G__15556 = c__7055__auto___15554;
var G__15557 = cljs.core.count(c__7055__auto___15554);
var G__15558 = (0);
seq__15469_15540 = G__15555;
chunk__15470_15541 = G__15556;
count__15471_15542 = G__15557;
i__15472_15543 = G__15558;
continue;
} else {
var vec__15476_15559 = cljs.core.first(seq__15469_15553__$1);
var n_15560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15559,(0),null);
var meth_15561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15476_15559,(1),null);
var c_15562 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_15561));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_15561))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$core$IFn$_invoke$arity$variadic = ",n_15560,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_15480,".cljs$core$IFn$_invoke$arity$",c_15562," = ",n_15560,";"], 0));
}

var G__15563 = cljs.core.next(seq__15469_15553__$1);
var G__15564 = null;
var G__15565 = (0);
var G__15566 = (0);
seq__15469_15540 = G__15563;
chunk__15470_15541 = G__15564;
count__15471_15542 = G__15565;
i__15472_15543 = G__15566;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_15480,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__15567){
var map__15568 = p__15567;
var map__15568__$1 = ((((!((map__15568 == null)))?((((map__15568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15568):map__15568);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6232__auto__ = statements;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6232__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__15570_15574 = cljs.core.seq(statements);
var chunk__15571_15575 = null;
var count__15572_15576 = (0);
var i__15573_15577 = (0);
while(true){
if((i__15573_15577 < count__15572_15576)){
var s_15578 = chunk__15571_15575.cljs$core$IIndexed$_nth$arity$2(null,i__15573_15577);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_15578], 0));

var G__15579 = seq__15570_15574;
var G__15580 = chunk__15571_15575;
var G__15581 = count__15572_15576;
var G__15582 = (i__15573_15577 + (1));
seq__15570_15574 = G__15579;
chunk__15571_15575 = G__15580;
count__15572_15576 = G__15581;
i__15573_15577 = G__15582;
continue;
} else {
var temp__4657__auto___15583 = cljs.core.seq(seq__15570_15574);
if(temp__4657__auto___15583){
var seq__15570_15584__$1 = temp__4657__auto___15583;
if(cljs.core.chunked_seq_QMARK_(seq__15570_15584__$1)){
var c__7055__auto___15585 = cljs.core.chunk_first(seq__15570_15584__$1);
var G__15586 = cljs.core.chunk_rest(seq__15570_15584__$1);
var G__15587 = c__7055__auto___15585;
var G__15588 = cljs.core.count(c__7055__auto___15585);
var G__15589 = (0);
seq__15570_15574 = G__15586;
chunk__15571_15575 = G__15587;
count__15572_15576 = G__15588;
i__15573_15577 = G__15589;
continue;
} else {
var s_15590 = cljs.core.first(seq__15570_15584__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_15590], 0));

var G__15591 = cljs.core.next(seq__15570_15584__$1);
var G__15592 = null;
var G__15593 = (0);
var G__15594 = (0);
seq__15570_15574 = G__15591;
chunk__15571_15575 = G__15592;
count__15572_15576 = G__15593;
i__15573_15577 = G__15594;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__6232__auto__ = statements;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6232__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__15595){
var map__15596 = p__15595;
var map__15596__$1 = ((((!((map__15596 == null)))?((((map__15596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15596):map__15596);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6244__auto__ = name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15598,is_loop){
var map__15610 = p__15598;
var map__15610__$1 = ((((!((map__15610 == null)))?((((map__15610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15610):map__15610);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15610__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15610__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15610__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_15612_15621 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_15612_15621,context,map__15610,map__15610__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_15612_15621,context,map__15610,map__15610__$1,bindings,expr,env))
,bindings):null));

try{var seq__15613_15622 = cljs.core.seq(bindings);
var chunk__15614_15623 = null;
var count__15615_15624 = (0);
var i__15616_15625 = (0);
while(true){
if((i__15616_15625 < count__15615_15624)){
var map__15617_15626 = chunk__15614_15623.cljs$core$IIndexed$_nth$arity$2(null,i__15616_15625);
var map__15617_15627__$1 = ((((!((map__15617_15626 == null)))?((((map__15617_15626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15617_15626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15617_15626):map__15617_15626);
var binding_15628 = map__15617_15627__$1;
var init_15629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15617_15627__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_15628);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_15629,";"], 0));

var G__15630 = seq__15613_15622;
var G__15631 = chunk__15614_15623;
var G__15632 = count__15615_15624;
var G__15633 = (i__15616_15625 + (1));
seq__15613_15622 = G__15630;
chunk__15614_15623 = G__15631;
count__15615_15624 = G__15632;
i__15616_15625 = G__15633;
continue;
} else {
var temp__4657__auto___15634 = cljs.core.seq(seq__15613_15622);
if(temp__4657__auto___15634){
var seq__15613_15635__$1 = temp__4657__auto___15634;
if(cljs.core.chunked_seq_QMARK_(seq__15613_15635__$1)){
var c__7055__auto___15636 = cljs.core.chunk_first(seq__15613_15635__$1);
var G__15637 = cljs.core.chunk_rest(seq__15613_15635__$1);
var G__15638 = c__7055__auto___15636;
var G__15639 = cljs.core.count(c__7055__auto___15636);
var G__15640 = (0);
seq__15613_15622 = G__15637;
chunk__15614_15623 = G__15638;
count__15615_15624 = G__15639;
i__15616_15625 = G__15640;
continue;
} else {
var map__15619_15641 = cljs.core.first(seq__15613_15635__$1);
var map__15619_15642__$1 = ((((!((map__15619_15641 == null)))?((((map__15619_15641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15619_15641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15619_15641):map__15619_15641);
var binding_15643 = map__15619_15642__$1;
var init_15644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15619_15642__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_15643);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_15644,";"], 0));

var G__15645 = cljs.core.next(seq__15613_15635__$1);
var G__15646 = null;
var G__15647 = (0);
var G__15648 = (0);
seq__15613_15622 = G__15645;
chunk__15614_15623 = G__15646;
count__15615_15624 = G__15647;
i__15616_15625 = G__15648;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_15612_15621;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__15649){
var map__15650 = p__15649;
var map__15650__$1 = ((((!((map__15650 == null)))?((((map__15650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15650):map__15650);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15650__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15650__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15650__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7159__auto___15652 = cljs.core.count(exprs);
var i_15653 = (0);
while(true){
if((i_15653 < n__7159__auto___15652)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_15653) : temps.call(null,i_15653))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_15653) : exprs.call(null,i_15653)),";"], 0));

var G__15654 = (i_15653 + (1));
i_15653 = G__15654;
continue;
} else {
}
break;
}

var n__7159__auto___15655 = cljs.core.count(exprs);
var i_15656 = (0);
while(true){
if((i_15656 < n__7159__auto___15655)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_15656) : params.call(null,i_15656)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_15656) : temps.call(null,i_15656)),";"], 0));

var G__15657 = (i_15656 + (1));
i_15656 = G__15657;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__15658){
var map__15659 = p__15658;
var map__15659__$1 = ((((!((map__15659 == null)))?((((map__15659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15659):map__15659);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15659__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15659__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15659__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__15661_15669 = cljs.core.seq(bindings);
var chunk__15662_15670 = null;
var count__15663_15671 = (0);
var i__15664_15672 = (0);
while(true){
if((i__15664_15672 < count__15663_15671)){
var map__15665_15673 = chunk__15662_15670.cljs$core$IIndexed$_nth$arity$2(null,i__15664_15672);
var map__15665_15674__$1 = ((((!((map__15665_15673 == null)))?((((map__15665_15673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15665_15673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15665_15673):map__15665_15673);
var binding_15675 = map__15665_15674__$1;
var init_15676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15665_15674__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_15675)," = ",init_15676,";"], 0));

var G__15677 = seq__15661_15669;
var G__15678 = chunk__15662_15670;
var G__15679 = count__15663_15671;
var G__15680 = (i__15664_15672 + (1));
seq__15661_15669 = G__15677;
chunk__15662_15670 = G__15678;
count__15663_15671 = G__15679;
i__15664_15672 = G__15680;
continue;
} else {
var temp__4657__auto___15681 = cljs.core.seq(seq__15661_15669);
if(temp__4657__auto___15681){
var seq__15661_15682__$1 = temp__4657__auto___15681;
if(cljs.core.chunked_seq_QMARK_(seq__15661_15682__$1)){
var c__7055__auto___15683 = cljs.core.chunk_first(seq__15661_15682__$1);
var G__15684 = cljs.core.chunk_rest(seq__15661_15682__$1);
var G__15685 = c__7055__auto___15683;
var G__15686 = cljs.core.count(c__7055__auto___15683);
var G__15687 = (0);
seq__15661_15669 = G__15684;
chunk__15662_15670 = G__15685;
count__15663_15671 = G__15686;
i__15664_15672 = G__15687;
continue;
} else {
var map__15667_15688 = cljs.core.first(seq__15661_15682__$1);
var map__15667_15689__$1 = ((((!((map__15667_15688 == null)))?((((map__15667_15688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15667_15688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15667_15688):map__15667_15688);
var binding_15690 = map__15667_15689__$1;
var init_15691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15667_15689__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_15690)," = ",init_15691,";"], 0));

var G__15692 = cljs.core.next(seq__15661_15682__$1);
var G__15693 = null;
var G__15694 = (0);
var G__15695 = (0);
seq__15661_15669 = G__15692;
chunk__15662_15670 = G__15693;
count__15663_15671 = G__15694;
i__15664_15672 = G__15695;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__15698){
var map__15699 = p__15698;
var map__15699__$1 = ((((!((map__15699 == null)))?((((map__15699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15699):map__15699);
var expr = map__15699__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15699__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15699__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15699__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6232__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6232__auto__)){
var and__6232__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__6232__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6232__auto__ = protocol;
if(cljs.core.truth_(and__6232__auto__)){
var and__6232__auto____$1 = tag;
if(cljs.core.truth_(and__6232__auto____$1)){
var or__6244__auto__ = (function (){var and__6232__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6232__auto____$2)){
var and__6232__auto____$3 = protocol;
if(cljs.core.truth_(and__6232__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__6232__auto____$3;
}
} else {
return and__6232__auto____$2;
}
})();
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var and__6232__auto____$2 = (function (){var or__6244__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6232__auto____$2)){
var or__6244__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__6244__auto____$1){
return or__6244__auto____$1;
} else {
var and__6232__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__6232__auto____$3){
var and__6232__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null).call(null,tag));
if(and__6232__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__6232__auto____$4;
}
} else {
return and__6232__auto____$3;
}
}
} else {
return and__6232__auto____$2;
}
}
} else {
return and__6232__auto____$1;
}
} else {
return and__6232__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6244__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__6244__auto__){
return or__6244__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__15701 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6232__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6232__auto__)){
return (arity > mfa);
} else {
return and__6232__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env){
return (function (p1__15696_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15696_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env){
return (function (p1__15697_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15697_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15699,map__15699__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701,(1),null);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15704 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_15704,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15705 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_15705,args)),(((mfa_15705 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_15705,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__6244__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = js_QMARK_;
if(or__6244__auto____$1){
return or__6244__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__6232__auto__;
}
})())){
var fprop_15706 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_15706," ? ",f__$1,fprop_15706,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__15707){
var map__15708 = p__15707;
var map__15708__$1 = ((((!((map__15708 == null)))?((((map__15708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15708):map__15708);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15708__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15708__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15708__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__15710){
var map__15711 = p__15710;
var map__15711__$1 = ((((!((map__15711 == null)))?((((map__15711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15711):map__15711);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15711__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15711__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15711__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__15717_15721 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__15718_15722 = null;
var count__15719_15723 = (0);
var i__15720_15724 = (0);
while(true){
if((i__15720_15724 < count__15719_15723)){
var lib_15725 = chunk__15718_15722.cljs$core$IIndexed$_nth$arity$2(null,i__15720_15724);
if(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15725),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15725),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15725),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15725),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15725),"');"], 0));

}
}

var G__15726 = seq__15717_15721;
var G__15727 = chunk__15718_15722;
var G__15728 = count__15719_15723;
var G__15729 = (i__15720_15724 + (1));
seq__15717_15721 = G__15726;
chunk__15718_15722 = G__15727;
count__15719_15723 = G__15728;
i__15720_15724 = G__15729;
continue;
} else {
var temp__4657__auto___15730 = cljs.core.seq(seq__15717_15721);
if(temp__4657__auto___15730){
var seq__15717_15731__$1 = temp__4657__auto___15730;
if(cljs.core.chunked_seq_QMARK_(seq__15717_15731__$1)){
var c__7055__auto___15732 = cljs.core.chunk_first(seq__15717_15731__$1);
var G__15733 = cljs.core.chunk_rest(seq__15717_15731__$1);
var G__15734 = c__7055__auto___15732;
var G__15735 = cljs.core.count(c__7055__auto___15732);
var G__15736 = (0);
seq__15717_15721 = G__15733;
chunk__15718_15722 = G__15734;
count__15719_15723 = G__15735;
i__15720_15724 = G__15736;
continue;
} else {
var lib_15737 = cljs.core.first(seq__15717_15731__$1);
if(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15737),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15737),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6244__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15737),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15737),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15737),"');"], 0));

}
}

var G__15738 = cljs.core.next(seq__15717_15731__$1);
var G__15739 = null;
var G__15740 = (0);
var G__15741 = (0);
seq__15717_15721 = G__15738;
chunk__15718_15722 = G__15739;
count__15719_15723 = G__15740;
i__15720_15724 = G__15741;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__15742){
var map__15743 = p__15742;
var map__15743__$1 = ((((!((map__15743 == null)))?((((map__15743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15743):map__15743);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15743__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__15745){
var map__15746 = p__15745;
var map__15746__$1 = ((((!((map__15746 == null)))?((((map__15746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15746):map__15746);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15746__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15746__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15746__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15746__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15746__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__15748_15766 = cljs.core.seq(protocols);
var chunk__15749_15767 = null;
var count__15750_15768 = (0);
var i__15751_15769 = (0);
while(true){
if((i__15751_15769 < count__15750_15768)){
var protocol_15770 = chunk__15749_15767.cljs$core$IIndexed$_nth$arity$2(null,i__15751_15769);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15770)].join('')),"}"], 0));

var G__15771 = seq__15748_15766;
var G__15772 = chunk__15749_15767;
var G__15773 = count__15750_15768;
var G__15774 = (i__15751_15769 + (1));
seq__15748_15766 = G__15771;
chunk__15749_15767 = G__15772;
count__15750_15768 = G__15773;
i__15751_15769 = G__15774;
continue;
} else {
var temp__4657__auto___15775 = cljs.core.seq(seq__15748_15766);
if(temp__4657__auto___15775){
var seq__15748_15776__$1 = temp__4657__auto___15775;
if(cljs.core.chunked_seq_QMARK_(seq__15748_15776__$1)){
var c__7055__auto___15777 = cljs.core.chunk_first(seq__15748_15776__$1);
var G__15778 = cljs.core.chunk_rest(seq__15748_15776__$1);
var G__15779 = c__7055__auto___15777;
var G__15780 = cljs.core.count(c__7055__auto___15777);
var G__15781 = (0);
seq__15748_15766 = G__15778;
chunk__15749_15767 = G__15779;
count__15750_15768 = G__15780;
i__15751_15769 = G__15781;
continue;
} else {
var protocol_15782 = cljs.core.first(seq__15748_15776__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15782)].join('')),"}"], 0));

var G__15783 = cljs.core.next(seq__15748_15776__$1);
var G__15784 = null;
var G__15785 = (0);
var G__15786 = (0);
seq__15748_15766 = G__15783;
chunk__15749_15767 = G__15784;
count__15750_15768 = G__15785;
i__15751_15769 = G__15786;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__15752_15787 = cljs.core.seq(fields__$1);
var chunk__15753_15788 = null;
var count__15754_15789 = (0);
var i__15755_15790 = (0);
while(true){
if((i__15755_15790 < count__15754_15789)){
var fld_15791 = chunk__15753_15788.cljs$core$IIndexed$_nth$arity$2(null,i__15755_15790);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15791," = ",fld_15791,";"], 0));

var G__15792 = seq__15752_15787;
var G__15793 = chunk__15753_15788;
var G__15794 = count__15754_15789;
var G__15795 = (i__15755_15790 + (1));
seq__15752_15787 = G__15792;
chunk__15753_15788 = G__15793;
count__15754_15789 = G__15794;
i__15755_15790 = G__15795;
continue;
} else {
var temp__4657__auto___15796 = cljs.core.seq(seq__15752_15787);
if(temp__4657__auto___15796){
var seq__15752_15797__$1 = temp__4657__auto___15796;
if(cljs.core.chunked_seq_QMARK_(seq__15752_15797__$1)){
var c__7055__auto___15798 = cljs.core.chunk_first(seq__15752_15797__$1);
var G__15799 = cljs.core.chunk_rest(seq__15752_15797__$1);
var G__15800 = c__7055__auto___15798;
var G__15801 = cljs.core.count(c__7055__auto___15798);
var G__15802 = (0);
seq__15752_15787 = G__15799;
chunk__15753_15788 = G__15800;
count__15754_15789 = G__15801;
i__15755_15790 = G__15802;
continue;
} else {
var fld_15803 = cljs.core.first(seq__15752_15797__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15803," = ",fld_15803,";"], 0));

var G__15804 = cljs.core.next(seq__15752_15797__$1);
var G__15805 = null;
var G__15806 = (0);
var G__15807 = (0);
seq__15752_15787 = G__15804;
chunk__15753_15788 = G__15805;
count__15754_15789 = G__15806;
i__15755_15790 = G__15807;
continue;
}
} else {
}
}
break;
}

var seq__15756_15808 = cljs.core.seq(pmasks);
var chunk__15757_15809 = null;
var count__15758_15810 = (0);
var i__15759_15811 = (0);
while(true){
if((i__15759_15811 < count__15758_15810)){
var vec__15760_15812 = chunk__15757_15809.cljs$core$IIndexed$_nth$arity$2(null,i__15759_15811);
var pno_15813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760_15812,(0),null);
var pmask_15814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760_15812,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15813,"$ = ",pmask_15814,";"], 0));

var G__15815 = seq__15756_15808;
var G__15816 = chunk__15757_15809;
var G__15817 = count__15758_15810;
var G__15818 = (i__15759_15811 + (1));
seq__15756_15808 = G__15815;
chunk__15757_15809 = G__15816;
count__15758_15810 = G__15817;
i__15759_15811 = G__15818;
continue;
} else {
var temp__4657__auto___15819 = cljs.core.seq(seq__15756_15808);
if(temp__4657__auto___15819){
var seq__15756_15820__$1 = temp__4657__auto___15819;
if(cljs.core.chunked_seq_QMARK_(seq__15756_15820__$1)){
var c__7055__auto___15821 = cljs.core.chunk_first(seq__15756_15820__$1);
var G__15822 = cljs.core.chunk_rest(seq__15756_15820__$1);
var G__15823 = c__7055__auto___15821;
var G__15824 = cljs.core.count(c__7055__auto___15821);
var G__15825 = (0);
seq__15756_15808 = G__15822;
chunk__15757_15809 = G__15823;
count__15758_15810 = G__15824;
i__15759_15811 = G__15825;
continue;
} else {
var vec__15763_15826 = cljs.core.first(seq__15756_15820__$1);
var pno_15827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15763_15826,(0),null);
var pmask_15828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15763_15826,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15827,"$ = ",pmask_15828,";"], 0));

var G__15829 = cljs.core.next(seq__15756_15820__$1);
var G__15830 = null;
var G__15831 = (0);
var G__15832 = (0);
seq__15756_15808 = G__15829;
chunk__15757_15809 = G__15830;
count__15758_15810 = G__15831;
i__15759_15811 = G__15832;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__15833){
var map__15834 = p__15833;
var map__15834__$1 = ((((!((map__15834 == null)))?((((map__15834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15834):map__15834);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__15836_15854 = cljs.core.seq(protocols);
var chunk__15837_15855 = null;
var count__15838_15856 = (0);
var i__15839_15857 = (0);
while(true){
if((i__15839_15857 < count__15838_15856)){
var protocol_15858 = chunk__15837_15855.cljs$core$IIndexed$_nth$arity$2(null,i__15839_15857);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15858)].join('')),"}"], 0));

var G__15859 = seq__15836_15854;
var G__15860 = chunk__15837_15855;
var G__15861 = count__15838_15856;
var G__15862 = (i__15839_15857 + (1));
seq__15836_15854 = G__15859;
chunk__15837_15855 = G__15860;
count__15838_15856 = G__15861;
i__15839_15857 = G__15862;
continue;
} else {
var temp__4657__auto___15863 = cljs.core.seq(seq__15836_15854);
if(temp__4657__auto___15863){
var seq__15836_15864__$1 = temp__4657__auto___15863;
if(cljs.core.chunked_seq_QMARK_(seq__15836_15864__$1)){
var c__7055__auto___15865 = cljs.core.chunk_first(seq__15836_15864__$1);
var G__15866 = cljs.core.chunk_rest(seq__15836_15864__$1);
var G__15867 = c__7055__auto___15865;
var G__15868 = cljs.core.count(c__7055__auto___15865);
var G__15869 = (0);
seq__15836_15854 = G__15866;
chunk__15837_15855 = G__15867;
count__15838_15856 = G__15868;
i__15839_15857 = G__15869;
continue;
} else {
var protocol_15870 = cljs.core.first(seq__15836_15864__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15870)].join('')),"}"], 0));

var G__15871 = cljs.core.next(seq__15836_15864__$1);
var G__15872 = null;
var G__15873 = (0);
var G__15874 = (0);
seq__15836_15854 = G__15871;
chunk__15837_15855 = G__15872;
count__15838_15856 = G__15873;
i__15839_15857 = G__15874;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__15840_15875 = cljs.core.seq(fields__$1);
var chunk__15841_15876 = null;
var count__15842_15877 = (0);
var i__15843_15878 = (0);
while(true){
if((i__15843_15878 < count__15842_15877)){
var fld_15879 = chunk__15841_15876.cljs$core$IIndexed$_nth$arity$2(null,i__15843_15878);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15879," = ",fld_15879,";"], 0));

var G__15880 = seq__15840_15875;
var G__15881 = chunk__15841_15876;
var G__15882 = count__15842_15877;
var G__15883 = (i__15843_15878 + (1));
seq__15840_15875 = G__15880;
chunk__15841_15876 = G__15881;
count__15842_15877 = G__15882;
i__15843_15878 = G__15883;
continue;
} else {
var temp__4657__auto___15884 = cljs.core.seq(seq__15840_15875);
if(temp__4657__auto___15884){
var seq__15840_15885__$1 = temp__4657__auto___15884;
if(cljs.core.chunked_seq_QMARK_(seq__15840_15885__$1)){
var c__7055__auto___15886 = cljs.core.chunk_first(seq__15840_15885__$1);
var G__15887 = cljs.core.chunk_rest(seq__15840_15885__$1);
var G__15888 = c__7055__auto___15886;
var G__15889 = cljs.core.count(c__7055__auto___15886);
var G__15890 = (0);
seq__15840_15875 = G__15887;
chunk__15841_15876 = G__15888;
count__15842_15877 = G__15889;
i__15843_15878 = G__15890;
continue;
} else {
var fld_15891 = cljs.core.first(seq__15840_15885__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15891," = ",fld_15891,";"], 0));

var G__15892 = cljs.core.next(seq__15840_15885__$1);
var G__15893 = null;
var G__15894 = (0);
var G__15895 = (0);
seq__15840_15875 = G__15892;
chunk__15841_15876 = G__15893;
count__15842_15877 = G__15894;
i__15843_15878 = G__15895;
continue;
}
} else {
}
}
break;
}

var seq__15844_15896 = cljs.core.seq(pmasks);
var chunk__15845_15897 = null;
var count__15846_15898 = (0);
var i__15847_15899 = (0);
while(true){
if((i__15847_15899 < count__15846_15898)){
var vec__15848_15900 = chunk__15845_15897.cljs$core$IIndexed$_nth$arity$2(null,i__15847_15899);
var pno_15901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848_15900,(0),null);
var pmask_15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848_15900,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15901,"$ = ",pmask_15902,";"], 0));

var G__15903 = seq__15844_15896;
var G__15904 = chunk__15845_15897;
var G__15905 = count__15846_15898;
var G__15906 = (i__15847_15899 + (1));
seq__15844_15896 = G__15903;
chunk__15845_15897 = G__15904;
count__15846_15898 = G__15905;
i__15847_15899 = G__15906;
continue;
} else {
var temp__4657__auto___15907 = cljs.core.seq(seq__15844_15896);
if(temp__4657__auto___15907){
var seq__15844_15908__$1 = temp__4657__auto___15907;
if(cljs.core.chunked_seq_QMARK_(seq__15844_15908__$1)){
var c__7055__auto___15909 = cljs.core.chunk_first(seq__15844_15908__$1);
var G__15910 = cljs.core.chunk_rest(seq__15844_15908__$1);
var G__15911 = c__7055__auto___15909;
var G__15912 = cljs.core.count(c__7055__auto___15909);
var G__15913 = (0);
seq__15844_15896 = G__15910;
chunk__15845_15897 = G__15911;
count__15846_15898 = G__15912;
i__15847_15899 = G__15913;
continue;
} else {
var vec__15851_15914 = cljs.core.first(seq__15844_15908__$1);
var pno_15915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851_15914,(0),null);
var pmask_15916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851_15914,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15915,"$ = ",pmask_15916,";"], 0));

var G__15917 = cljs.core.next(seq__15844_15908__$1);
var G__15918 = null;
var G__15919 = (0);
var G__15920 = (0);
seq__15844_15896 = G__15917;
chunk__15845_15897 = G__15918;
count__15846_15898 = G__15919;
i__15847_15899 = G__15920;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__15921){
var map__15922 = p__15921;
var map__15922__$1 = ((((!((map__15922 == null)))?((((map__15922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15922):map__15922);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,cljs.core.cst$kw$env);
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__15924){
var map__15925 = p__15924;
var map__15925__$1 = ((((!((map__15925 == null)))?((((map__15925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15925):map__15925);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15925__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15925__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15925__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15925__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15925__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6232__auto__ = code;
if(cljs.core.truth_(and__6232__auto__)){
var G__15927 = clojure.string.trim(code);
var G__15928 = "/*";
return goog.string.startsWith(G__15927,G__15928);
} else {
return and__6232__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__14786__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__14786__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__15941 = cljs.core.seq(table);
var chunk__15942 = null;
var count__15943 = (0);
var i__15944 = (0);
while(true){
if((i__15944 < count__15943)){
var vec__15945 = chunk__15942.cljs$core$IIndexed$_nth$arity$2(null,i__15944);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15945,(1),null);
var ns_15951 = cljs.core.namespace(sym);
var name_15952 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__15953 = seq__15941;
var G__15954 = chunk__15942;
var G__15955 = count__15943;
var G__15956 = (i__15944 + (1));
seq__15941 = G__15953;
chunk__15942 = G__15954;
count__15943 = G__15955;
i__15944 = G__15956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15941);
if(temp__4657__auto__){
var seq__15941__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15941__$1)){
var c__7055__auto__ = cljs.core.chunk_first(seq__15941__$1);
var G__15957 = cljs.core.chunk_rest(seq__15941__$1);
var G__15958 = c__7055__auto__;
var G__15959 = cljs.core.count(c__7055__auto__);
var G__15960 = (0);
seq__15941 = G__15957;
chunk__15942 = G__15958;
count__15943 = G__15959;
i__15944 = G__15960;
continue;
} else {
var vec__15948 = cljs.core.first(seq__15941__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(1),null);
var ns_15961 = cljs.core.namespace(sym);
var name_15962 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__15963 = cljs.core.next(seq__15941__$1);
var G__15964 = null;
var G__15965 = (0);
var G__15966 = (0);
seq__15941 = G__15963;
chunk__15942 = G__15964;
count__15943 = G__15965;
i__15944 = G__15966;
continue;
}
} else {
return null;
}
}
break;
}
});
