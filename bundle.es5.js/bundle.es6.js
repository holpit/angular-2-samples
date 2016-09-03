'use strict';var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}(function(_angular_platformBrowser,import0,_angular_forms,_angular_core,_angular_common,_angular_router,_angular_http,import2,import3,import4,import5,import6,import7,import8,import9,import10,import11,import12,import13,import14,import15,import16,import17,import18,import5$1,import20,import21,import22,import23,import24,import25,import26,import27,import28,import17$1,import30,import0$1,import3$1,import4$1,import7$1,import8$1,import9$1,import10$1,import12$1,import14$1,import15$1,import16$1,import19,import13$1,import18$1,import11$1,import12$2,import13$2,import18$2,import14$2,import15$2,import12$3,import11$2,import15$3,import13$3,import17$2,import13$4,import19$1,import10$2,import11$3,import12$4,import16$2,import20$1,import21$1,import18$3,import19$2,import22$1,import11$4,import62,import63,import64,import65,import66,import67,import97,import111,import99,import100,import101,import102,import106,import108,import109){'use strict';var AppComponent=function(){function AppComponent(location){_classCallCheck(this,AppComponent);this.location=location;}_createClass(AppComponent,[{key:'getLinkStyle',value:function getLinkStyle(path){if(path===this.location.path()){return true;}else if(path.length>0){return this.location.path().indexOf(path)>-1;}}}]);return AppComponent;}();AppComponent.decorators=[{type:_angular_core.Component,args:[{selector:'demo-app',templateUrl:'./demo-app.html'}]}];AppComponent.ctorParameters=[{type:_angular_common.Location}];var DemoPage=function(){function DemoPage(location){_classCallCheck(this,DemoPage);this.location=location;}_createClass(DemoPage,[{key:'getLinkStyle',value:function getLinkStyle(path){return this.location.path().indexOf(path)>-1;}}]);return DemoPage;}();DemoPage.decorators=[{type:_angular_core.Component,args:[{selector:'demo-page',templateUrl:'./demo-page.html'}]}];DemoPage.ctorParameters=[{type:_angular_common.Location}];var About=function About(){_classCallCheck(this,About);};About.decorators=[{type:_angular_core.Component,args:[{selector:'about',templateUrl:'./about.html'}]}];About.ctorParameters=[];var Directory=function(){function Directory(name,directories,files){_classCallCheck(this,Directory);this.name=name;this.directories=directories;this.files=files;this.expanded=true;this.checked=false;}_createClass(Directory,[{key:'toggle',value:function toggle(){this.expanded=!this.expanded;}},{key:'getIcon',value:function getIcon(){if(this.expanded){return'-';}return'+';}},{key:'check',value:function check(){this.checked=!this.checked;this.checkRecursive(this.checked);}},{key:'checkRecursive',value:function checkRecursive(state){this.directories.forEach(function(d){d.checked=state;d.checkRecursive(state);});}}]);return Directory;}();var TreeViewDemo=function(){function TreeViewDemo(){_classCallCheck(this,TreeViewDemo);this.loadDirectories();}_createClass(TreeViewDemo,[{key:'loadDirectories',value:function loadDirectories(){var fall2014=new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);var summer2014=new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);var pics=new Directory('Pictures',[summer2014,fall2014],[]);var music=new Directory('Music',[],['song1.mp3','song2.mp3']);this.directories=[pics,music];}}]);return TreeViewDemo;}();TreeViewDemo.decorators=[{type:_angular_core.Component,args:[{template:'<h1>Recursive TreeView</h1><tree-view [directories]="directories"></tree-view>'+'          <h4><a href="http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0">Read more here</a></h4>'}]}];TreeViewDemo.ctorParameters=[];var Contact=function Contact(name,phone){_classCallCheck(this,Contact);this.name=name;this.phone=phone;this.descr=this.name+' '+this.phone;};var ContactList=function(){function ContactList(){_classCallCheck(this,ContactList);this.contacts=[];}_createClass(ContactList,[{key:'addContact',value:function addContact(name,phone){var contact=new Contact(name.value,phone.value);this.contacts.push(contact);name.value='';phone.value='';}},{key:'removeContact',value:function removeContact(contact){var index=this.contacts.indexOf(contact);this.contacts.splice(index,1);}}]);return ContactList;}();ContactList.decorators=[{type:_angular_core.Component,args:[{selector:'contact-list',templateUrl:'./contact-list.html'}]}];ContactList.ctorParameters=[];var BoundTextbox=function(){function BoundTextbox(){_classCallCheck(this,BoundTextbox);this.text='hello';}_createClass(BoundTextbox,[{key:'typing',value:function typing($event){this.text=$event.target.value;}}]);return BoundTextbox;}();BoundTextbox.decorators=[{type:_angular_core.Component,args:[{selector:'bound-textbox',template:'<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" /><span>{{text}}</span>'}]}];BoundTextbox.ctorParameters=[];var Column=function Column(name,descr){_classCallCheck(this,Column);this.name=name;this.descr=descr;};var GridDemo=function(){function GridDemo(){_classCallCheck(this,GridDemo);this.people=this.getPeople();this.columns=this.getColumns();}_createClass(GridDemo,[{key:'getPeople',value:function getPeople(){return[{firstName:'Joe',lastName:'Jackson',age:20},{firstName:'Peter',lastName:'Smith',age:30},{firstName:'Jane',lastName:'Doe',age:50},{firstName:'Tim',lastName:'Smith',age:80}];}},{key:'getColumns',value:function getColumns(){return[new Column('firstName','First Name'),new Column('lastName','Last Name'),new Column('age','Age')];}}]);return GridDemo;}();GridDemo.decorators=[{type:_angular_core.Component,args:[{template:'<grid name="person grid" [rows]="people" [columns]="columns"></grid>'}]}];GridDemo.ctorParameters=[];var IgnoreBindings=function IgnoreBindings(){_classCallCheck(this,IgnoreBindings);};IgnoreBindings.decorators=[{type:_angular_core.Component,args:[{selector:'ignore-bindings',templateUrl:'./non-bindable.html'}]}];IgnoreBindings.ctorParameters=[];var objectTypes={'boolean':false,'function':true,'object':true,'number':false,'string':false,'undefined':false};var root=objectTypes[typeof self==='undefined'?'undefined':_typeof(self)]&&self||objectTypes[typeof window==='undefined'?'undefined':_typeof(window)]&&window;/* tslint:disable:no-unused-variable */var freeExports=objectTypes[typeof exports==='undefined'?'undefined':_typeof(exports)]&&exports&&!exports.nodeType&&exports;var freeModule=objectTypes[typeof module==='undefined'?'undefined':_typeof(module)]&&module&&!module.nodeType&&module;var freeGlobal=objectTypes[typeof global==='undefined'?'undefined':_typeof(global)]&&global;if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal)){root=freeGlobal;}function isFunction(x){return typeof x==='function';}var isArray=Array.isArray||function(x){return x&&typeof x.length==='number';};function isObject(x){return x!=null&&(typeof x==='undefined'?'undefined':_typeof(x))==='object';}// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject={e:{}};var tryCatchTarget=void 0;function tryCatcher(){try{return tryCatchTarget.apply(this,arguments);}catch(e){errorObject.e=e;return errorObject;}}function tryCatch(fn){tryCatchTarget=fn;return tryCatcher;};/**
   * An error thrown when one or more errors have occurred during the
   * `unsubscribe` of a {@link Subscription}.
   */var UnsubscriptionError=function(_Error){_inherits(UnsubscriptionError,_Error);function UnsubscriptionError(errors){_classCallCheck(this,UnsubscriptionError);var _this=_possibleConstructorReturn(this,(UnsubscriptionError.__proto__||Object.getPrototypeOf(UnsubscriptionError)).call(this));_this.errors=errors;var err=Error.call(_this,errors?errors.length+' errors occurred during unsubscription:\n  '+errors.map(function(err,i){return i+1+') '+err.toString();}).join('\n  '):'');_this.name=err.name='UnsubscriptionError';_this.stack=err.stack;_this.message=err.message;return _this;}return UnsubscriptionError;}(Error);/**
   * Represents a disposable resource, such as the execution of an Observable. A
   * Subscription has one important method, `unsubscribe`, that takes no argument
   * and just disposes the resource held by the subscription.
   *
   * Additionally, subscriptions may be grouped together through the `add()`
   * method, which will attach a child Subscription to the current Subscription.
   * When a Subscription is unsubscribed, all its children (and its grandchildren)
   * will be unsubscribed as well.
   *
   * @class Subscription
   */var Subscription=function(){/**
       * @param {function(): void} [unsubscribe] A function describing how to
       * perform the disposal of resources when the `unsubscribe` method is called.
       */function Subscription(unsubscribe){_classCallCheck(this,Subscription);/**
           * A flag to indicate whether this Subscription has already been unsubscribed.
           * @type {boolean}
           */this.closed=false;if(unsubscribe){this._unsubscribe=unsubscribe;}}/**
       * Disposes the resources held by the subscription. May, for instance, cancel
       * an ongoing Observable execution or cancel any other type of work that
       * started when the Subscription was created.
       * @return {void}
       */_createClass(Subscription,[{key:'unsubscribe',value:function unsubscribe(){var hasErrors=false;var errors=void 0;if(this.closed){return;}this.closed=true;var _unsubscribe=this._unsubscribe;var _subscriptions=this._subscriptions;this._subscriptions=null;if(isFunction(_unsubscribe)){var trial=tryCatch(_unsubscribe).call(this);if(trial===errorObject){hasErrors=true;(errors=errors||[]).push(errorObject.e);}}if(isArray(_subscriptions)){var index=-1;var len=_subscriptions.length;while(++index<len){var sub=_subscriptions[index];if(isObject(sub)){var _trial=tryCatch(sub.unsubscribe).call(sub);if(_trial===errorObject){hasErrors=true;errors=errors||[];var err=errorObject.e;if(err instanceof UnsubscriptionError){errors=errors.concat(err.errors);}else{errors.push(err);}}}}}if(hasErrors){throw new UnsubscriptionError(errors);}}/**
       * Adds a tear down to be called during the unsubscribe() of this
       * Subscription.
       *
       * If the tear down being added is a subscription that is already
       * unsubscribed, is the same reference `add` is being called on, or is
       * `Subscription.EMPTY`, it will not be added.
       *
       * If this subscription is already in an `closed` state, the passed
       * tear down logic will be executed immediately.
       *
       * @param {TeardownLogic} teardown The additional logic to execute on
       * teardown.
       * @return {Subscription} Returns the Subscription used or created to be
       * added to the inner subscriptions list. This Subscription can be used with
       * `remove()` to remove the passed teardown logic from the inner subscriptions
       * list.
       */},{key:'add',value:function add(teardown){if(!teardown||teardown===Subscription.EMPTY){return Subscription.EMPTY;}if(teardown===this){return this;}var sub=teardown;switch(typeof teardown==='undefined'?'undefined':_typeof(teardown)){case'function':sub=new Subscription(teardown);case'object':if(sub.closed||typeof sub.unsubscribe!=='function'){break;}else if(this.closed){sub.unsubscribe();}else{(this._subscriptions||(this._subscriptions=[])).push(sub);}break;default:throw new Error('unrecognized teardown '+teardown+' added to Subscription.');}return sub;}/**
       * Removes a Subscription from the internal list of subscriptions that will
       * unsubscribe during the unsubscribe process of this Subscription.
       * @param {Subscription} subscription The subscription to remove.
       * @return {void}
       */},{key:'remove',value:function remove(subscription){// HACK: This might be redundant because of the logic in `add()`
if(subscription==null||subscription===this||subscription===Subscription.EMPTY){return;}var subscriptions=this._subscriptions;if(subscriptions){var subscriptionIndex=subscriptions.indexOf(subscription);if(subscriptionIndex!==-1){subscriptions.splice(subscriptionIndex,1);}}}}]);return Subscription;}();Subscription.EMPTY=function(empty){empty.closed=true;return empty;}(new Subscription());var empty={closed:true,next:function next(value){},error:function error(err){throw err;},complete:function complete(){}};var _Symbol=root.Symbol;var rxSubscriber=typeof _Symbol==='function'&&typeof _Symbol.for==='function'?_Symbol.for('rxSubscriber'):'@@rxSubscriber';/**
   * Implements the {@link Observer} interface and extends the
   * {@link Subscription} class. While the {@link Observer} is the public API for
   * consuming the values of an {@link Observable}, all Observers get converted to
   * a Subscriber, in order to provide Subscription-like capabilities such as
   * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
   * implementing operators, but it is rarely used as a public API.
   *
   * @class Subscriber<T>
   */var Subscriber=function(_Subscription){_inherits(Subscriber,_Subscription);/**
       * @param {Observer|function(value: T): void} [destinationOrNext] A partially
       * defined Observer or a `next` callback function.
       * @param {function(e: ?any): void} [error] The `error` callback of an
       * Observer.
       * @param {function(): void} [complete] The `complete` callback of an
       * Observer.
       */function Subscriber(destinationOrNext,error,complete){_classCallCheck(this,Subscriber);var _this2=_possibleConstructorReturn(this,(Subscriber.__proto__||Object.getPrototypeOf(Subscriber)).call(this));_this2.syncErrorValue=null;_this2.syncErrorThrown=false;_this2.syncErrorThrowable=false;_this2.isStopped=false;switch(arguments.length){case 0:_this2.destination=empty;break;case 1:if(!destinationOrNext){_this2.destination=empty;break;}if((typeof destinationOrNext==='undefined'?'undefined':_typeof(destinationOrNext))==='object'){if(destinationOrNext instanceof Subscriber){_this2.destination=destinationOrNext;_this2.destination.add(_this2);}else{_this2.syncErrorThrowable=true;_this2.destination=new SafeSubscriber(_this2,destinationOrNext);}break;}default:_this2.syncErrorThrowable=true;_this2.destination=new SafeSubscriber(_this2,destinationOrNext,error,complete);break;}return _this2;}_createClass(Subscriber,[{key:rxSubscriber,value:function value(){return this;}/**
       * A static factory for a Subscriber, given a (potentially partial) definition
       * of an Observer.
       * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
       * @param {function(e: ?any): void} [error] The `error` callback of an
       * Observer.
       * @param {function(): void} [complete] The `complete` callback of an
       * Observer.
       * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
       * Observer represented by the given arguments.
       */},{key:'next',/**
       * The {@link Observer} callback to receive notifications of type `next` from
       * the Observable, with a value. The Observable may call this method 0 or more
       * times.
       * @param {T} [value] The `next` value.
       * @return {void}
       */value:function next(value){if(!this.isStopped){this._next(value);}}/**
       * The {@link Observer} callback to receive notifications of type `error` from
       * the Observable, with an attached {@link Error}. Notifies the Observer that
       * the Observable has experienced an error condition.
       * @param {any} [err] The `error` exception.
       * @return {void}
       */},{key:'error',value:function error(err){if(!this.isStopped){this.isStopped=true;this._error(err);}}/**
       * The {@link Observer} callback to receive a valueless notification of type
       * `complete` from the Observable. Notifies the Observer that the Observable
       * has finished sending push-based notifications.
       * @return {void}
       */},{key:'complete',value:function complete(){if(!this.isStopped){this.isStopped=true;this._complete();}}},{key:'unsubscribe',value:function unsubscribe(){if(this.closed){return;}this.isStopped=true;_get(Subscriber.prototype.__proto__||Object.getPrototypeOf(Subscriber.prototype),'unsubscribe',this).call(this);}},{key:'_next',value:function _next(value){this.destination.next(value);}},{key:'_error',value:function _error(err){this.destination.error(err);this.unsubscribe();}},{key:'_complete',value:function _complete(){this.destination.complete();this.unsubscribe();}}],[{key:'create',value:function create(next,error,complete){var subscriber=new Subscriber(next,error,complete);subscriber.syncErrorThrowable=false;return subscriber;}}]);return Subscriber;}(Subscription);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SafeSubscriber=function(_Subscriber){_inherits(SafeSubscriber,_Subscriber);function SafeSubscriber(_parent,observerOrNext,error,complete){_classCallCheck(this,SafeSubscriber);var _this3=_possibleConstructorReturn(this,(SafeSubscriber.__proto__||Object.getPrototypeOf(SafeSubscriber)).call(this));_this3._parent=_parent;var next=void 0;var context=_this3;if(isFunction(observerOrNext)){next=observerOrNext;}else if(observerOrNext){context=observerOrNext;next=observerOrNext.next;error=observerOrNext.error;complete=observerOrNext.complete;if(isFunction(context.unsubscribe)){_this3.add(context.unsubscribe.bind(context));}context.unsubscribe=_this3.unsubscribe.bind(_this3);}_this3._context=context;_this3._next=next;_this3._error=error;_this3._complete=complete;return _this3;}_createClass(SafeSubscriber,[{key:'next',value:function next(value){if(!this.isStopped&&this._next){var _parent=this._parent;if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._next,value);}else if(this.__tryOrSetError(_parent,this._next,value)){this.unsubscribe();}}}},{key:'error',value:function error(err){if(!this.isStopped){var _parent=this._parent;if(this._error){if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._error,err);this.unsubscribe();}else{this.__tryOrSetError(_parent,this._error,err);this.unsubscribe();}}else if(!_parent.syncErrorThrowable){this.unsubscribe();throw err;}else{_parent.syncErrorValue=err;_parent.syncErrorThrown=true;this.unsubscribe();}}}},{key:'complete',value:function complete(){if(!this.isStopped){var _parent=this._parent;if(this._complete){if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._complete);this.unsubscribe();}else{this.__tryOrSetError(_parent,this._complete);this.unsubscribe();}}else{this.unsubscribe();}}}},{key:'__tryOrUnsub',value:function __tryOrUnsub(fn,value){try{fn.call(this._context,value);}catch(err){this.unsubscribe();throw err;}}},{key:'__tryOrSetError',value:function __tryOrSetError(parent,fn,value){try{fn.call(this._context,value);}catch(err){parent.syncErrorValue=err;parent.syncErrorThrown=true;return true;}return false;}},{key:'_unsubscribe',value:function _unsubscribe(){var _parent=this._parent;this._context=null;this._parent=null;_parent.unsubscribe();}}]);return SafeSubscriber;}(Subscriber);function toSubscriber(nextOrObserver,error,complete){if(nextOrObserver){if(nextOrObserver instanceof Subscriber){return nextOrObserver;}if(nextOrObserver[rxSubscriber]){return nextOrObserver[rxSubscriber]();}}if(!nextOrObserver&&!error&&!complete){return new Subscriber();}return new Subscriber(nextOrObserver,error,complete);}function getSymbolObservable(context){var $$observable=void 0;var _Symbol2=context.Symbol;if(typeof _Symbol2==='function'){if(_Symbol2.observable){$$observable=_Symbol2.observable;}else{$$observable=_Symbol2('observable');_Symbol2.observable=$$observable;}}else{$$observable='@@observable';}return $$observable;}var $$observable=getSymbolObservable(root);/**
   * A representation of any set of values over any amount of time. This the most basic building block
   * of RxJS.
   *
   * @class Observable<T>
   */var Observable=function(){/**
       * @constructor
       * @param {Function} subscribe the function that is  called when the Observable is
       * initially subscribed to. This function is given a Subscriber, to which new values
       * can be `next`ed, or an `error` method can be called to raise an error, or
       * `complete` can be called to notify of a successful completion.
       */function Observable(subscribe){_classCallCheck(this,Observable);this._isScalar=false;if(subscribe){this._subscribe=subscribe;}}/**
       * Creates a new Observable, with this Observable as the source, and the passed
       * operator defined as the new observable's operator.
       * @method lift
       * @param {Operator} operator the operator defining the operation to take on the observable
       * @return {Observable} a new observable with the Operator applied
       */_createClass(Observable,[{key:'lift',value:function lift(operator){var observable=new Observable();observable.source=this;observable.operator=operator;return observable;}/**
       * Registers handlers for handling emitted values, error and completions from the observable, and
       *  executes the observable's subscriber function, which will take action to set up the underlying data stream
       * @method subscribe
       * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
       *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
       * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
       *  the error will be thrown as unhandled
       * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
       * @return {ISubscription} a subscription reference to the registered handlers
       */},{key:'subscribe',value:function subscribe(observerOrNext,error,complete){var operator=this.operator;var sink=toSubscriber(observerOrNext,error,complete);if(operator){operator.call(sink,this);}else{sink.add(this._subscribe(sink));}if(sink.syncErrorThrowable){sink.syncErrorThrowable=false;if(sink.syncErrorThrown){throw sink.syncErrorValue;}}return sink;}/**
       * @method forEach
       * @param {Function} next a handler for each value emitted by the observable
       * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
       * @return {Promise} a promise that either resolves on observable completion or
       *  rejects with the handled error
       */},{key:'forEach',value:function forEach(next,PromiseCtor){var _this4=this;if(!PromiseCtor){if(root.Rx&&root.Rx.config&&root.Rx.config.Promise){PromiseCtor=root.Rx.config.Promise;}else if(root.Promise){PromiseCtor=root.Promise;}}if(!PromiseCtor){throw new Error('no Promise impl found');}return new PromiseCtor(function(resolve,reject){var subscription=_this4.subscribe(function(value){if(subscription){// if there is a subscription, then we can surmise
// the next handling is asynchronous. Any errors thrown
// need to be rejected explicitly and unsubscribe must be
// called manually
try{next(value);}catch(err){reject(err);subscription.unsubscribe();}}else{// if there is NO subscription, then we're getting a nexted
// value synchronously during subscription. We can just call it.
// If it errors, Observable's `subscribe` will ensure the
// unsubscription logic is called, then synchronously rethrow the error.
// After that, Promise will trap the error and send it
// down the rejection path.
next(value);}},reject,resolve);});}},{key:'_subscribe',value:function _subscribe(subscriber){return this.source.subscribe(subscriber);}/**
       * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
       * @method Symbol.observable
       * @return {Observable} this instance of the observable
       */},{key:$$observable,value:function value(){return this;}}]);return Observable;}();// HACK: Since TypeScript inherits static properties too, we have to
// fight against TypeScript here so Subject can have a different static create signature
/**
   * Creates a new cold Observable by calling the Observable constructor
   * @static true
   * @owner Observable
   * @method create
   * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
   * @return {Observable} a new cold observable
   */Observable.create=function(subscribe){return new Observable(subscribe);};/**
   * An error thrown when an action is invalid because the object has been
   * unsubscribed.
   *
   * @see {@link Subject}
   * @see {@link BehaviorSubject}
   *
   * @class ObjectUnsubscribedError
   */var ObjectUnsubscribedError=function(_Error2){_inherits(ObjectUnsubscribedError,_Error2);function ObjectUnsubscribedError(){var _this5;_classCallCheck(this,ObjectUnsubscribedError);var err=(_this5=_possibleConstructorReturn(this,(ObjectUnsubscribedError.__proto__||Object.getPrototypeOf(ObjectUnsubscribedError)).call(this,'object unsubscribed')),_this5);_this5.name=err.name='ObjectUnsubscribedError';_this5.stack=err.stack;_this5.message=err.message;return _this5;}return ObjectUnsubscribedError;}(Error);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SubjectSubscription=function(_Subscription2){_inherits(SubjectSubscription,_Subscription2);function SubjectSubscription(subject,subscriber){_classCallCheck(this,SubjectSubscription);var _this6=_possibleConstructorReturn(this,(SubjectSubscription.__proto__||Object.getPrototypeOf(SubjectSubscription)).call(this));_this6.subject=subject;_this6.subscriber=subscriber;_this6.closed=false;return _this6;}_createClass(SubjectSubscription,[{key:'unsubscribe',value:function unsubscribe(){if(this.closed){return;}this.closed=true;var subject=this.subject;var observers=subject.observers;this.subject=null;if(!observers||observers.length===0||subject.isStopped||subject.closed){return;}var subscriberIndex=observers.indexOf(this.subscriber);if(subscriberIndex!==-1){observers.splice(subscriberIndex,1);}}}]);return SubjectSubscription;}(Subscription);/**
   * @class SubjectSubscriber<T>
   */var SubjectSubscriber=function(_Subscriber2){_inherits(SubjectSubscriber,_Subscriber2);function SubjectSubscriber(destination){_classCallCheck(this,SubjectSubscriber);var _this7=_possibleConstructorReturn(this,(SubjectSubscriber.__proto__||Object.getPrototypeOf(SubjectSubscriber)).call(this,destination));_this7.destination=destination;return _this7;}return SubjectSubscriber;}(Subscriber);/**
   * @class Subject<T>
   */var Subject=function(_Observable){_inherits(Subject,_Observable);function Subject(){_classCallCheck(this,Subject);var _this8=_possibleConstructorReturn(this,(Subject.__proto__||Object.getPrototypeOf(Subject)).call(this));_this8.observers=[];_this8.closed=false;_this8.isStopped=false;_this8.hasError=false;_this8.thrownError=null;return _this8;}_createClass(Subject,[{key:rxSubscriber,value:function value(){return new SubjectSubscriber(this);}},{key:'lift',value:function lift(operator){var subject=new AnonymousSubject(this,this);subject.operator=operator;return subject;}},{key:'next',value:function next(value){if(this.closed){throw new ObjectUnsubscribedError();}if(!this.isStopped){var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].next(value);}}}},{key:'error',value:function error(err){if(this.closed){throw new ObjectUnsubscribedError();}this.hasError=true;this.thrownError=err;this.isStopped=true;var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].error(err);}this.observers.length=0;}},{key:'complete',value:function complete(){if(this.closed){throw new ObjectUnsubscribedError();}this.isStopped=true;var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].complete();}this.observers.length=0;}},{key:'unsubscribe',value:function unsubscribe(){this.isStopped=true;this.closed=true;this.observers=null;}},{key:'_subscribe',value:function _subscribe(subscriber){if(this.closed){throw new ObjectUnsubscribedError();}else if(this.hasError){subscriber.error(this.thrownError);return Subscription.EMPTY;}else if(this.isStopped){subscriber.complete();return Subscription.EMPTY;}else{this.observers.push(subscriber);return new SubjectSubscription(this,subscriber);}}},{key:'asObservable',value:function asObservable(){var observable=new Observable();observable.source=this;return observable;}}]);return Subject;}(Observable);Subject.create=function(destination,source){return new AnonymousSubject(destination,source);};/**
   * @class AnonymousSubject<T>
   */var AnonymousSubject=function(_Subject){_inherits(AnonymousSubject,_Subject);function AnonymousSubject(destination,source){_classCallCheck(this,AnonymousSubject);var _this9=_possibleConstructorReturn(this,(AnonymousSubject.__proto__||Object.getPrototypeOf(AnonymousSubject)).call(this));_this9.destination=destination;_this9.source=source;return _this9;}_createClass(AnonymousSubject,[{key:'next',value:function next(value){var destination=this.destination;if(destination&&destination.next){destination.next(value);}}},{key:'error',value:function error(err){var destination=this.destination;if(destination&&destination.error){this.destination.error(err);}}},{key:'complete',value:function complete(){var destination=this.destination;if(destination&&destination.complete){this.destination.complete();}}},{key:'_subscribe',value:function _subscribe(subscriber){var source=this.source;if(source){return this.source.subscribe(subscriber);}else{return Subscription.EMPTY;}}}]);return AnonymousSubject;}(Subject);var HttpSample=function(){function HttpSample(http){_classCallCheck(this,HttpSample);this.postResponse=new Person();this.country=new Subject();this.http=http;this.loadFriendsSuccessFully();this.loadFriendsWithError();this.loadContractByCustomer();this.loadFriendsAndCustomers();this.loadFriendsAsPromise();this.getCapitol();}_createClass(HttpSample,[{key:'getCapitol',value:function getCapitol(){var _this10=this;this.country.switchMap(function(country){return _this10.http.get('./country-info/'+country+'.json');}).map(function(res){return res.json();}).subscribe(function(res){return _this10.capitol=res.capitol;});}},{key:'isActive',value:function isActive(country){return this.activeCountry===country;}},{key:'loadFriendsAsPromise',value:function loadFriendsAsPromise(){var _this11=this;this.friendsAsPromise={};this.http.get('./friends.json').toPromise().then(function(res){_this11.friendsAsPromise.friends=res.json().friends;});}},{key:'loadFriendsAndCustomers',value:function loadFriendsAndCustomers(){var _this12=this;this.combined={friends:[],customer:{}};Observable.forkJoin(this.http.get('./friends.json').map(function(res){return res.json();}),this.http.get('./customer.json').map(function(res){return res.json();})).subscribe(function(res){return _this12.combined={friends:res[0].friends,customer:res[1]};});}},{key:'loadFriendsSuccessFully',value:function loadFriendsSuccessFully(){var _this13=this;this.result={friends:[]};this.http.get('./friends.json').map(function(res){return res.json();}).subscribe(function(res){return _this13.result=res;});}},{key:'loadContractByCustomer',value:function loadContractByCustomer(){var _this14=this;this.http.get('./customer.json').map(function(res){_this14.customer=res.json();return _this14.customer;}).flatMap(function(customer){return _this14.http.get(customer.contractUrl);}).map(function(res){return res.json();}).subscribe(function(res){return _this14.contract=res;});}},{key:'loadFriendsWithError',value:function loadFriendsWithError(){var _this15=this;this.result={friends:[]};this.http.get('./friends2.json').map(function(res){return res.json();}).subscribe(function(res){return _this15.result=res;},function(error){return _this15.error=error;});}},{key:'postData',value:function postData(){var _this16=this;var headers=new _angular_http.Headers();headers.append('Content-Type','application/json');this.http.post('http://www.syntaxsuccess.com/poc-post/',{firstName:'Joe',lastName:'Smith'},{headers:headers}).map(function(res){return res.json();}).subscribe(function(res){return _this16.postResponse=res;});}}]);return HttpSample;}();HttpSample.decorators=[{type:_angular_core.Component,args:[{templateUrl:'./http.html'}]}];HttpSample.ctorParameters=[{type:_angular_http.Http}];var Person=function Person(){_classCallCheck(this,Person);};var KeyMap=function(){function KeyMap(){_classCallCheck(this,KeyMap);}_createClass(KeyMap,null,[{key:'getNavigationDirection',value:function getNavigationDirection(keyCode){var direction=new KeyDirection();if(keyCode===38){direction.up=true;}if(keyCode===40){direction.down=true;}if(keyCode===39){direction.right=true;}if(keyCode===9){direction.tab=true;}if(keyCode===37){direction.left=true;}return direction;}}]);return KeyMap;}();var KeyDirection=function KeyDirection(){_classCallCheck(this,KeyDirection);};var Column$1=function Column$1(columnIndex,rowIndex){_classCallCheck(this,Column$1);this.columnIndex=columnIndex;this.rowIndex=rowIndex;this.cellValue='';};var Row=function Row(rowIndex,columnCount){_classCallCheck(this,Row);this.rowIndex=rowIndex;this.columnCount=columnCount;this.columns=[];for(var j=0;j<this.columnCount;j++){this.columns.push(new Column$1(j,this.rowIndex));}};var SpreadsheetModel=function(){function SpreadsheetModel(rowCount,columnCount){_classCallCheck(this,SpreadsheetModel);this.rowCount=rowCount;this.columnCount=columnCount;this.rows=[];this.start=0;this.end=rowCount;for(var i=0;i<this.rowCount;i++){this.rows.push(new Row(i,this.columnCount));}this.current=this.rows[0].columns[0];}_createClass(SpreadsheetModel,[{key:'selectColumn',value:function selectColumn(col){this.current=col;}},{key:'navigate',value:function navigate(keyCode){var navDirection=KeyMap.getNavigationDirection(keyCode);if(navDirection.down){this.ensureRow();this.current=this.rows[this.current.rowIndex+1].columns[this.current.columnIndex];this.adjustRowRangeDownward();}if(navDirection.up){if(this.current.rowIndex===0){return;}this.current=this.rows[this.current.rowIndex-1].columns[this.current.columnIndex];this.adjustRowRangeUpward();}if(navDirection.left){if(this.current.columnIndex===0){return;}this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex-1];}if(navDirection.right){if(this.current.columnIndex===this.columnCount-1){return;}this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex+1];}if(navDirection.tab){if(this.current.columnIndex===this.columnCount-1){this.ensureRow();this.current=this.rows[this.current.rowIndex+1].columns[0];this.adjustRowRangeDownward();}else{this.current=this.rows[this.current.rowIndex].columns[this.current.columnIndex+1];}}}},{key:'adjustRowRangeUpward',value:function adjustRowRangeUpward(){if(this.current.rowIndex<this.start){this.shiftRowsBy(-1);}}},{key:'adjustRowRangeDownward',value:function adjustRowRangeDownward(){if(this.current.rowIndex===this.end){this.shiftRowsBy(1);}}},{key:'shiftRowsBy',value:function shiftRowsBy(offset){this.start=this.start+offset;this.end=this.end+offset;}},{key:'ensureRow',value:function ensureRow(){if(this.current.rowIndex+1>=this.rows.length){this.rows.push(new Row(this.current.rowIndex+1,this.columnCount));}}}]);return SpreadsheetModel;}();var HeaderRowService=function(){function HeaderRowService(){_classCallCheck(this,HeaderRowService);}_createClass(HeaderRowService,null,[{key:'createHeader',value:function createHeader(length){var alpha='abcdefghijklmnopqrstuvwxyz';var headerLength=1;var header=[];var prefix='';var pass=0;var charCounter=0;for(var i=0;i<length;i++){if(charCounter===alpha.length){prefix+=alpha.substr(pass,1);charCounter=0;}header.push(prefix+alpha.substr(charCounter,headerLength));charCounter++;}return header;}}]);return HeaderRowService;}();var Spreadsheet=function(){function Spreadsheet(){_classCallCheck(this,Spreadsheet);this.header=[];this.visibleRows=[];this.model=new SpreadsheetModel(10,4);this.header=HeaderRowService.createHeader(this.model.rows[0].columns.length);this.visibleRows=this.getVisibleRows();}_createClass(Spreadsheet,[{key:'getHeader',value:function getHeader(){return HeaderRowService.createHeader(this.model.rows[0].columns.length);}},{key:'navigate',value:function navigate($event){this.model.navigate($event.keyCode);this.visibleRows=this.getVisibleRows();}},{key:'ngAfterViewChecked',value:function ngAfterViewChecked(){var cell=document.getElementById(this.model.current.rowIndex+'-'+this.model.current.columnIndex);cell.focus();}},{key:'getVisibleRows',value:function getVisibleRows(){var _this17=this;return this.model.rows.filter(function(row){return row.rowIndex>=_this17.model.start&&row.rowIndex<_this17.model.end;});}},{key:'getActive',value:function getActive(col){if(col===this.model.current){return'active-cell';}}}]);return Spreadsheet;}();Spreadsheet.decorators=[{type:_angular_core.Component,args:[{selector:'spreadsheet',templateUrl:'./spreadsheet.html'}]}];Spreadsheet.ctorParameters=[];Spreadsheet.propDecorators={'rows':[{type:_angular_core.Input}],'columns':[{type:_angular_core.Input}]};var Algorithms=function Algorithms(){_classCallCheck(this,Algorithms);};Algorithms.decorators=[{type:_angular_core.Component,args:[{selector:'algorithms',templateUrl:'./algorithms.html'}]}];Algorithms.ctorParameters=[];var CountryViewModelFactory=function(){function CountryViewModelFactory(){_classCallCheck(this,CountryViewModelFactory);}_createClass(CountryViewModelFactory,[{key:'createModel',value:function createModel(){var countries=[];var america=new CountryModel('North America');america.visible=true;var usa=new CountryModel('USA');usa.children.push(new CountryModel('New York'));usa.children.push(new CountryModel('Texas'));usa.children.push(new CountryModel('Oregon'));usa.children.push(new CountryModel('South Dakota'));america.children.push(usa);america.children.push(new CountryModel('Canada'));america.children.push(new CountryModel('Mexico'));var europe=new CountryModel('Europe');europe.children.push(new CountryModel('Norway'));europe.children.push(new CountryModel('Sweden'));europe.children.push(new CountryModel('France'));europe.children.push(new CountryModel('Germany'));europe.visible=true;countries.push(america);countries.push(europe);return countries;}}]);return CountryViewModelFactory;}();var CountryModel=function(){function CountryModel(text){_classCallCheck(this,CountryModel);this.visible=true;this.children=[];this.text=text;this.icon=this.getIcon();}_createClass(CountryModel,[{key:'getIcon',value:function getIcon(){if(this.children.length>0){if(this.children[0].visible===false){return'+ ';}return'- ';}return null;}}]);return CountryModel;}();var React=__React;var AppDispatcher=new Dispatcher();AppDispatcher.handleViewAction=function(action){this.dispatch({source:'VIEW_ACTION',action:action});};AppDispatcher.register(function(payload){switch(payload.eventName){case'expand-collapse':NodeStore.toggleNode(payload.node);break;}return true;});var NodeStore=_.extend({},EventEmitter.prototype,{_nodes:new CountryViewModelFactory().createModel(),getNodes:function getNodes(){return this._nodes;},toggleNode:function toggleNode(node){for(var i=0;i<node.children.length;i++){node.children[i].visible=!node.children[i].visible;}this.emit('change');},addChangeListener:function addChangeListener(callback){this.on('change',callback);},removeChangeListener:function removeChangeListener(callback){this.removeListener('change',callback);}});var TreeNode=React.createClass({toggle:function toggle(e){AppDispatcher.dispatch({eventName:'expand-collapse',node:this.props.node});},render:function render(){var nodes=this.props.children.map(function(n){if(n.visible){return React.createElement(TreeNode,{node:n,children:n.children});}});return React.createElement("li",null,React.createElement("span",{onClick:this.toggle},this.props.node.getIcon()),React.createElement("span",null,this.props.node.text),React.createElement("ul",null,nodes));}});var TreeView=React.createClass({getInitialState:function getInitialState(){return{countries:NodeStore.getNodes()};},onChange:function onChange(){this.setState({countries:NodeStore.getNodes()});},componentDidMount:function componentDidMount(){NodeStore.addChangeListener(this.onChange);},componentWillUnmount:function componentWillUnmount(){NodeStore.removeChangeListener(this.onChange);},render:function render(){var countries=this.state.countries;var nodes=countries.map(function(n){return React.createElement(TreeNode,{node:n,children:n.children});});return React.createElement("div",null,React.createElement("h2",null,this.props.title),React.createElement("ul",null,nodes));}});var ReactTreeView=function(){function ReactTreeView(){_classCallCheck(this,ReactTreeView);}_createClass(ReactTreeView,null,[{key:'initialize',value:function initialize(title){React.render(React.createElement(TreeView,{title:title}),document.getElementById('react-tree-view'));}}]);return ReactTreeView;}();var Angular2Host=function(){function Angular2Host(){_classCallCheck(this,Angular2Host);}_createClass(Angular2Host,[{key:'ngOnInit',value:function ngOnInit(){ReactTreeView.initialize('Locations');}}]);return Angular2Host;}();Angular2Host.decorators=[{type:_angular_core.Component,args:[{selector:'angular-2-host',templateUrl:'./angular-2-host.html'}]}];Angular2Host.ctorParameters=[];var JqueryIntegration=function(){function JqueryIntegration(elementRef){_classCallCheck(this,JqueryIntegration);this.elementRef=elementRef;}_createClass(JqueryIntegration,[{key:'ngOnInit',value:function ngOnInit(){jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({containment:'#draggable-parent'});}}]);return JqueryIntegration;}();JqueryIntegration.decorators=[{type:_angular_core.Component,args:[{selector:'jquery-integration',templateUrl:'./jquery-integration.html'}]}];JqueryIntegration.ctorParameters=[{type:_angular_core.ElementRef,decorators:[{type:_angular_core.Inject,args:[_angular_core.ElementRef]}]}];var InputControls=function InputControls(){_classCallCheck(this,InputControls);this.javascript=false;this.angular=false;this.csharp=false;this.name='Two way bound';};InputControls.decorators=[{type:_angular_core.Component,args:[{selector:'input-controls',template:'\n            <h1>Input Controls</h1>\n            <div class="input-controls">\n                <h4>"Two way bindings"</h4>\n\n                <input id="name" [(ngModel)]="name" />\n\n                <div>Current Value: {{name}}</div>\n            </div>\n\n            <div class="input-controls">\n                <h4>Select a gender</h4>\n                <div>\n                    <label>\n                        <input #male name="gender" type="radio" value="Male" (click)="gender = male.value" />\n                        Male\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #female name="gender" type="radio"  value="Female" (click)="gender = female.value" />\n                        Female\n                    </label>\n                </div>\n                <div>\n                    Selected gender is <strong>{{gender}}</strong>\n                </div>\n            </div>\n\n            <div class="input-controls">\n                <h4>Select your programming skills</h4>\n                <div>\n                    <label>\n                        <input #angularcb type="checkbox" (change)="angular = angularcb.checked" />\n                        Angular\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #javascriptcb type="checkbox" (change)="javascript = javascriptcb.checked" />\n                        JavaScript\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #csharpcb type="checkbox" (change)="csharp = csharpcb.checked" />\n                        C#\n                    </label>\n                </div>\n            </div>\n\n            <div>\n                Selected Skills:\n                <ul>\n                    <li *ngIf="angular">Angular</li>\n                    <li *ngIf="javascript">JavaScript</li>\n                    <li *ngIf="csharp">C#</li>\n                </ul>\n            </div>\n\n            <h4><a href="http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0">Read more here</a></h4>'}]}];InputControls.ctorParameters=[];var AddressBookService=function(){function AddressBookService(http){_classCallCheck(this,AddressBookService);console.log('Creating AddressBookService');this.http=http;}_createClass(AddressBookService,[{key:'getEntries',value:function getEntries(){return this.http.get('./people.json').map(function(res){return res.json();});}}]);return AddressBookService;}();AddressBookService.decorators=[{type:_angular_core.Injectable}];AddressBookService.ctorParameters=[{type:_angular_http.Http}];var AddressBookTitleService=function(){function AddressBookTitleService(){_classCallCheck(this,AddressBookTitleService);this.callCount=0;console.log('AddressBookTitleService');}_createClass(AddressBookTitleService,[{key:'getTitle',value:function getTitle(){this.callCount++;return"My Address Book";}}]);return AddressBookTitleService;}();var AddressBook=function AddressBook(addressBookService,addressBookTitleService){var _this18=this;_classCallCheck(this,AddressBook);console.log('Creating AddressBook');this.result={people:[]};addressBookService.getEntries().subscribe(function(res){return _this18.result=res;});this.title=addressBookTitleService.getTitle();console.log(addressBookTitleService.callCount);};AddressBook.decorators=[{type:_angular_core.Component,args:[{selector:'address-book',templateUrl:'./address-book.html',providers:[AddressBookService]}]}];AddressBook.ctorParameters=[{type:AddressBookService},{type:AddressBookTitleService}];function zipValidator(zip){var valid=/^\d{5}$/.test(zip.value);if(valid){return null;}return{"invalidZip":true};}var AddressForm=function(){function AddressForm(){_classCallCheck(this,AddressForm);this.payLoad=null;var group={};group.firstName=new _angular_forms.FormControl('',_angular_forms.Validators.required);group.streetAddress=new _angular_forms.FormControl('',_angular_forms.Validators.required);group.zip=new _angular_forms.FormControl('',zipValidator);group.type=new _angular_forms.FormControl('home');this.form=new _angular_forms.FormGroup(group);}_createClass(AddressForm,[{key:'onSubmit',value:function onSubmit(){this.payLoad=JSON.stringify(this.form.value);}}]);return AddressForm;}();AddressForm.decorators=[{type:_angular_core.Component,args:[{selector:'address-form',templateUrl:'./address-form.html'}]}];AddressForm.ctorParameters=[];var EdgeService=function(_Subject2){_inherits(EdgeService,_Subject2);function EdgeService(){_classCallCheck(this,EdgeService);return _possibleConstructorReturn(this,(EdgeService.__proto__||Object.getPrototypeOf(EdgeService)).apply(this,arguments));}_createClass(EdgeService,[{key:'getCoordinates',value:function getCoordinates(){return this.asObservable().bufferCount(2).map(function(buffer){return{first:buffer[0],second:buffer[1]};});}}]);return EdgeService;}(Subject);var Edge=function(){function Edge(){_classCallCheck(this,Edge);this.style={};}_createClass(Edge,[{key:'setCoordinates',value:function setCoordinates(first,second){this.x1=first.x;this.y1=first.y;this.x2=second.x;this.y2=second.y;this.drawLine(this.x1,this.y1,this.x2,this.y2);}},{key:'drawLine',value:function drawLine(x1,y1,x2,y2){var length=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));var angle=Math.atan2(y2-y1,x2-x1)*180/Math.PI;var transform='rotate('+angle+'deg)';this.style={'position':'absolute','transform':transform,'width':length};}}]);return Edge;}();Edge.decorators=[{type:_angular_core.Component,args:[{selector:'edge',template:'<div class="edge" [ngStyle]="style"></div>'}]}];Edge.ctorParameters=[];var Graph=function(){function Graph(componentResolver,edgeService){_classCallCheck(this,Graph);this.componentResolver=componentResolver;this.edgeService=edgeService;}_createClass(Graph,[{key:'ngOnInit',value:function ngOnInit(){var _this20=this;this.edgeService.getCoordinates().subscribe(function(coordinates){var factory=_this20.componentResolver.resolveComponentFactory(Edge);var res=coordinates.first.viewContainer.createComponent(factory);res.instance.setCoordinates(coordinates.first,coordinates.second);});}}]);return Graph;}();Graph.decorators=[{type:_angular_core.Component,args:[{selector:'graph',templateUrl:'./graph.html',providers:[EdgeService]}]}];Graph.ctorParameters=[{type:_angular_core.ComponentFactoryResolver},{type:EdgeService}];var CustomerEventEmitter=function(_Subject3){_inherits(CustomerEventEmitter,_Subject3);function CustomerEventEmitter(){_classCallCheck(this,CustomerEventEmitter);return _possibleConstructorReturn(this,(CustomerEventEmitter.__proto__||Object.getPrototypeOf(CustomerEventEmitter)).call(this));}_createClass(CustomerEventEmitter,[{key:'emit',value:function emit(value){_get(CustomerEventEmitter.prototype.__proto__||Object.getPrototypeOf(CustomerEventEmitter.prototype),'next',this).call(this,value);}}]);return CustomerEventEmitter;}(Subject);var PubSubService=function PubSubService(){_classCallCheck(this,PubSubService);this.Stream=new CustomerEventEmitter();};var PubSub=function PubSub(){_classCallCheck(this,PubSub);};PubSub.decorators=[{type:_angular_core.Component,args:[{selector:'pub-sub',templateUrl:'./pub-sub.html',providers:[PubSubService]}]}];PubSub.ctorParameters=[];/**
   * @class AsyncSubject<T>
   */var AsyncSubject=function(_Subject4){_inherits(AsyncSubject,_Subject4);function AsyncSubject(){var _ref;_classCallCheck(this,AsyncSubject);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this22=_possibleConstructorReturn(this,(_ref=AsyncSubject.__proto__||Object.getPrototypeOf(AsyncSubject)).call.apply(_ref,[this].concat(args)));_this22.value=null;_this22.hasNext=false;_this22.hasCompleted=false;return _this22;}_createClass(AsyncSubject,[{key:'_subscribe',value:function _subscribe(subscriber){if(this.hasCompleted&&this.hasNext){subscriber.next(this.value);subscriber.complete();return Subscription.EMPTY;}else if(this.hasError){subscriber.error(this.thrownError);return Subscription.EMPTY;}return _get(AsyncSubject.prototype.__proto__||Object.getPrototypeOf(AsyncSubject.prototype),'_subscribe',this).call(this,subscriber);}},{key:'next',value:function next(value){if(!this.hasCompleted){this.value=value;this.hasNext=true;}}},{key:'complete',value:function complete(){this.hasCompleted=true;if(this.hasNext){_get(AsyncSubject.prototype.__proto__||Object.getPrototypeOf(AsyncSubject.prototype),'next',this).call(this,this.value);}_get(AsyncSubject.prototype.__proto__||Object.getPrototypeOf(AsyncSubject.prototype),'complete',this).call(this);}}]);return AsyncSubject;}(Subject);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var BoundCallbackObservable=function(_Observable2){_inherits(BoundCallbackObservable,_Observable2);function BoundCallbackObservable(callbackFunc,selector,args,scheduler){_classCallCheck(this,BoundCallbackObservable);var _this23=_possibleConstructorReturn(this,(BoundCallbackObservable.__proto__||Object.getPrototypeOf(BoundCallbackObservable)).call(this));_this23.callbackFunc=callbackFunc;_this23.selector=selector;_this23.args=args;_this23.scheduler=scheduler;return _this23;}/* tslint:enable:max-line-length *//**
       * Converts a callback API to a function that returns an Observable.
       *
       * <span class="informal">Give it a function `f` of type `f(x, callback)` and
       * it will return a function `g` that when called as `g(x)` will output an
       * Observable.</span>
       *
       * `bindCallback` is not an operator because its input and output are not
       * Observables. The input is a function `func` with some parameters, but the
       * last parameter must be a callback function that `func` calls when it is
       * done. The output of `bindCallback` is a function that takes the same
       * parameters as `func`, except the last one (the callback). When the output
       * function is called with arguments, it will return an Observable where the
       * results will be delivered to.
       *
       * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
       * // Suppose we have jQuery.getJSON('/my/url', callback)
       * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
       * var result = getJSONAsObservable('/my/url');
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @see {@link bindNodeCallback}
       * @see {@link from}
       * @see {@link fromPromise}
       *
       * @param {function} func Function with a callback as the last parameter.
       * @param {function} selector A function which takes the arguments from the
       * callback and maps those a value to emit on the output Observable.
       * @param {Scheduler} [scheduler] The scheduler on which to schedule the
       * callbacks.
       * @return {function(...params: *): Observable} A function which returns the
       * Observable that delivers the same values the callback would deliver.
       * @static true
       * @name bindCallback
       * @owner Observable
       */_createClass(BoundCallbackObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var callbackFunc=this.callbackFunc;var args=this.args;var scheduler=this.scheduler;var subject=this.subject;if(!scheduler){if(!subject){subject=this.subject=new AsyncSubject();var handler=function handlerFn(){var source=handlerFn.source;var selector=source.selector;var subject=source.subject;for(var _len2=arguments.length,innerArgs=Array(_len2),_key2=0;_key2<_len2;_key2++){innerArgs[_key2]=arguments[_key2];}if(selector){var _result=tryCatch(selector).apply(this,innerArgs);if(_result===errorObject){subject.error(errorObject.e);}else{subject.next(_result);subject.complete();}}else{subject.next(innerArgs.length===1?innerArgs[0]:innerArgs);subject.complete();}};// use named function instance to avoid closure.
handler.source=this;var result=tryCatch(callbackFunc).apply(this,args.concat(handler));if(result===errorObject){subject.error(errorObject.e);}}return subject.subscribe(subscriber);}else{return scheduler.schedule(BoundCallbackObservable.dispatch,0,{source:this,subscriber:subscriber});}}}],[{key:'create',value:function create(func){var selector=arguments.length<=1||arguments[1]===undefined?undefined:arguments[1];var scheduler=arguments[2];return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return new BoundCallbackObservable(func,selector,args,scheduler);};}},{key:'dispatch',value:function dispatch(state){var self=this;var source=state.source;var subscriber=state.subscriber;var callbackFunc=source.callbackFunc;var args=source.args;var scheduler=source.scheduler;var subject=source.subject;if(!subject){subject=source.subject=new AsyncSubject();var handler=function handlerFn(){var source=handlerFn.source;var selector=source.selector;var subject=source.subject;for(var _len4=arguments.length,innerArgs=Array(_len4),_key4=0;_key4<_len4;_key4++){innerArgs[_key4]=arguments[_key4];}if(selector){var _result2=tryCatch(selector).apply(this,innerArgs);if(_result2===errorObject){self.add(scheduler.schedule(dispatchError,0,{err:errorObject.e,subject:subject}));}else{self.add(scheduler.schedule(dispatchNext,0,{value:_result2,subject:subject}));}}else{var value=innerArgs.length===1?innerArgs[0]:innerArgs;self.add(scheduler.schedule(dispatchNext,0,{value:value,subject:subject}));}};// use named function to pass values in without closure
handler.source=source;var result=tryCatch(callbackFunc).apply(this,args.concat(handler));if(result===errorObject){subject.error(errorObject.e);}}self.add(subject.subscribe(subscriber));}}]);return BoundCallbackObservable;}(Observable);function dispatchNext(arg){var value=arg.value;var subject=arg.subject;subject.next(value);subject.complete();}function dispatchError(arg){var err=arg.err;var subject=arg.subject;subject.error(err);}var bindCallback=BoundCallbackObservable.create;Observable.bindCallback=bindCallback;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var BoundNodeCallbackObservable=function(_Observable3){_inherits(BoundNodeCallbackObservable,_Observable3);function BoundNodeCallbackObservable(callbackFunc,selector,args,scheduler){_classCallCheck(this,BoundNodeCallbackObservable);var _this24=_possibleConstructorReturn(this,(BoundNodeCallbackObservable.__proto__||Object.getPrototypeOf(BoundNodeCallbackObservable)).call(this));_this24.callbackFunc=callbackFunc;_this24.selector=selector;_this24.args=args;_this24.scheduler=scheduler;return _this24;}/* tslint:enable:max-line-length *//**
       * Converts a Node.js-style callback API to a function that returns an
       * Observable.
       *
       * <span class="informal">It's just like {@link bindCallback}, but the
       * callback is expected to be of type `callback(error, result)`.</span>
       *
       * `bindNodeCallback` is not an operator because its input and output are not
       * Observables. The input is a function `func` with some parameters, but the
       * last parameter must be a callback function that `func` calls when it is
       * done. The callback function is expected to follow Node.js conventions,
       * where the first argument to the callback is an error, while remaining
       * arguments are the callback result. The output of `bindNodeCallback` is a
       * function that takes the same parameters as `func`, except the last one (the
       * callback). When the output function is called with arguments, it will
       * return an Observable where the results will be delivered to.
       *
       * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
       * import * as fs from 'fs';
       * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
       * var result = readFileAsObservable('./roadNames.txt', 'utf8');
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @see {@link bindCallback}
       * @see {@link from}
       * @see {@link fromPromise}
       *
       * @param {function} func Function with a callback as the last parameter.
       * @param {function} selector A function which takes the arguments from the
       * callback and maps those a value to emit on the output Observable.
       * @param {Scheduler} [scheduler] The scheduler on which to schedule the
       * callbacks.
       * @return {function(...params: *): Observable} A function which returns the
       * Observable that delivers the same values the Node.js callback would
       * deliver.
       * @static true
       * @name bindNodeCallback
       * @owner Observable
       */_createClass(BoundNodeCallbackObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var callbackFunc=this.callbackFunc;var args=this.args;var scheduler=this.scheduler;var subject=this.subject;if(!scheduler){if(!subject){subject=this.subject=new AsyncSubject();var handler=function handlerFn(){var source=handlerFn.source;var selector=source.selector;var subject=source.subject;for(var _len5=arguments.length,innerArgs=Array(_len5),_key5=0;_key5<_len5;_key5++){innerArgs[_key5]=arguments[_key5];}var err=innerArgs.shift();if(err){subject.error(err);}else if(selector){var _result3=tryCatch(selector).apply(this,innerArgs);if(_result3===errorObject){subject.error(errorObject.e);}else{subject.next(_result3);subject.complete();}}else{subject.next(innerArgs.length===1?innerArgs[0]:innerArgs);subject.complete();}};// use named function instance to avoid closure.
handler.source=this;var result=tryCatch(callbackFunc).apply(this,args.concat(handler));if(result===errorObject){subject.error(errorObject.e);}}return subject.subscribe(subscriber);}else{return scheduler.schedule(dispatch,0,{source:this,subscriber:subscriber});}}}],[{key:'create',value:function create(func){var selector=arguments.length<=1||arguments[1]===undefined?undefined:arguments[1];var scheduler=arguments[2];return function(){for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}return new BoundNodeCallbackObservable(func,selector,args,scheduler);};}}]);return BoundNodeCallbackObservable;}(Observable);function dispatch(state){var self=this;var source=state.source;var subscriber=state.subscriber;// XXX: cast to `any` to access to the private field in `source`.
var callbackFunc=source.callbackFunc;var args=source.args;var scheduler=source.scheduler;var subject=source.subject;if(!subject){subject=source.subject=new AsyncSubject();var handler=function handlerFn(){var source=handlerFn.source;var selector=source.selector;var subject=source.subject;for(var _len7=arguments.length,innerArgs=Array(_len7),_key7=0;_key7<_len7;_key7++){innerArgs[_key7]=arguments[_key7];}var err=innerArgs.shift();if(err){subject.error(err);}else if(selector){var _result4=tryCatch(selector).apply(this,innerArgs);if(_result4===errorObject){self.add(scheduler.schedule(dispatchError$1,0,{err:errorObject.e,subject:subject}));}else{self.add(scheduler.schedule(dispatchNext$1,0,{value:_result4,subject:subject}));}}else{var value=innerArgs.length===1?innerArgs[0]:innerArgs;self.add(scheduler.schedule(dispatchNext$1,0,{value:value,subject:subject}));}};// use named function to pass values in without closure
handler.source=source;var result=tryCatch(callbackFunc).apply(this,args.concat(handler));if(result===errorObject){subject.error(errorObject.e);}}self.add(subject.subscribe(subscriber));}function dispatchNext$1(arg){var value=arg.value;var subject=arg.subject;subject.next(value);subject.complete();}function dispatchError$1(arg){var err=arg.err;var subject=arg.subject;subject.error(err);}var bindNodeCallback=BoundNodeCallbackObservable.create;Observable.bindNodeCallback=bindNodeCallback;function isScheduler(value){return value&&typeof value.schedule==='function';}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var ScalarObservable=function(_Observable4){_inherits(ScalarObservable,_Observable4);function ScalarObservable(value,scheduler){_classCallCheck(this,ScalarObservable);var _this25=_possibleConstructorReturn(this,(ScalarObservable.__proto__||Object.getPrototypeOf(ScalarObservable)).call(this));_this25.value=value;_this25.scheduler=scheduler;_this25._isScalar=true;if(scheduler){_this25._isScalar=false;}return _this25;}_createClass(ScalarObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var value=this.value;var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(ScalarObservable.dispatch,0,{done:false,value:value,subscriber:subscriber});}else{subscriber.next(value);if(!subscriber.closed){subscriber.complete();}}}}],[{key:'create',value:function create(value,scheduler){return new ScalarObservable(value,scheduler);}},{key:'dispatch',value:function dispatch(state){var done=state.done;var value=state.value;var subscriber=state.subscriber;if(done){subscriber.complete();return;}subscriber.next(value);if(subscriber.closed){return;}state.done=true;this.schedule(state);}}]);return ScalarObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var EmptyObservable=function(_Observable5){_inherits(EmptyObservable,_Observable5);function EmptyObservable(scheduler){_classCallCheck(this,EmptyObservable);var _this26=_possibleConstructorReturn(this,(EmptyObservable.__proto__||Object.getPrototypeOf(EmptyObservable)).call(this));_this26.scheduler=scheduler;return _this26;}/**
       * Creates an Observable that emits no items to the Observer and immediately
       * emits a complete notification.
       *
       * <span class="informal">Just emits 'complete', and nothing else.
       * </span>
       *
       * <img src="./img/empty.png" width="100%">
       *
       * This static operator is useful for creating a simple Observable that only
       * emits the complete notification. It can be used for composing with other
       * Observables, such as in a {@link mergeMap}.
       *
       * @example <caption>Emit the number 7, then complete.</caption>
       * var result = Rx.Observable.empty().startWith(7);
       * result.subscribe(x => console.log(x));
       *
       * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
       * var interval = Rx.Observable.interval(1000);
       * var result = interval.mergeMap(x =>
       *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
       * );
       * result.subscribe(x => console.log(x));
       *
       * @see {@link create}
       * @see {@link never}
       * @see {@link of}
       * @see {@link throw}
       *
       * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
       * the emission of the complete notification.
       * @return {Observable} An "empty" Observable: emits only the complete
       * notification.
       * @static true
       * @name empty
       * @owner Observable
       */_createClass(EmptyObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(EmptyObservable.dispatch,0,{subscriber:subscriber});}else{subscriber.complete();}}}],[{key:'create',value:function create(scheduler){return new EmptyObservable(scheduler);}},{key:'dispatch',value:function dispatch(arg){var subscriber=arg.subscriber;subscriber.complete();}}]);return EmptyObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var ArrayObservable=function(_Observable6){_inherits(ArrayObservable,_Observable6);function ArrayObservable(array,scheduler){_classCallCheck(this,ArrayObservable);var _this27=_possibleConstructorReturn(this,(ArrayObservable.__proto__||Object.getPrototypeOf(ArrayObservable)).call(this));_this27.array=array;_this27.scheduler=scheduler;if(!scheduler&&array.length===1){_this27._isScalar=true;_this27.value=array[0];}return _this27;}_createClass(ArrayObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var array=this.array;var count=array.length;var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(ArrayObservable.dispatch,0,{array:array,index:index,count:count,subscriber:subscriber});}else{for(var i=0;i<count&&!subscriber.closed;i++){subscriber.next(array[i]);}subscriber.complete();}}}],[{key:'create',value:function create(array,scheduler){return new ArrayObservable(array,scheduler);}/**
       * Creates an Observable that emits some values you specify as arguments,
       * immediately one after the other, and then emits a complete notification.
       *
       * <span class="informal">Emits the arguments you provide, then completes.
       * </span>
       *
       * <img src="./img/of.png" width="100%">
       *
       * This static operator is useful for creating a simple Observable that only
       * emits the arguments given, and the complete notification thereafter. It can
       * be used for composing with other Observables, such as with {@link concat}.
       * By default, it uses a `null` Scheduler, which means the `next`
       * notifications are sent synchronously, although with a different Scheduler
       * it is possible to determine when those notifications will be delivered.
       *
       * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
       * var numbers = Rx.Observable.of(10, 20, 30);
       * var letters = Rx.Observable.of('a', 'b', 'c');
       * var interval = Rx.Observable.interval(1000);
       * var result = numbers.concat(letters).concat(interval);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link create}
       * @see {@link empty}
       * @see {@link never}
       * @see {@link throw}
       *
       * @param {...T} values Arguments that represent `next` values to be emitted.
       * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
       * the emissions of the `next` notifications.
       * @return {Observable<T>} An Observable that emits each given input value.
       * @static true
       * @name of
       * @owner Observable
       */},{key:'of',value:function of(){for(var _len8=arguments.length,array=Array(_len8),_key8=0;_key8<_len8;_key8++){array[_key8]=arguments[_key8];}var scheduler=array[array.length-1];if(isScheduler(scheduler)){array.pop();}else{scheduler=null;}var len=array.length;if(len>1){return new ArrayObservable(array,scheduler);}else if(len===1){return new ScalarObservable(array[0],scheduler);}else{return new EmptyObservable(scheduler);}}},{key:'dispatch',value:function dispatch(state){var array=state.array;var index=state.index;var count=state.count;var subscriber=state.subscriber;if(index>=count){subscriber.complete();return;}subscriber.next(array[index]);if(subscriber.closed){return;}state.index=index+1;this.schedule(state);}}]);return ArrayObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var OuterSubscriber=function(_Subscriber3){_inherits(OuterSubscriber,_Subscriber3);function OuterSubscriber(){_classCallCheck(this,OuterSubscriber);return _possibleConstructorReturn(this,(OuterSubscriber.__proto__||Object.getPrototypeOf(OuterSubscriber)).apply(this,arguments));}_createClass(OuterSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.destination.next(innerValue);}},{key:'notifyError',value:function notifyError(error,innerSub){this.destination.error(error);}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.destination.complete();}}]);return OuterSubscriber;}(Subscriber);function isPromise(value){return value&&typeof value.subscribe!=='function'&&typeof value.then==='function';}var $$iterator=void 0;var Symbol$2=root.Symbol;if(typeof Symbol$2==='function'){if(Symbol$2.iterator){$$iterator=Symbol$2.iterator;}else if(typeof Symbol$2.for==='function'){$$iterator=Symbol$2.for('iterator');}}else{if(root.Set&&typeof new root.Set()['@@iterator']==='function'){// Bug for mozilla version
$$iterator='@@iterator';}else if(root.Map){// es6-shim specific logic
var keys=Object.getOwnPropertyNames(root.Map.prototype);for(var i=0;i<keys.length;++i){var key=keys[i];if(key!=='entries'&&key!=='size'&&root.Map.prototype[key]===root.Map.prototype['entries']){$$iterator=key;break;}}}else{$$iterator='@@iterator';}}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var InnerSubscriber=function(_Subscriber4){_inherits(InnerSubscriber,_Subscriber4);function InnerSubscriber(parent,outerValue,outerIndex){_classCallCheck(this,InnerSubscriber);var _this29=_possibleConstructorReturn(this,(InnerSubscriber.__proto__||Object.getPrototypeOf(InnerSubscriber)).call(this));_this29.parent=parent;_this29.outerValue=outerValue;_this29.outerIndex=outerIndex;_this29.index=0;return _this29;}_createClass(InnerSubscriber,[{key:'_next',value:function _next(value){this.parent.notifyNext(this.outerValue,value,this.outerIndex,this.index++,this);}},{key:'_error',value:function _error(error){this.parent.notifyError(error,this);this.unsubscribe();}},{key:'_complete',value:function _complete(){this.parent.notifyComplete(this);this.unsubscribe();}}]);return InnerSubscriber;}(Subscriber);function subscribeToResult(outerSubscriber,result,outerValue,outerIndex){var destination=new InnerSubscriber(outerSubscriber,outerValue,outerIndex);if(destination.closed){return null;}if(result instanceof Observable){if(result._isScalar){destination.next(result.value);destination.complete();return null;}else{return result.subscribe(destination);}}if(isArray(result)){for(var _i=0,len=result.length;_i<len&&!destination.closed;_i++){destination.next(result[_i]);}if(!destination.closed){destination.complete();}}else if(isPromise(result)){result.then(function(value){if(!destination.closed){destination.next(value);destination.complete();}},function(err){return destination.error(err);}).then(null,function(err){// Escaping the Promise trap: globally throw unhandled errors
root.setTimeout(function(){throw err;});});return destination;}else if(typeof result[$$iterator]==='function'){var iterator=result[$$iterator]();do{var item=iterator.next();if(item.done){destination.complete();break;}destination.next(item.value);if(destination.closed){break;}}while(true);}else if(typeof result[$$observable]==='function'){var obs=result[$$observable]();if(typeof obs.subscribe!=='function'){destination.error(new Error('invalid observable'));}else{return obs.subscribe(new InnerSubscriber(outerSubscriber,outerValue,outerIndex));}}else{destination.error(new TypeError('unknown type returned'));}return null;}var none={};/**
   * Combines multiple Observables to create an Observable whose values are
   * calculated from the latest values of each of its input Observables.
   *
   * <span class="informal">Whenever any input Observable emits a value, it
   * computes a formula using the latest values from all the inputs, then emits
   * the output of that formula.</span>
   *
   * <img src="./img/combineLatest.png" width="100%">
   *
   * `combineLatest` combines the values from this Observable with values from
   * Observables passed as arguments. This is done by subscribing to each
   * Observable, in order, and collecting an array of each of the most recent
   * values any time any of the input Observables emits, then either taking that
   * array and passing it as arguments to an optional `project` function and
   * emitting the return value of that, or just emitting the array of recent
   * values directly if there is no `project` function.
   *
   * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
   * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
   * var height = Rx.Observable.of(1.76, 1.77, 1.78);
   * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
   * bmi.subscribe(x => console.log('BMI is ' + x));
   *
   * @see {@link combineAll}
   * @see {@link merge}
   * @see {@link withLatestFrom}
   *
   * @param {Observable} other An input Observable to combine with the source
   * Observable. More than one input Observables may be given as argument.
   * @param {function} [project] An optional function to project the values from
   * the combined latest values into a new value on the output Observable.
   * @return {Observable} An Observable of projected values from the most recent
   * values from each input Observable, or an array of the most recent values from
   * each input Observable.
   * @method combineLatest
   * @owner Observable
   */function combineLatest$1(){for(var _len9=arguments.length,observables=Array(_len9),_key9=0;_key9<_len9;_key9++){observables[_key9]=arguments[_key9];}var project=null;if(typeof observables[observables.length-1]==='function'){project=observables.pop();}// if the first and only other argument besides the resultSelector is an array
// assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
if(observables.length===1&&isArray(observables[0])){observables=observables[0];}observables.unshift(this);return new ArrayObservable(observables).lift(new CombineLatestOperator(project));}/* tslint:enable:max-line-length */var CombineLatestOperator=function(){function CombineLatestOperator(project){_classCallCheck(this,CombineLatestOperator);this.project=project;}_createClass(CombineLatestOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new CombineLatestSubscriber(subscriber,this.project));}}]);return CombineLatestOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var CombineLatestSubscriber=function(_OuterSubscriber){_inherits(CombineLatestSubscriber,_OuterSubscriber);function CombineLatestSubscriber(destination,project){_classCallCheck(this,CombineLatestSubscriber);var _this30=_possibleConstructorReturn(this,(CombineLatestSubscriber.__proto__||Object.getPrototypeOf(CombineLatestSubscriber)).call(this,destination));_this30.project=project;_this30.active=0;_this30.values=[];_this30.observables=[];return _this30;}_createClass(CombineLatestSubscriber,[{key:'_next',value:function _next(observable){this.values.push(none);this.observables.push(observable);}},{key:'_complete',value:function _complete(){var observables=this.observables;var len=observables.length;if(len===0){this.destination.complete();}else{this.active=len;this.toRespond=len;for(var _i2=0;_i2<len;_i2++){var observable=observables[_i2];this.add(subscribeToResult(this,observable,observable,_i2));}}}},{key:'notifyComplete',value:function notifyComplete(unused){if((this.active-=1)===0){this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var values=this.values;var oldVal=values[outerIndex];var toRespond=!this.toRespond?0:oldVal===none?--this.toRespond:this.toRespond;values[outerIndex]=innerValue;if(toRespond===0){if(this.project){this._tryProject(values);}else{this.destination.next(values.slice());}}}},{key:'_tryProject',value:function _tryProject(values){var result=void 0;try{result=this.project.apply(this,values);}catch(err){this.destination.error(err);return;}this.destination.next(result);}}]);return CombineLatestSubscriber;}(OuterSubscriber);/* tslint:enable:max-line-length *//**
   * Combines multiple Observables to create an Observable whose values are
   * calculated from the latest values of each of its input Observables.
   *
   * <span class="informal">Whenever any input Observable emits a value, it
   * computes a formula using the latest values from all the inputs, then emits
   * the output of that formula.</span>
   *
   * <img src="./img/combineLatest.png" width="100%">
   *
   * `combineLatest` combines the values from all the Observables passed as
   * arguments. This is done by subscribing to each Observable, in order, and
   * collecting an array of each of the most recent values any time any of the
   * input Observables emits, then either taking that array and passing it as
   * arguments to an optional `project` function and emitting the return value of
   * that, or just emitting the array of recent values directly if there is no
   * `project` function.
   *
   * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
   * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
   * var height = Rx.Observable.of(1.76, 1.77, 1.78);
   * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
   * bmi.subscribe(x => console.log('BMI is ' + x));
   *
   * @see {@link combineAll}
   * @see {@link merge}
   * @see {@link withLatestFrom}
   *
   * @param {Observable} observable1 An input Observable to combine with the
   * source Observable.
   * @param {Observable} observable2 An input Observable to combine with the
   * source Observable. More than one input Observables may be given as argument.
   * @param {function} [project] An optional function to project the values from
   * the combined latest values into a new value on the output Observable.
   * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
   * each input Observable.
   * @return {Observable} An Observable of projected values from the most recent
   * values from each input Observable, or an array of the most recent values from
   * each input Observable.
   * @static true
   * @name combineLatest
   * @owner Observable
   */function combineLatest(){for(var _len10=arguments.length,observables=Array(_len10),_key10=0;_key10<_len10;_key10++){observables[_key10]=arguments[_key10];}var project=null;var scheduler=null;if(isScheduler(observables[observables.length-1])){scheduler=observables.pop();}if(typeof observables[observables.length-1]==='function'){project=observables.pop();}// if the first and only other argument besides the resultSelector is an array
// assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
if(observables.length===1&&isArray(observables[0])){observables=observables[0];}return new ArrayObservable(observables,scheduler).lift(new CombineLatestOperator(project));}Observable.combineLatest=combineLatest;/**
   * Converts a higher-order Observable into a first-order Observable which
   * concurrently delivers all values that are emitted on the inner Observables.
   *
   * <span class="informal">Flattens an Observable-of-Observables.</span>
   *
   * <img src="./img/mergeAll.png" width="100%">
   *
   * `mergeAll` subscribes to an Observable that emits Observables, also known as
   * a higher-order Observable. Each time it observes one of these emitted inner
   * Observables, it subscribes to that and delivers all the values from the
   * inner Observable on the output Observable. The output Observable only
   * completes once all inner Observables have completed. Any error delivered by
   * a inner Observable will be immediately emitted on the output Observable.
   *
   * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
   * var firstOrder = higherOrder.mergeAll();
   * firstOrder.subscribe(x => console.log(x));
   *
   * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
   * var firstOrder = higherOrder.mergeAll(2);
   * firstOrder.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link exhaust}
   * @see {@link merge}
   * @see {@link mergeMap}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   * @see {@link switch}
   * @see {@link zipAll}
   *
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits values coming from all the
   * inner Observables emitted by the source Observable.
   * @method mergeAll
   * @owner Observable
   */function mergeAll(){var concurrent=arguments.length<=0||arguments[0]===undefined?Number.POSITIVE_INFINITY:arguments[0];return this.lift(new MergeAllOperator(concurrent));}var MergeAllOperator=function(){function MergeAllOperator(concurrent){_classCallCheck(this,MergeAllOperator);this.concurrent=concurrent;}_createClass(MergeAllOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new MergeAllSubscriber(observer,this.concurrent));}}]);return MergeAllOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MergeAllSubscriber=function(_OuterSubscriber2){_inherits(MergeAllSubscriber,_OuterSubscriber2);function MergeAllSubscriber(destination,concurrent){_classCallCheck(this,MergeAllSubscriber);var _this31=_possibleConstructorReturn(this,(MergeAllSubscriber.__proto__||Object.getPrototypeOf(MergeAllSubscriber)).call(this,destination));_this31.concurrent=concurrent;_this31.hasCompleted=false;_this31.buffer=[];_this31.active=0;return _this31;}_createClass(MergeAllSubscriber,[{key:'_next',value:function _next(observable){if(this.active<this.concurrent){this.active++;this.add(subscribeToResult(this,observable));}else{this.buffer.push(observable);}}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.active===0&&this.buffer.length===0){this.destination.complete();}}},{key:'notifyComplete',value:function notifyComplete(innerSub){var buffer=this.buffer;this.remove(innerSub);this.active--;if(buffer.length>0){this._next(buffer.shift());}else if(this.active===0&&this.hasCompleted){this.destination.complete();}}}]);return MergeAllSubscriber;}(OuterSubscriber);/**
   * Creates an output Observable which sequentially emits all values from every
   * given input Observable after the current Observable.
   *
   * <span class="informal">Concatenates multiple Observables together by
   * sequentially emitting their values, one Observable after the other.</span>
   *
   * <img src="./img/concat.png" width="100%">
   *
   * Joins this Observable with multiple other Observables by subscribing to them
   * one at a time, starting with the source, and merging their results into the
   * output Observable. Will wait for each Observable to complete before moving
   * on to the next.
   *
   * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
   * var timer = Rx.Observable.interval(1000).take(4);
   * var sequence = Rx.Observable.range(1, 10);
   * var result = timer.concat(sequence);
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Concatenate 3 Observables</caption>
   * var timer1 = Rx.Observable.interval(1000).take(10);
   * var timer2 = Rx.Observable.interval(2000).take(6);
   * var timer3 = Rx.Observable.interval(500).take(10);
   * var result = timer1.concat(timer2, timer3);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatAll}
   * @see {@link concatMap}
   * @see {@link concatMapTo}
   *
   * @param {Observable} other An input Observable to concatenate after the source
   * Observable. More than one input Observables may be given as argument.
   * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
   * Observable subscription on.
   * @return {Observable} All values of each passed Observable merged into a
   * single Observable, in order, in serial fashion.
   * @method concat
   * @owner Observable
   */function concat$1(){for(var _len11=arguments.length,observables=Array(_len11),_key11=0;_key11<_len11;_key11++){observables[_key11]=arguments[_key11];}return concatStatic.apply(undefined,[this].concat(observables));}/* tslint:enable:max-line-length *//**
   * Creates an output Observable which sequentially emits all values from every
   * given input Observable after the current Observable.
   *
   * <span class="informal">Concatenates multiple Observables together by
   * sequentially emitting their values, one Observable after the other.</span>
   *
   * <img src="./img/concat.png" width="100%">
   *
   * Joins multiple Observables together by subscribing to them one at a time and
   * merging their results into the output Observable. Will wait for each
   * Observable to complete before moving on to the next.
   *
   * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
   * var timer = Rx.Observable.interval(1000).take(4);
   * var sequence = Rx.Observable.range(1, 10);
   * var result = Rx.Observable.concat(timer, sequence);
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Concatenate 3 Observables</caption>
   * var timer1 = Rx.Observable.interval(1000).take(10);
   * var timer2 = Rx.Observable.interval(2000).take(6);
   * var timer3 = Rx.Observable.interval(500).take(10);
   * var result = Rx.Observable.concat(timer1, timer2, timer3);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatAll}
   * @see {@link concatMap}
   * @see {@link concatMapTo}
   *
   * @param {Observable} input1 An input Observable to concatenate with others.
   * @param {Observable} input2 An input Observable to concatenate with others.
   * More than one input Observables may be given as argument.
   * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
   * Observable subscription on.
   * @return {Observable} All values of each passed Observable merged into a
   * single Observable, in order, in serial fashion.
   * @static true
   * @name concat
   * @owner Observable
   */function concatStatic(){var scheduler=null;for(var _len12=arguments.length,observables=Array(_len12),_key12=0;_key12<_len12;_key12++){observables[_key12]=arguments[_key12];}var args=observables;if(isScheduler(args[observables.length-1])){scheduler=args.pop();}return new ArrayObservable(observables,scheduler).lift(new MergeAllOperator(1));}var concat=concatStatic;Observable.concat=concat;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var DeferObservable=function(_Observable7){_inherits(DeferObservable,_Observable7);function DeferObservable(observableFactory){_classCallCheck(this,DeferObservable);var _this32=_possibleConstructorReturn(this,(DeferObservable.__proto__||Object.getPrototypeOf(DeferObservable)).call(this));_this32.observableFactory=observableFactory;return _this32;}/**
       * Creates an Observable that, on subscribe, calls an Observable factory to
       * make an Observable for each new Observer.
       *
       * <span class="informal">Creates the Observable lazily, that is, only when it
       * is subscribed.
       * </span>
       *
       * <img src="./img/defer.png" width="100%">
       *
       * `defer` allows you to create the Observable only when the Observer
       * subscribes, and create a fresh Observable for each Observer. It waits until
       * an Observer subscribes to it, and then it generates an Observable,
       * typically with an Observable factory function. It does this afresh for each
       * subscriber, so although each subscriber may think it is subscribing to the
       * same Observable, in fact each subscriber gets its own individual
       * Observable.
       *
       * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
       * var clicksOrInterval = Rx.Observable.defer(function () {
       *   if (Math.random() > 0.5) {
       *     return Rx.Observable.fromEvent(document, 'click');
       *   } else {
       *     return Rx.Observable.interval(1000);
       *   }
       * });
       * clicksOrInterval.subscribe(x => console.log(x));
       *
       * @see {@link create}
       *
       * @param {function(): Observable|Promise} observableFactory The Observable
       * factory function to invoke for each Observer that subscribes to the output
       * Observable. May also return a Promise, which will be converted on the fly
       * to an Observable.
       * @return {Observable} An Observable whose Observers' subscriptions trigger
       * an invocation of the given Observable factory function.
       * @static true
       * @name defer
       * @owner Observable
       */_createClass(DeferObservable,[{key:'_subscribe',value:function _subscribe(subscriber){return new DeferSubscriber(subscriber,this.observableFactory);}}],[{key:'create',value:function create(observableFactory){return new DeferObservable(observableFactory);}}]);return DeferObservable;}(Observable);var DeferSubscriber=function(_OuterSubscriber3){_inherits(DeferSubscriber,_OuterSubscriber3);function DeferSubscriber(destination,factory){_classCallCheck(this,DeferSubscriber);var _this33=_possibleConstructorReturn(this,(DeferSubscriber.__proto__||Object.getPrototypeOf(DeferSubscriber)).call(this,destination));_this33.factory=factory;_this33.tryDefer();return _this33;}_createClass(DeferSubscriber,[{key:'tryDefer',value:function tryDefer(){try{this._callFactory();}catch(err){this._error(err);}}},{key:'_callFactory',value:function _callFactory(){var result=this.factory();if(result){this.add(subscribeToResult(this,result));}}}]);return DeferSubscriber;}(OuterSubscriber);var defer=DeferObservable.create;Observable.defer=defer;var empty$1=EmptyObservable.create;Observable.empty=empty$1;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var ForkJoinObservable=function(_Observable8){_inherits(ForkJoinObservable,_Observable8);function ForkJoinObservable(sources,resultSelector){_classCallCheck(this,ForkJoinObservable);var _this34=_possibleConstructorReturn(this,(ForkJoinObservable.__proto__||Object.getPrototypeOf(ForkJoinObservable)).call(this));_this34.sources=sources;_this34.resultSelector=resultSelector;return _this34;}/* tslint:enable:max-line-length *//**
       * @param sources
       * @return {any}
       * @static true
       * @name forkJoin
       * @owner Observable
       */_createClass(ForkJoinObservable,[{key:'_subscribe',value:function _subscribe(subscriber){return new ForkJoinSubscriber(subscriber,this.sources,this.resultSelector);}}],[{key:'create',value:function create(){for(var _len13=arguments.length,sources=Array(_len13),_key13=0;_key13<_len13;_key13++){sources[_key13]=arguments[_key13];}if(sources===null||arguments.length===0){return new EmptyObservable();}var resultSelector=null;if(typeof sources[sources.length-1]==='function'){resultSelector=sources.pop();}// if the first and only other argument besides the resultSelector is an array
// assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
if(sources.length===1&&isArray(sources[0])){sources=sources[0];}if(sources.length===0){return new EmptyObservable();}return new ForkJoinObservable(sources,resultSelector);}}]);return ForkJoinObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ForkJoinSubscriber=function(_OuterSubscriber4){_inherits(ForkJoinSubscriber,_OuterSubscriber4);function ForkJoinSubscriber(destination,sources,resultSelector){_classCallCheck(this,ForkJoinSubscriber);var _this35=_possibleConstructorReturn(this,(ForkJoinSubscriber.__proto__||Object.getPrototypeOf(ForkJoinSubscriber)).call(this,destination));_this35.sources=sources;_this35.resultSelector=resultSelector;_this35.completed=0;_this35.haveValues=0;var len=sources.length;_this35.total=len;_this35.values=new Array(len);for(var _i3=0;_i3<len;_i3++){var source=sources[_i3];var innerSubscription=subscribeToResult(_this35,source,null,_i3);if(innerSubscription){innerSubscription.outerIndex=_i3;_this35.add(innerSubscription);}}return _this35;}_createClass(ForkJoinSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.values[outerIndex]=innerValue;if(!innerSub._hasValue){innerSub._hasValue=true;this.haveValues++;}}},{key:'notifyComplete',value:function notifyComplete(innerSub){var destination=this.destination;var haveValues=this.haveValues;var resultSelector=this.resultSelector;var values=this.values;var len=values.length;if(!innerSub._hasValue){destination.complete();return;}this.completed++;if(this.completed!==len){return;}if(haveValues===len){var value=resultSelector?resultSelector.apply(this,values):values;destination.next(value);}destination.complete();}}]);return ForkJoinSubscriber;}(OuterSubscriber);var forkJoin=ForkJoinObservable.create;Observable.forkJoin=forkJoin;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var PromiseObservable=function(_Observable9){_inherits(PromiseObservable,_Observable9);function PromiseObservable(promise,scheduler){_classCallCheck(this,PromiseObservable);var _this36=_possibleConstructorReturn(this,(PromiseObservable.__proto__||Object.getPrototypeOf(PromiseObservable)).call(this));_this36.promise=promise;_this36.scheduler=scheduler;return _this36;}/**
       * Converts a Promise to an Observable.
       *
       * <span class="informal">Returns an Observable that just emits the Promise's
       * resolved value, then completes.</span>
       *
       * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
       * Observable. If the Promise resolves with a value, the output Observable
       * emits that resolved value as a `next`, and then completes. If the Promise
       * is rejected, then the output Observable emits the corresponding Error.
       *
       * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
       * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @see {@link bindCallback}
       * @see {@link from}
       *
       * @param {Promise<T>} promise The promise to be converted.
       * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
       * the delivery of the resolved value (or the rejection).
       * @return {Observable<T>} An Observable which wraps the Promise.
       * @static true
       * @name fromPromise
       * @owner Observable
       */_createClass(PromiseObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var _this37=this;var promise=this.promise;var scheduler=this.scheduler;if(scheduler==null){if(this._isScalar){if(!subscriber.closed){subscriber.next(this.value);subscriber.complete();}}else{promise.then(function(value){_this37.value=value;_this37._isScalar=true;if(!subscriber.closed){subscriber.next(value);subscriber.complete();}},function(err){if(!subscriber.closed){subscriber.error(err);}}).then(null,function(err){// escape the promise trap, throw unhandled errors
root.setTimeout(function(){throw err;});});}}else{if(this._isScalar){if(!subscriber.closed){return scheduler.schedule(dispatchNext$2,0,{value:this.value,subscriber:subscriber});}}else{promise.then(function(value){_this37.value=value;_this37._isScalar=true;if(!subscriber.closed){subscriber.add(scheduler.schedule(dispatchNext$2,0,{value:value,subscriber:subscriber}));}},function(err){if(!subscriber.closed){subscriber.add(scheduler.schedule(dispatchError$2,0,{err:err,subscriber:subscriber}));}}).then(null,function(err){// escape the promise trap, throw unhandled errors
root.setTimeout(function(){throw err;});});}}}}],[{key:'create',value:function create(promise,scheduler){return new PromiseObservable(promise,scheduler);}}]);return PromiseObservable;}(Observable);function dispatchNext$2(arg){var value=arg.value;var subscriber=arg.subscriber;if(!subscriber.closed){subscriber.next(value);subscriber.complete();}}function dispatchError$2(arg){var err=arg.err;var subscriber=arg.subscriber;if(!subscriber.closed){subscriber.error(err);}}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var IteratorObservable=function(_Observable10){_inherits(IteratorObservable,_Observable10);function IteratorObservable(iterator,scheduler){_classCallCheck(this,IteratorObservable);var _this38=_possibleConstructorReturn(this,(IteratorObservable.__proto__||Object.getPrototypeOf(IteratorObservable)).call(this));_this38.scheduler=scheduler;if(iterator==null){throw new Error('iterator cannot be null.');}_this38.iterator=getIterator(iterator);return _this38;}_createClass(IteratorObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var iterator=this.iterator;var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(IteratorObservable.dispatch,0,{index:index,iterator:iterator,subscriber:subscriber});}else{do{var result=iterator.next();if(result.done){subscriber.complete();break;}else{subscriber.next(result.value);}if(subscriber.closed){break;}}while(true);}}}],[{key:'create',value:function create(iterator,scheduler){return new IteratorObservable(iterator,scheduler);}},{key:'dispatch',value:function dispatch(state){var index=state.index;var hasError=state.hasError;var iterator=state.iterator;var subscriber=state.subscriber;if(hasError){subscriber.error(state.error);return;}var result=iterator.next();if(result.done){subscriber.complete();return;}subscriber.next(result.value);state.index=index+1;if(subscriber.closed){return;}this.schedule(state);}}]);return IteratorObservable;}(Observable);var StringIterator=function(){function StringIterator(str){var idx=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var len=arguments.length<=2||arguments[2]===undefined?str.length:arguments[2];_classCallCheck(this,StringIterator);this.str=str;this.idx=idx;this.len=len;}_createClass(StringIterator,[{key:$$iterator,value:function value(){return this;}},{key:'next',value:function next(){return this.idx<this.len?{done:false,value:this.str.charAt(this.idx++)}:{done:true,value:undefined};}}]);return StringIterator;}();var ArrayIterator=function(){function ArrayIterator(arr){var idx=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var len=arguments.length<=2||arguments[2]===undefined?toLength(arr):arguments[2];_classCallCheck(this,ArrayIterator);this.arr=arr;this.idx=idx;this.len=len;}_createClass(ArrayIterator,[{key:$$iterator,value:function value(){return this;}},{key:'next',value:function next(){return this.idx<this.len?{done:false,value:this.arr[this.idx++]}:{done:true,value:undefined};}}]);return ArrayIterator;}();function getIterator(obj){var i=obj[$$iterator];if(!i&&typeof obj==='string'){return new StringIterator(obj);}if(!i&&obj.length!==undefined){return new ArrayIterator(obj);}if(!i){throw new TypeError('object is not iterable');}return obj[$$iterator]();}var maxSafeInteger=Math.pow(2,53)-1;function toLength(o){var len=+o.length;if(isNaN(len)){return 0;}if(len===0||!numberIsFinite(len)){return len;}len=sign(len)*Math.floor(Math.abs(len));if(len<=0){return 0;}if(len>maxSafeInteger){return maxSafeInteger;}return len;}function numberIsFinite(value){return typeof value==='number'&&root.isFinite(value);}function sign(value){var valueAsNumber=+value;if(valueAsNumber===0){return valueAsNumber;}if(isNaN(valueAsNumber)){return valueAsNumber;}return valueAsNumber<0?-1:1;}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var ArrayLikeObservable=function(_Observable11){_inherits(ArrayLikeObservable,_Observable11);function ArrayLikeObservable(arrayLike,scheduler){_classCallCheck(this,ArrayLikeObservable);var _this39=_possibleConstructorReturn(this,(ArrayLikeObservable.__proto__||Object.getPrototypeOf(ArrayLikeObservable)).call(this));_this39.arrayLike=arrayLike;_this39.scheduler=scheduler;if(!scheduler&&arrayLike.length===1){_this39._isScalar=true;_this39.value=arrayLike[0];}return _this39;}_createClass(ArrayLikeObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var arrayLike=this.arrayLike;var scheduler=this.scheduler;var length=arrayLike.length;if(scheduler){return scheduler.schedule(ArrayLikeObservable.dispatch,0,{arrayLike:arrayLike,index:index,length:length,subscriber:subscriber});}else{for(var _i4=0;_i4<length&&!subscriber.closed;_i4++){subscriber.next(arrayLike[_i4]);}subscriber.complete();}}}],[{key:'create',value:function create(arrayLike,scheduler){var length=arrayLike.length;if(length===0){return new EmptyObservable();}else if(length===1){return new ScalarObservable(arrayLike[0],scheduler);}else{return new ArrayLikeObservable(arrayLike,scheduler);}}},{key:'dispatch',value:function dispatch(state){var arrayLike=state.arrayLike;var index=state.index;var length=state.length;var subscriber=state.subscriber;if(subscriber.closed){return;}if(index>=length){subscriber.complete();return;}subscriber.next(arrayLike[index]);state.index=index+1;this.schedule(state);}}]);return ArrayLikeObservable;}(Observable);/**
   * Represents a push-based event or value that an {@link Observable} can emit.
   * This class is particularly useful for operators that manage notifications,
   * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
   * others. Besides wrapping the actual delivered value, it also annotates it
   * with metadata of, for instance, what type of push message it is (`next`,
   * `error`, or `complete`).
   *
   * @see {@link materialize}
   * @see {@link dematerialize}
   * @see {@link observeOn}
   *
   * @class Notification<T>
   */var Notification=function(){function Notification(kind,value,exception){_classCallCheck(this,Notification);this.kind=kind;this.value=value;this.exception=exception;this.hasValue=kind==='N';}/**
       * Delivers to the given `observer` the value wrapped by this Notification.
       * @param {Observer} observer
       * @return
       */_createClass(Notification,[{key:'observe',value:function observe(observer){switch(this.kind){case'N':return observer.next&&observer.next(this.value);case'E':return observer.error&&observer.error(this.exception);case'C':return observer.complete&&observer.complete();}}/**
       * Given some {@link Observer} callbacks, deliver the value represented by the
       * current Notification to the correctly corresponding callback.
       * @param {function(value: T): void} next An Observer `next` callback.
       * @param {function(err: any): void} [error] An Observer `error` callback.
       * @param {function(): void} [complete] An Observer `complete` callback.
       * @return {any}
       */},{key:'do',value:function _do(next,error,complete){var kind=this.kind;switch(kind){case'N':return next&&next(this.value);case'E':return error&&error(this.exception);case'C':return complete&&complete();}}/**
       * Takes an Observer or its individual callback functions, and calls `observe`
       * or `do` methods accordingly.
       * @param {Observer|function(value: T): void} nextOrObserver An Observer or
       * the `next` callback.
       * @param {function(err: any): void} [error] An Observer `error` callback.
       * @param {function(): void} [complete] An Observer `complete` callback.
       * @return {any}
       */},{key:'accept',value:function accept(nextOrObserver,error,complete){if(nextOrObserver&&typeof nextOrObserver.next==='function'){return this.observe(nextOrObserver);}else{return this.do(nextOrObserver,error,complete);}}/**
       * Returns a simple Observable that just delivers the notification represented
       * by this Notification instance.
       * @return {any}
       */},{key:'toObservable',value:function toObservable(){var kind=this.kind;switch(kind){case'N':return Observable.of(this.value);case'E':return Observable.throw(this.exception);case'C':return Observable.empty();}throw new Error('unexpected notification kind value');}/**
       * A shortcut to create a Notification instance of the type `next` from a
       * given value.
       * @param {T} value The `next` value.
       * @return {Notification<T>} The "next" Notification representing the
       * argument.
       */}],[{key:'createNext',value:function createNext(value){if(typeof value!=='undefined'){return new Notification('N',value);}return this.undefinedValueNotification;}/**
       * A shortcut to create a Notification instance of the type `error` from a
       * given error.
       * @param {any} [err] The `error` exception.
       * @return {Notification<T>} The "error" Notification representing the
       * argument.
       */},{key:'createError',value:function createError(err){return new Notification('E',undefined,err);}/**
       * A shortcut to create a Notification instance of the type `complete`.
       * @return {Notification<any>} The valueless "complete" Notification.
       */},{key:'createComplete',value:function createComplete(){return this.completeNotification;}}]);return Notification;}();Notification.completeNotification=new Notification('C');Notification.undefinedValueNotification=new Notification('N',undefined);/**
   * @see {@link Notification}
   *
   * @param scheduler
   * @param delay
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method observeOn
   * @owner Observable
   */function observeOn(scheduler){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];return this.lift(new ObserveOnOperator(scheduler,delay));}var ObserveOnOperator=function(){function ObserveOnOperator(scheduler){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];_classCallCheck(this,ObserveOnOperator);this.scheduler=scheduler;this.delay=delay;}_createClass(ObserveOnOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ObserveOnSubscriber(subscriber,this.scheduler,this.delay));}}]);return ObserveOnOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ObserveOnSubscriber=function(_Subscriber5){_inherits(ObserveOnSubscriber,_Subscriber5);function ObserveOnSubscriber(destination,scheduler){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];_classCallCheck(this,ObserveOnSubscriber);var _this40=_possibleConstructorReturn(this,(ObserveOnSubscriber.__proto__||Object.getPrototypeOf(ObserveOnSubscriber)).call(this,destination));_this40.scheduler=scheduler;_this40.delay=delay;return _this40;}_createClass(ObserveOnSubscriber,[{key:'scheduleMessage',value:function scheduleMessage(notification){this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch,this.delay,new ObserveOnMessage(notification,this.destination)));}},{key:'_next',value:function _next(value){this.scheduleMessage(Notification.createNext(value));}},{key:'_error',value:function _error(err){this.scheduleMessage(Notification.createError(err));}},{key:'_complete',value:function _complete(){this.scheduleMessage(Notification.createComplete());}}],[{key:'dispatch',value:function dispatch(arg){var notification=arg.notification;var destination=arg.destination;notification.observe(destination);}}]);return ObserveOnSubscriber;}(Subscriber);var ObserveOnMessage=function ObserveOnMessage(notification,destination){_classCallCheck(this,ObserveOnMessage);this.notification=notification;this.destination=destination;};var isArrayLike=function isArrayLike(x){return x&&typeof x.length==='number';};/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var FromObservable=function(_Observable12){_inherits(FromObservable,_Observable12);function FromObservable(ish,scheduler){_classCallCheck(this,FromObservable);var _this41=_possibleConstructorReturn(this,(FromObservable.__proto__||Object.getPrototypeOf(FromObservable)).call(this,null));_this41.ish=ish;_this41.scheduler=scheduler;return _this41;}/**
       * Creates an Observable from an Array, an array-like object, a Promise, an
       * iterable object, or an Observable-like object.
       *
       * <span class="informal">Converts almost anything to an Observable.</span>
       *
       * <img src="./img/from.png" width="100%">
       *
       * Convert various other objects and data types into Observables. `from`
       * converts a Promise or an array-like or an
       * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
       * object into an Observable that emits the items in that promise or array or
       * iterable. A String, in this context, is treated as an array of characters.
       * Observable-like objects (contains a function named with the ES2015 Symbol
       * for Observable) can also be converted through this operator.
       *
       * @example <caption>Converts an array to an Observable</caption>
       * var array = [10, 20, 30];
       * var result = Rx.Observable.from(array);
       * result.subscribe(x => console.log(x));
       *
       * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
       * function* generateDoubles(seed) {
       *   var i = seed;
       *   while (true) {
       *     yield i;
       *     i = 2 * i; // double it
       *   }
       * }
       *
       * var iterator = generateDoubles(3);
       * var result = Rx.Observable.from(iterator).take(10);
       * result.subscribe(x => console.log(x));
       *
       * @see {@link create}
       * @see {@link fromEvent}
       * @see {@link fromEventPattern}
       * @see {@link fromPromise}
       *
       * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
       * Observable-like, an Array, an iterable or an array-like object to be
       * converted.
       * @param {Scheduler} [scheduler] The scheduler on which to schedule the
       * emissions of values.
       * @return {Observable<T>} The Observable whose values are originally from the
       * input object that was converted.
       * @static true
       * @name from
       * @owner Observable
       */_createClass(FromObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var ish=this.ish;var scheduler=this.scheduler;if(scheduler==null){return ish[$$observable]().subscribe(subscriber);}else{return ish[$$observable]().subscribe(new ObserveOnSubscriber(subscriber,scheduler,0));}}}],[{key:'create',value:function create(ish,scheduler){if(ish!=null){if(typeof ish[$$observable]==='function'){if(ish instanceof Observable&&!scheduler){return ish;}return new FromObservable(ish,scheduler);}else if(isArray(ish)){return new ArrayObservable(ish,scheduler);}else if(isPromise(ish)){return new PromiseObservable(ish,scheduler);}else if(typeof ish[$$iterator]==='function'||typeof ish==='string'){return new IteratorObservable(ish,scheduler);}else if(isArrayLike(ish)){return new ArrayLikeObservable(ish,scheduler);}}throw new TypeError((ish!==null&&(typeof ish==='undefined'?'undefined':_typeof(ish))||ish)+' is not observable');}}]);return FromObservable;}(Observable);var from=FromObservable.create;Observable.from=from;function isNodeStyleEventEmmitter(sourceObj){return!!sourceObj&&typeof sourceObj.addListener==='function'&&typeof sourceObj.removeListener==='function';}function isJQueryStyleEventEmitter(sourceObj){return!!sourceObj&&typeof sourceObj.on==='function'&&typeof sourceObj.off==='function';}function isNodeList(sourceObj){return!!sourceObj&&sourceObj.toString()==='[object NodeList]';}function isHTMLCollection(sourceObj){return!!sourceObj&&sourceObj.toString()==='[object HTMLCollection]';}function isEventTarget(sourceObj){return!!sourceObj&&typeof sourceObj.addEventListener==='function'&&typeof sourceObj.removeEventListener==='function';}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var FromEventObservable=function(_Observable13){_inherits(FromEventObservable,_Observable13);function FromEventObservable(sourceObj,eventName,selector,options){_classCallCheck(this,FromEventObservable);var _this42=_possibleConstructorReturn(this,(FromEventObservable.__proto__||Object.getPrototypeOf(FromEventObservable)).call(this));_this42.sourceObj=sourceObj;_this42.eventName=eventName;_this42.selector=selector;_this42.options=options;return _this42;}/* tslint:enable:max-line-length *//**
       * Creates an Observable that emits events of a specific type coming from the
       * given event target.
       *
       * <span class="informal">Creates an Observable from DOM events, or Node
       * EventEmitter events or others.</span>
       *
       * <img src="./img/fromEvent.png" width="100%">
       *
       * Creates an Observable by attaching an event listener to an "event target",
       * which may be an object with `addEventListener` and `removeEventListener`,
       * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
       * DOM, or an HTMLCollection from the DOM. The event handler is attached when
       * the output Observable is subscribed, and removed when the Subscription is
       * unsubscribed.
       *
       * @example <caption>Emits clicks happening on the DOM document</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * clicks.subscribe(x => console.log(x));
       *
       * @see {@link from}
       * @see {@link fromEventPattern}
       *
       * @param {EventTargetLike} target The DOMElement, event target, Node.js
       * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
       * @param {string} eventName The event name of interest, being emitted by the
       * `target`.
       * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
       * @param {SelectorMethodSignature<T>} [selector] An optional function to
       * post-process results. It takes the arguments from the event handler and
       * should return a single value.
       * @return {Observable<T>}
       * @static true
       * @name fromEvent
       * @owner Observable
       */_createClass(FromEventObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var sourceObj=this.sourceObj;var eventName=this.eventName;var options=this.options;var selector=this.selector;var handler=selector?function(){var result=tryCatch(selector).apply(undefined,arguments);if(result===errorObject){subscriber.error(errorObject.e);}else{subscriber.next(result);}}:function(e){return subscriber.next(e);};FromEventObservable.setupSubscription(sourceObj,eventName,handler,subscriber,options);}}],[{key:'create',value:function create(target,eventName,options,selector){if(isFunction(options)){selector=options;options=undefined;}return new FromEventObservable(target,eventName,selector,options);}},{key:'setupSubscription',value:function setupSubscription(sourceObj,eventName,handler,subscriber,options){var unsubscribe=void 0;if(isNodeList(sourceObj)||isHTMLCollection(sourceObj)){for(var _i5=0,_len14=sourceObj.length;_i5<_len14;_i5++){FromEventObservable.setupSubscription(sourceObj[_i5],eventName,handler,subscriber,options);}}else if(isEventTarget(sourceObj)){(function(){var source=sourceObj;sourceObj.addEventListener(eventName,handler,options);unsubscribe=function unsubscribe(){return source.removeEventListener(eventName,handler);};})();}else if(isJQueryStyleEventEmitter(sourceObj)){(function(){var source=sourceObj;sourceObj.on(eventName,handler);unsubscribe=function unsubscribe(){return source.off(eventName,handler);};})();}else if(isNodeStyleEventEmmitter(sourceObj)){(function(){var source=sourceObj;sourceObj.addListener(eventName,handler);unsubscribe=function unsubscribe(){return source.removeListener(eventName,handler);};})();}subscriber.add(new Subscription(unsubscribe));}}]);return FromEventObservable;}(Observable);var fromEvent=FromEventObservable.create;Observable.fromEvent=fromEvent;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var FromEventPatternObservable=function(_Observable14){_inherits(FromEventPatternObservable,_Observable14);function FromEventPatternObservable(addHandler,removeHandler,selector){_classCallCheck(this,FromEventPatternObservable);var _this43=_possibleConstructorReturn(this,(FromEventPatternObservable.__proto__||Object.getPrototypeOf(FromEventPatternObservable)).call(this));_this43.addHandler=addHandler;_this43.removeHandler=removeHandler;_this43.selector=selector;return _this43;}/**
       * Creates an Observable from an API based on addHandler/removeHandler
       * functions.
       *
       * <span class="informal">Converts any addHandler/removeHandler API to an
       * Observable.</span>
       *
       * <img src="./img/fromEventPattern.png" width="100%">
       *
       * Creates an Observable by using the `addHandler` and `removeHandler`
       * functions to add and remove the handlers, with an optional selector
       * function to project the event arguments to a result. The `addHandler` is
       * called when the output Observable is subscribed, and `removeHandler` is
       * called when the Subscription is unsubscribed.
       *
       * @example <caption>Emits clicks happening on the DOM document</caption>
       * function addClickHandler(handler) {
       *   document.addEventListener('click', handler);
       * }
       *
       * function removeClickHandler(handler) {
       *   document.removeEventListener('click', handler);
       * }
       *
       * var clicks = Rx.Observable.fromEventPattern(
       *   addClickHandler,
       *   removeClickHandler
       * );
       * clicks.subscribe(x => console.log(x));
       *
       * @see {@link from}
       * @see {@link fromEvent}
       *
       * @param {function(handler: Function): any} addHandler A function that takes
       * a `handler` function as argument and attaches it somehow to the actual
       * source of events.
       * @param {function(handler: Function): void} removeHandler A function that
       * takes a `handler` function as argument and removes it in case it was
       * previously attached using `addHandler`.
       * @param {function(...args: any): T} [selector] An optional function to
       * post-process results. It takes the arguments from the event handler and
       * should return a single value.
       * @return {Observable<T>}
       * @static true
       * @name fromEventPattern
       * @owner Observable
       */_createClass(FromEventPatternObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var _this44=this;var removeHandler=this.removeHandler;var handler=!!this.selector?function(){for(var _len15=arguments.length,args=Array(_len15),_key14=0;_key14<_len15;_key14++){args[_key14]=arguments[_key14];}_this44._callSelector(subscriber,args);}:function(e){subscriber.next(e);};this._callAddHandler(handler,subscriber);subscriber.add(new Subscription(function(){//TODO: determine whether or not to forward to error handler
removeHandler(handler);}));}},{key:'_callSelector',value:function _callSelector(subscriber,args){try{var result=this.selector.apply(this,_toConsumableArray(args));subscriber.next(result);}catch(e){subscriber.error(e);}}},{key:'_callAddHandler',value:function _callAddHandler(handler,errorSubscriber){try{this.addHandler(handler);}catch(e){errorSubscriber.error(e);}}}],[{key:'create',value:function create(addHandler,removeHandler,selector){return new FromEventPatternObservable(addHandler,removeHandler,selector);}}]);return FromEventPatternObservable;}(Observable);var fromEventPattern=FromEventPatternObservable.create;Observable.fromEventPattern=fromEventPattern;var fromPromise=PromiseObservable.create;Observable.fromPromise=fromPromise;var selfSelector=function selfSelector(value){return value;};/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var GenerateObservable=function(_Observable15){_inherits(GenerateObservable,_Observable15);function GenerateObservable(initialState,condition,iterate,resultSelector,scheduler){_classCallCheck(this,GenerateObservable);var _this45=_possibleConstructorReturn(this,(GenerateObservable.__proto__||Object.getPrototypeOf(GenerateObservable)).call(this));_this45.initialState=initialState;_this45.condition=condition;_this45.iterate=iterate;_this45.resultSelector=resultSelector;_this45.scheduler=scheduler;return _this45;}_createClass(GenerateObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var state=this.initialState;if(this.scheduler){return this.scheduler.schedule(GenerateObservable.dispatch,0,{subscriber:subscriber,iterate:this.iterate,condition:this.condition,resultSelector:this.resultSelector,state:state});}var condition=this.condition;var resultSelector=this.resultSelector;var iterate=this.iterate;do{if(condition){var conditionResult=void 0;try{conditionResult=condition(state);}catch(err){subscriber.error(err);return;}if(!conditionResult){subscriber.complete();break;}}var value=void 0;try{value=resultSelector(state);}catch(err){subscriber.error(err);return;}subscriber.next(value);if(subscriber.closed){break;}try{state=iterate(state);}catch(err){subscriber.error(err);return;}}while(true);}}],[{key:'create',value:function create(initialStateOrOptions,condition,iterate,resultSelectorOrObservable,scheduler){if(arguments.length==1){return new GenerateObservable(initialStateOrOptions.initialState,initialStateOrOptions.condition,initialStateOrOptions.iterate,initialStateOrOptions.resultSelector||selfSelector,initialStateOrOptions.scheduler);}if(resultSelectorOrObservable===undefined||isScheduler(resultSelectorOrObservable)){return new GenerateObservable(initialStateOrOptions,condition,iterate,selfSelector,resultSelectorOrObservable);}return new GenerateObservable(initialStateOrOptions,condition,iterate,resultSelectorOrObservable,scheduler);}},{key:'dispatch',value:function dispatch(state){var subscriber=state.subscriber;var condition=state.condition;if(subscriber.closed){return;}if(state.needIterate){try{state.state=state.iterate(state.state);}catch(err){subscriber.error(err);return;}}else{state.needIterate=true;}if(condition){var conditionResult=void 0;try{conditionResult=condition(state.state);}catch(err){subscriber.error(err);return;}if(!conditionResult){subscriber.complete();return;}if(subscriber.closed){return;}}var value=void 0;try{value=state.resultSelector(state.state);}catch(err){subscriber.error(err);return;}if(subscriber.closed){return;}subscriber.next(value);if(subscriber.closed){return;}return this.schedule(state);}}]);return GenerateObservable;}(Observable);Observable.generate=GenerateObservable.create;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var IfObservable=function(_Observable16){_inherits(IfObservable,_Observable16);function IfObservable(condition,thenSource,elseSource){_classCallCheck(this,IfObservable);var _this46=_possibleConstructorReturn(this,(IfObservable.__proto__||Object.getPrototypeOf(IfObservable)).call(this));_this46.condition=condition;_this46.thenSource=thenSource;_this46.elseSource=elseSource;return _this46;}_createClass(IfObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var condition=this.condition;var thenSource=this.thenSource;var elseSource=this.elseSource;return new IfSubscriber(subscriber,condition,thenSource,elseSource);}}],[{key:'create',value:function create(condition,thenSource,elseSource){return new IfObservable(condition,thenSource,elseSource);}}]);return IfObservable;}(Observable);var IfSubscriber=function(_OuterSubscriber5){_inherits(IfSubscriber,_OuterSubscriber5);function IfSubscriber(destination,condition,thenSource,elseSource){_classCallCheck(this,IfSubscriber);var _this47=_possibleConstructorReturn(this,(IfSubscriber.__proto__||Object.getPrototypeOf(IfSubscriber)).call(this,destination));_this47.condition=condition;_this47.thenSource=thenSource;_this47.elseSource=elseSource;_this47.tryIf();return _this47;}_createClass(IfSubscriber,[{key:'tryIf',value:function tryIf(){var condition=this.condition;var thenSource=this.thenSource;var elseSource=this.elseSource;var result=void 0;try{result=condition();var source=result?thenSource:elseSource;if(source){this.add(subscribeToResult(this,source));}else{this._complete();}}catch(err){this._error(err);}}}]);return IfSubscriber;}(OuterSubscriber);var _if=IfObservable.create;Observable.if=_if;function isNumeric(val){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
return!isArray(val)&&val-parseFloat(val)+1>=0;};/**
   * A unit of work to be executed in a {@link Scheduler}. An action is typically
   * created from within a Scheduler and an RxJS user does not need to concern
   * themselves about creating and manipulating an Action.
   *
   * ```ts
   * class Action<T> extends Subscription {
   *   new (scheduler: Scheduler, work: (state?: T) => void);
   *   schedule(state?: T, delay: number = 0): Subscription;
   * }
   * ```
   *
   * @class Action<T>
   */var Action=function(_Subscription3){_inherits(Action,_Subscription3);function Action(scheduler,work){_classCallCheck(this,Action);return _possibleConstructorReturn(this,(Action.__proto__||Object.getPrototypeOf(Action)).call(this));}/**
       * Schedules this action on its parent Scheduler for execution. May be passed
       * some context object, `state`. May happen at some point in the future,
       * according to the `delay` parameter, if specified.
       * @param {T} [state] Some contextual data that the `work` function uses when
       * called by the Scheduler.
       * @param {number} [delay] Time to wait before executing the work, where the
       * time unit is implicit and defined by the Scheduler.
       * @return {void}
       */_createClass(Action,[{key:'schedule',value:function schedule(state){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];return this;}}]);return Action;}(Subscription);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AsyncAction=function(_Action){_inherits(AsyncAction,_Action);function AsyncAction(scheduler,work){_classCallCheck(this,AsyncAction);var _this49=_possibleConstructorReturn(this,(AsyncAction.__proto__||Object.getPrototypeOf(AsyncAction)).call(this,scheduler,work));_this49.scheduler=scheduler;_this49.work=work;_this49.pending=false;return _this49;}_createClass(AsyncAction,[{key:'schedule',value:function schedule(state){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];if(this.closed){return this;}// Always replace the current state with the new state.
this.state=state;// Set the pending flag indicating that this action has been scheduled, or
// has recursively rescheduled itself.
this.pending=true;var id=this.id;var scheduler=this.scheduler;//
// Important implementation note:
//
// Actions only execute once by default, unless rescheduled from within the
// scheduled callback. This allows us to implement single and repeat
// actions via the same code path, without adding API surface area, as well
// as mimic traditional recursion but across asynchronous boundaries.
//
// However, JS runtimes and timers distinguish between intervals achieved by
// serial `setTimeout` calls vs. a single `setInterval` call. An interval of
// serial `setTimeout` calls can be individually delayed, which delays
// scheduling the next `setTimeout`, and so on. `setInterval` attempts to
// guarantee the interval callback will be invoked more precisely to the
// interval period, regardless of load.
//
// Therefore, we use `setInterval` to schedule single and repeat actions.
// If the action reschedules itself with the same delay, the interval is not
// canceled. If the action doesn't reschedule, or reschedules with a
// different delay, the interval will be canceled after scheduled callback
// execution.
//
if(id!=null){this.id=this.recycleAsyncId(scheduler,id,delay);}this.delay=delay;// If this action has already an async Id, don't request a new one.
this.id=this.id||this.requestAsyncId(scheduler,this.id,delay);return this;}},{key:'requestAsyncId',value:function requestAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];return root.setInterval(scheduler.flush.bind(scheduler,this),delay);}},{key:'recycleAsyncId',value:function recycleAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If this action is rescheduled with the same delay time, don't clear the interval id.
if(delay!==null&&this.delay===delay){return id;}// Otherwise, if the action's delay time is different from the current delay,
// clear the interval id
return root.clearInterval(id)&&undefined||undefined;}/**
       * Immediately executes this action and the `work` it contains.
       * @return {any}
       */},{key:'execute',value:function execute(state,delay){if(this.closed){return new Error('executing a cancelled action');}this.pending=false;var error=this._execute(state,delay);if(error){return error;}else if(this.pending===false&&this.id!=null){// Dequeue if the action didn't reschedule itself. Don't call
// unsubscribe(), because the action could reschedule later.
// For example:
// ```
// scheduler.schedule(function doWork(counter) {
//   /* ... I'm a busy worker bee ... */
//   var originalAction = this;
//   /* wait 100ms before rescheduling the action */
//   setTimeout(function () {
//     originalAction.schedule(counter + 1);
//   }, 100);
// }, 1000);
// ```
this.id=this.recycleAsyncId(this.scheduler,this.id,null);}}},{key:'_execute',value:function _execute(state,delay){var errored=false;var errorValue=undefined;try{this.work(state);}catch(e){errored=true;errorValue=!!e&&e||new Error(e);}if(errored){this.unsubscribe();return errorValue;}}},{key:'_unsubscribe',value:function _unsubscribe(){var id=this.id;var scheduler=this.scheduler;var actions=scheduler.actions;var index=actions.indexOf(this);this.work=null;this.delay=null;this.state=null;this.pending=false;this.scheduler=null;if(index!==-1){actions.splice(index,1);}if(id!=null){this.id=this.recycleAsyncId(scheduler,id,null);}}}]);return AsyncAction;}(Action);/**
   * An execution context and a data structure to order tasks and schedule their
   * execution. Provides a notion of (potentially virtual) time, through the
   * `now()` getter method.
   *
   * Each unit of work in a Scheduler is called an {@link Action}.
   *
   * ```ts
   * class Scheduler {
   *   now(): number;
   *   schedule(work, delay?, state?): Subscription;
   * }
   * ```
   *
   * @class Scheduler
   */var Scheduler$1=function(){function Scheduler$1(SchedulerAction){var now=arguments.length<=1||arguments[1]===undefined?Scheduler$1.now:arguments[1];_classCallCheck(this,Scheduler$1);this.SchedulerAction=SchedulerAction;this.now=now;}/**
       * Schedules a function, `work`, for execution. May happen at some point in
       * the future, according to the `delay` parameter, if specified. May be passed
       * some context object, `state`, which will be passed to the `work` function.
       *
       * The given arguments will be processed an stored as an Action object in a
       * queue of actions.
       *
       * @param {function(state: ?T): ?Subscription} work A function representing a
       * task, or some unit of work to be executed by the Scheduler.
       * @param {number} [delay] Time to wait before executing the work, where the
       * time unit is implicit and defined by the Scheduler itself.
       * @param {T} [state] Some contextual data that the `work` function uses when
       * called by the Scheduler.
       * @return {Subscription} A subscription in order to be able to unsubscribe
       * the scheduled work.
       */_createClass(Scheduler$1,[{key:'schedule',value:function schedule(work){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var state=arguments[2];return new this.SchedulerAction(this,work).schedule(state,delay);}}]);return Scheduler$1;}();Scheduler$1.now=Date.now?Date.now:function(){return+new Date();};var AsyncScheduler=function(_Scheduler$){_inherits(AsyncScheduler,_Scheduler$);function AsyncScheduler(){var _ref2;_classCallCheck(this,AsyncScheduler);for(var _len16=arguments.length,args=Array(_len16),_key15=0;_key15<_len16;_key15++){args[_key15]=arguments[_key15];}var _this50=_possibleConstructorReturn(this,(_ref2=AsyncScheduler.__proto__||Object.getPrototypeOf(AsyncScheduler)).call.apply(_ref2,[this].concat(args)));_this50.actions=[];/**
           * A flag to indicate whether the Scheduler is currently executing a batch of
           * queued actions.
           * @type {boolean}
           */_this50.active=false;/**
           * An internal ID used to track the latest asynchronous task such as those
           * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
           * others.
           * @type {any}
           */_this50.scheduled=undefined;return _this50;}_createClass(AsyncScheduler,[{key:'flush',value:function flush(action){var actions=this.actions;if(this.active){actions.push(action);return;}var error=void 0;this.active=true;do{if(error=action.execute(action.state,action.delay)){break;}}while(action=actions.shift());// exhaust the scheduler queue
this.active=false;if(error){while(action=actions.shift()){action.unsubscribe();}throw error;}}}]);return AsyncScheduler;}(Scheduler$1);var async=new AsyncScheduler(AsyncAction);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var IntervalObservable=function(_Observable17){_inherits(IntervalObservable,_Observable17);function IntervalObservable(){var period=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];_classCallCheck(this,IntervalObservable);var _this51=_possibleConstructorReturn(this,(IntervalObservable.__proto__||Object.getPrototypeOf(IntervalObservable)).call(this));_this51.period=period;_this51.scheduler=scheduler;if(!isNumeric(period)||period<0){_this51.period=0;}if(!scheduler||typeof scheduler.schedule!=='function'){_this51.scheduler=async;}return _this51;}/**
       * Creates an Observable that emits sequential numbers every specified
       * interval of time, on a specified Scheduler.
       *
       * <span class="informal">Emits incremental numbers periodically in time.
       * </span>
       *
       * <img src="./img/interval.png" width="100%">
       *
       * `interval` returns an Observable that emits an infinite sequence of
       * ascending integers, with a constant interval of time of your choosing
       * between those emissions. The first emission is not sent immediately, but
       * only after the first period has passed. By default, this operator uses the
       * `async` Scheduler to provide a notion of time, but you may pass any
       * Scheduler to it.
       *
       * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
       * var numbers = Rx.Observable.interval(1000);
       * numbers.subscribe(x => console.log(x));
       *
       * @see {@link timer}
       * @see {@link delay}
       *
       * @param {number} [period=0] The interval size in milliseconds (by default)
       * or the time unit determined by the scheduler's clock.
       * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
       * the emission of values, and providing a notion of "time".
       * @return {Observable} An Observable that emits a sequential number each time
       * interval.
       * @static true
       * @name interval
       * @owner Observable
       */_createClass(IntervalObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var period=this.period;var scheduler=this.scheduler;subscriber.add(scheduler.schedule(IntervalObservable.dispatch,period,{index:index,subscriber:subscriber,period:period}));}}],[{key:'create',value:function create(){var period=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];return new IntervalObservable(period,scheduler);}},{key:'dispatch',value:function dispatch(state){var index=state.index;var subscriber=state.subscriber;var period=state.period;subscriber.next(index);if(subscriber.closed){return;}state.index+=1;this.schedule(state,period);}}]);return IntervalObservable;}(Observable);var interval=IntervalObservable.create;Observable.interval=interval;/**
   * Creates an output Observable which concurrently emits all values from every
   * given input Observable.
   *
   * <span class="informal">Flattens multiple Observables together by blending
   * their values into one Observable.</span>
   *
   * <img src="./img/merge.png" width="100%">
   *
   * `merge` subscribes to each given input Observable (either the source or an
   * Observable given as argument), and simply forwards (without doing any
   * transformation) all the values from all the input Observables to the output
   * Observable. The output Observable only completes once all input Observables
   * have completed. Any error delivered by an input Observable will be immediately
   * emitted on the output Observable.
   *
   * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var timer = Rx.Observable.interval(1000);
   * var clicksOrTimer = clicks.merge(timer);
   * clicksOrTimer.subscribe(x => console.log(x));
   *
   * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
   * var timer1 = Rx.Observable.interval(1000).take(10);
   * var timer2 = Rx.Observable.interval(2000).take(6);
   * var timer3 = Rx.Observable.interval(500).take(10);
   * var concurrent = 2; // the argument
   * var merged = timer1.merge(timer2, timer3, concurrent);
   * merged.subscribe(x => console.log(x));
   *
   * @see {@link mergeAll}
   * @see {@link mergeMap}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   *
   * @param {Observable} other An input Observable to merge with the source
   * Observable. More than one input Observables may be given as argument.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
   * concurrency of input Observables.
   * @return {Observable} an Observable that emits items that are the result of
   * every input Observable.
   * @method merge
   * @owner Observable
   */function merge$1(){for(var _len17=arguments.length,observables=Array(_len17),_key16=0;_key16<_len17;_key16++){observables[_key16]=arguments[_key16];}observables.unshift(this);return mergeStatic.apply(this,observables);}/* tslint:enable:max-line-length *//**
   * Creates an output Observable which concurrently emits all values from every
   * given input Observable.
   *
   * <span class="informal">Flattens multiple Observables together by blending
   * their values into one Observable.</span>
   *
   * <img src="./img/merge.png" width="100%">
   *
   * `merge` subscribes to each given input Observable (as arguments), and simply
   * forwards (without doing any transformation) all the values from all the input
   * Observables to the output Observable. The output Observable only completes
   * once all input Observables have completed. Any error delivered by an input
   * Observable will be immediately emitted on the output Observable.
   *
   * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var timer = Rx.Observable.interval(1000);
   * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
   * clicksOrTimer.subscribe(x => console.log(x));
   *
   * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
   * var timer1 = Rx.Observable.interval(1000).take(10);
   * var timer2 = Rx.Observable.interval(2000).take(6);
   * var timer3 = Rx.Observable.interval(500).take(10);
   * var concurrent = 2; // the argument
   * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
   * merged.subscribe(x => console.log(x));
   *
   * @see {@link mergeAll}
   * @see {@link mergeMap}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   *
   * @param {Observable} input1 An input Observable to merge with others.
   * @param {Observable} input2 An input Observable to merge with others.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
   * concurrency of input Observables.
   * @return {Observable} an Observable that emits items that are the result of
   * every input Observable.
   * @static true
   * @name merge
   * @owner Observable
   */function mergeStatic(){var concurrent=Number.POSITIVE_INFINITY;var scheduler=null;for(var _len18=arguments.length,observables=Array(_len18),_key17=0;_key17<_len18;_key17++){observables[_key17]=arguments[_key17];}var last=observables[observables.length-1];if(isScheduler(last)){scheduler=observables.pop();if(observables.length>1&&typeof observables[observables.length-1]==='number'){concurrent=observables.pop();}}else if(typeof last==='number'){concurrent=observables.pop();}if(observables.length===1){return observables[0];}return new ArrayObservable(observables,scheduler).lift(new MergeAllOperator(concurrent));}var merge=mergeStatic;Observable.merge=merge;/**
   * Returns an Observable that mirrors the first source Observable to emit an item
   * from the combination of this Observable and supplied Observables
   * @param {...Observables} ...observables sources used to race for which Observable emits first.
   * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
   * @method race
   * @owner Observable
   */function race(){for(var _len19=arguments.length,observables=Array(_len19),_key18=0;_key18<_len19;_key18++){observables[_key18]=arguments[_key18];}// if the only argument is an array, it was most likely called with
// `pair([obs1, obs2, ...])`
if(observables.length===1&&isArray(observables[0])){observables=observables[0];}observables.unshift(this);return raceStatic.apply(this,observables);}function raceStatic(){for(var _len20=arguments.length,observables=Array(_len20),_key19=0;_key19<_len20;_key19++){observables[_key19]=arguments[_key19];}// if the only argument is an array, it was most likely called with
// `pair([obs1, obs2, ...])`
if(observables.length===1){if(isArray(observables[0])){observables=observables[0];}else{return observables[0];}}return new ArrayObservable(observables).lift(new RaceOperator());}var RaceOperator=function(){function RaceOperator(){_classCallCheck(this,RaceOperator);}_createClass(RaceOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new RaceSubscriber(subscriber));}}]);return RaceOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var RaceSubscriber=function(_OuterSubscriber6){_inherits(RaceSubscriber,_OuterSubscriber6);function RaceSubscriber(destination){_classCallCheck(this,RaceSubscriber);var _this52=_possibleConstructorReturn(this,(RaceSubscriber.__proto__||Object.getPrototypeOf(RaceSubscriber)).call(this,destination));_this52.hasFirst=false;_this52.observables=[];_this52.subscriptions=[];return _this52;}_createClass(RaceSubscriber,[{key:'_next',value:function _next(observable){this.observables.push(observable);}},{key:'_complete',value:function _complete(){var observables=this.observables;var len=observables.length;if(len===0){this.destination.complete();}else{for(var _i6=0;_i6<len;_i6++){var observable=observables[_i6];var subscription=subscribeToResult(this,observable,observable,_i6);if(this.subscriptions){this.subscriptions.push(subscription);this.add(subscription);}}this.observables=null;}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){if(!this.hasFirst){this.hasFirst=true;for(var _i7=0;_i7<this.subscriptions.length;_i7++){if(_i7!==outerIndex){var subscription=this.subscriptions[_i7];subscription.unsubscribe();this.remove(subscription);}}this.subscriptions=null;}this.destination.next(innerValue);}}]);return RaceSubscriber;}(OuterSubscriber);Observable.race=raceStatic;/* tslint:disable:no-empty */function noop(){}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var NeverObservable=function(_Observable18){_inherits(NeverObservable,_Observable18);function NeverObservable(){_classCallCheck(this,NeverObservable);return _possibleConstructorReturn(this,(NeverObservable.__proto__||Object.getPrototypeOf(NeverObservable)).call(this));}/**
       * Creates an Observable that emits no items to the Observer.
       *
       * <span class="informal">An Observable that never emits anything.</span>
       *
       * <img src="./img/never.png" width="100%">
       *
       * This static operator is useful for creating a simple Observable that emits
       * neither values nor errors nor the completion notification. It can be used
       * for testing purposes or for composing with other Observables. Please not
       * that by never emitting a complete notification, this Observable keeps the
       * subscription from being disposed automatically. Subscriptions need to be
       * manually disposed.
       *
       * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
       * function info() {
       *   console.log('Will not be called');
       * }
       * var result = Rx.Observable.never().startWith(7);
       * result.subscribe(x => console.log(x), info, info);
       *
       * @see {@link create}
       * @see {@link empty}
       * @see {@link of}
       * @see {@link throw}
       *
       * @return {Observable} A "never" Observable: never emits anything.
       * @static true
       * @name never
       * @owner Observable
       */_createClass(NeverObservable,[{key:'_subscribe',value:function _subscribe(subscriber){noop();}}],[{key:'create',value:function create(){return new NeverObservable();}}]);return NeverObservable;}(Observable);var never=NeverObservable.create;Observable.never=never;var of=ArrayObservable.of;Observable.of=of;function onErrorResumeNext(){for(var _len21=arguments.length,nextSources=Array(_len21),_key20=0;_key20<_len21;_key20++){nextSources[_key20]=arguments[_key20];}if(nextSources.length===1&&isArray(nextSources[0])){nextSources=nextSources[0];}return this.lift(new OnErrorResumeNextOperator(nextSources));}/* tslint:enable:max-line-length */function onErrorResumeNextStatic(){for(var _len22=arguments.length,nextSources=Array(_len22),_key21=0;_key21<_len22;_key21++){nextSources[_key21]=arguments[_key21];}var source=null;if(nextSources.length===1&&isArray(nextSources[0])){nextSources=nextSources[0];}source=nextSources.shift();return new FromObservable(source,null).lift(new OnErrorResumeNextOperator(nextSources));}var OnErrorResumeNextOperator=function(){function OnErrorResumeNextOperator(nextSources){_classCallCheck(this,OnErrorResumeNextOperator);this.nextSources=nextSources;}_createClass(OnErrorResumeNextOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new OnErrorResumeNextSubscriber(subscriber,this.nextSources));}}]);return OnErrorResumeNextOperator;}();var OnErrorResumeNextSubscriber=function(_OuterSubscriber7){_inherits(OnErrorResumeNextSubscriber,_OuterSubscriber7);function OnErrorResumeNextSubscriber(destination,nextSources){_classCallCheck(this,OnErrorResumeNextSubscriber);var _this54=_possibleConstructorReturn(this,(OnErrorResumeNextSubscriber.__proto__||Object.getPrototypeOf(OnErrorResumeNextSubscriber)).call(this,destination));_this54.destination=destination;_this54.nextSources=nextSources;return _this54;}_createClass(OnErrorResumeNextSubscriber,[{key:'notifyError',value:function notifyError(error,innerSub){this.subscribeToNextSource();}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.subscribeToNextSource();}},{key:'_error',value:function _error(err){this.subscribeToNextSource();}},{key:'_complete',value:function _complete(){this.subscribeToNextSource();}},{key:'subscribeToNextSource',value:function subscribeToNextSource(){var next=this.nextSources.shift();if(next){this.add(subscribeToResult(this,next));}else{this.destination.complete();}}}]);return OnErrorResumeNextSubscriber;}(OuterSubscriber);Observable.onErrorResumeNext=onErrorResumeNextStatic;function dispatch$1(state){var obj=state.obj;var keys=state.keys;var length=state.length;var index=state.index;var subscriber=state.subscriber;if(index===length){subscriber.complete();return;}var key=keys[index];subscriber.next([key,obj[key]]);state.index=index+1;this.schedule(state);}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var PairsObservable=function(_Observable19){_inherits(PairsObservable,_Observable19);function PairsObservable(obj,scheduler){_classCallCheck(this,PairsObservable);var _this55=_possibleConstructorReturn(this,(PairsObservable.__proto__||Object.getPrototypeOf(PairsObservable)).call(this));_this55.obj=obj;_this55.scheduler=scheduler;_this55.keys=Object.keys(obj);return _this55;}/**
       * Convert an object into an observable sequence of [key, value] pairs
       * using an optional Scheduler to enumerate the object.
       *
       * @example <caption>Converts a javascript object to an Observable</caption>
       * var obj = {
       *   foo: 42,
       *   bar: 56,
       *   baz: 78
       * };
       *
       * var source = Rx.Observable.pairs(obj);
       *
       * var subscription = source.subscribe(
       *   function (x) {
       *     console.log('Next: %s', x);
       *   },
       *   function (err) {
       *     console.log('Error: %s', err);
       *   },
       *   function () {
       *     console.log('Completed');
       *   });
       *
       * @param {Object} obj The object to inspect and turn into an
       * Observable sequence.
       * @param {Scheduler} [scheduler] An optional Scheduler to run the
       * enumeration of the input sequence on.
       * @returns {(Observable<Array<string | T>>)} An observable sequence of
       * [key, value] pairs from the object.
       */_createClass(PairsObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var keys=this.keys;var scheduler=this.scheduler;var length=keys.length;if(scheduler){return scheduler.schedule(dispatch$1,0,{obj:this.obj,keys:keys,length:length,index:0,subscriber:subscriber});}else{for(var idx=0;idx<length;idx++){var _key22=keys[idx];subscriber.next([_key22,this.obj[_key22]]);}subscriber.complete();}}}],[{key:'create',value:function create(obj,scheduler){return new PairsObservable(obj,scheduler);}}]);return PairsObservable;}(Observable);var pairs=PairsObservable.create;Observable.pairs=pairs;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var RangeObservable=function(_Observable20){_inherits(RangeObservable,_Observable20);function RangeObservable(start,count,scheduler){_classCallCheck(this,RangeObservable);var _this56=_possibleConstructorReturn(this,(RangeObservable.__proto__||Object.getPrototypeOf(RangeObservable)).call(this));_this56.start=start;_this56._count=count;_this56.scheduler=scheduler;return _this56;}/**
       * Creates an Observable that emits a sequence of numbers within a specified
       * range.
       *
       * <span class="informal">Emits a sequence of numbers in a range.</span>
       *
       * <img src="./img/range.png" width="100%">
       *
       * `range` operator emits a range of sequential integers, in order, where you
       * select the `start` of the range and its `length`. By default, uses no
       * Scheduler and just delivers the notifications synchronously, but may use
       * an optional Scheduler to regulate those deliveries.
       *
       * @example <caption>Emits the numbers 1 to 10</caption>
       * var numbers = Rx.Observable.range(1, 10);
       * numbers.subscribe(x => console.log(x));
       *
       * @see {@link timer}
       * @see {@link interval}
       *
       * @param {number} [start=0] The value of the first integer in the sequence.
       * @param {number} [count=0] The number of sequential integers to generate.
       * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
       * the emissions of the notifications.
       * @return {Observable} An Observable of numbers that emits a finite range of
       * sequential integers.
       * @static true
       * @name range
       * @owner Observable
       */_createClass(RangeObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var start=this.start;var count=this._count;var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(RangeObservable.dispatch,0,{index:index,count:count,start:start,subscriber:subscriber});}else{do{if(index++>=count){subscriber.complete();break;}subscriber.next(start++);if(subscriber.closed){break;}}while(true);}}}],[{key:'create',value:function create(){var start=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var count=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var scheduler=arguments[2];return new RangeObservable(start,count,scheduler);}},{key:'dispatch',value:function dispatch(state){var start=state.start;var index=state.index;var count=state.count;var subscriber=state.subscriber;if(index>=count){subscriber.complete();return;}subscriber.next(start);if(subscriber.closed){return;}state.index=index+1;state.start=start+1;this.schedule(state);}}]);return RangeObservable;}(Observable);var range=RangeObservable.create;Observable.range=range;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var UsingObservable=function(_Observable21){_inherits(UsingObservable,_Observable21);function UsingObservable(resourceFactory,observableFactory){_classCallCheck(this,UsingObservable);var _this57=_possibleConstructorReturn(this,(UsingObservable.__proto__||Object.getPrototypeOf(UsingObservable)).call(this));_this57.resourceFactory=resourceFactory;_this57.observableFactory=observableFactory;return _this57;}_createClass(UsingObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var resourceFactory=this.resourceFactory;var observableFactory=this.observableFactory;var resource=void 0;try{resource=resourceFactory();return new UsingSubscriber(subscriber,resource,observableFactory);}catch(err){subscriber.error(err);}}}],[{key:'create',value:function create(resourceFactory,observableFactory){return new UsingObservable(resourceFactory,observableFactory);}}]);return UsingObservable;}(Observable);var UsingSubscriber=function(_OuterSubscriber8){_inherits(UsingSubscriber,_OuterSubscriber8);function UsingSubscriber(destination,resource,observableFactory){_classCallCheck(this,UsingSubscriber);var _this58=_possibleConstructorReturn(this,(UsingSubscriber.__proto__||Object.getPrototypeOf(UsingSubscriber)).call(this,destination));_this58.resource=resource;_this58.observableFactory=observableFactory;destination.add(resource);_this58.tryUse();return _this58;}_createClass(UsingSubscriber,[{key:'tryUse',value:function tryUse(){try{var source=this.observableFactory.call(this,this.resource);if(source){this.add(subscribeToResult(this,source));}}catch(err){this._error(err);}}}]);return UsingSubscriber;}(OuterSubscriber);var using=UsingObservable.create;Observable.using=using;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var ErrorObservable=function(_Observable22){_inherits(ErrorObservable,_Observable22);function ErrorObservable(error,scheduler){_classCallCheck(this,ErrorObservable);var _this59=_possibleConstructorReturn(this,(ErrorObservable.__proto__||Object.getPrototypeOf(ErrorObservable)).call(this));_this59.error=error;_this59.scheduler=scheduler;return _this59;}/**
       * Creates an Observable that emits no items to the Observer and immediately
       * emits an error notification.
       *
       * <span class="informal">Just emits 'error', and nothing else.
       * </span>
       *
       * <img src="./img/throw.png" width="100%">
       *
       * This static operator is useful for creating a simple Observable that only
       * emits the error notification. It can be used for composing with other
       * Observables, such as in a {@link mergeMap}.
       *
       * @example <caption>Emit the number 7, then emit an error.</caption>
       * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
       * var interval = Rx.Observable.interval(1000);
       * var result = interval.mergeMap(x =>
       *   x === 13 ?
       *     Rx.Observable.throw('Thirteens are bad') :
       *     Rx.Observable.of('a', 'b', 'c')
       * );
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @see {@link create}
       * @see {@link empty}
       * @see {@link never}
       * @see {@link of}
       *
       * @param {any} error The particular Error to pass to the error notification.
       * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
       * the emission of the error notification.
       * @return {Observable} An error Observable: emits only the error notification
       * using the given error argument.
       * @static true
       * @name throw
       * @owner Observable
       */_createClass(ErrorObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var error=this.error;var scheduler=this.scheduler;if(scheduler){return scheduler.schedule(ErrorObservable.dispatch,0,{error:error,subscriber:subscriber});}else{subscriber.error(error);}}}],[{key:'create',value:function create(error,scheduler){return new ErrorObservable(error,scheduler);}},{key:'dispatch',value:function dispatch(arg){var error=arg.error;var subscriber=arg.subscriber;subscriber.error(error);}}]);return ErrorObservable;}(Observable);var _throw=ErrorObservable.create;Observable.throw=_throw;function isDate(value){return value instanceof Date&&!isNaN(+value);}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var TimerObservable=function(_Observable23){_inherits(TimerObservable,_Observable23);function TimerObservable(){var dueTime=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var period=arguments[1];var scheduler=arguments[2];_classCallCheck(this,TimerObservable);var _this60=_possibleConstructorReturn(this,(TimerObservable.__proto__||Object.getPrototypeOf(TimerObservable)).call(this));_this60.period=-1;_this60.dueTime=0;if(isNumeric(period)){_this60.period=Number(period)<1&&1||Number(period);}else if(isScheduler(period)){scheduler=period;}if(!isScheduler(scheduler)){scheduler=async;}_this60.scheduler=scheduler;_this60.dueTime=isDate(dueTime)?+dueTime-_this60.scheduler.now():dueTime;return _this60;}/**
       * Creates an Observable that starts emitting after an `initialDelay` and
       * emits ever increasing numbers after each `period` of time thereafter.
       *
       * <span class="informal">Its like {@link interval}, but you can specify when
       * should the emissions start.</span>
       *
       * <img src="./img/timer.png" width="100%">
       *
       * `timer` returns an Observable that emits an infinite sequence of ascending
       * integers, with a constant interval of time, `period` of your choosing
       * between those emissions. The first emission happens after the specified
       * `initialDelay`. The initial delay may be a {@link Date}. By default, this
       * operator uses the `async` Scheduler to provide a notion of time, but you
       * may pass any Scheduler to it. If `period` is not specified, the output
       * Observable emits only one value, `0`. Otherwise, it emits an infinite
       * sequence.
       *
       * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
       * var numbers = Rx.Observable.timer(3000, 1000);
       * numbers.subscribe(x => console.log(x));
       *
       * @example <caption>Emits one number after five seconds</caption>
       * var numbers = Rx.Observable.timer(5000);
       * numbers.subscribe(x => console.log(x));
       *
       * @see {@link interval}
       * @see {@link delay}
       *
       * @param {number|Date} initialDelay The initial delay time to wait before
       * emitting the first value of `0`.
       * @param {number} [period] The period of time between emissions of the
       * subsequent numbers.
       * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
       * the emission of values, and providing a notion of "time".
       * @return {Observable} An Observable that emits a `0` after the
       * `initialDelay` and ever increasing numbers after each `period` of time
       * thereafter.
       * @static true
       * @name timer
       * @owner Observable
       */_createClass(TimerObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var index=0;var period=this.period;var dueTime=this.dueTime;var scheduler=this.scheduler;return scheduler.schedule(TimerObservable.dispatch,dueTime,{index:index,period:period,subscriber:subscriber});}}],[{key:'create',value:function create(){var initialDelay=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var period=arguments[1];var scheduler=arguments[2];return new TimerObservable(initialDelay,period,scheduler);}},{key:'dispatch',value:function dispatch(state){var index=state.index;var period=state.period;var subscriber=state.subscriber;var action=this;subscriber.next(index);if(subscriber.closed){return;}else if(period===-1){return subscriber.complete();}state.index=index+1;action.schedule(state,period);}}]);return TimerObservable;}(Observable);var timer=TimerObservable.create;Observable.timer=timer;/**
   * @param observables
   * @return {Observable<R>}
   * @method zip
   * @owner Observable
   */function zipProto(){for(var _len23=arguments.length,observables=Array(_len23),_key23=0;_key23<_len23;_key23++){observables[_key23]=arguments[_key23];}observables.unshift(this);return zipStatic.apply(this,observables);}/* tslint:enable:max-line-length *//**
   * @param observables
   * @return {Observable<R>}
   * @static true
   * @name zip
   * @owner Observable
   */function zipStatic(){for(var _len24=arguments.length,observables=Array(_len24),_key24=0;_key24<_len24;_key24++){observables[_key24]=arguments[_key24];}var project=observables[observables.length-1];if(typeof project==='function'){observables.pop();}return new ArrayObservable(observables).lift(new ZipOperator(project));}var ZipOperator=function(){function ZipOperator(project){_classCallCheck(this,ZipOperator);this.project=project;}_createClass(ZipOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ZipSubscriber(subscriber,this.project));}}]);return ZipOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ZipSubscriber=function(_Subscriber6){_inherits(ZipSubscriber,_Subscriber6);function ZipSubscriber(destination,project){var values=arguments.length<=2||arguments[2]===undefined?Object.create(null):arguments[2];_classCallCheck(this,ZipSubscriber);var _this61=_possibleConstructorReturn(this,(ZipSubscriber.__proto__||Object.getPrototypeOf(ZipSubscriber)).call(this,destination));_this61.index=0;_this61.iterators=[];_this61.active=0;_this61.project=typeof project==='function'?project:null;_this61.values=values;return _this61;}_createClass(ZipSubscriber,[{key:'_next',value:function _next(value){var iterators=this.iterators;var index=this.index++;if(isArray(value)){iterators.push(new StaticArrayIterator(value));}else if(typeof value[$$iterator]==='function'){iterators.push(new StaticIterator(value[$$iterator]()));}else{iterators.push(new ZipBufferIterator(this.destination,this,value,index));}}},{key:'_complete',value:function _complete(){var iterators=this.iterators;var len=iterators.length;this.active=len;for(var _i8=0;_i8<len;_i8++){var iterator=iterators[_i8];if(iterator.stillUnsubscribed){this.add(iterator.subscribe(iterator,_i8));}else{this.active--;// not an observable
}}}},{key:'notifyInactive',value:function notifyInactive(){this.active--;if(this.active===0){this.destination.complete();}}},{key:'checkIterators',value:function checkIterators(){var iterators=this.iterators;var len=iterators.length;var destination=this.destination;// abort if not all of them have values
for(var _i9=0;_i9<len;_i9++){var iterator=iterators[_i9];if(typeof iterator.hasValue==='function'&&!iterator.hasValue()){return;}}var shouldComplete=false;var args=[];for(var _i10=0;_i10<len;_i10++){var _iterator=iterators[_i10];var result=_iterator.next();// check to see if it's completed now that you've gotten
// the next value.
if(_iterator.hasCompleted()){shouldComplete=true;}if(result.done){destination.complete();return;}args.push(result.value);}if(this.project){this._tryProject(args);}else{destination.next(args);}if(shouldComplete){destination.complete();}}},{key:'_tryProject',value:function _tryProject(args){var result=void 0;try{result=this.project.apply(this,args);}catch(err){this.destination.error(err);return;}this.destination.next(result);}}]);return ZipSubscriber;}(Subscriber);var StaticIterator=function(){function StaticIterator(iterator){_classCallCheck(this,StaticIterator);this.iterator=iterator;this.nextResult=iterator.next();}_createClass(StaticIterator,[{key:'hasValue',value:function hasValue(){return true;}},{key:'next',value:function next(){var result=this.nextResult;this.nextResult=this.iterator.next();return result;}},{key:'hasCompleted',value:function hasCompleted(){var nextResult=this.nextResult;return nextResult&&nextResult.done;}}]);return StaticIterator;}();var StaticArrayIterator=function(){function StaticArrayIterator(array){_classCallCheck(this,StaticArrayIterator);this.array=array;this.index=0;this.length=0;this.length=array.length;}_createClass(StaticArrayIterator,[{key:$$iterator,value:function value(){return this;}},{key:'next',value:function next(value){var i=this.index++;var array=this.array;return i<this.length?{value:array[i],done:false}:{value:null,done:true};}},{key:'hasValue',value:function hasValue(){return this.array.length>this.index;}},{key:'hasCompleted',value:function hasCompleted(){return this.array.length===this.index;}}]);return StaticArrayIterator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ZipBufferIterator=function(_OuterSubscriber9){_inherits(ZipBufferIterator,_OuterSubscriber9);function ZipBufferIterator(destination,parent,observable,index){_classCallCheck(this,ZipBufferIterator);var _this62=_possibleConstructorReturn(this,(ZipBufferIterator.__proto__||Object.getPrototypeOf(ZipBufferIterator)).call(this,destination));_this62.parent=parent;_this62.observable=observable;_this62.index=index;_this62.stillUnsubscribed=true;_this62.buffer=[];_this62.isComplete=false;return _this62;}_createClass(ZipBufferIterator,[{key:$$iterator,value:function value(){return this;}// NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
//    this is legit because `next()` will never be called by a subscription in this case.
},{key:'next',value:function next(){var buffer=this.buffer;if(buffer.length===0&&this.isComplete){return{value:null,done:true};}else{return{value:buffer.shift(),done:false};}}},{key:'hasValue',value:function hasValue(){return this.buffer.length>0;}},{key:'hasCompleted',value:function hasCompleted(){return this.buffer.length===0&&this.isComplete;}},{key:'notifyComplete',value:function notifyComplete(){if(this.buffer.length>0){this.isComplete=true;this.parent.notifyInactive();}else{this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.buffer.push(innerValue);this.parent.checkIterators();}},{key:'subscribe',value:function subscribe(value,index){return subscribeToResult(this,this.observable,this,index);}}]);return ZipBufferIterator;}(OuterSubscriber);var zip=zipStatic;Observable.zip=zip;function getCORSRequest(){if(root.XMLHttpRequest){var xhr=new root.XMLHttpRequest();if('withCredentials'in xhr){xhr.withCredentials=!!this.withCredentials;}return xhr;}else if(!!root.XDomainRequest){return new root.XDomainRequest();}else{throw new Error('CORS is not supported by your browser');}}function getXMLHttpRequest(){if(root.XMLHttpRequest){return new root.XMLHttpRequest();}else{var progId=void 0;try{var progIds=['Msxml2.XMLHTTP','Microsoft.XMLHTTP','Msxml2.XMLHTTP.4.0'];for(var _i11=0;_i11<3;_i11++){try{progId=progIds[_i11];if(new root.ActiveXObject(progId)){break;}}catch(e){}}return new root.ActiveXObject(progId);}catch(e){throw new Error('XMLHttpRequest is not supported by your browser');}}}function ajaxGet(url){var headers=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return new AjaxObservable({method:'GET',url:url,headers:headers});};function ajaxPost(url,body,headers){return new AjaxObservable({method:'POST',url:url,body:body,headers:headers});};function ajaxDelete(url,headers){return new AjaxObservable({method:'DELETE',url:url,headers:headers});};function ajaxPut(url,body,headers){return new AjaxObservable({method:'PUT',url:url,body:body,headers:headers});};function ajaxGetJSON(url,headers){return new AjaxObservable({method:'GET',url:url,responseType:'json',headers:headers}).map(function(x){return x.response;});};/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var AjaxObservable=function(_Observable24){_inherits(AjaxObservable,_Observable24);function AjaxObservable(urlOrRequest){_classCallCheck(this,AjaxObservable);var _this63=_possibleConstructorReturn(this,(AjaxObservable.__proto__||Object.getPrototypeOf(AjaxObservable)).call(this));var request={async:true,createXHR:function createXHR(){return this.crossDomain?getCORSRequest.call(this):getXMLHttpRequest();},crossDomain:false,withCredentials:false,headers:{},method:'GET',responseType:'json',timeout:0};if(typeof urlOrRequest==='string'){request.url=urlOrRequest;}else{for(var prop in urlOrRequest){if(urlOrRequest.hasOwnProperty(prop)){request[prop]=urlOrRequest[prop];}}}_this63.request=request;return _this63;}_createClass(AjaxObservable,[{key:'_subscribe',value:function _subscribe(subscriber){return new AjaxSubscriber(subscriber,this.request);}}]);return AjaxObservable;}(Observable);/**
   * Creates an observable for an Ajax request with either a request object with
   * url, headers, etc or a string for a URL.
   *
   * @example
   * source = Rx.Observable.ajax('/products');
   * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
   *
   * @param {string|Object} request Can be one of the following:
   *   A string of the URL to make the Ajax call.
   *   An object with the following properties
   *   - url: URL of the request
   *   - body: The body of the request
   *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
   *   - async: Whether the request is async
   *   - headers: Optional headers
   *   - crossDomain: true if a cross domain request, else false
   *   - createXHR: a function to override if you need to use an alternate
   *   XMLHttpRequest implementation.
   *   - resultSelector: a function to use to alter the output value type of
   *   the Observable. Gets {@link AjaxResponse} as an argument.
   * @return {Observable} An observable sequence containing the XMLHttpRequest.
   * @static true
   * @name ajax
   * @owner Observable
  */AjaxObservable.create=function(){var create=function create(urlOrRequest){return new AjaxObservable(urlOrRequest);};create.get=ajaxGet;create.post=ajaxPost;create.delete=ajaxDelete;create.put=ajaxPut;create.getJSON=ajaxGetJSON;return create;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AjaxSubscriber=function(_Subscriber7){_inherits(AjaxSubscriber,_Subscriber7);function AjaxSubscriber(destination,request){_classCallCheck(this,AjaxSubscriber);var _this64=_possibleConstructorReturn(this,(AjaxSubscriber.__proto__||Object.getPrototypeOf(AjaxSubscriber)).call(this,destination));_this64.request=request;_this64.done=false;var headers=request.headers=request.headers||{};// force CORS if requested
if(!request.crossDomain&&!headers['X-Requested-With']){headers['X-Requested-With']='XMLHttpRequest';}// ensure content type is set
if(!('Content-Type'in headers)&&!(root.FormData&&request.body instanceof root.FormData)&&typeof request.body!=='undefined'){headers['Content-Type']='application/x-www-form-urlencoded; charset=UTF-8';}// properly serialize body
request.body=_this64.serializeBody(request.body,request.headers['Content-Type']);_this64.send();return _this64;}_createClass(AjaxSubscriber,[{key:'next',value:function next(e){this.done=true;var xhr=this.xhr;var request=this.request;var destination=this.destination;var response=new AjaxResponse(e,xhr,request);destination.next(response);}},{key:'send',value:function send(){var request=this.request;var _request=this.request;var user=_request.user;var method=_request.method;var url=_request.url;var async=_request.async;var password=_request.password;var headers=_request.headers;var body=_request.body;var createXHR=request.createXHR;var xhr=tryCatch(createXHR).call(request);if(xhr===errorObject){this.error(errorObject.e);}else{this.xhr=xhr;// open XHR first
var result=void 0;if(user){result=tryCatch(xhr.open).call(xhr,method,url,async,user,password);}else{result=tryCatch(xhr.open).call(xhr,method,url,async);}if(result===errorObject){this.error(errorObject.e);return null;}// timeout and responseType can be set once the XHR is open
xhr.timeout=request.timeout;xhr.responseType=request.responseType;// set headers
this.setHeaders(xhr,headers);// now set up the events
this.setupEvents(xhr,request);// finally send the request
if(body){xhr.send(body);}else{xhr.send();}}return xhr;}},{key:'serializeBody',value:function serializeBody(body,contentType){if(!body||typeof body==='string'){return body;}else if(root.FormData&&body instanceof root.FormData){return body;}if(contentType){var splitIndex=contentType.indexOf(';');if(splitIndex!==-1){contentType=contentType.substring(0,splitIndex);}}switch(contentType){case'application/x-www-form-urlencoded':return Object.keys(body).map(function(key){return encodeURI(key)+'='+encodeURI(body[key]);}).join('&');case'application/json':return JSON.stringify(body);default:return body;}}},{key:'setHeaders',value:function setHeaders(xhr,headers){for(var _key25 in headers){if(headers.hasOwnProperty(_key25)){xhr.setRequestHeader(_key25,headers[_key25]);}}}},{key:'setupEvents',value:function setupEvents(xhr,request){var progressSubscriber=request.progressSubscriber;xhr.ontimeout=function xhrTimeout(e){var subscriber=xhrTimeout.subscriber;var progressSubscriber=xhrTimeout.progressSubscriber;var request=xhrTimeout.request;if(progressSubscriber){progressSubscriber.error(e);}subscriber.error(new AjaxTimeoutError(this,request));//TODO: Make betterer.
};xhr.ontimeout.request=request;xhr.ontimeout.subscriber=this;xhr.ontimeout.progressSubscriber=progressSubscriber;if(xhr.upload&&'withCredentials'in xhr&&root.XDomainRequest){if(progressSubscriber){xhr.onprogress=function xhrProgress(e){var progressSubscriber=xhrProgress.progressSubscriber;progressSubscriber.next(e);};xhr.onprogress.progressSubscriber=progressSubscriber;}xhr.onerror=function xhrError(e){var progressSubscriber=xhrError.progressSubscriber;var subscriber=xhrError.subscriber;var request=xhrError.request;if(progressSubscriber){progressSubscriber.error(e);}subscriber.error(new AjaxError('ajax error',this,request));};xhr.onerror.request=request;xhr.onerror.subscriber=this;xhr.onerror.progressSubscriber=progressSubscriber;}xhr.onreadystatechange=function xhrReadyStateChange(e){var subscriber=xhrReadyStateChange.subscriber;var progressSubscriber=xhrReadyStateChange.progressSubscriber;var request=xhrReadyStateChange.request;if(this.readyState===4){// normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
var status=this.status===1223?204:this.status;var response=this.responseType==='text'?this.response||this.responseText:this.response;// fix status code when it is 0 (0 status is undocumented).
// Occurs when accessing file resources or on Android 4.1 stock browser
// while retrieving files from application cache.
if(status===0){status=response?200:0;}if(200<=status&&status<300){if(progressSubscriber){progressSubscriber.complete();}subscriber.next(e);subscriber.complete();}else{if(progressSubscriber){progressSubscriber.error(e);}subscriber.error(new AjaxError('ajax error '+status,this,request));}}};xhr.onreadystatechange.subscriber=this;xhr.onreadystatechange.progressSubscriber=progressSubscriber;xhr.onreadystatechange.request=request;}},{key:'unsubscribe',value:function unsubscribe(){var done=this.done;var xhr=this.xhr;if(!done&&xhr&&xhr.readyState!==4){xhr.abort();}_get(AjaxSubscriber.prototype.__proto__||Object.getPrototypeOf(AjaxSubscriber.prototype),'unsubscribe',this).call(this);}}]);return AjaxSubscriber;}(Subscriber);/**
   * A normalized AJAX response.
   *
   * @see {@link ajax}
   *
   * @class AjaxResponse
   */var AjaxResponse=function AjaxResponse(originalEvent,xhr,request){_classCallCheck(this,AjaxResponse);this.originalEvent=originalEvent;this.xhr=xhr;this.request=request;this.status=xhr.status;this.responseType=xhr.responseType||request.responseType;switch(this.responseType){case'json':if('response'in xhr){//IE does not support json as responseType, parse it internally
this.response=xhr.responseType?xhr.response:JSON.parse(xhr.response||xhr.responseText||'');}else{this.response=JSON.parse(xhr.responseText||'');}break;case'xml':this.response=xhr.responseXML;break;case'text':default:this.response='response'in xhr?xhr.response:xhr.responseText;break;}};/**
   * A normalized AJAX error.
   *
   * @see {@link ajax}
   *
   * @class AjaxError
   */var AjaxError=function(_Error3){_inherits(AjaxError,_Error3);function AjaxError(message,xhr,request){_classCallCheck(this,AjaxError);var _this65=_possibleConstructorReturn(this,(AjaxError.__proto__||Object.getPrototypeOf(AjaxError)).call(this,message));_this65.message=message;_this65.xhr=xhr;_this65.request=request;_this65.status=xhr.status;return _this65;}return AjaxError;}(Error);/**
   * @see {@link ajax}
   *
   * @class AjaxTimeoutError
   */var AjaxTimeoutError=function(_AjaxError){_inherits(AjaxTimeoutError,_AjaxError);function AjaxTimeoutError(xhr,request){_classCallCheck(this,AjaxTimeoutError);return _possibleConstructorReturn(this,(AjaxTimeoutError.__proto__||Object.getPrototypeOf(AjaxTimeoutError)).call(this,'ajax timeout',xhr,request));}return AjaxTimeoutError;}(AjaxError);var ajax=AjaxObservable.create;Observable.ajax=ajax;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var QueueAction=function(_AsyncAction){_inherits(QueueAction,_AsyncAction);function QueueAction(scheduler,work){_classCallCheck(this,QueueAction);var _this67=_possibleConstructorReturn(this,(QueueAction.__proto__||Object.getPrototypeOf(QueueAction)).call(this,scheduler,work));_this67.scheduler=scheduler;_this67.work=work;return _this67;}_createClass(QueueAction,[{key:'schedule',value:function schedule(state){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];if(delay>0){return _get(QueueAction.prototype.__proto__||Object.getPrototypeOf(QueueAction.prototype),'schedule',this).call(this,state,delay);}this.delay=delay;this.state=state;this.scheduler.flush(this);return this;}},{key:'execute',value:function execute(state,delay){return delay>0||this.closed?_get(QueueAction.prototype.__proto__||Object.getPrototypeOf(QueueAction.prototype),'execute',this).call(this,state,delay):this._execute(state,delay);}},{key:'requestAsyncId',value:function requestAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If delay is greater than 0, enqueue as an async action.
if(delay!==null&&delay>0){return _get(QueueAction.prototype.__proto__||Object.getPrototypeOf(QueueAction.prototype),'requestAsyncId',this).call(this,scheduler,id,delay);}// Otherwise flush the scheduler starting with this action.
return scheduler.flush(this);}}]);return QueueAction;}(AsyncAction);var QueueScheduler=function(_AsyncScheduler){_inherits(QueueScheduler,_AsyncScheduler);function QueueScheduler(){_classCallCheck(this,QueueScheduler);return _possibleConstructorReturn(this,(QueueScheduler.__proto__||Object.getPrototypeOf(QueueScheduler)).apply(this,arguments));}return QueueScheduler;}(AsyncScheduler);var queue=new QueueScheduler(QueueAction);/**
   * @class ReplaySubject<T>
   */var ReplaySubject=function(_Subject5){_inherits(ReplaySubject,_Subject5);function ReplaySubject(){var bufferSize=arguments.length<=0||arguments[0]===undefined?Number.POSITIVE_INFINITY:arguments[0];var windowTime=arguments.length<=1||arguments[1]===undefined?Number.POSITIVE_INFINITY:arguments[1];var scheduler=arguments[2];_classCallCheck(this,ReplaySubject);var _this69=_possibleConstructorReturn(this,(ReplaySubject.__proto__||Object.getPrototypeOf(ReplaySubject)).call(this));_this69.scheduler=scheduler;_this69._events=[];_this69._bufferSize=bufferSize<1?1:bufferSize;_this69._windowTime=windowTime<1?1:windowTime;return _this69;}_createClass(ReplaySubject,[{key:'next',value:function next(value){var now=this._getNow();this._events.push(new ReplayEvent(now,value));this._trimBufferThenGetEvents();_get(ReplaySubject.prototype.__proto__||Object.getPrototypeOf(ReplaySubject.prototype),'next',this).call(this,value);}},{key:'_subscribe',value:function _subscribe(subscriber){var _events=this._trimBufferThenGetEvents();var scheduler=this.scheduler;if(scheduler){subscriber.add(subscriber=new ObserveOnSubscriber(subscriber,scheduler));}var len=_events.length;for(var _i12=0;_i12<len&&!subscriber.closed;_i12++){subscriber.next(_events[_i12].value);}return _get(ReplaySubject.prototype.__proto__||Object.getPrototypeOf(ReplaySubject.prototype),'_subscribe',this).call(this,subscriber);}},{key:'_getNow',value:function _getNow(){return(this.scheduler||queue).now();}},{key:'_trimBufferThenGetEvents',value:function _trimBufferThenGetEvents(){var now=this._getNow();var _bufferSize=this._bufferSize;var _windowTime=this._windowTime;var _events=this._events;var eventsCount=_events.length;var spliceCount=0;// Trim events that fall out of the time window.
// Start at the front of the list. Break early once
// we encounter an event that falls within the window.
while(spliceCount<eventsCount){if(now-_events[spliceCount].time<_windowTime){break;}spliceCount++;}if(eventsCount>_bufferSize){spliceCount=Math.max(spliceCount,eventsCount-_bufferSize);}if(spliceCount>0){_events.splice(0,spliceCount);}return _events;}}]);return ReplaySubject;}(Subject);var ReplayEvent=function ReplayEvent(time,value){_classCallCheck(this,ReplayEvent);this.time=time;this.value=value;};var Object$1=root.Object;if(typeof Object$1.assign!='function'){(function(){Object$1.assign=function assignPolyfill(target){if(target===undefined||target===null){throw new TypeError('cannot convert undefined or null to object');}var output=Object$1(target);for(var _len25=arguments.length,sources=Array(_len25>1?_len25-1:0),_key26=1;_key26<_len25;_key26++){sources[_key26-1]=arguments[_key26];}var len=sources.length;for(var index=0;index<len;index++){var source=sources[index];if(source!==undefined&&source!==null){for(var _key27 in source){if(source.hasOwnProperty(_key27)){output[_key27]=source[_key27];}}}}return output;};})();}var assign=Object$1.assign;/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var WebSocketSubject=function(_AnonymousSubject){_inherits(WebSocketSubject,_AnonymousSubject);function WebSocketSubject(urlConfigOrSource,destination){_classCallCheck(this,WebSocketSubject);if(urlConfigOrSource instanceof Observable){var _this70=_possibleConstructorReturn(this,(WebSocketSubject.__proto__||Object.getPrototypeOf(WebSocketSubject)).call(this,destination,urlConfigOrSource));}else{var _this70=_possibleConstructorReturn(this,(WebSocketSubject.__proto__||Object.getPrototypeOf(WebSocketSubject)).call(this));_this70.WebSocketCtor=root.WebSocket;_this70._output=new Subject();if(typeof urlConfigOrSource==='string'){_this70.url=urlConfigOrSource;}else{// WARNING: config object could override important members here.
assign(_this70,urlConfigOrSource);}if(!_this70.WebSocketCtor){throw new Error('no WebSocket constructor can be found');}_this70.destination=new ReplaySubject();}return _possibleConstructorReturn(_this70);}_createClass(WebSocketSubject,[{key:'resultSelector',value:function resultSelector(e){return JSON.parse(e.data);}/**
       * @param urlConfigOrSource
       * @return {WebSocketSubject}
       * @static true
       * @name webSocket
       * @owner Observable
       */},{key:'lift',value:function lift(operator){var sock=new WebSocketSubject(this,this.destination);sock.operator=operator;return sock;}// TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
},{key:'multiplex',value:function multiplex(subMsg,unsubMsg,messageFilter){var self=this;return new Observable(function(observer){var result=tryCatch(subMsg)();if(result===errorObject){observer.error(errorObject.e);}else{self.next(result);}var subscription=self.subscribe(function(x){var result=tryCatch(messageFilter)(x);if(result===errorObject){observer.error(errorObject.e);}else if(result){observer.next(x);}},function(err){return observer.error(err);},function(){return observer.complete();});return function(){var result=tryCatch(unsubMsg)();if(result===errorObject){observer.error(errorObject.e);}else{self.next(result);}subscription.unsubscribe();};});}},{key:'_connectSocket',value:function _connectSocket(){var _this71=this;var WebSocketCtor=this.WebSocketCtor;var socket=this.protocol?new WebSocketCtor(this.url,this.protocol):new WebSocketCtor(this.url);this.socket=socket;var subscription=new Subscription(function(){_this71.socket=null;if(socket&&socket.readyState===1){socket.close();}});var observer=this._output;socket.onopen=function(e){var openObserver=_this71.openObserver;if(openObserver){openObserver.next(e);}var queue=_this71.destination;_this71.destination=Subscriber.create(function(x){return socket.readyState===1&&socket.send(x);},function(e){var closingObserver=_this71.closingObserver;if(closingObserver){closingObserver.next(undefined);}if(e&&e.code){socket.close(e.code,e.reason);}else{observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, '+'and an optional reason: { code: number, reason: string }'));}_this71.destination=new ReplaySubject();_this71.socket=null;},function(){var closingObserver=_this71.closingObserver;if(closingObserver){closingObserver.next(undefined);}socket.close();_this71.destination=new ReplaySubject();_this71.socket=null;});if(queue&&queue instanceof ReplaySubject){subscription.add(queue.subscribe(_this71.destination));}};socket.onerror=function(e){return observer.error(e);};socket.onclose=function(e){var closeObserver=_this71.closeObserver;if(closeObserver){closeObserver.next(e);}if(e.wasClean){observer.complete();}else{observer.error(e);}};socket.onmessage=function(e){var result=tryCatch(_this71.resultSelector)(e);if(result===errorObject){observer.error(errorObject.e);}else{observer.next(result);}};}},{key:'_subscribe',value:function _subscribe(subscriber){var _this72=this;var source=this.source;if(source){return source.subscribe(subscriber);}if(!this.socket){this._connectSocket();}var subscription=new Subscription();subscription.add(this._output.subscribe(subscriber));subscription.add(function(){var socket=_this72.socket;if(_this72._output.observers.length===0&&socket&&socket.readyState===1){socket.close();_this72.socket=null;}});return subscription;}},{key:'unsubscribe',value:function unsubscribe(){var source=this.source;var socket=this.socket;if(socket&&socket.readyState===1){socket.close();this.socket=null;}_get(WebSocketSubject.prototype.__proto__||Object.getPrototypeOf(WebSocketSubject.prototype),'unsubscribe',this).call(this);if(!source){this.destination=new ReplaySubject();}}}],[{key:'create',value:function create(urlConfigOrSource){return new WebSocketSubject(urlConfigOrSource);}}]);return WebSocketSubject;}(AnonymousSubject);var webSocket=WebSocketSubject.create;Observable.webSocket=webSocket;/**
   * Buffers the source Observable values until `closingNotifier` emits.
   *
   * <span class="informal">Collects values from the past as an array, and emits
   * that array only when another Observable emits.</span>
   *
   * <img src="./img/buffer.png" width="100%">
   *
   * Buffers the incoming Observable values until the given `closingNotifier`
   * Observable emits a value, at which point it emits the buffer on the output
   * Observable and starts a new buffer internally, awaiting the next time
   * `closingNotifier` emits.
   *
   * @example <caption>On every click, emit array of most recent interval events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var interval = Rx.Observable.interval(1000);
   * var buffered = interval.buffer(clicks);
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link bufferWhen}
   * @see {@link window}
   *
   * @param {Observable<any>} closingNotifier An Observable that signals the
   * buffer to be emitted on the output Observable.
   * @return {Observable<T[]>} An Observable of buffers, which are arrays of
   * values.
   * @method buffer
   * @owner Observable
   */function buffer(closingNotifier){return this.lift(new BufferOperator(closingNotifier));}var BufferOperator=function(){function BufferOperator(closingNotifier){_classCallCheck(this,BufferOperator);this.closingNotifier=closingNotifier;}_createClass(BufferOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new BufferSubscriber(subscriber,this.closingNotifier));}}]);return BufferOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var BufferSubscriber=function(_OuterSubscriber10){_inherits(BufferSubscriber,_OuterSubscriber10);function BufferSubscriber(destination,closingNotifier){_classCallCheck(this,BufferSubscriber);var _this73=_possibleConstructorReturn(this,(BufferSubscriber.__proto__||Object.getPrototypeOf(BufferSubscriber)).call(this,destination));_this73.buffer=[];_this73.add(subscribeToResult(_this73,closingNotifier));return _this73;}_createClass(BufferSubscriber,[{key:'_next',value:function _next(value){this.buffer.push(value);}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var buffer=this.buffer;this.buffer=[];this.destination.next(buffer);}}]);return BufferSubscriber;}(OuterSubscriber);Observable.prototype.buffer=buffer;/**
   * Buffers the source Observable values until the size hits the maximum
   * `bufferSize` given.
   *
   * <span class="informal">Collects values from the past as an array, and emits
   * that array only when its size reaches `bufferSize`.</span>
   *
   * <img src="./img/bufferCount.png" width="100%">
   *
   * Buffers a number of values from the source Observable by `bufferSize` then
   * emits the buffer and clears it, and starts a new buffer each
   * `startBufferEvery` values. If `startBufferEvery` is not provided or is
   * `null`, then new buffers are started immediately at the start of the source
   * and when each buffer closes and is emitted.
   *
   * @example <caption>Emit the last two click events as an array</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferCount(2);
   * buffered.subscribe(x => console.log(x));
   *
   * @example <caption>On every click, emit the last two click events as an array</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferCount(2, 1);
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link bufferWhen}
   * @see {@link pairwise}
   * @see {@link windowCount}
   *
   * @param {number} bufferSize The maximum size of the buffer emitted.
   * @param {number} [startBufferEvery] Interval at which to start a new buffer.
   * For example if `startBufferEvery` is `2`, then a new buffer will be started
   * on every other value from the source. A new buffer is started at the
   * beginning of the source by default.
   * @return {Observable<T[]>} An Observable of arrays of buffered values.
   * @method bufferCount
   * @owner Observable
   */function bufferCount(bufferSize){var startBufferEvery=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return this.lift(new BufferCountOperator(bufferSize,startBufferEvery));}var BufferCountOperator=function(){function BufferCountOperator(bufferSize,startBufferEvery){_classCallCheck(this,BufferCountOperator);this.bufferSize=bufferSize;this.startBufferEvery=startBufferEvery;}_createClass(BufferCountOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new BufferCountSubscriber(subscriber,this.bufferSize,this.startBufferEvery));}}]);return BufferCountOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var BufferCountSubscriber=function(_Subscriber8){_inherits(BufferCountSubscriber,_Subscriber8);function BufferCountSubscriber(destination,bufferSize,startBufferEvery){_classCallCheck(this,BufferCountSubscriber);var _this74=_possibleConstructorReturn(this,(BufferCountSubscriber.__proto__||Object.getPrototypeOf(BufferCountSubscriber)).call(this,destination));_this74.bufferSize=bufferSize;_this74.startBufferEvery=startBufferEvery;_this74.buffers=[[]];_this74.count=0;return _this74;}_createClass(BufferCountSubscriber,[{key:'_next',value:function _next(value){var count=this.count+=1;var destination=this.destination;var bufferSize=this.bufferSize;var startBufferEvery=this.startBufferEvery==null?bufferSize:this.startBufferEvery;var buffers=this.buffers;var len=buffers.length;var remove=-1;if(count%startBufferEvery===0){buffers.push([]);}for(var _i13=0;_i13<len;_i13++){var _buffer=buffers[_i13];_buffer.push(value);if(_buffer.length===bufferSize){remove=_i13;destination.next(_buffer);}}if(remove!==-1){buffers.splice(remove,1);}}},{key:'_complete',value:function _complete(){var destination=this.destination;var buffers=this.buffers;while(buffers.length>0){var _buffer2=buffers.shift();if(_buffer2.length>0){destination.next(_buffer2);}}_get(BufferCountSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferCountSubscriber.prototype),'_complete',this).call(this);}}]);return BufferCountSubscriber;}(Subscriber);Observable.prototype.bufferCount=bufferCount;/**
   * Buffers the source Observable values for a specific time period.
   *
   * <span class="informal">Collects values from the past as an array, and emits
   * those arrays periodically in time.</span>
   *
   * <img src="./img/bufferTime.png" width="100%">
   *
   * Buffers values from the source for a specific time duration `bufferTimeSpan`.
   * Unless the optional argument `bufferCreationInterval` is given, it emits and
   * resets the buffer every `bufferTimeSpan` milliseconds. If
   * `bufferCreationInterval` is given, this operator opens the buffer every
   * `bufferCreationInterval` milliseconds and closes (emits and resets) the
   * buffer every `bufferTimeSpan` milliseconds. When the optional argument
   * `maxBufferSize` is specified, the buffer will be closed either after
   * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
   *
   * @example <caption>Every second, emit an array of the recent click events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferTime(1000);
   * buffered.subscribe(x => console.log(x));
   *
   * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferTime(2000, 5000);
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   * @see {@link bufferToggle}
   * @see {@link bufferWhen}
   * @see {@link windowTime}
   *
   * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
   * @param {number} [bufferCreationInterval] The interval at which to start new
   * buffers.
   * @param {number} [maxBufferSize] The maximum buffer size.
   * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
   * intervals that determine buffer boundaries.
   * @return {Observable<T[]>} An observable of arrays of buffered values.
   * @method bufferTime
   * @owner Observable
   */function bufferTime(bufferTimeSpan){var length=arguments.length;var scheduler=async;if(isScheduler(arguments[arguments.length-1])){scheduler=arguments[arguments.length-1];length--;}var bufferCreationInterval=null;if(length>=2){bufferCreationInterval=arguments[1];}var maxBufferSize=Number.POSITIVE_INFINITY;if(length>=3){maxBufferSize=arguments[2];}return this.lift(new BufferTimeOperator(bufferTimeSpan,bufferCreationInterval,maxBufferSize,scheduler));}var BufferTimeOperator=function(){function BufferTimeOperator(bufferTimeSpan,bufferCreationInterval,maxBufferSize,scheduler){_classCallCheck(this,BufferTimeOperator);this.bufferTimeSpan=bufferTimeSpan;this.bufferCreationInterval=bufferCreationInterval;this.maxBufferSize=maxBufferSize;this.scheduler=scheduler;}_createClass(BufferTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new BufferTimeSubscriber(subscriber,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler));}}]);return BufferTimeOperator;}();var Context=function Context(){_classCallCheck(this,Context);this.buffer=[];};/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var BufferTimeSubscriber=function(_Subscriber9){_inherits(BufferTimeSubscriber,_Subscriber9);function BufferTimeSubscriber(destination,bufferTimeSpan,bufferCreationInterval,maxBufferSize,scheduler){_classCallCheck(this,BufferTimeSubscriber);var _this75=_possibleConstructorReturn(this,(BufferTimeSubscriber.__proto__||Object.getPrototypeOf(BufferTimeSubscriber)).call(this,destination));_this75.bufferTimeSpan=bufferTimeSpan;_this75.bufferCreationInterval=bufferCreationInterval;_this75.maxBufferSize=maxBufferSize;_this75.scheduler=scheduler;_this75.contexts=[];var context=_this75.openContext();_this75.timespanOnly=bufferCreationInterval==null||bufferCreationInterval<0;if(_this75.timespanOnly){var timeSpanOnlyState={subscriber:_this75,context:context,bufferTimeSpan:bufferTimeSpan};_this75.add(context.closeAction=scheduler.schedule(dispatchBufferTimeSpanOnly,bufferTimeSpan,timeSpanOnlyState));}else{var closeState={subscriber:_this75,context:context};var creationState={bufferTimeSpan:bufferTimeSpan,bufferCreationInterval:bufferCreationInterval,subscriber:_this75,scheduler:scheduler};_this75.add(context.closeAction=scheduler.schedule(dispatchBufferClose,bufferTimeSpan,closeState));_this75.add(scheduler.schedule(dispatchBufferCreation,bufferCreationInterval,creationState));}return _this75;}_createClass(BufferTimeSubscriber,[{key:'_next',value:function _next(value){var contexts=this.contexts;var len=contexts.length;var filledBufferContext=void 0;for(var _i14=0;_i14<len;_i14++){var context=contexts[_i14];var _buffer3=context.buffer;_buffer3.push(value);if(_buffer3.length==this.maxBufferSize){filledBufferContext=context;}}if(filledBufferContext){this.onBufferFull(filledBufferContext);}}},{key:'_error',value:function _error(err){this.contexts.length=0;_get(BufferTimeSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferTimeSubscriber.prototype),'_error',this).call(this,err);}},{key:'_complete',value:function _complete(){var contexts=this.contexts;var destination=this.destination;while(contexts.length>0){var context=contexts.shift();destination.next(context.buffer);}_get(BufferTimeSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferTimeSubscriber.prototype),'_complete',this).call(this);}},{key:'_unsubscribe',value:function _unsubscribe(){this.contexts=null;}},{key:'onBufferFull',value:function onBufferFull(context){this.closeContext(context);var closeAction=context.closeAction;closeAction.unsubscribe();this.remove(closeAction);if(this.timespanOnly){context=this.openContext();var bufferTimeSpan=this.bufferTimeSpan;var timeSpanOnlyState={subscriber:this,context:context,bufferTimeSpan:bufferTimeSpan};this.add(context.closeAction=this.scheduler.schedule(dispatchBufferTimeSpanOnly,bufferTimeSpan,timeSpanOnlyState));}}},{key:'openContext',value:function openContext(){var context=new Context();this.contexts.push(context);return context;}},{key:'closeContext',value:function closeContext(context){this.destination.next(context.buffer);var contexts=this.contexts;var spliceIndex=contexts?contexts.indexOf(context):-1;if(spliceIndex>=0){contexts.splice(contexts.indexOf(context),1);}}}]);return BufferTimeSubscriber;}(Subscriber);function dispatchBufferTimeSpanOnly(state){var subscriber=state.subscriber;var prevContext=state.context;if(prevContext){subscriber.closeContext(prevContext);}if(!subscriber.closed){state.context=subscriber.openContext();state.context.closeAction=this.schedule(state,state.bufferTimeSpan);}}function dispatchBufferCreation(state){var bufferCreationInterval=state.bufferCreationInterval;var bufferTimeSpan=state.bufferTimeSpan;var subscriber=state.subscriber;var scheduler=state.scheduler;var context=subscriber.openContext();var action=this;if(!subscriber.closed){subscriber.add(context.closeAction=scheduler.schedule(dispatchBufferClose,bufferTimeSpan,{subscriber:subscriber,context:context}));action.schedule(state,bufferCreationInterval);}}function dispatchBufferClose(arg){var subscriber=arg.subscriber;var context=arg.context;subscriber.closeContext(context);}Observable.prototype.bufferTime=bufferTime;/**
   * Buffers the source Observable values starting from an emission from
   * `openings` and ending when the output of `closingSelector` emits.
   *
   * <span class="informal">Collects values from the past as an array. Starts
   * collecting only when `opening` emits, and calls the `closingSelector`
   * function to get an Observable that tells when to close the buffer.</span>
   *
   * <img src="./img/bufferToggle.png" width="100%">
   *
   * Buffers values from the source by opening the buffer via signals from an
   * Observable provided to `openings`, and closing and sending the buffers when
   * a Subscribable or Promise returned by the `closingSelector` function emits.
   *
   * @example <caption>Every other second, emit the click events from the next 500ms</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var openings = Rx.Observable.interval(1000);
   * var buffered = clicks.bufferToggle(openings, i =>
   *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
   * );
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferWhen}
   * @see {@link windowToggle}
   *
   * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
   * buffers.
   * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
   * the value emitted by the `openings` observable and returns a Subscribable or Promise,
   * which, when it emits, signals that the associated buffer should be emitted
   * and cleared.
   * @return {Observable<T[]>} An observable of arrays of buffered values.
   * @method bufferToggle
   * @owner Observable
   */function bufferToggle(openings,closingSelector){return this.lift(new BufferToggleOperator(openings,closingSelector));}var BufferToggleOperator=function(){function BufferToggleOperator(openings,closingSelector){_classCallCheck(this,BufferToggleOperator);this.openings=openings;this.closingSelector=closingSelector;}_createClass(BufferToggleOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new BufferToggleSubscriber(subscriber,this.openings,this.closingSelector));}}]);return BufferToggleOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var BufferToggleSubscriber=function(_OuterSubscriber11){_inherits(BufferToggleSubscriber,_OuterSubscriber11);function BufferToggleSubscriber(destination,openings,closingSelector){_classCallCheck(this,BufferToggleSubscriber);var _this76=_possibleConstructorReturn(this,(BufferToggleSubscriber.__proto__||Object.getPrototypeOf(BufferToggleSubscriber)).call(this,destination));_this76.openings=openings;_this76.closingSelector=closingSelector;_this76.contexts=[];_this76.add(subscribeToResult(_this76,openings));return _this76;}_createClass(BufferToggleSubscriber,[{key:'_next',value:function _next(value){var contexts=this.contexts;var len=contexts.length;for(var _i15=0;_i15<len;_i15++){contexts[_i15].buffer.push(value);}}},{key:'_error',value:function _error(err){var contexts=this.contexts;while(contexts.length>0){var context=contexts.shift();context.subscription.unsubscribe();context.buffer=null;context.subscription=null;}this.contexts=null;_get(BufferToggleSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferToggleSubscriber.prototype),'_error',this).call(this,err);}},{key:'_complete',value:function _complete(){var contexts=this.contexts;while(contexts.length>0){var context=contexts.shift();this.destination.next(context.buffer);context.subscription.unsubscribe();context.buffer=null;context.subscription=null;}this.contexts=null;_get(BufferToggleSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferToggleSubscriber.prototype),'_complete',this).call(this);}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){outerValue?this.closeBuffer(outerValue):this.openBuffer(innerValue);}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.closeBuffer(innerSub.context);}},{key:'openBuffer',value:function openBuffer(value){try{var closingSelector=this.closingSelector;var closingNotifier=closingSelector.call(this,value);if(closingNotifier){this.trySubscribe(closingNotifier);}}catch(err){this._error(err);}}},{key:'closeBuffer',value:function closeBuffer(context){var contexts=this.contexts;if(contexts&&context){var _buffer4=context.buffer;var subscription=context.subscription;this.destination.next(_buffer4);contexts.splice(contexts.indexOf(context),1);this.remove(subscription);subscription.unsubscribe();}}},{key:'trySubscribe',value:function trySubscribe(closingNotifier){var contexts=this.contexts;var buffer=[];var subscription=new Subscription();var context={buffer:buffer,subscription:subscription};contexts.push(context);var innerSubscription=subscribeToResult(this,closingNotifier,context);if(!innerSubscription||innerSubscription.closed){this.closeBuffer(context);}else{innerSubscription.context=context;this.add(innerSubscription);subscription.add(innerSubscription);}}}]);return BufferToggleSubscriber;}(OuterSubscriber);Observable.prototype.bufferToggle=bufferToggle;/**
   * Buffers the source Observable values, using a factory function of closing
   * Observables to determine when to close, emit, and reset the buffer.
   *
   * <span class="informal">Collects values from the past as an array. When it
   * starts collecting values, it calls a function that returns an Observable that
   * tells when to close the buffer and restart collecting.</span>
   *
   * <img src="./img/bufferWhen.png" width="100%">
   *
   * Opens a buffer immediately, then closes the buffer when the observable
   * returned by calling `closingSelector` function emits a value. When it closes
   * the buffer, it immediately opens a new buffer and repeats the process.
   *
   * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var buffered = clicks.bufferWhen(() =>
   *   Rx.Observable.interval(1000 + Math.random() * 4000)
   * );
   * buffered.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   * @see {@link bufferTime}
   * @see {@link bufferToggle}
   * @see {@link windowWhen}
   *
   * @param {function(): Observable} closingSelector A function that takes no
   * arguments and returns an Observable that signals buffer closure.
   * @return {Observable<T[]>} An observable of arrays of buffered values.
   * @method bufferWhen
   * @owner Observable
   */function bufferWhen(closingSelector){return this.lift(new BufferWhenOperator(closingSelector));}var BufferWhenOperator=function(){function BufferWhenOperator(closingSelector){_classCallCheck(this,BufferWhenOperator);this.closingSelector=closingSelector;}_createClass(BufferWhenOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new BufferWhenSubscriber(subscriber,this.closingSelector));}}]);return BufferWhenOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var BufferWhenSubscriber=function(_OuterSubscriber12){_inherits(BufferWhenSubscriber,_OuterSubscriber12);function BufferWhenSubscriber(destination,closingSelector){_classCallCheck(this,BufferWhenSubscriber);var _this77=_possibleConstructorReturn(this,(BufferWhenSubscriber.__proto__||Object.getPrototypeOf(BufferWhenSubscriber)).call(this,destination));_this77.closingSelector=closingSelector;_this77.subscribing=false;_this77.openBuffer();return _this77;}_createClass(BufferWhenSubscriber,[{key:'_next',value:function _next(value){this.buffer.push(value);}},{key:'_complete',value:function _complete(){var buffer=this.buffer;if(buffer){this.destination.next(buffer);}_get(BufferWhenSubscriber.prototype.__proto__||Object.getPrototypeOf(BufferWhenSubscriber.prototype),'_complete',this).call(this);}},{key:'_unsubscribe',value:function _unsubscribe(){this.buffer=null;this.subscribing=false;}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.openBuffer();}},{key:'notifyComplete',value:function notifyComplete(){if(this.subscribing){this.complete();}else{this.openBuffer();}}},{key:'openBuffer',value:function openBuffer(){var closingSubscription=this.closingSubscription;if(closingSubscription){this.remove(closingSubscription);closingSubscription.unsubscribe();}var buffer=this.buffer;if(this.buffer){this.destination.next(buffer);}this.buffer=[];var closingNotifier=tryCatch(this.closingSelector)();if(closingNotifier===errorObject){this.error(errorObject.e);}else{closingSubscription=new Subscription();this.closingSubscription=closingSubscription;this.add(closingSubscription);this.subscribing=true;closingSubscription.add(subscribeToResult(this,closingNotifier));this.subscribing=false;}}}]);return BufferWhenSubscriber;}(OuterSubscriber);Observable.prototype.bufferWhen=bufferWhen;/**
   * @param bufferSize
   * @param windowTime
   * @param scheduler
   * @return {Observable<any>}
   * @method cache
   * @owner Observable
   */function cache(){var bufferSize=arguments.length<=0||arguments[0]===undefined?Number.POSITIVE_INFINITY:arguments[0];var windowTime=arguments.length<=1||arguments[1]===undefined?Number.POSITIVE_INFINITY:arguments[1];var scheduler=arguments[2];var subject=void 0;var source=this;var refs=0;var outerSub=void 0;var getSubject=function getSubject(){subject=new ReplaySubject(bufferSize,windowTime,scheduler);return subject;};return new Observable(function(observer){if(!subject){subject=getSubject();outerSub=source.subscribe(function(value){return subject.next(value);},function(err){var s=subject;subject=null;s.error(err);},function(){return subject.complete();});}refs++;if(!subject){subject=getSubject();}var innerSub=subject.subscribe(observer);return function(){refs--;if(innerSub){innerSub.unsubscribe();}if(refs===0){outerSub.unsubscribe();}};});}Observable.prototype.cache=cache;/**
   * Catches errors on the observable to be handled by returning a new observable or throwing an error.
   * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
   *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
   *  is returned by the `selector` will be used to continue the observable chain.
   * @return {Observable} an observable that originates from either the source or the observable returned by the
   *  catch `selector` function.
   * @method catch
   * @owner Observable
   */function _catch(selector){var operator=new CatchOperator(selector);var caught=this.lift(operator);return operator.caught=caught;}var CatchOperator=function(){function CatchOperator(selector){_classCallCheck(this,CatchOperator);this.selector=selector;}_createClass(CatchOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new CatchSubscriber(subscriber,this.selector,this.caught));}}]);return CatchOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var CatchSubscriber=function(_OuterSubscriber13){_inherits(CatchSubscriber,_OuterSubscriber13);function CatchSubscriber(destination,selector,caught){_classCallCheck(this,CatchSubscriber);var _this78=_possibleConstructorReturn(this,(CatchSubscriber.__proto__||Object.getPrototypeOf(CatchSubscriber)).call(this,destination));_this78.selector=selector;_this78.caught=caught;return _this78;}// NOTE: overriding `error` instead of `_error` because we don't want
// to have this flag this subscriber as `isStopped`.
_createClass(CatchSubscriber,[{key:'error',value:function error(err){if(!this.isStopped){var result=void 0;try{result=this.selector(err,this.caught);}catch(err){this.destination.error(err);return;}this.unsubscribe();this.destination.remove(this);subscribeToResult(this,result);}}}]);return CatchSubscriber;}(OuterSubscriber);Observable.prototype.catch=_catch;/**
   * Converts a higher-order Observable into a first-order Observable by waiting
   * for the outer Observable to complete, then applying {@link combineLatest}.
   *
   * <span class="informal">Flattens an Observable-of-Observables by applying
   * {@link combineLatest} when the Observable-of-Observables completes.</span>
   *
   * <img src="./img/combineAll.png" width="100%">
   *
   * Takes an Observable of Observables, and collects all Observables from it.
   * Once the outer Observable completes, it subscribes to all collected
   * Observables and combines their values using the {@link combineLatest}
   * strategy, such that:
   * - Every time an inner Observable emits, the output Observable emits.
   * - When the returned observable emits, it emits all of the latest values by:
   *   - If a `project` function is provided, it is called with each recent value
   *     from each inner Observable in whatever order they arrived, and the result
   *     of the `project` function is what is emitted by the output Observable.
   *   - If there is no `project` function, an array of all of the most recent
   *     values is emitted by the output Observable.
   *
   * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map(ev =>
   *   Rx.Observable.interval(Math.random()*2000).take(3)
   * ).take(2);
   * var result = higherOrder.combineAll();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link combineLatest}
   * @see {@link mergeAll}
   *
   * @param {function} [project] An optional function to map the most recent
   * values from each inner Observable into a new result. Takes each of the most
   * recent values from each collected inner Observable as arguments, in order.
   * @return {Observable} An Observable of projected results or arrays of recent
   * values.
   * @method combineAll
   * @owner Observable
   */function combineAll(project){return this.lift(new CombineLatestOperator(project));}Observable.prototype.combineAll=combineAll;Observable.prototype.combineLatest=combineLatest$1;Observable.prototype.concat=concat$1;/**
   * Converts a higher-order Observable into a first-order Observable by
   * concatenating the inner Observables in order.
   *
   * <span class="informal">Flattens an Observable-of-Observables by putting one
   * inner Observable after the other.</span>
   *
   * <img src="./img/concatAll.png" width="100%">
   *
   * Joins every Observable emitted by the source (a higher-order Observable), in
   * a serial fashion. It subscribes to each inner Observable only after the
   * previous inner Observable has completed, and merges all of their values into
   * the returned observable.
   *
   * __Warning:__ If the source Observable emits Observables quickly and
   * endlessly, and the inner Observables it emits generally complete slower than
   * the source emits, you can run into memory issues as the incoming Observables
   * collect in an unbounded buffer.
   *
   * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
   * to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
   * var firstOrder = higherOrder.concatAll();
   * firstOrder.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concat}
   * @see {@link concatMap}
   * @see {@link concatMapTo}
   * @see {@link exhaust}
   * @see {@link mergeAll}
   * @see {@link switch}
   * @see {@link zipAll}
   *
   * @return {Observable} An Observable emitting values from all the inner
   * Observables concatenated.
   * @method concatAll
   * @owner Observable
   */function concatAll(){return this.lift(new MergeAllOperator(1));}Observable.prototype.concatAll=concatAll;/**
   * Projects each source value to an Observable which is merged in the output
   * Observable.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link mergeAll}.</span>
   *
   * <img src="./img/mergeMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an Observable, and then merging those resulting Observables and
   * emitting the results of this merger.
   *
   * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
   * var letters = Rx.Observable.of('a', 'b', 'c');
   * var result = letters.mergeMap(x =>
   *   Rx.Observable.interval(1000).map(i => x+i)
   * );
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMap}
   * @see {@link exhaustMap}
   * @see {@link merge}
   * @see {@link mergeAll}
   * @see {@link mergeMapTo}
   * @see {@link mergeScan}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): Observable} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and merging the results of the Observables obtained
   * from this transformation.
   * @method mergeMap
   * @owner Observable
   */function mergeMap(project,resultSelector){var concurrent=arguments.length<=2||arguments[2]===undefined?Number.POSITIVE_INFINITY:arguments[2];if(typeof resultSelector==='number'){concurrent=resultSelector;resultSelector=null;}return this.lift(new MergeMapOperator(project,resultSelector,concurrent));}var MergeMapOperator=function(){function MergeMapOperator(project,resultSelector){var concurrent=arguments.length<=2||arguments[2]===undefined?Number.POSITIVE_INFINITY:arguments[2];_classCallCheck(this,MergeMapOperator);this.project=project;this.resultSelector=resultSelector;this.concurrent=concurrent;}_createClass(MergeMapOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new MergeMapSubscriber(observer,this.project,this.resultSelector,this.concurrent));}}]);return MergeMapOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MergeMapSubscriber=function(_OuterSubscriber14){_inherits(MergeMapSubscriber,_OuterSubscriber14);function MergeMapSubscriber(destination,project,resultSelector){var concurrent=arguments.length<=3||arguments[3]===undefined?Number.POSITIVE_INFINITY:arguments[3];_classCallCheck(this,MergeMapSubscriber);var _this79=_possibleConstructorReturn(this,(MergeMapSubscriber.__proto__||Object.getPrototypeOf(MergeMapSubscriber)).call(this,destination));_this79.project=project;_this79.resultSelector=resultSelector;_this79.concurrent=concurrent;_this79.hasCompleted=false;_this79.buffer=[];_this79.active=0;_this79.index=0;return _this79;}_createClass(MergeMapSubscriber,[{key:'_next',value:function _next(value){if(this.active<this.concurrent){this._tryNext(value);}else{this.buffer.push(value);}}},{key:'_tryNext',value:function _tryNext(value){var result=void 0;var index=this.index++;try{result=this.project(value,index);}catch(err){this.destination.error(err);return;}this.active++;this._innerSub(result,value,index);}},{key:'_innerSub',value:function _innerSub(ish,value,index){this.add(subscribeToResult(this,ish,value,index));}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.active===0&&this.buffer.length===0){this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){if(this.resultSelector){this._notifyResultSelector(outerValue,innerValue,outerIndex,innerIndex);}else{this.destination.next(innerValue);}}},{key:'_notifyResultSelector',value:function _notifyResultSelector(outerValue,innerValue,outerIndex,innerIndex){var result=void 0;try{result=this.resultSelector(outerValue,innerValue,outerIndex,innerIndex);}catch(err){this.destination.error(err);return;}this.destination.next(result);}},{key:'notifyComplete',value:function notifyComplete(innerSub){var buffer=this.buffer;this.remove(innerSub);this.active--;if(buffer.length>0){this._next(buffer.shift());}else if(this.active===0&&this.hasCompleted){this.destination.complete();}}}]);return MergeMapSubscriber;}(OuterSubscriber);/**
   * Projects each source value to an Observable which is merged in the output
   * Observable, in a serialized fashion waiting for each one to complete before
   * merging the next.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link concatAll}.</span>
   *
   * <img src="./img/concatMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. Each new inner Observable is
   * concatenated with the previous inner Observable.
   *
   * __Warning:__ if source values arrive endlessly and faster than their
   * corresponding inner Observables can complete, it will result in memory issues
   * as inner Observables amass in an unbounded buffer waiting for their turn to
   * be subscribed to.
   *
   * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
   * to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concat}
   * @see {@link concatAll}
   * @see {@link concatMapTo}
   * @see {@link exhaustMap}
   * @see {@link mergeMap}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): Observable} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @return {Observable} an observable of values merged from the projected
   * Observables as they were subscribed to, one at a time. Optionally, these
   * values may have been projected from a passed `projectResult` argument.
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and taking values from each projected inner
   * Observable sequentially.
   * @method concatMap
   * @owner Observable
   */function concatMap(project,resultSelector){return this.lift(new MergeMapOperator(project,resultSelector,1));}Observable.prototype.concatMap=concatMap;/**
   * Projects each source value to the same Observable which is merged multiple
   * times in the output Observable.
   *
   * <span class="informal">It's like {@link mergeMap}, but maps each value always
   * to the same inner Observable.</span>
   *
   * <img src="./img/mergeMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then merges those resulting Observables into one
   * single Observable, which is the output Observable.
   *
   * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMapTo}
   * @see {@link merge}
   * @see {@link mergeAll}
   * @see {@link mergeMap}
   * @see {@link mergeScan}
   * @see {@link switchMapTo}
   *
   * @param {Observable} innerObservable An Observable to replace each value from
   * the source Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @return {Observable} An Observable that emits items from the given
   * `innerObservable` (and optionally transformed through `resultSelector`) every
   * time a value is emitted on the source Observable.
   * @method mergeMapTo
   * @owner Observable
   */function mergeMapTo(innerObservable,resultSelector){var concurrent=arguments.length<=2||arguments[2]===undefined?Number.POSITIVE_INFINITY:arguments[2];if(typeof resultSelector==='number'){concurrent=resultSelector;resultSelector=null;}return this.lift(new MergeMapToOperator(innerObservable,resultSelector,concurrent));}// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator=function(){function MergeMapToOperator(ish,resultSelector){var concurrent=arguments.length<=2||arguments[2]===undefined?Number.POSITIVE_INFINITY:arguments[2];_classCallCheck(this,MergeMapToOperator);this.ish=ish;this.resultSelector=resultSelector;this.concurrent=concurrent;}_createClass(MergeMapToOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new MergeMapToSubscriber(observer,this.ish,this.resultSelector,this.concurrent));}}]);return MergeMapToOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MergeMapToSubscriber=function(_OuterSubscriber15){_inherits(MergeMapToSubscriber,_OuterSubscriber15);function MergeMapToSubscriber(destination,ish,resultSelector){var concurrent=arguments.length<=3||arguments[3]===undefined?Number.POSITIVE_INFINITY:arguments[3];_classCallCheck(this,MergeMapToSubscriber);var _this80=_possibleConstructorReturn(this,(MergeMapToSubscriber.__proto__||Object.getPrototypeOf(MergeMapToSubscriber)).call(this,destination));_this80.ish=ish;_this80.resultSelector=resultSelector;_this80.concurrent=concurrent;_this80.hasCompleted=false;_this80.buffer=[];_this80.active=0;_this80.index=0;return _this80;}_createClass(MergeMapToSubscriber,[{key:'_next',value:function _next(value){if(this.active<this.concurrent){var resultSelector=this.resultSelector;var index=this.index++;var ish=this.ish;var destination=this.destination;this.active++;this._innerSub(ish,destination,resultSelector,value,index);}else{this.buffer.push(value);}}},{key:'_innerSub',value:function _innerSub(ish,destination,resultSelector,value,index){this.add(subscribeToResult(this,ish,value,index));}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.active===0&&this.buffer.length===0){this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var resultSelector=this.resultSelector;var destination=this.destination;if(resultSelector){this.trySelectResult(outerValue,innerValue,outerIndex,innerIndex);}else{destination.next(innerValue);}}},{key:'trySelectResult',value:function trySelectResult(outerValue,innerValue,outerIndex,innerIndex){var resultSelector=this.resultSelector;var destination=this.destination;var result=void 0;try{result=resultSelector(outerValue,innerValue,outerIndex,innerIndex);}catch(err){destination.error(err);return;}destination.next(result);}},{key:'notifyError',value:function notifyError(err){this.destination.error(err);}},{key:'notifyComplete',value:function notifyComplete(innerSub){var buffer=this.buffer;this.remove(innerSub);this.active--;if(buffer.length>0){this._next(buffer.shift());}else if(this.active===0&&this.hasCompleted){this.destination.complete();}}}]);return MergeMapToSubscriber;}(OuterSubscriber);/**
   * Projects each source value to the same Observable which is merged multiple
   * times in a serialized fashion on the output Observable.
   *
   * <span class="informal">It's like {@link concatMap}, but maps each value
   * always to the same inner Observable.</span>
   *
   * <img src="./img/concatMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then flattens those resulting Observables into one
   * single Observable, which is the output Observable. Each new `innerObservable`
   * instance emitted on the output Observable is concatenated with the previous
   * `innerObservable` instance.
   *
   * __Warning:__ if source values arrive endlessly and faster than their
   * corresponding inner Observables can complete, it will result in memory issues
   * as inner Observables amass in an unbounded buffer waiting for their turn to
   * be subscribed to.
   *
   * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
   * set to `1`.
   *
   * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concat}
   * @see {@link concatAll}
   * @see {@link concatMap}
   * @see {@link mergeMapTo}
   * @see {@link switchMapTo}
   *
   * @param {Observable} innerObservable An Observable to replace each value from
   * the source Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @return {Observable} An observable of values merged together by joining the
   * passed observable with itself, one after the other, for each value emitted
   * from the source.
   * @method concatMapTo
   * @owner Observable
   */function concatMapTo(innerObservable,resultSelector){return this.lift(new MergeMapToOperator(innerObservable,resultSelector,1));}Observable.prototype.concatMapTo=concatMapTo;/**
   * Counts the number of emissions on the source and emits that number when the
   * source completes.
   *
   * <span class="informal">Tells how many values were emitted, when the source
   * completes.</span>
   *
   * <img src="./img/count.png" width="100%">
   *
   * `count` transforms an Observable that emits values into an Observable that
   * emits a single value that represents the number of values emitted by the
   * source Observable. If the source Observable terminates with an error, `count`
   * will pass this error notification along without emitting an value first. If
   * the source Observable does not terminate at all, `count` will neither emit
   * a value nor terminate. This operator takes an optional `predicate` function
   * as argument, in which case the output emission will represent the number of
   * source values that matched `true` with the `predicate`.
   *
   * @example <caption>Counts how many seconds have passed before the first click happened</caption>
   * var seconds = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var secondsBeforeClick = seconds.takeUntil(clicks);
   * var result = secondsBeforeClick.count();
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
   * var numbers = Rx.Observable.range(1, 7);
   * var result = numbers.count(i => i % 2 === 1);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link max}
   * @see {@link min}
   * @see {@link reduce}
   *
   * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
   * boolean function to select what values are to be counted. It is provided with
   * arguments of:
   * - `value`: the value from the source Observable.
   * - `index`: the (zero-based) "index" of the value from the source Observable.
   * - `source`: the source Observable instance itself.
   * @return {Observable} An Observable of one number that represents the count as
   * described above.
   * @method count
   * @owner Observable
   */function count(predicate){return this.lift(new CountOperator(predicate,this));}var CountOperator=function(){function CountOperator(predicate,source){_classCallCheck(this,CountOperator);this.predicate=predicate;this.source=source;}_createClass(CountOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new CountSubscriber(subscriber,this.predicate,this.source));}}]);return CountOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var CountSubscriber=function(_Subscriber10){_inherits(CountSubscriber,_Subscriber10);function CountSubscriber(destination,predicate,source){_classCallCheck(this,CountSubscriber);var _this81=_possibleConstructorReturn(this,(CountSubscriber.__proto__||Object.getPrototypeOf(CountSubscriber)).call(this,destination));_this81.predicate=predicate;_this81.source=source;_this81.count=0;_this81.index=0;return _this81;}_createClass(CountSubscriber,[{key:'_next',value:function _next(value){if(this.predicate){this._tryPredicate(value);}else{this.count++;}}},{key:'_tryPredicate',value:function _tryPredicate(value){var result=void 0;try{result=this.predicate(value,this.index++,this.source);}catch(err){this.destination.error(err);return;}if(result){this.count++;}}},{key:'_complete',value:function _complete(){this.destination.next(this.count);this.destination.complete();}}]);return CountSubscriber;}(Subscriber);Observable.prototype.count=count;/**
   * Converts an Observable of {@link Notification} objects into the emissions
   * that they represent.
   *
   * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
   * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
   *
   * <img src="./img/dematerialize.png" width="100%">
   *
   * `dematerialize` is assumed to operate an Observable that only emits
   * {@link Notification} objects as `next` emissions, and does not emit any
   * `error`. Such Observable is the output of a `materialize` operation. Those
   * notifications are then unwrapped using the metadata they contain, and emitted
   * as `next`, `error`, and `complete` on the output Observable.
   *
   * Use this operator in conjunction with {@link materialize}.
   *
   * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
   * var notifA = new Rx.Notification('N', 'A');
   * var notifB = new Rx.Notification('N', 'B');
   * var notifE = new Rx.Notification('E', void 0,
   *   new TypeError('x.toUpperCase is not a function')
   * );
   * var materialized = Rx.Observable.of(notifA, notifB, notifE);
   * var upperCase = materialized.dematerialize();
   * upperCase.subscribe(x => console.log(x), e => console.error(e));
   *
   * @see {@link Notification}
   * @see {@link materialize}
   *
   * @return {Observable} An Observable that emits items and notifications
   * embedded in Notification objects emitted by the source Observable.
   * @method dematerialize
   * @owner Observable
   */function dematerialize(){return this.lift(new DeMaterializeOperator());}var DeMaterializeOperator=function(){function DeMaterializeOperator(){_classCallCheck(this,DeMaterializeOperator);}_createClass(DeMaterializeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DeMaterializeSubscriber(subscriber));}}]);return DeMaterializeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DeMaterializeSubscriber=function(_Subscriber11){_inherits(DeMaterializeSubscriber,_Subscriber11);function DeMaterializeSubscriber(destination){_classCallCheck(this,DeMaterializeSubscriber);return _possibleConstructorReturn(this,(DeMaterializeSubscriber.__proto__||Object.getPrototypeOf(DeMaterializeSubscriber)).call(this,destination));}_createClass(DeMaterializeSubscriber,[{key:'_next',value:function _next(value){value.observe(this.destination);}}]);return DeMaterializeSubscriber;}(Subscriber);Observable.prototype.dematerialize=dematerialize;/**
   * Emits a value from the source Observable only after a particular time span
   * determined by another Observable has passed without another source emission.
   *
   * <span class="informal">It's like {@link debounceTime}, but the time span of
   * emission silence is determined by a second Observable.</span>
   *
   * <img src="./img/debounce.png" width="100%">
   *
   * `debounce` delays values emitted by the source Observable, but drops previous
   * pending delayed emissions if a new value arrives on the source Observable.
   * This operator keeps track of the most recent value from the source
   * Observable, and spawns a duration Observable by calling the
   * `durationSelector` function. The value is emitted only when the duration
   * Observable emits a value or completes, and if no other value was emitted on
   * the source Observable since the duration Observable was spawned. If a new
   * value appears before the duration Observable emits, the previous value will
   * be dropped and will not be emitted on the output Observable.
   *
   * Like {@link debounceTime}, this is a rate-limiting operator, and also a
   * delay-like operator since output emissions do not necessarily occur at the
   * same time as they did on the source Observable.
   *
   * @example <caption>Emit the most recent click after a burst of clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.debounce(() => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounceTime}
   * @see {@link delayWhen}
   * @see {@link throttle}
   *
   * @param {function(value: T): Observable|Promise} durationSelector A function
   * that receives a value from the source Observable, for computing the timeout
   * duration for each source value, returned as an Observable or a Promise.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified duration Observable returned by
   * `durationSelector`, and may drop some values if they occur too frequently.
   * @method debounce
   * @owner Observable
   */function debounce(durationSelector){return this.lift(new DebounceOperator(durationSelector));}var DebounceOperator=function(){function DebounceOperator(durationSelector){_classCallCheck(this,DebounceOperator);this.durationSelector=durationSelector;}_createClass(DebounceOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DebounceSubscriber(subscriber,this.durationSelector));}}]);return DebounceOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DebounceSubscriber=function(_OuterSubscriber16){_inherits(DebounceSubscriber,_OuterSubscriber16);function DebounceSubscriber(destination,durationSelector){_classCallCheck(this,DebounceSubscriber);var _this83=_possibleConstructorReturn(this,(DebounceSubscriber.__proto__||Object.getPrototypeOf(DebounceSubscriber)).call(this,destination));_this83.durationSelector=durationSelector;_this83.hasValue=false;_this83.durationSubscription=null;return _this83;}_createClass(DebounceSubscriber,[{key:'_next',value:function _next(value){try{var result=this.durationSelector.call(this,value);if(result){this._tryNext(value,result);}}catch(err){this.destination.error(err);}}},{key:'_complete',value:function _complete(){this.emitValue();this.destination.complete();}},{key:'_tryNext',value:function _tryNext(value,duration){var subscription=this.durationSubscription;this.value=value;this.hasValue=true;if(subscription){subscription.unsubscribe();this.remove(subscription);}subscription=subscribeToResult(this,duration);if(!subscription.closed){this.add(this.durationSubscription=subscription);}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.emitValue();}},{key:'notifyComplete',value:function notifyComplete(){this.emitValue();}},{key:'emitValue',value:function emitValue(){if(this.hasValue){var value=this.value;var subscription=this.durationSubscription;if(subscription){this.durationSubscription=null;subscription.unsubscribe();this.remove(subscription);}this.value=null;this.hasValue=false;_get(DebounceSubscriber.prototype.__proto__||Object.getPrototypeOf(DebounceSubscriber.prototype),'_next',this).call(this,value);}}}]);return DebounceSubscriber;}(OuterSubscriber);Observable.prototype.debounce=debounce;/**
   * Emits a value from the source Observable only after a particular time span
   * has passed without another source emission.
   *
   * <span class="informal">It's like {@link delay}, but passes only the most
   * recent value from each burst of emissions.</span>
   *
   * <img src="./img/debounceTime.png" width="100%">
   *
   * `debounceTime` delays values emitted by the source Observable, but drops
   * previous pending delayed emissions if a new value arrives on the source
   * Observable. This operator keeps track of the most recent value from the
   * source Observable, and emits that only when `dueTime` enough time has passed
   * without any other value appearing on the source Observable. If a new value
   * appears before `dueTime` silence occurs, the previous value will be dropped
   * and will not be emitted on the output Observable.
   *
   * This is a rate-limiting operator, because it is impossible for more than one
   * value to be emitted in any time window of duration `dueTime`, but it is also
   * a delay-like operator since output emissions do not occur at the same time as
   * they did on the source Observable. Optionally takes a {@link Scheduler} for
   * managing timers.
   *
   * @example <caption>Emit the most recent click after a burst of clicks</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.debounceTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounce}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttleTime}
   *
   * @param {number} dueTime The timeout duration in milliseconds (or the time
   * unit determined internally by the optional `scheduler`) for the window of
   * time required to wait for emission silence before emitting the most recent
   * source value.
   * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
   * managing the timers that handle the timeout for each value.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified `dueTime`, and may drop some values if they occur
   * too frequently.
   * @method debounceTime
   * @owner Observable
   */function debounceTime(dueTime){var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];return this.lift(new DebounceTimeOperator(dueTime,scheduler));}var DebounceTimeOperator=function(){function DebounceTimeOperator(dueTime,scheduler){_classCallCheck(this,DebounceTimeOperator);this.dueTime=dueTime;this.scheduler=scheduler;}_createClass(DebounceTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DebounceTimeSubscriber(subscriber,this.dueTime,this.scheduler));}}]);return DebounceTimeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DebounceTimeSubscriber=function(_Subscriber12){_inherits(DebounceTimeSubscriber,_Subscriber12);function DebounceTimeSubscriber(destination,dueTime,scheduler){_classCallCheck(this,DebounceTimeSubscriber);var _this84=_possibleConstructorReturn(this,(DebounceTimeSubscriber.__proto__||Object.getPrototypeOf(DebounceTimeSubscriber)).call(this,destination));_this84.dueTime=dueTime;_this84.scheduler=scheduler;_this84.debouncedSubscription=null;_this84.lastValue=null;_this84.hasValue=false;return _this84;}_createClass(DebounceTimeSubscriber,[{key:'_next',value:function _next(value){this.clearDebounce();this.lastValue=value;this.hasValue=true;this.add(this.debouncedSubscription=this.scheduler.schedule(dispatchNext$3,this.dueTime,this));}},{key:'_complete',value:function _complete(){this.debouncedNext();this.destination.complete();}},{key:'debouncedNext',value:function debouncedNext(){this.clearDebounce();if(this.hasValue){this.destination.next(this.lastValue);this.lastValue=null;this.hasValue=false;}}},{key:'clearDebounce',value:function clearDebounce(){var debouncedSubscription=this.debouncedSubscription;if(debouncedSubscription!==null){this.remove(debouncedSubscription);debouncedSubscription.unsubscribe();this.debouncedSubscription=null;}}}]);return DebounceTimeSubscriber;}(Subscriber);function dispatchNext$3(subscriber){subscriber.debouncedNext();}Observable.prototype.debounceTime=debounceTime;/**
   * Emits a given value if the source Observable completes without emitting any
   * `next` value, otherwise mirrors the source Observable.
   *
   * <span class="informal">If the source Observable turns out to be empty, then
   * this operator will emit a default value.</span>
   *
   * <img src="./img/defaultIfEmpty.png" width="100%">
   *
   * `defaultIfEmpty` emits the values emitted by the source Observable or a
   * specified default value if the source Observable is empty (completes without
   * having emitted any `next` value).
   *
   * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
   * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link empty}
   * @see {@link last}
   *
   * @param {any} [defaultValue=null] The default value used if the source
   * Observable is empty.
   * @return {Observable} An Observable that emits either the specified
   * `defaultValue` if the source Observable emits no items, or the values emitted
   * by the source Observable.
   * @method defaultIfEmpty
   * @owner Observable
   */function defaultIfEmpty(){var defaultValue=arguments.length<=0||arguments[0]===undefined?null:arguments[0];return this.lift(new DefaultIfEmptyOperator(defaultValue));}var DefaultIfEmptyOperator=function(){function DefaultIfEmptyOperator(defaultValue){_classCallCheck(this,DefaultIfEmptyOperator);this.defaultValue=defaultValue;}_createClass(DefaultIfEmptyOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DefaultIfEmptySubscriber(subscriber,this.defaultValue));}}]);return DefaultIfEmptyOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DefaultIfEmptySubscriber=function(_Subscriber13){_inherits(DefaultIfEmptySubscriber,_Subscriber13);function DefaultIfEmptySubscriber(destination,defaultValue){_classCallCheck(this,DefaultIfEmptySubscriber);var _this85=_possibleConstructorReturn(this,(DefaultIfEmptySubscriber.__proto__||Object.getPrototypeOf(DefaultIfEmptySubscriber)).call(this,destination));_this85.defaultValue=defaultValue;_this85.isEmpty=true;return _this85;}_createClass(DefaultIfEmptySubscriber,[{key:'_next',value:function _next(value){this.isEmpty=false;this.destination.next(value);}},{key:'_complete',value:function _complete(){if(this.isEmpty){this.destination.next(this.defaultValue);}this.destination.complete();}}]);return DefaultIfEmptySubscriber;}(Subscriber);Observable.prototype.defaultIfEmpty=defaultIfEmpty;/**
   * Delays the emission of items from the source Observable by a given timeout or
   * until a given Date.
   *
   * <span class="informal">Time shifts each item by some specified amount of
   * milliseconds.</span>
   *
   * <img src="./img/delay.png" width="100%">
   *
   * If the delay argument is a Number, this operator time shifts the source
   * Observable by that amount of time expressed in milliseconds. The relative
   * time intervals between the values are preserved.
   *
   * If the delay argument is a Date, this operator time shifts the start of the
   * Observable execution until the given date occurs.
   *
   * @example <caption>Delay each click by one second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @example <caption>Delay all clicks until a future date happens</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var date = new Date('March 15, 2050 12:00:00'); // in the future
   * var delayedClicks = clicks.delay(date); // click emitted only after that date
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @see {@link debounceTime}
   * @see {@link delayWhen}
   *
   * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
   * a `Date` until which the emission of the source items is delayed.
   * @param {Scheduler} [scheduler=async] The Scheduler to use for
   * managing the timers that handle the time-shift for each item.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by the specified timeout or Date.
   * @method delay
   * @owner Observable
   */function delay(delay){var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];var absoluteDelay=isDate(delay);var delayFor=absoluteDelay?+delay-scheduler.now():Math.abs(delay);return this.lift(new DelayOperator(delayFor,scheduler));}var DelayOperator=function(){function DelayOperator(delay,scheduler){_classCallCheck(this,DelayOperator);this.delay=delay;this.scheduler=scheduler;}_createClass(DelayOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DelaySubscriber(subscriber,this.delay,this.scheduler));}}]);return DelayOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DelaySubscriber=function(_Subscriber14){_inherits(DelaySubscriber,_Subscriber14);function DelaySubscriber(destination,delay,scheduler){_classCallCheck(this,DelaySubscriber);var _this86=_possibleConstructorReturn(this,(DelaySubscriber.__proto__||Object.getPrototypeOf(DelaySubscriber)).call(this,destination));_this86.delay=delay;_this86.scheduler=scheduler;_this86.queue=[];_this86.active=false;_this86.errored=false;return _this86;}_createClass(DelaySubscriber,[{key:'_schedule',value:function _schedule(scheduler){this.active=true;this.add(scheduler.schedule(DelaySubscriber.dispatch,this.delay,{source:this,destination:this.destination,scheduler:scheduler}));}},{key:'scheduleNotification',value:function scheduleNotification(notification){if(this.errored===true){return;}var scheduler=this.scheduler;var message=new DelayMessage(scheduler.now()+this.delay,notification);this.queue.push(message);if(this.active===false){this._schedule(scheduler);}}},{key:'_next',value:function _next(value){this.scheduleNotification(Notification.createNext(value));}},{key:'_error',value:function _error(err){this.errored=true;this.queue=[];this.destination.error(err);}},{key:'_complete',value:function _complete(){this.scheduleNotification(Notification.createComplete());}}],[{key:'dispatch',value:function dispatch(state){var source=state.source;var queue=source.queue;var scheduler=state.scheduler;var destination=state.destination;while(queue.length>0&&queue[0].time-scheduler.now()<=0){queue.shift().notification.observe(destination);}if(queue.length>0){var delay=Math.max(0,queue[0].time-scheduler.now());this.schedule(state,delay);}else{source.active=false;}}}]);return DelaySubscriber;}(Subscriber);var DelayMessage=function DelayMessage(time,notification){_classCallCheck(this,DelayMessage);this.time=time;this.notification=notification;};Observable.prototype.delay=delay;/**
   * Delays the emission of items from the source Observable by a given time span
   * determined by the emissions of another Observable.
   *
   * <span class="informal">It's like {@link delay}, but the time span of the
   * delay duration is determined by a second Observable.</span>
   *
   * <img src="./img/delayWhen.png" width="100%">
   *
   * `delayWhen` time shifts each emitted value from the source Observable by a
   * time span determined by another Observable. When the source emits a value,
   * the `delayDurationSelector` function is called with the source value as
   * argument, and should return an Observable, called the "duration" Observable.
   * The source value is emitted on the output Observable only when the duration
   * Observable emits a value or completes.
   *
   * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
   * is an Observable. When `subscriptionDelay` emits its first value or
   * completes, the source Observable is subscribed to and starts behaving like
   * described in the previous paragraph. If `subscriptionDelay` is not provided,
   * `delayWhen` will subscribe to the source Observable as soon as the output
   * Observable is subscribed.
   *
   * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var delayedClicks = clicks.delayWhen(event =>
   *   Rx.Observable.interval(Math.random() * 5000)
   * );
   * delayedClicks.subscribe(x => console.log(x));
   *
   * @see {@link debounce}
   * @see {@link delay}
   *
   * @param {function(value: T): Observable} delayDurationSelector A function that
   * returns an Observable for each value emitted by the source Observable, which
   * is then used to delay the emission of that item on the output Observable
   * until the Observable returned from this function emits a value.
   * @param {Observable} subscriptionDelay An Observable that triggers the
   * subscription to the source Observable once it emits any value.
   * @return {Observable} An Observable that delays the emissions of the source
   * Observable by an amount of time specified by the Observable returned by
   * `delayDurationSelector`.
   * @method delayWhen
   * @owner Observable
   */function delayWhen(delayDurationSelector,subscriptionDelay){if(subscriptionDelay){return new SubscriptionDelayObservable(this,subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));}return this.lift(new DelayWhenOperator(delayDurationSelector));}var DelayWhenOperator=function(){function DelayWhenOperator(delayDurationSelector){_classCallCheck(this,DelayWhenOperator);this.delayDurationSelector=delayDurationSelector;}_createClass(DelayWhenOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DelayWhenSubscriber(subscriber,this.delayDurationSelector));}}]);return DelayWhenOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DelayWhenSubscriber=function(_OuterSubscriber17){_inherits(DelayWhenSubscriber,_OuterSubscriber17);function DelayWhenSubscriber(destination,delayDurationSelector){_classCallCheck(this,DelayWhenSubscriber);var _this87=_possibleConstructorReturn(this,(DelayWhenSubscriber.__proto__||Object.getPrototypeOf(DelayWhenSubscriber)).call(this,destination));_this87.delayDurationSelector=delayDurationSelector;_this87.completed=false;_this87.delayNotifierSubscriptions=[];_this87.values=[];return _this87;}_createClass(DelayWhenSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.destination.next(outerValue);this.removeSubscription(innerSub);this.tryComplete();}},{key:'notifyError',value:function notifyError(error,innerSub){this._error(error);}},{key:'notifyComplete',value:function notifyComplete(innerSub){var value=this.removeSubscription(innerSub);if(value){this.destination.next(value);}this.tryComplete();}},{key:'_next',value:function _next(value){try{var delayNotifier=this.delayDurationSelector(value);if(delayNotifier){this.tryDelay(delayNotifier,value);}}catch(err){this.destination.error(err);}}},{key:'_complete',value:function _complete(){this.completed=true;this.tryComplete();}},{key:'removeSubscription',value:function removeSubscription(subscription){subscription.unsubscribe();var subscriptionIdx=this.delayNotifierSubscriptions.indexOf(subscription);var value=null;if(subscriptionIdx!==-1){value=this.values[subscriptionIdx];this.delayNotifierSubscriptions.splice(subscriptionIdx,1);this.values.splice(subscriptionIdx,1);}return value;}},{key:'tryDelay',value:function tryDelay(delayNotifier,value){var notifierSubscription=subscribeToResult(this,delayNotifier,value);this.add(notifierSubscription);this.delayNotifierSubscriptions.push(notifierSubscription);this.values.push(value);}},{key:'tryComplete',value:function tryComplete(){if(this.completed&&this.delayNotifierSubscriptions.length===0){this.destination.complete();}}}]);return DelayWhenSubscriber;}(OuterSubscriber);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SubscriptionDelayObservable=function(_Observable25){_inherits(SubscriptionDelayObservable,_Observable25);function SubscriptionDelayObservable(source,subscriptionDelay){_classCallCheck(this,SubscriptionDelayObservable);var _this88=_possibleConstructorReturn(this,(SubscriptionDelayObservable.__proto__||Object.getPrototypeOf(SubscriptionDelayObservable)).call(this));_this88.source=source;_this88.subscriptionDelay=subscriptionDelay;return _this88;}_createClass(SubscriptionDelayObservable,[{key:'_subscribe',value:function _subscribe(subscriber){this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber,this.source));}}]);return SubscriptionDelayObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SubscriptionDelaySubscriber=function(_Subscriber15){_inherits(SubscriptionDelaySubscriber,_Subscriber15);function SubscriptionDelaySubscriber(parent,source){_classCallCheck(this,SubscriptionDelaySubscriber);var _this89=_possibleConstructorReturn(this,(SubscriptionDelaySubscriber.__proto__||Object.getPrototypeOf(SubscriptionDelaySubscriber)).call(this));_this89.parent=parent;_this89.source=source;_this89.sourceSubscribed=false;return _this89;}_createClass(SubscriptionDelaySubscriber,[{key:'_next',value:function _next(unused){this.subscribeToSource();}},{key:'_error',value:function _error(err){this.unsubscribe();this.parent.error(err);}},{key:'_complete',value:function _complete(){this.subscribeToSource();}},{key:'subscribeToSource',value:function subscribeToSource(){if(!this.sourceSubscribed){this.sourceSubscribed=true;this.unsubscribe();this.source.subscribe(this.parent);}}}]);return SubscriptionDelaySubscriber;}(Subscriber);Observable.prototype.delayWhen=delayWhen;/**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   * If a comparator function is not provided, an equality check is used by default.
   * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
   * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
   * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
   * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
   * @return {Observable} an Observable that emits items from the source Observable with distinct values.
   * @method distinct
   * @owner Observable
   */function distinct(compare,flushes){return this.lift(new DistinctOperator(compare,flushes));}var DistinctOperator=function(){function DistinctOperator(compare,flushes){_classCallCheck(this,DistinctOperator);this.compare=compare;this.flushes=flushes;}_createClass(DistinctOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DistinctSubscriber(subscriber,this.compare,this.flushes));}}]);return DistinctOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DistinctSubscriber=function(_OuterSubscriber18){_inherits(DistinctSubscriber,_OuterSubscriber18);function DistinctSubscriber(destination,compare,flushes){_classCallCheck(this,DistinctSubscriber);var _this90=_possibleConstructorReturn(this,(DistinctSubscriber.__proto__||Object.getPrototypeOf(DistinctSubscriber)).call(this,destination));_this90.values=[];if(typeof compare==='function'){_this90.compare=compare;}if(flushes){_this90.add(subscribeToResult(_this90,flushes));}return _this90;}_createClass(DistinctSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.values.length=0;}},{key:'notifyError',value:function notifyError(error,innerSub){this._error(error);}},{key:'_next',value:function _next(value){var found=false;var values=this.values;var len=values.length;try{for(var _i16=0;_i16<len;_i16++){if(this.compare(values[_i16],value)){found=true;return;}}}catch(err){this.destination.error(err);return;}this.values.push(value);this.destination.next(value);}},{key:'compare',value:function compare(x,y){return x===y;}}]);return DistinctSubscriber;}(OuterSubscriber);Observable.prototype.distinct=distinct;/**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
   * using a property accessed by using the key provided to check if the two items are distinct.
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   * If a comparator function is not provided, an equality check is used by default.
   * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
   * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
   * @param {string} key string key for object property lookup on each item.
   * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
   * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
   * @return {Observable} an Observable that emits items from the source Observable with distinct values.
   * @method distinctKey
   * @owner Observable
   */function distinctKey(key,compare,flushes){return distinct.call(this,function(x,y){if(compare){return compare(x[key],y[key]);}return x[key]===y[key];},flushes);}Observable.prototype.distinctKey=distinctKey;/**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   * If a comparator function is not provided, an equality check is used by default.
   * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
   * @return {Observable} an Observable that emits items from the source Observable with distinct values.
   * @method distinctUntilChanged
   * @owner Observable
   */function distinctUntilChanged(compare,keySelector){return this.lift(new DistinctUntilChangedOperator(compare,keySelector));}var DistinctUntilChangedOperator=function(){function DistinctUntilChangedOperator(compare,keySelector){_classCallCheck(this,DistinctUntilChangedOperator);this.compare=compare;this.keySelector=keySelector;}_createClass(DistinctUntilChangedOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DistinctUntilChangedSubscriber(subscriber,this.compare,this.keySelector));}}]);return DistinctUntilChangedOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DistinctUntilChangedSubscriber=function(_Subscriber16){_inherits(DistinctUntilChangedSubscriber,_Subscriber16);function DistinctUntilChangedSubscriber(destination,compare,keySelector){_classCallCheck(this,DistinctUntilChangedSubscriber);var _this91=_possibleConstructorReturn(this,(DistinctUntilChangedSubscriber.__proto__||Object.getPrototypeOf(DistinctUntilChangedSubscriber)).call(this,destination));_this91.keySelector=keySelector;_this91.hasKey=false;if(typeof compare==='function'){_this91.compare=compare;}return _this91;}_createClass(DistinctUntilChangedSubscriber,[{key:'compare',value:function compare(x,y){return x===y;}},{key:'_next',value:function _next(value){var keySelector=this.keySelector;var key=value;if(keySelector){key=tryCatch(this.keySelector)(value);if(key===errorObject){return this.destination.error(errorObject.e);}}var result=false;if(this.hasKey){result=tryCatch(this.compare)(this.key,key);if(result===errorObject){return this.destination.error(errorObject.e);}}else{this.hasKey=true;}if(Boolean(result)===false){this.key=key;this.destination.next(value);}}}]);return DistinctUntilChangedSubscriber;}(Subscriber);Observable.prototype.distinctUntilChanged=distinctUntilChanged;/**
   * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
   * using a property accessed by using the key provided to check if the two items are distinct.
   * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
   * If a comparator function is not provided, an equality check is used by default.
   * @param {string} key string key for object property lookup on each item.
   * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
   * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
   * @method distinctUntilKeyChanged
   * @owner Observable
   */function distinctUntilKeyChanged(key,compare){return distinctUntilChanged.call(this,function(x,y){if(compare){return compare(x[key],y[key]);}return x[key]===y[key];});}Observable.prototype.distinctUntilKeyChanged=distinctUntilKeyChanged;/**
   * Perform a side effect for every emission on the source Observable, but return
   * an Observable that is identical to the source.
   *
   * <span class="informal">Intercepts each emission on the source and runs a
   * function, but returns an output which is identical to the source.</span>
   *
   * <img src="./img/do.png" width="100%">
   *
   * Returns a mirrored Observable of the source Observable, but modified so that
   * the provided Observer is called to perform a side effect for every value,
   * error, and completion emitted by the source. Any errors that are thrown in
   * the aforementioned Observer or handlers are safely sent down the error path
   * of the output Observable.
   *
   * This operator is useful for debugging your Observables for the correct values
   * or performing other side effects.
   *
   * Note: this is different to a `subscribe` on the Observable. If the Observable
   * returned by `do` is not subscribed, the side effects specified by the
   * Observer will never happen. `do` therefore simply spies on existing
   * execution, it does not trigger an execution to happen like `subscribe` does.
   *
   * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var positions = clicks
   *   .do(ev => console.log(ev))
   *   .map(ev => ev.clientX);
   * positions.subscribe(x => console.log(x));
   *
   * @see {@link map}
   * @see {@link subscribe}
   *
   * @param {Observer|function} [nextOrObserver] A normal Observer object or a
   * callback for `next`.
   * @param {function} [error] Callback for errors in the source.
   * @param {function} [complete] Callback for the completion of the source.
   * @return {Observable} An Observable identical to the source, but runs the
   * specified Observer or callback(s) for each item.
   * @method do
   * @name do
   * @owner Observable
   */function _do(nextOrObserver,error,complete){return this.lift(new DoOperator(nextOrObserver,error,complete));}var DoOperator=function(){function DoOperator(nextOrObserver,error,complete){_classCallCheck(this,DoOperator);this.nextOrObserver=nextOrObserver;this.error=error;this.complete=complete;}_createClass(DoOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new DoSubscriber(subscriber,this.nextOrObserver,this.error,this.complete));}}]);return DoOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var DoSubscriber=function(_Subscriber17){_inherits(DoSubscriber,_Subscriber17);function DoSubscriber(destination,nextOrObserver,error,complete){_classCallCheck(this,DoSubscriber);var _this92=_possibleConstructorReturn(this,(DoSubscriber.__proto__||Object.getPrototypeOf(DoSubscriber)).call(this,destination));var safeSubscriber=new Subscriber(nextOrObserver,error,complete);safeSubscriber.syncErrorThrowable=true;_this92.add(safeSubscriber);_this92.safeSubscriber=safeSubscriber;return _this92;}_createClass(DoSubscriber,[{key:'_next',value:function _next(value){var safeSubscriber=this.safeSubscriber;safeSubscriber.next(value);if(safeSubscriber.syncErrorThrown){this.destination.error(safeSubscriber.syncErrorValue);}else{this.destination.next(value);}}},{key:'_error',value:function _error(err){var safeSubscriber=this.safeSubscriber;safeSubscriber.error(err);if(safeSubscriber.syncErrorThrown){this.destination.error(safeSubscriber.syncErrorValue);}else{this.destination.error(err);}}},{key:'_complete',value:function _complete(){var safeSubscriber=this.safeSubscriber;safeSubscriber.complete();if(safeSubscriber.syncErrorThrown){this.destination.error(safeSubscriber.syncErrorValue);}else{this.destination.complete();}}}]);return DoSubscriber;}(Subscriber);Observable.prototype.do=_do;/**
   * Converts a higher-order Observable into a first-order Observable by dropping
   * inner Observables while the previous inner Observable has not yet completed.
   *
   * <span class="informal">Flattens an Observable-of-Observables by dropping the
   * next inner Observables while the current inner is still executing.</span>
   *
   * <img src="./img/exhaust.png" width="100%">
   *
   * `exhaust` subscribes to an Observable that emits Observables, also known as a
   * higher-order Observable. Each time it observes one of these emitted inner
   * Observables, the output Observable begins emitting the items emitted by that
   * inner Observable. So far, it behaves like {@link mergeAll}. However,
   * `exhaust` ignores every new inner Observable if the previous Observable has
   * not yet completed. Once that one completes, it will accept and flatten the
   * next inner Observable and repeat this process.
   *
   * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
   * var result = higherOrder.exhaust();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link switch}
   * @see {@link mergeAll}
   * @see {@link exhaustMap}
   * @see {@link zipAll}
   *
   * @return {Observable} Returns an Observable that takes a source of Observables
   * and propagates the first observable exclusively until it completes before
   * subscribing to the next.
   * @method exhaust
   * @owner Observable
   */function exhaust(){return this.lift(new SwitchFirstOperator());}var SwitchFirstOperator=function(){function SwitchFirstOperator(){_classCallCheck(this,SwitchFirstOperator);}_createClass(SwitchFirstOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SwitchFirstSubscriber(subscriber));}}]);return SwitchFirstOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SwitchFirstSubscriber=function(_OuterSubscriber19){_inherits(SwitchFirstSubscriber,_OuterSubscriber19);function SwitchFirstSubscriber(destination){_classCallCheck(this,SwitchFirstSubscriber);var _this93=_possibleConstructorReturn(this,(SwitchFirstSubscriber.__proto__||Object.getPrototypeOf(SwitchFirstSubscriber)).call(this,destination));_this93.hasCompleted=false;_this93.hasSubscription=false;return _this93;}_createClass(SwitchFirstSubscriber,[{key:'_next',value:function _next(value){if(!this.hasSubscription){this.hasSubscription=true;this.add(subscribeToResult(this,value));}}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(!this.hasSubscription){this.destination.complete();}}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.remove(innerSub);this.hasSubscription=false;if(this.hasCompleted){this.destination.complete();}}}]);return SwitchFirstSubscriber;}(OuterSubscriber);Observable.prototype.exhaust=exhaust;/**
   * Projects each source value to an Observable which is merged in the output
   * Observable only if the previous projected Observable has completed.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link exhaust}.</span>
   *
   * <img src="./img/exhaustMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. When it projects a source value to
   * an Observable, the output Observable begins emitting the items emitted by
   * that projected Observable. However, `exhaustMap` ignores every new projected
   * Observable if the previous projected Observable has not yet completed. Once
   * that one completes, it will accept and flatten the next projected Observable
   * and repeat this process.
   *
   * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMap}
   * @see {@link exhaust}
   * @see {@link mergeMap}
   * @see {@link switchMap}
   *
   * @param {function(value: T, ?index: number): Observable} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @return {Observable} An Observable containing projected Observables
   * of each item of the source, ignoring projected Observables that start before
   * their preceding Observable has completed.
   * @method exhaustMap
   * @owner Observable
   */function exhaustMap(project,resultSelector){return this.lift(new SwitchFirstMapOperator(project,resultSelector));}var SwitchFirstMapOperator=function(){function SwitchFirstMapOperator(project,resultSelector){_classCallCheck(this,SwitchFirstMapOperator);this.project=project;this.resultSelector=resultSelector;}_createClass(SwitchFirstMapOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SwitchFirstMapSubscriber(subscriber,this.project,this.resultSelector));}}]);return SwitchFirstMapOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SwitchFirstMapSubscriber=function(_OuterSubscriber20){_inherits(SwitchFirstMapSubscriber,_OuterSubscriber20);function SwitchFirstMapSubscriber(destination,project,resultSelector){_classCallCheck(this,SwitchFirstMapSubscriber);var _this94=_possibleConstructorReturn(this,(SwitchFirstMapSubscriber.__proto__||Object.getPrototypeOf(SwitchFirstMapSubscriber)).call(this,destination));_this94.project=project;_this94.resultSelector=resultSelector;_this94.hasSubscription=false;_this94.hasCompleted=false;_this94.index=0;return _this94;}_createClass(SwitchFirstMapSubscriber,[{key:'_next',value:function _next(value){if(!this.hasSubscription){this.tryNext(value);}}},{key:'tryNext',value:function tryNext(value){var index=this.index++;var destination=this.destination;try{var result=this.project(value,index);this.hasSubscription=true;this.add(subscribeToResult(this,result,value,index));}catch(err){destination.error(err);}}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(!this.hasSubscription){this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var resultSelector=this.resultSelector;var destination=this.destination;if(resultSelector){this.trySelectResult(outerValue,innerValue,outerIndex,innerIndex);}else{destination.next(innerValue);}}},{key:'trySelectResult',value:function trySelectResult(outerValue,innerValue,outerIndex,innerIndex){var resultSelector=this.resultSelector;var destination=this.destination;try{var result=resultSelector(outerValue,innerValue,outerIndex,innerIndex);destination.next(result);}catch(err){destination.error(err);}}},{key:'notifyError',value:function notifyError(err){this.destination.error(err);}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.remove(innerSub);this.hasSubscription=false;if(this.hasCompleted){this.destination.complete();}}}]);return SwitchFirstMapSubscriber;}(OuterSubscriber);Observable.prototype.exhaustMap=exhaustMap;/**
   * Recursively projects each source value to an Observable which is merged in
   * the output Observable.
   *
   * <span class="informal">It's similar to {@link mergeMap}, but applies the
   * projection function to every source value as well as every output value.
   * It's recursive.</span>
   *
   * <img src="./img/expand.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an Observable, and then merging those resulting Observables and
   * emitting the results of this merger. *Expand* will re-emit on the output
   * Observable every source value. Then, each output value is given to the
   * `project` function which returns an inner Observable to be merged on the
   * output Observable. Those output values resulting from the projection are also
   * given to the `project` function to produce new output values. This is how
   * *expand* behaves recursively.
   *
   * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var powersOfTwo = clicks
   *   .mapTo(1)
   *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
   *   .take(10);
   * powersOfTwo.subscribe(x => console.log(x));
   *
   * @see {@link mergeMap}
   * @see {@link mergeScan}
   *
   * @param {function(value: T, index: number) => Observable} project A function
   * that, when applied to an item emitted by the source or the output Observable,
   * returns an Observable.
   * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
   * Observables being subscribed to concurrently.
   * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
   * each projected inner Observable.
   * @return {Observable} An Observable that emits the source values and also
   * result of applying the projection function to each value emitted on the
   * output Observable and and merging the results of the Observables obtained
   * from this transformation.
   * @method expand
   * @owner Observable
   */function expand(project){var concurrent=arguments.length<=1||arguments[1]===undefined?Number.POSITIVE_INFINITY:arguments[1];var scheduler=arguments.length<=2||arguments[2]===undefined?undefined:arguments[2];concurrent=(concurrent||0)<1?Number.POSITIVE_INFINITY:concurrent;return this.lift(new ExpandOperator(project,concurrent,scheduler));}var ExpandOperator=function(){function ExpandOperator(project,concurrent,scheduler){_classCallCheck(this,ExpandOperator);this.project=project;this.concurrent=concurrent;this.scheduler=scheduler;}_createClass(ExpandOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ExpandSubscriber(subscriber,this.project,this.concurrent,this.scheduler));}}]);return ExpandOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ExpandSubscriber=function(_OuterSubscriber21){_inherits(ExpandSubscriber,_OuterSubscriber21);function ExpandSubscriber(destination,project,concurrent,scheduler){_classCallCheck(this,ExpandSubscriber);var _this95=_possibleConstructorReturn(this,(ExpandSubscriber.__proto__||Object.getPrototypeOf(ExpandSubscriber)).call(this,destination));_this95.project=project;_this95.concurrent=concurrent;_this95.scheduler=scheduler;_this95.index=0;_this95.active=0;_this95.hasCompleted=false;if(concurrent<Number.POSITIVE_INFINITY){_this95.buffer=[];}return _this95;}_createClass(ExpandSubscriber,[{key:'_next',value:function _next(value){var destination=this.destination;if(destination.closed){this._complete();return;}var index=this.index++;if(this.active<this.concurrent){destination.next(value);var result=tryCatch(this.project)(value,index);if(result===errorObject){destination.error(errorObject.e);}else if(!this.scheduler){this.subscribeToProjection(result,value,index);}else{var state={subscriber:this,result:result,value:value,index:index};this.add(this.scheduler.schedule(ExpandSubscriber.dispatch,0,state));}}else{this.buffer.push(value);}}},{key:'subscribeToProjection',value:function subscribeToProjection(result,value,index){this.active++;this.add(subscribeToResult(this,result,value,index));}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.hasCompleted&&this.active===0){this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this._next(innerValue);}},{key:'notifyComplete',value:function notifyComplete(innerSub){var buffer=this.buffer;this.remove(innerSub);this.active--;if(buffer&&buffer.length>0){this._next(buffer.shift());}if(this.hasCompleted&&this.active===0){this.destination.complete();}}}],[{key:'dispatch',value:function dispatch(arg){var subscriber=arg.subscriber;var result=arg.result;var value=arg.value;var index=arg.index;subscriber.subscribeToProjection(result,value,index);}}]);return ExpandSubscriber;}(OuterSubscriber);Observable.prototype.expand=expand;/**
   * An error thrown when an element was queried at a certain index of an
   * Observable, but no such index or position exists in that sequence.
   *
   * @see {@link elementAt}
   * @see {@link take}
   * @see {@link takeLast}
   *
   * @class ArgumentOutOfRangeError
   */var ArgumentOutOfRangeError=function(_Error4){_inherits(ArgumentOutOfRangeError,_Error4);function ArgumentOutOfRangeError(){var _this96;_classCallCheck(this,ArgumentOutOfRangeError);var err=(_this96=_possibleConstructorReturn(this,(ArgumentOutOfRangeError.__proto__||Object.getPrototypeOf(ArgumentOutOfRangeError)).call(this,'argument out of range')),_this96);_this96.name=err.name='ArgumentOutOfRangeError';_this96.stack=err.stack;_this96.message=err.message;return _this96;}return ArgumentOutOfRangeError;}(Error);/**
   * Emits the single value at the specified `index` in a sequence of emissions
   * from the source Observable.
   *
   * <span class="informal">Emits only the i-th value, then completes.</span>
   *
   * <img src="./img/elementAt.png" width="100%">
   *
   * `elementAt` returns an Observable that emits the item at the specified
   * `index` in the source Observable, or a default value if that `index` is out
   * of range and the `default` argument is provided. If the `default` argument is
   * not given and the `index` is out of range, the output Observable will emit an
   * `ArgumentOutOfRangeError` error.
   *
   * @example <caption>Emit only the third click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.elementAt(2);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link first}
   * @see {@link last}
   * @see {@link skip}
   * @see {@link single}
   * @see {@link take}
   *
   * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
   * Observable has completed before emitting the i-th `next` notification.
   *
   * @param {number} index Is the number `i` for the i-th source emission that has
   * happened since the subscription, starting from the number `0`.
   * @param {T} [defaultValue] The default value returned for missing indices.
   * @return {Observable} An Observable that emits a single item, if it is found.
   * Otherwise, will emit the default value if given. If not, then emits an error.
   * @method elementAt
   * @owner Observable
   */function elementAt(index,defaultValue){return this.lift(new ElementAtOperator(index,defaultValue));}var ElementAtOperator=function(){function ElementAtOperator(index,defaultValue){_classCallCheck(this,ElementAtOperator);this.index=index;this.defaultValue=defaultValue;if(index<0){throw new ArgumentOutOfRangeError();}}_createClass(ElementAtOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ElementAtSubscriber(subscriber,this.index,this.defaultValue));}}]);return ElementAtOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ElementAtSubscriber=function(_Subscriber18){_inherits(ElementAtSubscriber,_Subscriber18);function ElementAtSubscriber(destination,index,defaultValue){_classCallCheck(this,ElementAtSubscriber);var _this97=_possibleConstructorReturn(this,(ElementAtSubscriber.__proto__||Object.getPrototypeOf(ElementAtSubscriber)).call(this,destination));_this97.index=index;_this97.defaultValue=defaultValue;return _this97;}_createClass(ElementAtSubscriber,[{key:'_next',value:function _next(x){if(this.index--===0){this.destination.next(x);this.destination.complete();}}},{key:'_complete',value:function _complete(){var destination=this.destination;if(this.index>=0){if(typeof this.defaultValue!=='undefined'){destination.next(this.defaultValue);}else{destination.error(new ArgumentOutOfRangeError());}}destination.complete();}}]);return ElementAtSubscriber;}(Subscriber);Observable.prototype.elementAt=elementAt;/**
   * Filter items emitted by the source Observable by only emitting those that
   * satisfy a specified predicate.
   *
   * <span class="informal">Like
   * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
   * it only emits a value from the source if it passes a criterion function.</span>
   *
   * <img src="./img/filter.png" width="100%">
   *
   * Similar to the well-known `Array.prototype.filter` method, this operator
   * takes values from the source Observable, passes them through a `predicate`
   * function and only emits those values that yielded `true`.
   *
   * @example <caption>Emit only click events whose target was a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
   * clicksOnDivs.subscribe(x => console.log(x));
   *
   * @see {@link distinct}
   * @see {@link distinctKey}
   * @see {@link distinctUntilChanged}
   * @see {@link distinctUntilKeyChanged}
   * @see {@link ignoreElements}
   * @see {@link partition}
   * @see {@link skip}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates each value emitted by the source Observable. If it returns `true`,
   * the value is emitted, if `false` the value is not passed to the output
   * Observable. The `index` parameter is the number `i` for the i-th source
   * emission that has happened since the subscription, starting from the number
   * `0`.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable} An Observable of values from the source that were
   * allowed by the `predicate` function.
   * @method filter
   * @owner Observable
   */function filter(predicate,thisArg){return this.lift(new FilterOperator(predicate,thisArg));}var FilterOperator=function(){function FilterOperator(predicate,thisArg){_classCallCheck(this,FilterOperator);this.predicate=predicate;this.thisArg=thisArg;}_createClass(FilterOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new FilterSubscriber(subscriber,this.predicate,this.thisArg));}}]);return FilterOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var FilterSubscriber=function(_Subscriber19){_inherits(FilterSubscriber,_Subscriber19);function FilterSubscriber(destination,predicate,thisArg){_classCallCheck(this,FilterSubscriber);var _this98=_possibleConstructorReturn(this,(FilterSubscriber.__proto__||Object.getPrototypeOf(FilterSubscriber)).call(this,destination));_this98.predicate=predicate;_this98.thisArg=thisArg;_this98.count=0;_this98.predicate=predicate;return _this98;}// the try catch block below is left specifically for
// optimization and perf reasons. a tryCatcher is not necessary here.
_createClass(FilterSubscriber,[{key:'_next',value:function _next(value){var result=void 0;try{result=this.predicate.call(this.thisArg,value,this.count++);}catch(err){this.destination.error(err);return;}if(result){this.destination.next(value);}}}]);return FilterSubscriber;}(Subscriber);Observable.prototype.filter=filter;/**
   * Returns an Observable that mirrors the source Observable, but will call a specified function when
   * the source terminates on complete or error.
   * @param {function} callback function to be called when source terminates.
   * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
   * @method finally
   * @owner Observable
   */function _finally(callback){return this.lift(new FinallyOperator(callback));}var FinallyOperator=function(){function FinallyOperator(callback){_classCallCheck(this,FinallyOperator);this.callback=callback;}_createClass(FinallyOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new FinallySubscriber(subscriber,this.callback));}}]);return FinallyOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var FinallySubscriber=function(_Subscriber20){_inherits(FinallySubscriber,_Subscriber20);function FinallySubscriber(destination,callback){_classCallCheck(this,FinallySubscriber);var _this99=_possibleConstructorReturn(this,(FinallySubscriber.__proto__||Object.getPrototypeOf(FinallySubscriber)).call(this,destination));_this99.add(new Subscription(callback));return _this99;}return FinallySubscriber;}(Subscriber);Observable.prototype.finally=_finally;/**
   * Emits only the first value emitted by the source Observable that meets some
   * condition.
   *
   * <span class="informal">Finds the first value that passes some test and emits
   * that.</span>
   *
   * <img src="./img/find.png" width="100%">
   *
   * `find` searches for the first item in the source Observable that matches the
   * specified condition embodied by the `predicate`, and returns the first
   * occurrence in the source. Unlike {@link first}, the `predicate` is required
   * in `find`, and does not emit an error if a valid value is not found.
   *
   * @example <caption>Find and emit the first click that happens on a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.find(ev => ev.target.tagName === 'DIV');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link filter}
   * @see {@link first}
   * @see {@link findIndex}
   * @see {@link take}
   *
   * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
   * A function called with each item to test for condition matching.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable<T>} An Observable of the first item that matches the
   * condition.
   * @method find
   * @owner Observable
   */function find(predicate,thisArg){if(typeof predicate!=='function'){throw new TypeError('predicate is not a function');}return this.lift(new FindValueOperator(predicate,this,false,thisArg));}var FindValueOperator=function(){function FindValueOperator(predicate,source,yieldIndex,thisArg){_classCallCheck(this,FindValueOperator);this.predicate=predicate;this.source=source;this.yieldIndex=yieldIndex;this.thisArg=thisArg;}_createClass(FindValueOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new FindValueSubscriber(observer,this.predicate,this.source,this.yieldIndex,this.thisArg));}}]);return FindValueOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var FindValueSubscriber=function(_Subscriber21){_inherits(FindValueSubscriber,_Subscriber21);function FindValueSubscriber(destination,predicate,source,yieldIndex,thisArg){_classCallCheck(this,FindValueSubscriber);var _this100=_possibleConstructorReturn(this,(FindValueSubscriber.__proto__||Object.getPrototypeOf(FindValueSubscriber)).call(this,destination));_this100.predicate=predicate;_this100.source=source;_this100.yieldIndex=yieldIndex;_this100.thisArg=thisArg;_this100.index=0;return _this100;}_createClass(FindValueSubscriber,[{key:'notifyComplete',value:function notifyComplete(value){var destination=this.destination;destination.next(value);destination.complete();}},{key:'_next',value:function _next(value){var predicate=this.predicate;var thisArg=this.thisArg;var index=this.index++;try{var result=predicate.call(thisArg||this,value,index,this.source);if(result){this.notifyComplete(this.yieldIndex?index:value);}}catch(err){this.destination.error(err);}}},{key:'_complete',value:function _complete(){this.notifyComplete(this.yieldIndex?-1:undefined);}}]);return FindValueSubscriber;}(Subscriber);Observable.prototype.find=find;/**
   * Emits only the index of the first value emitted by the source Observable that
   * meets some condition.
   *
   * <span class="informal">It's like {@link find}, but emits the index of the
   * found value, not the value itself.</span>
   *
   * <img src="./img/findIndex.png" width="100%">
   *
   * `findIndex` searches for the first item in the source Observable that matches
   * the specified condition embodied by the `predicate`, and returns the
   * (zero-based) index of the first occurrence in the source. Unlike
   * {@link first}, the `predicate` is required in `findIndex`, and does not emit
   * an error if a valid value is not found.
   *
   * @example <caption>Emit the index of first click that happens on a DIV element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link filter}
   * @see {@link find}
   * @see {@link first}
   * @see {@link take}
   *
   * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
   * A function called with each item to test for condition matching.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {Observable} An Observable of the index of the first item that
   * matches the condition.
   * @method find
   * @owner Observable
   */function findIndex(predicate,thisArg){return this.lift(new FindValueOperator(predicate,this,true,thisArg));}Observable.prototype.findIndex=findIndex;/**
   * An error thrown when an Observable or a sequence was queried but has no
   * elements.
   *
   * @see {@link first}
   * @see {@link last}
   * @see {@link single}
   *
   * @class EmptyError
   */var EmptyError=function(_Error5){_inherits(EmptyError,_Error5);function EmptyError(){var _this101;_classCallCheck(this,EmptyError);var err=(_this101=_possibleConstructorReturn(this,(EmptyError.__proto__||Object.getPrototypeOf(EmptyError)).call(this,'no elements in sequence')),_this101);_this101.name=err.name='EmptyError';_this101.stack=err.stack;_this101.message=err.message;return _this101;}return EmptyError;}(Error);/**
   * Emits only the first value (or the first value that meets some condition)
   * emitted by the source Observable.
   *
   * <span class="informal">Emits only the first value. Or emits only the first
   * value that passes some test.</span>
   *
   * <img src="./img/first.png" width="100%">
   *
   * If called with no arguments, `first` emits the first value of the source
   * Observable, then completes. If called with a `predicate` function, `first`
   * emits the first value of the source that matches the specified condition. It
   * may also take a `resultSelector` function to produce the output value from
   * the input value, and a `defaultValue` to emit in case the source completes
   * before it is able to emit a valid value. Throws an error if `defaultValue`
   * was not provided and a matching element is not found.
   *
   * @example <caption>Emit only the first click that happens on the DOM</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.first();
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Emits the first click that happens on a DIV</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.first(ev => ev.target.tagName === 'DIV');
   * result.subscribe(x => console.log(x));
   *
   * @see {@link filter}
   * @see {@link find}
   * @see {@link take}
   *
   * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
   * callback if the Observable completes before any `next` notification was sent.
   *
   * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
   * An optional function called with each item to test for condition matching.
   * @param {function(value: T, index: number): R} [resultSelector] A function to
   * produce the value on the output Observable based on the values
   * and the indices of the source Observable. The arguments passed to this
   * function are:
   * - `value`: the value that was emitted on the source.
   * - `index`: the "index" of the value from the source.
   * @param {R} [defaultValue] The default value emitted in case no valid value
   * was found on the source.
   * @return {Observable<T|R>} an Observable of the first item that matches the
   * condition.
   * @method first
   * @owner Observable
   */function first(predicate,resultSelector,defaultValue){return this.lift(new FirstOperator(predicate,resultSelector,defaultValue,this));}var FirstOperator=function(){function FirstOperator(predicate,resultSelector,defaultValue,source){_classCallCheck(this,FirstOperator);this.predicate=predicate;this.resultSelector=resultSelector;this.defaultValue=defaultValue;this.source=source;}_createClass(FirstOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new FirstSubscriber(observer,this.predicate,this.resultSelector,this.defaultValue,this.source));}}]);return FirstOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var FirstSubscriber=function(_Subscriber22){_inherits(FirstSubscriber,_Subscriber22);function FirstSubscriber(destination,predicate,resultSelector,defaultValue,source){_classCallCheck(this,FirstSubscriber);var _this102=_possibleConstructorReturn(this,(FirstSubscriber.__proto__||Object.getPrototypeOf(FirstSubscriber)).call(this,destination));_this102.predicate=predicate;_this102.resultSelector=resultSelector;_this102.defaultValue=defaultValue;_this102.source=source;_this102.index=0;_this102.hasCompleted=false;return _this102;}_createClass(FirstSubscriber,[{key:'_next',value:function _next(value){var index=this.index++;if(this.predicate){this._tryPredicate(value,index);}else{this._emit(value,index);}}},{key:'_tryPredicate',value:function _tryPredicate(value,index){var result=void 0;try{result=this.predicate(value,index,this.source);}catch(err){this.destination.error(err);return;}if(result){this._emit(value,index);}}},{key:'_emit',value:function _emit(value,index){if(this.resultSelector){this._tryResultSelector(value,index);return;}this._emitFinal(value);}},{key:'_tryResultSelector',value:function _tryResultSelector(value,index){var result=void 0;try{result=this.resultSelector(value,index);}catch(err){this.destination.error(err);return;}this._emitFinal(result);}},{key:'_emitFinal',value:function _emitFinal(value){var destination=this.destination;destination.next(value);destination.complete();this.hasCompleted=true;}},{key:'_complete',value:function _complete(){var destination=this.destination;if(!this.hasCompleted&&typeof this.defaultValue!=='undefined'){destination.next(this.defaultValue);destination.complete();}else if(!this.hasCompleted){destination.error(new EmptyError());}}}]);return FirstSubscriber;}(Subscriber);Observable.prototype.first=first;var MapPolyfill=function(){function MapPolyfill(){_classCallCheck(this,MapPolyfill);this.size=0;this._values=[];this._keys=[];}_createClass(MapPolyfill,[{key:'get',value:function get(key){var i=this._keys.indexOf(key);return i===-1?undefined:this._values[i];}},{key:'set',value:function set(key,value){var i=this._keys.indexOf(key);if(i===-1){this._keys.push(key);this._values.push(value);this.size++;}else{this._values[i]=value;}return this;}},{key:'delete',value:function _delete(key){var i=this._keys.indexOf(key);if(i===-1){return false;}this._values.splice(i,1);this._keys.splice(i,1);this.size--;return true;}},{key:'clear',value:function clear(){this._keys.length=0;this._values.length=0;this.size=0;}},{key:'forEach',value:function forEach(cb,thisArg){for(var _i17=0;_i17<this.size;_i17++){cb.call(thisArg,this._values[_i17],this._keys[_i17]);}}}]);return MapPolyfill;}();var Map=root.Map||function(){return MapPolyfill;}();var FastMap=function(){function FastMap(){_classCallCheck(this,FastMap);this.values={};}_createClass(FastMap,[{key:'delete',value:function _delete(key){this.values[key]=null;return true;}},{key:'set',value:function set(key,value){this.values[key]=value;return this;}},{key:'get',value:function get(key){return this.values[key];}},{key:'forEach',value:function forEach(cb,thisArg){var values=this.values;for(var _key28 in values){if(values.hasOwnProperty(_key28)&&values[_key28]!==null){cb.call(thisArg,values[_key28],_key28);}}}},{key:'clear',value:function clear(){this.values={};}}]);return FastMap;}();/**
   * Groups the items emitted by an Observable according to a specified criterion,
   * and emits these grouped items as `GroupedObservables`, one
   * {@link GroupedObservable} per group.
   *
   * <img src="./img/groupBy.png" width="100%">
   *
   * @param {function(value: T): K} keySelector a function that extracts the key
   * for each item.
   * @param {function(value: T): R} [elementSelector] a function that extracts the
   * return element for each item.
   * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
   * a function that returns an Observable to determine how long each group should
   * exist.
   * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
   * GroupedObservables, each of which corresponds to a unique key value and each
   * of which emits those items from the source Observable that share that key
   * value.
   * @method groupBy
   * @owner Observable
   */function groupBy(keySelector,elementSelector,durationSelector){return this.lift(new GroupByOperator(this,keySelector,elementSelector,durationSelector));}var GroupByOperator=function(){function GroupByOperator(source,keySelector,elementSelector,durationSelector){_classCallCheck(this,GroupByOperator);this.source=source;this.keySelector=keySelector;this.elementSelector=elementSelector;this.durationSelector=durationSelector;}_createClass(GroupByOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new GroupBySubscriber(subscriber,this.keySelector,this.elementSelector,this.durationSelector));}}]);return GroupByOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var GroupBySubscriber=function(_Subscriber23){_inherits(GroupBySubscriber,_Subscriber23);function GroupBySubscriber(destination,keySelector,elementSelector,durationSelector){_classCallCheck(this,GroupBySubscriber);var _this103=_possibleConstructorReturn(this,(GroupBySubscriber.__proto__||Object.getPrototypeOf(GroupBySubscriber)).call(this,destination));_this103.keySelector=keySelector;_this103.elementSelector=elementSelector;_this103.durationSelector=durationSelector;_this103.groups=null;_this103.attemptedToUnsubscribe=false;_this103.count=0;return _this103;}_createClass(GroupBySubscriber,[{key:'_next',value:function _next(value){var key=void 0;try{key=this.keySelector(value);}catch(err){this.error(err);return;}this._group(value,key);}},{key:'_group',value:function _group(value,key){var groups=this.groups;if(!groups){groups=this.groups=typeof key==='string'?new FastMap():new Map();}var group=groups.get(key);var element=void 0;if(this.elementSelector){try{element=this.elementSelector(value);}catch(err){this.error(err);}}else{element=value;}if(!group){groups.set(key,group=new Subject());var groupedObservable=new GroupedObservable(key,group,this);this.destination.next(groupedObservable);if(this.durationSelector){var duration=void 0;try{duration=this.durationSelector(new GroupedObservable(key,group));}catch(err){this.error(err);return;}this.add(duration.subscribe(new GroupDurationSubscriber(key,group,this)));}}if(!group.closed){group.next(element);}}},{key:'_error',value:function _error(err){var groups=this.groups;if(groups){groups.forEach(function(group,key){group.error(err);});groups.clear();}this.destination.error(err);}},{key:'_complete',value:function _complete(){var groups=this.groups;if(groups){groups.forEach(function(group,key){group.complete();});groups.clear();}this.destination.complete();}},{key:'removeGroup',value:function removeGroup(key){this.groups.delete(key);}},{key:'unsubscribe',value:function unsubscribe(){if(!this.closed&&!this.attemptedToUnsubscribe){this.attemptedToUnsubscribe=true;if(this.count===0){_get(GroupBySubscriber.prototype.__proto__||Object.getPrototypeOf(GroupBySubscriber.prototype),'unsubscribe',this).call(this);}}}}]);return GroupBySubscriber;}(Subscriber);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var GroupDurationSubscriber=function(_Subscriber24){_inherits(GroupDurationSubscriber,_Subscriber24);function GroupDurationSubscriber(key,group,parent){_classCallCheck(this,GroupDurationSubscriber);var _this104=_possibleConstructorReturn(this,(GroupDurationSubscriber.__proto__||Object.getPrototypeOf(GroupDurationSubscriber)).call(this));_this104.key=key;_this104.group=group;_this104.parent=parent;return _this104;}_createClass(GroupDurationSubscriber,[{key:'_next',value:function _next(value){this._complete();}},{key:'_error',value:function _error(err){var group=this.group;if(!group.closed){group.error(err);}this.parent.removeGroup(this.key);}},{key:'_complete',value:function _complete(){var group=this.group;if(!group.closed){group.complete();}this.parent.removeGroup(this.key);}}]);return GroupDurationSubscriber;}(Subscriber);/**
   * An Observable representing values belonging to the same group represented by
   * a common key. The values emitted by a GroupedObservable come from the source
   * Observable. The common key is available as the field `key` on a
   * GroupedObservable instance.
   *
   * @class GroupedObservable<K, T>
   */var GroupedObservable=function(_Observable26){_inherits(GroupedObservable,_Observable26);function GroupedObservable(key,groupSubject,refCountSubscription){_classCallCheck(this,GroupedObservable);var _this105=_possibleConstructorReturn(this,(GroupedObservable.__proto__||Object.getPrototypeOf(GroupedObservable)).call(this));_this105.key=key;_this105.groupSubject=groupSubject;_this105.refCountSubscription=refCountSubscription;return _this105;}_createClass(GroupedObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var subscription=new Subscription();var refCountSubscription=this.refCountSubscription;var groupSubject=this.groupSubject;if(refCountSubscription&&!refCountSubscription.closed){subscription.add(new InnerRefCountSubscription(refCountSubscription));}subscription.add(groupSubject.subscribe(subscriber));return subscription;}}]);return GroupedObservable;}(Observable);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var InnerRefCountSubscription=function(_Subscription4){_inherits(InnerRefCountSubscription,_Subscription4);function InnerRefCountSubscription(parent){_classCallCheck(this,InnerRefCountSubscription);var _this106=_possibleConstructorReturn(this,(InnerRefCountSubscription.__proto__||Object.getPrototypeOf(InnerRefCountSubscription)).call(this));_this106.parent=parent;parent.count++;return _this106;}_createClass(InnerRefCountSubscription,[{key:'unsubscribe',value:function unsubscribe(){var parent=this.parent;if(!parent.closed&&!this.closed){_get(InnerRefCountSubscription.prototype.__proto__||Object.getPrototypeOf(InnerRefCountSubscription.prototype),'unsubscribe',this).call(this);parent.count-=1;if(parent.count===0&&parent.attemptedToUnsubscribe){parent.unsubscribe();}}}}]);return InnerRefCountSubscription;}(Subscription);Observable.prototype.groupBy=groupBy;/**
   * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
   *
   * <img src="./img/ignoreElements.png" width="100%">
   *
   * @return {Observable} an empty Observable that only calls `complete`
   * or `error`, based on which one is called by the source Observable.
   * @method ignoreElements
   * @owner Observable
   */function ignoreElements(){return this.lift(new IgnoreElementsOperator());};var IgnoreElementsOperator=function(){function IgnoreElementsOperator(){_classCallCheck(this,IgnoreElementsOperator);}_createClass(IgnoreElementsOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new IgnoreElementsSubscriber(subscriber));}}]);return IgnoreElementsOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var IgnoreElementsSubscriber=function(_Subscriber25){_inherits(IgnoreElementsSubscriber,_Subscriber25);function IgnoreElementsSubscriber(){_classCallCheck(this,IgnoreElementsSubscriber);return _possibleConstructorReturn(this,(IgnoreElementsSubscriber.__proto__||Object.getPrototypeOf(IgnoreElementsSubscriber)).apply(this,arguments));}_createClass(IgnoreElementsSubscriber,[{key:'_next',value:function _next(unused){noop();}}]);return IgnoreElementsSubscriber;}(Subscriber);Observable.prototype.ignoreElements=ignoreElements;/**
   * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
   *
   * <img src="./img/isEmpty.png" width="100%">
   *
   * @return {Observable} an Observable that emits a Boolean.
   * @method isEmpty
   * @owner Observable
   */function isEmpty(){return this.lift(new IsEmptyOperator());}var IsEmptyOperator=function(){function IsEmptyOperator(){_classCallCheck(this,IsEmptyOperator);}_createClass(IsEmptyOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new IsEmptySubscriber(observer));}}]);return IsEmptyOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var IsEmptySubscriber=function(_Subscriber26){_inherits(IsEmptySubscriber,_Subscriber26);function IsEmptySubscriber(destination){_classCallCheck(this,IsEmptySubscriber);return _possibleConstructorReturn(this,(IsEmptySubscriber.__proto__||Object.getPrototypeOf(IsEmptySubscriber)).call(this,destination));}_createClass(IsEmptySubscriber,[{key:'notifyComplete',value:function notifyComplete(isEmpty){var destination=this.destination;destination.next(isEmpty);destination.complete();}},{key:'_next',value:function _next(value){this.notifyComplete(false);}},{key:'_complete',value:function _complete(){this.notifyComplete(true);}}]);return IsEmptySubscriber;}(Subscriber);Observable.prototype.isEmpty=isEmpty;/**
   * Ignores source values for a duration determined by another Observable, then
   * emits the most recent value from the source Observable, then repeats this
   * process.
   *
   * <span class="informal">It's like {@link auditTime}, but the silencing
   * duration is determined by a second Observable.</span>
   *
   * <img src="./img/audit.png" width="100%">
   *
   * `audit` is similar to `throttle`, but emits the last value from the silenced
   * time window, instead of the first value. `audit` emits the most recent value
   * from the source Observable on the output Observable as soon as its internal
   * timer becomes disabled, and ignores source values while the timer is enabled.
   * Initially, the timer is disabled. As soon as the first source value arrives,
   * the timer is enabled by calling the `durationSelector` function with the
   * source value, which returns the "duration" Observable. When the duration
   * Observable emits a value or completes, the timer is disabled, then the most
   * recent source value is emitted on the output Observable, and this process
   * repeats for the next source value.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.audit(ev => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounce}
   * @see {@link delayWhen}
   * @see {@link sample}
   * @see {@link throttle}
   *
   * @param {function(value: T): Observable|Promise} durationSelector A function
   * that receives a value from the source Observable, for computing the silencing
   * duration, returned as an Observable or a Promise.
   * @return {Observable<T>} An Observable that performs rate-limiting of
   * emissions from the source Observable.
   * @method audit
   * @owner Observable
   */function audit(durationSelector){return this.lift(new AuditOperator(durationSelector));}var AuditOperator=function(){function AuditOperator(durationSelector){_classCallCheck(this,AuditOperator);this.durationSelector=durationSelector;}_createClass(AuditOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new AuditSubscriber(subscriber,this.durationSelector));}}]);return AuditOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AuditSubscriber=function(_OuterSubscriber22){_inherits(AuditSubscriber,_OuterSubscriber22);function AuditSubscriber(destination,durationSelector){_classCallCheck(this,AuditSubscriber);var _this109=_possibleConstructorReturn(this,(AuditSubscriber.__proto__||Object.getPrototypeOf(AuditSubscriber)).call(this,destination));_this109.durationSelector=durationSelector;_this109.hasValue=false;return _this109;}_createClass(AuditSubscriber,[{key:'_next',value:function _next(value){this.value=value;this.hasValue=true;if(!this.throttled){var duration=tryCatch(this.durationSelector)(value);if(duration===errorObject){this.destination.error(errorObject.e);}else{this.add(this.throttled=subscribeToResult(this,duration));}}}},{key:'clearThrottle',value:function clearThrottle(){var value=this.value;var hasValue=this.hasValue;var throttled=this.throttled;if(throttled){this.remove(throttled);this.throttled=null;throttled.unsubscribe();}if(hasValue){this.value=null;this.hasValue=false;this.destination.next(value);}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex){this.clearThrottle();}},{key:'notifyComplete',value:function notifyComplete(){this.clearThrottle();}}]);return AuditSubscriber;}(OuterSubscriber);Observable.prototype.audit=audit;/**
   * Ignores source values for `duration` milliseconds, then emits the most recent
   * value from the source Observable, then repeats this process.
   *
   * <span class="informal">When it sees a source values, it ignores that plus
   * the next ones for `duration` milliseconds, and then it emits the most recent
   * value from the source.</span>
   *
   * <img src="./img/auditTime.png" width="100%">
   *
   * `auditTime` is similar to `throttleTime`, but emits the last value from the
   * silenced time window, instead of the first value. `auditTime` emits the most
   * recent value from the source Observable on the output Observable as soon as
   * its internal timer becomes disabled, and ignores source values while the
   * timer is enabled. Initially, the timer is disabled. As soon as the first
   * source value arrives, the timer is enabled. After `duration` milliseconds (or
   * the time unit determined internally by the optional `scheduler`) has passed,
   * the timer is disabled, then the most recent source value is emitted on the
   * output Observable, and this process repeats for the next source value.
   * Optionally takes a {@link Scheduler} for managing timers.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.auditTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttleTime}
   *
   * @param {number} duration Time to wait before emitting the most recent source
   * value, measured in milliseconds or the time unit determined internally
   * by the optional `scheduler`.
   * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
   * managing the timers that handle the rate-limiting behavior.
   * @return {Observable<T>} An Observable that performs rate-limiting of
   * emissions from the source Observable.
   * @method auditTime
   * @owner Observable
   */function auditTime(duration){var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];return this.lift(new AuditTimeOperator(duration,scheduler));}var AuditTimeOperator=function(){function AuditTimeOperator(duration,scheduler){_classCallCheck(this,AuditTimeOperator);this.duration=duration;this.scheduler=scheduler;}_createClass(AuditTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new AuditTimeSubscriber(subscriber,this.duration,this.scheduler));}}]);return AuditTimeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AuditTimeSubscriber=function(_Subscriber27){_inherits(AuditTimeSubscriber,_Subscriber27);function AuditTimeSubscriber(destination,duration,scheduler){_classCallCheck(this,AuditTimeSubscriber);var _this110=_possibleConstructorReturn(this,(AuditTimeSubscriber.__proto__||Object.getPrototypeOf(AuditTimeSubscriber)).call(this,destination));_this110.duration=duration;_this110.scheduler=scheduler;_this110.hasValue=false;return _this110;}_createClass(AuditTimeSubscriber,[{key:'_next',value:function _next(value){this.value=value;this.hasValue=true;if(!this.throttled){this.add(this.throttled=this.scheduler.schedule(dispatchNext$4,this.duration,this));}}},{key:'clearThrottle',value:function clearThrottle(){var value=this.value;var hasValue=this.hasValue;var throttled=this.throttled;if(throttled){this.remove(throttled);this.throttled=null;throttled.unsubscribe();}if(hasValue){this.value=null;this.hasValue=false;this.destination.next(value);}}}]);return AuditTimeSubscriber;}(Subscriber);function dispatchNext$4(subscriber){subscriber.clearThrottle();}Observable.prototype.auditTime=auditTime;/**
   * Returns an Observable that emits only the last item emitted by the source Observable.
   * It optionally takes a predicate function as a parameter, in which case, rather than emitting
   * the last item from the source Observable, the resulting Observable will emit the last item
   * from the source Observable that satisfies the predicate.
   *
   * <img src="./img/last.png" width="100%">
   *
   * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
   * callback if the Observable completes before any `next` notification was sent.
   * @param {function} predicate - the condition any source emitted item has to satisfy.
   * @return {Observable} an Observable that emits only the last item satisfying the given condition
   * from the source, or an NoSuchElementException if no such items are emitted.
   * @throws - Throws if no items that match the predicate are emitted by the source Observable.
   * @method last
   * @owner Observable
   */function last(predicate,resultSelector,defaultValue){return this.lift(new LastOperator(predicate,resultSelector,defaultValue,this));}var LastOperator=function(){function LastOperator(predicate,resultSelector,defaultValue,source){_classCallCheck(this,LastOperator);this.predicate=predicate;this.resultSelector=resultSelector;this.defaultValue=defaultValue;this.source=source;}_createClass(LastOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new LastSubscriber(observer,this.predicate,this.resultSelector,this.defaultValue,this.source));}}]);return LastOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var LastSubscriber=function(_Subscriber28){_inherits(LastSubscriber,_Subscriber28);function LastSubscriber(destination,predicate,resultSelector,defaultValue,source){_classCallCheck(this,LastSubscriber);var _this111=_possibleConstructorReturn(this,(LastSubscriber.__proto__||Object.getPrototypeOf(LastSubscriber)).call(this,destination));_this111.predicate=predicate;_this111.resultSelector=resultSelector;_this111.defaultValue=defaultValue;_this111.source=source;_this111.hasValue=false;_this111.index=0;if(typeof defaultValue!=='undefined'){_this111.lastValue=defaultValue;_this111.hasValue=true;}return _this111;}_createClass(LastSubscriber,[{key:'_next',value:function _next(value){var index=this.index++;if(this.predicate){this._tryPredicate(value,index);}else{if(this.resultSelector){this._tryResultSelector(value,index);return;}this.lastValue=value;this.hasValue=true;}}},{key:'_tryPredicate',value:function _tryPredicate(value,index){var result=void 0;try{result=this.predicate(value,index,this.source);}catch(err){this.destination.error(err);return;}if(result){if(this.resultSelector){this._tryResultSelector(value,index);return;}this.lastValue=value;this.hasValue=true;}}},{key:'_tryResultSelector',value:function _tryResultSelector(value,index){var result=void 0;try{result=this.resultSelector(value,index);}catch(err){this.destination.error(err);return;}this.lastValue=result;this.hasValue=true;}},{key:'_complete',value:function _complete(){var destination=this.destination;if(this.hasValue){destination.next(this.lastValue);destination.complete();}else{destination.error(new EmptyError());}}}]);return LastSubscriber;}(Subscriber);Observable.prototype.last=last;/**
   * @param func
   * @return {Observable<R>}
   * @method let
   * @owner Observable
   */function letProto(func){return func(this);}Observable.prototype.let=letProto;Observable.prototype.letBind=letProto;/**
   * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
   * @param {function} predicate a function for determining if an item meets a specified condition.
   * @param {any} [thisArg] optional object to use for `this` in the callback
   * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
   * @method every
   * @owner Observable
   */function every(predicate,thisArg){return this.lift(new EveryOperator(predicate,thisArg,this));}var EveryOperator=function(){function EveryOperator(predicate,thisArg,source){_classCallCheck(this,EveryOperator);this.predicate=predicate;this.thisArg=thisArg;this.source=source;}_createClass(EveryOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new EverySubscriber(observer,this.predicate,this.thisArg,this.source));}}]);return EveryOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var EverySubscriber=function(_Subscriber29){_inherits(EverySubscriber,_Subscriber29);function EverySubscriber(destination,predicate,thisArg,source){_classCallCheck(this,EverySubscriber);var _this112=_possibleConstructorReturn(this,(EverySubscriber.__proto__||Object.getPrototypeOf(EverySubscriber)).call(this,destination));_this112.predicate=predicate;_this112.thisArg=thisArg;_this112.source=source;_this112.index=0;_this112.thisArg=thisArg||_this112;return _this112;}_createClass(EverySubscriber,[{key:'notifyComplete',value:function notifyComplete(everyValueMatch){this.destination.next(everyValueMatch);this.destination.complete();}},{key:'_next',value:function _next(value){var result=false;try{result=this.predicate.call(this.thisArg,value,this.index++,this.source);}catch(err){this.destination.error(err);return;}if(!result){this.notifyComplete(false);}}},{key:'_complete',value:function _complete(){this.notifyComplete(true);}}]);return EverySubscriber;}(Subscriber);Observable.prototype.every=every;/**
   * Applies a given `project` function to each value emitted by the source
   * Observable, and emits the resulting values as an Observable.
   *
   * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
   * it passes each source value through a transformation function to get
   * corresponding output values.</span>
   *
   * <img src="./img/map.png" width="100%">
   *
   * Similar to the well known `Array.prototype.map` function, this operator
   * applies a projection to each value and emits that projection in the output
   * Observable.
   *
   * @example <caption>Map every every click to the clientX position of that click</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var positions = clicks.map(ev => ev.clientX);
   * positions.subscribe(x => console.log(x));
   *
   * @see {@link mapTo}
   * @see {@link pluck}
   *
   * @param {function(value: T, index: number): R} project The function to apply
   * to each `value` emitted by the source Observable. The `index` parameter is
   * the number `i` for the i-th emission that has happened since the
   * subscription, starting from the number `0`.
   * @param {any} [thisArg] An optional argument to define what `this` is in the
   * `project` function.
   * @return {Observable<R>} An Observable that emits the values from the source
   * Observable transformed by the given `project` function.
   * @method map
   * @owner Observable
   */function map(project,thisArg){if(typeof project!=='function'){throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');}return this.lift(new MapOperator(project,thisArg));}var MapOperator=function(){function MapOperator(project,thisArg){_classCallCheck(this,MapOperator);this.project=project;this.thisArg=thisArg;}_createClass(MapOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new MapSubscriber(subscriber,this.project,this.thisArg));}}]);return MapOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MapSubscriber=function(_Subscriber30){_inherits(MapSubscriber,_Subscriber30);function MapSubscriber(destination,project,thisArg){_classCallCheck(this,MapSubscriber);var _this113=_possibleConstructorReturn(this,(MapSubscriber.__proto__||Object.getPrototypeOf(MapSubscriber)).call(this,destination));_this113.project=project;_this113.count=0;_this113.thisArg=thisArg||_this113;return _this113;}// NOTE: This looks unoptimized, but it's actually purposefully NOT
// using try/catch optimizations.
_createClass(MapSubscriber,[{key:'_next',value:function _next(value){var result=void 0;try{result=this.project.call(this.thisArg,value,this.count++);}catch(err){this.destination.error(err);return;}this.destination.next(result);}}]);return MapSubscriber;}(Subscriber);Observable.prototype.map=map;/**
   * Emits the given constant value on the output Observable every time the source
   * Observable emits a value.
   *
   * <span class="informal">Like {@link map}, but it maps every source value to
   * the same output value every time.</span>
   *
   * <img src="./img/mapTo.png" width="100%">
   *
   * Takes a constant `value` as argument, and emits that whenever the source
   * Observable emits a value. In other words, ignores the actual source value,
   * and simply uses the emission moment to know when to emit the given `value`.
   *
   * @example <caption>Map every every click to the string 'Hi'</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var greetings = clicks.mapTo('Hi');
   * greetings.subscribe(x => console.log(x));
   *
   * @see {@link map}
   *
   * @param {any} value The value to map each source value to.
   * @return {Observable} An Observable that emits the given `value` every time
   * the source Observable emits something.
   * @method mapTo
   * @owner Observable
   */function mapTo(value){return this.lift(new MapToOperator(value));}var MapToOperator=function(){function MapToOperator(value){_classCallCheck(this,MapToOperator);this.value=value;}_createClass(MapToOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new MapToSubscriber(subscriber,this.value));}}]);return MapToOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MapToSubscriber=function(_Subscriber31){_inherits(MapToSubscriber,_Subscriber31);function MapToSubscriber(destination,value){_classCallCheck(this,MapToSubscriber);var _this114=_possibleConstructorReturn(this,(MapToSubscriber.__proto__||Object.getPrototypeOf(MapToSubscriber)).call(this,destination));_this114.value=value;return _this114;}_createClass(MapToSubscriber,[{key:'_next',value:function _next(x){this.destination.next(this.value);}}]);return MapToSubscriber;}(Subscriber);Observable.prototype.mapTo=mapTo;/**
   * Represents all of the notifications from the source Observable as `next`
   * emissions marked with their original types within {@link Notification}
   * objects.
   *
   * <span class="informal">Wraps `next`, `error` and `complete` emissions in
   * {@link Notification} objects, emitted as `next` on the output Observable.
   * </span>
   *
   * <img src="./img/materialize.png" width="100%">
   *
   * `materialize` returns an Observable that emits a `next` notification for each
   * `next`, `error`, or `complete` emission of the source Observable. When the
   * source Observable emits `complete`, the output Observable will emit `next` as
   * a Notification of type "complete", and then it will emit `complete` as well.
   * When the source Observable emits `error`, the output will emit `next` as a
   * Notification of type "error", and then `complete`.
   *
   * This operator is useful for producing metadata of the source Observable, to
   * be consumed as `next` emissions. Use it in conjunction with
   * {@link dematerialize}.
   *
   * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
   * var letters = Rx.Observable.of('a', 'b', 13, 'd');
   * var upperCase = letters.map(x => x.toUpperCase());
   * var materialized = upperCase.materialize();
   * materialized.subscribe(x => console.log(x));
   *
   * @see {@link Notification}
   * @see {@link dematerialize}
   *
   * @return {Observable<Notification<T>>} An Observable that emits
   * {@link Notification} objects that wrap the original emissions from the source
   * Observable with metadata.
   * @method materialize
   * @owner Observable
   */function materialize(){return this.lift(new MaterializeOperator());}var MaterializeOperator=function(){function MaterializeOperator(){_classCallCheck(this,MaterializeOperator);}_createClass(MaterializeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new MaterializeSubscriber(subscriber));}}]);return MaterializeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MaterializeSubscriber=function(_Subscriber32){_inherits(MaterializeSubscriber,_Subscriber32);function MaterializeSubscriber(destination){_classCallCheck(this,MaterializeSubscriber);return _possibleConstructorReturn(this,(MaterializeSubscriber.__proto__||Object.getPrototypeOf(MaterializeSubscriber)).call(this,destination));}_createClass(MaterializeSubscriber,[{key:'_next',value:function _next(value){this.destination.next(Notification.createNext(value));}},{key:'_error',value:function _error(err){var destination=this.destination;destination.next(Notification.createError(err));destination.complete();}},{key:'_complete',value:function _complete(){var destination=this.destination;destination.next(Notification.createComplete());destination.complete();}}]);return MaterializeSubscriber;}(Subscriber);Observable.prototype.materialize=materialize;/**
   * Applies an accumulator function over the source Observable, and returns the
   * accumulated result when the source completes, given an optional seed value.
   *
   * <span class="informal">Combines together all values emitted on the source,
   * using an accumulator function that knows how to join a new source value into
   * the accumulation from the past.</span>
   *
   * <img src="./img/reduce.png" width="100%">
   *
   * Like
   * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
   * `reduce` applies an `accumulator` function against an accumulation and each
   * value of the source Observable (from the past) to reduce it to a single
   * value, emitted on the output Observable. Note that `reduce` will only emit
   * one value, only when the source Observable completes. It is equivalent to
   * applying operator {@link scan} followed by operator {@link last}.
   *
   * Returns an Observable that applies a specified `accumulator` function to each
   * item emitted by the source Observable. If a `seed` value is specified, then
   * that value will be used as the initial value for the accumulator. If no seed
   * value is specified, the first item of the source is used as the seed.
   *
   * @example <caption>Count the number of click events that happened in 5 seconds</caption>
   * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
   *   .takeUntil(Rx.Observable.interval(5000));
   * var ones = clicksInFiveSeconds.mapTo(1);
   * var seed = 0;
   * var count = ones.reduce((acc, one) => acc + one, seed);
   * count.subscribe(x => console.log(x));
   *
   * @see {@link count}
   * @see {@link expand}
   * @see {@link mergeScan}
   * @see {@link scan}
   *
   * @param {function(acc: R, value: T): R} accumulator The accumulator function
   * called on each source value.
   * @param {R} [seed] The initial accumulation value.
   * @return {Observable<R>} An observable of the accumulated values.
   * @return {Observable<R>} An Observable that emits a single value that is the
   * result of accumulating the values emitted by the source Observable.
   * @method reduce
   * @owner Observable
   */function reduce(accumulator,seed){return this.lift(new ReduceOperator(accumulator,seed));}var ReduceOperator=function(){function ReduceOperator(accumulator,seed){_classCallCheck(this,ReduceOperator);this.accumulator=accumulator;this.seed=seed;}_createClass(ReduceOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ReduceSubscriber(subscriber,this.accumulator,this.seed));}}]);return ReduceOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ReduceSubscriber=function(_Subscriber33){_inherits(ReduceSubscriber,_Subscriber33);function ReduceSubscriber(destination,accumulator,seed){_classCallCheck(this,ReduceSubscriber);var _this116=_possibleConstructorReturn(this,(ReduceSubscriber.__proto__||Object.getPrototypeOf(ReduceSubscriber)).call(this,destination));_this116.accumulator=accumulator;_this116.hasValue=false;_this116.acc=seed;_this116.accumulator=accumulator;_this116.hasSeed=typeof seed!=='undefined';return _this116;}_createClass(ReduceSubscriber,[{key:'_next',value:function _next(value){if(this.hasValue||(this.hasValue=this.hasSeed)){this._tryReduce(value);}else{this.acc=value;this.hasValue=true;}}},{key:'_tryReduce',value:function _tryReduce(value){var result=void 0;try{result=this.accumulator(this.acc,value);}catch(err){this.destination.error(err);return;}this.acc=result;}},{key:'_complete',value:function _complete(){if(this.hasValue||this.hasSeed){this.destination.next(this.acc);}this.destination.complete();}}]);return ReduceSubscriber;}(Subscriber);/**
   * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
   * and when source Observable completes it emits a single item: the item with the largest number.
   *
   * <img src="./img/max.png" width="100%">
   *
   * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
   * items.
   * @return {Observable} an Observable that emits item with the largest number.
   * @method max
   * @owner Observable
   */function max(comparer){var max=typeof comparer==='function'?comparer:function(x,y){return x>y?x:y;};return this.lift(new ReduceOperator(max));}Observable.prototype.max=max;Observable.prototype.merge=merge$1;Observable.prototype.mergeAll=mergeAll;Observable.prototype.mergeMap=mergeMap;Observable.prototype.flatMap=mergeMap;Observable.prototype.flatMapTo=mergeMapTo;Observable.prototype.mergeMapTo=mergeMapTo;/**
   * @param project
   * @param seed
   * @param concurrent
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method mergeScan
   * @owner Observable
   */function mergeScan(project,seed){var concurrent=arguments.length<=2||arguments[2]===undefined?Number.POSITIVE_INFINITY:arguments[2];return this.lift(new MergeScanOperator(project,seed,concurrent));}var MergeScanOperator=function(){function MergeScanOperator(project,seed,concurrent){_classCallCheck(this,MergeScanOperator);this.project=project;this.seed=seed;this.concurrent=concurrent;}_createClass(MergeScanOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new MergeScanSubscriber(subscriber,this.project,this.seed,this.concurrent));}}]);return MergeScanOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var MergeScanSubscriber=function(_OuterSubscriber23){_inherits(MergeScanSubscriber,_OuterSubscriber23);function MergeScanSubscriber(destination,project,acc,concurrent){_classCallCheck(this,MergeScanSubscriber);var _this117=_possibleConstructorReturn(this,(MergeScanSubscriber.__proto__||Object.getPrototypeOf(MergeScanSubscriber)).call(this,destination));_this117.project=project;_this117.acc=acc;_this117.concurrent=concurrent;_this117.hasValue=false;_this117.hasCompleted=false;_this117.buffer=[];_this117.active=0;_this117.index=0;return _this117;}_createClass(MergeScanSubscriber,[{key:'_next',value:function _next(value){if(this.active<this.concurrent){var index=this.index++;var ish=tryCatch(this.project)(this.acc,value);var destination=this.destination;if(ish===errorObject){destination.error(errorObject.e);}else{this.active++;this._innerSub(ish,value,index);}}else{this.buffer.push(value);}}},{key:'_innerSub',value:function _innerSub(ish,value,index){this.add(subscribeToResult(this,ish,value,index));}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.active===0&&this.buffer.length===0){if(this.hasValue===false){this.destination.next(this.acc);}this.destination.complete();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var destination=this.destination;this.acc=innerValue;this.hasValue=true;destination.next(innerValue);}},{key:'notifyComplete',value:function notifyComplete(innerSub){var buffer=this.buffer;this.remove(innerSub);this.active--;if(buffer.length>0){this._next(buffer.shift());}else if(this.active===0&&this.hasCompleted){if(this.hasValue===false){this.destination.next(this.acc);}this.destination.complete();}}}]);return MergeScanSubscriber;}(OuterSubscriber);Observable.prototype.mergeScan=mergeScan;/**
   * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
   * and when source Observable completes it emits a single item: the item with the smallest number.
   *
   * <img src="./img/min.png" width="100%">
   *
   * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
   * @return {Observable<R>} an Observable that emits item with the smallest number.
   * @method min
   * @owner Observable
   */function min(comparer){var min=typeof comparer==='function'?comparer:function(x,y){return x<y?x:y;};return this.lift(new ReduceOperator(min));}Observable.prototype.min=min;/**
   * @class ConnectableObservable<T>
   */var ConnectableObservable=function(_Observable27){_inherits(ConnectableObservable,_Observable27);function ConnectableObservable(source,subjectFactory){_classCallCheck(this,ConnectableObservable);var _this118=_possibleConstructorReturn(this,(ConnectableObservable.__proto__||Object.getPrototypeOf(ConnectableObservable)).call(this));_this118.source=source;_this118.subjectFactory=subjectFactory;_this118._refCount=0;return _this118;}_createClass(ConnectableObservable,[{key:'_subscribe',value:function _subscribe(subscriber){return this.getSubject().subscribe(subscriber);}},{key:'getSubject',value:function getSubject(){var subject=this._subject;if(!subject||subject.isStopped){this._subject=this.subjectFactory();}return this._subject;}},{key:'connect',value:function connect(){var connection=this._connection;if(!connection){connection=this._connection=new Subscription();connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(),this)));if(connection.closed){this._connection=null;connection=Subscription.EMPTY;}else{this._connection=connection;}}return connection;}},{key:'refCount',value:function refCount(){return this.lift(new RefCountOperator(this));}}]);return ConnectableObservable;}(Observable);var ConnectableSubscriber=function(_SubjectSubscriber){_inherits(ConnectableSubscriber,_SubjectSubscriber);function ConnectableSubscriber(destination,connectable){_classCallCheck(this,ConnectableSubscriber);var _this119=_possibleConstructorReturn(this,(ConnectableSubscriber.__proto__||Object.getPrototypeOf(ConnectableSubscriber)).call(this,destination));_this119.connectable=connectable;return _this119;}_createClass(ConnectableSubscriber,[{key:'_error',value:function _error(err){this._unsubscribe();_get(ConnectableSubscriber.prototype.__proto__||Object.getPrototypeOf(ConnectableSubscriber.prototype),'_error',this).call(this,err);}},{key:'_complete',value:function _complete(){this._unsubscribe();_get(ConnectableSubscriber.prototype.__proto__||Object.getPrototypeOf(ConnectableSubscriber.prototype),'_complete',this).call(this);}},{key:'_unsubscribe',value:function _unsubscribe(){var connectable=this.connectable;if(connectable){this.connectable=null;var connection=connectable._connection;connectable._refCount=0;connectable._subject=null;connectable._connection=null;if(connection){connection.unsubscribe();}}}}]);return ConnectableSubscriber;}(SubjectSubscriber);var RefCountOperator=function(){function RefCountOperator(connectable){_classCallCheck(this,RefCountOperator);this.connectable=connectable;}_createClass(RefCountOperator,[{key:'call',value:function call(subscriber,source){var connectable=this.connectable;connectable._refCount++;var refCounter=new RefCountSubscriber(subscriber,connectable);var subscription=source._subscribe(refCounter);if(!refCounter.closed){refCounter.connection=connectable.connect();}return subscription;}}]);return RefCountOperator;}();var RefCountSubscriber=function(_Subscriber34){_inherits(RefCountSubscriber,_Subscriber34);function RefCountSubscriber(destination,connectable){_classCallCheck(this,RefCountSubscriber);var _this120=_possibleConstructorReturn(this,(RefCountSubscriber.__proto__||Object.getPrototypeOf(RefCountSubscriber)).call(this,destination));_this120.connectable=connectable;return _this120;}_createClass(RefCountSubscriber,[{key:'_unsubscribe',value:function _unsubscribe(){var connectable=this.connectable;if(!connectable){this.connection=null;return;}this.connectable=null;var refCount=connectable._refCount;if(refCount<=0){this.connection=null;return;}connectable._refCount=refCount-1;if(refCount>1){this.connection=null;return;}///
// Compare the local RefCountSubscriber's connection Subscription to the
// connection Subscription on the shared ConnectableObservable. In cases
// where the ConnectableObservable source synchronously emits values, and
// the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
// execution continues to here before the RefCountOperator has a chance to
// supply the RefCountSubscriber with the shared connection Subscription.
// For example:
// ```
// Observable.range(0, 10)
//   .publish()
//   .refCount()
//   .take(5)
//   .subscribe();
// ```
// In order to account for this case, RefCountSubscriber should only dispose
// the ConnectableObservable's shared connection Subscription if the
// connection Subscription exists, *and* either:
//   a. RefCountSubscriber doesn't have a reference to the shared connection
//      Subscription yet, or,
//   b. RefCountSubscriber's connection Subscription reference is identical
//      to the shared connection Subscription
///
var connection=this.connection;var sharedConnection=connectable._connection;this.connection=null;if(sharedConnection&&(!connection||sharedConnection===connection)){sharedConnection.unsubscribe();}}}]);return RefCountSubscriber;}(Subscriber);var MulticastObservable=function(_Observable28){_inherits(MulticastObservable,_Observable28);function MulticastObservable(source,subjectFactory,selector){_classCallCheck(this,MulticastObservable);var _this121=_possibleConstructorReturn(this,(MulticastObservable.__proto__||Object.getPrototypeOf(MulticastObservable)).call(this));_this121.source=source;_this121.subjectFactory=subjectFactory;_this121.selector=selector;return _this121;}_createClass(MulticastObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var selector=this.selector;var source=this.source;var connectable=new ConnectableObservable(source,this.subjectFactory);var subscription=selector(connectable).subscribe(subscriber);subscription.add(connectable.connect());return subscription;}}]);return MulticastObservable;}(Observable);/**
   * Returns an Observable that emits the results of invoking a specified selector on items
   * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
   *
   * <img src="./img/multicast.png" width="100%">
   *
   * @param {Function|Subject} Factory function to create an intermediate subject through
   * which the source sequence's elements will be multicast to the selector function
   * or Subject to push source elements into.
   * @param {Function} Optional selector function that can use the multicasted source stream
   * as many times as needed, without causing multiple subscriptions to the source stream.
   * Subscribers to the given source will receive all notifications of the source from the
   * time of the subscription forward.
   * @return {Observable} an Observable that emits the results of invoking the selector
   * on the items emitted by a `ConnectableObservable` that shares a single subscription to
   * the underlying stream.
   * @method multicast
   * @owner Observable
   */function multicast(subjectOrSubjectFactory,selector){var subjectFactory=void 0;if(typeof subjectOrSubjectFactory==='function'){subjectFactory=subjectOrSubjectFactory;}else{subjectFactory=function subjectFactory(){return subjectOrSubjectFactory;};}return!selector?new ConnectableObservable(this,subjectFactory):new MulticastObservable(this,subjectFactory,selector);}Observable.prototype.multicast=multicast;Observable.prototype.observeOn=observeOn;Observable.prototype.onErrorResumeNext=onErrorResumeNext;/**
   * Groups pairs of consecutive emissions together and emits them as an array of
   * two values.
   *
   * <span class="informal">Puts the current value and previous value together as
   * an array, and emits that.</span>
   *
   * <img src="./img/pairwise.png" width="100%">
   *
   * The Nth emission from the source Observable will cause the output Observable
   * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
   * pair. For this reason, `pairwise` emits on the second and subsequent
   * emissions from the source Observable, but not on the first emission, because
   * there is no previous value in that case.
   *
   * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var pairs = clicks.pairwise();
   * var distance = pairs.map(pair => {
   *   var x0 = pair[0].clientX;
   *   var y0 = pair[0].clientY;
   *   var x1 = pair[1].clientX;
   *   var y1 = pair[1].clientY;
   *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
   * });
   * distance.subscribe(x => console.log(x));
   *
   * @see {@link buffer}
   * @see {@link bufferCount}
   *
   * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
   * consecutive values from the source Observable.
   * @method pairwise
   * @owner Observable
   */function pairwise(){return this.lift(new PairwiseOperator());}var PairwiseOperator=function(){function PairwiseOperator(){_classCallCheck(this,PairwiseOperator);}_createClass(PairwiseOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new PairwiseSubscriber(subscriber));}}]);return PairwiseOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var PairwiseSubscriber=function(_Subscriber35){_inherits(PairwiseSubscriber,_Subscriber35);function PairwiseSubscriber(destination){_classCallCheck(this,PairwiseSubscriber);var _this122=_possibleConstructorReturn(this,(PairwiseSubscriber.__proto__||Object.getPrototypeOf(PairwiseSubscriber)).call(this,destination));_this122.hasPrev=false;return _this122;}_createClass(PairwiseSubscriber,[{key:'_next',value:function _next(value){if(this.hasPrev){this.destination.next([this.prev,value]);}else{this.hasPrev=true;}this.prev=value;}}]);return PairwiseSubscriber;}(Subscriber);Observable.prototype.pairwise=pairwise;function not(pred,thisArg){function notPred(){return!notPred.pred.apply(notPred.thisArg,arguments);}notPred.pred=pred;notPred.thisArg=thisArg;return notPred;}/**
   * Splits the source Observable into two, one with values that satisfy a
   * predicate, and another with values that don't satisfy the predicate.
   *
   * <span class="informal">It's like {@link filter}, but returns two Observables:
   * one like the output of {@link filter}, and the other with values that did not
   * pass the condition.</span>
   *
   * <img src="./img/partition.png" width="100%">
   *
   * `partition` outputs an array with two Observables that partition the values
   * from the source Observable through the given `predicate` function. The first
   * Observable in that array emits source values for which the predicate argument
   * returns true. The second Observable emits source values for which the
   * predicate returns false. The first behaves like {@link filter} and the second
   * behaves like {@link filter} with the predicate negated.
   *
   * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
   * var clicksOnDivs = parts[0];
   * var clicksElsewhere = parts[1];
   * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
   * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
   *
   * @see {@link filter}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates each value emitted by the source Observable. If it returns `true`,
   * the value is emitted on the first Observable in the returned array, if
   * `false` the value is emitted on the second Observable in the array. The
   * `index` parameter is the number `i` for the i-th source emission that has
   * happened since the subscription, starting from the number `0`.
   * @param {any} [thisArg] An optional argument to determine the value of `this`
   * in the `predicate` function.
   * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
   * with values that passed the predicate, and another with values that did not
   * pass the predicate.
   * @method partition
   * @owner Observable
   */function partition(predicate,thisArg){return[filter.call(this,predicate),filter.call(this,not(predicate,thisArg))];}Observable.prototype.partition=partition;/**
   * Maps each source value (an object) to its specified nested property.
   *
   * <span class="informal">Like {@link map}, but meant only for picking one of
   * the nested properties of every emitted object.</span>
   *
   * <img src="./img/pluck.png" width="100%">
   *
   * Given a list of strings describing a path to an object property, retrieves
   * the value of a specified nested property from all values in the source
   * Observable. If a property can't be resolved, it will return `undefined` for
   * that value.
   *
   * @example <caption>Map every every click to the tagName of the clicked target element</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var tagNames = clicks.pluck('target', 'tagName');
   * tagNames.subscribe(x => console.log(x));
   *
   * @see {@link map}
   *
   * @param {...string} properties The nested properties to pluck from each source
   * value (an object).
   * @return {Observable} Returns a new Observable of property values from the
   * source values.
   * @method pluck
   * @owner Observable
   */function pluck(){for(var _len26=arguments.length,properties=Array(_len26),_key29=0;_key29<_len26;_key29++){properties[_key29]=arguments[_key29];}var length=properties.length;if(length===0){throw new Error('list of properties cannot be empty.');}return map.call(this,plucker(properties,length));}function plucker(props,length){var mapper=function mapper(x){var currentProp=x;for(var _i18=0;_i18<length;_i18++){var p=currentProp[props[_i18]];if(typeof p!=='undefined'){currentProp=p;}else{return undefined;}}return currentProp;};return mapper;}Observable.prototype.pluck=pluck;/**
   * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
   * before it begins emitting items to those Observers that have subscribed to it.
   *
   * <img src="./img/publish.png" width="100%">
   *
   * @param {Function} Optional selector function which can use the multicasted source sequence as many times as needed,
   * without causing multiple subscriptions to the source sequence.
   * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
   * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
   * @method publish
   * @owner Observable
   */function publish(selector){return selector?multicast.call(this,function(){return new Subject();},selector):multicast.call(this,new Subject());}Observable.prototype.publish=publish;/**
   * @class BehaviorSubject<T>
   */var BehaviorSubject=function(_Subject6){_inherits(BehaviorSubject,_Subject6);function BehaviorSubject(_value){_classCallCheck(this,BehaviorSubject);var _this123=_possibleConstructorReturn(this,(BehaviorSubject.__proto__||Object.getPrototypeOf(BehaviorSubject)).call(this));_this123._value=_value;return _this123;}_createClass(BehaviorSubject,[{key:'_subscribe',value:function _subscribe(subscriber){var subscription=_get(BehaviorSubject.prototype.__proto__||Object.getPrototypeOf(BehaviorSubject.prototype),'_subscribe',this).call(this,subscriber);if(subscription&&!subscription.closed){subscriber.next(this._value);}return subscription;}},{key:'getValue',value:function getValue(){if(this.hasError){throw this.thrownError;}else if(this.closed){throw new ObjectUnsubscribedError();}else{return this._value;}}},{key:'next',value:function next(value){_get(BehaviorSubject.prototype.__proto__||Object.getPrototypeOf(BehaviorSubject.prototype),'next',this).call(this,this._value=value);}},{key:'value',get:function get(){return this.getValue();}}]);return BehaviorSubject;}(Subject);/**
   * @param value
   * @return {ConnectableObservable<T>}
   * @method publishBehavior
   * @owner Observable
   */function publishBehavior(value){return multicast.call(this,new BehaviorSubject(value));}Observable.prototype.publishBehavior=publishBehavior;/**
   * @param bufferSize
   * @param windowTime
   * @param scheduler
   * @return {ConnectableObservable<T>}
   * @method publishReplay
   * @owner Observable
   */function publishReplay(){var bufferSize=arguments.length<=0||arguments[0]===undefined?Number.POSITIVE_INFINITY:arguments[0];var windowTime=arguments.length<=1||arguments[1]===undefined?Number.POSITIVE_INFINITY:arguments[1];var scheduler=arguments[2];return multicast.call(this,new ReplaySubject(bufferSize,windowTime,scheduler));}Observable.prototype.publishReplay=publishReplay;/**
   * @return {ConnectableObservable<T>}
   * @method publishLast
   * @owner Observable
   */function publishLast(){return multicast.call(this,new AsyncSubject());}Observable.prototype.publishLast=publishLast;Observable.prototype.race=race;Observable.prototype.reduce=reduce;/**
   * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
   * on a particular Scheduler.
   *
   * <img src="./img/repeat.png" width="100%">
   *
   * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
   * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
   * an empty Observable.
   * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
   * count times.
   * @method repeat
   * @owner Observable
   */function repeat(){var count=arguments.length<=0||arguments[0]===undefined?-1:arguments[0];if(count===0){return new EmptyObservable();}else if(count<0){return this.lift(new RepeatOperator(-1,this));}else{return this.lift(new RepeatOperator(count-1,this));}}var RepeatOperator=function(){function RepeatOperator(count,source){_classCallCheck(this,RepeatOperator);this.count=count;this.source=source;}_createClass(RepeatOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new RepeatSubscriber(subscriber,this.count,this.source));}}]);return RepeatOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var RepeatSubscriber=function(_Subscriber36){_inherits(RepeatSubscriber,_Subscriber36);function RepeatSubscriber(destination,count,source){_classCallCheck(this,RepeatSubscriber);var _this124=_possibleConstructorReturn(this,(RepeatSubscriber.__proto__||Object.getPrototypeOf(RepeatSubscriber)).call(this,destination));_this124.count=count;_this124.source=source;return _this124;}_createClass(RepeatSubscriber,[{key:'complete',value:function complete(){if(!this.isStopped){var source=this.source;var count=this.count;if(count===0){return _get(RepeatSubscriber.prototype.__proto__||Object.getPrototypeOf(RepeatSubscriber.prototype),'complete',this).call(this);}else if(count>-1){this.count=count-1;}this.unsubscribe();this.isStopped=false;this.closed=false;source.subscribe(this);}}}]);return RepeatSubscriber;}(Subscriber);Observable.prototype.repeat=repeat;/**
   * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
   * predicate returns true for that specific exception and retry count.
   * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
   * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
   *
   * <img src="./img/retry.png" width="100%">
   *
   * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
   * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
   * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
   * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
   * @param {number} number of retry attempts before failing.
   * @return {Observable} the source Observable modified with the retry logic.
   * @method retry
   * @owner Observable
   */function retry(){var count=arguments.length<=0||arguments[0]===undefined?-1:arguments[0];return this.lift(new RetryOperator(count,this));}var RetryOperator=function(){function RetryOperator(count,source){_classCallCheck(this,RetryOperator);this.count=count;this.source=source;}_createClass(RetryOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new RetrySubscriber(subscriber,this.count,this.source));}}]);return RetryOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var RetrySubscriber=function(_Subscriber37){_inherits(RetrySubscriber,_Subscriber37);function RetrySubscriber(destination,count,source){_classCallCheck(this,RetrySubscriber);var _this125=_possibleConstructorReturn(this,(RetrySubscriber.__proto__||Object.getPrototypeOf(RetrySubscriber)).call(this,destination));_this125.count=count;_this125.source=source;return _this125;}_createClass(RetrySubscriber,[{key:'error',value:function error(err){if(!this.isStopped){var source=this.source;var count=this.count;if(count===0){return _get(RetrySubscriber.prototype.__proto__||Object.getPrototypeOf(RetrySubscriber.prototype),'error',this).call(this,err);}else if(count>-1){this.count=count-1;}this.unsubscribe();this.isStopped=false;this.closed=false;source.subscribe(this);}}}]);return RetrySubscriber;}(Subscriber);Observable.prototype.retry=retry;/**
   * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
   * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
   * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
   * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
   * Scheduler.
   *
   * <img src="./img/retryWhen.png" width="100%">
   *
   * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
   * aborting the retry.
   * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
   * @return {Observable} the source Observable modified with retry logic.
   * @method retryWhen
   * @owner Observable
   */function retryWhen(notifier){return this.lift(new RetryWhenOperator(notifier,this));}var RetryWhenOperator=function(){function RetryWhenOperator(notifier,source){_classCallCheck(this,RetryWhenOperator);this.notifier=notifier;this.source=source;}_createClass(RetryWhenOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new RetryWhenSubscriber(subscriber,this.notifier,this.source));}}]);return RetryWhenOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var RetryWhenSubscriber=function(_OuterSubscriber24){_inherits(RetryWhenSubscriber,_OuterSubscriber24);function RetryWhenSubscriber(destination,notifier,source){_classCallCheck(this,RetryWhenSubscriber);var _this126=_possibleConstructorReturn(this,(RetryWhenSubscriber.__proto__||Object.getPrototypeOf(RetryWhenSubscriber)).call(this,destination));_this126.notifier=notifier;_this126.source=source;return _this126;}_createClass(RetryWhenSubscriber,[{key:'error',value:function error(err){if(!this.isStopped){var errors=this.errors;var retries=this.retries;var retriesSubscription=this.retriesSubscription;if(!retries){errors=new Subject();retries=tryCatch(this.notifier)(errors);if(retries===errorObject){return _get(RetryWhenSubscriber.prototype.__proto__||Object.getPrototypeOf(RetryWhenSubscriber.prototype),'error',this).call(this,errorObject.e);}retriesSubscription=subscribeToResult(this,retries);}else{this.errors=null;this.retriesSubscription=null;}this.unsubscribe();this.closed=false;this.errors=errors;this.retries=retries;this.retriesSubscription=retriesSubscription;errors.next(err);}}},{key:'_unsubscribe',value:function _unsubscribe(){var errors=this.errors;var retriesSubscription=this.retriesSubscription;if(errors){errors.unsubscribe();this.errors=null;}if(retriesSubscription){retriesSubscription.unsubscribe();this.retriesSubscription=null;}this.retries=null;}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var errors=this.errors;var retries=this.retries;var retriesSubscription=this.retriesSubscription;this.errors=null;this.retries=null;this.retriesSubscription=null;this.unsubscribe();this.isStopped=false;this.closed=false;this.errors=errors;this.retries=retries;this.retriesSubscription=retriesSubscription;this.source.subscribe(this);}}]);return RetryWhenSubscriber;}(OuterSubscriber);Observable.prototype.retryWhen=retryWhen;/**
   * Emits the most recently emitted value from the source Observable whenever
   * another Observable, the `notifier`, emits.
   *
   * <span class="informal">It's like {@link sampleTime}, but samples whenever
   * the `notifier` Observable emits something.</span>
   *
   * <img src="./img/sample.png" width="100%">
   *
   * Whenever the `notifier` Observable emits a value or completes, `sample`
   * looks at the source Observable and emits whichever value it has most recently
   * emitted since the previous sampling, unless the source has not emitted
   * anything since the previous sampling. The `notifier` is subscribed to as soon
   * as the output Observable is subscribed.
   *
   * @example <caption>On every click, sample the most recent "seconds" timer</caption>
   * var seconds = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = seconds.sample(clicks);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounce}
   * @see {@link sampleTime}
   * @see {@link throttle}
   *
   * @param {Observable<any>} notifier The Observable to use for sampling the
   * source Observable.
   * @return {Observable<T>} An Observable that emits the results of sampling the
   * values emitted by the source Observable whenever the notifier Observable
   * emits value or completes.
   * @method sample
   * @owner Observable
   */function sample(notifier){return this.lift(new SampleOperator(notifier));}var SampleOperator=function(){function SampleOperator(notifier){_classCallCheck(this,SampleOperator);this.notifier=notifier;}_createClass(SampleOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SampleSubscriber(subscriber,this.notifier));}}]);return SampleOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SampleSubscriber=function(_OuterSubscriber25){_inherits(SampleSubscriber,_OuterSubscriber25);function SampleSubscriber(destination,notifier){_classCallCheck(this,SampleSubscriber);var _this127=_possibleConstructorReturn(this,(SampleSubscriber.__proto__||Object.getPrototypeOf(SampleSubscriber)).call(this,destination));_this127.hasValue=false;_this127.add(subscribeToResult(_this127,notifier));return _this127;}_createClass(SampleSubscriber,[{key:'_next',value:function _next(value){this.value=value;this.hasValue=true;}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.emitValue();}},{key:'notifyComplete',value:function notifyComplete(){this.emitValue();}},{key:'emitValue',value:function emitValue(){if(this.hasValue){this.hasValue=false;this.destination.next(this.value);}}}]);return SampleSubscriber;}(OuterSubscriber);Observable.prototype.sample=sample;/**
   * Emits the most recently emitted value from the source Observable within
   * periodic time intervals.
   *
   * <span class="informal">Samples the source Observable at periodic time
   * intervals, emitting what it samples.</span>
   *
   * <img src="./img/sampleTime.png" width="100%">
   *
   * `sampleTime` periodically looks at the source Observable and emits whichever
   * value it has most recently emitted since the previous sampling, unless the
   * source has not emitted anything since the previous sampling. The sampling
   * happens periodically in time every `period` milliseconds (or the time unit
   * defined by the optional `scheduler` argument). The sampling starts as soon as
   * the output Observable is subscribed.
   *
   * @example <caption>Every second, emit the most recent click at most once</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.sampleTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sample}
   * @see {@link throttleTime}
   *
   * @param {number} period The sampling period expressed in milliseconds or the
   * time unit determined internally by the optional `scheduler`.
   * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
   * managing the timers that handle the sampling.
   * @return {Observable<T>} An Observable that emits the results of sampling the
   * values emitted by the source Observable at the specified time interval.
   * @method sampleTime
   * @owner Observable
   */function sampleTime(period){var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];return this.lift(new SampleTimeOperator(period,scheduler));}var SampleTimeOperator=function(){function SampleTimeOperator(period,scheduler){_classCallCheck(this,SampleTimeOperator);this.period=period;this.scheduler=scheduler;}_createClass(SampleTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SampleTimeSubscriber(subscriber,this.period,this.scheduler));}}]);return SampleTimeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SampleTimeSubscriber=function(_Subscriber38){_inherits(SampleTimeSubscriber,_Subscriber38);function SampleTimeSubscriber(destination,period,scheduler){_classCallCheck(this,SampleTimeSubscriber);var _this128=_possibleConstructorReturn(this,(SampleTimeSubscriber.__proto__||Object.getPrototypeOf(SampleTimeSubscriber)).call(this,destination));_this128.period=period;_this128.scheduler=scheduler;_this128.hasValue=false;_this128.add(scheduler.schedule(dispatchNotification,period,{subscriber:_this128,period:period}));return _this128;}_createClass(SampleTimeSubscriber,[{key:'_next',value:function _next(value){this.lastValue=value;this.hasValue=true;}},{key:'notifyNext',value:function notifyNext(){if(this.hasValue){this.hasValue=false;this.destination.next(this.lastValue);}}}]);return SampleTimeSubscriber;}(Subscriber);function dispatchNotification(state){var subscriber=state.subscriber;var period=state.period;subscriber.notifyNext();this.schedule(state,period);}Observable.prototype.sampleTime=sampleTime;/**
   * Applies an accumulator function over the source Observable, and returns each
   * intermediate result, with an optional seed value.
   *
   * <span class="informal">It's like {@link reduce}, but emits the current
   * accumulation whenever the source emits a value.</span>
   *
   * <img src="./img/scan.png" width="100%">
   *
   * Combines together all values emitted on the source, using an accumulator
   * function that knows how to join a new source value into the accumulation from
   * the past. Is similar to {@link reduce}, but emits the intermediate
   * accumulations.
   *
   * Returns an Observable that applies a specified `accumulator` function to each
   * item emitted by the source Observable. If a `seed` value is specified, then
   * that value will be used as the initial value for the accumulator. If no seed
   * value is specified, the first item of the source is used as the seed.
   *
   * @example <caption>Count the number of click events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var ones = clicks.mapTo(1);
   * var seed = 0;
   * var count = ones.scan((acc, one) => acc + one, seed);
   * count.subscribe(x => console.log(x));
   *
   * @see {@link expand}
   * @see {@link mergeScan}
   * @see {@link reduce}
   *
   * @param {function(acc: R, value: T, index: number): R} accumulator
   * The accumulator function called on each source value.
   * @param {T|R} [seed] The initial accumulation value.
   * @return {Observable<R>} An observable of the accumulated values.
   * @method scan
   * @owner Observable
   */function scan(accumulator,seed){return this.lift(new ScanOperator(accumulator,seed));}var ScanOperator=function(){function ScanOperator(accumulator,seed){_classCallCheck(this,ScanOperator);this.accumulator=accumulator;this.seed=seed;}_createClass(ScanOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ScanSubscriber(subscriber,this.accumulator,this.seed));}}]);return ScanOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ScanSubscriber=function(_Subscriber39){_inherits(ScanSubscriber,_Subscriber39);function ScanSubscriber(destination,accumulator,seed){_classCallCheck(this,ScanSubscriber);var _this129=_possibleConstructorReturn(this,(ScanSubscriber.__proto__||Object.getPrototypeOf(ScanSubscriber)).call(this,destination));_this129.accumulator=accumulator;_this129.index=0;_this129.accumulatorSet=false;_this129.seed=seed;_this129.accumulatorSet=typeof seed!=='undefined';return _this129;}_createClass(ScanSubscriber,[{key:'_next',value:function _next(value){if(!this.accumulatorSet){this.seed=value;this.destination.next(value);}else{return this._tryNext(value);}}},{key:'_tryNext',value:function _tryNext(value){var index=this.index++;var result=void 0;try{result=this.accumulator(this.seed,value,index);}catch(err){this.destination.error(err);}this.seed=result;this.destination.next(result);}},{key:'seed',get:function get(){return this._seed;},set:function set(value){this.accumulatorSet=true;this._seed=value;}}]);return ScanSubscriber;}(Subscriber);Observable.prototype.scan=scan;function shareSubjectFactory(){return new Subject();}/**
   * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
   * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
   * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
   * This is an alias for .publish().refCount().
   *
   * <img src="./img/share.png" width="100%">
   *
   * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
   * @method share
   * @owner Observable
   */function share(){return multicast.call(this,shareSubjectFactory).refCount();};Observable.prototype.share=share;/**
   * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
   * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
   * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
   *
   * <img src="./img/single.png" width="100%">
   *
   * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
   * callback if the Observable completes before any `next` notification was sent.
   * @param {Function} a predicate function to evaluate items emitted by the source Observable.
   * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
   * the predicate.
   .
   * @method single
   * @owner Observable
   */function single(predicate){return this.lift(new SingleOperator(predicate,this));}var SingleOperator=function(){function SingleOperator(predicate,source){_classCallCheck(this,SingleOperator);this.predicate=predicate;this.source=source;}_createClass(SingleOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SingleSubscriber(subscriber,this.predicate,this.source));}}]);return SingleOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SingleSubscriber=function(_Subscriber40){_inherits(SingleSubscriber,_Subscriber40);function SingleSubscriber(destination,predicate,source){_classCallCheck(this,SingleSubscriber);var _this130=_possibleConstructorReturn(this,(SingleSubscriber.__proto__||Object.getPrototypeOf(SingleSubscriber)).call(this,destination));_this130.predicate=predicate;_this130.source=source;_this130.seenValue=false;_this130.index=0;return _this130;}_createClass(SingleSubscriber,[{key:'applySingleValue',value:function applySingleValue(value){if(this.seenValue){this.destination.error('Sequence contains more than one element');}else{this.seenValue=true;this.singleValue=value;}}},{key:'_next',value:function _next(value){var predicate=this.predicate;this.index++;if(predicate){this.tryNext(value);}else{this.applySingleValue(value);}}},{key:'tryNext',value:function tryNext(value){try{var result=this.predicate(value,this.index,this.source);if(result){this.applySingleValue(value);}}catch(err){this.destination.error(err);}}},{key:'_complete',value:function _complete(){var destination=this.destination;if(this.index>0){destination.next(this.seenValue?this.singleValue:undefined);destination.complete();}else{destination.error(new EmptyError());}}}]);return SingleSubscriber;}(Subscriber);Observable.prototype.single=single;/**
   * Returns an Observable that skips `n` items emitted by an Observable.
   *
   * <img src="./img/skip.png" width="100%">
   *
   * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
   * @return {Observable} an Observable that skips values emitted by the source Observable.
   *
   * @method skip
   * @owner Observable
   */function skip(total){return this.lift(new SkipOperator(total));}var SkipOperator=function(){function SkipOperator(total){_classCallCheck(this,SkipOperator);this.total=total;}_createClass(SkipOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SkipSubscriber(subscriber,this.total));}}]);return SkipOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SkipSubscriber=function(_Subscriber41){_inherits(SkipSubscriber,_Subscriber41);function SkipSubscriber(destination,total){_classCallCheck(this,SkipSubscriber);var _this131=_possibleConstructorReturn(this,(SkipSubscriber.__proto__||Object.getPrototypeOf(SkipSubscriber)).call(this,destination));_this131.total=total;_this131.count=0;return _this131;}_createClass(SkipSubscriber,[{key:'_next',value:function _next(x){if(++this.count>this.total){this.destination.next(x);}}}]);return SkipSubscriber;}(Subscriber);Observable.prototype.skip=skip;/**
   * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
   *
   * <img src="./img/skipUntil.png" width="100%">
   *
   * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
   * be mirrored by the resulting Observable.
   * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
   * an item, then emits the remaining items.
   * @method skipUntil
   * @owner Observable
   */function skipUntil(notifier){return this.lift(new SkipUntilOperator(notifier));}var SkipUntilOperator=function(){function SkipUntilOperator(notifier){_classCallCheck(this,SkipUntilOperator);this.notifier=notifier;}_createClass(SkipUntilOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SkipUntilSubscriber(subscriber,this.notifier));}}]);return SkipUntilOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SkipUntilSubscriber=function(_OuterSubscriber26){_inherits(SkipUntilSubscriber,_OuterSubscriber26);function SkipUntilSubscriber(destination,notifier){_classCallCheck(this,SkipUntilSubscriber);var _this132=_possibleConstructorReturn(this,(SkipUntilSubscriber.__proto__||Object.getPrototypeOf(SkipUntilSubscriber)).call(this,destination));_this132.hasValue=false;_this132.isInnerStopped=false;_this132.add(subscribeToResult(_this132,notifier));return _this132;}_createClass(SkipUntilSubscriber,[{key:'_next',value:function _next(value){if(this.hasValue){_get(SkipUntilSubscriber.prototype.__proto__||Object.getPrototypeOf(SkipUntilSubscriber.prototype),'_next',this).call(this,value);}}},{key:'_complete',value:function _complete(){if(this.isInnerStopped){_get(SkipUntilSubscriber.prototype.__proto__||Object.getPrototypeOf(SkipUntilSubscriber.prototype),'_complete',this).call(this);}else{this.unsubscribe();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.hasValue=true;}},{key:'notifyComplete',value:function notifyComplete(){this.isInnerStopped=true;if(this.isStopped){_get(SkipUntilSubscriber.prototype.__proto__||Object.getPrototypeOf(SkipUntilSubscriber.prototype),'_complete',this).call(this);}}}]);return SkipUntilSubscriber;}(OuterSubscriber);Observable.prototype.skipUntil=skipUntil;/**
   * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
   * true, but emits all further source items as soon as the condition becomes false.
   *
   * <img src="./img/skipWhile.png" width="100%">
   *
   * @param {Function} predicate - a function to test each item emitted from the source Observable.
   * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
   * specified predicate becomes false.
   * @method skipWhile
   * @owner Observable
   */function skipWhile(predicate){return this.lift(new SkipWhileOperator(predicate));}var SkipWhileOperator=function(){function SkipWhileOperator(predicate){_classCallCheck(this,SkipWhileOperator);this.predicate=predicate;}_createClass(SkipWhileOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SkipWhileSubscriber(subscriber,this.predicate));}}]);return SkipWhileOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SkipWhileSubscriber=function(_Subscriber42){_inherits(SkipWhileSubscriber,_Subscriber42);function SkipWhileSubscriber(destination,predicate){_classCallCheck(this,SkipWhileSubscriber);var _this133=_possibleConstructorReturn(this,(SkipWhileSubscriber.__proto__||Object.getPrototypeOf(SkipWhileSubscriber)).call(this,destination));_this133.predicate=predicate;_this133.skipping=true;_this133.index=0;return _this133;}_createClass(SkipWhileSubscriber,[{key:'_next',value:function _next(value){var destination=this.destination;if(this.skipping){this.tryCallPredicate(value);}if(!this.skipping){destination.next(value);}}},{key:'tryCallPredicate',value:function tryCallPredicate(value){try{var result=this.predicate(value,this.index++);this.skipping=Boolean(result);}catch(err){this.destination.error(err);}}}]);return SkipWhileSubscriber;}(Subscriber);Observable.prototype.skipWhile=skipWhile;/**
   * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
   * source Observable.
   *
   * <img src="./img/startWith.png" width="100%">
   *
   * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
   * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
   * emitted by the source Observable.
   * @method startWith
   * @owner Observable
   */function startWith(){for(var _len27=arguments.length,array=Array(_len27),_key30=0;_key30<_len27;_key30++){array[_key30]=arguments[_key30];}var scheduler=array[array.length-1];if(isScheduler(scheduler)){array.pop();}else{scheduler=null;}var len=array.length;if(len===1){return concatStatic(new ScalarObservable(array[0],scheduler),this);}else if(len>1){return concatStatic(new ArrayObservable(array,scheduler),this);}else{return concatStatic(new EmptyObservable(scheduler),this);}}Observable.prototype.startWith=startWith;var ImmediateDefinition=function(){function ImmediateDefinition(root){_classCallCheck(this,ImmediateDefinition);this.root=root;if(root.setImmediate&&typeof root.setImmediate==='function'){this.setImmediate=root.setImmediate.bind(root);this.clearImmediate=root.clearImmediate.bind(root);}else{this.nextHandle=1;this.tasksByHandle={};this.currentlyRunningATask=false;// Don't get fooled by e.g. browserify environments.
if(this.canUseProcessNextTick()){// For Node.js before 0.9
this.setImmediate=this.createProcessNextTickSetImmediate();}else if(this.canUsePostMessage()){// For non-IE10 modern browsers
this.setImmediate=this.createPostMessageSetImmediate();}else if(this.canUseMessageChannel()){// For web workers, where supported
this.setImmediate=this.createMessageChannelSetImmediate();}else if(this.canUseReadyStateChange()){// For IE 6–8
this.setImmediate=this.createReadyStateChangeSetImmediate();}else{// For older browsers
this.setImmediate=this.createSetTimeoutSetImmediate();}var ci=function clearImmediate(handle){delete clearImmediate.instance.tasksByHandle[handle];};ci.instance=this;this.clearImmediate=ci;}}_createClass(ImmediateDefinition,[{key:'identify',value:function identify(o){return this.root.Object.prototype.toString.call(o);}},{key:'canUseProcessNextTick',value:function canUseProcessNextTick(){return this.identify(this.root.process)==='[object process]';}},{key:'canUseMessageChannel',value:function canUseMessageChannel(){return Boolean(this.root.MessageChannel);}},{key:'canUseReadyStateChange',value:function canUseReadyStateChange(){var document=this.root.document;return Boolean(document&&'onreadystatechange'in document.createElement('script'));}},{key:'canUsePostMessage',value:function canUsePostMessage(){var root=this.root;// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `root.postMessage` means something completely different and can't be used for this purpose.
if(root.postMessage&&!root.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=root.onmessage;root.onmessage=function(){postMessageIsAsynchronous=false;};root.postMessage('','*');root.onmessage=oldOnMessage;return postMessageIsAsynchronous;}return false;}// This function accepts the same arguments as setImmediate, but
// returns a function that requires no arguments.
},{key:'partiallyApplied',value:function partiallyApplied(handler){for(var _len28=arguments.length,args=Array(_len28>1?_len28-1:0),_key31=1;_key31<_len28;_key31++){args[_key31-1]=arguments[_key31];}var fn=function result(){var handler=result.handler;var args=result.args;if(typeof handler==='function'){handler.apply(undefined,args);}else{new Function(''+handler)();}};fn.handler=handler;fn.args=args;return fn;}},{key:'addFromSetImmediateArguments',value:function addFromSetImmediateArguments(args){this.tasksByHandle[this.nextHandle]=this.partiallyApplied.apply(undefined,args);return this.nextHandle++;}},{key:'createProcessNextTickSetImmediate',value:function createProcessNextTickSetImmediate(){var fn=function setImmediate(){var instance=setImmediate.instance;var handle=instance.addFromSetImmediateArguments(arguments);instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent,handle));return handle;};fn.instance=this;return fn;}},{key:'createPostMessageSetImmediate',value:function createPostMessageSetImmediate(){// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var root=this.root;var messagePrefix='setImmediate$'+root.Math.random()+'$';var onGlobalMessage=function globalMessageHandler(event){var instance=globalMessageHandler.instance;if(event.source===root&&typeof event.data==='string'&&event.data.indexOf(messagePrefix)===0){instance.runIfPresent(+event.data.slice(messagePrefix.length));}};onGlobalMessage.instance=this;root.addEventListener('message',onGlobalMessage,false);var fn=function setImmediate(){var messagePrefix=setImmediate.messagePrefix;var instance=setImmediate.instance;var handle=instance.addFromSetImmediateArguments(arguments);instance.root.postMessage(messagePrefix+handle,'*');return handle;};fn.instance=this;fn.messagePrefix=messagePrefix;return fn;}},{key:'runIfPresent',value:function runIfPresent(handle){// From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
// So if we're currently running a task, we'll need to delay this invocation.
if(this.currentlyRunningATask){// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// 'too much recursion' error.
this.root.setTimeout(this.partiallyApplied(this.runIfPresent,handle),0);}else{var task=this.tasksByHandle[handle];if(task){this.currentlyRunningATask=true;try{task();}finally{this.clearImmediate(handle);this.currentlyRunningATask=false;}}}}},{key:'createMessageChannelSetImmediate',value:function createMessageChannelSetImmediate(){var _this134=this;var channel=new this.root.MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;_this134.runIfPresent(handle);};var fn=function setImmediate(){var channel=setImmediate.channel;var instance=setImmediate.instance;var handle=instance.addFromSetImmediateArguments(arguments);channel.port2.postMessage(handle);return handle;};fn.channel=channel;fn.instance=this;return fn;}},{key:'createReadyStateChangeSetImmediate',value:function createReadyStateChangeSetImmediate(){var fn=function setImmediate(){var instance=setImmediate.instance;var root=instance.root;var doc=root.document;var html=doc.documentElement;var handle=instance.addFromSetImmediateArguments(arguments);// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script=doc.createElement('script');script.onreadystatechange=function(){instance.runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);return handle;};fn.instance=this;return fn;}},{key:'createSetTimeoutSetImmediate',value:function createSetTimeoutSetImmediate(){var fn=function setImmediate(){var instance=setImmediate.instance;var handle=instance.addFromSetImmediateArguments(arguments);instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent,handle),0);return handle;};fn.instance=this;return fn;}}]);return ImmediateDefinition;}();var Immediate=new ImmediateDefinition(root);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AsapAction=function(_AsyncAction2){_inherits(AsapAction,_AsyncAction2);function AsapAction(scheduler,work){_classCallCheck(this,AsapAction);var _this135=_possibleConstructorReturn(this,(AsapAction.__proto__||Object.getPrototypeOf(AsapAction)).call(this,scheduler,work));_this135.scheduler=scheduler;_this135.work=work;return _this135;}_createClass(AsapAction,[{key:'requestAsyncId',value:function requestAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If delay is greater than 0, request as an async action.
if(delay!==null&&delay>0){return _get(AsapAction.prototype.__proto__||Object.getPrototypeOf(AsapAction.prototype),'requestAsyncId',this).call(this,scheduler,id,delay);}// Push the action to the end of the scheduler queue.
scheduler.actions.push(this);// If a microtask has already been scheduled, don't schedule another
// one. If a microtask hasn't been scheduled yet, schedule one now. Return
// the current scheduled microtask id.
return scheduler.scheduled||(scheduler.scheduled=Immediate.setImmediate(scheduler.flush.bind(scheduler,null)));}},{key:'recycleAsyncId',value:function recycleAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If delay exists and is greater than 0, recycle as an async action.
if(delay!==null&&delay>0){return _get(AsapAction.prototype.__proto__||Object.getPrototypeOf(AsapAction.prototype),'recycleAsyncId',this).call(this,scheduler,id,delay);}// If the scheduler queue is empty, cancel the requested microtask and
// set the scheduled flag to undefined so the next AsapAction will schedule
// its own.
if(scheduler.actions.length===0){Immediate.clearImmediate(id);scheduler.scheduled=undefined;}// Return undefined so the action knows to request a new async id if it's rescheduled.
return undefined;}}]);return AsapAction;}(AsyncAction);var AsapScheduler=function(_AsyncScheduler2){_inherits(AsapScheduler,_AsyncScheduler2);function AsapScheduler(){_classCallCheck(this,AsapScheduler);return _possibleConstructorReturn(this,(AsapScheduler.__proto__||Object.getPrototypeOf(AsapScheduler)).apply(this,arguments));}_createClass(AsapScheduler,[{key:'flush',value:function flush(){this.active=true;this.scheduled=undefined;var actions=this.actions;var error=void 0;var index=-1;var count=actions.length;var action=actions.shift();do{if(error=action.execute(action.state,action.delay)){break;}}while(++index<count&&(action=actions.shift()));this.active=false;if(error){while(++index<count&&(action=actions.shift())){action.unsubscribe();}throw error;}}}]);return AsapScheduler;}(AsyncScheduler);var asap=new AsapScheduler(AsapAction);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var SubscribeOnObservable=function(_Observable29){_inherits(SubscribeOnObservable,_Observable29);function SubscribeOnObservable(source){var delayTime=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var scheduler=arguments.length<=2||arguments[2]===undefined?asap:arguments[2];_classCallCheck(this,SubscribeOnObservable);var _this137=_possibleConstructorReturn(this,(SubscribeOnObservable.__proto__||Object.getPrototypeOf(SubscribeOnObservable)).call(this));_this137.source=source;_this137.delayTime=delayTime;_this137.scheduler=scheduler;if(!isNumeric(delayTime)||delayTime<0){_this137.delayTime=0;}if(!scheduler||typeof scheduler.schedule!=='function'){_this137.scheduler=asap;}return _this137;}_createClass(SubscribeOnObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var delay=this.delayTime;var source=this.source;var scheduler=this.scheduler;return scheduler.schedule(SubscribeOnObservable.dispatch,delay,{source:source,subscriber:subscriber});}}],[{key:'create',value:function create(source){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var scheduler=arguments.length<=2||arguments[2]===undefined?asap:arguments[2];return new SubscribeOnObservable(source,delay,scheduler);}},{key:'dispatch',value:function dispatch(arg){var source=arg.source;var subscriber=arg.subscriber;return source.subscribe(subscriber);}}]);return SubscribeOnObservable;}(Observable);/**
   * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
   *
   * <img src="./img/subscribeOn.png" width="100%">
   *
   * @param {Scheduler} the Scheduler to perform subscription actions on.
   * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
   .
   * @method subscribeOn
   * @owner Observable
   */function subscribeOn(scheduler){var delay=arguments.length<=1||arguments[1]===undefined?0:arguments[1];return new SubscribeOnObservable(this,delay,scheduler);}Observable.prototype.subscribeOn=subscribeOn;/**
   * Converts a higher-order Observable into a first-order Observable by
   * subscribing to only the most recently emitted of those inner Observables.
   *
   * <span class="informal">Flattens an Observable-of-Observables by dropping the
   * previous inner Observable once a new one appears.</span>
   *
   * <img src="./img/switch.png" width="100%">
   *
   * `switch` subscribes to an Observable that emits Observables, also known as a
   * higher-order Observable. Each time it observes one of these emitted inner
   * Observables, the output Observable subscribes to the inner Observable and
   * begins emitting the items emitted by that. So far, it behaves
   * like {@link mergeAll}. However, when a new inner Observable is emitted,
   * `switch` unsubscribes from the earlier-emitted inner Observable and
   * subscribes to the new inner Observable and begins emitting items from it. It
   * continues to behave like this for subsequent inner Observables.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * // Each click event is mapped to an Observable that ticks every second
   * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
   * var switched = higherOrder.switch();
   * // The outcome is that `switched` is essentially a timer that restarts
   * // on every click. The interval Observables from older clicks do not merge
   * // with the current interval Observable.
   * switched.subscribe(x => console.log(x));
   *
   * @see {@link combineAll}
   * @see {@link concatAll}
   * @see {@link exhaust}
   * @see {@link mergeAll}
   * @see {@link switchMap}
   * @see {@link switchMapTo}
   * @see {@link zipAll}
   *
   * @return {Observable<T>} An Observable that emits the items emitted by the
   * Observable most recently emitted by the source Observable.
   * @method switch
   * @name switch
   * @owner Observable
   */function _switch(){return this.lift(new SwitchOperator());}var SwitchOperator=function(){function SwitchOperator(){_classCallCheck(this,SwitchOperator);}_createClass(SwitchOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SwitchSubscriber(subscriber));}}]);return SwitchOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SwitchSubscriber=function(_OuterSubscriber27){_inherits(SwitchSubscriber,_OuterSubscriber27);function SwitchSubscriber(destination){_classCallCheck(this,SwitchSubscriber);var _this138=_possibleConstructorReturn(this,(SwitchSubscriber.__proto__||Object.getPrototypeOf(SwitchSubscriber)).call(this,destination));_this138.active=0;_this138.hasCompleted=false;return _this138;}_createClass(SwitchSubscriber,[{key:'_next',value:function _next(value){this.unsubscribeInner();this.active++;this.add(this.innerSubscription=subscribeToResult(this,value));}},{key:'_complete',value:function _complete(){this.hasCompleted=true;if(this.active===0){this.destination.complete();}}},{key:'unsubscribeInner',value:function unsubscribeInner(){this.active=this.active>0?this.active-1:0;var innerSubscription=this.innerSubscription;if(innerSubscription){innerSubscription.unsubscribe();this.remove(innerSubscription);}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.destination.next(innerValue);}},{key:'notifyError',value:function notifyError(err){this.destination.error(err);}},{key:'notifyComplete',value:function notifyComplete(){this.unsubscribeInner();if(this.hasCompleted&&this.active===0){this.destination.complete();}}}]);return SwitchSubscriber;}(OuterSubscriber);Observable.prototype.switch=_switch;/**
   * Projects each source value to an Observable which is merged in the output
   * Observable, emitting values only from the most recently projected Observable.
   *
   * <span class="informal">Maps each value to an Observable, then flattens all of
   * these inner Observables using {@link switch}.</span>
   *
   * <img src="./img/switchMap.png" width="100%">
   *
   * Returns an Observable that emits items based on applying a function that you
   * supply to each item emitted by the source Observable, where that function
   * returns an (so-called "inner") Observable. Each time it observes one of these
   * inner Observables, the output Observable begins emitting the items emitted by
   * that inner Observable. When a new inner Observable is emitted, `switchMap`
   * stops emitting items from the earlier-emitted inner Observable and begins
   * emitting items from the new one. It continues to behave like this for
   * subsequent inner Observables.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMap}
   * @see {@link exhaustMap}
   * @see {@link mergeMap}
   * @see {@link switch}
   * @see {@link switchMapTo}
   *
   * @param {function(value: T, ?index: number): Observable} project A function
   * that, when applied to an item emitted by the source Observable, returns an
   * Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @return {Observable} An Observable that emits the result of applying the
   * projection function (and the optional `resultSelector`) to each item emitted
   * by the source Observable and taking only the values from the most recently
   * projected inner Observable.
   * @method switchMap
   * @owner Observable
   */function switchMap(project,resultSelector){return this.lift(new SwitchMapOperator(project,resultSelector));}var SwitchMapOperator=function(){function SwitchMapOperator(project,resultSelector){_classCallCheck(this,SwitchMapOperator);this.project=project;this.resultSelector=resultSelector;}_createClass(SwitchMapOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SwitchMapSubscriber(subscriber,this.project,this.resultSelector));}}]);return SwitchMapOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SwitchMapSubscriber=function(_OuterSubscriber28){_inherits(SwitchMapSubscriber,_OuterSubscriber28);function SwitchMapSubscriber(destination,project,resultSelector){_classCallCheck(this,SwitchMapSubscriber);var _this139=_possibleConstructorReturn(this,(SwitchMapSubscriber.__proto__||Object.getPrototypeOf(SwitchMapSubscriber)).call(this,destination));_this139.project=project;_this139.resultSelector=resultSelector;_this139.index=0;return _this139;}_createClass(SwitchMapSubscriber,[{key:'_next',value:function _next(value){var result=void 0;var index=this.index++;try{result=this.project(value,index);}catch(error){this.destination.error(error);return;}this._innerSub(result,value,index);}},{key:'_innerSub',value:function _innerSub(result,value,index){var innerSubscription=this.innerSubscription;if(innerSubscription){innerSubscription.unsubscribe();}this.add(this.innerSubscription=subscribeToResult(this,result,value,index));}},{key:'_complete',value:function _complete(){var innerSubscription=this.innerSubscription;if(!innerSubscription||innerSubscription.closed){_get(SwitchMapSubscriber.prototype.__proto__||Object.getPrototypeOf(SwitchMapSubscriber.prototype),'_complete',this).call(this);}}},{key:'_unsubscribe',value:function _unsubscribe(){this.innerSubscription=null;}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.remove(innerSub);this.innerSubscription=null;if(this.isStopped){_get(SwitchMapSubscriber.prototype.__proto__||Object.getPrototypeOf(SwitchMapSubscriber.prototype),'_complete',this).call(this);}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){if(this.resultSelector){this._tryNotifyNext(outerValue,innerValue,outerIndex,innerIndex);}else{this.destination.next(innerValue);}}},{key:'_tryNotifyNext',value:function _tryNotifyNext(outerValue,innerValue,outerIndex,innerIndex){var result=void 0;try{result=this.resultSelector(outerValue,innerValue,outerIndex,innerIndex);}catch(err){this.destination.error(err);return;}this.destination.next(result);}}]);return SwitchMapSubscriber;}(OuterSubscriber);Observable.prototype.switchMap=switchMap;/**
   * Projects each source value to the same Observable which is flattened multiple
   * times with {@link switch} in the output Observable.
   *
   * <span class="informal">It's like {@link switchMap}, but maps each value
   * always to the same inner Observable.</span>
   *
   * <img src="./img/switchMapTo.png" width="100%">
   *
   * Maps each source value to the given Observable `innerObservable` regardless
   * of the source value, and then flattens those resulting Observables into one
   * single Observable, which is the output Observable. The output Observables
   * emits values only from the most recently emitted instance of
   * `innerObservable`.
   *
   * @example <caption>Rerun an interval Observable on every click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link concatMapTo}
   * @see {@link switch}
   * @see {@link switchMap}
   * @see {@link mergeMapTo}
   *
   * @param {Observable} innerObservable An Observable to replace each value from
   * the source Observable.
   * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
   * A function to produce the value on the output Observable based on the values
   * and the indices of the source (outer) emission and the inner Observable
   * emission. The arguments passed to this function are:
   * - `outerValue`: the value that came from the source
   * - `innerValue`: the value that came from the projected Observable
   * - `outerIndex`: the "index" of the value that came from the source
   * - `innerIndex`: the "index" of the value from the projected Observable
   * @return {Observable} An Observable that emits items from the given
   * `innerObservable` every time a value is emitted on the source Observable.
   * @return {Observable} An Observable that emits items from the given
   * `innerObservable` (and optionally transformed through `resultSelector`) every
   * time a value is emitted on the source Observable, and taking only the values
   * from the most recently projected inner Observable.
   * @method switchMapTo
   * @owner Observable
   */function switchMapTo(innerObservable,resultSelector){return this.lift(new SwitchMapToOperator(innerObservable,resultSelector));}var SwitchMapToOperator=function(){function SwitchMapToOperator(observable,resultSelector){_classCallCheck(this,SwitchMapToOperator);this.observable=observable;this.resultSelector=resultSelector;}_createClass(SwitchMapToOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new SwitchMapToSubscriber(subscriber,this.observable,this.resultSelector));}}]);return SwitchMapToOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SwitchMapToSubscriber=function(_OuterSubscriber29){_inherits(SwitchMapToSubscriber,_OuterSubscriber29);function SwitchMapToSubscriber(destination,inner,resultSelector){_classCallCheck(this,SwitchMapToSubscriber);var _this140=_possibleConstructorReturn(this,(SwitchMapToSubscriber.__proto__||Object.getPrototypeOf(SwitchMapToSubscriber)).call(this,destination));_this140.inner=inner;_this140.resultSelector=resultSelector;_this140.index=0;return _this140;}_createClass(SwitchMapToSubscriber,[{key:'_next',value:function _next(value){var innerSubscription=this.innerSubscription;if(innerSubscription){innerSubscription.unsubscribe();}this.add(this.innerSubscription=subscribeToResult(this,this.inner,value,this.index++));}},{key:'_complete',value:function _complete(){var innerSubscription=this.innerSubscription;if(!innerSubscription||innerSubscription.closed){_get(SwitchMapToSubscriber.prototype.__proto__||Object.getPrototypeOf(SwitchMapToSubscriber.prototype),'_complete',this).call(this);}}},{key:'_unsubscribe',value:function _unsubscribe(){this.innerSubscription=null;}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.remove(innerSub);this.innerSubscription=null;if(this.isStopped){_get(SwitchMapToSubscriber.prototype.__proto__||Object.getPrototypeOf(SwitchMapToSubscriber.prototype),'_complete',this).call(this);}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){var resultSelector=this.resultSelector;var destination=this.destination;if(resultSelector){this.tryResultSelector(outerValue,innerValue,outerIndex,innerIndex);}else{destination.next(innerValue);}}},{key:'tryResultSelector',value:function tryResultSelector(outerValue,innerValue,outerIndex,innerIndex){var resultSelector=this.resultSelector;var destination=this.destination;var result=void 0;try{result=resultSelector(outerValue,innerValue,outerIndex,innerIndex);}catch(err){destination.error(err);return;}destination.next(result);}}]);return SwitchMapToSubscriber;}(OuterSubscriber);Observable.prototype.switchMapTo=switchMapTo;/**
   * Emits only the first `count` values emitted by the source Observable.
   *
   * <span class="informal">Takes the first `count` values from the source, then
   * completes.</span>
   *
   * <img src="./img/take.png" width="100%">
   *
   * `take` returns an Observable that emits only the first `count` values emitted
   * by the source Observable. If the source emits fewer than `count` values then
   * all of its values are emitted. After that, it completes, regardless if the
   * source completes.
   *
   * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
   * var interval = Rx.Observable.interval(1000);
   * var five = interval.take(5);
   * five.subscribe(x => console.log(x));
   *
   * @see {@link takeLast}
   * @see {@link takeUntil}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
   *
   * @param {number} count The maximum number of `next` values to emit.
   * @return {Observable<T>} An Observable that emits only the first `count`
   * values emitted by the source Observable, or all of the values from the source
   * if the source emits fewer than `count` values.
   * @method take
   * @owner Observable
   */function take(count){if(count===0){return new EmptyObservable();}else{return this.lift(new TakeOperator(count));}}var TakeOperator=function(){function TakeOperator(total){_classCallCheck(this,TakeOperator);this.total=total;if(this.total<0){throw new ArgumentOutOfRangeError();}}_createClass(TakeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TakeSubscriber(subscriber,this.total));}}]);return TakeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TakeSubscriber=function(_Subscriber43){_inherits(TakeSubscriber,_Subscriber43);function TakeSubscriber(destination,total){_classCallCheck(this,TakeSubscriber);var _this141=_possibleConstructorReturn(this,(TakeSubscriber.__proto__||Object.getPrototypeOf(TakeSubscriber)).call(this,destination));_this141.total=total;_this141.count=0;return _this141;}_createClass(TakeSubscriber,[{key:'_next',value:function _next(value){var total=this.total;if(++this.count<=total){this.destination.next(value);if(this.count===total){this.destination.complete();this.unsubscribe();}}}}]);return TakeSubscriber;}(Subscriber);Observable.prototype.take=take;/**
   * Emits only the last `count` values emitted by the source Observable.
   *
   * <span class="informal">Remembers the latest `count` values, then emits those
   * only when the source completes.</span>
   *
   * <img src="./img/takeLast.png" width="100%">
   *
   * `takeLast` returns an Observable that emits at most the last `count` values
   * emitted by the source Observable. If the source emits fewer than `count`
   * values then all of its values are emitted. This operator must wait until the
   * `complete` notification emission from the source in order to emit the `next`
   * values on the output Observable, because otherwise it is impossible to know
   * whether or not more values will be emitted on the source. For this reason,
   * all values are emitted synchronously, followed by the complete notification.
   *
   * @example <caption>Take the last 3 values of an Observable with many values</caption>
   * var many = Rx.Observable.range(1, 100);
   * var lastThree = many.takeLast(3);
   * lastThree.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeUntil}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
   * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
   *
   * @param {number} count The maximum number of values to emit from the end of
   * the sequence of values emitted by the source Observable.
   * @return {Observable<T>} An Observable that emits at most the last count
   * values emitted by the source Observable.
   * @method takeLast
   * @owner Observable
   */function takeLast(count){if(count===0){return new EmptyObservable();}else{return this.lift(new TakeLastOperator(count));}}var TakeLastOperator=function(){function TakeLastOperator(total){_classCallCheck(this,TakeLastOperator);this.total=total;if(this.total<0){throw new ArgumentOutOfRangeError();}}_createClass(TakeLastOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TakeLastSubscriber(subscriber,this.total));}}]);return TakeLastOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TakeLastSubscriber=function(_Subscriber44){_inherits(TakeLastSubscriber,_Subscriber44);function TakeLastSubscriber(destination,total){_classCallCheck(this,TakeLastSubscriber);var _this142=_possibleConstructorReturn(this,(TakeLastSubscriber.__proto__||Object.getPrototypeOf(TakeLastSubscriber)).call(this,destination));_this142.total=total;_this142.ring=new Array();_this142.count=0;return _this142;}_createClass(TakeLastSubscriber,[{key:'_next',value:function _next(value){var ring=this.ring;var total=this.total;var count=this.count++;if(ring.length<total){ring.push(value);}else{var index=count%total;ring[index]=value;}}},{key:'_complete',value:function _complete(){var destination=this.destination;var count=this.count;if(count>0){var total=this.count>=this.total?this.total:this.count;var ring=this.ring;for(var _i19=0;_i19<total;_i19++){var idx=count++%total;destination.next(ring[idx]);}}destination.complete();}}]);return TakeLastSubscriber;}(Subscriber);Observable.prototype.takeLast=takeLast;/**
   * Emits the values emitted by the source Observable until a `notifier`
   * Observable emits a value.
   *
   * <span class="informal">Lets values pass until a second Observable,
   * `notifier`, emits something. Then, it completes.</span>
   *
   * <img src="./img/takeUntil.png" width="100%">
   *
   * `takeUntil` subscribes and begins mirroring the source Observable. It also
   * monitors a second Observable, `notifier` that you provide. If the `notifier`
   * emits a value or a complete notification, the output Observable stops
   * mirroring the source Observable and completes.
   *
   * @example <caption>Tick every second until the first click happens</caption>
   * var interval = Rx.Observable.interval(1000);
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = interval.takeUntil(clicks);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeLast}
   * @see {@link takeWhile}
   * @see {@link skip}
   *
   * @param {Observable} notifier The Observable whose first emitted value will
   * cause the output Observable of `takeUntil` to stop emitting values from the
   * source Observable.
   * @return {Observable<T>} An Observable that emits the values from the source
   * Observable until such time as `notifier` emits its first value.
   * @method takeUntil
   * @owner Observable
   */function takeUntil(notifier){return this.lift(new TakeUntilOperator(notifier));}var TakeUntilOperator=function(){function TakeUntilOperator(notifier){_classCallCheck(this,TakeUntilOperator);this.notifier=notifier;}_createClass(TakeUntilOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TakeUntilSubscriber(subscriber,this.notifier));}}]);return TakeUntilOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TakeUntilSubscriber=function(_OuterSubscriber30){_inherits(TakeUntilSubscriber,_OuterSubscriber30);function TakeUntilSubscriber(destination,notifier){_classCallCheck(this,TakeUntilSubscriber);var _this143=_possibleConstructorReturn(this,(TakeUntilSubscriber.__proto__||Object.getPrototypeOf(TakeUntilSubscriber)).call(this,destination));_this143.notifier=notifier;_this143.add(subscribeToResult(_this143,notifier));return _this143;}_createClass(TakeUntilSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.complete();}},{key:'notifyComplete',value:function notifyComplete(){// noop
}}]);return TakeUntilSubscriber;}(OuterSubscriber);Observable.prototype.takeUntil=takeUntil;/**
   * Emits values emitted by the source Observable so long as each value satisfies
   * the given `predicate`, and then completes as soon as this `predicate` is not
   * satisfied.
   *
   * <span class="informal">Takes values from the source only while they pass the
   * condition given. When the first value does not satisfy, it completes.</span>
   *
   * <img src="./img/takeWhile.png" width="100%">
   *
   * `takeWhile` subscribes and begins mirroring the source Observable. Each value
   * emitted on the source is given to the `predicate` function which returns a
   * boolean, representing a condition to be satisfied by the source values. The
   * output Observable emits the source values until such time as the `predicate`
   * returns false, at which point `takeWhile` stops mirroring the source
   * Observable and completes the output Observable.
   *
   * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.takeWhile(ev => ev.clientX > 200);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link take}
   * @see {@link takeLast}
   * @see {@link takeUntil}
   * @see {@link skip}
   *
   * @param {function(value: T, index: number): boolean} predicate A function that
   * evaluates a value emitted by the source Observable and returns a boolean.
   * Also takes the (zero-based) index as the second argument.
   * @return {Observable<T>} An Observable that emits the values from the source
   * Observable so long as each value satisfies the condition defined by the
   * `predicate`, then completes.
   * @method takeWhile
   * @owner Observable
   */function takeWhile(predicate){return this.lift(new TakeWhileOperator(predicate));}var TakeWhileOperator=function(){function TakeWhileOperator(predicate){_classCallCheck(this,TakeWhileOperator);this.predicate=predicate;}_createClass(TakeWhileOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TakeWhileSubscriber(subscriber,this.predicate));}}]);return TakeWhileOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TakeWhileSubscriber=function(_Subscriber45){_inherits(TakeWhileSubscriber,_Subscriber45);function TakeWhileSubscriber(destination,predicate){_classCallCheck(this,TakeWhileSubscriber);var _this144=_possibleConstructorReturn(this,(TakeWhileSubscriber.__proto__||Object.getPrototypeOf(TakeWhileSubscriber)).call(this,destination));_this144.predicate=predicate;_this144.index=0;return _this144;}_createClass(TakeWhileSubscriber,[{key:'_next',value:function _next(value){var destination=this.destination;var result=void 0;try{result=this.predicate(value,this.index++);}catch(err){destination.error(err);return;}this.nextOrComplete(value,result);}},{key:'nextOrComplete',value:function nextOrComplete(value,predicateResult){var destination=this.destination;if(Boolean(predicateResult)){destination.next(value);}else{destination.complete();}}}]);return TakeWhileSubscriber;}(Subscriber);Observable.prototype.takeWhile=takeWhile;/**
   * Emits a value from the source Observable, then ignores subsequent source
   * values for a duration determined by another Observable, then repeats this
   * process.
   *
   * <span class="informal">It's like {@link throttleTime}, but the silencing
   * duration is determined by a second Observable.</span>
   *
   * <img src="./img/throttle.png" width="100%">
   *
   * `throttle` emits the source Observable values on the output Observable
   * when its internal timer is disabled, and ignores source values when the timer
   * is enabled. Initially, the timer is disabled. As soon as the first source
   * value arrives, it is forwarded to the output Observable, and then the timer
   * is enabled by calling the `durationSelector` function with the source value,
   * which returns the "duration" Observable. When the duration Observable emits a
   * value or completes, the timer is disabled, and this process repeats for the
   * next source value.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
   * result.subscribe(x => console.log(x));
   *
   * @see {@link audit}
   * @see {@link debounce}
   * @see {@link delayWhen}
   * @see {@link sample}
   * @see {@link throttleTime}
   *
   * @param {function(value: T): Observable|Promise} durationSelector A function
   * that receives a value from the source Observable, for computing the silencing
   * duration for each source value, returned as an Observable or a Promise.
   * @return {Observable<T>} An Observable that performs the throttle operation to
   * limit the rate of emissions from the source.
   * @method throttle
   * @owner Observable
   */function throttle(durationSelector){return this.lift(new ThrottleOperator(durationSelector));}var ThrottleOperator=function(){function ThrottleOperator(durationSelector){_classCallCheck(this,ThrottleOperator);this.durationSelector=durationSelector;}_createClass(ThrottleOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ThrottleSubscriber(subscriber,this.durationSelector));}}]);return ThrottleOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ThrottleSubscriber=function(_OuterSubscriber31){_inherits(ThrottleSubscriber,_OuterSubscriber31);function ThrottleSubscriber(destination,durationSelector){_classCallCheck(this,ThrottleSubscriber);var _this145=_possibleConstructorReturn(this,(ThrottleSubscriber.__proto__||Object.getPrototypeOf(ThrottleSubscriber)).call(this,destination));_this145.destination=destination;_this145.durationSelector=durationSelector;return _this145;}_createClass(ThrottleSubscriber,[{key:'_next',value:function _next(value){if(!this.throttled){this.tryDurationSelector(value);}}},{key:'tryDurationSelector',value:function tryDurationSelector(value){var duration=null;try{duration=this.durationSelector(value);}catch(err){this.destination.error(err);return;}this.emitAndThrottle(value,duration);}},{key:'emitAndThrottle',value:function emitAndThrottle(value,duration){this.add(this.throttled=subscribeToResult(this,duration));this.destination.next(value);}},{key:'_unsubscribe',value:function _unsubscribe(){var throttled=this.throttled;if(throttled){this.remove(throttled);this.throttled=null;throttled.unsubscribe();}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this._unsubscribe();}},{key:'notifyComplete',value:function notifyComplete(){this._unsubscribe();}}]);return ThrottleSubscriber;}(OuterSubscriber);Observable.prototype.throttle=throttle;/**
   * Emits a value from the source Observable, then ignores subsequent source
   * values for `duration` milliseconds, then repeats this process.
   *
   * <span class="informal">Lets a value pass, then ignores source values for the
   * next `duration` milliseconds.</span>
   *
   * <img src="./img/throttleTime.png" width="100%">
   *
   * `throttleTime` emits the source Observable values on the output Observable
   * when its internal timer is disabled, and ignores source values when the timer
   * is enabled. Initially, the timer is disabled. As soon as the first source
   * value arrives, it is forwarded to the output Observable, and then the timer
   * is enabled. After `duration` milliseconds (or the time unit determined
   * internally by the optional `scheduler`) has passed, the timer is disabled,
   * and this process repeats for the next source value. Optionally takes a
   * {@link Scheduler} for managing timers.
   *
   * @example <caption>Emit clicks at a rate of at most one click per second</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.throttleTime(1000);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link auditTime}
   * @see {@link debounceTime}
   * @see {@link delay}
   * @see {@link sampleTime}
   * @see {@link throttle}
   *
   * @param {number} duration Time to wait before emitting another value after
   * emitting the last value, measured in milliseconds or the time unit determined
   * internally by the optional `scheduler`.
   * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
   * managing the timers that handle the sampling.
   * @return {Observable<T>} An Observable that performs the throttle operation to
   * limit the rate of emissions from the source.
   * @method throttleTime
   * @owner Observable
   */function throttleTime(duration){var scheduler=arguments.length<=1||arguments[1]===undefined?async:arguments[1];return this.lift(new ThrottleTimeOperator(duration,scheduler));}var ThrottleTimeOperator=function(){function ThrottleTimeOperator(duration,scheduler){_classCallCheck(this,ThrottleTimeOperator);this.duration=duration;this.scheduler=scheduler;}_createClass(ThrottleTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ThrottleTimeSubscriber(subscriber,this.duration,this.scheduler));}}]);return ThrottleTimeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ThrottleTimeSubscriber=function(_Subscriber46){_inherits(ThrottleTimeSubscriber,_Subscriber46);function ThrottleTimeSubscriber(destination,duration,scheduler){_classCallCheck(this,ThrottleTimeSubscriber);var _this146=_possibleConstructorReturn(this,(ThrottleTimeSubscriber.__proto__||Object.getPrototypeOf(ThrottleTimeSubscriber)).call(this,destination));_this146.duration=duration;_this146.scheduler=scheduler;return _this146;}_createClass(ThrottleTimeSubscriber,[{key:'_next',value:function _next(value){if(!this.throttled){this.add(this.throttled=this.scheduler.schedule(dispatchNext$5,this.duration,{subscriber:this}));this.destination.next(value);}}},{key:'clearThrottle',value:function clearThrottle(){var throttled=this.throttled;if(throttled){throttled.unsubscribe();this.remove(throttled);this.throttled=null;}}}]);return ThrottleTimeSubscriber;}(Subscriber);function dispatchNext$5(arg){var subscriber=arg.subscriber;subscriber.clearThrottle();}Observable.prototype.throttleTime=throttleTime;/**
   * @param scheduler
   * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
   * @method timeInterval
   * @owner Observable
   */function timeInterval(){var scheduler=arguments.length<=0||arguments[0]===undefined?async:arguments[0];return this.lift(new TimeIntervalOperator(scheduler));}var TimeInterval=function TimeInterval(value,interval){_classCallCheck(this,TimeInterval);this.value=value;this.interval=interval;};;var TimeIntervalOperator=function(){function TimeIntervalOperator(scheduler){_classCallCheck(this,TimeIntervalOperator);this.scheduler=scheduler;}_createClass(TimeIntervalOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new TimeIntervalSubscriber(observer,this.scheduler));}}]);return TimeIntervalOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TimeIntervalSubscriber=function(_Subscriber47){_inherits(TimeIntervalSubscriber,_Subscriber47);function TimeIntervalSubscriber(destination,scheduler){_classCallCheck(this,TimeIntervalSubscriber);var _this147=_possibleConstructorReturn(this,(TimeIntervalSubscriber.__proto__||Object.getPrototypeOf(TimeIntervalSubscriber)).call(this,destination));_this147.scheduler=scheduler;_this147.lastTime=0;_this147.lastTime=scheduler.now();return _this147;}_createClass(TimeIntervalSubscriber,[{key:'_next',value:function _next(value){var now=this.scheduler.now();var span=now-this.lastTime;this.lastTime=now;this.destination.next(new TimeInterval(value,span));}}]);return TimeIntervalSubscriber;}(Subscriber);Observable.prototype.timeInterval=timeInterval;/**
   * @param due
   * @param errorToSend
   * @param scheduler
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method timeout
   * @owner Observable
   */function timeout(due){var errorToSend=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var scheduler=arguments.length<=2||arguments[2]===undefined?async:arguments[2];var absoluteTimeout=isDate(due);var waitFor=absoluteTimeout?+due-scheduler.now():Math.abs(due);return this.lift(new TimeoutOperator(waitFor,absoluteTimeout,errorToSend,scheduler));}var TimeoutOperator=function(){function TimeoutOperator(waitFor,absoluteTimeout,errorToSend,scheduler){_classCallCheck(this,TimeoutOperator);this.waitFor=waitFor;this.absoluteTimeout=absoluteTimeout;this.errorToSend=errorToSend;this.scheduler=scheduler;}_createClass(TimeoutOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TimeoutSubscriber(subscriber,this.absoluteTimeout,this.waitFor,this.errorToSend,this.scheduler));}}]);return TimeoutOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TimeoutSubscriber=function(_Subscriber48){_inherits(TimeoutSubscriber,_Subscriber48);function TimeoutSubscriber(destination,absoluteTimeout,waitFor,errorToSend,scheduler){_classCallCheck(this,TimeoutSubscriber);var _this148=_possibleConstructorReturn(this,(TimeoutSubscriber.__proto__||Object.getPrototypeOf(TimeoutSubscriber)).call(this,destination));_this148.absoluteTimeout=absoluteTimeout;_this148.waitFor=waitFor;_this148.errorToSend=errorToSend;_this148.scheduler=scheduler;_this148.index=0;_this148._previousIndex=0;_this148._hasCompleted=false;_this148.scheduleTimeout();return _this148;}_createClass(TimeoutSubscriber,[{key:'scheduleTimeout',value:function scheduleTimeout(){var currentIndex=this.index;this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout,this.waitFor,{subscriber:this,index:currentIndex});this.index++;this._previousIndex=currentIndex;}},{key:'_next',value:function _next(value){this.destination.next(value);if(!this.absoluteTimeout){this.scheduleTimeout();}}},{key:'_error',value:function _error(err){this.destination.error(err);this._hasCompleted=true;}},{key:'_complete',value:function _complete(){this.destination.complete();this._hasCompleted=true;}},{key:'notifyTimeout',value:function notifyTimeout(){this.error(this.errorToSend||new Error('timeout'));}},{key:'previousIndex',get:function get(){return this._previousIndex;}},{key:'hasCompleted',get:function get(){return this._hasCompleted;}}],[{key:'dispatchTimeout',value:function dispatchTimeout(state){var source=state.subscriber;var currentIndex=state.index;if(!source.hasCompleted&&source.previousIndex===currentIndex){source.notifyTimeout();}}}]);return TimeoutSubscriber;}(Subscriber);Observable.prototype.timeout=timeout;/**
   * @param due
   * @param withObservable
   * @param scheduler
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method timeoutWith
   * @owner Observable
   */function timeoutWith(due,withObservable){var scheduler=arguments.length<=2||arguments[2]===undefined?async:arguments[2];var absoluteTimeout=isDate(due);var waitFor=absoluteTimeout?+due-scheduler.now():Math.abs(due);return this.lift(new TimeoutWithOperator(waitFor,absoluteTimeout,withObservable,scheduler));}var TimeoutWithOperator=function(){function TimeoutWithOperator(waitFor,absoluteTimeout,withObservable,scheduler){_classCallCheck(this,TimeoutWithOperator);this.waitFor=waitFor;this.absoluteTimeout=absoluteTimeout;this.withObservable=withObservable;this.scheduler=scheduler;}_createClass(TimeoutWithOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new TimeoutWithSubscriber(subscriber,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler));}}]);return TimeoutWithOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var TimeoutWithSubscriber=function(_OuterSubscriber32){_inherits(TimeoutWithSubscriber,_OuterSubscriber32);function TimeoutWithSubscriber(destination,absoluteTimeout,waitFor,withObservable,scheduler){_classCallCheck(this,TimeoutWithSubscriber);var _this149=_possibleConstructorReturn(this,(TimeoutWithSubscriber.__proto__||Object.getPrototypeOf(TimeoutWithSubscriber)).call(this));_this149.destination=destination;_this149.absoluteTimeout=absoluteTimeout;_this149.waitFor=waitFor;_this149.withObservable=withObservable;_this149.scheduler=scheduler;_this149.timeoutSubscription=undefined;_this149.index=0;_this149._previousIndex=0;_this149._hasCompleted=false;destination.add(_this149);_this149.scheduleTimeout();return _this149;}_createClass(TimeoutWithSubscriber,[{key:'scheduleTimeout',value:function scheduleTimeout(){var currentIndex=this.index;var timeoutState={subscriber:this,index:currentIndex};this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout,this.waitFor,timeoutState);this.index++;this._previousIndex=currentIndex;}},{key:'_next',value:function _next(value){this.destination.next(value);if(!this.absoluteTimeout){this.scheduleTimeout();}}},{key:'_error',value:function _error(err){this.destination.error(err);this._hasCompleted=true;}},{key:'_complete',value:function _complete(){this.destination.complete();this._hasCompleted=true;}},{key:'handleTimeout',value:function handleTimeout(){if(!this.closed){var withObservable=this.withObservable;this.unsubscribe();this.destination.add(this.timeoutSubscription=subscribeToResult(this,withObservable));}}},{key:'previousIndex',get:function get(){return this._previousIndex;}},{key:'hasCompleted',get:function get(){return this._hasCompleted;}}],[{key:'dispatchTimeout',value:function dispatchTimeout(state){var source=state.subscriber;var currentIndex=state.index;if(!source.hasCompleted&&source.previousIndex===currentIndex){source.handleTimeout();}}}]);return TimeoutWithSubscriber;}(OuterSubscriber);Observable.prototype.timeoutWith=timeoutWith;/**
   * @param scheduler
   * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
   * @method timestamp
   * @owner Observable
   */function timestamp(){var scheduler=arguments.length<=0||arguments[0]===undefined?async:arguments[0];return this.lift(new TimestampOperator(scheduler));}var Timestamp=function Timestamp(value,timestamp){_classCallCheck(this,Timestamp);this.value=value;this.timestamp=timestamp;};;var TimestampOperator=function(){function TimestampOperator(scheduler){_classCallCheck(this,TimestampOperator);this.scheduler=scheduler;}_createClass(TimestampOperator,[{key:'call',value:function call(observer,source){return source._subscribe(new TimestampSubscriber(observer,this.scheduler));}}]);return TimestampOperator;}();var TimestampSubscriber=function(_Subscriber49){_inherits(TimestampSubscriber,_Subscriber49);function TimestampSubscriber(destination,scheduler){_classCallCheck(this,TimestampSubscriber);var _this150=_possibleConstructorReturn(this,(TimestampSubscriber.__proto__||Object.getPrototypeOf(TimestampSubscriber)).call(this,destination));_this150.scheduler=scheduler;return _this150;}_createClass(TimestampSubscriber,[{key:'_next',value:function _next(value){var now=this.scheduler.now();this.destination.next(new Timestamp(value,now));}}]);return TimestampSubscriber;}(Subscriber);Observable.prototype.timestamp=timestamp;/**
   * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
   * @method toArray
   * @owner Observable
   */function toArray(){return this.lift(new ToArrayOperator());}var ToArrayOperator=function(){function ToArrayOperator(){_classCallCheck(this,ToArrayOperator);}_createClass(ToArrayOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new ToArraySubscriber(subscriber));}}]);return ToArrayOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ToArraySubscriber=function(_Subscriber50){_inherits(ToArraySubscriber,_Subscriber50);function ToArraySubscriber(destination){_classCallCheck(this,ToArraySubscriber);var _this151=_possibleConstructorReturn(this,(ToArraySubscriber.__proto__||Object.getPrototypeOf(ToArraySubscriber)).call(this,destination));_this151.array=[];return _this151;}_createClass(ToArraySubscriber,[{key:'_next',value:function _next(x){this.array.push(x);}},{key:'_complete',value:function _complete(){this.destination.next(this.array);this.destination.complete();}}]);return ToArraySubscriber;}(Subscriber);Observable.prototype.toArray=toArray;/**
   * @param PromiseCtor
   * @return {Promise<T>}
   * @method toPromise
   * @owner Observable
   */function toPromise(PromiseCtor){var _this152=this;if(!PromiseCtor){if(root.Rx&&root.Rx.config&&root.Rx.config.Promise){PromiseCtor=root.Rx.config.Promise;}else if(root.Promise){PromiseCtor=root.Promise;}}if(!PromiseCtor){throw new Error('no Promise impl found');}return new PromiseCtor(function(resolve,reject){var value=void 0;_this152.subscribe(function(x){return value=x;},function(err){return reject(err);},function(){return resolve(value);});});}Observable.prototype.toPromise=toPromise;/**
   * Branch out the source Observable values as a nested Observable whenever
   * `windowBoundaries` emits.
   *
   * <span class="informal">It's like {@link buffer}, but emits a nested Observable
   * instead of an array.</span>
   *
   * <img src="./img/window.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits connected, non-overlapping
   * windows. It emits the current window and opens a new one whenever the
   * Observable `windowBoundaries` emits an item. Because each window is an
   * Observable, the output is a higher-order Observable.
   *
   * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var interval = Rx.Observable.interval(1000);
   * var result = clicks.window(interval)
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link windowWhen}
   * @see {@link buffer}
   *
   * @param {Observable<any>} windowBoundaries An Observable that completes the
   * previous window and starts a new window.
   * @return {Observable<Observable<T>>} An Observable of windows, which are
   * Observables emitting values of the source Observable.
   * @method window
   * @owner Observable
   */function window$1(windowBoundaries){return this.lift(new WindowOperator(windowBoundaries));}var WindowOperator=function(){function WindowOperator(windowBoundaries){_classCallCheck(this,WindowOperator);this.windowBoundaries=windowBoundaries;}_createClass(WindowOperator,[{key:'call',value:function call(subscriber,source){var windowSubscriber=new WindowSubscriber(subscriber);var sourceSubscription=source._subscribe(windowSubscriber);if(!sourceSubscription.closed){windowSubscriber.add(subscribeToResult(windowSubscriber,this.windowBoundaries));}return sourceSubscription;}}]);return WindowOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WindowSubscriber=function(_OuterSubscriber33){_inherits(WindowSubscriber,_OuterSubscriber33);function WindowSubscriber(destination){_classCallCheck(this,WindowSubscriber);var _this153=_possibleConstructorReturn(this,(WindowSubscriber.__proto__||Object.getPrototypeOf(WindowSubscriber)).call(this,destination));_this153.window=new Subject();destination.next(_this153.window);return _this153;}_createClass(WindowSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.openWindow();}},{key:'notifyError',value:function notifyError(error,innerSub){this._error(error);}},{key:'notifyComplete',value:function notifyComplete(innerSub){this._complete();}},{key:'_next',value:function _next(value){this.window.next(value);}},{key:'_error',value:function _error(err){this.window.error(err);this.destination.error(err);}},{key:'_complete',value:function _complete(){this.window.complete();this.destination.complete();}},{key:'_unsubscribe',value:function _unsubscribe(){this.window=null;}},{key:'openWindow',value:function openWindow(){var prevWindow=this.window;if(prevWindow){prevWindow.complete();}var destination=this.destination;var newWindow=this.window=new Subject();destination.next(newWindow);}}]);return WindowSubscriber;}(OuterSubscriber);Observable.prototype.window=window$1;/**
   * Branch out the source Observable values as a nested Observable with each
   * nested Observable emitting at most `windowSize` values.
   *
   * <span class="informal">It's like {@link bufferCount}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowCount.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits windows every `startWindowEvery`
   * items, each containing no more than `windowSize` items. When the source
   * Observable completes or encounters an error, the output Observable emits
   * the current window and propagates the notification from the source
   * Observable. If `startWindowEvery` is not provided, then new windows are
   * started immediately at the start of the source and when each window completes
   * with size `windowSize`.
   *
   * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowCount(3)
   *   .map(win => win.skip(1)) // skip first of every 3 clicks
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowCount(2, 3)
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link windowWhen}
   * @see {@link bufferCount}
   *
   * @param {number} windowSize The maximum number of values emitted by each
   * window.
   * @param {number} [startWindowEvery] Interval at which to start a new window.
   * For example if `startWindowEvery` is `2`, then a new window will be started
   * on every other value from the source. A new window is started at the
   * beginning of the source by default.
   * @return {Observable<Observable<T>>} An Observable of windows, which in turn
   * are Observable of values.
   * @method windowCount
   * @owner Observable
   */function windowCount(windowSize){var startWindowEvery=arguments.length<=1||arguments[1]===undefined?0:arguments[1];return this.lift(new WindowCountOperator(windowSize,startWindowEvery));}var WindowCountOperator=function(){function WindowCountOperator(windowSize,startWindowEvery){_classCallCheck(this,WindowCountOperator);this.windowSize=windowSize;this.startWindowEvery=startWindowEvery;}_createClass(WindowCountOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new WindowCountSubscriber(subscriber,this.windowSize,this.startWindowEvery));}}]);return WindowCountOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WindowCountSubscriber=function(_Subscriber51){_inherits(WindowCountSubscriber,_Subscriber51);function WindowCountSubscriber(destination,windowSize,startWindowEvery){_classCallCheck(this,WindowCountSubscriber);var _this154=_possibleConstructorReturn(this,(WindowCountSubscriber.__proto__||Object.getPrototypeOf(WindowCountSubscriber)).call(this,destination));_this154.destination=destination;_this154.windowSize=windowSize;_this154.startWindowEvery=startWindowEvery;_this154.windows=[new Subject()];_this154.count=0;destination.next(_this154.windows[0]);return _this154;}_createClass(WindowCountSubscriber,[{key:'_next',value:function _next(value){var startWindowEvery=this.startWindowEvery>0?this.startWindowEvery:this.windowSize;var destination=this.destination;var windowSize=this.windowSize;var windows=this.windows;var len=windows.length;for(var _i20=0;_i20<len&&!this.closed;_i20++){windows[_i20].next(value);}var c=this.count-windowSize+1;if(c>=0&&c%startWindowEvery===0&&!this.closed){windows.shift().complete();}if(++this.count%startWindowEvery===0&&!this.closed){var _window=new Subject();windows.push(_window);destination.next(_window);}}},{key:'_error',value:function _error(err){var windows=this.windows;if(windows){while(windows.length>0&&!this.closed){windows.shift().error(err);}}this.destination.error(err);}},{key:'_complete',value:function _complete(){var windows=this.windows;if(windows){while(windows.length>0&&!this.closed){windows.shift().complete();}}this.destination.complete();}},{key:'_unsubscribe',value:function _unsubscribe(){this.count=0;this.windows=null;}}]);return WindowCountSubscriber;}(Subscriber);Observable.prototype.windowCount=windowCount;/**
   * Branch out the source Observable values as a nested Observable periodically
   * in time.
   *
   * <span class="informal">It's like {@link bufferTime}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowTime.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable starts a new window periodically, as
   * determined by the `windowCreationInterval` argument. It emits each window
   * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
   * source Observable completes or encounters an error, the output Observable
   * emits the current window and propagates the notification from the source
   * Observable. If `windowCreationInterval` is not provided, the output
   * Observable starts a new window when the previous window of duration
   * `windowTimeSpan` completes.
   *
   * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowTime(1000)
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks.windowTime(1000, 5000)
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowCount}
   * @see {@link windowToggle}
   * @see {@link windowWhen}
   * @see {@link bufferTime}
   *
   * @param {number} windowTimeSpan The amount of time to fill each window.
   * @param {number} [windowCreationInterval] The interval at which to start new
   * windows.
   * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
   * intervals that determine window boundaries.
   * @return {Observable<Observable<T>>} An observable of windows, which in turn
   * are Observables.
   * @method windowTime
   * @owner Observable
   */function windowTime(windowTimeSpan){var windowCreationInterval=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var scheduler=arguments.length<=2||arguments[2]===undefined?async:arguments[2];return this.lift(new WindowTimeOperator(windowTimeSpan,windowCreationInterval,scheduler));}var WindowTimeOperator=function(){function WindowTimeOperator(windowTimeSpan,windowCreationInterval,scheduler){_classCallCheck(this,WindowTimeOperator);this.windowTimeSpan=windowTimeSpan;this.windowCreationInterval=windowCreationInterval;this.scheduler=scheduler;}_createClass(WindowTimeOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new WindowTimeSubscriber(subscriber,this.windowTimeSpan,this.windowCreationInterval,this.scheduler));}}]);return WindowTimeOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WindowTimeSubscriber=function(_Subscriber52){_inherits(WindowTimeSubscriber,_Subscriber52);function WindowTimeSubscriber(destination,windowTimeSpan,windowCreationInterval,scheduler){_classCallCheck(this,WindowTimeSubscriber);var _this155=_possibleConstructorReturn(this,(WindowTimeSubscriber.__proto__||Object.getPrototypeOf(WindowTimeSubscriber)).call(this,destination));_this155.destination=destination;_this155.windowTimeSpan=windowTimeSpan;_this155.windowCreationInterval=windowCreationInterval;_this155.scheduler=scheduler;_this155.windows=[];if(windowCreationInterval!==null&&windowCreationInterval>=0){var _window2=_this155.openWindow();var closeState={subscriber:_this155,window:_window2,context:null};var creationState={windowTimeSpan:windowTimeSpan,windowCreationInterval:windowCreationInterval,subscriber:_this155,scheduler:scheduler};_this155.add(scheduler.schedule(dispatchWindowClose,windowTimeSpan,closeState));_this155.add(scheduler.schedule(dispatchWindowCreation,windowCreationInterval,creationState));}else{var _window3=_this155.openWindow();var timeSpanOnlyState={subscriber:_this155,window:_window3,windowTimeSpan:windowTimeSpan};_this155.add(scheduler.schedule(dispatchWindowTimeSpanOnly,windowTimeSpan,timeSpanOnlyState));}return _this155;}_createClass(WindowTimeSubscriber,[{key:'_next',value:function _next(value){var windows=this.windows;var len=windows.length;for(var _i21=0;_i21<len;_i21++){var _window4=windows[_i21];if(!_window4.closed){_window4.next(value);}}}},{key:'_error',value:function _error(err){var windows=this.windows;while(windows.length>0){windows.shift().error(err);}this.destination.error(err);}},{key:'_complete',value:function _complete(){var windows=this.windows;while(windows.length>0){var _window5=windows.shift();if(!_window5.closed){_window5.complete();}}this.destination.complete();}},{key:'openWindow',value:function openWindow(){var window=new Subject();this.windows.push(window);var destination=this.destination;destination.next(window);return window;}},{key:'closeWindow',value:function closeWindow(window){window.complete();var windows=this.windows;windows.splice(windows.indexOf(window),1);}}]);return WindowTimeSubscriber;}(Subscriber);function dispatchWindowTimeSpanOnly(state){var subscriber=state.subscriber;var windowTimeSpan=state.windowTimeSpan;var window=state.window;if(window){window.complete();}state.window=subscriber.openWindow();this.schedule(state,windowTimeSpan);}function dispatchWindowCreation(state){var windowTimeSpan=state.windowTimeSpan;var subscriber=state.subscriber;var scheduler=state.scheduler;var windowCreationInterval=state.windowCreationInterval;var window=subscriber.openWindow();var action=this;var context={action:action,subscription:null};var timeSpanState={subscriber:subscriber,window:window,context:context};context.subscription=scheduler.schedule(dispatchWindowClose,windowTimeSpan,timeSpanState);action.add(context.subscription);action.schedule(state,windowCreationInterval);}function dispatchWindowClose(arg){var subscriber=arg.subscriber;var window=arg.window;var context=arg.context;if(context&&context.action&&context.subscription){context.action.remove(context.subscription);}subscriber.closeWindow(window);}Observable.prototype.windowTime=windowTime;/**
   * Branch out the source Observable values as a nested Observable starting from
   * an emission from `openings` and ending when the output of `closingSelector`
   * emits.
   *
   * <span class="informal">It's like {@link bufferToggle}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowToggle.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits windows that contain those items
   * emitted by the source Observable between the time when the `openings`
   * Observable emits an item and when the Observable returned by
   * `closingSelector` emits an item.
   *
   * @example <caption>Every other second, emit the click events from the next 500ms</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var openings = Rx.Observable.interval(1000);
   * var result = clicks.windowToggle(openings, i =>
   *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
   * ).mergeAll();
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowWhen}
   * @see {@link bufferToggle}
   *
   * @param {Observable<O>} openings An observable of notifications to start new
   * windows.
   * @param {function(value: O): Observable} closingSelector A function that takes
   * the value emitted by the `openings` observable and returns an Observable,
   * which, when it emits (either `next` or `complete`), signals that the
   * associated window should complete.
   * @return {Observable<Observable<T>>} An observable of windows, which in turn
   * are Observables.
   * @method windowToggle
   * @owner Observable
   */function windowToggle(openings,closingSelector){return this.lift(new WindowToggleOperator(openings,closingSelector));}var WindowToggleOperator=function(){function WindowToggleOperator(openings,closingSelector){_classCallCheck(this,WindowToggleOperator);this.openings=openings;this.closingSelector=closingSelector;}_createClass(WindowToggleOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new WindowToggleSubscriber(subscriber,this.openings,this.closingSelector));}}]);return WindowToggleOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WindowToggleSubscriber=function(_OuterSubscriber34){_inherits(WindowToggleSubscriber,_OuterSubscriber34);function WindowToggleSubscriber(destination,openings,closingSelector){_classCallCheck(this,WindowToggleSubscriber);var _this156=_possibleConstructorReturn(this,(WindowToggleSubscriber.__proto__||Object.getPrototypeOf(WindowToggleSubscriber)).call(this,destination));_this156.openings=openings;_this156.closingSelector=closingSelector;_this156.contexts=[];_this156.add(_this156.openSubscription=subscribeToResult(_this156,openings,openings));return _this156;}_createClass(WindowToggleSubscriber,[{key:'_next',value:function _next(value){var contexts=this.contexts;if(contexts){var _len29=contexts.length;for(var _i22=0;_i22<_len29;_i22++){contexts[_i22].window.next(value);}}}},{key:'_error',value:function _error(err){var contexts=this.contexts;this.contexts=null;if(contexts){var _len30=contexts.length;var index=-1;while(++index<_len30){var context=contexts[index];context.window.error(err);context.subscription.unsubscribe();}}_get(WindowToggleSubscriber.prototype.__proto__||Object.getPrototypeOf(WindowToggleSubscriber.prototype),'_error',this).call(this,err);}},{key:'_complete',value:function _complete(){var contexts=this.contexts;this.contexts=null;if(contexts){var _len31=contexts.length;var index=-1;while(++index<_len31){var context=contexts[index];context.window.complete();context.subscription.unsubscribe();}}_get(WindowToggleSubscriber.prototype.__proto__||Object.getPrototypeOf(WindowToggleSubscriber.prototype),'_complete',this).call(this);}},{key:'_unsubscribe',value:function _unsubscribe(){var contexts=this.contexts;this.contexts=null;if(contexts){var _len32=contexts.length;var index=-1;while(++index<_len32){var context=contexts[index];context.window.unsubscribe();context.subscription.unsubscribe();}}}},{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){if(outerValue===this.openings){var closingSelector=this.closingSelector;var closingNotifier=tryCatch(closingSelector)(innerValue);if(closingNotifier===errorObject){return this.error(errorObject.e);}else{var _window6=new Subject();var subscription=new Subscription();var context={window:_window6,subscription:subscription};this.contexts.push(context);var innerSubscription=subscribeToResult(this,closingNotifier,context);if(innerSubscription.closed){this.closeWindow(this.contexts.length-1);}else{innerSubscription.context=context;subscription.add(innerSubscription);}this.destination.next(_window6);}}else{this.closeWindow(this.contexts.indexOf(outerValue));}}},{key:'notifyError',value:function notifyError(err){this.error(err);}},{key:'notifyComplete',value:function notifyComplete(inner){if(inner!==this.openSubscription){this.closeWindow(this.contexts.indexOf(inner.context));}}},{key:'closeWindow',value:function closeWindow(index){if(index===-1){return;}var contexts=this.contexts;var context=contexts[index];var window=context.window;var subscription=context.subscription;contexts.splice(index,1);window.complete();subscription.unsubscribe();}}]);return WindowToggleSubscriber;}(OuterSubscriber);Observable.prototype.windowToggle=windowToggle;/**
   * Branch out the source Observable values as a nested Observable using a
   * factory function of closing Observables to determine when to start a new
   * window.
   *
   * <span class="informal">It's like {@link bufferWhen}, but emits a nested
   * Observable instead of an array.</span>
   *
   * <img src="./img/windowWhen.png" width="100%">
   *
   * Returns an Observable that emits windows of items it collects from the source
   * Observable. The output Observable emits connected, non-overlapping windows.
   * It emits the current window and opens a new one whenever the Observable
   * produced by the specified `closingSelector` function emits an item. The first
   * window is opened immediately when subscribing to the output Observable.
   *
   * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var result = clicks
   *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
   *   .map(win => win.take(2)) // each window has at most 2 emissions
   *   .mergeAll(); // flatten the Observable-of-Observables
   * result.subscribe(x => console.log(x));
   *
   * @see {@link window}
   * @see {@link windowCount}
   * @see {@link windowTime}
   * @see {@link windowToggle}
   * @see {@link bufferWhen}
   *
   * @param {function(): Observable} closingSelector A function that takes no
   * arguments and returns an Observable that signals (on either `next` or
   * `complete`) when to close the previous window and start a new one.
   * @return {Observable<Observable<T>>} An observable of windows, which in turn
   * are Observables.
   * @method windowWhen
   * @owner Observable
   */function windowWhen(closingSelector){return this.lift(new WindowOperator$1(closingSelector));}var WindowOperator$1=function(){function WindowOperator$1(closingSelector){_classCallCheck(this,WindowOperator$1);this.closingSelector=closingSelector;}_createClass(WindowOperator$1,[{key:'call',value:function call(subscriber,source){return source._subscribe(new WindowSubscriber$1(subscriber,this.closingSelector));}}]);return WindowOperator$1;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WindowSubscriber$1=function(_OuterSubscriber35){_inherits(WindowSubscriber$1,_OuterSubscriber35);function WindowSubscriber$1(destination,closingSelector){_classCallCheck(this,WindowSubscriber$1);var _this157=_possibleConstructorReturn(this,(WindowSubscriber$1.__proto__||Object.getPrototypeOf(WindowSubscriber$1)).call(this,destination));_this157.destination=destination;_this157.closingSelector=closingSelector;_this157.openWindow();return _this157;}_createClass(WindowSubscriber$1,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.openWindow(innerSub);}},{key:'notifyError',value:function notifyError(error,innerSub){this._error(error);}},{key:'notifyComplete',value:function notifyComplete(innerSub){this.openWindow(innerSub);}},{key:'_next',value:function _next(value){this.window.next(value);}},{key:'_error',value:function _error(err){this.window.error(err);this.destination.error(err);this.unsubscribeClosingNotification();}},{key:'_complete',value:function _complete(){this.window.complete();this.destination.complete();this.unsubscribeClosingNotification();}},{key:'unsubscribeClosingNotification',value:function unsubscribeClosingNotification(){if(this.closingNotification){this.closingNotification.unsubscribe();}}},{key:'openWindow',value:function openWindow(){var innerSub=arguments.length<=0||arguments[0]===undefined?null:arguments[0];if(innerSub){this.remove(innerSub);innerSub.unsubscribe();}var prevWindow=this.window;if(prevWindow){prevWindow.complete();}var window=this.window=new Subject();this.destination.next(window);var closingNotifier=tryCatch(this.closingSelector)();if(closingNotifier===errorObject){var err=errorObject.e;this.destination.error(err);this.window.error(err);}else{this.add(this.closingNotification=subscribeToResult(this,closingNotifier));}}}]);return WindowSubscriber$1;}(OuterSubscriber);Observable.prototype.windowWhen=windowWhen;/**
   * Combines the source Observable with other Observables to create an Observable
   * whose values are calculated from the latest values of each, only when the
   * source emits.
   *
   * <span class="informal">Whenever the source Observable emits a value, it
   * computes a formula using that value plus the latest values from other input
   * Observables, then emits the output of that formula.</span>
   *
   * <img src="./img/withLatestFrom.png" width="100%">
   *
   * `withLatestFrom` combines each value from the source Observable (the
   * instance) with the latest values from the other input Observables only when
   * the source emits a value, optionally using a `project` function to determine
   * the value to be emitted on the output Observable. All input Observables must
   * emit at least one value before the output Observable will emit a value.
   *
   * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
   * var clicks = Rx.Observable.fromEvent(document, 'click');
   * var timer = Rx.Observable.interval(1000);
   * var result = clicks.withLatestFrom(timer);
   * result.subscribe(x => console.log(x));
   *
   * @see {@link combineLatest}
   *
   * @param {Observable} other An input Observable to combine with the source
   * Observable. More than one input Observables may be given as argument.
   * @param {Function} [project] Projection function for combining values
   * together. Receives all values in order of the Observables passed, where the
   * first parameter is a value from the source Observable. (e.g.
   * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
   * passed, arrays will be emitted on the output Observable.
   * @return {Observable} An Observable of projected values from the most recent
   * values from each input Observable, or an array of the most recent values from
   * each input Observable.
   * @method withLatestFrom
   * @owner Observable
   */function withLatestFrom(){var project=void 0;for(var _len33=arguments.length,args=Array(_len33),_key32=0;_key32<_len33;_key32++){args[_key32]=arguments[_key32];}if(typeof args[args.length-1]==='function'){project=args.pop();}var observables=args;return this.lift(new WithLatestFromOperator(observables,project));}/* tslint:enable:max-line-length */var WithLatestFromOperator=function(){function WithLatestFromOperator(observables,project){_classCallCheck(this,WithLatestFromOperator);this.observables=observables;this.project=project;}_createClass(WithLatestFromOperator,[{key:'call',value:function call(subscriber,source){return source._subscribe(new WithLatestFromSubscriber(subscriber,this.observables,this.project));}}]);return WithLatestFromOperator;}();/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var WithLatestFromSubscriber=function(_OuterSubscriber36){_inherits(WithLatestFromSubscriber,_OuterSubscriber36);function WithLatestFromSubscriber(destination,observables,project){_classCallCheck(this,WithLatestFromSubscriber);var _this158=_possibleConstructorReturn(this,(WithLatestFromSubscriber.__proto__||Object.getPrototypeOf(WithLatestFromSubscriber)).call(this,destination));_this158.observables=observables;_this158.project=project;_this158.toRespond=[];var len=observables.length;_this158.values=new Array(len);for(var _i23=0;_i23<len;_i23++){_this158.toRespond.push(_i23);}for(var _i24=0;_i24<len;_i24++){var observable=observables[_i24];_this158.add(subscribeToResult(_this158,observable,observable,_i24));}return _this158;}_createClass(WithLatestFromSubscriber,[{key:'notifyNext',value:function notifyNext(outerValue,innerValue,outerIndex,innerIndex,innerSub){this.values[outerIndex]=innerValue;var toRespond=this.toRespond;if(toRespond.length>0){var found=toRespond.indexOf(outerIndex);if(found!==-1){toRespond.splice(found,1);}}}},{key:'notifyComplete',value:function notifyComplete(){// noop
}},{key:'_next',value:function _next(value){if(this.toRespond.length===0){var args=[value].concat(_toConsumableArray(this.values));if(this.project){this._tryProject(args);}else{this.destination.next(args);}}}},{key:'_tryProject',value:function _tryProject(args){var result=void 0;try{result=this.project.apply(this,args);}catch(err){this.destination.error(err);return;}this.destination.next(result);}}]);return WithLatestFromSubscriber;}(OuterSubscriber);Observable.prototype.withLatestFrom=withLatestFrom;Observable.prototype.zip=zipProto;/**
   * @param project
   * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
   * @method zipAll
   * @owner Observable
   */function zipAll(project){return this.lift(new ZipOperator(project));}Observable.prototype.zipAll=zipAll;var SubscriptionLog=function SubscriptionLog(subscribedFrame){var unsubscribedFrame=arguments.length<=1||arguments[1]===undefined?Number.POSITIVE_INFINITY:arguments[1];_classCallCheck(this,SubscriptionLog);this.subscribedFrame=subscribedFrame;this.unsubscribedFrame=unsubscribedFrame;};var SubscriptionLoggable=function(){function SubscriptionLoggable(){_classCallCheck(this,SubscriptionLoggable);this.subscriptions=[];}_createClass(SubscriptionLoggable,[{key:'logSubscribedFrame',value:function logSubscribedFrame(){this.subscriptions.push(new SubscriptionLog(this.scheduler.now()));return this.subscriptions.length-1;}},{key:'logUnsubscribedFrame',value:function logUnsubscribedFrame(index){var subscriptionLogs=this.subscriptions;var oldSubscriptionLog=subscriptionLogs[index];subscriptionLogs[index]=new SubscriptionLog(oldSubscriptionLog.subscribedFrame,this.scheduler.now());}}]);return SubscriptionLoggable;}();function applyMixins(derivedCtor,baseCtors){for(var _i25=0,_len34=baseCtors.length;_i25<_len34;_i25++){var baseCtor=baseCtors[_i25];var propertyKeys=Object.getOwnPropertyNames(baseCtor.prototype);for(var j=0,len2=propertyKeys.length;j<len2;j++){var name=propertyKeys[j];derivedCtor.prototype[name]=baseCtor.prototype[name];}}}/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var ColdObservable=function(_Observable30){_inherits(ColdObservable,_Observable30);function ColdObservable(messages,scheduler){_classCallCheck(this,ColdObservable);var _this159=_possibleConstructorReturn(this,(ColdObservable.__proto__||Object.getPrototypeOf(ColdObservable)).call(this,function(subscriber){var observable=this;var index=observable.logSubscribedFrame();subscriber.add(new Subscription(function(){observable.logUnsubscribedFrame(index);}));observable.scheduleMessages(subscriber);return subscriber;}));_this159.messages=messages;_this159.subscriptions=[];_this159.scheduler=scheduler;return _this159;}_createClass(ColdObservable,[{key:'scheduleMessages',value:function scheduleMessages(subscriber){var messagesLength=this.messages.length;for(var _i26=0;_i26<messagesLength;_i26++){var message=this.messages[_i26];subscriber.add(this.scheduler.schedule(function(_ref3){var message=_ref3.message;var subscriber=_ref3.subscriber;message.notification.observe(subscriber);},message.frame,{message:message,subscriber:subscriber}));}}}]);return ColdObservable;}(Observable);applyMixins(ColdObservable,[SubscriptionLoggable]);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var HotObservable=function(_Subject7){_inherits(HotObservable,_Subject7);function HotObservable(messages,scheduler){_classCallCheck(this,HotObservable);var _this160=_possibleConstructorReturn(this,(HotObservable.__proto__||Object.getPrototypeOf(HotObservable)).call(this));_this160.messages=messages;_this160.subscriptions=[];_this160.scheduler=scheduler;return _this160;}_createClass(HotObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var subject=this;var index=subject.logSubscribedFrame();subscriber.add(new Subscription(function(){subject.logUnsubscribedFrame(index);}));return _get(HotObservable.prototype.__proto__||Object.getPrototypeOf(HotObservable.prototype),'_subscribe',this).call(this,subscriber);}},{key:'setup',value:function setup(){var subject=this;var messagesLength=subject.messages.length;/* tslint:disable:no-var-keyword */for(var i=0;i<messagesLength;i++){(function(){var message=subject.messages[i];/* tslint:enable */subject.scheduler.schedule(function(){message.notification.observe(subject);},message.frame);})();}}}]);return HotObservable;}(Subject);applyMixins(HotObservable,[SubscriptionLoggable]);var RequestAnimationFrameDefinition=function RequestAnimationFrameDefinition(root){_classCallCheck(this,RequestAnimationFrameDefinition);if(root.requestAnimationFrame){this.cancelAnimationFrame=root.cancelAnimationFrame.bind(root);this.requestAnimationFrame=root.requestAnimationFrame.bind(root);}else if(root.mozRequestAnimationFrame){this.cancelAnimationFrame=root.mozCancelAnimationFrame.bind(root);this.requestAnimationFrame=root.mozRequestAnimationFrame.bind(root);}else if(root.webkitRequestAnimationFrame){this.cancelAnimationFrame=root.webkitCancelAnimationFrame.bind(root);this.requestAnimationFrame=root.webkitRequestAnimationFrame.bind(root);}else if(root.msRequestAnimationFrame){this.cancelAnimationFrame=root.msCancelAnimationFrame.bind(root);this.requestAnimationFrame=root.msRequestAnimationFrame.bind(root);}else if(root.oRequestAnimationFrame){this.cancelAnimationFrame=root.oCancelAnimationFrame.bind(root);this.requestAnimationFrame=root.oRequestAnimationFrame.bind(root);}else{this.cancelAnimationFrame=root.clearTimeout.bind(root);this.requestAnimationFrame=function(cb){return root.setTimeout(cb,1000/60);};}};var AnimationFrame=new RequestAnimationFrameDefinition(root);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var AnimationFrameAction=function(_AsyncAction3){_inherits(AnimationFrameAction,_AsyncAction3);function AnimationFrameAction(scheduler,work){_classCallCheck(this,AnimationFrameAction);var _this161=_possibleConstructorReturn(this,(AnimationFrameAction.__proto__||Object.getPrototypeOf(AnimationFrameAction)).call(this,scheduler,work));_this161.scheduler=scheduler;_this161.work=work;return _this161;}_createClass(AnimationFrameAction,[{key:'requestAsyncId',value:function requestAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If delay is greater than 0, request as an async action.
if(delay!==null&&delay>0){return _get(AnimationFrameAction.prototype.__proto__||Object.getPrototypeOf(AnimationFrameAction.prototype),'requestAsyncId',this).call(this,scheduler,id,delay);}// Push the action to the end of the scheduler queue.
scheduler.actions.push(this);// If an animation frame has already been requested, don't request another
// one. If an animation frame hasn't been requested yet, request one. Return
// the current animation frame request id.
return scheduler.scheduled||(scheduler.scheduled=AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler,null)));}},{key:'recycleAsyncId',value:function recycleAsyncId(scheduler,id){var delay=arguments.length<=2||arguments[2]===undefined?0:arguments[2];// If delay exists and is greater than 0, recycle as an async action.
if(delay!==null&&delay>0){return _get(AnimationFrameAction.prototype.__proto__||Object.getPrototypeOf(AnimationFrameAction.prototype),'recycleAsyncId',this).call(this,scheduler,id,delay);}// If the scheduler queue is empty, cancel the requested animation frame and
// set the scheduled flag to undefined so the next AnimationFrameAction will
// request its own.
if(scheduler.actions.length===0){AnimationFrame.cancelAnimationFrame(id);scheduler.scheduled=undefined;}// Return undefined so the action knows to request a new async id if it's rescheduled.
return undefined;}}]);return AnimationFrameAction;}(AsyncAction);var AnimationFrameScheduler=function(_AsyncScheduler3){_inherits(AnimationFrameScheduler,_AsyncScheduler3);function AnimationFrameScheduler(){_classCallCheck(this,AnimationFrameScheduler);return _possibleConstructorReturn(this,(AnimationFrameScheduler.__proto__||Object.getPrototypeOf(AnimationFrameScheduler)).apply(this,arguments));}_createClass(AnimationFrameScheduler,[{key:'flush',value:function flush(){this.active=true;this.scheduled=undefined;var actions=this.actions;var error=void 0;var index=-1;var count=actions.length;var action=actions.shift();do{if(error=action.execute(action.state,action.delay)){break;}}while(++index<count&&(action=actions.shift()));this.active=false;if(error){while(++index<count&&(action=actions.shift())){action.unsubscribe();}throw error;}}}]);return AnimationFrameScheduler;}(AsyncScheduler);var animationFrame=new AnimationFrameScheduler(AnimationFrameAction);/* tslint:enable:no-unused-variable *//**
   * @typedef {Object} Rx.Scheduler
   * @property {Scheduler} queue Schedules on a queue in the current event frame
   * (trampoline scheduler). Use this for iteration operations.
   * @property {Scheduler} asap Schedules on the micro task queue, which uses the
   * fastest transport mechanism available, either Node.js' `process.nextTick()`
   * or Web Worker MessageChannel or setTimeout or others. Use this for
   * asynchronous conversions.
   * @property {Scheduler} async Schedules work with `setInterval`. Use this for
   * time-based operations.
   * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
   * Use this for synchronizing with the platform's painting
   */var Scheduler={asap:asap,queue:queue,animationFrame:animationFrame,async:async};/**
   * @typedef {Object} Rx.Symbol
   * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
   * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
   * an object that has all of the traits of an Rx Subscriber, including the
   * ability to add and remove subscriptions to the subscription chain and
   * guarantees involving event triggering (can't "next" after unsubscription,
   * etc).
   * @property {Symbol|string} observable A symbol to use as a property name to
   * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
   * @property {Symbol|string} iterator The ES6 symbol to use as a property name
   * to retrieve an iterator from an object.