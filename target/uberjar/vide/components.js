// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.components');
goog.require('cljs.core');
goog.require('vide.parser2');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('vide.helpers');
goog.require('clojure.string');
goog.require('vide.propagation');
goog.require('cljs.reader');
vide.components.pretend_code = [cljs.core.str("(defn square [x] (let [y (* x x)] y))"),cljs.core.str("(defn inc-vec [myvec] (let [incd (map inc myvec)] incd))"),cljs.core.str("(defn incincinc [x] (let [y (+ x x) \n\n    a (inc y) \n\n    b (inc a) \n\n    c (inc b) \n] c))"),cljs.core.str("(defn higher [x y z] (let [a (+ x y)\n                           b (repeat 5 z)\n                           c  (conj b a)\n                           d (map square c)\n                           e (reduce + d)\n                           u (identity e)] u))"),cljs.core.str("(defn fact [prod n] (if (= n 1)\n                                   (identity prod)\n                                   (let [prod-new  (* prod n)\n                                         n-new (dec n)]\n                                     (fact prod-new n-new))))"),cljs.core.str("(defn nested-let [x] (let [y (+ x x)\n    a (inc y)\n    b (dec (* 3 y))\n    c (repeat 6 (- a b))\n    d (map square (repeat 6 b))\n    e (map + c d)\n    f (reduce + e)\n    g (square f)] g))")].join('');
vide.components.load_node_defs = (function vide$components$load_node_defs(code){
var forms = cljs.reader.read_string([cljs.core.str("("),cljs.core.str(code),cljs.core.str(")")].join(''));
var defn_forms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__26558_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defn,cljs.core.first(p1__26558_SHARP_));
});})(forms))
,forms);
var names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms,defn_forms){
return (function (p1__26559_SHARP_){
return [cljs.core.str(cljs.core.second(p1__26559_SHARP_))].join('');
});})(forms,defn_forms))
,defn_forms);
var codes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,defn_forms);
var compiled_codes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.helpers.try_read,codes);
var evald_codes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(vide.helpers.try_eval,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms,defn_forms,names,codes,compiled_codes){
return (function (p1__26560_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$fn,p1__26560_SHARP_);
});})(forms,defn_forms,names,codes,compiled_codes))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms,defn_forms,names,codes,compiled_codes){
return (function (p1__26561_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),p1__26561_SHARP_);
});})(forms,defn_forms,names,codes,compiled_codes))
,compiled_codes)));
var defs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (forms,defn_forms,names,codes,compiled_codes,evald_codes){
return (function (p1__26562_SHARP_,p2__26563_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$code,cljs.core.cst$kw$fn],[p1__26562_SHARP_,p2__26563_SHARP_]);
});})(forms,defn_forms,names,codes,compiled_codes,evald_codes))
,codes,evald_codes);
var node_defs = cljs.core.zipmap(names,defs);
return node_defs;
});
vide.components.namespaces_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["my-namespace",vide.components.load_node_defs(vide.components.pretend_code)], null));
vide.components.node_history_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
vide.components.cm_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new CodeMirror(document.createElement("div"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$cursorHeight,0.85,cljs.core.cst$kw$lineWrapping,true,cljs.core.cst$kw$autoMatchParens,true], null)))));
vide.components.on_cm_update = (function vide$components$on_cm_update(){
return (function (this$){
var temp__4657__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.node_history_atom) : cljs.core.deref.call(null,vide.components.node_history_atom)));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__26570 = temp__4657__auto__;
var space = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26570,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26570,(1),null);
var new_text = this$.getValue();
var compiled = vide.helpers.try_read(new_text);
var evald = vide.helpers.try_eval(cljs.core.cons(cljs.core.cst$sym$fn,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),compiled)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.namespaces_atom,((function (new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__){
return (function (p1__26564_SHARP_){
return cljs.core.assoc_in(p1__26564_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node,cljs.core.cst$kw$code], null),new_text);
});})(new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__))
);

if(cljs.core.truth_(evald)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.namespaces_atom,((function (new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__){
return (function (p1__26565_SHARP_){
return cljs.core.assoc_in(p1__26565_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node,cljs.core.cst$kw$fn], null),evald);
});})(new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__))
);
} else {
}

var temp__4657__auto____$1 = vide.parser2.parse_defn(vide.helpers.try_read(new_text));
if(cljs.core.truth_(temp__4657__auto____$1)){
var model = temp__4657__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.namespaces_atom,((function (model,temp__4657__auto____$1,new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__){
return (function (p1__26566_SHARP_){
return cljs.core.assoc_in(p1__26566_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node,cljs.core.cst$kw$model], null),model);
});})(model,temp__4657__auto____$1,new_text,compiled,evald,vec__26570,space,node,temp__4657__auto__))
);
} else {
return null;
}
} else {
return null;
}
});
});
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).on("change",vide.components.on_cm_update());
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).setSize("100%","100%");
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).refresh();
vide.components.next_graph = (function vide$components$next_graph(space,node){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.node_history_atom,(function (p1__26573_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26573_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node], null));
}));

if(cljs.core.truth_(node)){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).setValue(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node,cljs.core.cst$kw$code], null)));
} else {
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).setValue("");
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.node_history_atom) : cljs.core.deref.call(null,vide.components.node_history_atom));
});
vide.components.prev_graph = (function vide$components$prev_graph(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.node_history_atom,(function (p1__26574_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),p1__26574_SHARP_);
}));

var temp__4655__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.node_history_atom) : cljs.core.deref.call(null,vide.components.node_history_atom)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__26578 = temp__4655__auto__;
var space = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26578,(1),null);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).setValue(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node,cljs.core.cst$kw$code], null)));
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).setValue("");
}
});
vide.components.update_editor = (function vide$components$update_editor(wrapper_id){
return (function (this$){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)))){
var temp__4657__auto__ = (function (){var or__6244__auto__ = document.getElementById(wrapper_id);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return reagent.core.dom_node(this$);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return node.appendChild((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom)).getWrapperElement());
} else {
return null;
}
} else {
return null;
}
});
});
cljs.core.enable_console_print_BANG_();
vide.components.font_size = (2);
vide.components.node_style = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fill,"white",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.8,cljs.core.cst$kw$opacity,(1)], null);
vide.components.node_text = "black";
vide.components.arrow_fill = "black";
vide.components.node_h2 = 0.46;
vide.components.node_w2 = 0.6;
vide.components.arrowhead_angle = (6.283 / (24));
vide.components.arrowhead_l = 0.15;
vide.components.button_view = (function vide$components$button_view(text,callback){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$padding,cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$left],["white","center",(14),(10),"#f44336","5px 16px","none","inline-block","absolute","solid #f44336","2px","Ubuntu",(10)]),cljs.core.cst$kw$on_DASH_click,callback], null),text], null);
});
vide.components.dropdown_node = (function vide$components$dropdown_node(node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("dropdown-"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$outline,"none"], null)], null),node], null);
});
vide.components.arrowhead_view = (function vide$components$arrowhead_view(x,y,th,col){
var p1 = [cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join('');
var a2 = (th + vide.components.arrowhead_angle);
var a3 = (th - vide.components.arrowhead_angle);
var x2 = (x + (vide.components.arrowhead_l * Math.sin(a2)));
var y2 = (y + (vide.components.arrowhead_l * Math.cos(a2)));
var p2 = [cljs.core.str(x2),cljs.core.str(","),cljs.core.str(y2)].join('');
var x3 = (x + (vide.components.arrowhead_l * Math.sin(a3)));
var y3 = (y + (vide.components.arrowhead_l * Math.cos(a3)));
var p3 = [cljs.core.str(x3),cljs.core.str(","),cljs.core.str(y3)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,[cljs.core.str(p1),cljs.core.str(" "),cljs.core.str(p2),cljs.core.str(" "),cljs.core.str(p3)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,col,cljs.core.cst$kw$opacity,(1)], null)], null)], null);
});
vide.components.edge_group = (function vide$components$edge_group(x1,y1,endpoints,label){
var col = "black";
var bend_y = (y1 + 0.15);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,x1,cljs.core.cst$kw$y1,y1,cljs.core.cst$kw$x2,x1,cljs.core.cst$kw$y2,bend_y,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,col,cljs.core.cst$kw$stroke_DASH_width,0.016,cljs.core.cst$kw$opacity,(1)], null)], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,(x1 + 0.05),cljs.core.cst$kw$y,(y1 + 0.16),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,0.15,cljs.core.cst$kw$font_DASH_family,"Ubuntu",cljs.core.cst$kw$color,col], null)], null),label], null):null)], null),(function (){var iter__7024__auto__ = ((function (col,bend_y){
return (function vide$components$edge_group_$_iter__26599(s__26600){
return (new cljs.core.LazySeq(null,((function (col,bend_y){
return (function (){
var s__26600__$1 = s__26600;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26600__$1);
if(temp__4657__auto__){
var s__26600__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26600__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26600__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26602 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26601 = (0);
while(true){
if((i__26601 < size__7023__auto__)){
var vec__26611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26601);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26611,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26611,(1),null);
cljs.core.chunk_append(b__26602,(function (){var arrowhead_x = ((0.4 * x1) + (0.6 * x2));
var arrowhead_y = ((0.4 * bend_y) + (0.6 * y2));
var th = (3.1416 + Math.atan(((x2 - x1) / (y2 - bend_y))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,x1,cljs.core.cst$kw$y1,bend_y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,col,cljs.core.cst$kw$stroke_DASH_width,0.016,cljs.core.cst$kw$opacity,(1)], null)], null)], null),vide.components.arrowhead_view(arrowhead_x,arrowhead_y,th,col)], null);
})());

var G__26617 = (i__26601 + (1));
i__26601 = G__26617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26602),vide$components$edge_group_$_iter__26599(cljs.core.chunk_rest(s__26600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26602),null);
}
} else {
var vec__26614 = cljs.core.first(s__26600__$2);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26614,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26614,(1),null);
return cljs.core.cons((function (){var arrowhead_x = ((0.4 * x1) + (0.6 * x2));
var arrowhead_y = ((0.4 * bend_y) + (0.6 * y2));
var th = (3.1416 + Math.atan(((x2 - x1) / (y2 - bend_y))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,x1,cljs.core.cst$kw$y1,bend_y,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stroke,col,cljs.core.cst$kw$stroke_DASH_width,0.016,cljs.core.cst$kw$opacity,(1)], null)], null)], null),vide.components.arrowhead_view(arrowhead_x,arrowhead_y,th,col)], null);
})(),vide$components$edge_group_$_iter__26599(cljs.core.rest(s__26600__$2)));
}
} else {
return null;
}
break;
}
});})(col,bend_y))
,null,null));
});})(col,bend_y))
;
return iter__7024__auto__(endpoints);
})()));
});
vide.components.separator_view = (function vide$components$separator_view(x,y,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(")")].join(''),cljs.core.cst$kw$width,w,cljs.core.cst$kw$height,h,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.01,cljs.core.cst$kw$stroke_DASH_dasharray,"0.01, 0.02",cljs.core.cst$kw$fill,"none"], null)], null);
});
vide.components.node_view2 = (function vide$components$node_view2(x,y,space,node){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str((x + (0.5 * ((1) - vide.components.node_w2)))),cljs.core.str(" "),cljs.core.str((y + (0.5 * ((1) - vide.components.node_h2)))),cljs.core.str(")")].join(''),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,node], null)))?(function (){
return vide.components.next_graph(space,node);
}):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,vide.components.node_h2,cljs.core.cst$kw$width,vide.components.node_w2,cljs.core.cst$kw$stroke_DASH_width,0.045,cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(0.06),cljs.core.str(" "),cljs.core.str(0.17),cljs.core.str(")")].join('')], null),node], null)], null);
});
vide.components.if_view = (function vide$components$if_view(if_model){
var map__26620 = if_model;
var map__26620__$1 = ((((!((map__26620 == null)))?((((map__26620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26620):map__26620);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$width);
var coords_rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$coords_DASH_rel);
var syms_used = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$syms_DASH_used);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$head);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,cljs.core.cst$kw$else);
var pred_height = vide.parser2.get_height(pred);
var else_width = vide.parser2.get_width(else$);
var then_width = vide.parser2.get_width(then);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate"),cljs.core.str(coords_rel)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,[cljs.core.str(head)].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,vide.components.separator_view((0),(0),width,height),vide.components.separator_view((0),pred_height,else_width,(height - pred_height)),vide.components.separator_view(else_width,pred_height,then_width,(height - pred_height)),pred,then,else$], null)], null);
});
vide.components.let_view = (function vide$components$let_view(let_model){
var map__26717 = let_model;
var map__26717__$1 = ((((!((map__26717 == null)))?((((map__26717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26717):map__26717);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$width);
var coords_rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$coords_DASH_rel);
var coords_abs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$coords_DASH_abs);
var syms_used = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$syms_DASH_used);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$head);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26717__$1,cljs.core.cst$kw$final);
var seqd = cljs.core.rest(cljs.core.tree_seq(((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function (p1__26622_SHARP_){
var and__6232__auto__ = cljs.core.map_QMARK_(p1__26622_SHARP_);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(p1__26622_SHARP_);
} else {
return and__6232__auto__;
}
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
,((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function (p1__26623_SHARP_){
var or__6244__auto__ = (function (){var temp__4657__auto__ = cljs.core.cst$kw$layers.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_);
if(cljs.core.truth_(temp__4657__auto__)){
var layers__$1 = temp__4657__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var iter__7024__auto__ = ((function (layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function vide$components$let_view_$_iter__26730(s__26731){
return (new cljs.core.LazySeq(null,((function (layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function (){
var s__26731__$1 = s__26731;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26731__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__26731__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function vide$components$let_view_$_iter__26730_$_iter__26732(s__26733){
return (new cljs.core.LazySeq(null,((function (s__26731__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$){
return (function (){
var s__26733__$1 = s__26733;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__26733__$1);
if(temp__4657__auto____$2){
var s__26733__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__26733__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26733__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26735 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26734 = (0);
while(true){
if((i__26734 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26734);
cljs.core.chunk_append(b__26735,cljs.core.second(pair));

var G__26810 = (i__26734 + (1));
i__26734 = G__26810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26735),vide$components$let_view_$_iter__26730_$_iter__26732(cljs.core.chunk_rest(s__26733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26735),null);
}
} else {
var pair = cljs.core.first(s__26733__$2);
return cljs.core.cons(cljs.core.second(pair),vide$components$let_view_$_iter__26730_$_iter__26732(cljs.core.rest(s__26733__$2)));
}
} else {
return null;
}
break;
}
});})(s__26731__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
,null,null));
});})(s__26731__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$let_view_$_iter__26730(cljs.core.rest(s__26731__$1)));
} else {
var G__26811 = cljs.core.rest(s__26731__$1);
s__26731__$1 = G__26811;
continue;
}
} else {
return null;
}
break;
}
});})(layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
,null,null));
});})(layers__$1,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
;
return iter__7024__auto__(layers__$1);
})(),cljs.core.cst$kw$final.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
var temp__4657__auto__ = cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_);
if(cljs.core.truth_(temp__4657__auto__)){
var pred = temp__4657__auto__;
return cljs.core.seq((function (){var x__7078__auto__ = pred;
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_);
return cljs.core._conj((function (){var x__7078__auto____$2 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(p1__26623_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})());
} else {
return null;
}
}
}
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$))
,let_model));
var all_pairs = (function (){var iter__7024__auto__ = ((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd){
return (function vide$components$let_view_$_iter__26741(s__26742){
return (new cljs.core.LazySeq(null,((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd){
return (function (){
var s__26742__$1 = s__26742;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26742__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__26742__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd){
return (function vide$components$let_view_$_iter__26741_$_iter__26743(s__26744){
return (new cljs.core.LazySeq(null,((function (s__26742__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd){
return (function (){
var s__26744__$1 = s__26744;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26744__$1);
if(temp__4657__auto____$1){
var s__26744__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26744__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26744__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26746 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26745 = (0);
while(true){
if((i__26745 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26745);
cljs.core.chunk_append(b__26746,pair);

var G__26812 = (i__26745 + (1));
i__26745 = G__26812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26746),vide$components$let_view_$_iter__26741_$_iter__26743(cljs.core.chunk_rest(s__26744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26746),null);
}
} else {
var pair = cljs.core.first(s__26744__$2);
return cljs.core.cons(pair,vide$components$let_view_$_iter__26741_$_iter__26743(cljs.core.rest(s__26744__$2)));
}
} else {
return null;
}
break;
}
});})(s__26742__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd))
,null,null));
});})(s__26742__$1,layer,xs__5205__auto__,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$let_view_$_iter__26741(cljs.core.rest(s__26742__$1)));
} else {
var G__26813 = cljs.core.rest(s__26742__$1);
s__26742__$1 = G__26813;
continue;
}
} else {
return null;
}
break;
}
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd))
,null,null));
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd))
;
return iter__7024__auto__(layers);
})();
var syms_removed = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pairs));
var edge_groups = (function (){var iter__7024__auto__ = ((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function vide$components$let_view_$_iter__26752(s__26753){
return (new cljs.core.LazySeq(null,((function (map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function (){
var s__26753__$1 = s__26753;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26753__$1);
if(temp__4657__auto__){
var s__26753__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26753__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26753__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26755 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26754 = (0);
while(true){
if((i__26754 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26754);
cljs.core.chunk_append(b__26755,(function (){var vec__26784 = pair;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26784,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26784,(1),null);
var vec__26787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$coords_DASH_rel);
var form_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26787,(0),null);
var form_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26787,(1),null);
var form_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$height);
var form_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$width);
var x1 = (form_x + (0.5 * form_width));
var y1 = (form_y + (form_height - (0.5 * ((1) - vide.components.node_h2))));
var targets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function (targ_form){
var temp__4657__auto____$1 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(targ_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var targ_id = temp__4657__auto____$1;
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([sym], true),(function (){var G__26790 = cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(targ_form);
return (targ_id.cljs$core$IFn$_invoke$arity$1 ? targ_id.cljs$core$IFn$_invoke$arity$1(G__26790) : targ_id.call(null,G__26790));
})());
} else {
return null;
}
});})(i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
,seqd);
var endpoints = (function (){var iter__7024__auto__ = ((function (i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,targets,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function vide$components$let_view_$_iter__26752_$_iter__26791(s__26792){
return (new cljs.core.LazySeq(null,((function (i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,targets,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function (){
var s__26792__$1 = s__26792;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26792__$1);
if(temp__4657__auto____$1){
var s__26792__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26792__$2)){
var c__7022__auto____$1 = cljs.core.chunk_first(s__26792__$2);
var size__7023__auto____$1 = cljs.core.count(c__7022__auto____$1);
var b__26794 = cljs.core.chunk_buffer(size__7023__auto____$1);
if((function (){var i__26793 = (0);
while(true){
if((i__26793 < size__7023__auto____$1)){
var target = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto____$1,i__26793);
cljs.core.chunk_append(b__26794,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * vide.parser2.get_width(target)),(vide.parser2.get_height(target) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$coords_DASH_abs),coords_abs)));

var G__26814 = (i__26793 + (1));
i__26793 = G__26814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26794),vide$components$let_view_$_iter__26752_$_iter__26791(cljs.core.chunk_rest(s__26792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26794),null);
}
} else {
var target = cljs.core.first(s__26792__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * vide.parser2.get_width(target)),(vide.parser2.get_height(target) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$coords_DASH_abs),coords_abs)),vide$components$let_view_$_iter__26752_$_iter__26791(cljs.core.rest(s__26792__$2)));
}
} else {
return null;
}
break;
}
});})(i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,targets,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
,null,null));
});})(i__26754,vec__26784,sym,form,vec__26787,form_x,form_y,form_height,form_width,x1,y1,targets,pair,c__7022__auto__,size__7023__auto__,b__26755,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
;
return iter__7024__auto__(targets);
})();
var edge_group = vide.components.edge_group(x1,y1,endpoints,sym);
return edge_group;
})());

var G__26815 = (i__26754 + (1));
i__26754 = G__26815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26755),vide$components$let_view_$_iter__26752(cljs.core.chunk_rest(s__26753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26755),null);
}
} else {
var pair = cljs.core.first(s__26753__$2);
return cljs.core.cons((function (){var vec__26797 = pair;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26797,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26797,(1),null);
var vec__26800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$coords_DASH_rel);
var form_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26800,(0),null);
var form_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26800,(1),null);
var form_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$height);
var form_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$width);
var x1 = (form_x + (0.5 * form_width));
var y1 = (form_y + (form_height - (0.5 * ((1) - vide.components.node_h2))));
var targets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function (targ_form){
var temp__4657__auto____$1 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(targ_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var targ_id = temp__4657__auto____$1;
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([sym], true),(function (){var G__26803 = cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(targ_form);
return (targ_id.cljs$core$IFn$_invoke$arity$1 ? targ_id.cljs$core$IFn$_invoke$arity$1(G__26803) : targ_id.call(null,G__26803));
})());
} else {
return null;
}
});})(vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
,seqd);
var endpoints = (function (){var iter__7024__auto__ = ((function (vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,targets,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function vide$components$let_view_$_iter__26752_$_iter__26804(s__26805){
return (new cljs.core.LazySeq(null,((function (vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,targets,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed){
return (function (){
var s__26805__$1 = s__26805;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__26805__$1);
if(temp__4657__auto____$1){
var s__26805__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26805__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26805__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26807 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26806 = (0);
while(true){
if((i__26806 < size__7023__auto__)){
var target = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26806);
cljs.core.chunk_append(b__26807,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * vide.parser2.get_width(target)),(vide.parser2.get_height(target) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$coords_DASH_abs),coords_abs)));

var G__26816 = (i__26806 + (1));
i__26806 = G__26816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26807),vide$components$let_view_$_iter__26752_$_iter__26804(cljs.core.chunk_rest(s__26805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26807),null);
}
} else {
var target = cljs.core.first(s__26805__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * vide.parser2.get_width(target)),(vide.parser2.get_height(target) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,cljs.core.get.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$coords_DASH_abs),coords_abs)),vide$components$let_view_$_iter__26752_$_iter__26804(cljs.core.rest(s__26805__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,targets,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
,null,null));
});})(vec__26797,sym,form,vec__26800,form_x,form_y,form_height,form_width,x1,y1,targets,pair,s__26753__$2,temp__4657__auto__,map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
;
return iter__7024__auto__(targets);
})();
var edge_group = vide.components.edge_group(x1,y1,endpoints,sym);
return edge_group;
})(),vide$components$let_view_$_iter__26752(cljs.core.rest(s__26753__$2)));
}
} else {
return null;
}
break;
}
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
,null,null));
});})(map__26717,map__26717__$1,height,width,coords_rel,coords_abs,syms_used,head,layers,final$,seqd,all_pairs,syms_removed))
;
return iter__7024__auto__(all_pairs);
})();
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate"),cljs.core.str(coords_rel)].join('')], null)], null),edge_groups,cljs.core.array_seq([syms_removed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [final$], null)], 0)));
});
vide.components.basic_view = (function vide$components$basic_view(space,basic_model){
var map__26844 = basic_model;
var map__26844__$1 = ((((!((map__26844 == null)))?((((map__26844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26844):map__26844);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$width);
var coords_rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$coords_DASH_rel);
var coords_abs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$coords_DASH_abs);
var syms_used = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$syms_DASH_used);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$head);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26844__$1,cljs.core.cst$kw$forms);
var head_x = ((0.5 * width) - 0.5);
var head_y = (height - (1));
var form_coords_abs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$coords_DASH_abs,forms));
var form_coords_rel = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs){
return (function (p1__26817_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,p1__26817_SHARP_,coords_abs);
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs))
,form_coords_abs);
var form_head_coords_rel = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel){
return (function (form){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$width);
if(cljs.core.truth_(temp__4657__auto__)){
var width__$1 = temp__4657__auto__;
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((0.5 * width__$1) - 0.5),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$height) - (1))],null));
} else {
return null;
}
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel))
,forms));
var arrow_starts = (function (){var iter__7024__auto__ = ((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel){
return (function vide$components$basic_view_$_iter__26846(s__26847){
return (new cljs.core.LazySeq(null,((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel){
return (function (){
var s__26847__$1 = s__26847;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26847__$1);
if(temp__4657__auto__){
var s__26847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26847__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26847__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26849 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26848 = (0);
while(true){
if((i__26848 < size__7023__auto__)){
var rel = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26848);
cljs.core.chunk_append(b__26849,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,((1) - (0.5 * ((1) - vide.components.node_h2)))], null),rel));

var G__26870 = (i__26848 + (1));
i__26848 = G__26870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26849),vide$components$basic_view_$_iter__26846(cljs.core.chunk_rest(s__26847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26849),null);
}
} else {
var rel = cljs.core.first(s__26847__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,((1) - (0.5 * ((1) - vide.components.node_h2)))], null),rel),vide$components$basic_view_$_iter__26846(cljs.core.rest(s__26847__$2)));
}
} else {
return null;
}
break;
}
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel))
,null,null));
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel))
;
return iter__7024__auto__(form_head_coords_rel);
})();
var edge_groups = (function (){var iter__7024__auto__ = ((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel,arrow_starts){
return (function vide$components$basic_view_$_iter__26852(s__26853){
return (new cljs.core.LazySeq(null,((function (map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel,arrow_starts){
return (function (){
var s__26853__$1 = s__26853;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26853__$1);
if(temp__4657__auto__){
var s__26853__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26853__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__26853__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__26855 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__26854 = (0);
while(true){
if((i__26854 < size__7023__auto__)){
var vec__26864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__26854);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26864,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26864,(1),null);
cljs.core.chunk_append(b__26855,vide.components.edge_group(x1,y1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(head_x + 0.5),(head_y + (0.5 * ((1) - vide.components.node_h2)))], null)], null),null));

var G__26871 = (i__26854 + (1));
i__26854 = G__26871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26855),vide$components$basic_view_$_iter__26852(cljs.core.chunk_rest(s__26853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26855),null);
}
} else {
var vec__26867 = cljs.core.first(s__26853__$2);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26867,(1),null);
return cljs.core.cons(vide.components.edge_group(x1,y1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(head_x + 0.5),(head_y + (0.5 * ((1) - vide.components.node_h2)))], null)], null),null),vide$components$basic_view_$_iter__26852(cljs.core.rest(s__26853__$2)));
}
} else {
return null;
}
break;
}
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel,arrow_starts))
,null,null));
});})(map__26844,map__26844__$1,height,width,coords_rel,coords_abs,syms_used,head,forms,head_x,head_y,form_coords_abs,form_coords_rel,form_head_coords_rel,arrow_starts))
;
return iter__7024__auto__(arrow_starts);
})();
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate"),cljs.core.str(coords_rel)].join('')], null)], null),forms,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.node_view2(head_x,head_y,space,[cljs.core.str(head)].join(''))], null),edge_groups], 0)));
});
vide.components.arg_input = (function vide$components$arg_input(x,ratio_w,ratio_h,arg,arg_sym,space,current_node){
var input_x = (ratio_w * (x - (0.5 * vide.components.node_w2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(function (){var or__6244__auto__ = cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.cst$kw$raw_DASH_input.cljs$core$IFn$_invoke$arity$1(arg);
}
})(),cljs.core.cst$kw$on_DASH_change,((function (input_x){
return (function (this$){
var raw_input = this$.target.value;
var evaluation = vide.helpers.try_read(raw_input);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.namespaces_atom,((function (raw_input,evaluation,input_x){
return (function (namespaces_atom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(namespaces_atom,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,current_node,cljs.core.cst$kw$model,(0),arg_sym], null),((function (raw_input,evaluation,input_x){
return (function (p1__26872_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26872_SHARP_,cljs.core.cst$kw$raw_DASH_input,raw_input,cljs.core.array_seq([cljs.core.cst$kw$evaluation,evaluation], 0));
});})(raw_input,evaluation,input_x))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,current_node,cljs.core.cst$kw$model], null),((function (raw_input,evaluation,input_x){
return (function (p1__26873_SHARP_){
return vide.propagation.model_update_arg_input(p1__26873_SHARP_,arg_sym,raw_input,evaluation);
});})(raw_input,evaluation,input_x))
);
});})(raw_input,evaluation,input_x))
);
});})(input_x))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,x,cljs.core.cst$kw$top,(0),cljs.core.cst$kw$width,(ratio_h * vide.components.node_w2),cljs.core.cst$kw$height,((ratio_h * vide.components.node_h2) * 0.25),cljs.core.cst$kw$font_DASH_size,((ratio_h * vide.components.node_h2) * 0.25)], null)], null)], null);
});
vide.components.input_view2 = (function vide$components$input_view2(current_space,current_node,input_inner,head_x,head_y,ratio_w,ratio_h){
var map__26877 = input_inner;
var map__26877__$1 = ((((!((map__26877 == null)))?((((map__26877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26877):map__26877);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,cljs.core.cst$kw$id);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,cljs.core.cst$kw$forms);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,cljs.core.cst$kw$head);
var input_x = (ratio_w * ((0.5 * vide.parser2.get_width(input_inner)) - (0.5 * vide.components.node_w2)));
var input_y = (ratio_h * (vide.parser2.get_height(input_inner) - (0.5 * ((1) - vide.components.node_h2))));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,head_y,cljs.core.cst$kw$left,head_x], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,[cljs.core.str((function (){var or__6244__auto__ = cljs.core.cst$kw$evaluation.cljs$core$IFn$_invoke$arity$1(input_inner);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.cst$kw$raw_DASH_input.cljs$core$IFn$_invoke$arity$1(input_inner);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
return "";
}
}
})())].join(''),cljs.core.cst$kw$on_DASH_change,((function (map__26877,map__26877__$1,id,forms,head,input_x,input_y){
return (function (this$){
var raw_input = this$.target.value;
var evaluation = vide.helpers.try_read(raw_input);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(vide.components.namespaces_atom,((function (raw_input,evaluation,map__26877,map__26877__$1,id,forms,head,input_x,input_y){
return (function (namespaces_atom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(namespaces_atom,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_space,current_node,cljs.core.cst$kw$model], null),((function (raw_input,evaluation,map__26877,map__26877__$1,id,forms,head,input_x,input_y){
return (function (p1__26874_SHARP_){
return vide.propagation.model_update_input(p1__26874_SHARP_,id,raw_input,evaluation);
});})(raw_input,evaluation,map__26877,map__26877__$1,id,forms,head,input_x,input_y))
);
});})(raw_input,evaluation,map__26877,map__26877__$1,id,forms,head,input_x,input_y))
);
});})(map__26877,map__26877__$1,id,forms,head,input_x,input_y))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,input_x,cljs.core.cst$kw$top,input_y,cljs.core.cst$kw$width,(ratio_h * vide.components.node_w2),cljs.core.cst$kw$height,((ratio_h * vide.components.node_h2) * 0.25),cljs.core.cst$kw$font_DASH_size,((ratio_h * vide.components.node_h2) * 0.25)], null)], null)], null)], null),forms));
});
vide.components.graph_view2 = (function vide$components$graph_view2(current_space,current_node){
var vec__27002 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_space,current_node,cljs.core.cst$kw$model], null));
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,(1),null);
var arg_syms = cljs.core.keys(args);
var svg_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(model,cljs.core.cst$kw$height);
var svg_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(model,cljs.core.cst$kw$width);
var seqd_model = cljs.core.tree_seq(((function (vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function (p1__26879_SHARP_){
var and__6232__auto__ = cljs.core.map_QMARK_(p1__26879_SHARP_);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(p1__26879_SHARP_);
} else {
return and__6232__auto__;
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width))
,((function (vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function (p1__26880_SHARP_){
var or__6244__auto__ = (function (){var temp__4657__auto__ = cljs.core.cst$kw$layers.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_);
if(cljs.core.truth_(temp__4657__auto__)){
var layers = temp__4657__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var iter__7024__auto__ = ((function (layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function vide$components$graph_view2_$_iter__27016(s__27017){
return (new cljs.core.LazySeq(null,((function (layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function (){
var s__27017__$1 = s__27017;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27017__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__27017__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function vide$components$graph_view2_$_iter__27016_$_iter__27018(s__27019){
return (new cljs.core.LazySeq(null,((function (s__27017__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width){
return (function (){
var s__27019__$1 = s__27019;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__27019__$1);
if(temp__4657__auto____$2){
var s__27019__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__27019__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27019__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27021 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27020 = (0);
while(true){
if((i__27020 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27020);
cljs.core.chunk_append(b__27021,cljs.core.second(pair));

var G__27122 = (i__27020 + (1));
i__27020 = G__27122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27021),vide$components$graph_view2_$_iter__27016_$_iter__27018(cljs.core.chunk_rest(s__27019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27021),null);
}
} else {
var pair = cljs.core.first(s__27019__$2);
return cljs.core.cons(cljs.core.second(pair),vide$components$graph_view2_$_iter__27016_$_iter__27018(cljs.core.rest(s__27019__$2)));
}
} else {
return null;
}
break;
}
});})(s__27017__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width))
,null,null));
});})(s__27017__$1,layer,xs__5205__auto__,temp__4657__auto____$1,layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$graph_view2_$_iter__27016(cljs.core.rest(s__27017__$1)));
} else {
var G__27123 = cljs.core.rest(s__27017__$1);
s__27017__$1 = G__27123;
continue;
}
} else {
return null;
}
break;
}
});})(layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width))
,null,null));
});})(layers,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width))
;
return iter__7024__auto__(layers);
})(),cljs.core.cst$kw$final.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
var or__6244__auto____$1 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_);
if(cljs.core.truth_(or__6244__auto____$1)){
return or__6244__auto____$1;
} else {
var temp__4657__auto__ = cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_);
if(cljs.core.truth_(temp__4657__auto__)){
var pred = temp__4657__auto__;
return cljs.core.seq((function (){var x__7078__auto__ = pred;
return cljs.core._conj((function (){var x__7078__auto____$1 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_);
return cljs.core._conj((function (){var x__7078__auto____$2 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(p1__26880_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7078__auto____$2);
})(),x__7078__auto____$1);
})(),x__7078__auto__);
})());
} else {
return null;
}
}
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width))
,model);
var arg_edges = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__7024__auto__ = ((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model){
return (function vide$components$graph_view2_$_iter__27027(s__27028){
return (new cljs.core.LazySeq(null,((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model){
return (function (){
var s__27028__$1 = s__27028;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27028__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__27028__$1,i,xs__5205__auto__,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model){
return (function vide$components$graph_view2_$_iter__27027_$_iter__27029(s__27030){
return (new cljs.core.LazySeq(null,((function (s__27028__$1,i,xs__5205__auto__,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model){
return (function (){
var s__27030__$1 = s__27030;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27030__$1);
if(temp__4657__auto____$1){
var s__27030__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27030__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27030__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27032 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27031 = (0);
while(true){
if((i__27031 < size__7023__auto__)){
var inner = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27031);
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i)], true),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner).call(null,cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner)));
} else {
return and__6232__auto__;
}
})())){
cljs.core.chunk_append(b__27032,(function (){var vec__27074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$coords_DASH_abs);
var model_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(0),null);
var model_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(1),null);
var vec__27077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0.5 * vide.parser2.get_width(inner)) + model_x),((vide.parser2.get_height(inner) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2)))) + model_y)], null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(1),null);
var x1 = ((i + (1)) * (svg_width / (cljs.core.count(arg_syms) + (1))));
var y1 = (0);
return vide.components.edge_group(x1,y1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i));
})());

var G__27124 = (i__27031 + (1));
i__27031 = G__27124;
continue;
} else {
var G__27125 = (i__27031 + (1));
i__27031 = G__27125;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27032),vide$components$graph_view2_$_iter__27027_$_iter__27029(cljs.core.chunk_rest(s__27030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27032),null);
}
} else {
var inner = cljs.core.first(s__27030__$2);
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i)], true),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(inner).call(null,cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner)));
} else {
return and__6232__auto__;
}
})())){
return cljs.core.cons((function (){var vec__27080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$coords_DASH_abs);
var model_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(0),null);
var model_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(1),null);
var vec__27083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0.5 * vide.parser2.get_width(inner)) + model_x),((vide.parser2.get_height(inner) - (vide.components.node_h2 + (0.5 * ((1) - vide.components.node_h2)))) + model_y)], null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(1),null);
var x1 = ((i + (1)) * (svg_width / (cljs.core.count(arg_syms) + (1))));
var y1 = (0);
return vide.components.edge_group(x1,y1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i));
})(),vide$components$graph_view2_$_iter__27027_$_iter__27029(cljs.core.rest(s__27030__$2)));
} else {
var G__27126 = cljs.core.rest(s__27030__$2);
s__27030__$1 = G__27126;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__27028__$1,i,xs__5205__auto__,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model))
,null,null));
});})(s__27028__$1,i,xs__5205__auto__,temp__4657__auto__,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(seqd_model));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$graph_view2_$_iter__27027(cljs.core.rest(s__27028__$1)));
} else {
var G__27127 = cljs.core.rest(s__27028__$1);
s__27028__$1 = G__27127;
continue;
}
} else {
return null;
}
break;
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model))
,null,null));
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_syms)));
})()));
var svg_inner = ((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges){
return (function (p1__26881_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,p1__26881_SHARP_),arg_edges);
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges))
.call(null,clojure.walk.prewalk(((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges){
return (function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
var head = cljs.core.cst$kw$head.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
return vide.components.if_view(inner);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
return vide.components.let_view(inner);
} else {
if(cljs.core.ifn_QMARK_(head)){
return vide.components.basic_view(current_space,inner);
} else {
return null;
}
}
}
} else {
return inner;
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges))
,model));
var graph_view = document.getElementById("graph-view");
var graph_width = (function (){try{return graph_view.clientWidth;
}catch (e27086){if((e27086 instanceof Error)){
var je = e27086;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("caught js exception in clientHeight: "),cljs.core.str(je)].join('')], 0));
} else {
throw e27086;

}
}})();
var graph_height = (function (){try{return graph_view.clientHeight;
}catch (e27087){if((e27087 instanceof Error)){
var je = e27087;
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("caught js exception in clientHeight: "),cljs.core.str(je)].join('')], 0));
} else {
throw e27087;

}
}})();
var ratio_h = (graph_height / svg_height);
var ratio_w = ratio_h;
var arg_inputs = (function (){var iter__7024__auto__ = ((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w){
return (function vide$components$graph_view2_$_iter__27088(s__27089){
return (new cljs.core.LazySeq(null,((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w){
return (function (){
var s__27089__$1 = s__27089;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27089__$1);
if(temp__4657__auto__){
var s__27089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27089__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27089__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27091 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27090 = (0);
while(true){
if((i__27090 < size__7023__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27090);
cljs.core.chunk_append(b__27091,(function (){var arg_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i);
var map__27098 = (args.cljs$core$IFn$_invoke$arity$1 ? args.cljs$core$IFn$_invoke$arity$1(arg_sym) : args.call(null,arg_sym));
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27098):map__27098);
var arg = map__27098__$1;
var raw_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$raw_DASH_input);
var evaluation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27098__$1,cljs.core.cst$kw$evalution);
var x = ((i + (1)) * (graph_width / (cljs.core.count(arg_syms) + (1))));
return vide.components.arg_input(x,ratio_w,ratio_h,arg,arg_sym,current_space,current_node);
})());

var G__27128 = (i__27090 + (1));
i__27090 = G__27128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27091),vide$components$graph_view2_$_iter__27088(cljs.core.chunk_rest(s__27089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27091),null);
}
} else {
var i = cljs.core.first(s__27089__$2);
return cljs.core.cons((function (){var arg_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_syms,i);
var map__27100 = (args.cljs$core$IFn$_invoke$arity$1 ? args.cljs$core$IFn$_invoke$arity$1(arg_sym) : args.call(null,arg_sym));
var map__27100__$1 = ((((!((map__27100 == null)))?((((map__27100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27100):map__27100);
var arg = map__27100__$1;
var raw_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27100__$1,cljs.core.cst$kw$raw_DASH_input);
var evaluation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27100__$1,cljs.core.cst$kw$evalution);
var x = ((i + (1)) * (graph_width / (cljs.core.count(arg_syms) + (1))));
return vide.components.arg_input(x,ratio_w,ratio_h,arg,arg_sym,current_space,current_node);
})(),vide$components$graph_view2_$_iter__27088(cljs.core.rest(s__27089__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w))
,null,null));
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args)));
})();
var inputs = clojure.walk.prewalk(((function (vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs){
return (function (inner){
if(cljs.core.truth_((function (){var and__6232__auto__ = cljs.core.map_QMARK_(inner);
if(and__6232__auto__){
return cljs.core.cst$kw$syms_DASH_used.cljs$core$IFn$_invoke$arity$1(inner);
} else {
return and__6232__auto__;
}
})())){
var map__27102 = inner;
var map__27102__$1 = ((((!((map__27102 == null)))?((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27102):map__27102);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$head);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$width);
var coords_rel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$coords_DASH_rel);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27102__$1,cljs.core.cst$kw$id);
var vec__27103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner,cljs.core.cst$kw$coords_DASH_rel);
var x_model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(0),null);
var y_model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27103,(1),null);
var x_actual = (x_model * ratio_w);
var y_actual = (y_model * ratio_h);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$if)){
var map__27107 = inner;
var map__27107__$1 = ((((!((map__27107 == null)))?((((map__27107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27107):map__27107);
var syms_used = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$syms_DASH_used);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$pred);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27107__$1,cljs.core.cst$kw$else);
var pred_height = vide.parser2.get_height(pred);
var else_width = vide.parser2.get_width(else$);
var then_width = vide.parser2.get_width(then);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,y_actual,cljs.core.cst$kw$left,x_actual], null)], null),pred,then,else$], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$let)){
var map__27109 = inner;
var map__27109__$1 = ((((!((map__27109 == null)))?((((map__27109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27109):map__27109);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,cljs.core.cst$kw$layers);
var final$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,cljs.core.cst$kw$final);
var all_pairs = (function (){var iter__7024__auto__ = ((function (map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs){
return (function vide$components$graph_view2_$_iter__27111(s__27112){
return (new cljs.core.LazySeq(null,((function (map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs){
return (function (){
var s__27112__$1 = s__27112;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27112__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var layer = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__27112__$1,layer,xs__5205__auto__,temp__4657__auto__,map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs){
return (function vide$components$graph_view2_$_iter__27111_$_iter__27113(s__27114){
return (new cljs.core.LazySeq(null,((function (s__27112__$1,layer,xs__5205__auto__,temp__4657__auto__,map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs){
return (function (){
var s__27114__$1 = s__27114;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27114__$1);
if(temp__4657__auto____$1){
var s__27114__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27114__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27114__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27116 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27115 = (0);
while(true){
if((i__27115 < size__7023__auto__)){
var pair = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27115);
cljs.core.chunk_append(b__27116,pair);

var G__27129 = (i__27115 + (1));
i__27115 = G__27129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27116),vide$components$graph_view2_$_iter__27111_$_iter__27113(cljs.core.chunk_rest(s__27114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27116),null);
}
} else {
var pair = cljs.core.first(s__27114__$2);
return cljs.core.cons(pair,vide$components$graph_view2_$_iter__27111_$_iter__27113(cljs.core.rest(s__27114__$2)));
}
} else {
return null;
}
break;
}
});})(s__27112__$1,layer,xs__5205__auto__,temp__4657__auto__,map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs))
,null,null));
});})(s__27112__$1,layer,xs__5205__auto__,temp__4657__auto__,map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(layer));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$graph_view2_$_iter__27111(cljs.core.rest(s__27112__$1)));
} else {
var G__27130 = cljs.core.rest(s__27112__$1);
s__27112__$1 = G__27130;
continue;
}
} else {
return null;
}
break;
}
});})(map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs))
,null,null));
});})(map__27109,map__27109__$1,layers,final$,map__27102,map__27102__$1,head,height,width,coords_rel,id,vec__27103,x_model,y_model,x_actual,y_actual,vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs))
;
return iter__7024__auto__(layers);
})();
var syms_removed = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,all_pairs));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,y_actual,cljs.core.cst$kw$left,x_actual], null)], null)], null),syms_removed,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [final$], null)], 0)));
} else {
if(cljs.core.ifn_QMARK_(head)){
return vide.components.input_view2(current_space,current_node,inner,x_actual,y_actual,ratio_w,ratio_h);
} else {
return null;
}
}
}
} else {
return inner;
}
});})(vec__27002,args,model,arg_syms,svg_height,svg_width,seqd_model,arg_edges,svg_inner,graph_view,graph_width,graph_height,ratio_h,ratio_w,arg_inputs))
,model);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"graph-view",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"80%",cljs.core.cst$kw$position,"relative"], null)], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$font_DASH_size,0.12], null)], null),inputs], null),arg_inputs)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$view_DASH_box,[cljs.core.str((((svg_width < (3)))?((svg_width / (2)) - 1.5):(0))),cljs.core.str(" "),cljs.core.str((((svg_height < (3)))?((svg_height / (2)) - 1.5):(0))),cljs.core.str(" "),cljs.core.str((function (){var x__6575__auto__ = (3);
var y__6576__auto__ = svg_width;
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})()),cljs.core.str(" "),cljs.core.str((function (){var x__6575__auto__ = (3);
var y__6576__auto__ = svg_height;
return ((x__6575__auto__ > y__6576__auto__) ? x__6575__auto__ : y__6576__auto__);
})())].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$font_DASH_size,0.12], null)], null),svg_inner], null)], null);
});
vide.components.folder_view = (function vide$components$folder_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"folder-view",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"80%",cljs.core.cst$kw$position,"relative"], null)], null),(function (){var folder_vec = cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)));
var rows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((4),folder_vec)));
var n_rows = cljs.core.count(rows);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$view_DASH_box,[cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((4)),cljs.core.str(" "),cljs.core.str(n_rows)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$font_DASH_size,0.15], null)], null)], null),(function (){var iter__7024__auto__ = ((function (folder_vec,rows,n_rows){
return (function vide$components$folder_view_$_iter__27142(s__27143){
return (new cljs.core.LazySeq(null,((function (folder_vec,rows,n_rows){
return (function (){
var s__27143__$1 = s__27143;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27143__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__27143__$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows){
return (function vide$components$folder_view_$_iter__27142_$_iter__27144(s__27145){
return (new cljs.core.LazySeq(null,((function (s__27143__$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows){
return (function (){
var s__27145__$1 = s__27145;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27145__$1);
if(temp__4657__auto____$1){
var s__27145__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27145__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27145__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27147 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27146 = (0);
while(true){
if((i__27146 < size__7023__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27146);
cljs.core.chunk_append(b__27147,(function (){var space = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(((0.5 * vide.components.node_w2) + j)),cljs.core.str(" "),cljs.core.str(((0.5 * vide.components.node_h2) + i)),cljs.core.str(")")].join(''),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),space))?((function (i__27146,s__27143__$1,space,j,c__7022__auto__,size__7023__auto__,b__27147,s__27145__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows){
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("moving to "),cljs.core.str(space)].join('')], 0));

return vide.components.next_graph(space,null);
});})(i__27146,s__27143__$1,space,j,c__7022__auto__,size__7023__auto__,b__27147,s__27145__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,vide.components.node_h2,cljs.core.cst$kw$width,vide.components.node_w2,cljs.core.cst$kw$stroke_DASH_width,0.045,cljs.core.cst$kw$stroke,"#3399ff",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(0.06),cljs.core.str(" "),cljs.core.str(0.17),cljs.core.str(")")].join('')], null),space], null)], null);
})());

var G__27153 = (i__27146 + (1));
i__27146 = G__27153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27147),vide$components$folder_view_$_iter__27142_$_iter__27144(cljs.core.chunk_rest(s__27145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27147),null);
}
} else {
var j = cljs.core.first(s__27145__$2);
return cljs.core.cons((function (){var space = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(((0.5 * vide.components.node_w2) + j)),cljs.core.str(" "),cljs.core.str(((0.5 * vide.components.node_h2) + i)),cljs.core.str(")")].join(''),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)),space))?((function (s__27143__$1,space,j,s__27145__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows){
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("moving to "),cljs.core.str(space)].join('')], 0));

return vide.components.next_graph(space,null);
});})(s__27143__$1,space,j,s__27145__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows))
:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,vide.components.node_h2,cljs.core.cst$kw$width,vide.components.node_w2,cljs.core.cst$kw$stroke_DASH_width,0.045,cljs.core.cst$kw$stroke,"#3399ff",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("translate("),cljs.core.str(0.06),cljs.core.str(" "),cljs.core.str(0.17),cljs.core.str(")")].join('')], null),space], null)], null);
})(),vide$components$folder_view_$_iter__27142_$_iter__27144(cljs.core.rest(s__27145__$2)));
}
} else {
return null;
}
break;
}
});})(s__27143__$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows))
,null,null));
});})(s__27143__$1,i,xs__5205__auto__,temp__4657__auto__,folder_vec,rows,n_rows))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i)))));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$folder_view_$_iter__27142(cljs.core.rest(s__27143__$1)));
} else {
var G__27154 = cljs.core.rest(s__27143__$1);
s__27143__$1 = G__27154;
continue;
}
} else {
return null;
}
break;
}
});})(folder_vec,rows,n_rows))
,null,null));
});})(folder_vec,rows,n_rows))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
})()));
})()], null);
});
vide.components.namespace_view = (function vide$components$namespace_view(space_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"namespace-view",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"80%",cljs.core.cst$kw$position,"relative"], null)], null),(function (){var space = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.namespaces_atom) : cljs.core.deref.call(null,vide.components.namespaces_atom)).call(null,space_name));
var rows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((4),space)));
var n_rows = cljs.core.count(rows);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$view_DASH_box,[cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((0)),cljs.core.str(" "),cljs.core.str((4)),cljs.core.str(" "),cljs.core.str(n_rows)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$font_DASH_size,0.15], null)], null)], null),(function (){var iter__7024__auto__ = ((function (space,rows,n_rows){
return (function vide$components$namespace_view_$_iter__27190(s__27191){
return (new cljs.core.LazySeq(null,((function (space,rows,n_rows){
return (function (){
var s__27191__$1 = s__27191;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27191__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first(xs__5205__auto__);
var iterys__7020__auto__ = ((function (s__27191__$1,i,xs__5205__auto__,temp__4657__auto__,space,rows,n_rows){
return (function vide$components$namespace_view_$_iter__27190_$_iter__27192(s__27193){
return (new cljs.core.LazySeq(null,((function (s__27191__$1,i,xs__5205__auto__,temp__4657__auto__,space,rows,n_rows){
return (function (){
var s__27193__$1 = s__27193;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27193__$1);
if(temp__4657__auto____$1){
var s__27193__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27193__$2)){
var c__7022__auto__ = cljs.core.chunk_first(s__27193__$2);
var size__7023__auto__ = cljs.core.count(c__7022__auto__);
var b__27195 = cljs.core.chunk_buffer(size__7023__auto__);
if((function (){var i__27194 = (0);
while(true){
if((i__27194 < size__7023__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7022__auto__,i__27194);
cljs.core.chunk_append(b__27195,(function (){var vec__27219 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
var node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27219,(0),null);
var dict = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27219,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.node_view2,j,i,space_name,node_name], null);
})());

var G__27225 = (i__27194 + (1));
i__27194 = G__27225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27195),vide$components$namespace_view_$_iter__27190_$_iter__27192(cljs.core.chunk_rest(s__27193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27195),null);
}
} else {
var j = cljs.core.first(s__27193__$2);
return cljs.core.cons((function (){var vec__27222 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
var node_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27222,(0),null);
var dict = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27222,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.node_view2,j,i,space_name,node_name], null);
})(),vide$components$namespace_view_$_iter__27190_$_iter__27192(cljs.core.rest(s__27193__$2)));
}
} else {
return null;
}
break;
}
});})(s__27191__$1,i,xs__5205__auto__,temp__4657__auto__,space,rows,n_rows))
,null,null));
});})(s__27191__$1,i,xs__5205__auto__,temp__4657__auto__,space,rows,n_rows))
;
var fs__7021__auto__ = cljs.core.seq(iterys__7020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i)))));
if(fs__7021__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7021__auto__,vide$components$namespace_view_$_iter__27190(cljs.core.rest(s__27191__$1)));
} else {
var G__27226 = cljs.core.rest(s__27191__$1);
s__27191__$1 = G__27226;
continue;
}
} else {
return null;
}
break;
}
});})(space,rows,n_rows))
,null,null));
});})(space,rows,n_rows))
;
return iter__7024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
})()));
})()], null);
});
vide.components.focus_view = (function vide$components$focus_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,(0),cljs.core.cst$kw$top,(0),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$float,"top",cljs.core.cst$kw$height,"20%",cljs.core.cst$kw$width,"100%"], null)], null),vide.components.button_view("Up",(function (){
return vide.components.prev_graph();
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(30),cljs.core.cst$kw$left,(30),cljs.core.cst$kw$font_DASH_size,(30),cljs.core.cst$kw$font_DASH_family,"Ubuntu"], null)], null),cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.node_history_atom) : cljs.core.deref.call(null,vide.components.node_history_atom)))], null)], null),(function (){var temp__4655__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.node_history_atom) : cljs.core.deref.call(null,vide.components.node_history_atom)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27230 = temp__4655__auto__;
var space_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(1),null);
if(cljs.core.truth_(node)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.graph_view2,space_name,node], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.namespace_view,space_name], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.folder_view], null);
}
})()], null);
});
vide.components.editor_view = (function vide$components$editor_view(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["rendering editor view"], 0));

return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reagent_DASH_render,(function (){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vide.components.cm_atom) : cljs.core.deref.call(null,vide.components.cm_atom));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"cm-wrapper",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$border_DASH_right,"solid grey 2px"], null)], null)], null);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,vide.components.update_editor("cm-wrapper"),cljs.core.cst$kw$component_DASH_did_DASH_mount,vide.components.update_editor("cm-wrapper")], null));
});
