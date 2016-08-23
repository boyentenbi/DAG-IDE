// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13969){
var vec__13970 = p__13969;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13970,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__13976 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__13985 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13985,(4),null);
var vec__13988 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13988,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6244__auto__ = source;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6244__auto__ = line;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6244__auto__ = col;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6244__auto__ = name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__13993 = segmap;
var map__13993__$1 = ((((!((map__13993 == null)))?((((map__13993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13993):map__13993);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13993__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__13993,map__13993__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args13995 = [];
var len__7319__auto___14001 = arguments.length;
var i__7320__auto___14002 = (0);
while(true){
if((i__7320__auto___14002 < len__7319__auto___14001)){
args13995.push((arguments[i__7320__auto___14002]));

var G__14003 = (i__7320__auto___14002 + (1));
i__7320__auto___14002 = G__14003;
continue;
} else {
}
break;
}

var G__13997 = args13995.length;
switch (G__13997) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13995.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__13998 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__14005 = cljs.core.next(segs__$1);
var G__14006 = nrelseg;
var G__14007 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__14005;
relseg__$1 = G__14006;
result__$1 = G__14007;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13998,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13998,(1),null);
var G__14008 = (gline + (1));
var G__14009 = cljs.core.next(lines__$1);
var G__14010 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__14011 = result__$1;
gline = G__14008;
lines__$1 = G__14009;
relseg = G__14010;
result = G__14011;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__14015 = segmap;
var map__14015__$1 = ((((!((map__14015 == null)))?((((map__14015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14015):map__14015);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__14015,map__14015__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__14015,map__14015__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__14012_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14012_SHARP_,d__$1);
});})(map__14015,map__14015__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__14015,map__14015__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args14017 = [];
var len__7319__auto___14023 = arguments.length;
var i__7320__auto___14024 = (0);
while(true){
if((i__7320__auto___14024 < len__7319__auto___14023)){
args14017.push((arguments[i__7320__auto___14024]));

var G__14025 = (i__7320__auto___14024 + (1));
i__7320__auto___14024 = G__14025;
continue;
} else {
}
break;
}

var G__14019 = args14017.length;
switch (G__14019) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14017.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__14020 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__14027 = cljs.core.next(segs__$1);
var G__14028 = nrelseg;
var G__14029 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__14027;
relseg__$1 = G__14028;
result__$1 = G__14029;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020,(1),null);
var G__14030 = (gline + (1));
var G__14031 = cljs.core.next(lines__$1);
var G__14032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__14033 = result__$1;
gline = G__14030;
lines__$1 = G__14031;
relseg = G__14032;
result = G__14033;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__14047 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14047) : cljs.core.atom.call(null,G__14047));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__14048){
var vec__14049 = p__14048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__14052){
var vec__14053 = p__14052;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(4),null);
var seg = vec__14053;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__14053,gcol,sidx,line,col,name,seg,relseg){
return (function (p__14056){
var vec__14057 = p__14056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6244__auto__ = name;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__14053,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__14150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14150) : cljs.core.atom.call(null,G__14150));
})();
var names__GT_idx = (function (){var G__14151 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14151) : cljs.core.atom.call(null,G__14151));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__6244__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__14152 = cljs.core.seq(infos);
var chunk__14153 = null;
var count__14154 = (0);
var i__14155 = (0);
while(true){
if((i__14155 < count__14154)){
var info = chunk__14153.cljs$core$IIndexed$_nth$arity$2(null,i__14155);
var segv_14237 = info__GT_segv(info,source_idx,line,col);
var gline_14238 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_14239 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_14238 > (lc_14239 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14152,chunk__14153,count__14154,i__14155,segv_14237,gline_14238,lc_14239,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_14238 - (lc_14239 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14237], null));
});})(seq__14152,chunk__14153,count__14154,i__14155,segv_14237,gline_14238,lc_14239,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14152,chunk__14153,count__14154,i__14155,segv_14237,gline_14238,lc_14239,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14238], null),cljs.core.conj,segv_14237);
});})(seq__14152,chunk__14153,count__14154,i__14155,segv_14237,gline_14238,lc_14239,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14240 = seq__14152;
var G__14241 = chunk__14153;
var G__14242 = count__14154;
var G__14243 = (i__14155 + (1));
seq__14152 = G__14240;
chunk__14153 = G__14241;
count__14154 = G__14242;
i__14155 = G__14243;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14152);
if(temp__4657__auto__){
var seq__14152__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14152__$1)){
var c__7055__auto__ = cljs.core.chunk_first(seq__14152__$1);
var G__14244 = cljs.core.chunk_rest(seq__14152__$1);
var G__14245 = c__7055__auto__;
var G__14246 = cljs.core.count(c__7055__auto__);
var G__14247 = (0);
seq__14152 = G__14244;
chunk__14153 = G__14245;
count__14154 = G__14246;
i__14155 = G__14247;
continue;
} else {
var info = cljs.core.first(seq__14152__$1);
var segv_14248 = info__GT_segv(info,source_idx,line,col);
var gline_14249 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_14250 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_14249 > (lc_14250 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14152,chunk__14153,count__14154,i__14155,segv_14248,gline_14249,lc_14250,info,seq__14152__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_14249 - (lc_14250 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_14248], null));
});})(seq__14152,chunk__14153,count__14154,i__14155,segv_14248,gline_14249,lc_14250,info,seq__14152__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14152,chunk__14153,count__14154,i__14155,segv_14248,gline_14249,lc_14250,info,seq__14152__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14249], null),cljs.core.conj,segv_14248);
});})(seq__14152,chunk__14153,count__14154,i__14155,segv_14248,gline_14249,lc_14250,info,seq__14152__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__14251 = cljs.core.next(seq__14152__$1);
var G__14252 = null;
var G__14253 = (0);
var G__14254 = (0);
seq__14152 = G__14251;
chunk__14153 = G__14252;
count__14154 = G__14253;
i__14155 = G__14254;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__14156_14255 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14157_14256 = null;
var count__14158_14257 = (0);
var i__14159_14258 = (0);
while(true){
if((i__14159_14258 < count__14158_14257)){
var vec__14160_14259 = chunk__14157_14256.cljs$core$IIndexed$_nth$arity$2(null,i__14159_14258);
var source_idx_14260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160_14259,(0),null);
var vec__14163_14261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160_14259,(1),null);
var __14262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163_14261,(0),null);
var lines_14263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163_14261,(1),null);
var seq__14166_14264 = cljs.core.seq(lines_14263__$1);
var chunk__14167_14265 = null;
var count__14168_14266 = (0);
var i__14169_14267 = (0);
while(true){
if((i__14169_14267 < count__14168_14266)){
var vec__14170_14268 = chunk__14167_14265.cljs$core$IIndexed$_nth$arity$2(null,i__14169_14267);
var line_14269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170_14268,(0),null);
var cols_14270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14170_14268,(1),null);
var seq__14173_14271 = cljs.core.seq(cols_14270);
var chunk__14174_14272 = null;
var count__14175_14273 = (0);
var i__14176_14274 = (0);
while(true){
if((i__14176_14274 < count__14175_14273)){
var vec__14177_14275 = chunk__14174_14272.cljs$core$IIndexed$_nth$arity$2(null,i__14176_14274);
var col_14276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177_14275,(0),null);
var infos_14277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177_14275,(1),null);
encode_cols(infos_14277,source_idx_14260,line_14269,col_14276);

var G__14278 = seq__14173_14271;
var G__14279 = chunk__14174_14272;
var G__14280 = count__14175_14273;
var G__14281 = (i__14176_14274 + (1));
seq__14173_14271 = G__14278;
chunk__14174_14272 = G__14279;
count__14175_14273 = G__14280;
i__14176_14274 = G__14281;
continue;
} else {
var temp__4657__auto___14282 = cljs.core.seq(seq__14173_14271);
if(temp__4657__auto___14282){
var seq__14173_14283__$1 = temp__4657__auto___14282;
if(cljs.core.chunked_seq_QMARK_(seq__14173_14283__$1)){
var c__7055__auto___14284 = cljs.core.chunk_first(seq__14173_14283__$1);
var G__14285 = cljs.core.chunk_rest(seq__14173_14283__$1);
var G__14286 = c__7055__auto___14284;
var G__14287 = cljs.core.count(c__7055__auto___14284);
var G__14288 = (0);
seq__14173_14271 = G__14285;
chunk__14174_14272 = G__14286;
count__14175_14273 = G__14287;
i__14176_14274 = G__14288;
continue;
} else {
var vec__14180_14289 = cljs.core.first(seq__14173_14283__$1);
var col_14290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180_14289,(0),null);
var infos_14291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180_14289,(1),null);
encode_cols(infos_14291,source_idx_14260,line_14269,col_14290);

var G__14292 = cljs.core.next(seq__14173_14283__$1);
var G__14293 = null;
var G__14294 = (0);
var G__14295 = (0);
seq__14173_14271 = G__14292;
chunk__14174_14272 = G__14293;
count__14175_14273 = G__14294;
i__14176_14274 = G__14295;
continue;
}
} else {
}
}
break;
}

var G__14296 = seq__14166_14264;
var G__14297 = chunk__14167_14265;
var G__14298 = count__14168_14266;
var G__14299 = (i__14169_14267 + (1));
seq__14166_14264 = G__14296;
chunk__14167_14265 = G__14297;
count__14168_14266 = G__14298;
i__14169_14267 = G__14299;
continue;
} else {
var temp__4657__auto___14300 = cljs.core.seq(seq__14166_14264);
if(temp__4657__auto___14300){
var seq__14166_14301__$1 = temp__4657__auto___14300;
if(cljs.core.chunked_seq_QMARK_(seq__14166_14301__$1)){
var c__7055__auto___14302 = cljs.core.chunk_first(seq__14166_14301__$1);
var G__14303 = cljs.core.chunk_rest(seq__14166_14301__$1);
var G__14304 = c__7055__auto___14302;
var G__14305 = cljs.core.count(c__7055__auto___14302);
var G__14306 = (0);
seq__14166_14264 = G__14303;
chunk__14167_14265 = G__14304;
count__14168_14266 = G__14305;
i__14169_14267 = G__14306;
continue;
} else {
var vec__14183_14307 = cljs.core.first(seq__14166_14301__$1);
var line_14308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183_14307,(0),null);
var cols_14309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183_14307,(1),null);
var seq__14186_14310 = cljs.core.seq(cols_14309);
var chunk__14187_14311 = null;
var count__14188_14312 = (0);
var i__14189_14313 = (0);
while(true){
if((i__14189_14313 < count__14188_14312)){
var vec__14190_14314 = chunk__14187_14311.cljs$core$IIndexed$_nth$arity$2(null,i__14189_14313);
var col_14315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190_14314,(0),null);
var infos_14316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190_14314,(1),null);
encode_cols(infos_14316,source_idx_14260,line_14308,col_14315);

var G__14317 = seq__14186_14310;
var G__14318 = chunk__14187_14311;
var G__14319 = count__14188_14312;
var G__14320 = (i__14189_14313 + (1));
seq__14186_14310 = G__14317;
chunk__14187_14311 = G__14318;
count__14188_14312 = G__14319;
i__14189_14313 = G__14320;
continue;
} else {
var temp__4657__auto___14321__$1 = cljs.core.seq(seq__14186_14310);
if(temp__4657__auto___14321__$1){
var seq__14186_14322__$1 = temp__4657__auto___14321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14186_14322__$1)){
var c__7055__auto___14323 = cljs.core.chunk_first(seq__14186_14322__$1);
var G__14324 = cljs.core.chunk_rest(seq__14186_14322__$1);
var G__14325 = c__7055__auto___14323;
var G__14326 = cljs.core.count(c__7055__auto___14323);
var G__14327 = (0);
seq__14186_14310 = G__14324;
chunk__14187_14311 = G__14325;
count__14188_14312 = G__14326;
i__14189_14313 = G__14327;
continue;
} else {
var vec__14193_14328 = cljs.core.first(seq__14186_14322__$1);
var col_14329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193_14328,(0),null);
var infos_14330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193_14328,(1),null);
encode_cols(infos_14330,source_idx_14260,line_14308,col_14329);

var G__14331 = cljs.core.next(seq__14186_14322__$1);
var G__14332 = null;
var G__14333 = (0);
var G__14334 = (0);
seq__14186_14310 = G__14331;
chunk__14187_14311 = G__14332;
count__14188_14312 = G__14333;
i__14189_14313 = G__14334;
continue;
}
} else {
}
}
break;
}

var G__14335 = cljs.core.next(seq__14166_14301__$1);
var G__14336 = null;
var G__14337 = (0);
var G__14338 = (0);
seq__14166_14264 = G__14335;
chunk__14167_14265 = G__14336;
count__14168_14266 = G__14337;
i__14169_14267 = G__14338;
continue;
}
} else {
}
}
break;
}

var G__14339 = seq__14156_14255;
var G__14340 = chunk__14157_14256;
var G__14341 = count__14158_14257;
var G__14342 = (i__14159_14258 + (1));
seq__14156_14255 = G__14339;
chunk__14157_14256 = G__14340;
count__14158_14257 = G__14341;
i__14159_14258 = G__14342;
continue;
} else {
var temp__4657__auto___14343 = cljs.core.seq(seq__14156_14255);
if(temp__4657__auto___14343){
var seq__14156_14344__$1 = temp__4657__auto___14343;
if(cljs.core.chunked_seq_QMARK_(seq__14156_14344__$1)){
var c__7055__auto___14345 = cljs.core.chunk_first(seq__14156_14344__$1);
var G__14346 = cljs.core.chunk_rest(seq__14156_14344__$1);
var G__14347 = c__7055__auto___14345;
var G__14348 = cljs.core.count(c__7055__auto___14345);
var G__14349 = (0);
seq__14156_14255 = G__14346;
chunk__14157_14256 = G__14347;
count__14158_14257 = G__14348;
i__14159_14258 = G__14349;
continue;
} else {
var vec__14196_14350 = cljs.core.first(seq__14156_14344__$1);
var source_idx_14351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196_14350,(0),null);
var vec__14199_14352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196_14350,(1),null);
var __14353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199_14352,(0),null);
var lines_14354__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199_14352,(1),null);
var seq__14202_14355 = cljs.core.seq(lines_14354__$1);
var chunk__14203_14356 = null;
var count__14204_14357 = (0);
var i__14205_14358 = (0);
while(true){
if((i__14205_14358 < count__14204_14357)){
var vec__14206_14359 = chunk__14203_14356.cljs$core$IIndexed$_nth$arity$2(null,i__14205_14358);
var line_14360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14206_14359,(0),null);
var cols_14361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14206_14359,(1),null);
var seq__14209_14362 = cljs.core.seq(cols_14361);
var chunk__14210_14363 = null;
var count__14211_14364 = (0);
var i__14212_14365 = (0);
while(true){
if((i__14212_14365 < count__14211_14364)){
var vec__14213_14366 = chunk__14210_14363.cljs$core$IIndexed$_nth$arity$2(null,i__14212_14365);
var col_14367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213_14366,(0),null);
var infos_14368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213_14366,(1),null);
encode_cols(infos_14368,source_idx_14351,line_14360,col_14367);

var G__14369 = seq__14209_14362;
var G__14370 = chunk__14210_14363;
var G__14371 = count__14211_14364;
var G__14372 = (i__14212_14365 + (1));
seq__14209_14362 = G__14369;
chunk__14210_14363 = G__14370;
count__14211_14364 = G__14371;
i__14212_14365 = G__14372;
continue;
} else {
var temp__4657__auto___14373__$1 = cljs.core.seq(seq__14209_14362);
if(temp__4657__auto___14373__$1){
var seq__14209_14374__$1 = temp__4657__auto___14373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14209_14374__$1)){
var c__7055__auto___14375 = cljs.core.chunk_first(seq__14209_14374__$1);
var G__14376 = cljs.core.chunk_rest(seq__14209_14374__$1);
var G__14377 = c__7055__auto___14375;
var G__14378 = cljs.core.count(c__7055__auto___14375);
var G__14379 = (0);
seq__14209_14362 = G__14376;
chunk__14210_14363 = G__14377;
count__14211_14364 = G__14378;
i__14212_14365 = G__14379;
continue;
} else {
var vec__14216_14380 = cljs.core.first(seq__14209_14374__$1);
var col_14381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216_14380,(0),null);
var infos_14382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216_14380,(1),null);
encode_cols(infos_14382,source_idx_14351,line_14360,col_14381);

var G__14383 = cljs.core.next(seq__14209_14374__$1);
var G__14384 = null;
var G__14385 = (0);
var G__14386 = (0);
seq__14209_14362 = G__14383;
chunk__14210_14363 = G__14384;
count__14211_14364 = G__14385;
i__14212_14365 = G__14386;
continue;
}
} else {
}
}
break;
}

var G__14387 = seq__14202_14355;
var G__14388 = chunk__14203_14356;
var G__14389 = count__14204_14357;
var G__14390 = (i__14205_14358 + (1));
seq__14202_14355 = G__14387;
chunk__14203_14356 = G__14388;
count__14204_14357 = G__14389;
i__14205_14358 = G__14390;
continue;
} else {
var temp__4657__auto___14391__$1 = cljs.core.seq(seq__14202_14355);
if(temp__4657__auto___14391__$1){
var seq__14202_14392__$1 = temp__4657__auto___14391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14202_14392__$1)){
var c__7055__auto___14393 = cljs.core.chunk_first(seq__14202_14392__$1);
var G__14394 = cljs.core.chunk_rest(seq__14202_14392__$1);
var G__14395 = c__7055__auto___14393;
var G__14396 = cljs.core.count(c__7055__auto___14393);
var G__14397 = (0);
seq__14202_14355 = G__14394;
chunk__14203_14356 = G__14395;
count__14204_14357 = G__14396;
i__14205_14358 = G__14397;
continue;
} else {
var vec__14219_14398 = cljs.core.first(seq__14202_14392__$1);
var line_14399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219_14398,(0),null);
var cols_14400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219_14398,(1),null);
var seq__14222_14401 = cljs.core.seq(cols_14400);
var chunk__14223_14402 = null;
var count__14224_14403 = (0);
var i__14225_14404 = (0);
while(true){
if((i__14225_14404 < count__14224_14403)){
var vec__14226_14405 = chunk__14223_14402.cljs$core$IIndexed$_nth$arity$2(null,i__14225_14404);
var col_14406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226_14405,(0),null);
var infos_14407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226_14405,(1),null);
encode_cols(infos_14407,source_idx_14351,line_14399,col_14406);

var G__14408 = seq__14222_14401;
var G__14409 = chunk__14223_14402;
var G__14410 = count__14224_14403;
var G__14411 = (i__14225_14404 + (1));
seq__14222_14401 = G__14408;
chunk__14223_14402 = G__14409;
count__14224_14403 = G__14410;
i__14225_14404 = G__14411;
continue;
} else {
var temp__4657__auto___14412__$2 = cljs.core.seq(seq__14222_14401);
if(temp__4657__auto___14412__$2){
var seq__14222_14413__$1 = temp__4657__auto___14412__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14222_14413__$1)){
var c__7055__auto___14414 = cljs.core.chunk_first(seq__14222_14413__$1);
var G__14415 = cljs.core.chunk_rest(seq__14222_14413__$1);
var G__14416 = c__7055__auto___14414;
var G__14417 = cljs.core.count(c__7055__auto___14414);
var G__14418 = (0);
seq__14222_14401 = G__14415;
chunk__14223_14402 = G__14416;
count__14224_14403 = G__14417;
i__14225_14404 = G__14418;
continue;
} else {
var vec__14229_14419 = cljs.core.first(seq__14222_14413__$1);
var col_14420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229_14419,(0),null);
var infos_14421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229_14419,(1),null);
encode_cols(infos_14421,source_idx_14351,line_14399,col_14420);

var G__14422 = cljs.core.next(seq__14222_14413__$1);
var G__14423 = null;
var G__14424 = (0);
var G__14425 = (0);
seq__14222_14401 = G__14422;
chunk__14223_14402 = G__14423;
count__14224_14403 = G__14424;
i__14225_14404 = G__14425;
continue;
}
} else {
}
}
break;
}

var G__14426 = cljs.core.next(seq__14202_14392__$1);
var G__14427 = null;
var G__14428 = (0);
var G__14429 = (0);
seq__14202_14355 = G__14426;
chunk__14203_14356 = G__14427;
count__14204_14357 = G__14428;
i__14205_14358 = G__14429;
continue;
}
} else {
}
}
break;
}

var G__14430 = cljs.core.next(seq__14156_14344__$1);
var G__14431 = null;
var G__14432 = (0);
var G__14433 = (0);
seq__14156_14255 = G__14430;
chunk__14157_14256 = G__14431;
count__14158_14257 = G__14432;
i__14159_14258 = G__14433;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14232 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14060_SHARP_){
return [cljs.core.str(p1__14060_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14061_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__14061_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__14062_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__14062_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__14233 = G__14232;
var G__14234_14434 = G__14233;
var G__14235_14435 = "sourcesContent";
var G__14236_14436 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__14234_14434,G__14235_14435,G__14236_14436);

return G__14233;
} else {
return G__14232;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__14446 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__14449 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(1),null);
var G__14455 = cljs.core.next(col_map_seq);
var G__14456 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14449,col,infos,vec__14446,line,col_map){
return (function (v,p__14452){
var map__14453 = p__14452;
var map__14453__$1 = ((((!((map__14453 == null)))?((((map__14453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14453):map__14453);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14453__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14453__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14449,col,infos,vec__14446,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14455;
new_cols = G__14456;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14457 = cljs.core.next(line_map_seq);
var G__14458 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__14457;
new_lines = G__14458;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__14522 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14522) : cljs.core.atom.call(null,G__14522));
})();
var seq__14523_14585 = cljs.core.seq(reverse_map);
var chunk__14524_14586 = null;
var count__14525_14587 = (0);
var i__14526_14588 = (0);
while(true){
if((i__14526_14588 < count__14525_14587)){
var vec__14527_14589 = chunk__14524_14586.cljs$core$IIndexed$_nth$arity$2(null,i__14526_14588);
var line_14590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527_14589,(0),null);
var columns_14591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527_14589,(1),null);
var seq__14530_14592 = cljs.core.seq(columns_14591);
var chunk__14531_14593 = null;
var count__14532_14594 = (0);
var i__14533_14595 = (0);
while(true){
if((i__14533_14595 < count__14532_14594)){
var vec__14534_14596 = chunk__14531_14593.cljs$core$IIndexed$_nth$arity$2(null,i__14533_14595);
var column_14597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534_14596,(0),null);
var column_info_14598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14534_14596,(1),null);
var seq__14537_14599 = cljs.core.seq(column_info_14598);
var chunk__14538_14600 = null;
var count__14539_14601 = (0);
var i__14540_14602 = (0);
while(true){
if((i__14540_14602 < count__14539_14601)){
var map__14541_14603 = chunk__14538_14600.cljs$core$IIndexed$_nth$arity$2(null,i__14540_14602);
var map__14541_14604__$1 = ((((!((map__14541_14603 == null)))?((((map__14541_14603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14541_14603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14541_14603):map__14541_14603);
var gline_14605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14541_14604__$1,cljs.core.cst$kw$gline);
var gcol_14606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14541_14604__$1,cljs.core.cst$kw$gcol);
var name_14607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14541_14604__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14605], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14537_14599,chunk__14538_14600,count__14539_14601,i__14540_14602,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14541_14603,map__14541_14604__$1,gline_14605,gcol_14606,name_14607,vec__14534_14596,column_14597,column_info_14598,vec__14527_14589,line_14590,columns_14591,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14606], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14590,cljs.core.cst$kw$col,column_14597,cljs.core.cst$kw$name,name_14607], null));
});})(seq__14537_14599,chunk__14538_14600,count__14539_14601,i__14540_14602,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14541_14603,map__14541_14604__$1,gline_14605,gcol_14606,name_14607,vec__14534_14596,column_14597,column_info_14598,vec__14527_14589,line_14590,columns_14591,inverted))
,cljs.core.sorted_map()));

var G__14608 = seq__14537_14599;
var G__14609 = chunk__14538_14600;
var G__14610 = count__14539_14601;
var G__14611 = (i__14540_14602 + (1));
seq__14537_14599 = G__14608;
chunk__14538_14600 = G__14609;
count__14539_14601 = G__14610;
i__14540_14602 = G__14611;
continue;
} else {
var temp__4657__auto___14612 = cljs.core.seq(seq__14537_14599);
if(temp__4657__auto___14612){
var seq__14537_14613__$1 = temp__4657__auto___14612;
if(cljs.core.chunked_seq_QMARK_(seq__14537_14613__$1)){
var c__7055__auto___14614 = cljs.core.chunk_first(seq__14537_14613__$1);
var G__14615 = cljs.core.chunk_rest(seq__14537_14613__$1);
var G__14616 = c__7055__auto___14614;
var G__14617 = cljs.core.count(c__7055__auto___14614);
var G__14618 = (0);
seq__14537_14599 = G__14615;
chunk__14538_14600 = G__14616;
count__14539_14601 = G__14617;
i__14540_14602 = G__14618;
continue;
} else {
var map__14543_14619 = cljs.core.first(seq__14537_14613__$1);
var map__14543_14620__$1 = ((((!((map__14543_14619 == null)))?((((map__14543_14619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14543_14619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14543_14619):map__14543_14619);
var gline_14621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543_14620__$1,cljs.core.cst$kw$gline);
var gcol_14622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543_14620__$1,cljs.core.cst$kw$gcol);
var name_14623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543_14620__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14621], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14537_14599,chunk__14538_14600,count__14539_14601,i__14540_14602,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14543_14619,map__14543_14620__$1,gline_14621,gcol_14622,name_14623,seq__14537_14613__$1,temp__4657__auto___14612,vec__14534_14596,column_14597,column_info_14598,vec__14527_14589,line_14590,columns_14591,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14622], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14590,cljs.core.cst$kw$col,column_14597,cljs.core.cst$kw$name,name_14623], null));
});})(seq__14537_14599,chunk__14538_14600,count__14539_14601,i__14540_14602,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14543_14619,map__14543_14620__$1,gline_14621,gcol_14622,name_14623,seq__14537_14613__$1,temp__4657__auto___14612,vec__14534_14596,column_14597,column_info_14598,vec__14527_14589,line_14590,columns_14591,inverted))
,cljs.core.sorted_map()));

var G__14624 = cljs.core.next(seq__14537_14613__$1);
var G__14625 = null;
var G__14626 = (0);
var G__14627 = (0);
seq__14537_14599 = G__14624;
chunk__14538_14600 = G__14625;
count__14539_14601 = G__14626;
i__14540_14602 = G__14627;
continue;
}
} else {
}
}
break;
}

var G__14628 = seq__14530_14592;
var G__14629 = chunk__14531_14593;
var G__14630 = count__14532_14594;
var G__14631 = (i__14533_14595 + (1));
seq__14530_14592 = G__14628;
chunk__14531_14593 = G__14629;
count__14532_14594 = G__14630;
i__14533_14595 = G__14631;
continue;
} else {
var temp__4657__auto___14632 = cljs.core.seq(seq__14530_14592);
if(temp__4657__auto___14632){
var seq__14530_14633__$1 = temp__4657__auto___14632;
if(cljs.core.chunked_seq_QMARK_(seq__14530_14633__$1)){
var c__7055__auto___14634 = cljs.core.chunk_first(seq__14530_14633__$1);
var G__14635 = cljs.core.chunk_rest(seq__14530_14633__$1);
var G__14636 = c__7055__auto___14634;
var G__14637 = cljs.core.count(c__7055__auto___14634);
var G__14638 = (0);
seq__14530_14592 = G__14635;
chunk__14531_14593 = G__14636;
count__14532_14594 = G__14637;
i__14533_14595 = G__14638;
continue;
} else {
var vec__14545_14639 = cljs.core.first(seq__14530_14633__$1);
var column_14640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14639,(0),null);
var column_info_14641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545_14639,(1),null);
var seq__14548_14642 = cljs.core.seq(column_info_14641);
var chunk__14549_14643 = null;
var count__14550_14644 = (0);
var i__14551_14645 = (0);
while(true){
if((i__14551_14645 < count__14550_14644)){
var map__14552_14646 = chunk__14549_14643.cljs$core$IIndexed$_nth$arity$2(null,i__14551_14645);
var map__14552_14647__$1 = ((((!((map__14552_14646 == null)))?((((map__14552_14646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14552_14646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14552_14646):map__14552_14646);
var gline_14648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552_14647__$1,cljs.core.cst$kw$gline);
var gcol_14649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552_14647__$1,cljs.core.cst$kw$gcol);
var name_14650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552_14647__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14648], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14548_14642,chunk__14549_14643,count__14550_14644,i__14551_14645,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14552_14646,map__14552_14647__$1,gline_14648,gcol_14649,name_14650,vec__14545_14639,column_14640,column_info_14641,seq__14530_14633__$1,temp__4657__auto___14632,vec__14527_14589,line_14590,columns_14591,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14649], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14590,cljs.core.cst$kw$col,column_14640,cljs.core.cst$kw$name,name_14650], null));
});})(seq__14548_14642,chunk__14549_14643,count__14550_14644,i__14551_14645,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14552_14646,map__14552_14647__$1,gline_14648,gcol_14649,name_14650,vec__14545_14639,column_14640,column_info_14641,seq__14530_14633__$1,temp__4657__auto___14632,vec__14527_14589,line_14590,columns_14591,inverted))
,cljs.core.sorted_map()));

var G__14651 = seq__14548_14642;
var G__14652 = chunk__14549_14643;
var G__14653 = count__14550_14644;
var G__14654 = (i__14551_14645 + (1));
seq__14548_14642 = G__14651;
chunk__14549_14643 = G__14652;
count__14550_14644 = G__14653;
i__14551_14645 = G__14654;
continue;
} else {
var temp__4657__auto___14655__$1 = cljs.core.seq(seq__14548_14642);
if(temp__4657__auto___14655__$1){
var seq__14548_14656__$1 = temp__4657__auto___14655__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14548_14656__$1)){
var c__7055__auto___14657 = cljs.core.chunk_first(seq__14548_14656__$1);
var G__14658 = cljs.core.chunk_rest(seq__14548_14656__$1);
var G__14659 = c__7055__auto___14657;
var G__14660 = cljs.core.count(c__7055__auto___14657);
var G__14661 = (0);
seq__14548_14642 = G__14658;
chunk__14549_14643 = G__14659;
count__14550_14644 = G__14660;
i__14551_14645 = G__14661;
continue;
} else {
var map__14554_14662 = cljs.core.first(seq__14548_14656__$1);
var map__14554_14663__$1 = ((((!((map__14554_14662 == null)))?((((map__14554_14662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14554_14662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14554_14662):map__14554_14662);
var gline_14664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554_14663__$1,cljs.core.cst$kw$gline);
var gcol_14665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554_14663__$1,cljs.core.cst$kw$gcol);
var name_14666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554_14663__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14664], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14548_14642,chunk__14549_14643,count__14550_14644,i__14551_14645,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14554_14662,map__14554_14663__$1,gline_14664,gcol_14665,name_14666,seq__14548_14656__$1,temp__4657__auto___14655__$1,vec__14545_14639,column_14640,column_info_14641,seq__14530_14633__$1,temp__4657__auto___14632,vec__14527_14589,line_14590,columns_14591,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14665], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14590,cljs.core.cst$kw$col,column_14640,cljs.core.cst$kw$name,name_14666], null));
});})(seq__14548_14642,chunk__14549_14643,count__14550_14644,i__14551_14645,seq__14530_14592,chunk__14531_14593,count__14532_14594,i__14533_14595,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14554_14662,map__14554_14663__$1,gline_14664,gcol_14665,name_14666,seq__14548_14656__$1,temp__4657__auto___14655__$1,vec__14545_14639,column_14640,column_info_14641,seq__14530_14633__$1,temp__4657__auto___14632,vec__14527_14589,line_14590,columns_14591,inverted))
,cljs.core.sorted_map()));

var G__14667 = cljs.core.next(seq__14548_14656__$1);
var G__14668 = null;
var G__14669 = (0);
var G__14670 = (0);
seq__14548_14642 = G__14667;
chunk__14549_14643 = G__14668;
count__14550_14644 = G__14669;
i__14551_14645 = G__14670;
continue;
}
} else {
}
}
break;
}

var G__14671 = cljs.core.next(seq__14530_14633__$1);
var G__14672 = null;
var G__14673 = (0);
var G__14674 = (0);
seq__14530_14592 = G__14671;
chunk__14531_14593 = G__14672;
count__14532_14594 = G__14673;
i__14533_14595 = G__14674;
continue;
}
} else {
}
}
break;
}

var G__14675 = seq__14523_14585;
var G__14676 = chunk__14524_14586;
var G__14677 = count__14525_14587;
var G__14678 = (i__14526_14588 + (1));
seq__14523_14585 = G__14675;
chunk__14524_14586 = G__14676;
count__14525_14587 = G__14677;
i__14526_14588 = G__14678;
continue;
} else {
var temp__4657__auto___14679 = cljs.core.seq(seq__14523_14585);
if(temp__4657__auto___14679){
var seq__14523_14680__$1 = temp__4657__auto___14679;
if(cljs.core.chunked_seq_QMARK_(seq__14523_14680__$1)){
var c__7055__auto___14681 = cljs.core.chunk_first(seq__14523_14680__$1);
var G__14682 = cljs.core.chunk_rest(seq__14523_14680__$1);
var G__14683 = c__7055__auto___14681;
var G__14684 = cljs.core.count(c__7055__auto___14681);
var G__14685 = (0);
seq__14523_14585 = G__14682;
chunk__14524_14586 = G__14683;
count__14525_14587 = G__14684;
i__14526_14588 = G__14685;
continue;
} else {
var vec__14556_14686 = cljs.core.first(seq__14523_14680__$1);
var line_14687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_14686,(0),null);
var columns_14688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_14686,(1),null);
var seq__14559_14689 = cljs.core.seq(columns_14688);
var chunk__14560_14690 = null;
var count__14561_14691 = (0);
var i__14562_14692 = (0);
while(true){
if((i__14562_14692 < count__14561_14691)){
var vec__14563_14693 = chunk__14560_14690.cljs$core$IIndexed$_nth$arity$2(null,i__14562_14692);
var column_14694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563_14693,(0),null);
var column_info_14695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14563_14693,(1),null);
var seq__14566_14696 = cljs.core.seq(column_info_14695);
var chunk__14567_14697 = null;
var count__14568_14698 = (0);
var i__14569_14699 = (0);
while(true){
if((i__14569_14699 < count__14568_14698)){
var map__14570_14700 = chunk__14567_14697.cljs$core$IIndexed$_nth$arity$2(null,i__14569_14699);
var map__14570_14701__$1 = ((((!((map__14570_14700 == null)))?((((map__14570_14700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14570_14700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14570_14700):map__14570_14700);
var gline_14702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570_14701__$1,cljs.core.cst$kw$gline);
var gcol_14703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570_14701__$1,cljs.core.cst$kw$gcol);
var name_14704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570_14701__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14702], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14566_14696,chunk__14567_14697,count__14568_14698,i__14569_14699,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14570_14700,map__14570_14701__$1,gline_14702,gcol_14703,name_14704,vec__14563_14693,column_14694,column_info_14695,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14703], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14687,cljs.core.cst$kw$col,column_14694,cljs.core.cst$kw$name,name_14704], null));
});})(seq__14566_14696,chunk__14567_14697,count__14568_14698,i__14569_14699,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14570_14700,map__14570_14701__$1,gline_14702,gcol_14703,name_14704,vec__14563_14693,column_14694,column_info_14695,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted))
,cljs.core.sorted_map()));

var G__14705 = seq__14566_14696;
var G__14706 = chunk__14567_14697;
var G__14707 = count__14568_14698;
var G__14708 = (i__14569_14699 + (1));
seq__14566_14696 = G__14705;
chunk__14567_14697 = G__14706;
count__14568_14698 = G__14707;
i__14569_14699 = G__14708;
continue;
} else {
var temp__4657__auto___14709__$1 = cljs.core.seq(seq__14566_14696);
if(temp__4657__auto___14709__$1){
var seq__14566_14710__$1 = temp__4657__auto___14709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14566_14710__$1)){
var c__7055__auto___14711 = cljs.core.chunk_first(seq__14566_14710__$1);
var G__14712 = cljs.core.chunk_rest(seq__14566_14710__$1);
var G__14713 = c__7055__auto___14711;
var G__14714 = cljs.core.count(c__7055__auto___14711);
var G__14715 = (0);
seq__14566_14696 = G__14712;
chunk__14567_14697 = G__14713;
count__14568_14698 = G__14714;
i__14569_14699 = G__14715;
continue;
} else {
var map__14572_14716 = cljs.core.first(seq__14566_14710__$1);
var map__14572_14717__$1 = ((((!((map__14572_14716 == null)))?((((map__14572_14716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14572_14716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14572_14716):map__14572_14716);
var gline_14718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572_14717__$1,cljs.core.cst$kw$gline);
var gcol_14719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572_14717__$1,cljs.core.cst$kw$gcol);
var name_14720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572_14717__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14718], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14566_14696,chunk__14567_14697,count__14568_14698,i__14569_14699,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14572_14716,map__14572_14717__$1,gline_14718,gcol_14719,name_14720,seq__14566_14710__$1,temp__4657__auto___14709__$1,vec__14563_14693,column_14694,column_info_14695,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14719], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14687,cljs.core.cst$kw$col,column_14694,cljs.core.cst$kw$name,name_14720], null));
});})(seq__14566_14696,chunk__14567_14697,count__14568_14698,i__14569_14699,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14572_14716,map__14572_14717__$1,gline_14718,gcol_14719,name_14720,seq__14566_14710__$1,temp__4657__auto___14709__$1,vec__14563_14693,column_14694,column_info_14695,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted))
,cljs.core.sorted_map()));

var G__14721 = cljs.core.next(seq__14566_14710__$1);
var G__14722 = null;
var G__14723 = (0);
var G__14724 = (0);
seq__14566_14696 = G__14721;
chunk__14567_14697 = G__14722;
count__14568_14698 = G__14723;
i__14569_14699 = G__14724;
continue;
}
} else {
}
}
break;
}

var G__14725 = seq__14559_14689;
var G__14726 = chunk__14560_14690;
var G__14727 = count__14561_14691;
var G__14728 = (i__14562_14692 + (1));
seq__14559_14689 = G__14725;
chunk__14560_14690 = G__14726;
count__14561_14691 = G__14727;
i__14562_14692 = G__14728;
continue;
} else {
var temp__4657__auto___14729__$1 = cljs.core.seq(seq__14559_14689);
if(temp__4657__auto___14729__$1){
var seq__14559_14730__$1 = temp__4657__auto___14729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14559_14730__$1)){
var c__7055__auto___14731 = cljs.core.chunk_first(seq__14559_14730__$1);
var G__14732 = cljs.core.chunk_rest(seq__14559_14730__$1);
var G__14733 = c__7055__auto___14731;
var G__14734 = cljs.core.count(c__7055__auto___14731);
var G__14735 = (0);
seq__14559_14689 = G__14732;
chunk__14560_14690 = G__14733;
count__14561_14691 = G__14734;
i__14562_14692 = G__14735;
continue;
} else {
var vec__14574_14736 = cljs.core.first(seq__14559_14730__$1);
var column_14737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574_14736,(0),null);
var column_info_14738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14574_14736,(1),null);
var seq__14577_14739 = cljs.core.seq(column_info_14738);
var chunk__14578_14740 = null;
var count__14579_14741 = (0);
var i__14580_14742 = (0);
while(true){
if((i__14580_14742 < count__14579_14741)){
var map__14581_14743 = chunk__14578_14740.cljs$core$IIndexed$_nth$arity$2(null,i__14580_14742);
var map__14581_14744__$1 = ((((!((map__14581_14743 == null)))?((((map__14581_14743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14581_14743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14581_14743):map__14581_14743);
var gline_14745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581_14744__$1,cljs.core.cst$kw$gline);
var gcol_14746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581_14744__$1,cljs.core.cst$kw$gcol);
var name_14747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581_14744__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14745], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14577_14739,chunk__14578_14740,count__14579_14741,i__14580_14742,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14581_14743,map__14581_14744__$1,gline_14745,gcol_14746,name_14747,vec__14574_14736,column_14737,column_info_14738,seq__14559_14730__$1,temp__4657__auto___14729__$1,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14746], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14687,cljs.core.cst$kw$col,column_14737,cljs.core.cst$kw$name,name_14747], null));
});})(seq__14577_14739,chunk__14578_14740,count__14579_14741,i__14580_14742,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14581_14743,map__14581_14744__$1,gline_14745,gcol_14746,name_14747,vec__14574_14736,column_14737,column_info_14738,seq__14559_14730__$1,temp__4657__auto___14729__$1,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted))
,cljs.core.sorted_map()));

var G__14748 = seq__14577_14739;
var G__14749 = chunk__14578_14740;
var G__14750 = count__14579_14741;
var G__14751 = (i__14580_14742 + (1));
seq__14577_14739 = G__14748;
chunk__14578_14740 = G__14749;
count__14579_14741 = G__14750;
i__14580_14742 = G__14751;
continue;
} else {
var temp__4657__auto___14752__$2 = cljs.core.seq(seq__14577_14739);
if(temp__4657__auto___14752__$2){
var seq__14577_14753__$1 = temp__4657__auto___14752__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14577_14753__$1)){
var c__7055__auto___14754 = cljs.core.chunk_first(seq__14577_14753__$1);
var G__14755 = cljs.core.chunk_rest(seq__14577_14753__$1);
var G__14756 = c__7055__auto___14754;
var G__14757 = cljs.core.count(c__7055__auto___14754);
var G__14758 = (0);
seq__14577_14739 = G__14755;
chunk__14578_14740 = G__14756;
count__14579_14741 = G__14757;
i__14580_14742 = G__14758;
continue;
} else {
var map__14583_14759 = cljs.core.first(seq__14577_14753__$1);
var map__14583_14760__$1 = ((((!((map__14583_14759 == null)))?((((map__14583_14759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14583_14759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14583_14759):map__14583_14759);
var gline_14761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14583_14760__$1,cljs.core.cst$kw$gline);
var gcol_14762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14583_14760__$1,cljs.core.cst$kw$gcol);
var name_14763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14583_14760__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14761], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14577_14739,chunk__14578_14740,count__14579_14741,i__14580_14742,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14583_14759,map__14583_14760__$1,gline_14761,gcol_14762,name_14763,seq__14577_14753__$1,temp__4657__auto___14752__$2,vec__14574_14736,column_14737,column_info_14738,seq__14559_14730__$1,temp__4657__auto___14729__$1,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14762], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_14687,cljs.core.cst$kw$col,column_14737,cljs.core.cst$kw$name,name_14763], null));
});})(seq__14577_14739,chunk__14578_14740,count__14579_14741,i__14580_14742,seq__14559_14689,chunk__14560_14690,count__14561_14691,i__14562_14692,seq__14523_14585,chunk__14524_14586,count__14525_14587,i__14526_14588,map__14583_14759,map__14583_14760__$1,gline_14761,gcol_14762,name_14763,seq__14577_14753__$1,temp__4657__auto___14752__$2,vec__14574_14736,column_14737,column_info_14738,seq__14559_14730__$1,temp__4657__auto___14729__$1,vec__14556_14686,line_14687,columns_14688,seq__14523_14680__$1,temp__4657__auto___14679,inverted))
,cljs.core.sorted_map()));

var G__14764 = cljs.core.next(seq__14577_14753__$1);
var G__14765 = null;
var G__14766 = (0);
var G__14767 = (0);
seq__14577_14739 = G__14764;
chunk__14578_14740 = G__14765;
count__14579_14741 = G__14766;
i__14580_14742 = G__14767;
continue;
}
} else {
}
}
break;
}

var G__14768 = cljs.core.next(seq__14559_14730__$1);
var G__14769 = null;
var G__14770 = (0);
var G__14771 = (0);
seq__14559_14689 = G__14768;
chunk__14560_14690 = G__14769;
count__14561_14691 = G__14770;
i__14562_14692 = G__14771;
continue;
}
} else {
}
}
break;
}

var G__14772 = cljs.core.next(seq__14523_14680__$1);
var G__14773 = null;
var G__14774 = (0);
var G__14775 = (0);
seq__14523_14585 = G__14772;
chunk__14524_14586 = G__14773;
count__14525_14587 = G__14774;
i__14526_14588 = G__14775;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
