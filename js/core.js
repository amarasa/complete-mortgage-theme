/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/equalize-heights/dist/equalizeHeights.js":
/*!***************************************************************!*\
  !*** ./node_modules/equalize-heights/dist/equalizeHeights.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ equalizeHeights)
/* harmony export */ });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

var es_regexp_flags = {};

var globalThis_1;
var hasRequiredGlobalThis;

function requireGlobalThis () {
	if (hasRequiredGlobalThis) return globalThis_1;
	hasRequiredGlobalThis = 1;
	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	globalThis_1 =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  check(typeof globalThis_1 == 'object' && globalThis_1) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();
	return globalThis_1;
}

var fails;
var hasRequiredFails;

function requireFails () {
	if (hasRequiredFails) return fails;
	hasRequiredFails = 1;
	fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};
	return fails;
}

var descriptors;
var hasRequiredDescriptors;

function requireDescriptors () {
	if (hasRequiredDescriptors) return descriptors;
	hasRequiredDescriptors = 1;
	var fails = requireFails();

	// Detect IE8's incomplete defineProperty implementation
	descriptors = !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});
	return descriptors;
}

var makeBuiltIn = {exports: {}};

var functionBindNative;
var hasRequiredFunctionBindNative;

function requireFunctionBindNative () {
	if (hasRequiredFunctionBindNative) return functionBindNative;
	hasRequiredFunctionBindNative = 1;
	var fails = requireFails();

	functionBindNative = !fails(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});
	return functionBindNative;
}

var functionUncurryThis;
var hasRequiredFunctionUncurryThis;

function requireFunctionUncurryThis () {
	if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
	hasRequiredFunctionUncurryThis = 1;
	var NATIVE_BIND = requireFunctionBindNative();

	var FunctionPrototype = Function.prototype;
	var call = FunctionPrototype.call;
	// eslint-disable-next-line es/no-function-prototype-bind -- safe
	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

	functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call.apply(fn, arguments);
	  };
	};
	return functionUncurryThis;
}

var isCallable;
var hasRequiredIsCallable;

function requireIsCallable () {
	if (hasRequiredIsCallable) return isCallable;
	hasRequiredIsCallable = 1;
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};
	return isCallable;
}

var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;

function requireIsNullOrUndefined () {
	if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
	hasRequiredIsNullOrUndefined = 1;
	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	isNullOrUndefined = function (it) {
	  return it === null || it === undefined;
	};
	return isNullOrUndefined;
}

var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;

function requireRequireObjectCoercible () {
	if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
	hasRequiredRequireObjectCoercible = 1;
	var isNullOrUndefined = requireIsNullOrUndefined();

	var $TypeError = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	requireObjectCoercible = function (it) {
	  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
	  return it;
	};
	return requireObjectCoercible;
}

var toObject;
var hasRequiredToObject;

function requireToObject () {
	if (hasRequiredToObject) return toObject;
	hasRequiredToObject = 1;
	var requireObjectCoercible = requireRequireObjectCoercible();

	var $Object = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	toObject = function (argument) {
	  return $Object(requireObjectCoercible(argument));
	};
	return toObject;
}

var hasOwnProperty_1;
var hasRequiredHasOwnProperty;

function requireHasOwnProperty () {
	if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
	hasRequiredHasOwnProperty = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var toObject = requireToObject();

	var hasOwnProperty = uncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject(it), key);
	};
	return hasOwnProperty_1;
}

var functionName;
var hasRequiredFunctionName;

function requireFunctionName () {
	if (hasRequiredFunctionName) return functionName;
	hasRequiredFunctionName = 1;
	var DESCRIPTORS = requireDescriptors();
	var hasOwn = requireHasOwnProperty();

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

	functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};
	return functionName;
}

var sharedStore = {exports: {}};

var isPure;
var hasRequiredIsPure;

function requireIsPure () {
	if (hasRequiredIsPure) return isPure;
	hasRequiredIsPure = 1;
	isPure = false;
	return isPure;
}

var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;

function requireDefineGlobalProperty () {
	if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
	hasRequiredDefineGlobalProperty = 1;
	var globalThis = requireGlobalThis();

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty = Object.defineProperty;

	defineGlobalProperty = function (key, value) {
	  try {
	    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    globalThis[key] = value;
	  } return value;
	};
	return defineGlobalProperty;
}

var hasRequiredSharedStore;

function requireSharedStore () {
	if (hasRequiredSharedStore) return sharedStore.exports;
	hasRequiredSharedStore = 1;
	var IS_PURE = requireIsPure();
	var globalThis = requireGlobalThis();
	var defineGlobalProperty = requireDefineGlobalProperty();

	var SHARED = '__core-js_shared__';
	var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

	(store.versions || (store.versions = [])).push({
	  version: '3.40.0',
	  mode: IS_PURE ? 'pure' : 'global',
	  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	return sharedStore.exports;
}

var inspectSource;
var hasRequiredInspectSource;

function requireInspectSource () {
	if (hasRequiredInspectSource) return inspectSource;
	hasRequiredInspectSource = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var isCallable = requireIsCallable();
	var store = requireSharedStore();

	var functionToString = uncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(store.inspectSource)) {
	  store.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	inspectSource = store.inspectSource;
	return inspectSource;
}

var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;

function requireWeakMapBasicDetection () {
	if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
	hasRequiredWeakMapBasicDetection = 1;
	var globalThis = requireGlobalThis();
	var isCallable = requireIsCallable();

	var WeakMap = globalThis.WeakMap;

	weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
	return weakMapBasicDetection;
}

var isObject;
var hasRequiredIsObject;

function requireIsObject () {
	if (hasRequiredIsObject) return isObject;
	hasRequiredIsObject = 1;
	var isCallable = requireIsCallable();

	isObject = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable(it);
	};
	return isObject;
}

var objectDefineProperty = {};

var documentCreateElement;
var hasRequiredDocumentCreateElement;

function requireDocumentCreateElement () {
	if (hasRequiredDocumentCreateElement) return documentCreateElement;
	hasRequiredDocumentCreateElement = 1;
	var globalThis = requireGlobalThis();
	var isObject = requireIsObject();

	var document = globalThis.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document) && isObject(document.createElement);

	documentCreateElement = function (it) {
	  return EXISTS ? document.createElement(it) : {};
	};
	return documentCreateElement;
}

var ie8DomDefine;
var hasRequiredIe8DomDefine;

function requireIe8DomDefine () {
	if (hasRequiredIe8DomDefine) return ie8DomDefine;
	hasRequiredIe8DomDefine = 1;
	var DESCRIPTORS = requireDescriptors();
	var fails = requireFails();
	var createElement = requireDocumentCreateElement();

	// Thanks to IE8 for its funny defineProperty
	ie8DomDefine = !DESCRIPTORS && !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});
	return ie8DomDefine;
}

var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;

function requireV8PrototypeDefineBug () {
	if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
	hasRequiredV8PrototypeDefineBug = 1;
	var DESCRIPTORS = requireDescriptors();
	var fails = requireFails();

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});
	return v8PrototypeDefineBug;
}

var anObject;
var hasRequiredAnObject;

function requireAnObject () {
	if (hasRequiredAnObject) return anObject;
	hasRequiredAnObject = 1;
	var isObject = requireIsObject();

	var $String = String;
	var $TypeError = TypeError;

	// `Assert: Type(argument) is Object`
	anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw new $TypeError($String(argument) + ' is not an object');
	};
	return anObject;
}

var functionCall;
var hasRequiredFunctionCall;

function requireFunctionCall () {
	if (hasRequiredFunctionCall) return functionCall;
	hasRequiredFunctionCall = 1;
	var NATIVE_BIND = requireFunctionBindNative();

	var call = Function.prototype.call;
	// eslint-disable-next-line es/no-function-prototype-bind -- safe
	functionCall = NATIVE_BIND ? call.bind(call) : function () {
	  return call.apply(call, arguments);
	};
	return functionCall;
}

var getBuiltIn;
var hasRequiredGetBuiltIn;

function requireGetBuiltIn () {
	if (hasRequiredGetBuiltIn) return getBuiltIn;
	hasRequiredGetBuiltIn = 1;
	var globalThis = requireGlobalThis();
	var isCallable = requireIsCallable();

	var aFunction = function (argument) {
	  return isCallable(argument) ? argument : undefined;
	};

	getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
	};
	return getBuiltIn;
}

var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;

function requireObjectIsPrototypeOf () {
	if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
	hasRequiredObjectIsPrototypeOf = 1;
	var uncurryThis = requireFunctionUncurryThis();

	objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
	return objectIsPrototypeOf;
}

var environmentUserAgent;
var hasRequiredEnvironmentUserAgent;

function requireEnvironmentUserAgent () {
	if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
	hasRequiredEnvironmentUserAgent = 1;
	var globalThis = requireGlobalThis();

	var navigator = globalThis.navigator;
	var userAgent = navigator && navigator.userAgent;

	environmentUserAgent = userAgent ? String(userAgent) : '';
	return environmentUserAgent;
}

var environmentV8Version;
var hasRequiredEnvironmentV8Version;

function requireEnvironmentV8Version () {
	if (hasRequiredEnvironmentV8Version) return environmentV8Version;
	hasRequiredEnvironmentV8Version = 1;
	var globalThis = requireGlobalThis();
	var userAgent = requireEnvironmentUserAgent();

	var process = globalThis.process;
	var Deno = globalThis.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	environmentV8Version = version;
	return environmentV8Version;
}

var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;

function requireSymbolConstructorDetection () {
	if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
	hasRequiredSymbolConstructorDetection = 1;
	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION = requireEnvironmentV8Version();
	var fails = requireFails();
	var globalThis = requireGlobalThis();

	var $String = globalThis.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});
	return symbolConstructorDetection;
}

var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;

function requireUseSymbolAsUid () {
	if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
	hasRequiredUseSymbolAsUid = 1;
	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL = requireSymbolConstructorDetection();

	useSymbolAsUid = NATIVE_SYMBOL &&
	  !Symbol.sham &&
	  typeof Symbol.iterator == 'symbol';
	return useSymbolAsUid;
}

var isSymbol;
var hasRequiredIsSymbol;

function requireIsSymbol () {
	if (hasRequiredIsSymbol) return isSymbol;
	hasRequiredIsSymbol = 1;
	var getBuiltIn = requireGetBuiltIn();
	var isCallable = requireIsCallable();
	var isPrototypeOf = requireObjectIsPrototypeOf();
	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

	var $Object = Object;

	isSymbol = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
	};
	return isSymbol;
}

var tryToString;
var hasRequiredTryToString;

function requireTryToString () {
	if (hasRequiredTryToString) return tryToString;
	hasRequiredTryToString = 1;
	var $String = String;

	tryToString = function (argument) {
	  try {
	    return $String(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};
	return tryToString;
}

var aCallable;
var hasRequiredACallable;

function requireACallable () {
	if (hasRequiredACallable) return aCallable;
	hasRequiredACallable = 1;
	var isCallable = requireIsCallable();
	var tryToString = requireTryToString();

	var $TypeError = TypeError;

	// `Assert: IsCallable(argument) is true`
	aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw new $TypeError(tryToString(argument) + ' is not a function');
	};
	return aCallable;
}

var getMethod;
var hasRequiredGetMethod;

function requireGetMethod () {
	if (hasRequiredGetMethod) return getMethod;
	hasRequiredGetMethod = 1;
	var aCallable = requireACallable();
	var isNullOrUndefined = requireIsNullOrUndefined();

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	getMethod = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined(func) ? undefined : aCallable(func);
	};
	return getMethod;
}

var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;

function requireOrdinaryToPrimitive () {
	if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
	hasRequiredOrdinaryToPrimitive = 1;
	var call = requireFunctionCall();
	var isCallable = requireIsCallable();
	var isObject = requireIsObject();

	var $TypeError = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
	  throw new $TypeError("Can't convert object to primitive value");
	};
	return ordinaryToPrimitive;
}

var shared;
var hasRequiredShared;

function requireShared () {
	if (hasRequiredShared) return shared;
	hasRequiredShared = 1;
	var store = requireSharedStore();

	shared = function (key, value) {
	  return store[key] || (store[key] = value || {});
	};
	return shared;
}

var uid;
var hasRequiredUid;

function requireUid () {
	if (hasRequiredUid) return uid;
	hasRequiredUid = 1;
	var uncurryThis = requireFunctionUncurryThis();

	var id = 0;
	var postfix = Math.random();
	var toString = uncurryThis(1.0.toString);

	uid = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
	};
	return uid;
}

var wellKnownSymbol;
var hasRequiredWellKnownSymbol;

function requireWellKnownSymbol () {
	if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
	hasRequiredWellKnownSymbol = 1;
	var globalThis = requireGlobalThis();
	var shared = requireShared();
	var hasOwn = requireHasOwnProperty();
	var uid = requireUid();
	var NATIVE_SYMBOL = requireSymbolConstructorDetection();
	var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();

	var Symbol = globalThis.Symbol;
	var WellKnownSymbolsStore = shared('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

	wellKnownSymbol = function (name) {
	  if (!hasOwn(WellKnownSymbolsStore, name)) {
	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
	      ? Symbol[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};
	return wellKnownSymbol;
}

var toPrimitive;
var hasRequiredToPrimitive;

function requireToPrimitive () {
	if (hasRequiredToPrimitive) return toPrimitive;
	hasRequiredToPrimitive = 1;
	var call = requireFunctionCall();
	var isObject = requireIsObject();
	var isSymbol = requireIsSymbol();
	var getMethod = requireGetMethod();
	var ordinaryToPrimitive = requireOrdinaryToPrimitive();
	var wellKnownSymbol = requireWellKnownSymbol();

	var $TypeError = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call(exoticToPrim, input, pref);
	    if (!isObject(result) || isSymbol(result)) return result;
	    throw new $TypeError("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};
	return toPrimitive;
}

var toPropertyKey;
var hasRequiredToPropertyKey;

function requireToPropertyKey () {
	if (hasRequiredToPropertyKey) return toPropertyKey;
	hasRequiredToPropertyKey = 1;
	var toPrimitive = requireToPrimitive();
	var isSymbol = requireIsSymbol();

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};
	return toPropertyKey;
}

var hasRequiredObjectDefineProperty;

function requireObjectDefineProperty () {
	if (hasRequiredObjectDefineProperty) return objectDefineProperty;
	hasRequiredObjectDefineProperty = 1;
	var DESCRIPTORS = requireDescriptors();
	var IE8_DOM_DEFINE = requireIe8DomDefine();
	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
	var anObject = requireAnObject();
	var toPropertyKey = requireToPropertyKey();

	var $TypeError = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};
	return objectDefineProperty;
}

var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;

function requireCreatePropertyDescriptor () {
	if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
	hasRequiredCreatePropertyDescriptor = 1;
	createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};
	return createPropertyDescriptor;
}

var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;

function requireCreateNonEnumerableProperty () {
	if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
	hasRequiredCreateNonEnumerableProperty = 1;
	var DESCRIPTORS = requireDescriptors();
	var definePropertyModule = requireObjectDefineProperty();
	var createPropertyDescriptor = requireCreatePropertyDescriptor();

	createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};
	return createNonEnumerableProperty;
}

var sharedKey;
var hasRequiredSharedKey;

function requireSharedKey () {
	if (hasRequiredSharedKey) return sharedKey;
	hasRequiredSharedKey = 1;
	var shared = requireShared();
	var uid = requireUid();

	var keys = shared('keys');

	sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};
	return sharedKey;
}

var hiddenKeys;
var hasRequiredHiddenKeys;

function requireHiddenKeys () {
	if (hasRequiredHiddenKeys) return hiddenKeys;
	hasRequiredHiddenKeys = 1;
	hiddenKeys = {};
	return hiddenKeys;
}

var internalState;
var hasRequiredInternalState;

function requireInternalState () {
	if (hasRequiredInternalState) return internalState;
	hasRequiredInternalState = 1;
	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
	var globalThis = requireGlobalThis();
	var isObject = requireIsObject();
	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
	var hasOwn = requireHasOwnProperty();
	var shared = requireSharedStore();
	var sharedKey = requireSharedKey();
	var hiddenKeys = requireHiddenKeys();

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError = globalThis.TypeError;
	var WeakMap = globalThis.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store.get = store.get;
	  store.has = store.has;
	  store.set = store.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set = function (it, metadata) {
	    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store.set(it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return store.get(it) || {};
	  };
	  has = function (it) {
	    return store.has(it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn(it, STATE);
	  };
	}

	internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};
	return internalState;
}

var hasRequiredMakeBuiltIn;

function requireMakeBuiltIn () {
	if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
	hasRequiredMakeBuiltIn = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var fails = requireFails();
	var isCallable = requireIsCallable();
	var hasOwn = requireHasOwnProperty();
	var DESCRIPTORS = requireDescriptors();
	var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
	var inspectSource = requireInspectSource();
	var InternalStateModule = requireInternalState();

	var enforceInternalState = InternalStateModule.enforce;
	var getInternalState = InternalStateModule.get;
	var $String = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty = Object.defineProperty;
	var stringSlice = uncurryThis(''.slice);
	var replace = uncurryThis(''.replace);
	var join = uncurryThis([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
	  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
	  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
	    defineProperty(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState(value);
	  if (!hasOwn(state, 'source')) {
	    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$1(function toString() {
	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
	}, 'toString');
	return makeBuiltIn.exports;
}

var defineBuiltInAccessor;
var hasRequiredDefineBuiltInAccessor;

function requireDefineBuiltInAccessor () {
	if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
	hasRequiredDefineBuiltInAccessor = 1;
	var makeBuiltIn = requireMakeBuiltIn();
	var defineProperty = requireObjectDefineProperty();

	defineBuiltInAccessor = function (target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
	  return defineProperty.f(target, name, descriptor);
	};
	return defineBuiltInAccessor;
}

var regexpFlags;
var hasRequiredRegexpFlags;

function requireRegexpFlags () {
	if (hasRequiredRegexpFlags) return regexpFlags;
	hasRequiredRegexpFlags = 1;
	var anObject = requireAnObject();

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.hasIndices) result += 'd';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.unicodeSets) result += 'v';
	  if (that.sticky) result += 'y';
	  return result;
	};
	return regexpFlags;
}

var hasRequiredEs_regexp_flags;

function requireEs_regexp_flags () {
	if (hasRequiredEs_regexp_flags) return es_regexp_flags;
	hasRequiredEs_regexp_flags = 1;
	var globalThis = requireGlobalThis();
	var DESCRIPTORS = requireDescriptors();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
	var regExpFlags = requireRegexpFlags();
	var fails = requireFails();

	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
	var RegExp = globalThis.RegExp;
	var RegExpPrototype = RegExp.prototype;

	var FORCED = DESCRIPTORS && fails(function () {
	  var INDICES_SUPPORT = true;
	  try {
	    RegExp('.', 'd');
	  } catch (error) {
	    INDICES_SUPPORT = false;
	  }

	  var O = {};
	  // modern V8 bug
	  var calls = '';
	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

	  var addGetter = function (key, chr) {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(O, key, { get: function () {
	      calls += chr;
	      return true;
	    } });
	  };

	  var pairs = {
	    dotAll: 's',
	    global: 'g',
	    ignoreCase: 'i',
	    multiline: 'm',
	    sticky: 'y'
	  };

	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

	  for (var key in pairs) addGetter(key, pairs[key]);

	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

	  return result !== expected || calls !== expected;
	});

	// `RegExp.prototype.flags` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
	  configurable: true,
	  get: regExpFlags
	});
	return es_regexp_flags;
}

requireEs_regexp_flags();

var esnext_array_lastIndex = {};

var objectDefineProperties = {};

var classofRaw;
var hasRequiredClassofRaw;

function requireClassofRaw () {
	if (hasRequiredClassofRaw) return classofRaw;
	hasRequiredClassofRaw = 1;
	var uncurryThis = requireFunctionUncurryThis();

	var toString = uncurryThis({}.toString);
	var stringSlice = uncurryThis(''.slice);

	classofRaw = function (it) {
	  return stringSlice(toString(it), 8, -1);
	};
	return classofRaw;
}

var indexedObject;
var hasRequiredIndexedObject;

function requireIndexedObject () {
	if (hasRequiredIndexedObject) return indexedObject;
	hasRequiredIndexedObject = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var fails = requireFails();
	var classof = requireClassofRaw();

	var $Object = Object;
	var split = uncurryThis(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) === 'String' ? split(it, '') : $Object(it);
	} : $Object;
	return indexedObject;
}

var toIndexedObject;
var hasRequiredToIndexedObject;

function requireToIndexedObject () {
	if (hasRequiredToIndexedObject) return toIndexedObject;
	hasRequiredToIndexedObject = 1;
	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = requireIndexedObject();
	var requireObjectCoercible = requireRequireObjectCoercible();

	toIndexedObject = function (it) {
	  return IndexedObject(requireObjectCoercible(it));
	};
	return toIndexedObject;
}

var mathTrunc;
var hasRequiredMathTrunc;

function requireMathTrunc () {
	if (hasRequiredMathTrunc) return mathTrunc;
	hasRequiredMathTrunc = 1;
	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};
	return mathTrunc;
}

var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;

function requireToIntegerOrInfinity () {
	if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
	hasRequiredToIntegerOrInfinity = 1;
	var trunc = requireMathTrunc();

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	toIntegerOrInfinity = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};
	return toIntegerOrInfinity;
}

var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;

function requireToAbsoluteIndex () {
	if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
	hasRequiredToAbsoluteIndex = 1;
	var toIntegerOrInfinity = requireToIntegerOrInfinity();

	var max = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};
	return toAbsoluteIndex;
}

var toLength;
var hasRequiredToLength;

function requireToLength () {
	if (hasRequiredToLength) return toLength;
	hasRequiredToLength = 1;
	var toIntegerOrInfinity = requireToIntegerOrInfinity();

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	toLength = function (argument) {
	  var len = toIntegerOrInfinity(argument);
	  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};
	return toLength;
}

var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;

function requireLengthOfArrayLike () {
	if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
	hasRequiredLengthOfArrayLike = 1;
	var toLength = requireToLength();

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};
	return lengthOfArrayLike;
}

var arrayIncludes;
var hasRequiredArrayIncludes;

function requireArrayIncludes () {
	if (hasRequiredArrayIncludes) return arrayIncludes;
	hasRequiredArrayIncludes = 1;
	var toIndexedObject = requireToIndexedObject();
	var toAbsoluteIndex = requireToAbsoluteIndex();
	var lengthOfArrayLike = requireLengthOfArrayLike();

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    if (length === 0) return !IS_INCLUDES && -1;
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};
	return arrayIncludes;
}

var objectKeysInternal;
var hasRequiredObjectKeysInternal;

function requireObjectKeysInternal () {
	if (hasRequiredObjectKeysInternal) return objectKeysInternal;
	hasRequiredObjectKeysInternal = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var hasOwn = requireHasOwnProperty();
	var toIndexedObject = requireToIndexedObject();
	var indexOf = requireArrayIncludes().indexOf;
	var hiddenKeys = requireHiddenKeys();

	var push = uncurryThis([].push);

	objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn(O, key = names[i++])) {
	    ~indexOf(result, key) || push(result, key);
	  }
	  return result;
	};
	return objectKeysInternal;
}

var enumBugKeys;
var hasRequiredEnumBugKeys;

function requireEnumBugKeys () {
	if (hasRequiredEnumBugKeys) return enumBugKeys;
	hasRequiredEnumBugKeys = 1;
	// IE8- don't enum bug keys
	enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];
	return enumBugKeys;
}

var objectKeys;
var hasRequiredObjectKeys;

function requireObjectKeys () {
	if (hasRequiredObjectKeys) return objectKeys;
	hasRequiredObjectKeys = 1;
	var internalObjectKeys = requireObjectKeysInternal();
	var enumBugKeys = requireEnumBugKeys();

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	objectKeys = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};
	return objectKeys;
}

var hasRequiredObjectDefineProperties;

function requireObjectDefineProperties () {
	if (hasRequiredObjectDefineProperties) return objectDefineProperties;
	hasRequiredObjectDefineProperties = 1;
	var DESCRIPTORS = requireDescriptors();
	var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
	var definePropertyModule = requireObjectDefineProperty();
	var anObject = requireAnObject();
	var toIndexedObject = requireToIndexedObject();
	var objectKeys = requireObjectKeys();

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
	  return O;
	};
	return objectDefineProperties;
}

var html;
var hasRequiredHtml;

function requireHtml () {
	if (hasRequiredHtml) return html;
	hasRequiredHtml = 1;
	var getBuiltIn = requireGetBuiltIn();

	html = getBuiltIn('document', 'documentElement');
	return html;
}

var objectCreate;
var hasRequiredObjectCreate;

function requireObjectCreate () {
	if (hasRequiredObjectCreate) return objectCreate;
	hasRequiredObjectCreate = 1;
	/* global ActiveXObject -- old IE, WSH */
	var anObject = requireAnObject();
	var definePropertiesModule = requireObjectDefineProperties();
	var enumBugKeys = requireEnumBugKeys();
	var hiddenKeys = requireHiddenKeys();
	var html = requireHtml();
	var documentCreateElement = requireDocumentCreateElement();
	var sharedKey = requireSharedKey();

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
	  activeXDocument = null;
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};
	return objectCreate;
}

var addToUnscopables;
var hasRequiredAddToUnscopables;

function requireAddToUnscopables () {
	if (hasRequiredAddToUnscopables) return addToUnscopables;
	hasRequiredAddToUnscopables = 1;
	var wellKnownSymbol = requireWellKnownSymbol();
	var create = requireObjectCreate();
	var defineProperty = requireObjectDefineProperty().f;

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] === undefined) {
	  defineProperty(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};
	return addToUnscopables;
}

var hasRequiredEsnext_array_lastIndex;

function requireEsnext_array_lastIndex () {
	if (hasRequiredEsnext_array_lastIndex) return esnext_array_lastIndex;
	hasRequiredEsnext_array_lastIndex = 1;
	// TODO: Remove from `core-js@4`
	var DESCRIPTORS = requireDescriptors();
	var addToUnscopables = requireAddToUnscopables();
	var toObject = requireToObject();
	var lengthOfArrayLike = requireLengthOfArrayLike();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();

	// `Array.prototype.lastIndex` getter
	// https://github.com/keithamus/proposal-array-last
	if (DESCRIPTORS) {
	  defineBuiltInAccessor(Array.prototype, 'lastIndex', {
	    configurable: true,
	    get: function lastIndex() {
	      var O = toObject(this);
	      var len = lengthOfArrayLike(O);
	      return len === 0 ? 0 : len - 1;
	    }
	  });

	  addToUnscopables('lastIndex');
	}
	return esnext_array_lastIndex;
}

requireEsnext_array_lastIndex();

var esnext_array_lastItem = {};

var hasRequiredEsnext_array_lastItem;

function requireEsnext_array_lastItem () {
	if (hasRequiredEsnext_array_lastItem) return esnext_array_lastItem;
	hasRequiredEsnext_array_lastItem = 1;
	// TODO: Remove from `core-js@4`
	var DESCRIPTORS = requireDescriptors();
	var addToUnscopables = requireAddToUnscopables();
	var toObject = requireToObject();
	var lengthOfArrayLike = requireLengthOfArrayLike();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();

	// `Array.prototype.lastIndex` accessor
	// https://github.com/keithamus/proposal-array-last
	if (DESCRIPTORS) {
	  defineBuiltInAccessor(Array.prototype, 'lastItem', {
	    configurable: true,
	    get: function lastItem() {
	      var O = toObject(this);
	      var len = lengthOfArrayLike(O);
	      return len === 0 ? undefined : O[len - 1];
	    },
	    set: function lastItem(value) {
	      var O = toObject(this);
	      var len = lengthOfArrayLike(O);
	      return O[len === 0 ? 0 : len - 1] = value;
	    }
	  });

	  addToUnscopables('lastItem');
	}
	return esnext_array_lastItem;
}

requireEsnext_array_lastItem();

var esnext_compositeKey = {};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var hasRequiredObjectPropertyIsEnumerable;

function requireObjectPropertyIsEnumerable () {
	if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
	hasRequiredObjectPropertyIsEnumerable = 1;
	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;
	return objectPropertyIsEnumerable;
}

var hasRequiredObjectGetOwnPropertyDescriptor;

function requireObjectGetOwnPropertyDescriptor () {
	if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
	hasRequiredObjectGetOwnPropertyDescriptor = 1;
	var DESCRIPTORS = requireDescriptors();
	var call = requireFunctionCall();
	var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
	var createPropertyDescriptor = requireCreatePropertyDescriptor();
	var toIndexedObject = requireToIndexedObject();
	var toPropertyKey = requireToPropertyKey();
	var hasOwn = requireHasOwnProperty();
	var IE8_DOM_DEFINE = requireIe8DomDefine();

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (IE8_DOM_DEFINE) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
	};
	return objectGetOwnPropertyDescriptor;
}

var defineBuiltIn;
var hasRequiredDefineBuiltIn;

function requireDefineBuiltIn () {
	if (hasRequiredDefineBuiltIn) return defineBuiltIn;
	hasRequiredDefineBuiltIn = 1;
	var isCallable = requireIsCallable();
	var definePropertyModule = requireObjectDefineProperty();
	var makeBuiltIn = requireMakeBuiltIn();
	var defineGlobalProperty = requireDefineGlobalProperty();

	defineBuiltIn = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable(value)) makeBuiltIn(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};
	return defineBuiltIn;
}

var objectGetOwnPropertyNames = {};

var hasRequiredObjectGetOwnPropertyNames;

function requireObjectGetOwnPropertyNames () {
	if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
	hasRequiredObjectGetOwnPropertyNames = 1;
	var internalObjectKeys = requireObjectKeysInternal();
	var enumBugKeys = requireEnumBugKeys();

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};
	return objectGetOwnPropertyNames;
}

var objectGetOwnPropertySymbols = {};

var hasRequiredObjectGetOwnPropertySymbols;

function requireObjectGetOwnPropertySymbols () {
	if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
	hasRequiredObjectGetOwnPropertySymbols = 1;
	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
	return objectGetOwnPropertySymbols;
}

var ownKeys;
var hasRequiredOwnKeys;

function requireOwnKeys () {
	if (hasRequiredOwnKeys) return ownKeys;
	hasRequiredOwnKeys = 1;
	var getBuiltIn = requireGetBuiltIn();
	var uncurryThis = requireFunctionUncurryThis();
	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
	var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
	var anObject = requireAnObject();

	var concat = uncurryThis([].concat);

	// all object keys, includes non-enumerable and symbols
	ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};
	return ownKeys;
}

var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;

function requireCopyConstructorProperties () {
	if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
	hasRequiredCopyConstructorProperties = 1;
	var hasOwn = requireHasOwnProperty();
	var ownKeys = requireOwnKeys();
	var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
	var definePropertyModule = requireObjectDefineProperty();

	copyConstructorProperties = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};
	return copyConstructorProperties;
}

var isForced_1;
var hasRequiredIsForced;

function requireIsForced () {
	if (hasRequiredIsForced) return isForced_1;
	hasRequiredIsForced = 1;
	var fails = requireFails();
	var isCallable = requireIsCallable();

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	isForced_1 = isForced;
	return isForced_1;
}

var _export;
var hasRequired_export;

function require_export () {
	if (hasRequired_export) return _export;
	hasRequired_export = 1;
	var globalThis = requireGlobalThis();
	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
	var defineBuiltIn = requireDefineBuiltIn();
	var defineGlobalProperty = requireDefineGlobalProperty();
	var copyConstructorProperties = requireCopyConstructorProperties();
	var isForced = requireIsForced();

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	_export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = globalThis;
	  } else if (STATIC) {
	    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = globalThis[TARGET] && globalThis[TARGET].prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn(target, key, sourceProperty, options);
	  }
	};
	return _export;
}

var functionApply;
var hasRequiredFunctionApply;

function requireFunctionApply () {
	if (hasRequiredFunctionApply) return functionApply;
	hasRequiredFunctionApply = 1;
	var NATIVE_BIND = requireFunctionBindNative();

	var FunctionPrototype = Function.prototype;
	var apply = FunctionPrototype.apply;
	var call = FunctionPrototype.call;

	// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
	functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
	  return call.apply(apply, arguments);
	});
	return functionApply;
}

var es_map = {};

var es_map_constructor = {};

var internalMetadata = {exports: {}};

var objectGetOwnPropertyNamesExternal = {};

var arraySlice;
var hasRequiredArraySlice;

function requireArraySlice () {
	if (hasRequiredArraySlice) return arraySlice;
	hasRequiredArraySlice = 1;
	var uncurryThis = requireFunctionUncurryThis();

	arraySlice = uncurryThis([].slice);
	return arraySlice;
}

var hasRequiredObjectGetOwnPropertyNamesExternal;

function requireObjectGetOwnPropertyNamesExternal () {
	if (hasRequiredObjectGetOwnPropertyNamesExternal) return objectGetOwnPropertyNamesExternal;
	hasRequiredObjectGetOwnPropertyNamesExternal = 1;
	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof = requireClassofRaw();
	var toIndexedObject = requireToIndexedObject();
	var $getOwnPropertyNames = requireObjectGetOwnPropertyNames().f;
	var arraySlice = requireArraySlice();

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames(it);
	  } catch (error) {
	    return arraySlice(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames(toIndexedObject(it));
	};
	return objectGetOwnPropertyNamesExternal;
}

var arrayBufferNonExtensible;
var hasRequiredArrayBufferNonExtensible;

function requireArrayBufferNonExtensible () {
	if (hasRequiredArrayBufferNonExtensible) return arrayBufferNonExtensible;
	hasRequiredArrayBufferNonExtensible = 1;
	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails = requireFails();

	arrayBufferNonExtensible = fails(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});
	return arrayBufferNonExtensible;
}

var objectIsExtensible;
var hasRequiredObjectIsExtensible;

function requireObjectIsExtensible () {
	if (hasRequiredObjectIsExtensible) return objectIsExtensible;
	hasRequiredObjectIsExtensible = 1;
	var fails = requireFails();
	var isObject = requireIsObject();
	var classof = requireClassofRaw();
	var ARRAY_BUFFER_NON_EXTENSIBLE = requireArrayBufferNonExtensible();

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES = fails(function () { });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;
	return objectIsExtensible;
}

var freezing;
var hasRequiredFreezing;

function requireFreezing () {
	if (hasRequiredFreezing) return freezing;
	hasRequiredFreezing = 1;
	var fails = requireFails();

	freezing = !fails(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});
	return freezing;
}

var hasRequiredInternalMetadata;

function requireInternalMetadata () {
	if (hasRequiredInternalMetadata) return internalMetadata.exports;
	hasRequiredInternalMetadata = 1;
	var $ = require_export();
	var uncurryThis = requireFunctionUncurryThis();
	var hiddenKeys = requireHiddenKeys();
	var isObject = requireIsObject();
	var hasOwn = requireHasOwnProperty();
	var defineProperty = requireObjectDefineProperty().f;
	var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
	var getOwnPropertyNamesExternalModule = requireObjectGetOwnPropertyNamesExternal();
	var isExtensible = requireObjectIsExtensible();
	var uid = requireUid();
	var FREEZING = requireFreezing();

	var REQUIRED = false;
	var METADATA = uid('meta');
	var id = 0;

	var setMetadata = function (it) {
	  defineProperty(it, METADATA, { value: {
	    objectID: 'O' + id++, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!hasOwn(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () { /* empty */ };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis([].splice);
	  var test = {};
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };

	    $({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};

	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;
	return internalMetadata.exports;
}

var functionUncurryThisClause;
var hasRequiredFunctionUncurryThisClause;

function requireFunctionUncurryThisClause () {
	if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
	hasRequiredFunctionUncurryThisClause = 1;
	var classofRaw = requireClassofRaw();
	var uncurryThis = requireFunctionUncurryThis();

	functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
	};
	return functionUncurryThisClause;
}

var functionBindContext;
var hasRequiredFunctionBindContext;

function requireFunctionBindContext () {
	if (hasRequiredFunctionBindContext) return functionBindContext;
	hasRequiredFunctionBindContext = 1;
	var uncurryThis = requireFunctionUncurryThisClause();
	var aCallable = requireACallable();
	var NATIVE_BIND = requireFunctionBindNative();

	var bind = uncurryThis(uncurryThis.bind);

	// optional / simple context binding
	functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};
	return functionBindContext;
}

var iterators;
var hasRequiredIterators;

function requireIterators () {
	if (hasRequiredIterators) return iterators;
	hasRequiredIterators = 1;
	iterators = {};
	return iterators;
}

var isArrayIteratorMethod;
var hasRequiredIsArrayIteratorMethod;

function requireIsArrayIteratorMethod () {
	if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
	hasRequiredIsArrayIteratorMethod = 1;
	var wellKnownSymbol = requireWellKnownSymbol();
	var Iterators = requireIterators();

	var ITERATOR = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	isArrayIteratorMethod = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
	};
	return isArrayIteratorMethod;
}

var toStringTagSupport;
var hasRequiredToStringTagSupport;

function requireToStringTagSupport () {
	if (hasRequiredToStringTagSupport) return toStringTagSupport;
	hasRequiredToStringTagSupport = 1;
	var wellKnownSymbol = requireWellKnownSymbol();

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	toStringTagSupport = String(test) === '[object z]';
	return toStringTagSupport;
}

var classof;
var hasRequiredClassof;

function requireClassof () {
	if (hasRequiredClassof) return classof;
	hasRequiredClassof = 1;
	var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
	var isCallable = requireIsCallable();
	var classofRaw = requireClassofRaw();
	var wellKnownSymbol = requireWellKnownSymbol();

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
	};
	return classof;
}

var getIteratorMethod;
var hasRequiredGetIteratorMethod;

function requireGetIteratorMethod () {
	if (hasRequiredGetIteratorMethod) return getIteratorMethod;
	hasRequiredGetIteratorMethod = 1;
	var classof = requireClassof();
	var getMethod = requireGetMethod();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var Iterators = requireIterators();
	var wellKnownSymbol = requireWellKnownSymbol();

	var ITERATOR = wellKnownSymbol('iterator');

	getIteratorMethod = function (it) {
	  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
	    || getMethod(it, '@@iterator')
	    || Iterators[classof(it)];
	};
	return getIteratorMethod;
}

var getIterator;
var hasRequiredGetIterator;

function requireGetIterator () {
	if (hasRequiredGetIterator) return getIterator;
	hasRequiredGetIterator = 1;
	var call = requireFunctionCall();
	var aCallable = requireACallable();
	var anObject = requireAnObject();
	var tryToString = requireTryToString();
	var getIteratorMethod = requireGetIteratorMethod();

	var $TypeError = TypeError;

	getIterator = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
	  throw new $TypeError(tryToString(argument) + ' is not iterable');
	};
	return getIterator;
}

var iteratorClose;
var hasRequiredIteratorClose;

function requireIteratorClose () {
	if (hasRequiredIteratorClose) return iteratorClose;
	hasRequiredIteratorClose = 1;
	var call = requireFunctionCall();
	var anObject = requireAnObject();
	var getMethod = requireGetMethod();

	iteratorClose = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject(innerResult);
	  return value;
	};
	return iteratorClose;
}

var iterate;
var hasRequiredIterate;

function requireIterate () {
	if (hasRequiredIterate) return iterate;
	hasRequiredIterate = 1;
	var bind = requireFunctionBindContext();
	var call = requireFunctionCall();
	var anObject = requireAnObject();
	var tryToString = requireTryToString();
	var isArrayIteratorMethod = requireIsArrayIteratorMethod();
	var lengthOfArrayLike = requireLengthOfArrayLike();
	var isPrototypeOf = requireObjectIsPrototypeOf();
	var getIterator = requireGetIterator();
	var getIteratorMethod = requireGetIteratorMethod();
	var iteratorClose = requireIteratorClose();

	var $TypeError = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
	  } return new Result(false);
	};
	return iterate;
}

var anInstance;
var hasRequiredAnInstance;

function requireAnInstance () {
	if (hasRequiredAnInstance) return anInstance;
	hasRequiredAnInstance = 1;
	var isPrototypeOf = requireObjectIsPrototypeOf();

	var $TypeError = TypeError;

	anInstance = function (it, Prototype) {
	  if (isPrototypeOf(Prototype, it)) return it;
	  throw new $TypeError('Incorrect invocation');
	};
	return anInstance;
}

var checkCorrectnessOfIteration;
var hasRequiredCheckCorrectnessOfIteration;

function requireCheckCorrectnessOfIteration () {
	if (hasRequiredCheckCorrectnessOfIteration) return checkCorrectnessOfIteration;
	hasRequiredCheckCorrectnessOfIteration = 1;
	var wellKnownSymbol = requireWellKnownSymbol();

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};
	return checkCorrectnessOfIteration;
}

var setToStringTag;
var hasRequiredSetToStringTag;

function requireSetToStringTag () {
	if (hasRequiredSetToStringTag) return setToStringTag;
	hasRequiredSetToStringTag = 1;
	var defineProperty = requireObjectDefineProperty().f;
	var hasOwn = requireHasOwnProperty();
	var wellKnownSymbol = requireWellKnownSymbol();

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	setToStringTag = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn(target, TO_STRING_TAG)) {
	    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};
	return setToStringTag;
}

var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;

function requireFunctionUncurryThisAccessor () {
	if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
	hasRequiredFunctionUncurryThisAccessor = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var aCallable = requireACallable();

	functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};
	return functionUncurryThisAccessor;
}

var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;

function requireIsPossiblePrototype () {
	if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
	hasRequiredIsPossiblePrototype = 1;
	var isObject = requireIsObject();

	isPossiblePrototype = function (argument) {
	  return isObject(argument) || argument === null;
	};
	return isPossiblePrototype;
}

var aPossiblePrototype;
var hasRequiredAPossiblePrototype;

function requireAPossiblePrototype () {
	if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
	hasRequiredAPossiblePrototype = 1;
	var isPossiblePrototype = requireIsPossiblePrototype();

	var $String = String;
	var $TypeError = TypeError;

	aPossiblePrototype = function (argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
	};
	return aPossiblePrototype;
}

var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;

function requireObjectSetPrototypeOf () {
	if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
	hasRequiredObjectSetPrototypeOf = 1;
	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
	var isObject = requireIsObject();
	var requireObjectCoercible = requireRequireObjectCoercible();
	var aPossiblePrototype = requireAPossiblePrototype();

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    requireObjectCoercible(O);
	    aPossiblePrototype(proto);
	    if (!isObject(O)) return O;
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);
	return objectSetPrototypeOf;
}

var inheritIfRequired;
var hasRequiredInheritIfRequired;

function requireInheritIfRequired () {
	if (hasRequiredInheritIfRequired) return inheritIfRequired;
	hasRequiredInheritIfRequired = 1;
	var isCallable = requireIsCallable();
	var isObject = requireIsObject();
	var setPrototypeOf = requireObjectSetPrototypeOf();

	// makes subclassing work correct for wrapped built-ins
	inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};
	return inheritIfRequired;
}

var collection;
var hasRequiredCollection;

function requireCollection () {
	if (hasRequiredCollection) return collection;
	hasRequiredCollection = 1;
	var $ = require_export();
	var globalThis = requireGlobalThis();
	var uncurryThis = requireFunctionUncurryThis();
	var isForced = requireIsForced();
	var defineBuiltIn = requireDefineBuiltIn();
	var InternalMetadataModule = requireInternalMetadata();
	var iterate = requireIterate();
	var anInstance = requireAnInstance();
	var isCallable = requireIsCallable();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var isObject = requireIsObject();
	var fails = requireFails();
	var checkCorrectnessOfIteration = requireCheckCorrectnessOfIteration();
	var setToStringTag = requireSetToStringTag();
	var inheritIfRequired = requireInheritIfRequired();

	collection = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
	    defineBuiltIn(NativePrototype, KEY,
	      KEY === 'add' ? function add(value) {
	        uncurriedNativeMethod(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY === 'delete' ? function (key) {
	        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'get' ? function get(key) {
	        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'has' ? function has(key) {
	        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  var REPLACE = isForced(
	    CONSTRUCTOR_NAME,
	    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	      new NativeConstructor().entries().next();
	    }))
	  );

	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule.enable();
	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance(dummy, NativePrototype);
	        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
	        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

	  setToStringTag(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};
	return collection;
}

var defineBuiltIns;
var hasRequiredDefineBuiltIns;

function requireDefineBuiltIns () {
	if (hasRequiredDefineBuiltIns) return defineBuiltIns;
	hasRequiredDefineBuiltIns = 1;
	var defineBuiltIn = requireDefineBuiltIn();

	defineBuiltIns = function (target, src, options) {
	  for (var key in src) defineBuiltIn(target, key, src[key], options);
	  return target;
	};
	return defineBuiltIns;
}

var correctPrototypeGetter;
var hasRequiredCorrectPrototypeGetter;

function requireCorrectPrototypeGetter () {
	if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
	hasRequiredCorrectPrototypeGetter = 1;
	var fails = requireFails();

	correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});
	return correctPrototypeGetter;
}

var objectGetPrototypeOf;
var hasRequiredObjectGetPrototypeOf;

function requireObjectGetPrototypeOf () {
	if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
	hasRequiredObjectGetPrototypeOf = 1;
	var hasOwn = requireHasOwnProperty();
	var isCallable = requireIsCallable();
	var toObject = requireToObject();
	var sharedKey = requireSharedKey();
	var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object ? ObjectPrototype : null;
	};
	return objectGetPrototypeOf;
}

var iteratorsCore;
var hasRequiredIteratorsCore;

function requireIteratorsCore () {
	if (hasRequiredIteratorsCore) return iteratorsCore;
	hasRequiredIteratorsCore = 1;
	var fails = requireFails();
	var isCallable = requireIsCallable();
	var isObject = requireIsObject();
	var create = requireObjectCreate();
	var getPrototypeOf = requireObjectGetPrototypeOf();
	var defineBuiltIn = requireDefineBuiltIn();
	var wellKnownSymbol = requireWellKnownSymbol();
	var IS_PURE = requireIsPure();

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype[ITERATOR].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
	else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable(IteratorPrototype[ITERATOR])) {
	  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
	    return this;
	  });
	}

	iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};
	return iteratorsCore;
}

var iteratorCreateConstructor;
var hasRequiredIteratorCreateConstructor;

function requireIteratorCreateConstructor () {
	if (hasRequiredIteratorCreateConstructor) return iteratorCreateConstructor;
	hasRequiredIteratorCreateConstructor = 1;
	var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
	var create = requireObjectCreate();
	var createPropertyDescriptor = requireCreatePropertyDescriptor();
	var setToStringTag = requireSetToStringTag();
	var Iterators = requireIterators();

	var returnThis = function () { return this; };

	iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};
	return iteratorCreateConstructor;
}

var iteratorDefine;
var hasRequiredIteratorDefine;

function requireIteratorDefine () {
	if (hasRequiredIteratorDefine) return iteratorDefine;
	hasRequiredIteratorDefine = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var IS_PURE = requireIsPure();
	var FunctionName = requireFunctionName();
	var isCallable = requireIsCallable();
	var createIteratorConstructor = requireIteratorCreateConstructor();
	var getPrototypeOf = requireObjectGetPrototypeOf();
	var setPrototypeOf = requireObjectSetPrototypeOf();
	var setToStringTag = requireSetToStringTag();
	var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
	var defineBuiltIn = requireDefineBuiltIn();
	var wellKnownSymbol = requireWellKnownSymbol();
	var Iterators = requireIterators();
	var IteratorsCore = requireIteratorsCore();

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }

	    return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
	          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
	  }
	  Iterators[NAME] = defaultIterator;

	  return methods;
	};
	return iteratorDefine;
}

var createIterResultObject;
var hasRequiredCreateIterResultObject;

function requireCreateIterResultObject () {
	if (hasRequiredCreateIterResultObject) return createIterResultObject;
	hasRequiredCreateIterResultObject = 1;
	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	createIterResultObject = function (value, done) {
	  return { value: value, done: done };
	};
	return createIterResultObject;
}

var setSpecies;
var hasRequiredSetSpecies;

function requireSetSpecies () {
	if (hasRequiredSetSpecies) return setSpecies;
	hasRequiredSetSpecies = 1;
	var getBuiltIn = requireGetBuiltIn();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
	var wellKnownSymbol = requireWellKnownSymbol();
	var DESCRIPTORS = requireDescriptors();

	var SPECIES = wellKnownSymbol('species');

	setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
	    defineBuiltInAccessor(Constructor, SPECIES, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};
	return setSpecies;
}

var collectionStrong;
var hasRequiredCollectionStrong;

function requireCollectionStrong () {
	if (hasRequiredCollectionStrong) return collectionStrong;
	hasRequiredCollectionStrong = 1;
	var create = requireObjectCreate();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
	var defineBuiltIns = requireDefineBuiltIns();
	var bind = requireFunctionBindContext();
	var anInstance = requireAnInstance();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var iterate = requireIterate();
	var defineIterator = requireIteratorDefine();
	var createIterResultObject = requireCreateIterResultObject();
	var setSpecies = requireSetSpecies();
	var DESCRIPTORS = requireDescriptors();
	var fastKey = requireInternalMetadata().fastKey;
	var InternalStateModule = requireInternalState();

	var setInternalState = InternalStateModule.set;
	var internalStateGetterFor = InternalStateModule.getterFor;

	collectionStrong = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance(that, Prototype);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create(null),
	        first: null,
	        last: null,
	        size: 0
	      });
	      if (!DESCRIPTORS) that.size = 0;
	      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: null,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key === key) return entry;
	      }
	    };

	    defineBuiltIns(Prototype, {
	      // `{ Map, Set }.prototype.clear()` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.clear
	      // https://tc39.es/ecma262/#sec-set.prototype.clear
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = null;
	          entry = entry.next;
	        }
	        state.first = state.last = null;
	        state.index = create(null);
	        if (DESCRIPTORS) state.size = 0;
	        else that.size = 0;
	      },
	      // `{ Map, Set }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.delete
	      // https://tc39.es/ecma262/#sec-set.prototype.delete
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first === entry) state.first = next;
	          if (state.last === entry) state.last = prev;
	          if (DESCRIPTORS) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // `{ Map, Set}.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.has
	      // https://tc39.es/ecma262/#sec-set.prototype.has
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    defineBuiltIns(Prototype, IS_MAP ? {
	      // `Map.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.get
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // `Map.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.set
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // `Set.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-set.prototype.add
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
	    // https://tc39.es/ecma262/#sec-map.prototype.entries
	    // https://tc39.es/ecma262/#sec-map.prototype.keys
	    // https://tc39.es/ecma262/#sec-map.prototype.values
	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
	    // https://tc39.es/ecma262/#sec-set.prototype.entries
	    // https://tc39.es/ecma262/#sec-set.prototype.keys
	    // https://tc39.es/ecma262/#sec-set.prototype.values
	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
	    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: null
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = null;
	        return createIterResultObject(undefined, true);
	      }
	      // return step by kind
	      if (kind === 'keys') return createIterResultObject(entry.key, false);
	      if (kind === 'values') return createIterResultObject(entry.value, false);
	      return createIterResultObject([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // `{ Map, Set }.prototype[@@species]` accessors
	    // https://tc39.es/ecma262/#sec-get-map-@@species
	    // https://tc39.es/ecma262/#sec-get-set-@@species
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};
	return collectionStrong;
}

var hasRequiredEs_map_constructor;

function requireEs_map_constructor () {
	if (hasRequiredEs_map_constructor) return es_map_constructor;
	hasRequiredEs_map_constructor = 1;
	var collection = requireCollection();
	var collectionStrong = requireCollectionStrong();

	// `Map` constructor
	// https://tc39.es/ecma262/#sec-map-objects
	collection('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);
	return es_map_constructor;
}

var hasRequiredEs_map;

function requireEs_map () {
	if (hasRequiredEs_map) return es_map;
	hasRequiredEs_map = 1;
	// TODO: Remove this module from `core-js@4` since it's replaced to module below
	requireEs_map_constructor();
	return es_map;
}

var es_weakMap = {};

var es_weakMap_constructor = {};

var isArray;
var hasRequiredIsArray;

function requireIsArray () {
	if (hasRequiredIsArray) return isArray;
	hasRequiredIsArray = 1;
	var classof = requireClassofRaw();

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	isArray = Array.isArray || function isArray(argument) {
	  return classof(argument) === 'Array';
	};
	return isArray;
}

var isConstructor;
var hasRequiredIsConstructor;

function requireIsConstructor () {
	if (hasRequiredIsConstructor) return isConstructor;
	hasRequiredIsConstructor = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var fails = requireFails();
	var isCallable = requireIsCallable();
	var classof = requireClassof();
	var getBuiltIn = requireGetBuiltIn();
	var inspectSource = requireInspectSource();

	var noop = function () { /* empty */ };
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	isConstructor = !construct || fails(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;
	return isConstructor;
}

var arraySpeciesConstructor;
var hasRequiredArraySpeciesConstructor;

function requireArraySpeciesConstructor () {
	if (hasRequiredArraySpeciesConstructor) return arraySpeciesConstructor;
	hasRequiredArraySpeciesConstructor = 1;
	var isArray = requireIsArray();
	var isConstructor = requireIsConstructor();
	var isObject = requireIsObject();
	var wellKnownSymbol = requireWellKnownSymbol();

	var SPECIES = wellKnownSymbol('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	arraySpeciesConstructor = function (originalArray) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array : C;
	};
	return arraySpeciesConstructor;
}

var arraySpeciesCreate;
var hasRequiredArraySpeciesCreate;

function requireArraySpeciesCreate () {
	if (hasRequiredArraySpeciesCreate) return arraySpeciesCreate;
	hasRequiredArraySpeciesCreate = 1;
	var arraySpeciesConstructor = requireArraySpeciesConstructor();

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	arraySpeciesCreate = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};
	return arraySpeciesCreate;
}

var arrayIteration;
var hasRequiredArrayIteration;

function requireArrayIteration () {
	if (hasRequiredArrayIteration) return arrayIteration;
	hasRequiredArrayIteration = 1;
	var bind = requireFunctionBindContext();
	var uncurryThis = requireFunctionUncurryThis();
	var IndexedObject = requireIndexedObject();
	var toObject = requireToObject();
	var lengthOfArrayLike = requireLengthOfArrayLike();
	var arraySpeciesCreate = requireArraySpeciesCreate();

	var push = uncurryThis([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var length = lengthOfArrayLike(self);
	    var boundFunction = bind(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};
	return arrayIteration;
}

var collectionWeak;
var hasRequiredCollectionWeak;

function requireCollectionWeak () {
	if (hasRequiredCollectionWeak) return collectionWeak;
	hasRequiredCollectionWeak = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var defineBuiltIns = requireDefineBuiltIns();
	var getWeakData = requireInternalMetadata().getWeakData;
	var anInstance = requireAnInstance();
	var anObject = requireAnObject();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var isObject = requireIsObject();
	var iterate = requireIterate();
	var ArrayIterationModule = requireArrayIteration();
	var hasOwn = requireHasOwnProperty();
	var InternalStateModule = requireInternalState();

	var setInternalState = InternalStateModule.set;
	var internalStateGetterFor = InternalStateModule.getterFor;
	var find = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var splice = uncurryThis([].splice);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (state) {
	  return state.frozen || (state.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) splice(this.entries, index, 1);
	    return !!~index;
	  }
	};

	collectionWeak = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance(that, Prototype);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: null
	      });
	      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);
	      else data[state.id] = value;
	      return that;
	    };

	    defineBuiltIns(Prototype, {
	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && hasOwn(data, state.id) && delete data[state.id];
	      },
	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && hasOwn(data, state.id);
	      }
	    });

	    defineBuiltIns(Prototype, IS_MAP ? {
	      // `WeakMap.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          if (data) return data[state.id];
	        }
	      },
	      // `WeakMap.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // `WeakSet.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });

	    return Constructor;
	  }
	};
	return collectionWeak;
}

var hasRequiredEs_weakMap_constructor;

function requireEs_weakMap_constructor () {
	if (hasRequiredEs_weakMap_constructor) return es_weakMap_constructor;
	hasRequiredEs_weakMap_constructor = 1;
	var FREEZING = requireFreezing();
	var globalThis = requireGlobalThis();
	var uncurryThis = requireFunctionUncurryThis();
	var defineBuiltIns = requireDefineBuiltIns();
	var InternalMetadataModule = requireInternalMetadata();
	var collection = requireCollection();
	var collectionWeak = requireCollectionWeak();
	var isObject = requireIsObject();
	var enforceInternalState = requireInternalState().enforce;
	var fails = requireFails();
	var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();

	var $Object = Object;
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray = Array.isArray;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = $Object.isExtensible;
	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen = $Object.isFrozen;
	// eslint-disable-next-line es/no-object-issealed -- safe
	var isSealed = $Object.isSealed;
	// eslint-disable-next-line es/no-object-freeze -- safe
	var freeze = $Object.freeze;
	// eslint-disable-next-line es/no-object-seal -- safe
	var seal = $Object.seal;

	var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
	var InternalWeakMap;

	var wrapper = function (init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
	var WeakMapPrototype = $WeakMap.prototype;
	var nativeSet = uncurryThis(WeakMapPrototype.set);

	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
	var hasMSEdgeFreezingBug = function () {
	  return FREEZING && fails(function () {
	    var frozenArray = freeze([]);
	    nativeSet(new $WeakMap(), frozenArray, 1);
	    return !isFrozen(frozenArray);
	  });
	};

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP) if (IS_IE11) {
	  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.enable();
	  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
	  var nativeHas = uncurryThis(WeakMapPrototype.has);
	  var nativeGet = uncurryThis(WeakMapPrototype.get);
	  defineBuiltIns(WeakMapPrototype, {
	    'delete': function (key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete(this, key) || state.frozen['delete'](key);
	      } return nativeDelete(this, key);
	    },
	    has: function has(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) || state.frozen.has(key);
	      } return nativeHas(this, key);
	    },
	    get: function get(key) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
	      } return nativeGet(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet(this, key, value);
	      return this;
	    }
	  });
	// Chakra Edge frozen keys fix
	} else if (hasMSEdgeFreezingBug()) {
	  defineBuiltIns(WeakMapPrototype, {
	    set: function set(key, value) {
	      var arrayIntegrityLevel;
	      if (isArray(key)) {
	        if (isFrozen(key)) arrayIntegrityLevel = freeze;
	        else if (isSealed(key)) arrayIntegrityLevel = seal;
	      }
	      nativeSet(this, key, value);
	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
	      return this;
	    }
	  });
	}
	return es_weakMap_constructor;
}

var hasRequiredEs_weakMap;

function requireEs_weakMap () {
	if (hasRequiredEs_weakMap) return es_weakMap;
	hasRequiredEs_weakMap = 1;
	// TODO: Remove this module from `core-js@4` since it's replaced to module below
	requireEs_weakMap_constructor();
	return es_weakMap;
}

var compositeKey;
var hasRequiredCompositeKey;

function requireCompositeKey () {
	if (hasRequiredCompositeKey) return compositeKey;
	hasRequiredCompositeKey = 1;
	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
	requireEs_map();
	requireEs_weakMap();
	var getBuiltIn = requireGetBuiltIn();
	var create = requireObjectCreate();
	var isObject = requireIsObject();

	var $Object = Object;
	var $TypeError = TypeError;
	var Map = getBuiltIn('Map');
	var WeakMap = getBuiltIn('WeakMap');

	var Node = function () {
	  // keys
	  this.object = null;
	  this.symbol = null;
	  // child nodes
	  this.primitives = null;
	  this.objectsByIndex = create(null);
	};

	Node.prototype.get = function (key, initializer) {
	  return this[key] || (this[key] = initializer());
	};

	Node.prototype.next = function (i, it, IS_OBJECT) {
	  var store = IS_OBJECT
	    ? this.objectsByIndex[i] || (this.objectsByIndex[i] = new WeakMap())
	    : this.primitives || (this.primitives = new Map());
	  var entry = store.get(it);
	  if (!entry) store.set(it, entry = new Node());
	  return entry;
	};

	var root = new Node();

	compositeKey = function () {
	  var active = root;
	  var length = arguments.length;
	  var i, it;
	  // for prevent leaking, start from objects
	  for (i = 0; i < length; i++) {
	    if (isObject(it = arguments[i])) active = active.next(i, it, true);
	  }
	  if (this === $Object && active === root) throw new $TypeError('Composite keys must contain a non-primitive component');
	  for (i = 0; i < length; i++) {
	    if (!isObject(it = arguments[i])) active = active.next(i, it, false);
	  } return active;
	};
	return compositeKey;
}

var hasRequiredEsnext_compositeKey;

function requireEsnext_compositeKey () {
	if (hasRequiredEsnext_compositeKey) return esnext_compositeKey;
	hasRequiredEsnext_compositeKey = 1;
	var $ = require_export();
	var apply = requireFunctionApply();
	var getCompositeKeyNode = requireCompositeKey();
	var getBuiltIn = requireGetBuiltIn();
	var create = requireObjectCreate();

	var $Object = Object;

	var initializer = function () {
	  var freeze = getBuiltIn('Object', 'freeze');
	  return freeze ? freeze(create(null)) : create(null);
	};

	// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
	$({ global: true, forced: true }, {
	  compositeKey: function compositeKey() {
	    return apply(getCompositeKeyNode, $Object, arguments).get('object', initializer);
	  }
	});
	return esnext_compositeKey;
}

requireEsnext_compositeKey();

var esnext_compositeSymbol = {};

var hasRequiredEsnext_compositeSymbol;

function requireEsnext_compositeSymbol () {
	if (hasRequiredEsnext_compositeSymbol) return esnext_compositeSymbol;
	hasRequiredEsnext_compositeSymbol = 1;
	var $ = require_export();
	var getCompositeKeyNode = requireCompositeKey();
	var getBuiltIn = requireGetBuiltIn();
	var apply = requireFunctionApply();

	// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
	$({ global: true, forced: true }, {
	  compositeSymbol: function compositeSymbol() {
	    if (arguments.length === 1 && typeof arguments[0] == 'string') return getBuiltIn('Symbol')['for'](arguments[0]);
	    return apply(getCompositeKeyNode, null, arguments).get('symbol', getBuiltIn('Symbol'));
	  }
	});
	return esnext_compositeSymbol;
}

requireEsnext_compositeSymbol();

var esnext_map_deleteAll = {};

var mapHelpers;
var hasRequiredMapHelpers;

function requireMapHelpers () {
	if (hasRequiredMapHelpers) return mapHelpers;
	hasRequiredMapHelpers = 1;
	var uncurryThis = requireFunctionUncurryThis();

	// eslint-disable-next-line es/no-map -- safe
	var MapPrototype = Map.prototype;

	mapHelpers = {
	  // eslint-disable-next-line es/no-map -- safe
	  Map: Map,
	  set: uncurryThis(MapPrototype.set),
	  get: uncurryThis(MapPrototype.get),
	  has: uncurryThis(MapPrototype.has),
	  remove: uncurryThis(MapPrototype['delete']),
	  proto: MapPrototype
	};
	return mapHelpers;
}

var aMap;
var hasRequiredAMap;

function requireAMap () {
	if (hasRequiredAMap) return aMap;
	hasRequiredAMap = 1;
	var has = requireMapHelpers().has;

	// Perform ? RequireInternalSlot(M, [[MapData]])
	aMap = function (it) {
	  has(it);
	  return it;
	};
	return aMap;
}

var hasRequiredEsnext_map_deleteAll;

function requireEsnext_map_deleteAll () {
	if (hasRequiredEsnext_map_deleteAll) return esnext_map_deleteAll;
	hasRequiredEsnext_map_deleteAll = 1;
	var $ = require_export();
	var aMap = requireAMap();
	var remove = requireMapHelpers().remove;

	// `Map.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  deleteAll: function deleteAll(/* ...elements */) {
	    var collection = aMap(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    } return !!allDeleted;
	  }
	});
	return esnext_map_deleteAll;
}

requireEsnext_map_deleteAll();

var esnext_map_every = {};

var iterateSimple;
var hasRequiredIterateSimple;

function requireIterateSimple () {
	if (hasRequiredIterateSimple) return iterateSimple;
	hasRequiredIterateSimple = 1;
	var call = requireFunctionCall();

	iterateSimple = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
	  var next = record.next;
	  var step, result;
	  while (!(step = call(next, iterator)).done) {
	    result = fn(step.value);
	    if (result !== undefined) return result;
	  }
	};
	return iterateSimple;
}

var mapIterate;
var hasRequiredMapIterate;

function requireMapIterate () {
	if (hasRequiredMapIterate) return mapIterate;
	hasRequiredMapIterate = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var iterateSimple = requireIterateSimple();
	var MapHelpers = requireMapHelpers();

	var Map = MapHelpers.Map;
	var MapPrototype = MapHelpers.proto;
	var forEach = uncurryThis(MapPrototype.forEach);
	var entries = uncurryThis(MapPrototype.entries);
	var next = entries(new Map()).next;

	mapIterate = function (map, fn, interruptible) {
	  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
	    return fn(entry[1], entry[0]);
	  }) : forEach(map, fn);
	};
	return mapIterate;
}

var hasRequiredEsnext_map_every;

function requireEsnext_map_every () {
	if (hasRequiredEsnext_map_every) return esnext_map_every;
	hasRequiredEsnext_map_every = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  every: function every(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(map, function (value, key) {
	      if (!boundFunction(value, key, map)) return false;
	    }, true) !== false;
	  }
	});
	return esnext_map_every;
}

requireEsnext_map_every();

var esnext_map_filter = {};

var hasRequiredEsnext_map_filter;

function requireEsnext_map_filter () {
	if (hasRequiredEsnext_map_filter) return esnext_map_filter;
	hasRequiredEsnext_map_filter = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var MapHelpers = requireMapHelpers();
	var iterate = requireMapIterate();

	var Map = MapHelpers.Map;
	var set = MapHelpers.set;

	// `Map.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map();
	    iterate(map, function (value, key) {
	      if (boundFunction(value, key, map)) set(newMap, key, value);
	    });
	    return newMap;
	  }
	});
	return esnext_map_filter;
}

requireEsnext_map_filter();

var esnext_map_find = {};

var hasRequiredEsnext_map_find;

function requireEsnext_map_find () {
	if (hasRequiredEsnext_map_find) return esnext_map_find;
	hasRequiredEsnext_map_find = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  find: function find(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { value: value };
	    }, true);
	    return result && result.value;
	  }
	});
	return esnext_map_find;
}

requireEsnext_map_find();

var esnext_map_findKey = {};

var hasRequiredEsnext_map_findKey;

function requireEsnext_map_findKey () {
	if (hasRequiredEsnext_map_findKey) return esnext_map_findKey;
	hasRequiredEsnext_map_findKey = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.findKey` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  findKey: function findKey(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate(map, function (value, key) {
	      if (boundFunction(value, key, map)) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});
	return esnext_map_findKey;
}

requireEsnext_map_findKey();

var esnext_map_from = {};

var collectionFrom;
var hasRequiredCollectionFrom;

function requireCollectionFrom () {
	if (hasRequiredCollectionFrom) return collectionFrom;
	hasRequiredCollectionFrom = 1;
	// https://tc39.github.io/proposal-setmap-offrom/
	var bind = requireFunctionBindContext();
	var anObject = requireAnObject();
	var toObject = requireToObject();
	var iterate = requireIterate();

	collectionFrom = function (C, adder, ENTRY) {
	  return function from(source /* , mapFn, thisArg */) {
	    var O = toObject(source);
	    var length = arguments.length;
	    var mapFn = length > 1 ? arguments[1] : undefined;
	    var mapping = mapFn !== undefined;
	    var boundFunction = mapping ? bind(mapFn, length > 2 ? arguments[2] : undefined) : undefined;
	    var result = new C();
	    var n = 0;
	    iterate(O, function (nextItem) {
	      var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
	      if (ENTRY) adder(result, anObject(entry)[0], entry[1]);
	      else adder(result, entry);
	    });
	    return result;
	  };
	};
	return collectionFrom;
}

var hasRequiredEsnext_map_from;

function requireEsnext_map_from () {
	if (hasRequiredEsnext_map_from) return esnext_map_from;
	hasRequiredEsnext_map_from = 1;
	var $ = require_export();
	var MapHelpers = requireMapHelpers();
	var createCollectionFrom = requireCollectionFrom();

	// `Map.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	$({ target: 'Map', stat: true, forced: true }, {
	  from: createCollectionFrom(MapHelpers.Map, MapHelpers.set, true)
	});
	return esnext_map_from;
}

requireEsnext_map_from();

var esnext_map_groupBy = {};

var es_map_groupBy = {};

var hasRequiredEs_map_groupBy;

function requireEs_map_groupBy () {
	if (hasRequiredEs_map_groupBy) return es_map_groupBy;
	hasRequiredEs_map_groupBy = 1;
	var $ = require_export();
	var uncurryThis = requireFunctionUncurryThis();
	var aCallable = requireACallable();
	var requireObjectCoercible = requireRequireObjectCoercible();
	var iterate = requireIterate();
	var MapHelpers = requireMapHelpers();
	var IS_PURE = requireIsPure();
	var fails = requireFails();

	var Map = MapHelpers.Map;
	var has = MapHelpers.has;
	var get = MapHelpers.get;
	var set = MapHelpers.set;
	var push = uncurryThis([].push);

	var DOES_NOT_WORK_WITH_PRIMITIVES = IS_PURE || fails(function () {
	  return Map.groupBy('ab', function (it) {
	    return it;
	  }).get('a').length !== 1;
	});

	// `Map.groupBy` method
	// https://tc39.es/ecma262/#sec-map.groupby
	$({ target: 'Map', stat: true, forced: IS_PURE || DOES_NOT_WORK_WITH_PRIMITIVES }, {
	  groupBy: function groupBy(items, callbackfn) {
	    requireObjectCoercible(items);
	    aCallable(callbackfn);
	    var map = new Map();
	    var k = 0;
	    iterate(items, function (value) {
	      var key = callbackfn(value, k++);
	      if (!has(map, key)) set(map, key, [value]);
	      else push(get(map, key), value);
	    });
	    return map;
	  }
	});
	return es_map_groupBy;
}

var hasRequiredEsnext_map_groupBy;

function requireEsnext_map_groupBy () {
	if (hasRequiredEsnext_map_groupBy) return esnext_map_groupBy;
	hasRequiredEsnext_map_groupBy = 1;
	// TODO: Remove from `core-js@4`
	requireEs_map_groupBy();
	return esnext_map_groupBy;
}

requireEsnext_map_groupBy();

var esnext_map_includes = {};

var sameValueZero;
var hasRequiredSameValueZero;

function requireSameValueZero () {
	if (hasRequiredSameValueZero) return sameValueZero;
	hasRequiredSameValueZero = 1;
	// `SameValueZero` abstract operation
	// https://tc39.es/ecma262/#sec-samevaluezero
	sameValueZero = function (x, y) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return x === y || x !== x && y !== y;
	};
	return sameValueZero;
}

var hasRequiredEsnext_map_includes;

function requireEsnext_map_includes () {
	if (hasRequiredEsnext_map_includes) return esnext_map_includes;
	hasRequiredEsnext_map_includes = 1;
	var $ = require_export();
	var sameValueZero = requireSameValueZero();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.includes` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  includes: function includes(searchElement) {
	    return iterate(aMap(this), function (value) {
	      if (sameValueZero(value, searchElement)) return true;
	    }, true) === true;
	  }
	});
	return esnext_map_includes;
}

requireEsnext_map_includes();

var esnext_map_keyBy = {};

var hasRequiredEsnext_map_keyBy;

function requireEsnext_map_keyBy () {
	if (hasRequiredEsnext_map_keyBy) return esnext_map_keyBy;
	hasRequiredEsnext_map_keyBy = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var iterate = requireIterate();
	var isCallable = requireIsCallable();
	var aCallable = requireACallable();
	var Map = requireMapHelpers().Map;

	// `Map.keyBy` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', stat: true, forced: true }, {
	  keyBy: function keyBy(iterable, keyDerivative) {
	    var C = isCallable(this) ? this : Map;
	    var newMap = new C();
	    aCallable(keyDerivative);
	    var setter = aCallable(newMap.set);
	    iterate(iterable, function (element) {
	      call(setter, newMap, keyDerivative(element), element);
	    });
	    return newMap;
	  }
	});
	return esnext_map_keyBy;
}

requireEsnext_map_keyBy();

var esnext_map_keyOf = {};

var hasRequiredEsnext_map_keyOf;

function requireEsnext_map_keyOf () {
	if (hasRequiredEsnext_map_keyOf) return esnext_map_keyOf;
	hasRequiredEsnext_map_keyOf = 1;
	var $ = require_export();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.keyOf` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  keyOf: function keyOf(searchElement) {
	    var result = iterate(aMap(this), function (value, key) {
	      if (value === searchElement) return { key: key };
	    }, true);
	    return result && result.key;
	  }
	});
	return esnext_map_keyOf;
}

requireEsnext_map_keyOf();

var esnext_map_mapKeys = {};

var hasRequiredEsnext_map_mapKeys;

function requireEsnext_map_mapKeys () {
	if (hasRequiredEsnext_map_mapKeys) return esnext_map_mapKeys;
	hasRequiredEsnext_map_mapKeys = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var MapHelpers = requireMapHelpers();
	var iterate = requireMapIterate();

	var Map = MapHelpers.Map;
	var set = MapHelpers.set;

	// `Map.prototype.mapKeys` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map();
	    iterate(map, function (value, key) {
	      set(newMap, boundFunction(value, key, map), value);
	    });
	    return newMap;
	  }
	});
	return esnext_map_mapKeys;
}

requireEsnext_map_mapKeys();

var esnext_map_mapValues = {};

var hasRequiredEsnext_map_mapValues;

function requireEsnext_map_mapValues () {
	if (hasRequiredEsnext_map_mapValues) return esnext_map_mapValues;
	hasRequiredEsnext_map_mapValues = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var MapHelpers = requireMapHelpers();
	var iterate = requireMapIterate();

	var Map = MapHelpers.Map;
	var set = MapHelpers.set;

	// `Map.prototype.mapValues` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  mapValues: function mapValues(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map();
	    iterate(map, function (value, key) {
	      set(newMap, key, boundFunction(value, key, map));
	    });
	    return newMap;
	  }
	});
	return esnext_map_mapValues;
}

requireEsnext_map_mapValues();

var esnext_map_merge = {};

var hasRequiredEsnext_map_merge;

function requireEsnext_map_merge () {
	if (hasRequiredEsnext_map_merge) return esnext_map_merge;
	hasRequiredEsnext_map_merge = 1;
	var $ = require_export();
	var aMap = requireAMap();
	var iterate = requireIterate();
	var set = requireMapHelpers().set;

	// `Map.prototype.merge` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  merge: function merge(iterable /* ...iterables */) {
	    var map = aMap(this);
	    var argumentsLength = arguments.length;
	    var i = 0;
	    while (i < argumentsLength) {
	      iterate(arguments[i++], function (key, value) {
	        set(map, key, value);
	      }, { AS_ENTRIES: true });
	    }
	    return map;
	  }
	});
	return esnext_map_merge;
}

requireEsnext_map_merge();

var esnext_map_of = {};

var collectionOf;
var hasRequiredCollectionOf;

function requireCollectionOf () {
	if (hasRequiredCollectionOf) return collectionOf;
	hasRequiredCollectionOf = 1;
	var anObject = requireAnObject();

	// https://tc39.github.io/proposal-setmap-offrom/
	collectionOf = function (C, adder, ENTRY) {
	  return function of() {
	    var result = new C();
	    var length = arguments.length;
	    for (var index = 0; index < length; index++) {
	      var entry = arguments[index];
	      if (ENTRY) adder(result, anObject(entry)[0], entry[1]);
	      else adder(result, entry);
	    } return result;
	  };
	};
	return collectionOf;
}

var hasRequiredEsnext_map_of;

function requireEsnext_map_of () {
	if (hasRequiredEsnext_map_of) return esnext_map_of;
	hasRequiredEsnext_map_of = 1;
	var $ = require_export();
	var MapHelpers = requireMapHelpers();
	var createCollectionOf = requireCollectionOf();

	// `Map.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	$({ target: 'Map', stat: true, forced: true }, {
	  of: createCollectionOf(MapHelpers.Map, MapHelpers.set, true)
	});
	return esnext_map_of;
}

requireEsnext_map_of();

var esnext_map_reduce = {};

var hasRequiredEsnext_map_reduce;

function requireEsnext_map_reduce () {
	if (hasRequiredEsnext_map_reduce) return esnext_map_reduce;
	hasRequiredEsnext_map_reduce = 1;
	var $ = require_export();
	var aCallable = requireACallable();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	var $TypeError = TypeError;

	// `Map.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var map = aMap(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable(callbackfn);
	    iterate(map, function (value, key) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, key, map);
	      }
	    });
	    if (noInitial) throw new $TypeError('Reduce of empty map with no initial value');
	    return accumulator;
	  }
	});
	return esnext_map_reduce;
}

requireEsnext_map_reduce();

var esnext_map_some = {};

var hasRequiredEsnext_map_some;

function requireEsnext_map_some () {
	if (hasRequiredEsnext_map_some) return esnext_map_some;
	hasRequiredEsnext_map_some = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aMap = requireAMap();
	var iterate = requireMapIterate();

	// `Map.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  some: function some(callbackfn /* , thisArg */) {
	    var map = aMap(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(map, function (value, key) {
	      if (boundFunction(value, key, map)) return true;
	    }, true) === true;
	  }
	});
	return esnext_map_some;
}

requireEsnext_map_some();

var esnext_map_update = {};

var hasRequiredEsnext_map_update;

function requireEsnext_map_update () {
	if (hasRequiredEsnext_map_update) return esnext_map_update;
	hasRequiredEsnext_map_update = 1;
	var $ = require_export();
	var aCallable = requireACallable();
	var aMap = requireAMap();
	var MapHelpers = requireMapHelpers();

	var $TypeError = TypeError;
	var get = MapHelpers.get;
	var has = MapHelpers.has;
	var set = MapHelpers.set;

	// `Map.prototype.update` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Map', proto: true, real: true, forced: true }, {
	  update: function update(key, callback /* , thunk */) {
	    var map = aMap(this);
	    var length = arguments.length;
	    aCallable(callback);
	    var isPresentInMap = has(map, key);
	    if (!isPresentInMap && length < 3) {
	      throw new $TypeError('Updating absent value');
	    }
	    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
	    set(map, key, callback(value, key, map));
	    return map;
	  }
	});
	return esnext_map_update;
}

requireEsnext_map_update();

var esnext_math_clamp = {};

var hasRequiredEsnext_math_clamp;

function requireEsnext_math_clamp () {
	if (hasRequiredEsnext_math_clamp) return esnext_math_clamp;
	hasRequiredEsnext_math_clamp = 1;
	var $ = require_export();

	var min = Math.min;
	var max = Math.max;

	// `Math.clamp` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, forced: true }, {
	  clamp: function clamp(x, lower, upper) {
	    return min(upper, max(lower, x));
	  }
	});
	return esnext_math_clamp;
}

requireEsnext_math_clamp();

var esnext_math_degPerRad = {};

var hasRequiredEsnext_math_degPerRad;

function requireEsnext_math_degPerRad () {
	if (hasRequiredEsnext_math_degPerRad) return esnext_math_degPerRad;
	hasRequiredEsnext_math_degPerRad = 1;
	var $ = require_export();

	// `Math.DEG_PER_RAD` constant
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, nonConfigurable: true, nonWritable: true }, {
	  DEG_PER_RAD: Math.PI / 180
	});
	return esnext_math_degPerRad;
}

requireEsnext_math_degPerRad();

var esnext_math_degrees = {};

var hasRequiredEsnext_math_degrees;

function requireEsnext_math_degrees () {
	if (hasRequiredEsnext_math_degrees) return esnext_math_degrees;
	hasRequiredEsnext_math_degrees = 1;
	var $ = require_export();

	var RAD_PER_DEG = 180 / Math.PI;

	// `Math.degrees` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, forced: true }, {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});
	return esnext_math_degrees;
}

requireEsnext_math_degrees();

var esnext_math_fscale = {};

var mathScale;
var hasRequiredMathScale;

function requireMathScale () {
	if (hasRequiredMathScale) return mathScale;
	hasRequiredMathScale = 1;
	// `Math.scale` method implementation
	// https://rwaldron.github.io/proposal-math-extensions/
	mathScale = function scale(x, inLow, inHigh, outLow, outHigh) {
	  var nx = +x;
	  var nInLow = +inLow;
	  var nInHigh = +inHigh;
	  var nOutLow = +outLow;
	  var nOutHigh = +outHigh;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (nx !== nx || nInLow !== nInLow || nInHigh !== nInHigh || nOutLow !== nOutLow || nOutHigh !== nOutHigh) return NaN;
	  if (nx === Infinity || nx === -Infinity) return nx;
	  return (nx - nInLow) * (nOutHigh - nOutLow) / (nInHigh - nInLow) + nOutLow;
	};
	return mathScale;
}

var mathSign;
var hasRequiredMathSign;

function requireMathSign () {
	if (hasRequiredMathSign) return mathSign;
	hasRequiredMathSign = 1;
	// `Math.sign` method implementation
	// https://tc39.es/ecma262/#sec-math.sign
	// eslint-disable-next-line es/no-math-sign -- safe
	mathSign = Math.sign || function sign(x) {
	  var n = +x;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
	};
	return mathSign;
}

var mathRoundTiesToEven;
var hasRequiredMathRoundTiesToEven;

function requireMathRoundTiesToEven () {
	if (hasRequiredMathRoundTiesToEven) return mathRoundTiesToEven;
	hasRequiredMathRoundTiesToEven = 1;
	var EPSILON = 2.220446049250313e-16; // Number.EPSILON
	var INVERSE_EPSILON = 1 / EPSILON;

	mathRoundTiesToEven = function (n) {
	  return n + INVERSE_EPSILON - INVERSE_EPSILON;
	};
	return mathRoundTiesToEven;
}

var mathFloatRound;
var hasRequiredMathFloatRound;

function requireMathFloatRound () {
	if (hasRequiredMathFloatRound) return mathFloatRound;
	hasRequiredMathFloatRound = 1;
	var sign = requireMathSign();
	var roundTiesToEven = requireMathRoundTiesToEven();

	var abs = Math.abs;

	var EPSILON = 2.220446049250313e-16; // Number.EPSILON

	mathFloatRound = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
	  var n = +x;
	  var absolute = abs(n);
	  var s = sign(n);
	  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
	  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
	  var result = a - (a - absolute);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
	  return s * result;
	};
	return mathFloatRound;
}

var mathFround;
var hasRequiredMathFround;

function requireMathFround () {
	if (hasRequiredMathFround) return mathFround;
	hasRequiredMathFround = 1;
	var floatRound = requireMathFloatRound();

	var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
	var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
	var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

	// `Math.fround` method implementation
	// https://tc39.es/ecma262/#sec-math.fround
	// eslint-disable-next-line es/no-math-fround -- safe
	mathFround = Math.fround || function fround(x) {
	  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
	};
	return mathFround;
}

var hasRequiredEsnext_math_fscale;

function requireEsnext_math_fscale () {
	if (hasRequiredEsnext_math_fscale) return esnext_math_fscale;
	hasRequiredEsnext_math_fscale = 1;
	var $ = require_export();

	var scale = requireMathScale();
	var fround = requireMathFround();

	// `Math.fscale` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, forced: true }, {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});
	return esnext_math_fscale;
}

requireEsnext_math_fscale();

var esnext_math_iaddh = {};

var hasRequiredEsnext_math_iaddh;

function requireEsnext_math_iaddh () {
	if (hasRequiredEsnext_math_iaddh) return esnext_math_iaddh;
	hasRequiredEsnext_math_iaddh = 1;
	var $ = require_export();

	// `Math.iaddh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$({ target: 'Math', stat: true, forced: true }, {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});
	return esnext_math_iaddh;
}

requireEsnext_math_iaddh();

var esnext_math_imulh = {};

var hasRequiredEsnext_math_imulh;

function requireEsnext_math_imulh () {
	if (hasRequiredEsnext_math_imulh) return esnext_math_imulh;
	hasRequiredEsnext_math_imulh = 1;
	var $ = require_export();

	// `Math.imulh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$({ target: 'Math', stat: true, forced: true }, {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xFFFF;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});
	return esnext_math_imulh;
}

requireEsnext_math_imulh();

var esnext_math_isubh = {};

var hasRequiredEsnext_math_isubh;

function requireEsnext_math_isubh () {
	if (hasRequiredEsnext_math_isubh) return esnext_math_isubh;
	hasRequiredEsnext_math_isubh = 1;
	var $ = require_export();

	// `Math.isubh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$({ target: 'Math', stat: true, forced: true }, {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});
	return esnext_math_isubh;
}

requireEsnext_math_isubh();

var esnext_math_radPerDeg = {};

var hasRequiredEsnext_math_radPerDeg;

function requireEsnext_math_radPerDeg () {
	if (hasRequiredEsnext_math_radPerDeg) return esnext_math_radPerDeg;
	hasRequiredEsnext_math_radPerDeg = 1;
	var $ = require_export();

	// `Math.RAD_PER_DEG` constant
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, nonConfigurable: true, nonWritable: true }, {
	  RAD_PER_DEG: 180 / Math.PI
	});
	return esnext_math_radPerDeg;
}

requireEsnext_math_radPerDeg();

var esnext_math_radians = {};

var hasRequiredEsnext_math_radians;

function requireEsnext_math_radians () {
	if (hasRequiredEsnext_math_radians) return esnext_math_radians;
	hasRequiredEsnext_math_radians = 1;
	var $ = require_export();

	var DEG_PER_RAD = Math.PI / 180;

	// `Math.radians` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, forced: true }, {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});
	return esnext_math_radians;
}

requireEsnext_math_radians();

var esnext_math_scale = {};

var hasRequiredEsnext_math_scale;

function requireEsnext_math_scale () {
	if (hasRequiredEsnext_math_scale) return esnext_math_scale;
	hasRequiredEsnext_math_scale = 1;
	var $ = require_export();
	var scale = requireMathScale();

	// `Math.scale` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$({ target: 'Math', stat: true, forced: true }, {
	  scale: scale
	});
	return esnext_math_scale;
}

requireEsnext_math_scale();

var esnext_math_seededPrng = {};

var numberIsFinite;
var hasRequiredNumberIsFinite;

function requireNumberIsFinite () {
	if (hasRequiredNumberIsFinite) return numberIsFinite;
	hasRequiredNumberIsFinite = 1;
	var globalThis = requireGlobalThis();

	var globalIsFinite = globalThis.isFinite;

	// `Number.isFinite` method
	// https://tc39.es/ecma262/#sec-number.isfinite
	// eslint-disable-next-line es/no-number-isfinite -- safe
	numberIsFinite = Number.isFinite || function isFinite(it) {
	  return typeof it == 'number' && globalIsFinite(it);
	};
	return numberIsFinite;
}

var hasRequiredEsnext_math_seededPrng;

function requireEsnext_math_seededPrng () {
	if (hasRequiredEsnext_math_seededPrng) return esnext_math_seededPrng;
	hasRequiredEsnext_math_seededPrng = 1;
	var $ = require_export();
	var anObject = requireAnObject();
	var numberIsFinite = requireNumberIsFinite();
	var createIteratorConstructor = requireIteratorCreateConstructor();
	var createIterResultObject = requireCreateIterResultObject();
	var InternalStateModule = requireInternalState();

	var SEEDED_RANDOM = 'Seeded Random';
	var SEEDED_RANDOM_GENERATOR = SEEDED_RANDOM + ' Generator';
	var SEED_TYPE_ERROR = 'Math.seededPRNG() argument should have a "seed" field with a finite value.';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SEEDED_RANDOM_GENERATOR);
	var $TypeError = TypeError;

	var $SeededRandomGenerator = createIteratorConstructor(function SeededRandomGenerator(seed) {
	  setInternalState(this, {
	    type: SEEDED_RANDOM_GENERATOR,
	    seed: seed % 2147483647
	  });
	}, SEEDED_RANDOM, function next() {
	  var state = getInternalState(this);
	  var seed = state.seed = (state.seed * 1103515245 + 12345) % 2147483647;
	  return createIterResultObject((seed & 1073741823) / 1073741823, false);
	});

	// `Math.seededPRNG` method
	// https://github.com/tc39/proposal-seeded-random
	// based on https://github.com/tc39/proposal-seeded-random/blob/78b8258835b57fc2100d076151ab506bc3202ae6/demo.html
	$({ target: 'Math', stat: true, forced: true }, {
	  seededPRNG: function seededPRNG(it) {
	    var seed = anObject(it).seed;
	    if (!numberIsFinite(seed)) throw new $TypeError(SEED_TYPE_ERROR);
	    return new $SeededRandomGenerator(seed);
	  }
	});
	return esnext_math_seededPrng;
}

requireEsnext_math_seededPrng();

var esnext_math_signbit = {};

var hasRequiredEsnext_math_signbit;

function requireEsnext_math_signbit () {
	if (hasRequiredEsnext_math_signbit) return esnext_math_signbit;
	hasRequiredEsnext_math_signbit = 1;
	var $ = require_export();

	// `Math.signbit` method
	// https://github.com/tc39/proposal-Math.signbit
	$({ target: 'Math', stat: true, forced: true }, {
	  signbit: function signbit(x) {
	    var n = +x;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    return n === n && n === 0 ? 1 / n === -Infinity : n < 0;
	  }
	});
	return esnext_math_signbit;
}

requireEsnext_math_signbit();

var esnext_math_umulh = {};

var hasRequiredEsnext_math_umulh;

function requireEsnext_math_umulh () {
	if (hasRequiredEsnext_math_umulh) return esnext_math_umulh;
	hasRequiredEsnext_math_umulh = 1;
	var $ = require_export();

	// `Math.umulh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$({ target: 'Math', stat: true, forced: true }, {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xFFFF;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});
	return esnext_math_umulh;
}

requireEsnext_math_umulh();

var esnext_number_fromString = {};

var hasRequiredEsnext_number_fromString;

function requireEsnext_number_fromString () {
	if (hasRequiredEsnext_number_fromString) return esnext_number_fromString;
	hasRequiredEsnext_number_fromString = 1;
	var $ = require_export();
	var uncurryThis = requireFunctionUncurryThis();
	var toIntegerOrInfinity = requireToIntegerOrInfinity();

	var INVALID_NUMBER_REPRESENTATION = 'Invalid number representation';
	var INVALID_RADIX = 'Invalid radix';
	var $RangeError = RangeError;
	var $SyntaxError = SyntaxError;
	var $TypeError = TypeError;
	var $parseInt = parseInt;
	var pow = Math.pow;
	var valid = /^[\d.a-z]+$/;
	var charAt = uncurryThis(''.charAt);
	var exec = uncurryThis(valid.exec);
	var numberToString = uncurryThis(1.0.toString);
	var stringSlice = uncurryThis(''.slice);
	var split = uncurryThis(''.split);

	// `Number.fromString` method
	// https://github.com/tc39/proposal-number-fromstring
	$({ target: 'Number', stat: true, forced: true }, {
	  fromString: function fromString(string, radix) {
	    var sign = 1;
	    if (typeof string != 'string') throw new $TypeError(INVALID_NUMBER_REPRESENTATION);
	    if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    if (charAt(string, 0) === '-') {
	      sign = -1;
	      string = stringSlice(string, 1);
	      if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    }
	    var R = radix === undefined ? 10 : toIntegerOrInfinity(radix);
	    if (R < 2 || R > 36) throw new $RangeError(INVALID_RADIX);
	    if (!exec(valid, string)) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    var parts = split(string, '.');
	    var mathNum = $parseInt(parts[0], R);
	    if (parts.length > 1) mathNum += $parseInt(parts[1], R) / pow(R, parts[1].length);
	    if (R === 10 && numberToString(mathNum, R) !== string) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    return sign * mathNum;
	  }
	});
	return esnext_number_fromString;
}

requireEsnext_number_fromString();

var esnext_observable = {};

var esnext_observable_constructor = {};

var hostReportErrors;
var hasRequiredHostReportErrors;

function requireHostReportErrors () {
	if (hasRequiredHostReportErrors) return hostReportErrors;
	hasRequiredHostReportErrors = 1;
	hostReportErrors = function (a, b) {
	  try {
	    // eslint-disable-next-line no-console -- safe
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  } catch (error) { /* empty */ }
	};
	return hostReportErrors;
}

var hasRequiredEsnext_observable_constructor;

function requireEsnext_observable_constructor () {
	if (hasRequiredEsnext_observable_constructor) return esnext_observable_constructor;
	hasRequiredEsnext_observable_constructor = 1;
	// https://github.com/tc39/proposal-observable
	var $ = require_export();
	var call = requireFunctionCall();
	var DESCRIPTORS = requireDescriptors();
	var setSpecies = requireSetSpecies();
	var aCallable = requireACallable();
	var anObject = requireAnObject();
	var anInstance = requireAnInstance();
	var isCallable = requireIsCallable();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var isObject = requireIsObject();
	var getMethod = requireGetMethod();
	var defineBuiltIn = requireDefineBuiltIn();
	var defineBuiltIns = requireDefineBuiltIns();
	var defineBuiltInAccessor = requireDefineBuiltInAccessor();
	var hostReportErrors = requireHostReportErrors();
	var wellKnownSymbol = requireWellKnownSymbol();
	var InternalStateModule = requireInternalState();

	var $$OBSERVABLE = wellKnownSymbol('observable');
	var OBSERVABLE = 'Observable';
	var SUBSCRIPTION = 'Subscription';
	var SUBSCRIPTION_OBSERVER = 'SubscriptionObserver';
	var getterFor = InternalStateModule.getterFor;
	var setInternalState = InternalStateModule.set;
	var getObservableInternalState = getterFor(OBSERVABLE);
	var getSubscriptionInternalState = getterFor(SUBSCRIPTION);
	var getSubscriptionObserverInternalState = getterFor(SUBSCRIPTION_OBSERVER);

	var SubscriptionState = function (observer) {
	  this.observer = anObject(observer);
	  this.cleanup = null;
	  this.subscriptionObserver = null;
	};

	SubscriptionState.prototype = {
	  type: SUBSCRIPTION,
	  clean: function () {
	    var cleanup = this.cleanup;
	    if (cleanup) {
	      this.cleanup = null;
	      try {
	        cleanup();
	      } catch (error) {
	        hostReportErrors(error);
	      }
	    }
	  },
	  close: function () {
	    if (!DESCRIPTORS) {
	      var subscription = this.facade;
	      var subscriptionObserver = this.subscriptionObserver;
	      subscription.closed = true;
	      if (subscriptionObserver) subscriptionObserver.closed = true;
	    } this.observer = null;
	  },
	  isClosed: function () {
	    return this.observer === null;
	  }
	};

	var Subscription = function (observer, subscriber) {
	  var subscriptionState = setInternalState(this, new SubscriptionState(observer));
	  var start;
	  if (!DESCRIPTORS) this.closed = false;
	  try {
	    if (start = getMethod(observer, 'start')) call(start, observer, this);
	  } catch (error) {
	    hostReportErrors(error);
	  }
	  if (subscriptionState.isClosed()) return;
	  var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(subscriptionState);
	  try {
	    var cleanup = subscriber(subscriptionObserver);
	    var subscription = cleanup;
	    if (!isNullOrUndefined(cleanup)) subscriptionState.cleanup = isCallable(cleanup.unsubscribe)
	      ? function () { subscription.unsubscribe(); }
	      : aCallable(cleanup);
	  } catch (error) {
	    subscriptionObserver.error(error);
	    return;
	  } if (subscriptionState.isClosed()) subscriptionState.clean();
	};

	Subscription.prototype = defineBuiltIns({}, {
	  unsubscribe: function unsubscribe() {
	    var subscriptionState = getSubscriptionInternalState(this);
	    if (!subscriptionState.isClosed()) {
	      subscriptionState.close();
	      subscriptionState.clean();
	    }
	  }
	});

	if (DESCRIPTORS) defineBuiltInAccessor(Subscription.prototype, 'closed', {
	  configurable: true,
	  get: function closed() {
	    return getSubscriptionInternalState(this).isClosed();
	  }
	});

	var SubscriptionObserver = function (subscriptionState) {
	  setInternalState(this, {
	    type: SUBSCRIPTION_OBSERVER,
	    subscriptionState: subscriptionState
	  });
	  if (!DESCRIPTORS) this.closed = false;
	};

	SubscriptionObserver.prototype = defineBuiltIns({}, {
	  next: function next(value) {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      try {
	        var nextMethod = getMethod(observer, 'next');
	        if (nextMethod) call(nextMethod, observer, value);
	      } catch (error) {
	        hostReportErrors(error);
	      }
	    }
	  },
	  error: function error(value) {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      subscriptionState.close();
	      try {
	        var errorMethod = getMethod(observer, 'error');
	        if (errorMethod) call(errorMethod, observer, value);
	        else hostReportErrors(value);
	      } catch (err) {
	        hostReportErrors(err);
	      } subscriptionState.clean();
	    }
	  },
	  complete: function complete() {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      subscriptionState.close();
	      try {
	        var completeMethod = getMethod(observer, 'complete');
	        if (completeMethod) call(completeMethod, observer);
	      } catch (error) {
	        hostReportErrors(error);
	      } subscriptionState.clean();
	    }
	  }
	});

	if (DESCRIPTORS) defineBuiltInAccessor(SubscriptionObserver.prototype, 'closed', {
	  configurable: true,
	  get: function closed() {
	    return getSubscriptionObserverInternalState(this).subscriptionState.isClosed();
	  }
	});

	var $Observable = function Observable(subscriber) {
	  anInstance(this, ObservablePrototype);
	  setInternalState(this, {
	    type: OBSERVABLE,
	    subscriber: aCallable(subscriber)
	  });
	};

	var ObservablePrototype = $Observable.prototype;

	defineBuiltIns(ObservablePrototype, {
	  subscribe: function subscribe(observer) {
	    var length = arguments.length;
	    return new Subscription(isCallable(observer) ? {
	      next: observer,
	      error: length > 1 ? arguments[1] : undefined,
	      complete: length > 2 ? arguments[2] : undefined
	    } : isObject(observer) ? observer : {}, getObservableInternalState(this).subscriber);
	  }
	});

	defineBuiltIn(ObservablePrototype, $$OBSERVABLE, function () { return this; });

	$({ global: true, constructor: true, forced: true }, {
	  Observable: $Observable
	});

	setSpecies(OBSERVABLE);
	return esnext_observable_constructor;
}

var esnext_observable_from = {};

var hasRequiredEsnext_observable_from;

function requireEsnext_observable_from () {
	if (hasRequiredEsnext_observable_from) return esnext_observable_from;
	hasRequiredEsnext_observable_from = 1;
	var $ = require_export();
	var getBuiltIn = requireGetBuiltIn();
	var call = requireFunctionCall();
	var anObject = requireAnObject();
	var isConstructor = requireIsConstructor();
	var getIterator = requireGetIterator();
	var getMethod = requireGetMethod();
	var iterate = requireIterate();
	var wellKnownSymbol = requireWellKnownSymbol();

	var $$OBSERVABLE = wellKnownSymbol('observable');

	// `Observable.from` method
	// https://github.com/tc39/proposal-observable
	$({ target: 'Observable', stat: true, forced: true }, {
	  from: function from(x) {
	    var C = isConstructor(this) ? this : getBuiltIn('Observable');
	    var observableMethod = getMethod(anObject(x), $$OBSERVABLE);
	    if (observableMethod) {
	      var observable = anObject(call(observableMethod, x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    var iterator = getIterator(x);
	    return new C(function (observer) {
	      iterate(iterator, function (it, stop) {
	        observer.next(it);
	        if (observer.closed) return stop();
	      }, { IS_ITERATOR: true, INTERRUPTED: true });
	      observer.complete();
	    });
	  }
	});
	return esnext_observable_from;
}

var esnext_observable_of = {};

var hasRequiredEsnext_observable_of;

function requireEsnext_observable_of () {
	if (hasRequiredEsnext_observable_of) return esnext_observable_of;
	hasRequiredEsnext_observable_of = 1;
	var $ = require_export();
	var getBuiltIn = requireGetBuiltIn();
	var isConstructor = requireIsConstructor();

	var Array = getBuiltIn('Array');

	// `Observable.of` method
	// https://github.com/tc39/proposal-observable
	$({ target: 'Observable', stat: true, forced: true }, {
	  of: function of() {
	    var C = isConstructor(this) ? this : getBuiltIn('Observable');
	    var length = arguments.length;
	    var items = Array(length);
	    var index = 0;
	    while (index < length) items[index] = arguments[index++];
	    return new C(function (observer) {
	      for (var i = 0; i < length; i++) {
	        observer.next(items[i]);
	        if (observer.closed) return;
	      } observer.complete();
	    });
	  }
	});
	return esnext_observable_of;
}

var hasRequiredEsnext_observable;

function requireEsnext_observable () {
	if (hasRequiredEsnext_observable) return esnext_observable;
	hasRequiredEsnext_observable = 1;
	// TODO: Remove this module from `core-js@4` since it's split to modules listed below
	requireEsnext_observable_constructor();
	requireEsnext_observable_from();
	requireEsnext_observable_of();
	return esnext_observable;
}

requireEsnext_observable();

var esnext_promise_try = {};

var es_promise_try = {};

var newPromiseCapability = {};

var hasRequiredNewPromiseCapability;

function requireNewPromiseCapability () {
	if (hasRequiredNewPromiseCapability) return newPromiseCapability;
	hasRequiredNewPromiseCapability = 1;
	var aCallable = requireACallable();

	var $TypeError = TypeError;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable(resolve);
	  this.reject = aCallable(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability.f = function (C) {
	  return new PromiseCapability(C);
	};
	return newPromiseCapability;
}

var perform;
var hasRequiredPerform;

function requirePerform () {
	if (hasRequiredPerform) return perform;
	hasRequiredPerform = 1;
	perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};
	return perform;
}

var hasRequiredEs_promise_try;

function requireEs_promise_try () {
	if (hasRequiredEs_promise_try) return es_promise_try;
	hasRequiredEs_promise_try = 1;
	var $ = require_export();
	var globalThis = requireGlobalThis();
	var apply = requireFunctionApply();
	var slice = requireArraySlice();
	var newPromiseCapabilityModule = requireNewPromiseCapability();
	var aCallable = requireACallable();
	var perform = requirePerform();

	var Promise = globalThis.Promise;

	var ACCEPT_ARGUMENTS = false;
	// Avoiding the use of polyfills of the previous iteration of this proposal
	// that does not accept arguments of the callback
	var FORCED = !Promise || !Promise['try'] || perform(function () {
	  Promise['try'](function (argument) {
	    ACCEPT_ARGUMENTS = argument === 8;
	  }, 8);
	}).error || !ACCEPT_ARGUMENTS;

	// `Promise.try` method
	// https://tc39.es/ecma262/#sec-promise.try
	$({ target: 'Promise', stat: true, forced: FORCED }, {
	  'try': function (callbackfn /* , ...args */) {
	    var args = arguments.length > 1 ? slice(arguments, 1) : [];
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(function () {
	      return apply(aCallable(callbackfn), undefined, args);
	    });
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});
	return es_promise_try;
}

var hasRequiredEsnext_promise_try;

function requireEsnext_promise_try () {
	if (hasRequiredEsnext_promise_try) return esnext_promise_try;
	hasRequiredEsnext_promise_try = 1;
	// TODO: Remove from `core-js@4`
	requireEs_promise_try();
	return esnext_promise_try;
}

requireEsnext_promise_try();

var esnext_reflect_defineMetadata = {};

var reflectMetadata;
var hasRequiredReflectMetadata;

function requireReflectMetadata () {
	if (hasRequiredReflectMetadata) return reflectMetadata;
	hasRequiredReflectMetadata = 1;
	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
	requireEs_map();
	requireEs_weakMap();
	var getBuiltIn = requireGetBuiltIn();
	var uncurryThis = requireFunctionUncurryThis();
	var shared = requireShared();

	var Map = getBuiltIn('Map');
	var WeakMap = getBuiltIn('WeakMap');
	var push = uncurryThis([].push);

	var metadata = shared('metadata');
	var store = metadata.store || (metadata.store = new WeakMap());

	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};

	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};

	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};

	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};

	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { push(keys, key); });
	  return keys;
	};

	var toMetadataKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};

	reflectMetadata = {
	  store: store,
	  getMap: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  toKey: toMetadataKey
	};
	return reflectMetadata;
}

var hasRequiredEsnext_reflect_defineMetadata;

function requireEsnext_reflect_defineMetadata () {
	if (hasRequiredEsnext_reflect_defineMetadata) return esnext_reflect_defineMetadata;
	hasRequiredEsnext_reflect_defineMetadata = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var toMetadataKey = ReflectMetadataModule.toKey;
	var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

	// `Reflect.defineMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
	    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
	  }
	});
	return esnext_reflect_defineMetadata;
}

requireEsnext_reflect_defineMetadata();

var esnext_reflect_deleteMetadata = {};

var hasRequiredEsnext_reflect_deleteMetadata;

function requireEsnext_reflect_deleteMetadata () {
	if (hasRequiredEsnext_reflect_deleteMetadata) return esnext_reflect_deleteMetadata;
	hasRequiredEsnext_reflect_deleteMetadata = 1;
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var toMetadataKey = ReflectMetadataModule.toKey;
	var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
	var store = ReflectMetadataModule.store;

	// `Reflect.deleteMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
	    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  }
	});
	return esnext_reflect_deleteMetadata;
}

requireEsnext_reflect_deleteMetadata();

var esnext_reflect_getMetadata = {};

var hasRequiredEsnext_reflect_getMetadata;

function requireEsnext_reflect_getMetadata () {
	if (hasRequiredEsnext_reflect_getMetadata) return esnext_reflect_getMetadata;
	hasRequiredEsnext_reflect_getMetadata = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();
	var getPrototypeOf = requireObjectGetPrototypeOf();

	var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
	var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
	var toMetadataKey = ReflectMetadataModule.toKey;

	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	// `Reflect.getMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
	    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
	  }
	});
	return esnext_reflect_getMetadata;
}

requireEsnext_reflect_getMetadata();

var esnext_reflect_getMetadataKeys = {};

var arrayUniqueBy;
var hasRequiredArrayUniqueBy;

function requireArrayUniqueBy () {
	if (hasRequiredArrayUniqueBy) return arrayUniqueBy;
	hasRequiredArrayUniqueBy = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var aCallable = requireACallable();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var lengthOfArrayLike = requireLengthOfArrayLike();
	var toObject = requireToObject();
	var MapHelpers = requireMapHelpers();
	var iterate = requireMapIterate();

	var Map = MapHelpers.Map;
	var mapHas = MapHelpers.has;
	var mapSet = MapHelpers.set;
	var push = uncurryThis([].push);

	// `Array.prototype.uniqueBy` method
	// https://github.com/tc39/proposal-array-unique
	arrayUniqueBy = function uniqueBy(resolver) {
	  var that = toObject(this);
	  var length = lengthOfArrayLike(that);
	  var result = [];
	  var map = new Map();
	  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
	    return value;
	  };
	  var index, item, key;
	  for (index = 0; index < length; index++) {
	    item = that[index];
	    key = resolverFunction(item);
	    if (!mapHas(map, key)) mapSet(map, key, item);
	  }
	  iterate(map, function (value) {
	    push(result, value);
	  });
	  return result;
	};
	return arrayUniqueBy;
}

var hasRequiredEsnext_reflect_getMetadataKeys;

function requireEsnext_reflect_getMetadataKeys () {
	if (hasRequiredEsnext_reflect_getMetadataKeys) return esnext_reflect_getMetadataKeys;
	hasRequiredEsnext_reflect_getMetadataKeys = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var uncurryThis = requireFunctionUncurryThis();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();
	var getPrototypeOf = requireObjectGetPrototypeOf();
	var $arrayUniqueBy = requireArrayUniqueBy();

	var arrayUniqueBy = uncurryThis($arrayUniqueBy);
	var concat = uncurryThis([].concat);
	var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
	var toMetadataKey = ReflectMetadataModule.toKey;

	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? arrayUniqueBy(concat(oKeys, pKeys)) : pKeys : oKeys;
	};

	// `Reflect.getMetadataKeys` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
	    return ordinaryMetadataKeys(anObject(target), targetKey);
	  }
	});
	return esnext_reflect_getMetadataKeys;
}

requireEsnext_reflect_getMetadataKeys();

var esnext_reflect_getOwnMetadata = {};

var hasRequiredEsnext_reflect_getOwnMetadata;

function requireEsnext_reflect_getOwnMetadata () {
	if (hasRequiredEsnext_reflect_getOwnMetadata) return esnext_reflect_getOwnMetadata;
	hasRequiredEsnext_reflect_getOwnMetadata = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
	var toMetadataKey = ReflectMetadataModule.toKey;

	// `Reflect.getOwnMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
	  }
	});
	return esnext_reflect_getOwnMetadata;
}

requireEsnext_reflect_getOwnMetadata();

var esnext_reflect_getOwnMetadataKeys = {};

var hasRequiredEsnext_reflect_getOwnMetadataKeys;

function requireEsnext_reflect_getOwnMetadataKeys () {
	if (hasRequiredEsnext_reflect_getOwnMetadataKeys) return esnext_reflect_getOwnMetadataKeys;
	hasRequiredEsnext_reflect_getOwnMetadataKeys = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
	var toMetadataKey = ReflectMetadataModule.toKey;

	// `Reflect.getOwnMetadataKeys` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
	    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
	  }
	});
	return esnext_reflect_getOwnMetadataKeys;
}

requireEsnext_reflect_getOwnMetadataKeys();

var esnext_reflect_hasMetadata = {};

var hasRequiredEsnext_reflect_hasMetadata;

function requireEsnext_reflect_hasMetadata () {
	if (hasRequiredEsnext_reflect_hasMetadata) return esnext_reflect_hasMetadata;
	hasRequiredEsnext_reflect_hasMetadata = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();
	var getPrototypeOf = requireObjectGetPrototypeOf();

	var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
	var toMetadataKey = ReflectMetadataModule.toKey;

	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	// `Reflect.hasMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
	    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
	  }
	});
	return esnext_reflect_hasMetadata;
}

requireEsnext_reflect_hasMetadata();

var esnext_reflect_hasOwnMetadata = {};

var hasRequiredEsnext_reflect_hasOwnMetadata;

function requireEsnext_reflect_hasOwnMetadata () {
	if (hasRequiredEsnext_reflect_hasOwnMetadata) return esnext_reflect_hasOwnMetadata;
	hasRequiredEsnext_reflect_hasOwnMetadata = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
	var toMetadataKey = ReflectMetadataModule.toKey;

	// `Reflect.hasOwnMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
	  }
	});
	return esnext_reflect_hasOwnMetadata;
}

requireEsnext_reflect_hasOwnMetadata();

var esnext_reflect_metadata = {};

var hasRequiredEsnext_reflect_metadata;

function requireEsnext_reflect_metadata () {
	if (hasRequiredEsnext_reflect_metadata) return esnext_reflect_metadata;
	hasRequiredEsnext_reflect_metadata = 1;
	var $ = require_export();
	var ReflectMetadataModule = requireReflectMetadata();
	var anObject = requireAnObject();

	var toMetadataKey = ReflectMetadataModule.toKey;
	var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

	// `Reflect.metadata` method
	// https://github.com/rbuckton/reflect-metadata
	$({ target: 'Reflect', stat: true }, {
	  metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, key) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
	    };
	  }
	});
	return esnext_reflect_metadata;
}

requireEsnext_reflect_metadata();

var esnext_set_addAll = {};

var setHelpers;
var hasRequiredSetHelpers;

function requireSetHelpers () {
	if (hasRequiredSetHelpers) return setHelpers;
	hasRequiredSetHelpers = 1;
	var uncurryThis = requireFunctionUncurryThis();

	// eslint-disable-next-line es/no-set -- safe
	var SetPrototype = Set.prototype;

	setHelpers = {
	  // eslint-disable-next-line es/no-set -- safe
	  Set: Set,
	  add: uncurryThis(SetPrototype.add),
	  has: uncurryThis(SetPrototype.has),
	  remove: uncurryThis(SetPrototype['delete']),
	  proto: SetPrototype
	};
	return setHelpers;
}

var aSet;
var hasRequiredASet;

function requireASet () {
	if (hasRequiredASet) return aSet;
	hasRequiredASet = 1;
	var has = requireSetHelpers().has;

	// Perform ? RequireInternalSlot(M, [[SetData]])
	aSet = function (it) {
	  has(it);
	  return it;
	};
	return aSet;
}

var hasRequiredEsnext_set_addAll;

function requireEsnext_set_addAll () {
	if (hasRequiredEsnext_set_addAll) return esnext_set_addAll;
	hasRequiredEsnext_set_addAll = 1;
	var $ = require_export();
	var aSet = requireASet();
	var add = requireSetHelpers().add;

	// `Set.prototype.addAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  addAll: function addAll(/* ...elements */) {
	    var set = aSet(this);
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      add(set, arguments[k]);
	    } return set;
	  }
	});
	return esnext_set_addAll;
}

requireEsnext_set_addAll();

var esnext_set_deleteAll = {};

var hasRequiredEsnext_set_deleteAll;

function requireEsnext_set_deleteAll () {
	if (hasRequiredEsnext_set_deleteAll) return esnext_set_deleteAll;
	hasRequiredEsnext_set_deleteAll = 1;
	var $ = require_export();
	var aSet = requireASet();
	var remove = requireSetHelpers().remove;

	// `Set.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  deleteAll: function deleteAll(/* ...elements */) {
	    var collection = aSet(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    } return !!allDeleted;
	  }
	});
	return esnext_set_deleteAll;
}

requireEsnext_set_deleteAll();

var esnext_set_difference = {};

var isIterable;
var hasRequiredIsIterable;

function requireIsIterable () {
	if (hasRequiredIsIterable) return isIterable;
	hasRequiredIsIterable = 1;
	var classof = requireClassof();
	var hasOwn = requireHasOwnProperty();
	var isNullOrUndefined = requireIsNullOrUndefined();
	var wellKnownSymbol = requireWellKnownSymbol();
	var Iterators = requireIterators();

	var ITERATOR = wellKnownSymbol('iterator');
	var $Object = Object;

	isIterable = function (it) {
	  if (isNullOrUndefined(it)) return false;
	  var O = $Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || hasOwn(Iterators, classof(O));
	};
	return isIterable;
}

var toSetLike;
var hasRequiredToSetLike;

function requireToSetLike () {
	if (hasRequiredToSetLike) return toSetLike;
	hasRequiredToSetLike = 1;
	var getBuiltIn = requireGetBuiltIn();
	var isCallable = requireIsCallable();
	var isIterable = requireIsIterable();
	var isObject = requireIsObject();

	var Set = getBuiltIn('Set');

	var isSetLike = function (it) {
	  return isObject(it)
	    && typeof it.size == 'number'
	    && isCallable(it.has)
	    && isCallable(it.keys);
	};

	// fallback old -> new set methods proposal arguments
	toSetLike = function (it) {
	  if (isSetLike(it)) return it;
	  return isIterable(it) ? new Set(it) : it;
	};
	return toSetLike;
}

var setIterate;
var hasRequiredSetIterate;

function requireSetIterate () {
	if (hasRequiredSetIterate) return setIterate;
	hasRequiredSetIterate = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var iterateSimple = requireIterateSimple();
	var SetHelpers = requireSetHelpers();

	var Set = SetHelpers.Set;
	var SetPrototype = SetHelpers.proto;
	var forEach = uncurryThis(SetPrototype.forEach);
	var keys = uncurryThis(SetPrototype.keys);
	var next = keys(new Set()).next;

	setIterate = function (set, fn, interruptible) {
	  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
	};
	return setIterate;
}

var setClone;
var hasRequiredSetClone;

function requireSetClone () {
	if (hasRequiredSetClone) return setClone;
	hasRequiredSetClone = 1;
	var SetHelpers = requireSetHelpers();
	var iterate = requireSetIterate();

	var Set = SetHelpers.Set;
	var add = SetHelpers.add;

	setClone = function (set) {
	  var result = new Set();
	  iterate(set, function (it) {
	    add(result, it);
	  });
	  return result;
	};
	return setClone;
}

var setSize;
var hasRequiredSetSize;

function requireSetSize () {
	if (hasRequiredSetSize) return setSize;
	hasRequiredSetSize = 1;
	var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
	var SetHelpers = requireSetHelpers();

	setSize = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
	  return set.size;
	};
	return setSize;
}

var getIteratorDirect;
var hasRequiredGetIteratorDirect;

function requireGetIteratorDirect () {
	if (hasRequiredGetIteratorDirect) return getIteratorDirect;
	hasRequiredGetIteratorDirect = 1;
	// `GetIteratorDirect(obj)` abstract operation
	// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
	getIteratorDirect = function (obj) {
	  return {
	    iterator: obj,
	    next: obj.next,
	    done: false
	  };
	};
	return getIteratorDirect;
}

var getSetRecord;
var hasRequiredGetSetRecord;

function requireGetSetRecord () {
	if (hasRequiredGetSetRecord) return getSetRecord;
	hasRequiredGetSetRecord = 1;
	var aCallable = requireACallable();
	var anObject = requireAnObject();
	var call = requireFunctionCall();
	var toIntegerOrInfinity = requireToIntegerOrInfinity();
	var getIteratorDirect = requireGetIteratorDirect();

	var INVALID_SIZE = 'Invalid size';
	var $RangeError = RangeError;
	var $TypeError = TypeError;
	var max = Math.max;

	var SetRecord = function (set, intSize) {
	  this.set = set;
	  this.size = max(intSize, 0);
	  this.has = aCallable(set.has);
	  this.keys = aCallable(set.keys);
	};

	SetRecord.prototype = {
	  getIterator: function () {
	    return getIteratorDirect(anObject(call(this.keys, this.set)));
	  },
	  includes: function (it) {
	    return call(this.has, this.set, it);
	  }
	};

	// `GetSetRecord` abstract operation
	// https://tc39.es/proposal-set-methods/#sec-getsetrecord
	getSetRecord = function (obj) {
	  anObject(obj);
	  var numSize = +obj.size;
	  // NOTE: If size is undefined, then numSize will be NaN
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
	  var intSize = toIntegerOrInfinity(numSize);
	  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
	  return new SetRecord(obj, intSize);
	};
	return getSetRecord;
}

var setDifference;
var hasRequiredSetDifference;

function requireSetDifference () {
	if (hasRequiredSetDifference) return setDifference;
	hasRequiredSetDifference = 1;
	var aSet = requireASet();
	var SetHelpers = requireSetHelpers();
	var clone = requireSetClone();
	var size = requireSetSize();
	var getSetRecord = requireGetSetRecord();
	var iterateSet = requireSetIterate();
	var iterateSimple = requireIterateSimple();

	var has = SetHelpers.has;
	var remove = SetHelpers.remove;

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	setDifference = function difference(other) {
	  var O = aSet(this);
	  var otherRec = getSetRecord(other);
	  var result = clone(O);
	  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
	    if (otherRec.includes(e)) remove(result, e);
	  });
	  else iterateSimple(otherRec.getIterator(), function (e) {
	    if (has(O, e)) remove(result, e);
	  });
	  return result;
	};
	return setDifference;
}

var hasRequiredEsnext_set_difference;

function requireEsnext_set_difference () {
	if (hasRequiredEsnext_set_difference) return esnext_set_difference;
	hasRequiredEsnext_set_difference = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $difference = requireSetDifference();

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  difference: function difference(other) {
	    return call($difference, this, toSetLike(other));
	  }
	});
	return esnext_set_difference;
}

requireEsnext_set_difference();

var esnext_set_every = {};

var hasRequiredEsnext_set_every;

function requireEsnext_set_every () {
	if (hasRequiredEsnext_set_every) return esnext_set_every;
	hasRequiredEsnext_set_every = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aSet = requireASet();
	var iterate = requireSetIterate();

	// `Set.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  every: function every(callbackfn /* , thisArg */) {
	    var set = aSet(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(set, function (value) {
	      if (!boundFunction(value, value, set)) return false;
	    }, true) !== false;
	  }
	});
	return esnext_set_every;
}

requireEsnext_set_every();

var esnext_set_filter = {};

var hasRequiredEsnext_set_filter;

function requireEsnext_set_filter () {
	if (hasRequiredEsnext_set_filter) return esnext_set_filter;
	hasRequiredEsnext_set_filter = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aSet = requireASet();
	var SetHelpers = requireSetHelpers();
	var iterate = requireSetIterate();

	var Set = SetHelpers.Set;
	var add = SetHelpers.add;

	// `Set.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var set = aSet(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new Set();
	    iterate(set, function (value) {
	      if (boundFunction(value, value, set)) add(newSet, value);
	    });
	    return newSet;
	  }
	});
	return esnext_set_filter;
}

requireEsnext_set_filter();

var esnext_set_find = {};

var hasRequiredEsnext_set_find;

function requireEsnext_set_find () {
	if (hasRequiredEsnext_set_find) return esnext_set_find;
	hasRequiredEsnext_set_find = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aSet = requireASet();
	var iterate = requireSetIterate();

	// `Set.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  find: function find(callbackfn /* , thisArg */) {
	    var set = aSet(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate(set, function (value) {
	      if (boundFunction(value, value, set)) return { value: value };
	    }, true);
	    return result && result.value;
	  }
	});
	return esnext_set_find;
}

requireEsnext_set_find();

var esnext_set_from = {};

var hasRequiredEsnext_set_from;

function requireEsnext_set_from () {
	if (hasRequiredEsnext_set_from) return esnext_set_from;
	hasRequiredEsnext_set_from = 1;
	var $ = require_export();
	var SetHelpers = requireSetHelpers();
	var createCollectionFrom = requireCollectionFrom();

	// `Set.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	$({ target: 'Set', stat: true, forced: true }, {
	  from: createCollectionFrom(SetHelpers.Set, SetHelpers.add, false)
	});
	return esnext_set_from;
}

requireEsnext_set_from();

var esnext_set_intersection = {};

var setIntersection;
var hasRequiredSetIntersection;

function requireSetIntersection () {
	if (hasRequiredSetIntersection) return setIntersection;
	hasRequiredSetIntersection = 1;
	var aSet = requireASet();
	var SetHelpers = requireSetHelpers();
	var size = requireSetSize();
	var getSetRecord = requireGetSetRecord();
	var iterateSet = requireSetIterate();
	var iterateSimple = requireIterateSimple();

	var Set = SetHelpers.Set;
	var add = SetHelpers.add;
	var has = SetHelpers.has;

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	setIntersection = function intersection(other) {
	  var O = aSet(this);
	  var otherRec = getSetRecord(other);
	  var result = new Set();

	  if (size(O) > otherRec.size) {
	    iterateSimple(otherRec.getIterator(), function (e) {
	      if (has(O, e)) add(result, e);
	    });
	  } else {
	    iterateSet(O, function (e) {
	      if (otherRec.includes(e)) add(result, e);
	    });
	  }

	  return result;
	};
	return setIntersection;
}

var hasRequiredEsnext_set_intersection;

function requireEsnext_set_intersection () {
	if (hasRequiredEsnext_set_intersection) return esnext_set_intersection;
	hasRequiredEsnext_set_intersection = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $intersection = requireSetIntersection();

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  intersection: function intersection(other) {
	    return call($intersection, this, toSetLike(other));
	  }
	});
	return esnext_set_intersection;
}

requireEsnext_set_intersection();

var esnext_set_isDisjointFrom = {};

var setIsDisjointFrom;
var hasRequiredSetIsDisjointFrom;

function requireSetIsDisjointFrom () {
	if (hasRequiredSetIsDisjointFrom) return setIsDisjointFrom;
	hasRequiredSetIsDisjointFrom = 1;
	var aSet = requireASet();
	var has = requireSetHelpers().has;
	var size = requireSetSize();
	var getSetRecord = requireGetSetRecord();
	var iterateSet = requireSetIterate();
	var iterateSimple = requireIterateSimple();
	var iteratorClose = requireIteratorClose();

	// `Set.prototype.isDisjointFrom` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
	setIsDisjointFrom = function isDisjointFrom(other) {
	  var O = aSet(this);
	  var otherRec = getSetRecord(other);
	  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
	    if (otherRec.includes(e)) return false;
	  }, true) !== false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple(iterator, function (e) {
	    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
	  }) !== false;
	};
	return setIsDisjointFrom;
}

var hasRequiredEsnext_set_isDisjointFrom;

function requireEsnext_set_isDisjointFrom () {
	if (hasRequiredEsnext_set_isDisjointFrom) return esnext_set_isDisjointFrom;
	hasRequiredEsnext_set_isDisjointFrom = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $isDisjointFrom = requireSetIsDisjointFrom();

	// `Set.prototype.isDisjointFrom` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  isDisjointFrom: function isDisjointFrom(other) {
	    return call($isDisjointFrom, this, toSetLike(other));
	  }
	});
	return esnext_set_isDisjointFrom;
}

requireEsnext_set_isDisjointFrom();

var esnext_set_isSubsetOf = {};

var setIsSubsetOf;
var hasRequiredSetIsSubsetOf;

function requireSetIsSubsetOf () {
	if (hasRequiredSetIsSubsetOf) return setIsSubsetOf;
	hasRequiredSetIsSubsetOf = 1;
	var aSet = requireASet();
	var size = requireSetSize();
	var iterate = requireSetIterate();
	var getSetRecord = requireGetSetRecord();

	// `Set.prototype.isSubsetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
	setIsSubsetOf = function isSubsetOf(other) {
	  var O = aSet(this);
	  var otherRec = getSetRecord(other);
	  if (size(O) > otherRec.size) return false;
	  return iterate(O, function (e) {
	    if (!otherRec.includes(e)) return false;
	  }, true) !== false;
	};
	return setIsSubsetOf;
}

var hasRequiredEsnext_set_isSubsetOf;

function requireEsnext_set_isSubsetOf () {
	if (hasRequiredEsnext_set_isSubsetOf) return esnext_set_isSubsetOf;
	hasRequiredEsnext_set_isSubsetOf = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $isSubsetOf = requireSetIsSubsetOf();

	// `Set.prototype.isSubsetOf` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  isSubsetOf: function isSubsetOf(other) {
	    return call($isSubsetOf, this, toSetLike(other));
	  }
	});
	return esnext_set_isSubsetOf;
}

requireEsnext_set_isSubsetOf();

var esnext_set_isSupersetOf = {};

var setIsSupersetOf;
var hasRequiredSetIsSupersetOf;

function requireSetIsSupersetOf () {
	if (hasRequiredSetIsSupersetOf) return setIsSupersetOf;
	hasRequiredSetIsSupersetOf = 1;
	var aSet = requireASet();
	var has = requireSetHelpers().has;
	var size = requireSetSize();
	var getSetRecord = requireGetSetRecord();
	var iterateSimple = requireIterateSimple();
	var iteratorClose = requireIteratorClose();

	// `Set.prototype.isSupersetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
	setIsSupersetOf = function isSupersetOf(other) {
	  var O = aSet(this);
	  var otherRec = getSetRecord(other);
	  if (size(O) < otherRec.size) return false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple(iterator, function (e) {
	    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
	  }) !== false;
	};
	return setIsSupersetOf;
}

var hasRequiredEsnext_set_isSupersetOf;

function requireEsnext_set_isSupersetOf () {
	if (hasRequiredEsnext_set_isSupersetOf) return esnext_set_isSupersetOf;
	hasRequiredEsnext_set_isSupersetOf = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $isSupersetOf = requireSetIsSupersetOf();

	// `Set.prototype.isSupersetOf` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  isSupersetOf: function isSupersetOf(other) {
	    return call($isSupersetOf, this, toSetLike(other));
	  }
	});
	return esnext_set_isSupersetOf;
}

requireEsnext_set_isSupersetOf();

var esnext_set_join = {};

var toString;
var hasRequiredToString;

function requireToString () {
	if (hasRequiredToString) return toString;
	hasRequiredToString = 1;
	var classof = requireClassof();

	var $String = String;

	toString = function (argument) {
	  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};
	return toString;
}

var hasRequiredEsnext_set_join;

function requireEsnext_set_join () {
	if (hasRequiredEsnext_set_join) return esnext_set_join;
	hasRequiredEsnext_set_join = 1;
	var $ = require_export();
	var uncurryThis = requireFunctionUncurryThis();
	var aSet = requireASet();
	var iterate = requireSetIterate();
	var toString = requireToString();

	var arrayJoin = uncurryThis([].join);
	var push = uncurryThis([].push);

	// `Set.prototype.join` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  join: function join(separator) {
	    var set = aSet(this);
	    var sep = separator === undefined ? ',' : toString(separator);
	    var array = [];
	    iterate(set, function (value) {
	      push(array, value);
	    });
	    return arrayJoin(array, sep);
	  }
	});
	return esnext_set_join;
}

requireEsnext_set_join();

var esnext_set_map = {};

var hasRequiredEsnext_set_map;

function requireEsnext_set_map () {
	if (hasRequiredEsnext_set_map) return esnext_set_map;
	hasRequiredEsnext_set_map = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aSet = requireASet();
	var SetHelpers = requireSetHelpers();
	var iterate = requireSetIterate();

	var Set = SetHelpers.Set;
	var add = SetHelpers.add;

	// `Set.prototype.map` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  map: function map(callbackfn /* , thisArg */) {
	    var set = aSet(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new Set();
	    iterate(set, function (value) {
	      add(newSet, boundFunction(value, value, set));
	    });
	    return newSet;
	  }
	});
	return esnext_set_map;
}

requireEsnext_set_map();

var esnext_set_of = {};

var hasRequiredEsnext_set_of;

function requireEsnext_set_of () {
	if (hasRequiredEsnext_set_of) return esnext_set_of;
	hasRequiredEsnext_set_of = 1;
	var $ = require_export();
	var SetHelpers = requireSetHelpers();
	var createCollectionOf = requireCollectionOf();

	// `Set.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	$({ target: 'Set', stat: true, forced: true }, {
	  of: createCollectionOf(SetHelpers.Set, SetHelpers.add, false)
	});
	return esnext_set_of;
}

requireEsnext_set_of();

var esnext_set_reduce = {};

var hasRequiredEsnext_set_reduce;

function requireEsnext_set_reduce () {
	if (hasRequiredEsnext_set_reduce) return esnext_set_reduce;
	hasRequiredEsnext_set_reduce = 1;
	var $ = require_export();
	var aCallable = requireACallable();
	var aSet = requireASet();
	var iterate = requireSetIterate();

	var $TypeError = TypeError;

	// `Set.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var set = aSet(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable(callbackfn);
	    iterate(set, function (value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, value, set);
	      }
	    });
	    if (noInitial) throw new $TypeError('Reduce of empty set with no initial value');
	    return accumulator;
	  }
	});
	return esnext_set_reduce;
}

requireEsnext_set_reduce();

var esnext_set_some = {};

var hasRequiredEsnext_set_some;

function requireEsnext_set_some () {
	if (hasRequiredEsnext_set_some) return esnext_set_some;
	hasRequiredEsnext_set_some = 1;
	var $ = require_export();
	var bind = requireFunctionBindContext();
	var aSet = requireASet();
	var iterate = requireSetIterate();

	// `Set.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  some: function some(callbackfn /* , thisArg */) {
	    var set = aSet(this);
	    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(set, function (value) {
	      if (boundFunction(value, value, set)) return true;
	    }, true) === true;
	  }
	});
	return esnext_set_some;
}

requireEsnext_set_some();

var esnext_set_symmetricDifference = {};

var setSymmetricDifference;
var hasRequiredSetSymmetricDifference;

function requireSetSymmetricDifference () {
	if (hasRequiredSetSymmetricDifference) return setSymmetricDifference;
	hasRequiredSetSymmetricDifference = 1;
	var aSet = requireASet();
	var SetHelpers = requireSetHelpers();
	var clone = requireSetClone();
	var getSetRecord = requireGetSetRecord();
	var iterateSimple = requireIterateSimple();

	var add = SetHelpers.add;
	var has = SetHelpers.has;
	var remove = SetHelpers.remove;

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	setSymmetricDifference = function symmetricDifference(other) {
	  var O = aSet(this);
	  var keysIter = getSetRecord(other).getIterator();
	  var result = clone(O);
	  iterateSimple(keysIter, function (e) {
	    if (has(O, e)) remove(result, e);
	    else add(result, e);
	  });
	  return result;
	};
	return setSymmetricDifference;
}

var hasRequiredEsnext_set_symmetricDifference;

function requireEsnext_set_symmetricDifference () {
	if (hasRequiredEsnext_set_symmetricDifference) return esnext_set_symmetricDifference;
	hasRequiredEsnext_set_symmetricDifference = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $symmetricDifference = requireSetSymmetricDifference();

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  symmetricDifference: function symmetricDifference(other) {
	    return call($symmetricDifference, this, toSetLike(other));
	  }
	});
	return esnext_set_symmetricDifference;
}

requireEsnext_set_symmetricDifference();

var esnext_set_union = {};

var setUnion;
var hasRequiredSetUnion;

function requireSetUnion () {
	if (hasRequiredSetUnion) return setUnion;
	hasRequiredSetUnion = 1;
	var aSet = requireASet();
	var add = requireSetHelpers().add;
	var clone = requireSetClone();
	var getSetRecord = requireGetSetRecord();
	var iterateSimple = requireIterateSimple();

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	setUnion = function union(other) {
	  var O = aSet(this);
	  var keysIter = getSetRecord(other).getIterator();
	  var result = clone(O);
	  iterateSimple(keysIter, function (it) {
	    add(result, it);
	  });
	  return result;
	};
	return setUnion;
}

var hasRequiredEsnext_set_union;

function requireEsnext_set_union () {
	if (hasRequiredEsnext_set_union) return esnext_set_union;
	hasRequiredEsnext_set_union = 1;
	var $ = require_export();
	var call = requireFunctionCall();
	var toSetLike = requireToSetLike();
	var $union = requireSetUnion();

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$({ target: 'Set', proto: true, real: true, forced: true }, {
	  union: function union(other) {
	    return call($union, this, toSetLike(other));
	  }
	});
	return esnext_set_union;
}

requireEsnext_set_union();

var esnext_string_at = {};

var stringMultibyte;
var hasRequiredStringMultibyte;

function requireStringMultibyte () {
	if (hasRequiredStringMultibyte) return stringMultibyte;
	hasRequiredStringMultibyte = 1;
	var uncurryThis = requireFunctionUncurryThis();
	var toIntegerOrInfinity = requireToIntegerOrInfinity();
	var toString = requireToString();
	var requireObjectCoercible = requireRequireObjectCoercible();

	var charAt = uncurryThis(''.charAt);
	var charCodeAt = uncurryThis(''.charCodeAt);
	var stringSlice = uncurryThis(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};
	return stringMultibyte;
}

var hasRequiredEsnext_string_at;

function requireEsnext_string_at () {
	if (hasRequiredEsnext_string_at) return esnext_string_at;
	hasRequiredEsnext_string_at = 1;
	// TODO: Remove from `core-js@4`
	var $ = require_export();
	var charAt = requireStringMultibyte().charAt;
	var requireObjectCoercible = requireRequireObjectCoercible();
	var toIntegerOrInfinity = requireToIntegerOrInfinity();
	var toString = requireToString();

	// `String.prototype.at` method
	// https://github.com/mathiasbynens/String.prototype.at
	$({ target: 'String', proto: true, forced: true }, {
	  at: function at(index) {
	    var S = toString(requireObjectCoercible(this));
	    var len = S.length;
	    var relativeIndex = toIntegerOrInfinity(index);
	    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	    return (k < 0 || k >= len) ? undefined : charAt(S, k);
	  }
	});
	return esnext_string_at;
}

requireEsnext_string_at();

var esnext_string_codePoints = {};

var hasRequiredEsnext_string_codePoints;

function requireEsnext_string_codePoints () {
	if (hasRequiredEsnext_string_codePoints) return esnext_string_codePoints;
	hasRequiredEsnext_string_codePoints = 1;
	var $ = require_export();
	var createIteratorConstructor = requireIteratorCreateConstructor();
	var createIterResultObject = requireCreateIterResultObject();
	var requireObjectCoercible = requireRequireObjectCoercible();
	var toString = requireToString();
	var InternalStateModule = requireInternalState();
	var StringMultibyteModule = requireStringMultibyte();

	var codeAt = StringMultibyteModule.codeAt;
	var charAt = StringMultibyteModule.charAt;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// TODO: unify with String#@@iterator
	var $StringIterator = createIteratorConstructor(function StringIterator(string) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: string,
	    index: 0
	  });
	}, 'String', function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject(undefined, true);
	  point = charAt(string, index);
	  state.index += point.length;
	  return createIterResultObject({ codePoint: codeAt(point, 0), position: index }, false);
	});

	// `String.prototype.codePoints` method
	// https://github.com/tc39/proposal-string-prototype-codepoints
	$({ target: 'String', proto: true, forced: true }, {
	  codePoints: function codePoints() {
	    return new $StringIterator(toString(requireObjectCoercible(this)));
	  }
	});
	return esnext_string_codePoints;
}

requireEsnext_string_codePoints();

var esnext_symbol_dispose = {};

var path;
var hasRequiredPath;

function requirePath () {
	if (hasRequiredPath) return path;
	hasRequiredPath = 1;
	var globalThis = requireGlobalThis();

	path = globalThis;
	return path;
}

var wellKnownSymbolWrapped = {};

var hasRequiredWellKnownSymbolWrapped;

function requireWellKnownSymbolWrapped () {
	if (hasRequiredWellKnownSymbolWrapped) return wellKnownSymbolWrapped;
	hasRequiredWellKnownSymbolWrapped = 1;
	var wellKnownSymbol = requireWellKnownSymbol();

	wellKnownSymbolWrapped.f = wellKnownSymbol;
	return wellKnownSymbolWrapped;
}

var wellKnownSymbolDefine;
var hasRequiredWellKnownSymbolDefine;

function requireWellKnownSymbolDefine () {
	if (hasRequiredWellKnownSymbolDefine) return wellKnownSymbolDefine;
	hasRequiredWellKnownSymbolDefine = 1;
	var path = requirePath();
	var hasOwn = requireHasOwnProperty();
	var wrappedWellKnownSymbolModule = requireWellKnownSymbolWrapped();
	var defineProperty = requireObjectDefineProperty().f;

	wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};
	return wellKnownSymbolDefine;
}

var hasRequiredEsnext_symbol_dispose;

function requireEsnext_symbol_dispose () {
	if (hasRequiredEsnext_symbol_dispose) return esnext_symbol_dispose;
	hasRequiredEsnext_symbol_dispose = 1;
	var globalThis = requireGlobalThis();
	var defineWellKnownSymbol = requireWellKnownSymbolDefine();
	var defineProperty = requireObjectDefineProperty().f;
	var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;

	var Symbol = globalThis.Symbol;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-explicit-resource-management
	defineWellKnownSymbol('dispose');

	if (Symbol) {
	  var descriptor = getOwnPropertyDescriptor(Symbol, 'dispose');
	  // workaround of NodeJS 20.4 bug
	  // https://github.com/nodejs/node/issues/48699
	  // and incorrect descriptor from some transpilers and userland helpers
	  if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
	    defineProperty(Symbol, 'dispose', { value: descriptor.value, enumerable: false, configurable: false, writable: false });
	  }
	}
	return esnext_symbol_dispose;
}

requireEsnext_symbol_dispose();

var esnext_symbol_observable = {};

var hasRequiredEsnext_symbol_observable;

function requireEsnext_symbol_observable () {
	if (hasRequiredEsnext_symbol_observable) return esnext_symbol_observable;
	hasRequiredEsnext_symbol_observable = 1;
	var defineWellKnownSymbol = requireWellKnownSymbolDefine();

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol('observable');
	return esnext_symbol_observable;
}

requireEsnext_symbol_observable();

var esnext_symbol_patternMatch = {};

var hasRequiredEsnext_symbol_patternMatch;

function requireEsnext_symbol_patternMatch () {
	if (hasRequiredEsnext_symbol_patternMatch) return esnext_symbol_patternMatch;
	hasRequiredEsnext_symbol_patternMatch = 1;
	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = requireWellKnownSymbolDefine();

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('patternMatch');
	return esnext_symbol_patternMatch;
}

requireEsnext_symbol_patternMatch();

var esnext_weakMap_deleteAll = {};

var weakMapHelpers;
var hasRequiredWeakMapHelpers;

function requireWeakMapHelpers () {
	if (hasRequiredWeakMapHelpers) return weakMapHelpers;
	hasRequiredWeakMapHelpers = 1;
	var uncurryThis = requireFunctionUncurryThis();

	// eslint-disable-next-line es/no-weak-map -- safe
	var WeakMapPrototype = WeakMap.prototype;

	weakMapHelpers = {
	  // eslint-disable-next-line es/no-weak-map -- safe
	  WeakMap: WeakMap,
	  set: uncurryThis(WeakMapPrototype.set),
	  get: uncurryThis(WeakMapPrototype.get),
	  has: uncurryThis(WeakMapPrototype.has),
	  remove: uncurryThis(WeakMapPrototype['delete'])
	};
	return weakMapHelpers;
}

var aWeakMap;
var hasRequiredAWeakMap;

function requireAWeakMap () {
	if (hasRequiredAWeakMap) return aWeakMap;
	hasRequiredAWeakMap = 1;
	var has = requireWeakMapHelpers().has;

	// Perform ? RequireInternalSlot(M, [[WeakMapData]])
	aWeakMap = function (it) {
	  has(it);
	  return it;
	};
	return aWeakMap;
}

var hasRequiredEsnext_weakMap_deleteAll;

function requireEsnext_weakMap_deleteAll () {
	if (hasRequiredEsnext_weakMap_deleteAll) return esnext_weakMap_deleteAll;
	hasRequiredEsnext_weakMap_deleteAll = 1;
	var $ = require_export();
	var aWeakMap = requireAWeakMap();
	var remove = requireWeakMapHelpers().remove;

	// `WeakMap.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
	  deleteAll: function deleteAll(/* ...elements */) {
	    var collection = aWeakMap(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    } return !!allDeleted;
	  }
	});
	return esnext_weakMap_deleteAll;
}

requireEsnext_weakMap_deleteAll();

var esnext_weakMap_from = {};

var hasRequiredEsnext_weakMap_from;

function requireEsnext_weakMap_from () {
	if (hasRequiredEsnext_weakMap_from) return esnext_weakMap_from;
	hasRequiredEsnext_weakMap_from = 1;
	var $ = require_export();
	var WeakMapHelpers = requireWeakMapHelpers();
	var createCollectionFrom = requireCollectionFrom();

	// `WeakMap.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	$({ target: 'WeakMap', stat: true, forced: true }, {
	  from: createCollectionFrom(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
	});
	return esnext_weakMap_from;
}

requireEsnext_weakMap_from();

var esnext_weakMap_of = {};

var hasRequiredEsnext_weakMap_of;

function requireEsnext_weakMap_of () {
	if (hasRequiredEsnext_weakMap_of) return esnext_weakMap_of;
	hasRequiredEsnext_weakMap_of = 1;
	var $ = require_export();
	var WeakMapHelpers = requireWeakMapHelpers();
	var createCollectionOf = requireCollectionOf();

	// `WeakMap.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	$({ target: 'WeakMap', stat: true, forced: true }, {
	  of: createCollectionOf(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
	});
	return esnext_weakMap_of;
}

requireEsnext_weakMap_of();

var esnext_weakSet_addAll = {};

var weakSetHelpers;
var hasRequiredWeakSetHelpers;

function requireWeakSetHelpers () {
	if (hasRequiredWeakSetHelpers) return weakSetHelpers;
	hasRequiredWeakSetHelpers = 1;
	var uncurryThis = requireFunctionUncurryThis();

	// eslint-disable-next-line es/no-weak-set -- safe
	var WeakSetPrototype = WeakSet.prototype;

	weakSetHelpers = {
	  // eslint-disable-next-line es/no-weak-set -- safe
	  WeakSet: WeakSet,
	  add: uncurryThis(WeakSetPrototype.add),
	  has: uncurryThis(WeakSetPrototype.has),
	  remove: uncurryThis(WeakSetPrototype['delete'])
	};
	return weakSetHelpers;
}

var aWeakSet;
var hasRequiredAWeakSet;

function requireAWeakSet () {
	if (hasRequiredAWeakSet) return aWeakSet;
	hasRequiredAWeakSet = 1;
	var has = requireWeakSetHelpers().has;

	// Perform ? RequireInternalSlot(M, [[WeakSetData]])
	aWeakSet = function (it) {
	  has(it);
	  return it;
	};
	return aWeakSet;
}

var hasRequiredEsnext_weakSet_addAll;

function requireEsnext_weakSet_addAll () {
	if (hasRequiredEsnext_weakSet_addAll) return esnext_weakSet_addAll;
	hasRequiredEsnext_weakSet_addAll = 1;
	var $ = require_export();
	var aWeakSet = requireAWeakSet();
	var add = requireWeakSetHelpers().add;

	// `WeakSet.prototype.addAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
	  addAll: function addAll(/* ...elements */) {
	    var set = aWeakSet(this);
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      add(set, arguments[k]);
	    } return set;
	  }
	});
	return esnext_weakSet_addAll;
}

requireEsnext_weakSet_addAll();

var esnext_weakSet_deleteAll = {};

var hasRequiredEsnext_weakSet_deleteAll;

function requireEsnext_weakSet_deleteAll () {
	if (hasRequiredEsnext_weakSet_deleteAll) return esnext_weakSet_deleteAll;
	hasRequiredEsnext_weakSet_deleteAll = 1;
	var $ = require_export();
	var aWeakSet = requireAWeakSet();
	var remove = requireWeakSetHelpers().remove;

	// `WeakSet.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$({ target: 'WeakSet', proto: true, real: true, forced: true }, {
	  deleteAll: function deleteAll(/* ...elements */) {
	    var collection = aWeakSet(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    } return !!allDeleted;
	  }
	});
	return esnext_weakSet_deleteAll;
}

requireEsnext_weakSet_deleteAll();

var esnext_weakSet_from = {};

var hasRequiredEsnext_weakSet_from;

function requireEsnext_weakSet_from () {
	if (hasRequiredEsnext_weakSet_from) return esnext_weakSet_from;
	hasRequiredEsnext_weakSet_from = 1;
	var $ = require_export();
	var WeakSetHelpers = requireWeakSetHelpers();
	var createCollectionFrom = requireCollectionFrom();

	// `WeakSet.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	$({ target: 'WeakSet', stat: true, forced: true }, {
	  from: createCollectionFrom(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
	});
	return esnext_weakSet_from;
}

requireEsnext_weakSet_from();

var esnext_weakSet_of = {};

var hasRequiredEsnext_weakSet_of;

function requireEsnext_weakSet_of () {
	if (hasRequiredEsnext_weakSet_of) return esnext_weakSet_of;
	hasRequiredEsnext_weakSet_of = 1;
	var $ = require_export();
	var WeakSetHelpers = requireWeakSetHelpers();
	var createCollectionOf = requireCollectionOf();

	// `WeakSet.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	$({ target: 'WeakSet', stat: true, forced: true }, {
	  of: createCollectionOf(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
	});
	return esnext_weakSet_of;
}

requireEsnext_weakSet_of();

var web_immediate = {};

var web_clearImmediate = {};

var validateArgumentsLength;
var hasRequiredValidateArgumentsLength;

function requireValidateArgumentsLength () {
	if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
	hasRequiredValidateArgumentsLength = 1;
	var $TypeError = TypeError;

	validateArgumentsLength = function (passed, required) {
	  if (passed < required) throw new $TypeError('Not enough arguments');
	  return passed;
	};
	return validateArgumentsLength;
}

var environmentIsIos;
var hasRequiredEnvironmentIsIos;

function requireEnvironmentIsIos () {
	if (hasRequiredEnvironmentIsIos) return environmentIsIos;
	hasRequiredEnvironmentIsIos = 1;
	var userAgent = requireEnvironmentUserAgent();

	// eslint-disable-next-line redos/no-vulnerable -- safe
	environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
	return environmentIsIos;
}

var environment;
var hasRequiredEnvironment;

function requireEnvironment () {
	if (hasRequiredEnvironment) return environment;
	hasRequiredEnvironment = 1;
	/* global Bun, Deno -- detection */
	var globalThis = requireGlobalThis();
	var userAgent = requireEnvironmentUserAgent();
	var classof = requireClassofRaw();

	var userAgentStartsWith = function (string) {
	  return userAgent.slice(0, string.length) === string;
	};

	environment = (function () {
	  if (userAgentStartsWith('Bun/')) return 'BUN';
	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
	  if (userAgentStartsWith('Deno/')) return 'DENO';
	  if (userAgentStartsWith('Node.js/')) return 'NODE';
	  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
	  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
	  if (classof(globalThis.process) === 'process') return 'NODE';
	  if (globalThis.window && globalThis.document) return 'BROWSER';
	  return 'REST';
	})();
	return environment;
}

var environmentIsNode;
var hasRequiredEnvironmentIsNode;

function requireEnvironmentIsNode () {
	if (hasRequiredEnvironmentIsNode) return environmentIsNode;
	hasRequiredEnvironmentIsNode = 1;
	var ENVIRONMENT = requireEnvironment();

	environmentIsNode = ENVIRONMENT === 'NODE';
	return environmentIsNode;
}

var task;
var hasRequiredTask;

function requireTask () {
	if (hasRequiredTask) return task;
	hasRequiredTask = 1;
	var globalThis = requireGlobalThis();
	var apply = requireFunctionApply();
	var bind = requireFunctionBindContext();
	var isCallable = requireIsCallable();
	var hasOwn = requireHasOwnProperty();
	var fails = requireFails();
	var html = requireHtml();
	var arraySlice = requireArraySlice();
	var createElement = requireDocumentCreateElement();
	var validateArgumentsLength = requireValidateArgumentsLength();
	var IS_IOS = requireEnvironmentIsIos();
	var IS_NODE = requireEnvironmentIsNode();

	var set = globalThis.setImmediate;
	var clear = globalThis.clearImmediate;
	var process = globalThis.process;
	var Dispatch = globalThis.Dispatch;
	var Function = globalThis.Function;
	var MessageChannel = globalThis.MessageChannel;
	var String = globalThis.String;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel, port;

	fails(function () {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  $location = globalThis.location;
	});

	var run = function (id) {
	  if (hasOwn(queue, id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var eventListener = function (event) {
	  run(event.data);
	};

	var globalPostMessageDefer = function (id) {
	  // old engines have not location.origin
	  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(handler) {
	    validateArgumentsLength(arguments.length, 1);
	    var fn = isCallable(handler) ? handler : Function(handler);
	    var args = arraySlice(arguments, 1);
	    queue[++counter] = function () {
	      apply(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE) {
	    defer = function (id) {
	      process.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = eventListener;
	    defer = bind(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    globalThis.addEventListener &&
	    isCallable(globalThis.postMessage) &&
	    !globalThis.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails(globalPostMessageDefer)
	  ) {
	    defer = globalPostMessageDefer;
	    globalThis.addEventListener('message', eventListener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	task = {
	  set: set,
	  clear: clear
	};
	return task;
}

var hasRequiredWeb_clearImmediate;

function requireWeb_clearImmediate () {
	if (hasRequiredWeb_clearImmediate) return web_clearImmediate;
	hasRequiredWeb_clearImmediate = 1;
	var $ = require_export();
	var globalThis = requireGlobalThis();
	var clearImmediate = requireTask().clear;

	// `clearImmediate` method
	// http://w3c.github.io/setImmediate/#si-clearImmediate
	$({ global: true, bind: true, enumerable: true, forced: globalThis.clearImmediate !== clearImmediate }, {
	  clearImmediate: clearImmediate
	});
	return web_clearImmediate;
}

var web_setImmediate = {};

var schedulersFix;
var hasRequiredSchedulersFix;

function requireSchedulersFix () {
	if (hasRequiredSchedulersFix) return schedulersFix;
	hasRequiredSchedulersFix = 1;
	var globalThis = requireGlobalThis();
	var apply = requireFunctionApply();
	var isCallable = requireIsCallable();
	var ENVIRONMENT = requireEnvironment();
	var USER_AGENT = requireEnvironmentUserAgent();
	var arraySlice = requireArraySlice();
	var validateArgumentsLength = requireValidateArgumentsLength();

	var Function = globalThis.Function;
	// dirty IE9- and Bun 0.3.0- checks
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
	  var version = globalThis.Bun.version.split('.');
	  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
	})();

	// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	// https://github.com/oven-sh/bun/issues/1633
	schedulersFix = function (scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout /* , ...arguments */) {
	    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable(handler) ? handler : Function(handler);
	    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};
	return schedulersFix;
}

var hasRequiredWeb_setImmediate;

function requireWeb_setImmediate () {
	if (hasRequiredWeb_setImmediate) return web_setImmediate;
	hasRequiredWeb_setImmediate = 1;
	var $ = require_export();
	var globalThis = requireGlobalThis();
	var setTask = requireTask().set;
	var schedulersFix = requireSchedulersFix();

	// https://github.com/oven-sh/bun/issues/1633
	var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;

	// `setImmediate` method
	// http://w3c.github.io/setImmediate/#si-setImmediate
	$({ global: true, bind: true, enumerable: true, forced: globalThis.setImmediate !== setImmediate }, {
	  setImmediate: setImmediate
	});
	return web_setImmediate;
}

var hasRequiredWeb_immediate;

function requireWeb_immediate () {
	if (hasRequiredWeb_immediate) return web_immediate;
	hasRequiredWeb_immediate = 1;
	// TODO: Remove this module from `core-js@4` since it's split to modules listed below
	requireWeb_clearImmediate();
	requireWeb_setImmediate();
	return web_immediate;
}

requireWeb_immediate();

// (Optional) Import polyfills so that Babel will include them in the bundle.
// Debounce helper function
function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  let timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Determine the current action ("equalize" or "reset") based on advanced breakpoints.
function getCurrentAction() {
  const options = window.equalizeHeightsOptions || {};
  if (options.breakpoints && Array.isArray(options.breakpoints)) {
    for (let bp of options.breakpoints) {
      const min = bp.min !== undefined ? bp.min : 0;
      const max = bp.max !== undefined ? bp.max : Infinity;
      if (window.innerWidth >= min && window.innerWidth <= max) {
        return bp.action; // "equalize" or "reset"
      }
    }
  } else if (options.minWidth) {
    return window.innerWidth < options.minWidth ? "reset" : "equalize";
  }
  return "equalize";
}

// Main equalization function supporting data attribute or class-based grouping.
function equalizeHeights() {
  const options = window.equalizeHeightsOptions || {};
  const action = getCurrentAction();
  if (action === "reset") {
    const allElements = document.querySelectorAll('[data-equalize], [class*="eh-"]');
    allElements.forEach(el => {
      el.style.height = "auto";
    });
    if (typeof options.callback === "function") {
      options.callback({});
    }
    return;
  }
  const elements = document.querySelectorAll('[data-equalize], [class*="eh-"]');
  const groups = {};
  elements.forEach(el => {
    let groupKey = el.getAttribute("data-equalize");
    if (!groupKey) {
      groupKey = Array.from(el.classList).find(cls => cls.startsWith("eh-"));
    }
    if (groupKey) {
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(el);
    }
  });
  Object.keys(groups).forEach(groupKey => {
    let maxHeight = 0;
    groups[groupKey].forEach(el => {
      el.style.height = "auto";
    });
    groups[groupKey].forEach(el => {
      maxHeight = Math.max(maxHeight, el.offsetHeight);
    });
    groups[groupKey].forEach(el => {
      el.style.height = `${maxHeight}px`;
    });
  });
  if (typeof options.callback === "function") {
    options.callback(groups);
  }
}

// Create a debounced version for the resize event.
const debouncedEqualizeHeights = debounce(equalizeHeights, 150);

// Run equalizeHeights when the DOM is ready.
if (document.readyState === "complete" || document.readyState === "interactive") {
  equalizeHeights();
} else {
  document.addEventListener("DOMContentLoaded", equalizeHeights);
}

// Use the debounced function on window resize.
window.addEventListener("resize", debouncedEqualizeHeights);




/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var equalize_heights_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! equalize-heights/runtime */ "./node_modules/equalize-heights/dist/equalizeHeights.js");
// Equalize Height and Breakpoint
window.equalizeHeightsOptions = {
  breakpoints: [{
    min: 0,
    max: 767,
    action: "reset"
  }, {
    min: 768,
    action: "equalize"
  }]
};

jQuery(document).ready(function ($) {
  // Debug: Check menu structure
  console.log("Desktop menu items with children:", $(".header-desktop-menu .menu li.menu-item-has-children").length);
  console.log("Mobile menu items with sub:", $("#cssmenu li.has-sub").length);

  // Desktop Drop Down Click Instead of Hover
  $(".header-desktop-menu .menu li.menu-item-has-children > a").click(function (e) {
    console.log("Desktop menu item clicked");
    var $menuItem = $(this).parent("li");
    var $subMenu = $menuItem.find(".sub-menu");
    console.log("Menu item:", $menuItem);
    console.log("Sub menu:", $subMenu);

    // Close other open sub-menus
    $(".header-desktop-menu .menu li.menu-item-has-children").not($menuItem).find(".sub-menu").slideUp();
    $(".header-desktop-menu .menu li.menu-item-has-children").not($menuItem).removeClass("clicked");

    // Toggle current sub-menu
    $subMenu.slideToggle();
    $menuItem.toggleClass("clicked");
    e.preventDefault();
    e.stopPropagation();
  });
  $(document).on("click", function (event) {
    // Check if the click was outside of any menu item with children
    var $clickedElement = $(event.target);
    var $menuContainer = $(".header-desktop-menu");

    // If the clicked element is not inside the menu container
    if (!$clickedElement.closest($menuContainer).length) {
      $(".header-desktop-menu .sub-menu").slideUp();
      $(".header-desktop-menu .menu li.menu-item-has-children").removeClass("clicked");
    }
  });

  // Mobile Menu
  $(".open-menu-button").click(function () {
    $("#mobile-menu").slideDown();
    $("body").css("overflow-y", "hidden");
    $("body").css("position", "fixed");
  });
  $(".close-menu-button").click(function () {
    $("#mobile-menu").slideUp();
    $("body").css("overflow-y", "auto");
    $("body").css("position", "relative");
  });
  $("#cssmenu li.has-sub > a").on("click", function (e) {
    console.log("Mobile menu item clicked");
    e.preventDefault();
    e.stopPropagation();
    var element = $(this).parent("li");
    console.log("Mobile menu element:", element);
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp();
    } else {
      element.addClass("open");
      element.children("ul").slideDown();
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });

  /**
   * Modules in this bundle
   * @license
   *
   * modal-video:
   *   license: appleple
   *   author: appleple
   *   homepage: http://developer.a-blogcms.jp
   *   version: 2.4.8
   *
   * custom-event-polyfill:
   *   license: MIT (http://opensource.org/licenses/MIT)
   *   contributors: Frank Panetta, Mikhail Reenko <reenko@yandex.ru>, Joscha Feth <joscha@feth.com>
   *   homepage: https://github.com/krambuhl/custom-event-polyfill#readme
   *   version: 0.3.0
   *
   * es6-object-assign:
   *   license: MIT (http://opensource.org/licenses/MIT)
   *   author: Rubén Norte <rubennorte@gmail.com>
   *   homepage: https://github.com/rubennorte/es6-object-assign
   *   version: 1.1.0
   *
   * This header is generated by licensify (https://github.com/twada/licensify)
   */
  !function () {
    function e(t, n, o) {
      function i(a, l) {
        if (!n[a]) {
          if (!t[a]) {
            var u = undefined;
            if (!l && u) return require(a, !0);
            if (r) return r(a, !0);
            var d = new Error("Cannot find module '" + a + "'");
            throw d.code = "MODULE_NOT_FOUND", d;
          }
          var c = n[a] = {
            exports: {}
          };
          t[a][0].call(c.exports, function (e) {
            var n = t[a][1][e];
            return i(n || e);
          }, c, c.exports, e, t, n, o);
        }
        return n[a].exports;
      }
      for (var r = undefined, a = 0; a < o.length; a++) i(o[a]);
      return i;
    }
    return e;
  }()({
    1: [function (e, t, n) {
      try {
        var o = new window.CustomEvent("test");
        if (o.preventDefault(), !0 !== o.defaultPrevented) throw new Error("Could not prevent default");
      } catch (e) {
        var i = function i(e, t) {
          var n, o;
          return t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o = n.preventDefault, n.preventDefault = function () {
            o.call(this);
            try {
              Object.defineProperty(this, "defaultPrevented", {
                get: function get() {
                  return !0;
                }
              });
            } catch (e) {
              this.defaultPrevented = !0;
            }
          }, n;
        };
        i.prototype = window.Event.prototype, window.CustomEvent = i;
      }
    }, {}],
    2: [function (e, t, n) {
      "use strict";

      function o(e, t) {
        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), o = 1; o < arguments.length; o++) {
          var i = arguments[o];
          if (void 0 !== i && null !== i) for (var r = Object.keys(Object(i)), a = 0, l = r.length; a < l; a++) {
            var u = r[a],
              d = Object.getOwnPropertyDescriptor(i, u);
            void 0 !== d && d.enumerable && (n[u] = i[u]);
          }
        }
        return n;
      }
      function i() {
        Object.assign || Object.defineProperty(Object, "assign", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: o
        });
      }
      t.exports = {
        assign: o,
        polyfill: i
      };
    }, {}],
    3: [function (e, t, n) {
      "use strict";

      var o = e("../index"),
        i = function i(e) {
          e.fn.modalVideo = function (e) {
            return "strings" == typeof e || new o(this, e), this;
          };
        };
      if ("function" == typeof define && __webpack_require__.amdO) define(["jquery"], i);else {
        var r = window.jQuery ? window.jQuery : window.$;
        void 0 !== r && i(r);
      }
      t.exports = i;
    }, {
      "../index": 5
    }],
    4: [function (e, t, n) {
      "use strict";

      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }();
      e("custom-event-polyfill");
      var r = e("../lib/util"),
        a = e("es6-object-assign").assign,
        l = {
          channel: "youtube",
          facebook: {},
          youtube: {
            autoplay: 1,
            cc_load_policy: 1,
            color: null,
            controls: 1,
            disablekb: 0,
            enablejsapi: 0,
            end: null,
            fs: 1,
            h1: null,
            iv_load_policy: 1,
            loop: 0,
            modestbranding: null,
            mute: 0,
            origin: null,
            playsinline: null,
            rel: 0,
            showinfo: 1,
            start: 0,
            wmode: "transparent",
            theme: "dark",
            nocookie: !1
          },
          ratio: "16:9",
          vimeo: {
            api: !1,
            autopause: !0,
            autoplay: !0,
            byline: !0,
            callback: null,
            color: null,
            controls: !0,
            height: null,
            loop: !1,
            maxheight: null,
            maxwidth: null,
            muted: !1,
            player_id: null,
            portrait: !0,
            title: !0,
            width: null,
            xhtml: !1
          },
          allowFullScreen: !0,
          allowAutoplay: !0,
          animationSpeed: 300,
          classNames: {
            modalVideo: "modal-video",
            modalVideoClose: "modal-video-close",
            modalVideoBody: "modal-video-body",
            modalVideoInner: "modal-video-inner",
            modalVideoIframeWrap: "modal-video-movie-wrap",
            modalVideoCloseBtn: "modal-video-close-btn"
          },
          aria: {
            openMessage: "You just openned the modal video",
            dismissBtnMessage: "Close the modal by clicking here"
          }
        },
        u = function () {
          function e(t, n) {
            var i = this;
            o(this, e);
            var u = a({}, l, n),
              d = "string" == typeof t ? document.querySelectorAll(t) : t,
              c = document.querySelector("body"),
              s = u.classNames,
              f = u.animationSpeed;
            [].forEach.call(d, function (e) {
              e.addEventListener("click", function (t) {
                "A" === e.tagName && t.preventDefault();
                var n = e.dataset.videoId,
                  o = e.dataset.channel || u.channel,
                  a = (0, r.getUniqId)(),
                  l = e.dataset.videoUrl || i.getVideoUrl(u, o, n),
                  d = i.getHtml(u, l, a);
                (0, r.append)(c, d);
                var v = document.getElementById(a),
                  m = v.querySelector(".js-modal-video-dismiss-btn"),
                  p = void 0,
                  b = function b() {
                    clearTimeout(p), p = setTimeout(function () {
                      var e = i.getWidthFulfillAspectRatio(u.ratio, window.innerHeight, window.innerWidth),
                        t = document.getElementById("modal-video-inner-" + a);
                      t.style.maxWidth !== e && (t.style.maxWidth = e);
                    }, 10);
                  };
                v.focus(), v.addEventListener("click", function () {
                  (0, r.addClass)(v, s.modalVideoClose), window.removeEventListener("resize", b), setTimeout(function () {
                    (0, r.remove)(v), e.focus();
                  }, f);
                }), v.addEventListener("keydown", function (e) {
                  9 === e.which && (e.preventDefault(), document.activeElement === v ? m.focus() : (v.setAttribute("aria-label", ""), v.focus()));
                }), window.addEventListener("resize", b), m.addEventListener("click", function () {
                  (0, r.triggerEvent)(v, "click");
                });
              });
            });
          }
          return i(e, [{
            key: "getPadding",
            value: function value(e) {
              var t = e.split(":"),
                n = Number(t[0]);
              return 100 * Number(t[1]) / n + "%";
            }
          }, {
            key: "getWidthFulfillAspectRatio",
            value: function value(e, t, n) {
              var o = e.split(":"),
                i = Number(o[0]),
                r = Number(o[1]);
              return t < n * (r / i) ? Math.floor(i / r * t) + "px" : "100%";
            }
          }, {
            key: "getQueryString",
            value: function value(e) {
              var t = "";
              return Object.keys(e).forEach(function (n) {
                t += n + "=" + e[n] + "&";
              }), console.log(t), t.substr(0, t.length - 1);
            }
          }, {
            key: "getVideoUrl",
            value: function value(e, t, n) {
              return "youtube" === t ? this.getYoutubeUrl(e.youtube, n) : "vimeo" === t ? this.getVimeoUrl(e.vimeo, n) : "facebook" === t ? this.getFacebookUrl(e.facebook, n) : "custom" === t ? e.url : "";
            }
          }, {
            key: "getVimeoUrl",
            value: function value(e, t) {
              return "//player.vimeo.com/video/" + t + "?" + this.getQueryString(e);
            }
          }, {
            key: "getYoutubeUrl",
            value: function value(e, t) {
              var n = this.getQueryString(e);
              return !0 === e.nocookie ? "//www.youtube-nocookie.com/embed/" + t + "?" + n : "//www.youtube.com/embed/" + t + "?" + n;
            }
          }, {
            key: "getFacebookUrl",
            value: function value(e, t) {
              return "//www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(e);
            }
          }, {
            key: "getHtml",
            value: function value(e, t, n) {
              var o = this.getPadding(e.ratio),
                i = e.classNames;
              return '\n      <div class="' + i.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + e.aria.openMessage + '" id="' + n + '">\n        <div class="' + i.modalVideoBody + '">\n          <div class="' + i.modalVideoInner + '" id="modal-video-inner-' + n + '">\n            <div class="' + i.modalVideoIframeWrap + '" style="padding-bottom:' + o + '">\n              <button class="' + i.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + e.aria.dismissBtnMessage + "\"></button>\n              <iframe width='460' height='230' src=\"" + t + "\" frameborder='0' allowfullscreen=" + e.allowFullScreen + ' tabindex="-1" allow="' + (e.allowAutoplay ? "autoplay;" : "") + ' accelerometer; encrypted-media; gyroscope; picture-in-picture" />\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
            }
          }]), e;
        }();
      n["default"] = u, t.exports = n["default"];
    }, {
      "../lib/util": 6,
      "custom-event-polyfill": 1,
      "es6-object-assign": 2
    }],
    5: [function (e, t, n) {
      "use strict";

      t.exports = e("./core/");
    }, {
      "./core/": 4
    }],
    6: [function (e, t, n) {
      "use strict";

      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      n.append = function (e, t) {
        var n = document.createElement("div");
        for (n.innerHTML = t; n.children.length > 0;) e.appendChild(n.children[0]);
      }, n.getUniqId = function () {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
      }, n.remove = function (e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }, n.addClass = function (e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t;
      }, n.triggerEvent = function (e, t, n) {
        var o = void 0;
        window.CustomEvent ? o = new CustomEvent(t, {
          cancelable: !0
        }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !1, !1, n)), e.dispatchEvent(o);
      };
    }, {}]
  }, {}, [3]);
  $(".js-modal-btn").modalVideo();
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./temp-complete-mortgage-blocks-and-post-types.css":
/*!**********************************************************!*\
  !*** ./temp-complete-mortgage-blocks-and-post-types.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./temp-kal_testimonials_for_loan_officers.css":
/*!*****************************************************!*\
  !*** ./temp-kal_testimonials_for_loan_officers.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./temp-kaleidico-custom-calculators.css":
/*!***********************************************!*\
  !*** ./temp-kaleidico-custom-calculators.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./temp-querycraft.css":
/*!*****************************!*\
  !*** ./temp-querycraft.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./temp-social-share.css":
/*!*******************************!*\
  !*** ./temp-social-share.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/core": 0,
/******/ 			"dist-custom-plugins/kal_testimonials_for_loan_officers": 0,
/******/ 			"dist-custom-plugins/kaleidico-custom-calculators": 0,
/******/ 			"dist-custom-plugins/complete-mortgage-blocks-and-post-types": 0,
/******/ 			"dist-custom-plugins/social-share": 0,
/******/ 			"style": 0,
/******/ 			"dist-custom-plugins/querycraft": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcomplete_mortgage_theme"] = self["webpackChunkcomplete_mortgage_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./src/js/core.js")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./temp-social-share.css")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./temp-complete-mortgage-blocks-and-post-types.css")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./temp-kaleidico-custom-calculators.css")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./temp-kal_testimonials_for_loan_officers.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/complete-mortgage-blocks-and-post-types","dist-custom-plugins/social-share","style","dist-custom-plugins/querycraft"], () => (__webpack_require__("./temp-querycraft.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLE1BQU07O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUVBQW1FO0FBQ25FLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCOztBQUV4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxVQUFVO0FBQ3JGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSwyQkFBMkI7QUFDM0IsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLFNBQVMsNENBQTRDO0FBQ3JEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELG1CQUFtQjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdCQUFnQjtBQUM3RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFELEdBQUcsZ0JBQWdCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxvQ0FBb0M7QUFDOUU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssNkVBQTZFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdFQUFnRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNFQUFzRTtBQUMzRTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0VBQXNFO0FBQzNFO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBLEVBQUU7O0FBRUYsZ0VBQWdFLGNBQWM7O0FBRTlFLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksc0NBQXNDO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxrQkFBa0I7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakYsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrRkFBa0Y7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBEQUEwRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssNkNBQTZDO0FBQ2xEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMERBQTBEO0FBQy9EO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywwREFBMEQ7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGtHQUFrRztBQUN2RztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRXREQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi9ub2RlX21vZHVsZXMvZXF1YWxpemUtaGVpZ2h0cy9kaXN0L2VxdWFsaXplSGVpZ2h0cy5qcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3NyYy9qcy9jb3JlLmpzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vc3JjL3N0eWxlLnNjc3M/NDg1YSIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3RlbXAtY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzLmNzcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3RlbXAta2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vycy5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi90ZW1wLWthbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnMuY3NzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vdGVtcC1xdWVyeWNyYWZ0LmNzcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3RlbXAtc29jaWFsLXNoYXJlLmNzcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG52YXIgZXNfcmVnZXhwX2ZsYWdzID0ge307XG5cbnZhciBnbG9iYWxUaGlzXzE7XG52YXIgaGFzUmVxdWlyZWRHbG9iYWxUaGlzO1xuXG5mdW5jdGlvbiByZXF1aXJlR2xvYmFsVGhpcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdsb2JhbFRoaXMpIHJldHVybiBnbG9iYWxUaGlzXzE7XG5cdGhhc1JlcXVpcmVkR2xvYmFsVGhpcyA9IDE7XG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xuXHR9O1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdGdsb2JhbFRoaXNfMSA9XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcblx0ICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuXHQgIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuXHQgIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG5cdCAgY2hlY2sodHlwZW9mIGNvbW1vbmpzR2xvYmFsID09ICdvYmplY3QnICYmIGNvbW1vbmpzR2xvYmFsKSB8fFxuXHQgIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzXzEgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpc18xKSB8fFxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuXHQgIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdHJldHVybiBnbG9iYWxUaGlzXzE7XG59XG5cbnZhciBmYWlscztcbnZhciBoYXNSZXF1aXJlZEZhaWxzO1xuXG5mdW5jdGlvbiByZXF1aXJlRmFpbHMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGYWlscykgcmV0dXJuIGZhaWxzO1xuXHRoYXNSZXF1aXJlZEZhaWxzID0gMTtcblx0ZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gISFleGVjKCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIGZhaWxzO1xufVxuXG52YXIgZGVzY3JpcHRvcnM7XG52YXIgaGFzUmVxdWlyZWREZXNjcmlwdG9ycztcblxuZnVuY3Rpb24gcmVxdWlyZURlc2NyaXB0b3JzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRGVzY3JpcHRvcnMpIHJldHVybiBkZXNjcmlwdG9ycztcblx0aGFzUmVxdWlyZWREZXNjcmlwdG9ycyA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdC8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5cdGRlc2NyaXB0b3JzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG5cdH0pO1xuXHRyZXR1cm4gZGVzY3JpcHRvcnM7XG59XG5cbnZhciBtYWtlQnVpbHRJbiA9IHtleHBvcnRzOiB7fX07XG5cbnZhciBmdW5jdGlvbkJpbmROYXRpdmU7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvbkJpbmROYXRpdmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvbkJpbmROYXRpdmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvbkJpbmROYXRpdmUpIHJldHVybiBmdW5jdGlvbkJpbmROYXRpdmU7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kTmF0aXZlID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0ZnVuY3Rpb25CaW5kTmF0aXZlID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuXHQgIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuXHQgIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xuXHR9KTtcblx0cmV0dXJuIGZ1bmN0aW9uQmluZE5hdGl2ZTtcbn1cblxudmFyIGZ1bmN0aW9uVW5jdXJyeVRoaXM7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXMpIHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXMgPSAxO1xuXHR2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlRnVuY3Rpb25CaW5kTmF0aXZlKCk7XG5cblx0dmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXHR2YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5cdHZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5cdGZ1bmN0aW9uVW5jdXJyeVRoaXMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXM7XG59XG5cbnZhciBpc0NhbGxhYmxlO1xudmFyIGhhc1JlcXVpcmVkSXNDYWxsYWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUlzQ2FsbGFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0NhbGxhYmxlKSByZXR1cm4gaXNDYWxsYWJsZTtcblx0aGFzUmVxdWlyZWRJc0NhbGxhYmxlID0gMTtcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxuXHR2YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG5cdC8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0aXNDYWxsYWJsZSA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcblx0fSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcblx0fTtcblx0cmV0dXJuIGlzQ2FsbGFibGU7XG59XG5cbnZhciBpc051bGxPclVuZGVmaW5lZDtcbnZhciBoYXNSZXF1aXJlZElzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc051bGxPclVuZGVmaW5lZCkgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkO1xuXHRoYXNSZXF1aXJlZElzTnVsbE9yVW5kZWZpbmVkID0gMTtcblx0Ly8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xuXHRpc051bGxPclVuZGVmaW5lZCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xuXHR9O1xuXHRyZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQ7XG59XG5cbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlO1xudmFyIGhhc1JlcXVpcmVkUmVxdWlyZU9iamVjdENvZXJjaWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKSByZXR1cm4gcmVxdWlyZU9iamVjdENvZXJjaWJsZTtcblx0aGFzUmVxdWlyZWRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gMTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcblx0cmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHRyZXR1cm4gcmVxdWlyZU9iamVjdENvZXJjaWJsZTtcbn1cblxudmFyIHRvT2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkVG9PYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb09iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvT2JqZWN0KSByZXR1cm4gdG9PYmplY3Q7XG5cdGhhc1JlcXVpcmVkVG9PYmplY3QgPSAxO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cblx0Ly8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxuXHR0b09iamVjdCA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcblx0fTtcblx0cmV0dXJuIHRvT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHlfMTtcbnZhciBoYXNSZXF1aXJlZEhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXF1aXJlSGFzT3duUHJvcGVydHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRIYXNPd25Qcm9wZXJ0eSkgcmV0dXJuIGhhc093blByb3BlcnR5XzE7XG5cdGhhc1JlcXVpcmVkSGFzT3duUHJvcGVydHkgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblxuXHR2YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cblx0Ly8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5cdGhhc093blByb3BlcnR5XzEgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG5cdCAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcblx0fTtcblx0cmV0dXJuIGhhc093blByb3BlcnR5XzE7XG59XG5cbnZhciBmdW5jdGlvbk5hbWU7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvbk5hbWU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvbk5hbWUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvbk5hbWUpIHJldHVybiBmdW5jdGlvbk5hbWU7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25OYW1lID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblxuXHR2YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0dmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5cdHZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG5cdC8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcblx0dmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcblx0dmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5cdGZ1bmN0aW9uTmFtZSA9IHtcblx0ICBFWElTVFM6IEVYSVNUUyxcblx0ICBQUk9QRVI6IFBST1BFUixcblx0ICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25OYW1lO1xufVxuXG52YXIgc2hhcmVkU3RvcmUgPSB7ZXhwb3J0czoge319O1xuXG52YXIgaXNQdXJlO1xudmFyIGhhc1JlcXVpcmVkSXNQdXJlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNQdXJlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNQdXJlKSByZXR1cm4gaXNQdXJlO1xuXHRoYXNSZXF1aXJlZElzUHVyZSA9IDE7XG5cdGlzUHVyZSA9IGZhbHNlO1xuXHRyZXR1cm4gaXNQdXJlO1xufVxuXG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHk7XG52YXIgaGFzUmVxdWlyZWREZWZpbmVHbG9iYWxQcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVxdWlyZURlZmluZUdsb2JhbFByb3BlcnR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRGVmaW5lR2xvYmFsUHJvcGVydHkpIHJldHVybiBkZWZpbmVHbG9iYWxQcm9wZXJ0eTtcblx0aGFzUmVxdWlyZWREZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5cdGRlZmluZUdsb2JhbFByb3BlcnR5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0ICB0cnkge1xuXHQgICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG5cdCAgfSByZXR1cm4gdmFsdWU7XG5cdH07XG5cdHJldHVybiBkZWZpbmVHbG9iYWxQcm9wZXJ0eTtcbn1cblxudmFyIGhhc1JlcXVpcmVkU2hhcmVkU3RvcmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTaGFyZWRTdG9yZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNoYXJlZFN0b3JlKSByZXR1cm4gc2hhcmVkU3RvcmUuZXhwb3J0cztcblx0aGFzUmVxdWlyZWRTaGFyZWRTdG9yZSA9IDE7XG5cdHZhciBJU19QVVJFID0gcmVxdWlyZUlzUHVyZSgpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmVEZWZpbmVHbG9iYWxQcm9wZXJ0eSgpO1xuXG5cdHZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcblx0dmFyIHN0b3JlID0gc2hhcmVkU3RvcmUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuXHQoc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcblx0ICB2ZXJzaW9uOiAnMy40MC4wJyxcblx0ICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG5cdCAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcblx0ICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MC4wL0xJQ0VOU0UnLFxuXHQgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xuXHR9KTtcblx0cmV0dXJuIHNoYXJlZFN0b3JlLmV4cG9ydHM7XG59XG5cbnZhciBpbnNwZWN0U291cmNlO1xudmFyIGhhc1JlcXVpcmVkSW5zcGVjdFNvdXJjZTtcblxuZnVuY3Rpb24gcmVxdWlyZUluc3BlY3RTb3VyY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJbnNwZWN0U291cmNlKSByZXR1cm4gaW5zcGVjdFNvdXJjZTtcblx0aGFzUmVxdWlyZWRJbnNwZWN0U291cmNlID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgc3RvcmUgPSByZXF1aXJlU2hhcmVkU3RvcmUoKTtcblxuXHR2YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuXHQvLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5cdGlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuXHQgIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcblx0ICB9O1xuXHR9XG5cblx0aW5zcGVjdFNvdXJjZSA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG5cdHJldHVybiBpbnNwZWN0U291cmNlO1xufVxuXG52YXIgd2Vha01hcEJhc2ljRGV0ZWN0aW9uO1xudmFyIGhhc1JlcXVpcmVkV2Vha01hcEJhc2ljRGV0ZWN0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlV2Vha01hcEJhc2ljRGV0ZWN0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2Vha01hcEJhc2ljRGV0ZWN0aW9uKSByZXR1cm4gd2Vha01hcEJhc2ljRGV0ZWN0aW9uO1xuXHRoYXNSZXF1aXJlZFdlYWtNYXBCYXNpY0RldGVjdGlvbiA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXG5cdHZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5cdHdlYWtNYXBCYXNpY0RldGVjdGlvbiA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG5cdHJldHVybiB3ZWFrTWFwQmFzaWNEZXRlY3Rpb247XG59XG5cbnZhciBpc09iamVjdDtcbnZhciBoYXNSZXF1aXJlZElzT2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlSXNPYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc09iamVjdCkgcmV0dXJuIGlzT2JqZWN0O1xuXHRoYXNSZXF1aXJlZElzT2JqZWN0ID0gMTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXG5cdGlzT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG5cdH07XG5cdHJldHVybiBpc09iamVjdDtcbn1cblxudmFyIG9iamVjdERlZmluZVByb3BlcnR5ID0ge307XG5cbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQ7XG52YXIgaGFzUmVxdWlyZWREb2N1bWVudENyZWF0ZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVEb2N1bWVudENyZWF0ZUVsZW1lbnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREb2N1bWVudENyZWF0ZUVsZW1lbnQpIHJldHVybiBkb2N1bWVudENyZWF0ZUVsZW1lbnQ7XG5cdGhhc1JlcXVpcmVkRG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHR2YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuXHQvLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcblx0dmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuXHRkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcblx0fTtcblx0cmV0dXJuIGRvY3VtZW50Q3JlYXRlRWxlbWVudDtcbn1cblxudmFyIGllOERvbURlZmluZTtcbnZhciBoYXNSZXF1aXJlZEllOERvbURlZmluZTtcblxuZnVuY3Rpb24gcmVxdWlyZUllOERvbURlZmluZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEllOERvbURlZmluZSkgcmV0dXJuIGllOERvbURlZmluZTtcblx0aGFzUmVxdWlyZWRJZThEb21EZWZpbmUgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZURvY3VtZW50Q3JlYXRlRWxlbWVudCgpO1xuXG5cdC8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxuXHRpZThEb21EZWZpbmUgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG5cdCAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cblx0ICB9KS5hICE9PSA3O1xuXHR9KTtcblx0cmV0dXJuIGllOERvbURlZmluZTtcbn1cblxudmFyIHY4UHJvdG90eXBlRGVmaW5lQnVnO1xudmFyIGhhc1JlcXVpcmVkVjhQcm90b3R5cGVEZWZpbmVCdWc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVWOFByb3RvdHlwZURlZmluZUJ1ZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFY4UHJvdG90eXBlRGVmaW5lQnVnKSByZXR1cm4gdjhQcm90b3R5cGVEZWZpbmVCdWc7XG5cdGhhc1JlcXVpcmVkVjhQcm90b3R5cGVEZWZpbmVCdWcgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0Ly8gVjggfiBDaHJvbWUgMzYtXG5cdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcblx0djhQcm90b3R5cGVEZWZpbmVCdWcgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuXHQgICAgdmFsdWU6IDQyLFxuXHQgICAgd3JpdGFibGU6IGZhbHNlXG5cdCAgfSkucHJvdG90eXBlICE9PSA0Mjtcblx0fSk7XG5cdHJldHVybiB2OFByb3RvdHlwZURlZmluZUJ1Zztcbn1cblxudmFyIGFuT2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkQW5PYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBbk9iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFuT2JqZWN0KSByZXR1cm4gYW5PYmplY3Q7XG5cdGhhc1JlcXVpcmVkQW5PYmplY3QgPSAxO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHR2YXIgJFN0cmluZyA9IFN0cmluZztcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxuXHRhbk9iamVjdCA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuXHR9O1xuXHRyZXR1cm4gYW5PYmplY3Q7XG59XG5cbnZhciBmdW5jdGlvbkNhbGw7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvbkNhbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvbkNhbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvbkNhbGwpIHJldHVybiBmdW5jdGlvbkNhbGw7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25DYWxsID0gMTtcblx0dmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZUZ1bmN0aW9uQmluZE5hdGl2ZSgpO1xuXG5cdHZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5cdGZ1bmN0aW9uQ2FsbCA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG5cdH07XG5cdHJldHVybiBmdW5jdGlvbkNhbGw7XG59XG5cbnZhciBnZXRCdWlsdEluO1xudmFyIGhhc1JlcXVpcmVkR2V0QnVpbHRJbjtcblxuZnVuY3Rpb24gcmVxdWlyZUdldEJ1aWx0SW4gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRCdWlsdEluKSByZXR1cm4gZ2V0QnVpbHRJbjtcblx0aGFzUmVxdWlyZWRHZXRCdWlsdEluID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cblx0dmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGdldEJ1aWx0SW4gPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcblx0ICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcblx0fTtcblx0cmV0dXJuIGdldEJ1aWx0SW47XG59XG5cbnZhciBvYmplY3RJc1Byb3RvdHlwZU9mO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0SXNQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdElzUHJvdG90eXBlT2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RJc1Byb3RvdHlwZU9mKSByZXR1cm4gb2JqZWN0SXNQcm90b3R5cGVPZjtcblx0aGFzUmVxdWlyZWRPYmplY3RJc1Byb3RvdHlwZU9mID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHRvYmplY3RJc1Byb3RvdHlwZU9mID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG5cdHJldHVybiBvYmplY3RJc1Byb3RvdHlwZU9mO1xufVxuXG52YXIgZW52aXJvbm1lbnRVc2VyQWdlbnQ7XG52YXIgaGFzUmVxdWlyZWRFbnZpcm9ubWVudFVzZXJBZ2VudDtcblxuZnVuY3Rpb24gcmVxdWlyZUVudmlyb25tZW50VXNlckFnZW50ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW52aXJvbm1lbnRVc2VyQWdlbnQpIHJldHVybiBlbnZpcm9ubWVudFVzZXJBZ2VudDtcblx0aGFzUmVxdWlyZWRFbnZpcm9ubWVudFVzZXJBZ2VudCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblxuXHR2YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG5cdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRlbnZpcm9ubWVudFVzZXJBZ2VudCA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG5cdHJldHVybiBlbnZpcm9ubWVudFVzZXJBZ2VudDtcbn1cblxudmFyIGVudmlyb25tZW50VjhWZXJzaW9uO1xudmFyIGhhc1JlcXVpcmVkRW52aXJvbm1lbnRWOFZlcnNpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnZpcm9ubWVudFY4VmVyc2lvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudmlyb25tZW50VjhWZXJzaW9uKSByZXR1cm4gZW52aXJvbm1lbnRWOFZlcnNpb247XG5cdGhhc1JlcXVpcmVkRW52aXJvbm1lbnRWOFZlcnNpb24gPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciB1c2VyQWdlbnQgPSByZXF1aXJlRW52aXJvbm1lbnRVc2VyQWdlbnQoKTtcblxuXHR2YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2Vzcztcblx0dmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG5cdHZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcblx0dmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG5cdHZhciBtYXRjaCwgdmVyc2lvbjtcblxuXHRpZiAodjgpIHtcblx0ICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG5cdCAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuXHQgIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG5cdCAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcblx0fVxuXG5cdC8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuXHQvLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcblx0aWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuXHQgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG5cdCAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuXHQgICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuXHQgICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuXHQgIH1cblx0fVxuXG5cdGVudmlyb25tZW50VjhWZXJzaW9uID0gdmVyc2lvbjtcblx0cmV0dXJuIGVudmlyb25tZW50VjhWZXJzaW9uO1xufVxuXG52YXIgc3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb247XG52YXIgaGFzUmVxdWlyZWRTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZVN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24pIHJldHVybiBzeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbjtcblx0aGFzUmVxdWlyZWRTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbiA9IDE7XG5cdC8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xuXHR2YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmVFbnZpcm9ubWVudFY4VmVyc2lvbigpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXG5cdHZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0c3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24gPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG5cdCAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cblx0ICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG5cdCAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuXHQgIC8vIG9mIGNvdXJzZSwgZmFpbC5cblx0ICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuXHQgICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcblx0ICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcblx0fSk7XG5cdHJldHVybiBzeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbjtcbn1cblxudmFyIHVzZVN5bWJvbEFzVWlkO1xudmFyIGhhc1JlcXVpcmVkVXNlU3ltYm9sQXNVaWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVVc2VTeW1ib2xBc1VpZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFVzZVN5bWJvbEFzVWlkKSByZXR1cm4gdXNlU3ltYm9sQXNVaWQ7XG5cdGhhc1JlcXVpcmVkVXNlU3ltYm9sQXNVaWQgPSAxO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cblx0dmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24oKTtcblxuXHR1c2VTeW1ib2xBc1VpZCA9IE5BVElWRV9TWU1CT0wgJiZcblx0ICAhU3ltYm9sLnNoYW0gJiZcblx0ICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuXHRyZXR1cm4gdXNlU3ltYm9sQXNVaWQ7XG59XG5cbnZhciBpc1N5bWJvbDtcbnZhciBoYXNSZXF1aXJlZElzU3ltYm9sO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNTeW1ib2wgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc1N5bWJvbCkgcmV0dXJuIGlzU3ltYm9sO1xuXHRoYXNSZXF1aXJlZElzU3ltYm9sID0gMTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdElzUHJvdG90eXBlT2YoKTtcblx0dmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZVVzZVN5bWJvbEFzVWlkKCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cblx0aXNTeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG5cdH0gOiBmdW5jdGlvbiAoaXQpIHtcblx0ICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuXHQgIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcblx0fTtcblx0cmV0dXJuIGlzU3ltYm9sO1xufVxuXG52YXIgdHJ5VG9TdHJpbmc7XG52YXIgaGFzUmVxdWlyZWRUcnlUb1N0cmluZztcblxuZnVuY3Rpb24gcmVxdWlyZVRyeVRvU3RyaW5nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVHJ5VG9TdHJpbmcpIHJldHVybiB0cnlUb1N0cmluZztcblx0aGFzUmVxdWlyZWRUcnlUb1N0cmluZyA9IDE7XG5cdHZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5cdHRyeVRvU3RyaW5nID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuICdPYmplY3QnO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIHRyeVRvU3RyaW5nO1xufVxuXG52YXIgYUNhbGxhYmxlO1xudmFyIGhhc1JlcXVpcmVkQUNhbGxhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlQUNhbGxhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQUNhbGxhYmxlKSByZXR1cm4gYUNhbGxhYmxlO1xuXHRoYXNSZXF1aXJlZEFDYWxsYWJsZSA9IDE7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZVRyeVRvU3RyaW5nKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcblx0YUNhbGxhYmxlID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHR9O1xuXHRyZXR1cm4gYUNhbGxhYmxlO1xufVxuXG52YXIgZ2V0TWV0aG9kO1xudmFyIGhhc1JlcXVpcmVkR2V0TWV0aG9kO1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0TWV0aG9kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0TWV0aG9kKSByZXR1cm4gZ2V0TWV0aG9kO1xuXHRoYXNSZXF1aXJlZEdldE1ldGhvZCA9IDE7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXG5cdC8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxuXHRnZXRNZXRob2QgPSBmdW5jdGlvbiAoViwgUCkge1xuXHQgIHZhciBmdW5jID0gVltQXTtcblx0ICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG5cdH07XG5cdHJldHVybiBnZXRNZXRob2Q7XG59XG5cbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlO1xudmFyIGhhc1JlcXVpcmVkT3JkaW5hcnlUb1ByaW1pdGl2ZTtcblxuZnVuY3Rpb24gcmVxdWlyZU9yZGluYXJ5VG9QcmltaXRpdmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPcmRpbmFyeVRvUHJpbWl0aXZlKSByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZTtcblx0aGFzUmVxdWlyZWRPcmRpbmFyeVRvUHJpbWl0aXZlID0gMTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcblx0b3JkaW5hcnlUb1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuXHQgIHZhciBmbiwgdmFsO1xuXHQgIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuXHQgIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG5cdCAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG5cdH07XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlO1xufVxuXG52YXIgc2hhcmVkO1xudmFyIGhhc1JlcXVpcmVkU2hhcmVkO1xuXG5mdW5jdGlvbiByZXF1aXJlU2hhcmVkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2hhcmVkKSByZXR1cm4gc2hhcmVkO1xuXHRoYXNSZXF1aXJlZFNoYXJlZCA9IDE7XG5cdHZhciBzdG9yZSA9IHJlcXVpcmVTaGFyZWRTdG9yZSgpO1xuXG5cdHNoYXJlZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdCAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG5cdH07XG5cdHJldHVybiBzaGFyZWQ7XG59XG5cbnZhciB1aWQ7XG52YXIgaGFzUmVxdWlyZWRVaWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVVaWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRVaWQpIHJldHVybiB1aWQ7XG5cdGhhc1JlcXVpcmVkVWlkID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHR2YXIgaWQgPSAwO1xuXHR2YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cdHZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cblx0dWlkID0gZnVuY3Rpb24gKGtleSkge1xuXHQgIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcblx0fTtcblx0cmV0dXJuIHVpZDtcbn1cblxudmFyIHdlbGxLbm93blN5bWJvbDtcbnZhciBoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbDtcblxuZnVuY3Rpb24gcmVxdWlyZVdlbGxLbm93blN5bWJvbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbCkgcmV0dXJuIHdlbGxLbm93blN5bWJvbDtcblx0aGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2wgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBzaGFyZWQgPSByZXF1aXJlU2hhcmVkKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIHVpZCA9IHJlcXVpcmVVaWQoKTtcblx0dmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24oKTtcblx0dmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZVVzZVN5bWJvbEFzVWlkKCk7XG5cblx0dmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xuXHR2YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcblx0dmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5cdHdlbGxLbm93blN5bWJvbCA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuXHQgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuXHQgICAgICA/IFN5bWJvbFtuYW1lXVxuXHQgICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcblx0ICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG5cdH07XG5cdHJldHVybiB3ZWxsS25vd25TeW1ib2w7XG59XG5cbnZhciB0b1ByaW1pdGl2ZTtcbnZhciBoYXNSZXF1aXJlZFRvUHJpbWl0aXZlO1xuXG5mdW5jdGlvbiByZXF1aXJlVG9QcmltaXRpdmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb1ByaW1pdGl2ZSkgcmV0dXJuIHRvUHJpbWl0aXZlO1xuXHRoYXNSZXF1aXJlZFRvUHJpbWl0aXZlID0gMTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgaXNTeW1ib2wgPSByZXF1aXJlSXNTeW1ib2woKTtcblx0dmFyIGdldE1ldGhvZCA9IHJlcXVpcmVHZXRNZXRob2QoKTtcblx0dmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlT3JkaW5hcnlUb1ByaW1pdGl2ZSgpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHR2YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG5cdC8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcblx0dG9QcmltaXRpdmUgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcblx0ICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcblx0ICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuXHQgIHZhciByZXN1bHQ7XG5cdCAgaWYgKGV4b3RpY1RvUHJpbSkge1xuXHQgICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0Jztcblx0ICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG5cdCAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcblx0ICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuXHQgIH1cblx0ICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG5cdCAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xuXHR9O1xuXHRyZXR1cm4gdG9QcmltaXRpdmU7XG59XG5cbnZhciB0b1Byb3BlcnR5S2V5O1xudmFyIGhhc1JlcXVpcmVkVG9Qcm9wZXJ0eUtleTtcblxuZnVuY3Rpb24gcmVxdWlyZVRvUHJvcGVydHlLZXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb1Byb3BlcnR5S2V5KSByZXR1cm4gdG9Qcm9wZXJ0eUtleTtcblx0aGFzUmVxdWlyZWRUb1Byb3BlcnR5S2V5ID0gMTtcblx0dmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZVRvUHJpbWl0aXZlKCk7XG5cdHZhciBpc1N5bWJvbCA9IHJlcXVpcmVJc1N5bWJvbCgpO1xuXG5cdC8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5cdHRvUHJvcGVydHlLZXkgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcblx0ICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xuXHR9O1xuXHRyZXR1cm4gdG9Qcm9wZXJ0eUtleTtcbn1cblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnR5KSByZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydHk7XG5cdGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydHkgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZUllOERvbURlZmluZSgpO1xuXHR2YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlVjhQcm90b3R5cGVEZWZpbmVCdWcoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZVRvUHJvcGVydHlLZXkoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG5cdHZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0dmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXHR2YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcblx0dmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xuXHR2YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG5cdC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuXHRvYmplY3REZWZpbmVQcm9wZXJ0eS5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcblx0ICBhbk9iamVjdChPKTtcblx0ICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcblx0ICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcblx0ICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG5cdCAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG5cdCAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuXHQgICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcblx0ICAgICAgQXR0cmlidXRlcyA9IHtcblx0ICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuXHQgICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuXHQgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcblx0fSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcblx0ICBhbk9iamVjdChPKTtcblx0ICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcblx0ICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcblx0ICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG5cdCAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcblx0ICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcblx0ICByZXR1cm4gTztcblx0fTtcblx0cmV0dXJuIG9iamVjdERlZmluZVByb3BlcnR5O1xufVxuXG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGhhc1JlcXVpcmVkQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yO1xuXHRoYXNSZXF1aXJlZENyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IDE7XG5cdGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG5cdCAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG5cdCAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcblx0ICAgIHZhbHVlOiB2YWx1ZVxuXHQgIH07XG5cdH07XG5cdHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3I7XG59XG5cbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHk7XG52YXIgaGFzUmVxdWlyZWRDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkpIHJldHVybiBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHk7XG5cdGhhc1JlcXVpcmVkQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpO1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZUNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigpO1xuXG5cdGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcblx0fSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcblx0ICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuXHQgIHJldHVybiBvYmplY3Q7XG5cdH07XG5cdHJldHVybiBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHk7XG59XG5cbnZhciBzaGFyZWRLZXk7XG52YXIgaGFzUmVxdWlyZWRTaGFyZWRLZXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTaGFyZWRLZXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTaGFyZWRLZXkpIHJldHVybiBzaGFyZWRLZXk7XG5cdGhhc1JlcXVpcmVkU2hhcmVkS2V5ID0gMTtcblx0dmFyIHNoYXJlZCA9IHJlcXVpcmVTaGFyZWQoKTtcblx0dmFyIHVpZCA9IHJlcXVpcmVVaWQoKTtcblxuXHR2YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5cdHNoYXJlZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcblx0ICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG5cdH07XG5cdHJldHVybiBzaGFyZWRLZXk7XG59XG5cbnZhciBoaWRkZW5LZXlzO1xudmFyIGhhc1JlcXVpcmVkSGlkZGVuS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZUhpZGRlbktleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRIaWRkZW5LZXlzKSByZXR1cm4gaGlkZGVuS2V5cztcblx0aGFzUmVxdWlyZWRIaWRkZW5LZXlzID0gMTtcblx0aGlkZGVuS2V5cyA9IHt9O1xuXHRyZXR1cm4gaGlkZGVuS2V5cztcbn1cblxudmFyIGludGVybmFsU3RhdGU7XG52YXIgaGFzUmVxdWlyZWRJbnRlcm5hbFN0YXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlSW50ZXJuYWxTdGF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEludGVybmFsU3RhdGUpIHJldHVybiBpbnRlcm5hbFN0YXRlO1xuXHRoYXNSZXF1aXJlZEludGVybmFsU3RhdGUgPSAxO1xuXHR2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZVdlYWtNYXBCYXNpY0RldGVjdGlvbigpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZUNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBzaGFyZWQgPSByZXF1aXJlU2hhcmVkU3RvcmUoKTtcblx0dmFyIHNoYXJlZEtleSA9IHJlcXVpcmVTaGFyZWRLZXkoKTtcblx0dmFyIGhpZGRlbktleXMgPSByZXF1aXJlSGlkZGVuS2V5cygpO1xuXG5cdHZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG5cdHZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcblx0dmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cdHZhciBzZXQsIGdldCwgaGFzO1xuXG5cdHZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG5cdH07XG5cblx0dmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgdmFyIHN0YXRlO1xuXHQgICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuXHQgICAgfSByZXR1cm4gc3RhdGU7XG5cdCAgfTtcblx0fTtcblxuXHRpZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuXHQgIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG5cdCAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuXHQgIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcblx0ICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG5cdCAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuXHQgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuXHQgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcblx0ICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcblx0ICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuXHQgICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG5cdCAgICByZXR1cm4gbWV0YWRhdGE7XG5cdCAgfTtcblx0ICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuXHQgIH07XG5cdCAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcblx0ICB9O1xuXHR9IGVsc2Uge1xuXHQgIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcblx0ICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG5cdCAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuXHQgICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcblx0ICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuXHQgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuXHQgICAgcmV0dXJuIG1ldGFkYXRhO1xuXHQgIH07XG5cdCAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcblx0ICB9O1xuXHQgIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuXHQgIH07XG5cdH1cblxuXHRpbnRlcm5hbFN0YXRlID0ge1xuXHQgIHNldDogc2V0LFxuXHQgIGdldDogZ2V0LFxuXHQgIGhhczogaGFzLFxuXHQgIGVuZm9yY2U6IGVuZm9yY2UsXG5cdCAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcblx0fTtcblx0cmV0dXJuIGludGVybmFsU3RhdGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZE1ha2VCdWlsdEluO1xuXG5mdW5jdGlvbiByZXF1aXJlTWFrZUJ1aWx0SW4gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYWtlQnVpbHRJbikgcmV0dXJuIG1ha2VCdWlsdEluLmV4cG9ydHM7XG5cdGhhc1JlcXVpcmVkTWFrZUJ1aWx0SW4gPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlRnVuY3Rpb25OYW1lKCkuQ09ORklHVVJBQkxFO1xuXHR2YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmVJbnNwZWN0U291cmNlKCk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblxuXHR2YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG5cdHZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG5cdHZhciAkU3RyaW5nID0gU3RyaW5nO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXHR2YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cdHZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG5cdHZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cblx0dmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcblx0fSk7XG5cblx0dmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG5cdHZhciBtYWtlQnVpbHRJbiQxID0gbWFrZUJ1aWx0SW4uZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuXHQgIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG5cdCAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuXHQgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcblx0ICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcblx0ICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuXHQgICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcblx0ICB9XG5cdCAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG5cdCAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG5cdCAgfVxuXHQgIHRyeSB7XG5cdCAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuXHQgICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG5cdCAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG5cdCAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG5cdCAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuXHQgICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuXHQgIH0gcmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuXHRGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbiQxKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG5cdH0sICd0b1N0cmluZycpO1xuXHRyZXR1cm4gbWFrZUJ1aWx0SW4uZXhwb3J0cztcbn1cblxudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcjtcbnZhciBoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5BY2Nlc3NvcjtcblxuZnVuY3Rpb24gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5BY2Nlc3NvcikgcmV0dXJuIGRlZmluZUJ1aWx0SW5BY2Nlc3Nvcjtcblx0aGFzUmVxdWlyZWREZWZpbmVCdWlsdEluQWNjZXNzb3IgPSAxO1xuXHR2YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlTWFrZUJ1aWx0SW4oKTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCk7XG5cblx0ZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuXHQgIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuXHQgIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuXHQgIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG5cdH07XG5cdHJldHVybiBkZWZpbmVCdWlsdEluQWNjZXNzb3I7XG59XG5cbnZhciByZWdleHBGbGFncztcbnZhciBoYXNSZXF1aXJlZFJlZ2V4cEZsYWdzO1xuXG5mdW5jdGlvbiByZXF1aXJlUmVnZXhwRmxhZ3MgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRSZWdleHBGbGFncykgcmV0dXJuIHJlZ2V4cEZsYWdzO1xuXHRoYXNSZXF1aXJlZFJlZ2V4cEZsYWdzID0gMTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0Ly8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5cdHJlZ2V4cEZsYWdzID0gZnVuY3Rpb24gKCkge1xuXHQgIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG5cdCAgdmFyIHJlc3VsdCA9ICcnO1xuXHQgIGlmICh0aGF0Lmhhc0luZGljZXMpIHJlc3VsdCArPSAnZCc7XG5cdCAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuXHQgIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG5cdCAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuXHQgIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcblx0ICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuXHQgIGlmICh0aGF0LnVuaWNvZGVTZXRzKSByZXN1bHQgKz0gJ3YnO1xuXHQgIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5Jztcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gcmVnZXhwRmxhZ3M7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX3JlZ2V4cF9mbGFncztcblxuZnVuY3Rpb24gcmVxdWlyZUVzX3JlZ2V4cF9mbGFncyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX3JlZ2V4cF9mbGFncykgcmV0dXJuIGVzX3JlZ2V4cF9mbGFncztcblx0aGFzUmVxdWlyZWRFc19yZWdleHBfZmxhZ3MgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXHR2YXIgcmVnRXhwRmxhZ3MgPSByZXF1aXJlUmVnZXhwRmxhZ3MoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0Ly8gYmFiZWwtbWluaWZ5IGFuZCBDbG9zdXJlIENvbXBpbGVyIHRyYW5zcGlsZXMgUmVnRXhwKCcuJywgJ2QnKSAtPiAvLi9kIGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3Jcblx0dmFyIFJlZ0V4cCA9IGdsb2JhbFRoaXMuUmVnRXhwO1xuXHR2YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxuXHR2YXIgRk9SQ0VEID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHZhciBJTkRJQ0VTX1NVUFBPUlQgPSB0cnVlO1xuXHQgIHRyeSB7XG5cdCAgICBSZWdFeHAoJy4nLCAnZCcpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICBJTkRJQ0VTX1NVUFBPUlQgPSBmYWxzZTtcblx0ICB9XG5cblx0ICB2YXIgTyA9IHt9O1xuXHQgIC8vIG1vZGVybiBWOCBidWdcblx0ICB2YXIgY2FsbHMgPSAnJztcblx0ICB2YXIgZXhwZWN0ZWQgPSBJTkRJQ0VTX1NVUFBPUlQgPyAnZGdpbXN5JyA6ICdnaW1zeSc7XG5cblx0ICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24gKGtleSwgY2hyKSB7XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGNhbGxzICs9IGNocjtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9IH0pO1xuXHQgIH07XG5cblx0ICB2YXIgcGFpcnMgPSB7XG5cdCAgICBkb3RBbGw6ICdzJyxcblx0ICAgIGdsb2JhbDogJ2cnLFxuXHQgICAgaWdub3JlQ2FzZTogJ2knLFxuXHQgICAgbXVsdGlsaW5lOiAnbScsXG5cdCAgICBzdGlja3k6ICd5J1xuXHQgIH07XG5cblx0ICBpZiAoSU5ESUNFU19TVVBQT1JUKSBwYWlycy5oYXNJbmRpY2VzID0gJ2QnO1xuXG5cdCAgZm9yICh2YXIga2V5IGluIHBhaXJzKSBhZGRHZXR0ZXIoa2V5LCBwYWlyc1trZXldKTtcblxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0ICB2YXIgcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSZWdFeHBQcm90b3R5cGUsICdmbGFncycpLmdldC5jYWxsKE8pO1xuXG5cdCAgcmV0dXJuIHJlc3VsdCAhPT0gZXhwZWN0ZWQgfHwgY2FsbHMgIT09IGV4cGVjdGVkO1xuXHR9KTtcblxuXHQvLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncblx0aWYgKEZPUkNFRCkgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFJlZ0V4cFByb3RvdHlwZSwgJ2ZsYWdzJywge1xuXHQgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IHJlZ0V4cEZsYWdzXG5cdH0pO1xuXHRyZXR1cm4gZXNfcmVnZXhwX2ZsYWdzO1xufVxuXG5yZXF1aXJlRXNfcmVnZXhwX2ZsYWdzKCk7XG5cbnZhciBlc25leHRfYXJyYXlfbGFzdEluZGV4ID0ge307XG5cbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0aWVzID0ge307XG5cbnZhciBjbGFzc29mUmF3O1xudmFyIGhhc1JlcXVpcmVkQ2xhc3NvZlJhdztcblxuZnVuY3Rpb24gcmVxdWlyZUNsYXNzb2ZSYXcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDbGFzc29mUmF3KSByZXR1cm4gY2xhc3NvZlJhdztcblx0aGFzUmVxdWlyZWRDbGFzc29mUmF3ID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHR2YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG5cdHZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxuXHRjbGFzc29mUmF3ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xuXHR9O1xuXHRyZXR1cm4gY2xhc3NvZlJhdztcbn1cblxudmFyIGluZGV4ZWRPYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRJbmRleGVkT2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlSW5kZXhlZE9iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEluZGV4ZWRPYmplY3QpIHJldHVybiBpbmRleGVkT2JqZWN0O1xuXHRoYXNSZXF1aXJlZEluZGV4ZWRPYmplY3QgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHR2YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncblx0aW5kZXhlZE9iamVjdCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG5cdCAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG5cdH0pID8gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcblx0fSA6ICRPYmplY3Q7XG5cdHJldHVybiBpbmRleGVkT2JqZWN0O1xufVxuXG52YXIgdG9JbmRleGVkT2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkVG9JbmRleGVkT2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9JbmRleGVkT2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9JbmRleGVkT2JqZWN0KSByZXR1cm4gdG9JbmRleGVkT2JqZWN0O1xuXHRoYXNSZXF1aXJlZFRvSW5kZXhlZE9iamVjdCA9IDE7XG5cdC8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cdHZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZUluZGV4ZWRPYmplY3QoKTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXG5cdHRvSW5kZXhlZE9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcblx0fTtcblx0cmV0dXJuIHRvSW5kZXhlZE9iamVjdDtcbn1cblxudmFyIG1hdGhUcnVuYztcbnZhciBoYXNSZXF1aXJlZE1hdGhUcnVuYztcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhUcnVuYyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhUcnVuYykgcmV0dXJuIG1hdGhUcnVuYztcblx0aGFzUmVxdWlyZWRNYXRoVHJ1bmMgPSAxO1xuXHR2YXIgY2VpbCA9IE1hdGguY2VpbDtcblx0dmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuXHQvLyBgTWF0aC50cnVuY2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5cdG1hdGhUcnVuYyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuXHQgIHZhciBuID0gK3g7XG5cdCAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG5cdH07XG5cdHJldHVybiBtYXRoVHJ1bmM7XG59XG5cbnZhciB0b0ludGVnZXJPckluZmluaXR5O1xudmFyIGhhc1JlcXVpcmVkVG9JbnRlZ2VyT3JJbmZpbml0eTtcblxuZnVuY3Rpb24gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb0ludGVnZXJPckluZmluaXR5KSByZXR1cm4gdG9JbnRlZ2VyT3JJbmZpbml0eTtcblx0aGFzUmVxdWlyZWRUb0ludGVnZXJPckluZmluaXR5ID0gMTtcblx0dmFyIHRydW5jID0gcmVxdWlyZU1hdGhUcnVuYygpO1xuXG5cdC8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5cdHRvSW50ZWdlck9ySW5maW5pdHkgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xuXHR9O1xuXHRyZXR1cm4gdG9JbnRlZ2VyT3JJbmZpbml0eTtcbn1cblxudmFyIHRvQWJzb2x1dGVJbmRleDtcbnZhciBoYXNSZXF1aXJlZFRvQWJzb2x1dGVJbmRleDtcblxuZnVuY3Rpb24gcmVxdWlyZVRvQWJzb2x1dGVJbmRleCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvQWJzb2x1dGVJbmRleCkgcmV0dXJuIHRvQWJzb2x1dGVJbmRleDtcblx0aGFzUmVxdWlyZWRUb0Fic29sdXRlSW5kZXggPSAxO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cblx0dmFyIG1heCA9IE1hdGgubWF4O1xuXHR2YXIgbWluID0gTWF0aC5taW47XG5cblx0Ly8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG5cdC8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cblx0Ly8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cblx0dG9BYnNvbHV0ZUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcblx0ICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuXHQgIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xuXHR9O1xuXHRyZXR1cm4gdG9BYnNvbHV0ZUluZGV4O1xufVxuXG52YXIgdG9MZW5ndGg7XG52YXIgaGFzUmVxdWlyZWRUb0xlbmd0aDtcblxuZnVuY3Rpb24gcmVxdWlyZVRvTGVuZ3RoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9MZW5ndGgpIHJldHVybiB0b0xlbmd0aDtcblx0aGFzUmVxdWlyZWRUb0xlbmd0aCA9IDE7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblxuXHR2YXIgbWluID0gTWF0aC5taW47XG5cblx0Ly8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxuXHR0b0xlbmd0aCA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcblx0ICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXHR9O1xuXHRyZXR1cm4gdG9MZW5ndGg7XG59XG5cbnZhciBsZW5ndGhPZkFycmF5TGlrZTtcbnZhciBoYXNSZXF1aXJlZExlbmd0aE9mQXJyYXlMaWtlO1xuXG5mdW5jdGlvbiByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRMZW5ndGhPZkFycmF5TGlrZSkgcmV0dXJuIGxlbmd0aE9mQXJyYXlMaWtlO1xuXHRoYXNSZXF1aXJlZExlbmd0aE9mQXJyYXlMaWtlID0gMTtcblx0dmFyIHRvTGVuZ3RoID0gcmVxdWlyZVRvTGVuZ3RoKCk7XG5cblx0Ly8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxuXHRsZW5ndGhPZkFycmF5TGlrZSA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG5cdH07XG5cdHJldHVybiBsZW5ndGhPZkFycmF5TGlrZTtcbn1cblxudmFyIGFycmF5SW5jbHVkZXM7XG52YXIgaGFzUmVxdWlyZWRBcnJheUluY2x1ZGVzO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlJbmNsdWRlcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5SW5jbHVkZXMpIHJldHVybiBhcnJheUluY2x1ZGVzO1xuXHRoYXNSZXF1aXJlZEFycmF5SW5jbHVkZXMgPSAxO1xuXHR2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZVRvQWJzb2x1dGVJbmRleCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblxuXHQvLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuXHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuXHQgICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuXHQgICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuXHQgICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcblx0ICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG5cdCAgICB2YXIgdmFsdWU7XG5cdCAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG5cdCAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG5cdCAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG5cdCAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcblx0ICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuXHQgICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuXHQgIH07XG5cdH07XG5cblx0YXJyYXlJbmNsdWRlcyA9IHtcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuXHQgIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG5cdCAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxuXHR9O1xuXHRyZXR1cm4gYXJyYXlJbmNsdWRlcztcbn1cblxudmFyIG9iamVjdEtleXNJbnRlcm5hbDtcbnZhciBoYXNSZXF1aXJlZE9iamVjdEtleXNJbnRlcm5hbDtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEtleXNJbnRlcm5hbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEtleXNJbnRlcm5hbCkgcmV0dXJuIG9iamVjdEtleXNJbnRlcm5hbDtcblx0aGFzUmVxdWlyZWRPYmplY3RLZXlzSW50ZXJuYWwgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlVG9JbmRleGVkT2JqZWN0KCk7XG5cdHZhciBpbmRleE9mID0gcmVxdWlyZUFycmF5SW5jbHVkZXMoKS5pbmRleE9mO1xuXHR2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmVIaWRkZW5LZXlzKCk7XG5cblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHRvYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuXHQgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG5cdCAgdmFyIGkgPSAwO1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICB2YXIga2V5O1xuXHQgIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcblx0ICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG5cdCAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcblx0ICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIG9iamVjdEtleXNJbnRlcm5hbDtcbn1cblxudmFyIGVudW1CdWdLZXlzO1xudmFyIGhhc1JlcXVpcmVkRW51bUJ1Z0tleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnVtQnVnS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudW1CdWdLZXlzKSByZXR1cm4gZW51bUJ1Z0tleXM7XG5cdGhhc1JlcXVpcmVkRW51bUJ1Z0tleXMgPSAxO1xuXHQvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcblx0ZW51bUJ1Z0tleXMgPSBbXG5cdCAgJ2NvbnN0cnVjdG9yJyxcblx0ICAnaGFzT3duUHJvcGVydHknLFxuXHQgICdpc1Byb3RvdHlwZU9mJyxcblx0ICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHQgICd0b0xvY2FsZVN0cmluZycsXG5cdCAgJ3RvU3RyaW5nJyxcblx0ICAndmFsdWVPZidcblx0XTtcblx0cmV0dXJuIGVudW1CdWdLZXlzO1xufVxuXG52YXIgb2JqZWN0S2V5cztcbnZhciBoYXNSZXF1aXJlZE9iamVjdEtleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RLZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0S2V5cykgcmV0dXJuIG9iamVjdEtleXM7XG5cdGhhc1JlcXVpcmVkT2JqZWN0S2V5cyA9IDE7XG5cdHZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlT2JqZWN0S2V5c0ludGVybmFsKCk7XG5cdHZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmVFbnVtQnVnS2V5cygpO1xuXG5cdC8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcblx0b2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuXHQgIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0S2V5cztcbn1cblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydGllcztcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnRpZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0aWVzKSByZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydGllcztcblx0aGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0aWVzID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmVWOFByb3RvdHlwZURlZmluZUJ1ZygpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlVG9JbmRleGVkT2JqZWN0KCk7XG5cdHZhciBvYmplY3RLZXlzID0gcmVxdWlyZU9iamVjdEtleXMoKTtcblxuXHQvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5cdG9iamVjdERlZmluZVByb3BlcnRpZXMuZiA9IERFU0NSSVBUT1JTICYmICFWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuXHQgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcblx0ICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cdCAgdmFyIGluZGV4ID0gMDtcblx0ICB2YXIga2V5O1xuXHQgIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcblx0ICByZXR1cm4gTztcblx0fTtcblx0cmV0dXJuIG9iamVjdERlZmluZVByb3BlcnRpZXM7XG59XG5cbnZhciBodG1sO1xudmFyIGhhc1JlcXVpcmVkSHRtbDtcblxuZnVuY3Rpb24gcmVxdWlyZUh0bWwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRIdG1sKSByZXR1cm4gaHRtbDtcblx0aGFzUmVxdWlyZWRIdG1sID0gMTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXG5cdGh0bWwgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcblx0cmV0dXJuIGh0bWw7XG59XG5cbnZhciBvYmplY3RDcmVhdGU7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RDcmVhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RDcmVhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RDcmVhdGUpIHJldHVybiBvYmplY3RDcmVhdGU7XG5cdGhhc1JlcXVpcmVkT2JqZWN0Q3JlYXRlID0gMTtcblx0LyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnRpZXMoKTtcblx0dmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZUVudW1CdWdLZXlzKCk7XG5cdHZhciBoaWRkZW5LZXlzID0gcmVxdWlyZUhpZGRlbktleXMoKTtcblx0dmFyIGh0bWwgPSByZXF1aXJlSHRtbCgpO1xuXHR2YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZURvY3VtZW50Q3JlYXRlRWxlbWVudCgpO1xuXHR2YXIgc2hhcmVkS2V5ID0gcmVxdWlyZVNoYXJlZEtleSgpO1xuXG5cdHZhciBHVCA9ICc+Jztcblx0dmFyIExUID0gJzwnO1xuXHR2YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cdHZhciBTQ1JJUFQgPSAnc2NyaXB0Jztcblx0dmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG5cdHZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cdHZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuXHQgIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG5cdH07XG5cblx0Ly8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcblx0dmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG5cdCAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuXHQgIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuXHQgIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuXHQgIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG5cdCAgcmV0dXJuIHRlbXA7XG5cdH07XG5cblx0Ly8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuXHR2YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG5cdCAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cdCAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuXHQgIHZhciBpZnJhbWVEb2N1bWVudDtcblx0ICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cdCAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuXHQgIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuXHQgIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdCAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuXHQgIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG5cdCAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcblx0ICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcblx0fTtcblxuXHQvLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG5cdC8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcblx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG5cdC8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG5cdC8vIGF2b2lkIElFIEdDIGJ1Z1xuXHR2YXIgYWN0aXZlWERvY3VtZW50O1xuXHR2YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgIHRyeSB7XG5cdCAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuXHQgIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuXHQgICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG5cdCAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuXHQgICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG5cdCAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG5cdCAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcblx0ICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcblx0ICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG5cdH07XG5cblx0aGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG5cdC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcblx0b2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuXHQgIHZhciByZXN1bHQ7XG5cdCAgaWYgKE8gIT09IG51bGwpIHtcblx0ICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuXHQgICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcblx0ICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG5cdCAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG5cdCAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcblx0ICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG5cdCAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0Q3JlYXRlO1xufVxuXG52YXIgYWRkVG9VbnNjb3BhYmxlcztcbnZhciBoYXNSZXF1aXJlZEFkZFRvVW5zY29wYWJsZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBZGRUb1Vuc2NvcGFibGVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQWRkVG9VbnNjb3BhYmxlcykgcmV0dXJuIGFkZFRvVW5zY29wYWJsZXM7XG5cdGhhc1JlcXVpcmVkQWRkVG9VbnNjb3BhYmxlcyA9IDE7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpLmY7XG5cblx0dmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xuXHR2YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cblx0Ly8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcblx0aWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgZGVmaW5lUHJvcGVydHkoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG5cdCAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG5cdCAgfSk7XG5cdH1cblxuXHQvLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5cdGFkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xuXHR9O1xuXHRyZXR1cm4gYWRkVG9VbnNjb3BhYmxlcztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJbmRleDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9hcnJheV9sYXN0SW5kZXggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEluZGV4KSByZXR1cm4gZXNuZXh0X2FycmF5X2xhc3RJbmRleDtcblx0aGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEluZGV4ID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZUFkZFRvVW5zY29wYWJsZXMoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXG5cdC8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4YCBnZXR0ZXJcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2tlaXRoYW11cy9wcm9wb3NhbC1hcnJheS1sYXN0XG5cdGlmIChERVNDUklQVE9SUykge1xuXHQgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihBcnJheS5wcm90b3R5cGUsICdsYXN0SW5kZXgnLCB7XG5cdCAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGxhc3RJbmRleCgpIHtcblx0ICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcblx0ICAgICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuXHQgICAgICByZXR1cm4gbGVuID09PSAwID8gMCA6IGxlbiAtIDE7XG5cdCAgICB9XG5cdCAgfSk7XG5cblx0ICBhZGRUb1Vuc2NvcGFibGVzKCdsYXN0SW5kZXgnKTtcblx0fVxuXHRyZXR1cm4gZXNuZXh0X2FycmF5X2xhc3RJbmRleDtcbn1cblxucmVxdWlyZUVzbmV4dF9hcnJheV9sYXN0SW5kZXgoKTtcblxudmFyIGVzbmV4dF9hcnJheV9sYXN0SXRlbSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEl0ZW07XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfYXJyYXlfbGFzdEl0ZW0gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEl0ZW0pIHJldHVybiBlc25leHRfYXJyYXlfbGFzdEl0ZW07XG5cdGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJdGVtID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZUFkZFRvVW5zY29wYWJsZXMoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXG5cdC8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4YCBhY2Nlc3NvclxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20va2VpdGhhbXVzL3Byb3Bvc2FsLWFycmF5LWxhc3Rcblx0aWYgKERFU0NSSVBUT1JTKSB7XG5cdCAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEFycmF5LnByb3RvdHlwZSwgJ2xhc3RJdGVtJywge1xuXHQgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgZ2V0OiBmdW5jdGlvbiBsYXN0SXRlbSgpIHtcblx0ICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcblx0ICAgICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuXHQgICAgICByZXR1cm4gbGVuID09PSAwID8gdW5kZWZpbmVkIDogT1tsZW4gLSAxXTtcblx0ICAgIH0sXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIGxhc3RJdGVtKHZhbHVlKSB7XG5cdCAgICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG5cdCAgICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcblx0ICAgICAgcmV0dXJuIE9bbGVuID09PSAwID8gMCA6IGxlbiAtIDFdID0gdmFsdWU7XG5cdCAgICB9XG5cdCAgfSk7XG5cblx0ICBhZGRUb1Vuc2NvcGFibGVzKCdsYXN0SXRlbScpO1xuXHR9XG5cdHJldHVybiBlc25leHRfYXJyYXlfbGFzdEl0ZW07XG59XG5cbnJlcXVpcmVFc25leHRfYXJyYXlfbGFzdEl0ZW0oKTtcblxudmFyIGVzbmV4dF9jb21wb3NpdGVLZXkgPSB7fTtcblxudmFyIG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHt9O1xuXG52YXIgb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlKSByZXR1cm4gb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGU7XG5cdGhhc1JlcXVpcmVkT2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUgPSAxO1xuXHR2YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0dmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cblx0Ly8gTmFzaG9ybiB+IEpESzggYnVnXG5cdHZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG5cdC8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5cdG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcblx0ICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcblx0ICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcblx0fSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0cmV0dXJuIG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cdGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlT2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUoKTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmVDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKTtcblx0dmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVUb0luZGV4ZWRPYmplY3QoKTtcblx0dmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlVG9Qcm9wZXJ0eUtleSgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmVJZThEb21EZWZpbmUoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuXHQvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuXHRvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG5cdCAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcblx0ICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcblx0ICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG5cdCAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG5cdH07XG5cdHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG59XG5cbnZhciBkZWZpbmVCdWlsdEluO1xudmFyIGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbjtcblxuZnVuY3Rpb24gcmVxdWlyZURlZmluZUJ1aWx0SW4gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREZWZpbmVCdWlsdEluKSByZXR1cm4gZGVmaW5lQnVpbHRJbjtcblx0aGFzUmVxdWlyZWREZWZpbmVCdWlsdEluID0gMTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKTtcblx0dmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZU1ha2VCdWlsdEluKCk7XG5cdHZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmVEZWZpbmVHbG9iYWxQcm9wZXJ0eSgpO1xuXG5cdGRlZmluZUJ1aWx0SW4gPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuXHQgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuXHQgIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG5cdCAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcblx0ICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcblx0ICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcblx0ICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuXHQgICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcblx0ICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG5cdCAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG5cdCAgICAgIHZhbHVlOiB2YWx1ZSxcblx0ICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuXHQgICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcblx0ICAgIH0pO1xuXHQgIH0gcmV0dXJuIE87XG5cdH07XG5cdHJldHVybiBkZWZpbmVCdWlsdEluO1xufVxuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXMpIHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzO1xuXHRoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXMgPSAxO1xuXHR2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZU9iamVjdEtleXNJbnRlcm5hbCgpO1xuXHR2YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlRW51bUJ1Z0tleXMoKTtcblxuXHR2YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5cdC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcblx0b2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG5cdCAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcblx0fTtcblx0cmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5TmFtZXM7XG59XG5cbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzKSByZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHRoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IDE7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcblx0b2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXHRyZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzO1xufVxuXG52YXIgb3duS2V5cztcbnZhciBoYXNSZXF1aXJlZE93bktleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPd25LZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT3duS2V5cykgcmV0dXJuIG93bktleXM7XG5cdGhhc1JlcXVpcmVkT3duS2V5cyA9IDE7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcygpO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5U3ltYm9scygpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuXHQvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5cdG93bktleXMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG5cdCAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcblx0ICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG5cdCAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG5cdH07XG5cdHJldHVybiBvd25LZXlzO1xufVxuXG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcztcbnZhciBoYXNSZXF1aXJlZENvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29weUNvbnN0cnVjdG9yUHJvcGVydGllcykgcmV0dXJuIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXM7XG5cdGhhc1JlcXVpcmVkQ29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IDE7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIG93bktleXMgPSByZXF1aXJlT3duS2V5cygpO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcigpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKTtcblxuXHRjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG5cdCAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG5cdCAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcblx0ICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICB2YXIga2V5ID0ga2V5c1tpXTtcblx0ICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG5cdCAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cdHJldHVybiBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzO1xufVxuXG52YXIgaXNGb3JjZWRfMTtcbnZhciBoYXNSZXF1aXJlZElzRm9yY2VkO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNGb3JjZWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0ZvcmNlZCkgcmV0dXJuIGlzRm9yY2VkXzE7XG5cdGhhc1JlcXVpcmVkSXNGb3JjZWQgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXG5cdHZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cblx0dmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuXHQgIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcblx0ICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuXHQgICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2Vcblx0ICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuXHQgICAgOiAhIWRldGVjdGlvbjtcblx0fTtcblxuXHR2YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHQgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG5cdH07XG5cblx0dmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG5cdHZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG5cdHZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5cdGlzRm9yY2VkXzEgPSBpc0ZvcmNlZDtcblx0cmV0dXJuIGlzRm9yY2VkXzE7XG59XG5cbnZhciBfZXhwb3J0O1xudmFyIGhhc1JlcXVpcmVkX2V4cG9ydDtcblxuZnVuY3Rpb24gcmVxdWlyZV9leHBvcnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRfZXhwb3J0KSByZXR1cm4gX2V4cG9ydDtcblx0aGFzUmVxdWlyZWRfZXhwb3J0ID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcigpLmY7XG5cdHZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCk7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblx0dmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZURlZmluZUdsb2JhbFByb3BlcnR5KCk7XG5cdHZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZUNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoKTtcblx0dmFyIGlzRm9yY2VkID0gcmVxdWlyZUlzRm9yY2VkKCk7XG5cblx0Lypcblx0ICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuXHQgIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3Rcblx0ICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuXHQgIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG5cdCAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG5cdCAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcblx0ICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cblx0ICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG5cdCAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuXHQgIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG5cdCAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG5cdCAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcblx0ICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG5cdCovXG5cdF9leHBvcnQgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG5cdCAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuXHQgIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcblx0ICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuXHQgIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG5cdCAgaWYgKEdMT0JBTCkge1xuXHQgICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcblx0ICB9IGVsc2UgaWYgKFNUQVRJQykge1xuXHQgICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcblx0ICB9XG5cdCAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG5cdCAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuXHQgICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcblx0ICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG5cdCAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuXHQgICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cdCAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuXHQgICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuXHQgICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG5cdCAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcblx0ICAgIH1cblx0ICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcblx0ICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG5cdCAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcblx0ICAgIH1cblx0ICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBfZXhwb3J0O1xufVxuXG52YXIgZnVuY3Rpb25BcHBseTtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uQXBwbHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvbkFwcGx5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25BcHBseSkgcmV0dXJuIGZ1bmN0aW9uQXBwbHk7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25BcHBseSA9IDE7XG5cdHZhciBOQVRJVkVfQklORCA9IHJlcXVpcmVGdW5jdGlvbkJpbmROYXRpdmUoKTtcblxuXHR2YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cdHZhciBhcHBseSA9IEZ1bmN0aW9uUHJvdG90eXBlLmFwcGx5O1xuXHR2YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kLCBlcy9uby1yZWZsZWN0IC0tIHNhZmVcblx0ZnVuY3Rpb25BcHBseSA9IHR5cGVvZiBSZWZsZWN0ID09ICdvYmplY3QnICYmIFJlZmxlY3QuYXBwbHkgfHwgKE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGFwcGx5KSA6IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcblx0fSk7XG5cdHJldHVybiBmdW5jdGlvbkFwcGx5O1xufVxuXG52YXIgZXNfbWFwID0ge307XG5cbnZhciBlc19tYXBfY29uc3RydWN0b3IgPSB7fTtcblxudmFyIGludGVybmFsTWV0YWRhdGEgPSB7ZXhwb3J0czoge319O1xuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0ge307XG5cbnZhciBhcnJheVNsaWNlO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlTbGljZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5U2xpY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheVNsaWNlKSByZXR1cm4gYXJyYXlTbGljZTtcblx0aGFzUmVxdWlyZWRBcnJheVNsaWNlID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHRhcnJheVNsaWNlID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuXHRyZXR1cm4gYXJyYXlTbGljZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsKSByZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsO1xuXHRoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IDE7XG5cdC8qIGVzbGludC1kaXNhYmxlIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmUgKi9cblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXHR2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcygpLmY7XG5cdHZhciBhcnJheVNsaWNlID0gcmVxdWlyZUFycmF5U2xpY2UoKTtcblxuXHR2YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuXHQgID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG5cdHZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gJGdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4gYXJyYXlTbGljZSh3aW5kb3dOYW1lcyk7XG5cdCAgfVxuXHR9O1xuXG5cdC8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcblx0b2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG5cdCAgcmV0dXJuIHdpbmRvd05hbWVzICYmIGNsYXNzb2YoaXQpID09PSAnV2luZG93J1xuXHQgICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcblx0ICAgIDogJGdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG5cdH07XG5cdHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWw7XG59XG5cbnZhciBhcnJheUJ1ZmZlck5vbkV4dGVuc2libGU7XG52YXIgaGFzUmVxdWlyZWRBcnJheUJ1ZmZlck5vbkV4dGVuc2libGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheUJ1ZmZlck5vbkV4dGVuc2libGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheUJ1ZmZlck5vbkV4dGVuc2libGUpIHJldHVybiBhcnJheUJ1ZmZlck5vbkV4dGVuc2libGU7XG5cdGhhc1JlcXVpcmVkQXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlID0gMTtcblx0Ly8gRkYyNi0gYnVnOiBBcnJheUJ1ZmZlcnMgYXJlIG5vbi1leHRlbnNpYmxlLCBidXQgT2JqZWN0LmlzRXh0ZW5zaWJsZSBkb2VzIG5vdCByZXBvcnQgaXRcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0YXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlLCBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuXHQgICAgaWYgKE9iamVjdC5pc0V4dGVuc2libGUoYnVmZmVyKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJ1ZmZlciwgJ2EnLCB7IHZhbHVlOiA4IH0pO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBhcnJheUJ1ZmZlck5vbkV4dGVuc2libGU7XG59XG5cbnZhciBvYmplY3RJc0V4dGVuc2libGU7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RJc0V4dGVuc2libGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RJc0V4dGVuc2libGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RJc0V4dGVuc2libGUpIHJldHVybiBvYmplY3RJc0V4dGVuc2libGU7XG5cdGhhc1JlcXVpcmVkT2JqZWN0SXNFeHRlbnNpYmxlID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cdHZhciBBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUgPSByZXF1aXJlQXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2V4dGVuc2libGUgLS0gc2FmZVxuXHR2YXIgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cdHZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyB9KTtcblxuXHQvLyBgT2JqZWN0LmlzRXh0ZW5zaWJsZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmlzZXh0ZW5zaWJsZVxuXHRvYmplY3RJc0V4dGVuc2libGUgPSAoRkFJTFNfT05fUFJJTUlUSVZFUyB8fCBBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUpID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KSB7XG5cdCAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBmYWxzZTtcblx0ICBpZiAoQVJSQVlfQlVGRkVSX05PTl9FWFRFTlNJQkxFICYmIGNsYXNzb2YoaXQpID09PSAnQXJyYXlCdWZmZXInKSByZXR1cm4gZmFsc2U7XG5cdCAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWU7XG5cdH0gOiAkaXNFeHRlbnNpYmxlO1xuXHRyZXR1cm4gb2JqZWN0SXNFeHRlbnNpYmxlO1xufVxuXG52YXIgZnJlZXppbmc7XG52YXIgaGFzUmVxdWlyZWRGcmVlemluZztcblxuZnVuY3Rpb24gcmVxdWlyZUZyZWV6aW5nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnJlZXppbmcpIHJldHVybiBmcmVlemluZztcblx0aGFzUmVxdWlyZWRGcmVlemluZyA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdGZyZWV6aW5nID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSwgZXMvbm8tb2JqZWN0LXByZXZlbnRleHRlbnNpb25zIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG5cdH0pO1xuXHRyZXR1cm4gZnJlZXppbmc7XG59XG5cbnZhciBoYXNSZXF1aXJlZEludGVybmFsTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlcm5hbE1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSW50ZXJuYWxNZXRhZGF0YSkgcmV0dXJuIGludGVybmFsTWV0YWRhdGEuZXhwb3J0cztcblx0aGFzUmVxdWlyZWRJbnRlcm5hbE1ldGFkYXRhID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmVIaWRkZW5LZXlzKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpLmY7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXMoKTtcblx0dmFyIGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbE1vZHVsZSA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwoKTtcblx0dmFyIGlzRXh0ZW5zaWJsZSA9IHJlcXVpcmVPYmplY3RJc0V4dGVuc2libGUoKTtcblx0dmFyIHVpZCA9IHJlcXVpcmVVaWQoKTtcblx0dmFyIEZSRUVaSU5HID0gcmVxdWlyZUZyZWV6aW5nKCk7XG5cblx0dmFyIFJFUVVJUkVEID0gZmFsc2U7XG5cdHZhciBNRVRBREFUQSA9IHVpZCgnbWV0YScpO1xuXHR2YXIgaWQgPSAwO1xuXG5cdHZhciBzZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGRlZmluZVByb3BlcnR5KGl0LCBNRVRBREFUQSwgeyB2YWx1ZToge1xuXHQgICAgb2JqZWN0SUQ6ICdPJyArIGlkKyssIC8vIG9iamVjdCBJRFxuXHQgICAgd2Vha0RhdGE6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG5cdCAgfSB9KTtcblx0fTtcblxuXHR2YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG5cdCAgLy8gcmV0dXJuIGEgcHJpbWl0aXZlIHdpdGggcHJlZml4XG5cdCAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG5cdCAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuXHQgICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3Rcblx0ICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcblx0ICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG5cdCAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcblx0ICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG5cdCAgICBzZXRNZXRhZGF0YShpdCk7XG5cdCAgLy8gcmV0dXJuIG9iamVjdCBJRFxuXHQgIH0gcmV0dXJuIGl0W01FVEFEQVRBXS5vYmplY3RJRDtcblx0fTtcblxuXHR2YXIgZ2V0V2Vha0RhdGEgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuXHQgIGlmICghaGFzT3duKGl0LCBNRVRBREFUQSkpIHtcblx0ICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG5cdCAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuXHQgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcblx0ICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG5cdCAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuXHQgICAgc2V0TWV0YWRhdGEoaXQpO1xuXHQgIC8vIHJldHVybiB0aGUgc3RvcmUgb2Ygd2VhayBjb2xsZWN0aW9ucyBJRHNcblx0ICB9IHJldHVybiBpdFtNRVRBREFUQV0ud2Vha0RhdGE7XG5cdH07XG5cblx0Ly8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG5cdHZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGlmIChGUkVFWklORyAmJiBSRVFVSVJFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXNPd24oaXQsIE1FVEFEQVRBKSkgc2V0TWV0YWRhdGEoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuXHR2YXIgZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuXHQgIG1ldGEuZW5hYmxlID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXHQgIFJFUVVJUkVEID0gdHJ1ZTtcblx0ICB2YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZjtcblx0ICB2YXIgc3BsaWNlID0gdW5jdXJyeVRoaXMoW10uc3BsaWNlKTtcblx0ICB2YXIgdGVzdCA9IHt9O1xuXHQgIHRlc3RbTUVUQURBVEFdID0gMTtcblxuXHQgIC8vIHByZXZlbnQgZXhwb3Npbmcgb2YgbWV0YWRhdGEga2V5XG5cdCAgaWYgKGdldE93blByb3BlcnR5TmFtZXModGVzdCkubGVuZ3RoKSB7XG5cdCAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgICAgdmFyIHJlc3VsdCA9IGdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuXHQgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHJlc3VsdFtpXSA9PT0gTUVUQURBVEEpIHtcblx0ICAgICAgICAgIHNwbGljZShyZXN1bHQsIGksIDEpO1xuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXG5cdCAgICAkKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICAgICAgZ2V0T3duUHJvcGVydHlOYW1lczogZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsTW9kdWxlLmZcblx0ICAgIH0pO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgbWV0YSA9IGludGVybmFsTWV0YWRhdGEuZXhwb3J0cyA9IHtcblx0ICBlbmFibGU6IGVuYWJsZSxcblx0ICBmYXN0S2V5OiBmYXN0S2V5LFxuXHQgIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcblx0ICBvbkZyZWV6ZTogb25GcmVlemVcblx0fTtcblxuXHRoaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG5cdHJldHVybiBpbnRlcm5hbE1ldGFkYXRhLmV4cG9ydHM7XG59XG5cbnZhciBmdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZTtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlKSByZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZTtcblx0aGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlID0gMTtcblx0dmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdGZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2UgPSBmdW5jdGlvbiAoZm4pIHtcblx0ICAvLyBOYXNob3JuIGJ1Zzpcblx0ICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG5cdCAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuXHQgIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2U7XG59XG5cbnZhciBmdW5jdGlvbkJpbmRDb250ZXh0O1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kQ29udGV4dDtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvbkJpbmRDb250ZXh0KSByZXR1cm4gZnVuY3Rpb25CaW5kQ29udGV4dDtcblx0aGFzUmVxdWlyZWRGdW5jdGlvbkJpbmRDb250ZXh0ID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2UoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZUZ1bmN0aW9uQmluZE5hdGl2ZSgpO1xuXG5cdHZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdGZ1bmN0aW9uQmluZENvbnRleHQgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcblx0ICBhQ2FsbGFibGUoZm4pO1xuXHQgIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuXHQgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uQmluZENvbnRleHQ7XG59XG5cbnZhciBpdGVyYXRvcnM7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRvcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRvcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRvcnMpIHJldHVybiBpdGVyYXRvcnM7XG5cdGhhc1JlcXVpcmVkSXRlcmF0b3JzID0gMTtcblx0aXRlcmF0b3JzID0ge307XG5cdHJldHVybiBpdGVyYXRvcnM7XG59XG5cbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2Q7XG52YXIgaGFzUmVxdWlyZWRJc0FycmF5SXRlcmF0b3JNZXRob2Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0FycmF5SXRlcmF0b3JNZXRob2QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0FycmF5SXRlcmF0b3JNZXRob2QpIHJldHVybiBpc0FycmF5SXRlcmF0b3JNZXRob2Q7XG5cdGhhc1JlcXVpcmVkSXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gMTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmVJdGVyYXRvcnMoKTtcblxuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cdHZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuXHQvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5cdGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xuXHR9O1xuXHRyZXR1cm4gaXNBcnJheUl0ZXJhdG9yTWV0aG9kO1xufVxuXG52YXIgdG9TdHJpbmdUYWdTdXBwb3J0O1xudmFyIGhhc1JlcXVpcmVkVG9TdHJpbmdUYWdTdXBwb3J0O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9TdHJpbmdUYWdTdXBwb3J0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9TdHJpbmdUYWdTdXBwb3J0KSByZXR1cm4gdG9TdHJpbmdUYWdTdXBwb3J0O1xuXHRoYXNSZXF1aXJlZFRvU3RyaW5nVGFnU3VwcG9ydCA9IDE7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cdHZhciB0ZXN0ID0ge307XG5cblx0dGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxuXHR0b1N0cmluZ1RhZ1N1cHBvcnQgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcblx0cmV0dXJuIHRvU3RyaW5nVGFnU3VwcG9ydDtcbn1cblxudmFyIGNsYXNzb2Y7XG52YXIgaGFzUmVxdWlyZWRDbGFzc29mO1xuXG5mdW5jdGlvbiByZXF1aXJlQ2xhc3NvZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENsYXNzb2YpIHJldHVybiBjbGFzc29mO1xuXHRoYXNSZXF1aXJlZENsYXNzb2YgPSAxO1xuXHR2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZVRvU3RyaW5nVGFnU3VwcG9ydCgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBjbGFzc29mUmF3ID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cblx0Ly8gRVMzIHdyb25nIGhlcmVcblx0dmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG5cdHZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gaXRba2V5XTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdH07XG5cblx0Ly8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxuXHRjbGFzc29mID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuXHQgIHZhciBPLCB0YWcsIHJlc3VsdDtcblx0ICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcblx0ICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuXHQgICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuXHQgICAgLy8gYnVpbHRpblRhZyBjYXNlXG5cdCAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuXHQgICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuXHQgICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBjbGFzc29mO1xufVxuXG52YXIgZ2V0SXRlcmF0b3JNZXRob2Q7XG52YXIgaGFzUmVxdWlyZWRHZXRJdGVyYXRvck1ldGhvZDtcblxuZnVuY3Rpb24gcmVxdWlyZUdldEl0ZXJhdG9yTWV0aG9kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JNZXRob2QpIHJldHVybiBnZXRJdGVyYXRvck1ldGhvZDtcblx0aGFzUmVxdWlyZWRHZXRJdGVyYXRvck1ldGhvZCA9IDE7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2YoKTtcblx0dmFyIGdldE1ldGhvZCA9IHJlcXVpcmVHZXRNZXRob2QoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBJdGVyYXRvcnMgPSByZXF1aXJlSXRlcmF0b3JzKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5cdGdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuXHQgICAgfHwgZ2V0TWV0aG9kKGl0LCAnQEBpdGVyYXRvcicpXG5cdCAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xuXHR9O1xuXHRyZXR1cm4gZ2V0SXRlcmF0b3JNZXRob2Q7XG59XG5cbnZhciBnZXRJdGVyYXRvcjtcbnZhciBoYXNSZXF1aXJlZEdldEl0ZXJhdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0SXRlcmF0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRJdGVyYXRvcikgcmV0dXJuIGdldEl0ZXJhdG9yO1xuXHRoYXNSZXF1aXJlZEdldEl0ZXJhdG9yID0gMTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlVHJ5VG9TdHJpbmcoKTtcblx0dmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZUdldEl0ZXJhdG9yTWV0aG9kKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Z2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcblx0ICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG5cdCAgaWYgKGFDYWxsYWJsZShpdGVyYXRvck1ldGhvZCkpIHJldHVybiBhbk9iamVjdChjYWxsKGl0ZXJhdG9yTWV0aG9kLCBhcmd1bWVudCkpO1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG5cdH07XG5cdHJldHVybiBnZXRJdGVyYXRvcjtcbn1cblxudmFyIGl0ZXJhdG9yQ2xvc2U7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRvckNsb3NlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0b3JDbG9zZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdG9yQ2xvc2UpIHJldHVybiBpdGVyYXRvckNsb3NlO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdG9yQ2xvc2UgPSAxO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBnZXRNZXRob2QgPSByZXF1aXJlR2V0TWV0aG9kKCk7XG5cblx0aXRlcmF0b3JDbG9zZSA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcblx0ICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG5cdCAgYW5PYmplY3QoaXRlcmF0b3IpO1xuXHQgIHRyeSB7XG5cdCAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuXHQgICAgaWYgKCFpbm5lclJlc3VsdCkge1xuXHQgICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG5cdCAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH1cblx0ICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICBpbm5lckVycm9yID0gdHJ1ZTtcblx0ICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG5cdCAgfVxuXHQgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcblx0ICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG5cdCAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yQ2xvc2U7XG59XG5cbnZhciBpdGVyYXRlO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRlKSByZXR1cm4gaXRlcmF0ZTtcblx0aGFzUmVxdWlyZWRJdGVyYXRlID0gMTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmVUcnlUb1N0cmluZygpO1xuXHR2YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZUlzQXJyYXlJdGVyYXRvck1ldGhvZCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblx0dmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0SXNQcm90b3R5cGVPZigpO1xuXHR2YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlR2V0SXRlcmF0b3IoKTtcblx0dmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZUdldEl0ZXJhdG9yTWV0aG9kKCk7XG5cdHZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZUl0ZXJhdG9yQ2xvc2UoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHR2YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuXHQgIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG5cdCAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG5cdH07XG5cblx0dmFyIFJlc3VsdFByb3RvdHlwZSA9IFJlc3VsdC5wcm90b3R5cGU7XG5cblx0aXRlcmF0ZSA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG5cdCAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcblx0ICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcblx0ICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG5cdCAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcblx0ICB2YXIgSU5URVJSVVBURUQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSU5URVJSVVBURUQpO1xuXHQgIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcblx0ICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG5cdCAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG5cdCAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuXHQgICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcblx0ICB9O1xuXG5cdCAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgaWYgKEFTX0VOVFJJRVMpIHtcblx0ICAgICAgYW5PYmplY3QodmFsdWUpO1xuXHQgICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcblx0ICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuXHQgIH07XG5cblx0ICBpZiAoSVNfUkVDT1JEKSB7XG5cdCAgICBpdGVyYXRvciA9IGl0ZXJhYmxlLml0ZXJhdG9yO1xuXHQgIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcblx0ICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcblx0ICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuXHQgICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcblx0ICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuXHQgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuXHQgICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuXHQgICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG5cdCAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuXHQgICAgfVxuXHQgICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcblx0ICB9XG5cblx0ICBuZXh0ID0gSVNfUkVDT1JEID8gaXRlcmFibGUubmV4dCA6IGl0ZXJhdG9yLm5leHQ7XG5cdCAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG5cdCAgICB0cnkge1xuXHQgICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG5cdCAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG5cdCAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG5cdH07XG5cdHJldHVybiBpdGVyYXRlO1xufVxuXG52YXIgYW5JbnN0YW5jZTtcbnZhciBoYXNSZXF1aXJlZEFuSW5zdGFuY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBbkluc3RhbmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQW5JbnN0YW5jZSkgcmV0dXJuIGFuSW5zdGFuY2U7XG5cdGhhc1JlcXVpcmVkQW5JbnN0YW5jZSA9IDE7XG5cdHZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdElzUHJvdG90eXBlT2YoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHRhbkluc3RhbmNlID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcblx0ICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuXHR9O1xuXHRyZXR1cm4gYW5JbnN0YW5jZTtcbn1cblxudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbjtcbnZhciBoYXNSZXF1aXJlZENoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbikgcmV0dXJuIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbjtcblx0aGFzUmVxdWlyZWRDaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSAxO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblx0dmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG5cdHRyeSB7XG5cdCAgdmFyIGNhbGxlZCA9IDA7XG5cdCAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcblx0ICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuXHQgICAgfSxcblx0ICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG5cdCAgICB9XG5cdCAgfTtcblx0ICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfTtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSwgbm8tdGhyb3ctbGl0ZXJhbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xuXHR9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cblx0Y2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuXHQgIHRyeSB7XG5cdCAgICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIHdvcmthcm91bmQgb2Ygb2xkIFdlYktpdCArIGBldmFsYCBidWdcblx0ICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcblx0ICB0cnkge1xuXHQgICAgdmFyIG9iamVjdCA9IHt9O1xuXHQgICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9O1xuXHQgICAgZXhlYyhvYmplY3QpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG5cdH07XG5cdHJldHVybiBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb247XG59XG5cbnZhciBzZXRUb1N0cmluZ1RhZztcbnZhciBoYXNSZXF1aXJlZFNldFRvU3RyaW5nVGFnO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0VG9TdHJpbmdUYWcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRUb1N0cmluZ1RhZykgcmV0dXJuIHNldFRvU3RyaW5nVGFnO1xuXHRoYXNSZXF1aXJlZFNldFRvU3RyaW5nVGFnID0gMTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCkuZjtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5cdHNldFRvU3RyaW5nVGFnID0gZnVuY3Rpb24gKHRhcmdldCwgVEFHLCBTVEFUSUMpIHtcblx0ICBpZiAodGFyZ2V0ICYmICFTVEFUSUMpIHRhcmdldCA9IHRhcmdldC5wcm90b3R5cGU7XG5cdCAgaWYgKHRhcmdldCAmJiAhaGFzT3duKHRhcmdldCwgVE9fU1RSSU5HX1RBRykpIHtcblx0ICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gc2V0VG9TdHJpbmdUYWc7XG59XG5cbnZhciBmdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3I7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IpIHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3I7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblxuXHRmdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIG1ldGhvZCkge1xuXHQgIHRyeSB7XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdCAgICByZXR1cm4gdW5jdXJyeVRoaXMoYUNhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpW21ldGhvZF0pKTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdH07XG5cdHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3I7XG59XG5cbnZhciBpc1Bvc3NpYmxlUHJvdG90eXBlO1xudmFyIGhhc1JlcXVpcmVkSXNQb3NzaWJsZVByb3RvdHlwZTtcblxuZnVuY3Rpb24gcmVxdWlyZUlzUG9zc2libGVQcm90b3R5cGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc1Bvc3NpYmxlUHJvdG90eXBlKSByZXR1cm4gaXNQb3NzaWJsZVByb3RvdHlwZTtcblx0aGFzUmVxdWlyZWRJc1Bvc3NpYmxlUHJvdG90eXBlID0gMTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0aXNQb3NzaWJsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHJldHVybiBpc09iamVjdChhcmd1bWVudCkgfHwgYXJndW1lbnQgPT09IG51bGw7XG5cdH07XG5cdHJldHVybiBpc1Bvc3NpYmxlUHJvdG90eXBlO1xufVxuXG52YXIgYVBvc3NpYmxlUHJvdG90eXBlO1xudmFyIGhhc1JlcXVpcmVkQVBvc3NpYmxlUHJvdG90eXBlO1xuXG5mdW5jdGlvbiByZXF1aXJlQVBvc3NpYmxlUHJvdG90eXBlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQVBvc3NpYmxlUHJvdG90eXBlKSByZXR1cm4gYVBvc3NpYmxlUHJvdG90eXBlO1xuXHRoYXNSZXF1aXJlZEFQb3NzaWJsZVByb3RvdHlwZSA9IDE7XG5cdHZhciBpc1Bvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZUlzUG9zc2libGVQcm90b3R5cGUoKTtcblxuXHR2YXIgJFN0cmluZyA9IFN0cmluZztcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0YVBvc3NpYmxlUHJvdG90eXBlID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgaWYgKGlzUG9zc2libGVQcm90b3R5cGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyAkU3RyaW5nKGFyZ3VtZW50KSArICcgYXMgYSBwcm90b3R5cGUnKTtcblx0fTtcblx0cmV0dXJuIGFQb3NzaWJsZVByb3RvdHlwZTtcbn1cblxudmFyIG9iamVjdFNldFByb3RvdHlwZU9mO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0U2V0UHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RTZXRQcm90b3R5cGVPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdFNldFByb3RvdHlwZU9mKSByZXR1cm4gb2JqZWN0U2V0UHJvdG90eXBlT2Y7XG5cdGhhc1JlcXVpcmVkT2JqZWN0U2V0UHJvdG90eXBlT2YgPSAxO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG5cdHZhciB1bmN1cnJ5VGhpc0FjY2Vzc29yID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvcigpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXHR2YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZUFQb3NzaWJsZVByb3RvdHlwZSgpO1xuXG5cdC8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuXHQvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5cdG9iamVjdFNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcblx0ICB2YXIgdGVzdCA9IHt9O1xuXHQgIHZhciBzZXR0ZXI7XG5cdCAgdHJ5IHtcblx0ICAgIHNldHRlciA9IHVuY3VycnlUaGlzQWNjZXNzb3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycsICdzZXQnKTtcblx0ICAgIHNldHRlcih0ZXN0LCBbXSk7XG5cdCAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG5cdCAgICByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKE8pO1xuXHQgICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcblx0ICAgIGlmICghaXNPYmplY3QoTykpIHJldHVybiBPO1xuXHQgICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIoTywgcHJvdG8pO1xuXHQgICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuXHQgICAgcmV0dXJuIE87XG5cdCAgfTtcblx0fSgpIDogdW5kZWZpbmVkKTtcblx0cmV0dXJuIG9iamVjdFNldFByb3RvdHlwZU9mO1xufVxuXG52YXIgaW5oZXJpdElmUmVxdWlyZWQ7XG52YXIgaGFzUmVxdWlyZWRJbmhlcml0SWZSZXF1aXJlZDtcblxuZnVuY3Rpb24gcmVxdWlyZUluaGVyaXRJZlJlcXVpcmVkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSW5oZXJpdElmUmVxdWlyZWQpIHJldHVybiBpbmhlcml0SWZSZXF1aXJlZDtcblx0aGFzUmVxdWlyZWRJbmhlcml0SWZSZXF1aXJlZCA9IDE7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RTZXRQcm90b3R5cGVPZigpO1xuXG5cdC8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcblx0aW5oZXJpdElmUmVxdWlyZWQgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG5cdCAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuXHQgIGlmIChcblx0ICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuXHQgICAgc2V0UHJvdG90eXBlT2YgJiZcblx0ICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcblx0ICAgIGlzQ2FsbGFibGUoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpICYmXG5cdCAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcblx0ICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG5cdCAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG5cdCAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcblx0ICByZXR1cm4gJHRoaXM7XG5cdH07XG5cdHJldHVybiBpbmhlcml0SWZSZXF1aXJlZDtcbn1cblxudmFyIGNvbGxlY3Rpb247XG52YXIgaGFzUmVxdWlyZWRDb2xsZWN0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29sbGVjdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbGxlY3Rpb24pIHJldHVybiBjb2xsZWN0aW9uO1xuXHRoYXNSZXF1aXJlZENvbGxlY3Rpb24gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGlzRm9yY2VkID0gcmVxdWlyZUlzRm9yY2VkKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblx0dmFyIEludGVybmFsTWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxNZXRhZGF0YSgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBhbkluc3RhbmNlID0gcmVxdWlyZUFuSW5zdGFuY2UoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZUNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbigpO1xuXHR2YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlU2V0VG9TdHJpbmdUYWcoKTtcblx0dmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZUluaGVyaXRJZlJlcXVpcmVkKCk7XG5cblx0Y29sbGVjdGlvbiA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FLCB3cmFwcGVyLCBjb21tb24pIHtcblx0ICB2YXIgSVNfTUFQID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdNYXAnKSAhPT0gLTE7XG5cdCAgdmFyIElTX1dFQUsgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ1dlYWsnKSAhPT0gLTE7XG5cdCAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcblx0ICB2YXIgTmF0aXZlQ29uc3RydWN0b3IgPSBnbG9iYWxUaGlzW0NPTlNUUlVDVE9SX05BTUVdO1xuXHQgIHZhciBOYXRpdmVQcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3RvciAmJiBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdCAgdmFyIENvbnN0cnVjdG9yID0gTmF0aXZlQ29uc3RydWN0b3I7XG5cdCAgdmFyIGV4cG9ydGVkID0ge307XG5cblx0ICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuXHQgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKE5hdGl2ZVByb3RvdHlwZVtLRVldKTtcblx0ICAgIGRlZmluZUJ1aWx0SW4oTmF0aXZlUHJvdG90eXBlLCBLRVksXG5cdCAgICAgIEtFWSA9PT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQodmFsdWUpIHtcblx0ICAgICAgICB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywgdmFsdWUgPT09IDAgPyAwIDogdmFsdWUpO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICB9IDogS0VZID09PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuXHQgICAgICB9IDogS0VZID09PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IHVuZGVmaW5lZCA6IHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcblx0ICAgICAgfSA6IEtFWSA9PT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcblx0ICAgICAgfSA6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdCAgICAgICAgdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgfVxuXHQgICAgKTtcblx0ICB9O1xuXG5cdCAgdmFyIFJFUExBQ0UgPSBpc0ZvcmNlZChcblx0ICAgIENPTlNUUlVDVE9SX05BTUUsXG5cdCAgICAhaXNDYWxsYWJsZShOYXRpdmVDb25zdHJ1Y3RvcikgfHwgIShJU19XRUFLIHx8IE5hdGl2ZVByb3RvdHlwZS5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgICAgIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLmVudHJpZXMoKS5uZXh0KCk7XG5cdCAgICB9KSlcblx0ICApO1xuXG5cdCAgaWYgKFJFUExBQ0UpIHtcblx0ICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG5cdCAgICBDb25zdHJ1Y3RvciA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKTtcblx0ICAgIEludGVybmFsTWV0YWRhdGFNb2R1bGUuZW5hYmxlKCk7XG5cdCAgfSBlbHNlIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0cnVlKSkge1xuXHQgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG5cdCAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG5cdCAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9PSBpbnN0YW5jZTtcblx0ICAgIC8vIFY4IH4gQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG5cdCAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG5cdCAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9IGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGl0ZXJhYmxlKTsgfSk7XG5cdCAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcblx0ICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcblx0ICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuXHQgICAgICB2YXIgaW5kZXggPSA1O1xuXHQgICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuXHQgICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuXHQgICAgfSk7XG5cblx0ICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuXHQgICAgICBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKGR1bW15LCBpdGVyYWJsZSkge1xuXHQgICAgICAgIGFuSW5zdGFuY2UoZHVtbXksIE5hdGl2ZVByb3RvdHlwZSk7XG5cdCAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlQ29uc3RydWN0b3IoKSwgZHVtbXksIENvbnN0cnVjdG9yKTtcblx0ICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0ZXJhYmxlKSkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHsgdGhhdDogdGhhdCwgQVNfRU5UUklFUzogSVNfTUFQIH0pO1xuXHQgICAgICAgIHJldHVybiB0aGF0O1xuXHQgICAgICB9KTtcblx0ICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gTmF0aXZlUHJvdG90eXBlO1xuXHQgICAgICBOYXRpdmVQcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvcjtcblx0ICAgIH1cblxuXHQgICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcblx0ICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcblx0ICAgICAgZml4TWV0aG9kKCdoYXMnKTtcblx0ICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuXG5cdCAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuXHQgICAgaWYgKElTX1dFQUsgJiYgTmF0aXZlUHJvdG90eXBlLmNsZWFyKSBkZWxldGUgTmF0aXZlUHJvdG90eXBlLmNsZWFyO1xuXHQgIH1cblxuXHQgIGV4cG9ydGVkW0NPTlNUUlVDVE9SX05BTUVdID0gQ29uc3RydWN0b3I7XG5cdCAgJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogQ29uc3RydWN0b3IgIT09IE5hdGl2ZUNvbnN0cnVjdG9yIH0sIGV4cG9ydGVkKTtcblxuXHQgIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcblxuXHQgIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKTtcblxuXHQgIHJldHVybiBDb25zdHJ1Y3Rvcjtcblx0fTtcblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbnZhciBkZWZpbmVCdWlsdElucztcbnZhciBoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5zO1xuXG5mdW5jdGlvbiByZXF1aXJlRGVmaW5lQnVpbHRJbnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREZWZpbmVCdWlsdElucykgcmV0dXJuIGRlZmluZUJ1aWx0SW5zO1xuXHRoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5zID0gMTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXG5cdGRlZmluZUJ1aWx0SW5zID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG5cdCAgZm9yICh2YXIga2V5IGluIHNyYykgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuXHQgIHJldHVybiB0YXJnZXQ7XG5cdH07XG5cdHJldHVybiBkZWZpbmVCdWlsdElucztcbn1cblxudmFyIGNvcnJlY3RQcm90b3R5cGVHZXR0ZXI7XG52YXIgaGFzUmVxdWlyZWRDb3JyZWN0UHJvdG90eXBlR2V0dGVyO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29ycmVjdFByb3RvdHlwZUdldHRlciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvcnJlY3RQcm90b3R5cGVHZXR0ZXIpIHJldHVybiBjb3JyZWN0UHJvdG90eXBlR2V0dGVyO1xuXHRoYXNSZXF1aXJlZENvcnJlY3RQcm90b3R5cGVHZXR0ZXIgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHRjb3JyZWN0UHJvdG90eXBlR2V0dGVyID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG5cdCAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcblx0fSk7XG5cdHJldHVybiBjb3JyZWN0UHJvdG90eXBlR2V0dGVyO1xufVxuXG52YXIgb2JqZWN0R2V0UHJvdG90eXBlT2Y7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RHZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0R2V0UHJvdG90eXBlT2YpIHJldHVybiBvYmplY3RHZXRQcm90b3R5cGVPZjtcblx0aGFzUmVxdWlyZWRPYmplY3RHZXRQcm90b3R5cGVPZiA9IDE7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIHNoYXJlZEtleSA9IHJlcXVpcmVTaGFyZWRLZXkoKTtcblx0dmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmVDb3JyZWN0UHJvdG90eXBlR2V0dGVyKCk7XG5cblx0dmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0dmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG5cdC8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcblx0b2JqZWN0R2V0UHJvdG90eXBlT2YgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyAkT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcblx0ICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG5cdCAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG5cdCAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuXHQgIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuXHQgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0ICB9IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiAkT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcblx0fTtcblx0cmV0dXJuIG9iamVjdEdldFByb3RvdHlwZU9mO1xufVxuXG52YXIgaXRlcmF0b3JzQ29yZTtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdG9yc0NvcmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRvcnNDb3JlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0b3JzQ29yZSkgcmV0dXJuIGl0ZXJhdG9yc0NvcmU7XG5cdGhhc1JlcXVpcmVkSXRlcmF0b3JzQ29yZSA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXHR2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgSVNfUFVSRSA9IHJlcXVpcmVJc1B1cmUoKTtcblxuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cdHZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cblx0Ly8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG5cdHZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cblx0aWYgKFtdLmtleXMpIHtcblx0ICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuXHQgIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuXHQgIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG5cdCAgZWxzZSB7XG5cdCAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG5cdCAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcblx0ICB9XG5cdH1cblxuXHR2YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHZhciB0ZXN0ID0ge307XG5cdCAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG5cdCAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xuXHR9KTtcblxuXHRpZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblx0ZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG5cdC8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuXHRpZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuXHQgIGRlZmluZUJ1aWx0SW4oSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gdGhpcztcblx0ICB9KTtcblx0fVxuXG5cdGl0ZXJhdG9yc0NvcmUgPSB7XG5cdCAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuXHQgIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yc0NvcmU7XG59XG5cbnZhciBpdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yKSByZXR1cm4gaXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yID0gMTtcblx0dmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZUl0ZXJhdG9yc0NvcmUoKS5JdGVyYXRvclByb3RvdHlwZTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmVDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKTtcblx0dmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZVNldFRvU3RyaW5nVGFnKCk7XG5cdHZhciBJdGVyYXRvcnMgPSByZXF1aXJlSXRlcmF0b3JzKCk7XG5cblx0dmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5cdGl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgRU5VTUVSQUJMRV9ORVhUKSB7XG5cdCAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG5cdCAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCshRU5VTUVSQUJMRV9ORVhULCBuZXh0KSB9KTtcblx0ICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG5cdCAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcblx0ICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3I7XG59XG5cbnZhciBpdGVyYXRvckRlZmluZTtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdG9yRGVmaW5lO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0b3JEZWZpbmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRvckRlZmluZSkgcmV0dXJuIGl0ZXJhdG9yRGVmaW5lO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdG9yRGVmaW5lID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIElTX1BVUkUgPSByZXF1aXJlSXNQdXJlKCk7XG5cdHZhciBGdW5jdGlvbk5hbWUgPSByZXF1aXJlRnVuY3Rpb25OYW1lKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcigpO1xuXHR2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YoKTtcblx0dmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdFNldFByb3RvdHlwZU9mKCk7XG5cdHZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmVTZXRUb1N0cmluZ1RhZygpO1xuXHR2YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZUNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBJdGVyYXRvcnMgPSByZXF1aXJlSXRlcmF0b3JzKCk7XG5cdHZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZUl0ZXJhdG9yc0NvcmUoKTtcblxuXHR2YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuUFJPUEVSO1xuXHR2YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuQ09ORklHVVJBQkxFO1xuXHR2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xuXHR2YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXHR2YXIgS0VZUyA9ICdrZXlzJztcblx0dmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXHR2YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxuXHR2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cblx0aXRlcmF0b3JEZWZpbmUgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG5cdCAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuXHQgIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuXHQgICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuXHQgICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuXG5cdCAgICBzd2l0Y2ggKEtJTkQpIHtcblx0ICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuXHQgICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuXHQgICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcblx0ICB9O1xuXG5cdCAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG5cdCAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuXHQgIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcblx0ICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cblx0ICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cblx0ICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG5cdCAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcblx0ICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuXHQgIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuXHQgIC8vIGZpeCBuYXRpdmVcblx0ICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcblx0ICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcblx0ICAgIGlmIChDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcblx0ICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG5cdCAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG5cdCAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG5cdCAgICAgICAgICBkZWZpbmVCdWlsdEluKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG5cdCAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG5cdCAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIGZpeCBBcnJheS5wcm90b3R5cGUueyB2YWx1ZXMsIEBAaXRlcmF0b3IgfS5uYW1lIGluIFY4IC8gRkZcblx0ICBpZiAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgREVGQVVMVCA9PT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuXHQgICAgaWYgKCFJU19QVVJFICYmIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FKSB7XG5cdCAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgJ25hbWUnLCBWQUxVRVMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcblx0ICAgICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gY2FsbChuYXRpdmVJdGVyYXRvciwgdGhpcyk7IH07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuXHQgIGlmIChERUZBVUxUKSB7XG5cdCAgICBtZXRob2RzID0ge1xuXHQgICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuXHQgICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG5cdCAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuXHQgICAgfTtcblx0ICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcblx0ICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuXHQgICAgICAgIGRlZmluZUJ1aWx0SW4oSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuXHQgIH1cblxuXHQgIC8vIGRlZmluZSBpdGVyYXRvclxuXHQgIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuXHQgICAgZGVmaW5lQnVpbHRJbihJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvciwgeyBuYW1lOiBERUZBVUxUIH0pO1xuXHQgIH1cblx0ICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cblx0ICByZXR1cm4gbWV0aG9kcztcblx0fTtcblx0cmV0dXJuIGl0ZXJhdG9yRGVmaW5lO1xufVxuXG52YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdDtcbnZhciBoYXNSZXF1aXJlZENyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVhdGVJdGVyUmVzdWx0T2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ3JlYXRlSXRlclJlc3VsdE9iamVjdCkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q7XG5cdGhhc1JlcXVpcmVkQ3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IDE7XG5cdC8vIGBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5cdGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWUsIGRvbmUpIHtcblx0ICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcblx0fTtcblx0cmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q7XG59XG5cbnZhciBzZXRTcGVjaWVzO1xudmFyIGhhc1JlcXVpcmVkU2V0U3BlY2llcztcblxuZnVuY3Rpb24gcmVxdWlyZVNldFNwZWNpZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRTcGVjaWVzKSByZXR1cm4gc2V0U3BlY2llcztcblx0aGFzUmVxdWlyZWRTZXRTcGVjaWVzID0gMTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblxuXHR2YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5cdHNldFNwZWNpZXMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuXHQgIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG5cblx0ICBpZiAoREVTQ1JJUFRPUlMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVNdKSB7XG5cdCAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoQ29uc3RydWN0b3IsIFNQRUNJRVMsIHtcblx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cblx0ICAgIH0pO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIHNldFNwZWNpZXM7XG59XG5cbnZhciBjb2xsZWN0aW9uU3Ryb25nO1xudmFyIGhhc1JlcXVpcmVkQ29sbGVjdGlvblN0cm9uZztcblxuZnVuY3Rpb24gcmVxdWlyZUNvbGxlY3Rpb25TdHJvbmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb2xsZWN0aW9uU3Ryb25nKSByZXR1cm4gY29sbGVjdGlvblN0cm9uZztcblx0aGFzUmVxdWlyZWRDb2xsZWN0aW9uU3Ryb25nID0gMTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZURlZmluZUJ1aWx0SW5zKCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlQW5JbnN0YW5jZSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlSXRlcmF0b3JEZWZpbmUoKTtcblx0dmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlQ3JlYXRlSXRlclJlc3VsdE9iamVjdCgpO1xuXHR2YXIgc2V0U3BlY2llcyA9IHJlcXVpcmVTZXRTcGVjaWVzKCk7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgZmFzdEtleSA9IHJlcXVpcmVJbnRlcm5hbE1ldGFkYXRhKCkuZmFzdEtleTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXG5cdHZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cdHZhciBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3I7XG5cblx0Y29sbGVjdGlvblN0cm9uZyA9IHtcblx0ICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpIHtcblx0ICAgIHZhciBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG5cdCAgICAgIGFuSW5zdGFuY2UodGhhdCwgUHJvdG90eXBlKTtcblx0ICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG5cdCAgICAgICAgdHlwZTogQ09OU1RSVUNUT1JfTkFNRSxcblx0ICAgICAgICBpbmRleDogY3JlYXRlKG51bGwpLFxuXHQgICAgICAgIGZpcnN0OiBudWxsLFxuXHQgICAgICAgIGxhc3Q6IG51bGwsXG5cdCAgICAgICAgc2l6ZTogMFxuXHQgICAgICB9KTtcblx0ICAgICAgaWYgKCFERVNDUklQVE9SUykgdGhhdC5zaXplID0gMDtcblx0ICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB7IHRoYXQ6IHRoYXQsIEFTX0VOVFJJRVM6IElTX01BUCB9KTtcblx0ICAgIH0pO1xuXG5cdCAgICB2YXIgUHJvdG90eXBlID0gQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5cdCAgICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cblx0ICAgIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuXHQgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuXHQgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuXHQgICAgICB2YXIgcHJldmlvdXMsIGluZGV4O1xuXHQgICAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcblx0ICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgZW50cnkudmFsdWUgPSB2YWx1ZTtcblx0ICAgICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHN0YXRlLmxhc3QgPSBlbnRyeSA9IHtcblx0ICAgICAgICAgIGluZGV4OiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSxcblx0ICAgICAgICAgIGtleToga2V5LFxuXHQgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuXHQgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzID0gc3RhdGUubGFzdCxcblx0ICAgICAgICAgIG5leHQ6IG51bGwsXG5cdCAgICAgICAgICByZW1vdmVkOiBmYWxzZVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgaWYgKCFzdGF0ZS5maXJzdCkgc3RhdGUuZmlyc3QgPSBlbnRyeTtcblx0ICAgICAgICBpZiAocHJldmlvdXMpIHByZXZpb3VzLm5leHQgPSBlbnRyeTtcblx0ICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUrKztcblx0ICAgICAgICBlbHNlIHRoYXQuc2l6ZSsrO1xuXHQgICAgICAgIC8vIGFkZCB0byBpbmRleFxuXHQgICAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSBzdGF0ZS5pbmRleFtpbmRleF0gPSBlbnRyeTtcblx0ICAgICAgfSByZXR1cm4gdGhhdDtcblx0ICAgIH07XG5cblx0ICAgIHZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcblx0ICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcblx0ICAgICAgLy8gZmFzdCBjYXNlXG5cdCAgICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcblx0ICAgICAgdmFyIGVudHJ5O1xuXHQgICAgICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHN0YXRlLmluZGV4W2luZGV4XTtcblx0ICAgICAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG5cdCAgICAgIGZvciAoZW50cnkgPSBzdGF0ZS5maXJzdDsgZW50cnk7IGVudHJ5ID0gZW50cnkubmV4dCkge1xuXHQgICAgICAgIGlmIChlbnRyeS5rZXkgPT09IGtleSkgcmV0dXJuIGVudHJ5O1xuXHQgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIHtcblx0ICAgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUuY2xlYXIoKWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuY2xlYXJcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmNsZWFyXG5cdCAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcblx0ICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcblx0ICAgICAgICB2YXIgZW50cnkgPSBzdGF0ZS5maXJzdDtcblx0ICAgICAgICB3aGlsZSAoZW50cnkpIHtcblx0ICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgaWYgKGVudHJ5LnByZXZpb3VzKSBlbnRyeS5wcmV2aW91cyA9IGVudHJ5LnByZXZpb3VzLm5leHQgPSBudWxsO1xuXHQgICAgICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBzdGF0ZS5maXJzdCA9IHN0YXRlLmxhc3QgPSBudWxsO1xuXHQgICAgICAgIHN0YXRlLmluZGV4ID0gY3JlYXRlKG51bGwpO1xuXHQgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSA9IDA7XG5cdCAgICAgICAgZWxzZSB0aGF0LnNpemUgPSAwO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyBgeyBNYXAsIFNldCB9LnByb3RvdHlwZS5kZWxldGUoa2V5KWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZGVsZXRlXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5kZWxldGVcblx0ICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcblx0ICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuXHQgICAgICAgIGlmIChlbnRyeSkge1xuXHQgICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uZXh0O1xuXHQgICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wcmV2aW91cztcblx0ICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5pbmRleFtlbnRyeS5pbmRleF07XG5cdCAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcblx0ICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm5leHQgPSBuZXh0O1xuXHQgICAgICAgICAgaWYgKG5leHQpIG5leHQucHJldmlvdXMgPSBwcmV2O1xuXHQgICAgICAgICAgaWYgKHN0YXRlLmZpcnN0ID09PSBlbnRyeSkgc3RhdGUuZmlyc3QgPSBuZXh0O1xuXHQgICAgICAgICAgaWYgKHN0YXRlLmxhc3QgPT09IGVudHJ5KSBzdGF0ZS5sYXN0ID0gcHJldjtcblx0ICAgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZS0tO1xuXHQgICAgICAgICAgZWxzZSB0aGF0LnNpemUtLTtcblx0ICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuXHQgICAgICB9LFxuXHQgICAgICAvLyBgeyBNYXAsIFNldCB9LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5mb3JlYWNoXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5mb3JlYWNoXG5cdCAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICAgICAgdmFyIGVudHJ5O1xuXHQgICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLmZpcnN0KSB7XG5cdCAgICAgICAgICBib3VuZEZ1bmN0aW9uKGVudHJ5LnZhbHVlLCBlbnRyeS5rZXksIHRoaXMpO1xuXHQgICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG5cdCAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcblx0ICAgICAgICB9XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGB7IE1hcCwgU2V0fS5wcm90b3R5cGUuaGFzKGtleSlgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmhhc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuaGFzXG5cdCAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuXHQgICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIElTX01BUCA/IHtcblx0ICAgICAgLy8gYE1hcC5wcm90b3R5cGUuZ2V0KGtleSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZ2V0XG5cdCAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuXHQgICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoaXMsIGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnZhbHVlO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyBgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuc2V0XG5cdCAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcblx0ICAgICAgfVxuXHQgICAgfSA6IHtcblx0ICAgICAgLy8gYFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5hZGRcblx0ICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihQcm90b3R5cGUsICdzaXplJywge1xuXHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNpemU7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuXHQgIH0sXG5cdCAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCkge1xuXHQgICAgdmFyIElURVJBVE9SX05BTUUgPSBDT05TVFJVQ1RPUl9OQU1FICsgJyBJdGVyYXRvcic7XG5cdCAgICB2YXIgZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXHQgICAgdmFyIGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoSVRFUkFUT1JfTkFNRSk7XG5cdCAgICAvLyBgeyBNYXAsIFNldCB9LnByb3RvdHlwZS57IGtleXMsIHZhbHVlcywgZW50cmllcywgQEBpdGVyYXRvciB9KClgIG1ldGhvZHNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5lbnRyaWVzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUua2V5c1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLnZhbHVlc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLUBAaXRlcmF0b3Jcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5lbnRyaWVzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUua2V5c1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLnZhbHVlc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLUBAaXRlcmF0b3Jcblx0ICAgIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcblx0ICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG5cdCAgICAgICAgdHlwZTogSVRFUkFUT1JfTkFNRSxcblx0ICAgICAgICB0YXJnZXQ6IGl0ZXJhdGVkLFxuXHQgICAgICAgIHN0YXRlOiBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZShpdGVyYXRlZCksXG5cdCAgICAgICAga2luZDoga2luZCxcblx0ICAgICAgICBsYXN0OiBudWxsXG5cdCAgICAgIH0pO1xuXHQgICAgfSwgZnVuY3Rpb24gKCkge1xuXHQgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUodGhpcyk7XG5cdCAgICAgIHZhciBraW5kID0gc3RhdGUua2luZDtcblx0ICAgICAgdmFyIGVudHJ5ID0gc3RhdGUubGFzdDtcblx0ICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG5cdCAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuXHQgICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuXHQgICAgICBpZiAoIXN0YXRlLnRhcmdldCB8fCAhKHN0YXRlLmxhc3QgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLnN0YXRlLmZpcnN0KSkge1xuXHQgICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG5cdCAgICAgICAgc3RhdGUudGFyZ2V0ID0gbnVsbDtcblx0ICAgICAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcblx0ICAgICAgaWYgKGtpbmQgPT09ICdrZXlzJykgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoZW50cnkua2V5LCBmYWxzZSk7XG5cdCAgICAgIGlmIChraW5kID09PSAndmFsdWVzJykgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoZW50cnkudmFsdWUsIGZhbHNlKTtcblx0ICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoW2VudHJ5LmtleSwgZW50cnkudmFsdWVdLCBmYWxzZSk7XG5cdCAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cblx0ICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlW0BAc3BlY2llc11gIGFjY2Vzc29yc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtbWFwLUBAc3BlY2llc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtc2V0LUBAc3BlY2llc1xuXHQgICAgc2V0U3BlY2llcyhDT05TVFJVQ1RPUl9OQU1FKTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBjb2xsZWN0aW9uU3Ryb25nO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc19tYXBfY29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc19tYXBfY29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc19tYXBfY29uc3RydWN0b3IpIHJldHVybiBlc19tYXBfY29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkRXNfbWFwX2NvbnN0cnVjdG9yID0gMTtcblx0dmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlQ29sbGVjdGlvbigpO1xuXHR2YXIgY29sbGVjdGlvblN0cm9uZyA9IHJlcXVpcmVDb2xsZWN0aW9uU3Ryb25nKCk7XG5cblx0Ly8gYE1hcGAgY29uc3RydWN0b3Jcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAtb2JqZWN0c1xuXHRjb2xsZWN0aW9uKCdNYXAnLCBmdW5jdGlvbiAoaW5pdCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xuXHR9LCBjb2xsZWN0aW9uU3Ryb25nKTtcblx0cmV0dXJuIGVzX21hcF9jb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfbWFwO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfbWFwICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfbWFwKSByZXR1cm4gZXNfbWFwO1xuXHRoYXNSZXF1aXJlZEVzX21hcCA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgcmVwbGFjZWQgdG8gbW9kdWxlIGJlbG93XG5cdHJlcXVpcmVFc19tYXBfY29uc3RydWN0b3IoKTtcblx0cmV0dXJuIGVzX21hcDtcbn1cblxudmFyIGVzX3dlYWtNYXAgPSB7fTtcblxudmFyIGVzX3dlYWtNYXBfY29uc3RydWN0b3IgPSB7fTtcblxudmFyIGlzQXJyYXk7XG52YXIgaGFzUmVxdWlyZWRJc0FycmF5O1xuXG5mdW5jdGlvbiByZXF1aXJlSXNBcnJheSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzQXJyYXkpIHJldHVybiBpc0FycmF5O1xuXHRoYXNSZXF1aXJlZElzQXJyYXkgPSAxO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cblx0Ly8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxuXHRpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xuXHR9O1xuXHRyZXR1cm4gaXNBcnJheTtcbn1cblxudmFyIGlzQ29uc3RydWN0b3I7XG52YXIgaGFzUmVxdWlyZWRJc0NvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNDb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzQ29uc3RydWN0b3IpIHJldHVybiBpc0NvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZElzQ29uc3RydWN0b3IgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mKCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlSW5zcGVjdFNvdXJjZSgpO1xuXG5cdHZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXHR2YXIgY29uc3RydWN0ID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdjb25zdHJ1Y3QnKTtcblx0dmFyIGNvbnN0cnVjdG9yUmVnRXhwID0gL15cXHMqKD86Y2xhc3N8ZnVuY3Rpb24pXFxiLztcblx0dmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyhjb25zdHJ1Y3RvclJlZ0V4cC5leGVjKTtcblx0dmFyIElOQ09SUkVDVF9UT19TVFJJTkcgPSAhY29uc3RydWN0b3JSZWdFeHAudGVzdChub29wKTtcblxuXHR2YXIgaXNDb25zdHJ1Y3Rvck1vZGVybiA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0ICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdCAgdHJ5IHtcblx0ICAgIGNvbnN0cnVjdChub29wLCBbXSwgYXJndW1lbnQpO1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdH07XG5cblx0dmFyIGlzQ29uc3RydWN0b3JMZWdhY3kgPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdCAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHQgIHN3aXRjaCAoY2xhc3NvZihhcmd1bWVudCkpIHtcblx0ICAgIGNhc2UgJ0FzeW5jRnVuY3Rpb24nOlxuXHQgICAgY2FzZSAnR2VuZXJhdG9yRnVuY3Rpb24nOlxuXHQgICAgY2FzZSAnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbic6IHJldHVybiBmYWxzZTtcblx0ICB9XG5cdCAgdHJ5IHtcblx0ICAgIC8vIHdlIGNhbid0IGNoZWNrIC5wcm90b3R5cGUgc2luY2UgY29uc3RydWN0b3JzIHByb2R1Y2VkIGJ5IC5iaW5kIGhhdmVuJ3QgaXRcblx0ICAgIC8vIGBGdW5jdGlvbiN0b1N0cmluZ2AgdGhyb3dzIG9uIHNvbWUgYnVpbHQtaXQgZnVuY3Rpb24gaW4gc29tZSBsZWdhY3kgZW5naW5lc1xuXHQgICAgLy8gKGZvciBleGFtcGxlLCBgRE9NUXVhZGAgYW5kIHNpbWlsYXIgaW4gRkY0MS0pXG5cdCAgICByZXR1cm4gSU5DT1JSRUNUX1RPX1NUUklORyB8fCAhIWV4ZWMoY29uc3RydWN0b3JSZWdFeHAsIGluc3BlY3RTb3VyY2UoYXJndW1lbnQpKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG5cdGlzQ29uc3RydWN0b3JMZWdhY3kuc2hhbSA9IHRydWU7XG5cblx0Ly8gYElzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3Jcblx0aXNDb25zdHJ1Y3RvciA9ICFjb25zdHJ1Y3QgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHZhciBjYWxsZWQ7XG5cdCAgcmV0dXJuIGlzQ29uc3RydWN0b3JNb2Rlcm4oaXNDb25zdHJ1Y3Rvck1vZGVybi5jYWxsKVxuXHQgICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oT2JqZWN0KVxuXHQgICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oZnVuY3Rpb24gKCkgeyBjYWxsZWQgPSB0cnVlOyB9KVxuXHQgICAgfHwgY2FsbGVkO1xuXHR9KSA/IGlzQ29uc3RydWN0b3JMZWdhY3kgOiBpc0NvbnN0cnVjdG9yTW9kZXJuO1xuXHRyZXR1cm4gaXNDb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheVNwZWNpZXNDb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NvbnN0cnVjdG9yKSByZXR1cm4gYXJyYXlTcGVjaWVzQ29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSAxO1xuXHR2YXIgaXNBcnJheSA9IHJlcXVpcmVJc0FycmF5KCk7XG5cdHZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZUlzQ29uc3RydWN0b3IoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblx0dmFyICRBcnJheSA9IEFycmF5O1xuXG5cdC8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcblx0YXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSkge1xuXHQgIHZhciBDO1xuXHQgIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG5cdCAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3Rvcjtcblx0ICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG5cdCAgICBpZiAoaXNDb25zdHJ1Y3RvcihDKSAmJiAoQyA9PT0gJEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcblx0ICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG5cdCAgICAgIEMgPSBDW1NQRUNJRVNdO1xuXHQgICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblx0ICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDO1xuXHR9O1xuXHRyZXR1cm4gYXJyYXlTcGVjaWVzQ29uc3RydWN0b3I7XG59XG5cbnZhciBhcnJheVNwZWNpZXNDcmVhdGU7XG52YXIgaGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDcmVhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheVNwZWNpZXNDcmVhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDcmVhdGUpIHJldHVybiBhcnJheVNwZWNpZXNDcmVhdGU7XG5cdGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ3JlYXRlID0gMTtcblx0dmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZUFycmF5U3BlY2llc0NvbnN0cnVjdG9yKCk7XG5cblx0Ly8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5cdGFycmF5U3BlY2llc0NyZWF0ZSA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0ICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG5cdH07XG5cdHJldHVybiBhcnJheVNwZWNpZXNDcmVhdGU7XG59XG5cbnZhciBhcnJheUl0ZXJhdGlvbjtcbnZhciBoYXNSZXF1aXJlZEFycmF5SXRlcmF0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlJdGVyYXRpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheUl0ZXJhdGlvbikgcmV0dXJuIGFycmF5SXRlcmF0aW9uO1xuXHRoYXNSZXF1aXJlZEFycmF5SXRlcmF0aW9uID0gMTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVJbmRleGVkT2JqZWN0KCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblx0dmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmVBcnJheVNwZWNpZXNDcmVhdGUoKTtcblxuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdC8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cblx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG5cdCAgdmFyIElTX01BUCA9IFRZUEUgPT09IDE7XG5cdCAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT09IDI7XG5cdCAgdmFyIElTX1NPTUUgPSBUWVBFID09PSAzO1xuXHQgIHZhciBJU19FVkVSWSA9IFRZUEUgPT09IDQ7XG5cdCAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09PSA2O1xuXHQgIHZhciBJU19GSUxURVJfUkVKRUNUID0gVFlQRSA9PT0gNztcblx0ICB2YXIgTk9fSE9MRVMgPSBUWVBFID09PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcblx0ICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuXHQgICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuXHQgICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKHNlbGYpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuXHQgICAgdmFyIGluZGV4ID0gMDtcblx0ICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG5cdCAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSIHx8IElTX0ZJTFRFUl9SRUpFQ1QgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuXHQgICAgdmFyIHZhbHVlLCByZXN1bHQ7XG5cdCAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcblx0ICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcblx0ICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuXHQgICAgICBpZiAoVFlQRSkge1xuXHQgICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuXHQgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG5cdCAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuXHQgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcblx0ICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcblx0ICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcblx0ICAgICAgICB9IGVsc2Ugc3dpdGNoIChUWVBFKSB7XG5cdCAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcblx0ICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3Rcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG5cdCAgfTtcblx0fTtcblxuXHRhcnJheUl0ZXJhdGlvbiA9IHtcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcblx0ICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuXHQgIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcblx0ICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCgyKSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcblx0ICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcblx0ICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuXHQgIGZpbmQ6IGNyZWF0ZU1ldGhvZCg1KSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG5cdCAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNiksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJSZWplY3RgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuXHQgIGZpbHRlclJlamVjdDogY3JlYXRlTWV0aG9kKDcpXG5cdH07XG5cdHJldHVybiBhcnJheUl0ZXJhdGlvbjtcbn1cblxudmFyIGNvbGxlY3Rpb25XZWFrO1xudmFyIGhhc1JlcXVpcmVkQ29sbGVjdGlvbldlYWs7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb2xsZWN0aW9uV2VhayAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbGxlY3Rpb25XZWFrKSByZXR1cm4gY29sbGVjdGlvbldlYWs7XG5cdGhhc1JlcXVpcmVkQ29sbGVjdGlvbldlYWsgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlRGVmaW5lQnVpbHRJbnMoKTtcblx0dmFyIGdldFdlYWtEYXRhID0gcmVxdWlyZUludGVybmFsTWV0YWRhdGEoKS5nZXRXZWFrRGF0YTtcblx0dmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlQW5JbnN0YW5jZSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBBcnJheUl0ZXJhdGlvbk1vZHVsZSA9IHJlcXVpcmVBcnJheUl0ZXJhdGlvbigpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblxuXHR2YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXHR2YXIgaW50ZXJuYWxTdGF0ZUdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xuXHR2YXIgZmluZCA9IEFycmF5SXRlcmF0aW9uTW9kdWxlLmZpbmQ7XG5cdHZhciBmaW5kSW5kZXggPSBBcnJheUl0ZXJhdGlvbk1vZHVsZS5maW5kSW5kZXg7XG5cdHZhciBzcGxpY2UgPSB1bmN1cnJ5VGhpcyhbXS5zcGxpY2UpO1xuXHR2YXIgaWQgPSAwO1xuXG5cdC8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xuXHR2YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHQgIHJldHVybiBzdGF0ZS5mcm96ZW4gfHwgKHN0YXRlLmZyb3plbiA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKCkpO1xuXHR9O1xuXG5cdHZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKCkge1xuXHQgIHRoaXMuZW50cmllcyA9IFtdO1xuXHR9O1xuXG5cdHZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuXHQgIHJldHVybiBmaW5kKHN0b3JlLmVudHJpZXMsIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG5cdCAgfSk7XG5cdH07XG5cblx0VW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG5cdCAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICAgIGlmIChlbnRyeSkgcmV0dXJuIGVudHJ5WzFdO1xuXHQgIH0sXG5cdCAgaGFzOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICB9LFxuXHQgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0ICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgICAgaWYgKGVudHJ5KSBlbnRyeVsxXSA9IHZhbHVlO1xuXHQgICAgZWxzZSB0aGlzLmVudHJpZXMucHVzaChba2V5LCB2YWx1ZV0pO1xuXHQgIH0sXG5cdCAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHZhciBpbmRleCA9IGZpbmRJbmRleCh0aGlzLmVudHJpZXMsIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcblx0ICAgIH0pO1xuXHQgICAgaWYgKH5pbmRleCkgc3BsaWNlKHRoaXMuZW50cmllcywgaW5kZXgsIDEpO1xuXHQgICAgcmV0dXJuICEhfmluZGV4O1xuXHQgIH1cblx0fTtcblxuXHRjb2xsZWN0aW9uV2VhayA9IHtcblx0ICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpIHtcblx0ICAgIHZhciBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG5cdCAgICAgIGFuSW5zdGFuY2UodGhhdCwgUHJvdG90eXBlKTtcblx0ICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG5cdCAgICAgICAgdHlwZTogQ09OU1RSVUNUT1JfTkFNRSxcblx0ICAgICAgICBpZDogaWQrKyxcblx0ICAgICAgICBmcm96ZW46IG51bGxcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgeyB0aGF0OiB0aGF0LCBBU19FTlRSSUVTOiBJU19NQVAgfSk7XG5cdCAgICB9KTtcblxuXHQgICAgdmFyIFByb3RvdHlwZSA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuXHQgICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXG5cdCAgICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcblx0ICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcblx0ICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrRGF0YShhbk9iamVjdChrZXkpLCB0cnVlKTtcblx0ICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHVuY2F1Z2h0RnJvemVuU3RvcmUoc3RhdGUpLnNldChrZXksIHZhbHVlKTtcblx0ICAgICAgZWxzZSBkYXRhW3N0YXRlLmlkXSA9IHZhbHVlO1xuXHQgICAgICByZXR1cm4gdGhhdDtcblx0ICAgIH07XG5cblx0ICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwge1xuXHQgICAgICAvLyBgeyBXZWFrTWFwLCBXZWFrU2V0IH0ucHJvdG90eXBlLmRlbGV0ZShrZXkpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuZGVsZXRlXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha3NldC5wcm90b3R5cGUuZGVsZXRlXG5cdCAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGtleSk7XG5cdCAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKVsnZGVsZXRlJ10oa2V5KTtcblx0ICAgICAgICByZXR1cm4gZGF0YSAmJiBoYXNPd24oZGF0YSwgc3RhdGUuaWQpICYmIGRlbGV0ZSBkYXRhW3N0YXRlLmlkXTtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gYHsgV2Vha01hcCwgV2Vha1NldCB9LnByb3RvdHlwZS5oYXMoa2V5KWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAucHJvdG90eXBlLmhhc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWtzZXQucHJvdG90eXBlLmhhc1xuXHQgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoa2V5KTtcblx0ICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUoc3RhdGUpLmhhcyhrZXkpO1xuXHQgICAgICAgIHJldHVybiBkYXRhICYmIGhhc093bihkYXRhLCBzdGF0ZS5pZCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIElTX01BUCA/IHtcblx0ICAgICAgLy8gYFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLnByb3RvdHlwZS5nZXRcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoaXNPYmplY3Qoa2V5KSkge1xuXHQgICAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrRGF0YShrZXkpO1xuXHQgICAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKS5nZXQoa2V5KTtcblx0ICAgICAgICAgIGlmIChkYXRhKSByZXR1cm4gZGF0YVtzdGF0ZS5pZF07XG5cdCAgICAgICAgfVxuXHQgICAgICB9LFxuXHQgICAgICAvLyBgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLnByb3RvdHlwZS5zZXRcblx0ICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiBkZWZpbmUodGhpcywga2V5LCB2YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0gOiB7XG5cdCAgICAgIC8vIGBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrc2V0LnByb3RvdHlwZS5hZGRcblx0ICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIHZhbHVlLCB0cnVlKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIHJldHVybiBDb25zdHJ1Y3Rvcjtcblx0ICB9XG5cdH07XG5cdHJldHVybiBjb2xsZWN0aW9uV2Vhaztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfd2Vha01hcF9jb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX3dlYWtNYXBfY29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc193ZWFrTWFwX2NvbnN0cnVjdG9yKSByZXR1cm4gZXNfd2Vha01hcF9jb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRFc193ZWFrTWFwX2NvbnN0cnVjdG9yID0gMTtcblx0dmFyIEZSRUVaSU5HID0gcmVxdWlyZUZyZWV6aW5nKCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZURlZmluZUJ1aWx0SW5zKCk7XG5cdHZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZUludGVybmFsTWV0YWRhdGEoKTtcblx0dmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlQ29sbGVjdGlvbigpO1xuXHR2YXIgY29sbGVjdGlvbldlYWsgPSByZXF1aXJlQ29sbGVjdGlvbldlYWsoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCkuZW5mb3JjZTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlV2Vha01hcEJhc2ljRGV0ZWN0aW9uKCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcblx0dmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSAtLSBzYWZlXG5cdHZhciBpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2Zyb3plbiAtLSBzYWZlXG5cdHZhciBpc0Zyb3plbiA9ICRPYmplY3QuaXNGcm96ZW47XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNzZWFsZWQgLS0gc2FmZVxuXHR2YXIgaXNTZWFsZWQgPSAkT2JqZWN0LmlzU2VhbGVkO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWZyZWV6ZSAtLSBzYWZlXG5cdHZhciBmcmVlemUgPSAkT2JqZWN0LmZyZWV6ZTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZWFsIC0tIHNhZmVcblx0dmFyIHNlYWwgPSAkT2JqZWN0LnNlYWw7XG5cblx0dmFyIElTX0lFMTEgPSAhZ2xvYmFsVGhpcy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiBnbG9iYWxUaGlzO1xuXHR2YXIgSW50ZXJuYWxXZWFrTWFwO1xuXG5cdHZhciB3cmFwcGVyID0gZnVuY3Rpb24gKGluaXQpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpIHtcblx0ICAgIHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuXHQgIH07XG5cdH07XG5cblx0Ly8gYFdlYWtNYXBgIGNvbnN0cnVjdG9yXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC1jb25zdHJ1Y3RvclxuXHR2YXIgJFdlYWtNYXAgPSBjb2xsZWN0aW9uKCdXZWFrTWFwJywgd3JhcHBlciwgY29sbGVjdGlvbldlYWspO1xuXHR2YXIgV2Vha01hcFByb3RvdHlwZSA9ICRXZWFrTWFwLnByb3RvdHlwZTtcblx0dmFyIG5hdGl2ZVNldCA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuc2V0KTtcblxuXHQvLyBDaGFrcmEgRWRnZSBidWc6IGFkZGluZyBmcm96ZW4gYXJyYXlzIHRvIFdlYWtNYXAgdW5mcmVlemUgdGhlbVxuXHR2YXIgaGFzTVNFZGdlRnJlZXppbmdCdWcgPSBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIEZSRUVaSU5HICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBmcm96ZW5BcnJheSA9IGZyZWV6ZShbXSk7XG5cdCAgICBuYXRpdmVTZXQobmV3ICRXZWFrTWFwKCksIGZyb3plbkFycmF5LCAxKTtcblx0ICAgIHJldHVybiAhaXNGcm96ZW4oZnJvemVuQXJyYXkpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdC8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcblx0Ly8gV2UgY2FuJ3QgdXNlIGZlYXR1cmUgZGV0ZWN0aW9uIGJlY2F1c2UgaXQgY3Jhc2ggc29tZSBvbGQgSUUgYnVpbGRzXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80ODVcblx0aWYgKE5BVElWRV9XRUFLX01BUCkgaWYgKElTX0lFMTEpIHtcblx0ICBJbnRlcm5hbFdlYWtNYXAgPSBjb2xsZWN0aW9uV2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCAnV2Vha01hcCcsIHRydWUpO1xuXHQgIEludGVybmFsTWV0YWRhdGFNb2R1bGUuZW5hYmxlKCk7XG5cdCAgdmFyIG5hdGl2ZURlbGV0ZSA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGVbJ2RlbGV0ZSddKTtcblx0ICB2YXIgbmF0aXZlSGFzID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5oYXMpO1xuXHQgIHZhciBuYXRpdmVHZXQgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmdldCk7XG5cdCAgZGVmaW5lQnVpbHRJbnMoV2Vha01hcFByb3RvdHlwZSwge1xuXHQgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFzdGF0ZS5mcm96ZW4pIHN0YXRlLmZyb3plbiA9IG5ldyBJbnRlcm5hbFdlYWtNYXAoKTtcblx0ICAgICAgICByZXR1cm4gbmF0aXZlRGVsZXRlKHRoaXMsIGtleSkgfHwgc3RhdGUuZnJvemVuWydkZWxldGUnXShrZXkpO1xuXHQgICAgICB9IHJldHVybiBuYXRpdmVEZWxldGUodGhpcywga2V5KTtcblx0ICAgIH0sXG5cdCAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0ICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFzdGF0ZS5mcm96ZW4pIHN0YXRlLmZyb3plbiA9IG5ldyBJbnRlcm5hbFdlYWtNYXAoKTtcblx0ICAgICAgICByZXR1cm4gbmF0aXZlSGFzKHRoaXMsIGtleSkgfHwgc3RhdGUuZnJvemVuLmhhcyhrZXkpO1xuXHQgICAgICB9IHJldHVybiBuYXRpdmVIYXModGhpcywga2V5KTtcblx0ICAgIH0sXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0ICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFzdGF0ZS5mcm96ZW4pIHN0YXRlLmZyb3plbiA9IG5ldyBJbnRlcm5hbFdlYWtNYXAoKTtcblx0ICAgICAgICByZXR1cm4gbmF0aXZlSGFzKHRoaXMsIGtleSkgPyBuYXRpdmVHZXQodGhpcywga2V5KSA6IHN0YXRlLmZyb3plbi5nZXQoa2V5KTtcblx0ICAgICAgfSByZXR1cm4gbmF0aXZlR2V0KHRoaXMsIGtleSk7XG5cdCAgICB9LFxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHQgICAgICBpZiAoaXNPYmplY3Qoa2V5KSAmJiAhaXNFeHRlbnNpYmxlKGtleSkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuXHQgICAgICAgIG5hdGl2ZUhhcyh0aGlzLCBrZXkpID8gbmF0aXZlU2V0KHRoaXMsIGtleSwgdmFsdWUpIDogc3RhdGUuZnJvemVuLnNldChrZXksIHZhbHVlKTtcblx0ICAgICAgfSBlbHNlIG5hdGl2ZVNldCh0aGlzLCBrZXksIHZhbHVlKTtcblx0ICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9XG5cdCAgfSk7XG5cdC8vIENoYWtyYSBFZGdlIGZyb3plbiBrZXlzIGZpeFxuXHR9IGVsc2UgaWYgKGhhc01TRWRnZUZyZWV6aW5nQnVnKCkpIHtcblx0ICBkZWZpbmVCdWlsdElucyhXZWFrTWFwUHJvdG90eXBlLCB7XG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdCAgICAgIHZhciBhcnJheUludGVncml0eUxldmVsO1xuXHQgICAgICBpZiAoaXNBcnJheShrZXkpKSB7XG5cdCAgICAgICAgaWYgKGlzRnJvemVuKGtleSkpIGFycmF5SW50ZWdyaXR5TGV2ZWwgPSBmcmVlemU7XG5cdCAgICAgICAgZWxzZSBpZiAoaXNTZWFsZWQoa2V5KSkgYXJyYXlJbnRlZ3JpdHlMZXZlbCA9IHNlYWw7XG5cdCAgICAgIH1cblx0ICAgICAgbmF0aXZlU2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuXHQgICAgICBpZiAoYXJyYXlJbnRlZ3JpdHlMZXZlbCkgYXJyYXlJbnRlZ3JpdHlMZXZlbChrZXkpO1xuXHQgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXHRyZXR1cm4gZXNfd2Vha01hcF9jb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfd2Vha01hcDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX3dlYWtNYXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc193ZWFrTWFwKSByZXR1cm4gZXNfd2Vha01hcDtcblx0aGFzUmVxdWlyZWRFc193ZWFrTWFwID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyByZXBsYWNlZCB0byBtb2R1bGUgYmVsb3dcblx0cmVxdWlyZUVzX3dlYWtNYXBfY29uc3RydWN0b3IoKTtcblx0cmV0dXJuIGVzX3dlYWtNYXA7XG59XG5cbnZhciBjb21wb3NpdGVLZXk7XG52YXIgaGFzUmVxdWlyZWRDb21wb3NpdGVLZXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb21wb3NpdGVLZXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb21wb3NpdGVLZXkpIHJldHVybiBjb21wb3NpdGVLZXk7XG5cdGhhc1JlcXVpcmVkQ29tcG9zaXRlS2V5ID0gMTtcblx0Ly8gVE9ETzogaW4gY29yZS1qc0A0LCBtb3ZlIC9tb2R1bGVzLyBkZXBlbmRlbmNpZXMgdG8gcHVibGljIGVudHJpZXMgZm9yIGJldHRlciBvcHRpbWl6YXRpb24gYnkgdG9vbHMgbGlrZSBgcHJlc2V0LWVudmBcblx0cmVxdWlyZUVzX21hcCgpO1xuXHRyZXF1aXJlRXNfd2Vha01hcCgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0dmFyIE1hcCA9IGdldEJ1aWx0SW4oJ01hcCcpO1xuXHR2YXIgV2Vha01hcCA9IGdldEJ1aWx0SW4oJ1dlYWtNYXAnKTtcblxuXHR2YXIgTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAvLyBrZXlzXG5cdCAgdGhpcy5vYmplY3QgPSBudWxsO1xuXHQgIHRoaXMuc3ltYm9sID0gbnVsbDtcblx0ICAvLyBjaGlsZCBub2Rlc1xuXHQgIHRoaXMucHJpbWl0aXZlcyA9IG51bGw7XG5cdCAgdGhpcy5vYmplY3RzQnlJbmRleCA9IGNyZWF0ZShudWxsKTtcblx0fTtcblxuXHROb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBpbml0aWFsaXplcikge1xuXHQgIHJldHVybiB0aGlzW2tleV0gfHwgKHRoaXNba2V5XSA9IGluaXRpYWxpemVyKCkpO1xuXHR9O1xuXG5cdE5vZGUucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoaSwgaXQsIElTX09CSkVDVCkge1xuXHQgIHZhciBzdG9yZSA9IElTX09CSkVDVFxuXHQgICAgPyB0aGlzLm9iamVjdHNCeUluZGV4W2ldIHx8ICh0aGlzLm9iamVjdHNCeUluZGV4W2ldID0gbmV3IFdlYWtNYXAoKSlcblx0ICAgIDogdGhpcy5wcmltaXRpdmVzIHx8ICh0aGlzLnByaW1pdGl2ZXMgPSBuZXcgTWFwKCkpO1xuXHQgIHZhciBlbnRyeSA9IHN0b3JlLmdldChpdCk7XG5cdCAgaWYgKCFlbnRyeSkgc3RvcmUuc2V0KGl0LCBlbnRyeSA9IG5ldyBOb2RlKCkpO1xuXHQgIHJldHVybiBlbnRyeTtcblx0fTtcblxuXHR2YXIgcm9vdCA9IG5ldyBOb2RlKCk7XG5cblx0Y29tcG9zaXRlS2V5ID0gZnVuY3Rpb24gKCkge1xuXHQgIHZhciBhY3RpdmUgPSByb290O1xuXHQgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgIHZhciBpLCBpdDtcblx0ICAvLyBmb3IgcHJldmVudCBsZWFraW5nLCBzdGFydCBmcm9tIG9iamVjdHNcblx0ICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmIChpc09iamVjdChpdCA9IGFyZ3VtZW50c1tpXSkpIGFjdGl2ZSA9IGFjdGl2ZS5uZXh0KGksIGl0LCB0cnVlKTtcblx0ICB9XG5cdCAgaWYgKHRoaXMgPT09ICRPYmplY3QgJiYgYWN0aXZlID09PSByb290KSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ29tcG9zaXRlIGtleXMgbXVzdCBjb250YWluIGEgbm9uLXByaW1pdGl2ZSBjb21wb25lbnQnKTtcblx0ICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgIGlmICghaXNPYmplY3QoaXQgPSBhcmd1bWVudHNbaV0pKSBhY3RpdmUgPSBhY3RpdmUubmV4dChpLCBpdCwgZmFsc2UpO1xuXHQgIH0gcmV0dXJuIGFjdGl2ZTtcblx0fTtcblx0cmV0dXJuIGNvbXBvc2l0ZUtleTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZUtleTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9jb21wb3NpdGVLZXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlS2V5KSByZXR1cm4gZXNuZXh0X2NvbXBvc2l0ZUtleTtcblx0aGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlS2V5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYXBwbHkgPSByZXF1aXJlRnVuY3Rpb25BcHBseSgpO1xuXHR2YXIgZ2V0Q29tcG9zaXRlS2V5Tm9kZSA9IHJlcXVpcmVDb21wb3NpdGVLZXkoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5cdHZhciBpbml0aWFsaXplciA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgZnJlZXplID0gZ2V0QnVpbHRJbignT2JqZWN0JywgJ2ZyZWV6ZScpO1xuXHQgIHJldHVybiBmcmVlemUgPyBmcmVlemUoY3JlYXRlKG51bGwpKSA6IGNyZWF0ZShudWxsKTtcblx0fTtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1yaWNoZXIta2V5cy90cmVlL21hc3Rlci9jb21wb3NpdGVLZXlcblx0JCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBjb21wb3NpdGVLZXk6IGZ1bmN0aW9uIGNvbXBvc2l0ZUtleSgpIHtcblx0ICAgIHJldHVybiBhcHBseShnZXRDb21wb3NpdGVLZXlOb2RlLCAkT2JqZWN0LCBhcmd1bWVudHMpLmdldCgnb2JqZWN0JywgaW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfY29tcG9zaXRlS2V5O1xufVxuXG5yZXF1aXJlRXNuZXh0X2NvbXBvc2l0ZUtleSgpO1xuXG52YXIgZXNuZXh0X2NvbXBvc2l0ZVN5bWJvbCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlU3ltYm9sO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X2NvbXBvc2l0ZVN5bWJvbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVTeW1ib2wpIHJldHVybiBlc25leHRfY29tcG9zaXRlU3ltYm9sO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVTeW1ib2wgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnZXRDb21wb3NpdGVLZXlOb2RlID0gcmVxdWlyZUNvbXBvc2l0ZUtleSgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBhcHBseSA9IHJlcXVpcmVGdW5jdGlvbkFwcGx5KCk7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcmljaGVyLWtleXMvdHJlZS9tYXN0ZXIvY29tcG9zaXRlS2V5XG5cdCQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgY29tcG9zaXRlU3ltYm9sOiBmdW5jdGlvbiBjb21wb3NpdGVTeW1ib2woKSB7XG5cdCAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09ICdzdHJpbmcnKSByZXR1cm4gZ2V0QnVpbHRJbignU3ltYm9sJylbJ2ZvciddKGFyZ3VtZW50c1swXSk7XG5cdCAgICByZXR1cm4gYXBwbHkoZ2V0Q29tcG9zaXRlS2V5Tm9kZSwgbnVsbCwgYXJndW1lbnRzKS5nZXQoJ3N5bWJvbCcsIGdldEJ1aWx0SW4oJ1N5bWJvbCcpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X2NvbXBvc2l0ZVN5bWJvbDtcbn1cblxucmVxdWlyZUVzbmV4dF9jb21wb3NpdGVTeW1ib2woKTtcblxudmFyIGVzbmV4dF9tYXBfZGVsZXRlQWxsID0ge307XG5cbnZhciBtYXBIZWxwZXJzO1xudmFyIGhhc1JlcXVpcmVkTWFwSGVscGVycztcblxuZnVuY3Rpb24gcmVxdWlyZU1hcEhlbHBlcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXBIZWxwZXJzKSByZXR1cm4gbWFwSGVscGVycztcblx0aGFzUmVxdWlyZWRNYXBIZWxwZXJzID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWFwIC0tIHNhZmVcblx0dmFyIE1hcFByb3RvdHlwZSA9IE1hcC5wcm90b3R5cGU7XG5cblx0bWFwSGVscGVycyA9IHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWFwIC0tIHNhZmVcblx0ICBNYXA6IE1hcCxcblx0ICBzZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5zZXQpLFxuXHQgIGdldDogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmdldCksXG5cdCAgaGFzOiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuaGFzKSxcblx0ICByZW1vdmU6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZVsnZGVsZXRlJ10pLFxuXHQgIHByb3RvOiBNYXBQcm90b3R5cGVcblx0fTtcblx0cmV0dXJuIG1hcEhlbHBlcnM7XG59XG5cbnZhciBhTWFwO1xudmFyIGhhc1JlcXVpcmVkQU1hcDtcblxuZnVuY3Rpb24gcmVxdWlyZUFNYXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBTWFwKSByZXR1cm4gYU1hcDtcblx0aGFzUmVxdWlyZWRBTWFwID0gMTtcblx0dmFyIGhhcyA9IHJlcXVpcmVNYXBIZWxwZXJzKCkuaGFzO1xuXG5cdC8vIFBlcmZvcm0gPyBSZXF1aXJlSW50ZXJuYWxTbG90KE0sIFtbTWFwRGF0YV1dKVxuXHRhTWFwID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaGFzKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHJldHVybiBhTWFwO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2RlbGV0ZUFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZGVsZXRlQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9kZWxldGVBbGwpIHJldHVybiBlc25leHRfbWFwX2RlbGV0ZUFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2RlbGV0ZUFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgcmVtb3ZlID0gcmVxdWlyZU1hcEhlbHBlcnMoKS5yZW1vdmU7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuZGVsZXRlQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkZWxldGVBbGw6IGZ1bmN0aW9uIGRlbGV0ZUFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIGNvbGxlY3Rpb24gPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGFsbERlbGV0ZWQgPSB0cnVlO1xuXHQgICAgdmFyIHdhc0RlbGV0ZWQ7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIHdhc0RlbGV0ZWQgPSByZW1vdmUoY29sbGVjdGlvbiwgYXJndW1lbnRzW2tdKTtcblx0ICAgICAgYWxsRGVsZXRlZCA9IGFsbERlbGV0ZWQgJiYgd2FzRGVsZXRlZDtcblx0ICAgIH0gcmV0dXJuICEhYWxsRGVsZXRlZDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9kZWxldGVBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2RlbGV0ZUFsbCgpO1xuXG52YXIgZXNuZXh0X21hcF9ldmVyeSA9IHt9O1xuXG52YXIgaXRlcmF0ZVNpbXBsZTtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdGVTaW1wbGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRlU2ltcGxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0ZVNpbXBsZSkgcmV0dXJuIGl0ZXJhdGVTaW1wbGU7XG5cdGhhc1JlcXVpcmVkSXRlcmF0ZVNpbXBsZSA9IDE7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXG5cdGl0ZXJhdGVTaW1wbGUgPSBmdW5jdGlvbiAocmVjb3JkLCBmbiwgSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQpIHtcblx0ICB2YXIgaXRlcmF0b3IgPSBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCA/IHJlY29yZCA6IHJlY29yZC5pdGVyYXRvcjtcblx0ICB2YXIgbmV4dCA9IHJlY29yZC5uZXh0O1xuXHQgIHZhciBzdGVwLCByZXN1bHQ7XG5cdCAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG5cdCAgICByZXN1bHQgPSBmbihzdGVwLnZhbHVlKTtcblx0ICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHJlc3VsdDtcblx0ICB9XG5cdH07XG5cdHJldHVybiBpdGVyYXRlU2ltcGxlO1xufVxuXG52YXIgbWFwSXRlcmF0ZTtcbnZhciBoYXNSZXF1aXJlZE1hcEl0ZXJhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXBJdGVyYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWFwSXRlcmF0ZSkgcmV0dXJuIG1hcEl0ZXJhdGU7XG5cdGhhc1JlcXVpcmVkTWFwSXRlcmF0ZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIE1hcFByb3RvdHlwZSA9IE1hcEhlbHBlcnMucHJvdG87XG5cdHZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmZvckVhY2gpO1xuXHR2YXIgZW50cmllcyA9IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5lbnRyaWVzKTtcblx0dmFyIG5leHQgPSBlbnRyaWVzKG5ldyBNYXAoKSkubmV4dDtcblxuXHRtYXBJdGVyYXRlID0gZnVuY3Rpb24gKG1hcCwgZm4sIGludGVycnVwdGlibGUpIHtcblx0ICByZXR1cm4gaW50ZXJydXB0aWJsZSA/IGl0ZXJhdGVTaW1wbGUoeyBpdGVyYXRvcjogZW50cmllcyhtYXApLCBuZXh0OiBuZXh0IH0sIGZ1bmN0aW9uIChlbnRyeSkge1xuXHQgICAgcmV0dXJuIGZuKGVudHJ5WzFdLCBlbnRyeVswXSk7XG5cdCAgfSkgOiBmb3JFYWNoKG1hcCwgZm4pO1xuXHR9O1xuXHRyZXR1cm4gbWFwSXRlcmF0ZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ldmVyeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZXZlcnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2V2ZXJ5KSByZXR1cm4gZXNuZXh0X21hcF9ldmVyeTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2V2ZXJ5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHJldHVybiBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKCFib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpIHJldHVybiBmYWxzZTtcblx0ICAgIH0sIHRydWUpICE9PSBmYWxzZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9ldmVyeTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZXZlcnkoKTtcblxudmFyIGVzbmV4dF9tYXBfZmlsdGVyID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmlsdGVyO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9maWx0ZXIgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbHRlcikgcmV0dXJuIGVzbmV4dF9tYXBfZmlsdGVyO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmlsdGVyID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIG5ld01hcCA9IG5ldyBNYXAoKTtcblx0ICAgIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKSBzZXQobmV3TWFwLCBrZXksIHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld01hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9maWx0ZXI7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2ZpbHRlcigpO1xuXG52YXIgZXNuZXh0X21hcF9maW5kID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZmluZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZCkgcmV0dXJuIGVzbmV4dF9tYXBfZmluZDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmQgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKSByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcblx0ICAgIH0sIHRydWUpO1xuXHQgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQudmFsdWU7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZmluZDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZmluZCgpO1xuXG52YXIgZXNuZXh0X21hcF9maW5kS2V5ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZEtleTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZmluZEtleSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZEtleSkgcmV0dXJuIGVzbmV4dF9tYXBfZmluZEtleTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmRLZXkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuZmluZEtleWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZmluZEtleTogZnVuY3Rpb24gZmluZEtleShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKSByZXR1cm4geyBrZXk6IGtleSB9O1xuXHQgICAgfSwgdHJ1ZSk7XG5cdCAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5rZXk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZmluZEtleTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZmluZEtleSgpO1xuXG52YXIgZXNuZXh0X21hcF9mcm9tID0ge307XG5cbnZhciBjb2xsZWN0aW9uRnJvbTtcbnZhciBoYXNSZXF1aXJlZENvbGxlY3Rpb25Gcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29sbGVjdGlvbkZyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb2xsZWN0aW9uRnJvbSkgcmV0dXJuIGNvbGxlY3Rpb25Gcm9tO1xuXHRoYXNSZXF1aXJlZENvbGxlY3Rpb25Gcm9tID0gMTtcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXG5cdGNvbGxlY3Rpb25Gcm9tID0gZnVuY3Rpb24gKEMsIGFkZGVyLCBFTlRSWSkge1xuXHQgIHJldHVybiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgTyA9IHRvT2JqZWN0KHNvdXJjZSk7XG5cdCAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIHZhciBtYXBGbiA9IGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cdCAgICB2YXIgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IG1hcHBpbmcgPyBiaW5kKG1hcEZuLCBsZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblx0ICAgIHZhciByZXN1bHQgPSBuZXcgQygpO1xuXHQgICAgdmFyIG4gPSAwO1xuXHQgICAgaXRlcmF0ZShPLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcblx0ICAgICAgdmFyIGVudHJ5ID0gbWFwcGluZyA/IGJvdW5kRnVuY3Rpb24obmV4dEl0ZW0sIG4rKykgOiBuZXh0SXRlbTtcblx0ICAgICAgaWYgKEVOVFJZKSBhZGRlcihyZXN1bHQsIGFuT2JqZWN0KGVudHJ5KVswXSwgZW50cnlbMV0pO1xuXHQgICAgICBlbHNlIGFkZGVyKHJlc3VsdCwgZW50cnkpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cdH07XG5cdHJldHVybiBjb2xsZWN0aW9uRnJvbTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9mcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9mcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9mcm9tKSByZXR1cm4gZXNuZXh0X21hcF9mcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbkZyb20gPSByZXF1aXJlQ29sbGVjdGlvbkZyb20oKTtcblxuXHQvLyBgTWFwLmZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAuZnJvbVxuXHQkKHsgdGFyZ2V0OiAnTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tOiBjcmVhdGVDb2xsZWN0aW9uRnJvbShNYXBIZWxwZXJzLk1hcCwgTWFwSGVscGVycy5zZXQsIHRydWUpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9mcm9tO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9mcm9tKCk7XG5cbnZhciBlc25leHRfbWFwX2dyb3VwQnkgPSB7fTtcblxudmFyIGVzX21hcF9ncm91cEJ5ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzX21hcF9ncm91cEJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfbWFwX2dyb3VwQnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc19tYXBfZ3JvdXBCeSkgcmV0dXJuIGVzX21hcF9ncm91cEJ5O1xuXHRoYXNSZXF1aXJlZEVzX21hcF9ncm91cEJ5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgSVNfUFVSRSA9IHJlcXVpcmVJc1B1cmUoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgaGFzID0gTWFwSGVscGVycy5oYXM7XG5cdHZhciBnZXQgPSBNYXBIZWxwZXJzLmdldDtcblx0dmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdHZhciBET0VTX05PVF9XT1JLX1dJVEhfUFJJTUlUSVZFUyA9IElTX1BVUkUgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiBNYXAuZ3JvdXBCeSgnYWInLCBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBpdDtcblx0ICB9KS5nZXQoJ2EnKS5sZW5ndGggIT09IDE7XG5cdH0pO1xuXG5cdC8vIGBNYXAuZ3JvdXBCeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLmdyb3VwYnlcblx0JCh7IHRhcmdldDogJ01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBET0VTX05PVF9XT1JLX1dJVEhfUFJJTUlUSVZFUyB9LCB7XG5cdCAgZ3JvdXBCeTogZnVuY3Rpb24gZ3JvdXBCeShpdGVtcywgY2FsbGJhY2tmbikge1xuXHQgICAgcmVxdWlyZU9iamVjdENvZXJjaWJsZShpdGVtcyk7XG5cdCAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG5cdCAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuXHQgICAgdmFyIGsgPSAwO1xuXHQgICAgaXRlcmF0ZShpdGVtcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIHZhciBrZXkgPSBjYWxsYmFja2ZuKHZhbHVlLCBrKyspO1xuXHQgICAgICBpZiAoIWhhcyhtYXAsIGtleSkpIHNldChtYXAsIGtleSwgW3ZhbHVlXSk7XG5cdCAgICAgIGVsc2UgcHVzaChnZXQobWFwLCBrZXkpLCB2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBtYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzX21hcF9ncm91cEJ5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2dyb3VwQnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2dyb3VwQnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2dyb3VwQnkpIHJldHVybiBlc25leHRfbWFwX2dyb3VwQnk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ncm91cEJ5ID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0cmVxdWlyZUVzX21hcF9ncm91cEJ5KCk7XG5cdHJldHVybiBlc25leHRfbWFwX2dyb3VwQnk7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2dyb3VwQnkoKTtcblxudmFyIGVzbmV4dF9tYXBfaW5jbHVkZXMgPSB7fTtcblxudmFyIHNhbWVWYWx1ZVplcm87XG52YXIgaGFzUmVxdWlyZWRTYW1lVmFsdWVaZXJvO1xuXG5mdW5jdGlvbiByZXF1aXJlU2FtZVZhbHVlWmVybyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNhbWVWYWx1ZVplcm8pIHJldHVybiBzYW1lVmFsdWVaZXJvO1xuXHRoYXNSZXF1aXJlZFNhbWVWYWx1ZVplcm8gPSAxO1xuXHQvLyBgU2FtZVZhbHVlWmVyb2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlemVyb1xuXHRzYW1lVmFsdWVaZXJvID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIHJldHVybiB4ID09PSB5IHx8IHggIT09IHggJiYgeSAhPT0geTtcblx0fTtcblx0cmV0dXJuIHNhbWVWYWx1ZVplcm87XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfaW5jbHVkZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2luY2x1ZGVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9pbmNsdWRlcykgcmV0dXJuIGVzbmV4dF9tYXBfaW5jbHVkZXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9pbmNsdWRlcyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHNhbWVWYWx1ZVplcm8gPSByZXF1aXJlU2FtZVZhbHVlWmVybygpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaEVsZW1lbnQpIHtcblx0ICAgIHJldHVybiBpdGVyYXRlKGFNYXAodGhpcyksIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoc2FtZVZhbHVlWmVybyh2YWx1ZSwgc2VhcmNoRWxlbWVudCkpIHJldHVybiB0cnVlO1xuXHQgICAgfSwgdHJ1ZSkgPT09IHRydWU7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfaW5jbHVkZXM7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2luY2x1ZGVzKCk7XG5cbnZhciBlc25leHRfbWFwX2tleUJ5ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5Qnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2tleUJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlCeSkgcmV0dXJuIGVzbmV4dF9tYXBfa2V5Qnk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlCeSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgTWFwID0gcmVxdWlyZU1hcEhlbHBlcnMoKS5NYXA7XG5cblx0Ly8gYE1hcC5rZXlCeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBrZXlCeTogZnVuY3Rpb24ga2V5QnkoaXRlcmFibGUsIGtleURlcml2YXRpdmUpIHtcblx0ICAgIHZhciBDID0gaXNDYWxsYWJsZSh0aGlzKSA/IHRoaXMgOiBNYXA7XG5cdCAgICB2YXIgbmV3TWFwID0gbmV3IEMoKTtcblx0ICAgIGFDYWxsYWJsZShrZXlEZXJpdmF0aXZlKTtcblx0ICAgIHZhciBzZXR0ZXIgPSBhQ2FsbGFibGUobmV3TWFwLnNldCk7XG5cdCAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHQgICAgICBjYWxsKHNldHRlciwgbmV3TWFwLCBrZXlEZXJpdmF0aXZlKGVsZW1lbnQpLCBlbGVtZW50KTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld01hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9rZXlCeTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfa2V5QnkoKTtcblxudmFyIGVzbmV4dF9tYXBfa2V5T2YgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlPZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfa2V5T2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2tleU9mKSByZXR1cm4gZXNuZXh0X21hcF9rZXlPZjtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2tleU9mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5rZXlPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAga2V5T2Y6IGZ1bmN0aW9uIGtleU9mKHNlYXJjaEVsZW1lbnQpIHtcblx0ICAgIHZhciByZXN1bHQgPSBpdGVyYXRlKGFNYXAodGhpcyksIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmICh2YWx1ZSA9PT0gc2VhcmNoRWxlbWVudCkgcmV0dXJuIHsga2V5OiBrZXkgfTtcblx0ICAgIH0sIHRydWUpO1xuXHQgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQua2V5O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2tleU9mO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9rZXlPZigpO1xuXG52YXIgZXNuZXh0X21hcF9tYXBLZXlzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfbWFwS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwS2V5cykgcmV0dXJuIGVzbmV4dF9tYXBfbWFwS2V5cztcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX21hcEtleXMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5tYXBLZXlzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBtYXBLZXlzOiBmdW5jdGlvbiBtYXBLZXlzKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgbmV3TWFwID0gbmV3IE1hcCgpO1xuXHQgICAgaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIHNldChuZXdNYXAsIGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSwgdmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3TWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX21hcEtleXM7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX21hcEtleXMoKTtcblxudmFyIGVzbmV4dF9tYXBfbWFwVmFsdWVzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwVmFsdWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9tYXBWYWx1ZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX21hcFZhbHVlcykgcmV0dXJuIGVzbmV4dF9tYXBfbWFwVmFsdWVzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwVmFsdWVzID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUubWFwVmFsdWVzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBtYXBWYWx1ZXM6IGZ1bmN0aW9uIG1hcFZhbHVlcyhjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIG5ld01hcCA9IG5ldyBNYXAoKTtcblx0ICAgIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBzZXQobmV3TWFwLCBrZXksIGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdNYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfbWFwVmFsdWVzO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9tYXBWYWx1ZXMoKTtcblxudmFyIGVzbmV4dF9tYXBfbWVyZ2UgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tZXJnZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfbWVyZ2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX21lcmdlKSByZXR1cm4gZXNuZXh0X21hcF9tZXJnZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX21lcmdlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIHNldCA9IHJlcXVpcmVNYXBIZWxwZXJzKCkuc2V0O1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLm1lcmdlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcblx0ICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoaXRlcmFibGUgLyogLi4uaXRlcmFibGVzICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgdmFyIGkgPSAwO1xuXHQgICAgd2hpbGUgKGkgPCBhcmd1bWVudHNMZW5ndGgpIHtcblx0ICAgICAgaXRlcmF0ZShhcmd1bWVudHNbaSsrXSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0ICAgICAgICBzZXQobWFwLCBrZXksIHZhbHVlKTtcblx0ICAgICAgfSwgeyBBU19FTlRSSUVTOiB0cnVlIH0pO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIG1hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9tZXJnZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfbWVyZ2UoKTtcblxudmFyIGVzbmV4dF9tYXBfb2YgPSB7fTtcblxudmFyIGNvbGxlY3Rpb25PZjtcbnZhciBoYXNSZXF1aXJlZENvbGxlY3Rpb25PZjtcblxuZnVuY3Rpb24gcmVxdWlyZUNvbGxlY3Rpb25PZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbGxlY3Rpb25PZikgcmV0dXJuIGNvbGxlY3Rpb25PZjtcblx0aGFzUmVxdWlyZWRDb2xsZWN0aW9uT2YgPSAxO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG5cdGNvbGxlY3Rpb25PZiA9IGZ1bmN0aW9uIChDLCBhZGRlciwgRU5UUlkpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gb2YoKSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gbmV3IEMoKTtcblx0ICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuXHQgICAgICB2YXIgZW50cnkgPSBhcmd1bWVudHNbaW5kZXhdO1xuXHQgICAgICBpZiAoRU5UUlkpIGFkZGVyKHJlc3VsdCwgYW5PYmplY3QoZW50cnkpWzBdLCBlbnRyeVsxXSk7XG5cdCAgICAgIGVsc2UgYWRkZXIocmVzdWx0LCBlbnRyeSk7XG5cdCAgICB9IHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGNvbGxlY3Rpb25PZjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9vZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX29mKSByZXR1cm4gZXNuZXh0X21hcF9vZjtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX29mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uT2YgPSByZXF1aXJlQ29sbGVjdGlvbk9mKCk7XG5cblx0Ly8gYE1hcC5vZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxuXHQkKHsgdGFyZ2V0OiAnTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBvZjogY3JlYXRlQ29sbGVjdGlvbk9mKE1hcEhlbHBlcnMuTWFwLCBNYXBIZWxwZXJzLnNldCwgdHJ1ZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX29mO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9vZigpO1xuXG52YXIgZXNuZXh0X21hcF9yZWR1Y2UgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9yZWR1Y2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX3JlZHVjZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfcmVkdWNlKSByZXR1cm4gZXNuZXh0X21hcF9yZWR1Y2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9yZWR1Y2UgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgbm9Jbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA8IDI7XG5cdCAgICB2YXIgYWNjdW11bGF0b3IgPSBub0luaXRpYWwgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG5cdCAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG5cdCAgICBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKG5vSW5pdGlhbCkge1xuXHQgICAgICAgIG5vSW5pdGlhbCA9IGZhbHNlO1xuXHQgICAgICAgIGFjY3VtdWxhdG9yID0gdmFsdWU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYWNjdW11bGF0b3IgPSBjYWxsYmFja2ZuKGFjY3VtdWxhdG9yLCB2YWx1ZSwga2V5LCBtYXApO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIGlmIChub0luaXRpYWwpIHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbWFwIHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuXHQgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX3JlZHVjZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfcmVkdWNlKCk7XG5cbnZhciBlc25leHRfbWFwX3NvbWUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9zb21lO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9zb21lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9zb21lKSByZXR1cm4gZXNuZXh0X21hcF9zb21lO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfc29tZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5zb21lYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICByZXR1cm4gaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpIHJldHVybiB0cnVlO1xuXHQgICAgfSwgdHJ1ZSkgPT09IHRydWU7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfc29tZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfc29tZSgpO1xuXG52YXIgZXNuZXh0X21hcF91cGRhdGUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF91cGRhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX3VwZGF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfdXBkYXRlKSByZXR1cm4gZXNuZXh0X21hcF91cGRhdGU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF91cGRhdGUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHR2YXIgZ2V0ID0gTWFwSGVscGVycy5nZXQ7XG5cdHZhciBoYXMgPSBNYXBIZWxwZXJzLmhhcztcblx0dmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLnVwZGF0ZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoa2V5LCBjYWxsYmFjayAvKiAsIHRodW5rICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgYUNhbGxhYmxlKGNhbGxiYWNrKTtcblx0ICAgIHZhciBpc1ByZXNlbnRJbk1hcCA9IGhhcyhtYXAsIGtleSk7XG5cdCAgICBpZiAoIWlzUHJlc2VudEluTWFwICYmIGxlbmd0aCA8IDMpIHtcblx0ICAgICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1VwZGF0aW5nIGFic2VudCB2YWx1ZScpO1xuXHQgICAgfVxuXHQgICAgdmFyIHZhbHVlID0gaXNQcmVzZW50SW5NYXAgPyBnZXQobWFwLCBrZXkpIDogYUNhbGxhYmxlKGxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpKGtleSwgbWFwKTtcblx0ICAgIHNldChtYXAsIGtleSwgY2FsbGJhY2sodmFsdWUsIGtleSwgbWFwKSk7XG5cdCAgICByZXR1cm4gbWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX3VwZGF0ZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfdXBkYXRlKCk7XG5cbnZhciBlc25leHRfbWF0aF9jbGFtcCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9jbGFtcDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2NsYW1wICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfY2xhbXApIHJldHVybiBlc25leHRfbWF0aF9jbGFtcDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9jbGFtcCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHR2YXIgbWluID0gTWF0aC5taW47XG5cdHZhciBtYXggPSBNYXRoLm1heDtcblxuXHQvLyBgTWF0aC5jbGFtcGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh4LCBsb3dlciwgdXBwZXIpIHtcblx0ICAgIHJldHVybiBtaW4odXBwZXIsIG1heChsb3dlciwgeCkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9jbGFtcDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2NsYW1wKCk7XG5cbnZhciBlc25leHRfbWF0aF9kZWdQZXJSYWQgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVnUGVyUmFkO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfZGVnUGVyUmFkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVnUGVyUmFkKSByZXR1cm4gZXNuZXh0X21hdGhfZGVnUGVyUmFkO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ1BlclJhZCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5ERUdfUEVSX1JBRGAgY29uc3RhbnRcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIG5vbkNvbmZpZ3VyYWJsZTogdHJ1ZSwgbm9uV3JpdGFibGU6IHRydWUgfSwge1xuXHQgIERFR19QRVJfUkFEOiBNYXRoLlBJIC8gMTgwXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfZGVnUGVyUmFkO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfZGVnUGVyUmFkKCk7XG5cbnZhciBlc25leHRfbWF0aF9kZWdyZWVzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ3JlZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9kZWdyZWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVncmVlcykgcmV0dXJuIGVzbmV4dF9tYXRoX2RlZ3JlZXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVncmVlcyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHR2YXIgUkFEX1BFUl9ERUcgPSAxODAgLyBNYXRoLlBJO1xuXG5cdC8vIGBNYXRoLmRlZ3JlZXNgIG1ldGhvZFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkZWdyZWVzOiBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMpIHtcblx0ICAgIHJldHVybiByYWRpYW5zICogUkFEX1BFUl9ERUc7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2RlZ3JlZXM7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9kZWdyZWVzKCk7XG5cbnZhciBlc25leHRfbWF0aF9mc2NhbGUgPSB7fTtcblxudmFyIG1hdGhTY2FsZTtcbnZhciBoYXNSZXF1aXJlZE1hdGhTY2FsZTtcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhTY2FsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhTY2FsZSkgcmV0dXJuIG1hdGhTY2FsZTtcblx0aGFzUmVxdWlyZWRNYXRoU2NhbGUgPSAxO1xuXHQvLyBgTWF0aC5zY2FsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0bWF0aFNjYWxlID0gZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG5cdCAgdmFyIG54ID0gK3g7XG5cdCAgdmFyIG5JbkxvdyA9ICtpbkxvdztcblx0ICB2YXIgbkluSGlnaCA9ICtpbkhpZ2g7XG5cdCAgdmFyIG5PdXRMb3cgPSArb3V0TG93O1xuXHQgIHZhciBuT3V0SGlnaCA9ICtvdXRIaWdoO1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgaWYgKG54ICE9PSBueCB8fCBuSW5Mb3cgIT09IG5JbkxvdyB8fCBuSW5IaWdoICE9PSBuSW5IaWdoIHx8IG5PdXRMb3cgIT09IG5PdXRMb3cgfHwgbk91dEhpZ2ggIT09IG5PdXRIaWdoKSByZXR1cm4gTmFOO1xuXHQgIGlmIChueCA9PT0gSW5maW5pdHkgfHwgbnggPT09IC1JbmZpbml0eSkgcmV0dXJuIG54O1xuXHQgIHJldHVybiAobnggLSBuSW5Mb3cpICogKG5PdXRIaWdoIC0gbk91dExvdykgLyAobkluSGlnaCAtIG5JbkxvdykgKyBuT3V0TG93O1xuXHR9O1xuXHRyZXR1cm4gbWF0aFNjYWxlO1xufVxuXG52YXIgbWF0aFNpZ247XG52YXIgaGFzUmVxdWlyZWRNYXRoU2lnbjtcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhTaWduICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aFNpZ24pIHJldHVybiBtYXRoU2lnbjtcblx0aGFzUmVxdWlyZWRNYXRoU2lnbiA9IDE7XG5cdC8vIGBNYXRoLnNpZ25gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGguc2lnblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC1zaWduIC0tIHNhZmVcblx0bWF0aFNpZ24gPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KSB7XG5cdCAgdmFyIG4gPSAreDtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIHJldHVybiBuID09PSAwIHx8IG4gIT09IG4gPyBuIDogbiA8IDAgPyAtMSA6IDE7XG5cdH07XG5cdHJldHVybiBtYXRoU2lnbjtcbn1cblxudmFyIG1hdGhSb3VuZFRpZXNUb0V2ZW47XG52YXIgaGFzUmVxdWlyZWRNYXRoUm91bmRUaWVzVG9FdmVuO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aFJvdW5kVGllc1RvRXZlbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhSb3VuZFRpZXNUb0V2ZW4pIHJldHVybiBtYXRoUm91bmRUaWVzVG9FdmVuO1xuXHRoYXNSZXF1aXJlZE1hdGhSb3VuZFRpZXNUb0V2ZW4gPSAxO1xuXHR2YXIgRVBTSUxPTiA9IDIuMjIwNDQ2MDQ5MjUwMzEzZS0xNjsgLy8gTnVtYmVyLkVQU0lMT05cblx0dmFyIElOVkVSU0VfRVBTSUxPTiA9IDEgLyBFUFNJTE9OO1xuXG5cdG1hdGhSb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbiAobikge1xuXHQgIHJldHVybiBuICsgSU5WRVJTRV9FUFNJTE9OIC0gSU5WRVJTRV9FUFNJTE9OO1xuXHR9O1xuXHRyZXR1cm4gbWF0aFJvdW5kVGllc1RvRXZlbjtcbn1cblxudmFyIG1hdGhGbG9hdFJvdW5kO1xudmFyIGhhc1JlcXVpcmVkTWF0aEZsb2F0Um91bmQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoRmxvYXRSb3VuZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhGbG9hdFJvdW5kKSByZXR1cm4gbWF0aEZsb2F0Um91bmQ7XG5cdGhhc1JlcXVpcmVkTWF0aEZsb2F0Um91bmQgPSAxO1xuXHR2YXIgc2lnbiA9IHJlcXVpcmVNYXRoU2lnbigpO1xuXHR2YXIgcm91bmRUaWVzVG9FdmVuID0gcmVxdWlyZU1hdGhSb3VuZFRpZXNUb0V2ZW4oKTtcblxuXHR2YXIgYWJzID0gTWF0aC5hYnM7XG5cblx0dmFyIEVQU0lMT04gPSAyLjIyMDQ0NjA0OTI1MDMxM2UtMTY7IC8vIE51bWJlci5FUFNJTE9OXG5cblx0bWF0aEZsb2F0Um91bmQgPSBmdW5jdGlvbiAoeCwgRkxPQVRfRVBTSUxPTiwgRkxPQVRfTUFYX1ZBTFVFLCBGTE9BVF9NSU5fVkFMVUUpIHtcblx0ICB2YXIgbiA9ICt4O1xuXHQgIHZhciBhYnNvbHV0ZSA9IGFicyhuKTtcblx0ICB2YXIgcyA9IHNpZ24obik7XG5cdCAgaWYgKGFic29sdXRlIDwgRkxPQVRfTUlOX1ZBTFVFKSByZXR1cm4gcyAqIHJvdW5kVGllc1RvRXZlbihhYnNvbHV0ZSAvIEZMT0FUX01JTl9WQUxVRSAvIEZMT0FUX0VQU0lMT04pICogRkxPQVRfTUlOX1ZBTFVFICogRkxPQVRfRVBTSUxPTjtcblx0ICB2YXIgYSA9ICgxICsgRkxPQVRfRVBTSUxPTiAvIEVQU0lMT04pICogYWJzb2x1dGU7XG5cdCAgdmFyIHJlc3VsdCA9IGEgLSAoYSAtIGFic29sdXRlKTtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIGlmIChyZXN1bHQgPiBGTE9BVF9NQVhfVkFMVUUgfHwgcmVzdWx0ICE9PSByZXN1bHQpIHJldHVybiBzICogSW5maW5pdHk7XG5cdCAgcmV0dXJuIHMgKiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBtYXRoRmxvYXRSb3VuZDtcbn1cblxudmFyIG1hdGhGcm91bmQ7XG52YXIgaGFzUmVxdWlyZWRNYXRoRnJvdW5kO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aEZyb3VuZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhGcm91bmQpIHJldHVybiBtYXRoRnJvdW5kO1xuXHRoYXNSZXF1aXJlZE1hdGhGcm91bmQgPSAxO1xuXHR2YXIgZmxvYXRSb3VuZCA9IHJlcXVpcmVNYXRoRmxvYXRSb3VuZCgpO1xuXG5cdHZhciBGTE9BVDMyX0VQU0lMT04gPSAxLjE5MjA5Mjg5NTUwNzgxMjVlLTc7IC8vIDIgKiogLTIzO1xuXHR2YXIgRkxPQVQzMl9NQVhfVkFMVUUgPSAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4OyAvLyAyICoqIDEyOCAtIDIgKiogMTA0XG5cdHZhciBGTE9BVDMyX01JTl9WQUxVRSA9IDEuMTc1NDk0MzUwODIyMjg3NWUtMzg7IC8vIDIgKiogLTEyNjtcblxuXHQvLyBgTWF0aC5mcm91bmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGguZnJvdW5kXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLWZyb3VuZCAtLSBzYWZlXG5cdG1hdGhGcm91bmQgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuXHQgIHJldHVybiBmbG9hdFJvdW5kKHgsIEZMT0FUMzJfRVBTSUxPTiwgRkxPQVQzMl9NQVhfVkFMVUUsIEZMT0FUMzJfTUlOX1ZBTFVFKTtcblx0fTtcblx0cmV0dXJuIG1hdGhGcm91bmQ7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ZzY2FsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2ZzY2FsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ZzY2FsZSkgcmV0dXJuIGVzbmV4dF9tYXRoX2ZzY2FsZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9mc2NhbGUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0dmFyIHNjYWxlID0gcmVxdWlyZU1hdGhTY2FsZSgpO1xuXHR2YXIgZnJvdW5kID0gcmVxdWlyZU1hdGhGcm91bmQoKTtcblxuXHQvLyBgTWF0aC5mc2NhbGVgIG1ldGhvZFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmc2NhbGU6IGZ1bmN0aW9uIGZzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcblx0ICAgIHJldHVybiBmcm91bmQoc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2ZzY2FsZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2ZzY2FsZSgpO1xuXG52YXIgZXNuZXh0X21hdGhfaWFkZGggPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaWFkZGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9pYWRkaCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lhZGRoKSByZXR1cm4gZXNuZXh0X21hdGhfaWFkZGg7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaWFkZGggPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguaWFkZGhgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaWFkZGg6IGZ1bmN0aW9uIGlhZGRoKHgwLCB4MSwgeTAsIHkxKSB7XG5cdCAgICB2YXIgJHgwID0geDAgPj4+IDA7XG5cdCAgICB2YXIgJHgxID0geDEgPj4+IDA7XG5cdCAgICB2YXIgJHkwID0geTAgPj4+IDA7XG5cdCAgICByZXR1cm4gJHgxICsgKHkxID4+PiAwKSArICgoJHgwICYgJHkwIHwgKCR4MCB8ICR5MCkgJiB+KCR4MCArICR5MCA+Pj4gMCkpID4+PiAzMSkgfCAwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9pYWRkaDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2lhZGRoKCk7XG5cbnZhciBlc25leHRfbWF0aF9pbXVsaCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pbXVsaDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2ltdWxoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaW11bGgpIHJldHVybiBlc25leHRfbWF0aF9pbXVsaDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9pbXVsaCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5pbXVsaGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpbXVsaDogZnVuY3Rpb24gaW11bGgodSwgdikge1xuXHQgICAgdmFyIFVJTlQxNiA9IDB4RkZGRjtcblx0ICAgIHZhciAkdSA9ICt1O1xuXHQgICAgdmFyICR2ID0gK3Y7XG5cdCAgICB2YXIgdTAgPSAkdSAmIFVJTlQxNjtcblx0ICAgIHZhciB2MCA9ICR2ICYgVUlOVDE2O1xuXHQgICAgdmFyIHUxID0gJHUgPj4gMTY7XG5cdCAgICB2YXIgdjEgPSAkdiA+PiAxNjtcblx0ICAgIHZhciB0ID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcblx0ICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2ltdWxoO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfaW11bGgoKTtcblxudmFyIGVzbmV4dF9tYXRoX2lzdWJoID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lzdWJoO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfaXN1YmggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pc3ViaCkgcmV0dXJuIGVzbmV4dF9tYXRoX2lzdWJoO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lzdWJoID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLmlzdWJoYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGlzdWJoOiBmdW5jdGlvbiBpc3ViaCh4MCwgeDEsIHkwLCB5MSkge1xuXHQgICAgdmFyICR4MCA9IHgwID4+PiAwO1xuXHQgICAgdmFyICR4MSA9IHgxID4+PiAwO1xuXHQgICAgdmFyICR5MCA9IHkwID4+PiAwO1xuXHQgICAgcmV0dXJuICR4MSAtICh5MSA+Pj4gMCkgLSAoKH4keDAgJiAkeTAgfCB+KCR4MCBeICR5MCkgJiAkeDAgLSAkeTAgPj4+IDApID4+PiAzMSkgfCAwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9pc3ViaDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2lzdWJoKCk7XG5cbnZhciBlc25leHRfbWF0aF9yYWRQZXJEZWcgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkUGVyRGVnO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfcmFkUGVyRGVnICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkUGVyRGVnKSByZXR1cm4gZXNuZXh0X21hdGhfcmFkUGVyRGVnO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZFBlckRlZyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5SQURfUEVSX0RFR2AgY29uc3RhbnRcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIG5vbkNvbmZpZ3VyYWJsZTogdHJ1ZSwgbm9uV3JpdGFibGU6IHRydWUgfSwge1xuXHQgIFJBRF9QRVJfREVHOiAxODAgLyBNYXRoLlBJXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfcmFkUGVyRGVnO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfcmFkUGVyRGVnKCk7XG5cbnZhciBlc25leHRfbWF0aF9yYWRpYW5zID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZGlhbnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9yYWRpYW5zICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkaWFucykgcmV0dXJuIGVzbmV4dF9tYXRoX3JhZGlhbnM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkaWFucyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHR2YXIgREVHX1BFUl9SQUQgPSBNYXRoLlBJIC8gMTgwO1xuXG5cdC8vIGBNYXRoLnJhZGlhbnNgIG1ldGhvZFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICByYWRpYW5zOiBmdW5jdGlvbiByYWRpYW5zKGRlZ3JlZXMpIHtcblx0ICAgIHJldHVybiBkZWdyZWVzICogREVHX1BFUl9SQUQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3JhZGlhbnM7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9yYWRpYW5zKCk7XG5cbnZhciBlc25leHRfbWF0aF9zY2FsZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zY2FsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3NjYWxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2NhbGUpIHJldHVybiBlc25leHRfbWF0aF9zY2FsZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9zY2FsZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHNjYWxlID0gcmVxdWlyZU1hdGhTY2FsZSgpO1xuXG5cdC8vIGBNYXRoLnNjYWxlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc2NhbGU6IHNjYWxlXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfc2NhbGU7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9zY2FsZSgpO1xuXG52YXIgZXNuZXh0X21hdGhfc2VlZGVkUHJuZyA9IHt9O1xuXG52YXIgbnVtYmVySXNGaW5pdGU7XG52YXIgaGFzUmVxdWlyZWROdW1iZXJJc0Zpbml0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZU51bWJlcklzRmluaXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTnVtYmVySXNGaW5pdGUpIHJldHVybiBudW1iZXJJc0Zpbml0ZTtcblx0aGFzUmVxdWlyZWROdW1iZXJJc0Zpbml0ZSA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblxuXHR2YXIgZ2xvYmFsSXNGaW5pdGUgPSBnbG9iYWxUaGlzLmlzRmluaXRlO1xuXG5cdC8vIGBOdW1iZXIuaXNGaW5pdGVgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5pc2Zpbml0ZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbnVtYmVyLWlzZmluaXRlIC0tIHNhZmVcblx0bnVtYmVySXNGaW5pdGUgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gaXNGaW5pdGUoaXQpIHtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIGdsb2JhbElzRmluaXRlKGl0KTtcblx0fTtcblx0cmV0dXJuIG51bWJlcklzRmluaXRlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zZWVkZWRQcm5nO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfc2VlZGVkUHJuZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NlZWRlZFBybmcpIHJldHVybiBlc25leHRfbWF0aF9zZWVkZWRQcm5nO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NlZWRlZFBybmcgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgbnVtYmVySXNGaW5pdGUgPSByZXF1aXJlTnVtYmVySXNGaW5pdGUoKTtcblx0dmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcigpO1xuXHR2YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmVDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KCk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblxuXHR2YXIgU0VFREVEX1JBTkRPTSA9ICdTZWVkZWQgUmFuZG9tJztcblx0dmFyIFNFRURFRF9SQU5ET01fR0VORVJBVE9SID0gU0VFREVEX1JBTkRPTSArICcgR2VuZXJhdG9yJztcblx0dmFyIFNFRURfVFlQRV9FUlJPUiA9ICdNYXRoLnNlZWRlZFBSTkcoKSBhcmd1bWVudCBzaG91bGQgaGF2ZSBhIFwic2VlZFwiIGZpZWxkIHdpdGggYSBmaW5pdGUgdmFsdWUuJztcblx0dmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblx0dmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTRUVERURfUkFORE9NX0dFTkVSQVRPUik7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdHZhciAkU2VlZGVkUmFuZG9tR2VuZXJhdG9yID0gY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihmdW5jdGlvbiBTZWVkZWRSYW5kb21HZW5lcmF0b3Ioc2VlZCkge1xuXHQgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuXHQgICAgdHlwZTogU0VFREVEX1JBTkRPTV9HRU5FUkFUT1IsXG5cdCAgICBzZWVkOiBzZWVkICUgMjE0NzQ4MzY0N1xuXHQgIH0pO1xuXHR9LCBTRUVERURfUkFORE9NLCBmdW5jdGlvbiBuZXh0KCkge1xuXHQgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgdmFyIHNlZWQgPSBzdGF0ZS5zZWVkID0gKHN0YXRlLnNlZWQgKiAxMTAzNTE1MjQ1ICsgMTIzNDUpICUgMjE0NzQ4MzY0Nztcblx0ICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCgoc2VlZCAmIDEwNzM3NDE4MjMpIC8gMTA3Mzc0MTgyMywgZmFsc2UpO1xuXHR9KTtcblxuXHQvLyBgTWF0aC5zZWVkZWRQUk5HYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2VlZGVkLXJhbmRvbVxuXHQvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZWVkZWQtcmFuZG9tL2Jsb2IvNzhiODI1ODgzNWI1N2ZjMjEwMGQwNzYxNTFhYjUwNmJjMzIwMmFlNi9kZW1vLmh0bWxcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHNlZWRlZFBSTkc6IGZ1bmN0aW9uIHNlZWRlZFBSTkcoaXQpIHtcblx0ICAgIHZhciBzZWVkID0gYW5PYmplY3QoaXQpLnNlZWQ7XG5cdCAgICBpZiAoIW51bWJlcklzRmluaXRlKHNlZWQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihTRUVEX1RZUEVfRVJST1IpO1xuXHQgICAgcmV0dXJuIG5ldyAkU2VlZGVkUmFuZG9tR2VuZXJhdG9yKHNlZWQpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9zZWVkZWRQcm5nO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfc2VlZGVkUHJuZygpO1xuXG52YXIgZXNuZXh0X21hdGhfc2lnbmJpdCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zaWduYml0O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfc2lnbmJpdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NpZ25iaXQpIHJldHVybiBlc25leHRfbWF0aF9zaWduYml0O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NpZ25iaXQgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguc2lnbmJpdGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLU1hdGguc2lnbmJpdFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc2lnbmJpdDogZnVuY3Rpb24gc2lnbmJpdCh4KSB7XG5cdCAgICB2YXIgbiA9ICt4O1xuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICAgIHJldHVybiBuID09PSBuICYmIG4gPT09IDAgPyAxIC8gbiA9PT0gLUluZmluaXR5IDogbiA8IDA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3NpZ25iaXQ7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9zaWduYml0KCk7XG5cbnZhciBlc25leHRfbWF0aF91bXVsaCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF91bXVsaDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3VtdWxoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfdW11bGgpIHJldHVybiBlc25leHRfbWF0aF91bXVsaDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF91bXVsaCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC51bXVsaGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICB1bXVsaDogZnVuY3Rpb24gdW11bGgodSwgdikge1xuXHQgICAgdmFyIFVJTlQxNiA9IDB4RkZGRjtcblx0ICAgIHZhciAkdSA9ICt1O1xuXHQgICAgdmFyICR2ID0gK3Y7XG5cdCAgICB2YXIgdTAgPSAkdSAmIFVJTlQxNjtcblx0ICAgIHZhciB2MCA9ICR2ICYgVUlOVDE2O1xuXHQgICAgdmFyIHUxID0gJHUgPj4+IDE2O1xuXHQgICAgdmFyIHYxID0gJHYgPj4+IDE2O1xuXHQgICAgdmFyIHQgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuXHQgICAgcmV0dXJuIHUxICogdjEgKyAodCA+Pj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+Pj4gMTYpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF91bXVsaDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3VtdWxoKCk7XG5cbnZhciBlc25leHRfbnVtYmVyX2Zyb21TdHJpbmcgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X251bWJlcl9mcm9tU3RyaW5nO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X251bWJlcl9mcm9tU3RyaW5nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X251bWJlcl9mcm9tU3RyaW5nKSByZXR1cm4gZXNuZXh0X251bWJlcl9mcm9tU3RyaW5nO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9udW1iZXJfZnJvbVN0cmluZyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXG5cdHZhciBJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTiA9ICdJbnZhbGlkIG51bWJlciByZXByZXNlbnRhdGlvbic7XG5cdHZhciBJTlZBTElEX1JBRElYID0gJ0ludmFsaWQgcmFkaXgnO1xuXHR2YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXHR2YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHR2YXIgJHBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cdHZhciBwb3cgPSBNYXRoLnBvdztcblx0dmFyIHZhbGlkID0gL15bXFxkLmEtel0rJC87XG5cdHZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xuXHR2YXIgZXhlYyA9IHVuY3VycnlUaGlzKHZhbGlkLmV4ZWMpO1xuXHR2YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXHR2YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cdHZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuXHQvLyBgTnVtYmVyLmZyb21TdHJpbmdgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1udW1iZXItZnJvbXN0cmluZ1xuXHQkKHsgdGFyZ2V0OiAnTnVtYmVyJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tU3RyaW5nOiBmdW5jdGlvbiBmcm9tU3RyaW5nKHN0cmluZywgcmFkaXgpIHtcblx0ICAgIHZhciBzaWduID0gMTtcblx0ICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9ICdzdHJpbmcnKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTik7XG5cdCAgICBpZiAoIXN0cmluZy5sZW5ndGgpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04pO1xuXHQgICAgaWYgKGNoYXJBdChzdHJpbmcsIDApID09PSAnLScpIHtcblx0ICAgICAgc2lnbiA9IC0xO1xuXHQgICAgICBzdHJpbmcgPSBzdHJpbmdTbGljZShzdHJpbmcsIDEpO1xuXHQgICAgICBpZiAoIXN0cmluZy5sZW5ndGgpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04pO1xuXHQgICAgfVxuXHQgICAgdmFyIFIgPSByYWRpeCA9PT0gdW5kZWZpbmVkID8gMTAgOiB0b0ludGVnZXJPckluZmluaXR5KHJhZGl4KTtcblx0ICAgIGlmIChSIDwgMiB8fCBSID4gMzYpIHRocm93IG5ldyAkUmFuZ2VFcnJvcihJTlZBTElEX1JBRElYKTtcblx0ICAgIGlmICghZXhlYyh2YWxpZCwgc3RyaW5nKSkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcihJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTik7XG5cdCAgICB2YXIgcGFydHMgPSBzcGxpdChzdHJpbmcsICcuJyk7XG5cdCAgICB2YXIgbWF0aE51bSA9ICRwYXJzZUludChwYXJ0c1swXSwgUik7XG5cdCAgICBpZiAocGFydHMubGVuZ3RoID4gMSkgbWF0aE51bSArPSAkcGFyc2VJbnQocGFydHNbMV0sIFIpIC8gcG93KFIsIHBhcnRzWzFdLmxlbmd0aCk7XG5cdCAgICBpZiAoUiA9PT0gMTAgJiYgbnVtYmVyVG9TdHJpbmcobWF0aE51bSwgUikgIT09IHN0cmluZykgdGhyb3cgbmV3ICRTeW50YXhFcnJvcihJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTik7XG5cdCAgICByZXR1cm4gc2lnbiAqIG1hdGhOdW07XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9udW1iZXJfZnJvbVN0cmluZztcbn1cblxucmVxdWlyZUVzbmV4dF9udW1iZXJfZnJvbVN0cmluZygpO1xuXG52YXIgZXNuZXh0X29ic2VydmFibGUgPSB7fTtcblxudmFyIGVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yID0ge307XG5cbnZhciBob3N0UmVwb3J0RXJyb3JzO1xudmFyIGhhc1JlcXVpcmVkSG9zdFJlcG9ydEVycm9ycztcblxuZnVuY3Rpb24gcmVxdWlyZUhvc3RSZXBvcnRFcnJvcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRIb3N0UmVwb3J0RXJyb3JzKSByZXR1cm4gaG9zdFJlcG9ydEVycm9ycztcblx0aGFzUmVxdWlyZWRIb3N0UmVwb3J0RXJyb3JzID0gMTtcblx0aG9zdFJlcG9ydEVycm9ycyA9IGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgdHJ5IHtcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIHNhZmVcblx0ICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdH07XG5cdHJldHVybiBob3N0UmVwb3J0RXJyb3JzO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3IpIHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvciA9IDE7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBzZXRTcGVjaWVzID0gcmVxdWlyZVNldFNwZWNpZXMoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBhbkluc3RhbmNlID0gcmVxdWlyZUFuSW5zdGFuY2UoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBnZXRNZXRob2QgPSByZXF1aXJlR2V0TWV0aG9kKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZURlZmluZUJ1aWx0SW5zKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cdHZhciBob3N0UmVwb3J0RXJyb3JzID0gcmVxdWlyZUhvc3RSZXBvcnRFcnJvcnMoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXG5cdHZhciAkJE9CU0VSVkFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ29ic2VydmFibGUnKTtcblx0dmFyIE9CU0VSVkFCTEUgPSAnT2JzZXJ2YWJsZSc7XG5cdHZhciBTVUJTQ1JJUFRJT04gPSAnU3Vic2NyaXB0aW9uJztcblx0dmFyIFNVQlNDUklQVElPTl9PQlNFUlZFUiA9ICdTdWJzY3JpcHRpb25PYnNlcnZlcic7XG5cdHZhciBnZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblx0dmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblx0dmFyIGdldE9ic2VydmFibGVJbnRlcm5hbFN0YXRlID0gZ2V0dGVyRm9yKE9CU0VSVkFCTEUpO1xuXHR2YXIgZ2V0U3Vic2NyaXB0aW9uSW50ZXJuYWxTdGF0ZSA9IGdldHRlckZvcihTVUJTQ1JJUFRJT04pO1xuXHR2YXIgZ2V0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJJbnRlcm5hbFN0YXRlID0gZ2V0dGVyRm9yKFNVQlNDUklQVElPTl9PQlNFUlZFUik7XG5cblx0dmFyIFN1YnNjcmlwdGlvblN0YXRlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG5cdCAgdGhpcy5vYnNlcnZlciA9IGFuT2JqZWN0KG9ic2VydmVyKTtcblx0ICB0aGlzLmNsZWFudXAgPSBudWxsO1xuXHQgIHRoaXMuc3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuXHR9O1xuXG5cdFN1YnNjcmlwdGlvblN0YXRlLnByb3RvdHlwZSA9IHtcblx0ICB0eXBlOiBTVUJTQ1JJUFRJT04sXG5cdCAgY2xlYW46IGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBjbGVhbnVwID0gdGhpcy5jbGVhbnVwO1xuXHQgICAgaWYgKGNsZWFudXApIHtcblx0ICAgICAgdGhpcy5jbGVhbnVwID0gbnVsbDtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICBjbGVhbnVwKCk7XG5cdCAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICAgICAgaG9zdFJlcG9ydEVycm9ycyhlcnJvcik7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAoIURFU0NSSVBUT1JTKSB7XG5cdCAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLmZhY2FkZTtcblx0ICAgICAgdmFyIHN1YnNjcmlwdGlvbk9ic2VydmVyID0gdGhpcy5zdWJzY3JpcHRpb25PYnNlcnZlcjtcblx0ICAgICAgc3Vic2NyaXB0aW9uLmNsb3NlZCA9IHRydWU7XG5cdCAgICAgIGlmIChzdWJzY3JpcHRpb25PYnNlcnZlcikgc3Vic2NyaXB0aW9uT2JzZXJ2ZXIuY2xvc2VkID0gdHJ1ZTtcblx0ICAgIH0gdGhpcy5vYnNlcnZlciA9IG51bGw7XG5cdCAgfSxcblx0ICBpc0Nsb3NlZDogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIgPT09IG51bGw7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHN1YnNjcmliZXIpIHtcblx0ICB2YXIgc3Vic2NyaXB0aW9uU3RhdGUgPSBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIG5ldyBTdWJzY3JpcHRpb25TdGF0ZShvYnNlcnZlcikpO1xuXHQgIHZhciBzdGFydDtcblx0ICBpZiAoIURFU0NSSVBUT1JTKSB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuXHQgIHRyeSB7XG5cdCAgICBpZiAoc3RhcnQgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsICdzdGFydCcpKSBjYWxsKHN0YXJ0LCBvYnNlcnZlciwgdGhpcyk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIGhvc3RSZXBvcnRFcnJvcnMoZXJyb3IpO1xuXHQgIH1cblx0ICBpZiAoc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkgcmV0dXJuO1xuXHQgIHZhciBzdWJzY3JpcHRpb25PYnNlcnZlciA9IHN1YnNjcmlwdGlvblN0YXRlLnN1YnNjcmlwdGlvbk9ic2VydmVyID0gbmV3IFN1YnNjcmlwdGlvbk9ic2VydmVyKHN1YnNjcmlwdGlvblN0YXRlKTtcblx0ICB0cnkge1xuXHQgICAgdmFyIGNsZWFudXAgPSBzdWJzY3JpYmVyKHN1YnNjcmlwdGlvbk9ic2VydmVyKTtcblx0ICAgIHZhciBzdWJzY3JpcHRpb24gPSBjbGVhbnVwO1xuXHQgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChjbGVhbnVwKSkgc3Vic2NyaXB0aW9uU3RhdGUuY2xlYW51cCA9IGlzQ2FsbGFibGUoY2xlYW51cC51bnN1YnNjcmliZSlcblx0ICAgICAgPyBmdW5jdGlvbiAoKSB7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9XG5cdCAgICAgIDogYUNhbGxhYmxlKGNsZWFudXApO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICBzdWJzY3JpcHRpb25PYnNlcnZlci5lcnJvcihlcnJvcik7XG5cdCAgICByZXR1cm47XG5cdCAgfSBpZiAoc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkgc3Vic2NyaXB0aW9uU3RhdGUuY2xlYW4oKTtcblx0fTtcblxuXHRTdWJzY3JpcHRpb24ucHJvdG90eXBlID0gZGVmaW5lQnVpbHRJbnMoe30sIHtcblx0ICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uU3RhdGUgPSBnZXRTdWJzY3JpcHRpb25JbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgaWYgKCFzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSB7XG5cdCAgICAgIHN1YnNjcmlwdGlvblN0YXRlLmNsb3NlKCk7XG5cdCAgICAgIHN1YnNjcmlwdGlvblN0YXRlLmNsZWFuKCk7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuXHRpZiAoREVTQ1JJUFRPUlMpIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihTdWJzY3JpcHRpb24ucHJvdG90eXBlLCAnY2xvc2VkJywge1xuXHQgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGNsb3NlZCgpIHtcblx0ICAgIHJldHVybiBnZXRTdWJzY3JpcHRpb25JbnRlcm5hbFN0YXRlKHRoaXMpLmlzQ2xvc2VkKCk7XG5cdCAgfVxuXHR9KTtcblxuXHR2YXIgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uU3RhdGUpIHtcblx0ICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcblx0ICAgIHR5cGU6IFNVQlNDUklQVElPTl9PQlNFUlZFUixcblx0ICAgIHN1YnNjcmlwdGlvblN0YXRlOiBzdWJzY3JpcHRpb25TdGF0ZVxuXHQgIH0pO1xuXHQgIGlmICghREVTQ1JJUFRPUlMpIHRoaXMuY2xvc2VkID0gZmFsc2U7XG5cdH07XG5cblx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gZGVmaW5lQnVpbHRJbnMoe30sIHtcblx0ICBuZXh0OiBmdW5jdGlvbiBuZXh0KHZhbHVlKSB7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uU3RhdGUgPSBnZXRTdWJzY3JpcHRpb25PYnNlcnZlckludGVybmFsU3RhdGUodGhpcykuc3Vic2NyaXB0aW9uU3RhdGU7XG5cdCAgICBpZiAoIXN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uU3RhdGUub2JzZXJ2ZXI7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIG5leHRNZXRob2QgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsICduZXh0Jyk7XG5cdCAgICAgICAgaWYgKG5leHRNZXRob2QpIGNhbGwobmV4dE1ldGhvZCwgb2JzZXJ2ZXIsIHZhbHVlKTtcblx0ICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICBob3N0UmVwb3J0RXJyb3JzKGVycm9yKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKSB7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uU3RhdGUgPSBnZXRTdWJzY3JpcHRpb25PYnNlcnZlckludGVybmFsU3RhdGUodGhpcykuc3Vic2NyaXB0aW9uU3RhdGU7XG5cdCAgICBpZiAoIXN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uU3RhdGUub2JzZXJ2ZXI7XG5cdCAgICAgIHN1YnNjcmlwdGlvblN0YXRlLmNsb3NlKCk7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIGVycm9yTWV0aG9kID0gZ2V0TWV0aG9kKG9ic2VydmVyLCAnZXJyb3InKTtcblx0ICAgICAgICBpZiAoZXJyb3JNZXRob2QpIGNhbGwoZXJyb3JNZXRob2QsIG9ic2VydmVyLCB2YWx1ZSk7XG5cdCAgICAgICAgZWxzZSBob3N0UmVwb3J0RXJyb3JzKHZhbHVlKTtcblx0ICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgaG9zdFJlcG9ydEVycm9ycyhlcnIpO1xuXHQgICAgICB9IHN1YnNjcmlwdGlvblN0YXRlLmNsZWFuKCk7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uU3RhdGUgPSBnZXRTdWJzY3JpcHRpb25PYnNlcnZlckludGVybmFsU3RhdGUodGhpcykuc3Vic2NyaXB0aW9uU3RhdGU7XG5cdCAgICBpZiAoIXN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHtcblx0ICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uU3RhdGUub2JzZXJ2ZXI7XG5cdCAgICAgIHN1YnNjcmlwdGlvblN0YXRlLmNsb3NlKCk7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgdmFyIGNvbXBsZXRlTWV0aG9kID0gZ2V0TWV0aG9kKG9ic2VydmVyLCAnY29tcGxldGUnKTtcblx0ICAgICAgICBpZiAoY29tcGxldGVNZXRob2QpIGNhbGwoY29tcGxldGVNZXRob2QsIG9ic2VydmVyKTtcblx0ICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICBob3N0UmVwb3J0RXJyb3JzKGVycm9yKTtcblx0ICAgICAgfSBzdWJzY3JpcHRpb25TdGF0ZS5jbGVhbigpO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cblx0aWYgKERFU0NSSVBUT1JTKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoU3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLCAnY2xvc2VkJywge1xuXHQgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICBnZXQ6IGZ1bmN0aW9uIGNsb3NlZCgpIHtcblx0ICAgIHJldHVybiBnZXRTdWJzY3JpcHRpb25PYnNlcnZlckludGVybmFsU3RhdGUodGhpcykuc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKTtcblx0ICB9XG5cdH0pO1xuXG5cdHZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcikge1xuXHQgIGFuSW5zdGFuY2UodGhpcywgT2JzZXJ2YWJsZVByb3RvdHlwZSk7XG5cdCAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG5cdCAgICB0eXBlOiBPQlNFUlZBQkxFLFxuXHQgICAgc3Vic2NyaWJlcjogYUNhbGxhYmxlKHN1YnNjcmliZXIpXG5cdCAgfSk7XG5cdH07XG5cblx0dmFyIE9ic2VydmFibGVQcm90b3R5cGUgPSAkT2JzZXJ2YWJsZS5wcm90b3R5cGU7XG5cblx0ZGVmaW5lQnVpbHRJbnMoT2JzZXJ2YWJsZVByb3RvdHlwZSwge1xuXHQgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG5cdCAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKGlzQ2FsbGFibGUob2JzZXJ2ZXIpID8ge1xuXHQgICAgICBuZXh0OiBvYnNlcnZlcixcblx0ICAgICAgZXJyb3I6IGxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsXG5cdCAgICAgIGNvbXBsZXRlOiBsZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkXG5cdCAgICB9IDogaXNPYmplY3Qob2JzZXJ2ZXIpID8gb2JzZXJ2ZXIgOiB7fSwgZ2V0T2JzZXJ2YWJsZUludGVybmFsU3RhdGUodGhpcykuc3Vic2NyaWJlcik7XG5cdCAgfVxuXHR9KTtcblxuXHRkZWZpbmVCdWlsdEluKE9ic2VydmFibGVQcm90b3R5cGUsICQkT0JTRVJWQUJMRSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cblx0JCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgT2JzZXJ2YWJsZTogJE9ic2VydmFibGVcblx0fSk7XG5cblx0c2V0U3BlY2llcyhPQlNFUlZBQkxFKTtcblx0cmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yO1xufVxuXG52YXIgZXNuZXh0X29ic2VydmFibGVfZnJvbSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9mcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X29ic2VydmFibGVfZnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2Zyb20pIHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9mcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2Zyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmVJc0NvbnN0cnVjdG9yKCk7XG5cdHZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmVHZXRJdGVyYXRvcigpO1xuXHR2YXIgZ2V0TWV0aG9kID0gcmVxdWlyZUdldE1ldGhvZCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyICQkT0JTRVJWQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXG5cdC8vIGBPYnNlcnZhYmxlLmZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG5cdCQoeyB0YXJnZXQ6ICdPYnNlcnZhYmxlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpIHtcblx0ICAgIHZhciBDID0gaXNDb25zdHJ1Y3Rvcih0aGlzKSA/IHRoaXMgOiBnZXRCdWlsdEluKCdPYnNlcnZhYmxlJyk7XG5cdCAgICB2YXIgb2JzZXJ2YWJsZU1ldGhvZCA9IGdldE1ldGhvZChhbk9iamVjdCh4KSwgJCRPQlNFUlZBQkxFKTtcblx0ICAgIGlmIChvYnNlcnZhYmxlTWV0aG9kKSB7XG5cdCAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QoY2FsbChvYnNlcnZhYmxlTWV0aG9kLCB4KSk7XG5cdCAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNvbnN0cnVjdG9yID09PSBDID8gb2JzZXJ2YWJsZSA6IG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuXHQgICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgICAgdmFyIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoeCk7XG5cdCAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG5cdCAgICAgIGl0ZXJhdGUoaXRlcmF0b3IsIGZ1bmN0aW9uIChpdCwgc3RvcCkge1xuXHQgICAgICAgIG9ic2VydmVyLm5leHQoaXQpO1xuXHQgICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpIHJldHVybiBzdG9wKCk7XG5cdCAgICAgIH0sIHsgSVNfSVRFUkFUT1I6IHRydWUsIElOVEVSUlVQVEVEOiB0cnVlIH0pO1xuXHQgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX2Zyb207XG59XG5cbnZhciBlc25leHRfb2JzZXJ2YWJsZV9vZiA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9vZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfb2YpIHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9vZjtcblx0aGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9vZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmVJc0NvbnN0cnVjdG9yKCk7XG5cblx0dmFyIEFycmF5ID0gZ2V0QnVpbHRJbignQXJyYXknKTtcblxuXHQvLyBgT2JzZXJ2YWJsZS5vZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcblx0JCh7IHRhcmdldDogJ09ic2VydmFibGUnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG9mOiBmdW5jdGlvbiBvZigpIHtcblx0ICAgIHZhciBDID0gaXNDb25zdHJ1Y3Rvcih0aGlzKSA/IHRoaXMgOiBnZXRCdWlsdEluKCdPYnNlcnZhYmxlJyk7XG5cdCAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIHZhciBpdGVtcyA9IEFycmF5KGxlbmd0aCk7XG5cdCAgICB2YXIgaW5kZXggPSAwO1xuXHQgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSBpdGVtc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XG5cdCAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zW2ldKTtcblx0ICAgICAgICBpZiAob2JzZXJ2ZXIuY2xvc2VkKSByZXR1cm47XG5cdCAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9vZjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlKSByZXR1cm4gZXNuZXh0X29ic2VydmFibGU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGUgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5cdHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvcigpO1xuXHRyZXF1aXJlRXNuZXh0X29ic2VydmFibGVfZnJvbSgpO1xuXHRyZXF1aXJlRXNuZXh0X29ic2VydmFibGVfb2YoKTtcblx0cmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlO1xufVxuXG5yZXF1aXJlRXNuZXh0X29ic2VydmFibGUoKTtcblxudmFyIGVzbmV4dF9wcm9taXNlX3RyeSA9IHt9O1xuXG52YXIgZXNfcHJvbWlzZV90cnkgPSB7fTtcblxudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZE5ld1Byb21pc2VDYXBhYmlsaXR5O1xuXG5mdW5jdGlvbiByZXF1aXJlTmV3UHJvbWlzZUNhcGFiaWxpdHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWROZXdQcm9taXNlQ2FwYWJpbGl0eSkgcmV0dXJuIG5ld1Byb21pc2VDYXBhYmlsaXR5O1xuXHRoYXNSZXF1aXJlZE5ld1Byb21pc2VDYXBhYmlsaXR5ID0gMTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHR2YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuXHQgIHZhciByZXNvbHZlLCByZWplY3Q7XG5cdCAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcblx0ICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuXHQgICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcblx0ICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuXHQgIH0pO1xuXHQgIHRoaXMucmVzb2x2ZSA9IGFDYWxsYWJsZShyZXNvbHZlKTtcblx0ICB0aGlzLnJlamVjdCA9IGFDYWxsYWJsZShyZWplY3QpO1xuXHR9O1xuXG5cdC8vIGBOZXdQcm9taXNlQ2FwYWJpbGl0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbmV3cHJvbWlzZWNhcGFiaWxpdHlcblx0bmV3UHJvbWlzZUNhcGFiaWxpdHkuZiA9IGZ1bmN0aW9uIChDKSB7XG5cdCAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcblx0fTtcblx0cmV0dXJuIG5ld1Byb21pc2VDYXBhYmlsaXR5O1xufVxuXG52YXIgcGVyZm9ybTtcbnZhciBoYXNSZXF1aXJlZFBlcmZvcm07XG5cbmZ1bmN0aW9uIHJlcXVpcmVQZXJmb3JtICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUGVyZm9ybSkgcmV0dXJuIHBlcmZvcm07XG5cdGhhc1JlcXVpcmVkUGVyZm9ybSA9IDE7XG5cdHBlcmZvcm0gPSBmdW5jdGlvbiAoZXhlYykge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIHBlcmZvcm07XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX3Byb21pc2VfdHJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfcHJvbWlzZV90cnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc19wcm9taXNlX3RyeSkgcmV0dXJuIGVzX3Byb21pc2VfdHJ5O1xuXHRoYXNSZXF1aXJlZEVzX3Byb21pc2VfdHJ5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBhcHBseSA9IHJlcXVpcmVGdW5jdGlvbkFwcGx5KCk7XG5cdHZhciBzbGljZSA9IHJlcXVpcmVBcnJheVNsaWNlKCk7XG5cdHZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmVOZXdQcm9taXNlQ2FwYWJpbGl0eSgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgcGVyZm9ybSA9IHJlcXVpcmVQZXJmb3JtKCk7XG5cblx0dmFyIFByb21pc2UgPSBnbG9iYWxUaGlzLlByb21pc2U7XG5cblx0dmFyIEFDQ0VQVF9BUkdVTUVOVFMgPSBmYWxzZTtcblx0Ly8gQXZvaWRpbmcgdGhlIHVzZSBvZiBwb2x5ZmlsbHMgb2YgdGhlIHByZXZpb3VzIGl0ZXJhdGlvbiBvZiB0aGlzIHByb3Bvc2FsXG5cdC8vIHRoYXQgZG9lcyBub3QgYWNjZXB0IGFyZ3VtZW50cyBvZiB0aGUgY2FsbGJhY2tcblx0dmFyIEZPUkNFRCA9ICFQcm9taXNlIHx8ICFQcm9taXNlWyd0cnknXSB8fCBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcblx0ICBQcm9taXNlWyd0cnknXShmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICAgIEFDQ0VQVF9BUkdVTUVOVFMgPSBhcmd1bWVudCA9PT0gODtcblx0ICB9LCA4KTtcblx0fSkuZXJyb3IgfHwgIUFDQ0VQVF9BUkdVTUVOVFM7XG5cblx0Ly8gYFByb21pc2UudHJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnRyeVxuXHQkKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcblx0ICAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4gLyogLCAuLi5hcmdzICovKSB7XG5cdCAgICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UoYXJndW1lbnRzLCAxKSA6IFtdO1xuXHQgICAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZih0aGlzKTtcblx0ICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGFwcGx5KGFDYWxsYWJsZShjYWxsYmFja2ZuKSwgdW5kZWZpbmVkLCBhcmdzKTtcblx0ICAgIH0pO1xuXHQgICAgKHJlc3VsdC5lcnJvciA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52YWx1ZSk7XG5cdCAgICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNfcHJvbWlzZV90cnk7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9wcm9taXNlX3RyeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9wcm9taXNlX3RyeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9wcm9taXNlX3RyeSkgcmV0dXJuIGVzbmV4dF9wcm9taXNlX3RyeTtcblx0aGFzUmVxdWlyZWRFc25leHRfcHJvbWlzZV90cnkgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHRyZXF1aXJlRXNfcHJvbWlzZV90cnkoKTtcblx0cmV0dXJuIGVzbmV4dF9wcm9taXNlX3RyeTtcbn1cblxucmVxdWlyZUVzbmV4dF9wcm9taXNlX3RyeSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGEgPSB7fTtcblxudmFyIHJlZmxlY3RNZXRhZGF0YTtcbnZhciBoYXNSZXF1aXJlZFJlZmxlY3RNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFJlZmxlY3RNZXRhZGF0YSkgcmV0dXJuIHJlZmxlY3RNZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRSZWZsZWN0TWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBpbiBjb3JlLWpzQDQsIG1vdmUgL21vZHVsZXMvIGRlcGVuZGVuY2llcyB0byBwdWJsaWMgZW50cmllcyBmb3IgYmV0dGVyIG9wdGltaXphdGlvbiBieSB0b29scyBsaWtlIGBwcmVzZXQtZW52YFxuXHRyZXF1aXJlRXNfbWFwKCk7XG5cdHJlcXVpcmVFc193ZWFrTWFwKCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIHNoYXJlZCA9IHJlcXVpcmVTaGFyZWQoKTtcblxuXHR2YXIgTWFwID0gZ2V0QnVpbHRJbignTWFwJyk7XG5cdHZhciBXZWFrTWFwID0gZ2V0QnVpbHRJbignV2Vha01hcCcpO1xuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdHZhciBtZXRhZGF0YSA9IHNoYXJlZCgnbWV0YWRhdGEnKTtcblx0dmFyIHN0b3JlID0gbWV0YWRhdGEuc3RvcmUgfHwgKG1ldGFkYXRhLnN0b3JlID0gbmV3IFdlYWtNYXAoKSk7XG5cblx0dmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSkge1xuXHQgIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuXHQgIGlmICghdGFyZ2V0TWV0YWRhdGEpIHtcblx0ICAgIGlmICghY3JlYXRlKSByZXR1cm47XG5cdCAgICBzdG9yZS5zZXQodGFyZ2V0LCB0YXJnZXRNZXRhZGF0YSA9IG5ldyBNYXAoKSk7XG5cdCAgfVxuXHQgIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xuXHQgIGlmICgha2V5TWV0YWRhdGEpIHtcblx0ICAgIGlmICghY3JlYXRlKSByZXR1cm47XG5cdCAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSA9IG5ldyBNYXAoKSk7XG5cdCAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG5cdH07XG5cblx0dmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcblx0ICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcblx0fTtcblxuXHR2YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuXHQgIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcblx0fTtcblxuXHR2YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCkge1xuXHQgIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgdHJ1ZSkuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcblx0fTtcblxuXHR2YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXkpIHtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSk7XG5cdCAgdmFyIGtleXMgPSBbXTtcblx0ICBpZiAobWV0YWRhdGFNYXApIG1ldGFkYXRhTWFwLmZvckVhY2goZnVuY3Rpb24gKF8sIGtleSkgeyBwdXNoKGtleXMsIGtleSk7IH0pO1xuXHQgIHJldHVybiBrZXlzO1xuXHR9O1xuXG5cdHZhciB0b01ldGFkYXRhS2V5ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiBTdHJpbmcoaXQpO1xuXHR9O1xuXG5cdHJlZmxlY3RNZXRhZGF0YSA9IHtcblx0ICBzdG9yZTogc3RvcmUsXG5cdCAgZ2V0TWFwOiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwLFxuXHQgIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcblx0ICBnZXQ6IG9yZGluYXJ5R2V0T3duTWV0YWRhdGEsXG5cdCAgc2V0OiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhLFxuXHQgIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuXHQgIHRvS2V5OiB0b01ldGFkYXRhS2V5XG5cdH07XG5cdHJldHVybiByZWZsZWN0TWV0YWRhdGE7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblx0dmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuc2V0O1xuXG5cdC8vIGBSZWZsZWN0LmRlZmluZU1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbM10pO1xuXHQgICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGEgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXHR2YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5nZXRNYXA7XG5cdHZhciBzdG9yZSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5zdG9yZTtcblxuXHQvLyBgUmVmbGVjdC5kZWxldGVNZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZGVsZXRlTWV0YWRhdGE6IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzJdKTtcblx0ICAgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG5cdCAgICBpZiAobWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCB8fCAhbWV0YWRhdGFNYXBbJ2RlbGV0ZSddKG1ldGFkYXRhS2V5KSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUpIHJldHVybiB0cnVlO1xuXHQgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG5cdCAgICB0YXJnZXRNZXRhZGF0YVsnZGVsZXRlJ10odGFyZ2V0S2V5KTtcblx0ICAgIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mKCk7XG5cblx0dmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuaGFzO1xuXHR2YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5nZXQ7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdHZhciBvcmRpbmFyeUdldE1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG5cdCAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIGlmIChoYXNPd24pIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Ly8gYFJlZmxlY3QuZ2V0TWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGdldE1ldGFkYXRhOiBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1syXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzID0ge307XG5cbnZhciBhcnJheVVuaXF1ZUJ5O1xudmFyIGhhc1JlcXVpcmVkQXJyYXlVbmlxdWVCeTtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5VW5pcXVlQnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheVVuaXF1ZUJ5KSByZXR1cm4gYXJyYXlVbmlxdWVCeTtcblx0aGFzUmVxdWlyZWRBcnJheVVuaXF1ZUJ5ID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgbWFwSGFzID0gTWFwSGVscGVycy5oYXM7XG5cdHZhciBtYXBTZXQgPSBNYXBIZWxwZXJzLnNldDtcblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHQvLyBgQXJyYXkucHJvdG90eXBlLnVuaXF1ZUJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXJyYXktdW5pcXVlXG5cdGFycmF5VW5pcXVlQnkgPSBmdW5jdGlvbiB1bmlxdWVCeShyZXNvbHZlcikge1xuXHQgIHZhciB0aGF0ID0gdG9PYmplY3QodGhpcyk7XG5cdCAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKHRoYXQpO1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuXHQgIHZhciByZXNvbHZlckZ1bmN0aW9uID0gIWlzTnVsbE9yVW5kZWZpbmVkKHJlc29sdmVyKSA/IGFDYWxsYWJsZShyZXNvbHZlcikgOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHJldHVybiB2YWx1ZTtcblx0ICB9O1xuXHQgIHZhciBpbmRleCwgaXRlbSwga2V5O1xuXHQgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuXHQgICAgaXRlbSA9IHRoYXRbaW5kZXhdO1xuXHQgICAga2V5ID0gcmVzb2x2ZXJGdW5jdGlvbihpdGVtKTtcblx0ICAgIGlmICghbWFwSGFzKG1hcCwga2V5KSkgbWFwU2V0KG1hcCwga2V5LCBpdGVtKTtcblx0ICB9XG5cdCAgaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcHVzaChyZXN1bHQsIHZhbHVlKTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gYXJyYXlVbmlxdWVCeTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cyA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZigpO1xuXHR2YXIgJGFycmF5VW5pcXVlQnkgPSByZXF1aXJlQXJyYXlVbmlxdWVCeSgpO1xuXG5cdHZhciBhcnJheVVuaXF1ZUJ5ID0gdW5jdXJyeVRoaXMoJGFycmF5VW5pcXVlQnkpO1xuXHR2YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblx0dmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmtleXM7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdHZhciBvcmRpbmFyeU1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG5cdCAgdmFyIG9LZXlzID0gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG5cdCAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIGlmIChwYXJlbnQgPT09IG51bGwpIHJldHVybiBvS2V5cztcblx0ICB2YXIgcEtleXMgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuXHQgIHJldHVybiBwS2V5cy5sZW5ndGggPyBvS2V5cy5sZW5ndGggPyBhcnJheVVuaXF1ZUJ5KGNvbmNhdChvS2V5cywgcEtleXMpKSA6IHBLZXlzIDogb0tleXM7XG5cdH07XG5cblx0Ly8gYFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBnZXRNZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzFdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeU1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXM7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXMoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5nZXQ7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdC8vIGBSZWZsZWN0LmdldE93bk1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMl0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXMpIHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUua2V5cztcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0Ly8gYFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzFdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXM7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXMoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mKCk7XG5cblx0dmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuaGFzO1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHR2YXIgb3JkaW5hcnlIYXNNZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuXHQgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICBpZiAoaGFzT3duKSByZXR1cm4gdHJ1ZTtcblx0ICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiBmYWxzZTtcblx0fTtcblxuXHQvLyBgUmVmbGVjdC5oYXNNZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgaGFzTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzJdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuaGFzO1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHQvLyBgUmVmbGVjdC5oYXNPd25NZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgaGFzT3duTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzJdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9tZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9tZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X21ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfbWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9tZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9tZXRhZGF0YSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cdHZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnNldDtcblxuXHQvLyBgUmVmbGVjdC5tZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgbWV0YWRhdGE6IGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwga2V5KSB7XG5cdCAgICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YWRhdGFLZXkoa2V5KSk7XG5cdCAgICB9O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9tZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X21ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfc2V0X2FkZEFsbCA9IHt9O1xuXG52YXIgc2V0SGVscGVycztcbnZhciBoYXNSZXF1aXJlZFNldEhlbHBlcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRIZWxwZXJzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SGVscGVycykgcmV0dXJuIHNldEhlbHBlcnM7XG5cdGhhc1JlcXVpcmVkU2V0SGVscGVycyA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXNldCAtLSBzYWZlXG5cdHZhciBTZXRQcm90b3R5cGUgPSBTZXQucHJvdG90eXBlO1xuXG5cdHNldEhlbHBlcnMgPSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXNldCAtLSBzYWZlXG5cdCAgU2V0OiBTZXQsXG5cdCAgYWRkOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuYWRkKSxcblx0ICBoYXM6IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5oYXMpLFxuXHQgIHJlbW92ZTogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlWydkZWxldGUnXSksXG5cdCAgcHJvdG86IFNldFByb3RvdHlwZVxuXHR9O1xuXHRyZXR1cm4gc2V0SGVscGVycztcbn1cblxudmFyIGFTZXQ7XG52YXIgaGFzUmVxdWlyZWRBU2V0O1xuXG5mdW5jdGlvbiByZXF1aXJlQVNldCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFTZXQpIHJldHVybiBhU2V0O1xuXHRoYXNSZXF1aXJlZEFTZXQgPSAxO1xuXHR2YXIgaGFzID0gcmVxdWlyZVNldEhlbHBlcnMoKS5oYXM7XG5cblx0Ly8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tTZXREYXRhXV0pXG5cdGFTZXQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBoYXMoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0cmV0dXJuIGFTZXQ7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfYWRkQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9hZGRBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2FkZEFsbCkgcmV0dXJuIGVzbmV4dF9zZXRfYWRkQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfYWRkQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBhZGQgPSByZXF1aXJlU2V0SGVscGVycygpLmFkZDtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5hZGRBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGFkZEFsbDogZnVuY3Rpb24gYWRkQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgYWRkKHNldCwgYXJndW1lbnRzW2tdKTtcblx0ICAgIH0gcmV0dXJuIHNldDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9hZGRBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2FkZEFsbCgpO1xuXG52YXIgZXNuZXh0X3NldF9kZWxldGVBbGwgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kZWxldGVBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2RlbGV0ZUFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGVsZXRlQWxsKSByZXR1cm4gZXNuZXh0X3NldF9kZWxldGVBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kZWxldGVBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIHJlbW92ZSA9IHJlcXVpcmVTZXRIZWxwZXJzKCkucmVtb3ZlO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmRlbGV0ZUFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGVsZXRlQWxsOiBmdW5jdGlvbiBkZWxldGVBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBjb2xsZWN0aW9uID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBhbGxEZWxldGVkID0gdHJ1ZTtcblx0ICAgIHZhciB3YXNEZWxldGVkO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICB3YXNEZWxldGVkID0gcmVtb3ZlKGNvbGxlY3Rpb24sIGFyZ3VtZW50c1trXSk7XG5cdCAgICAgIGFsbERlbGV0ZWQgPSBhbGxEZWxldGVkICYmIHdhc0RlbGV0ZWQ7XG5cdCAgICB9IHJldHVybiAhIWFsbERlbGV0ZWQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZGVsZXRlQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9kZWxldGVBbGwoKTtcblxudmFyIGVzbmV4dF9zZXRfZGlmZmVyZW5jZSA9IHt9O1xuXG52YXIgaXNJdGVyYWJsZTtcbnZhciBoYXNSZXF1aXJlZElzSXRlcmFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0l0ZXJhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNJdGVyYWJsZSkgcmV0dXJuIGlzSXRlcmFibGU7XG5cdGhhc1JlcXVpcmVkSXNJdGVyYWJsZSA9IDE7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2YoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmVJdGVyYXRvcnMoKTtcblxuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5cdGlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSByZXR1cm4gZmFsc2U7XG5cdCAgdmFyIE8gPSAkT2JqZWN0KGl0KTtcblx0ICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuXHQgICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cblx0ICAgIHx8IGhhc093bihJdGVyYXRvcnMsIGNsYXNzb2YoTykpO1xuXHR9O1xuXHRyZXR1cm4gaXNJdGVyYWJsZTtcbn1cblxudmFyIHRvU2V0TGlrZTtcbnZhciBoYXNSZXF1aXJlZFRvU2V0TGlrZTtcblxuZnVuY3Rpb24gcmVxdWlyZVRvU2V0TGlrZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvU2V0TGlrZSkgcmV0dXJuIHRvU2V0TGlrZTtcblx0aGFzUmVxdWlyZWRUb1NldExpa2UgPSAxO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzSXRlcmFibGUgPSByZXF1aXJlSXNJdGVyYWJsZSgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHR2YXIgU2V0ID0gZ2V0QnVpbHRJbignU2V0Jyk7XG5cblx0dmFyIGlzU2V0TGlrZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBpc09iamVjdChpdClcblx0ICAgICYmIHR5cGVvZiBpdC5zaXplID09ICdudW1iZXInXG5cdCAgICAmJiBpc0NhbGxhYmxlKGl0Lmhhcylcblx0ICAgICYmIGlzQ2FsbGFibGUoaXQua2V5cyk7XG5cdH07XG5cblx0Ly8gZmFsbGJhY2sgb2xkIC0+IG5ldyBzZXQgbWV0aG9kcyBwcm9wb3NhbCBhcmd1bWVudHNcblx0dG9TZXRMaWtlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaWYgKGlzU2V0TGlrZShpdCkpIHJldHVybiBpdDtcblx0ICByZXR1cm4gaXNJdGVyYWJsZShpdCkgPyBuZXcgU2V0KGl0KSA6IGl0O1xuXHR9O1xuXHRyZXR1cm4gdG9TZXRMaWtlO1xufVxuXG52YXIgc2V0SXRlcmF0ZTtcbnZhciBoYXNSZXF1aXJlZFNldEl0ZXJhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRJdGVyYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SXRlcmF0ZSkgcmV0dXJuIHNldEl0ZXJhdGU7XG5cdGhhc1JlcXVpcmVkU2V0SXRlcmF0ZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXG5cdHZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcblx0dmFyIFNldFByb3RvdHlwZSA9IFNldEhlbHBlcnMucHJvdG87XG5cdHZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmZvckVhY2gpO1xuXHR2YXIga2V5cyA9IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5rZXlzKTtcblx0dmFyIG5leHQgPSBrZXlzKG5ldyBTZXQoKSkubmV4dDtcblxuXHRzZXRJdGVyYXRlID0gZnVuY3Rpb24gKHNldCwgZm4sIGludGVycnVwdGlibGUpIHtcblx0ICByZXR1cm4gaW50ZXJydXB0aWJsZSA/IGl0ZXJhdGVTaW1wbGUoeyBpdGVyYXRvcjoga2V5cyhzZXQpLCBuZXh0OiBuZXh0IH0sIGZuKSA6IGZvckVhY2goc2V0LCBmbik7XG5cdH07XG5cdHJldHVybiBzZXRJdGVyYXRlO1xufVxuXG52YXIgc2V0Q2xvbmU7XG52YXIgaGFzUmVxdWlyZWRTZXRDbG9uZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldENsb25lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0Q2xvbmUpIHJldHVybiBzZXRDbG9uZTtcblx0aGFzUmVxdWlyZWRTZXRDbG9uZSA9IDE7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdHZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcblx0dmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xuXG5cdHNldENsb25lID0gZnVuY3Rpb24gKHNldCkge1xuXHQgIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG5cdCAgaXRlcmF0ZShzZXQsIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgYWRkKHJlc3VsdCwgaXQpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBzZXRDbG9uZTtcbn1cblxudmFyIHNldFNpemU7XG52YXIgaGFzUmVxdWlyZWRTZXRTaXplO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0U2l6ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldFNpemUpIHJldHVybiBzZXRTaXplO1xuXHRoYXNSZXF1aXJlZFNldFNpemUgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXNBY2Nlc3NvciA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXG5cdHNldFNpemUgPSB1bmN1cnJ5VGhpc0FjY2Vzc29yKFNldEhlbHBlcnMucHJvdG8sICdzaXplJywgJ2dldCcpIHx8IGZ1bmN0aW9uIChzZXQpIHtcblx0ICByZXR1cm4gc2V0LnNpemU7XG5cdH07XG5cdHJldHVybiBzZXRTaXplO1xufVxuXG52YXIgZ2V0SXRlcmF0b3JEaXJlY3Q7XG52YXIgaGFzUmVxdWlyZWRHZXRJdGVyYXRvckRpcmVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZUdldEl0ZXJhdG9yRGlyZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JEaXJlY3QpIHJldHVybiBnZXRJdGVyYXRvckRpcmVjdDtcblx0aGFzUmVxdWlyZWRHZXRJdGVyYXRvckRpcmVjdCA9IDE7XG5cdC8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLWl0ZXJhdG9yLWhlbHBlcnMvI3NlYy1nZXRpdGVyYXRvcmRpcmVjdFxuXHRnZXRJdGVyYXRvckRpcmVjdCA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICByZXR1cm4ge1xuXHQgICAgaXRlcmF0b3I6IG9iaixcblx0ICAgIG5leHQ6IG9iai5uZXh0LFxuXHQgICAgZG9uZTogZmFsc2Vcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3Q7XG59XG5cbnZhciBnZXRTZXRSZWNvcmQ7XG52YXIgaGFzUmVxdWlyZWRHZXRTZXRSZWNvcmQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRTZXRSZWNvcmQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRTZXRSZWNvcmQpIHJldHVybiBnZXRTZXRSZWNvcmQ7XG5cdGhhc1JlcXVpcmVkR2V0U2V0UmVjb3JkID0gMTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cdHZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmVHZXRJdGVyYXRvckRpcmVjdCgpO1xuXG5cdHZhciBJTlZBTElEX1NJWkUgPSAnSW52YWxpZCBzaXplJztcblx0dmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdHZhciBtYXggPSBNYXRoLm1heDtcblxuXHR2YXIgU2V0UmVjb3JkID0gZnVuY3Rpb24gKHNldCwgaW50U2l6ZSkge1xuXHQgIHRoaXMuc2V0ID0gc2V0O1xuXHQgIHRoaXMuc2l6ZSA9IG1heChpbnRTaXplLCAwKTtcblx0ICB0aGlzLmhhcyA9IGFDYWxsYWJsZShzZXQuaGFzKTtcblx0ICB0aGlzLmtleXMgPSBhQ2FsbGFibGUoc2V0LmtleXMpO1xuXHR9O1xuXG5cdFNldFJlY29yZC5wcm90b3R5cGUgPSB7XG5cdCAgZ2V0SXRlcmF0b3I6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBnZXRJdGVyYXRvckRpcmVjdChhbk9iamVjdChjYWxsKHRoaXMua2V5cywgdGhpcy5zZXQpKSk7XG5cdCAgfSxcblx0ICBpbmNsdWRlczogZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gY2FsbCh0aGlzLmhhcywgdGhpcy5zZXQsIGl0KTtcblx0ICB9XG5cdH07XG5cblx0Ly8gYEdldFNldFJlY29yZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jc2VjLWdldHNldHJlY29yZFxuXHRnZXRTZXRSZWNvcmQgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgYW5PYmplY3Qob2JqKTtcblx0ICB2YXIgbnVtU2l6ZSA9ICtvYmouc2l6ZTtcblx0ICAvLyBOT1RFOiBJZiBzaXplIGlzIHVuZGVmaW5lZCwgdGhlbiBudW1TaXplIHdpbGwgYmUgTmFOXG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICBpZiAobnVtU2l6ZSAhPT0gbnVtU2l6ZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoSU5WQUxJRF9TSVpFKTtcblx0ICB2YXIgaW50U2l6ZSA9IHRvSW50ZWdlck9ySW5maW5pdHkobnVtU2l6ZSk7XG5cdCAgaWYgKGludFNpemUgPCAwKSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoSU5WQUxJRF9TSVpFKTtcblx0ICByZXR1cm4gbmV3IFNldFJlY29yZChvYmosIGludFNpemUpO1xuXHR9O1xuXHRyZXR1cm4gZ2V0U2V0UmVjb3JkO1xufVxuXG52YXIgc2V0RGlmZmVyZW5jZTtcbnZhciBoYXNSZXF1aXJlZFNldERpZmZlcmVuY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXREaWZmZXJlbmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0RGlmZmVyZW5jZSkgcmV0dXJuIHNldERpZmZlcmVuY2U7XG5cdGhhc1JlcXVpcmVkU2V0RGlmZmVyZW5jZSA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgY2xvbmUgPSByZXF1aXJlU2V0Q2xvbmUoKTtcblx0dmFyIHNpemUgPSByZXF1aXJlU2V0U2l6ZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblxuXHR2YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG5cdHZhciByZW1vdmUgPSBTZXRIZWxwZXJzLnJlbW92ZTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0c2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGRpZmZlcmVuY2Uob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcblx0ICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG5cdCAgaWYgKHNpemUoTykgPD0gb3RoZXJSZWMuc2l6ZSkgaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSByZW1vdmUocmVzdWx0LCBlKTtcblx0ICB9KTtcblx0ICBlbHNlIGl0ZXJhdGVTaW1wbGUob3RoZXJSZWMuZ2V0SXRlcmF0b3IoKSwgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmIChoYXMoTywgZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBzZXREaWZmZXJlbmNlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2RpZmZlcmVuY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2RpZmZlcmVuY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2RpZmZlcmVuY2UpIHJldHVybiBlc25leHRfc2V0X2RpZmZlcmVuY2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kaWZmZXJlbmNlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRkaWZmZXJlbmNlID0gcmVxdWlyZVNldERpZmZlcmVuY2UoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uIGRpZmZlcmVuY2Uob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRkaWZmZXJlbmNlLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9kaWZmZXJlbmNlO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9kaWZmZXJlbmNlKCk7XG5cbnZhciBlc25leHRfc2V0X2V2ZXJ5ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZXZlcnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2V2ZXJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9ldmVyeSkgcmV0dXJuIGVzbmV4dF9zZXRfZXZlcnk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9ldmVyeSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICByZXR1cm4gaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoIWJvdW5kRnVuY3Rpb24odmFsdWUsIHZhbHVlLCBzZXQpKSByZXR1cm4gZmFsc2U7XG5cdCAgICB9LCB0cnVlKSAhPT0gZmFsc2U7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZXZlcnk7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2V2ZXJ5KCk7XG5cbnZhciBlc25leHRfc2V0X2ZpbHRlciA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbHRlcjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZmlsdGVyICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maWx0ZXIpIHJldHVybiBlc25leHRfc2V0X2ZpbHRlcjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbHRlciA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdHZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcblx0dmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XG5cdCAgICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCB2YWx1ZSwgc2V0KSkgYWRkKG5ld1NldCwgdmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3U2V0O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2ZpbHRlcjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZmlsdGVyKCk7XG5cbnZhciBlc25leHRfc2V0X2ZpbmQgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maW5kO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9maW5kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maW5kKSByZXR1cm4gZXNuZXh0X3NldF9maW5kO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmluZCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgcmVzdWx0ID0gaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwgdmFsdWUsIHNldCkpIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuXHQgICAgfSwgdHJ1ZSk7XG5cdCAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9maW5kO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9maW5kKCk7XG5cbnZhciBlc25leHRfc2V0X2Zyb20gPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9mcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9mcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9mcm9tKSByZXR1cm4gZXNuZXh0X3NldF9mcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbkZyb20gPSByZXF1aXJlQ29sbGVjdGlvbkZyb20oKTtcblxuXHQvLyBgU2V0LmZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQuZnJvbVxuXHQkKHsgdGFyZ2V0OiAnU2V0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tOiBjcmVhdGVDb2xsZWN0aW9uRnJvbShTZXRIZWxwZXJzLlNldCwgU2V0SGVscGVycy5hZGQsIGZhbHNlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZnJvbTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZnJvbSgpO1xuXG52YXIgZXNuZXh0X3NldF9pbnRlcnNlY3Rpb24gPSB7fTtcblxudmFyIHNldEludGVyc2VjdGlvbjtcbnZhciBoYXNSZXF1aXJlZFNldEludGVyc2VjdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZVNldEludGVyc2VjdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldEludGVyc2VjdGlvbikgcmV0dXJuIHNldEludGVyc2VjdGlvbjtcblx0aGFzUmVxdWlyZWRTZXRJbnRlcnNlY3Rpb24gPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIHNpemUgPSByZXF1aXJlU2V0U2l6ZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblxuXHR2YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG5cdHZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblx0dmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdHNldEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIGludGVyc2VjdGlvbihvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuXHQgIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG5cblx0ICBpZiAoc2l6ZShPKSA+IG90aGVyUmVjLnNpemUpIHtcblx0ICAgIGl0ZXJhdGVTaW1wbGUob3RoZXJSZWMuZ2V0SXRlcmF0b3IoKSwgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgaWYgKGhhcyhPLCBlKSkgYWRkKHJlc3VsdCwgZSk7XG5cdCAgICB9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIGFkZChyZXN1bHQsIGUpO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHNldEludGVyc2VjdGlvbjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pbnRlcnNlY3Rpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2ludGVyc2VjdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uKSByZXR1cm4gZXNuZXh0X3NldF9pbnRlcnNlY3Rpb247XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pbnRlcnNlY3Rpb24gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJGludGVyc2VjdGlvbiA9IHJlcXVpcmVTZXRJbnRlcnNlY3Rpb24oKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb25gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaW50ZXJzZWN0aW9uOiBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRpbnRlcnNlY3Rpb24sIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2ludGVyc2VjdGlvbjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uKCk7XG5cbnZhciBlc25leHRfc2V0X2lzRGlzam9pbnRGcm9tID0ge307XG5cbnZhciBzZXRJc0Rpc2pvaW50RnJvbTtcbnZhciBoYXNSZXF1aXJlZFNldElzRGlzam9pbnRGcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SXNEaXNqb2ludEZyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRJc0Rpc2pvaW50RnJvbSkgcmV0dXJuIHNldElzRGlzam9pbnRGcm9tO1xuXHRoYXNSZXF1aXJlZFNldElzRGlzam9pbnRGcm9tID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaGFzID0gcmVxdWlyZVNldEhlbHBlcnMoKS5oYXM7XG5cdHZhciBzaXplID0gcmVxdWlyZVNldFNpemUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cdHZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZUl0ZXJhdG9yQ2xvc2UoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21cblx0c2V0SXNEaXNqb2ludEZyb20gPSBmdW5jdGlvbiBpc0Rpc2pvaW50RnJvbShvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuXHQgIGlmIChzaXplKE8pIDw9IG90aGVyUmVjLnNpemUpIHJldHVybiBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJldHVybiBmYWxzZTtcblx0ICB9LCB0cnVlKSAhPT0gZmFsc2U7XG5cdCAgdmFyIGl0ZXJhdG9yID0gb3RoZXJSZWMuZ2V0SXRlcmF0b3IoKTtcblx0ICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmIChoYXMoTywgZSkpIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgZmFsc2UpO1xuXHQgIH0pICE9PSBmYWxzZTtcblx0fTtcblx0cmV0dXJuIHNldElzRGlzam9pbnRGcm9tO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzRGlzam9pbnRGcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb20pIHJldHVybiBlc25leHRfc2V0X2lzRGlzam9pbnRGcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJGlzRGlzam9pbnRGcm9tID0gcmVxdWlyZVNldElzRGlzam9pbnRGcm9tKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaXNEaXNqb2ludEZyb206IGZ1bmN0aW9uIGlzRGlzam9pbnRGcm9tKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkaXNEaXNqb2ludEZyb20sIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2lzRGlzam9pbnRGcm9tO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbSgpO1xuXG52YXIgZXNuZXh0X3NldF9pc1N1YnNldE9mID0ge307XG5cbnZhciBzZXRJc1N1YnNldE9mO1xudmFyIGhhc1JlcXVpcmVkU2V0SXNTdWJzZXRPZjtcblxuZnVuY3Rpb24gcmVxdWlyZVNldElzU3Vic2V0T2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRJc1N1YnNldE9mKSByZXR1cm4gc2V0SXNTdWJzZXRPZjtcblx0aGFzUmVxdWlyZWRTZXRJc1N1YnNldE9mID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgc2l6ZSA9IHJlcXVpcmVTZXRTaXplKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mXG5cdHNldElzU3Vic2V0T2YgPSBmdW5jdGlvbiBpc1N1YnNldE9mKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG5cdCAgaWYgKHNpemUoTykgPiBvdGhlclJlYy5zaXplKSByZXR1cm4gZmFsc2U7XG5cdCAgcmV0dXJuIGl0ZXJhdGUoTywgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmICghb3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJldHVybiBmYWxzZTtcblx0ICB9LCB0cnVlKSAhPT0gZmFsc2U7XG5cdH07XG5cdHJldHVybiBzZXRJc1N1YnNldE9mO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3Vic2V0T2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2lzU3Vic2V0T2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3Vic2V0T2YpIHJldHVybiBlc25leHRfc2V0X2lzU3Vic2V0T2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1YnNldE9mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRpc1N1YnNldE9mID0gcmVxdWlyZVNldElzU3Vic2V0T2YoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGlzU3Vic2V0T2Y6IGZ1bmN0aW9uIGlzU3Vic2V0T2Yob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRpc1N1YnNldE9mLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9pc1N1YnNldE9mO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9pc1N1YnNldE9mKCk7XG5cbnZhciBlc25leHRfc2V0X2lzU3VwZXJzZXRPZiA9IHt9O1xuXG52YXIgc2V0SXNTdXBlcnNldE9mO1xudmFyIGhhc1JlcXVpcmVkU2V0SXNTdXBlcnNldE9mO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SXNTdXBlcnNldE9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SXNTdXBlcnNldE9mKSByZXR1cm4gc2V0SXNTdXBlcnNldE9mO1xuXHRoYXNSZXF1aXJlZFNldElzU3VwZXJzZXRPZiA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGhhcyA9IHJlcXVpcmVTZXRIZWxwZXJzKCkuaGFzO1xuXHR2YXIgc2l6ZSA9IHJlcXVpcmVTZXRTaXplKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblx0dmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlSXRlcmF0b3JDbG9zZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzU3VwZXJzZXRPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mXG5cdHNldElzU3VwZXJzZXRPZiA9IGZ1bmN0aW9uIGlzU3VwZXJzZXRPZihvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuXHQgIGlmIChzaXplKE8pIDwgb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBpdGVyYXRvciA9IG90aGVyUmVjLmdldEl0ZXJhdG9yKCk7XG5cdCAgcmV0dXJuIGl0ZXJhdGVTaW1wbGUoaXRlcmF0b3IsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoIWhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG5cdCAgfSkgIT09IGZhbHNlO1xuXHR9O1xuXHRyZXR1cm4gc2V0SXNTdXBlcnNldE9mO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3VwZXJzZXRPZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfaXNTdXBlcnNldE9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1cGVyc2V0T2YpIHJldHVybiBlc25leHRfc2V0X2lzU3VwZXJzZXRPZjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3VwZXJzZXRPZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkaXNTdXBlcnNldE9mID0gcmVxdWlyZVNldElzU3VwZXJzZXRPZigpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzU3VwZXJzZXRPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpc1N1cGVyc2V0T2Y6IGZ1bmN0aW9uIGlzU3VwZXJzZXRPZihvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJGlzU3VwZXJzZXRPZiwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfaXNTdXBlcnNldE9mO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9pc1N1cGVyc2V0T2YoKTtcblxudmFyIGVzbmV4dF9zZXRfam9pbiA9IHt9O1xuXG52YXIgdG9TdHJpbmc7XG52YXIgaGFzUmVxdWlyZWRUb1N0cmluZztcblxuZnVuY3Rpb24gcmVxdWlyZVRvU3RyaW5nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9TdHJpbmcpIHJldHVybiB0b1N0cmluZztcblx0aGFzUmVxdWlyZWRUb1N0cmluZyA9IDE7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2YoKTtcblxuXHR2YXIgJFN0cmluZyA9IFN0cmluZztcblxuXHR0b1N0cmluZyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG5cdCAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHR9O1xuXHRyZXR1cm4gdG9TdHJpbmc7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfam9pbjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfam9pbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfam9pbikgcmV0dXJuIGVzbmV4dF9zZXRfam9pbjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2pvaW4gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXHR2YXIgdG9TdHJpbmcgPSByZXF1aXJlVG9TdHJpbmcoKTtcblxuXHR2YXIgYXJyYXlKb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIHNlcCA9IHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogdG9TdHJpbmcoc2VwYXJhdG9yKTtcblx0ICAgIHZhciBhcnJheSA9IFtdO1xuXHQgICAgaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBwdXNoKGFycmF5LCB2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBhcnJheUpvaW4oYXJyYXksIHNlcCk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfam9pbjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfam9pbigpO1xuXG52YXIgZXNuZXh0X3NldF9tYXAgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9tYXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X21hcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfbWFwKSByZXR1cm4gZXNuZXh0X3NldF9tYXA7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9tYXAgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHR2YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG5cdHZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xuXHQgICAgaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBhZGQobmV3U2V0LCBib3VuZEZ1bmN0aW9uKHZhbHVlLCB2YWx1ZSwgc2V0KSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdTZXQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfbWFwO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9tYXAoKTtcblxudmFyIGVzbmV4dF9zZXRfb2YgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9vZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X29mKSByZXR1cm4gZXNuZXh0X3NldF9vZjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X29mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uT2YgPSByZXF1aXJlQ29sbGVjdGlvbk9mKCk7XG5cblx0Ly8gYFNldC5vZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5vZlxuXHQkKHsgdGFyZ2V0OiAnU2V0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBvZjogY3JlYXRlQ29sbGVjdGlvbk9mKFNldEhlbHBlcnMuU2V0LCBTZXRIZWxwZXJzLmFkZCwgZmFsc2UpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9vZjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfb2YoKTtcblxudmFyIGVzbmV4dF9zZXRfcmVkdWNlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfcmVkdWNlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9yZWR1Y2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X3JlZHVjZSkgcmV0dXJuIGVzbmV4dF9zZXRfcmVkdWNlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfcmVkdWNlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIG5vSW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyO1xuXHQgICAgdmFyIGFjY3VtdWxhdG9yID0gbm9Jbml0aWFsID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuXHQgICAgYUNhbGxhYmxlKGNhbGxiYWNrZm4pO1xuXHQgICAgaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAobm9Jbml0aWFsKSB7XG5cdCAgICAgICAgbm9Jbml0aWFsID0gZmFsc2U7XG5cdCAgICAgICAgYWNjdW11bGF0b3IgPSB2YWx1ZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBhY2N1bXVsYXRvciA9IGNhbGxiYWNrZm4oYWNjdW11bGF0b3IsIHZhbHVlLCB2YWx1ZSwgc2V0KTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBpZiAobm9Jbml0aWFsKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IHNldCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcblx0ICAgIHJldHVybiBhY2N1bXVsYXRvcjtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9yZWR1Y2U7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X3JlZHVjZSgpO1xuXG52YXIgZXNuZXh0X3NldF9zb21lID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc29tZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfc29tZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc29tZSkgcmV0dXJuIGVzbmV4dF9zZXRfc29tZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X3NvbWUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgcmV0dXJuIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIHZhbHVlLCBzZXQpKSByZXR1cm4gdHJ1ZTtcblx0ICAgIH0sIHRydWUpID09PSB0cnVlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X3NvbWU7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X3NvbWUoKTtcblxudmFyIGVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZSA9IHt9O1xuXG52YXIgc2V0U3ltbWV0cmljRGlmZmVyZW5jZTtcbnZhciBoYXNSZXF1aXJlZFNldFN5bW1ldHJpY0RpZmZlcmVuY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRTeW1tZXRyaWNEaWZmZXJlbmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0U3ltbWV0cmljRGlmZmVyZW5jZSkgcmV0dXJuIHNldFN5bW1ldHJpY0RpZmZlcmVuY2U7XG5cdGhhc1JlcXVpcmVkU2V0U3ltbWV0cmljRGlmZmVyZW5jZSA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgY2xvbmUgPSByZXF1aXJlU2V0Q2xvbmUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXG5cdHZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblx0dmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xuXHR2YXIgcmVtb3ZlID0gU2V0SGVscGVycy5yZW1vdmU7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuc3ltbWV0cmljRGlmZmVyZW5jZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdHNldFN5bW1ldHJpY0RpZmZlcmVuY2UgPSBmdW5jdGlvbiBzeW1tZXRyaWNEaWZmZXJlbmNlKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcblx0ICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG5cdCAgaXRlcmF0ZVNpbXBsZShrZXlzSXRlciwgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmIChoYXMoTywgZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuXHQgICAgZWxzZSBhZGQocmVzdWx0LCBlKTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gc2V0U3ltbWV0cmljRGlmZmVyZW5jZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlKSByZXR1cm4gZXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkc3ltbWV0cmljRGlmZmVyZW5jZSA9IHJlcXVpcmVTZXRTeW1tZXRyaWNEaWZmZXJlbmNlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuc3ltbWV0cmljRGlmZmVyZW5jZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzeW1tZXRyaWNEaWZmZXJlbmNlOiBmdW5jdGlvbiBzeW1tZXRyaWNEaWZmZXJlbmNlKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkc3ltbWV0cmljRGlmZmVyZW5jZSwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZSgpO1xuXG52YXIgZXNuZXh0X3NldF91bmlvbiA9IHt9O1xuXG52YXIgc2V0VW5pb247XG52YXIgaGFzUmVxdWlyZWRTZXRVbmlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZVNldFVuaW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0VW5pb24pIHJldHVybiBzZXRVbmlvbjtcblx0aGFzUmVxdWlyZWRTZXRVbmlvbiA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGFkZCA9IHJlcXVpcmVTZXRIZWxwZXJzKCkuYWRkO1xuXHR2YXIgY2xvbmUgPSByZXF1aXJlU2V0Q2xvbmUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0c2V0VW5pb24gPSBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIga2V5c0l0ZXIgPSBnZXRTZXRSZWNvcmQob3RoZXIpLmdldEl0ZXJhdG9yKCk7XG5cdCAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuXHQgIGl0ZXJhdGVTaW1wbGUoa2V5c0l0ZXIsIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgYWRkKHJlc3VsdCwgaXQpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBzZXRVbmlvbjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF91bmlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfdW5pb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X3VuaW9uKSByZXR1cm4gZXNuZXh0X3NldF91bmlvbjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X3VuaW9uID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICR1bmlvbiA9IHJlcXVpcmVTZXRVbmlvbigpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHVuaW9uOiBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJHVuaW9uLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF91bmlvbjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfdW5pb24oKTtcblxudmFyIGVzbmV4dF9zdHJpbmdfYXQgPSB7fTtcblxudmFyIHN0cmluZ011bHRpYnl0ZTtcbnZhciBoYXNSZXF1aXJlZFN0cmluZ011bHRpYnl0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVN0cmluZ011bHRpYnl0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFN0cmluZ011bHRpYnl0ZSkgcmV0dXJuIHN0cmluZ011bHRpYnl0ZTtcblx0aGFzUmVxdWlyZWRTdHJpbmdNdWx0aWJ5dGUgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cdHZhciB0b1N0cmluZyA9IHJlcXVpcmVUb1N0cmluZygpO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cblx0dmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG5cdHZhciBjaGFyQ29kZUF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckNvZGVBdCk7XG5cdHZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxuXHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG5cdCAgICB2YXIgUyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcblx0ICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlck9ySW5maW5pdHkocG9zKTtcblx0ICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG5cdCAgICB2YXIgZmlyc3QsIHNlY29uZDtcblx0ICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG5cdCAgICBmaXJzdCA9IGNoYXJDb2RlQXQoUywgcG9zaXRpb24pO1xuXHQgICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuXHQgICAgICB8fCAoc2Vjb25kID0gY2hhckNvZGVBdChTLCBwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcblx0ICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HXG5cdCAgICAgICAgICA/IGNoYXJBdChTLCBwb3NpdGlvbilcblx0ICAgICAgICAgIDogZmlyc3Rcblx0ICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HXG5cdCAgICAgICAgICA/IHN0cmluZ1NsaWNlKFMsIHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpXG5cdCAgICAgICAgICA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG5cdCAgfTtcblx0fTtcblxuXHRzdHJpbmdNdWx0aWJ5dGUgPSB7XG5cdCAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuXHQgIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcblx0ICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuXHQgIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG5cdH07XG5cdHJldHVybiBzdHJpbmdNdWx0aWJ5dGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfYXQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc3RyaW5nX2F0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19hdCkgcmV0dXJuIGVzbmV4dF9zdHJpbmdfYXQ7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19hdCA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNoYXJBdCA9IHJlcXVpcmVTdHJpbmdNdWx0aWJ5dGUoKS5jaGFyQXQ7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXHR2YXIgdG9TdHJpbmcgPSByZXF1aXJlVG9TdHJpbmcoKTtcblxuXHQvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcblx0JCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGF0OiBmdW5jdGlvbiBhdChpbmRleCkge1xuXHQgICAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcblx0ICAgIHZhciBsZW4gPSBTLmxlbmd0aDtcblx0ICAgIHZhciByZWxhdGl2ZUluZGV4ID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG5cdCAgICB2YXIgayA9IHJlbGF0aXZlSW5kZXggPj0gMCA/IHJlbGF0aXZlSW5kZXggOiBsZW4gKyByZWxhdGl2ZUluZGV4O1xuXHQgICAgcmV0dXJuIChrIDwgMCB8fCBrID49IGxlbikgPyB1bmRlZmluZWQgOiBjaGFyQXQoUywgayk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zdHJpbmdfYXQ7XG59XG5cbnJlcXVpcmVFc25leHRfc3RyaW5nX2F0KCk7XG5cbnZhciBlc25leHRfc3RyaW5nX2NvZGVQb2ludHMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzKSByZXR1cm4gZXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfY29kZVBvaW50cyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcigpO1xuXHR2YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmVDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KCk7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblx0dmFyIHRvU3RyaW5nID0gcmVxdWlyZVRvU3RyaW5nKCk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblx0dmFyIFN0cmluZ011bHRpYnl0ZU1vZHVsZSA9IHJlcXVpcmVTdHJpbmdNdWx0aWJ5dGUoKTtcblxuXHR2YXIgY29kZUF0ID0gU3RyaW5nTXVsdGlieXRlTW9kdWxlLmNvZGVBdDtcblx0dmFyIGNoYXJBdCA9IFN0cmluZ011bHRpYnl0ZU1vZHVsZS5jaGFyQXQ7XG5cdHZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcblx0dmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblx0dmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG5cdC8vIFRPRE86IHVuaWZ5IHdpdGggU3RyaW5nI0BAaXRlcmF0b3Jcblx0dmFyICRTdHJpbmdJdGVyYXRvciA9IGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoZnVuY3Rpb24gU3RyaW5nSXRlcmF0b3Ioc3RyaW5nKSB7XG5cdCAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG5cdCAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG5cdCAgICBzdHJpbmc6IHN0cmluZyxcblx0ICAgIGluZGV4OiAwXG5cdCAgfSk7XG5cdH0sICdTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCkge1xuXHQgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgdmFyIHN0cmluZyA9IHN0YXRlLnN0cmluZztcblx0ICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcblx0ICB2YXIgcG9pbnQ7XG5cdCAgaWYgKGluZGV4ID49IHN0cmluZy5sZW5ndGgpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG5cdCAgcG9pbnQgPSBjaGFyQXQoc3RyaW5nLCBpbmRleCk7XG5cdCAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuXHQgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHsgY29kZVBvaW50OiBjb2RlQXQocG9pbnQsIDApLCBwb3NpdGlvbjogaW5kZXggfSwgZmFsc2UpO1xuXHR9KTtcblxuXHQvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXByb3RvdHlwZS1jb2RlcG9pbnRzXG5cdCQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBjb2RlUG9pbnRzOiBmdW5jdGlvbiBjb2RlUG9pbnRzKCkge1xuXHQgICAgcmV0dXJuIG5ldyAkU3RyaW5nSXRlcmF0b3IodG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc3RyaW5nX2NvZGVQb2ludHM7XG59XG5cbnJlcXVpcmVFc25leHRfc3RyaW5nX2NvZGVQb2ludHMoKTtcblxudmFyIGVzbmV4dF9zeW1ib2xfZGlzcG9zZSA9IHt9O1xuXG52YXIgcGF0aDtcbnZhciBoYXNSZXF1aXJlZFBhdGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVQYXRoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUGF0aCkgcmV0dXJuIHBhdGg7XG5cdGhhc1JlcXVpcmVkUGF0aCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblxuXHRwYXRoID0gZ2xvYmFsVGhpcztcblx0cmV0dXJuIHBhdGg7XG59XG5cbnZhciB3ZWxsS25vd25TeW1ib2xXcmFwcGVkID0ge307XG5cbnZhciBoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbFdyYXBwZWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWxsS25vd25TeW1ib2xXcmFwcGVkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sV3JhcHBlZCkgcmV0dXJuIHdlbGxLbm93blN5bWJvbFdyYXBwZWQ7XG5cdGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sV3JhcHBlZCA9IDE7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0d2VsbEtub3duU3ltYm9sV3JhcHBlZC5mID0gd2VsbEtub3duU3ltYm9sO1xuXHRyZXR1cm4gd2VsbEtub3duU3ltYm9sV3JhcHBlZDtcbn1cblxudmFyIHdlbGxLbm93blN5bWJvbERlZmluZTtcbnZhciBoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbERlZmluZTtcblxuZnVuY3Rpb24gcmVxdWlyZVdlbGxLbm93blN5bWJvbERlZmluZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbERlZmluZSkgcmV0dXJuIHdlbGxLbm93blN5bWJvbERlZmluZTtcblx0aGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xEZWZpbmUgPSAxO1xuXHR2YXIgcGF0aCA9IHJlcXVpcmVQYXRoKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sV3JhcHBlZCgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKS5mO1xuXG5cdHdlbGxLbm93blN5bWJvbERlZmluZSA9IGZ1bmN0aW9uIChOQU1FKSB7XG5cdCAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcblx0ICBpZiAoIWhhc093bihTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcblx0ICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcblx0ICB9KTtcblx0fTtcblx0cmV0dXJuIHdlbGxLbm93blN5bWJvbERlZmluZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9kaXNwb3NlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3N5bWJvbF9kaXNwb3NlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9kaXNwb3NlKSByZXR1cm4gZXNuZXh0X3N5bWJvbF9kaXNwb3NlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfZGlzcG9zZSA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2xEZWZpbmUoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCkuZjtcblx0dmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoKS5mO1xuXG5cdHZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcblxuXHQvLyBgU3ltYm9sLmRpc3Bvc2VgIHdlbGwta25vd24gc3ltYm9sXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWV4cGxpY2l0LXJlc291cmNlLW1hbmFnZW1lbnRcblx0ZGVmaW5lV2VsbEtub3duU3ltYm9sKCdkaXNwb3NlJyk7XG5cblx0aWYgKFN5bWJvbCkge1xuXHQgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFN5bWJvbCwgJ2Rpc3Bvc2UnKTtcblx0ICAvLyB3b3JrYXJvdW5kIG9mIE5vZGVKUyAyMC40IGJ1Z1xuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvNDg2OTlcblx0ICAvLyBhbmQgaW5jb3JyZWN0IGRlc2NyaXB0b3IgZnJvbSBzb21lIHRyYW5zcGlsZXJzIGFuZCB1c2VybGFuZCBoZWxwZXJzXG5cdCAgaWYgKGRlc2NyaXB0b3IuZW51bWVyYWJsZSAmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG5cdCAgICBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsICdkaXNwb3NlJywgeyB2YWx1ZTogZGVzY3JpcHRvci52YWx1ZSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSB9KTtcblx0ICB9XG5cdH1cblx0cmV0dXJuIGVzbmV4dF9zeW1ib2xfZGlzcG9zZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zeW1ib2xfZGlzcG9zZSgpO1xuXG52YXIgZXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZSkgcmV0dXJuIGVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX29ic2VydmFibGUgPSAxO1xuXHR2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbERlZmluZSgpO1xuXG5cdC8vIGBTeW1ib2wub2JzZXJ2YWJsZWAgd2VsbC1rbm93biBzeW1ib2xcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuXHRkZWZpbmVXZWxsS25vd25TeW1ib2woJ29ic2VydmFibGUnKTtcblx0cmV0dXJuIGVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZSgpO1xuXG52YXIgZXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2ggPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2g7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoKSByZXR1cm4gZXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2g7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2ggPSAxO1xuXHQvLyBUT0RPOiByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbERlZmluZSgpO1xuXG5cdC8vIGBTeW1ib2wucGF0dGVybk1hdGNoYCB3ZWxsLWtub3duIHN5bWJvbFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wYXR0ZXJuLW1hdGNoaW5nXG5cdGRlZmluZVdlbGxLbm93blN5bWJvbCgncGF0dGVybk1hdGNoJyk7XG5cdHJldHVybiBlc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaDtcbn1cblxucmVxdWlyZUVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoKCk7XG5cbnZhciBlc25leHRfd2Vha01hcF9kZWxldGVBbGwgPSB7fTtcblxudmFyIHdlYWtNYXBIZWxwZXJzO1xudmFyIGhhc1JlcXVpcmVkV2Vha01hcEhlbHBlcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWFrTWFwSGVscGVycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYWtNYXBIZWxwZXJzKSByZXR1cm4gd2Vha01hcEhlbHBlcnM7XG5cdGhhc1JlcXVpcmVkV2Vha01hcEhlbHBlcnMgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby13ZWFrLW1hcCAtLSBzYWZlXG5cdHZhciBXZWFrTWFwUHJvdG90eXBlID0gV2Vha01hcC5wcm90b3R5cGU7XG5cblx0d2Vha01hcEhlbHBlcnMgPSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXdlYWstbWFwIC0tIHNhZmVcblx0ICBXZWFrTWFwOiBXZWFrTWFwLFxuXHQgIHNldDogdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5zZXQpLFxuXHQgIGdldDogdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5nZXQpLFxuXHQgIGhhczogdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5oYXMpLFxuXHQgIHJlbW92ZTogdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZVsnZGVsZXRlJ10pXG5cdH07XG5cdHJldHVybiB3ZWFrTWFwSGVscGVycztcbn1cblxudmFyIGFXZWFrTWFwO1xudmFyIGhhc1JlcXVpcmVkQVdlYWtNYXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBV2Vha01hcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFXZWFrTWFwKSByZXR1cm4gYVdlYWtNYXA7XG5cdGhhc1JlcXVpcmVkQVdlYWtNYXAgPSAxO1xuXHR2YXIgaGFzID0gcmVxdWlyZVdlYWtNYXBIZWxwZXJzKCkuaGFzO1xuXG5cdC8vIFBlcmZvcm0gPyBSZXF1aXJlSW50ZXJuYWxTbG90KE0sIFtbV2Vha01hcERhdGFdXSlcblx0YVdlYWtNYXAgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBoYXMoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0cmV0dXJuIGFXZWFrTWFwO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9kZWxldGVBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha01hcF9kZWxldGVBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9kZWxldGVBbGwpIHJldHVybiBlc25leHRfd2Vha01hcF9kZWxldGVBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYVdlYWtNYXAgPSByZXF1aXJlQVdlYWtNYXAoKTtcblx0dmFyIHJlbW92ZSA9IHJlcXVpcmVXZWFrTWFwSGVscGVycygpLnJlbW92ZTtcblxuXHQvLyBgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdXZWFrTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGVsZXRlQWxsOiBmdW5jdGlvbiBkZWxldGVBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBjb2xsZWN0aW9uID0gYVdlYWtNYXAodGhpcyk7XG5cdCAgICB2YXIgYWxsRGVsZXRlZCA9IHRydWU7XG5cdCAgICB2YXIgd2FzRGVsZXRlZDtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgd2FzRGVsZXRlZCA9IHJlbW92ZShjb2xsZWN0aW9uLCBhcmd1bWVudHNba10pO1xuXHQgICAgICBhbGxEZWxldGVkID0gYWxsRGVsZXRlZCAmJiB3YXNEZWxldGVkO1xuXHQgICAgfSByZXR1cm4gISFhbGxEZWxldGVkO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha01hcF9kZWxldGVBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha01hcF9kZWxldGVBbGwoKTtcblxudmFyIGVzbmV4dF93ZWFrTWFwX2Zyb20gPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrTWFwX2Zyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9mcm9tKSByZXR1cm4gZXNuZXh0X3dlYWtNYXBfZnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9mcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgV2Vha01hcEhlbHBlcnMgPSByZXF1aXJlV2Vha01hcEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25Gcm9tID0gcmVxdWlyZUNvbGxlY3Rpb25Gcm9tKCk7XG5cblx0Ly8gYFdlYWtNYXAuZnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAuZnJvbVxuXHQkKHsgdGFyZ2V0OiAnV2Vha01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbTogY3JlYXRlQ29sbGVjdGlvbkZyb20oV2Vha01hcEhlbHBlcnMuV2Vha01hcCwgV2Vha01hcEhlbHBlcnMuc2V0LCB0cnVlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrTWFwX2Zyb207XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha01hcF9mcm9tKCk7XG5cbnZhciBlc25leHRfd2Vha01hcF9vZiA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9vZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrTWFwX29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfb2YpIHJldHVybiBlc25leHRfd2Vha01hcF9vZjtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9vZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFdlYWtNYXBIZWxwZXJzID0gcmVxdWlyZVdlYWtNYXBIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uT2YgPSByZXF1aXJlQ29sbGVjdGlvbk9mKCk7XG5cblx0Ly8gYFdlYWtNYXAub2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLm9mXG5cdCQoeyB0YXJnZXQ6ICdXZWFrTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBvZjogY3JlYXRlQ29sbGVjdGlvbk9mKFdlYWtNYXBIZWxwZXJzLldlYWtNYXAsIFdlYWtNYXBIZWxwZXJzLnNldCwgdHJ1ZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha01hcF9vZjtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrTWFwX29mKCk7XG5cbnZhciBlc25leHRfd2Vha1NldF9hZGRBbGwgPSB7fTtcblxudmFyIHdlYWtTZXRIZWxwZXJzO1xudmFyIGhhc1JlcXVpcmVkV2Vha1NldEhlbHBlcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWFrU2V0SGVscGVycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYWtTZXRIZWxwZXJzKSByZXR1cm4gd2Vha1NldEhlbHBlcnM7XG5cdGhhc1JlcXVpcmVkV2Vha1NldEhlbHBlcnMgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby13ZWFrLXNldCAtLSBzYWZlXG5cdHZhciBXZWFrU2V0UHJvdG90eXBlID0gV2Vha1NldC5wcm90b3R5cGU7XG5cblx0d2Vha1NldEhlbHBlcnMgPSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXdlYWstc2V0IC0tIHNhZmVcblx0ICBXZWFrU2V0OiBXZWFrU2V0LFxuXHQgIGFkZDogdW5jdXJyeVRoaXMoV2Vha1NldFByb3RvdHlwZS5hZGQpLFxuXHQgIGhhczogdW5jdXJyeVRoaXMoV2Vha1NldFByb3RvdHlwZS5oYXMpLFxuXHQgIHJlbW92ZTogdW5jdXJyeVRoaXMoV2Vha1NldFByb3RvdHlwZVsnZGVsZXRlJ10pXG5cdH07XG5cdHJldHVybiB3ZWFrU2V0SGVscGVycztcbn1cblxudmFyIGFXZWFrU2V0O1xudmFyIGhhc1JlcXVpcmVkQVdlYWtTZXQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBV2Vha1NldCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFXZWFrU2V0KSByZXR1cm4gYVdlYWtTZXQ7XG5cdGhhc1JlcXVpcmVkQVdlYWtTZXQgPSAxO1xuXHR2YXIgaGFzID0gcmVxdWlyZVdlYWtTZXRIZWxwZXJzKCkuaGFzO1xuXG5cdC8vIFBlcmZvcm0gPyBSZXF1aXJlSW50ZXJuYWxTbG90KE0sIFtbV2Vha1NldERhdGFdXSlcblx0YVdlYWtTZXQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBoYXMoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0cmV0dXJuIGFXZWFrU2V0O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9hZGRBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha1NldF9hZGRBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9hZGRBbGwpIHJldHVybiBlc25leHRfd2Vha1NldF9hZGRBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfYWRkQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYVdlYWtTZXQgPSByZXF1aXJlQVdlYWtTZXQoKTtcblx0dmFyIGFkZCA9IHJlcXVpcmVXZWFrU2V0SGVscGVycygpLmFkZDtcblxuXHQvLyBgV2Vha1NldC5wcm90b3R5cGUuYWRkQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdXZWFrU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgYWRkQWxsOiBmdW5jdGlvbiBhZGRBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhV2Vha1NldCh0aGlzKTtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgYWRkKHNldCwgYXJndW1lbnRzW2tdKTtcblx0ICAgIH0gcmV0dXJuIHNldDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtTZXRfYWRkQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtTZXRfYWRkQWxsKCk7XG5cbnZhciBlc25leHRfd2Vha1NldF9kZWxldGVBbGwgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsKSByZXR1cm4gZXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFXZWFrU2V0ID0gcmVxdWlyZUFXZWFrU2V0KCk7XG5cdHZhciByZW1vdmUgPSByZXF1aXJlV2Vha1NldEhlbHBlcnMoKS5yZW1vdmU7XG5cblx0Ly8gYFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZUFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnV2Vha1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRlbGV0ZUFsbDogZnVuY3Rpb24gZGVsZXRlQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgY29sbGVjdGlvbiA9IGFXZWFrU2V0KHRoaXMpO1xuXHQgICAgdmFyIGFsbERlbGV0ZWQgPSB0cnVlO1xuXHQgICAgdmFyIHdhc0RlbGV0ZWQ7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIHdhc0RlbGV0ZWQgPSByZW1vdmUoY29sbGVjdGlvbiwgYXJndW1lbnRzW2tdKTtcblx0ICAgICAgYWxsRGVsZXRlZCA9IGFsbERlbGV0ZWQgJiYgd2FzRGVsZXRlZDtcblx0ICAgIH0gcmV0dXJuICEhYWxsRGVsZXRlZDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsKCk7XG5cbnZhciBlc25leHRfd2Vha1NldF9mcm9tID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2Zyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha1NldF9mcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZnJvbSkgcmV0dXJuIGVzbmV4dF93ZWFrU2V0X2Zyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFdlYWtTZXRIZWxwZXJzID0gcmVxdWlyZVdlYWtTZXRIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uRnJvbSA9IHJlcXVpcmVDb2xsZWN0aW9uRnJvbSgpO1xuXG5cdC8vIGBXZWFrU2V0LmZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrc2V0LmZyb21cblx0JCh7IHRhcmdldDogJ1dlYWtTZXQnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb206IGNyZWF0ZUNvbGxlY3Rpb25Gcm9tKFdlYWtTZXRIZWxwZXJzLldlYWtTZXQsIFdlYWtTZXRIZWxwZXJzLmFkZCwgZmFsc2UpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtTZXRfZnJvbTtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrU2V0X2Zyb20oKTtcblxudmFyIGVzbmV4dF93ZWFrU2V0X29mID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X29mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtTZXRfb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9vZikgcmV0dXJuIGVzbmV4dF93ZWFrU2V0X29mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X29mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgV2Vha1NldEhlbHBlcnMgPSByZXF1aXJlV2Vha1NldEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25PZiA9IHJlcXVpcmVDb2xsZWN0aW9uT2YoKTtcblxuXHQvLyBgV2Vha1NldC5vZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWtzZXQub2Zcblx0JCh7IHRhcmdldDogJ1dlYWtTZXQnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG9mOiBjcmVhdGVDb2xsZWN0aW9uT2YoV2Vha1NldEhlbHBlcnMuV2Vha1NldCwgV2Vha1NldEhlbHBlcnMuYWRkLCBmYWxzZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha1NldF9vZjtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrU2V0X29mKCk7XG5cbnZhciB3ZWJfaW1tZWRpYXRlID0ge307XG5cbnZhciB3ZWJfY2xlYXJJbW1lZGlhdGUgPSB7fTtcblxudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoO1xudmFyIGhhc1JlcXVpcmVkVmFsaWRhdGVBcmd1bWVudHNMZW5ndGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKSByZXR1cm4gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGg7XG5cdGhhc1JlcXVpcmVkVmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSAxO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHR2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG5cdCAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcblx0ICByZXR1cm4gcGFzc2VkO1xuXHR9O1xuXHRyZXR1cm4gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGg7XG59XG5cbnZhciBlbnZpcm9ubWVudElzSW9zO1xudmFyIGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc0lvcztcblxuZnVuY3Rpb24gcmVxdWlyZUVudmlyb25tZW50SXNJb3MgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnZpcm9ubWVudElzSW9zKSByZXR1cm4gZW52aXJvbm1lbnRJc0lvcztcblx0aGFzUmVxdWlyZWRFbnZpcm9ubWVudElzSW9zID0gMTtcblx0dmFyIHVzZXJBZ2VudCA9IHJlcXVpcmVFbnZpcm9ubWVudFVzZXJBZ2VudCgpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWRvcy9uby12dWxuZXJhYmxlIC0tIHNhZmVcblx0ZW52aXJvbm1lbnRJc0lvcyA9IC8oPzppcGFkfGlwaG9uZXxpcG9kKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCk7XG5cdHJldHVybiBlbnZpcm9ubWVudElzSW9zO1xufVxuXG52YXIgZW52aXJvbm1lbnQ7XG52YXIgaGFzUmVxdWlyZWRFbnZpcm9ubWVudDtcblxuZnVuY3Rpb24gcmVxdWlyZUVudmlyb25tZW50ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW52aXJvbm1lbnQpIHJldHVybiBlbnZpcm9ubWVudDtcblx0aGFzUmVxdWlyZWRFbnZpcm9ubWVudCA9IDE7XG5cdC8qIGdsb2JhbCBCdW4sIERlbm8gLS0gZGV0ZWN0aW9uICovXG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHVzZXJBZ2VudCA9IHJlcXVpcmVFbnZpcm9ubWVudFVzZXJBZ2VudCgpO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cblx0dmFyIHVzZXJBZ2VudFN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdCAgcmV0dXJuIHVzZXJBZ2VudC5zbGljZSgwLCBzdHJpbmcubGVuZ3RoKSA9PT0gc3RyaW5nO1xuXHR9O1xuXG5cdGVudmlyb25tZW50ID0gKGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnQnVuLycpKSByZXR1cm4gJ0JVTic7XG5cdCAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0Nsb3VkZmxhcmUtV29ya2VycycpKSByZXR1cm4gJ0NMT1VERkxBUkUnO1xuXHQgIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdEZW5vLycpKSByZXR1cm4gJ0RFTk8nO1xuXHQgIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdOb2RlLmpzLycpKSByZXR1cm4gJ05PREUnO1xuXHQgIGlmIChnbG9iYWxUaGlzLkJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZycpIHJldHVybiAnQlVOJztcblx0ICBpZiAoZ2xvYmFsVGhpcy5EZW5vICYmIHR5cGVvZiBEZW5vLnZlcnNpb24gPT0gJ29iamVjdCcpIHJldHVybiAnREVOTyc7XG5cdCAgaWYgKGNsYXNzb2YoZ2xvYmFsVGhpcy5wcm9jZXNzKSA9PT0gJ3Byb2Nlc3MnKSByZXR1cm4gJ05PREUnO1xuXHQgIGlmIChnbG9iYWxUaGlzLndpbmRvdyAmJiBnbG9iYWxUaGlzLmRvY3VtZW50KSByZXR1cm4gJ0JST1dTRVInO1xuXHQgIHJldHVybiAnUkVTVCc7XG5cdH0pKCk7XG5cdHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxudmFyIGVudmlyb25tZW50SXNOb2RlO1xudmFyIGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc05vZGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnZpcm9ubWVudElzTm9kZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudmlyb25tZW50SXNOb2RlKSByZXR1cm4gZW52aXJvbm1lbnRJc05vZGU7XG5cdGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc05vZGUgPSAxO1xuXHR2YXIgRU5WSVJPTk1FTlQgPSByZXF1aXJlRW52aXJvbm1lbnQoKTtcblxuXHRlbnZpcm9ubWVudElzTm9kZSA9IEVOVklST05NRU5UID09PSAnTk9ERSc7XG5cdHJldHVybiBlbnZpcm9ubWVudElzTm9kZTtcbn1cblxudmFyIHRhc2s7XG52YXIgaGFzUmVxdWlyZWRUYXNrO1xuXG5mdW5jdGlvbiByZXF1aXJlVGFzayAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRhc2spIHJldHVybiB0YXNrO1xuXHRoYXNSZXF1aXJlZFRhc2sgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBhcHBseSA9IHJlcXVpcmVGdW5jdGlvbkFwcGx5KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaHRtbCA9IHJlcXVpcmVIdG1sKCk7XG5cdHZhciBhcnJheVNsaWNlID0gcmVxdWlyZUFycmF5U2xpY2UoKTtcblx0dmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlRG9jdW1lbnRDcmVhdGVFbGVtZW50KCk7XG5cdHZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmVWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCgpO1xuXHR2YXIgSVNfSU9TID0gcmVxdWlyZUVudmlyb25tZW50SXNJb3MoKTtcblx0dmFyIElTX05PREUgPSByZXF1aXJlRW52aXJvbm1lbnRJc05vZGUoKTtcblxuXHR2YXIgc2V0ID0gZ2xvYmFsVGhpcy5zZXRJbW1lZGlhdGU7XG5cdHZhciBjbGVhciA9IGdsb2JhbFRoaXMuY2xlYXJJbW1lZGlhdGU7XG5cdHZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xuXHR2YXIgRGlzcGF0Y2ggPSBnbG9iYWxUaGlzLkRpc3BhdGNoO1xuXHR2YXIgRnVuY3Rpb24gPSBnbG9iYWxUaGlzLkZ1bmN0aW9uO1xuXHR2YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWxUaGlzLk1lc3NhZ2VDaGFubmVsO1xuXHR2YXIgU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIHF1ZXVlID0ge307XG5cdHZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcblx0dmFyICRsb2NhdGlvbiwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG5cblx0ZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIERlbm8gdGhyb3dzIGEgUmVmZXJlbmNlRXJyb3Igb24gYGxvY2F0aW9uYCBhY2Nlc3Mgd2l0aG91dCBgLS1sb2NhdGlvbmAgZmxhZ1xuXHQgICRsb2NhdGlvbiA9IGdsb2JhbFRoaXMubG9jYXRpb247XG5cdH0pO1xuXG5cdHZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcblx0ICBpZiAoaGFzT3duKHF1ZXVlLCBpZCkpIHtcblx0ICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcblx0ICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG5cdCAgICBmbigpO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJ1bihpZCk7XG5cdCAgfTtcblx0fTtcblxuXHR2YXIgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuXHQgIHJ1bihldmVudC5kYXRhKTtcblx0fTtcblxuXHR2YXIgZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuXHQgIGdsb2JhbFRoaXMucG9zdE1lc3NhZ2UoU3RyaW5nKGlkKSwgJGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArICRsb2NhdGlvbi5ob3N0KTtcblx0fTtcblxuXHQvLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5cdGlmICghc2V0IHx8ICFjbGVhcikge1xuXHQgIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShoYW5kbGVyKSB7XG5cdCAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKTtcblx0ICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG5cdCAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcblx0ICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGFwcGx5KGZuLCB1bmRlZmluZWQsIGFyZ3MpO1xuXHQgICAgfTtcblx0ICAgIGRlZmVyKGNvdW50ZXIpO1xuXHQgICAgcmV0dXJuIGNvdW50ZXI7XG5cdCAgfTtcblx0ICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG5cdCAgICBkZWxldGUgcXVldWVbaWRdO1xuXHQgIH07XG5cdCAgLy8gTm9kZS5qcyAwLjgtXG5cdCAgaWYgKElTX05PREUpIHtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG5cdCAgICB9O1xuXHQgIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuXHQgIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgICAgICBEaXNwYXRjaC5ub3cocnVubmVyKGlkKSk7XG5cdCAgICB9O1xuXHQgIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcblx0ICAvLyBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzYyNFxuXHQgIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xuXHQgICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuXHQgICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG5cdCAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGV2ZW50TGlzdGVuZXI7XG5cdCAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCk7XG5cdCAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG5cdCAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcblx0ICB9IGVsc2UgaWYgKFxuXHQgICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyICYmXG5cdCAgICBpc0NhbGxhYmxlKGdsb2JhbFRoaXMucG9zdE1lc3NhZ2UpICYmXG5cdCAgICAhZ2xvYmFsVGhpcy5pbXBvcnRTY3JpcHRzICYmXG5cdCAgICAkbG9jYXRpb24gJiYgJGxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonICYmXG5cdCAgICAhZmFpbHMoZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlcilcblx0ICApIHtcblx0ICAgIGRlZmVyID0gZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlcjtcblx0ICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblx0ICAvLyBJRTgtXG5cdCAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcblx0ICAgICAgICBydW4oaWQpO1xuXHQgICAgICB9O1xuXHQgICAgfTtcblx0ICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuXHQgIH0gZWxzZSB7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuXHQgICAgfTtcblx0ICB9XG5cdH1cblxuXHR0YXNrID0ge1xuXHQgIHNldDogc2V0LFxuXHQgIGNsZWFyOiBjbGVhclxuXHR9O1xuXHRyZXR1cm4gdGFzaztcbn1cblxudmFyIGhhc1JlcXVpcmVkV2ViX2NsZWFySW1tZWRpYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlV2ViX2NsZWFySW1tZWRpYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2ViX2NsZWFySW1tZWRpYXRlKSByZXR1cm4gd2ViX2NsZWFySW1tZWRpYXRlO1xuXHRoYXNSZXF1aXJlZFdlYl9jbGVhckltbWVkaWF0ZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgY2xlYXJJbW1lZGlhdGUgPSByZXF1aXJlVGFzaygpLmNsZWFyO1xuXG5cdC8vIGBjbGVhckltbWVkaWF0ZWAgbWV0aG9kXG5cdC8vIGh0dHA6Ly93M2MuZ2l0aHViLmlvL3NldEltbWVkaWF0ZS8jc2ktY2xlYXJJbW1lZGlhdGVcblx0JCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgZm9yY2VkOiBnbG9iYWxUaGlzLmNsZWFySW1tZWRpYXRlICE9PSBjbGVhckltbWVkaWF0ZSB9LCB7XG5cdCAgY2xlYXJJbW1lZGlhdGU6IGNsZWFySW1tZWRpYXRlXG5cdH0pO1xuXHRyZXR1cm4gd2ViX2NsZWFySW1tZWRpYXRlO1xufVxuXG52YXIgd2ViX3NldEltbWVkaWF0ZSA9IHt9O1xuXG52YXIgc2NoZWR1bGVyc0ZpeDtcbnZhciBoYXNSZXF1aXJlZFNjaGVkdWxlcnNGaXg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTY2hlZHVsZXJzRml4ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2NoZWR1bGVyc0ZpeCkgcmV0dXJuIHNjaGVkdWxlcnNGaXg7XG5cdGhhc1JlcXVpcmVkU2NoZWR1bGVyc0ZpeCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGFwcGx5ID0gcmVxdWlyZUZ1bmN0aW9uQXBwbHkoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgRU5WSVJPTk1FTlQgPSByZXF1aXJlRW52aXJvbm1lbnQoKTtcblx0dmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlRW52aXJvbm1lbnRVc2VyQWdlbnQoKTtcblx0dmFyIGFycmF5U2xpY2UgPSByZXF1aXJlQXJyYXlTbGljZSgpO1xuXHR2YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlVmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoKTtcblxuXHR2YXIgRnVuY3Rpb24gPSBnbG9iYWxUaGlzLkZ1bmN0aW9uO1xuXHQvLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xuXHR2YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5WSVJPTk1FTlQgPT09ICdCVU4nICYmIChmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHZlcnNpb24gPSBnbG9iYWxUaGlzLkJ1bi52ZXJzaW9uLnNwbGl0KCcuJyk7XG5cdCAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09PSAnMCcgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT09ICczJyAmJiB2ZXJzaW9uWzJdID09PSAnMCcpO1xuXHR9KSgpO1xuXG5cdC8vIElFOS0gLyBCdW4gMC4zLjAtIHNldFRpbWVvdXQgLyBzZXRJbnRlcnZhbCAvIHNldEltbWVkaWF0ZSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xuXHRzY2hlZHVsZXJzRml4ID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuXHQgIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG5cdCAgcmV0dXJuIFdSQVAgPyBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuXHQgICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuXHQgICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcblx0ICAgIHZhciBwYXJhbXMgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgZmlyc3RQYXJhbUluZGV4KSA6IFtdO1xuXHQgICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuXHQgICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcblx0ICAgIH0gOiBmbjtcblx0ICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG5cdCAgfSA6IHNjaGVkdWxlcjtcblx0fTtcblx0cmV0dXJuIHNjaGVkdWxlcnNGaXg7XG59XG5cbnZhciBoYXNSZXF1aXJlZFdlYl9zZXRJbW1lZGlhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWJfc2V0SW1tZWRpYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2ViX3NldEltbWVkaWF0ZSkgcmV0dXJuIHdlYl9zZXRJbW1lZGlhdGU7XG5cdGhhc1JlcXVpcmVkV2ViX3NldEltbWVkaWF0ZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgc2V0VGFzayA9IHJlcXVpcmVUYXNrKCkuc2V0O1xuXHR2YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmVTY2hlZHVsZXJzRml4KCk7XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL292ZW4tc2gvYnVuL2lzc3Vlcy8xNjMzXG5cdHZhciBzZXRJbW1lZGlhdGUgPSBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZSA/IHNjaGVkdWxlcnNGaXgoc2V0VGFzaywgZmFsc2UpIDogc2V0VGFzaztcblxuXHQvLyBgc2V0SW1tZWRpYXRlYCBtZXRob2Rcblx0Ly8gaHR0cDovL3czYy5naXRodWIuaW8vc2V0SW1tZWRpYXRlLyNzaS1zZXRJbW1lZGlhdGVcblx0JCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgZm9yY2VkOiBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZSAhPT0gc2V0SW1tZWRpYXRlIH0sIHtcblx0ICBzZXRJbW1lZGlhdGU6IHNldEltbWVkaWF0ZVxuXHR9KTtcblx0cmV0dXJuIHdlYl9zZXRJbW1lZGlhdGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZFdlYl9pbW1lZGlhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWJfaW1tZWRpYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2ViX2ltbWVkaWF0ZSkgcmV0dXJuIHdlYl9pbW1lZGlhdGU7XG5cdGhhc1JlcXVpcmVkV2ViX2ltbWVkaWF0ZSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcblx0cmVxdWlyZVdlYl9jbGVhckltbWVkaWF0ZSgpO1xuXHRyZXF1aXJlV2ViX3NldEltbWVkaWF0ZSgpO1xuXHRyZXR1cm4gd2ViX2ltbWVkaWF0ZTtcbn1cblxucmVxdWlyZVdlYl9pbW1lZGlhdGUoKTtcblxuLy8gKE9wdGlvbmFsKSBJbXBvcnQgcG9seWZpbGxzIHNvIHRoYXQgQmFiZWwgd2lsbCBpbmNsdWRlIHRoZW0gaW4gdGhlIGJ1bmRsZS5cbi8vIERlYm91bmNlIGhlbHBlciBmdW5jdGlvblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYykge1xuICBsZXQgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTUwO1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gRGV0ZXJtaW5lIHRoZSBjdXJyZW50IGFjdGlvbiAoXCJlcXVhbGl6ZVwiIG9yIFwicmVzZXRcIikgYmFzZWQgb24gYWR2YW5jZWQgYnJlYWtwb2ludHMuXG5mdW5jdGlvbiBnZXRDdXJyZW50QWN0aW9uKCkge1xuICBjb25zdCBvcHRpb25zID0gd2luZG93LmVxdWFsaXplSGVpZ2h0c09wdGlvbnMgfHwge307XG4gIGlmIChvcHRpb25zLmJyZWFrcG9pbnRzICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucy5icmVha3BvaW50cykpIHtcbiAgICBmb3IgKGxldCBicCBvZiBvcHRpb25zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBjb25zdCBtaW4gPSBicC5taW4gIT09IHVuZGVmaW5lZCA/IGJwLm1pbiA6IDA7XG4gICAgICBjb25zdCBtYXggPSBicC5tYXggIT09IHVuZGVmaW5lZCA/IGJwLm1heCA6IEluZmluaXR5O1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IG1pbiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGJwLmFjdGlvbjsgLy8gXCJlcXVhbGl6ZVwiIG9yIFwicmVzZXRcIlxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLm1pbldpZHRoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgb3B0aW9ucy5taW5XaWR0aCA/IFwicmVzZXRcIiA6IFwiZXF1YWxpemVcIjtcbiAgfVxuICByZXR1cm4gXCJlcXVhbGl6ZVwiO1xufVxuXG4vLyBNYWluIGVxdWFsaXphdGlvbiBmdW5jdGlvbiBzdXBwb3J0aW5nIGRhdGEgYXR0cmlidXRlIG9yIGNsYXNzLWJhc2VkIGdyb3VwaW5nLlxuZnVuY3Rpb24gZXF1YWxpemVIZWlnaHRzKCkge1xuICBjb25zdCBvcHRpb25zID0gd2luZG93LmVxdWFsaXplSGVpZ2h0c09wdGlvbnMgfHwge307XG4gIGNvbnN0IGFjdGlvbiA9IGdldEN1cnJlbnRBY3Rpb24oKTtcbiAgaWYgKGFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lcXVhbGl6ZV0sIFtjbGFzcyo9XCJlaC1cIl0nKTtcbiAgICBhbGxFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrKHt9KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXF1YWxpemVdLCBbY2xhc3MqPVwiZWgtXCJdJyk7XG4gIGNvbnN0IGdyb3VwcyA9IHt9O1xuICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICBsZXQgZ3JvdXBLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVxdWFsaXplXCIpO1xuICAgIGlmICghZ3JvdXBLZXkpIHtcbiAgICAgIGdyb3VwS2V5ID0gQXJyYXkuZnJvbShlbC5jbGFzc0xpc3QpLmZpbmQoY2xzID0+IGNscy5zdGFydHNXaXRoKFwiZWgtXCIpKTtcbiAgICB9XG4gICAgaWYgKGdyb3VwS2V5KSB7XG4gICAgICBpZiAoIWdyb3Vwc1tncm91cEtleV0pIHtcbiAgICAgICAgZ3JvdXBzW2dyb3VwS2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2dyb3VwS2V5XS5wdXNoKGVsKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goZ3JvdXBLZXkgPT4ge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIGdyb3Vwc1tncm91cEtleV0uZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICB9KTtcbiAgICBncm91cHNbZ3JvdXBLZXldLmZvckVhY2goZWwgPT4ge1xuICAgICAgbWF4SGVpZ2h0ID0gTWF0aC5tYXgobWF4SGVpZ2h0LCBlbC5vZmZzZXRIZWlnaHQpO1xuICAgIH0pO1xuICAgIGdyb3Vwc1tncm91cEtleV0uZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHttYXhIZWlnaHR9cHhgO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBvcHRpb25zLmNhbGxiYWNrKGdyb3Vwcyk7XG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gZm9yIHRoZSByZXNpemUgZXZlbnQuXG5jb25zdCBkZWJvdW5jZWRFcXVhbGl6ZUhlaWdodHMgPSBkZWJvdW5jZShlcXVhbGl6ZUhlaWdodHMsIDE1MCk7XG5cbi8vIFJ1biBlcXVhbGl6ZUhlaWdodHMgd2hlbiB0aGUgRE9NIGlzIHJlYWR5LlxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIpIHtcbiAgZXF1YWxpemVIZWlnaHRzKCk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBlcXVhbGl6ZUhlaWdodHMpO1xufVxuXG4vLyBVc2UgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBvbiB3aW5kb3cgcmVzaXplLlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2VkRXF1YWxpemVIZWlnaHRzKTtcblxuZXhwb3J0IHsgZXF1YWxpemVIZWlnaHRzIGFzIGRlZmF1bHQgfTtcbiIsIi8vIEVxdWFsaXplIEhlaWdodCBhbmQgQnJlYWtwb2ludFxud2luZG93LmVxdWFsaXplSGVpZ2h0c09wdGlvbnMgPSB7XG5cdGJyZWFrcG9pbnRzOiBbXG5cdFx0eyBtaW46IDAsIG1heDogNzY3LCBhY3Rpb246IFwicmVzZXRcIiB9LFxuXHRcdHsgbWluOiA3NjgsIGFjdGlvbjogXCJlcXVhbGl6ZVwiIH0sXG5cdF0sXG59O1xuXG5pbXBvcnQgXCJlcXVhbGl6ZS1oZWlnaHRzL3J1bnRpbWVcIjtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXHQvLyBEZWJ1ZzogQ2hlY2sgbWVudSBzdHJ1Y3R1cmVcblx0Y29uc29sZS5sb2coXG5cdFx0XCJEZXNrdG9wIG1lbnUgaXRlbXMgd2l0aCBjaGlsZHJlbjpcIixcblx0XHQkKFwiLmhlYWRlci1kZXNrdG9wLW1lbnUgLm1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKS5sZW5ndGhcblx0KTtcblx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBpdGVtcyB3aXRoIHN1YjpcIiwgJChcIiNjc3NtZW51IGxpLmhhcy1zdWJcIikubGVuZ3RoKTtcblxuXHQvLyBEZXNrdG9wIERyb3AgRG93biBDbGljayBJbnN0ZWFkIG9mIEhvdmVyXG5cdCQoXCIuaGVhZGVyLWRlc2t0b3AtbWVudSAubWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKS5jbGljayhcblx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJEZXNrdG9wIG1lbnUgaXRlbSBjbGlja2VkXCIpO1xuXHRcdFx0dmFyICRtZW51SXRlbSA9ICQodGhpcykucGFyZW50KFwibGlcIik7XG5cdFx0XHR2YXIgJHN1Yk1lbnUgPSAkbWVudUl0ZW0uZmluZChcIi5zdWItbWVudVwiKTtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJNZW51IGl0ZW06XCIsICRtZW51SXRlbSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlN1YiBtZW51OlwiLCAkc3ViTWVudSk7XG5cblx0XHRcdC8vIENsb3NlIG90aGVyIG9wZW4gc3ViLW1lbnVzXG5cdFx0XHQkKFwiLmhlYWRlci1kZXNrdG9wLW1lbnUgLm1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxuXHRcdFx0XHQubm90KCRtZW51SXRlbSlcblx0XHRcdFx0LmZpbmQoXCIuc3ViLW1lbnVcIilcblx0XHRcdFx0LnNsaWRlVXAoKTtcblx0XHRcdCQoXCIuaGVhZGVyLWRlc2t0b3AtbWVudSAubWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXG5cdFx0XHRcdC5ub3QoJG1lbnVJdGVtKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoXCJjbGlja2VkXCIpO1xuXG5cdFx0XHQvLyBUb2dnbGUgY3VycmVudCBzdWItbWVudVxuXHRcdFx0JHN1Yk1lbnUuc2xpZGVUb2dnbGUoKTtcblx0XHRcdCRtZW51SXRlbS50b2dnbGVDbGFzcyhcImNsaWNrZWRcIik7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHQpO1xuXHQkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8vIENoZWNrIGlmIHRoZSBjbGljayB3YXMgb3V0c2lkZSBvZiBhbnkgbWVudSBpdGVtIHdpdGggY2hpbGRyZW5cblx0XHR2YXIgJGNsaWNrZWRFbGVtZW50ID0gJChldmVudC50YXJnZXQpO1xuXHRcdHZhciAkbWVudUNvbnRhaW5lciA9ICQoXCIuaGVhZGVyLWRlc2t0b3AtbWVudVwiKTtcblxuXHRcdC8vIElmIHRoZSBjbGlja2VkIGVsZW1lbnQgaXMgbm90IGluc2lkZSB0aGUgbWVudSBjb250YWluZXJcblx0XHRpZiAoISRjbGlja2VkRWxlbWVudC5jbG9zZXN0KCRtZW51Q29udGFpbmVyKS5sZW5ndGgpIHtcblx0XHRcdCQoXCIuaGVhZGVyLWRlc2t0b3AtbWVudSAuc3ViLW1lbnVcIikuc2xpZGVVcCgpO1xuXHRcdFx0JChcblx0XHRcdFx0XCIuaGVhZGVyLWRlc2t0b3AtbWVudSAubWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCJcblx0XHRcdCkucmVtb3ZlQ2xhc3MoXCJjbGlja2VkXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gTW9iaWxlIE1lbnVcblx0JChcIi5vcGVuLW1lbnUtYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHQkKFwiI21vYmlsZS1tZW51XCIpLnNsaWRlRG93bigpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcIm92ZXJmbG93LXlcIiwgXCJoaWRkZW5cIik7XG5cdFx0JChcImJvZHlcIikuY3NzKFwicG9zaXRpb25cIiwgXCJmaXhlZFwiKTtcblx0fSk7XG5cdCQoXCIuY2xvc2UtbWVudS1idXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdCQoXCIjbW9iaWxlLW1lbnVcIikuc2xpZGVVcCgpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcIm92ZXJmbG93LXlcIiwgXCJhdXRvXCIpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cdH0pO1xuXG5cdCQoXCIjY3NzbWVudSBsaS5oYXMtc3ViID4gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBpdGVtIGNsaWNrZWRcIik7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR2YXIgZWxlbWVudCA9ICQodGhpcykucGFyZW50KFwibGlcIik7XG5cdFx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBlbGVtZW50OlwiLCBlbGVtZW50KTtcblxuXHRcdGlmIChlbGVtZW50Lmhhc0NsYXNzKFwib3BlblwiKSkge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LmZpbmQoXCJ1bFwiKS5zbGlkZVVwKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVVcCgpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcblx0XHRcdGVsZW1lbnQuc2libGluZ3MoXCJsaVwiKS5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvKipcblx0ICogTW9kdWxlcyBpbiB0aGlzIGJ1bmRsZVxuXHQgKiBAbGljZW5zZVxuXHQgKlxuXHQgKiBtb2RhbC12aWRlbzpcblx0ICogICBsaWNlbnNlOiBhcHBsZXBsZVxuXHQgKiAgIGF1dGhvcjogYXBwbGVwbGVcblx0ICogICBob21lcGFnZTogaHR0cDovL2RldmVsb3Blci5hLWJsb2djbXMuanBcblx0ICogICB2ZXJzaW9uOiAyLjQuOFxuXHQgKlxuXHQgKiBjdXN0b20tZXZlbnQtcG9seWZpbGw6XG5cdCAqICAgbGljZW5zZTogTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuXHQgKiAgIGNvbnRyaWJ1dG9yczogRnJhbmsgUGFuZXR0YSwgTWlraGFpbCBSZWVua28gPHJlZW5rb0B5YW5kZXgucnU+LCBKb3NjaGEgRmV0aCA8am9zY2hhQGZldGguY29tPlxuXHQgKiAgIGhvbWVwYWdlOiBodHRwczovL2dpdGh1Yi5jb20va3JhbWJ1aGwvY3VzdG9tLWV2ZW50LXBvbHlmaWxsI3JlYWRtZVxuXHQgKiAgIHZlcnNpb246IDAuMy4wXG5cdCAqXG5cdCAqIGVzNi1vYmplY3QtYXNzaWduOlxuXHQgKiAgIGxpY2Vuc2U6IE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcblx0ICogICBhdXRob3I6IFJ1YsOpbiBOb3J0ZSA8cnViZW5ub3J0ZUBnbWFpbC5jb20+XG5cdCAqICAgaG9tZXBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ydWJlbm5vcnRlL2VzNi1vYmplY3QtYXNzaWduXG5cdCAqICAgdmVyc2lvbjogMS4xLjBcblx0ICpcblx0ICogVGhpcyBoZWFkZXIgaXMgZ2VuZXJhdGVkIGJ5IGxpY2Vuc2lmeSAoaHR0cHM6Ly9naXRodWIuY29tL3R3YWRhL2xpY2Vuc2lmeSlcblx0ICovXG5cdCEoZnVuY3Rpb24gKCkge1xuXHRcdGZ1bmN0aW9uIGUodCwgbiwgbykge1xuXHRcdFx0ZnVuY3Rpb24gaShhLCBsKSB7XG5cdFx0XHRcdGlmICghblthXSkge1xuXHRcdFx0XHRcdGlmICghdFthXSkge1xuXHRcdFx0XHRcdFx0dmFyIHUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZTtcblx0XHRcdFx0XHRcdGlmICghbCAmJiB1KSByZXR1cm4gdShhLCAhMCk7XG5cdFx0XHRcdFx0XHRpZiAocikgcmV0dXJuIHIoYSwgITApO1xuXHRcdFx0XHRcdFx0dmFyIGQgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgYSArIFwiJ1wiKTtcblx0XHRcdFx0XHRcdHRocm93ICgoZC5jb2RlID0gXCJNT0RVTEVfTk9UX0ZPVU5EXCIpLCBkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGMgPSAoblthXSA9IHsgZXhwb3J0czoge30gfSk7XG5cdFx0XHRcdFx0dFthXVswXS5jYWxsKFxuXHRcdFx0XHRcdFx0Yy5leHBvcnRzLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG4gPSB0W2FdWzFdW2VdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaShuIHx8IGUpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0XHRjLmV4cG9ydHMsXG5cdFx0XHRcdFx0XHRlLFxuXHRcdFx0XHRcdFx0dCxcblx0XHRcdFx0XHRcdG4sXG5cdFx0XHRcdFx0XHRvXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gblthXS5leHBvcnRzO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChcblx0XHRcdFx0dmFyIHIgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZSwgYSA9IDA7XG5cdFx0XHRcdGEgPCBvLmxlbmd0aDtcblx0XHRcdFx0YSsrXG5cdFx0XHQpXG5cdFx0XHRcdGkob1thXSk7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdFx0cmV0dXJuIGU7XG5cdH0pKCkoXG5cdFx0e1xuXHRcdFx0MTogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgbyA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoXCJ0ZXN0XCIpO1xuXHRcdFx0XHRcdFx0aWYgKChvLnByZXZlbnREZWZhdWx0KCksICEwICE9PSBvLmRlZmF1bHRQcmV2ZW50ZWQpKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcHJldmVudCBkZWZhdWx0XCIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHZhciBpID0gZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG4sIG87XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0KHQgPSB0IHx8IHtcblx0XHRcdFx0XHRcdFx0XHRcdGJ1YmJsZXM6ICExLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogITEsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHZvaWQgMCxcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHQobiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLFxuXHRcdFx0XHRcdFx0XHRcdG4uaW5pdEN1c3RvbUV2ZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHQuYnViYmxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdHQuY2FuY2VsYWJsZSxcblx0XHRcdFx0XHRcdFx0XHRcdHQuZGV0YWlsXG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHQobyA9IG4ucHJldmVudERlZmF1bHQpLFxuXHRcdFx0XHRcdFx0XHRcdChuLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0by5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJkZWZhdWx0UHJldmVudGVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAhMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSAhMDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRuXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0KGkucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZSksXG5cdFx0XHRcdFx0XHRcdCh3aW5kb3cuQ3VzdG9tRXZlbnQgPSBpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0XSxcblx0XHRcdDI6IFtcblx0XHRcdFx0ZnVuY3Rpb24gKGUsIHQsIG4pIHtcblx0XHRcdFx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRcdFx0XHRmdW5jdGlvbiBvKGUsIHQpIHtcblx0XHRcdFx0XHRcdGlmICh2b2lkIDAgPT09IGUgfHwgbnVsbCA9PT0gZSlcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0XHRcdFx0XHRcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgbiA9IE9iamVjdChlKSwgbyA9IDE7XG5cdFx0XHRcdFx0XHRcdG8gPCBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRvKytcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaSA9IGFyZ3VtZW50c1tvXTtcblx0XHRcdFx0XHRcdFx0aWYgKHZvaWQgMCAhPT0gaSAmJiBudWxsICE9PSBpKVxuXHRcdFx0XHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgciA9IE9iamVjdC5rZXlzKE9iamVjdChpKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGEgPSAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsID0gci5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0XHRhIDwgbDtcblx0XHRcdFx0XHRcdFx0XHRcdGErK1xuXHRcdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHUgPSByW2FdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgMCAhPT0gZCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkLmVudW1lcmFibGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0KG5bdV0gPSBpW3VdKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZnVuY3Rpb24gaSgpIHtcblx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24gfHxcblx0XHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgXCJhc3NpZ25cIiwge1xuXHRcdFx0XHRcdFx0XHRcdGVudW1lcmFibGU6ICExLFxuXHRcdFx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBvLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dC5leHBvcnRzID0geyBhc3NpZ246IG8sIHBvbHlmaWxsOiBpIH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0XSxcblx0XHRcdDM6IFtcblx0XHRcdFx0ZnVuY3Rpb24gKGUsIHQsIG4pIHtcblx0XHRcdFx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRcdFx0XHR2YXIgbyA9IGUoXCIuLi9pbmRleFwiKSxcblx0XHRcdFx0XHRcdGkgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRlLmZuLm1vZGFsVmlkZW8gPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcInN0cmluZ3NcIiA9PSB0eXBlb2YgZSB8fCBuZXcgbyh0aGlzLCBlKSxcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXNcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZClcblx0XHRcdFx0XHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGkpO1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHIgPSB3aW5kb3cualF1ZXJ5ID8gd2luZG93LmpRdWVyeSA6IHdpbmRvdy4kO1xuXHRcdFx0XHRcdFx0dm9pZCAwICE9PSByICYmIGkocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQuZXhwb3J0cyA9IGk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgXCIuLi9pbmRleFwiOiA1IH0sXG5cdFx0XHRdLFxuXHRcdFx0NDogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIG8oZSwgdCkge1xuXHRcdFx0XHRcdFx0aWYgKCEoZSBpbnN0YW5jZW9mIHQpKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHRcdFx0XHRcdFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcblx0XHRcdFx0XHR2YXIgaSA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRmdW5jdGlvbiBlKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG8gPSB0W25dO1xuXHRcdFx0XHRcdFx0XHRcdChvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0KG8uY29uZmlndXJhYmxlID0gITApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgby5rZXksIG8pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHQsIG4sIG8pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIG8gJiYgZSh0LCBvKSwgdDtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHRlKFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCIpO1xuXHRcdFx0XHRcdHZhciByID0gZShcIi4uL2xpYi91dGlsXCIpLFxuXHRcdFx0XHRcdFx0YSA9IGUoXCJlczYtb2JqZWN0LWFzc2lnblwiKS5hc3NpZ24sXG5cdFx0XHRcdFx0XHRsID0ge1xuXHRcdFx0XHRcdFx0XHRjaGFubmVsOiBcInlvdXR1YmVcIixcblx0XHRcdFx0XHRcdFx0ZmFjZWJvb2s6IHt9LFxuXHRcdFx0XHRcdFx0XHR5b3V0dWJlOiB7XG5cdFx0XHRcdFx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdFx0XHRcdFx0Y2NfbG9hZF9wb2xpY3k6IDEsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbHM6IDEsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWtiOiAwLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWpzYXBpOiAwLFxuXHRcdFx0XHRcdFx0XHRcdGVuZDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRmczogMSxcblx0XHRcdFx0XHRcdFx0XHRoMTogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMSxcblx0XHRcdFx0XHRcdFx0XHRsb29wOiAwLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdG11dGU6IDAsXG5cdFx0XHRcdFx0XHRcdFx0b3JpZ2luOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHBsYXlzaW5saW5lOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0XHRcdFx0XHRzaG93aW5mbzogMSxcblx0XHRcdFx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRcdFx0XHR3bW9kZTogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lOiBcImRhcmtcIixcblx0XHRcdFx0XHRcdFx0XHRub2Nvb2tpZTogITEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHJhdGlvOiBcIjE2OjlcIixcblx0XHRcdFx0XHRcdFx0dmltZW86IHtcblx0XHRcdFx0XHRcdFx0XHRhcGk6ICExLFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9wYXVzZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0YXV0b3BsYXk6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdGJ5bGluZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbHM6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRsb29wOiAhMSxcblx0XHRcdFx0XHRcdFx0XHRtYXhoZWlnaHQ6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0bWF4d2lkdGg6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0bXV0ZWQ6ICExLFxuXHRcdFx0XHRcdFx0XHRcdHBsYXllcl9pZDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRwb3J0cmFpdDogITAsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHhodG1sOiAhMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuOiAhMCxcblx0XHRcdFx0XHRcdFx0YWxsb3dBdXRvcGxheTogITAsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblNwZWVkOiAzMDAsXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvOiBcIm1vZGFsLXZpZGVvXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0Nsb3NlOiBcIm1vZGFsLXZpZGVvLWNsb3NlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0JvZHk6IFwibW9kYWwtdmlkZW8tYm9keVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW9Jbm5lcjogXCJtb2RhbC12aWRlby1pbm5lclwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW9JZnJhbWVXcmFwOiBcIm1vZGFsLXZpZGVvLW1vdmllLXdyYXBcIixcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvQ2xvc2VCdG46IFwibW9kYWwtdmlkZW8tY2xvc2UtYnRuXCIsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGFyaWE6IHtcblx0XHRcdFx0XHRcdFx0XHRvcGVuTWVzc2FnZTogXCJZb3UganVzdCBvcGVubmVkIHRoZSBtb2RhbCB2aWRlb1wiLFxuXHRcdFx0XHRcdFx0XHRcdGRpc21pc3NCdG5NZXNzYWdlOlxuXHRcdFx0XHRcdFx0XHRcdFx0XCJDbG9zZSB0aGUgbW9kYWwgYnkgY2xpY2tpbmcgaGVyZVwiLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHUgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiBlKHQsIG4pIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgaSA9IHRoaXM7XG5cdFx0XHRcdFx0XHRcdFx0byh0aGlzLCBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdSA9IGEoe30sIGwsIG4pLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIgPT0gdHlwZW9mIHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRzID0gdS5jbGFzc05hbWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZiA9IHUuYW5pbWF0aW9uU3BlZWQ7XG5cdFx0XHRcdFx0XHRcdFx0W10uZm9yRWFjaC5jYWxsKGQsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAodCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcIkFcIiA9PT0gZS50YWdOYW1lICYmIHQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG4gPSBlLmRhdGFzZXQudmlkZW9JZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvID0gZS5kYXRhc2V0LmNoYW5uZWwgfHwgdS5jaGFubmVsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGEgPSAoMCwgci5nZXRVbmlxSWQpKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmRhdGFzZXQudmlkZW9VcmwgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkuZ2V0VmlkZW9VcmwodSwgbywgbiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCA9IGkuZ2V0SHRtbCh1LCBsLCBhKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIuYXBwZW5kKShjLCBkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtID0gdi5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIuanMtbW9kYWwtdmlkZW8tZGlzbWlzcy1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCA9IHZvaWQgMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQocCA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGUgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkuZ2V0V2lkdGhGdWxmaWxsQXNwZWN0UmF0aW8oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1LnJhdGlvLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmlubmVyV2lkdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwibW9kYWwtdmlkZW8taW5uZXItXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQuc3R5bGUubWF4V2lkdGggIT09XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHQuc3R5bGUubWF4V2lkdGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0di5mb2N1cygpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIuYWRkQ2xhc3MpKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5tb2RhbFZpZGVvQ2xvc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwicmVzaXplXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgwLCByLnJlbW92ZSkodiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCBmKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwia2V5ZG93blwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OSA9PT0gZS53aGljaCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChlLnByZXZlbnREZWZhdWx0KCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG0uZm9jdXMoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAodi5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJhcmlhLWxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB2LmZvY3VzKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJyZXNpemVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIudHJpZ2dlckV2ZW50KShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdGkoZSwgW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0UGFkZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdCA9IGUuc3BsaXQoXCI6XCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0biA9IE51bWJlcih0WzBdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDEwMCAqIE51bWJlcih0WzFdKSkgLyBuICsgXCIlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFdpZHRoRnVsZmlsbEFzcGVjdFJhdGlvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBvID0gZS5zcGxpdChcIjpcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpID0gTnVtYmVyKG9bMF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ciA9IE51bWJlcihvWzFdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdCA8IG4gKiAociAvIGkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IE1hdGguZmxvb3IoKGkgLyByKSAqIHQpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiMTAwJVwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFF1ZXJ5U3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB0ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoZSkuZm9yRWFjaChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ICs9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiPVwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbl0gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCImXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQuc3Vic3RyKDAsIHQubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFZpZGVvVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInlvdXR1YmVcIiA9PT0gdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldFlvdXR1YmVVcmwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS55b3V0dWJlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcInZpbWVvXCIgPT09IHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRWaW1lb1VybChlLnZpbWVvLCBuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcImZhY2Vib29rXCIgPT09IHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRGYWNlYm9va1VybChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmZhY2Vib29rLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcImN1c3RvbVwiID09PSB0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGUudXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0VmltZW9VcmxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCI/XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRRdWVyeVN0cmluZyhlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0WW91dHViZVVybFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuZ2V0UXVlcnlTdHJpbmcoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICEwID09PSBlLm5vY29va2llXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiLy93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiP1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiLy93d3cueW91dHViZS5jb20vZW1iZWQvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiP1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldEZhY2Vib29rVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIi8vd3d3LmZhY2Vib29rLmNvbS92Mi4xMC9wbHVnaW5zL3ZpZGVvLnBocD9ocmVmPWh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mYWNlYm9vay92aWRlb3MvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIiZcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFF1ZXJ5U3RyaW5nKGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJnZXRIdG1sXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBvID0gdGhpcy5nZXRQYWRkaW5nKGUucmF0aW8pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSA9IGUuY2xhc3NOYW1lcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1xcbiAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlbyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmFyaWEub3Blbk1lc3NhZ2UgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiIGlkPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0JvZHkgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpLm1vZGFsVmlkZW9Jbm5lciArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgaWQ9XCJtb2RhbC12aWRlby1pbm5lci0nICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0lmcmFtZVdyYXAgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiIHN0eWxlPVwicGFkZGluZy1ib3R0b206JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0Nsb3NlQnRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcganMtbW9kYWwtdmlkZW8tZGlzbWlzcy1idG5cIiBhcmlhLWxhYmVsPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmFyaWEuZGlzbWlzc0J0bk1lc3NhZ2UgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD0nNDYwJyBoZWlnaHQ9JzIzMCcgc3JjPVxcXCJcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiXFxcIiBmcmFtZWJvcmRlcj0nMCcgYWxsb3dmdWxsc2NyZWVuPVwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuYWxsb3dGdWxsU2NyZWVuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgdGFiaW5kZXg9XCItMVwiIGFsbG93PVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZS5hbGxvd0F1dG9wbGF5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJhdXRvcGxheTtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiXCIpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgYWNjZWxlcm9tZXRlcjsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRlXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdChuLmRlZmF1bHQgPSB1KSwgKHQuZXhwb3J0cyA9IG4uZGVmYXVsdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIi4uL2xpYi91dGlsXCI6IDYsXG5cdFx0XHRcdFx0XCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIjogMSxcblx0XHRcdFx0XHRcImVzNi1vYmplY3QtYXNzaWduXCI6IDIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0NTogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdHQuZXhwb3J0cyA9IGUoXCIuL2NvcmUvXCIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IFwiLi9jb3JlL1wiOiA0IH0sXG5cdFx0XHRdLFxuXHRcdFx0NjogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7XG5cdFx0XHRcdFx0KG4uYXBwZW5kID0gZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdHZhciBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcdGZvciAobi5pbm5lckhUTUwgPSB0OyBuLmNoaWxkcmVuLmxlbmd0aCA+IDA7IClcblx0XHRcdFx0XHRcdFx0ZS5hcHBlbmRDaGlsZChuLmNoaWxkcmVuWzBdKTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdChuLmdldFVuaXFJZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHREYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpXG5cdFx0XHRcdFx0XHRcdCkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0KG4ucmVtb3ZlID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0ZSAmJiBlLnBhcmVudE5vZGUgJiYgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQobi5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlLCB0KSB7XG5cdFx0XHRcdFx0XHRcdGUuY2xhc3NMaXN0XG5cdFx0XHRcdFx0XHRcdFx0PyBlLmNsYXNzTGlzdC5hZGQodClcblx0XHRcdFx0XHRcdFx0XHQ6IChlLmNsYXNzTmFtZSArPSBcIiBcIiArIHQpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQobi50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHR2YXIgbyA9IHZvaWQgMDtcblx0XHRcdFx0XHRcdFx0d2luZG93LkN1c3RvbUV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0PyAobyA9IG5ldyBDdXN0b21FdmVudCh0LCB7IGNhbmNlbGFibGU6ICEwIH0pKVxuXHRcdFx0XHRcdFx0XHRcdDogKChvID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSksXG5cdFx0XHRcdFx0XHRcdFx0ICBvLmluaXRDdXN0b21FdmVudCh0LCAhMSwgITEsIG4pKSxcblx0XHRcdFx0XHRcdFx0XHRlLmRpc3BhdGNoRXZlbnQobyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e30sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e30sXG5cdFx0WzNdXG5cdCk7XG5cdCQoXCIuanMtbW9kYWwtYnRuXCIpLm1vZGFsVmlkZW8oKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvanMvY29yZVwiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCI6IDAsXG5cdFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIjogMCxcblx0XCJzdHlsZVwiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb21wbGV0ZV9tb3J0Z2FnZV90aGVtZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb21wbGV0ZV9tb3J0Z2FnZV90aGVtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2NvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvY29yZS5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvc29jaWFsLXNoYXJlXCIsXCJzdHlsZVwiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0eWxlLnNjc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RlbXAtc29jaWFsLXNoYXJlLmNzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvc29jaWFsLXNoYXJlXCIsXCJzdHlsZVwiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVtcC1jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXMuY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2NvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZW1wLWthbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnMuY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2NvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZW1wLWthbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnMuY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RlbXAtcXVlcnljcmFmdC5jc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlcXVhbGl6ZUhlaWdodHNPcHRpb25zIiwiYnJlYWtwb2ludHMiLCJtaW4iLCJtYXgiLCJhY3Rpb24iLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjbGljayIsImUiLCIkbWVudUl0ZW0iLCJwYXJlbnQiLCIkc3ViTWVudSIsImZpbmQiLCJub3QiLCJzbGlkZVVwIiwicmVtb3ZlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbiIsImV2ZW50IiwiJGNsaWNrZWRFbGVtZW50IiwidGFyZ2V0IiwiJG1lbnVDb250YWluZXIiLCJjbG9zZXN0Iiwic2xpZGVEb3duIiwiY3NzIiwiZWxlbWVudCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsInNpYmxpbmdzIiwidCIsIm4iLCJvIiwiaSIsImEiLCJsIiwidSIsInJlcXVpcmUiLCJyIiwiZCIsIkVycm9yIiwiY29kZSIsImMiLCJleHBvcnRzIiwiY2FsbCIsIkN1c3RvbUV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInByb3RvdHlwZSIsIkV2ZW50IiwiVHlwZUVycm9yIiwiYXJndW1lbnRzIiwia2V5cyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJhc3NpZ24iLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwicG9seWZpbGwiLCJmbiIsIm1vZGFsVmlkZW8iLCJkZWZpbmUiLCJhbWQiLCJrZXkiLCJjaGFubmVsIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiYXV0b3BsYXkiLCJjY19sb2FkX3BvbGljeSIsImNvbG9yIiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJlbmFibGVqc2FwaSIsImVuZCIsImZzIiwiaDEiLCJpdl9sb2FkX3BvbGljeSIsImxvb3AiLCJtb2Rlc3RicmFuZGluZyIsIm11dGUiLCJvcmlnaW4iLCJwbGF5c2lubGluZSIsInJlbCIsInNob3dpbmZvIiwic3RhcnQiLCJ3bW9kZSIsInRoZW1lIiwibm9jb29raWUiLCJyYXRpbyIsInZpbWVvIiwiYXBpIiwiYXV0b3BhdXNlIiwiYnlsaW5lIiwiY2FsbGJhY2siLCJoZWlnaHQiLCJtYXhoZWlnaHQiLCJtYXh3aWR0aCIsIm11dGVkIiwicGxheWVyX2lkIiwicG9ydHJhaXQiLCJ0aXRsZSIsIndpZHRoIiwieGh0bWwiLCJhbGxvd0Z1bGxTY3JlZW4iLCJhbGxvd0F1dG9wbGF5IiwiYW5pbWF0aW9uU3BlZWQiLCJjbGFzc05hbWVzIiwibW9kYWxWaWRlb0Nsb3NlIiwibW9kYWxWaWRlb0JvZHkiLCJtb2RhbFZpZGVvSW5uZXIiLCJtb2RhbFZpZGVvSWZyYW1lV3JhcCIsIm1vZGFsVmlkZW9DbG9zZUJ0biIsImFyaWEiLCJvcGVuTWVzc2FnZSIsImRpc21pc3NCdG5NZXNzYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJzIiwiZiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwidGFnTmFtZSIsImRhdGFzZXQiLCJ2aWRlb0lkIiwiZ2V0VW5pcUlkIiwidmlkZW9VcmwiLCJnZXRWaWRlb1VybCIsImdldEh0bWwiLCJhcHBlbmQiLCJ2IiwiZ2V0RWxlbWVudEJ5SWQiLCJtIiwicCIsImIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0V2lkdGhGdWxmaWxsQXNwZWN0UmF0aW8iLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzdHlsZSIsIm1heFdpZHRoIiwiZm9jdXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwid2hpY2giLCJhY3RpdmVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidHJpZ2dlckV2ZW50Iiwic3BsaXQiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJzdWJzdHIiLCJnZXRZb3V0dWJlVXJsIiwiZ2V0VmltZW9VcmwiLCJnZXRGYWNlYm9va1VybCIsInVybCIsImdldFF1ZXJ5U3RyaW5nIiwiZ2V0UGFkZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInJhbmRvbSIsInRvVXBwZXJDYXNlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwiZGlzcGF0Y2hFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=