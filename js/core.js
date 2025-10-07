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
  // Debug
  console.log("Desktop menu items with children:", $(".header-desktop-menu .menu li.menu-item-has-children").length);
  console.log("Mobile menu items with sub:", $("#cssmenu li.has-sub").length);

  // Helper: close all submenus
  function closeAll() {
    $(".sub-menu").slideUp();
    $("li.menu-item-has-children").removeClass("open").find("> a").attr("aria-expanded", "false");
  }

  // Toggle handler for anchors that have a submenu
  $("#menu-primary-menu li.menu-item-has-children > a, #menu-top-menu li.menu-item-has-children > a").on("click", function (e) {
    e.preventDefault(); // stop navigation
    e.stopPropagation(); // don't bubble to document

    var $li = $(this).parent("li");

    // Close the other menu's submenus first
    if ($li.closest("#menu-primary-menu").length) {
      $("#menu-top-menu .sub-menu").slideUp().parent().removeClass("open").find("> a").attr("aria-expanded", "false");
    } else {
      $("#menu-primary-menu .sub-menu").slideUp().parent().removeClass("open").find("> a").attr("aria-expanded", "false");
    }

    // Toggle this one and close siblings
    var $submenu = $li.children(".sub-menu");
    $li.toggleClass("open").siblings().removeClass("open").children(".sub-menu").slideUp().parent().find("> a").attr("aria-expanded", "false");
    $submenu.stop(true, true).slideToggle();
    $(this).attr("aria-expanded", $li.hasClass("open") ? "true" : "false");
  });

  // Click outside closes everything
  $(document).on("click", function () {
    closeAll();
  });

  // (Nice to have) keyboard accessibility: open/close on Enter/Space
  $("#menu-primary-menu li.menu-item-has-children > a, #menu-top-menu li.menu-item-has-children > a").attr({
    "aria-haspopup": "true",
    "aria-expanded": "false",
    role: "button"
  }).on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(this).trigger("click");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLE1BQU07O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUVBQW1FO0FBQ25FLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCOztBQUV4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxVQUFVO0FBQ3JGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSwyQkFBMkI7QUFDM0IsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLFNBQVMsNENBQTRDO0FBQ3JEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELG1CQUFtQjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdCQUFnQjtBQUM3RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFELEdBQUcsZ0JBQWdCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxvQ0FBb0M7QUFDOUU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssNkVBQTZFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdFQUFnRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNFQUFzRTtBQUMzRTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0VBQXNFO0FBQzNFO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBLEVBQUU7O0FBRUYsZ0VBQWdFLGNBQWM7O0FBRTlFLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksc0NBQXNDO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxrQkFBa0I7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakYsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrRkFBa0Y7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBEQUEwRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssNkNBQTZDO0FBQ2xEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMERBQTBEO0FBQy9EO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywwREFBMEQ7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGtHQUFrRztBQUN2RztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUV0REE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vbm9kZV9tb2R1bGVzL2VxdWFsaXplLWhlaWdodHMvZGlzdC9lcXVhbGl6ZUhlaWdodHMuanMiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi9zcmMvanMvY29yZS5qcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3NyYy9zdHlsZS5zY3NzPzQ4NWEiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi90ZW1wLWNvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlcy5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi90ZW1wLWthbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnMuY3NzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vdGVtcC1rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzLmNzcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3RlbXAtcXVlcnljcmFmdC5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi90ZW1wLXNvY2lhbC1zaGFyZS5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxudmFyIGVzX3JlZ2V4cF9mbGFncyA9IHt9O1xuXG52YXIgZ2xvYmFsVGhpc18xO1xudmFyIGhhc1JlcXVpcmVkR2xvYmFsVGhpcztcblxuZnVuY3Rpb24gcmVxdWlyZUdsb2JhbFRoaXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHbG9iYWxUaGlzKSByZXR1cm4gZ2xvYmFsVGhpc18xO1xuXHRoYXNSZXF1aXJlZEdsb2JhbFRoaXMgPSAxO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcblx0fTtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuXHRnbG9iYWxUaGlzXzEgPVxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG5cdCAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcblx0ICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcblx0ICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuXHQgIGNoZWNrKHR5cGVvZiBjb21tb25qc0dsb2JhbCA9PSAnb2JqZWN0JyAmJiBjb21tb25qc0dsb2JhbCkgfHxcblx0ICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpc18xID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXNfMSkgfHxcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcblx0ICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHRyZXR1cm4gZ2xvYmFsVGhpc18xO1xufVxuXG52YXIgZmFpbHM7XG52YXIgaGFzUmVxdWlyZWRGYWlscztcblxuZnVuY3Rpb24gcmVxdWlyZUZhaWxzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRmFpbHMpIHJldHVybiBmYWlscztcblx0aGFzUmVxdWlyZWRGYWlscyA9IDE7XG5cdGZhaWxzID0gZnVuY3Rpb24gKGV4ZWMpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICEhZXhlYygpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBmYWlscztcbn1cblxudmFyIGRlc2NyaXB0b3JzO1xudmFyIGhhc1JlcXVpcmVkRGVzY3JpcHRvcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVEZXNjcmlwdG9ycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERlc2NyaXB0b3JzKSByZXR1cm4gZGVzY3JpcHRvcnM7XG5cdGhhc1JlcXVpcmVkRGVzY3JpcHRvcnMgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHQvLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxuXHRkZXNjcmlwdG9ycyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xuXHR9KTtcblx0cmV0dXJuIGRlc2NyaXB0b3JzO1xufVxuXG52YXIgbWFrZUJ1aWx0SW4gPSB7ZXhwb3J0czoge319O1xuXG52YXIgZnVuY3Rpb25CaW5kTmF0aXZlO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kTmF0aXZlO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25CaW5kTmF0aXZlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kTmF0aXZlKSByZXR1cm4gZnVuY3Rpb25CaW5kTmF0aXZlO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZE5hdGl2ZSA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdGZ1bmN0aW9uQmluZE5hdGl2ZSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcblx0ICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcblx0ICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcblx0fSk7XG5cdHJldHVybiBmdW5jdGlvbkJpbmROYXRpdmU7XG59XG5cbnZhciBmdW5jdGlvblVuY3VycnlUaGlzO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpcztcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzKSByZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpcztcblx0aGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzID0gMTtcblx0dmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZUZ1bmN0aW9uQmluZE5hdGl2ZSgpO1xuXG5cdHZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblx0dmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuXHR2YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxuXHRmdW5jdGlvblVuY3VycnlUaGlzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cdHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzO1xufVxuXG52YXIgaXNDYWxsYWJsZTtcbnZhciBoYXNSZXF1aXJlZElzQ2FsbGFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0NhbGxhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNDYWxsYWJsZSkgcmV0dXJuIGlzQ2FsbGFibGU7XG5cdGhhc1JlcXVpcmVkSXNDYWxsYWJsZSA9IDE7XG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3Rcblx0dmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuXHQvLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdGlzQ2FsbGFibGUgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG5cdH0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG5cdH07XG5cdHJldHVybiBpc0NhbGxhYmxlO1xufVxuXG52YXIgaXNOdWxsT3JVbmRlZmluZWQ7XG52YXIgaGFzUmVxdWlyZWRJc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNOdWxsT3JVbmRlZmluZWQpIHJldHVybiBpc051bGxPclVuZGVmaW5lZDtcblx0aGFzUmVxdWlyZWRJc051bGxPclVuZGVmaW5lZCA9IDE7XG5cdC8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcblx0aXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcblx0fTtcblx0cmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkO1xufVxuXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZTtcbnZhciBoYXNSZXF1aXJlZFJlcXVpcmVPYmplY3RDb2VyY2libGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUmVxdWlyZU9iamVjdENvZXJjaWJsZSkgcmV0dXJuIHJlcXVpcmVPYmplY3RDb2VyY2libGU7XG5cdGhhc1JlcXVpcmVkUmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IDE7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0cmV0dXJuIHJlcXVpcmVPYmplY3RDb2VyY2libGU7XG59XG5cbnZhciB0b09iamVjdDtcbnZhciBoYXNSZXF1aXJlZFRvT2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9PYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb09iamVjdCkgcmV0dXJuIHRvT2JqZWN0O1xuXHRoYXNSZXF1aXJlZFRvT2JqZWN0ID0gMTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5cdC8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcblx0dG9PYmplY3QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG5cdH07XG5cdHJldHVybiB0b09iamVjdDtcbn1cblxudmFyIGhhc093blByb3BlcnR5XzE7XG52YXIgaGFzUmVxdWlyZWRIYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVxdWlyZUhhc093blByb3BlcnR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSGFzT3duUHJvcGVydHkpIHJldHVybiBoYXNPd25Qcm9wZXJ0eV8xO1xuXHRoYXNSZXF1aXJlZEhhc093blByb3BlcnR5ID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cblx0dmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG5cdC8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxuXHRoYXNPd25Qcm9wZXJ0eV8xID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuXHQgIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG5cdH07XG5cdHJldHVybiBoYXNPd25Qcm9wZXJ0eV8xO1xufVxuXG52YXIgZnVuY3Rpb25OYW1lO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25OYW1lO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25OYW1lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25OYW1lKSByZXR1cm4gZnVuY3Rpb25OYW1lO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uTmFtZSA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cblx0dmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdHZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuXHR2YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuXHQvLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG5cdHZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG5cdHZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxuXHRmdW5jdGlvbk5hbWUgPSB7XG5cdCAgRVhJU1RTOiBFWElTVFMsXG5cdCAgUFJPUEVSOiBQUk9QRVIsXG5cdCAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uTmFtZTtcbn1cblxudmFyIHNoYXJlZFN0b3JlID0ge2V4cG9ydHM6IHt9fTtcblxudmFyIGlzUHVyZTtcbnZhciBoYXNSZXF1aXJlZElzUHVyZTtcblxuZnVuY3Rpb24gcmVxdWlyZUlzUHVyZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzUHVyZSkgcmV0dXJuIGlzUHVyZTtcblx0aGFzUmVxdWlyZWRJc1B1cmUgPSAxO1xuXHRpc1B1cmUgPSBmYWxzZTtcblx0cmV0dXJuIGlzUHVyZTtcbn1cblxudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5O1xudmFyIGhhc1JlcXVpcmVkRGVmaW5lR2xvYmFsUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVEZWZpbmVHbG9iYWxQcm9wZXJ0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERlZmluZUdsb2JhbFByb3BlcnR5KSByZXR1cm4gZGVmaW5lR2xvYmFsUHJvcGVydHk7XG5cdGhhc1JlcXVpcmVkRGVmaW5lR2xvYmFsUHJvcGVydHkgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuXHRkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdCAgdHJ5IHtcblx0ICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuXHQgIH0gcmV0dXJuIHZhbHVlO1xuXHR9O1xuXHRyZXR1cm4gZGVmaW5lR2xvYmFsUHJvcGVydHk7XG59XG5cbnZhciBoYXNSZXF1aXJlZFNoYXJlZFN0b3JlO1xuXG5mdW5jdGlvbiByZXF1aXJlU2hhcmVkU3RvcmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTaGFyZWRTdG9yZSkgcmV0dXJuIHNoYXJlZFN0b3JlLmV4cG9ydHM7XG5cdGhhc1JlcXVpcmVkU2hhcmVkU3RvcmUgPSAxO1xuXHR2YXIgSVNfUFVSRSA9IHJlcXVpcmVJc1B1cmUoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlRGVmaW5lR2xvYmFsUHJvcGVydHkoKTtcblxuXHR2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG5cdHZhciBzdG9yZSA9IHNoYXJlZFN0b3JlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cblx0KHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG5cdCAgdmVyc2lvbjogJzMuNDAuMCcsXG5cdCAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuXHQgIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG5cdCAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDAuMC9MSUNFTlNFJyxcblx0ICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcblx0fSk7XG5cdHJldHVybiBzaGFyZWRTdG9yZS5leHBvcnRzO1xufVxuXG52YXIgaW5zcGVjdFNvdXJjZTtcbnZhciBoYXNSZXF1aXJlZEluc3BlY3RTb3VyY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnNwZWN0U291cmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSW5zcGVjdFNvdXJjZSkgcmV0dXJuIGluc3BlY3RTb3VyY2U7XG5cdGhhc1JlcXVpcmVkSW5zcGVjdFNvdXJjZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIHN0b3JlID0gcmVxdWlyZVNoYXJlZFN0b3JlKCk7XG5cblx0dmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cblx0Ly8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuXHRpZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcblx0ICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG5cdCAgfTtcblx0fVxuXG5cdGluc3BlY3RTb3VyY2UgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuXHRyZXR1cm4gaW5zcGVjdFNvdXJjZTtcbn1cblxudmFyIHdlYWtNYXBCYXNpY0RldGVjdGlvbjtcbnZhciBoYXNSZXF1aXJlZFdlYWtNYXBCYXNpY0RldGVjdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZVdlYWtNYXBCYXNpY0RldGVjdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYWtNYXBCYXNpY0RldGVjdGlvbikgcmV0dXJuIHdlYWtNYXBCYXNpY0RldGVjdGlvbjtcblx0aGFzUmVxdWlyZWRXZWFrTWFwQmFzaWNEZXRlY3Rpb24gPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblxuXHR2YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxuXHR3ZWFrTWFwQmFzaWNEZXRlY3Rpb24gPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuXHRyZXR1cm4gd2Vha01hcEJhc2ljRGV0ZWN0aW9uO1xufVxuXG52YXIgaXNPYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRJc09iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZUlzT2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNPYmplY3QpIHJldHVybiBpc09iamVjdDtcblx0aGFzUmVxdWlyZWRJc09iamVjdCA9IDE7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblxuXHRpc09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xuXHR9O1xuXHRyZXR1cm4gaXNPYmplY3Q7XG59XG5cbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eSA9IHt9O1xuXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50O1xudmFyIGhhc1JlcXVpcmVkRG9jdW1lbnRDcmVhdGVFbGVtZW50O1xuXG5mdW5jdGlvbiByZXF1aXJlRG9jdW1lbnRDcmVhdGVFbGVtZW50ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRG9jdW1lbnRDcmVhdGVFbGVtZW50KSByZXR1cm4gZG9jdW1lbnRDcmVhdGVFbGVtZW50O1xuXHRoYXNSZXF1aXJlZERvY3VtZW50Q3JlYXRlRWxlbWVudCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0dmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcblx0Ly8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG5cdHZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cblx0ZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG5cdH07XG5cdHJldHVybiBkb2N1bWVudENyZWF0ZUVsZW1lbnQ7XG59XG5cbnZhciBpZThEb21EZWZpbmU7XG52YXIgaGFzUmVxdWlyZWRJZThEb21EZWZpbmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJZThEb21EZWZpbmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJZThEb21EZWZpbmUpIHJldHVybiBpZThEb21EZWZpbmU7XG5cdGhhc1JlcXVpcmVkSWU4RG9tRGVmaW5lID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmVEb2N1bWVudENyZWF0ZUVsZW1lbnQoKTtcblxuXHQvLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcblx0aWU4RG9tRGVmaW5lID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuXHQgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG5cdCAgfSkuYSAhPT0gNztcblx0fSk7XG5cdHJldHVybiBpZThEb21EZWZpbmU7XG59XG5cbnZhciB2OFByb3RvdHlwZURlZmluZUJ1ZztcbnZhciBoYXNSZXF1aXJlZFY4UHJvdG90eXBlRGVmaW5lQnVnO1xuXG5mdW5jdGlvbiByZXF1aXJlVjhQcm90b3R5cGVEZWZpbmVCdWcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRWOFByb3RvdHlwZURlZmluZUJ1ZykgcmV0dXJuIHY4UHJvdG90eXBlRGVmaW5lQnVnO1xuXHRoYXNSZXF1aXJlZFY4UHJvdG90eXBlRGVmaW5lQnVnID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdC8vIFY4IH4gQ2hyb21lIDM2LVxuXHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5cdHY4UHJvdG90eXBlRGVmaW5lQnVnID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcblx0ICAgIHZhbHVlOiA0Mixcblx0ICAgIHdyaXRhYmxlOiBmYWxzZVxuXHQgIH0pLnByb3RvdHlwZSAhPT0gNDI7XG5cdH0pO1xuXHRyZXR1cm4gdjhQcm90b3R5cGVEZWZpbmVCdWc7XG59XG5cbnZhciBhbk9iamVjdDtcbnZhciBoYXNSZXF1aXJlZEFuT2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlQW5PYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBbk9iamVjdCkgcmV0dXJuIGFuT2JqZWN0O1xuXHRoYXNSZXF1aXJlZEFuT2JqZWN0ID0gMTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0dmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcblx0YW5PYmplY3QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcblx0fTtcblx0cmV0dXJuIGFuT2JqZWN0O1xufVxuXG52YXIgZnVuY3Rpb25DYWxsO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25DYWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25DYWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25DYWxsKSByZXR1cm4gZnVuY3Rpb25DYWxsO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uQ2FsbCA9IDE7XG5cdHZhciBOQVRJVkVfQklORCA9IHJlcXVpcmVGdW5jdGlvbkJpbmROYXRpdmUoKTtcblxuXHR2YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuXHRmdW5jdGlvbkNhbGwgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25DYWxsO1xufVxuXG52YXIgZ2V0QnVpbHRJbjtcbnZhciBoYXNSZXF1aXJlZEdldEJ1aWx0SW47XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRCdWlsdEluICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0QnVpbHRJbikgcmV0dXJuIGdldEJ1aWx0SW47XG5cdGhhc1JlcXVpcmVkR2V0QnVpbHRJbiA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXG5cdHZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRnZXRCdWlsdEluID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG5cdCAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG5cdH07XG5cdHJldHVybiBnZXRCdWlsdEluO1xufVxuXG52YXIgb2JqZWN0SXNQcm90b3R5cGVPZjtcbnZhciBoYXNSZXF1aXJlZE9iamVjdElzUHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RJc1Byb3RvdHlwZU9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0SXNQcm90b3R5cGVPZikgcmV0dXJuIG9iamVjdElzUHJvdG90eXBlT2Y7XG5cdGhhc1JlcXVpcmVkT2JqZWN0SXNQcm90b3R5cGVPZiA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0b2JqZWN0SXNQcm90b3R5cGVPZiA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuXHRyZXR1cm4gb2JqZWN0SXNQcm90b3R5cGVPZjtcbn1cblxudmFyIGVudmlyb25tZW50VXNlckFnZW50O1xudmFyIGhhc1JlcXVpcmVkRW52aXJvbm1lbnRVc2VyQWdlbnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnZpcm9ubWVudFVzZXJBZ2VudCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudmlyb25tZW50VXNlckFnZW50KSByZXR1cm4gZW52aXJvbm1lbnRVc2VyQWdlbnQ7XG5cdGhhc1JlcXVpcmVkRW52aXJvbm1lbnRVc2VyQWdlbnQgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cblx0dmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xuXHR2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0ZW52aXJvbm1lbnRVc2VyQWdlbnQgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuXHRyZXR1cm4gZW52aXJvbm1lbnRVc2VyQWdlbnQ7XG59XG5cbnZhciBlbnZpcm9ubWVudFY4VmVyc2lvbjtcbnZhciBoYXNSZXF1aXJlZEVudmlyb25tZW50VjhWZXJzaW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlRW52aXJvbm1lbnRWOFZlcnNpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnZpcm9ubWVudFY4VmVyc2lvbikgcmV0dXJuIGVudmlyb25tZW50VjhWZXJzaW9uO1xuXHRoYXNSZXF1aXJlZEVudmlyb25tZW50VjhWZXJzaW9uID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgdXNlckFnZW50ID0gcmVxdWlyZUVudmlyb25tZW50VXNlckFnZW50KCk7XG5cblx0dmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG5cdHZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xuXHR2YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG5cdHZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xuXHR2YXIgbWF0Y2gsIHZlcnNpb247XG5cblx0aWYgKHY4KSB7XG5cdCAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuXHQgIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcblx0ICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuXHQgIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG5cdH1cblxuXHQvLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcblx0Ly8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5cdGlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcblx0ICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuXHQgIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcblx0ICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcblx0ICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcblx0ICB9XG5cdH1cblxuXHRlbnZpcm9ubWVudFY4VmVyc2lvbiA9IHZlcnNpb247XG5cdHJldHVybiBlbnZpcm9ubWVudFY4VmVyc2lvbjtcbn1cblxudmFyIHN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uO1xudmFyIGhhc1JlcXVpcmVkU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uKSByZXR1cm4gc3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb247XG5cdGhhc1JlcXVpcmVkU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24gPSAxO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cblx0dmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlRW52aXJvbm1lbnRWOFZlcnNpb24oKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblxuXHR2YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdHN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuXHQgIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG5cdCAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuXHQgIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcblx0ICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG5cdCAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcblx0ICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG5cdCAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG5cdH0pO1xuXHRyZXR1cm4gc3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb247XG59XG5cbnZhciB1c2VTeW1ib2xBc1VpZDtcbnZhciBoYXNSZXF1aXJlZFVzZVN5bWJvbEFzVWlkO1xuXG5mdW5jdGlvbiByZXF1aXJlVXNlU3ltYm9sQXNVaWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRVc2VTeW1ib2xBc1VpZCkgcmV0dXJuIHVzZVN5bWJvbEFzVWlkO1xuXHRoYXNSZXF1aXJlZFVzZVN5bWJvbEFzVWlkID0gMTtcblx0LyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG5cdHZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZVN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uKCk7XG5cblx0dXNlU3ltYm9sQXNVaWQgPSBOQVRJVkVfU1lNQk9MICYmXG5cdCAgIVN5bWJvbC5zaGFtICYmXG5cdCAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcblx0cmV0dXJuIHVzZVN5bWJvbEFzVWlkO1xufVxuXG52YXIgaXNTeW1ib2w7XG52YXIgaGFzUmVxdWlyZWRJc1N5bWJvbDtcblxuZnVuY3Rpb24gcmVxdWlyZUlzU3ltYm9sICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNTeW1ib2wpIHJldHVybiBpc1N5bWJvbDtcblx0aGFzUmVxdWlyZWRJc1N5bWJvbCA9IDE7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RJc1Byb3RvdHlwZU9mKCk7XG5cdHZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmVVc2VTeW1ib2xBc1VpZCgpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5cdGlzU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xuXHR9IDogZnVuY3Rpb24gKGl0KSB7XG5cdCAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcblx0ICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG5cdH07XG5cdHJldHVybiBpc1N5bWJvbDtcbn1cblxudmFyIHRyeVRvU3RyaW5nO1xudmFyIGhhc1JlcXVpcmVkVHJ5VG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUcnlUb1N0cmluZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRyeVRvU3RyaW5nKSByZXR1cm4gdHJ5VG9TdHJpbmc7XG5cdGhhc1JlcXVpcmVkVHJ5VG9TdHJpbmcgPSAxO1xuXHR2YXIgJFN0cmluZyA9IFN0cmluZztcblxuXHR0cnlUb1N0cmluZyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiAnT2JqZWN0Jztcblx0ICB9XG5cdH07XG5cdHJldHVybiB0cnlUb1N0cmluZztcbn1cblxudmFyIGFDYWxsYWJsZTtcbnZhciBoYXNSZXF1aXJlZEFDYWxsYWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFDYWxsYWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFDYWxsYWJsZSkgcmV0dXJuIGFDYWxsYWJsZTtcblx0aGFzUmVxdWlyZWRBQ2FsbGFibGUgPSAxO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmVUcnlUb1N0cmluZygpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5cdGFDYWxsYWJsZSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fTtcblx0cmV0dXJuIGFDYWxsYWJsZTtcbn1cblxudmFyIGdldE1ldGhvZDtcbnZhciBoYXNSZXF1aXJlZEdldE1ldGhvZDtcblxuZnVuY3Rpb24gcmVxdWlyZUdldE1ldGhvZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldE1ldGhvZCkgcmV0dXJuIGdldE1ldGhvZDtcblx0aGFzUmVxdWlyZWRHZXRNZXRob2QgPSAxO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblxuXHQvLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcblx0Z2V0TWV0aG9kID0gZnVuY3Rpb24gKFYsIFApIHtcblx0ICB2YXIgZnVuYyA9IFZbUF07XG5cdCAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xuXHR9O1xuXHRyZXR1cm4gZ2V0TWV0aG9kO1xufVxuXG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZTtcbnZhciBoYXNSZXF1aXJlZE9yZGluYXJ5VG9QcmltaXRpdmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPcmRpbmFyeVRvUHJpbWl0aXZlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT3JkaW5hcnlUb1ByaW1pdGl2ZSkgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmU7XG5cdGhhc1JlcXVpcmVkT3JkaW5hcnlUb1ByaW1pdGl2ZSA9IDE7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5cdG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcblx0ICB2YXIgZm4sIHZhbDtcblx0ICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcblx0ICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuXHQgIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuXHR9O1xuXHRyZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZTtcbn1cblxudmFyIHNoYXJlZDtcbnZhciBoYXNSZXF1aXJlZFNoYXJlZDtcblxuZnVuY3Rpb24gcmVxdWlyZVNoYXJlZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNoYXJlZCkgcmV0dXJuIHNoYXJlZDtcblx0aGFzUmVxdWlyZWRTaGFyZWQgPSAxO1xuXHR2YXIgc3RvcmUgPSByZXF1aXJlU2hhcmVkU3RvcmUoKTtcblxuXHRzaGFyZWQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHQgIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xuXHR9O1xuXHRyZXR1cm4gc2hhcmVkO1xufVxuXG52YXIgdWlkO1xudmFyIGhhc1JlcXVpcmVkVWlkO1xuXG5mdW5jdGlvbiByZXF1aXJlVWlkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVWlkKSByZXR1cm4gdWlkO1xuXHRoYXNSZXF1aXJlZFVpZCA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0dmFyIGlkID0gMDtcblx0dmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXHR2YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5cdHVpZCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0ICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG5cdH07XG5cdHJldHVybiB1aWQ7XG59XG5cbnZhciB3ZWxsS25vd25TeW1ib2w7XG52YXIgaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2w7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWxsS25vd25TeW1ib2wgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2wpIHJldHVybiB3ZWxsS25vd25TeW1ib2w7XG5cdGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgc2hhcmVkID0gcmVxdWlyZVNoYXJlZCgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciB1aWQgPSByZXF1aXJlVWlkKCk7XG5cdHZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZVN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uKCk7XG5cdHZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmVVc2VTeW1ib2xBc1VpZCgpO1xuXG5cdHZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcblx0dmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG5cdHZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxuXHR3ZWxsS25vd25TeW1ib2wgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcblx0ICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcblx0ICAgICAgPyBTeW1ib2xbbmFtZV1cblx0ICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG5cdCAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xuXHR9O1xuXHRyZXR1cm4gd2VsbEtub3duU3ltYm9sO1xufVxuXG52YXIgdG9QcmltaXRpdmU7XG52YXIgaGFzUmVxdWlyZWRUb1ByaW1pdGl2ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVRvUHJpbWl0aXZlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9QcmltaXRpdmUpIHJldHVybiB0b1ByaW1pdGl2ZTtcblx0aGFzUmVxdWlyZWRUb1ByaW1pdGl2ZSA9IDE7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGlzU3ltYm9sID0gcmVxdWlyZUlzU3ltYm9sKCk7XG5cdHZhciBnZXRNZXRob2QgPSByZXF1aXJlR2V0TWV0aG9kKCk7XG5cdHZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZU9yZGluYXJ5VG9QcmltaXRpdmUoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0dmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuXHQvLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5cdHRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG5cdCAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG5cdCAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcblx0ICB2YXIgcmVzdWx0O1xuXHQgIGlmIChleG90aWNUb1ByaW0pIHtcblx0ICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG5cdCAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuXHQgICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG5cdCAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcblx0ICB9XG5cdCAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuXHQgIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcblx0fTtcblx0cmV0dXJuIHRvUHJpbWl0aXZlO1xufVxuXG52YXIgdG9Qcm9wZXJ0eUtleTtcbnZhciBoYXNSZXF1aXJlZFRvUHJvcGVydHlLZXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb1Byb3BlcnR5S2V5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9Qcm9wZXJ0eUtleSkgcmV0dXJuIHRvUHJvcGVydHlLZXk7XG5cdGhhc1JlcXVpcmVkVG9Qcm9wZXJ0eUtleSA9IDE7XG5cdHZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmVUb1ByaW1pdGl2ZSgpO1xuXHR2YXIgaXNTeW1ib2wgPSByZXF1aXJlSXNTeW1ib2woKTtcblxuXHQvLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxuXHR0b1Byb3BlcnR5S2V5ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG5cdCAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcblx0fTtcblx0cmV0dXJuIHRvUHJvcGVydHlLZXk7XG59XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0eSkgcmV0dXJuIG9iamVjdERlZmluZVByb3BlcnR5O1xuXHRoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnR5ID0gMTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmVJZThEb21EZWZpbmUoKTtcblx0dmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZVY4UHJvdG90eXBlRGVmaW5lQnVnKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmVUb1Byb3BlcnR5S2V5KCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuXHR2YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblx0dmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG5cdHZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcblx0dmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuXHQvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcblx0b2JqZWN0RGVmaW5lUHJvcGVydHkuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG5cdCAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG5cdCAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuXHQgICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuXHQgICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcblx0ICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG5cdCAgICAgIEF0dHJpYnV0ZXMgPSB7XG5cdCAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcblx0ICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcblx0ICAgICAgICB3cml0YWJsZTogZmFsc2Vcblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG5cdH0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG5cdCAgYW5PYmplY3QoTyk7XG5cdCAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG5cdCAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG5cdCAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuXHQgICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG5cdCAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG5cdCAgcmV0dXJuIE87XG5cdH07XG5cdHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eTtcbn1cblxudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBoYXNSZXF1aXJlZENyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcikgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcjtcblx0aGFzUmVxdWlyZWRDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSAxO1xuXHRjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuXHQgIHJldHVybiB7XG5cdCAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuXHQgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuXHQgICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG5cdCAgICB2YWx1ZTogdmFsdWVcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yO1xufVxuXG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5O1xudmFyIGhhc1JlcXVpcmVkQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXF1aXJlQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KSByZXR1cm4gY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5O1xuXHRoYXNSZXF1aXJlZENyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmVDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKTtcblxuXHRjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcblx0ICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG5cdH0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG5cdCAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcblx0ICByZXR1cm4gb2JqZWN0O1xuXHR9O1xuXHRyZXR1cm4gY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5O1xufVxuXG52YXIgc2hhcmVkS2V5O1xudmFyIGhhc1JlcXVpcmVkU2hhcmVkS2V5O1xuXG5mdW5jdGlvbiByZXF1aXJlU2hhcmVkS2V5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2hhcmVkS2V5KSByZXR1cm4gc2hhcmVkS2V5O1xuXHRoYXNSZXF1aXJlZFNoYXJlZEtleSA9IDE7XG5cdHZhciBzaGFyZWQgPSByZXF1aXJlU2hhcmVkKCk7XG5cdHZhciB1aWQgPSByZXF1aXJlVWlkKCk7XG5cblx0dmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxuXHRzaGFyZWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xuXHR9O1xuXHRyZXR1cm4gc2hhcmVkS2V5O1xufVxuXG52YXIgaGlkZGVuS2V5cztcbnZhciBoYXNSZXF1aXJlZEhpZGRlbktleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVIaWRkZW5LZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSGlkZGVuS2V5cykgcmV0dXJuIGhpZGRlbktleXM7XG5cdGhhc1JlcXVpcmVkSGlkZGVuS2V5cyA9IDE7XG5cdGhpZGRlbktleXMgPSB7fTtcblx0cmV0dXJuIGhpZGRlbktleXM7XG59XG5cbnZhciBpbnRlcm5hbFN0YXRlO1xudmFyIGhhc1JlcXVpcmVkSW50ZXJuYWxTdGF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVybmFsU3RhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJbnRlcm5hbFN0YXRlKSByZXR1cm4gaW50ZXJuYWxTdGF0ZTtcblx0aGFzUmVxdWlyZWRJbnRlcm5hbFN0YXRlID0gMTtcblx0dmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmVXZWFrTWFwQmFzaWNEZXRlY3Rpb24oKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmVDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgc2hhcmVkID0gcmVxdWlyZVNoYXJlZFN0b3JlKCk7XG5cdHZhciBzaGFyZWRLZXkgPSByZXF1aXJlU2hhcmVkS2V5KCk7XG5cdHZhciBoaWRkZW5LZXlzID0gcmVxdWlyZUhpZGRlbktleXMoKTtcblxuXHR2YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xuXHR2YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG5cdHZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXHR2YXIgc2V0LCBnZXQsIGhhcztcblxuXHR2YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xuXHR9O1xuXG5cdHZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHZhciBzdGF0ZTtcblx0ICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcblx0ICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcblx0ICAgIH0gcmV0dXJuIHN0YXRlO1xuXHQgIH07XG5cdH07XG5cblx0aWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcblx0ICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuXHQgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cblx0ICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG5cdCAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuXHQgIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcblx0ICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cblx0ICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG5cdCAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG5cdCAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcblx0ICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuXHQgICAgcmV0dXJuIG1ldGFkYXRhO1xuXHQgIH07XG5cdCAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcblx0ICB9O1xuXHQgIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG5cdCAgfTtcblx0fSBlbHNlIHtcblx0ICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG5cdCAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuXHQgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcblx0ICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG5cdCAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcblx0ICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcblx0ICAgIHJldHVybiBtZXRhZGF0YTtcblx0ICB9O1xuXHQgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG5cdCAgfTtcblx0ICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcblx0ICB9O1xuXHR9XG5cblx0aW50ZXJuYWxTdGF0ZSA9IHtcblx0ICBzZXQ6IHNldCxcblx0ICBnZXQ6IGdldCxcblx0ICBoYXM6IGhhcyxcblx0ICBlbmZvcmNlOiBlbmZvcmNlLFxuXHQgIGdldHRlckZvcjogZ2V0dGVyRm9yXG5cdH07XG5cdHJldHVybiBpbnRlcm5hbFN0YXRlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRNYWtlQnVpbHRJbjtcblxuZnVuY3Rpb24gcmVxdWlyZU1ha2VCdWlsdEluICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWFrZUJ1aWx0SW4pIHJldHVybiBtYWtlQnVpbHRJbi5leHBvcnRzO1xuXHRoYXNSZXF1aXJlZE1ha2VCdWlsdEluID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZUZ1bmN0aW9uTmFtZSgpLkNPTkZJR1VSQUJMRTtcblx0dmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlSW5zcGVjdFNvdXJjZSgpO1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cblx0dmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xuXHR2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xuXHR2YXIgJFN0cmluZyA9IFN0cmluZztcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblx0dmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXHR2YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xuXHR2YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG5cdHZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG5cdH0pO1xuXG5cdHZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuXHR2YXIgbWFrZUJ1aWx0SW4kMSA9IG1ha2VCdWlsdEluLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcblx0ICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuXHQgICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG5cdCAgfVxuXHQgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcblx0ICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG5cdCAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG5cdCAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcblx0ICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG5cdCAgfVxuXHQgIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuXHQgICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuXHQgIH1cblx0ICB0cnkge1xuXHQgICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcblx0ICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuXHQgICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuXHQgICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuXHQgIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcblx0ICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcblx0ICB9IHJldHVybiB2YWx1ZTtcblx0fTtcblxuXHQvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcblx0RnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4kMShmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0ICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xuXHR9LCAndG9TdHJpbmcnKTtcblx0cmV0dXJuIG1ha2VCdWlsdEluLmV4cG9ydHM7XG59XG5cbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3I7XG52YXIgaGFzUmVxdWlyZWREZWZpbmVCdWlsdEluQWNjZXNzb3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREZWZpbmVCdWlsdEluQWNjZXNzb3IpIHJldHVybiBkZWZpbmVCdWlsdEluQWNjZXNzb3I7XG5cdGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gMTtcblx0dmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZU1ha2VCdWlsdEluKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpO1xuXG5cdGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcblx0ICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcblx0ICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcblx0ICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuXHR9O1xuXHRyZXR1cm4gZGVmaW5lQnVpbHRJbkFjY2Vzc29yO1xufVxuXG52YXIgcmVnZXhwRmxhZ3M7XG52YXIgaGFzUmVxdWlyZWRSZWdleHBGbGFncztcblxuZnVuY3Rpb24gcmVxdWlyZVJlZ2V4cEZsYWdzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUmVnZXhwRmxhZ3MpIHJldHVybiByZWdleHBGbGFncztcblx0aGFzUmVxdWlyZWRSZWdleHBGbGFncyA9IDE7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdC8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xuXHRyZWdleHBGbGFncyA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuXHQgIHZhciByZXN1bHQgPSAnJztcblx0ICBpZiAodGhhdC5oYXNJbmRpY2VzKSByZXN1bHQgKz0gJ2QnO1xuXHQgIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcblx0ICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuXHQgIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcblx0ICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG5cdCAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1Jztcblx0ICBpZiAodGhhdC51bmljb2RlU2V0cykgcmVzdWx0ICs9ICd2Jztcblx0ICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHJlZ2V4cEZsYWdzO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc19yZWdleHBfZmxhZ3M7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc19yZWdleHBfZmxhZ3MgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc19yZWdleHBfZmxhZ3MpIHJldHVybiBlc19yZWdleHBfZmxhZ3M7XG5cdGhhc1JlcXVpcmVkRXNfcmVnZXhwX2ZsYWdzID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblx0dmFyIHJlZ0V4cEZsYWdzID0gcmVxdWlyZVJlZ2V4cEZsYWdzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdC8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnLicsICdkJykgLT4gLy4vZCBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG5cdHZhciBSZWdFeHAgPSBnbG9iYWxUaGlzLlJlZ0V4cDtcblx0dmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cblx0dmFyIEZPUkNFRCA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgSU5ESUNFU19TVVBQT1JUID0gdHJ1ZTtcblx0ICB0cnkge1xuXHQgICAgUmVnRXhwKCcuJywgJ2QnKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgSU5ESUNFU19TVVBQT1JUID0gZmFsc2U7XG5cdCAgfVxuXG5cdCAgdmFyIE8gPSB7fTtcblx0ICAvLyBtb2Rlcm4gVjggYnVnXG5cdCAgdmFyIGNhbGxzID0gJyc7XG5cdCAgdmFyIGV4cGVjdGVkID0gSU5ESUNFU19TVVBQT1JUID8gJ2RnaW1zeScgOiAnZ2ltc3knO1xuXG5cdCAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uIChrZXksIGNocikge1xuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywga2V5LCB7IGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICBjYWxscyArPSBjaHI7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfSB9KTtcblx0ICB9O1xuXG5cdCAgdmFyIHBhaXJzID0ge1xuXHQgICAgZG90QWxsOiAncycsXG5cdCAgICBnbG9iYWw6ICdnJyxcblx0ICAgIGlnbm9yZUNhc2U6ICdpJyxcblx0ICAgIG11bHRpbGluZTogJ20nLFxuXHQgICAgc3RpY2t5OiAneSdcblx0ICB9O1xuXG5cdCAgaWYgKElORElDRVNfU1VQUE9SVCkgcGFpcnMuaGFzSW5kaWNlcyA9ICdkJztcblxuXHQgIGZvciAodmFyIGtleSBpbiBwYWlycykgYWRkR2V0dGVyKGtleSwgcGFpcnNba2V5XSk7XG5cblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdCAgdmFyIHJlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUmVnRXhwUHJvdG90eXBlLCAnZmxhZ3MnKS5nZXQuY2FsbChPKTtcblxuXHQgIHJldHVybiByZXN1bHQgIT09IGV4cGVjdGVkIHx8IGNhbGxzICE9PSBleHBlY3RlZDtcblx0fSk7XG5cblx0Ly8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5cdGlmIChGT1JDRUQpIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihSZWdFeHBQcm90b3R5cGUsICdmbGFncycsIHtcblx0ICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgZ2V0OiByZWdFeHBGbGFnc1xuXHR9KTtcblx0cmV0dXJuIGVzX3JlZ2V4cF9mbGFncztcbn1cblxucmVxdWlyZUVzX3JlZ2V4cF9mbGFncygpO1xuXG52YXIgZXNuZXh0X2FycmF5X2xhc3RJbmRleCA9IHt9O1xuXG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydGllcyA9IHt9O1xuXG52YXIgY2xhc3NvZlJhdztcbnZhciBoYXNSZXF1aXJlZENsYXNzb2ZSYXc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDbGFzc29mUmF3ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ2xhc3NvZlJhdykgcmV0dXJuIGNsYXNzb2ZSYXc7XG5cdGhhc1JlcXVpcmVkQ2xhc3NvZlJhdyA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0dmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xuXHR2YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cblx0Y2xhc3NvZlJhdyA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcblx0fTtcblx0cmV0dXJuIGNsYXNzb2ZSYXc7XG59XG5cbnZhciBpbmRleGVkT2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkSW5kZXhlZE9iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZUluZGV4ZWRPYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJbmRleGVkT2JqZWN0KSByZXR1cm4gaW5kZXhlZE9iamVjdDtcblx0aGFzUmVxdWlyZWRJbmRleGVkT2JqZWN0ID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0dmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG5cdC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5cdGluZGV4ZWRPYmplY3QgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuXHQgIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xuXHR9KSA/IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG5cdH0gOiAkT2JqZWN0O1xuXHRyZXR1cm4gaW5kZXhlZE9iamVjdDtcbn1cblxudmFyIHRvSW5kZXhlZE9iamVjdDtcbnZhciBoYXNSZXF1aXJlZFRvSW5kZXhlZE9iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvSW5kZXhlZE9iamVjdCkgcmV0dXJuIHRvSW5kZXhlZE9iamVjdDtcblx0aGFzUmVxdWlyZWRUb0luZGV4ZWRPYmplY3QgPSAxO1xuXHQvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xuXHR2YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVJbmRleGVkT2JqZWN0KCk7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblxuXHR0b0luZGV4ZWRPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG5cdH07XG5cdHJldHVybiB0b0luZGV4ZWRPYmplY3Q7XG59XG5cbnZhciBtYXRoVHJ1bmM7XG52YXIgaGFzUmVxdWlyZWRNYXRoVHJ1bmM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoVHJ1bmMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoVHJ1bmMpIHJldHVybiBtYXRoVHJ1bmM7XG5cdGhhc1JlcXVpcmVkTWF0aFRydW5jID0gMTtcblx0dmFyIGNlaWwgPSBNYXRoLmNlaWw7XG5cdHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cblx0Ly8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxuXHRtYXRoVHJ1bmMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcblx0ICB2YXIgbiA9ICt4O1xuXHQgIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xuXHR9O1xuXHRyZXR1cm4gbWF0aFRydW5jO1xufVxuXG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eTtcbnZhciBoYXNSZXF1aXJlZFRvSW50ZWdlck9ySW5maW5pdHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9JbnRlZ2VyT3JJbmZpbml0eSkgcmV0dXJuIHRvSW50ZWdlck9ySW5maW5pdHk7XG5cdGhhc1JlcXVpcmVkVG9JbnRlZ2VyT3JJbmZpbml0eSA9IDE7XG5cdHZhciB0cnVuYyA9IHJlcXVpcmVNYXRoVHJ1bmMoKTtcblxuXHQvLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxuXHR0b0ludGVnZXJPckluZmluaXR5ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcblx0fTtcblx0cmV0dXJuIHRvSW50ZWdlck9ySW5maW5pdHk7XG59XG5cbnZhciB0b0Fic29sdXRlSW5kZXg7XG52YXIgaGFzUmVxdWlyZWRUb0Fic29sdXRlSW5kZXg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb0Fic29sdXRlSW5kZXggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb0Fic29sdXRlSW5kZXgpIHJldHVybiB0b0Fic29sdXRlSW5kZXg7XG5cdGhhc1JlcXVpcmVkVG9BYnNvbHV0ZUluZGV4ID0gMTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXG5cdHZhciBtYXggPSBNYXRoLm1heDtcblx0dmFyIG1pbiA9IE1hdGgubWluO1xuXG5cdC8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuXHQvLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG5cdC8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5cdHRvQWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG5cdCAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcblx0ICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcblx0fTtcblx0cmV0dXJuIHRvQWJzb2x1dGVJbmRleDtcbn1cblxudmFyIHRvTGVuZ3RoO1xudmFyIGhhc1JlcXVpcmVkVG9MZW5ndGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb0xlbmd0aCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvTGVuZ3RoKSByZXR1cm4gdG9MZW5ndGg7XG5cdGhhc1JlcXVpcmVkVG9MZW5ndGggPSAxO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cblx0dmFyIG1pbiA9IE1hdGgubWluO1xuXG5cdC8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcblx0dG9MZW5ndGggPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG5cdCAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblx0fTtcblx0cmV0dXJuIHRvTGVuZ3RoO1xufVxuXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2U7XG52YXIgaGFzUmVxdWlyZWRMZW5ndGhPZkFycmF5TGlrZTtcblxuZnVuY3Rpb24gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTGVuZ3RoT2ZBcnJheUxpa2UpIHJldHVybiBsZW5ndGhPZkFycmF5TGlrZTtcblx0aGFzUmVxdWlyZWRMZW5ndGhPZkFycmF5TGlrZSA9IDE7XG5cdHZhciB0b0xlbmd0aCA9IHJlcXVpcmVUb0xlbmd0aCgpO1xuXG5cdC8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcblx0bGVuZ3RoT2ZBcnJheUxpa2UgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xuXHR9O1xuXHRyZXR1cm4gbGVuZ3RoT2ZBcnJheUxpa2U7XG59XG5cbnZhciBhcnJheUluY2x1ZGVzO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlJbmNsdWRlcztcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5SW5jbHVkZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheUluY2x1ZGVzKSByZXR1cm4gYXJyYXlJbmNsdWRlcztcblx0aGFzUmVxdWlyZWRBcnJheUluY2x1ZGVzID0gMTtcblx0dmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVUb0luZGV4ZWRPYmplY3QoKTtcblx0dmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmVUb0Fic29sdXRlSW5kZXgoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cblx0Ly8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cblx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcblx0ICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcblx0ICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcblx0ICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG5cdCAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuXHQgICAgdmFyIHZhbHVlO1xuXHQgICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuXHQgICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG5cdCAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuXHQgICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuXHQgICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG5cdCAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcblx0ICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcblx0ICB9O1xuXHR9O1xuXG5cdGFycmF5SW5jbHVkZXMgPSB7XG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcblx0ICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuXHQgIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcblx0fTtcblx0cmV0dXJuIGFycmF5SW5jbHVkZXM7XG59XG5cbnZhciBvYmplY3RLZXlzSW50ZXJuYWw7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RLZXlzSW50ZXJuYWw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RLZXlzSW50ZXJuYWwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RLZXlzSW50ZXJuYWwpIHJldHVybiBvYmplY3RLZXlzSW50ZXJuYWw7XG5cdGhhc1JlcXVpcmVkT2JqZWN0S2V5c0ludGVybmFsID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgaW5kZXhPZiA9IHJlcXVpcmVBcnJheUluY2x1ZGVzKCkuaW5kZXhPZjtcblx0dmFyIGhpZGRlbktleXMgPSByZXF1aXJlSGlkZGVuS2V5cygpO1xuXG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0b2JqZWN0S2V5c0ludGVybmFsID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcblx0ICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuXHQgIHZhciBpID0gMDtcblx0ICB2YXIgcmVzdWx0ID0gW107XG5cdCAgdmFyIGtleTtcblx0ICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG5cdCAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuXHQgIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG5cdCAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBvYmplY3RLZXlzSW50ZXJuYWw7XG59XG5cbnZhciBlbnVtQnVnS2V5cztcbnZhciBoYXNSZXF1aXJlZEVudW1CdWdLZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlRW51bUJ1Z0tleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnVtQnVnS2V5cykgcmV0dXJuIGVudW1CdWdLZXlzO1xuXHRoYXNSZXF1aXJlZEVudW1CdWdLZXlzID0gMTtcblx0Ly8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5cdGVudW1CdWdLZXlzID0gW1xuXHQgICdjb25zdHJ1Y3RvcicsXG5cdCAgJ2hhc093blByb3BlcnR5Jyxcblx0ICAnaXNQcm90b3R5cGVPZicsXG5cdCAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0ICAndG9Mb2NhbGVTdHJpbmcnLFxuXHQgICd0b1N0cmluZycsXG5cdCAgJ3ZhbHVlT2YnXG5cdF07XG5cdHJldHVybiBlbnVtQnVnS2V5cztcbn1cblxudmFyIG9iamVjdEtleXM7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RLZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0S2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEtleXMpIHJldHVybiBvYmplY3RLZXlzO1xuXHRoYXNSZXF1aXJlZE9iamVjdEtleXMgPSAxO1xuXHR2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZU9iamVjdEtleXNJbnRlcm5hbCgpO1xuXHR2YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlRW51bUJ1Z0tleXMoKTtcblxuXHQvLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5cdG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcblx0ICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcblx0fTtcblx0cmV0dXJuIG9iamVjdEtleXM7XG59XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0aWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydGllcykgcmV0dXJuIG9iamVjdERlZmluZVByb3BlcnRpZXM7XG5cdGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydGllcyA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlVjhQcm90b3R5cGVEZWZpbmVCdWcoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmVPYmplY3RLZXlzKCk7XG5cblx0Ly8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuXHRvYmplY3REZWZpbmVQcm9wZXJ0aWVzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcblx0ICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG5cdCAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXHQgIHZhciBpbmRleCA9IDA7XG5cdCAgdmFyIGtleTtcblx0ICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG5cdCAgcmV0dXJuIE87XG5cdH07XG5cdHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0aWVzO1xufVxuXG52YXIgaHRtbDtcbnZhciBoYXNSZXF1aXJlZEh0bWw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVIdG1sICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSHRtbCkgcmV0dXJuIGh0bWw7XG5cdGhhc1JlcXVpcmVkSHRtbCA9IDE7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblxuXHRodG1sID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG5cdHJldHVybiBodG1sO1xufVxuXG52YXIgb2JqZWN0Q3JlYXRlO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0Q3JlYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0Q3JlYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0Q3JlYXRlKSByZXR1cm4gb2JqZWN0Q3JlYXRlO1xuXHRoYXNSZXF1aXJlZE9iamVjdENyZWF0ZSA9IDE7XG5cdC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0aWVzKCk7XG5cdHZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmVFbnVtQnVnS2V5cygpO1xuXHR2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmVIaWRkZW5LZXlzKCk7XG5cdHZhciBodG1sID0gcmVxdWlyZUh0bWwoKTtcblx0dmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmVEb2N1bWVudENyZWF0ZUVsZW1lbnQoKTtcblx0dmFyIHNoYXJlZEtleSA9IHJlcXVpcmVTaGFyZWRLZXkoKTtcblxuXHR2YXIgR1QgPSAnPic7XG5cdHZhciBMVCA9ICc8Jztcblx0dmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXHR2YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG5cdHZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxuXHR2YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXHR2YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcblx0ICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xuXHR9O1xuXG5cdC8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG5cdHZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuXHQgIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcblx0ICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcblx0ICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcblx0ICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuXHQgIHJldHVybiB0ZW1wO1xuXHR9O1xuXG5cdC8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcblx0dmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuXHQgIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXHQgIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6Jztcblx0ICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG5cdCAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcblx0ICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcblx0ICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHQgIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcblx0ICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuXHQgIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG5cdCAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG5cdH07XG5cblx0Ly8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuXHQvLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG5cdC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuXHQvLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuXHQvLyBhdm9pZCBJRSBHQyBidWdcblx0dmFyIGFjdGl2ZVhEb2N1bWVudDtcblx0dmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICB0cnkge1xuXHQgICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cblx0ICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcblx0ICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuXHQgICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcblx0ICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuXHQgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuXHQgIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG5cdCAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG5cdCAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xuXHR9O1xuXG5cdGhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuXHQvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5cdG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcblx0ICB2YXIgcmVzdWx0O1xuXHQgIGlmIChPICE9PSBudWxsKSB7XG5cdCAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcblx0ICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG5cdCAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuXHQgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuXHQgICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG5cdCAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuXHQgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcblx0fTtcblx0cmV0dXJuIG9iamVjdENyZWF0ZTtcbn1cblxudmFyIGFkZFRvVW5zY29wYWJsZXM7XG52YXIgaGFzUmVxdWlyZWRBZGRUb1Vuc2NvcGFibGVzO1xuXG5mdW5jdGlvbiByZXF1aXJlQWRkVG9VbnNjb3BhYmxlcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFkZFRvVW5zY29wYWJsZXMpIHJldHVybiBhZGRUb1Vuc2NvcGFibGVzO1xuXHRoYXNSZXF1aXJlZEFkZFRvVW5zY29wYWJsZXMgPSAxO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKS5mO1xuXG5cdHZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcblx0dmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5cdC8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5cdGlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT09IHVuZGVmaW5lZCkge1xuXHQgIGRlZmluZVByb3BlcnR5KEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuXHQgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuXHQgIH0pO1xuXHR9XG5cblx0Ly8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuXHRhZGRUb1Vuc2NvcGFibGVzID0gZnVuY3Rpb24gKGtleSkge1xuXHQgIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcblx0fTtcblx0cmV0dXJuIGFkZFRvVW5zY29wYWJsZXM7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SW5kZXg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfYXJyYXlfbGFzdEluZGV4ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJbmRleCkgcmV0dXJuIGVzbmV4dF9hcnJheV9sYXN0SW5kZXg7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJbmRleCA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmVBZGRUb1Vuc2NvcGFibGVzKCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblxuXHQvLyBgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleGAgZ2V0dGVyXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rZWl0aGFtdXMvcHJvcG9zYWwtYXJyYXktbGFzdFxuXHRpZiAoREVTQ1JJUFRPUlMpIHtcblx0ICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoQXJyYXkucHJvdG90eXBlLCAnbGFzdEluZGV4Jywge1xuXHQgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgZ2V0OiBmdW5jdGlvbiBsYXN0SW5kZXgoKSB7XG5cdCAgICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG5cdCAgICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcblx0ICAgICAgcmV0dXJuIGxlbiA9PT0gMCA/IDAgOiBsZW4gLSAxO1xuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgYWRkVG9VbnNjb3BhYmxlcygnbGFzdEluZGV4Jyk7XG5cdH1cblx0cmV0dXJuIGVzbmV4dF9hcnJheV9sYXN0SW5kZXg7XG59XG5cbnJlcXVpcmVFc25leHRfYXJyYXlfbGFzdEluZGV4KCk7XG5cbnZhciBlc25leHRfYXJyYXlfbGFzdEl0ZW0gPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJdGVtO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X2FycmF5X2xhc3RJdGVtICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X2FycmF5X2xhc3RJdGVtKSByZXR1cm4gZXNuZXh0X2FycmF5X2xhc3RJdGVtO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SXRlbSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmVBZGRUb1Vuc2NvcGFibGVzKCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblxuXHQvLyBgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleGAgYWNjZXNzb3Jcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2tlaXRoYW11cy9wcm9wb3NhbC1hcnJheS1sYXN0XG5cdGlmIChERVNDUklQVE9SUykge1xuXHQgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihBcnJheS5wcm90b3R5cGUsICdsYXN0SXRlbScsIHtcblx0ICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgIGdldDogZnVuY3Rpb24gbGFzdEl0ZW0oKSB7XG5cdCAgICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG5cdCAgICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcblx0ICAgICAgcmV0dXJuIGxlbiA9PT0gMCA/IHVuZGVmaW5lZCA6IE9bbGVuIC0gMV07XG5cdCAgICB9LFxuXHQgICAgc2V0OiBmdW5jdGlvbiBsYXN0SXRlbSh2YWx1ZSkge1xuXHQgICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuXHQgICAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG5cdCAgICAgIHJldHVybiBPW2xlbiA9PT0gMCA/IDAgOiBsZW4gLSAxXSA9IHZhbHVlO1xuXHQgICAgfVxuXHQgIH0pO1xuXG5cdCAgYWRkVG9VbnNjb3BhYmxlcygnbGFzdEl0ZW0nKTtcblx0fVxuXHRyZXR1cm4gZXNuZXh0X2FycmF5X2xhc3RJdGVtO1xufVxuXG5yZXF1aXJlRXNuZXh0X2FycmF5X2xhc3RJdGVtKCk7XG5cbnZhciBlc25leHRfY29tcG9zaXRlS2V5ID0ge307XG5cbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSB7fTtcblxudmFyIG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSkgcmV0dXJuIG9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHRoYXNSZXF1aXJlZE9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlID0gMTtcblx0dmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5cdC8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xuXHR2YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuXHQvLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuXHRvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZS5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG5cdCAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG5cdCAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG5cdH0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHJldHVybiBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSByZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXHRoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZU9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlKCk7XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCk7XG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlVG9JbmRleGVkT2JqZWN0KCk7XG5cdHZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZVRvUHJvcGVydHlLZXkoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlSWU4RG9tRGVmaW5lKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHR2YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cblx0Ly8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3Jcblx0b2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuXHQgIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG5cdCAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG5cdCAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuXHQgICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xufVxuXG52YXIgZGVmaW5lQnVpbHRJbjtcbnZhciBoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW47XG5cbmZ1bmN0aW9uIHJlcXVpcmVEZWZpbmVCdWlsdEluICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbikgcmV0dXJuIGRlZmluZUJ1aWx0SW47XG5cdGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbiA9IDE7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCk7XG5cdHZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmVNYWtlQnVpbHRJbigpO1xuXHR2YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlRGVmaW5lR2xvYmFsUHJvcGVydHkoKTtcblxuXHRkZWZpbmVCdWlsdEluID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcblx0ICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblx0ICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuXHQgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG5cdCAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG5cdCAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG5cdCAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcblx0ICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG5cdCAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcblx0ICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuXHQgICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuXHQgICAgICB2YWx1ZTogdmFsdWUsXG5cdCAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuXHQgICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcblx0ICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG5cdCAgICB9KTtcblx0ICB9IHJldHVybiBPO1xuXHR9O1xuXHRyZXR1cm4gZGVmaW5lQnVpbHRJbjtcbn1cblxudmFyIG9iamVjdEdldE93blByb3BlcnR5TmFtZXMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcztcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKSByZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcztcblx0aGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzID0gMTtcblx0dmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmVPYmplY3RLZXlzSW50ZXJuYWwoKTtcblx0dmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZUVudW1CdWdLZXlzKCk7XG5cblx0dmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuXHQvLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5cdG9iamVjdEdldE93blByb3BlcnR5TmFtZXMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuXHQgIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG5cdH07XG5cdHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzO1xufVxuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5U3ltYm9scztcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5U3ltYm9scykgcmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scztcblx0aGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSAxO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5cdG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblx0cmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scztcbn1cblxudmFyIG93bktleXM7XG52YXIgaGFzUmVxdWlyZWRPd25LZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlT3duS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE93bktleXMpIHJldHVybiBvd25LZXlzO1xuXHRoYXNSZXF1aXJlZE93bktleXMgPSAxO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXMoKTtcblx0dmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cblx0Ly8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xuXHRvd25LZXlzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuXHQgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG5cdCAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuXHQgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xuXHR9O1xuXHRyZXR1cm4gb3duS2V5cztcbn1cblxudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXM7XG52YXIgaGFzUmVxdWlyZWRDb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29weUNvbnN0cnVjdG9yUHJvcGVydGllcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMpIHJldHVybiBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzO1xuXHRoYXNSZXF1aXJlZENvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSAxO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBvd25LZXlzID0gcmVxdWlyZU93bktleXMoKTtcblx0dmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCk7XG5cblx0Y29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuXHQgIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuXHQgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cdCAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHQgICAgdmFyIGtleSA9IGtleXNbaV07XG5cdCAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuXHQgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gY29weUNvbnN0cnVjdG9yUHJvcGVydGllcztcbn1cblxudmFyIGlzRm9yY2VkXzE7XG52YXIgaGFzUmVxdWlyZWRJc0ZvcmNlZDtcblxuZnVuY3Rpb24gcmVxdWlyZUlzRm9yY2VkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNGb3JjZWQpIHJldHVybiBpc0ZvcmNlZF8xO1xuXHRoYXNSZXF1aXJlZElzRm9yY2VkID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblxuXHR2YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG5cdHZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcblx0ICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG5cdCAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcblx0ICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG5cdCAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcblx0ICAgIDogISFkZXRlY3Rpb247XG5cdH07XG5cblx0dmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0ICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xuXHR9O1xuXG5cdHZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xuXHR2YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xuXHR2YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxuXHRpc0ZvcmNlZF8xID0gaXNGb3JjZWQ7XG5cdHJldHVybiBpc0ZvcmNlZF8xO1xufVxuXG52YXIgX2V4cG9ydDtcbnZhciBoYXNSZXF1aXJlZF9leHBvcnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVfZXhwb3J0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkX2V4cG9ydCkgcmV0dXJuIF9leHBvcnQ7XG5cdGhhc1JlcXVpcmVkX2V4cG9ydCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoKS5mO1xuXHR2YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZUNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cdHZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmVEZWZpbmVHbG9iYWxQcm9wZXJ0eSgpO1xuXHR2YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmVDb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKCk7XG5cdHZhciBpc0ZvcmNlZCA9IHJlcXVpcmVJc0ZvcmNlZCgpO1xuXG5cdC8qXG5cdCAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3Rcblx0ICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG5cdCAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcblx0ICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuXHQgIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuXHQgIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG5cdCAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG5cdCAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuXHQgIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcblx0ICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuXHQgIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuXHQgIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG5cdCAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuXHQqL1xuXHRfZXhwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuXHQgIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcblx0ICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG5cdCAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcblx0ICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuXHQgIGlmIChHTE9CQUwpIHtcblx0ICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG5cdCAgfSBlbHNlIGlmIChTVEFUSUMpIHtcblx0ICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG5cdCAgfVxuXHQgIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuXHQgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcblx0ICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG5cdCAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXHQgICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcblx0ICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuXHQgICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcblx0ICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcblx0ICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuXHQgICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG5cdCAgICB9XG5cdCAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG5cdCAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuXHQgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gX2V4cG9ydDtcbn1cblxudmFyIGZ1bmN0aW9uQXBwbHk7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvbkFwcGx5O1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25BcHBseSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uQXBwbHkpIHJldHVybiBmdW5jdGlvbkFwcGx5O1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uQXBwbHkgPSAxO1xuXHR2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlRnVuY3Rpb25CaW5kTmF0aXZlKCk7XG5cblx0dmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXHR2YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcblx0dmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCwgZXMvbm8tcmVmbGVjdCAtLSBzYWZlXG5cdGZ1bmN0aW9uQXBwbHkgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIGNhbGwuYXBwbHkoYXBwbHksIGFyZ3VtZW50cyk7XG5cdH0pO1xuXHRyZXR1cm4gZnVuY3Rpb25BcHBseTtcbn1cblxudmFyIGVzX21hcCA9IHt9O1xuXG52YXIgZXNfbWFwX2NvbnN0cnVjdG9yID0ge307XG5cbnZhciBpbnRlcm5hbE1ldGFkYXRhID0ge2V4cG9ydHM6IHt9fTtcblxudmFyIG9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IHt9O1xuXG52YXIgYXJyYXlTbGljZTtcbnZhciBoYXNSZXF1aXJlZEFycmF5U2xpY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheVNsaWNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlTbGljZSkgcmV0dXJuIGFycmF5U2xpY2U7XG5cdGhhc1JlcXVpcmVkQXJyYXlTbGljZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0YXJyYXlTbGljZSA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcblx0cmV0dXJuIGFycmF5U2xpY2U7XG59XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbDtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCkgcmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbDtcblx0aGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSAxO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlICovXG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblx0dmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVUb0luZGV4ZWRPYmplY3QoKTtcblx0dmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXMoKS5mO1xuXHR2YXIgYXJyYXlTbGljZSA9IHJlcXVpcmVBcnJheVNsaWNlKCk7XG5cblx0dmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcblx0ICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxuXHR2YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuIGFycmF5U2xpY2Uod2luZG93TmFtZXMpO1xuXHQgIH1cblx0fTtcblxuXHQvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5cdG9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuXHQgIHJldHVybiB3aW5kb3dOYW1lcyAmJiBjbGFzc29mKGl0KSA9PT0gJ1dpbmRvdydcblx0ICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG5cdCAgICA6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsO1xufVxuXG52YXIgYXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlKSByZXR1cm4gYXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlO1xuXHRoYXNSZXF1aXJlZEFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZSA9IDE7XG5cdC8vIEZGMjYtIGJ1ZzogQXJyYXlCdWZmZXJzIGFyZSBub24tZXh0ZW5zaWJsZSwgYnV0IE9iamVjdC5pc0V4dGVuc2libGUgZG9lcyBub3QgcmVwb3J0IGl0XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdGFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICBpZiAodHlwZW9mIEFycmF5QnVmZmVyID09ICdmdW5jdGlvbicpIHtcblx0ICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoOCk7XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSwgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcblx0ICAgIGlmIChPYmplY3QuaXNFeHRlbnNpYmxlKGJ1ZmZlcikpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShidWZmZXIsICdhJywgeyB2YWx1ZTogOCB9KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gYXJyYXlCdWZmZXJOb25FeHRlbnNpYmxlO1xufVxuXG52YXIgb2JqZWN0SXNFeHRlbnNpYmxlO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0SXNFeHRlbnNpYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0SXNFeHRlbnNpYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0SXNFeHRlbnNpYmxlKSByZXR1cm4gb2JqZWN0SXNFeHRlbnNpYmxlO1xuXHRoYXNSZXF1aXJlZE9iamVjdElzRXh0ZW5zaWJsZSA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXHR2YXIgQVJSQVlfQlVGRkVSX05PTl9FWFRFTlNJQkxFID0gcmVxdWlyZUFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZSgpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlIC0tIHNhZmVcblx0dmFyICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXHR2YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgfSk7XG5cblx0Ly8gYE9iamVjdC5pc0V4dGVuc2libGVgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5pc2V4dGVuc2libGVcblx0b2JqZWN0SXNFeHRlbnNpYmxlID0gKEZBSUxTX09OX1BSSU1JVElWRVMgfHwgQVJSQVlfQlVGRkVSX05PTl9FWFRFTlNJQkxFKSA/IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCkge1xuXHQgIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gZmFsc2U7XG5cdCAgaWYgKEFSUkFZX0JVRkZFUl9OT05fRVhURU5TSUJMRSAmJiBjbGFzc29mKGl0KSA9PT0gJ0FycmF5QnVmZmVyJykgcmV0dXJuIGZhbHNlO1xuXHQgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlO1xuXHR9IDogJGlzRXh0ZW5zaWJsZTtcblx0cmV0dXJuIG9iamVjdElzRXh0ZW5zaWJsZTtcbn1cblxudmFyIGZyZWV6aW5nO1xudmFyIGhhc1JlcXVpcmVkRnJlZXppbmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGcmVlemluZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZyZWV6aW5nKSByZXR1cm4gZnJlZXppbmc7XG5cdGhhc1JlcXVpcmVkRnJlZXppbmcgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHRmcmVlemluZyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2V4dGVuc2libGUsIGVzL25vLW9iamVjdC1wcmV2ZW50ZXh0ZW5zaW9ucyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xuXHR9KTtcblx0cmV0dXJuIGZyZWV6aW5nO1xufVxuXG52YXIgaGFzUmVxdWlyZWRJbnRlcm5hbE1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlSW50ZXJuYWxNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEludGVybmFsTWV0YWRhdGEpIHJldHVybiBpbnRlcm5hbE1ldGFkYXRhLmV4cG9ydHM7XG5cdGhhc1JlcXVpcmVkSW50ZXJuYWxNZXRhZGF0YSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGhpZGRlbktleXMgPSByZXF1aXJlSGlkZGVuS2V5cygpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKS5mO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKCk7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWxNb2R1bGUgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsKCk7XG5cdHZhciBpc0V4dGVuc2libGUgPSByZXF1aXJlT2JqZWN0SXNFeHRlbnNpYmxlKCk7XG5cdHZhciB1aWQgPSByZXF1aXJlVWlkKCk7XG5cdHZhciBGUkVFWklORyA9IHJlcXVpcmVGcmVlemluZygpO1xuXG5cdHZhciBSRVFVSVJFRCA9IGZhbHNlO1xuXHR2YXIgTUVUQURBVEEgPSB1aWQoJ21ldGEnKTtcblx0dmFyIGlkID0gMDtcblxuXHR2YXIgc2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBkZWZpbmVQcm9wZXJ0eShpdCwgTUVUQURBVEEsIHsgdmFsdWU6IHtcblx0ICAgIG9iamVjdElEOiAnTycgKyBpZCsrLCAvLyBvYmplY3QgSURcblx0ICAgIHdlYWtEYXRhOiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuXHQgIH0gfSk7XG5cdH07XG5cblx0dmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuXHQgIC8vIHJldHVybiBhIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuXHQgIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuXHQgIGlmICghaGFzT3duKGl0LCBNRVRBREFUQSkpIHtcblx0ICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG5cdCAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG5cdCAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuXHQgICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG5cdCAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuXHQgICAgc2V0TWV0YWRhdGEoaXQpO1xuXHQgIC8vIHJldHVybiBvYmplY3QgSURcblx0ICB9IHJldHVybiBpdFtNRVRBREFUQV0ub2JqZWN0SUQ7XG5cdH07XG5cblx0dmFyIGdldFdlYWtEYXRhID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcblx0ICBpZiAoIWhhc093bihpdCwgTUVUQURBVEEpKSB7XG5cdCAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuXHQgICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcblx0ICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG5cdCAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcblx0ICAgIHNldE1ldGFkYXRhKGl0KTtcblx0ICAvLyByZXR1cm4gdGhlIHN0b3JlIG9mIHdlYWsgY29sbGVjdGlvbnMgSURzXG5cdCAgfSByZXR1cm4gaXRbTUVUQURBVEFdLndlYWtEYXRhO1xuXHR9O1xuXG5cdC8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xuXHR2YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBpZiAoRlJFRVpJTkcgJiYgUkVRVUlSRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzT3duKGl0LCBNRVRBREFUQSkpIHNldE1ldGFkYXRhKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cblx0dmFyIGVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcblx0ICBtZXRhLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblx0ICBSRVFVSVJFRCA9IHRydWU7XG5cdCAgdmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmY7XG5cdCAgdmFyIHNwbGljZSA9IHVuY3VycnlUaGlzKFtdLnNwbGljZSk7XG5cdCAgdmFyIHRlc3QgPSB7fTtcblx0ICB0ZXN0W01FVEFEQVRBXSA9IDE7XG5cblx0ICAvLyBwcmV2ZW50IGV4cG9zaW5nIG9mIG1ldGFkYXRhIGtleVxuXHQgIGlmIChnZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QpLmxlbmd0aCkge1xuXHQgICAgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICAgIHZhciByZXN1bHQgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcblx0ICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGlmIChyZXN1bHRbaV0gPT09IE1FVEFEQVRBKSB7XG5cdCAgICAgICAgICBzcGxpY2UocmVzdWx0LCBpLCAxKTtcblx0ICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblxuXHQgICAgJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgICAgIGdldE93blByb3BlcnR5TmFtZXM6IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbE1vZHVsZS5mXG5cdCAgICB9KTtcblx0ICB9XG5cdH07XG5cblx0dmFyIG1ldGEgPSBpbnRlcm5hbE1ldGFkYXRhLmV4cG9ydHMgPSB7XG5cdCAgZW5hYmxlOiBlbmFibGUsXG5cdCAgZmFzdEtleTogZmFzdEtleSxcblx0ICBnZXRXZWFrRGF0YTogZ2V0V2Vha0RhdGEsXG5cdCAgb25GcmVlemU6IG9uRnJlZXplXG5cdH07XG5cblx0aGlkZGVuS2V5c1tNRVRBREFUQV0gPSB0cnVlO1xuXHRyZXR1cm4gaW50ZXJuYWxNZXRhZGF0YS5leHBvcnRzO1xufVxuXG52YXIgZnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZTtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZSkgcmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2U7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZSA9IDE7XG5cdHZhciBjbGFzc29mUmF3ID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHRmdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlID0gZnVuY3Rpb24gKGZuKSB7XG5cdCAgLy8gTmFzaG9ybiBidWc6XG5cdCAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuXHQgIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcblx0ICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG5cdH07XG5cdHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlO1xufVxuXG52YXIgZnVuY3Rpb25CaW5kQ29udGV4dDtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZENvbnRleHQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kQ29udGV4dCkgcmV0dXJuIGZ1bmN0aW9uQmluZENvbnRleHQ7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25CaW5kQ29udGV4dCA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBOQVRJVkVfQklORCA9IHJlcXVpcmVGdW5jdGlvbkJpbmROYXRpdmUoKTtcblxuXHR2YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG5cdC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXHRmdW5jdGlvbkJpbmRDb250ZXh0ID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG5cdCAgYUNhbGxhYmxlKGZuKTtcblx0ICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cdHJldHVybiBmdW5jdGlvbkJpbmRDb250ZXh0O1xufVxuXG52YXIgaXRlcmF0b3JzO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0b3JzO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0b3JzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0b3JzKSByZXR1cm4gaXRlcmF0b3JzO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdG9ycyA9IDE7XG5cdGl0ZXJhdG9ycyA9IHt9O1xuXHRyZXR1cm4gaXRlcmF0b3JzO1xufVxuXG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kO1xudmFyIGhhc1JlcXVpcmVkSXNBcnJheUl0ZXJhdG9yTWV0aG9kO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNBcnJheUl0ZXJhdG9yTWV0aG9kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNBcnJheUl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXNBcnJheUl0ZXJhdG9yTWV0aG9kO1xuXHRoYXNSZXF1aXJlZElzQXJyYXlJdGVyYXRvck1ldGhvZCA9IDE7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBJdGVyYXRvcnMgPSByZXF1aXJlSXRlcmF0b3JzKCk7XG5cblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXHR2YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cblx0Ly8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxuXHRpc0FycmF5SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcblx0fTtcblx0cmV0dXJuIGlzQXJyYXlJdGVyYXRvck1ldGhvZDtcbn1cblxudmFyIHRvU3RyaW5nVGFnU3VwcG9ydDtcbnZhciBoYXNSZXF1aXJlZFRvU3RyaW5nVGFnU3VwcG9ydDtcblxuZnVuY3Rpb24gcmVxdWlyZVRvU3RyaW5nVGFnU3VwcG9ydCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvU3RyaW5nVGFnU3VwcG9ydCkgcmV0dXJuIHRvU3RyaW5nVGFnU3VwcG9ydDtcblx0aGFzUmVxdWlyZWRUb1N0cmluZ1RhZ1N1cHBvcnQgPSAxO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXHR2YXIgdGVzdCA9IHt9O1xuXG5cdHRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cblx0dG9TdHJpbmdUYWdTdXBwb3J0ID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG5cdHJldHVybiB0b1N0cmluZ1RhZ1N1cHBvcnQ7XG59XG5cbnZhciBjbGFzc29mO1xudmFyIGhhc1JlcXVpcmVkQ2xhc3NvZjtcblxuZnVuY3Rpb24gcmVxdWlyZUNsYXNzb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDbGFzc29mKSByZXR1cm4gY2xhc3NvZjtcblx0aGFzUmVxdWlyZWRDbGFzc29mID0gMTtcblx0dmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmVUb1N0cmluZ1RhZ1N1cHBvcnQoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5cdC8vIEVTMyB3cm9uZyBoZXJlXG5cdHZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuXHQvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuXHR2YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIGl0W2tleV07XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHR9O1xuXG5cdC8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcblx0Y2xhc3NvZiA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcblx0ICB2YXIgTywgdGFnLCByZXN1bHQ7XG5cdCAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG5cdCAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2Vcblx0ICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcblx0ICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuXHQgICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcblx0ICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcblx0ICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gY2xhc3NvZjtcbn1cblxudmFyIGdldEl0ZXJhdG9yTWV0aG9kO1xudmFyIGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JNZXRob2Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRJdGVyYXRvck1ldGhvZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldEl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gZ2V0SXRlcmF0b3JNZXRob2Q7XG5cdGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JNZXRob2QgPSAxO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mKCk7XG5cdHZhciBnZXRNZXRob2QgPSByZXF1aXJlR2V0TWV0aG9kKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgSXRlcmF0b3JzID0gcmVxdWlyZUl0ZXJhdG9ycygpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxuXHRnZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXQpKSByZXR1cm4gZ2V0TWV0aG9kKGl0LCBJVEVSQVRPUilcblx0ICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuXHQgICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcblx0fTtcblx0cmV0dXJuIGdldEl0ZXJhdG9yTWV0aG9kO1xufVxuXG52YXIgZ2V0SXRlcmF0b3I7XG52YXIgaGFzUmVxdWlyZWRHZXRJdGVyYXRvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUdldEl0ZXJhdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0SXRlcmF0b3IpIHJldHVybiBnZXRJdGVyYXRvcjtcblx0aGFzUmVxdWlyZWRHZXRJdGVyYXRvciA9IDE7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZVRyeVRvU3RyaW5nKCk7XG5cdHZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmVHZXRJdGVyYXRvck1ldGhvZCgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdGdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGFyZ3VtZW50LCB1c2luZ0l0ZXJhdG9yKSB7XG5cdCAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuXHQgIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuXHR9O1xuXHRyZXR1cm4gZ2V0SXRlcmF0b3I7XG59XG5cbnZhciBpdGVyYXRvckNsb3NlO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0b3JDbG9zZTtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdG9yQ2xvc2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRvckNsb3NlKSByZXR1cm4gaXRlcmF0b3JDbG9zZTtcblx0aGFzUmVxdWlyZWRJdGVyYXRvckNsb3NlID0gMTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgZ2V0TWV0aG9kID0gcmVxdWlyZUdldE1ldGhvZCgpO1xuXG5cdGl0ZXJhdG9yQ2xvc2UgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG5cdCAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuXHQgIGFuT2JqZWN0KGl0ZXJhdG9yKTtcblx0ICB0cnkge1xuXHQgICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcblx0ICAgIGlmICghaW5uZXJSZXN1bHQpIHtcblx0ICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9XG5cdCAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgaW5uZXJFcnJvciA9IHRydWU7XG5cdCAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuXHQgIH1cblx0ICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG5cdCAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuXHQgIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcblx0ICByZXR1cm4gdmFsdWU7XG5cdH07XG5cdHJldHVybiBpdGVyYXRvckNsb3NlO1xufVxuXG52YXIgaXRlcmF0ZTtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0ZSkgcmV0dXJuIGl0ZXJhdGU7XG5cdGhhc1JlcXVpcmVkSXRlcmF0ZSA9IDE7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlVHJ5VG9TdHJpbmcoKTtcblx0dmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmVJc0FycmF5SXRlcmF0b3JNZXRob2QoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cdHZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdElzUHJvdG90eXBlT2YoKTtcblx0dmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZUdldEl0ZXJhdG9yKCk7XG5cdHZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmVHZXRJdGVyYXRvck1ldGhvZCgpO1xuXHR2YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmVJdGVyYXRvckNsb3NlKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0dmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcblx0ICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuXHQgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuXHR9O1xuXG5cdHZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5cdGl0ZXJhdGUgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuXHQgIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG5cdCAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG5cdCAgdmFyIElTX1JFQ09SRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19SRUNPUkQpO1xuXHQgIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG5cdCAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcblx0ICB2YXIgZm4gPSBiaW5kKHVuYm91bmRGdW5jdGlvbiwgdGhhdCk7XG5cdCAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuXHQgIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuXHQgICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgY29uZGl0aW9uKTtcblx0ICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG5cdCAgfTtcblxuXHQgIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIGlmIChBU19FTlRSSUVTKSB7XG5cdCAgICAgIGFuT2JqZWN0KHZhbHVlKTtcblx0ICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG5cdCAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcblx0ICB9O1xuXG5cdCAgaWYgKElTX1JFQ09SRCkge1xuXHQgICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcblx0ICB9IGVsc2UgaWYgKElTX0lURVJBVE9SKSB7XG5cdCAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG5cdCAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcblx0ICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG5cdCAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcblx0ICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcblx0ICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcblx0ICAgICAgICBpZiAocmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuXHQgICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcblx0ICAgIH1cblx0ICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG5cdCAgfVxuXG5cdCAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuXHQgIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuXHQgICAgfVxuXHQgICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuXHQgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuXHR9O1xuXHRyZXR1cm4gaXRlcmF0ZTtcbn1cblxudmFyIGFuSW5zdGFuY2U7XG52YXIgaGFzUmVxdWlyZWRBbkluc3RhbmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlQW5JbnN0YW5jZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFuSW5zdGFuY2UpIHJldHVybiBhbkluc3RhbmNlO1xuXHRoYXNSZXF1aXJlZEFuSW5zdGFuY2UgPSAxO1xuXHR2YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RJc1Byb3RvdHlwZU9mKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0YW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpdCwgUHJvdG90eXBlKSB7XG5cdCAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcblx0fTtcblx0cmV0dXJuIGFuSW5zdGFuY2U7XG59XG5cbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb247XG52YXIgaGFzUmVxdWlyZWRDaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVDaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24pIHJldHVybiBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb247XG5cdGhhc1JlcXVpcmVkQ2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gMTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cdHZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuXHR0cnkge1xuXHQgIHZhciBjYWxsZWQgPSAwO1xuXHQgIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG5cdCAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcblx0ICAgIH0sXG5cdCAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuXHQgICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH07XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5cdGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcblx0ICB0cnkge1xuXHQgICAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiBmYWxzZTsgfSAvLyB3b3JrYXJvdW5kIG9mIG9sZCBXZWJLaXQgKyBgZXZhbGAgYnVnXG5cdCAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG5cdCAgdHJ5IHtcblx0ICAgIHZhciBvYmplY3QgPSB7fTtcblx0ICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG5cdCAgICAgICAgfVxuXHQgICAgICB9O1xuXHQgICAgfTtcblx0ICAgIGV4ZWMob2JqZWN0KTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xuXHR9O1xuXHRyZXR1cm4gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uO1xufVxuXG52YXIgc2V0VG9TdHJpbmdUYWc7XG52YXIgaGFzUmVxdWlyZWRTZXRUb1N0cmluZ1RhZztcblxuZnVuY3Rpb24gcmVxdWlyZVNldFRvU3RyaW5nVGFnICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0VG9TdHJpbmdUYWcpIHJldHVybiBzZXRUb1N0cmluZ1RhZztcblx0aGFzUmVxdWlyZWRTZXRUb1N0cmluZ1RhZyA9IDE7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpLmY7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxuXHRzZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uICh0YXJnZXQsIFRBRywgU1RBVElDKSB7XG5cdCAgaWYgKHRhcmdldCAmJiAhU1RBVElDKSB0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlO1xuXHQgIGlmICh0YXJnZXQgJiYgIWhhc093bih0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG5cdCAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIHNldFRvU3RyaW5nVGFnO1xufVxuXG52YXIgZnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yO1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yKSByZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvciA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cblx0ZnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcblx0ICB0cnkge1xuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHQgICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yO1xufVxuXG52YXIgaXNQb3NzaWJsZVByb3RvdHlwZTtcbnZhciBoYXNSZXF1aXJlZElzUG9zc2libGVQcm90b3R5cGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc1Bvc3NpYmxlUHJvdG90eXBlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNQb3NzaWJsZVByb3RvdHlwZSkgcmV0dXJuIGlzUG9zc2libGVQcm90b3R5cGU7XG5cdGhhc1JlcXVpcmVkSXNQb3NzaWJsZVByb3RvdHlwZSA9IDE7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdGlzUG9zc2libGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gaXNPYmplY3QoYXJndW1lbnQpIHx8IGFyZ3VtZW50ID09PSBudWxsO1xuXHR9O1xuXHRyZXR1cm4gaXNQb3NzaWJsZVByb3RvdHlwZTtcbn1cblxudmFyIGFQb3NzaWJsZVByb3RvdHlwZTtcbnZhciBoYXNSZXF1aXJlZEFQb3NzaWJsZVByb3RvdHlwZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFQb3NzaWJsZVByb3RvdHlwZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFQb3NzaWJsZVByb3RvdHlwZSkgcmV0dXJuIGFQb3NzaWJsZVByb3RvdHlwZTtcblx0aGFzUmVxdWlyZWRBUG9zc2libGVQcm90b3R5cGUgPSAxO1xuXHR2YXIgaXNQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmVJc1Bvc3NpYmxlUHJvdG90eXBlKCk7XG5cblx0dmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdGFQb3NzaWJsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIGlmIChpc1Bvc3NpYmxlUHJvdG90eXBlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgJFN0cmluZyhhcmd1bWVudCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG5cdH07XG5cdHJldHVybiBhUG9zc2libGVQcm90b3R5cGU7XG59XG5cbnZhciBvYmplY3RTZXRQcm90b3R5cGVPZjtcbnZhciBoYXNSZXF1aXJlZE9iamVjdFNldFByb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0U2V0UHJvdG90eXBlT2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RTZXRQcm90b3R5cGVPZikgcmV0dXJuIG9iamVjdFNldFByb3RvdHlwZU9mO1xuXHRoYXNSZXF1aXJlZE9iamVjdFNldFByb3RvdHlwZU9mID0gMTtcblx0LyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xuXHR2YXIgdW5jdXJyeVRoaXNBY2Nlc3NvciA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblx0dmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmVBUG9zc2libGVQcm90b3R5cGUoKTtcblxuXHQvLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcblx0Ly8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxuXHRvYmplY3RTZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG5cdCAgdmFyIHRlc3QgPSB7fTtcblx0ICB2YXIgc2V0dGVyO1xuXHQgIHRyeSB7XG5cdCAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpc0FjY2Vzc29yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nLCAnc2V0Jyk7XG5cdCAgICBzZXR0ZXIodGVzdCwgW10pO1xuXHQgICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuXHQgICAgcmVxdWlyZU9iamVjdENvZXJjaWJsZShPKTtcblx0ICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG5cdCAgICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gTztcblx0ICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyKE8sIHByb3RvKTtcblx0ICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcblx0ICAgIHJldHVybiBPO1xuXHQgIH07XG5cdH0oKSA6IHVuZGVmaW5lZCk7XG5cdHJldHVybiBvYmplY3RTZXRQcm90b3R5cGVPZjtcbn1cblxudmFyIGluaGVyaXRJZlJlcXVpcmVkO1xudmFyIGhhc1JlcXVpcmVkSW5oZXJpdElmUmVxdWlyZWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbmhlcml0SWZSZXF1aXJlZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEluaGVyaXRJZlJlcXVpcmVkKSByZXR1cm4gaW5oZXJpdElmUmVxdWlyZWQ7XG5cdGhhc1JlcXVpcmVkSW5oZXJpdElmUmVxdWlyZWQgPSAxO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0U2V0UHJvdG90eXBlT2YoKTtcblxuXHQvLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5cdGluaGVyaXRJZlJlcXVpcmVkID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuXHQgIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcblx0ICBpZiAoXG5cdCAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcblx0ICAgIHNldFByb3RvdHlwZU9mICYmXG5cdCAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG5cdCAgICBpc0NhbGxhYmxlKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSAmJlxuXHQgICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG5cdCAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuXHQgICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuXHQgICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG5cdCAgcmV0dXJuICR0aGlzO1xuXHR9O1xuXHRyZXR1cm4gaW5oZXJpdElmUmVxdWlyZWQ7XG59XG5cbnZhciBjb2xsZWN0aW9uO1xudmFyIGhhc1JlcXVpcmVkQ29sbGVjdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUNvbGxlY3Rpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb2xsZWN0aW9uKSByZXR1cm4gY29sbGVjdGlvbjtcblx0aGFzUmVxdWlyZWRDb2xsZWN0aW9uID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBpc0ZvcmNlZCA9IHJlcXVpcmVJc0ZvcmNlZCgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cdHZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZUludGVybmFsTWV0YWRhdGEoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmVBbkluc3RhbmNlKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmVDaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oKTtcblx0dmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZVNldFRvU3RyaW5nVGFnKCk7XG5cdHZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmVJbmhlcml0SWZSZXF1aXJlZCgpO1xuXG5cdGNvbGxlY3Rpb24gPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSwgd3JhcHBlciwgY29tbW9uKSB7XG5cdCAgdmFyIElTX01BUCA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignTWFwJykgIT09IC0xO1xuXHQgIHZhciBJU19XRUFLID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdXZWFrJykgIT09IC0xO1xuXHQgIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG5cdCAgdmFyIE5hdGl2ZUNvbnN0cnVjdG9yID0gZ2xvYmFsVGhpc1tDT05TVFJVQ1RPUl9OQU1FXTtcblx0ICB2YXIgTmF0aXZlUHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IgJiYgTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXHQgIHZhciBDb25zdHJ1Y3RvciA9IE5hdGl2ZUNvbnN0cnVjdG9yO1xuXHQgIHZhciBleHBvcnRlZCA9IHt9O1xuXG5cdCAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcblx0ICAgIHZhciB1bmN1cnJpZWROYXRpdmVNZXRob2QgPSB1bmN1cnJ5VGhpcyhOYXRpdmVQcm90b3R5cGVbS0VZXSk7XG5cdCAgICBkZWZpbmVCdWlsdEluKE5hdGl2ZVByb3RvdHlwZSwgS0VZLFxuXHQgICAgICBLRVkgPT09ICdhZGQnID8gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG5cdCAgICAgICAgdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIHZhbHVlID09PSAwID8gMCA6IHZhbHVlKTtcblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgfSA6IEtFWSA9PT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcblx0ICAgICAgfSA6IEtFWSA9PT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdCAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyB1bmRlZmluZWQgOiB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG5cdCAgICAgIH0gOiBLRVkgPT09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGtleSkge1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG5cdCAgICAgIH0gOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHQgICAgICAgIHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgIH1cblx0ICAgICk7XG5cdCAgfTtcblxuXHQgIHZhciBSRVBMQUNFID0gaXNGb3JjZWQoXG5cdCAgICBDT05TVFJVQ1RPUl9OQU1FLFxuXHQgICAgIWlzQ2FsbGFibGUoTmF0aXZlQ29uc3RydWN0b3IpIHx8ICEoSVNfV0VBSyB8fCBOYXRpdmVQcm90b3R5cGUuZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgICAgICBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKS5lbnRyaWVzKCkubmV4dCgpO1xuXHQgICAgfSkpXG5cdCAgKTtcblxuXHQgIGlmIChSRVBMQUNFKSB7XG5cdCAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuXHQgICAgQ29uc3RydWN0b3IgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUik7XG5cdCAgICBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlLmVuYWJsZSgpO1xuXHQgIH0gZWxzZSBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHJ1ZSkpIHtcblx0ICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuXHQgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuXHQgICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPT0gaW5zdGFuY2U7XG5cdCAgICAvLyBWOCB+IENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuXHQgICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuXHQgICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihpdGVyYWJsZSk7IH0pO1xuXHQgICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG5cdCAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG5cdCAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcblx0ICAgICAgdmFyIGluZGV4ID0gNTtcblx0ICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcblx0ICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcblx0ICAgICAgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgaXRlcmFibGUpIHtcblx0ICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBOYXRpdmVQcm90b3R5cGUpO1xuXHQgICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCksIGR1bW15LCBDb25zdHJ1Y3Rvcik7XG5cdCAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB7IHRoYXQ6IHRoYXQsIEFTX0VOVFJJRVM6IElTX01BUCB9KTtcblx0ICAgICAgICByZXR1cm4gdGhhdDtcblx0ICAgICAgfSk7XG5cdCAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE5hdGl2ZVByb3RvdHlwZTtcblx0ICAgICAgTmF0aXZlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG5cdCAgICB9XG5cblx0ICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG5cdCAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG5cdCAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG5cdCAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcblxuXHQgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2Rcblx0ICAgIGlmIChJU19XRUFLICYmIE5hdGl2ZVByb3RvdHlwZS5jbGVhcikgZGVsZXRlIE5hdGl2ZVByb3RvdHlwZS5jbGVhcjtcblx0ICB9XG5cblx0ICBleHBvcnRlZFtDT05TVFJVQ1RPUl9OQU1FXSA9IENvbnN0cnVjdG9yO1xuXHQgICQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IENvbnN0cnVjdG9yICE9PSBOYXRpdmVDb25zdHJ1Y3RvciB9LCBleHBvcnRlZCk7XG5cblx0ICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG5cblx0ICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCk7XG5cblx0ICByZXR1cm4gQ29uc3RydWN0b3I7XG5cdH07XG5cdHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG52YXIgZGVmaW5lQnVpbHRJbnM7XG52YXIgaGFzUmVxdWlyZWREZWZpbmVCdWlsdElucztcblxuZnVuY3Rpb24gcmVxdWlyZURlZmluZUJ1aWx0SW5zICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbnMpIHJldHVybiBkZWZpbmVCdWlsdElucztcblx0aGFzUmVxdWlyZWREZWZpbmVCdWlsdElucyA9IDE7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblxuXHRkZWZpbmVCdWlsdElucyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuXHQgIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcblx0ICByZXR1cm4gdGFyZ2V0O1xuXHR9O1xuXHRyZXR1cm4gZGVmaW5lQnVpbHRJbnM7XG59XG5cbnZhciBjb3JyZWN0UHJvdG90eXBlR2V0dGVyO1xudmFyIGhhc1JlcXVpcmVkQ29ycmVjdFByb3RvdHlwZUdldHRlcjtcblxuZnVuY3Rpb24gcmVxdWlyZUNvcnJlY3RQcm90b3R5cGVHZXR0ZXIgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb3JyZWN0UHJvdG90eXBlR2V0dGVyKSByZXR1cm4gY29ycmVjdFByb3RvdHlwZUdldHRlcjtcblx0aGFzUmVxdWlyZWRDb3JyZWN0UHJvdG90eXBlR2V0dGVyID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0Y29ycmVjdFByb3RvdHlwZUdldHRlciA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuXHQgIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG5cdH0pO1xuXHRyZXR1cm4gY29ycmVjdFByb3RvdHlwZUdldHRlcjtcbn1cblxudmFyIG9iamVjdEdldFByb3RvdHlwZU9mO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0R2V0UHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEdldFByb3RvdHlwZU9mKSByZXR1cm4gb2JqZWN0R2V0UHJvdG90eXBlT2Y7XG5cdGhhc1JlcXVpcmVkT2JqZWN0R2V0UHJvdG90eXBlT2YgPSAxO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBzaGFyZWRLZXkgPSByZXF1aXJlU2hhcmVkS2V5KCk7XG5cdHZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlQ29ycmVjdFByb3RvdHlwZUdldHRlcigpO1xuXG5cdHZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdHZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuXHQvLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5cdG9iamVjdEdldFByb3RvdHlwZU9mID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG5cdCAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KE8pO1xuXHQgIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuXHQgIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3Rvcjtcblx0ICBpZiAoaXNDYWxsYWJsZShjb25zdHJ1Y3RvcikgJiYgb2JqZWN0IGluc3RhbmNlb2YgY29uc3RydWN0b3IpIHtcblx0ICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdCAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG5cdH07XG5cdHJldHVybiBvYmplY3RHZXRQcm90b3R5cGVPZjtcbn1cblxudmFyIGl0ZXJhdG9yc0NvcmU7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRvcnNDb3JlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0b3JzQ29yZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdG9yc0NvcmUpIHJldHVybiBpdGVyYXRvcnNDb3JlO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdG9yc0NvcmUgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblx0dmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIElTX1BVUkUgPSByZXF1aXJlSXNQdXJlKCk7XG5cblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXHR2YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG5cdC8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxuXHR2YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5cdGlmIChbXS5rZXlzKSB7XG5cdCAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcblx0ICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcblx0ICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuXHQgIGVsc2Uge1xuXHQgICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuXHQgICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG5cdCAgfVxuXHR9XG5cblx0dmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgdGVzdCA9IHt9O1xuXHQgIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuXHQgIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcblx0fSk7XG5cblx0aWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cdGVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuXHQvLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3Jcblx0aWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcblx0ICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfSk7XG5cdH1cblxuXHRpdGVyYXRvcnNDb3JlID0ge1xuXHQgIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcblx0ICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG5cdH07XG5cdHJldHVybiBpdGVyYXRvcnNDb3JlO1xufVxuXG52YXIgaXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcjtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvcikgcmV0dXJuIGl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvciA9IDE7XG5cdHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmVJdGVyYXRvcnNDb3JlKCkuSXRlcmF0b3JQcm90b3R5cGU7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCk7XG5cdHZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmVTZXRUb1N0cmluZ1RhZygpO1xuXHR2YXIgSXRlcmF0b3JzID0gcmVxdWlyZUl0ZXJhdG9ycygpO1xuXG5cdHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuXHRpdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQsIEVOVU1FUkFCTEVfTkVYVCkge1xuXHQgIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuXHQgIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigrIUVOVU1FUkFCTEVfTkVYVCwgbmV4dCkgfSk7XG5cdCAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuXHQgIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG5cdCAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG5cdH07XG5cdHJldHVybiBpdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yO1xufVxuXG52YXIgaXRlcmF0b3JEZWZpbmU7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRvckRlZmluZTtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdG9yRGVmaW5lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0b3JEZWZpbmUpIHJldHVybiBpdGVyYXRvckRlZmluZTtcblx0aGFzUmVxdWlyZWRJdGVyYXRvckRlZmluZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBJU19QVVJFID0gcmVxdWlyZUlzUHVyZSgpO1xuXHR2YXIgRnVuY3Rpb25OYW1lID0gcmVxdWlyZUZ1bmN0aW9uTmFtZSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZUl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IoKTtcblx0dmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mKCk7XG5cdHZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RTZXRQcm90b3R5cGVPZigpO1xuXHR2YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlU2V0VG9TdHJpbmdUYWcoKTtcblx0dmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmVDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgSXRlcmF0b3JzID0gcmVxdWlyZUl0ZXJhdG9ycygpO1xuXHR2YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmVJdGVyYXRvcnNDb3JlKCk7XG5cblx0dmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLlBST1BFUjtcblx0dmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLkNPTkZJR1VSQUJMRTtcblx0dmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcblx0dmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblx0dmFyIEtFWVMgPSAna2V5cyc7XG5cdHZhciBWQUxVRVMgPSAndmFsdWVzJztcblx0dmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cblx0dmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5cdGl0ZXJhdG9yRGVmaW5lID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuXHQgIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cblx0ICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcblx0ICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcblx0ICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcblxuXHQgICAgc3dpdGNoIChLSU5EKSB7XG5cdCAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcblx0ICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcblx0ICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG5cdCAgfTtcblxuXHQgIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuXHQgIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcblx0ICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG5cdCAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG5cdCAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG5cdCAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuXHQgIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG5cdCAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcblx0ICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cblx0ICAvLyBmaXggbmF0aXZlXG5cdCAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG5cdCAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG5cdCAgICBpZiAoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG5cdCAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuXHQgICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuXHQgICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG5cdCAgICAgICAgfSBlbHNlIGlmICghaXNDYWxsYWJsZShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuXHQgICAgICAgICAgZGVmaW5lQnVpbHRJbihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuXHQgICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuXHQgICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBmaXggQXJyYXkucHJvdG90eXBlLnsgdmFsdWVzLCBAQGl0ZXJhdG9yIH0ubmFtZSBpbiBWOCAvIEZGXG5cdCAgaWYgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIERFRkFVTFQgPT09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcblx0ICAgIGlmICghSVNfUFVSRSAmJiBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSkge1xuXHQgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsICduYW1lJywgVkFMVUVTKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG5cdCAgICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIGNhbGwobmF0aXZlSXRlcmF0b3IsIHRoaXMpOyB9O1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcblx0ICBpZiAoREVGQVVMVCkge1xuXHQgICAgbWV0aG9kcyA9IHtcblx0ICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcblx0ICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuXHQgICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcblx0ICAgIH07XG5cdCAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG5cdCAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcblx0ICAgICAgICBkZWZpbmVCdWlsdEluKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcblx0ICB9XG5cblx0ICAvLyBkZWZpbmUgaXRlcmF0b3Jcblx0ICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcblx0ICAgIGRlZmluZUJ1aWx0SW4oSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IsIHsgbmFtZTogREVGQVVMVCB9KTtcblx0ICB9XG5cdCAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG5cdCAgcmV0dXJuIG1ldGhvZHM7XG5cdH07XG5cdHJldHVybiBpdGVyYXRvckRlZmluZTtcbn1cblxudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlQ3JlYXRlSXRlclJlc3VsdE9iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENyZWF0ZUl0ZXJSZXN1bHRPYmplY3QpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0O1xuXHRoYXNSZXF1aXJlZENyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSAxO1xuXHQvLyBgQ3JlYXRlSXRlclJlc3VsdE9iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBkb25lKSB7XG5cdCAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBkb25lIH07XG5cdH07XG5cdHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0O1xufVxuXG52YXIgc2V0U3BlY2llcztcbnZhciBoYXNSZXF1aXJlZFNldFNwZWNpZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRTcGVjaWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0U3BlY2llcykgcmV0dXJuIHNldFNwZWNpZXM7XG5cdGhhc1JlcXVpcmVkU2V0U3BlY2llcyA9IDE7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cblx0dmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuXHRzZXRTcGVjaWVzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcblx0ICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuXG5cdCAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuXHQgICAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG5cdCAgICB9KTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBzZXRTcGVjaWVzO1xufVxuXG52YXIgY29sbGVjdGlvblN0cm9uZztcbnZhciBoYXNSZXF1aXJlZENvbGxlY3Rpb25TdHJvbmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb2xsZWN0aW9uU3Ryb25nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29sbGVjdGlvblN0cm9uZykgcmV0dXJuIGNvbGxlY3Rpb25TdHJvbmc7XG5cdGhhc1JlcXVpcmVkQ29sbGVjdGlvblN0cm9uZyA9IDE7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cdHZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmVEZWZpbmVCdWlsdElucygpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhbkluc3RhbmNlID0gcmVxdWlyZUFuSW5zdGFuY2UoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZUl0ZXJhdG9yRGVmaW5lKCk7XG5cdHZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZUNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoKTtcblx0dmFyIHNldFNwZWNpZXMgPSByZXF1aXJlU2V0U3BlY2llcygpO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGZhc3RLZXkgPSByZXF1aXJlSW50ZXJuYWxNZXRhZGF0YSgpLmZhc3RLZXk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblxuXHR2YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXHR2YXIgaW50ZXJuYWxTdGF0ZUdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xuXG5cdGNvbGxlY3Rpb25TdHJvbmcgPSB7XG5cdCAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKSB7XG5cdCAgICB2YXIgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuXHQgICAgICBhbkluc3RhbmNlKHRoYXQsIFByb3RvdHlwZSk7XG5cdCAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuXHQgICAgICAgIHR5cGU6IENPTlNUUlVDVE9SX05BTUUsXG5cdCAgICAgICAgaW5kZXg6IGNyZWF0ZShudWxsKSxcblx0ICAgICAgICBmaXJzdDogbnVsbCxcblx0ICAgICAgICBsYXN0OiBudWxsLFxuXHQgICAgICAgIHNpemU6IDBcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICghREVTQ1JJUFRPUlMpIHRoYXQuc2l6ZSA9IDA7XG5cdCAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgeyB0aGF0OiB0aGF0LCBBU19FTlRSSUVTOiBJU19NQVAgfSk7XG5cdCAgICB9KTtcblxuXHQgICAgdmFyIFByb3RvdHlwZSA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuXHQgICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXG5cdCAgICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcblx0ICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcblx0ICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcblx0ICAgICAgdmFyIHByZXZpb3VzLCBpbmRleDtcblx0ICAgICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG5cdCAgICAgIGlmIChlbnRyeSkge1xuXHQgICAgICAgIGVudHJ5LnZhbHVlID0gdmFsdWU7XG5cdCAgICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzdGF0ZS5sYXN0ID0gZW50cnkgPSB7XG5cdCAgICAgICAgICBpbmRleDogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksXG5cdCAgICAgICAgICBrZXk6IGtleSxcblx0ICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcblx0ICAgICAgICAgIHByZXZpb3VzOiBwcmV2aW91cyA9IHN0YXRlLmxhc3QsXG5cdCAgICAgICAgICBuZXh0OiBudWxsLFxuXHQgICAgICAgICAgcmVtb3ZlZDogZmFsc2Vcblx0ICAgICAgICB9O1xuXHQgICAgICAgIGlmICghc3RhdGUuZmlyc3QpIHN0YXRlLmZpcnN0ID0gZW50cnk7XG5cdCAgICAgICAgaWYgKHByZXZpb3VzKSBwcmV2aW91cy5uZXh0ID0gZW50cnk7XG5cdCAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplKys7XG5cdCAgICAgICAgZWxzZSB0aGF0LnNpemUrKztcblx0ICAgICAgICAvLyBhZGQgdG8gaW5kZXhcblx0ICAgICAgICBpZiAoaW5kZXggIT09ICdGJykgc3RhdGUuaW5kZXhbaW5kZXhdID0gZW50cnk7XG5cdCAgICAgIH0gcmV0dXJuIHRoYXQ7XG5cdCAgICB9O1xuXG5cdCAgICB2YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG5cdCAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG5cdCAgICAgIC8vIGZhc3QgY2FzZVxuXHQgICAgICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG5cdCAgICAgIHZhciBlbnRyeTtcblx0ICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiBzdGF0ZS5pbmRleFtpbmRleF07XG5cdCAgICAgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuXHQgICAgICBmb3IgKGVudHJ5ID0gc3RhdGUuZmlyc3Q7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm5leHQpIHtcblx0ICAgICAgICBpZiAoZW50cnkua2V5ID09PSBrZXkpIHJldHVybiBlbnRyeTtcblx0ICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgZGVmaW5lQnVpbHRJbnMoUHJvdG90eXBlLCB7XG5cdCAgICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlLmNsZWFyKClgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmNsZWFyXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5jbGVhclxuXHQgICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG5cdCAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG5cdCAgICAgICAgdmFyIGVudHJ5ID0gc3RhdGUuZmlyc3Q7XG5cdCAgICAgICAgd2hpbGUgKGVudHJ5KSB7XG5cdCAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcblx0ICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91cykgZW50cnkucHJldmlvdXMgPSBlbnRyeS5wcmV2aW91cy5uZXh0ID0gbnVsbDtcblx0ICAgICAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcblx0ICAgICAgICB9XG5cdCAgICAgICAgc3RhdGUuZmlyc3QgPSBzdGF0ZS5sYXN0ID0gbnVsbDtcblx0ICAgICAgICBzdGF0ZS5pbmRleCA9IGNyZWF0ZShudWxsKTtcblx0ICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUgPSAwO1xuXHQgICAgICAgIGVsc2UgdGhhdC5zaXplID0gMDtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUuZGVsZXRlKGtleSlgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmRlbGV0ZVxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuZGVsZXRlXG5cdCAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG5cdCAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcblx0ICAgICAgICBpZiAoZW50cnkpIHtcblx0ICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubmV4dDtcblx0ICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucHJldmlvdXM7XG5cdCAgICAgICAgICBkZWxldGUgc3RhdGUuaW5kZXhbZW50cnkuaW5kZXhdO1xuXHQgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG5cdCAgICAgICAgICBpZiAocHJldikgcHJldi5uZXh0ID0gbmV4dDtcblx0ICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnByZXZpb3VzID0gcHJldjtcblx0ICAgICAgICAgIGlmIChzdGF0ZS5maXJzdCA9PT0gZW50cnkpIHN0YXRlLmZpcnN0ID0gbmV4dDtcblx0ICAgICAgICAgIGlmIChzdGF0ZS5sYXN0ID09PSBlbnRyeSkgc3RhdGUubGFzdCA9IHByZXY7XG5cdCAgICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUtLTtcblx0ICAgICAgICAgIGVsc2UgdGhhdC5zaXplLS07XG5cdCAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZm9yZWFjaFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuZm9yZWFjaFxuXHQgICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgICAgIHZhciBlbnRyeTtcblx0ICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5maXJzdCkge1xuXHQgICAgICAgICAgYm91bmRGdW5jdGlvbihlbnRyeS52YWx1ZSwgZW50cnkua2V5LCB0aGlzKTtcblx0ICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuXHQgICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LFxuXHQgICAgICAvLyBgeyBNYXAsIFNldH0ucHJvdG90eXBlLmhhcyhrZXkpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5oYXNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmhhc1xuXHQgICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0ICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZGVmaW5lQnVpbHRJbnMoUHJvdG90eXBlLCBJU19NQVAgPyB7XG5cdCAgICAgIC8vIGBNYXAucHJvdG90eXBlLmdldChrZXkpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmdldFxuXHQgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0ICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGlzLCBrZXkpO1xuXHQgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52YWx1ZTtcblx0ICAgICAgfSxcblx0ICAgICAgLy8gYE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLnNldFxuXHQgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0gOiB7XG5cdCAgICAgIC8vIGBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuYWRkXG5cdCAgICAgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoUHJvdG90eXBlLCAnc2l6ZScsIHtcblx0ICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zaXplO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBDb25zdHJ1Y3Rvcjtcblx0ICB9LFxuXHQgIHNldFN0cm9uZzogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApIHtcblx0ICAgIHZhciBJVEVSQVRPUl9OQU1FID0gQ09OU1RSVUNUT1JfTkFNRSArICcgSXRlcmF0b3InO1xuXHQgICAgdmFyIGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcblx0ICAgIHZhciBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKElURVJBVE9SX05BTUUpO1xuXHQgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUueyBrZXlzLCB2YWx1ZXMsIGVudHJpZXMsIEBAaXRlcmF0b3IgfSgpYCBtZXRob2RzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZW50cmllc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmtleXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS52YWx1ZXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuZW50cmllc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmtleXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS52YWx1ZXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5cdCAgICBkZWZpbmVJdGVyYXRvcihDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG5cdCAgICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuXHQgICAgICAgIHR5cGU6IElURVJBVE9SX05BTUUsXG5cdCAgICAgICAgdGFyZ2V0OiBpdGVyYXRlZCxcblx0ICAgICAgICBzdGF0ZTogZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUoaXRlcmF0ZWQpLFxuXHQgICAgICAgIGtpbmQ6IGtpbmQsXG5cdCAgICAgICAgbGFzdDogbnVsbFxuXHQgICAgICB9KTtcblx0ICAgIH0sIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlKHRoaXMpO1xuXHQgICAgICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG5cdCAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmxhc3Q7XG5cdCAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuXHQgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcblx0ICAgICAgLy8gZ2V0IG5leHQgZW50cnlcblx0ICAgICAgaWYgKCFzdGF0ZS50YXJnZXQgfHwgIShzdGF0ZS5sYXN0ID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5zdGF0ZS5maXJzdCkpIHtcblx0ICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuXHQgICAgICAgIHN0YXRlLnRhcmdldCA9IG51bGw7XG5cdCAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG5cdCAgICAgIGlmIChraW5kID09PSAna2V5cycpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KGVudHJ5LmtleSwgZmFsc2UpO1xuXHQgICAgICBpZiAoa2luZCA9PT0gJ3ZhbHVlcycpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KGVudHJ5LnZhbHVlLCBmYWxzZSk7XG5cdCAgICAgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KFtlbnRyeS5rZXksIGVudHJ5LnZhbHVlXSwgZmFsc2UpO1xuXHQgICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG5cdCAgICAvLyBgeyBNYXAsIFNldCB9LnByb3RvdHlwZVtAQHNwZWNpZXNdYCBhY2Nlc3NvcnNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LW1hcC1AQHNwZWNpZXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXNldC1AQHNwZWNpZXNcblx0ICAgIHNldFNwZWNpZXMoQ09OU1RSVUNUT1JfTkFNRSk7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gY29sbGVjdGlvblN0cm9uZztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfbWFwX2NvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfbWFwX2NvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfbWFwX2NvbnN0cnVjdG9yKSByZXR1cm4gZXNfbWFwX2NvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZEVzX21hcF9jb25zdHJ1Y3RvciA9IDE7XG5cdHZhciBjb2xsZWN0aW9uID0gcmVxdWlyZUNvbGxlY3Rpb24oKTtcblx0dmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlQ29sbGVjdGlvblN0cm9uZygpO1xuXG5cdC8vIGBNYXBgIGNvbnN0cnVjdG9yXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLW9iamVjdHNcblx0Y29sbGVjdGlvbignTWFwJywgZnVuY3Rpb24gKGluaXQpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gaW5pdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcblx0fSwgY29sbGVjdGlvblN0cm9uZyk7XG5cdHJldHVybiBlc19tYXBfY29uc3RydWN0b3I7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX21hcDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX21hcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX21hcCkgcmV0dXJuIGVzX21hcDtcblx0aGFzUmVxdWlyZWRFc19tYXAgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHJlcGxhY2VkIHRvIG1vZHVsZSBiZWxvd1xuXHRyZXF1aXJlRXNfbWFwX2NvbnN0cnVjdG9yKCk7XG5cdHJldHVybiBlc19tYXA7XG59XG5cbnZhciBlc193ZWFrTWFwID0ge307XG5cbnZhciBlc193ZWFrTWFwX2NvbnN0cnVjdG9yID0ge307XG5cbnZhciBpc0FycmF5O1xudmFyIGhhc1JlcXVpcmVkSXNBcnJheTtcblxuZnVuY3Rpb24gcmVxdWlyZUlzQXJyYXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0FycmF5KSByZXR1cm4gaXNBcnJheTtcblx0aGFzUmVxdWlyZWRJc0FycmF5ID0gMTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXG5cdC8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcblx0aXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuXHQgIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcblx0fTtcblx0cmV0dXJuIGlzQXJyYXk7XG59XG5cbnZhciBpc0NvbnN0cnVjdG9yO1xudmFyIGhhc1JlcXVpcmVkSXNDb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUlzQ29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0NvbnN0cnVjdG9yKSByZXR1cm4gaXNDb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRJc0NvbnN0cnVjdG9yID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZigpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZUluc3BlY3RTb3VyY2UoKTtcblxuXHR2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblx0dmFyIGNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG5cdHZhciBjb25zdHJ1Y3RvclJlZ0V4cCA9IC9eXFxzKig/OmNsYXNzfGZ1bmN0aW9uKVxcYi87XG5cdHZhciBleGVjID0gdW5jdXJyeVRoaXMoY29uc3RydWN0b3JSZWdFeHAuZXhlYyk7XG5cdHZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gIWNvbnN0cnVjdG9yUmVnRXhwLnRlc3Qobm9vcCk7XG5cblx0dmFyIGlzQ29uc3RydWN0b3JNb2Rlcm4gPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG5cdCAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHQgIHRyeSB7XG5cdCAgICBjb25zdHJ1Y3Qobm9vcCwgW10sIGFyZ3VtZW50KTtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBpc0NvbnN0cnVjdG9yTGVnYWN5ID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHQgIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcblx0ICBzd2l0Y2ggKGNsYXNzb2YoYXJndW1lbnQpKSB7XG5cdCAgICBjYXNlICdBc3luY0Z1bmN0aW9uJzpcblx0ICAgIGNhc2UgJ0dlbmVyYXRvckZ1bmN0aW9uJzpcblx0ICAgIGNhc2UgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nOiByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIHRyeSB7XG5cdCAgICAvLyB3ZSBjYW4ndCBjaGVjayAucHJvdG90eXBlIHNpbmNlIGNvbnN0cnVjdG9ycyBwcm9kdWNlZCBieSAuYmluZCBoYXZlbid0IGl0XG5cdCAgICAvLyBgRnVuY3Rpb24jdG9TdHJpbmdgIHRocm93cyBvbiBzb21lIGJ1aWx0LWl0IGZ1bmN0aW9uIGluIHNvbWUgbGVnYWN5IGVuZ2luZXNcblx0ICAgIC8vIChmb3IgZXhhbXBsZSwgYERPTVF1YWRgIGFuZCBzaW1pbGFyIGluIEZGNDEtKVxuXHQgICAgcmV0dXJuIElOQ09SUkVDVF9UT19TVFJJTkcgfHwgISFleGVjKGNvbnN0cnVjdG9yUmVnRXhwLCBpbnNwZWN0U291cmNlKGFyZ3VtZW50KSk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fTtcblxuXHRpc0NvbnN0cnVjdG9yTGVnYWN5LnNoYW0gPSB0cnVlO1xuXG5cdC8vIGBJc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG5cdGlzQ29uc3RydWN0b3IgPSAhY29uc3RydWN0IHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgY2FsbGVkO1xuXHQgIHJldHVybiBpc0NvbnN0cnVjdG9yTW9kZXJuKGlzQ29uc3RydWN0b3JNb2Rlcm4uY2FsbClcblx0ICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKE9iamVjdClcblx0ICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZTsgfSlcblx0ICAgIHx8IGNhbGxlZDtcblx0fSkgPyBpc0NvbnN0cnVjdG9yTGVnYWN5IDogaXNDb25zdHJ1Y3Rvck1vZGVybjtcblx0cmV0dXJuIGlzQ29uc3RydWN0b3I7XG59XG5cbnZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcjtcbnZhciBoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvcikgcmV0dXJuIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gMTtcblx0dmFyIGlzQXJyYXkgPSByZXF1aXJlSXNBcnJheSgpO1xuXHR2YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmVJc0NvbnN0cnVjdG9yKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cdHZhciAkQXJyYXkgPSBBcnJheTtcblxuXHQvLyBhIHBhcnQgb2YgYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5cdGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcblx0ICB2YXIgQztcblx0ICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuXHQgICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG5cdCAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuXHQgICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09ICRBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG5cdCAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuXHQgICAgICBDID0gQ1tTUEVDSUVTXTtcblx0ICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG5cdCAgICB9XG5cdCAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gJEFycmF5IDogQztcblx0fTtcblx0cmV0dXJuIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yO1xufVxuXG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ3JlYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlTcGVjaWVzQ3JlYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ3JlYXRlKSByZXR1cm4gYXJyYXlTcGVjaWVzQ3JlYXRlO1xuXHRoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NyZWF0ZSA9IDE7XG5cdHZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmVBcnJheVNwZWNpZXNDb25zdHJ1Y3RvcigpO1xuXG5cdC8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRhcnJheVNwZWNpZXNDcmVhdGUgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG5cdCAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xuXHR9O1xuXHRyZXR1cm4gYXJyYXlTcGVjaWVzQ3JlYXRlO1xufVxuXG52YXIgYXJyYXlJdGVyYXRpb247XG52YXIgaGFzUmVxdWlyZWRBcnJheUl0ZXJhdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5SXRlcmF0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlJdGVyYXRpb24pIHJldHVybiBhcnJheUl0ZXJhdGlvbjtcblx0aGFzUmVxdWlyZWRBcnJheUl0ZXJhdGlvbiA9IDE7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cdHZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlQXJyYXlTcGVjaWVzQ3JlYXRlKCk7XG5cblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHQvLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG5cdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuXHQgIHZhciBJU19NQVAgPSBUWVBFID09PSAxO1xuXHQgIHZhciBJU19GSUxURVIgPSBUWVBFID09PSAyO1xuXHQgIHZhciBJU19TT01FID0gVFlQRSA9PT0gMztcblx0ICB2YXIgSVNfRVZFUlkgPSBUWVBFID09PSA0O1xuXHQgIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PT0gNjtcblx0ICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT09IDc7XG5cdCAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PT0gNSB8fCBJU19GSU5EX0lOREVYO1xuXHQgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG5cdCAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcblx0ICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcblx0ICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcblx0ICAgIHZhciBpbmRleCA9IDA7XG5cdCAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuXHQgICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcblx0ICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuXHQgICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG5cdCAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG5cdCAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcblx0ICAgICAgaWYgKFRZUEUpIHtcblx0ICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcblx0ICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuXHQgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcblx0ICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG5cdCAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG5cdCAgICAgICAgICBjYXNlIDI6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyXG5cdCAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuXHQgICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgIC8vIGV2ZXJ5XG5cdCAgICAgICAgICBjYXNlIDc6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyUmVqZWN0XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuXHQgIH07XG5cdH07XG5cblx0YXJyYXlJdGVyYXRpb24gPSB7XG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5cdCAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcblx0ICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG5cdCAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG5cdCAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG5cdCAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcblx0ICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuXHQgIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyUmVqZWN0YCBtZXRob2Rcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcblx0ICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxuXHR9O1xuXHRyZXR1cm4gYXJyYXlJdGVyYXRpb247XG59XG5cbnZhciBjb2xsZWN0aW9uV2VhaztcbnZhciBoYXNSZXF1aXJlZENvbGxlY3Rpb25XZWFrO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29sbGVjdGlvbldlYWsgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb2xsZWN0aW9uV2VhaykgcmV0dXJuIGNvbGxlY3Rpb25XZWFrO1xuXHRoYXNSZXF1aXJlZENvbGxlY3Rpb25XZWFrID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZURlZmluZUJ1aWx0SW5zKCk7XG5cdHZhciBnZXRXZWFrRGF0YSA9IHJlcXVpcmVJbnRlcm5hbE1ldGFkYXRhKCkuZ2V0V2Vha0RhdGE7XG5cdHZhciBhbkluc3RhbmNlID0gcmVxdWlyZUFuSW5zdGFuY2UoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgQXJyYXlJdGVyYXRpb25Nb2R1bGUgPSByZXF1aXJlQXJyYXlJdGVyYXRpb24oKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cblx0dmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblx0dmFyIGludGVybmFsU3RhdGVHZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblx0dmFyIGZpbmQgPSBBcnJheUl0ZXJhdGlvbk1vZHVsZS5maW5kO1xuXHR2YXIgZmluZEluZGV4ID0gQXJyYXlJdGVyYXRpb25Nb2R1bGUuZmluZEluZGV4O1xuXHR2YXIgc3BsaWNlID0gdW5jdXJyeVRoaXMoW10uc3BsaWNlKTtcblx0dmFyIGlkID0gMDtcblxuXHQvLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcblx0dmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0ICByZXR1cm4gc3RhdGUuZnJvemVuIHx8IChzdGF0ZS5mcm96ZW4gPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSgpKTtcblx0fTtcblxuXHR2YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICgpIHtcblx0ICB0aGlzLmVudHJpZXMgPSBbXTtcblx0fTtcblxuXHR2YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24gKHN0b3JlLCBrZXkpIHtcblx0ICByZXR1cm4gZmluZChzdG9yZS5lbnRyaWVzLCBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuXHQgIH0pO1xuXHR9O1xuXG5cdFVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuXHQgIGdldDogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgICBpZiAoZW50cnkpIHJldHVybiBlbnRyeVsxXTtcblx0ICB9LFxuXHQgIGhhczogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgfSxcblx0ICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdCAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcblx0ICAgIGlmIChlbnRyeSkgZW50cnlbMV0gPSB2YWx1ZTtcblx0ICAgIGVsc2UgdGhpcy5lbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcblx0ICB9LFxuXHQgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICB2YXIgaW5kZXggPSBmaW5kSW5kZXgodGhpcy5lbnRyaWVzLCBmdW5jdGlvbiAoaXQpIHtcblx0ICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG5cdCAgICB9KTtcblx0ICAgIGlmICh+aW5kZXgpIHNwbGljZSh0aGlzLmVudHJpZXMsIGluZGV4LCAxKTtcblx0ICAgIHJldHVybiAhIX5pbmRleDtcblx0ICB9XG5cdH07XG5cblx0Y29sbGVjdGlvbldlYWsgPSB7XG5cdCAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKSB7XG5cdCAgICB2YXIgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuXHQgICAgICBhbkluc3RhbmNlKHRoYXQsIFByb3RvdHlwZSk7XG5cdCAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuXHQgICAgICAgIHR5cGU6IENPTlNUUlVDVE9SX05BTUUsXG5cdCAgICAgICAgaWQ6IGlkKyssXG5cdCAgICAgICAgZnJvemVuOiBudWxsXG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0ZXJhYmxlKSkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHsgdGhhdDogdGhhdCwgQVNfRU5UUklFUzogSVNfTUFQIH0pO1xuXHQgICAgfSk7XG5cblx0ICAgIHZhciBQcm90b3R5cGUgPSBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cblx0ICAgIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcblxuXHQgICAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG5cdCAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG5cdCAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG5cdCAgICAgIGlmIChkYXRhID09PSB0cnVlKSB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKS5zZXQoa2V5LCB2YWx1ZSk7XG5cdCAgICAgIGVsc2UgZGF0YVtzdGF0ZS5pZF0gPSB2YWx1ZTtcblx0ICAgICAgcmV0dXJuIHRoYXQ7XG5cdCAgICB9O1xuXG5cdCAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIHtcblx0ICAgICAgLy8gYHsgV2Vha01hcCwgV2Vha1NldCB9LnByb3RvdHlwZS5kZWxldGUoa2V5KWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAucHJvdG90eXBlLmRlbGV0ZVxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWtzZXQucHJvdG90eXBlLmRlbGV0ZVxuXHQgICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrRGF0YShrZXkpO1xuXHQgICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZShzdGF0ZSlbJ2RlbGV0ZSddKGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGRhdGEgJiYgaGFzT3duKGRhdGEsIHN0YXRlLmlkKSAmJiBkZWxldGUgZGF0YVtzdGF0ZS5pZF07XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGB7IFdlYWtNYXAsIFdlYWtTZXQgfS5wcm90b3R5cGUuaGFzKGtleSlgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLnByb3RvdHlwZS5oYXNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrc2V0LnByb3RvdHlwZS5oYXNcblx0ICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGtleSk7XG5cdCAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKS5oYXMoa2V5KTtcblx0ICAgICAgICByZXR1cm4gZGF0YSAmJiBoYXNPd24oZGF0YSwgc3RhdGUuaWQpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZGVmaW5lQnVpbHRJbnMoUHJvdG90eXBlLCBJU19NQVAgPyB7XG5cdCAgICAgIC8vIGBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuZ2V0XG5cdCAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcblx0ICAgICAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoa2V5KTtcblx0ICAgICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZShzdGF0ZSkuZ2V0KGtleSk7XG5cdCAgICAgICAgICBpZiAoZGF0YSkgcmV0dXJuIGRhdGFbc3RhdGUuaWRdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSxcblx0ICAgICAgLy8gYFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuc2V0XG5cdCAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIGtleSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9IDoge1xuXHQgICAgICAvLyBgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha3NldC5wcm90b3R5cGUuYWRkXG5cdCAgICAgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICByZXR1cm4gQ29uc3RydWN0b3I7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gY29sbGVjdGlvbldlYWs7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX3dlYWtNYXBfY29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc193ZWFrTWFwX2NvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfd2Vha01hcF9jb25zdHJ1Y3RvcikgcmV0dXJuIGVzX3dlYWtNYXBfY29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkRXNfd2Vha01hcF9jb25zdHJ1Y3RvciA9IDE7XG5cdHZhciBGUkVFWklORyA9IHJlcXVpcmVGcmVlemluZygpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmVEZWZpbmVCdWlsdElucygpO1xuXHR2YXIgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbE1ldGFkYXRhKCk7XG5cdHZhciBjb2xsZWN0aW9uID0gcmVxdWlyZUNvbGxlY3Rpb24oKTtcblx0dmFyIGNvbGxlY3Rpb25XZWFrID0gcmVxdWlyZUNvbGxlY3Rpb25XZWFrKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpLmVuZm9yY2U7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZVdlYWtNYXBCYXNpY0RldGVjdGlvbigpO1xuXG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5cdHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2V4dGVuc2libGUgLS0gc2FmZVxuXHR2YXIgaXNFeHRlbnNpYmxlID0gJE9iamVjdC5pc0V4dGVuc2libGU7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNmcm96ZW4gLS0gc2FmZVxuXHR2YXIgaXNGcm96ZW4gPSAkT2JqZWN0LmlzRnJvemVuO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzc2VhbGVkIC0tIHNhZmVcblx0dmFyIGlzU2VhbGVkID0gJE9iamVjdC5pc1NlYWxlZDtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1mcmVlemUgLS0gc2FmZVxuXHR2YXIgZnJlZXplID0gJE9iamVjdC5mcmVlemU7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2VhbCAtLSBzYWZlXG5cdHZhciBzZWFsID0gJE9iamVjdC5zZWFsO1xuXG5cdHZhciBJU19JRTExID0gIWdsb2JhbFRoaXMuQWN0aXZlWE9iamVjdCAmJiAnQWN0aXZlWE9iamVjdCcgaW4gZ2xvYmFsVGhpcztcblx0dmFyIEludGVybmFsV2Vha01hcDtcblxuXHR2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIChpbml0KSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG5cdCAgICByZXR1cm4gaW5pdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcblx0ICB9O1xuXHR9O1xuXG5cdC8vIGBXZWFrTWFwYCBjb25zdHJ1Y3RvclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAtY29uc3RydWN0b3Jcblx0dmFyICRXZWFrTWFwID0gY29sbGVjdGlvbignV2Vha01hcCcsIHdyYXBwZXIsIGNvbGxlY3Rpb25XZWFrKTtcblx0dmFyIFdlYWtNYXBQcm90b3R5cGUgPSAkV2Vha01hcC5wcm90b3R5cGU7XG5cdHZhciBuYXRpdmVTZXQgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLnNldCk7XG5cblx0Ly8gQ2hha3JhIEVkZ2UgYnVnOiBhZGRpbmcgZnJvemVuIGFycmF5cyB0byBXZWFrTWFwIHVuZnJlZXplIHRoZW1cblx0dmFyIGhhc01TRWRnZUZyZWV6aW5nQnVnID0gZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiBGUkVFWklORyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgZnJvemVuQXJyYXkgPSBmcmVlemUoW10pO1xuXHQgICAgbmF0aXZlU2V0KG5ldyAkV2Vha01hcCgpLCBmcm96ZW5BcnJheSwgMSk7XG5cdCAgICByZXR1cm4gIWlzRnJvemVuKGZyb3plbkFycmF5KTtcblx0ICB9KTtcblx0fTtcblxuXHQvLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5cdC8vIFdlIGNhbid0IHVzZSBmZWF0dXJlIGRldGVjdGlvbiBiZWNhdXNlIGl0IGNyYXNoIHNvbWUgb2xkIElFIGJ1aWxkc1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDg1XG5cdGlmIChOQVRJVkVfV0VBS19NQVApIGlmIChJU19JRTExKSB7XG5cdCAgSW50ZXJuYWxXZWFrTWFwID0gY29sbGVjdGlvbldlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgJ1dlYWtNYXAnLCB0cnVlKTtcblx0ICBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlLmVuYWJsZSgpO1xuXHQgIHZhciBuYXRpdmVEZWxldGUgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlWydkZWxldGUnXSk7XG5cdCAgdmFyIG5hdGl2ZUhhcyA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuaGFzKTtcblx0ICB2YXIgbmF0aXZlR2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5nZXQpO1xuXHQgIGRlZmluZUJ1aWx0SW5zKFdlYWtNYXBQcm90b3R5cGUsIHtcblx0ICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICAgIGlmIChpc09iamVjdChrZXkpICYmICFpc0V4dGVuc2libGUoa2V5KSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghc3RhdGUuZnJvemVuKSBzdGF0ZS5mcm96ZW4gPSBuZXcgSW50ZXJuYWxXZWFrTWFwKCk7XG5cdCAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGV0ZSh0aGlzLCBrZXkpIHx8IHN0YXRlLmZyb3plblsnZGVsZXRlJ10oa2V5KTtcblx0ICAgICAgfSByZXR1cm4gbmF0aXZlRGVsZXRlKHRoaXMsIGtleSk7XG5cdCAgICB9LFxuXHQgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdCAgICAgIGlmIChpc09iamVjdChrZXkpICYmICFpc0V4dGVuc2libGUoa2V5KSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghc3RhdGUuZnJvemVuKSBzdGF0ZS5mcm96ZW4gPSBuZXcgSW50ZXJuYWxXZWFrTWFwKCk7XG5cdCAgICAgICAgcmV0dXJuIG5hdGl2ZUhhcyh0aGlzLCBrZXkpIHx8IHN0YXRlLmZyb3plbi5oYXMoa2V5KTtcblx0ICAgICAgfSByZXR1cm4gbmF0aXZlSGFzKHRoaXMsIGtleSk7XG5cdCAgICB9LFxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdCAgICAgIGlmIChpc09iamVjdChrZXkpICYmICFpc0V4dGVuc2libGUoa2V5KSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghc3RhdGUuZnJvemVuKSBzdGF0ZS5mcm96ZW4gPSBuZXcgSW50ZXJuYWxXZWFrTWFwKCk7XG5cdCAgICAgICAgcmV0dXJuIG5hdGl2ZUhhcyh0aGlzLCBrZXkpID8gbmF0aXZlR2V0KHRoaXMsIGtleSkgOiBzdGF0ZS5mcm96ZW4uZ2V0KGtleSk7XG5cdCAgICAgIH0gcmV0dXJuIG5hdGl2ZUdldCh0aGlzLCBrZXkpO1xuXHQgICAgfSxcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0ICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG5cdCAgICAgICAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFzdGF0ZS5mcm96ZW4pIHN0YXRlLmZyb3plbiA9IG5ldyBJbnRlcm5hbFdlYWtNYXAoKTtcblx0ICAgICAgICBuYXRpdmVIYXModGhpcywga2V5KSA/IG5hdGl2ZVNldCh0aGlzLCBrZXksIHZhbHVlKSA6IHN0YXRlLmZyb3plbi5zZXQoa2V5LCB2YWx1ZSk7XG5cdCAgICAgIH0gZWxzZSBuYXRpdmVTZXQodGhpcywga2V5LCB2YWx1ZSk7XG5cdCAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQvLyBDaGFrcmEgRWRnZSBmcm96ZW4ga2V5cyBmaXhcblx0fSBlbHNlIGlmIChoYXNNU0VkZ2VGcmVlemluZ0J1ZygpKSB7XG5cdCAgZGVmaW5lQnVpbHRJbnMoV2Vha01hcFByb3RvdHlwZSwge1xuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHQgICAgICB2YXIgYXJyYXlJbnRlZ3JpdHlMZXZlbDtcblx0ICAgICAgaWYgKGlzQXJyYXkoa2V5KSkge1xuXHQgICAgICAgIGlmIChpc0Zyb3plbihrZXkpKSBhcnJheUludGVncml0eUxldmVsID0gZnJlZXplO1xuXHQgICAgICAgIGVsc2UgaWYgKGlzU2VhbGVkKGtleSkpIGFycmF5SW50ZWdyaXR5TGV2ZWwgPSBzZWFsO1xuXHQgICAgICB9XG5cdCAgICAgIG5hdGl2ZVNldCh0aGlzLCBrZXksIHZhbHVlKTtcblx0ICAgICAgaWYgKGFycmF5SW50ZWdyaXR5TGV2ZWwpIGFycmF5SW50ZWdyaXR5TGV2ZWwoa2V5KTtcblx0ICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH1cblx0cmV0dXJuIGVzX3dlYWtNYXBfY29uc3RydWN0b3I7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX3dlYWtNYXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc193ZWFrTWFwICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfd2Vha01hcCkgcmV0dXJuIGVzX3dlYWtNYXA7XG5cdGhhc1JlcXVpcmVkRXNfd2Vha01hcCA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgcmVwbGFjZWQgdG8gbW9kdWxlIGJlbG93XG5cdHJlcXVpcmVFc193ZWFrTWFwX2NvbnN0cnVjdG9yKCk7XG5cdHJldHVybiBlc193ZWFrTWFwO1xufVxuXG52YXIgY29tcG9zaXRlS2V5O1xudmFyIGhhc1JlcXVpcmVkQ29tcG9zaXRlS2V5O1xuXG5mdW5jdGlvbiByZXF1aXJlQ29tcG9zaXRlS2V5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29tcG9zaXRlS2V5KSByZXR1cm4gY29tcG9zaXRlS2V5O1xuXHRoYXNSZXF1aXJlZENvbXBvc2l0ZUtleSA9IDE7XG5cdC8vIFRPRE86IGluIGNvcmUtanNANCwgbW92ZSAvbW9kdWxlcy8gZGVwZW5kZW5jaWVzIHRvIHB1YmxpYyBlbnRyaWVzIGZvciBiZXR0ZXIgb3B0aW1pemF0aW9uIGJ5IHRvb2xzIGxpa2UgYHByZXNldC1lbnZgXG5cdHJlcXVpcmVFc19tYXAoKTtcblx0cmVxdWlyZUVzX3dlYWtNYXAoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdHZhciBNYXAgPSBnZXRCdWlsdEluKCdNYXAnKTtcblx0dmFyIFdlYWtNYXAgPSBnZXRCdWlsdEluKCdXZWFrTWFwJyk7XG5cblx0dmFyIE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgLy8ga2V5c1xuXHQgIHRoaXMub2JqZWN0ID0gbnVsbDtcblx0ICB0aGlzLnN5bWJvbCA9IG51bGw7XG5cdCAgLy8gY2hpbGQgbm9kZXNcblx0ICB0aGlzLnByaW1pdGl2ZXMgPSBudWxsO1xuXHQgIHRoaXMub2JqZWN0c0J5SW5kZXggPSBjcmVhdGUobnVsbCk7XG5cdH07XG5cblx0Tm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgaW5pdGlhbGl6ZXIpIHtcblx0ICByZXR1cm4gdGhpc1trZXldIHx8ICh0aGlzW2tleV0gPSBpbml0aWFsaXplcigpKTtcblx0fTtcblxuXHROb2RlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGksIGl0LCBJU19PQkpFQ1QpIHtcblx0ICB2YXIgc3RvcmUgPSBJU19PQkpFQ1Rcblx0ICAgID8gdGhpcy5vYmplY3RzQnlJbmRleFtpXSB8fCAodGhpcy5vYmplY3RzQnlJbmRleFtpXSA9IG5ldyBXZWFrTWFwKCkpXG5cdCAgICA6IHRoaXMucHJpbWl0aXZlcyB8fCAodGhpcy5wcmltaXRpdmVzID0gbmV3IE1hcCgpKTtcblx0ICB2YXIgZW50cnkgPSBzdG9yZS5nZXQoaXQpO1xuXHQgIGlmICghZW50cnkpIHN0b3JlLnNldChpdCwgZW50cnkgPSBuZXcgTm9kZSgpKTtcblx0ICByZXR1cm4gZW50cnk7XG5cdH07XG5cblx0dmFyIHJvb3QgPSBuZXcgTm9kZSgpO1xuXG5cdGNvbXBvc2l0ZUtleSA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgYWN0aXZlID0gcm9vdDtcblx0ICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICB2YXIgaSwgaXQ7XG5cdCAgLy8gZm9yIHByZXZlbnQgbGVha2luZywgc3RhcnQgZnJvbSBvYmplY3RzXG5cdCAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoaXNPYmplY3QoaXQgPSBhcmd1bWVudHNbaV0pKSBhY3RpdmUgPSBhY3RpdmUubmV4dChpLCBpdCwgdHJ1ZSk7XG5cdCAgfVxuXHQgIGlmICh0aGlzID09PSAkT2JqZWN0ICYmIGFjdGl2ZSA9PT0gcm9vdCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0NvbXBvc2l0ZSBrZXlzIG11c3QgY29udGFpbiBhIG5vbi1wcmltaXRpdmUgY29tcG9uZW50Jyk7XG5cdCAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICBpZiAoIWlzT2JqZWN0KGl0ID0gYXJndW1lbnRzW2ldKSkgYWN0aXZlID0gYWN0aXZlLm5leHQoaSwgaXQsIGZhbHNlKTtcblx0ICB9IHJldHVybiBhY3RpdmU7XG5cdH07XG5cdHJldHVybiBjb21wb3NpdGVLZXk7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVLZXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfY29tcG9zaXRlS2V5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZUtleSkgcmV0dXJuIGVzbmV4dF9jb21wb3NpdGVLZXk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZUtleSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFwcGx5ID0gcmVxdWlyZUZ1bmN0aW9uQXBwbHkoKTtcblx0dmFyIGdldENvbXBvc2l0ZUtleU5vZGUgPSByZXF1aXJlQ29tcG9zaXRlS2V5KCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblxuXHR2YXIgaW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIGZyZWV6ZSA9IGdldEJ1aWx0SW4oJ09iamVjdCcsICdmcmVlemUnKTtcblx0ICByZXR1cm4gZnJlZXplID8gZnJlZXplKGNyZWF0ZShudWxsKSkgOiBjcmVhdGUobnVsbCk7XG5cdH07XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcmljaGVyLWtleXMvdHJlZS9tYXN0ZXIvY29tcG9zaXRlS2V5XG5cdCQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgY29tcG9zaXRlS2V5OiBmdW5jdGlvbiBjb21wb3NpdGVLZXkoKSB7XG5cdCAgICByZXR1cm4gYXBwbHkoZ2V0Q29tcG9zaXRlS2V5Tm9kZSwgJE9iamVjdCwgYXJndW1lbnRzKS5nZXQoJ29iamVjdCcsIGluaXRpYWxpemVyKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X2NvbXBvc2l0ZUtleTtcbn1cblxucmVxdWlyZUVzbmV4dF9jb21wb3NpdGVLZXkoKTtcblxudmFyIGVzbmV4dF9jb21wb3NpdGVTeW1ib2wgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZVN5bWJvbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9jb21wb3NpdGVTeW1ib2wgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlU3ltYm9sKSByZXR1cm4gZXNuZXh0X2NvbXBvc2l0ZVN5bWJvbDtcblx0aGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlU3ltYm9sID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2V0Q29tcG9zaXRlS2V5Tm9kZSA9IHJlcXVpcmVDb21wb3NpdGVLZXkoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgYXBwbHkgPSByZXF1aXJlRnVuY3Rpb25BcHBseSgpO1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXJpY2hlci1rZXlzL3RyZWUvbWFzdGVyL2NvbXBvc2l0ZUtleVxuXHQkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGNvbXBvc2l0ZVN5bWJvbDogZnVuY3Rpb24gY29tcG9zaXRlU3ltYm9sKCkge1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PSAnc3RyaW5nJykgcmV0dXJuIGdldEJ1aWx0SW4oJ1N5bWJvbCcpWydmb3InXShhcmd1bWVudHNbMF0pO1xuXHQgICAgcmV0dXJuIGFwcGx5KGdldENvbXBvc2l0ZUtleU5vZGUsIG51bGwsIGFyZ3VtZW50cykuZ2V0KCdzeW1ib2wnLCBnZXRCdWlsdEluKCdTeW1ib2wnKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9jb21wb3NpdGVTeW1ib2w7XG59XG5cbnJlcXVpcmVFc25leHRfY29tcG9zaXRlU3ltYm9sKCk7XG5cbnZhciBlc25leHRfbWFwX2RlbGV0ZUFsbCA9IHt9O1xuXG52YXIgbWFwSGVscGVycztcbnZhciBoYXNSZXF1aXJlZE1hcEhlbHBlcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXBIZWxwZXJzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWFwSGVscGVycykgcmV0dXJuIG1hcEhlbHBlcnM7XG5cdGhhc1JlcXVpcmVkTWFwSGVscGVycyA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hcCAtLSBzYWZlXG5cdHZhciBNYXBQcm90b3R5cGUgPSBNYXAucHJvdG90eXBlO1xuXG5cdG1hcEhlbHBlcnMgPSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hcCAtLSBzYWZlXG5cdCAgTWFwOiBNYXAsXG5cdCAgc2V0OiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuc2V0KSxcblx0ICBnZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5nZXQpLFxuXHQgIGhhczogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmhhcyksXG5cdCAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGVbJ2RlbGV0ZSddKSxcblx0ICBwcm90bzogTWFwUHJvdG90eXBlXG5cdH07XG5cdHJldHVybiBtYXBIZWxwZXJzO1xufVxuXG52YXIgYU1hcDtcbnZhciBoYXNSZXF1aXJlZEFNYXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBTWFwICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQU1hcCkgcmV0dXJuIGFNYXA7XG5cdGhhc1JlcXVpcmVkQU1hcCA9IDE7XG5cdHZhciBoYXMgPSByZXF1aXJlTWFwSGVscGVycygpLmhhcztcblxuXHQvLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW01hcERhdGFdXSlcblx0YU1hcCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGhhcyhpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHRyZXR1cm4gYU1hcDtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9kZWxldGVBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2RlbGV0ZUFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZGVsZXRlQWxsKSByZXR1cm4gZXNuZXh0X21hcF9kZWxldGVBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9kZWxldGVBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIHJlbW92ZSA9IHJlcXVpcmVNYXBIZWxwZXJzKCkucmVtb3ZlO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmRlbGV0ZUFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGVsZXRlQWxsOiBmdW5jdGlvbiBkZWxldGVBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBjb2xsZWN0aW9uID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBhbGxEZWxldGVkID0gdHJ1ZTtcblx0ICAgIHZhciB3YXNEZWxldGVkO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICB3YXNEZWxldGVkID0gcmVtb3ZlKGNvbGxlY3Rpb24sIGFyZ3VtZW50c1trXSk7XG5cdCAgICAgIGFsbERlbGV0ZWQgPSBhbGxEZWxldGVkICYmIHdhc0RlbGV0ZWQ7XG5cdCAgICB9IHJldHVybiAhIWFsbERlbGV0ZWQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZGVsZXRlQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9kZWxldGVBbGwoKTtcblxudmFyIGVzbmV4dF9tYXBfZXZlcnkgPSB7fTtcblxudmFyIGl0ZXJhdGVTaW1wbGU7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRlU2ltcGxlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0ZVNpbXBsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdGVTaW1wbGUpIHJldHVybiBpdGVyYXRlU2ltcGxlO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdGVTaW1wbGUgPSAxO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblxuXHRpdGVyYXRlU2ltcGxlID0gZnVuY3Rpb24gKHJlY29yZCwgZm4sIElURVJBVE9SX0lOU1RFQURfT0ZfUkVDT1JEKSB7XG5cdCAgdmFyIGl0ZXJhdG9yID0gSVRFUkFUT1JfSU5TVEVBRF9PRl9SRUNPUkQgPyByZWNvcmQgOiByZWNvcmQuaXRlcmF0b3I7XG5cdCAgdmFyIG5leHQgPSByZWNvcmQubmV4dDtcblx0ICB2YXIgc3RlcCwgcmVzdWx0O1xuXHQgIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuXHQgICAgcmVzdWx0ID0gZm4oc3RlcC52YWx1ZSk7XG5cdCAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gaXRlcmF0ZVNpbXBsZTtcbn1cblxudmFyIG1hcEl0ZXJhdGU7XG52YXIgaGFzUmVxdWlyZWRNYXBJdGVyYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlTWFwSXRlcmF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hcEl0ZXJhdGUpIHJldHVybiBtYXBJdGVyYXRlO1xuXHRoYXNSZXF1aXJlZE1hcEl0ZXJhdGUgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBNYXBQcm90b3R5cGUgPSBNYXBIZWxwZXJzLnByb3RvO1xuXHR2YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5mb3JFYWNoKTtcblx0dmFyIGVudHJpZXMgPSB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuZW50cmllcyk7XG5cdHZhciBuZXh0ID0gZW50cmllcyhuZXcgTWFwKCkpLm5leHQ7XG5cblx0bWFwSXRlcmF0ZSA9IGZ1bmN0aW9uIChtYXAsIGZuLCBpbnRlcnJ1cHRpYmxlKSB7XG5cdCAgcmV0dXJuIGludGVycnVwdGlibGUgPyBpdGVyYXRlU2ltcGxlKHsgaXRlcmF0b3I6IGVudHJpZXMobWFwKSwgbmV4dDogbmV4dCB9LCBmdW5jdGlvbiAoZW50cnkpIHtcblx0ICAgIHJldHVybiBmbihlbnRyeVsxXSwgZW50cnlbMF0pO1xuXHQgIH0pIDogZm9yRWFjaChtYXAsIGZuKTtcblx0fTtcblx0cmV0dXJuIG1hcEl0ZXJhdGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZXZlcnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2V2ZXJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ldmVyeSkgcmV0dXJuIGVzbmV4dF9tYXBfZXZlcnk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ldmVyeSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICByZXR1cm4gaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmICghYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKSByZXR1cm4gZmFsc2U7XG5cdCAgICB9LCB0cnVlKSAhPT0gZmFsc2U7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZXZlcnk7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2V2ZXJ5KCk7XG5cbnZhciBlc25leHRfbWFwX2ZpbHRlciA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbHRlcjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZmlsdGVyICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maWx0ZXIpIHJldHVybiBlc25leHRfbWFwX2ZpbHRlcjtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbHRlciA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciBuZXdNYXAgPSBuZXcgTWFwKCk7XG5cdCAgICBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSkgc2V0KG5ld01hcCwga2V5LCB2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdNYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZmlsdGVyO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9maWx0ZXIoKTtcblxudmFyIGVzbmV4dF9tYXBfZmluZCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2ZpbmQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmQpIHJldHVybiBlc25leHRfbWFwX2ZpbmQ7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciByZXN1bHQgPSBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSkgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG5cdCAgICB9LCB0cnVlKTtcblx0ICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnZhbHVlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2ZpbmQ7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2ZpbmQoKTtcblxudmFyIGVzbmV4dF9tYXBfZmluZEtleSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmRLZXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2ZpbmRLZXkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2ZpbmRLZXkpIHJldHVybiBlc25leHRfbWFwX2ZpbmRLZXk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kS2V5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmZpbmRLZXlgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZpbmRLZXk6IGZ1bmN0aW9uIGZpbmRLZXkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciByZXN1bHQgPSBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSkgcmV0dXJuIHsga2V5OiBrZXkgfTtcblx0ICAgIH0sIHRydWUpO1xuXHQgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQua2V5O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2ZpbmRLZXk7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2ZpbmRLZXkoKTtcblxudmFyIGVzbmV4dF9tYXBfZnJvbSA9IHt9O1xuXG52YXIgY29sbGVjdGlvbkZyb207XG52YXIgaGFzUmVxdWlyZWRDb2xsZWN0aW9uRnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUNvbGxlY3Rpb25Gcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29sbGVjdGlvbkZyb20pIHJldHVybiBjb2xsZWN0aW9uRnJvbTtcblx0aGFzUmVxdWlyZWRDb2xsZWN0aW9uRnJvbSA9IDE7XG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblxuXHRjb2xsZWN0aW9uRnJvbSA9IGZ1bmN0aW9uIChDLCBhZGRlciwgRU5UUlkpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIE8gPSB0b09iamVjdChzb3VyY2UpO1xuXHQgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICB2YXIgbWFwRm4gPSBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXHQgICAgdmFyIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBtYXBwaW5nID8gYmluZChtYXBGbiwgbGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCkgOiB1bmRlZmluZWQ7XG5cdCAgICB2YXIgcmVzdWx0ID0gbmV3IEMoKTtcblx0ICAgIHZhciBuID0gMDtcblx0ICAgIGl0ZXJhdGUoTywgZnVuY3Rpb24gKG5leHRJdGVtKSB7XG5cdCAgICAgIHZhciBlbnRyeSA9IG1hcHBpbmcgPyBib3VuZEZ1bmN0aW9uKG5leHRJdGVtLCBuKyspIDogbmV4dEl0ZW07XG5cdCAgICAgIGlmIChFTlRSWSkgYWRkZXIocmVzdWx0LCBhbk9iamVjdChlbnRyeSlbMF0sIGVudHJ5WzFdKTtcblx0ICAgICAgZWxzZSBhZGRlcihyZXN1bHQsIGVudHJ5KTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gY29sbGVjdGlvbkZyb207XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZnJvbSkgcmV0dXJuIGVzbmV4dF9tYXBfZnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2Zyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25Gcm9tID0gcmVxdWlyZUNvbGxlY3Rpb25Gcm9tKCk7XG5cblx0Ly8gYE1hcC5mcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cblx0JCh7IHRhcmdldDogJ01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbTogY3JlYXRlQ29sbGVjdGlvbkZyb20oTWFwSGVscGVycy5NYXAsIE1hcEhlbHBlcnMuc2V0LCB0cnVlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZnJvbTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZnJvbSgpO1xuXG52YXIgZXNuZXh0X21hcF9ncm91cEJ5ID0ge307XG5cbnZhciBlc19tYXBfZ3JvdXBCeSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc19tYXBfZ3JvdXBCeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX21hcF9ncm91cEJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfbWFwX2dyb3VwQnkpIHJldHVybiBlc19tYXBfZ3JvdXBCeTtcblx0aGFzUmVxdWlyZWRFc19tYXBfZ3JvdXBCeSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIElTX1BVUkUgPSByZXF1aXJlSXNQdXJlKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xuXHR2YXIgZ2V0ID0gTWFwSGVscGVycy5nZXQ7XG5cdHZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHR2YXIgRE9FU19OT1RfV09SS19XSVRIX1BSSU1JVElWRVMgPSBJU19QVVJFIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gTWFwLmdyb3VwQnkoJ2FiJywgZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gaXQ7XG5cdCAgfSkuZ2V0KCdhJykubGVuZ3RoICE9PSAxO1xuXHR9KTtcblxuXHQvLyBgTWFwLmdyb3VwQnlgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5ncm91cGJ5XG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfHwgRE9FU19OT1RfV09SS19XSVRIX1BSSU1JVElWRVMgfSwge1xuXHQgIGdyb3VwQnk6IGZ1bmN0aW9uIGdyb3VwQnkoaXRlbXMsIGNhbGxiYWNrZm4pIHtcblx0ICAgIHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXRlbXMpO1xuXHQgICAgYUNhbGxhYmxlKGNhbGxiYWNrZm4pO1xuXHQgICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcblx0ICAgIHZhciBrID0gMDtcblx0ICAgIGl0ZXJhdGUoaXRlbXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICB2YXIga2V5ID0gY2FsbGJhY2tmbih2YWx1ZSwgaysrKTtcblx0ICAgICAgaWYgKCFoYXMobWFwLCBrZXkpKSBzZXQobWFwLCBrZXksIFt2YWx1ZV0pO1xuXHQgICAgICBlbHNlIHB1c2goZ2V0KG1hcCwga2V5KSwgdmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc19tYXBfZ3JvdXBCeTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ncm91cEJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9ncm91cEJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9ncm91cEJ5KSByZXR1cm4gZXNuZXh0X21hcF9ncm91cEJ5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZ3JvdXBCeSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHJlcXVpcmVFc19tYXBfZ3JvdXBCeSgpO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9ncm91cEJ5O1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9ncm91cEJ5KCk7XG5cbnZhciBlc25leHRfbWFwX2luY2x1ZGVzID0ge307XG5cbnZhciBzYW1lVmFsdWVaZXJvO1xudmFyIGhhc1JlcXVpcmVkU2FtZVZhbHVlWmVybztcblxuZnVuY3Rpb24gcmVxdWlyZVNhbWVWYWx1ZVplcm8gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTYW1lVmFsdWVaZXJvKSByZXR1cm4gc2FtZVZhbHVlWmVybztcblx0aGFzUmVxdWlyZWRTYW1lVmFsdWVaZXJvID0gMTtcblx0Ly8gYFNhbWVWYWx1ZVplcm9gIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZXplcm9cblx0c2FtZVZhbHVlWmVybyA9IGZ1bmN0aW9uICh4LCB5KSB7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICByZXR1cm4geCA9PT0geSB8fCB4ICE9PSB4ICYmIHkgIT09IHk7XG5cdH07XG5cdHJldHVybiBzYW1lVmFsdWVaZXJvO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2luY2x1ZGVzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9pbmNsdWRlcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfaW5jbHVkZXMpIHJldHVybiBlc25leHRfbWFwX2luY2x1ZGVzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfaW5jbHVkZXMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBzYW1lVmFsdWVaZXJvID0gcmVxdWlyZVNhbWVWYWx1ZVplcm8oKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50KSB7XG5cdCAgICByZXR1cm4gaXRlcmF0ZShhTWFwKHRoaXMpLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKHNhbWVWYWx1ZVplcm8odmFsdWUsIHNlYXJjaEVsZW1lbnQpKSByZXR1cm4gdHJ1ZTtcblx0ICAgIH0sIHRydWUpID09PSB0cnVlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2luY2x1ZGVzO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9pbmNsdWRlcygpO1xuXG52YXIgZXNuZXh0X21hcF9rZXlCeSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2tleUJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9rZXlCeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5QnkpIHJldHVybiBlc25leHRfbWFwX2tleUJ5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5QnkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIE1hcCA9IHJlcXVpcmVNYXBIZWxwZXJzKCkuTWFwO1xuXG5cdC8vIGBNYXAua2V5QnlgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAga2V5Qnk6IGZ1bmN0aW9uIGtleUJ5KGl0ZXJhYmxlLCBrZXlEZXJpdmF0aXZlKSB7XG5cdCAgICB2YXIgQyA9IGlzQ2FsbGFibGUodGhpcykgPyB0aGlzIDogTWFwO1xuXHQgICAgdmFyIG5ld01hcCA9IG5ldyBDKCk7XG5cdCAgICBhQ2FsbGFibGUoa2V5RGVyaXZhdGl2ZSk7XG5cdCAgICB2YXIgc2V0dGVyID0gYUNhbGxhYmxlKG5ld01hcC5zZXQpO1xuXHQgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0ICAgICAgY2FsbChzZXR0ZXIsIG5ld01hcCwga2V5RGVyaXZhdGl2ZShlbGVtZW50KSwgZWxlbWVudCk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdNYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfa2V5Qnk7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2tleUJ5KCk7XG5cbnZhciBlc25leHRfbWFwX2tleU9mID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5T2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2tleU9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlPZikgcmV0dXJuIGVzbmV4dF9tYXBfa2V5T2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlPZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUua2V5T2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGtleU9mOiBmdW5jdGlvbiBrZXlPZihzZWFyY2hFbGVtZW50KSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gaXRlcmF0ZShhTWFwKHRoaXMpLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAodmFsdWUgPT09IHNlYXJjaEVsZW1lbnQpIHJldHVybiB7IGtleToga2V5IH07XG5cdCAgICB9LCB0cnVlKTtcblx0ICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LmtleTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9rZXlPZjtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfa2V5T2YoKTtcblxudmFyIGVzbmV4dF9tYXBfbWFwS2V5cyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX21hcEtleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX21hcEtleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX21hcEtleXMpIHJldHVybiBlc25leHRfbWFwX21hcEtleXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBLZXlzID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUubWFwS2V5c2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgbWFwS2V5czogZnVuY3Rpb24gbWFwS2V5cyhjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIG5ld01hcCA9IG5ldyBNYXAoKTtcblx0ICAgIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBzZXQobmV3TWFwLCBib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCksIHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld01hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9tYXBLZXlzO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9tYXBLZXlzKCk7XG5cbnZhciBlc25leHRfbWFwX21hcFZhbHVlcyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX21hcFZhbHVlcztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfbWFwVmFsdWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBWYWx1ZXMpIHJldHVybiBlc25leHRfbWFwX21hcFZhbHVlcztcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX21hcFZhbHVlcyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLm1hcFZhbHVlc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgbWFwVmFsdWVzOiBmdW5jdGlvbiBtYXBWYWx1ZXMoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciBuZXdNYXAgPSBuZXcgTWFwKCk7XG5cdCAgICBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgc2V0KG5ld01hcCwga2V5LCBib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3TWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX21hcFZhbHVlcztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfbWFwVmFsdWVzKCk7XG5cbnZhciBlc25leHRfbWFwX21lcmdlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWVyZ2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX21lcmdlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tZXJnZSkgcmV0dXJuIGVzbmV4dF9tYXBfbWVyZ2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tZXJnZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBzZXQgPSByZXF1aXJlTWFwSGVscGVycygpLnNldDtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5tZXJnZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG5cdCAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKGl0ZXJhYmxlIC8qIC4uLml0ZXJhYmxlcyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIHZhciBpID0gMDtcblx0ICAgIHdoaWxlIChpIDwgYXJndW1lbnRzTGVuZ3RoKSB7XG5cdCAgICAgIGl0ZXJhdGUoYXJndW1lbnRzW2krK10sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdCAgICAgICAgc2V0KG1hcCwga2V5LCB2YWx1ZSk7XG5cdCAgICAgIH0sIHsgQVNfRU5UUklFUzogdHJ1ZSB9KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBtYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfbWVyZ2U7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX21lcmdlKCk7XG5cbnZhciBlc25leHRfbWFwX29mID0ge307XG5cbnZhciBjb2xsZWN0aW9uT2Y7XG52YXIgaGFzUmVxdWlyZWRDb2xsZWN0aW9uT2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb2xsZWN0aW9uT2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb2xsZWN0aW9uT2YpIHJldHVybiBjb2xsZWN0aW9uT2Y7XG5cdGhhc1JlcXVpcmVkQ29sbGVjdGlvbk9mID0gMTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xuXHRjb2xsZWN0aW9uT2YgPSBmdW5jdGlvbiAoQywgYWRkZXIsIEVOVFJZKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIG9mKCkge1xuXHQgICAgdmFyIHJlc3VsdCA9IG5ldyBDKCk7XG5cdCAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcblx0ICAgICAgdmFyIGVudHJ5ID0gYXJndW1lbnRzW2luZGV4XTtcblx0ICAgICAgaWYgKEVOVFJZKSBhZGRlcihyZXN1bHQsIGFuT2JqZWN0KGVudHJ5KVswXSwgZW50cnlbMV0pO1xuXHQgICAgICBlbHNlIGFkZGVyKHJlc3VsdCwgZW50cnkpO1xuXHQgICAgfSByZXR1cm4gcmVzdWx0O1xuXHQgIH07XG5cdH07XG5cdHJldHVybiBjb2xsZWN0aW9uT2Y7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9vZikgcmV0dXJuIGVzbmV4dF9tYXBfb2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9vZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlTWFwSGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbk9mID0gcmVxdWlyZUNvbGxlY3Rpb25PZigpO1xuXG5cdC8vIGBNYXAub2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2Zcblx0JCh7IHRhcmdldDogJ01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgb2Y6IGNyZWF0ZUNvbGxlY3Rpb25PZihNYXBIZWxwZXJzLk1hcCwgTWFwSGVscGVycy5zZXQsIHRydWUpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9vZjtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfb2YoKTtcblxudmFyIGVzbmV4dF9tYXBfcmVkdWNlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfcmVkdWNlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9yZWR1Y2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX3JlZHVjZSkgcmV0dXJuIGVzbmV4dF9tYXBfcmVkdWNlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfcmVkdWNlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIG5vSW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyO1xuXHQgICAgdmFyIGFjY3VtdWxhdG9yID0gbm9Jbml0aWFsID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuXHQgICAgYUNhbGxhYmxlKGNhbGxiYWNrZm4pO1xuXHQgICAgaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmIChub0luaXRpYWwpIHtcblx0ICAgICAgICBub0luaXRpYWwgPSBmYWxzZTtcblx0ICAgICAgICBhY2N1bXVsYXRvciA9IHZhbHVlO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGFjY3VtdWxhdG9yID0gY2FsbGJhY2tmbihhY2N1bXVsYXRvciwgdmFsdWUsIGtleSwgbWFwKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBpZiAobm9Jbml0aWFsKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IG1hcCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcblx0ICAgIHJldHVybiBhY2N1bXVsYXRvcjtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9yZWR1Y2U7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX3JlZHVjZSgpO1xuXG52YXIgZXNuZXh0X21hcF9zb21lID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfc29tZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfc29tZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfc29tZSkgcmV0dXJuIGVzbmV4dF9tYXBfc29tZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX3NvbWUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgcmV0dXJuIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKSByZXR1cm4gdHJ1ZTtcblx0ICAgIH0sIHRydWUpID09PSB0cnVlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX3NvbWU7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX3NvbWUoKTtcblxudmFyIGVzbmV4dF9tYXBfdXBkYXRlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfdXBkYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF91cGRhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX3VwZGF0ZSkgcmV0dXJuIGVzbmV4dF9tYXBfdXBkYXRlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfdXBkYXRlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0dmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xuXHR2YXIgaGFzID0gTWFwSGVscGVycy5oYXM7XG5cdHZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS51cGRhdGVgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGtleSwgY2FsbGJhY2sgLyogLCB0aHVuayAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0ICAgIGFDYWxsYWJsZShjYWxsYmFjayk7XG5cdCAgICB2YXIgaXNQcmVzZW50SW5NYXAgPSBoYXMobWFwLCBrZXkpO1xuXHQgICAgaWYgKCFpc1ByZXNlbnRJbk1hcCAmJiBsZW5ndGggPCAzKSB7XG5cdCAgICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdVcGRhdGluZyBhYnNlbnQgdmFsdWUnKTtcblx0ICAgIH1cblx0ICAgIHZhciB2YWx1ZSA9IGlzUHJlc2VudEluTWFwID8gZ2V0KG1hcCwga2V5KSA6IGFDYWxsYWJsZShsZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKShrZXksIG1hcCk7XG5cdCAgICBzZXQobWFwLCBrZXksIGNhbGxiYWNrKHZhbHVlLCBrZXksIG1hcCkpO1xuXHQgICAgcmV0dXJuIG1hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF91cGRhdGU7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX3VwZGF0ZSgpO1xuXG52YXIgZXNuZXh0X21hdGhfY2xhbXAgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfY2xhbXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9jbGFtcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2NsYW1wKSByZXR1cm4gZXNuZXh0X21hdGhfY2xhbXA7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfY2xhbXAgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0dmFyIG1pbiA9IE1hdGgubWluO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXg7XG5cblx0Ly8gYE1hdGguY2xhbXBgIG1ldGhvZFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBjbGFtcDogZnVuY3Rpb24gY2xhbXAoeCwgbG93ZXIsIHVwcGVyKSB7XG5cdCAgICByZXR1cm4gbWluKHVwcGVyLCBtYXgobG93ZXIsIHgpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfY2xhbXA7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9jbGFtcCgpO1xuXG52YXIgZXNuZXh0X21hdGhfZGVnUGVyUmFkID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ1BlclJhZDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2RlZ1BlclJhZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ1BlclJhZCkgcmV0dXJuIGVzbmV4dF9tYXRoX2RlZ1BlclJhZDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdQZXJSYWQgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguREVHX1BFUl9SQURgIGNvbnN0YW50XG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBub25Db25maWd1cmFibGU6IHRydWUsIG5vbldyaXRhYmxlOiB0cnVlIH0sIHtcblx0ICBERUdfUEVSX1JBRDogTWF0aC5QSSAvIDE4MFxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2RlZ1BlclJhZDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2RlZ1BlclJhZCgpO1xuXG52YXIgZXNuZXh0X21hdGhfZGVncmVlcyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdyZWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfZGVncmVlcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ3JlZXMpIHJldHVybiBlc25leHRfbWF0aF9kZWdyZWVzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2RlZ3JlZXMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0dmFyIFJBRF9QRVJfREVHID0gMTgwIC8gTWF0aC5QSTtcblxuXHQvLyBgTWF0aC5kZWdyZWVzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGVncmVlczogZnVuY3Rpb24gZGVncmVlcyhyYWRpYW5zKSB7XG5cdCAgICByZXR1cm4gcmFkaWFucyAqIFJBRF9QRVJfREVHO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9kZWdyZWVzO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfZGVncmVlcygpO1xuXG52YXIgZXNuZXh0X21hdGhfZnNjYWxlID0ge307XG5cbnZhciBtYXRoU2NhbGU7XG52YXIgaGFzUmVxdWlyZWRNYXRoU2NhbGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoU2NhbGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoU2NhbGUpIHJldHVybiBtYXRoU2NhbGU7XG5cdGhhc1JlcXVpcmVkTWF0aFNjYWxlID0gMTtcblx0Ly8gYE1hdGguc2NhbGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdG1hdGhTY2FsZSA9IGZ1bmN0aW9uIHNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkge1xuXHQgIHZhciBueCA9ICt4O1xuXHQgIHZhciBuSW5Mb3cgPSAraW5Mb3c7XG5cdCAgdmFyIG5JbkhpZ2ggPSAraW5IaWdoO1xuXHQgIHZhciBuT3V0TG93ID0gK291dExvdztcblx0ICB2YXIgbk91dEhpZ2ggPSArb3V0SGlnaDtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIGlmIChueCAhPT0gbnggfHwgbkluTG93ICE9PSBuSW5Mb3cgfHwgbkluSGlnaCAhPT0gbkluSGlnaCB8fCBuT3V0TG93ICE9PSBuT3V0TG93IHx8IG5PdXRIaWdoICE9PSBuT3V0SGlnaCkgcmV0dXJuIE5hTjtcblx0ICBpZiAobnggPT09IEluZmluaXR5IHx8IG54ID09PSAtSW5maW5pdHkpIHJldHVybiBueDtcblx0ICByZXR1cm4gKG54IC0gbkluTG93KSAqIChuT3V0SGlnaCAtIG5PdXRMb3cpIC8gKG5JbkhpZ2ggLSBuSW5Mb3cpICsgbk91dExvdztcblx0fTtcblx0cmV0dXJuIG1hdGhTY2FsZTtcbn1cblxudmFyIG1hdGhTaWduO1xudmFyIGhhc1JlcXVpcmVkTWF0aFNpZ247XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoU2lnbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hdGhTaWduKSByZXR1cm4gbWF0aFNpZ247XG5cdGhhc1JlcXVpcmVkTWF0aFNpZ24gPSAxO1xuXHQvLyBgTWF0aC5zaWduYCBtZXRob2QgaW1wbGVtZW50YXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnNpZ25cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtc2lnbiAtLSBzYWZlXG5cdG1hdGhTaWduID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCkge1xuXHQgIHZhciBuID0gK3g7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICByZXR1cm4gbiA9PT0gMCB8fCBuICE9PSBuID8gbiA6IG4gPCAwID8gLTEgOiAxO1xuXHR9O1xuXHRyZXR1cm4gbWF0aFNpZ247XG59XG5cbnZhciBtYXRoUm91bmRUaWVzVG9FdmVuO1xudmFyIGhhc1JlcXVpcmVkTWF0aFJvdW5kVGllc1RvRXZlbjtcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhSb3VuZFRpZXNUb0V2ZW4gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoUm91bmRUaWVzVG9FdmVuKSByZXR1cm4gbWF0aFJvdW5kVGllc1RvRXZlbjtcblx0aGFzUmVxdWlyZWRNYXRoUm91bmRUaWVzVG9FdmVuID0gMTtcblx0dmFyIEVQU0lMT04gPSAyLjIyMDQ0NjA0OTI1MDMxM2UtMTY7IC8vIE51bWJlci5FUFNJTE9OXG5cdHZhciBJTlZFUlNFX0VQU0lMT04gPSAxIC8gRVBTSUxPTjtcblxuXHRtYXRoUm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcblx0ICByZXR1cm4gbiArIElOVkVSU0VfRVBTSUxPTiAtIElOVkVSU0VfRVBTSUxPTjtcblx0fTtcblx0cmV0dXJuIG1hdGhSb3VuZFRpZXNUb0V2ZW47XG59XG5cbnZhciBtYXRoRmxvYXRSb3VuZDtcbnZhciBoYXNSZXF1aXJlZE1hdGhGbG9hdFJvdW5kO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aEZsb2F0Um91bmQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoRmxvYXRSb3VuZCkgcmV0dXJuIG1hdGhGbG9hdFJvdW5kO1xuXHRoYXNSZXF1aXJlZE1hdGhGbG9hdFJvdW5kID0gMTtcblx0dmFyIHNpZ24gPSByZXF1aXJlTWF0aFNpZ24oKTtcblx0dmFyIHJvdW5kVGllc1RvRXZlbiA9IHJlcXVpcmVNYXRoUm91bmRUaWVzVG9FdmVuKCk7XG5cblx0dmFyIGFicyA9IE1hdGguYWJzO1xuXG5cdHZhciBFUFNJTE9OID0gMi4yMjA0NDYwNDkyNTAzMTNlLTE2OyAvLyBOdW1iZXIuRVBTSUxPTlxuXG5cdG1hdGhGbG9hdFJvdW5kID0gZnVuY3Rpb24gKHgsIEZMT0FUX0VQU0lMT04sIEZMT0FUX01BWF9WQUxVRSwgRkxPQVRfTUlOX1ZBTFVFKSB7XG5cdCAgdmFyIG4gPSAreDtcblx0ICB2YXIgYWJzb2x1dGUgPSBhYnMobik7XG5cdCAgdmFyIHMgPSBzaWduKG4pO1xuXHQgIGlmIChhYnNvbHV0ZSA8IEZMT0FUX01JTl9WQUxVRSkgcmV0dXJuIHMgKiByb3VuZFRpZXNUb0V2ZW4oYWJzb2x1dGUgLyBGTE9BVF9NSU5fVkFMVUUgLyBGTE9BVF9FUFNJTE9OKSAqIEZMT0FUX01JTl9WQUxVRSAqIEZMT0FUX0VQU0lMT047XG5cdCAgdmFyIGEgPSAoMSArIEZMT0FUX0VQU0lMT04gLyBFUFNJTE9OKSAqIGFic29sdXRlO1xuXHQgIHZhciByZXN1bHQgPSBhIC0gKGEgLSBhYnNvbHV0ZSk7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICBpZiAocmVzdWx0ID4gRkxPQVRfTUFYX1ZBTFVFIHx8IHJlc3VsdCAhPT0gcmVzdWx0KSByZXR1cm4gcyAqIEluZmluaXR5O1xuXHQgIHJldHVybiBzICogcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gbWF0aEZsb2F0Um91bmQ7XG59XG5cbnZhciBtYXRoRnJvdW5kO1xudmFyIGhhc1JlcXVpcmVkTWF0aEZyb3VuZDtcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhGcm91bmQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoRnJvdW5kKSByZXR1cm4gbWF0aEZyb3VuZDtcblx0aGFzUmVxdWlyZWRNYXRoRnJvdW5kID0gMTtcblx0dmFyIGZsb2F0Um91bmQgPSByZXF1aXJlTWF0aEZsb2F0Um91bmQoKTtcblxuXHR2YXIgRkxPQVQzMl9FUFNJTE9OID0gMS4xOTIwOTI4OTU1MDc4MTI1ZS03OyAvLyAyICoqIC0yMztcblx0dmFyIEZMT0FUMzJfTUFYX1ZBTFVFID0gMy40MDI4MjM0NjYzODUyODg2ZSszODsgLy8gMiAqKiAxMjggLSAyICoqIDEwNFxuXHR2YXIgRkxPQVQzMl9NSU5fVkFMVUUgPSAxLjE3NTQ5NDM1MDgyMjI4NzVlLTM4OyAvLyAyICoqIC0xMjY7XG5cblx0Ly8gYE1hdGguZnJvdW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLmZyb3VuZFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC1mcm91bmQgLS0gc2FmZVxuXHRtYXRoRnJvdW5kID0gTWF0aC5mcm91bmQgfHwgZnVuY3Rpb24gZnJvdW5kKHgpIHtcblx0ICByZXR1cm4gZmxvYXRSb3VuZCh4LCBGTE9BVDMyX0VQU0lMT04sIEZMT0FUMzJfTUFYX1ZBTFVFLCBGTE9BVDMyX01JTl9WQUxVRSk7XG5cdH07XG5cdHJldHVybiBtYXRoRnJvdW5kO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9mc2NhbGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9mc2NhbGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9mc2NhbGUpIHJldHVybiBlc25leHRfbWF0aF9mc2NhbGU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZnNjYWxlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdHZhciBzY2FsZSA9IHJlcXVpcmVNYXRoU2NhbGUoKTtcblx0dmFyIGZyb3VuZCA9IHJlcXVpcmVNYXRoRnJvdW5kKCk7XG5cblx0Ly8gYE1hdGguZnNjYWxlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnNjYWxlOiBmdW5jdGlvbiBmc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG5cdCAgICByZXR1cm4gZnJvdW5kKHNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9mc2NhbGU7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9mc2NhbGUoKTtcblxudmFyIGVzbmV4dF9tYXRoX2lhZGRoID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lhZGRoO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfaWFkZGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pYWRkaCkgcmV0dXJuIGVzbmV4dF9tYXRoX2lhZGRoO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lhZGRoID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLmlhZGRoYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSkge1xuXHQgICAgdmFyICR4MCA9IHgwID4+PiAwO1xuXHQgICAgdmFyICR4MSA9IHgxID4+PiAwO1xuXHQgICAgdmFyICR5MCA9IHkwID4+PiAwO1xuXHQgICAgcmV0dXJuICR4MSArICh5MSA+Pj4gMCkgKyAoKCR4MCAmICR5MCB8ICgkeDAgfCAkeTApICYgfigkeDAgKyAkeTAgPj4+IDApKSA+Pj4gMzEpIHwgMDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfaWFkZGg7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9pYWRkaCgpO1xuXG52YXIgZXNuZXh0X21hdGhfaW11bGggPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaW11bGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9pbXVsaCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ltdWxoKSByZXR1cm4gZXNuZXh0X21hdGhfaW11bGg7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaW11bGggPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguaW11bGhgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpIHtcblx0ICAgIHZhciBVSU5UMTYgPSAweEZGRkY7XG5cdCAgICB2YXIgJHUgPSArdTtcblx0ICAgIHZhciAkdiA9ICt2O1xuXHQgICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG5cdCAgICB2YXIgdjAgPSAkdiAmIFVJTlQxNjtcblx0ICAgIHZhciB1MSA9ICR1ID4+IDE2O1xuXHQgICAgdmFyIHYxID0gJHYgPj4gMTY7XG5cdCAgICB2YXIgdCA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG5cdCAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4gMTYpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9pbXVsaDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2ltdWxoKCk7XG5cbnZhciBlc25leHRfbWF0aF9pc3ViaCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pc3ViaDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2lzdWJoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaXN1YmgpIHJldHVybiBlc25leHRfbWF0aF9pc3ViaDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9pc3ViaCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5pc3ViaGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpIHtcblx0ICAgIHZhciAkeDAgPSB4MCA+Pj4gMDtcblx0ICAgIHZhciAkeDEgPSB4MSA+Pj4gMDtcblx0ICAgIHZhciAkeTAgPSB5MCA+Pj4gMDtcblx0ICAgIHJldHVybiAkeDEgLSAoeTEgPj4+IDApIC0gKCh+JHgwICYgJHkwIHwgfigkeDAgXiAkeTApICYgJHgwIC0gJHkwID4+PiAwKSA+Pj4gMzEpIHwgMDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfaXN1Ymg7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9pc3ViaCgpO1xuXG52YXIgZXNuZXh0X21hdGhfcmFkUGVyRGVnID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZFBlckRlZztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3JhZFBlckRlZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZFBlckRlZykgcmV0dXJuIGVzbmV4dF9tYXRoX3JhZFBlckRlZztcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRQZXJEZWcgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguUkFEX1BFUl9ERUdgIGNvbnN0YW50XG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBub25Db25maWd1cmFibGU6IHRydWUsIG5vbldyaXRhYmxlOiB0cnVlIH0sIHtcblx0ICBSQURfUEVSX0RFRzogMTgwIC8gTWF0aC5QSVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3JhZFBlckRlZztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3JhZFBlckRlZygpO1xuXG52YXIgZXNuZXh0X21hdGhfcmFkaWFucyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRpYW5zO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfcmFkaWFucyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZGlhbnMpIHJldHVybiBlc25leHRfbWF0aF9yYWRpYW5zO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3JhZGlhbnMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0dmFyIERFR19QRVJfUkFEID0gTWF0aC5QSSAvIDE4MDtcblxuXHQvLyBgTWF0aC5yYWRpYW5zYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgcmFkaWFuczogZnVuY3Rpb24gcmFkaWFucyhkZWdyZWVzKSB7XG5cdCAgICByZXR1cm4gZGVncmVlcyAqIERFR19QRVJfUkFEO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9yYWRpYW5zO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfcmFkaWFucygpO1xuXG52YXIgZXNuZXh0X21hdGhfc2NhbGUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2NhbGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9zY2FsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NjYWxlKSByZXR1cm4gZXNuZXh0X21hdGhfc2NhbGU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2NhbGUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBzY2FsZSA9IHJlcXVpcmVNYXRoU2NhbGUoKTtcblxuXHQvLyBgTWF0aC5zY2FsZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHNjYWxlOiBzY2FsZVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3NjYWxlO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfc2NhbGUoKTtcblxudmFyIGVzbmV4dF9tYXRoX3NlZWRlZFBybmcgPSB7fTtcblxudmFyIG51bWJlcklzRmluaXRlO1xudmFyIGhhc1JlcXVpcmVkTnVtYmVySXNGaW5pdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVOdW1iZXJJc0Zpbml0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE51bWJlcklzRmluaXRlKSByZXR1cm4gbnVtYmVySXNGaW5pdGU7XG5cdGhhc1JlcXVpcmVkTnVtYmVySXNGaW5pdGUgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cblx0dmFyIGdsb2JhbElzRmluaXRlID0gZ2xvYmFsVGhpcy5pc0Zpbml0ZTtcblxuXHQvLyBgTnVtYmVyLmlzRmluaXRlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXIuaXNmaW5pdGVcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW51bWJlci1pc2Zpbml0ZSAtLSBzYWZlXG5cdG51bWJlcklzRmluaXRlID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uIGlzRmluaXRlKGl0KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBnbG9iYWxJc0Zpbml0ZShpdCk7XG5cdH07XG5cdHJldHVybiBudW1iZXJJc0Zpbml0ZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2VlZGVkUHJuZztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3NlZWRlZFBybmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zZWVkZWRQcm5nKSByZXR1cm4gZXNuZXh0X21hdGhfc2VlZGVkUHJuZztcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9zZWVkZWRQcm5nID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIG51bWJlcklzRmluaXRlID0gcmVxdWlyZU51bWJlcklzRmluaXRlKCk7XG5cdHZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZUl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IoKTtcblx0dmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlQ3JlYXRlSXRlclJlc3VsdE9iamVjdCgpO1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cblx0dmFyIFNFRURFRF9SQU5ET00gPSAnU2VlZGVkIFJhbmRvbSc7XG5cdHZhciBTRUVERURfUkFORE9NX0dFTkVSQVRPUiA9IFNFRURFRF9SQU5ET00gKyAnIEdlbmVyYXRvcic7XG5cdHZhciBTRUVEX1RZUEVfRVJST1IgPSAnTWF0aC5zZWVkZWRQUk5HKCkgYXJndW1lbnQgc2hvdWxkIGhhdmUgYSBcInNlZWRcIiBmaWVsZCB3aXRoIGEgZmluaXRlIHZhbHVlLic7XG5cdHZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cdHZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU0VFREVEX1JBTkRPTV9HRU5FUkFUT1IpO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHR2YXIgJFNlZWRlZFJhbmRvbUdlbmVyYXRvciA9IGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoZnVuY3Rpb24gU2VlZGVkUmFuZG9tR2VuZXJhdG9yKHNlZWQpIHtcblx0ICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcblx0ICAgIHR5cGU6IFNFRURFRF9SQU5ET01fR0VORVJBVE9SLFxuXHQgICAgc2VlZDogc2VlZCAlIDIxNDc0ODM2NDdcblx0ICB9KTtcblx0fSwgU0VFREVEX1JBTkRPTSwgZnVuY3Rpb24gbmV4dCgpIHtcblx0ICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgIHZhciBzZWVkID0gc3RhdGUuc2VlZCA9IChzdGF0ZS5zZWVkICogMTEwMzUxNTI0NSArIDEyMzQ1KSAlIDIxNDc0ODM2NDc7XG5cdCAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoKHNlZWQgJiAxMDczNzQxODIzKSAvIDEwNzM3NDE4MjMsIGZhbHNlKTtcblx0fSk7XG5cblx0Ly8gYE1hdGguc2VlZGVkUFJOR2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNlZWRlZC1yYW5kb21cblx0Ly8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2VlZGVkLXJhbmRvbS9ibG9iLzc4YjgyNTg4MzViNTdmYzIxMDBkMDc2MTUxYWI1MDZiYzMyMDJhZTYvZGVtby5odG1sXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzZWVkZWRQUk5HOiBmdW5jdGlvbiBzZWVkZWRQUk5HKGl0KSB7XG5cdCAgICB2YXIgc2VlZCA9IGFuT2JqZWN0KGl0KS5zZWVkO1xuXHQgICAgaWYgKCFudW1iZXJJc0Zpbml0ZShzZWVkKSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoU0VFRF9UWVBFX0VSUk9SKTtcblx0ICAgIHJldHVybiBuZXcgJFNlZWRlZFJhbmRvbUdlbmVyYXRvcihzZWVkKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfc2VlZGVkUHJuZztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3NlZWRlZFBybmcoKTtcblxudmFyIGVzbmV4dF9tYXRoX3NpZ25iaXQgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2lnbmJpdDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3NpZ25iaXQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zaWduYml0KSByZXR1cm4gZXNuZXh0X21hdGhfc2lnbmJpdDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9zaWduYml0ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLnNpZ25iaXRgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1NYXRoLnNpZ25iaXRcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHNpZ25iaXQ6IGZ1bmN0aW9uIHNpZ25iaXQoeCkge1xuXHQgICAgdmFyIG4gPSAreDtcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgICByZXR1cm4gbiA9PT0gbiAmJiBuID09PSAwID8gMSAvIG4gPT09IC1JbmZpbml0eSA6IG4gPCAwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9zaWduYml0O1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfc2lnbmJpdCgpO1xuXG52YXIgZXNuZXh0X21hdGhfdW11bGggPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfdW11bGg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF91bXVsaCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3VtdWxoKSByZXR1cm4gZXNuZXh0X21hdGhfdW11bGg7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfdW11bGggPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGgudW11bGhgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgdW11bGg6IGZ1bmN0aW9uIHVtdWxoKHUsIHYpIHtcblx0ICAgIHZhciBVSU5UMTYgPSAweEZGRkY7XG5cdCAgICB2YXIgJHUgPSArdTtcblx0ICAgIHZhciAkdiA9ICt2O1xuXHQgICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG5cdCAgICB2YXIgdjAgPSAkdiAmIFVJTlQxNjtcblx0ICAgIHZhciB1MSA9ICR1ID4+PiAxNjtcblx0ICAgIHZhciB2MSA9ICR2ID4+PiAxNjtcblx0ICAgIHZhciB0ID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcblx0ICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4+IDE2KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfdW11bGg7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF91bXVsaCgpO1xuXG52YXIgZXNuZXh0X251bWJlcl9mcm9tU3RyaW5nID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9udW1iZXJfZnJvbVN0cmluZztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9udW1iZXJfZnJvbVN0cmluZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9udW1iZXJfZnJvbVN0cmluZykgcmV0dXJuIGVzbmV4dF9udW1iZXJfZnJvbVN0cmluZztcblx0aGFzUmVxdWlyZWRFc25leHRfbnVtYmVyX2Zyb21TdHJpbmcgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblxuXHR2YXIgSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04gPSAnSW52YWxpZCBudW1iZXIgcmVwcmVzZW50YXRpb24nO1xuXHR2YXIgSU5WQUxJRF9SQURJWCA9ICdJbnZhbGlkIHJhZGl4Jztcblx0dmFyICRSYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblx0dmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0dmFyICRwYXJzZUludCA9IHBhcnNlSW50O1xuXHR2YXIgcG93ID0gTWF0aC5wb3c7XG5cdHZhciB2YWxpZCA9IC9eW1xcZC5hLXpdKyQvO1xuXHR2YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcblx0dmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyh2YWxpZC5leGVjKTtcblx0dmFyIG51bWJlclRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblx0dmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXHR2YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cblx0Ly8gYE51bWJlci5mcm9tU3RyaW5nYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtbnVtYmVyLWZyb21zdHJpbmdcblx0JCh7IHRhcmdldDogJ051bWJlcicsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbVN0cmluZzogZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcsIHJhZGl4KSB7XG5cdCAgICB2YXIgc2lnbiA9IDE7XG5cdCAgICBpZiAodHlwZW9mIHN0cmluZyAhPSAnc3RyaW5nJykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04pO1xuXHQgICAgaWYgKCFzdHJpbmcubGVuZ3RoKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OKTtcblx0ICAgIGlmIChjaGFyQXQoc3RyaW5nLCAwKSA9PT0gJy0nKSB7XG5cdCAgICAgIHNpZ24gPSAtMTtcblx0ICAgICAgc3RyaW5nID0gc3RyaW5nU2xpY2Uoc3RyaW5nLCAxKTtcblx0ICAgICAgaWYgKCFzdHJpbmcubGVuZ3RoKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OKTtcblx0ICAgIH1cblx0ICAgIHZhciBSID0gcmFkaXggPT09IHVuZGVmaW5lZCA/IDEwIDogdG9JbnRlZ2VyT3JJbmZpbml0eShyYWRpeCk7XG5cdCAgICBpZiAoUiA8IDIgfHwgUiA+IDM2KSB0aHJvdyBuZXcgJFJhbmdlRXJyb3IoSU5WQUxJRF9SQURJWCk7XG5cdCAgICBpZiAoIWV4ZWModmFsaWQsIHN0cmluZykpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04pO1xuXHQgICAgdmFyIHBhcnRzID0gc3BsaXQoc3RyaW5nLCAnLicpO1xuXHQgICAgdmFyIG1hdGhOdW0gPSAkcGFyc2VJbnQocGFydHNbMF0sIFIpO1xuXHQgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIG1hdGhOdW0gKz0gJHBhcnNlSW50KHBhcnRzWzFdLCBSKSAvIHBvdyhSLCBwYXJ0c1sxXS5sZW5ndGgpO1xuXHQgICAgaWYgKFIgPT09IDEwICYmIG51bWJlclRvU3RyaW5nKG1hdGhOdW0sIFIpICE9PSBzdHJpbmcpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoSU5WQUxJRF9OVU1CRVJfUkVQUkVTRU5UQVRJT04pO1xuXHQgICAgcmV0dXJuIHNpZ24gKiBtYXRoTnVtO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbnVtYmVyX2Zyb21TdHJpbmc7XG59XG5cbnJlcXVpcmVFc25leHRfbnVtYmVyX2Zyb21TdHJpbmcoKTtcblxudmFyIGVzbmV4dF9vYnNlcnZhYmxlID0ge307XG5cbnZhciBlc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvciA9IHt9O1xuXG52YXIgaG9zdFJlcG9ydEVycm9ycztcbnZhciBoYXNSZXF1aXJlZEhvc3RSZXBvcnRFcnJvcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVIb3N0UmVwb3J0RXJyb3JzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSG9zdFJlcG9ydEVycm9ycykgcmV0dXJuIGhvc3RSZXBvcnRFcnJvcnM7XG5cdGhhc1JlcXVpcmVkSG9zdFJlcG9ydEVycm9ycyA9IDE7XG5cdGhvc3RSZXBvcnRFcnJvcnMgPSBmdW5jdGlvbiAoYSwgYikge1xuXHQgIHRyeSB7XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSAtLSBzYWZlXG5cdCAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHR9O1xuXHRyZXR1cm4gaG9zdFJlcG9ydEVycm9ycztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yKSByZXR1cm4gZXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3IgPSAxO1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgc2V0U3BlY2llcyA9IHJlcXVpcmVTZXRTcGVjaWVzKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmVBbkluc3RhbmNlKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgZ2V0TWV0aG9kID0gcmVxdWlyZUdldE1ldGhvZCgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cdHZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmVEZWZpbmVCdWlsdElucygpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXHR2YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmVIb3N0UmVwb3J0RXJyb3JzKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKTtcblxuXHR2YXIgJCRPQlNFUlZBQkxFID0gd2VsbEtub3duU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdHZhciBPQlNFUlZBQkxFID0gJ09ic2VydmFibGUnO1xuXHR2YXIgU1VCU0NSSVBUSU9OID0gJ1N1YnNjcmlwdGlvbic7XG5cdHZhciBTVUJTQ1JJUFRJT05fT0JTRVJWRVIgPSAnU3Vic2NyaXB0aW9uT2JzZXJ2ZXInO1xuXHR2YXIgZ2V0dGVyRm9yID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3I7XG5cdHZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cdHZhciBnZXRPYnNlcnZhYmxlSW50ZXJuYWxTdGF0ZSA9IGdldHRlckZvcihPQlNFUlZBQkxFKTtcblx0dmFyIGdldFN1YnNjcmlwdGlvbkludGVybmFsU3RhdGUgPSBnZXR0ZXJGb3IoU1VCU0NSSVBUSU9OKTtcblx0dmFyIGdldFN1YnNjcmlwdGlvbk9ic2VydmVySW50ZXJuYWxTdGF0ZSA9IGdldHRlckZvcihTVUJTQ1JJUFRJT05fT0JTRVJWRVIpO1xuXG5cdHZhciBTdWJzY3JpcHRpb25TdGF0ZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuXHQgIHRoaXMub2JzZXJ2ZXIgPSBhbk9iamVjdChvYnNlcnZlcik7XG5cdCAgdGhpcy5jbGVhbnVwID0gbnVsbDtcblx0ICB0aGlzLnN1YnNjcmlwdGlvbk9ic2VydmVyID0gbnVsbDtcblx0fTtcblxuXHRTdWJzY3JpcHRpb25TdGF0ZS5wcm90b3R5cGUgPSB7XG5cdCAgdHlwZTogU1VCU0NSSVBUSU9OLFxuXHQgIGNsZWFuOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgY2xlYW51cCA9IHRoaXMuY2xlYW51cDtcblx0ICAgIGlmIChjbGVhbnVwKSB7XG5cdCAgICAgIHRoaXMuY2xlYW51cCA9IG51bGw7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgY2xlYW51cCgpO1xuXHQgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgIGhvc3RSZXBvcnRFcnJvcnMoZXJyb3IpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBjbG9zZTogZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKCFERVNDUklQVE9SUykge1xuXHQgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5mYWNhZGU7XG5cdCAgICAgIHZhciBzdWJzY3JpcHRpb25PYnNlcnZlciA9IHRoaXMuc3Vic2NyaXB0aW9uT2JzZXJ2ZXI7XG5cdCAgICAgIHN1YnNjcmlwdGlvbi5jbG9zZWQgPSB0cnVlO1xuXHQgICAgICBpZiAoc3Vic2NyaXB0aW9uT2JzZXJ2ZXIpIHN1YnNjcmlwdGlvbk9ic2VydmVyLmNsb3NlZCA9IHRydWU7XG5cdCAgICB9IHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuXHQgIH0sXG5cdCAgaXNDbG9zZWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB0aGlzLm9ic2VydmVyID09PSBudWxsO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKG9ic2VydmVyLCBzdWJzY3JpYmVyKSB7XG5cdCAgdmFyIHN1YnNjcmlwdGlvblN0YXRlID0gc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCBuZXcgU3Vic2NyaXB0aW9uU3RhdGUob2JzZXJ2ZXIpKTtcblx0ICB2YXIgc3RhcnQ7XG5cdCAgaWYgKCFERVNDUklQVE9SUykgdGhpcy5jbG9zZWQgPSBmYWxzZTtcblx0ICB0cnkge1xuXHQgICAgaWYgKHN0YXJ0ID0gZ2V0TWV0aG9kKG9ic2VydmVyLCAnc3RhcnQnKSkgY2FsbChzdGFydCwgb2JzZXJ2ZXIsIHRoaXMpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICBob3N0UmVwb3J0RXJyb3JzKGVycm9yKTtcblx0ICB9XG5cdCAgaWYgKHN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHJldHVybjtcblx0ICB2YXIgc3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb25TdGF0ZS5zdWJzY3JpcHRpb25PYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcihzdWJzY3JpcHRpb25TdGF0ZSk7XG5cdCAgdHJ5IHtcblx0ICAgIHZhciBjbGVhbnVwID0gc3Vic2NyaWJlcihzdWJzY3JpcHRpb25PYnNlcnZlcik7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcblx0ICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoY2xlYW51cCkpIHN1YnNjcmlwdGlvblN0YXRlLmNsZWFudXAgPSBpc0NhbGxhYmxlKGNsZWFudXAudW5zdWJzY3JpYmUpXG5cdCAgICAgID8gZnVuY3Rpb24gKCkgeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfVxuXHQgICAgICA6IGFDYWxsYWJsZShjbGVhbnVwKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgc3Vic2NyaXB0aW9uT2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHQgICAgcmV0dXJuO1xuXHQgIH0gaWYgKHN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHN1YnNjcmlwdGlvblN0YXRlLmNsZWFuKCk7XG5cdH07XG5cblx0U3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IGRlZmluZUJ1aWx0SW5zKHt9LCB7XG5cdCAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvblN0YXRlID0gZ2V0U3Vic2NyaXB0aW9uSW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgIGlmICghc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkge1xuXHQgICAgICBzdWJzY3JpcHRpb25TdGF0ZS5jbG9zZSgpO1xuXHQgICAgICBzdWJzY3JpcHRpb25TdGF0ZS5jbGVhbigpO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cblx0aWYgKERFU0NSSVBUT1JTKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoU3Vic2NyaXB0aW9uLnByb3RvdHlwZSwgJ2Nsb3NlZCcsIHtcblx0ICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBjbG9zZWQoKSB7XG5cdCAgICByZXR1cm4gZ2V0U3Vic2NyaXB0aW9uSW50ZXJuYWxTdGF0ZSh0aGlzKS5pc0Nsb3NlZCgpO1xuXHQgIH1cblx0fSk7XG5cblx0dmFyIFN1YnNjcmlwdGlvbk9ic2VydmVyID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvblN0YXRlKSB7XG5cdCAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG5cdCAgICB0eXBlOiBTVUJTQ1JJUFRJT05fT0JTRVJWRVIsXG5cdCAgICBzdWJzY3JpcHRpb25TdGF0ZTogc3Vic2NyaXB0aW9uU3RhdGVcblx0ICB9KTtcblx0ICBpZiAoIURFU0NSSVBUT1JTKSB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuXHR9O1xuXG5cdFN1YnNjcmlwdGlvbk9ic2VydmVyLnByb3RvdHlwZSA9IGRlZmluZUJ1aWx0SW5zKHt9LCB7XG5cdCAgbmV4dDogZnVuY3Rpb24gbmV4dCh2YWx1ZSkge1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvblN0YXRlID0gZ2V0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJJbnRlcm5hbFN0YXRlKHRoaXMpLnN1YnNjcmlwdGlvblN0YXRlO1xuXHQgICAgaWYgKCFzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSB7XG5cdCAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvblN0YXRlLm9ic2VydmVyO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBuZXh0TWV0aG9kID0gZ2V0TWV0aG9kKG9ic2VydmVyLCAnbmV4dCcpO1xuXHQgICAgICAgIGlmIChuZXh0TWV0aG9kKSBjYWxsKG5leHRNZXRob2QsIG9ic2VydmVyLCB2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICAgICAgaG9zdFJlcG9ydEVycm9ycyhlcnJvcik7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSkge1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvblN0YXRlID0gZ2V0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJJbnRlcm5hbFN0YXRlKHRoaXMpLnN1YnNjcmlwdGlvblN0YXRlO1xuXHQgICAgaWYgKCFzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSB7XG5cdCAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvblN0YXRlLm9ic2VydmVyO1xuXHQgICAgICBzdWJzY3JpcHRpb25TdGF0ZS5jbG9zZSgpO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBlcnJvck1ldGhvZCA9IGdldE1ldGhvZChvYnNlcnZlciwgJ2Vycm9yJyk7XG5cdCAgICAgICAgaWYgKGVycm9yTWV0aG9kKSBjYWxsKGVycm9yTWV0aG9kLCBvYnNlcnZlciwgdmFsdWUpO1xuXHQgICAgICAgIGVsc2UgaG9zdFJlcG9ydEVycm9ycyh2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgIGhvc3RSZXBvcnRFcnJvcnMoZXJyKTtcblx0ICAgICAgfSBzdWJzY3JpcHRpb25TdGF0ZS5jbGVhbigpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvblN0YXRlID0gZ2V0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJJbnRlcm5hbFN0YXRlKHRoaXMpLnN1YnNjcmlwdGlvblN0YXRlO1xuXHQgICAgaWYgKCFzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSB7XG5cdCAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvblN0YXRlLm9ic2VydmVyO1xuXHQgICAgICBzdWJzY3JpcHRpb25TdGF0ZS5jbG9zZSgpO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBjb21wbGV0ZU1ldGhvZCA9IGdldE1ldGhvZChvYnNlcnZlciwgJ2NvbXBsZXRlJyk7XG5cdCAgICAgICAgaWYgKGNvbXBsZXRlTWV0aG9kKSBjYWxsKGNvbXBsZXRlTWV0aG9kLCBvYnNlcnZlcik7XG5cdCAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICAgICAgaG9zdFJlcG9ydEVycm9ycyhlcnJvcik7XG5cdCAgICAgIH0gc3Vic2NyaXB0aW9uU3RhdGUuY2xlYW4oKTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG5cdGlmIChERVNDUklQVE9SUykgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFN1YnNjcmlwdGlvbk9ic2VydmVyLnByb3RvdHlwZSwgJ2Nsb3NlZCcsIHtcblx0ICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgZ2V0OiBmdW5jdGlvbiBjbG9zZWQoKSB7XG5cdCAgICByZXR1cm4gZ2V0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJJbnRlcm5hbFN0YXRlKHRoaXMpLnN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCk7XG5cdCAgfVxuXHR9KTtcblxuXHR2YXIgJE9ic2VydmFibGUgPSBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZXIpIHtcblx0ICBhbkluc3RhbmNlKHRoaXMsIE9ic2VydmFibGVQcm90b3R5cGUpO1xuXHQgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuXHQgICAgdHlwZTogT0JTRVJWQUJMRSxcblx0ICAgIHN1YnNjcmliZXI6IGFDYWxsYWJsZShzdWJzY3JpYmVyKVxuXHQgIH0pO1xuXHR9O1xuXG5cdHZhciBPYnNlcnZhYmxlUHJvdG90eXBlID0gJE9ic2VydmFibGUucHJvdG90eXBlO1xuXG5cdGRlZmluZUJ1aWx0SW5zKE9ic2VydmFibGVQcm90b3R5cGUsIHtcblx0ICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuXHQgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihpc0NhbGxhYmxlKG9ic2VydmVyKSA/IHtcblx0ICAgICAgbmV4dDogb2JzZXJ2ZXIsXG5cdCAgICAgIGVycm9yOiBsZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLFxuXHQgICAgICBjb21wbGV0ZTogbGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuXHQgICAgfSA6IGlzT2JqZWN0KG9ic2VydmVyKSA/IG9ic2VydmVyIDoge30sIGdldE9ic2VydmFibGVJbnRlcm5hbFN0YXRlKHRoaXMpLnN1YnNjcmliZXIpO1xuXHQgIH1cblx0fSk7XG5cblx0ZGVmaW5lQnVpbHRJbihPYnNlcnZhYmxlUHJvdG90eXBlLCAkJE9CU0VSVkFCTEUsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5cdCQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIE9ic2VydmFibGU6ICRPYnNlcnZhYmxlXG5cdH0pO1xuXG5cdHNldFNwZWNpZXMoT0JTRVJWQUJMRSk7XG5cdHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGVzbmV4dF9vYnNlcnZhYmxlX2Zyb20gPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfZnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX2Zyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9mcm9tKSByZXR1cm4gZXNuZXh0X29ic2VydmFibGVfZnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9mcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlSXNDb25zdHJ1Y3RvcigpO1xuXHR2YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlR2V0SXRlcmF0b3IoKTtcblx0dmFyIGdldE1ldGhvZCA9IHJlcXVpcmVHZXRNZXRob2QoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciAkJE9CU0VSVkFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ29ic2VydmFibGUnKTtcblxuXHQvLyBgT2JzZXJ2YWJsZS5mcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuXHQkKHsgdGFyZ2V0OiAnT2JzZXJ2YWJsZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbTogZnVuY3Rpb24gZnJvbSh4KSB7XG5cdCAgICB2YXIgQyA9IGlzQ29uc3RydWN0b3IodGhpcykgPyB0aGlzIDogZ2V0QnVpbHRJbignT2JzZXJ2YWJsZScpO1xuXHQgICAgdmFyIG9ic2VydmFibGVNZXRob2QgPSBnZXRNZXRob2QoYW5PYmplY3QoeCksICQkT0JTRVJWQUJMRSk7XG5cdCAgICBpZiAob2JzZXJ2YWJsZU1ldGhvZCkge1xuXHQgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFuT2JqZWN0KGNhbGwob2JzZXJ2YWJsZU1ldGhvZCwgeCkpO1xuXHQgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5jb25zdHJ1Y3RvciA9PT0gQyA/IG9ic2VydmFibGUgOiBuZXcgQyhmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcblx0ICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0ICAgIHZhciBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKHgpO1xuXHQgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuXHQgICAgICBpdGVyYXRlKGl0ZXJhdG9yLCBmdW5jdGlvbiAoaXQsIHN0b3ApIHtcblx0ICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcblx0ICAgICAgICBpZiAob2JzZXJ2ZXIuY2xvc2VkKSByZXR1cm4gc3RvcCgpO1xuXHQgICAgICB9LCB7IElTX0lURVJBVE9SOiB0cnVlLCBJTlRFUlJVUFRFRDogdHJ1ZSB9KTtcblx0ICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfb2JzZXJ2YWJsZV9mcm9tO1xufVxuXG52YXIgZXNuZXh0X29ic2VydmFibGVfb2YgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9vZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX29mKSByZXR1cm4gZXNuZXh0X29ic2VydmFibGVfb2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfb2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlSXNDb25zdHJ1Y3RvcigpO1xuXG5cdHZhciBBcnJheSA9IGdldEJ1aWx0SW4oJ0FycmF5Jyk7XG5cblx0Ly8gYE9ic2VydmFibGUub2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG5cdCQoeyB0YXJnZXQ6ICdPYnNlcnZhYmxlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBvZjogZnVuY3Rpb24gb2YoKSB7XG5cdCAgICB2YXIgQyA9IGlzQ29uc3RydWN0b3IodGhpcykgPyB0aGlzIDogZ2V0QnVpbHRJbignT2JzZXJ2YWJsZScpO1xuXHQgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICB2YXIgaXRlbXMgPSBBcnJheShsZW5ndGgpO1xuXHQgICAgdmFyIGluZGV4ID0gMDtcblx0ICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkgaXRlbXNbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuXHQgICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtc1tpXSk7XG5cdCAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZCkgcmV0dXJuO1xuXHQgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X29ic2VydmFibGVfb2Y7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X29ic2VydmFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZSkgcmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xuXHRyZXF1aXJlRXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3IoKTtcblx0cmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX2Zyb20oKTtcblx0cmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX29mKCk7XG5cdHJldHVybiBlc25leHRfb2JzZXJ2YWJsZTtcbn1cblxucmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlKCk7XG5cbnZhciBlc25leHRfcHJvbWlzZV90cnkgPSB7fTtcblxudmFyIGVzX3Byb21pc2VfdHJ5ID0ge307XG5cbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWROZXdQcm9taXNlQ2FwYWJpbGl0eTtcblxuZnVuY3Rpb24gcmVxdWlyZU5ld1Byb21pc2VDYXBhYmlsaXR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTmV3UHJvbWlzZUNhcGFiaWxpdHkpIHJldHVybiBuZXdQcm9taXNlQ2FwYWJpbGl0eTtcblx0aGFzUmVxdWlyZWROZXdQcm9taXNlQ2FwYWJpbGl0eSA9IDE7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0dmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcblx0ICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuXHQgIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG5cdCAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcblx0ICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG5cdCAgICByZWplY3QgPSAkJHJlamVjdDtcblx0ICB9KTtcblx0ICB0aGlzLnJlc29sdmUgPSBhQ2FsbGFibGUocmVzb2x2ZSk7XG5cdCAgdGhpcy5yZWplY3QgPSBhQ2FsbGFibGUocmVqZWN0KTtcblx0fTtcblxuXHQvLyBgTmV3UHJvbWlzZUNhcGFiaWxpdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW5ld3Byb21pc2VjYXBhYmlsaXR5XG5cdG5ld1Byb21pc2VDYXBhYmlsaXR5LmYgPSBmdW5jdGlvbiAoQykge1xuXHQgIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG5cdH07XG5cdHJldHVybiBuZXdQcm9taXNlQ2FwYWJpbGl0eTtcbn1cblxudmFyIHBlcmZvcm07XG52YXIgaGFzUmVxdWlyZWRQZXJmb3JtO1xuXG5mdW5jdGlvbiByZXF1aXJlUGVyZm9ybSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFBlcmZvcm0pIHJldHVybiBwZXJmb3JtO1xuXHRoYXNSZXF1aXJlZFBlcmZvcm0gPSAxO1xuXHRwZXJmb3JtID0gZnVuY3Rpb24gKGV4ZWMpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCB2YWx1ZTogZXhlYygpIH07XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBwZXJmb3JtO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc19wcm9taXNlX3RyeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX3Byb21pc2VfdHJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfcHJvbWlzZV90cnkpIHJldHVybiBlc19wcm9taXNlX3RyeTtcblx0aGFzUmVxdWlyZWRFc19wcm9taXNlX3RyeSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgYXBwbHkgPSByZXF1aXJlRnVuY3Rpb25BcHBseSgpO1xuXHR2YXIgc2xpY2UgPSByZXF1aXJlQXJyYXlTbGljZSgpO1xuXHR2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlTmV3UHJvbWlzZUNhcGFiaWxpdHkoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIHBlcmZvcm0gPSByZXF1aXJlUGVyZm9ybSgpO1xuXG5cdHZhciBQcm9taXNlID0gZ2xvYmFsVGhpcy5Qcm9taXNlO1xuXG5cdHZhciBBQ0NFUFRfQVJHVU1FTlRTID0gZmFsc2U7XG5cdC8vIEF2b2lkaW5nIHRoZSB1c2Ugb2YgcG9seWZpbGxzIG9mIHRoZSBwcmV2aW91cyBpdGVyYXRpb24gb2YgdGhpcyBwcm9wb3NhbFxuXHQvLyB0aGF0IGRvZXMgbm90IGFjY2VwdCBhcmd1bWVudHMgb2YgdGhlIGNhbGxiYWNrXG5cdHZhciBGT1JDRUQgPSAhUHJvbWlzZSB8fCAhUHJvbWlzZVsndHJ5J10gfHwgcGVyZm9ybShmdW5jdGlvbiAoKSB7XG5cdCAgUHJvbWlzZVsndHJ5J10oZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgICBBQ0NFUFRfQVJHVU1FTlRTID0gYXJndW1lbnQgPT09IDg7XG5cdCAgfSwgOCk7XG5cdH0pLmVycm9yIHx8ICFBQ0NFUFRfQVJHVU1FTlRTO1xuXG5cdC8vIGBQcm9taXNlLnRyeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS50cnlcblx0JCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG5cdCAgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuIC8qICwgLi4uYXJncyAqLykge1xuXHQgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiBbXTtcblx0ICAgIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYodGhpcyk7XG5cdCAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiBhcHBseShhQ2FsbGFibGUoY2FsbGJhY2tmbiksIHVuZGVmaW5lZCwgYXJncyk7XG5cdCAgICB9KTtcblx0ICAgIChyZXN1bHQuZXJyb3IgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudmFsdWUpO1xuXHQgICAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzX3Byb21pc2VfdHJ5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcHJvbWlzZV90cnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcHJvbWlzZV90cnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcHJvbWlzZV90cnkpIHJldHVybiBlc25leHRfcHJvbWlzZV90cnk7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3Byb21pc2VfdHJ5ID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0cmVxdWlyZUVzX3Byb21pc2VfdHJ5KCk7XG5cdHJldHVybiBlc25leHRfcHJvbWlzZV90cnk7XG59XG5cbnJlcXVpcmVFc25leHRfcHJvbWlzZV90cnkoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhID0ge307XG5cbnZhciByZWZsZWN0TWV0YWRhdGE7XG52YXIgaGFzUmVxdWlyZWRSZWZsZWN0TWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRSZWZsZWN0TWV0YWRhdGEpIHJldHVybiByZWZsZWN0TWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkUmVmbGVjdE1ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogaW4gY29yZS1qc0A0LCBtb3ZlIC9tb2R1bGVzLyBkZXBlbmRlbmNpZXMgdG8gcHVibGljIGVudHJpZXMgZm9yIGJldHRlciBvcHRpbWl6YXRpb24gYnkgdG9vbHMgbGlrZSBgcHJlc2V0LWVudmBcblx0cmVxdWlyZUVzX21hcCgpO1xuXHRyZXF1aXJlRXNfd2Vha01hcCgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBzaGFyZWQgPSByZXF1aXJlU2hhcmVkKCk7XG5cblx0dmFyIE1hcCA9IGdldEJ1aWx0SW4oJ01hcCcpO1xuXHR2YXIgV2Vha01hcCA9IGdldEJ1aWx0SW4oJ1dlYWtNYXAnKTtcblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHR2YXIgbWV0YWRhdGEgPSBzaGFyZWQoJ21ldGFkYXRhJyk7XG5cdHZhciBzdG9yZSA9IG1ldGFkYXRhLnN0b3JlIHx8IChtZXRhZGF0YS5zdG9yZSA9IG5ldyBXZWFrTWFwKCkpO1xuXG5cdHZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpIHtcblx0ICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcblx0ICBpZiAoIXRhcmdldE1ldGFkYXRhKSB7XG5cdCAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuO1xuXHQgICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuXHQgIH1cblx0ICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcblx0ICBpZiAoIWtleU1ldGFkYXRhKSB7XG5cdCAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuO1xuXHQgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuXHQgIH0gcmV0dXJuIGtleU1ldGFkYXRhO1xuXHR9O1xuXG5cdHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG5cdCAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSk7XG5cdH07XG5cblx0dmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcblx0ICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcblx0ICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG5cdH07XG5cblx0dmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcblx0ICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG5cdH07XG5cblx0dmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5KSB7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgZmFsc2UpO1xuXHQgIHZhciBrZXlzID0gW107XG5cdCAgaWYgKG1ldGFkYXRhTWFwKSBtZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHsgcHVzaChrZXlzLCBrZXkpOyB9KTtcblx0ICByZXR1cm4ga2V5cztcblx0fTtcblxuXHR2YXIgdG9NZXRhZGF0YUtleSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogU3RyaW5nKGl0KTtcblx0fTtcblxuXHRyZWZsZWN0TWV0YWRhdGEgPSB7XG5cdCAgc3RvcmU6IHN0b3JlLFxuXHQgIGdldE1hcDogZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCxcblx0ICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG5cdCAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuXHQgIHNldDogb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSxcblx0ICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcblx0ICB0b0tleTogdG9NZXRhZGF0YUtleVxuXHR9O1xuXHRyZXR1cm4gcmVmbGVjdE1ldGFkYXRhO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cdHZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnNldDtcblxuXHQvLyBgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZGVmaW5lTWV0YWRhdGE6IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzNdKTtcblx0ICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblx0dmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuZ2V0TWFwO1xuXHR2YXIgc3RvcmUgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuc3RvcmU7XG5cblx0Ly8gYFJlZmxlY3QuZGVsZXRlTWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGRlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1syXSk7XG5cdCAgICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSwgZmFsc2UpO1xuXHQgICAgaWYgKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpIHJldHVybiBmYWxzZTtcblx0ICAgIGlmIChtZXRhZGF0YU1hcC5zaXplKSByZXR1cm4gdHJ1ZTtcblx0ICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuXHQgICAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG5cdCAgICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZigpO1xuXG5cdHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmhhcztcblx0dmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuZ2V0O1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHR2YXIgb3JkaW5hcnlHZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuXHQgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcblx0ICBpZiAoaGFzT3duKSByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdC8vIGBSZWZsZWN0LmdldE1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMl0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cyA9IHt9O1xuXG52YXIgYXJyYXlVbmlxdWVCeTtcbnZhciBoYXNSZXF1aXJlZEFycmF5VW5pcXVlQnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheVVuaXF1ZUJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlVbmlxdWVCeSkgcmV0dXJuIGFycmF5VW5pcXVlQnk7XG5cdGhhc1JlcXVpcmVkQXJyYXlVbmlxdWVCeSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlTGVuZ3RoT2ZBcnJheUxpa2UoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIG1hcEhhcyA9IE1hcEhlbHBlcnMuaGFzO1xuXHR2YXIgbWFwU2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0Ly8gYEFycmF5LnByb3RvdHlwZS51bmlxdWVCeWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LXVuaXF1ZVxuXHRhcnJheVVuaXF1ZUJ5ID0gZnVuY3Rpb24gdW5pcXVlQnkocmVzb2x2ZXIpIHtcblx0ICB2YXIgdGhhdCA9IHRvT2JqZWN0KHRoaXMpO1xuXHQgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZSh0aGF0KTtcblx0ICB2YXIgcmVzdWx0ID0gW107XG5cdCAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcblx0ICB2YXIgcmVzb2x2ZXJGdW5jdGlvbiA9ICFpc051bGxPclVuZGVmaW5lZChyZXNvbHZlcikgPyBhQ2FsbGFibGUocmVzb2x2ZXIpIDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gdmFsdWU7XG5cdCAgfTtcblx0ICB2YXIgaW5kZXgsIGl0ZW0sIGtleTtcblx0ICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcblx0ICAgIGl0ZW0gPSB0aGF0W2luZGV4XTtcblx0ICAgIGtleSA9IHJlc29sdmVyRnVuY3Rpb24oaXRlbSk7XG5cdCAgICBpZiAoIW1hcEhhcyhtYXAsIGtleSkpIG1hcFNldChtYXAsIGtleSwgaXRlbSk7XG5cdCAgfVxuXHQgIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHB1c2gocmVzdWx0LCB2YWx1ZSk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIGFycmF5VW5pcXVlQnk7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cykgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cztcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXMgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YoKTtcblx0dmFyICRhcnJheVVuaXF1ZUJ5ID0gcmVxdWlyZUFycmF5VW5pcXVlQnkoKTtcblxuXHR2YXIgYXJyYXlVbmlxdWVCeSA9IHVuY3VycnlUaGlzKCRhcnJheVVuaXF1ZUJ5KTtcblx0dmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cdHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5rZXlzO1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHR2YXIgb3JkaW5hcnlNZXRhZGF0YUtleXMgPSBmdW5jdGlvbiAoTywgUCkge1xuXHQgIHZhciBvS2V5cyA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuXHQgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICBpZiAocGFyZW50ID09PSBudWxsKSByZXR1cm4gb0tleXM7XG5cdCAgdmFyIHBLZXlzID0gb3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcblx0ICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gYXJyYXlVbmlxdWVCeShjb25jYXQob0tleXMsIHBLZXlzKSkgOiBwS2V5cyA6IG9LZXlzO1xuXHR9O1xuXG5cdC8vIGBSZWZsZWN0LmdldE1ldGFkYXRhS2V5c2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZ2V0TWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1sxXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlNZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuZ2V0O1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHQvLyBgUmVmbGVjdC5nZXRPd25NZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZ2V0T3duTWV0YWRhdGE6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzJdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cyA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmtleXM7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdC8vIGBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5c2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZ2V0T3duTWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1sxXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZigpO1xuXG5cdHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmhhcztcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0dmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcblx0ICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgaWYgKGhhc093bikgcmV0dXJuIHRydWU7XG5cdCAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuXHQgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XG5cdH07XG5cblx0Ly8gYFJlZmxlY3QuaGFzTWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGhhc01ldGFkYXRhOiBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1syXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmhhcztcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0Ly8gYFJlZmxlY3QuaGFzT3duTWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGhhc093bk1ldGFkYXRhOiBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1syXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfbWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfbWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9tZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X21ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfbWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfbWV0YWRhdGEgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXHR2YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5zZXQ7XG5cblx0Ly8gYFJlZmxlY3QubWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIG1ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIGtleSkge1xuXHQgICAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0b01ldGFkYXRhS2V5KGtleSkpO1xuXHQgICAgfTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfbWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9tZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3NldF9hZGRBbGwgPSB7fTtcblxudmFyIHNldEhlbHBlcnM7XG52YXIgaGFzUmVxdWlyZWRTZXRIZWxwZXJzO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SGVscGVycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldEhlbHBlcnMpIHJldHVybiBzZXRIZWxwZXJzO1xuXHRoYXNSZXF1aXJlZFNldEhlbHBlcnMgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxuXHR2YXIgU2V0UHJvdG90eXBlID0gU2V0LnByb3RvdHlwZTtcblxuXHRzZXRIZWxwZXJzID0ge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxuXHQgIFNldDogU2V0LFxuXHQgIGFkZDogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmFkZCksXG5cdCAgaGFzOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuaGFzKSxcblx0ICByZW1vdmU6IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZVsnZGVsZXRlJ10pLFxuXHQgIHByb3RvOiBTZXRQcm90b3R5cGVcblx0fTtcblx0cmV0dXJuIHNldEhlbHBlcnM7XG59XG5cbnZhciBhU2V0O1xudmFyIGhhc1JlcXVpcmVkQVNldDtcblxuZnVuY3Rpb24gcmVxdWlyZUFTZXQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBU2V0KSByZXR1cm4gYVNldDtcblx0aGFzUmVxdWlyZWRBU2V0ID0gMTtcblx0dmFyIGhhcyA9IHJlcXVpcmVTZXRIZWxwZXJzKCkuaGFzO1xuXG5cdC8vIFBlcmZvcm0gPyBSZXF1aXJlSW50ZXJuYWxTbG90KE0sIFtbU2V0RGF0YV1dKVxuXHRhU2V0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaGFzKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHJldHVybiBhU2V0O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2FkZEFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfYWRkQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9hZGRBbGwpIHJldHVybiBlc25leHRfc2V0X2FkZEFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2FkZEFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgYWRkID0gcmVxdWlyZVNldEhlbHBlcnMoKS5hZGQ7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuYWRkQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBhZGRBbGw6IGZ1bmN0aW9uIGFkZEFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIGFkZChzZXQsIGFyZ3VtZW50c1trXSk7XG5cdCAgICB9IHJldHVybiBzZXQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfYWRkQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9hZGRBbGwoKTtcblxudmFyIGVzbmV4dF9zZXRfZGVsZXRlQWxsID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGVsZXRlQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9kZWxldGVBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2RlbGV0ZUFsbCkgcmV0dXJuIGVzbmV4dF9zZXRfZGVsZXRlQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGVsZXRlQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciByZW1vdmUgPSByZXF1aXJlU2V0SGVscGVycygpLnJlbW92ZTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5kZWxldGVBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRlbGV0ZUFsbDogZnVuY3Rpb24gZGVsZXRlQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgY29sbGVjdGlvbiA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYWxsRGVsZXRlZCA9IHRydWU7XG5cdCAgICB2YXIgd2FzRGVsZXRlZDtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgd2FzRGVsZXRlZCA9IHJlbW92ZShjb2xsZWN0aW9uLCBhcmd1bWVudHNba10pO1xuXHQgICAgICBhbGxEZWxldGVkID0gYWxsRGVsZXRlZCAmJiB3YXNEZWxldGVkO1xuXHQgICAgfSByZXR1cm4gISFhbGxEZWxldGVkO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2RlbGV0ZUFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZGVsZXRlQWxsKCk7XG5cbnZhciBlc25leHRfc2V0X2RpZmZlcmVuY2UgPSB7fTtcblxudmFyIGlzSXRlcmFibGU7XG52YXIgaGFzUmVxdWlyZWRJc0l0ZXJhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNJdGVyYWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzSXRlcmFibGUpIHJldHVybiBpc0l0ZXJhYmxlO1xuXHRoYXNSZXF1aXJlZElzSXRlcmFibGUgPSAxO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBJdGVyYXRvcnMgPSByZXF1aXJlSXRlcmF0b3JzKCk7XG5cblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblxuXHRpc0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBPID0gJE9iamVjdChpdCk7XG5cdCAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcblx0ICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG5cdCAgICB8fCBoYXNPd24oSXRlcmF0b3JzLCBjbGFzc29mKE8pKTtcblx0fTtcblx0cmV0dXJuIGlzSXRlcmFibGU7XG59XG5cbnZhciB0b1NldExpa2U7XG52YXIgaGFzUmVxdWlyZWRUb1NldExpa2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb1NldExpa2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb1NldExpa2UpIHJldHVybiB0b1NldExpa2U7XG5cdGhhc1JlcXVpcmVkVG9TZXRMaWtlID0gMTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc0l0ZXJhYmxlID0gcmVxdWlyZUlzSXRlcmFibGUoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0dmFyIFNldCA9IGdldEJ1aWx0SW4oJ1NldCcpO1xuXG5cdHZhciBpc1NldExpa2UgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaXNPYmplY3QoaXQpXG5cdCAgICAmJiB0eXBlb2YgaXQuc2l6ZSA9PSAnbnVtYmVyJ1xuXHQgICAgJiYgaXNDYWxsYWJsZShpdC5oYXMpXG5cdCAgICAmJiBpc0NhbGxhYmxlKGl0LmtleXMpO1xuXHR9O1xuXG5cdC8vIGZhbGxiYWNrIG9sZCAtPiBuZXcgc2V0IG1ldGhvZHMgcHJvcG9zYWwgYXJndW1lbnRzXG5cdHRvU2V0TGlrZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGlmIChpc1NldExpa2UoaXQpKSByZXR1cm4gaXQ7XG5cdCAgcmV0dXJuIGlzSXRlcmFibGUoaXQpID8gbmV3IFNldChpdCkgOiBpdDtcblx0fTtcblx0cmV0dXJuIHRvU2V0TGlrZTtcbn1cblxudmFyIHNldEl0ZXJhdGU7XG52YXIgaGFzUmVxdWlyZWRTZXRJdGVyYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SXRlcmF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldEl0ZXJhdGUpIHJldHVybiBzZXRJdGVyYXRlO1xuXHRoYXNSZXF1aXJlZFNldEl0ZXJhdGUgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblxuXHR2YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG5cdHZhciBTZXRQcm90b3R5cGUgPSBTZXRIZWxwZXJzLnByb3RvO1xuXHR2YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5mb3JFYWNoKTtcblx0dmFyIGtleXMgPSB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUua2V5cyk7XG5cdHZhciBuZXh0ID0ga2V5cyhuZXcgU2V0KCkpLm5leHQ7XG5cblx0c2V0SXRlcmF0ZSA9IGZ1bmN0aW9uIChzZXQsIGZuLCBpbnRlcnJ1cHRpYmxlKSB7XG5cdCAgcmV0dXJuIGludGVycnVwdGlibGUgPyBpdGVyYXRlU2ltcGxlKHsgaXRlcmF0b3I6IGtleXMoc2V0KSwgbmV4dDogbmV4dCB9LCBmbikgOiBmb3JFYWNoKHNldCwgZm4pO1xuXHR9O1xuXHRyZXR1cm4gc2V0SXRlcmF0ZTtcbn1cblxudmFyIHNldENsb25lO1xudmFyIGhhc1JlcXVpcmVkU2V0Q2xvbmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRDbG9uZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldENsb25lKSByZXR1cm4gc2V0Q2xvbmU7XG5cdGhhc1JlcXVpcmVkU2V0Q2xvbmUgPSAxO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHR2YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG5cdHZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblxuXHRzZXRDbG9uZSA9IGZ1bmN0aW9uIChzZXQpIHtcblx0ICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuXHQgIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIGFkZChyZXN1bHQsIGl0KTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gc2V0Q2xvbmU7XG59XG5cbnZhciBzZXRTaXplO1xudmFyIGhhc1JlcXVpcmVkU2V0U2l6ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldFNpemUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRTaXplKSByZXR1cm4gc2V0U2l6ZTtcblx0aGFzUmVxdWlyZWRTZXRTaXplID0gMTtcblx0dmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yKCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblxuXHRzZXRTaXplID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihTZXRIZWxwZXJzLnByb3RvLCAnc2l6ZScsICdnZXQnKSB8fCBmdW5jdGlvbiAoc2V0KSB7XG5cdCAgcmV0dXJuIHNldC5zaXplO1xuXHR9O1xuXHRyZXR1cm4gc2V0U2l6ZTtcbn1cblxudmFyIGdldEl0ZXJhdG9yRGlyZWN0O1xudmFyIGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JEaXJlY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRJdGVyYXRvckRpcmVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldEl0ZXJhdG9yRGlyZWN0KSByZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3Q7XG5cdGhhc1JlcXVpcmVkR2V0SXRlcmF0b3JEaXJlY3QgPSAxO1xuXHQvLyBgR2V0SXRlcmF0b3JEaXJlY3Qob2JqKWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcblx0Z2V0SXRlcmF0b3JEaXJlY3QgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIGl0ZXJhdG9yOiBvYmosXG5cdCAgICBuZXh0OiBvYmoubmV4dCxcblx0ICAgIGRvbmU6IGZhbHNlXG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGdldEl0ZXJhdG9yRGlyZWN0O1xufVxuXG52YXIgZ2V0U2V0UmVjb3JkO1xudmFyIGhhc1JlcXVpcmVkR2V0U2V0UmVjb3JkO1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0U2V0UmVjb3JkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2V0U2V0UmVjb3JkKSByZXR1cm4gZ2V0U2V0UmVjb3JkO1xuXHRoYXNSZXF1aXJlZEdldFNldFJlY29yZCA9IDE7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXHR2YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlR2V0SXRlcmF0b3JEaXJlY3QoKTtcblxuXHR2YXIgSU5WQUxJRF9TSVpFID0gJ0ludmFsaWQgc2l6ZSc7XG5cdHZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXg7XG5cblx0dmFyIFNldFJlY29yZCA9IGZ1bmN0aW9uIChzZXQsIGludFNpemUpIHtcblx0ICB0aGlzLnNldCA9IHNldDtcblx0ICB0aGlzLnNpemUgPSBtYXgoaW50U2l6ZSwgMCk7XG5cdCAgdGhpcy5oYXMgPSBhQ2FsbGFibGUoc2V0Lmhhcyk7XG5cdCAgdGhpcy5rZXlzID0gYUNhbGxhYmxlKHNldC5rZXlzKTtcblx0fTtcblxuXHRTZXRSZWNvcmQucHJvdG90eXBlID0ge1xuXHQgIGdldEl0ZXJhdG9yOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3QoYW5PYmplY3QoY2FsbCh0aGlzLmtleXMsIHRoaXMuc2V0KSkpO1xuXHQgIH0sXG5cdCAgaW5jbHVkZXM6IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGNhbGwodGhpcy5oYXMsIHRoaXMuc2V0LCBpdCk7XG5cdCAgfVxuXHR9O1xuXG5cdC8vIGBHZXRTZXRSZWNvcmRgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtc2V0LW1ldGhvZHMvI3NlYy1nZXRzZXRyZWNvcmRcblx0Z2V0U2V0UmVjb3JkID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGFuT2JqZWN0KG9iaik7XG5cdCAgdmFyIG51bVNpemUgPSArb2JqLnNpemU7XG5cdCAgLy8gTk9URTogSWYgc2l6ZSBpcyB1bmRlZmluZWQsIHRoZW4gbnVtU2l6ZSB3aWxsIGJlIE5hTlxuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgaWYgKG51bVNpemUgIT09IG51bVNpemUpIHRocm93IG5ldyAkVHlwZUVycm9yKElOVkFMSURfU0laRSk7XG5cdCAgdmFyIGludFNpemUgPSB0b0ludGVnZXJPckluZmluaXR5KG51bVNpemUpO1xuXHQgIGlmIChpbnRTaXplIDwgMCkgdGhyb3cgbmV3ICRSYW5nZUVycm9yKElOVkFMSURfU0laRSk7XG5cdCAgcmV0dXJuIG5ldyBTZXRSZWNvcmQob2JqLCBpbnRTaXplKTtcblx0fTtcblx0cmV0dXJuIGdldFNldFJlY29yZDtcbn1cblxudmFyIHNldERpZmZlcmVuY2U7XG52YXIgaGFzUmVxdWlyZWRTZXREaWZmZXJlbmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0RGlmZmVyZW5jZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldERpZmZlcmVuY2UpIHJldHVybiBzZXREaWZmZXJlbmNlO1xuXHRoYXNSZXF1aXJlZFNldERpZmZlcmVuY2UgPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGNsb25lID0gcmVxdWlyZVNldENsb25lKCk7XG5cdHZhciBzaXplID0gcmVxdWlyZVNldFNpemUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cblx0dmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xuXHR2YXIgcmVtb3ZlID0gU2V0SGVscGVycy5yZW1vdmU7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdHNldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBkaWZmZXJlbmNlKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG5cdCAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuXHQgIGlmIChzaXplKE8pIDw9IG90aGVyUmVjLnNpemUpIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgcmVtb3ZlKHJlc3VsdCwgZSk7XG5cdCAgfSk7XG5cdCAgZWxzZSBpdGVyYXRlU2ltcGxlKG90aGVyUmVjLmdldEl0ZXJhdG9yKCksIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoaGFzKE8sIGUpKSByZW1vdmUocmVzdWx0LCBlKTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gc2V0RGlmZmVyZW5jZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kaWZmZXJlbmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9kaWZmZXJlbmNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kaWZmZXJlbmNlKSByZXR1cm4gZXNuZXh0X3NldF9kaWZmZXJlbmNlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGlmZmVyZW5jZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkZGlmZmVyZW5jZSA9IHJlcXVpcmVTZXREaWZmZXJlbmNlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZGlmZmVyZW5jZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkaWZmZXJlbmNlOiBmdW5jdGlvbiBkaWZmZXJlbmNlKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkZGlmZmVyZW5jZSwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZGlmZmVyZW5jZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZGlmZmVyZW5jZSgpO1xuXG52YXIgZXNuZXh0X3NldF9ldmVyeSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2V2ZXJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9ldmVyeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZXZlcnkpIHJldHVybiBlc25leHRfc2V0X2V2ZXJ5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZXZlcnkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgcmV0dXJuIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKCFib3VuZEZ1bmN0aW9uKHZhbHVlLCB2YWx1ZSwgc2V0KSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2V2ZXJ5O1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9ldmVyeSgpO1xuXG52YXIgZXNuZXh0X3NldF9maWx0ZXIgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maWx0ZXI7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2ZpbHRlciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmlsdGVyKSByZXR1cm4gZXNuZXh0X3NldF9maWx0ZXI7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maWx0ZXIgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHR2YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG5cdHZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgbmV3U2V0ID0gbmV3IFNldCgpO1xuXHQgICAgaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwgdmFsdWUsIHNldCkpIGFkZChuZXdTZXQsIHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld1NldDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9maWx0ZXI7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2ZpbHRlcigpO1xuXG52YXIgZXNuZXh0X3NldF9maW5kID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmluZDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZmluZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmluZCkgcmV0dXJuIGVzbmV4dF9zZXRfZmluZDtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbmQgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIHZhbHVlLCBzZXQpKSByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcblx0ICAgIH0sIHRydWUpO1xuXHQgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQudmFsdWU7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZmluZDtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZmluZCgpO1xuXG52YXIgZXNuZXh0X3NldF9mcm9tID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZnJvbSkgcmV0dXJuIGVzbmV4dF9zZXRfZnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2Zyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25Gcm9tID0gcmVxdWlyZUNvbGxlY3Rpb25Gcm9tKCk7XG5cblx0Ly8gYFNldC5mcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cblx0JCh7IHRhcmdldDogJ1NldCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbTogY3JlYXRlQ29sbGVjdGlvbkZyb20oU2V0SGVscGVycy5TZXQsIFNldEhlbHBlcnMuYWRkLCBmYWxzZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2Zyb207XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2Zyb20oKTtcblxudmFyIGVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uID0ge307XG5cbnZhciBzZXRJbnRlcnNlY3Rpb247XG52YXIgaGFzUmVxdWlyZWRTZXRJbnRlcnNlY3Rpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRJbnRlcnNlY3Rpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRJbnRlcnNlY3Rpb24pIHJldHVybiBzZXRJbnRlcnNlY3Rpb247XG5cdGhhc1JlcXVpcmVkU2V0SW50ZXJzZWN0aW9uID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBzaXplID0gcmVxdWlyZVNldFNpemUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cblx0dmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xuXHR2YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cdHZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb25gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHRzZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcblx0ICB2YXIgcmVzdWx0ID0gbmV3IFNldCgpO1xuXG5cdCAgaWYgKHNpemUoTykgPiBvdGhlclJlYy5zaXplKSB7XG5cdCAgICBpdGVyYXRlU2ltcGxlKG90aGVyUmVjLmdldEl0ZXJhdG9yKCksIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGlmIChoYXMoTywgZSkpIGFkZChyZXN1bHQsIGUpO1xuXHQgICAgfSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSBhZGQocmVzdWx0LCBlKTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBzZXRJbnRlcnNlY3Rpb247XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9pbnRlcnNlY3Rpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2ludGVyc2VjdGlvbikgcmV0dXJuIGVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRpbnRlcnNlY3Rpb24gPSByZXF1aXJlU2V0SW50ZXJzZWN0aW9uKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGludGVyc2VjdGlvbjogZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkaW50ZXJzZWN0aW9uLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9pbnRlcnNlY3Rpb247XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2ludGVyc2VjdGlvbigpO1xuXG52YXIgZXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbSA9IHt9O1xuXG52YXIgc2V0SXNEaXNqb2ludEZyb207XG52YXIgaGFzUmVxdWlyZWRTZXRJc0Rpc2pvaW50RnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldElzRGlzam9pbnRGcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SXNEaXNqb2ludEZyb20pIHJldHVybiBzZXRJc0Rpc2pvaW50RnJvbTtcblx0aGFzUmVxdWlyZWRTZXRJc0Rpc2pvaW50RnJvbSA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGhhcyA9IHJlcXVpcmVTZXRIZWxwZXJzKCkuaGFzO1xuXHR2YXIgc2l6ZSA9IHJlcXVpcmVTZXRTaXplKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXHR2YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmVJdGVyYXRvckNsb3NlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tXG5cdHNldElzRGlzam9pbnRGcm9tID0gZnVuY3Rpb24gaXNEaXNqb2ludEZyb20ob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcblx0ICBpZiAoc2l6ZShPKSA8PSBvdGhlclJlYy5zaXplKSByZXR1cm4gaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSByZXR1cm4gZmFsc2U7XG5cdCAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuXHQgIHZhciBpdGVyYXRvciA9IG90aGVyUmVjLmdldEl0ZXJhdG9yKCk7XG5cdCAgcmV0dXJuIGl0ZXJhdGVTaW1wbGUoaXRlcmF0b3IsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoaGFzKE8sIGUpKSByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGZhbHNlKTtcblx0ICB9KSAhPT0gZmFsc2U7XG5cdH07XG5cdHJldHVybiBzZXRJc0Rpc2pvaW50RnJvbTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzRGlzam9pbnRGcm9tKSByZXR1cm4gZXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2lzRGlzam9pbnRGcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRpc0Rpc2pvaW50RnJvbSA9IHJlcXVpcmVTZXRJc0Rpc2pvaW50RnJvbSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGlzRGlzam9pbnRGcm9tOiBmdW5jdGlvbiBpc0Rpc2pvaW50RnJvbShvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJGlzRGlzam9pbnRGcm9tLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb20oKTtcblxudmFyIGVzbmV4dF9zZXRfaXNTdWJzZXRPZiA9IHt9O1xuXG52YXIgc2V0SXNTdWJzZXRPZjtcbnZhciBoYXNSZXF1aXJlZFNldElzU3Vic2V0T2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRJc1N1YnNldE9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SXNTdWJzZXRPZikgcmV0dXJuIHNldElzU3Vic2V0T2Y7XG5cdGhhc1JlcXVpcmVkU2V0SXNTdWJzZXRPZiA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIHNpemUgPSByZXF1aXJlU2V0U2l6ZSgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNTdWJzZXRPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdWJzZXRPZlxuXHRzZXRJc1N1YnNldE9mID0gZnVuY3Rpb24gaXNTdWJzZXRPZihvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuXHQgIGlmIChzaXplKE8pID4gb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXHQgIHJldHVybiBpdGVyYXRlKE8sIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoIW90aGVyUmVjLmluY2x1ZGVzKGUpKSByZXR1cm4gZmFsc2U7XG5cdCAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuXHR9O1xuXHRyZXR1cm4gc2V0SXNTdWJzZXRPZjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1YnNldE9mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9pc1N1YnNldE9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1YnNldE9mKSByZXR1cm4gZXNuZXh0X3NldF9pc1N1YnNldE9mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdWJzZXRPZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkaXNTdWJzZXRPZiA9IHJlcXVpcmVTZXRJc1N1YnNldE9mKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNTdWJzZXRPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpc1N1YnNldE9mOiBmdW5jdGlvbiBpc1N1YnNldE9mKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkaXNTdWJzZXRPZiwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfaXNTdWJzZXRPZjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfaXNTdWJzZXRPZigpO1xuXG52YXIgZXNuZXh0X3NldF9pc1N1cGVyc2V0T2YgPSB7fTtcblxudmFyIHNldElzU3VwZXJzZXRPZjtcbnZhciBoYXNSZXF1aXJlZFNldElzU3VwZXJzZXRPZjtcblxuZnVuY3Rpb24gcmVxdWlyZVNldElzU3VwZXJzZXRPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldElzU3VwZXJzZXRPZikgcmV0dXJuIHNldElzU3VwZXJzZXRPZjtcblx0aGFzUmVxdWlyZWRTZXRJc1N1cGVyc2V0T2YgPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBoYXMgPSByZXF1aXJlU2V0SGVscGVycygpLmhhcztcblx0dmFyIHNpemUgPSByZXF1aXJlU2V0U2l6ZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cdHZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZUl0ZXJhdG9yQ2xvc2UoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzU3VwZXJzZXRPZlxuXHRzZXRJc1N1cGVyc2V0T2YgPSBmdW5jdGlvbiBpc1N1cGVyc2V0T2Yob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcblx0ICBpZiAoc2l6ZShPKSA8IG90aGVyUmVjLnNpemUpIHJldHVybiBmYWxzZTtcblx0ICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuXHQgIHJldHVybiBpdGVyYXRlU2ltcGxlKGl0ZXJhdG9yLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKCFoYXMoTywgZSkpIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgZmFsc2UpO1xuXHQgIH0pICE9PSBmYWxzZTtcblx0fTtcblx0cmV0dXJuIHNldElzU3VwZXJzZXRPZjtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1cGVyc2V0T2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2lzU3VwZXJzZXRPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdXBlcnNldE9mKSByZXR1cm4gZXNuZXh0X3NldF9pc1N1cGVyc2V0T2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc1N1cGVyc2V0T2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJGlzU3VwZXJzZXRPZiA9IHJlcXVpcmVTZXRJc1N1cGVyc2V0T2YoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaXNTdXBlcnNldE9mOiBmdW5jdGlvbiBpc1N1cGVyc2V0T2Yob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRpc1N1cGVyc2V0T2YsIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2lzU3VwZXJzZXRPZjtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfaXNTdXBlcnNldE9mKCk7XG5cbnZhciBlc25leHRfc2V0X2pvaW4gPSB7fTtcblxudmFyIHRvU3RyaW5nO1xudmFyIGhhc1JlcXVpcmVkVG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb1N0cmluZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvU3RyaW5nKSByZXR1cm4gdG9TdHJpbmc7XG5cdGhhc1JlcXVpcmVkVG9TdHJpbmcgPSAxO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mKCk7XG5cblx0dmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cblx0dG9TdHJpbmcgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuXHQgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcblx0fTtcblx0cmV0dXJuIHRvU3RyaW5nO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2pvaW47XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2pvaW4gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2pvaW4pIHJldHVybiBlc25leHRfc2V0X2pvaW47XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9qb2luID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblx0dmFyIHRvU3RyaW5nID0gcmVxdWlyZVRvU3RyaW5nKCk7XG5cblx0dmFyIGFycmF5Sm9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBzZXAgPSBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHRvU3RyaW5nKHNlcGFyYXRvcik7XG5cdCAgICB2YXIgYXJyYXkgPSBbXTtcblx0ICAgIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgcHVzaChhcnJheSwgdmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gYXJyYXlKb2luKGFycmF5LCBzZXApO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2pvaW47XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2pvaW4oKTtcblxudmFyIGVzbmV4dF9zZXRfbWFwID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfbWFwO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9tYXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X21hcCkgcmV0dXJuIGVzbmV4dF9zZXRfbWFwO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfbWFwID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0dmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xuXHR2YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUubWFwYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcblx0ICAgIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgYWRkKG5ld1NldCwgYm91bmRGdW5jdGlvbih2YWx1ZSwgdmFsdWUsIHNldCkpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3U2V0O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X21hcDtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfbWFwKCk7XG5cbnZhciBlc25leHRfc2V0X29mID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9vZikgcmV0dXJuIGVzbmV4dF9zZXRfb2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9vZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbk9mID0gcmVxdWlyZUNvbGxlY3Rpb25PZigpO1xuXG5cdC8vIGBTZXQub2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2Zcblx0JCh7IHRhcmdldDogJ1NldCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgb2Y6IGNyZWF0ZUNvbGxlY3Rpb25PZihTZXRIZWxwZXJzLlNldCwgU2V0SGVscGVycy5hZGQsIGZhbHNlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfb2Y7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X29mKCk7XG5cbnZhciBlc25leHRfc2V0X3JlZHVjZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X3JlZHVjZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfcmVkdWNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9yZWR1Y2UpIHJldHVybiBlc25leHRfc2V0X3JlZHVjZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X3JlZHVjZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBub0luaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoIDwgMjtcblx0ICAgIHZhciBhY2N1bXVsYXRvciA9IG5vSW5pdGlhbCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcblx0ICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcblx0ICAgIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKG5vSW5pdGlhbCkge1xuXHQgICAgICAgIG5vSW5pdGlhbCA9IGZhbHNlO1xuXHQgICAgICAgIGFjY3VtdWxhdG9yID0gdmFsdWU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYWNjdW11bGF0b3IgPSBjYWxsYmFja2ZuKGFjY3VtdWxhdG9yLCB2YWx1ZSwgdmFsdWUsIHNldCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgaWYgKG5vSW5pdGlhbCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBzZXQgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG5cdCAgICByZXR1cm4gYWNjdW11bGF0b3I7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfcmVkdWNlO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9yZWR1Y2UoKTtcblxudmFyIGVzbmV4dF9zZXRfc29tZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X3NvbWU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X3NvbWUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X3NvbWUpIHJldHVybiBlc25leHRfc2V0X3NvbWU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zb21lID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHJldHVybiBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCB2YWx1ZSwgc2V0KSkgcmV0dXJuIHRydWU7XG5cdCAgICB9LCB0cnVlKSA9PT0gdHJ1ZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9zb21lO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9zb21lKCk7XG5cbnZhciBlc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2UgPSB7fTtcblxudmFyIHNldFN5bW1ldHJpY0RpZmZlcmVuY2U7XG52YXIgaGFzUmVxdWlyZWRTZXRTeW1tZXRyaWNEaWZmZXJlbmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0U3ltbWV0cmljRGlmZmVyZW5jZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldFN5bW1ldHJpY0RpZmZlcmVuY2UpIHJldHVybiBzZXRTeW1tZXRyaWNEaWZmZXJlbmNlO1xuXHRoYXNSZXF1aXJlZFNldFN5bW1ldHJpY0RpZmZlcmVuY2UgPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGNsb25lID0gcmVxdWlyZVNldENsb25lKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblxuXHR2YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cdHZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcblx0dmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHRzZXRTeW1tZXRyaWNEaWZmZXJlbmNlID0gZnVuY3Rpb24gc3ltbWV0cmljRGlmZmVyZW5jZShvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIga2V5c0l0ZXIgPSBnZXRTZXRSZWNvcmQob3RoZXIpLmdldEl0ZXJhdG9yKCk7XG5cdCAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuXHQgIGl0ZXJhdGVTaW1wbGUoa2V5c0l0ZXIsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAoaGFzKE8sIGUpKSByZW1vdmUocmVzdWx0LCBlKTtcblx0ICAgIGVsc2UgYWRkKHJlc3VsdCwgZSk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHNldFN5bW1ldHJpY0RpZmZlcmVuY2U7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZSkgcmV0dXJuIGVzbmV4dF9zZXRfc3ltbWV0cmljRGlmZmVyZW5jZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2UgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJHN5bW1ldHJpY0RpZmZlcmVuY2UgPSByZXF1aXJlU2V0U3ltbWV0cmljRGlmZmVyZW5jZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc3ltbWV0cmljRGlmZmVyZW5jZTogZnVuY3Rpb24gc3ltbWV0cmljRGlmZmVyZW5jZShvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJHN5bW1ldHJpY0RpZmZlcmVuY2UsIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2U7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2UoKTtcblxudmFyIGVzbmV4dF9zZXRfdW5pb24gPSB7fTtcblxudmFyIHNldFVuaW9uO1xudmFyIGhhc1JlcXVpcmVkU2V0VW5pb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRVbmlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldFVuaW9uKSByZXR1cm4gc2V0VW5pb247XG5cdGhhc1JlcXVpcmVkU2V0VW5pb24gPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBhZGQgPSByZXF1aXJlU2V0SGVscGVycygpLmFkZDtcblx0dmFyIGNsb25lID0gcmVxdWlyZVNldENsb25lKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS51bmlvbmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdHNldFVuaW9uID0gZnVuY3Rpb24gdW5pb24ob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIGtleXNJdGVyID0gZ2V0U2V0UmVjb3JkKG90aGVyKS5nZXRJdGVyYXRvcigpO1xuXHQgIHZhciByZXN1bHQgPSBjbG9uZShPKTtcblx0ICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIGFkZChyZXN1bHQsIGl0KTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gc2V0VW5pb247XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfdW5pb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X3VuaW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF91bmlvbikgcmV0dXJuIGVzbmV4dF9zZXRfdW5pb247XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF91bmlvbiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkdW5pb24gPSByZXF1aXJlU2V0VW5pb24oKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS51bmlvbmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICB1bmlvbjogZnVuY3Rpb24gdW5pb24ob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCR1bmlvbiwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfdW5pb247XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X3VuaW9uKCk7XG5cbnZhciBlc25leHRfc3RyaW5nX2F0ID0ge307XG5cbnZhciBzdHJpbmdNdWx0aWJ5dGU7XG52YXIgaGFzUmVxdWlyZWRTdHJpbmdNdWx0aWJ5dGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTdHJpbmdNdWx0aWJ5dGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTdHJpbmdNdWx0aWJ5dGUpIHJldHVybiBzdHJpbmdNdWx0aWJ5dGU7XG5cdGhhc1JlcXVpcmVkU3RyaW5nTXVsdGlieXRlID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXHR2YXIgdG9TdHJpbmcgPSByZXF1aXJlVG9TdHJpbmcoKTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXG5cdHZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xuXHR2YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xuXHR2YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cblx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuXHQgICAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG5cdCAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXJPckluZmluaXR5KHBvcyk7XG5cdCAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuXHQgICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG5cdCAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuXHQgICAgZmlyc3QgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uKTtcblx0ICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcblx0ICAgICAgfHwgKHNlY29uZCA9IGNoYXJDb2RlQXQoUywgcG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG5cdCAgICAgICAgPyBDT05WRVJUX1RPX1NUUklOR1xuXHQgICAgICAgICAgPyBjaGFyQXQoUywgcG9zaXRpb24pXG5cdCAgICAgICAgICA6IGZpcnN0XG5cdCAgICAgICAgOiBDT05WRVJUX1RPX1NUUklOR1xuXHQgICAgICAgICAgPyBzdHJpbmdTbGljZShTLCBwb3NpdGlvbiwgcG9zaXRpb24gKyAyKVxuXHQgICAgICAgICAgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuXHQgIH07XG5cdH07XG5cblx0c3RyaW5nTXVsdGlieXRlID0ge1xuXHQgIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcblx0ICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG5cdCAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcblx0ICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxuXHR9O1xuXHRyZXR1cm4gc3RyaW5nTXVsdGlieXRlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2F0O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3N0cmluZ19hdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfYXQpIHJldHVybiBlc25leHRfc3RyaW5nX2F0O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfYXQgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjaGFyQXQgPSByZXF1aXJlU3RyaW5nTXVsdGlieXRlKCkuY2hhckF0O1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblx0dmFyIHRvU3RyaW5nID0gcmVxdWlyZVRvU3RyaW5nKCk7XG5cblx0Ly8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG5cdCQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBhdDogZnVuY3Rpb24gYXQoaW5kZXgpIHtcblx0ICAgIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG5cdCAgICB2YXIgbGVuID0gUy5sZW5ndGg7XG5cdCAgICB2YXIgcmVsYXRpdmVJbmRleCA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuXHQgICAgdmFyIGsgPSByZWxhdGl2ZUluZGV4ID49IDAgPyByZWxhdGl2ZUluZGV4IDogbGVuICsgcmVsYXRpdmVJbmRleDtcblx0ICAgIHJldHVybiAoayA8IDAgfHwgayA+PSBsZW4pID8gdW5kZWZpbmVkIDogY2hhckF0KFMsIGspO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc3RyaW5nX2F0O1xufVxuXG5yZXF1aXJlRXNuZXh0X3N0cmluZ19hdCgpO1xuXG52YXIgZXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfY29kZVBvaW50cztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zdHJpbmdfY29kZVBvaW50cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zdHJpbmdfY29kZVBvaW50cykgcmV0dXJuIGVzbmV4dF9zdHJpbmdfY29kZVBvaW50cztcblx0aGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2NvZGVQb2ludHMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZUl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IoKTtcblx0dmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlQ3JlYXRlSXRlclJlc3VsdE9iamVjdCgpO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cdHZhciB0b1N0cmluZyA9IHJlcXVpcmVUb1N0cmluZygpO1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cdHZhciBTdHJpbmdNdWx0aWJ5dGVNb2R1bGUgPSByZXF1aXJlU3RyaW5nTXVsdGlieXRlKCk7XG5cblx0dmFyIGNvZGVBdCA9IFN0cmluZ011bHRpYnl0ZU1vZHVsZS5jb2RlQXQ7XG5cdHZhciBjaGFyQXQgPSBTdHJpbmdNdWx0aWJ5dGVNb2R1bGUuY2hhckF0O1xuXHR2YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG5cdHZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cdHZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuXHQvLyBUT0RPOiB1bmlmeSB3aXRoIFN0cmluZyNAQGl0ZXJhdG9yXG5cdHZhciAkU3RyaW5nSXRlcmF0b3IgPSBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKGZ1bmN0aW9uIFN0cmluZ0l0ZXJhdG9yKHN0cmluZykge1xuXHQgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuXHQgICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuXHQgICAgc3RyaW5nOiBzdHJpbmcsXG5cdCAgICBpbmRleDogMFxuXHQgIH0pO1xuXHR9LCAnU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpIHtcblx0ICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG5cdCAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXg7XG5cdCAgdmFyIHBvaW50O1xuXHQgIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuXHQgIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuXHQgIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcblx0ICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh7IGNvZGVQb2ludDogY29kZUF0KHBvaW50LCAwKSwgcG9zaXRpb246IGluZGV4IH0sIGZhbHNlKTtcblx0fSk7XG5cblx0Ly8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50c2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wcm90b3R5cGUtY29kZXBvaW50c1xuXHQkKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgY29kZVBvaW50czogZnVuY3Rpb24gY29kZVBvaW50cygpIHtcblx0ICAgIHJldHVybiBuZXcgJFN0cmluZ0l0ZXJhdG9yKHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzO1xufVxuXG5yZXF1aXJlRXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzKCk7XG5cbnZhciBlc25leHRfc3ltYm9sX2Rpc3Bvc2UgPSB7fTtcblxudmFyIHBhdGg7XG52YXIgaGFzUmVxdWlyZWRQYXRoO1xuXG5mdW5jdGlvbiByZXF1aXJlUGF0aCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFBhdGgpIHJldHVybiBwYXRoO1xuXHRoYXNSZXF1aXJlZFBhdGggPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cblx0cGF0aCA9IGdsb2JhbFRoaXM7XG5cdHJldHVybiBwYXRoO1xufVxuXG52YXIgd2VsbEtub3duU3ltYm9sV3JhcHBlZCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xXcmFwcGVkO1xuXG5mdW5jdGlvbiByZXF1aXJlV2VsbEtub3duU3ltYm9sV3JhcHBlZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbFdyYXBwZWQpIHJldHVybiB3ZWxsS25vd25TeW1ib2xXcmFwcGVkO1xuXHRoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbFdyYXBwZWQgPSAxO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHdlbGxLbm93blN5bWJvbFdyYXBwZWQuZiA9IHdlbGxLbm93blN5bWJvbDtcblx0cmV0dXJuIHdlbGxLbm93blN5bWJvbFdyYXBwZWQ7XG59XG5cbnZhciB3ZWxsS25vd25TeW1ib2xEZWZpbmU7XG52YXIgaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xEZWZpbmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWxsS25vd25TeW1ib2xEZWZpbmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xEZWZpbmUpIHJldHVybiB3ZWxsS25vd25TeW1ib2xEZWZpbmU7XG5cdGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sRGVmaW5lID0gMTtcblx0dmFyIHBhdGggPSByZXF1aXJlUGF0aCgpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbFdyYXBwZWQoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCkuZjtcblxuXHR3ZWxsS25vd25TeW1ib2xEZWZpbmUgPSBmdW5jdGlvbiAoTkFNRSkge1xuXHQgIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG5cdCAgaWYgKCFoYXNPd24oU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG5cdCAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG5cdCAgfSk7XG5cdH07XG5cdHJldHVybiB3ZWxsS25vd25TeW1ib2xEZWZpbmU7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfZGlzcG9zZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zeW1ib2xfZGlzcG9zZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfZGlzcG9zZSkgcmV0dXJuIGVzbmV4dF9zeW1ib2xfZGlzcG9zZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX2Rpc3Bvc2UgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sRGVmaW5lKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpLmY7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkuZjtcblxuXHR2YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG5cblx0Ly8gYFN5bWJvbC5kaXNwb3NlYCB3ZWxsLWtub3duIHN5bWJvbFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1leHBsaWNpdC1yZXNvdXJjZS1tYW5hZ2VtZW50XG5cdGRlZmluZVdlbGxLbm93blN5bWJvbCgnZGlzcG9zZScpO1xuXG5cdGlmIChTeW1ib2wpIHtcblx0ICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihTeW1ib2wsICdkaXNwb3NlJyk7XG5cdCAgLy8gd29ya2Fyb3VuZCBvZiBOb2RlSlMgMjAuNCBidWdcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzQ4Njk5XG5cdCAgLy8gYW5kIGluY29ycmVjdCBkZXNjcmlwdG9yIGZyb20gc29tZSB0cmFuc3BpbGVycyBhbmQgdXNlcmxhbmQgaGVscGVyc1xuXHQgIGlmIChkZXNjcmlwdG9yLmVudW1lcmFibGUgJiYgZGVzY3JpcHRvci5jb25maWd1cmFibGUgJiYgZGVzY3JpcHRvci53cml0YWJsZSkge1xuXHQgICAgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCAnZGlzcG9zZScsIHsgdmFsdWU6IGRlc2NyaXB0b3IudmFsdWUsIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UgfSk7XG5cdCAgfVxuXHR9XG5cdHJldHVybiBlc25leHRfc3ltYm9sX2Rpc3Bvc2U7XG59XG5cbnJlcXVpcmVFc25leHRfc3ltYm9sX2Rpc3Bvc2UoKTtcblxudmFyIGVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX29ic2VydmFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc3ltYm9sX29ic2VydmFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX29ic2VydmFibGUpIHJldHVybiBlc25leHRfc3ltYm9sX29ic2VydmFibGU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlID0gMTtcblx0dmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2xEZWZpbmUoKTtcblxuXHQvLyBgU3ltYm9sLm9ic2VydmFibGVgIHdlbGwta25vd24gc3ltYm9sXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcblx0ZGVmaW5lV2VsbEtub3duU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdHJldHVybiBlc25leHRfc3ltYm9sX29ic2VydmFibGU7XG59XG5cbnJlcXVpcmVFc25leHRfc3ltYm9sX29ic2VydmFibGUoKTtcblxudmFyIGVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2ggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaCkgcmV0dXJuIGVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoID0gMTtcblx0Ly8gVE9ETzogcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2xEZWZpbmUoKTtcblxuXHQvLyBgU3ltYm9sLnBhdHRlcm5NYXRjaGAgd2VsbC1rbm93biBzeW1ib2xcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcGF0dGVybi1tYXRjaGluZ1xuXHRkZWZpbmVXZWxsS25vd25TeW1ib2woJ3BhdHRlcm5NYXRjaCcpO1xuXHRyZXR1cm4gZXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2g7XG59XG5cbnJlcXVpcmVFc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaCgpO1xuXG52YXIgZXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsID0ge307XG5cbnZhciB3ZWFrTWFwSGVscGVycztcbnZhciBoYXNSZXF1aXJlZFdlYWtNYXBIZWxwZXJzO1xuXG5mdW5jdGlvbiByZXF1aXJlV2Vha01hcEhlbHBlcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWFrTWFwSGVscGVycykgcmV0dXJuIHdlYWtNYXBIZWxwZXJzO1xuXHRoYXNSZXF1aXJlZFdlYWtNYXBIZWxwZXJzID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8td2Vhay1tYXAgLS0gc2FmZVxuXHR2YXIgV2Vha01hcFByb3RvdHlwZSA9IFdlYWtNYXAucHJvdG90eXBlO1xuXG5cdHdlYWtNYXBIZWxwZXJzID0ge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby13ZWFrLW1hcCAtLSBzYWZlXG5cdCAgV2Vha01hcDogV2Vha01hcCxcblx0ICBzZXQ6IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuc2V0KSxcblx0ICBnZXQ6IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuZ2V0KSxcblx0ICBoYXM6IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuaGFzKSxcblx0ICByZW1vdmU6IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGVbJ2RlbGV0ZSddKVxuXHR9O1xuXHRyZXR1cm4gd2Vha01hcEhlbHBlcnM7XG59XG5cbnZhciBhV2Vha01hcDtcbnZhciBoYXNSZXF1aXJlZEFXZWFrTWFwO1xuXG5mdW5jdGlvbiByZXF1aXJlQVdlYWtNYXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBV2Vha01hcCkgcmV0dXJuIGFXZWFrTWFwO1xuXHRoYXNSZXF1aXJlZEFXZWFrTWFwID0gMTtcblx0dmFyIGhhcyA9IHJlcXVpcmVXZWFrTWFwSGVscGVycygpLmhhcztcblxuXHQvLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW1dlYWtNYXBEYXRhXV0pXG5cdGFXZWFrTWFwID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaGFzKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHJldHVybiBhV2Vha01hcDtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsKSByZXR1cm4gZXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFXZWFrTWFwID0gcmVxdWlyZUFXZWFrTWFwKCk7XG5cdHZhciByZW1vdmUgPSByZXF1aXJlV2Vha01hcEhlbHBlcnMoKS5yZW1vdmU7XG5cblx0Ly8gYFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZUFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnV2Vha01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRlbGV0ZUFsbDogZnVuY3Rpb24gZGVsZXRlQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgY29sbGVjdGlvbiA9IGFXZWFrTWFwKHRoaXMpO1xuXHQgICAgdmFyIGFsbERlbGV0ZWQgPSB0cnVlO1xuXHQgICAgdmFyIHdhc0RlbGV0ZWQ7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIHdhc0RlbGV0ZWQgPSByZW1vdmUoY29sbGVjdGlvbiwgYXJndW1lbnRzW2tdKTtcblx0ICAgICAgYWxsRGVsZXRlZCA9IGFsbERlbGV0ZWQgJiYgd2FzRGVsZXRlZDtcblx0ICAgIH0gcmV0dXJuICEhYWxsRGVsZXRlZDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtNYXBfZGVsZXRlQWxsKCk7XG5cbnZhciBlc25leHRfd2Vha01hcF9mcm9tID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2Zyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha01hcF9mcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZnJvbSkgcmV0dXJuIGVzbmV4dF93ZWFrTWFwX2Zyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfZnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFdlYWtNYXBIZWxwZXJzID0gcmVxdWlyZVdlYWtNYXBIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uRnJvbSA9IHJlcXVpcmVDb2xsZWN0aW9uRnJvbSgpO1xuXG5cdC8vIGBXZWFrTWFwLmZyb21gIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLmZyb21cblx0JCh7IHRhcmdldDogJ1dlYWtNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb206IGNyZWF0ZUNvbGxlY3Rpb25Gcm9tKFdlYWtNYXBIZWxwZXJzLldlYWtNYXAsIFdlYWtNYXBIZWxwZXJzLnNldCwgdHJ1ZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha01hcF9mcm9tO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtNYXBfZnJvbSgpO1xuXG52YXIgZXNuZXh0X3dlYWtNYXBfb2YgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha01hcF9vZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX29mKSByZXR1cm4gZXNuZXh0X3dlYWtNYXBfb2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtNYXBfb2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBXZWFrTWFwSGVscGVycyA9IHJlcXVpcmVXZWFrTWFwSGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbk9mID0gcmVxdWlyZUNvbGxlY3Rpb25PZigpO1xuXG5cdC8vIGBXZWFrTWFwLm9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha21hcC5vZlxuXHQkKHsgdGFyZ2V0OiAnV2Vha01hcCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgb2Y6IGNyZWF0ZUNvbGxlY3Rpb25PZihXZWFrTWFwSGVscGVycy5XZWFrTWFwLCBXZWFrTWFwSGVscGVycy5zZXQsIHRydWUpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtNYXBfb2Y7XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha01hcF9vZigpO1xuXG52YXIgZXNuZXh0X3dlYWtTZXRfYWRkQWxsID0ge307XG5cbnZhciB3ZWFrU2V0SGVscGVycztcbnZhciBoYXNSZXF1aXJlZFdlYWtTZXRIZWxwZXJzO1xuXG5mdW5jdGlvbiByZXF1aXJlV2Vha1NldEhlbHBlcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWFrU2V0SGVscGVycykgcmV0dXJuIHdlYWtTZXRIZWxwZXJzO1xuXHRoYXNSZXF1aXJlZFdlYWtTZXRIZWxwZXJzID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8td2Vhay1zZXQgLS0gc2FmZVxuXHR2YXIgV2Vha1NldFByb3RvdHlwZSA9IFdlYWtTZXQucHJvdG90eXBlO1xuXG5cdHdlYWtTZXRIZWxwZXJzID0ge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby13ZWFrLXNldCAtLSBzYWZlXG5cdCAgV2Vha1NldDogV2Vha1NldCxcblx0ICBhZGQ6IHVuY3VycnlUaGlzKFdlYWtTZXRQcm90b3R5cGUuYWRkKSxcblx0ICBoYXM6IHVuY3VycnlUaGlzKFdlYWtTZXRQcm90b3R5cGUuaGFzKSxcblx0ICByZW1vdmU6IHVuY3VycnlUaGlzKFdlYWtTZXRQcm90b3R5cGVbJ2RlbGV0ZSddKVxuXHR9O1xuXHRyZXR1cm4gd2Vha1NldEhlbHBlcnM7XG59XG5cbnZhciBhV2Vha1NldDtcbnZhciBoYXNSZXF1aXJlZEFXZWFrU2V0O1xuXG5mdW5jdGlvbiByZXF1aXJlQVdlYWtTZXQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBV2Vha1NldCkgcmV0dXJuIGFXZWFrU2V0O1xuXHRoYXNSZXF1aXJlZEFXZWFrU2V0ID0gMTtcblx0dmFyIGhhcyA9IHJlcXVpcmVXZWFrU2V0SGVscGVycygpLmhhcztcblxuXHQvLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW1dlYWtTZXREYXRhXV0pXG5cdGFXZWFrU2V0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaGFzKGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHJldHVybiBhV2Vha1NldDtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfYWRkQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtTZXRfYWRkQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfYWRkQWxsKSByZXR1cm4gZXNuZXh0X3dlYWtTZXRfYWRkQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2FkZEFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFXZWFrU2V0ID0gcmVxdWlyZUFXZWFrU2V0KCk7XG5cdHZhciBhZGQgPSByZXF1aXJlV2Vha1NldEhlbHBlcnMoKS5hZGQ7XG5cblx0Ly8gYFdlYWtTZXQucHJvdG90eXBlLmFkZEFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnV2Vha1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGFkZEFsbDogZnVuY3Rpb24gYWRkQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVdlYWtTZXQodGhpcyk7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIGFkZChzZXQsIGFyZ3VtZW50c1trXSk7XG5cdCAgICB9IHJldHVybiBzZXQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrU2V0X2FkZEFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrU2V0X2FkZEFsbCgpO1xuXG52YXIgZXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbCkgcmV0dXJuIGVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9kZWxldGVBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhV2Vha1NldCA9IHJlcXVpcmVBV2Vha1NldCgpO1xuXHR2YXIgcmVtb3ZlID0gcmVxdWlyZVdlYWtTZXRIZWxwZXJzKCkucmVtb3ZlO1xuXG5cdC8vIGBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGVBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1dlYWtTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkZWxldGVBbGw6IGZ1bmN0aW9uIGRlbGV0ZUFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIGNvbGxlY3Rpb24gPSBhV2Vha1NldCh0aGlzKTtcblx0ICAgIHZhciBhbGxEZWxldGVkID0gdHJ1ZTtcblx0ICAgIHZhciB3YXNEZWxldGVkO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICB3YXNEZWxldGVkID0gcmVtb3ZlKGNvbGxlY3Rpb24sIGFyZ3VtZW50c1trXSk7XG5cdCAgICAgIGFsbERlbGV0ZWQgPSBhbGxEZWxldGVkICYmIHdhc0RlbGV0ZWQ7XG5cdCAgICB9IHJldHVybiAhIWFsbERlbGV0ZWQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbCgpO1xuXG52YXIgZXNuZXh0X3dlYWtTZXRfZnJvbSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9mcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtTZXRfZnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2Zyb20pIHJldHVybiBlc25leHRfd2Vha1NldF9mcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2Zyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBXZWFrU2V0SGVscGVycyA9IHJlcXVpcmVXZWFrU2V0SGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbkZyb20gPSByZXF1aXJlQ29sbGVjdGlvbkZyb20oKTtcblxuXHQvLyBgV2Vha1NldC5mcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha3NldC5mcm9tXG5cdCQoeyB0YXJnZXQ6ICdXZWFrU2V0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tOiBjcmVhdGVDb2xsZWN0aW9uRnJvbShXZWFrU2V0SGVscGVycy5XZWFrU2V0LCBXZWFrU2V0SGVscGVycy5hZGQsIGZhbHNlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrU2V0X2Zyb207XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha1NldF9mcm9tKCk7XG5cbnZhciBlc25leHRfd2Vha1NldF9vZiA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9vZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrU2V0X29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfb2YpIHJldHVybiBlc25leHRfd2Vha1NldF9vZjtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9vZiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFdlYWtTZXRIZWxwZXJzID0gcmVxdWlyZVdlYWtTZXRIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uT2YgPSByZXF1aXJlQ29sbGVjdGlvbk9mKCk7XG5cblx0Ly8gYFdlYWtTZXQub2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrc2V0Lm9mXG5cdCQoeyB0YXJnZXQ6ICdXZWFrU2V0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBvZjogY3JlYXRlQ29sbGVjdGlvbk9mKFdlYWtTZXRIZWxwZXJzLldlYWtTZXQsIFdlYWtTZXRIZWxwZXJzLmFkZCwgZmFsc2UpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtTZXRfb2Y7XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha1NldF9vZigpO1xuXG52YXIgd2ViX2ltbWVkaWF0ZSA9IHt9O1xuXG52YXIgd2ViX2NsZWFySW1tZWRpYXRlID0ge307XG5cbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aDtcbnZhciBoYXNSZXF1aXJlZFZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoO1xuXG5mdW5jdGlvbiByZXF1aXJlVmFsaWRhdGVBcmd1bWVudHNMZW5ndGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCkgcmV0dXJuIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoO1xuXHRoYXNSZXF1aXJlZFZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gMTtcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0dmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuXHQgIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG5cdCAgcmV0dXJuIHBhc3NlZDtcblx0fTtcblx0cmV0dXJuIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoO1xufVxuXG52YXIgZW52aXJvbm1lbnRJc0lvcztcbnZhciBoYXNSZXF1aXJlZEVudmlyb25tZW50SXNJb3M7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnZpcm9ubWVudElzSW9zICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc0lvcykgcmV0dXJuIGVudmlyb25tZW50SXNJb3M7XG5cdGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc0lvcyA9IDE7XG5cdHZhciB1c2VyQWdlbnQgPSByZXF1aXJlRW52aXJvbm1lbnRVc2VyQWdlbnQoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVkb3Mvbm8tdnVsbmVyYWJsZSAtLSBzYWZlXG5cdGVudmlyb25tZW50SXNJb3MgPSAvKD86aXBhZHxpcGhvbmV8aXBvZCkuKmFwcGxld2Via2l0L2kudGVzdCh1c2VyQWdlbnQpO1xuXHRyZXR1cm4gZW52aXJvbm1lbnRJc0lvcztcbn1cblxudmFyIGVudmlyb25tZW50O1xudmFyIGhhc1JlcXVpcmVkRW52aXJvbm1lbnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnZpcm9ubWVudCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudmlyb25tZW50KSByZXR1cm4gZW52aXJvbm1lbnQ7XG5cdGhhc1JlcXVpcmVkRW52aXJvbm1lbnQgPSAxO1xuXHQvKiBnbG9iYWwgQnVuLCBEZW5vIC0tIGRldGVjdGlvbiAqL1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciB1c2VyQWdlbnQgPSByZXF1aXJlRW52aXJvbm1lbnRVc2VyQWdlbnQoKTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXG5cdHZhciB1c2VyQWdlbnRTdGFydHNXaXRoID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHQgIHJldHVybiB1c2VyQWdlbnQuc2xpY2UoMCwgc3RyaW5nLmxlbmd0aCkgPT09IHN0cmluZztcblx0fTtcblxuXHRlbnZpcm9ubWVudCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0J1bi8nKSkgcmV0dXJuICdCVU4nO1xuXHQgIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdDbG91ZGZsYXJlLVdvcmtlcnMnKSkgcmV0dXJuICdDTE9VREZMQVJFJztcblx0ICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnRGVuby8nKSkgcmV0dXJuICdERU5PJztcblx0ICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnTm9kZS5qcy8nKSkgcmV0dXJuICdOT0RFJztcblx0ICBpZiAoZ2xvYmFsVGhpcy5CdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnKSByZXR1cm4gJ0JVTic7XG5cdCAgaWYgKGdsb2JhbFRoaXMuRGVubyAmJiB0eXBlb2YgRGVuby52ZXJzaW9uID09ICdvYmplY3QnKSByZXR1cm4gJ0RFTk8nO1xuXHQgIGlmIChjbGFzc29mKGdsb2JhbFRoaXMucHJvY2VzcykgPT09ICdwcm9jZXNzJykgcmV0dXJuICdOT0RFJztcblx0ICBpZiAoZ2xvYmFsVGhpcy53aW5kb3cgJiYgZ2xvYmFsVGhpcy5kb2N1bWVudCkgcmV0dXJuICdCUk9XU0VSJztcblx0ICByZXR1cm4gJ1JFU1QnO1xuXHR9KSgpO1xuXHRyZXR1cm4gZW52aXJvbm1lbnQ7XG59XG5cbnZhciBlbnZpcm9ubWVudElzTm9kZTtcbnZhciBoYXNSZXF1aXJlZEVudmlyb25tZW50SXNOb2RlO1xuXG5mdW5jdGlvbiByZXF1aXJlRW52aXJvbm1lbnRJc05vZGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnZpcm9ubWVudElzTm9kZSkgcmV0dXJuIGVudmlyb25tZW50SXNOb2RlO1xuXHRoYXNSZXF1aXJlZEVudmlyb25tZW50SXNOb2RlID0gMTtcblx0dmFyIEVOVklST05NRU5UID0gcmVxdWlyZUVudmlyb25tZW50KCk7XG5cblx0ZW52aXJvbm1lbnRJc05vZGUgPSBFTlZJUk9OTUVOVCA9PT0gJ05PREUnO1xuXHRyZXR1cm4gZW52aXJvbm1lbnRJc05vZGU7XG59XG5cbnZhciB0YXNrO1xudmFyIGhhc1JlcXVpcmVkVGFzaztcblxuZnVuY3Rpb24gcmVxdWlyZVRhc2sgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUYXNrKSByZXR1cm4gdGFzaztcblx0aGFzUmVxdWlyZWRUYXNrID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgYXBwbHkgPSByZXF1aXJlRnVuY3Rpb25BcHBseSgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGh0bWwgPSByZXF1aXJlSHRtbCgpO1xuXHR2YXIgYXJyYXlTbGljZSA9IHJlcXVpcmVBcnJheVNsaWNlKCk7XG5cdHZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZURvY3VtZW50Q3JlYXRlRWxlbWVudCgpO1xuXHR2YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlVmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoKTtcblx0dmFyIElTX0lPUyA9IHJlcXVpcmVFbnZpcm9ubWVudElzSW9zKCk7XG5cdHZhciBJU19OT0RFID0gcmVxdWlyZUVudmlyb25tZW50SXNOb2RlKCk7XG5cblx0dmFyIHNldCA9IGdsb2JhbFRoaXMuc2V0SW1tZWRpYXRlO1xuXHR2YXIgY2xlYXIgPSBnbG9iYWxUaGlzLmNsZWFySW1tZWRpYXRlO1xuXHR2YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2Vzcztcblx0dmFyIERpc3BhdGNoID0gZ2xvYmFsVGhpcy5EaXNwYXRjaDtcblx0dmFyIEZ1bmN0aW9uID0gZ2xvYmFsVGhpcy5GdW5jdGlvbjtcblx0dmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsVGhpcy5NZXNzYWdlQ2hhbm5lbDtcblx0dmFyIFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXHR2YXIgY291bnRlciA9IDA7XG5cdHZhciBxdWV1ZSA9IHt9O1xuXHR2YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG5cdHZhciAkbG9jYXRpb24sIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG5cdGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBEZW5vIHRocm93cyBhIFJlZmVyZW5jZUVycm9yIG9uIGBsb2NhdGlvbmAgYWNjZXNzIHdpdGhvdXQgYC0tbG9jYXRpb25gIGZsYWdcblx0ICAkbG9jYXRpb24gPSBnbG9iYWxUaGlzLmxvY2F0aW9uO1xuXHR9KTtcblxuXHR2YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgaWYgKGhhc093bihxdWV1ZSwgaWQpKSB7XG5cdCAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG5cdCAgICBkZWxldGUgcXVldWVbaWRdO1xuXHQgICAgZm4oKTtcblx0ICB9XG5cdH07XG5cblx0dmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICBydW4oaWQpO1xuXHQgIH07XG5cdH07XG5cblx0dmFyIGV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICBydW4oZXZlbnQuZGF0YSk7XG5cdH07XG5cblx0dmFyIGdsb2JhbFBvc3RNZXNzYWdlRGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cblx0ICBnbG9iYWxUaGlzLnBvc3RNZXNzYWdlKFN0cmluZyhpZCksICRsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyAkbG9jYXRpb24uaG9zdCk7XG5cdH07XG5cblx0Ly8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuXHRpZiAoIXNldCB8fCAhY2xlYXIpIHtcblx0ICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoaGFuZGxlcikge1xuXHQgICAgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSk7XG5cdCAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuXHQgICAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cywgMSk7XG5cdCAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICBhcHBseShmbiwgdW5kZWZpbmVkLCBhcmdzKTtcblx0ICAgIH07XG5cdCAgICBkZWZlcihjb3VudGVyKTtcblx0ICAgIHJldHVybiBjb3VudGVyO1xuXHQgIH07XG5cdCAgY2xlYXIgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuXHQgICAgZGVsZXRlIHF1ZXVlW2lkXTtcblx0ICB9O1xuXHQgIC8vIE5vZGUuanMgMC44LVxuXHQgIGlmIChJU19OT0RFKSB7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgICAgICBwcm9jZXNzLm5leHRUaWNrKHJ1bm5lcihpZCkpO1xuXHQgICAgfTtcblx0ICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcblx0ICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgRGlzcGF0Y2gubm93KHJ1bm5lcihpZCkpO1xuXHQgICAgfTtcblx0ICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG5cdCAgLy8gZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82MjRcblx0ICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsICYmICFJU19JT1MpIHtcblx0ICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcblx0ICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuXHQgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBldmVudExpc3RlbmVyO1xuXHQgICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQpO1xuXHQgIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuXHQgIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG5cdCAgfSBlbHNlIGlmIChcblx0ICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lciAmJlxuXHQgICAgaXNDYWxsYWJsZShnbG9iYWxUaGlzLnBvc3RNZXNzYWdlKSAmJlxuXHQgICAgIWdsb2JhbFRoaXMuaW1wb3J0U2NyaXB0cyAmJlxuXHQgICAgJGxvY2F0aW9uICYmICRsb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6JyAmJlxuXHQgICAgIWZhaWxzKGdsb2JhbFBvc3RNZXNzYWdlRGVmZXIpXG5cdCAgKSB7XG5cdCAgICBkZWZlciA9IGdsb2JhbFBvc3RNZXNzYWdlRGVmZXI7XG5cdCAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG5cdCAgLy8gSUU4LVxuXHQgIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG5cdCAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuXHQgICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdCAgICAgICAgcnVuKGlkKTtcblx0ICAgICAgfTtcblx0ICAgIH07XG5cdCAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcblx0ICB9IGVsc2Uge1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cblx0dGFzayA9IHtcblx0ICBzZXQ6IHNldCxcblx0ICBjbGVhcjogY2xlYXJcblx0fTtcblx0cmV0dXJuIHRhc2s7XG59XG5cbnZhciBoYXNSZXF1aXJlZFdlYl9jbGVhckltbWVkaWF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVdlYl9jbGVhckltbWVkaWF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYl9jbGVhckltbWVkaWF0ZSkgcmV0dXJuIHdlYl9jbGVhckltbWVkaWF0ZTtcblx0aGFzUmVxdWlyZWRXZWJfY2xlYXJJbW1lZGlhdGUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGNsZWFySW1tZWRpYXRlID0gcmVxdWlyZVRhc2soKS5jbGVhcjtcblxuXHQvLyBgY2xlYXJJbW1lZGlhdGVgIG1ldGhvZFxuXHQvLyBodHRwOi8vdzNjLmdpdGh1Yi5pby9zZXRJbW1lZGlhdGUvI3NpLWNsZWFySW1tZWRpYXRlXG5cdCQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogZ2xvYmFsVGhpcy5jbGVhckltbWVkaWF0ZSAhPT0gY2xlYXJJbW1lZGlhdGUgfSwge1xuXHQgIGNsZWFySW1tZWRpYXRlOiBjbGVhckltbWVkaWF0ZVxuXHR9KTtcblx0cmV0dXJuIHdlYl9jbGVhckltbWVkaWF0ZTtcbn1cblxudmFyIHdlYl9zZXRJbW1lZGlhdGUgPSB7fTtcblxudmFyIHNjaGVkdWxlcnNGaXg7XG52YXIgaGFzUmVxdWlyZWRTY2hlZHVsZXJzRml4O1xuXG5mdW5jdGlvbiByZXF1aXJlU2NoZWR1bGVyc0ZpeCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNjaGVkdWxlcnNGaXgpIHJldHVybiBzY2hlZHVsZXJzRml4O1xuXHRoYXNSZXF1aXJlZFNjaGVkdWxlcnNGaXggPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBhcHBseSA9IHJlcXVpcmVGdW5jdGlvbkFwcGx5KCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIEVOVklST05NRU5UID0gcmVxdWlyZUVudmlyb25tZW50KCk7XG5cdHZhciBVU0VSX0FHRU5UID0gcmVxdWlyZUVudmlyb25tZW50VXNlckFnZW50KCk7XG5cdHZhciBhcnJheVNsaWNlID0gcmVxdWlyZUFycmF5U2xpY2UoKTtcblx0dmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZVZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKCk7XG5cblx0dmFyIEZ1bmN0aW9uID0gZ2xvYmFsVGhpcy5GdW5jdGlvbjtcblx0Ly8gZGlydHkgSUU5LSBhbmQgQnVuIDAuMy4wLSBjaGVja3Ncblx0dmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOVklST05NRU5UID09PSAnQlVOJyAmJiAoZnVuY3Rpb24gKCkge1xuXHQgIHZhciB2ZXJzaW9uID0gZ2xvYmFsVGhpcy5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuXHQgIHJldHVybiB2ZXJzaW9uLmxlbmd0aCA8IDMgfHwgdmVyc2lvblswXSA9PT0gJzAnICYmICh2ZXJzaW9uWzFdIDwgMyB8fCB2ZXJzaW9uWzFdID09PSAnMycgJiYgdmVyc2lvblsyXSA9PT0gJzAnKTtcblx0fSkoKTtcblxuXHQvLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcblx0c2NoZWR1bGVyc0ZpeCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGhhc1RpbWVBcmcpIHtcblx0ICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuXHQgIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcblx0ICAgIHZhciBib3VuZEFyZ3MgPSB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKSA+IGZpcnN0UGFyYW1JbmRleDtcblx0ICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG5cdCAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcblx0ICAgIHZhciBjYWxsYmFjayA9IGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG5cdCAgICB9IDogZm47XG5cdCAgICByZXR1cm4gaGFzVGltZUFyZyA/IHNjaGVkdWxlcihjYWxsYmFjaywgdGltZW91dCkgOiBzY2hlZHVsZXIoY2FsbGJhY2spO1xuXHQgIH0gOiBzY2hlZHVsZXI7XG5cdH07XG5cdHJldHVybiBzY2hlZHVsZXJzRml4O1xufVxuXG52YXIgaGFzUmVxdWlyZWRXZWJfc2V0SW1tZWRpYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlV2ViX3NldEltbWVkaWF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYl9zZXRJbW1lZGlhdGUpIHJldHVybiB3ZWJfc2V0SW1tZWRpYXRlO1xuXHRoYXNSZXF1aXJlZFdlYl9zZXRJbW1lZGlhdGUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHNldFRhc2sgPSByZXF1aXJlVGFzaygpLnNldDtcblx0dmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlU2NoZWR1bGVyc0ZpeCgpO1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xuXHR2YXIgc2V0SW1tZWRpYXRlID0gZ2xvYmFsVGhpcy5zZXRJbW1lZGlhdGUgPyBzY2hlZHVsZXJzRml4KHNldFRhc2ssIGZhbHNlKSA6IHNldFRhc2s7XG5cblx0Ly8gYHNldEltbWVkaWF0ZWAgbWV0aG9kXG5cdC8vIGh0dHA6Ly93M2MuZ2l0aHViLmlvL3NldEltbWVkaWF0ZS8jc2ktc2V0SW1tZWRpYXRlXG5cdCQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogZ2xvYmFsVGhpcy5zZXRJbW1lZGlhdGUgIT09IHNldEltbWVkaWF0ZSB9LCB7XG5cdCAgc2V0SW1tZWRpYXRlOiBzZXRJbW1lZGlhdGVcblx0fSk7XG5cdHJldHVybiB3ZWJfc2V0SW1tZWRpYXRlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRXZWJfaW1tZWRpYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlV2ViX2ltbWVkaWF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFdlYl9pbW1lZGlhdGUpIHJldHVybiB3ZWJfaW1tZWRpYXRlO1xuXHRoYXNSZXF1aXJlZFdlYl9pbW1lZGlhdGUgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5cdHJlcXVpcmVXZWJfY2xlYXJJbW1lZGlhdGUoKTtcblx0cmVxdWlyZVdlYl9zZXRJbW1lZGlhdGUoKTtcblx0cmV0dXJuIHdlYl9pbW1lZGlhdGU7XG59XG5cbnJlcXVpcmVXZWJfaW1tZWRpYXRlKCk7XG5cbi8vIChPcHRpb25hbCkgSW1wb3J0IHBvbHlmaWxscyBzbyB0aGF0IEJhYmVsIHdpbGwgaW5jbHVkZSB0aGVtIGluIHRoZSBidW5kbGUuXG4vLyBEZWJvdW5jZSBoZWxwZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpIHtcbiAgbGV0IHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE1MDtcbiAgbGV0IHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKSwgd2FpdCk7XG4gIH07XG59XG5cbi8vIERldGVybWluZSB0aGUgY3VycmVudCBhY3Rpb24gKFwiZXF1YWxpemVcIiBvciBcInJlc2V0XCIpIGJhc2VkIG9uIGFkdmFuY2VkIGJyZWFrcG9pbnRzLlxuZnVuY3Rpb24gZ2V0Q3VycmVudEFjdGlvbigpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHdpbmRvdy5lcXVhbGl6ZUhlaWdodHNPcHRpb25zIHx8IHt9O1xuICBpZiAob3B0aW9ucy5icmVha3BvaW50cyAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMuYnJlYWtwb2ludHMpKSB7XG4gICAgZm9yIChsZXQgYnAgb2Ygb3B0aW9ucy5icmVha3BvaW50cykge1xuICAgICAgY29uc3QgbWluID0gYnAubWluICE9PSB1bmRlZmluZWQgPyBicC5taW4gOiAwO1xuICAgICAgY29uc3QgbWF4ID0gYnAubWF4ICE9PSB1bmRlZmluZWQgPyBicC5tYXggOiBJbmZpbml0eTtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtaW4gJiYgd2luZG93LmlubmVyV2lkdGggPD0gbWF4KSB7XG4gICAgICAgIHJldHVybiBicC5hY3Rpb247IC8vIFwiZXF1YWxpemVcIiBvciBcInJlc2V0XCJcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5taW5XaWR0aCkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IG9wdGlvbnMubWluV2lkdGggPyBcInJlc2V0XCIgOiBcImVxdWFsaXplXCI7XG4gIH1cbiAgcmV0dXJuIFwiZXF1YWxpemVcIjtcbn1cblxuLy8gTWFpbiBlcXVhbGl6YXRpb24gZnVuY3Rpb24gc3VwcG9ydGluZyBkYXRhIGF0dHJpYnV0ZSBvciBjbGFzcy1iYXNlZCBncm91cGluZy5cbmZ1bmN0aW9uIGVxdWFsaXplSGVpZ2h0cygpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHdpbmRvdy5lcXVhbGl6ZUhlaWdodHNPcHRpb25zIHx8IHt9O1xuICBjb25zdCBhY3Rpb24gPSBnZXRDdXJyZW50QWN0aW9uKCk7XG4gIGlmIChhY3Rpb24gPT09IFwicmVzZXRcIikge1xuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXF1YWxpemVdLCBbY2xhc3MqPVwiZWgtXCJdJyk7XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgb3B0aW9ucy5jYWxsYmFjayh7fSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVxdWFsaXplXSwgW2NsYXNzKj1cImVoLVwiXScpO1xuICBjb25zdCBncm91cHMgPSB7fTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgbGV0IGdyb3VwS2V5ID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1lcXVhbGl6ZVwiKTtcbiAgICBpZiAoIWdyb3VwS2V5KSB7XG4gICAgICBncm91cEtleSA9IEFycmF5LmZyb20oZWwuY2xhc3NMaXN0KS5maW5kKGNscyA9PiBjbHMuc3RhcnRzV2l0aChcImVoLVwiKSk7XG4gICAgfVxuICAgIGlmIChncm91cEtleSkge1xuICAgICAgaWYgKCFncm91cHNbZ3JvdXBLZXldKSB7XG4gICAgICAgIGdyb3Vwc1tncm91cEtleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tncm91cEtleV0ucHVzaChlbCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKGdyb3VwS2V5ID0+IHtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICBncm91cHNbZ3JvdXBLZXldLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgfSk7XG4gICAgZ3JvdXBzW2dyb3VwS2V5XS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIG1heEhlaWdodCA9IE1hdGgubWF4KG1heEhlaWdodCwgZWwub2Zmc2V0SGVpZ2h0KTtcbiAgICB9KTtcbiAgICBncm91cHNbZ3JvdXBLZXldLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7bWF4SGVpZ2h0fXB4YDtcbiAgICB9KTtcbiAgfSk7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgb3B0aW9ucy5jYWxsYmFjayhncm91cHMpO1xuICB9XG59XG5cbi8vIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIGZvciB0aGUgcmVzaXplIGV2ZW50LlxuY29uc3QgZGVib3VuY2VkRXF1YWxpemVIZWlnaHRzID0gZGVib3VuY2UoZXF1YWxpemVIZWlnaHRzLCAxNTApO1xuXG4vLyBSdW4gZXF1YWxpemVIZWlnaHRzIHdoZW4gdGhlIERPTSBpcyByZWFkeS5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSB7XG4gIGVxdWFsaXplSGVpZ2h0cygpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXF1YWxpemVIZWlnaHRzKTtcbn1cblxuLy8gVXNlIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gb24gd2luZG93IHJlc2l6ZS5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlZEVxdWFsaXplSGVpZ2h0cyk7XG5cbmV4cG9ydCB7IGVxdWFsaXplSGVpZ2h0cyBhcyBkZWZhdWx0IH07XG4iLCIvLyBFcXVhbGl6ZSBIZWlnaHQgYW5kIEJyZWFrcG9pbnRcbndpbmRvdy5lcXVhbGl6ZUhlaWdodHNPcHRpb25zID0ge1xuXHRicmVha3BvaW50czogW1xuXHRcdHsgbWluOiAwLCBtYXg6IDc2NywgYWN0aW9uOiBcInJlc2V0XCIgfSxcblx0XHR7IG1pbjogNzY4LCBhY3Rpb246IFwiZXF1YWxpemVcIiB9LFxuXHRdLFxufTtcblxuaW1wb3J0IFwiZXF1YWxpemUtaGVpZ2h0cy9ydW50aW1lXCI7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcblx0Ly8gRGVidWdcblx0Y29uc29sZS5sb2coXG5cdFx0XCJEZXNrdG9wIG1lbnUgaXRlbXMgd2l0aCBjaGlsZHJlbjpcIixcblx0XHQkKFwiLmhlYWRlci1kZXNrdG9wLW1lbnUgLm1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKS5sZW5ndGhcblx0KTtcblx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBpdGVtcyB3aXRoIHN1YjpcIiwgJChcIiNjc3NtZW51IGxpLmhhcy1zdWJcIikubGVuZ3RoKTtcblxuXHQvLyBIZWxwZXI6IGNsb3NlIGFsbCBzdWJtZW51c1xuXHRmdW5jdGlvbiBjbG9zZUFsbCgpIHtcblx0XHQkKFwiLnN1Yi1tZW51XCIpLnNsaWRlVXAoKTtcblx0XHQkKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKVxuXHRcdFx0LnJlbW92ZUNsYXNzKFwib3BlblwiKVxuXHRcdFx0LmZpbmQoXCI+IGFcIilcblx0XHRcdC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuXHR9XG5cblx0Ly8gVG9nZ2xlIGhhbmRsZXIgZm9yIGFuY2hvcnMgdGhhdCBoYXZlIGEgc3VibWVudVxuXHQkKFxuXHRcdFwiI21lbnUtcHJpbWFyeS1tZW51IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAjbWVudS10b3AtbWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiXG5cdCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBuYXZpZ2F0aW9uXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gZG9uJ3QgYnViYmxlIHRvIGRvY3VtZW50XG5cblx0XHRjb25zdCAkbGkgPSAkKHRoaXMpLnBhcmVudChcImxpXCIpO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIG90aGVyIG1lbnUncyBzdWJtZW51cyBmaXJzdFxuXHRcdGlmICgkbGkuY2xvc2VzdChcIiNtZW51LXByaW1hcnktbWVudVwiKS5sZW5ndGgpIHtcblx0XHRcdCQoXCIjbWVudS10b3AtbWVudSAuc3ViLW1lbnVcIilcblx0XHRcdFx0LnNsaWRlVXAoKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LnJlbW92ZUNsYXNzKFwib3BlblwiKVxuXHRcdFx0XHQuZmluZChcIj4gYVwiKVxuXHRcdFx0XHQuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcIiNtZW51LXByaW1hcnktbWVudSAuc3ViLW1lbnVcIilcblx0XHRcdFx0LnNsaWRlVXAoKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LnJlbW92ZUNsYXNzKFwib3BlblwiKVxuXHRcdFx0XHQuZmluZChcIj4gYVwiKVxuXHRcdFx0XHQuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0XHR9XG5cblx0XHQvLyBUb2dnbGUgdGhpcyBvbmUgYW5kIGNsb3NlIHNpYmxpbmdzXG5cdFx0Y29uc3QgJHN1Ym1lbnUgPSAkbGkuY2hpbGRyZW4oXCIuc3ViLW1lbnVcIik7XG5cdFx0JGxpLnRvZ2dsZUNsYXNzKFwib3BlblwiKVxuXHRcdFx0LnNpYmxpbmdzKClcblx0XHRcdC5yZW1vdmVDbGFzcyhcIm9wZW5cIilcblx0XHRcdC5jaGlsZHJlbihcIi5zdWItbWVudVwiKVxuXHRcdFx0LnNsaWRlVXAoKVxuXHRcdFx0LnBhcmVudCgpXG5cdFx0XHQuZmluZChcIj4gYVwiKVxuXHRcdFx0LmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG5cblx0XHQkc3VibWVudS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVG9nZ2xlKCk7XG5cdFx0JCh0aGlzKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCAkbGkuaGFzQ2xhc3MoXCJvcGVuXCIpID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpO1xuXHR9KTtcblxuXHQvLyBDbGljayBvdXRzaWRlIGNsb3NlcyBldmVyeXRoaW5nXG5cdCQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGNsb3NlQWxsKCk7XG5cdH0pO1xuXG5cdC8vIChOaWNlIHRvIGhhdmUpIGtleWJvYXJkIGFjY2Vzc2liaWxpdHk6IG9wZW4vY2xvc2Ugb24gRW50ZXIvU3BhY2Vcblx0JChcblx0XHRcIiNtZW51LXByaW1hcnktbWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgI21lbnUtdG9wLW1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIlxuXHQpXG5cdFx0LmF0dHIoe1xuXHRcdFx0XCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuXHRcdFx0XCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcblx0XHRcdHJvbGU6IFwiYnV0dG9uXCIsXG5cdFx0fSlcblx0XHQub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoXCJjbGlja1wiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHQvLyBNb2JpbGUgTWVudVxuXHQkKFwiLm9wZW4tbWVudS1idXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdCQoXCIjbW9iaWxlLW1lbnVcIikuc2xpZGVEb3duKCk7XG5cdFx0JChcImJvZHlcIikuY3NzKFwib3ZlcmZsb3cteVwiLCBcImhpZGRlblwiKTtcblx0XHQkKFwiYm9keVwiKS5jc3MoXCJwb3NpdGlvblwiLCBcImZpeGVkXCIpO1xuXHR9KTtcblx0JChcIi5jbG9zZS1tZW51LWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0JChcIiNtb2JpbGUtbWVudVwiKS5zbGlkZVVwKCk7XG5cdFx0JChcImJvZHlcIikuY3NzKFwib3ZlcmZsb3cteVwiLCBcImF1dG9cIik7XG5cdFx0JChcImJvZHlcIikuY3NzKFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKTtcblx0fSk7XG5cblx0JChcIiNjc3NtZW51IGxpLmhhcy1zdWIgPiBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRjb25zb2xlLmxvZyhcIk1vYmlsZSBtZW51IGl0ZW0gY2xpY2tlZFwiKTtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHZhciBlbGVtZW50ID0gJCh0aGlzKS5wYXJlbnQoXCJsaVwiKTtcblx0XHRjb25zb2xlLmxvZyhcIk1vYmlsZSBtZW51IGVsZW1lbnQ6XCIsIGVsZW1lbnQpO1xuXG5cdFx0aWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJvcGVuXCIpKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUNsYXNzKFwib3BlblwiKTtcblx0XHRcdGVsZW1lbnQuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcblx0XHRcdGVsZW1lbnQuZmluZChcInVsXCIpLnNsaWRlVXAoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5hZGRDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LmNoaWxkcmVuKFwidWxcIikuc2xpZGVEb3duKCk7XG5cdFx0XHRlbGVtZW50LnNpYmxpbmdzKFwibGlcIikuY2hpbGRyZW4oXCJ1bFwiKS5zbGlkZVVwKCk7XG5cdFx0XHRlbGVtZW50LnNpYmxpbmdzKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LnNpYmxpbmdzKFwibGlcIikuZmluZChcInVsXCIpLnNsaWRlVXAoKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBNb2R1bGVzIGluIHRoaXMgYnVuZGxlXG5cdCAqIEBsaWNlbnNlXG5cdCAqXG5cdCAqIG1vZGFsLXZpZGVvOlxuXHQgKiAgIGxpY2Vuc2U6IGFwcGxlcGxlXG5cdCAqICAgYXV0aG9yOiBhcHBsZXBsZVxuXHQgKiAgIGhvbWVwYWdlOiBodHRwOi8vZGV2ZWxvcGVyLmEtYmxvZ2Ntcy5qcFxuXHQgKiAgIHZlcnNpb246IDIuNC44XG5cdCAqXG5cdCAqIGN1c3RvbS1ldmVudC1wb2x5ZmlsbDpcblx0ICogICBsaWNlbnNlOiBNSVQgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpXG5cdCAqICAgY29udHJpYnV0b3JzOiBGcmFuayBQYW5ldHRhLCBNaWtoYWlsIFJlZW5rbyA8cmVlbmtvQHlhbmRleC5ydT4sIEpvc2NoYSBGZXRoIDxqb3NjaGFAZmV0aC5jb20+XG5cdCAqICAgaG9tZXBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9rcmFtYnVobC9jdXN0b20tZXZlbnQtcG9seWZpbGwjcmVhZG1lXG5cdCAqICAgdmVyc2lvbjogMC4zLjBcblx0ICpcblx0ICogZXM2LW9iamVjdC1hc3NpZ246XG5cdCAqICAgbGljZW5zZTogTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuXHQgKiAgIGF1dGhvcjogUnViw6luIE5vcnRlIDxydWJlbm5vcnRlQGdtYWlsLmNvbT5cblx0ICogICBob21lcGFnZTogaHR0cHM6Ly9naXRodWIuY29tL3J1YmVubm9ydGUvZXM2LW9iamVjdC1hc3NpZ25cblx0ICogICB2ZXJzaW9uOiAxLjEuMFxuXHQgKlxuXHQgKiBUaGlzIGhlYWRlciBpcyBnZW5lcmF0ZWQgYnkgbGljZW5zaWZ5IChodHRwczovL2dpdGh1Yi5jb20vdHdhZGEvbGljZW5zaWZ5KVxuXHQgKi9cblx0IShmdW5jdGlvbiAoKSB7XG5cdFx0ZnVuY3Rpb24gZSh0LCBuLCBvKSB7XG5cdFx0XHRmdW5jdGlvbiBpKGEsIGwpIHtcblx0XHRcdFx0aWYgKCFuW2FdKSB7XG5cdFx0XHRcdFx0aWYgKCF0W2FdKSB7XG5cdFx0XHRcdFx0XHR2YXIgdSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgcmVxdWlyZSAmJiByZXF1aXJlO1xuXHRcdFx0XHRcdFx0aWYgKCFsICYmIHUpIHJldHVybiB1KGEsICEwKTtcblx0XHRcdFx0XHRcdGlmIChyKSByZXR1cm4gcihhLCAhMCk7XG5cdFx0XHRcdFx0XHR2YXIgZCA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBhICsgXCInXCIpO1xuXHRcdFx0XHRcdFx0dGhyb3cgKChkLmNvZGUgPSBcIk1PRFVMRV9OT1RfRk9VTkRcIiksIGQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgYyA9IChuW2FdID0geyBleHBvcnRzOiB7fSB9KTtcblx0XHRcdFx0XHR0W2FdWzBdLmNhbGwoXG5cdFx0XHRcdFx0XHRjLmV4cG9ydHMsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbiA9IHRbYV1bMV1bZV07XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpKG4gfHwgZSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Yyxcblx0XHRcdFx0XHRcdGMuZXhwb3J0cyxcblx0XHRcdFx0XHRcdGUsXG5cdFx0XHRcdFx0XHR0LFxuXHRcdFx0XHRcdFx0bixcblx0XHRcdFx0XHRcdG9cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBuW2FdLmV4cG9ydHM7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKFxuXHRcdFx0XHR2YXIgciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgcmVxdWlyZSAmJiByZXF1aXJlLCBhID0gMDtcblx0XHRcdFx0YSA8IG8ubGVuZ3RoO1xuXHRcdFx0XHRhKytcblx0XHRcdClcblx0XHRcdFx0aShvW2FdKTtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0XHRyZXR1cm4gZTtcblx0fSkoKShcblx0XHR7XG5cdFx0XHQxOiBbXG5cdFx0XHRcdGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhciBvID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChcInRlc3RcIik7XG5cdFx0XHRcdFx0XHRpZiAoKG8ucHJldmVudERlZmF1bHQoKSwgITAgIT09IG8uZGVmYXVsdFByZXZlbnRlZCkpXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHRcIik7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0dmFyIGkgPSBmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgbiwgbztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQodCA9IHQgfHwge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnViYmxlczogITEsXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiAhMSxcblx0XHRcdFx0XHRcdFx0XHRcdGRldGFpbDogdm9pZCAwLFxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdChuID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSksXG5cdFx0XHRcdFx0XHRcdFx0bi5pbml0Q3VzdG9tRXZlbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0dC5idWJibGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0dC5jYW5jZWxhYmxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0dC5kZXRhaWxcblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdChvID0gbi5wcmV2ZW50RGVmYXVsdCksXG5cdFx0XHRcdFx0XHRcdFx0KG4ucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvLmNhbGwodGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImRlZmF1bHRQcmV2ZW50ZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICEwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9ICEwO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHQoaS5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlKSxcblx0XHRcdFx0XHRcdFx0KHdpbmRvdy5DdXN0b21FdmVudCA9IGkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0e30sXG5cdFx0XHRdLFxuXHRcdFx0MjogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIG8oZSwgdCkge1xuXHRcdFx0XHRcdFx0aWYgKHZvaWQgMCA9PT0gZSB8fCBudWxsID09PSBlKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHRcdFx0XHRcdFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCJcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHRcdHZhciBuID0gT2JqZWN0KGUpLCBvID0gMTtcblx0XHRcdFx0XHRcdFx0byA8IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdG8rK1xuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpID0gYXJndW1lbnRzW29dO1xuXHRcdFx0XHRcdFx0XHRpZiAodm9pZCAwICE9PSBpICYmIG51bGwgIT09IGkpXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByID0gT2JqZWN0LmtleXMoT2JqZWN0KGkpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YSA9IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGwgPSByLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0XHRcdGEgPCBsO1xuXHRcdFx0XHRcdFx0XHRcdFx0YSsrXG5cdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdSA9IHJbYV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCAwICE9PSBkICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGQuZW51bWVyYWJsZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoblt1XSA9IGlbdV0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmdW5jdGlvbiBpKCkge1xuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbiB8fFxuXHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBcImFzc2lnblwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogITEsXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiAhMCxcblx0XHRcdFx0XHRcdFx0XHR3cml0YWJsZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG8sXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0LmV4cG9ydHMgPSB7IGFzc2lnbjogbywgcG9seWZpbGw6IGkgfTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e30sXG5cdFx0XHRdLFxuXHRcdFx0MzogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdHZhciBvID0gZShcIi4uL2luZGV4XCIpLFxuXHRcdFx0XHRcdFx0aSA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdGUuZm4ubW9kYWxWaWRlbyA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFwic3RyaW5nc1wiID09IHR5cGVvZiBlIHx8IG5ldyBvKHRoaXMsIGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpc1xuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKVxuXHRcdFx0XHRcdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgaSk7XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgciA9IHdpbmRvdy5qUXVlcnkgPyB3aW5kb3cualF1ZXJ5IDogd2luZG93LiQ7XG5cdFx0XHRcdFx0XHR2b2lkIDAgIT09IHIgJiYgaShyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dC5leHBvcnRzID0gaTtcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBcIi4uL2luZGV4XCI6IDUgfSxcblx0XHRcdF0sXG5cdFx0XHQ0OiBbXG5cdFx0XHRcdGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gbyhlLCB0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIShlIGluc3RhbmNlb2YgdCkpXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFx0XCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6ICEwIH0pO1xuXHRcdFx0XHRcdHZhciBpID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIGUoZSwgdCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbyA9IHRbbl07XG5cdFx0XHRcdFx0XHRcdFx0KG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSksXG5cdFx0XHRcdFx0XHRcdFx0XHQoby5jb25maWd1cmFibGUgPSAhMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSxcblx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBvLmtleSwgbyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAodCwgbiwgbykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbiAmJiBlKHQucHJvdG90eXBlLCBuKSwgbyAmJiBlKHQsIG8pLCB0O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdGUoXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIik7XG5cdFx0XHRcdFx0dmFyIHIgPSBlKFwiLi4vbGliL3V0aWxcIiksXG5cdFx0XHRcdFx0XHRhID0gZShcImVzNi1vYmplY3QtYXNzaWduXCIpLmFzc2lnbixcblx0XHRcdFx0XHRcdGwgPSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5uZWw6IFwieW91dHViZVwiLFxuXHRcdFx0XHRcdFx0XHRmYWNlYm9vazoge30sXG5cdFx0XHRcdFx0XHRcdHlvdXR1YmU6IHtcblx0XHRcdFx0XHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0XHRcdFx0XHRjY19sb2FkX3BvbGljeTogMSxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sczogMSxcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxla2I6IDAsXG5cdFx0XHRcdFx0XHRcdFx0ZW5hYmxlanNhcGk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0ZW5kOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdGZzOiAxLFxuXHRcdFx0XHRcdFx0XHRcdGgxOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdGl2X2xvYWRfcG9saWN5OiAxLFxuXHRcdFx0XHRcdFx0XHRcdGxvb3A6IDAsXG5cdFx0XHRcdFx0XHRcdFx0bW9kZXN0YnJhbmRpbmc6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0bXV0ZTogMCxcblx0XHRcdFx0XHRcdFx0XHRvcmlnaW46IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0cGxheXNpbmxpbmU6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0cmVsOiAwLFxuXHRcdFx0XHRcdFx0XHRcdHNob3dpbmZvOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHdtb2RlOiBcInRyYW5zcGFyZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGhlbWU6IFwiZGFya1wiLFxuXHRcdFx0XHRcdFx0XHRcdG5vY29va2llOiAhMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0cmF0aW86IFwiMTY6OVwiLFxuXHRcdFx0XHRcdFx0XHR2aW1lbzoge1xuXHRcdFx0XHRcdFx0XHRcdGFwaTogITEsXG5cdFx0XHRcdFx0XHRcdFx0YXV0b3BhdXNlOiAhMCxcblx0XHRcdFx0XHRcdFx0XHRhdXRvcGxheTogITAsXG5cdFx0XHRcdFx0XHRcdFx0YnlsaW5lOiAhMCxcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjazogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sczogITAsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdGxvb3A6ICExLFxuXHRcdFx0XHRcdFx0XHRcdG1heGhlaWdodDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRtYXh3aWR0aDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRtdXRlZDogITEsXG5cdFx0XHRcdFx0XHRcdFx0cGxheWVyX2lkOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHBvcnRyYWl0OiAhMCxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0eGh0bWw6ICExLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRhbGxvd0Z1bGxTY3JlZW46ICEwLFxuXHRcdFx0XHRcdFx0XHRhbGxvd0F1dG9wbGF5OiAhMCxcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uU3BlZWQ6IDMwMCxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lczoge1xuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW86IFwibW9kYWwtdmlkZW9cIixcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvQ2xvc2U6IFwibW9kYWwtdmlkZW8tY2xvc2VcIixcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvQm9keTogXCJtb2RhbC12aWRlby1ib2R5XCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0lubmVyOiBcIm1vZGFsLXZpZGVvLWlubmVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0lmcmFtZVdyYXA6IFwibW9kYWwtdmlkZW8tbW92aWUtd3JhcFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW9DbG9zZUJ0bjogXCJtb2RhbC12aWRlby1jbG9zZS1idG5cIixcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0YXJpYToge1xuXHRcdFx0XHRcdFx0XHRcdG9wZW5NZXNzYWdlOiBcIllvdSBqdXN0IG9wZW5uZWQgdGhlIG1vZGFsIHZpZGVvXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzbWlzc0J0bk1lc3NhZ2U6XG5cdFx0XHRcdFx0XHRcdFx0XHRcIkNsb3NlIHRoZSBtb2RhbCBieSBjbGlja2luZyBoZXJlXCIsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dSA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIGUodCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBpID0gdGhpcztcblx0XHRcdFx0XHRcdFx0XHRvKHRoaXMsIGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciB1ID0gYSh7fSwgbCwgbiksXG5cdFx0XHRcdFx0XHRcdFx0XHRkID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIiA9PSB0eXBlb2YgdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdCxcblx0XHRcdFx0XHRcdFx0XHRcdGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSxcblx0XHRcdFx0XHRcdFx0XHRcdHMgPSB1LmNsYXNzTmFtZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRmID0gdS5hbmltYXRpb25TcGVlZDtcblx0XHRcdFx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZCwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiQVwiID09PSBlLnRhZ05hbWUgJiYgdC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbiA9IGUuZGF0YXNldC52aWRlb0lkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG8gPSBlLmRhdGFzZXQuY2hhbm5lbCB8fCB1LmNoYW5uZWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YSA9ICgwLCByLmdldFVuaXFJZCkoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuZGF0YXNldC52aWRlb1VybCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5nZXRWaWRlb1VybCh1LCBvLCBuKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkID0gaS5nZXRIdG1sKHUsIGwsIGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoMCwgci5hcHBlbmQpKGMsIGQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG0gPSB2LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIi5qcy1tb2RhbC12aWRlby1kaXNtaXNzLWJ0blwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwID0gdm9pZCAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQocCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgZSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5nZXRXaWR0aEZ1bGZpbGxBc3BlY3RSYXRpbyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHUucmF0aW8sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJtb2RhbC12aWRlby1pbm5lci1cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dC5zdHlsZS5tYXhXaWR0aCAhPT1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodC5zdHlsZS5tYXhXaWR0aCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2LmZvY3VzKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0di5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoMCwgci5hZGRDbGFzcykoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzLm1vZGFsVmlkZW9DbG9zZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJyZXNpemVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIucmVtb3ZlKSh2KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIGYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0di5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJrZXlkb3duXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ5ID09PSBlLndoaWNoICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGUucHJldmVudERlZmF1bHQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gbS5mb2N1cygpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICh2LnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImFyaWEtbGFiZWxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHYuZm9jdXMoKSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInJlc2l6ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoMCwgci50cmlnZ2VyRXZlbnQpKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0aShlLCBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJnZXRQYWRkaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB0ID0gZS5zcGxpdChcIjpcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuID0gTnVtYmVyKHRbMF0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoMTAwICogTnVtYmVyKHRbMV0pKSAvIG4gKyBcIiVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0V2lkdGhGdWxmaWxsQXNwZWN0UmF0aW9cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG8gPSBlLnNwbGl0KFwiOlwiKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkgPSBOdW1iZXIob1swXSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyID0gTnVtYmVyKG9bMV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0IDwgbiAqIChyIC8gaSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gTWF0aC5mbG9vcigoaSAvIHIpICogdCkgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCIxMDAlXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0UXVlcnlTdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHQgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhlKS5mb3JFYWNoKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAobikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgKz1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCI9XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZVtuXSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIiZcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dC5zdWJzdHIoMCwgdC5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0VmlkZW9VcmxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwieW91dHViZVwiID09PSB0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHRoaXMuZ2V0WW91dHViZVVybChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnlvdXR1YmUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0blxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwidmltZW9cIiA9PT0gdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldFZpbWVvVXJsKGUudmltZW8sIG4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiZmFjZWJvb2tcIiA9PT0gdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldEZhY2Vib29rVXJsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuZmFjZWJvb2ssXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0blxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiY3VzdG9tXCIgPT09IHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gZS51cmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJnZXRWaW1lb1VybFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIj9cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFF1ZXJ5U3RyaW5nKGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJnZXRZb3V0dWJlVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBuID0gdGhpcy5nZXRRdWVyeVN0cmluZyhlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gITAgPT09IGUubm9jb29raWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCIvL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCI/XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCI/XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG47XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0RmFjZWJvb2tVcmxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiLy93d3cuZmFjZWJvb2suY29tL3YyLjEwL3BsdWdpbnMvdmlkZW8ucGhwP2hyZWY9aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZhY2Vib29rL3ZpZGVvcy9cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiJlwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0UXVlcnlTdHJpbmcoZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldEh0bWxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG8gPSB0aGlzLmdldFBhZGRpbmcoZS5yYXRpbyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpID0gZS5jbGFzc05hbWVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXFxuICAgICAgPGRpdiBjbGFzcz1cIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5tb2RhbFZpZGVvICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuYXJpYS5vcGVuTWVzc2FnZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgaWQ9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5tb2RhbFZpZGVvQm9keSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0lubmVyICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIiBpZD1cIm1vZGFsLXZpZGVvLWlubmVyLScgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0biArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5tb2RhbFZpZGVvSWZyYW1lV3JhcCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTonICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG8gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aS5tb2RhbFZpZGVvQ2xvc2VCdG4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JyBqcy1tb2RhbC12aWRlby1kaXNtaXNzLWJ0blwiIGFyaWEtbGFiZWw9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuYXJpYS5kaXNtaXNzQnRuTWVzc2FnZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlxcXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPSc0NjAnIGhlaWdodD0nMjMwJyBzcmM9XFxcIlwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcXFwiIGZyYW1lYm9yZGVyPScwJyBhbGxvd2Z1bGxzY3JlZW49XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5hbGxvd0Z1bGxTY3JlZW4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JyB0YWJpbmRleD1cIi0xXCIgYWxsb3c9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChlLmFsbG93QXV0b3BsYXlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcImF1dG9wbGF5O1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJcIikgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JyBhY2NlbGVyb21ldGVyOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdGVcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pKCk7XG5cdFx0XHRcdFx0KG4uZGVmYXVsdCA9IHUpLCAodC5leHBvcnRzID0gbi5kZWZhdWx0KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiLi4vbGliL3V0aWxcIjogNixcblx0XHRcdFx0XHRcImN1c3RvbS1ldmVudC1wb2x5ZmlsbFwiOiAxLFxuXHRcdFx0XHRcdFwiZXM2LW9iamVjdC1hc3NpZ25cIjogMixcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHQ1OiBbXG5cdFx0XHRcdGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHRcdFx0dC5leHBvcnRzID0gZShcIi4vY29yZS9cIik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgXCIuL2NvcmUvXCI6IDQgfSxcblx0XHRcdF0sXG5cdFx0XHQ2OiBbXG5cdFx0XHRcdGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcblx0XHRcdFx0XHQobi5hcHBlbmQgPSBmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0dmFyIG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdFx0Zm9yIChuLmlubmVySFRNTCA9IHQ7IG4uY2hpbGRyZW4ubGVuZ3RoID4gMDsgKVxuXHRcdFx0XHRcdFx0XHRlLmFwcGVuZENoaWxkKG4uY2hpbGRyZW5bMF0pO1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0KG4uZ2V0VW5pcUlkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdERhdGUubm93KCkudG9TdHJpbmcoMzYpICtcblx0XHRcdFx0XHRcdFx0XHRNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSlcblx0XHRcdFx0XHRcdFx0KS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQobi5yZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRlICYmIGUucGFyZW50Tm9kZSAmJiBlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdChuLmFkZENsYXNzID0gZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0ZS5jbGFzc0xpc3Rcblx0XHRcdFx0XHRcdFx0XHQ/IGUuY2xhc3NMaXN0LmFkZCh0KVxuXHRcdFx0XHRcdFx0XHRcdDogKGUuY2xhc3NOYW1lICs9IFwiIFwiICsgdCk7XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdChuLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvID0gdm9pZCAwO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cuQ3VzdG9tRXZlbnRcblx0XHRcdFx0XHRcdFx0XHQ/IChvID0gbmV3IEN1c3RvbUV2ZW50KHQsIHsgY2FuY2VsYWJsZTogITAgfSkpXG5cdFx0XHRcdFx0XHRcdFx0OiAoKG8gPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKSxcblx0XHRcdFx0XHRcdFx0XHQgIG8uaW5pdEN1c3RvbUV2ZW50KHQsICExLCAhMSwgbikpLFxuXHRcdFx0XHRcdFx0XHRcdGUuZGlzcGF0Y2hFdmVudChvKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7fSxcblx0XHRbM11cblx0KTtcblx0JChcIi5qcy1tb2RhbC1idG5cIikubW9kYWxWaWRlbygpO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9jb3JlXCI6IDAsXG5cdFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCI6IDAsXG5cdFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCI6IDAsXG5cdFwiZGlzdC1jdXN0b20tcGx1Z2lucy9jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXNcIjogMCxcblx0XCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiOiAwLFxuXHRcInN0eWxlXCI6IDAsXG5cdFwiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvbXBsZXRlX21vcnRnYWdlX3RoZW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvbXBsZXRlX21vcnRnYWdlX3RoZW1lXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9jb3JlLmpzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2NvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3R5bGUuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvc29jaWFsLXNoYXJlXCIsXCJzdHlsZVwiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVtcC1zb2NpYWwtc2hhcmUuY3NzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2NvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZW1wLWNvbXBsZXRlLW1vcnRnYWdlLWJsb2Nrcy1hbmQtcG9zdC10eXBlcy5jc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RlbXAta2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9ycy5jc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbGVpZGljby1jdXN0b20tY2FsY3VsYXRvcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvY29tcGxldGUtbW9ydGdhZ2UtYmxvY2tzLWFuZC1wb3N0LXR5cGVzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RlbXAta2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vycy5jc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9jb21wbGV0ZS1tb3J0Z2FnZS1ibG9ja3MtYW5kLXBvc3QtdHlwZXNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMvc29jaWFsLXNoYXJlXCIsXCJzdHlsZVwiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVtcC1xdWVyeWNyYWZ0LmNzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIndpbmRvdyIsImVxdWFsaXplSGVpZ2h0c09wdGlvbnMiLCJicmVha3BvaW50cyIsIm1pbiIsIm1heCIsImFjdGlvbiIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNsb3NlQWxsIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwiZmluZCIsImF0dHIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIiRsaSIsInBhcmVudCIsImNsb3Nlc3QiLCIkc3VibWVudSIsImNoaWxkcmVuIiwidG9nZ2xlQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVRvZ2dsZSIsImhhc0NsYXNzIiwicm9sZSIsImtleSIsInRyaWdnZXIiLCJjbGljayIsInNsaWRlRG93biIsImNzcyIsImVsZW1lbnQiLCJhZGRDbGFzcyIsInQiLCJuIiwibyIsImkiLCJhIiwibCIsInUiLCJyZXF1aXJlIiwiciIsImQiLCJFcnJvciIsImNvZGUiLCJjIiwiZXhwb3J0cyIsImNhbGwiLCJDdXN0b21FdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwcm90b3R5cGUiLCJFdmVudCIsIlR5cGVFcnJvciIsImFyZ3VtZW50cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiYXNzaWduIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsInBvbHlmaWxsIiwiZm4iLCJtb2RhbFZpZGVvIiwiZGVmaW5lIiwiYW1kIiwiY2hhbm5lbCIsImZhY2Vib29rIiwieW91dHViZSIsImF1dG9wbGF5IiwiY2NfbG9hZF9wb2xpY3kiLCJjb2xvciIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiZW5hYmxlanNhcGkiLCJlbmQiLCJmcyIsImgxIiwiaXZfbG9hZF9wb2xpY3kiLCJsb29wIiwibW9kZXN0YnJhbmRpbmciLCJtdXRlIiwib3JpZ2luIiwicGxheXNpbmxpbmUiLCJyZWwiLCJzaG93aW5mbyIsInN0YXJ0Iiwid21vZGUiLCJ0aGVtZSIsIm5vY29va2llIiwicmF0aW8iLCJ2aW1lbyIsImFwaSIsImF1dG9wYXVzZSIsImJ5bGluZSIsImNhbGxiYWNrIiwiaGVpZ2h0IiwibWF4aGVpZ2h0IiwibWF4d2lkdGgiLCJtdXRlZCIsInBsYXllcl9pZCIsInBvcnRyYWl0IiwidGl0bGUiLCJ3aWR0aCIsInhodG1sIiwiYWxsb3dGdWxsU2NyZWVuIiwiYWxsb3dBdXRvcGxheSIsImFuaW1hdGlvblNwZWVkIiwiY2xhc3NOYW1lcyIsIm1vZGFsVmlkZW9DbG9zZSIsIm1vZGFsVmlkZW9Cb2R5IiwibW9kYWxWaWRlb0lubmVyIiwibW9kYWxWaWRlb0lmcmFtZVdyYXAiLCJtb2RhbFZpZGVvQ2xvc2VCdG4iLCJhcmlhIiwib3Blbk1lc3NhZ2UiLCJkaXNtaXNzQnRuTWVzc2FnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwicyIsImYiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhZ05hbWUiLCJkYXRhc2V0IiwidmlkZW9JZCIsImdldFVuaXFJZCIsInZpZGVvVXJsIiwiZ2V0VmlkZW9VcmwiLCJnZXRIdG1sIiwiYXBwZW5kIiwidiIsImdldEVsZW1lbnRCeUlkIiwibSIsInAiLCJiIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldFdpZHRoRnVsZmlsbEFzcGVjdFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJtYXhXaWR0aCIsImZvY3VzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIndoaWNoIiwiYWN0aXZlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRyaWdnZXJFdmVudCIsInNwbGl0IiwiTnVtYmVyIiwiTWF0aCIsImZsb29yIiwic3Vic3RyIiwiZ2V0WW91dHViZVVybCIsImdldFZpbWVvVXJsIiwiZ2V0RmFjZWJvb2tVcmwiLCJ1cmwiLCJnZXRRdWVyeVN0cmluZyIsImdldFBhZGRpbmciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJyYW5kb20iLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsImRpc3BhdGNoRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9