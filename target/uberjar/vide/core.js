// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('vide.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('vide.drawer');
goog.require('reagent.session');
goog.require('vide.parser');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('accountant.core');
goog.require('vide.helpers');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('vide.components');
vide.core.dummy_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
vide.core.home_page = (function vide$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.components.editor_view], null),vide.components.focus_view()], null);
});
vide.core.about_page = (function vide$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"About vide"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),"go to the home page"], null)], null)], null);
});
vide.core.current_page = (function vide$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null);
});
var action__25677__auto___27240 = (function (params__25678__auto__){
if(cljs.core.map_QMARK_(params__25678__auto__)){
var map__27235 = params__25678__auto__;
var map__27235__$1 = ((((!((map__27235 == null)))?((((map__27235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27235):map__27235);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return vide.core.home_page;},cljs.core.cst$sym$vide$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$vide$core,cljs.core.cst$sym$home_DASH_page,"/home/peter/vide/src/cljs/vide/core.cljs",16,1,20,20,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vide.core.home_page)?vide.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__25678__auto__)){
var vec__27237 = params__25678__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return vide.core.home_page;},cljs.core.cst$sym$vide$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$vide$core,cljs.core.cst$sym$home_DASH_page,"/home/peter/vide/src/cljs/vide/core.cljs",16,1,20,20,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vide.core.home_page)?vide.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__25677__auto___27240);

var action__25677__auto___27246 = (function (params__25678__auto__){
if(cljs.core.map_QMARK_(params__25678__auto__)){
var map__27241 = params__25678__auto__;
var map__27241__$1 = ((((!((map__27241 == null)))?((((map__27241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27241):map__27241);
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return vide.core.about_page;},cljs.core.cst$sym$vide$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$vide$core,cljs.core.cst$sym$about_DASH_page,"/home/peter/vide/src/cljs/vide/core.cljs",17,1,44,44,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vide.core.about_page)?vide.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__25678__auto__)){
var vec__27243 = params__25678__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return vide.core.about_page;},cljs.core.cst$sym$vide$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$vide$core,cljs.core.cst$sym$about_DASH_page,"/home/peter/vide/src/cljs/vide/core.cljs",17,1,44,44,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vide.core.about_page)?vide.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__25677__auto___27246);

vide.core.mount_root = (function vide$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vide.core.current_page], null),document.getElementById("app"));
});
vide.core.init_BANG_ = (function vide$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return vide.core.mount_root();
});
