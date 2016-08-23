// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async22831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22831 = (function (fn_handler,f,meta22832){
this.fn_handler = fn_handler;
this.f = f;
this.meta22832 = meta22832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22833,meta22832__$1){
var self__ = this;
var _22833__$1 = this;
return (new cljs.core.async.t_cljs$core$async22831(self__.fn_handler,self__.f,meta22832__$1));
});

cljs.core.async.t_cljs$core$async22831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22833){
var self__ = this;
var _22833__$1 = this;
return self__.meta22832;
});

cljs.core.async.t_cljs$core$async22831.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta22832], null);
});

cljs.core.async.t_cljs$core$async22831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22831";

cljs.core.async.t_cljs$core$async22831.cljs$lang$ctorPrWriter = (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async22831");
});

cljs.core.async.__GT_t_cljs$core$async22831 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22831(fn_handler__$1,f__$1,meta22832){
return (new cljs.core.async.t_cljs$core$async22831(fn_handler__$1,f__$1,meta22832));
});

}

return (new cljs.core.async.t_cljs$core$async22831(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22836 = [];
var len__7319__auto___22839 = arguments.length;
var i__7320__auto___22840 = (0);
while(true){
if((i__7320__auto___22840 < len__7319__auto___22839)){
args22836.push((arguments[i__7320__auto___22840]));

var G__22841 = (i__7320__auto___22840 + (1));
i__7320__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var G__22838 = args22836.length;
switch (G__22838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22836.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22843 = [];
var len__7319__auto___22846 = arguments.length;
var i__7320__auto___22847 = (0);
while(true){
if((i__7320__auto___22847 < len__7319__auto___22846)){
args22843.push((arguments[i__7320__auto___22847]));

var G__22848 = (i__7320__auto___22847 + (1));
i__7320__auto___22847 = G__22848;
continue;
} else {
}
break;
}

var G__22845 = args22843.length;
switch (G__22845) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22843.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_22850 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22850) : fn1.call(null,val_22850));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22850,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22850) : fn1.call(null,val_22850));
});})(val_22850,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22851 = [];
var len__7319__auto___22854 = arguments.length;
var i__7320__auto___22855 = (0);
while(true){
if((i__7320__auto___22855 < len__7319__auto___22854)){
args22851.push((arguments[i__7320__auto___22855]));

var G__22856 = (i__7320__auto___22855 + (1));
i__7320__auto___22855 = G__22856;
continue;
} else {
}
break;
}

var G__22853 = args22851.length;
switch (G__22853) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22851.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7159__auto___22858 = n;
var x_22859 = (0);
while(true){
if((x_22859 < n__7159__auto___22858)){
(a[x_22859] = (0));

var G__22860 = (x_22859 + (1));
x_22859 = G__22860;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22861 = (i + (1));
i = G__22861;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async22865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22865 = (function (alt_flag,flag,meta22866){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22866 = meta22866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22867,meta22866__$1){
var self__ = this;
var _22867__$1 = this;
return (new cljs.core.async.t_cljs$core$async22865(self__.alt_flag,self__.flag,meta22866__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22867){
var self__ = this;
var _22867__$1 = this;
return self__.meta22866;
});})(flag))
;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22865.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22866], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22865";

cljs.core.async.t_cljs$core$async22865.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async22865");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22865 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22865(alt_flag__$1,flag__$1,meta22866){
return (new cljs.core.async.t_cljs$core$async22865(alt_flag__$1,flag__$1,meta22866));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22865(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22871 = (function (alt_handler,flag,cb,meta22872){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22872 = meta22872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22873,meta22872__$1){
var self__ = this;
var _22873__$1 = this;
return (new cljs.core.async.t_cljs$core$async22871(self__.alt_handler,self__.flag,self__.cb,meta22872__$1));
});

cljs.core.async.t_cljs$core$async22871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22873){
var self__ = this;
var _22873__$1 = this;
return self__.meta22872;
});

cljs.core.async.t_cljs$core$async22871.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22872], null);
});

cljs.core.async.t_cljs$core$async22871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22871";

cljs.core.async.t_cljs$core$async22871.cljs$lang$ctorPrWriter = (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async22871");
});

cljs.core.async.__GT_t_cljs$core$async22871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22871(alt_handler__$1,flag__$1,cb__$1,meta22872){
return (new cljs.core.async.t_cljs$core$async22871(alt_handler__$1,flag__$1,cb__$1,meta22872));
});

}

return (new cljs.core.async.t_cljs$core$async22871(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22874_SHARP_){
var G__22878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22874_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22878) : fret.call(null,G__22878));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22875_SHARP_){
var G__22879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22879) : fret.call(null,G__22879));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6244__auto__ = wport;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22880 = (i + (1));
i = G__22880;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6244__auto__ = ret;
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6232__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6232__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6232__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___22886 = arguments.length;
var i__7320__auto___22887 = (0);
while(true){
if((i__7320__auto___22887 < len__7319__auto___22886)){
args__7326__auto__.push((arguments[i__7320__auto___22887]));

var G__22888 = (i__7320__auto___22887 + (1));
i__7320__auto___22887 = G__22888;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((1) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7327__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22883){
var map__22884 = p__22883;
var map__22884__$1 = ((((!((map__22884 == null)))?((((map__22884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22884):map__22884);
var opts = map__22884__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22881){
var G__22882 = cljs.core.first(seq22881);
var seq22881__$1 = cljs.core.next(seq22881);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22882,seq22881__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22889 = [];
var len__7319__auto___22939 = arguments.length;
var i__7320__auto___22940 = (0);
while(true){
if((i__7320__auto___22940 < len__7319__auto___22939)){
args22889.push((arguments[i__7320__auto___22940]));

var G__22941 = (i__7320__auto___22940 + (1));
i__7320__auto___22940 = G__22941;
continue;
} else {
}
break;
}

var G__22891 = args22889.length;
switch (G__22891) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22889.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22783__auto___22943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___22943){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___22943){
return (function (state_22915){
var state_val_22916 = (state_22915[(1)]);
if((state_val_22916 === (7))){
var inst_22911 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22917_22944 = state_22915__$1;
(statearr_22917_22944[(2)] = inst_22911);

(statearr_22917_22944[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (1))){
var state_22915__$1 = state_22915;
var statearr_22918_22945 = state_22915__$1;
(statearr_22918_22945[(2)] = null);

(statearr_22918_22945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (4))){
var inst_22894 = (state_22915[(7)]);
var inst_22894__$1 = (state_22915[(2)]);
var inst_22895 = (inst_22894__$1 == null);
var state_22915__$1 = (function (){var statearr_22919 = state_22915;
(statearr_22919[(7)] = inst_22894__$1);

return statearr_22919;
})();
if(cljs.core.truth_(inst_22895)){
var statearr_22920_22946 = state_22915__$1;
(statearr_22920_22946[(1)] = (5));

} else {
var statearr_22921_22947 = state_22915__$1;
(statearr_22921_22947[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (13))){
var state_22915__$1 = state_22915;
var statearr_22922_22948 = state_22915__$1;
(statearr_22922_22948[(2)] = null);

(statearr_22922_22948[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (6))){
var inst_22894 = (state_22915[(7)]);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22915__$1,(11),to,inst_22894);
} else {
if((state_val_22916 === (3))){
var inst_22913 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22915__$1,inst_22913);
} else {
if((state_val_22916 === (12))){
var state_22915__$1 = state_22915;
var statearr_22923_22949 = state_22915__$1;
(statearr_22923_22949[(2)] = null);

(statearr_22923_22949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (2))){
var state_22915__$1 = state_22915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22915__$1,(4),from);
} else {
if((state_val_22916 === (11))){
var inst_22904 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
if(cljs.core.truth_(inst_22904)){
var statearr_22924_22950 = state_22915__$1;
(statearr_22924_22950[(1)] = (12));

} else {
var statearr_22925_22951 = state_22915__$1;
(statearr_22925_22951[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (9))){
var state_22915__$1 = state_22915;
var statearr_22926_22952 = state_22915__$1;
(statearr_22926_22952[(2)] = null);

(statearr_22926_22952[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (5))){
var state_22915__$1 = state_22915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22927_22953 = state_22915__$1;
(statearr_22927_22953[(1)] = (8));

} else {
var statearr_22928_22954 = state_22915__$1;
(statearr_22928_22954[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (14))){
var inst_22909 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22929_22955 = state_22915__$1;
(statearr_22929_22955[(2)] = inst_22909);

(statearr_22929_22955[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (10))){
var inst_22901 = (state_22915[(2)]);
var state_22915__$1 = state_22915;
var statearr_22930_22956 = state_22915__$1;
(statearr_22930_22956[(2)] = inst_22901);

(statearr_22930_22956[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22916 === (8))){
var inst_22898 = cljs.core.async.close_BANG_(to);
var state_22915__$1 = state_22915;
var statearr_22931_22957 = state_22915__$1;
(statearr_22931_22957[(2)] = inst_22898);

(statearr_22931_22957[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___22943))
;
return ((function (switch__22669__auto__,c__22783__auto___22943){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_22935 = [null,null,null,null,null,null,null,null];
(statearr_22935[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_22935[(1)] = (1));

return statearr_22935;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_22915){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_22915);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object)){
var ex__22673__auto__ = e22936;
var statearr_22937_22958 = state_22915;
(statearr_22937_22958[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22915);

return cljs.core.cst$kw$recur;
} else {
throw e22936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__22959 = state_22915;
state_22915 = G__22959;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_22915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_22915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___22943))
})();
var state__22785__auto__ = (function (){var statearr_22938 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___22943);

return statearr_22938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___22943))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__23147){
var vec__23148 = p__23147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(1),null);
var job = vec__23148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22783__auto___23334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results){
return (function (state_23155){
var state_val_23156 = (state_23155[(1)]);
if((state_val_23156 === (1))){
var state_23155__$1 = state_23155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23155__$1,(2),res,v);
} else {
if((state_val_23156 === (2))){
var inst_23152 = (state_23155[(2)]);
var inst_23153 = cljs.core.async.close_BANG_(res);
var state_23155__$1 = (function (){var statearr_23157 = state_23155;
(statearr_23157[(7)] = inst_23152);

return statearr_23157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23155__$1,inst_23153);
} else {
return null;
}
}
});})(c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results))
;
return ((function (switch__22669__auto__,c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_23161 = [null,null,null,null,null,null,null,null];
(statearr_23161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__);

(statearr_23161[(1)] = (1));

return statearr_23161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1 = (function (state_23155){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23155);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23162){if((e23162 instanceof Object)){
var ex__22673__auto__ = e23162;
var statearr_23163_23335 = state_23155;
(statearr_23163_23335[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23155);

return cljs.core.cst$kw$recur;
} else {
throw e23162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23336 = state_23155;
state_23155 = G__23336;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = function(state_23155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1.call(this,state_23155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results))
})();
var state__22785__auto__ = (function (){var statearr_23164 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___23334);

return statearr_23164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___23334,res,vec__23148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23165){
var vec__23166 = p__23165;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(1),null);
var job = vec__23166;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7159__auto___23337 = n;
var __23338 = (0);
while(true){
if((__23338 < n__7159__auto___23337)){
var G__23169_23339 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23169_23339) {
case "compute":
var c__22783__auto___23341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23338,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (__23338,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function (state_23182){
var state_val_23183 = (state_23182[(1)]);
if((state_val_23183 === (1))){
var state_23182__$1 = state_23182;
var statearr_23184_23342 = state_23182__$1;
(statearr_23184_23342[(2)] = null);

(statearr_23184_23342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23183 === (2))){
var state_23182__$1 = state_23182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23182__$1,(4),jobs);
} else {
if((state_val_23183 === (3))){
var inst_23180 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23182__$1,inst_23180);
} else {
if((state_val_23183 === (4))){
var inst_23172 = (state_23182[(2)]);
var inst_23173 = process(inst_23172);
var state_23182__$1 = state_23182;
if(cljs.core.truth_(inst_23173)){
var statearr_23185_23343 = state_23182__$1;
(statearr_23185_23343[(1)] = (5));

} else {
var statearr_23186_23344 = state_23182__$1;
(statearr_23186_23344[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23183 === (5))){
var state_23182__$1 = state_23182;
var statearr_23187_23345 = state_23182__$1;
(statearr_23187_23345[(2)] = null);

(statearr_23187_23345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23183 === (6))){
var state_23182__$1 = state_23182;
var statearr_23188_23346 = state_23182__$1;
(statearr_23188_23346[(2)] = null);

(statearr_23188_23346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23183 === (7))){
var inst_23178 = (state_23182[(2)]);
var state_23182__$1 = state_23182;
var statearr_23189_23347 = state_23182__$1;
(statearr_23189_23347[(2)] = inst_23178);

(statearr_23189_23347[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__23338,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
;
return ((function (__23338,switch__22669__auto__,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_23193 = [null,null,null,null,null,null,null];
(statearr_23193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__);

(statearr_23193[(1)] = (1));

return statearr_23193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1 = (function (state_23182){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23182);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23194){if((e23194 instanceof Object)){
var ex__22673__auto__ = e23194;
var statearr_23195_23348 = state_23182;
(statearr_23195_23348[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23182);

return cljs.core.cst$kw$recur;
} else {
throw e23194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23349 = state_23182;
state_23182 = G__23349;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = function(state_23182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1.call(this,state_23182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__;
})()
;})(__23338,switch__22669__auto__,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
})();
var state__22785__auto__ = (function (){var statearr_23196 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___23341);

return statearr_23196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(__23338,c__22783__auto___23341,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
);


break;
case "async":
var c__22783__auto___23350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23338,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (__23338,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function (state_23209){
var state_val_23210 = (state_23209[(1)]);
if((state_val_23210 === (1))){
var state_23209__$1 = state_23209;
var statearr_23211_23351 = state_23209__$1;
(statearr_23211_23351[(2)] = null);

(statearr_23211_23351[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23210 === (2))){
var state_23209__$1 = state_23209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23209__$1,(4),jobs);
} else {
if((state_val_23210 === (3))){
var inst_23207 = (state_23209[(2)]);
var state_23209__$1 = state_23209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23209__$1,inst_23207);
} else {
if((state_val_23210 === (4))){
var inst_23199 = (state_23209[(2)]);
var inst_23200 = async(inst_23199);
var state_23209__$1 = state_23209;
if(cljs.core.truth_(inst_23200)){
var statearr_23212_23352 = state_23209__$1;
(statearr_23212_23352[(1)] = (5));

} else {
var statearr_23213_23353 = state_23209__$1;
(statearr_23213_23353[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23210 === (5))){
var state_23209__$1 = state_23209;
var statearr_23214_23354 = state_23209__$1;
(statearr_23214_23354[(2)] = null);

(statearr_23214_23354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23210 === (6))){
var state_23209__$1 = state_23209;
var statearr_23215_23355 = state_23209__$1;
(statearr_23215_23355[(2)] = null);

(statearr_23215_23355[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23210 === (7))){
var inst_23205 = (state_23209[(2)]);
var state_23209__$1 = state_23209;
var statearr_23216_23356 = state_23209__$1;
(statearr_23216_23356[(2)] = inst_23205);

(statearr_23216_23356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__23338,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
;
return ((function (__23338,switch__22669__auto__,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_23220 = [null,null,null,null,null,null,null];
(statearr_23220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__);

(statearr_23220[(1)] = (1));

return statearr_23220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1 = (function (state_23209){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23209);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23221){if((e23221 instanceof Object)){
var ex__22673__auto__ = e23221;
var statearr_23222_23357 = state_23209;
(statearr_23222_23357[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23209);

return cljs.core.cst$kw$recur;
} else {
throw e23221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23358 = state_23209;
state_23209 = G__23358;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = function(state_23209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1.call(this,state_23209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__;
})()
;})(__23338,switch__22669__auto__,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
})();
var state__22785__auto__ = (function (){var statearr_23223 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___23350);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(__23338,c__22783__auto___23350,G__23169_23339,n__7159__auto___23337,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23359 = (__23338 + (1));
__23338 = G__23359;
continue;
} else {
}
break;
}

var c__22783__auto___23360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___23360,jobs,results,process,async){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___23360,jobs,results,process,async){
return (function (state_23245){
var state_val_23246 = (state_23245[(1)]);
if((state_val_23246 === (1))){
var state_23245__$1 = state_23245;
var statearr_23247_23361 = state_23245__$1;
(statearr_23247_23361[(2)] = null);

(statearr_23247_23361[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23246 === (2))){
var state_23245__$1 = state_23245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23245__$1,(4),from);
} else {
if((state_val_23246 === (3))){
var inst_23243 = (state_23245[(2)]);
var state_23245__$1 = state_23245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23245__$1,inst_23243);
} else {
if((state_val_23246 === (4))){
var inst_23226 = (state_23245[(7)]);
var inst_23226__$1 = (state_23245[(2)]);
var inst_23227 = (inst_23226__$1 == null);
var state_23245__$1 = (function (){var statearr_23248 = state_23245;
(statearr_23248[(7)] = inst_23226__$1);

return statearr_23248;
})();
if(cljs.core.truth_(inst_23227)){
var statearr_23249_23362 = state_23245__$1;
(statearr_23249_23362[(1)] = (5));

} else {
var statearr_23250_23363 = state_23245__$1;
(statearr_23250_23363[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23246 === (5))){
var inst_23229 = cljs.core.async.close_BANG_(jobs);
var state_23245__$1 = state_23245;
var statearr_23251_23364 = state_23245__$1;
(statearr_23251_23364[(2)] = inst_23229);

(statearr_23251_23364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23246 === (6))){
var inst_23231 = (state_23245[(8)]);
var inst_23226 = (state_23245[(7)]);
var inst_23231__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23233 = [inst_23226,inst_23231__$1];
var inst_23234 = (new cljs.core.PersistentVector(null,2,(5),inst_23232,inst_23233,null));
var state_23245__$1 = (function (){var statearr_23252 = state_23245;
(statearr_23252[(8)] = inst_23231__$1);

return statearr_23252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23245__$1,(8),jobs,inst_23234);
} else {
if((state_val_23246 === (7))){
var inst_23241 = (state_23245[(2)]);
var state_23245__$1 = state_23245;
var statearr_23253_23365 = state_23245__$1;
(statearr_23253_23365[(2)] = inst_23241);

(statearr_23253_23365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23246 === (8))){
var inst_23231 = (state_23245[(8)]);
var inst_23236 = (state_23245[(2)]);
var state_23245__$1 = (function (){var statearr_23254 = state_23245;
(statearr_23254[(9)] = inst_23236);

return statearr_23254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23245__$1,(9),results,inst_23231);
} else {
if((state_val_23246 === (9))){
var inst_23238 = (state_23245[(2)]);
var state_23245__$1 = (function (){var statearr_23255 = state_23245;
(statearr_23255[(10)] = inst_23238);

return statearr_23255;
})();
var statearr_23256_23366 = state_23245__$1;
(statearr_23256_23366[(2)] = null);

(statearr_23256_23366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___23360,jobs,results,process,async))
;
return ((function (switch__22669__auto__,c__22783__auto___23360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_23260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__);

(statearr_23260[(1)] = (1));

return statearr_23260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1 = (function (state_23245){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23245);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23261){if((e23261 instanceof Object)){
var ex__22673__auto__ = e23261;
var statearr_23262_23367 = state_23245;
(statearr_23262_23367[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23245);

return cljs.core.cst$kw$recur;
} else {
throw e23261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23368 = state_23245;
state_23245 = G__23368;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = function(state_23245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1.call(this,state_23245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___23360,jobs,results,process,async))
})();
var state__22785__auto__ = (function (){var statearr_23263 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___23360);

return statearr_23263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___23360,jobs,results,process,async))
);


var c__22783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto__,jobs,results,process,async){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto__,jobs,results,process,async){
return (function (state_23301){
var state_val_23302 = (state_23301[(1)]);
if((state_val_23302 === (7))){
var inst_23297 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
var statearr_23303_23369 = state_23301__$1;
(statearr_23303_23369[(2)] = inst_23297);

(statearr_23303_23369[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (20))){
var state_23301__$1 = state_23301;
var statearr_23304_23370 = state_23301__$1;
(statearr_23304_23370[(2)] = null);

(statearr_23304_23370[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (1))){
var state_23301__$1 = state_23301;
var statearr_23305_23371 = state_23301__$1;
(statearr_23305_23371[(2)] = null);

(statearr_23305_23371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (4))){
var inst_23266 = (state_23301[(7)]);
var inst_23266__$1 = (state_23301[(2)]);
var inst_23267 = (inst_23266__$1 == null);
var state_23301__$1 = (function (){var statearr_23306 = state_23301;
(statearr_23306[(7)] = inst_23266__$1);

return statearr_23306;
})();
if(cljs.core.truth_(inst_23267)){
var statearr_23307_23372 = state_23301__$1;
(statearr_23307_23372[(1)] = (5));

} else {
var statearr_23308_23373 = state_23301__$1;
(statearr_23308_23373[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (15))){
var inst_23279 = (state_23301[(8)]);
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23301__$1,(18),to,inst_23279);
} else {
if((state_val_23302 === (21))){
var inst_23292 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
var statearr_23309_23374 = state_23301__$1;
(statearr_23309_23374[(2)] = inst_23292);

(statearr_23309_23374[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (13))){
var inst_23294 = (state_23301[(2)]);
var state_23301__$1 = (function (){var statearr_23310 = state_23301;
(statearr_23310[(9)] = inst_23294);

return statearr_23310;
})();
var statearr_23311_23375 = state_23301__$1;
(statearr_23311_23375[(2)] = null);

(statearr_23311_23375[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (6))){
var inst_23266 = (state_23301[(7)]);
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23301__$1,(11),inst_23266);
} else {
if((state_val_23302 === (17))){
var inst_23287 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
if(cljs.core.truth_(inst_23287)){
var statearr_23312_23376 = state_23301__$1;
(statearr_23312_23376[(1)] = (19));

} else {
var statearr_23313_23377 = state_23301__$1;
(statearr_23313_23377[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (3))){
var inst_23299 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23301__$1,inst_23299);
} else {
if((state_val_23302 === (12))){
var inst_23276 = (state_23301[(10)]);
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23301__$1,(14),inst_23276);
} else {
if((state_val_23302 === (2))){
var state_23301__$1 = state_23301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23301__$1,(4),results);
} else {
if((state_val_23302 === (19))){
var state_23301__$1 = state_23301;
var statearr_23314_23378 = state_23301__$1;
(statearr_23314_23378[(2)] = null);

(statearr_23314_23378[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (11))){
var inst_23276 = (state_23301[(2)]);
var state_23301__$1 = (function (){var statearr_23315 = state_23301;
(statearr_23315[(10)] = inst_23276);

return statearr_23315;
})();
var statearr_23316_23379 = state_23301__$1;
(statearr_23316_23379[(2)] = null);

(statearr_23316_23379[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (9))){
var state_23301__$1 = state_23301;
var statearr_23317_23380 = state_23301__$1;
(statearr_23317_23380[(2)] = null);

(statearr_23317_23380[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (5))){
var state_23301__$1 = state_23301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23318_23381 = state_23301__$1;
(statearr_23318_23381[(1)] = (8));

} else {
var statearr_23319_23382 = state_23301__$1;
(statearr_23319_23382[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (14))){
var inst_23281 = (state_23301[(11)]);
var inst_23279 = (state_23301[(8)]);
var inst_23279__$1 = (state_23301[(2)]);
var inst_23280 = (inst_23279__$1 == null);
var inst_23281__$1 = cljs.core.not(inst_23280);
var state_23301__$1 = (function (){var statearr_23320 = state_23301;
(statearr_23320[(11)] = inst_23281__$1);

(statearr_23320[(8)] = inst_23279__$1);

return statearr_23320;
})();
if(inst_23281__$1){
var statearr_23321_23383 = state_23301__$1;
(statearr_23321_23383[(1)] = (15));

} else {
var statearr_23322_23384 = state_23301__$1;
(statearr_23322_23384[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (16))){
var inst_23281 = (state_23301[(11)]);
var state_23301__$1 = state_23301;
var statearr_23323_23385 = state_23301__$1;
(statearr_23323_23385[(2)] = inst_23281);

(statearr_23323_23385[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (10))){
var inst_23273 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
var statearr_23324_23386 = state_23301__$1;
(statearr_23324_23386[(2)] = inst_23273);

(statearr_23324_23386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (18))){
var inst_23284 = (state_23301[(2)]);
var state_23301__$1 = state_23301;
var statearr_23325_23387 = state_23301__$1;
(statearr_23325_23387[(2)] = inst_23284);

(statearr_23325_23387[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23302 === (8))){
var inst_23270 = cljs.core.async.close_BANG_(to);
var state_23301__$1 = state_23301;
var statearr_23326_23388 = state_23301__$1;
(statearr_23326_23388[(2)] = inst_23270);

(statearr_23326_23388[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto__,jobs,results,process,async))
;
return ((function (switch__22669__auto__,c__22783__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_23330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__);

(statearr_23330[(1)] = (1));

return statearr_23330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1 = (function (state_23301){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23301);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23331){if((e23331 instanceof Object)){
var ex__22673__auto__ = e23331;
var statearr_23332_23389 = state_23301;
(statearr_23332_23389[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23301);

return cljs.core.cst$kw$recur;
} else {
throw e23331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23390 = state_23301;
state_23301 = G__23390;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__ = function(state_23301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1.call(this,state_23301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto__,jobs,results,process,async))
})();
var state__22785__auto__ = (function (){var statearr_23333 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto__);

return statearr_23333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto__,jobs,results,process,async))
);

return c__22783__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23391 = [];
var len__7319__auto___23394 = arguments.length;
var i__7320__auto___23395 = (0);
while(true){
if((i__7320__auto___23395 < len__7319__auto___23394)){
args23391.push((arguments[i__7320__auto___23395]));

var G__23396 = (i__7320__auto___23395 + (1));
i__7320__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var G__23393 = args23391.length;
switch (G__23393) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23391.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23398 = [];
var len__7319__auto___23401 = arguments.length;
var i__7320__auto___23402 = (0);
while(true){
if((i__7320__auto___23402 < len__7319__auto___23401)){
args23398.push((arguments[i__7320__auto___23402]));

var G__23403 = (i__7320__auto___23402 + (1));
i__7320__auto___23402 = G__23403;
continue;
} else {
}
break;
}

var G__23400 = args23398.length;
switch (G__23400) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23398.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23405 = [];
var len__7319__auto___23458 = arguments.length;
var i__7320__auto___23459 = (0);
while(true){
if((i__7320__auto___23459 < len__7319__auto___23458)){
args23405.push((arguments[i__7320__auto___23459]));

var G__23460 = (i__7320__auto___23459 + (1));
i__7320__auto___23459 = G__23460;
continue;
} else {
}
break;
}

var G__23407 = args23405.length;
switch (G__23407) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23405.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__22783__auto___23462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___23462,tc,fc){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___23462,tc,fc){
return (function (state_23433){
var state_val_23434 = (state_23433[(1)]);
if((state_val_23434 === (7))){
var inst_23429 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23435_23463 = state_23433__$1;
(statearr_23435_23463[(2)] = inst_23429);

(statearr_23435_23463[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (1))){
var state_23433__$1 = state_23433;
var statearr_23436_23464 = state_23433__$1;
(statearr_23436_23464[(2)] = null);

(statearr_23436_23464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (4))){
var inst_23410 = (state_23433[(7)]);
var inst_23410__$1 = (state_23433[(2)]);
var inst_23411 = (inst_23410__$1 == null);
var state_23433__$1 = (function (){var statearr_23437 = state_23433;
(statearr_23437[(7)] = inst_23410__$1);

return statearr_23437;
})();
if(cljs.core.truth_(inst_23411)){
var statearr_23438_23465 = state_23433__$1;
(statearr_23438_23465[(1)] = (5));

} else {
var statearr_23439_23466 = state_23433__$1;
(statearr_23439_23466[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (13))){
var state_23433__$1 = state_23433;
var statearr_23440_23467 = state_23433__$1;
(statearr_23440_23467[(2)] = null);

(statearr_23440_23467[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (6))){
var inst_23410 = (state_23433[(7)]);
var inst_23416 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23410) : p.call(null,inst_23410));
var state_23433__$1 = state_23433;
if(cljs.core.truth_(inst_23416)){
var statearr_23441_23468 = state_23433__$1;
(statearr_23441_23468[(1)] = (9));

} else {
var statearr_23442_23469 = state_23433__$1;
(statearr_23442_23469[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (3))){
var inst_23431 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23433__$1,inst_23431);
} else {
if((state_val_23434 === (12))){
var state_23433__$1 = state_23433;
var statearr_23443_23470 = state_23433__$1;
(statearr_23443_23470[(2)] = null);

(statearr_23443_23470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (2))){
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23433__$1,(4),ch);
} else {
if((state_val_23434 === (11))){
var inst_23410 = (state_23433[(7)]);
var inst_23420 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23433__$1,(8),inst_23420,inst_23410);
} else {
if((state_val_23434 === (9))){
var state_23433__$1 = state_23433;
var statearr_23444_23471 = state_23433__$1;
(statearr_23444_23471[(2)] = tc);

(statearr_23444_23471[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (5))){
var inst_23413 = cljs.core.async.close_BANG_(tc);
var inst_23414 = cljs.core.async.close_BANG_(fc);
var state_23433__$1 = (function (){var statearr_23445 = state_23433;
(statearr_23445[(8)] = inst_23413);

return statearr_23445;
})();
var statearr_23446_23472 = state_23433__$1;
(statearr_23446_23472[(2)] = inst_23414);

(statearr_23446_23472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (14))){
var inst_23427 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23447_23473 = state_23433__$1;
(statearr_23447_23473[(2)] = inst_23427);

(statearr_23447_23473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (10))){
var state_23433__$1 = state_23433;
var statearr_23448_23474 = state_23433__$1;
(statearr_23448_23474[(2)] = fc);

(statearr_23448_23474[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23434 === (8))){
var inst_23422 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
if(cljs.core.truth_(inst_23422)){
var statearr_23449_23475 = state_23433__$1;
(statearr_23449_23475[(1)] = (12));

} else {
var statearr_23450_23476 = state_23433__$1;
(statearr_23450_23476[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___23462,tc,fc))
;
return ((function (switch__22669__auto__,c__22783__auto___23462,tc,fc){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_23454 = [null,null,null,null,null,null,null,null,null];
(statearr_23454[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_23454[(1)] = (1));

return statearr_23454;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_23433){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23433);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23455){if((e23455 instanceof Object)){
var ex__22673__auto__ = e23455;
var statearr_23456_23477 = state_23433;
(statearr_23456_23477[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23433);

return cljs.core.cst$kw$recur;
} else {
throw e23455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23478 = state_23433;
state_23433 = G__23478;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_23433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_23433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___23462,tc,fc))
})();
var state__22785__auto__ = (function (){var statearr_23457 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___23462);

return statearr_23457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___23462,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto__){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto__){
return (function (state_23525){
var state_val_23526 = (state_23525[(1)]);
if((state_val_23526 === (1))){
var inst_23511 = init;
var state_23525__$1 = (function (){var statearr_23527 = state_23525;
(statearr_23527[(7)] = inst_23511);

return statearr_23527;
})();
var statearr_23528_23543 = state_23525__$1;
(statearr_23528_23543[(2)] = null);

(statearr_23528_23543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23526 === (2))){
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23525__$1,(4),ch);
} else {
if((state_val_23526 === (3))){
var inst_23523 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23525__$1,inst_23523);
} else {
if((state_val_23526 === (4))){
var inst_23514 = (state_23525[(8)]);
var inst_23514__$1 = (state_23525[(2)]);
var inst_23515 = (inst_23514__$1 == null);
var state_23525__$1 = (function (){var statearr_23529 = state_23525;
(statearr_23529[(8)] = inst_23514__$1);

return statearr_23529;
})();
if(cljs.core.truth_(inst_23515)){
var statearr_23530_23544 = state_23525__$1;
(statearr_23530_23544[(1)] = (5));

} else {
var statearr_23531_23545 = state_23525__$1;
(statearr_23531_23545[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23526 === (5))){
var inst_23511 = (state_23525[(7)]);
var state_23525__$1 = state_23525;
var statearr_23532_23546 = state_23525__$1;
(statearr_23532_23546[(2)] = inst_23511);

(statearr_23532_23546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23526 === (6))){
var inst_23514 = (state_23525[(8)]);
var inst_23511 = (state_23525[(7)]);
var inst_23518 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23511,inst_23514) : f.call(null,inst_23511,inst_23514));
var inst_23511__$1 = inst_23518;
var state_23525__$1 = (function (){var statearr_23533 = state_23525;
(statearr_23533[(7)] = inst_23511__$1);

return statearr_23533;
})();
var statearr_23534_23547 = state_23525__$1;
(statearr_23534_23547[(2)] = null);

(statearr_23534_23547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23526 === (7))){
var inst_23521 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23535_23548 = state_23525__$1;
(statearr_23535_23548[(2)] = inst_23521);

(statearr_23535_23548[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__22783__auto__))
;
return ((function (switch__22669__auto__,c__22783__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22670__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22670__auto____0 = (function (){
var statearr_23539 = [null,null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = cljs$core$async$reduce_$_state_machine__22670__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var cljs$core$async$reduce_$_state_machine__22670__auto____1 = (function (state_23525){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23525);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23540){if((e23540 instanceof Object)){
var ex__22673__auto__ = e23540;
var statearr_23541_23549 = state_23525;
(statearr_23541_23549[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23525);

return cljs.core.cst$kw$recur;
} else {
throw e23540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23550 = state_23525;
state_23525 = G__23550;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22670__auto__ = function(state_23525){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22670__auto____1.call(this,state_23525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22670__auto____0;
cljs$core$async$reduce_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22670__auto____1;
return cljs$core$async$reduce_$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto__))
})();
var state__22785__auto__ = (function (){var statearr_23542 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto__);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto__))
);

return c__22783__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23551 = [];
var len__7319__auto___23603 = arguments.length;
var i__7320__auto___23604 = (0);
while(true){
if((i__7320__auto___23604 < len__7319__auto___23603)){
args23551.push((arguments[i__7320__auto___23604]));

var G__23605 = (i__7320__auto___23604 + (1));
i__7320__auto___23604 = G__23605;
continue;
} else {
}
break;
}

var G__23553 = args23551.length;
switch (G__23553) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23551.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto__){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto__){
return (function (state_23578){
var state_val_23579 = (state_23578[(1)]);
if((state_val_23579 === (7))){
var inst_23560 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23580_23607 = state_23578__$1;
(statearr_23580_23607[(2)] = inst_23560);

(statearr_23580_23607[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (1))){
var inst_23554 = cljs.core.seq(coll);
var inst_23555 = inst_23554;
var state_23578__$1 = (function (){var statearr_23581 = state_23578;
(statearr_23581[(7)] = inst_23555);

return statearr_23581;
})();
var statearr_23582_23608 = state_23578__$1;
(statearr_23582_23608[(2)] = null);

(statearr_23582_23608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (4))){
var inst_23555 = (state_23578[(7)]);
var inst_23558 = cljs.core.first(inst_23555);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23578__$1,(7),ch,inst_23558);
} else {
if((state_val_23579 === (13))){
var inst_23572 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23583_23609 = state_23578__$1;
(statearr_23583_23609[(2)] = inst_23572);

(statearr_23583_23609[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (6))){
var inst_23563 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
if(cljs.core.truth_(inst_23563)){
var statearr_23584_23610 = state_23578__$1;
(statearr_23584_23610[(1)] = (8));

} else {
var statearr_23585_23611 = state_23578__$1;
(statearr_23585_23611[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (3))){
var inst_23576 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23578__$1,inst_23576);
} else {
if((state_val_23579 === (12))){
var state_23578__$1 = state_23578;
var statearr_23586_23612 = state_23578__$1;
(statearr_23586_23612[(2)] = null);

(statearr_23586_23612[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (2))){
var inst_23555 = (state_23578[(7)]);
var state_23578__$1 = state_23578;
if(cljs.core.truth_(inst_23555)){
var statearr_23587_23613 = state_23578__$1;
(statearr_23587_23613[(1)] = (4));

} else {
var statearr_23588_23614 = state_23578__$1;
(statearr_23588_23614[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (11))){
var inst_23569 = cljs.core.async.close_BANG_(ch);
var state_23578__$1 = state_23578;
var statearr_23589_23615 = state_23578__$1;
(statearr_23589_23615[(2)] = inst_23569);

(statearr_23589_23615[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (9))){
var state_23578__$1 = state_23578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23590_23616 = state_23578__$1;
(statearr_23590_23616[(1)] = (11));

} else {
var statearr_23591_23617 = state_23578__$1;
(statearr_23591_23617[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (5))){
var inst_23555 = (state_23578[(7)]);
var state_23578__$1 = state_23578;
var statearr_23592_23618 = state_23578__$1;
(statearr_23592_23618[(2)] = inst_23555);

(statearr_23592_23618[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (10))){
var inst_23574 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23593_23619 = state_23578__$1;
(statearr_23593_23619[(2)] = inst_23574);

(statearr_23593_23619[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23579 === (8))){
var inst_23555 = (state_23578[(7)]);
var inst_23565 = cljs.core.next(inst_23555);
var inst_23555__$1 = inst_23565;
var state_23578__$1 = (function (){var statearr_23594 = state_23578;
(statearr_23594[(7)] = inst_23555__$1);

return statearr_23594;
})();
var statearr_23595_23620 = state_23578__$1;
(statearr_23595_23620[(2)] = null);

(statearr_23595_23620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto__))
;
return ((function (switch__22669__auto__,c__22783__auto__){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_23599 = [null,null,null,null,null,null,null,null];
(statearr_23599[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_23599[(1)] = (1));

return statearr_23599;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_23578){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23578);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e23600){if((e23600 instanceof Object)){
var ex__22673__auto__ = e23600;
var statearr_23601_23621 = state_23578;
(statearr_23601_23621[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23578);

return cljs.core.cst$kw$recur;
} else {
throw e23600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__23622 = state_23578;
state_23578 = G__23622;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_23578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_23578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto__))
})();
var state__22785__auto__ = (function (){var statearr_23602 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_23602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto__);

return statearr_23602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto__))
);

return c__22783__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6907__auto__ = (((_ == null))?null:_);
var m__6908__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6908__auto__.call(null,_));
} else {
var m__6908__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6908__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6908__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6908__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6908__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto__.call(null,m,ch));
} else {
var m__6908__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6908__auto__.call(null,m));
} else {
var m__6908__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6908__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__23851 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23851) : cljs.core.atom.call(null,G__23851));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23852 = (function (mult,ch,cs,meta23853){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23853 = meta23853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23854,meta23853__$1){
var self__ = this;
var _23854__$1 = this;
return (new cljs.core.async.t_cljs$core$async23852(self__.mult,self__.ch,self__.cs,meta23853__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23854){
var self__ = this;
var _23854__$1 = this;
return self__.meta23853;
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23855_24079 = self__.cs;
var G__23856_24080 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23855_24079,G__23856_24080) : cljs.core.reset_BANG_.call(null,G__23855_24079,G__23856_24080));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23853], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23852";

cljs.core.async.t_cljs$core$async23852.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async23852");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23852 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23852(mult__$1,ch__$1,cs__$1,meta23853){
return (new cljs.core.async.t_cljs$core$async23852(mult__$1,ch__$1,cs__$1,meta23853));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23852(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22783__auto___24081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24081,cs,m,dchan,dctr,done){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24081,cs,m,dchan,dctr,done){
return (function (state_23991){
var state_val_23992 = (state_23991[(1)]);
if((state_val_23992 === (7))){
var inst_23987 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_23993_24082 = state_23991__$1;
(statearr_23993_24082[(2)] = inst_23987);

(statearr_23993_24082[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (20))){
var inst_23890 = (state_23991[(7)]);
var inst_23902 = cljs.core.first(inst_23890);
var inst_23903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23902,(0),null);
var inst_23904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23902,(1),null);
var state_23991__$1 = (function (){var statearr_23994 = state_23991;
(statearr_23994[(8)] = inst_23903);

return statearr_23994;
})();
if(cljs.core.truth_(inst_23904)){
var statearr_23995_24083 = state_23991__$1;
(statearr_23995_24083[(1)] = (22));

} else {
var statearr_23996_24084 = state_23991__$1;
(statearr_23996_24084[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (27))){
var inst_23934 = (state_23991[(9)]);
var inst_23939 = (state_23991[(10)]);
var inst_23932 = (state_23991[(11)]);
var inst_23859 = (state_23991[(12)]);
var inst_23939__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23932,inst_23934);
var inst_23940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23939__$1,inst_23859,done);
var state_23991__$1 = (function (){var statearr_23997 = state_23991;
(statearr_23997[(10)] = inst_23939__$1);

return statearr_23997;
})();
if(cljs.core.truth_(inst_23940)){
var statearr_23998_24085 = state_23991__$1;
(statearr_23998_24085[(1)] = (30));

} else {
var statearr_23999_24086 = state_23991__$1;
(statearr_23999_24086[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (1))){
var state_23991__$1 = state_23991;
var statearr_24000_24087 = state_23991__$1;
(statearr_24000_24087[(2)] = null);

(statearr_24000_24087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (24))){
var inst_23890 = (state_23991[(7)]);
var inst_23909 = (state_23991[(2)]);
var inst_23910 = cljs.core.next(inst_23890);
var inst_23868 = inst_23910;
var inst_23869 = null;
var inst_23870 = (0);
var inst_23871 = (0);
var state_23991__$1 = (function (){var statearr_24001 = state_23991;
(statearr_24001[(13)] = inst_23871);

(statearr_24001[(14)] = inst_23868);

(statearr_24001[(15)] = inst_23869);

(statearr_24001[(16)] = inst_23909);

(statearr_24001[(17)] = inst_23870);

return statearr_24001;
})();
var statearr_24002_24088 = state_23991__$1;
(statearr_24002_24088[(2)] = null);

(statearr_24002_24088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (39))){
var state_23991__$1 = state_23991;
var statearr_24006_24089 = state_23991__$1;
(statearr_24006_24089[(2)] = null);

(statearr_24006_24089[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (4))){
var inst_23859 = (state_23991[(12)]);
var inst_23859__$1 = (state_23991[(2)]);
var inst_23860 = (inst_23859__$1 == null);
var state_23991__$1 = (function (){var statearr_24007 = state_23991;
(statearr_24007[(12)] = inst_23859__$1);

return statearr_24007;
})();
if(cljs.core.truth_(inst_23860)){
var statearr_24008_24090 = state_23991__$1;
(statearr_24008_24090[(1)] = (5));

} else {
var statearr_24009_24091 = state_23991__$1;
(statearr_24009_24091[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (15))){
var inst_23871 = (state_23991[(13)]);
var inst_23868 = (state_23991[(14)]);
var inst_23869 = (state_23991[(15)]);
var inst_23870 = (state_23991[(17)]);
var inst_23886 = (state_23991[(2)]);
var inst_23887 = (inst_23871 + (1));
var tmp24003 = inst_23868;
var tmp24004 = inst_23869;
var tmp24005 = inst_23870;
var inst_23868__$1 = tmp24003;
var inst_23869__$1 = tmp24004;
var inst_23870__$1 = tmp24005;
var inst_23871__$1 = inst_23887;
var state_23991__$1 = (function (){var statearr_24010 = state_23991;
(statearr_24010[(13)] = inst_23871__$1);

(statearr_24010[(14)] = inst_23868__$1);

(statearr_24010[(18)] = inst_23886);

(statearr_24010[(15)] = inst_23869__$1);

(statearr_24010[(17)] = inst_23870__$1);

return statearr_24010;
})();
var statearr_24011_24092 = state_23991__$1;
(statearr_24011_24092[(2)] = null);

(statearr_24011_24092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (21))){
var inst_23913 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24015_24093 = state_23991__$1;
(statearr_24015_24093[(2)] = inst_23913);

(statearr_24015_24093[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (31))){
var inst_23939 = (state_23991[(10)]);
var inst_23943 = done(null);
var inst_23944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23939);
var state_23991__$1 = (function (){var statearr_24016 = state_23991;
(statearr_24016[(19)] = inst_23943);

return statearr_24016;
})();
var statearr_24017_24094 = state_23991__$1;
(statearr_24017_24094[(2)] = inst_23944);

(statearr_24017_24094[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (32))){
var inst_23933 = (state_23991[(20)]);
var inst_23934 = (state_23991[(9)]);
var inst_23931 = (state_23991[(21)]);
var inst_23932 = (state_23991[(11)]);
var inst_23946 = (state_23991[(2)]);
var inst_23947 = (inst_23934 + (1));
var tmp24012 = inst_23933;
var tmp24013 = inst_23931;
var tmp24014 = inst_23932;
var inst_23931__$1 = tmp24013;
var inst_23932__$1 = tmp24014;
var inst_23933__$1 = tmp24012;
var inst_23934__$1 = inst_23947;
var state_23991__$1 = (function (){var statearr_24018 = state_23991;
(statearr_24018[(22)] = inst_23946);

(statearr_24018[(20)] = inst_23933__$1);

(statearr_24018[(9)] = inst_23934__$1);

(statearr_24018[(21)] = inst_23931__$1);

(statearr_24018[(11)] = inst_23932__$1);

return statearr_24018;
})();
var statearr_24019_24095 = state_23991__$1;
(statearr_24019_24095[(2)] = null);

(statearr_24019_24095[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (40))){
var inst_23959 = (state_23991[(23)]);
var inst_23963 = done(null);
var inst_23964 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23959);
var state_23991__$1 = (function (){var statearr_24020 = state_23991;
(statearr_24020[(24)] = inst_23963);

return statearr_24020;
})();
var statearr_24021_24096 = state_23991__$1;
(statearr_24021_24096[(2)] = inst_23964);

(statearr_24021_24096[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (33))){
var inst_23950 = (state_23991[(25)]);
var inst_23952 = cljs.core.chunked_seq_QMARK_(inst_23950);
var state_23991__$1 = state_23991;
if(inst_23952){
var statearr_24022_24097 = state_23991__$1;
(statearr_24022_24097[(1)] = (36));

} else {
var statearr_24023_24098 = state_23991__$1;
(statearr_24023_24098[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (13))){
var inst_23880 = (state_23991[(26)]);
var inst_23883 = cljs.core.async.close_BANG_(inst_23880);
var state_23991__$1 = state_23991;
var statearr_24024_24099 = state_23991__$1;
(statearr_24024_24099[(2)] = inst_23883);

(statearr_24024_24099[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (22))){
var inst_23903 = (state_23991[(8)]);
var inst_23906 = cljs.core.async.close_BANG_(inst_23903);
var state_23991__$1 = state_23991;
var statearr_24025_24100 = state_23991__$1;
(statearr_24025_24100[(2)] = inst_23906);

(statearr_24025_24100[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (36))){
var inst_23950 = (state_23991[(25)]);
var inst_23954 = cljs.core.chunk_first(inst_23950);
var inst_23955 = cljs.core.chunk_rest(inst_23950);
var inst_23956 = cljs.core.count(inst_23954);
var inst_23931 = inst_23955;
var inst_23932 = inst_23954;
var inst_23933 = inst_23956;
var inst_23934 = (0);
var state_23991__$1 = (function (){var statearr_24026 = state_23991;
(statearr_24026[(20)] = inst_23933);

(statearr_24026[(9)] = inst_23934);

(statearr_24026[(21)] = inst_23931);

(statearr_24026[(11)] = inst_23932);

return statearr_24026;
})();
var statearr_24027_24101 = state_23991__$1;
(statearr_24027_24101[(2)] = null);

(statearr_24027_24101[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (41))){
var inst_23950 = (state_23991[(25)]);
var inst_23966 = (state_23991[(2)]);
var inst_23967 = cljs.core.next(inst_23950);
var inst_23931 = inst_23967;
var inst_23932 = null;
var inst_23933 = (0);
var inst_23934 = (0);
var state_23991__$1 = (function (){var statearr_24028 = state_23991;
(statearr_24028[(20)] = inst_23933);

(statearr_24028[(9)] = inst_23934);

(statearr_24028[(21)] = inst_23931);

(statearr_24028[(27)] = inst_23966);

(statearr_24028[(11)] = inst_23932);

return statearr_24028;
})();
var statearr_24029_24102 = state_23991__$1;
(statearr_24029_24102[(2)] = null);

(statearr_24029_24102[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (43))){
var state_23991__$1 = state_23991;
var statearr_24030_24103 = state_23991__$1;
(statearr_24030_24103[(2)] = null);

(statearr_24030_24103[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (29))){
var inst_23975 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24031_24104 = state_23991__$1;
(statearr_24031_24104[(2)] = inst_23975);

(statearr_24031_24104[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (44))){
var inst_23984 = (state_23991[(2)]);
var state_23991__$1 = (function (){var statearr_24032 = state_23991;
(statearr_24032[(28)] = inst_23984);

return statearr_24032;
})();
var statearr_24033_24105 = state_23991__$1;
(statearr_24033_24105[(2)] = null);

(statearr_24033_24105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (6))){
var inst_23923 = (state_23991[(29)]);
var inst_23922 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23923__$1 = cljs.core.keys(inst_23922);
var inst_23924 = cljs.core.count(inst_23923__$1);
var inst_23925 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_23924) : cljs.core.reset_BANG_.call(null,dctr,inst_23924));
var inst_23930 = cljs.core.seq(inst_23923__$1);
var inst_23931 = inst_23930;
var inst_23932 = null;
var inst_23933 = (0);
var inst_23934 = (0);
var state_23991__$1 = (function (){var statearr_24034 = state_23991;
(statearr_24034[(30)] = inst_23925);

(statearr_24034[(29)] = inst_23923__$1);

(statearr_24034[(20)] = inst_23933);

(statearr_24034[(9)] = inst_23934);

(statearr_24034[(21)] = inst_23931);

(statearr_24034[(11)] = inst_23932);

return statearr_24034;
})();
var statearr_24035_24106 = state_23991__$1;
(statearr_24035_24106[(2)] = null);

(statearr_24035_24106[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (28))){
var inst_23950 = (state_23991[(25)]);
var inst_23931 = (state_23991[(21)]);
var inst_23950__$1 = cljs.core.seq(inst_23931);
var state_23991__$1 = (function (){var statearr_24036 = state_23991;
(statearr_24036[(25)] = inst_23950__$1);

return statearr_24036;
})();
if(inst_23950__$1){
var statearr_24037_24107 = state_23991__$1;
(statearr_24037_24107[(1)] = (33));

} else {
var statearr_24038_24108 = state_23991__$1;
(statearr_24038_24108[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (25))){
var inst_23933 = (state_23991[(20)]);
var inst_23934 = (state_23991[(9)]);
var inst_23936 = (inst_23934 < inst_23933);
var inst_23937 = inst_23936;
var state_23991__$1 = state_23991;
if(cljs.core.truth_(inst_23937)){
var statearr_24039_24109 = state_23991__$1;
(statearr_24039_24109[(1)] = (27));

} else {
var statearr_24040_24110 = state_23991__$1;
(statearr_24040_24110[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (34))){
var state_23991__$1 = state_23991;
var statearr_24041_24111 = state_23991__$1;
(statearr_24041_24111[(2)] = null);

(statearr_24041_24111[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (17))){
var state_23991__$1 = state_23991;
var statearr_24042_24112 = state_23991__$1;
(statearr_24042_24112[(2)] = null);

(statearr_24042_24112[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (3))){
var inst_23989 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23991__$1,inst_23989);
} else {
if((state_val_23992 === (12))){
var inst_23918 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24043_24113 = state_23991__$1;
(statearr_24043_24113[(2)] = inst_23918);

(statearr_24043_24113[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (2))){
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23991__$1,(4),ch);
} else {
if((state_val_23992 === (23))){
var state_23991__$1 = state_23991;
var statearr_24044_24114 = state_23991__$1;
(statearr_24044_24114[(2)] = null);

(statearr_24044_24114[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (35))){
var inst_23973 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24045_24115 = state_23991__$1;
(statearr_24045_24115[(2)] = inst_23973);

(statearr_24045_24115[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (19))){
var inst_23890 = (state_23991[(7)]);
var inst_23894 = cljs.core.chunk_first(inst_23890);
var inst_23895 = cljs.core.chunk_rest(inst_23890);
var inst_23896 = cljs.core.count(inst_23894);
var inst_23868 = inst_23895;
var inst_23869 = inst_23894;
var inst_23870 = inst_23896;
var inst_23871 = (0);
var state_23991__$1 = (function (){var statearr_24046 = state_23991;
(statearr_24046[(13)] = inst_23871);

(statearr_24046[(14)] = inst_23868);

(statearr_24046[(15)] = inst_23869);

(statearr_24046[(17)] = inst_23870);

return statearr_24046;
})();
var statearr_24047_24116 = state_23991__$1;
(statearr_24047_24116[(2)] = null);

(statearr_24047_24116[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (11))){
var inst_23868 = (state_23991[(14)]);
var inst_23890 = (state_23991[(7)]);
var inst_23890__$1 = cljs.core.seq(inst_23868);
var state_23991__$1 = (function (){var statearr_24048 = state_23991;
(statearr_24048[(7)] = inst_23890__$1);

return statearr_24048;
})();
if(inst_23890__$1){
var statearr_24049_24117 = state_23991__$1;
(statearr_24049_24117[(1)] = (16));

} else {
var statearr_24050_24118 = state_23991__$1;
(statearr_24050_24118[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (9))){
var inst_23920 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24051_24119 = state_23991__$1;
(statearr_24051_24119[(2)] = inst_23920);

(statearr_24051_24119[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (5))){
var inst_23866 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23867 = cljs.core.seq(inst_23866);
var inst_23868 = inst_23867;
var inst_23869 = null;
var inst_23870 = (0);
var inst_23871 = (0);
var state_23991__$1 = (function (){var statearr_24052 = state_23991;
(statearr_24052[(13)] = inst_23871);

(statearr_24052[(14)] = inst_23868);

(statearr_24052[(15)] = inst_23869);

(statearr_24052[(17)] = inst_23870);

return statearr_24052;
})();
var statearr_24053_24120 = state_23991__$1;
(statearr_24053_24120[(2)] = null);

(statearr_24053_24120[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (14))){
var state_23991__$1 = state_23991;
var statearr_24054_24121 = state_23991__$1;
(statearr_24054_24121[(2)] = null);

(statearr_24054_24121[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (45))){
var inst_23981 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24055_24122 = state_23991__$1;
(statearr_24055_24122[(2)] = inst_23981);

(statearr_24055_24122[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (26))){
var inst_23923 = (state_23991[(29)]);
var inst_23977 = (state_23991[(2)]);
var inst_23978 = cljs.core.seq(inst_23923);
var state_23991__$1 = (function (){var statearr_24056 = state_23991;
(statearr_24056[(31)] = inst_23977);

return statearr_24056;
})();
if(inst_23978){
var statearr_24057_24123 = state_23991__$1;
(statearr_24057_24123[(1)] = (42));

} else {
var statearr_24058_24124 = state_23991__$1;
(statearr_24058_24124[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (16))){
var inst_23890 = (state_23991[(7)]);
var inst_23892 = cljs.core.chunked_seq_QMARK_(inst_23890);
var state_23991__$1 = state_23991;
if(inst_23892){
var statearr_24059_24125 = state_23991__$1;
(statearr_24059_24125[(1)] = (19));

} else {
var statearr_24060_24126 = state_23991__$1;
(statearr_24060_24126[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (38))){
var inst_23970 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24061_24127 = state_23991__$1;
(statearr_24061_24127[(2)] = inst_23970);

(statearr_24061_24127[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (30))){
var state_23991__$1 = state_23991;
var statearr_24062_24128 = state_23991__$1;
(statearr_24062_24128[(2)] = null);

(statearr_24062_24128[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (10))){
var inst_23871 = (state_23991[(13)]);
var inst_23869 = (state_23991[(15)]);
var inst_23879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23869,inst_23871);
var inst_23880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23879,(0),null);
var inst_23881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23879,(1),null);
var state_23991__$1 = (function (){var statearr_24063 = state_23991;
(statearr_24063[(26)] = inst_23880);

return statearr_24063;
})();
if(cljs.core.truth_(inst_23881)){
var statearr_24064_24129 = state_23991__$1;
(statearr_24064_24129[(1)] = (13));

} else {
var statearr_24065_24130 = state_23991__$1;
(statearr_24065_24130[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (18))){
var inst_23916 = (state_23991[(2)]);
var state_23991__$1 = state_23991;
var statearr_24066_24131 = state_23991__$1;
(statearr_24066_24131[(2)] = inst_23916);

(statearr_24066_24131[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (42))){
var state_23991__$1 = state_23991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23991__$1,(45),dchan);
} else {
if((state_val_23992 === (37))){
var inst_23959 = (state_23991[(23)]);
var inst_23950 = (state_23991[(25)]);
var inst_23859 = (state_23991[(12)]);
var inst_23959__$1 = cljs.core.first(inst_23950);
var inst_23960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23959__$1,inst_23859,done);
var state_23991__$1 = (function (){var statearr_24067 = state_23991;
(statearr_24067[(23)] = inst_23959__$1);

return statearr_24067;
})();
if(cljs.core.truth_(inst_23960)){
var statearr_24068_24132 = state_23991__$1;
(statearr_24068_24132[(1)] = (39));

} else {
var statearr_24069_24133 = state_23991__$1;
(statearr_24069_24133[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23992 === (8))){
var inst_23871 = (state_23991[(13)]);
var inst_23870 = (state_23991[(17)]);
var inst_23873 = (inst_23871 < inst_23870);
var inst_23874 = inst_23873;
var state_23991__$1 = state_23991;
if(cljs.core.truth_(inst_23874)){
var statearr_24070_24134 = state_23991__$1;
(statearr_24070_24134[(1)] = (10));

} else {
var statearr_24071_24135 = state_23991__$1;
(statearr_24071_24135[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24081,cs,m,dchan,dctr,done))
;
return ((function (switch__22669__auto__,c__22783__auto___24081,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22670__auto__ = null;
var cljs$core$async$mult_$_state_machine__22670__auto____0 = (function (){
var statearr_24075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24075[(0)] = cljs$core$async$mult_$_state_machine__22670__auto__);

(statearr_24075[(1)] = (1));

return statearr_24075;
});
var cljs$core$async$mult_$_state_machine__22670__auto____1 = (function (state_23991){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_23991);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24076){if((e24076 instanceof Object)){
var ex__22673__auto__ = e24076;
var statearr_24077_24136 = state_23991;
(statearr_24077_24136[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23991);

return cljs.core.cst$kw$recur;
} else {
throw e24076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24137 = state_23991;
state_23991 = G__24137;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22670__auto__ = function(state_23991){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22670__auto____1.call(this,state_23991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22670__auto____0;
cljs$core$async$mult_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22670__auto____1;
return cljs$core$async$mult_$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24081,cs,m,dchan,dctr,done))
})();
var state__22785__auto__ = (function (){var statearr_24078 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24081);

return statearr_24078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24081,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24138 = [];
var len__7319__auto___24141 = arguments.length;
var i__7320__auto___24142 = (0);
while(true){
if((i__7320__auto___24142 < len__7319__auto___24141)){
args24138.push((arguments[i__7320__auto___24142]));

var G__24143 = (i__7320__auto___24142 + (1));
i__7320__auto___24142 = G__24143;
continue;
} else {
}
break;
}

var G__24140 = args24138.length;
switch (G__24140) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24138.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto__.call(null,m,ch));
} else {
var m__6908__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto__.call(null,m,ch));
} else {
var m__6908__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6908__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6908__auto__.call(null,m));
} else {
var m__6908__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6908__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6908__auto__.call(null,m,state_map));
} else {
var m__6908__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6908__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6907__auto__ = (((m == null))?null:m);
var m__6908__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6908__auto__.call(null,m,mode));
} else {
var m__6908__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6908__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7326__auto__ = [];
var len__7319__auto___24155 = arguments.length;
var i__7320__auto___24156 = (0);
while(true){
if((i__7320__auto___24156 < len__7319__auto___24155)){
args__7326__auto__.push((arguments[i__7320__auto___24156]));

var G__24157 = (i__7320__auto___24156 + (1));
i__7320__auto___24156 = G__24157;
continue;
} else {
}
break;
}

var argseq__7327__auto__ = ((((3) < args__7326__auto__.length))?(new cljs.core.IndexedSeq(args__7326__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7327__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24149){
var map__24150 = p__24149;
var map__24150__$1 = ((((!((map__24150 == null)))?((((map__24150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24150):map__24150);
var opts = map__24150__$1;
var statearr_24152_24158 = state;
(statearr_24152_24158[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__24150,map__24150__$1,opts){
return (function (val){
var statearr_24153_24159 = state;
(statearr_24153_24159[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24150,map__24150__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24154_24160 = state;
(statearr_24154_24160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24145){
var G__24146 = cljs.core.first(seq24145);
var seq24145__$1 = cljs.core.next(seq24145);
var G__24147 = cljs.core.first(seq24145__$1);
var seq24145__$2 = cljs.core.next(seq24145__$1);
var G__24148 = cljs.core.first(seq24145__$2);
var seq24145__$3 = cljs.core.next(seq24145__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24146,G__24147,G__24148,seq24145__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__24329 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24329) : cljs.core.atom.call(null,G__24329));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24330 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24331){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24331 = meta24331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24332,meta24331__$1){
var self__ = this;
var _24332__$1 = this;
return (new cljs.core.async.t_cljs$core$async24330(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24332){
var self__ = this;
var _24332__$1 = this;
return self__.meta24331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24333_24497 = self__.cs;
var G__24334_24498 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24333_24497,G__24334_24498) : cljs.core.reset_BANG_.call(null,G__24333_24497,G__24334_24498));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta24331], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24330";

cljs.core.async.t_cljs$core$async24330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24331){
return (new cljs.core.async.t_cljs$core$async24330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24330(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22783__auto___24499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24434){
var state_val_24435 = (state_24434[(1)]);
if((state_val_24435 === (7))){
var inst_24350 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24436_24500 = state_24434__$1;
(statearr_24436_24500[(2)] = inst_24350);

(statearr_24436_24500[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (20))){
var inst_24362 = (state_24434[(7)]);
var state_24434__$1 = state_24434;
var statearr_24437_24501 = state_24434__$1;
(statearr_24437_24501[(2)] = inst_24362);

(statearr_24437_24501[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (27))){
var state_24434__$1 = state_24434;
var statearr_24438_24502 = state_24434__$1;
(statearr_24438_24502[(2)] = null);

(statearr_24438_24502[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (1))){
var inst_24338 = (state_24434[(8)]);
var inst_24338__$1 = calc_state();
var inst_24340 = (inst_24338__$1 == null);
var inst_24341 = cljs.core.not(inst_24340);
var state_24434__$1 = (function (){var statearr_24439 = state_24434;
(statearr_24439[(8)] = inst_24338__$1);

return statearr_24439;
})();
if(inst_24341){
var statearr_24440_24503 = state_24434__$1;
(statearr_24440_24503[(1)] = (2));

} else {
var statearr_24441_24504 = state_24434__$1;
(statearr_24441_24504[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (24))){
var inst_24385 = (state_24434[(9)]);
var inst_24394 = (state_24434[(10)]);
var inst_24408 = (state_24434[(11)]);
var inst_24408__$1 = (inst_24385.cljs$core$IFn$_invoke$arity$1 ? inst_24385.cljs$core$IFn$_invoke$arity$1(inst_24394) : inst_24385.call(null,inst_24394));
var state_24434__$1 = (function (){var statearr_24442 = state_24434;
(statearr_24442[(11)] = inst_24408__$1);

return statearr_24442;
})();
if(cljs.core.truth_(inst_24408__$1)){
var statearr_24443_24505 = state_24434__$1;
(statearr_24443_24505[(1)] = (29));

} else {
var statearr_24444_24506 = state_24434__$1;
(statearr_24444_24506[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (4))){
var inst_24353 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24353)){
var statearr_24445_24507 = state_24434__$1;
(statearr_24445_24507[(1)] = (8));

} else {
var statearr_24446_24508 = state_24434__$1;
(statearr_24446_24508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (15))){
var inst_24379 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24379)){
var statearr_24447_24509 = state_24434__$1;
(statearr_24447_24509[(1)] = (19));

} else {
var statearr_24448_24510 = state_24434__$1;
(statearr_24448_24510[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (21))){
var inst_24384 = (state_24434[(12)]);
var inst_24384__$1 = (state_24434[(2)]);
var inst_24385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24384__$1,cljs.core.cst$kw$solos);
var inst_24386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24384__$1,cljs.core.cst$kw$mutes);
var inst_24387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24384__$1,cljs.core.cst$kw$reads);
var state_24434__$1 = (function (){var statearr_24449 = state_24434;
(statearr_24449[(12)] = inst_24384__$1);

(statearr_24449[(9)] = inst_24385);

(statearr_24449[(13)] = inst_24386);

return statearr_24449;
})();
return cljs.core.async.ioc_alts_BANG_(state_24434__$1,(22),inst_24387);
} else {
if((state_val_24435 === (31))){
var inst_24416 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24416)){
var statearr_24450_24511 = state_24434__$1;
(statearr_24450_24511[(1)] = (32));

} else {
var statearr_24451_24512 = state_24434__$1;
(statearr_24451_24512[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (32))){
var inst_24393 = (state_24434[(14)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24434__$1,(35),out,inst_24393);
} else {
if((state_val_24435 === (33))){
var inst_24384 = (state_24434[(12)]);
var inst_24362 = inst_24384;
var state_24434__$1 = (function (){var statearr_24452 = state_24434;
(statearr_24452[(7)] = inst_24362);

return statearr_24452;
})();
var statearr_24453_24513 = state_24434__$1;
(statearr_24453_24513[(2)] = null);

(statearr_24453_24513[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (13))){
var inst_24362 = (state_24434[(7)]);
var inst_24369 = inst_24362.cljs$lang$protocol_mask$partition0$;
var inst_24370 = (inst_24369 & (64));
var inst_24371 = inst_24362.cljs$core$ISeq$;
var inst_24372 = (inst_24370) || (inst_24371);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24372)){
var statearr_24454_24514 = state_24434__$1;
(statearr_24454_24514[(1)] = (16));

} else {
var statearr_24455_24515 = state_24434__$1;
(statearr_24455_24515[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (22))){
var inst_24394 = (state_24434[(10)]);
var inst_24393 = (state_24434[(14)]);
var inst_24392 = (state_24434[(2)]);
var inst_24393__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24392,(0),null);
var inst_24394__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24392,(1),null);
var inst_24395 = (inst_24393__$1 == null);
var inst_24396 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24394__$1,change);
var inst_24397 = (inst_24395) || (inst_24396);
var state_24434__$1 = (function (){var statearr_24456 = state_24434;
(statearr_24456[(10)] = inst_24394__$1);

(statearr_24456[(14)] = inst_24393__$1);

return statearr_24456;
})();
if(cljs.core.truth_(inst_24397)){
var statearr_24457_24516 = state_24434__$1;
(statearr_24457_24516[(1)] = (23));

} else {
var statearr_24458_24517 = state_24434__$1;
(statearr_24458_24517[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (36))){
var inst_24384 = (state_24434[(12)]);
var inst_24362 = inst_24384;
var state_24434__$1 = (function (){var statearr_24459 = state_24434;
(statearr_24459[(7)] = inst_24362);

return statearr_24459;
})();
var statearr_24460_24518 = state_24434__$1;
(statearr_24460_24518[(2)] = null);

(statearr_24460_24518[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (29))){
var inst_24408 = (state_24434[(11)]);
var state_24434__$1 = state_24434;
var statearr_24461_24519 = state_24434__$1;
(statearr_24461_24519[(2)] = inst_24408);

(statearr_24461_24519[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (6))){
var state_24434__$1 = state_24434;
var statearr_24462_24520 = state_24434__$1;
(statearr_24462_24520[(2)] = false);

(statearr_24462_24520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (28))){
var inst_24404 = (state_24434[(2)]);
var inst_24405 = calc_state();
var inst_24362 = inst_24405;
var state_24434__$1 = (function (){var statearr_24463 = state_24434;
(statearr_24463[(7)] = inst_24362);

(statearr_24463[(15)] = inst_24404);

return statearr_24463;
})();
var statearr_24464_24521 = state_24434__$1;
(statearr_24464_24521[(2)] = null);

(statearr_24464_24521[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (25))){
var inst_24430 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24465_24522 = state_24434__$1;
(statearr_24465_24522[(2)] = inst_24430);

(statearr_24465_24522[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (34))){
var inst_24428 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24466_24523 = state_24434__$1;
(statearr_24466_24523[(2)] = inst_24428);

(statearr_24466_24523[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (17))){
var state_24434__$1 = state_24434;
var statearr_24467_24524 = state_24434__$1;
(statearr_24467_24524[(2)] = false);

(statearr_24467_24524[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (3))){
var state_24434__$1 = state_24434;
var statearr_24468_24525 = state_24434__$1;
(statearr_24468_24525[(2)] = false);

(statearr_24468_24525[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (12))){
var inst_24432 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24434__$1,inst_24432);
} else {
if((state_val_24435 === (2))){
var inst_24338 = (state_24434[(8)]);
var inst_24343 = inst_24338.cljs$lang$protocol_mask$partition0$;
var inst_24344 = (inst_24343 & (64));
var inst_24345 = inst_24338.cljs$core$ISeq$;
var inst_24346 = (inst_24344) || (inst_24345);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24346)){
var statearr_24469_24526 = state_24434__$1;
(statearr_24469_24526[(1)] = (5));

} else {
var statearr_24470_24527 = state_24434__$1;
(statearr_24470_24527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (23))){
var inst_24393 = (state_24434[(14)]);
var inst_24399 = (inst_24393 == null);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24399)){
var statearr_24471_24528 = state_24434__$1;
(statearr_24471_24528[(1)] = (26));

} else {
var statearr_24472_24529 = state_24434__$1;
(statearr_24472_24529[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (35))){
var inst_24419 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24419)){
var statearr_24473_24530 = state_24434__$1;
(statearr_24473_24530[(1)] = (36));

} else {
var statearr_24474_24531 = state_24434__$1;
(statearr_24474_24531[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (19))){
var inst_24362 = (state_24434[(7)]);
var inst_24381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24362);
var state_24434__$1 = state_24434;
var statearr_24475_24532 = state_24434__$1;
(statearr_24475_24532[(2)] = inst_24381);

(statearr_24475_24532[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (11))){
var inst_24362 = (state_24434[(7)]);
var inst_24366 = (inst_24362 == null);
var inst_24367 = cljs.core.not(inst_24366);
var state_24434__$1 = state_24434;
if(inst_24367){
var statearr_24476_24533 = state_24434__$1;
(statearr_24476_24533[(1)] = (13));

} else {
var statearr_24477_24534 = state_24434__$1;
(statearr_24477_24534[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (9))){
var inst_24338 = (state_24434[(8)]);
var state_24434__$1 = state_24434;
var statearr_24478_24535 = state_24434__$1;
(statearr_24478_24535[(2)] = inst_24338);

(statearr_24478_24535[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (5))){
var state_24434__$1 = state_24434;
var statearr_24479_24536 = state_24434__$1;
(statearr_24479_24536[(2)] = true);

(statearr_24479_24536[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (14))){
var state_24434__$1 = state_24434;
var statearr_24480_24537 = state_24434__$1;
(statearr_24480_24537[(2)] = false);

(statearr_24480_24537[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (26))){
var inst_24394 = (state_24434[(10)]);
var inst_24401 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24394);
var state_24434__$1 = state_24434;
var statearr_24481_24538 = state_24434__$1;
(statearr_24481_24538[(2)] = inst_24401);

(statearr_24481_24538[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (16))){
var state_24434__$1 = state_24434;
var statearr_24482_24539 = state_24434__$1;
(statearr_24482_24539[(2)] = true);

(statearr_24482_24539[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (38))){
var inst_24424 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24483_24540 = state_24434__$1;
(statearr_24483_24540[(2)] = inst_24424);

(statearr_24483_24540[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (30))){
var inst_24385 = (state_24434[(9)]);
var inst_24394 = (state_24434[(10)]);
var inst_24386 = (state_24434[(13)]);
var inst_24411 = cljs.core.empty_QMARK_(inst_24385);
var inst_24412 = (inst_24386.cljs$core$IFn$_invoke$arity$1 ? inst_24386.cljs$core$IFn$_invoke$arity$1(inst_24394) : inst_24386.call(null,inst_24394));
var inst_24413 = cljs.core.not(inst_24412);
var inst_24414 = (inst_24411) && (inst_24413);
var state_24434__$1 = state_24434;
var statearr_24484_24541 = state_24434__$1;
(statearr_24484_24541[(2)] = inst_24414);

(statearr_24484_24541[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (10))){
var inst_24338 = (state_24434[(8)]);
var inst_24358 = (state_24434[(2)]);
var inst_24359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24358,cljs.core.cst$kw$solos);
var inst_24360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24358,cljs.core.cst$kw$mutes);
var inst_24361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24358,cljs.core.cst$kw$reads);
var inst_24362 = inst_24338;
var state_24434__$1 = (function (){var statearr_24485 = state_24434;
(statearr_24485[(16)] = inst_24360);

(statearr_24485[(17)] = inst_24361);

(statearr_24485[(7)] = inst_24362);

(statearr_24485[(18)] = inst_24359);

return statearr_24485;
})();
var statearr_24486_24542 = state_24434__$1;
(statearr_24486_24542[(2)] = null);

(statearr_24486_24542[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (18))){
var inst_24376 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24487_24543 = state_24434__$1;
(statearr_24487_24543[(2)] = inst_24376);

(statearr_24487_24543[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (37))){
var state_24434__$1 = state_24434;
var statearr_24488_24544 = state_24434__$1;
(statearr_24488_24544[(2)] = null);

(statearr_24488_24544[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24435 === (8))){
var inst_24338 = (state_24434[(8)]);
var inst_24355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24338);
var state_24434__$1 = state_24434;
var statearr_24489_24545 = state_24434__$1;
(statearr_24489_24545[(2)] = inst_24355);

(statearr_24489_24545[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22669__auto__,c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22670__auto__ = null;
var cljs$core$async$mix_$_state_machine__22670__auto____0 = (function (){
var statearr_24493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24493[(0)] = cljs$core$async$mix_$_state_machine__22670__auto__);

(statearr_24493[(1)] = (1));

return statearr_24493;
});
var cljs$core$async$mix_$_state_machine__22670__auto____1 = (function (state_24434){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_24434);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24494){if((e24494 instanceof Object)){
var ex__22673__auto__ = e24494;
var statearr_24495_24546 = state_24434;
(statearr_24495_24546[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24434);

return cljs.core.cst$kw$recur;
} else {
throw e24494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24547 = state_24434;
state_24434 = G__24547;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22670__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22670__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22670__auto____0;
cljs$core$async$mix_$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22670__auto____1;
return cljs$core$async$mix_$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22785__auto__ = (function (){var statearr_24496 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24499);

return statearr_24496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6907__auto__ = (((p == null))?null:p);
var m__6908__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6908__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6908__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6908__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6907__auto__ = (((p == null))?null:p);
var m__6908__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6908__auto__.call(null,p,v,ch));
} else {
var m__6908__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6908__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24548 = [];
var len__7319__auto___24551 = arguments.length;
var i__7320__auto___24552 = (0);
while(true){
if((i__7320__auto___24552 < len__7319__auto___24551)){
args24548.push((arguments[i__7320__auto___24552]));

var G__24553 = (i__7320__auto___24552 + (1));
i__7320__auto___24552 = G__24553;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6907__auto__ = (((p == null))?null:p);
var m__6908__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6908__auto__.call(null,p));
} else {
var m__6908__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6908__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6907__auto__ = (((p == null))?null:p);
var m__6908__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6907__auto__)]);
if(!((m__6908__auto__ == null))){
return (m__6908__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6908__auto__.call(null,p,v));
} else {
var m__6908__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6908__auto____$1 == null))){
return (m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6908__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6908__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24556 = [];
var len__7319__auto___24684 = arguments.length;
var i__7320__auto___24685 = (0);
while(true){
if((i__7320__auto___24685 < len__7319__auto___24684)){
args24556.push((arguments[i__7320__auto___24685]));

var G__24686 = (i__7320__auto___24685 + (1));
i__7320__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var G__24558 = args24556.length;
switch (G__24558) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24556.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__24559 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24559) : cljs.core.atom.call(null,G__24559));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6244__auto__)){
return or__6244__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6244__auto__,mults){
return (function (p1__24555_SHARP_){
if(cljs.core.truth_((p1__24555_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24555_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24555_SHARP_.call(null,topic)))){
return p1__24555_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24555_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6244__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24560 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24561){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24561 = meta24561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24562,meta24561__$1){
var self__ = this;
var _24562__$1 = this;
return (new cljs.core.async.t_cljs$core$async24560(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24561__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24562){
var self__ = this;
var _24562__$1 = this;
return self__.meta24561;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24563 = self__.mults;
var G__24564 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24563,G__24564) : cljs.core.reset_BANG_.call(null,G__24563,G__24564));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24561], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24560";

cljs.core.async.t_cljs$core$async24560.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24560");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24560 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24560(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24561){
return (new cljs.core.async.t_cljs$core$async24560(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24561));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24560(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22783__auto___24688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24688,mults,ensure_mult,p){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24688,mults,ensure_mult,p){
return (function (state_24636){
var state_val_24637 = (state_24636[(1)]);
if((state_val_24637 === (7))){
var inst_24632 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24638_24689 = state_24636__$1;
(statearr_24638_24689[(2)] = inst_24632);

(statearr_24638_24689[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (20))){
var state_24636__$1 = state_24636;
var statearr_24639_24690 = state_24636__$1;
(statearr_24639_24690[(2)] = null);

(statearr_24639_24690[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (1))){
var state_24636__$1 = state_24636;
var statearr_24640_24691 = state_24636__$1;
(statearr_24640_24691[(2)] = null);

(statearr_24640_24691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (24))){
var inst_24615 = (state_24636[(7)]);
var inst_24624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24615);
var state_24636__$1 = state_24636;
var statearr_24641_24692 = state_24636__$1;
(statearr_24641_24692[(2)] = inst_24624);

(statearr_24641_24692[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (4))){
var inst_24567 = (state_24636[(8)]);
var inst_24567__$1 = (state_24636[(2)]);
var inst_24568 = (inst_24567__$1 == null);
var state_24636__$1 = (function (){var statearr_24642 = state_24636;
(statearr_24642[(8)] = inst_24567__$1);

return statearr_24642;
})();
if(cljs.core.truth_(inst_24568)){
var statearr_24643_24693 = state_24636__$1;
(statearr_24643_24693[(1)] = (5));

} else {
var statearr_24644_24694 = state_24636__$1;
(statearr_24644_24694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (15))){
var inst_24609 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24645_24695 = state_24636__$1;
(statearr_24645_24695[(2)] = inst_24609);

(statearr_24645_24695[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (21))){
var inst_24629 = (state_24636[(2)]);
var state_24636__$1 = (function (){var statearr_24646 = state_24636;
(statearr_24646[(9)] = inst_24629);

return statearr_24646;
})();
var statearr_24647_24696 = state_24636__$1;
(statearr_24647_24696[(2)] = null);

(statearr_24647_24696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (13))){
var inst_24591 = (state_24636[(10)]);
var inst_24593 = cljs.core.chunked_seq_QMARK_(inst_24591);
var state_24636__$1 = state_24636;
if(inst_24593){
var statearr_24648_24697 = state_24636__$1;
(statearr_24648_24697[(1)] = (16));

} else {
var statearr_24649_24698 = state_24636__$1;
(statearr_24649_24698[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (22))){
var inst_24621 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
if(cljs.core.truth_(inst_24621)){
var statearr_24650_24699 = state_24636__$1;
(statearr_24650_24699[(1)] = (23));

} else {
var statearr_24651_24700 = state_24636__$1;
(statearr_24651_24700[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (6))){
var inst_24615 = (state_24636[(7)]);
var inst_24567 = (state_24636[(8)]);
var inst_24617 = (state_24636[(11)]);
var inst_24615__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24567) : topic_fn.call(null,inst_24567));
var inst_24616 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24617__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24616,inst_24615__$1);
var state_24636__$1 = (function (){var statearr_24652 = state_24636;
(statearr_24652[(7)] = inst_24615__$1);

(statearr_24652[(11)] = inst_24617__$1);

return statearr_24652;
})();
if(cljs.core.truth_(inst_24617__$1)){
var statearr_24653_24701 = state_24636__$1;
(statearr_24653_24701[(1)] = (19));

} else {
var statearr_24654_24702 = state_24636__$1;
(statearr_24654_24702[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (25))){
var inst_24626 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24655_24703 = state_24636__$1;
(statearr_24655_24703[(2)] = inst_24626);

(statearr_24655_24703[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (17))){
var inst_24591 = (state_24636[(10)]);
var inst_24600 = cljs.core.first(inst_24591);
var inst_24601 = cljs.core.async.muxch_STAR_(inst_24600);
var inst_24602 = cljs.core.async.close_BANG_(inst_24601);
var inst_24603 = cljs.core.next(inst_24591);
var inst_24577 = inst_24603;
var inst_24578 = null;
var inst_24579 = (0);
var inst_24580 = (0);
var state_24636__$1 = (function (){var statearr_24656 = state_24636;
(statearr_24656[(12)] = inst_24602);

(statearr_24656[(13)] = inst_24579);

(statearr_24656[(14)] = inst_24580);

(statearr_24656[(15)] = inst_24577);

(statearr_24656[(16)] = inst_24578);

return statearr_24656;
})();
var statearr_24657_24704 = state_24636__$1;
(statearr_24657_24704[(2)] = null);

(statearr_24657_24704[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (3))){
var inst_24634 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24636__$1,inst_24634);
} else {
if((state_val_24637 === (12))){
var inst_24611 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24658_24705 = state_24636__$1;
(statearr_24658_24705[(2)] = inst_24611);

(statearr_24658_24705[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (2))){
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24636__$1,(4),ch);
} else {
if((state_val_24637 === (23))){
var state_24636__$1 = state_24636;
var statearr_24659_24706 = state_24636__$1;
(statearr_24659_24706[(2)] = null);

(statearr_24659_24706[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (19))){
var inst_24567 = (state_24636[(8)]);
var inst_24617 = (state_24636[(11)]);
var inst_24619 = cljs.core.async.muxch_STAR_(inst_24617);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24636__$1,(22),inst_24619,inst_24567);
} else {
if((state_val_24637 === (11))){
var inst_24591 = (state_24636[(10)]);
var inst_24577 = (state_24636[(15)]);
var inst_24591__$1 = cljs.core.seq(inst_24577);
var state_24636__$1 = (function (){var statearr_24660 = state_24636;
(statearr_24660[(10)] = inst_24591__$1);

return statearr_24660;
})();
if(inst_24591__$1){
var statearr_24661_24707 = state_24636__$1;
(statearr_24661_24707[(1)] = (13));

} else {
var statearr_24662_24708 = state_24636__$1;
(statearr_24662_24708[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (9))){
var inst_24613 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24663_24709 = state_24636__$1;
(statearr_24663_24709[(2)] = inst_24613);

(statearr_24663_24709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (5))){
var inst_24574 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24575 = cljs.core.vals(inst_24574);
var inst_24576 = cljs.core.seq(inst_24575);
var inst_24577 = inst_24576;
var inst_24578 = null;
var inst_24579 = (0);
var inst_24580 = (0);
var state_24636__$1 = (function (){var statearr_24664 = state_24636;
(statearr_24664[(13)] = inst_24579);

(statearr_24664[(14)] = inst_24580);

(statearr_24664[(15)] = inst_24577);

(statearr_24664[(16)] = inst_24578);

return statearr_24664;
})();
var statearr_24665_24710 = state_24636__$1;
(statearr_24665_24710[(2)] = null);

(statearr_24665_24710[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (14))){
var state_24636__$1 = state_24636;
var statearr_24669_24711 = state_24636__$1;
(statearr_24669_24711[(2)] = null);

(statearr_24669_24711[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (16))){
var inst_24591 = (state_24636[(10)]);
var inst_24595 = cljs.core.chunk_first(inst_24591);
var inst_24596 = cljs.core.chunk_rest(inst_24591);
var inst_24597 = cljs.core.count(inst_24595);
var inst_24577 = inst_24596;
var inst_24578 = inst_24595;
var inst_24579 = inst_24597;
var inst_24580 = (0);
var state_24636__$1 = (function (){var statearr_24670 = state_24636;
(statearr_24670[(13)] = inst_24579);

(statearr_24670[(14)] = inst_24580);

(statearr_24670[(15)] = inst_24577);

(statearr_24670[(16)] = inst_24578);

return statearr_24670;
})();
var statearr_24671_24712 = state_24636__$1;
(statearr_24671_24712[(2)] = null);

(statearr_24671_24712[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (10))){
var inst_24579 = (state_24636[(13)]);
var inst_24580 = (state_24636[(14)]);
var inst_24577 = (state_24636[(15)]);
var inst_24578 = (state_24636[(16)]);
var inst_24585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24578,inst_24580);
var inst_24586 = cljs.core.async.muxch_STAR_(inst_24585);
var inst_24587 = cljs.core.async.close_BANG_(inst_24586);
var inst_24588 = (inst_24580 + (1));
var tmp24666 = inst_24579;
var tmp24667 = inst_24577;
var tmp24668 = inst_24578;
var inst_24577__$1 = tmp24667;
var inst_24578__$1 = tmp24668;
var inst_24579__$1 = tmp24666;
var inst_24580__$1 = inst_24588;
var state_24636__$1 = (function (){var statearr_24672 = state_24636;
(statearr_24672[(13)] = inst_24579__$1);

(statearr_24672[(14)] = inst_24580__$1);

(statearr_24672[(15)] = inst_24577__$1);

(statearr_24672[(17)] = inst_24587);

(statearr_24672[(16)] = inst_24578__$1);

return statearr_24672;
})();
var statearr_24673_24713 = state_24636__$1;
(statearr_24673_24713[(2)] = null);

(statearr_24673_24713[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (18))){
var inst_24606 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24674_24714 = state_24636__$1;
(statearr_24674_24714[(2)] = inst_24606);

(statearr_24674_24714[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24637 === (8))){
var inst_24579 = (state_24636[(13)]);
var inst_24580 = (state_24636[(14)]);
var inst_24582 = (inst_24580 < inst_24579);
var inst_24583 = inst_24582;
var state_24636__$1 = state_24636;
if(cljs.core.truth_(inst_24583)){
var statearr_24675_24715 = state_24636__$1;
(statearr_24675_24715[(1)] = (10));

} else {
var statearr_24676_24716 = state_24636__$1;
(statearr_24676_24716[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24688,mults,ensure_mult,p))
;
return ((function (switch__22669__auto__,c__22783__auto___24688,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_24680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24680[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_24680[(1)] = (1));

return statearr_24680;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_24636){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_24636);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24681){if((e24681 instanceof Object)){
var ex__22673__auto__ = e24681;
var statearr_24682_24717 = state_24636;
(statearr_24682_24717[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24636);

return cljs.core.cst$kw$recur;
} else {
throw e24681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24718 = state_24636;
state_24636 = G__24718;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24688,mults,ensure_mult,p))
})();
var state__22785__auto__ = (function (){var statearr_24683 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24688);

return statearr_24683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24688,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24719 = [];
var len__7319__auto___24722 = arguments.length;
var i__7320__auto___24723 = (0);
while(true){
if((i__7320__auto___24723 < len__7319__auto___24722)){
args24719.push((arguments[i__7320__auto___24723]));

var G__24724 = (i__7320__auto___24723 + (1));
i__7320__auto___24723 = G__24724;
continue;
} else {
}
break;
}

var G__24721 = args24719.length;
switch (G__24721) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24719.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24726 = [];
var len__7319__auto___24729 = arguments.length;
var i__7320__auto___24730 = (0);
while(true){
if((i__7320__auto___24730 < len__7319__auto___24729)){
args24726.push((arguments[i__7320__auto___24730]));

var G__24731 = (i__7320__auto___24730 + (1));
i__7320__auto___24730 = G__24731;
continue;
} else {
}
break;
}

var G__24728 = args24726.length;
switch (G__24728) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24726.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24733 = [];
var len__7319__auto___24804 = arguments.length;
var i__7320__auto___24805 = (0);
while(true){
if((i__7320__auto___24805 < len__7319__auto___24804)){
args24733.push((arguments[i__7320__auto___24805]));

var G__24806 = (i__7320__auto___24805 + (1));
i__7320__auto___24805 = G__24806;
continue;
} else {
}
break;
}

var G__24735 = args24733.length;
switch (G__24735) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24733.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__22783__auto___24808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24774){
var state_val_24775 = (state_24774[(1)]);
if((state_val_24775 === (7))){
var state_24774__$1 = state_24774;
var statearr_24776_24809 = state_24774__$1;
(statearr_24776_24809[(2)] = null);

(statearr_24776_24809[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (1))){
var state_24774__$1 = state_24774;
var statearr_24777_24810 = state_24774__$1;
(statearr_24777_24810[(2)] = null);

(statearr_24777_24810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (4))){
var inst_24738 = (state_24774[(7)]);
var inst_24740 = (inst_24738 < cnt);
var state_24774__$1 = state_24774;
if(cljs.core.truth_(inst_24740)){
var statearr_24778_24811 = state_24774__$1;
(statearr_24778_24811[(1)] = (6));

} else {
var statearr_24779_24812 = state_24774__$1;
(statearr_24779_24812[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (15))){
var inst_24770 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24780_24813 = state_24774__$1;
(statearr_24780_24813[(2)] = inst_24770);

(statearr_24780_24813[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (13))){
var inst_24763 = cljs.core.async.close_BANG_(out);
var state_24774__$1 = state_24774;
var statearr_24781_24814 = state_24774__$1;
(statearr_24781_24814[(2)] = inst_24763);

(statearr_24781_24814[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (6))){
var state_24774__$1 = state_24774;
var statearr_24782_24815 = state_24774__$1;
(statearr_24782_24815[(2)] = null);

(statearr_24782_24815[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (3))){
var inst_24772 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24774__$1,inst_24772);
} else {
if((state_val_24775 === (12))){
var inst_24760 = (state_24774[(8)]);
var inst_24760__$1 = (state_24774[(2)]);
var inst_24761 = cljs.core.some(cljs.core.nil_QMARK_,inst_24760__$1);
var state_24774__$1 = (function (){var statearr_24783 = state_24774;
(statearr_24783[(8)] = inst_24760__$1);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24761)){
var statearr_24784_24816 = state_24774__$1;
(statearr_24784_24816[(1)] = (13));

} else {
var statearr_24785_24817 = state_24774__$1;
(statearr_24785_24817[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (2))){
var inst_24737 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_24738 = (0);
var state_24774__$1 = (function (){var statearr_24786 = state_24774;
(statearr_24786[(7)] = inst_24738);

(statearr_24786[(9)] = inst_24737);

return statearr_24786;
})();
var statearr_24787_24818 = state_24774__$1;
(statearr_24787_24818[(2)] = null);

(statearr_24787_24818[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (11))){
var inst_24738 = (state_24774[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24774,(10),Object,null,(9));
var inst_24747 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24738) : chs__$1.call(null,inst_24738));
var inst_24748 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24738) : done.call(null,inst_24738));
var inst_24749 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24747,inst_24748);
var state_24774__$1 = state_24774;
var statearr_24788_24819 = state_24774__$1;
(statearr_24788_24819[(2)] = inst_24749);


cljs.core.async.impl.ioc_helpers.process_exception(state_24774__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (9))){
var inst_24738 = (state_24774[(7)]);
var inst_24751 = (state_24774[(2)]);
var inst_24752 = (inst_24738 + (1));
var inst_24738__$1 = inst_24752;
var state_24774__$1 = (function (){var statearr_24789 = state_24774;
(statearr_24789[(7)] = inst_24738__$1);

(statearr_24789[(10)] = inst_24751);

return statearr_24789;
})();
var statearr_24790_24820 = state_24774__$1;
(statearr_24790_24820[(2)] = null);

(statearr_24790_24820[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (5))){
var inst_24758 = (state_24774[(2)]);
var state_24774__$1 = (function (){var statearr_24791 = state_24774;
(statearr_24791[(11)] = inst_24758);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24774__$1,(12),dchan);
} else {
if((state_val_24775 === (14))){
var inst_24760 = (state_24774[(8)]);
var inst_24765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24760);
var state_24774__$1 = state_24774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24774__$1,(16),out,inst_24765);
} else {
if((state_val_24775 === (16))){
var inst_24767 = (state_24774[(2)]);
var state_24774__$1 = (function (){var statearr_24792 = state_24774;
(statearr_24792[(12)] = inst_24767);

return statearr_24792;
})();
var statearr_24793_24821 = state_24774__$1;
(statearr_24793_24821[(2)] = null);

(statearr_24793_24821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (10))){
var inst_24742 = (state_24774[(2)]);
var inst_24743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24774__$1 = (function (){var statearr_24794 = state_24774;
(statearr_24794[(13)] = inst_24742);

return statearr_24794;
})();
var statearr_24795_24822 = state_24774__$1;
(statearr_24795_24822[(2)] = inst_24743);


cljs.core.async.impl.ioc_helpers.process_exception(state_24774__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24775 === (8))){
var inst_24756 = (state_24774[(2)]);
var state_24774__$1 = state_24774;
var statearr_24796_24823 = state_24774__$1;
(statearr_24796_24823[(2)] = inst_24756);

(statearr_24796_24823[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22669__auto__,c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_24800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24800[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_24800[(1)] = (1));

return statearr_24800;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_24774){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_24774);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24801){if((e24801 instanceof Object)){
var ex__22673__auto__ = e24801;
var statearr_24802_24824 = state_24774;
(statearr_24802_24824[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24774);

return cljs.core.cst$kw$recur;
} else {
throw e24801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24825 = state_24774;
state_24774 = G__24825;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_24774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_24774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22785__auto__ = (function (){var statearr_24803 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24808);

return statearr_24803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24808,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24827 = [];
var len__7319__auto___24885 = arguments.length;
var i__7320__auto___24886 = (0);
while(true){
if((i__7320__auto___24886 < len__7319__auto___24885)){
args24827.push((arguments[i__7320__auto___24886]));

var G__24887 = (i__7320__auto___24886 + (1));
i__7320__auto___24886 = G__24887;
continue;
} else {
}
break;
}

var G__24829 = args24827.length;
switch (G__24829) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24827.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___24889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24889,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24889,out){
return (function (state_24861){
var state_val_24862 = (state_24861[(1)]);
if((state_val_24862 === (7))){
var inst_24840 = (state_24861[(7)]);
var inst_24841 = (state_24861[(8)]);
var inst_24840__$1 = (state_24861[(2)]);
var inst_24841__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24840__$1,(0),null);
var inst_24842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24840__$1,(1),null);
var inst_24843 = (inst_24841__$1 == null);
var state_24861__$1 = (function (){var statearr_24863 = state_24861;
(statearr_24863[(9)] = inst_24842);

(statearr_24863[(7)] = inst_24840__$1);

(statearr_24863[(8)] = inst_24841__$1);

return statearr_24863;
})();
if(cljs.core.truth_(inst_24843)){
var statearr_24864_24890 = state_24861__$1;
(statearr_24864_24890[(1)] = (8));

} else {
var statearr_24865_24891 = state_24861__$1;
(statearr_24865_24891[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (1))){
var inst_24830 = cljs.core.vec(chs);
var inst_24831 = inst_24830;
var state_24861__$1 = (function (){var statearr_24866 = state_24861;
(statearr_24866[(10)] = inst_24831);

return statearr_24866;
})();
var statearr_24867_24892 = state_24861__$1;
(statearr_24867_24892[(2)] = null);

(statearr_24867_24892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (4))){
var inst_24831 = (state_24861[(10)]);
var state_24861__$1 = state_24861;
return cljs.core.async.ioc_alts_BANG_(state_24861__$1,(7),inst_24831);
} else {
if((state_val_24862 === (6))){
var inst_24857 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
var statearr_24868_24893 = state_24861__$1;
(statearr_24868_24893[(2)] = inst_24857);

(statearr_24868_24893[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (3))){
var inst_24859 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24861__$1,inst_24859);
} else {
if((state_val_24862 === (2))){
var inst_24831 = (state_24861[(10)]);
var inst_24833 = cljs.core.count(inst_24831);
var inst_24834 = (inst_24833 > (0));
var state_24861__$1 = state_24861;
if(cljs.core.truth_(inst_24834)){
var statearr_24870_24894 = state_24861__$1;
(statearr_24870_24894[(1)] = (4));

} else {
var statearr_24871_24895 = state_24861__$1;
(statearr_24871_24895[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (11))){
var inst_24831 = (state_24861[(10)]);
var inst_24850 = (state_24861[(2)]);
var tmp24869 = inst_24831;
var inst_24831__$1 = tmp24869;
var state_24861__$1 = (function (){var statearr_24872 = state_24861;
(statearr_24872[(10)] = inst_24831__$1);

(statearr_24872[(11)] = inst_24850);

return statearr_24872;
})();
var statearr_24873_24896 = state_24861__$1;
(statearr_24873_24896[(2)] = null);

(statearr_24873_24896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (9))){
var inst_24841 = (state_24861[(8)]);
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24861__$1,(11),out,inst_24841);
} else {
if((state_val_24862 === (5))){
var inst_24855 = cljs.core.async.close_BANG_(out);
var state_24861__$1 = state_24861;
var statearr_24874_24897 = state_24861__$1;
(statearr_24874_24897[(2)] = inst_24855);

(statearr_24874_24897[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (10))){
var inst_24853 = (state_24861[(2)]);
var state_24861__$1 = state_24861;
var statearr_24875_24898 = state_24861__$1;
(statearr_24875_24898[(2)] = inst_24853);

(statearr_24875_24898[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24862 === (8))){
var inst_24842 = (state_24861[(9)]);
var inst_24840 = (state_24861[(7)]);
var inst_24831 = (state_24861[(10)]);
var inst_24841 = (state_24861[(8)]);
var inst_24845 = (function (){var cs = inst_24831;
var vec__24836 = inst_24840;
var v = inst_24841;
var c = inst_24842;
return ((function (cs,vec__24836,v,c,inst_24842,inst_24840,inst_24831,inst_24841,state_val_24862,c__22783__auto___24889,out){
return (function (p1__24826_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24826_SHARP_);
});
;})(cs,vec__24836,v,c,inst_24842,inst_24840,inst_24831,inst_24841,state_val_24862,c__22783__auto___24889,out))
})();
var inst_24846 = cljs.core.filterv(inst_24845,inst_24831);
var inst_24831__$1 = inst_24846;
var state_24861__$1 = (function (){var statearr_24876 = state_24861;
(statearr_24876[(10)] = inst_24831__$1);

return statearr_24876;
})();
var statearr_24877_24899 = state_24861__$1;
(statearr_24877_24899[(2)] = null);

(statearr_24877_24899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24889,out))
;
return ((function (switch__22669__auto__,c__22783__auto___24889,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_24881 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24881[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_24881[(1)] = (1));

return statearr_24881;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_24861){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_24861);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24882){if((e24882 instanceof Object)){
var ex__22673__auto__ = e24882;
var statearr_24883_24900 = state_24861;
(statearr_24883_24900[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24861);

return cljs.core.cst$kw$recur;
} else {
throw e24882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24901 = state_24861;
state_24861 = G__24901;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_24861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_24861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24889,out))
})();
var state__22785__auto__ = (function (){var statearr_24884 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24889);

return statearr_24884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24889,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24902 = [];
var len__7319__auto___24951 = arguments.length;
var i__7320__auto___24952 = (0);
while(true){
if((i__7320__auto___24952 < len__7319__auto___24951)){
args24902.push((arguments[i__7320__auto___24952]));

var G__24953 = (i__7320__auto___24952 + (1));
i__7320__auto___24952 = G__24953;
continue;
} else {
}
break;
}

var G__24904 = args24902.length;
switch (G__24904) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24902.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___24955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___24955,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___24955,out){
return (function (state_24928){
var state_val_24929 = (state_24928[(1)]);
if((state_val_24929 === (7))){
var inst_24910 = (state_24928[(7)]);
var inst_24910__$1 = (state_24928[(2)]);
var inst_24911 = (inst_24910__$1 == null);
var inst_24912 = cljs.core.not(inst_24911);
var state_24928__$1 = (function (){var statearr_24930 = state_24928;
(statearr_24930[(7)] = inst_24910__$1);

return statearr_24930;
})();
if(inst_24912){
var statearr_24931_24956 = state_24928__$1;
(statearr_24931_24956[(1)] = (8));

} else {
var statearr_24932_24957 = state_24928__$1;
(statearr_24932_24957[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (1))){
var inst_24905 = (0);
var state_24928__$1 = (function (){var statearr_24933 = state_24928;
(statearr_24933[(8)] = inst_24905);

return statearr_24933;
})();
var statearr_24934_24958 = state_24928__$1;
(statearr_24934_24958[(2)] = null);

(statearr_24934_24958[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (4))){
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24928__$1,(7),ch);
} else {
if((state_val_24929 === (6))){
var inst_24923 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24935_24959 = state_24928__$1;
(statearr_24935_24959[(2)] = inst_24923);

(statearr_24935_24959[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (3))){
var inst_24925 = (state_24928[(2)]);
var inst_24926 = cljs.core.async.close_BANG_(out);
var state_24928__$1 = (function (){var statearr_24936 = state_24928;
(statearr_24936[(9)] = inst_24925);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24928__$1,inst_24926);
} else {
if((state_val_24929 === (2))){
var inst_24905 = (state_24928[(8)]);
var inst_24907 = (inst_24905 < n);
var state_24928__$1 = state_24928;
if(cljs.core.truth_(inst_24907)){
var statearr_24937_24960 = state_24928__$1;
(statearr_24937_24960[(1)] = (4));

} else {
var statearr_24938_24961 = state_24928__$1;
(statearr_24938_24961[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (11))){
var inst_24905 = (state_24928[(8)]);
var inst_24915 = (state_24928[(2)]);
var inst_24916 = (inst_24905 + (1));
var inst_24905__$1 = inst_24916;
var state_24928__$1 = (function (){var statearr_24939 = state_24928;
(statearr_24939[(8)] = inst_24905__$1);

(statearr_24939[(10)] = inst_24915);

return statearr_24939;
})();
var statearr_24940_24962 = state_24928__$1;
(statearr_24940_24962[(2)] = null);

(statearr_24940_24962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (9))){
var state_24928__$1 = state_24928;
var statearr_24941_24963 = state_24928__$1;
(statearr_24941_24963[(2)] = null);

(statearr_24941_24963[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (5))){
var state_24928__$1 = state_24928;
var statearr_24942_24964 = state_24928__$1;
(statearr_24942_24964[(2)] = null);

(statearr_24942_24964[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (10))){
var inst_24920 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24943_24965 = state_24928__$1;
(statearr_24943_24965[(2)] = inst_24920);

(statearr_24943_24965[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24929 === (8))){
var inst_24910 = (state_24928[(7)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24928__$1,(11),out,inst_24910);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___24955,out))
;
return ((function (switch__22669__auto__,c__22783__auto___24955,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_24947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24947[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_24947[(1)] = (1));

return statearr_24947;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_24928){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_24928);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e24948){if((e24948 instanceof Object)){
var ex__22673__auto__ = e24948;
var statearr_24949_24966 = state_24928;
(statearr_24949_24966[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24928);

return cljs.core.cst$kw$recur;
} else {
throw e24948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__24967 = state_24928;
state_24928 = G__24967;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___24955,out))
})();
var state__22785__auto__ = (function (){var statearr_24950 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_24950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___24955);

return statearr_24950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___24955,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24977 = (function (map_LT_,f,ch,meta24978){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24978 = meta24978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24979,meta24978__$1){
var self__ = this;
var _24979__$1 = this;
return (new cljs.core.async.t_cljs$core$async24977(self__.map_LT_,self__.f,self__.ch,meta24978__$1));
});

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24979){
var self__ = this;
var _24979__$1 = this;
return self__.meta24978;
});

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24980 = (function (map_LT_,f,ch,meta24978,_,fn1,meta24981){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24978 = meta24978;
this._ = _;
this.fn1 = fn1;
this.meta24981 = meta24981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24982,meta24981__$1){
var self__ = this;
var _24982__$1 = this;
return (new cljs.core.async.t_cljs$core$async24980(self__.map_LT_,self__.f,self__.ch,self__.meta24978,self__._,self__.fn1,meta24981__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24982){
var self__ = this;
var _24982__$1 = this;
return self__.meta24981;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24980.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24968_SHARP_){
var G__24983 = (((p1__24968_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24968_SHARP_) : self__.f.call(null,p1__24968_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24983) : f1.call(null,G__24983));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24980.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24978,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async24977], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta24981], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24980";

cljs.core.async.t_cljs$core$async24980.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24980");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24980 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24980(map_LT___$1,f__$1,ch__$1,meta24978__$1,___$2,fn1__$1,meta24981){
return (new cljs.core.async.t_cljs$core$async24980(map_LT___$1,f__$1,ch__$1,meta24978__$1,___$2,fn1__$1,meta24981));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24980(self__.map_LT_,self__.f,self__.ch,self__.meta24978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6232__auto__ = ret;
if(cljs.core.truth_(and__6232__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6232__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24984 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24984) : self__.f.call(null,G__24984));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24978], null);
});

cljs.core.async.t_cljs$core$async24977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24977";

cljs.core.async.t_cljs$core$async24977.cljs$lang$ctorPrWriter = (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24977");
});

cljs.core.async.__GT_t_cljs$core$async24977 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24977(map_LT___$1,f__$1,ch__$1,meta24978){
return (new cljs.core.async.t_cljs$core$async24977(map_LT___$1,f__$1,ch__$1,meta24978));
});

}

return (new cljs.core.async.t_cljs$core$async24977(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24988 = (function (map_GT_,f,ch,meta24989){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24989 = meta24989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24990,meta24989__$1){
var self__ = this;
var _24990__$1 = this;
return (new cljs.core.async.t_cljs$core$async24988(self__.map_GT_,self__.f,self__.ch,meta24989__$1));
});

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24990){
var self__ = this;
var _24990__$1 = this;
return self__.meta24989;
});

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async24988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24989], null);
});

cljs.core.async.t_cljs$core$async24988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24988";

cljs.core.async.t_cljs$core$async24988.cljs$lang$ctorPrWriter = (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24988");
});

cljs.core.async.__GT_t_cljs$core$async24988 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24988(map_GT___$1,f__$1,ch__$1,meta24989){
return (new cljs.core.async.t_cljs$core$async24988(map_GT___$1,f__$1,ch__$1,meta24989));
});

}

return (new cljs.core.async.t_cljs$core$async24988(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24994 = (function (filter_GT_,p,ch,meta24995){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24995 = meta24995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24996,meta24995__$1){
var self__ = this;
var _24996__$1 = this;
return (new cljs.core.async.t_cljs$core$async24994(self__.filter_GT_,self__.p,self__.ch,meta24995__$1));
});

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24996){
var self__ = this;
var _24996__$1 = this;
return self__.meta24995;
});

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24995], null);
});

cljs.core.async.t_cljs$core$async24994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24994";

cljs.core.async.t_cljs$core$async24994.cljs$lang$ctorPrWriter = (function (this__6850__auto__,writer__6851__auto__,opt__6852__auto__){
return cljs.core._write(writer__6851__auto__,"cljs.core.async/t_cljs$core$async24994");
});

cljs.core.async.__GT_t_cljs$core$async24994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24994(filter_GT___$1,p__$1,ch__$1,meta24995){
return (new cljs.core.async.t_cljs$core$async24994(filter_GT___$1,p__$1,ch__$1,meta24995));
});

}

return (new cljs.core.async.t_cljs$core$async24994(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24997 = [];
var len__7319__auto___25041 = arguments.length;
var i__7320__auto___25042 = (0);
while(true){
if((i__7320__auto___25042 < len__7319__auto___25041)){
args24997.push((arguments[i__7320__auto___25042]));

var G__25043 = (i__7320__auto___25042 + (1));
i__7320__auto___25042 = G__25043;
continue;
} else {
}
break;
}

var G__24999 = args24997.length;
switch (G__24999) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24997.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___25045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___25045,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___25045,out){
return (function (state_25020){
var state_val_25021 = (state_25020[(1)]);
if((state_val_25021 === (7))){
var inst_25016 = (state_25020[(2)]);
var state_25020__$1 = state_25020;
var statearr_25022_25046 = state_25020__$1;
(statearr_25022_25046[(2)] = inst_25016);

(statearr_25022_25046[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (1))){
var state_25020__$1 = state_25020;
var statearr_25023_25047 = state_25020__$1;
(statearr_25023_25047[(2)] = null);

(statearr_25023_25047[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (4))){
var inst_25002 = (state_25020[(7)]);
var inst_25002__$1 = (state_25020[(2)]);
var inst_25003 = (inst_25002__$1 == null);
var state_25020__$1 = (function (){var statearr_25024 = state_25020;
(statearr_25024[(7)] = inst_25002__$1);

return statearr_25024;
})();
if(cljs.core.truth_(inst_25003)){
var statearr_25025_25048 = state_25020__$1;
(statearr_25025_25048[(1)] = (5));

} else {
var statearr_25026_25049 = state_25020__$1;
(statearr_25026_25049[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (6))){
var inst_25002 = (state_25020[(7)]);
var inst_25007 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25002) : p.call(null,inst_25002));
var state_25020__$1 = state_25020;
if(cljs.core.truth_(inst_25007)){
var statearr_25027_25050 = state_25020__$1;
(statearr_25027_25050[(1)] = (8));

} else {
var statearr_25028_25051 = state_25020__$1;
(statearr_25028_25051[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (3))){
var inst_25018 = (state_25020[(2)]);
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25020__$1,inst_25018);
} else {
if((state_val_25021 === (2))){
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25020__$1,(4),ch);
} else {
if((state_val_25021 === (11))){
var inst_25010 = (state_25020[(2)]);
var state_25020__$1 = state_25020;
var statearr_25029_25052 = state_25020__$1;
(statearr_25029_25052[(2)] = inst_25010);

(statearr_25029_25052[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (9))){
var state_25020__$1 = state_25020;
var statearr_25030_25053 = state_25020__$1;
(statearr_25030_25053[(2)] = null);

(statearr_25030_25053[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (5))){
var inst_25005 = cljs.core.async.close_BANG_(out);
var state_25020__$1 = state_25020;
var statearr_25031_25054 = state_25020__$1;
(statearr_25031_25054[(2)] = inst_25005);

(statearr_25031_25054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (10))){
var inst_25013 = (state_25020[(2)]);
var state_25020__$1 = (function (){var statearr_25032 = state_25020;
(statearr_25032[(8)] = inst_25013);

return statearr_25032;
})();
var statearr_25033_25055 = state_25020__$1;
(statearr_25033_25055[(2)] = null);

(statearr_25033_25055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25021 === (8))){
var inst_25002 = (state_25020[(7)]);
var state_25020__$1 = state_25020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25020__$1,(11),out,inst_25002);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___25045,out))
;
return ((function (switch__22669__auto__,c__22783__auto___25045,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_25037 = [null,null,null,null,null,null,null,null,null];
(statearr_25037[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_25037[(1)] = (1));

return statearr_25037;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_25020){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_25020);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e25038){if((e25038 instanceof Object)){
var ex__22673__auto__ = e25038;
var statearr_25039_25056 = state_25020;
(statearr_25039_25056[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25020);

return cljs.core.cst$kw$recur;
} else {
throw e25038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__25057 = state_25020;
state_25020 = G__25057;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_25020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_25020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___25045,out))
})();
var state__22785__auto__ = (function (){var statearr_25040 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_25040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___25045);

return statearr_25040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___25045,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25058 = [];
var len__7319__auto___25061 = arguments.length;
var i__7320__auto___25062 = (0);
while(true){
if((i__7320__auto___25062 < len__7319__auto___25061)){
args25058.push((arguments[i__7320__auto___25062]));

var G__25063 = (i__7320__auto___25062 + (1));
i__7320__auto___25062 = G__25063;
continue;
} else {
}
break;
}

var G__25060 = args25058.length;
switch (G__25060) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25058.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto__){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto__){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25273 = state_25230__$1;
(statearr_25232_25273[(2)] = inst_25226);

(statearr_25232_25273[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (20))){
var inst_25196 = (state_25230[(7)]);
var inst_25207 = (state_25230[(2)]);
var inst_25208 = cljs.core.next(inst_25196);
var inst_25182 = inst_25208;
var inst_25183 = null;
var inst_25184 = (0);
var inst_25185 = (0);
var state_25230__$1 = (function (){var statearr_25233 = state_25230;
(statearr_25233[(8)] = inst_25207);

(statearr_25233[(9)] = inst_25184);

(statearr_25233[(10)] = inst_25182);

(statearr_25233[(11)] = inst_25183);

(statearr_25233[(12)] = inst_25185);

return statearr_25233;
})();
var statearr_25234_25274 = state_25230__$1;
(statearr_25234_25274[(2)] = null);

(statearr_25234_25274[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (1))){
var state_25230__$1 = state_25230;
var statearr_25235_25275 = state_25230__$1;
(statearr_25235_25275[(2)] = null);

(statearr_25235_25275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (4))){
var inst_25171 = (state_25230[(13)]);
var inst_25171__$1 = (state_25230[(2)]);
var inst_25172 = (inst_25171__$1 == null);
var state_25230__$1 = (function (){var statearr_25236 = state_25230;
(statearr_25236[(13)] = inst_25171__$1);

return statearr_25236;
})();
if(cljs.core.truth_(inst_25172)){
var statearr_25237_25276 = state_25230__$1;
(statearr_25237_25276[(1)] = (5));

} else {
var statearr_25238_25277 = state_25230__$1;
(statearr_25238_25277[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (15))){
var state_25230__$1 = state_25230;
var statearr_25242_25278 = state_25230__$1;
(statearr_25242_25278[(2)] = null);

(statearr_25242_25278[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (21))){
var state_25230__$1 = state_25230;
var statearr_25243_25279 = state_25230__$1;
(statearr_25243_25279[(2)] = null);

(statearr_25243_25279[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (13))){
var inst_25184 = (state_25230[(9)]);
var inst_25182 = (state_25230[(10)]);
var inst_25183 = (state_25230[(11)]);
var inst_25185 = (state_25230[(12)]);
var inst_25192 = (state_25230[(2)]);
var inst_25193 = (inst_25185 + (1));
var tmp25239 = inst_25184;
var tmp25240 = inst_25182;
var tmp25241 = inst_25183;
var inst_25182__$1 = tmp25240;
var inst_25183__$1 = tmp25241;
var inst_25184__$1 = tmp25239;
var inst_25185__$1 = inst_25193;
var state_25230__$1 = (function (){var statearr_25244 = state_25230;
(statearr_25244[(9)] = inst_25184__$1);

(statearr_25244[(14)] = inst_25192);

(statearr_25244[(10)] = inst_25182__$1);

(statearr_25244[(11)] = inst_25183__$1);

(statearr_25244[(12)] = inst_25185__$1);

return statearr_25244;
})();
var statearr_25245_25280 = state_25230__$1;
(statearr_25245_25280[(2)] = null);

(statearr_25245_25280[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (22))){
var state_25230__$1 = state_25230;
var statearr_25246_25281 = state_25230__$1;
(statearr_25246_25281[(2)] = null);

(statearr_25246_25281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (6))){
var inst_25171 = (state_25230[(13)]);
var inst_25180 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25171) : f.call(null,inst_25171));
var inst_25181 = cljs.core.seq(inst_25180);
var inst_25182 = inst_25181;
var inst_25183 = null;
var inst_25184 = (0);
var inst_25185 = (0);
var state_25230__$1 = (function (){var statearr_25247 = state_25230;
(statearr_25247[(9)] = inst_25184);

(statearr_25247[(10)] = inst_25182);

(statearr_25247[(11)] = inst_25183);

(statearr_25247[(12)] = inst_25185);

return statearr_25247;
})();
var statearr_25248_25282 = state_25230__$1;
(statearr_25248_25282[(2)] = null);

(statearr_25248_25282[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (17))){
var inst_25196 = (state_25230[(7)]);
var inst_25200 = cljs.core.chunk_first(inst_25196);
var inst_25201 = cljs.core.chunk_rest(inst_25196);
var inst_25202 = cljs.core.count(inst_25200);
var inst_25182 = inst_25201;
var inst_25183 = inst_25200;
var inst_25184 = inst_25202;
var inst_25185 = (0);
var state_25230__$1 = (function (){var statearr_25249 = state_25230;
(statearr_25249[(9)] = inst_25184);

(statearr_25249[(10)] = inst_25182);

(statearr_25249[(11)] = inst_25183);

(statearr_25249[(12)] = inst_25185);

return statearr_25249;
})();
var statearr_25250_25283 = state_25230__$1;
(statearr_25250_25283[(2)] = null);

(statearr_25250_25283[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (3))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (12))){
var inst_25216 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25251_25284 = state_25230__$1;
(statearr_25251_25284[(2)] = inst_25216);

(statearr_25251_25284[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (2))){
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25230__$1,(4),in$);
} else {
if((state_val_25231 === (23))){
var inst_25224 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25252_25285 = state_25230__$1;
(statearr_25252_25285[(2)] = inst_25224);

(statearr_25252_25285[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (19))){
var inst_25211 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25253_25286 = state_25230__$1;
(statearr_25253_25286[(2)] = inst_25211);

(statearr_25253_25286[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (11))){
var inst_25196 = (state_25230[(7)]);
var inst_25182 = (state_25230[(10)]);
var inst_25196__$1 = cljs.core.seq(inst_25182);
var state_25230__$1 = (function (){var statearr_25254 = state_25230;
(statearr_25254[(7)] = inst_25196__$1);

return statearr_25254;
})();
if(inst_25196__$1){
var statearr_25255_25287 = state_25230__$1;
(statearr_25255_25287[(1)] = (14));

} else {
var statearr_25256_25288 = state_25230__$1;
(statearr_25256_25288[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (9))){
var inst_25218 = (state_25230[(2)]);
var inst_25219 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25230__$1 = (function (){var statearr_25257 = state_25230;
(statearr_25257[(15)] = inst_25218);

return statearr_25257;
})();
if(cljs.core.truth_(inst_25219)){
var statearr_25258_25289 = state_25230__$1;
(statearr_25258_25289[(1)] = (21));

} else {
var statearr_25259_25290 = state_25230__$1;
(statearr_25259_25290[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (5))){
var inst_25174 = cljs.core.async.close_BANG_(out);
var state_25230__$1 = state_25230;
var statearr_25260_25291 = state_25230__$1;
(statearr_25260_25291[(2)] = inst_25174);

(statearr_25260_25291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (14))){
var inst_25196 = (state_25230[(7)]);
var inst_25198 = cljs.core.chunked_seq_QMARK_(inst_25196);
var state_25230__$1 = state_25230;
if(inst_25198){
var statearr_25261_25292 = state_25230__$1;
(statearr_25261_25292[(1)] = (17));

} else {
var statearr_25262_25293 = state_25230__$1;
(statearr_25262_25293[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (16))){
var inst_25214 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25263_25294 = state_25230__$1;
(statearr_25263_25294[(2)] = inst_25214);

(statearr_25263_25294[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25231 === (10))){
var inst_25183 = (state_25230[(11)]);
var inst_25185 = (state_25230[(12)]);
var inst_25190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25183,inst_25185);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25230__$1,(13),out,inst_25190);
} else {
if((state_val_25231 === (18))){
var inst_25196 = (state_25230[(7)]);
var inst_25205 = cljs.core.first(inst_25196);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25230__$1,(20),out,inst_25205);
} else {
if((state_val_25231 === (8))){
var inst_25184 = (state_25230[(9)]);
var inst_25185 = (state_25230[(12)]);
var inst_25187 = (inst_25185 < inst_25184);
var inst_25188 = inst_25187;
var state_25230__$1 = state_25230;
if(cljs.core.truth_(inst_25188)){
var statearr_25264_25295 = state_25230__$1;
(statearr_25264_25295[(1)] = (10));

} else {
var statearr_25265_25296 = state_25230__$1;
(statearr_25265_25296[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto__))
;
return ((function (switch__22669__auto__,c__22783__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____0 = (function (){
var statearr_25269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25269[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__);

(statearr_25269[(1)] = (1));

return statearr_25269;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____1 = (function (state_25230){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_25230);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object)){
var ex__22673__auto__ = e25270;
var statearr_25271_25297 = state_25230;
(statearr_25271_25297[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25230);

return cljs.core.cst$kw$recur;
} else {
throw e25270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__25298 = state_25230;
state_25230 = G__25298;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22670__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto__))
})();
var state__22785__auto__ = (function (){var statearr_25272 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_25272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto__);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto__))
);

return c__22783__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25299 = [];
var len__7319__auto___25302 = arguments.length;
var i__7320__auto___25303 = (0);
while(true){
if((i__7320__auto___25303 < len__7319__auto___25302)){
args25299.push((arguments[i__7320__auto___25303]));

var G__25304 = (i__7320__auto___25303 + (1));
i__7320__auto___25303 = G__25304;
continue;
} else {
}
break;
}

var G__25301 = args25299.length;
switch (G__25301) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25299.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25306 = [];
var len__7319__auto___25309 = arguments.length;
var i__7320__auto___25310 = (0);
while(true){
if((i__7320__auto___25310 < len__7319__auto___25309)){
args25306.push((arguments[i__7320__auto___25310]));

var G__25311 = (i__7320__auto___25310 + (1));
i__7320__auto___25310 = G__25311;
continue;
} else {
}
break;
}

var G__25308 = args25306.length;
switch (G__25308) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25306.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25313 = [];
var len__7319__auto___25364 = arguments.length;
var i__7320__auto___25365 = (0);
while(true){
if((i__7320__auto___25365 < len__7319__auto___25364)){
args25313.push((arguments[i__7320__auto___25365]));

var G__25366 = (i__7320__auto___25365 + (1));
i__7320__auto___25365 = G__25366;
continue;
} else {
}
break;
}

var G__25315 = args25313.length;
switch (G__25315) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25313.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___25368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___25368,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___25368,out){
return (function (state_25339){
var state_val_25340 = (state_25339[(1)]);
if((state_val_25340 === (7))){
var inst_25334 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25341_25369 = state_25339__$1;
(statearr_25341_25369[(2)] = inst_25334);

(statearr_25341_25369[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (1))){
var inst_25316 = null;
var state_25339__$1 = (function (){var statearr_25342 = state_25339;
(statearr_25342[(7)] = inst_25316);

return statearr_25342;
})();
var statearr_25343_25370 = state_25339__$1;
(statearr_25343_25370[(2)] = null);

(statearr_25343_25370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (4))){
var inst_25319 = (state_25339[(8)]);
var inst_25319__$1 = (state_25339[(2)]);
var inst_25320 = (inst_25319__$1 == null);
var inst_25321 = cljs.core.not(inst_25320);
var state_25339__$1 = (function (){var statearr_25344 = state_25339;
(statearr_25344[(8)] = inst_25319__$1);

return statearr_25344;
})();
if(inst_25321){
var statearr_25345_25371 = state_25339__$1;
(statearr_25345_25371[(1)] = (5));

} else {
var statearr_25346_25372 = state_25339__$1;
(statearr_25346_25372[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (6))){
var state_25339__$1 = state_25339;
var statearr_25347_25373 = state_25339__$1;
(statearr_25347_25373[(2)] = null);

(statearr_25347_25373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (3))){
var inst_25336 = (state_25339[(2)]);
var inst_25337 = cljs.core.async.close_BANG_(out);
var state_25339__$1 = (function (){var statearr_25348 = state_25339;
(statearr_25348[(9)] = inst_25336);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25339__$1,inst_25337);
} else {
if((state_val_25340 === (2))){
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25339__$1,(4),ch);
} else {
if((state_val_25340 === (11))){
var inst_25319 = (state_25339[(8)]);
var inst_25328 = (state_25339[(2)]);
var inst_25316 = inst_25319;
var state_25339__$1 = (function (){var statearr_25349 = state_25339;
(statearr_25349[(7)] = inst_25316);

(statearr_25349[(10)] = inst_25328);

return statearr_25349;
})();
var statearr_25350_25374 = state_25339__$1;
(statearr_25350_25374[(2)] = null);

(statearr_25350_25374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (9))){
var inst_25319 = (state_25339[(8)]);
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25339__$1,(11),out,inst_25319);
} else {
if((state_val_25340 === (5))){
var inst_25316 = (state_25339[(7)]);
var inst_25319 = (state_25339[(8)]);
var inst_25323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25319,inst_25316);
var state_25339__$1 = state_25339;
if(inst_25323){
var statearr_25352_25375 = state_25339__$1;
(statearr_25352_25375[(1)] = (8));

} else {
var statearr_25353_25376 = state_25339__$1;
(statearr_25353_25376[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (10))){
var inst_25331 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25354_25377 = state_25339__$1;
(statearr_25354_25377[(2)] = inst_25331);

(statearr_25354_25377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25340 === (8))){
var inst_25316 = (state_25339[(7)]);
var tmp25351 = inst_25316;
var inst_25316__$1 = tmp25351;
var state_25339__$1 = (function (){var statearr_25355 = state_25339;
(statearr_25355[(7)] = inst_25316__$1);

return statearr_25355;
})();
var statearr_25356_25378 = state_25339__$1;
(statearr_25356_25378[(2)] = null);

(statearr_25356_25378[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___25368,out))
;
return ((function (switch__22669__auto__,c__22783__auto___25368,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_25360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25360[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_25360[(1)] = (1));

return statearr_25360;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_25339){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_25339);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object)){
var ex__22673__auto__ = e25361;
var statearr_25362_25379 = state_25339;
(statearr_25362_25379[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25339);

return cljs.core.cst$kw$recur;
} else {
throw e25361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__25380 = state_25339;
state_25339 = G__25380;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_25339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_25339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___25368,out))
})();
var state__22785__auto__ = (function (){var statearr_25363 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___25368);

return statearr_25363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___25368,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25381 = [];
var len__7319__auto___25451 = arguments.length;
var i__7320__auto___25452 = (0);
while(true){
if((i__7320__auto___25452 < len__7319__auto___25451)){
args25381.push((arguments[i__7320__auto___25452]));

var G__25453 = (i__7320__auto___25452 + (1));
i__7320__auto___25452 = G__25453;
continue;
} else {
}
break;
}

var G__25383 = args25381.length;
switch (G__25383) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25381.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___25455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___25455,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___25455,out){
return (function (state_25421){
var state_val_25422 = (state_25421[(1)]);
if((state_val_25422 === (7))){
var inst_25417 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25423_25456 = state_25421__$1;
(statearr_25423_25456[(2)] = inst_25417);

(statearr_25423_25456[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (1))){
var inst_25384 = (new Array(n));
var inst_25385 = inst_25384;
var inst_25386 = (0);
var state_25421__$1 = (function (){var statearr_25424 = state_25421;
(statearr_25424[(7)] = inst_25385);

(statearr_25424[(8)] = inst_25386);

return statearr_25424;
})();
var statearr_25425_25457 = state_25421__$1;
(statearr_25425_25457[(2)] = null);

(statearr_25425_25457[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (4))){
var inst_25389 = (state_25421[(9)]);
var inst_25389__$1 = (state_25421[(2)]);
var inst_25390 = (inst_25389__$1 == null);
var inst_25391 = cljs.core.not(inst_25390);
var state_25421__$1 = (function (){var statearr_25426 = state_25421;
(statearr_25426[(9)] = inst_25389__$1);

return statearr_25426;
})();
if(inst_25391){
var statearr_25427_25458 = state_25421__$1;
(statearr_25427_25458[(1)] = (5));

} else {
var statearr_25428_25459 = state_25421__$1;
(statearr_25428_25459[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (15))){
var inst_25411 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25429_25460 = state_25421__$1;
(statearr_25429_25460[(2)] = inst_25411);

(statearr_25429_25460[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (13))){
var state_25421__$1 = state_25421;
var statearr_25430_25461 = state_25421__$1;
(statearr_25430_25461[(2)] = null);

(statearr_25430_25461[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (6))){
var inst_25386 = (state_25421[(8)]);
var inst_25407 = (inst_25386 > (0));
var state_25421__$1 = state_25421;
if(cljs.core.truth_(inst_25407)){
var statearr_25431_25462 = state_25421__$1;
(statearr_25431_25462[(1)] = (12));

} else {
var statearr_25432_25463 = state_25421__$1;
(statearr_25432_25463[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (3))){
var inst_25419 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25421__$1,inst_25419);
} else {
if((state_val_25422 === (12))){
var inst_25385 = (state_25421[(7)]);
var inst_25409 = cljs.core.vec(inst_25385);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25421__$1,(15),out,inst_25409);
} else {
if((state_val_25422 === (2))){
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25421__$1,(4),ch);
} else {
if((state_val_25422 === (11))){
var inst_25401 = (state_25421[(2)]);
var inst_25402 = (new Array(n));
var inst_25385 = inst_25402;
var inst_25386 = (0);
var state_25421__$1 = (function (){var statearr_25433 = state_25421;
(statearr_25433[(7)] = inst_25385);

(statearr_25433[(8)] = inst_25386);

(statearr_25433[(10)] = inst_25401);

return statearr_25433;
})();
var statearr_25434_25464 = state_25421__$1;
(statearr_25434_25464[(2)] = null);

(statearr_25434_25464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (9))){
var inst_25385 = (state_25421[(7)]);
var inst_25399 = cljs.core.vec(inst_25385);
var state_25421__$1 = state_25421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25421__$1,(11),out,inst_25399);
} else {
if((state_val_25422 === (5))){
var inst_25385 = (state_25421[(7)]);
var inst_25394 = (state_25421[(11)]);
var inst_25389 = (state_25421[(9)]);
var inst_25386 = (state_25421[(8)]);
var inst_25393 = (inst_25385[inst_25386] = inst_25389);
var inst_25394__$1 = (inst_25386 + (1));
var inst_25395 = (inst_25394__$1 < n);
var state_25421__$1 = (function (){var statearr_25435 = state_25421;
(statearr_25435[(11)] = inst_25394__$1);

(statearr_25435[(12)] = inst_25393);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25395)){
var statearr_25436_25465 = state_25421__$1;
(statearr_25436_25465[(1)] = (8));

} else {
var statearr_25437_25466 = state_25421__$1;
(statearr_25437_25466[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (14))){
var inst_25414 = (state_25421[(2)]);
var inst_25415 = cljs.core.async.close_BANG_(out);
var state_25421__$1 = (function (){var statearr_25439 = state_25421;
(statearr_25439[(13)] = inst_25414);

return statearr_25439;
})();
var statearr_25440_25467 = state_25421__$1;
(statearr_25440_25467[(2)] = inst_25415);

(statearr_25440_25467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (10))){
var inst_25405 = (state_25421[(2)]);
var state_25421__$1 = state_25421;
var statearr_25441_25468 = state_25421__$1;
(statearr_25441_25468[(2)] = inst_25405);

(statearr_25441_25468[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25422 === (8))){
var inst_25385 = (state_25421[(7)]);
var inst_25394 = (state_25421[(11)]);
var tmp25438 = inst_25385;
var inst_25385__$1 = tmp25438;
var inst_25386 = inst_25394;
var state_25421__$1 = (function (){var statearr_25442 = state_25421;
(statearr_25442[(7)] = inst_25385__$1);

(statearr_25442[(8)] = inst_25386);

return statearr_25442;
})();
var statearr_25443_25469 = state_25421__$1;
(statearr_25443_25469[(2)] = null);

(statearr_25443_25469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___25455,out))
;
return ((function (switch__22669__auto__,c__22783__auto___25455,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_25447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25447[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_25447[(1)] = (1));

return statearr_25447;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_25421){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_25421);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e25448){if((e25448 instanceof Object)){
var ex__22673__auto__ = e25448;
var statearr_25449_25470 = state_25421;
(statearr_25449_25470[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25421);

return cljs.core.cst$kw$recur;
} else {
throw e25448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__25471 = state_25421;
state_25421 = G__25471;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_25421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_25421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___25455,out))
})();
var state__22785__auto__ = (function (){var statearr_25450 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_25450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___25455);

return statearr_25450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___25455,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25472 = [];
var len__7319__auto___25546 = arguments.length;
var i__7320__auto___25547 = (0);
while(true){
if((i__7320__auto___25547 < len__7319__auto___25546)){
args25472.push((arguments[i__7320__auto___25547]));

var G__25548 = (i__7320__auto___25547 + (1));
i__7320__auto___25547 = G__25548;
continue;
} else {
}
break;
}

var G__25474 = args25472.length;
switch (G__25474) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25472.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22783__auto___25550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22783__auto___25550,out){
return (function (){
var f__22784__auto__ = (function (){var switch__22669__auto__ = ((function (c__22783__auto___25550,out){
return (function (state_25516){
var state_val_25517 = (state_25516[(1)]);
if((state_val_25517 === (7))){
var inst_25512 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25518_25551 = state_25516__$1;
(statearr_25518_25551[(2)] = inst_25512);

(statearr_25518_25551[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (1))){
var inst_25475 = [];
var inst_25476 = inst_25475;
var inst_25477 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25516__$1 = (function (){var statearr_25519 = state_25516;
(statearr_25519[(7)] = inst_25477);

(statearr_25519[(8)] = inst_25476);

return statearr_25519;
})();
var statearr_25520_25552 = state_25516__$1;
(statearr_25520_25552[(2)] = null);

(statearr_25520_25552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (4))){
var inst_25480 = (state_25516[(9)]);
var inst_25480__$1 = (state_25516[(2)]);
var inst_25481 = (inst_25480__$1 == null);
var inst_25482 = cljs.core.not(inst_25481);
var state_25516__$1 = (function (){var statearr_25521 = state_25516;
(statearr_25521[(9)] = inst_25480__$1);

return statearr_25521;
})();
if(inst_25482){
var statearr_25522_25553 = state_25516__$1;
(statearr_25522_25553[(1)] = (5));

} else {
var statearr_25523_25554 = state_25516__$1;
(statearr_25523_25554[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (15))){
var inst_25506 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25524_25555 = state_25516__$1;
(statearr_25524_25555[(2)] = inst_25506);

(statearr_25524_25555[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (13))){
var state_25516__$1 = state_25516;
var statearr_25525_25556 = state_25516__$1;
(statearr_25525_25556[(2)] = null);

(statearr_25525_25556[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (6))){
var inst_25476 = (state_25516[(8)]);
var inst_25501 = inst_25476.length;
var inst_25502 = (inst_25501 > (0));
var state_25516__$1 = state_25516;
if(cljs.core.truth_(inst_25502)){
var statearr_25526_25557 = state_25516__$1;
(statearr_25526_25557[(1)] = (12));

} else {
var statearr_25527_25558 = state_25516__$1;
(statearr_25527_25558[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (3))){
var inst_25514 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25516__$1,inst_25514);
} else {
if((state_val_25517 === (12))){
var inst_25476 = (state_25516[(8)]);
var inst_25504 = cljs.core.vec(inst_25476);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25516__$1,(15),out,inst_25504);
} else {
if((state_val_25517 === (2))){
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25516__$1,(4),ch);
} else {
if((state_val_25517 === (11))){
var inst_25480 = (state_25516[(9)]);
var inst_25484 = (state_25516[(10)]);
var inst_25494 = (state_25516[(2)]);
var inst_25495 = [];
var inst_25496 = inst_25495.push(inst_25480);
var inst_25476 = inst_25495;
var inst_25477 = inst_25484;
var state_25516__$1 = (function (){var statearr_25528 = state_25516;
(statearr_25528[(11)] = inst_25494);

(statearr_25528[(7)] = inst_25477);

(statearr_25528[(8)] = inst_25476);

(statearr_25528[(12)] = inst_25496);

return statearr_25528;
})();
var statearr_25529_25559 = state_25516__$1;
(statearr_25529_25559[(2)] = null);

(statearr_25529_25559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (9))){
var inst_25476 = (state_25516[(8)]);
var inst_25492 = cljs.core.vec(inst_25476);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25516__$1,(11),out,inst_25492);
} else {
if((state_val_25517 === (5))){
var inst_25477 = (state_25516[(7)]);
var inst_25480 = (state_25516[(9)]);
var inst_25484 = (state_25516[(10)]);
var inst_25484__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25480) : f.call(null,inst_25480));
var inst_25485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25484__$1,inst_25477);
var inst_25486 = cljs.core.keyword_identical_QMARK_(inst_25477,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25487 = (inst_25485) || (inst_25486);
var state_25516__$1 = (function (){var statearr_25530 = state_25516;
(statearr_25530[(10)] = inst_25484__$1);

return statearr_25530;
})();
if(cljs.core.truth_(inst_25487)){
var statearr_25531_25560 = state_25516__$1;
(statearr_25531_25560[(1)] = (8));

} else {
var statearr_25532_25561 = state_25516__$1;
(statearr_25532_25561[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (14))){
var inst_25509 = (state_25516[(2)]);
var inst_25510 = cljs.core.async.close_BANG_(out);
var state_25516__$1 = (function (){var statearr_25534 = state_25516;
(statearr_25534[(13)] = inst_25509);

return statearr_25534;
})();
var statearr_25535_25562 = state_25516__$1;
(statearr_25535_25562[(2)] = inst_25510);

(statearr_25535_25562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (10))){
var inst_25499 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25536_25563 = state_25516__$1;
(statearr_25536_25563[(2)] = inst_25499);

(statearr_25536_25563[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25517 === (8))){
var inst_25480 = (state_25516[(9)]);
var inst_25484 = (state_25516[(10)]);
var inst_25476 = (state_25516[(8)]);
var inst_25489 = inst_25476.push(inst_25480);
var tmp25533 = inst_25476;
var inst_25476__$1 = tmp25533;
var inst_25477 = inst_25484;
var state_25516__$1 = (function (){var statearr_25537 = state_25516;
(statearr_25537[(7)] = inst_25477);

(statearr_25537[(14)] = inst_25489);

(statearr_25537[(8)] = inst_25476__$1);

return statearr_25537;
})();
var statearr_25538_25564 = state_25516__$1;
(statearr_25538_25564[(2)] = null);

(statearr_25538_25564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22783__auto___25550,out))
;
return ((function (switch__22669__auto__,c__22783__auto___25550,out){
return (function() {
var cljs$core$async$state_machine__22670__auto__ = null;
var cljs$core$async$state_machine__22670__auto____0 = (function (){
var statearr_25542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25542[(0)] = cljs$core$async$state_machine__22670__auto__);

(statearr_25542[(1)] = (1));

return statearr_25542;
});
var cljs$core$async$state_machine__22670__auto____1 = (function (state_25516){
while(true){
var ret_value__22671__auto__ = (function (){try{while(true){
var result__22672__auto__ = switch__22669__auto__(state_25516);
if(cljs.core.keyword_identical_QMARK_(result__22672__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__22672__auto__;
}
break;
}
}catch (e25543){if((e25543 instanceof Object)){
var ex__22673__auto__ = e25543;
var statearr_25544_25565 = state_25516;
(statearr_25544_25565[(5)] = ex__22673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25516);

return cljs.core.cst$kw$recur;
} else {
throw e25543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__22671__auto__,cljs.core.cst$kw$recur)){
var G__25566 = state_25516;
state_25516 = G__25566;
continue;
} else {
return ret_value__22671__auto__;
}
break;
}
});
cljs$core$async$state_machine__22670__auto__ = function(state_25516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22670__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22670__auto____1.call(this,state_25516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22670__auto____0;
cljs$core$async$state_machine__22670__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22670__auto____1;
return cljs$core$async$state_machine__22670__auto__;
})()
;})(switch__22669__auto__,c__22783__auto___25550,out))
})();
var state__22785__auto__ = (function (){var statearr_25545 = (f__22784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22784__auto__.cljs$core$IFn$_invoke$arity$0() : f__22784__auto__.call(null));
(statearr_25545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22783__auto___25550);

return statearr_25545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22785__auto__);
});})(c__22783__auto___25550,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

