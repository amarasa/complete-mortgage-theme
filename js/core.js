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
/******/ 			"dist-custom-plugins/querycraft": 0,
/******/ 			"dist-custom-plugins/kal_testimonials_for_loan_officers": 0,
/******/ 			"dist-custom-plugins/kaleidico-custom-calculators": 0,
/******/ 			"dist-custom-plugins/social-share": 0,
/******/ 			"style": 0
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
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./src/js/core.js")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./temp-social-share.css")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./temp-kaleidico-custom-calculators.css")))
/******/ 	__webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./temp-kal_testimonials_for_loan_officers.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist-custom-plugins/querycraft","dist-custom-plugins/kal_testimonials_for_loan_officers","dist-custom-plugins/kaleidico-custom-calculators","dist-custom-plugins/social-share","style"], () => (__webpack_require__("./temp-querycraft.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLE1BQU07O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUVBQW1FO0FBQ25FLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCOztBQUV4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxVQUFVO0FBQ3JGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSwyQkFBMkI7QUFDM0IsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLFNBQVMsNENBQTRDO0FBQ3JEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELG1CQUFtQjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdCQUFnQjtBQUM3RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFELEdBQUcsZ0JBQWdCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBLDhFQUE4RSxrQ0FBa0M7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGdDQUFnQztBQUM1RztBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDRFQUE0RTs7QUFFbkY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQSwrREFBK0QseURBQXlEO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDLCtDQUErQztBQUMvQyxpREFBaUQ7QUFDakQ7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sU0FBUyxvRkFBb0Y7QUFDcEc7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLDBFQUEwRSxnQ0FBZ0M7QUFDMUcsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFFBQVE7QUFDUixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVLGFBQWEsbUNBQW1DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixrRUFBa0U7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QyxXQUFXO0FBQ1gsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsMEVBQTBFLGdDQUFnQztBQUMxRyxNQUFNOztBQUVOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLDRCQUE0QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxvQ0FBb0M7QUFDOUU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssNkVBQTZFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdFQUFnRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNFQUFzRTtBQUMzRTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0VBQXNFO0FBQzNFO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw0Q0FBNEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBLEVBQUU7O0FBRUYsZ0VBQWdFLGNBQWM7O0FBRTlFLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksc0NBQXNDO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGdEQUFnRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxrQkFBa0I7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUsseUNBQXlDO0FBQzlDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUM7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxzREFBc0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssc0RBQXNEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFzRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4Q0FBOEM7QUFDakYsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxrRkFBa0Y7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBEQUEwRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssNkNBQTZDO0FBQ2xEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMERBQTBEO0FBQy9EO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBLE9BQU87QUFDUDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSywwREFBMEQ7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZDQUE2QztBQUNsRDtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLGtHQUFrRztBQUN2RztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyw4RkFBOEY7QUFDbkc7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7O0FDeDhPdEM7QUFDQUEsTUFBTSxDQUFDQyxzQkFBc0IsR0FBRztFQUMvQkMsV0FBVyxFQUFFLENBQ1o7SUFBRUMsR0FBRyxFQUFFLENBQUM7SUFBRUMsR0FBRyxFQUFFLEdBQUc7SUFBRUMsTUFBTSxFQUFFO0VBQVEsQ0FBQyxFQUNyQztJQUFFRixHQUFHLEVBQUUsR0FBRztJQUFFRSxNQUFNLEVBQUU7RUFBVyxDQUFDO0FBRWxDLENBQUM7QUFFaUM7QUFFbENDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7RUFDbkM7RUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQ1YsbUNBQW1DLEVBQ25DRixDQUFDLENBQUMsc0RBQXNELENBQUMsQ0FBQ0csTUFDM0QsQ0FBQztFQUNERixPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRUYsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNHLE1BQU0sQ0FBQzs7RUFFM0U7RUFDQSxTQUFTQyxRQUFRQSxDQUFBLEVBQUc7SUFDbkJKLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLENBQUM7SUFDeEJMLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUM1Qk0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUNuQkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNYQyxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztFQUNqQzs7RUFFQTtFQUNBUixDQUFDLENBQ0EsZ0dBQ0QsQ0FBQyxDQUFDUyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEJELENBQUMsQ0FBQ0UsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVyQixJQUFNQyxHQUFHLEdBQUdiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2MsTUFBTSxDQUFDLElBQUksQ0FBQzs7SUFFaEM7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWixNQUFNLEVBQUU7TUFDN0NILENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUMzQkssT0FBTyxDQUFDLENBQUMsQ0FDVFMsTUFBTSxDQUFDLENBQUMsQ0FDUlIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUNuQkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNYQyxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztJQUNqQyxDQUFDLE1BQU07TUFDTlIsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQy9CSyxPQUFPLENBQUMsQ0FBQyxDQUNUUyxNQUFNLENBQUMsQ0FBQyxDQUNSUixXQUFXLENBQUMsTUFBTSxDQUFDLENBQ25CQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ1hDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO0lBQ2pDOztJQUVBO0lBQ0EsSUFBTVEsUUFBUSxHQUFHSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDMUNKLEdBQUcsQ0FBQ0ssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUNyQkMsUUFBUSxDQUFDLENBQUMsQ0FDVmIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUNuQlcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUNyQlosT0FBTyxDQUFDLENBQUMsQ0FDVFMsTUFBTSxDQUFDLENBQUMsQ0FDUlAsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNYQyxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztJQUVoQ1EsUUFBUSxDQUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUN2Q3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLGVBQWUsRUFBRUssR0FBRyxDQUFDUyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztFQUN2RSxDQUFDLENBQUM7O0VBRUY7RUFDQXRCLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUNXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNuQ0wsUUFBUSxDQUFDLENBQUM7RUFDWCxDQUFDLENBQUM7O0VBRUY7RUFDQUosQ0FBQyxDQUNBLGdHQUNELENBQUMsQ0FDQ1EsSUFBSSxDQUFDO0lBQ0wsZUFBZSxFQUFFLE1BQU07SUFDdkIsZUFBZSxFQUFFLE9BQU87SUFDeEJlLElBQUksRUFBRTtFQUNQLENBQUMsQ0FBQyxDQUNEZCxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUMzQixJQUFJQSxDQUFDLENBQUNjLEdBQUcsS0FBSyxPQUFPLElBQUlkLENBQUMsQ0FBQ2MsR0FBRyxLQUFLLEdBQUcsRUFBRTtNQUN2Q2QsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUNsQlgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN6QjtFQUNELENBQUMsQ0FBQzs7RUFFSDtFQUNBekIsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMwQixLQUFLLENBQUMsWUFBWTtJQUN4QzFCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzJCLFNBQVMsQ0FBQyxDQUFDO0lBQzdCM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNEIsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7SUFDckM1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM0QixHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztFQUNuQyxDQUFDLENBQUM7RUFDRjVCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDMEIsS0FBSyxDQUFDLFlBQVk7SUFDekMxQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNLLE9BQU8sQ0FBQyxDQUFDO0lBQzNCTCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM0QixHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNuQzVCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzRCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGNUIsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0lBQ3JEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztJQUN2Q1EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkQsQ0FBQyxDQUFDRSxlQUFlLENBQUMsQ0FBQztJQUVuQixJQUFJaUIsT0FBTyxHQUFHN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDYyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2xDYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRTJCLE9BQU8sQ0FBQztJQUU1QyxJQUFJQSxPQUFPLENBQUNQLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUM3Qk8sT0FBTyxDQUFDdkIsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMzQnVCLE9BQU8sQ0FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUN0Q3VCLE9BQU8sQ0FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxNQUFNO01BQ053QixPQUFPLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFDeEJELE9BQU8sQ0FBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDVSxTQUFTLENBQUMsQ0FBQztNQUNsQ0UsT0FBTyxDQUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ1osT0FBTyxDQUFDLENBQUM7TUFDL0N3QixPQUFPLENBQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ2IsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQ3VCLE9BQU8sQ0FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUNELFdBQVcsQ0FBQyxNQUFNLENBQUM7TUFDckR1QixPQUFPLENBQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDRixPQUFPLENBQUMsQ0FBQztJQUM1QztFQUNELENBQUMsQ0FBQzs7RUFFRjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQyxDQUFFLFlBQVk7SUFDYixTQUFTSyxDQUFDQSxDQUFDcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNuQixTQUFTQyxDQUFDQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNoQixJQUFJLENBQUNKLENBQUMsQ0FBQ0csQ0FBQyxDQUFDLEVBQUU7VUFDVixJQUFJLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEVBQUU7WUFDVixJQUFJRSxDQUFDLEdBQUcsU0FBdUM7WUFDL0MsSUFBSSxDQUFDRCxDQUFDLElBQUlDLENBQUMsRUFBRSxPQUFPQSxPQUFDLENBQUNGLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJSSxDQUFDLEVBQUUsT0FBT0EsQ0FBQyxDQUFDSixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSUssQ0FBQyxHQUFHLElBQUlDLEtBQUssQ0FBQyxzQkFBc0IsR0FBR04sQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuRCxNQUFRSyxDQUFDLENBQUNFLElBQUksR0FBRyxrQkFBa0IsRUFBR0YsQ0FBQztVQUN4QztVQUNBLElBQUlHLENBQUMsR0FBSVgsQ0FBQyxDQUFDRyxDQUFDLENBQUMsR0FBRztZQUFFUyxPQUFPLEVBQUUsQ0FBQztVQUFFLENBQUU7VUFDaENiLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLElBQUksQ0FDWEYsQ0FBQyxDQUFDQyxPQUFPLEVBQ1QsVUFBVWxDLENBQUMsRUFBRTtZQUNaLElBQUlzQixDQUFDLEdBQUdELENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN6QixDQUFDLENBQUM7WUFDbEIsT0FBT3dCLENBQUMsQ0FBQ0YsQ0FBQyxJQUFJdEIsQ0FBQyxDQUFDO1VBQ2pCLENBQUMsRUFDRGlDLENBQUMsRUFDREEsQ0FBQyxDQUFDQyxPQUFPLEVBQ1RsQyxDQUFDLEVBQ0RxQixDQUFDLEVBQ0RDLENBQUMsRUFDREMsQ0FDRCxDQUFDO1FBQ0Y7UUFDQSxPQUFPRCxDQUFDLENBQUNHLENBQUMsQ0FBQyxDQUFDUyxPQUFPO01BQ3BCO01BQ0EsS0FDQyxJQUFJTCxDQUFDLEdBQUcsU0FBdUMsRUFBRUosQ0FBQyxHQUFHLENBQUMsRUFDdERBLENBQUMsR0FBR0YsQ0FBQyxDQUFDOUIsTUFBTSxFQUNaZ0MsQ0FBQyxFQUFFLEVBRUhELENBQUMsQ0FBQ0QsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztNQUNSLE9BQU9ELENBQUM7SUFDVDtJQUNBLE9BQU94QixDQUFDO0VBQ1QsQ0FBQyxDQUFFLENBQUMsQ0FDSDtJQUNDLENBQUMsRUFBRSxDQUNGLFVBQVVBLENBQUMsRUFBRXFCLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2xCLElBQUk7UUFDSCxJQUFJQyxDQUFDLEdBQUcsSUFBSTFDLE1BQU0sQ0FBQ3VELFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBS2IsQ0FBQyxDQUFDdEIsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBS3NCLENBQUMsQ0FBQ2MsZ0JBQWdCLEVBQ2pELE1BQU0sSUFBSU4sS0FBSyxDQUFDLDJCQUEyQixDQUFDO01BQzlDLENBQUMsQ0FBQyxPQUFPL0IsQ0FBQyxFQUFFO1FBQ1gsSUFBSXdCLENBQUMsR0FBRyxTQUFKQSxDQUFDQSxDQUFheEIsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFO1VBQ3ZCLElBQUlDLENBQUMsRUFBRUMsQ0FBQztVQUNSLE9BQ0VGLENBQUMsR0FBR0EsQ0FBQyxJQUFJO1lBQ1RpQixPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ1hDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDZEMsTUFBTSxFQUFFLEtBQUs7VUFDZCxDQUFDLEVBQ0FsQixDQUFDLEdBQUdsQyxRQUFRLENBQUNxRCxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ3hDbkIsQ0FBQyxDQUFDb0IsZUFBZSxDQUNoQjFDLENBQUMsRUFDRHFCLENBQUMsQ0FBQ2lCLE9BQU8sRUFDVGpCLENBQUMsQ0FBQ2tCLFVBQVUsRUFDWmxCLENBQUMsQ0FBQ21CLE1BQ0gsQ0FBQyxFQUNBakIsQ0FBQyxHQUFHRCxDQUFDLENBQUNyQixjQUFjLEVBQ3BCcUIsQ0FBQyxDQUFDckIsY0FBYyxHQUFHLFlBQVk7WUFDL0JzQixDQUFDLENBQUNZLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWixJQUFJO2NBQ0hRLE1BQU0sQ0FBQ0MsY0FBYyxDQUNwQixJQUFJLEVBQ0osa0JBQWtCLEVBQ2xCO2dCQUNDQyxHQUFHLEVBQUUsU0FBTEEsR0FBR0EsQ0FBQSxFQUFjO2tCQUNoQixPQUFPLENBQUMsQ0FBQztnQkFDVjtjQUNELENBQ0QsQ0FBQztZQUNGLENBQUMsQ0FBQyxPQUFPN0MsQ0FBQyxFQUFFO2NBQ1gsSUFBSSxDQUFDcUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzNCO1VBQ0QsQ0FBQyxFQUNEZixDQUFDO1FBRUgsQ0FBQztRQUNBRSxDQUFDLENBQUNzQixTQUFTLEdBQUdqRSxNQUFNLENBQUNrRSxLQUFLLENBQUNELFNBQVMsRUFDbkNqRSxNQUFNLENBQUN1RCxXQUFXLEdBQUdaLENBQUU7TUFDMUI7SUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUFDLENBQ0Y7SUFDRCxDQUFDLEVBQUUsQ0FDRixVQUFVeEIsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDbEIsWUFBWTs7TUFDWixTQUFTQyxDQUFDQSxDQUFDdkIsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFO1FBQ2hCLElBQUksS0FBSyxDQUFDLEtBQUtyQixDQUFDLElBQUksSUFBSSxLQUFLQSxDQUFDLEVBQzdCLE1BQU0sSUFBSWdELFNBQVMsQ0FDbEIseUNBQ0QsQ0FBQztRQUNGLEtBQ0MsSUFBSTFCLENBQUMsR0FBR3FCLE1BQU0sQ0FBQzNDLENBQUMsQ0FBQyxFQUFFdUIsQ0FBQyxHQUFHLENBQUMsRUFDeEJBLENBQUMsR0FBRzBCLFNBQVMsQ0FBQ3hELE1BQU0sRUFDcEI4QixDQUFDLEVBQUUsRUFDRjtVQUNELElBQUlDLENBQUMsR0FBR3lCLFNBQVMsQ0FBQzFCLENBQUMsQ0FBQztVQUNwQixJQUFJLEtBQUssQ0FBQyxLQUFLQyxDQUFDLElBQUksSUFBSSxLQUFLQSxDQUFDLEVBQzdCLEtBQ0MsSUFBSUssQ0FBQyxHQUFHYyxNQUFNLENBQUNPLElBQUksQ0FBQ1AsTUFBTSxDQUFDbkIsQ0FBQyxDQUFDLENBQUMsRUFDN0JDLENBQUMsR0FBRyxDQUFDLEVBQ0xDLENBQUMsR0FBR0csQ0FBQyxDQUFDcEMsTUFBTSxFQUNiZ0MsQ0FBQyxHQUFHQyxDQUFDLEVBQ0xELENBQUMsRUFBRSxFQUNGO1lBQ0QsSUFBSUUsQ0FBQyxHQUFHRSxDQUFDLENBQUNKLENBQUMsQ0FBQztjQUNYSyxDQUFDLEdBQUdhLE1BQU0sQ0FBQ1Esd0JBQXdCLENBQ2xDM0IsQ0FBQyxFQUNERyxDQUNELENBQUM7WUFDRixLQUFLLENBQUMsS0FBS0csQ0FBQyxJQUNYQSxDQUFDLENBQUNzQixVQUFVLEtBQ1g5QixDQUFDLENBQUNLLENBQUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNHLENBQUMsQ0FBQyxDQUFDO1VBQ2Y7UUFDRjtRQUNBLE9BQU9MLENBQUM7TUFDVDtNQUNBLFNBQVNFLENBQUNBLENBQUEsRUFBRztRQUNabUIsTUFBTSxDQUFDVSxNQUFNLElBQ1pWLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDRCxNQUFNLEVBQUUsUUFBUSxFQUFFO1VBQ3ZDUyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1VBQ2RFLFlBQVksRUFBRSxDQUFDLENBQUM7VUFDaEJDLFFBQVEsRUFBRSxDQUFDLENBQUM7VUFDWkMsS0FBSyxFQUFFakM7UUFDUixDQUFDLENBQUM7TUFDSjtNQUNBRixDQUFDLENBQUNhLE9BQU8sR0FBRztRQUFFbUIsTUFBTSxFQUFFOUIsQ0FBQztRQUFFa0MsUUFBUSxFQUFFakM7TUFBRSxDQUFDO0lBQ3ZDLENBQUMsRUFDRCxDQUFDLENBQUMsQ0FDRjtJQUNELENBQUMsRUFBRSxDQUNGLFVBQVV4QixDQUFDLEVBQUVxQixDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNsQixZQUFZOztNQUNaLElBQUlDLENBQUMsR0FBR3ZCLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDcEJ3QixDQUFDLEdBQUcsU0FBSkEsQ0FBQ0EsQ0FBYXhCLENBQUMsRUFBRTtVQUNoQkEsQ0FBQyxDQUFDMEQsRUFBRSxDQUFDQyxVQUFVLEdBQUcsVUFBVTNELENBQUMsRUFBRTtZQUM5QixPQUNDLFNBQVMsSUFBSSxPQUFPQSxDQUFDLElBQUksSUFBSXVCLENBQUMsQ0FBQyxJQUFJLEVBQUV2QixDQUFDLENBQUMsRUFDdkMsSUFBSTtVQUVOLENBQUM7UUFDRixDQUFDO01BQ0YsSUFBSSxVQUFVLElBQUksT0FBTzRELE1BQU0sSUFBSUEsd0JBQVUsRUFDNUNBLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFcEMsQ0FBQyxDQUFDLENBQUMsS0FDbEI7UUFDSixJQUFJSyxDQUFDLEdBQUdoRCxNQUFNLENBQUNNLE1BQU0sR0FBR04sTUFBTSxDQUFDTSxNQUFNLEdBQUdOLE1BQU0sQ0FBQ1MsQ0FBQztRQUNoRCxLQUFLLENBQUMsS0FBS3VDLENBQUMsSUFBSUwsQ0FBQyxDQUFDSyxDQUFDLENBQUM7TUFDckI7TUFDQVIsQ0FBQyxDQUFDYSxPQUFPLEdBQUdWLENBQUM7SUFDZCxDQUFDLEVBQ0Q7TUFBRSxVQUFVLEVBQUU7SUFBRSxDQUFDLENBQ2pCO0lBQ0QsQ0FBQyxFQUFFLENBQ0YsVUFBVXhCLENBQUMsRUFBRXFCLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2xCLFlBQVk7O01BQ1osU0FBU0MsQ0FBQ0EsQ0FBQ3ZCLENBQUMsRUFBRXFCLENBQUMsRUFBRTtRQUNoQixJQUFJLEVBQUVyQixDQUFDLFlBQVlxQixDQUFDLENBQUMsRUFDcEIsTUFBTSxJQUFJMkIsU0FBUyxDQUNsQixtQ0FDRCxDQUFDO01BQ0g7TUFDQUwsTUFBTSxDQUFDQyxjQUFjLENBQUN0QixDQUFDLEVBQUUsWUFBWSxFQUFFO1FBQUVrQyxLQUFLLEVBQUUsQ0FBQztNQUFFLENBQUMsQ0FBQztNQUNyRCxJQUFJaEMsQ0FBQyxHQUFJLFlBQVk7UUFDcEIsU0FBU3hCLENBQUNBLENBQUNBLENBQUMsRUFBRXFCLENBQUMsRUFBRTtVQUNoQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsQ0FBQyxDQUFDNUIsTUFBTSxFQUFFNkIsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSUMsQ0FBQyxHQUFHRixDQUFDLENBQUNDLENBQUMsQ0FBQztZQUNYQyxDQUFDLENBQUM2QixVQUFVLEdBQUc3QixDQUFDLENBQUM2QixVQUFVLElBQUksQ0FBQyxDQUFDLEVBQ2hDN0IsQ0FBQyxDQUFDK0IsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUNwQixPQUFPLElBQUkvQixDQUFDLEtBQUtBLENBQUMsQ0FBQ2dDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNqQ1osTUFBTSxDQUFDQyxjQUFjLENBQUM1QyxDQUFDLEVBQUV1QixDQUFDLENBQUNULEdBQUcsRUFBRVMsQ0FBQyxDQUFDO1VBQ3BDO1FBQ0Q7UUFDQSxPQUFPLFVBQVVGLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7VUFDekIsT0FBT0QsQ0FBQyxJQUFJdEIsQ0FBQyxDQUFDcUIsQ0FBQyxDQUFDeUIsU0FBUyxFQUFFeEIsQ0FBQyxDQUFDLEVBQUVDLENBQUMsSUFBSXZCLENBQUMsQ0FBQ3FCLENBQUMsRUFBRUUsQ0FBQyxDQUFDLEVBQUVGLENBQUM7UUFDL0MsQ0FBQztNQUNGLENBQUMsQ0FBRSxDQUFDO01BQ0pyQixDQUFDLENBQUMsdUJBQXVCLENBQUM7TUFDMUIsSUFBSTZCLENBQUMsR0FBRzdCLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdkJ5QixDQUFDLEdBQUd6QixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3FELE1BQU07UUFDakMzQixDQUFDLEdBQUc7VUFDSG9DLE9BQU8sRUFBRSxTQUFTO1VBQ2xCQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1VBQ1pDLE9BQU8sRUFBRTtZQUNSQyxRQUFRLEVBQUUsQ0FBQztZQUNYQyxjQUFjLEVBQUUsQ0FBQztZQUNqQkMsS0FBSyxFQUFFLElBQUk7WUFDWEMsUUFBUSxFQUFFLENBQUM7WUFDWEMsU0FBUyxFQUFFLENBQUM7WUFDWkMsV0FBVyxFQUFFLENBQUM7WUFDZEMsR0FBRyxFQUFFLElBQUk7WUFDVEMsRUFBRSxFQUFFLENBQUM7WUFDTEMsRUFBRSxFQUFFLElBQUk7WUFDUkMsY0FBYyxFQUFFLENBQUM7WUFDakJDLElBQUksRUFBRSxDQUFDO1lBQ1BDLGNBQWMsRUFBRSxJQUFJO1lBQ3BCQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxNQUFNLEVBQUUsSUFBSTtZQUNaQyxXQUFXLEVBQUUsSUFBSTtZQUNqQkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQUM7WUFDWEMsS0FBSyxFQUFFLENBQUM7WUFDUkMsS0FBSyxFQUFFLGFBQWE7WUFDcEJDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLFFBQVEsRUFBRSxDQUFDO1VBQ1osQ0FBQztVQUNEQyxLQUFLLEVBQUUsTUFBTTtVQUNiQyxLQUFLLEVBQUU7WUFDTkMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNQQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2J4QixRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ1p5QixNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ1ZDLFFBQVEsRUFBRSxJQUFJO1lBQ2R4QixLQUFLLEVBQUUsSUFBSTtZQUNYQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ1p3QixNQUFNLEVBQUUsSUFBSTtZQUNaakIsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNSa0IsU0FBUyxFQUFFLElBQUk7WUFDZkMsUUFBUSxFQUFFLElBQUk7WUFDZEMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNUQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ1pDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDVEMsS0FBSyxFQUFFLElBQUk7WUFDWEMsS0FBSyxFQUFFLENBQUM7VUFDVCxDQUFDO1VBQ0RDLGVBQWUsRUFBRSxDQUFDLENBQUM7VUFDbkJDLGFBQWEsRUFBRSxDQUFDLENBQUM7VUFDakJDLGNBQWMsRUFBRSxHQUFHO1VBQ25CQyxVQUFVLEVBQUU7WUFDWDdDLFVBQVUsRUFBRSxhQUFhO1lBQ3pCOEMsZUFBZSxFQUFFLG1CQUFtQjtZQUNwQ0MsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQ0MsZUFBZSxFQUFFLG1CQUFtQjtZQUNwQ0Msb0JBQW9CLEVBQUUsd0JBQXdCO1lBQzlDQyxrQkFBa0IsRUFBRTtVQUNyQixDQUFDO1VBQ0RDLElBQUksRUFBRTtZQUNMQyxXQUFXLEVBQUUsa0NBQWtDO1lBQy9DQyxpQkFBaUIsRUFDaEI7VUFDRjtRQUNELENBQUM7UUFDRHJGLENBQUMsR0FBSSxZQUFZO1VBQ2hCLFNBQVMzQixDQUFDQSxDQUFDcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7WUFDaEIsSUFBSUUsQ0FBQyxHQUFHLElBQUk7WUFDWkQsQ0FBQyxDQUFDLElBQUksRUFBRXZCLENBQUMsQ0FBQztZQUNWLElBQUkyQixDQUFDLEdBQUdGLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUMsQ0FBQyxFQUFFSixDQUFDLENBQUM7Y0FDbEJRLENBQUMsR0FDQSxRQUFRLElBQUksT0FBT1QsQ0FBQyxHQUNqQmpDLFFBQVEsQ0FBQzZILGdCQUFnQixDQUFDNUYsQ0FBQyxDQUFDLEdBQzVCQSxDQUFDO2NBQ0xZLENBQUMsR0FBRzdDLFFBQVEsQ0FBQzhILGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDbENDLENBQUMsR0FBR3hGLENBQUMsQ0FBQzZFLFVBQVU7Y0FDaEJZLENBQUMsR0FBR3pGLENBQUMsQ0FBQzRFLGNBQWM7WUFDckIsRUFBRSxDQUFDYyxPQUFPLENBQUNsRixJQUFJLENBQUNMLENBQUMsRUFBRSxVQUFVOUIsQ0FBQyxFQUFFO2NBQy9CQSxDQUFDLENBQUNzSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVWpHLENBQUMsRUFBRTtnQkFDeEMsR0FBRyxLQUFLckIsQ0FBQyxDQUFDdUgsT0FBTyxJQUFJbEcsQ0FBQyxDQUFDcEIsY0FBYyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUlxQixDQUFDLEdBQUd0QixDQUFDLENBQUN3SCxPQUFPLENBQUNDLE9BQU87a0JBQ3hCbEcsQ0FBQyxHQUFHdkIsQ0FBQyxDQUFDd0gsT0FBTyxDQUFDMUQsT0FBTyxJQUFJbkMsQ0FBQyxDQUFDbUMsT0FBTztrQkFDbENyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVJLENBQUMsQ0FBQzZGLFNBQVMsRUFBRSxDQUFDO2tCQUN0QmhHLENBQUMsR0FDQTFCLENBQUMsQ0FBQ3dILE9BQU8sQ0FBQ0csUUFBUSxJQUNsQm5HLENBQUMsQ0FBQ29HLFdBQVcsQ0FBQ2pHLENBQUMsRUFBRUosQ0FBQyxFQUFFRCxDQUFDLENBQUM7a0JBQ3ZCUSxDQUFDLEdBQUdOLENBQUMsQ0FBQ3FHLE9BQU8sQ0FBQ2xHLENBQUMsRUFBRUQsQ0FBQyxFQUFFRCxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxFQUFFSSxDQUFDLENBQUNpRyxNQUFNLEVBQUU3RixDQUFDLEVBQUVILENBQUMsQ0FBQztnQkFDbkIsSUFBSWlHLENBQUMsR0FBRzNJLFFBQVEsQ0FBQzRJLGNBQWMsQ0FBQ3ZHLENBQUMsQ0FBQztrQkFDakN3RyxDQUFDLEdBQUdGLENBQUMsQ0FBQ2IsYUFBYSxDQUNsQiw2QkFDRCxDQUFDO2tCQUNEZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQztrQkFDVkMsQ0FBQyxHQUFHLFNBQUpBLENBQUNBLENBQUEsRUFBZTtvQkFDZkMsWUFBWSxDQUFDRixDQUFDLENBQUMsRUFDYkEsQ0FBQyxHQUFHRyxVQUFVLENBQ2QsWUFBWTtzQkFDWCxJQUFJckksQ0FBQyxHQUNId0IsQ0FBQyxDQUFDOEcsMEJBQTBCLENBQzNCM0csQ0FBQyxDQUFDMkQsS0FBSyxFQUNQekcsTUFBTSxDQUFDMEosV0FBVyxFQUNsQjFKLE1BQU0sQ0FBQzJKLFVBQ1IsQ0FBQzt3QkFDRm5ILENBQUMsR0FDQWpDLFFBQVEsQ0FBQzRJLGNBQWMsQ0FDdEIsb0JBQW9CLEdBQ25CdkcsQ0FDRixDQUFDO3NCQUNISixDQUFDLENBQUNvSCxLQUFLLENBQUNDLFFBQVEsS0FDZjFJLENBQUMsS0FDQXFCLENBQUMsQ0FBQ29ILEtBQUssQ0FBQ0MsUUFBUSxHQUNoQjFJLENBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQ0QsRUFDRCxDQUFFO2tCQUNKLENBQUM7Z0JBQ0YrSCxDQUFDLENBQUNZLEtBQUssQ0FBQyxDQUFDLEVBQ1JaLENBQUMsQ0FBQ1QsZ0JBQWdCLENBQ2pCLE9BQU8sRUFDUCxZQUFZO2tCQUNYLENBQUMsQ0FBQyxFQUFFekYsQ0FBQyxDQUFDVCxRQUFRLEVBQ2IyRyxDQUFDLEVBQ0RaLENBQUMsQ0FBQ1YsZUFDSCxDQUFDLEVBQ0E1SCxNQUFNLENBQUMrSixtQkFBbUIsQ0FDekIsUUFBUSxFQUNSVCxDQUNELENBQUMsRUFDREUsVUFBVSxDQUFDLFlBQVk7b0JBQ3RCLENBQUMsQ0FBQyxFQUFFeEcsQ0FBQyxDQUFDZ0gsTUFBTSxFQUFFZCxDQUFDLENBQUMsRUFDZi9ILENBQUMsQ0FBQzJJLEtBQUssQ0FBQyxDQUFDO2tCQUNYLENBQUMsRUFBRXZCLENBQUMsQ0FBQztnQkFDUCxDQUNELENBQUMsRUFDRFcsQ0FBQyxDQUFDVCxnQkFBZ0IsQ0FDakIsU0FBUyxFQUNULFVBQVV0SCxDQUFDLEVBQUU7a0JBQ1osQ0FBQyxLQUFLQSxDQUFDLENBQUM4SSxLQUFLLEtBQ1g5SSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDLEVBQ25CYixRQUFRLENBQUMySixhQUFhLEtBQ3RCaEIsQ0FBQyxHQUNFRSxDQUFDLENBQUNVLEtBQUssQ0FBQyxDQUFDLElBQ1JaLENBQUMsQ0FBQ2lCLFlBQVksQ0FDZixZQUFZLEVBQ1osRUFDQSxDQUFDLEVBQ0RqQixDQUFDLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsQ0FDRCxDQUFDLEVBQ0Q5SixNQUFNLENBQUN5SSxnQkFBZ0IsQ0FDdEIsUUFBUSxFQUNSYSxDQUNELENBQUMsRUFDREYsQ0FBQyxDQUFDWCxnQkFBZ0IsQ0FDakIsT0FBTyxFQUNQLFlBQVk7a0JBQ1gsQ0FBQyxDQUFDLEVBQUV6RixDQUFDLENBQUNvSCxZQUFZLEVBQ2pCbEIsQ0FBQyxFQUNELE9BQ0QsQ0FBQztnQkFDRixDQUNELENBQUM7Y0FDSCxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUM7VUFDSDtVQUNBLE9BQ0N2RyxDQUFDLENBQUN4QixDQUFDLEVBQUUsQ0FDSjtZQUNDYyxHQUFHLEVBQUUsWUFBWTtZQUNqQjBDLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZeEQsQ0FBQyxFQUFFO2NBQ25CLElBQUlxQixDQUFDLEdBQUdyQixDQUFDLENBQUNrSixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNuQjVILENBQUMsR0FBRzZILE1BQU0sQ0FBQzlILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNqQixPQUNFLEdBQUcsR0FBRzhILE1BQU0sQ0FBQzlILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJQyxDQUFDLEdBQUcsR0FBRztZQUVoQztVQUNELENBQUMsRUFDRDtZQUNDUixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDMEMsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQVl4RCxDQUFDLEVBQUVxQixDQUFDLEVBQUVDLENBQUMsRUFBRTtjQUN6QixJQUFJQyxDQUFDLEdBQUd2QixDQUFDLENBQUNrSixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNuQjFILENBQUMsR0FBRzJILE1BQU0sQ0FBQzVILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEJNLENBQUMsR0FBR3NILE1BQU0sQ0FBQzVILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNqQixPQUFPRixDQUFDLEdBQUdDLENBQUMsSUFBSU8sQ0FBQyxHQUFHTCxDQUFDLENBQUMsR0FDbkI0SCxJQUFJLENBQUNDLEtBQUssQ0FBRTdILENBQUMsR0FBR0ssQ0FBQyxHQUFJUixDQUFDLENBQUMsR0FBRyxJQUFJLEdBQzlCLE1BQU07WUFDVjtVQUNELENBQUMsRUFDRDtZQUNDUCxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCMEMsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQVl4RCxDQUFDLEVBQUU7Y0FDbkIsSUFBSXFCLENBQUMsR0FBRyxFQUFFO2NBQ1YsT0FDQ3NCLE1BQU0sQ0FBQ08sSUFBSSxDQUFDbEQsQ0FBQyxDQUFDLENBQUNxSCxPQUFPLENBQ3JCLFVBQVUvRixDQUFDLEVBQUU7Z0JBQ1pELENBQUMsSUFDQUMsQ0FBQyxHQUNELEdBQUcsR0FDSHRCLENBQUMsQ0FBQ3NCLENBQUMsQ0FBQyxHQUNKLEdBQUc7Y0FDTCxDQUNELENBQUMsRUFDRC9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNkIsQ0FBQyxDQUFDLEVBQ2RBLENBQUMsQ0FBQ2lJLE1BQU0sQ0FBQyxDQUFDLEVBQUVqSSxDQUFDLENBQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRTNCO1VBQ0QsQ0FBQyxFQUNEO1lBQ0NxQixHQUFHLEVBQUUsYUFBYTtZQUNsQjBDLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZeEQsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7Y0FDekIsT0FBTyxTQUFTLEtBQUtELENBQUMsR0FDbkIsSUFBSSxDQUFDa0ksYUFBYSxDQUNsQnZKLENBQUMsQ0FBQ2dFLE9BQU8sRUFDVDFDLENBQ0EsQ0FBQyxHQUNELE9BQU8sS0FBS0QsQ0FBQyxHQUNiLElBQUksQ0FBQ21JLFdBQVcsQ0FBQ3hKLENBQUMsQ0FBQ3VGLEtBQUssRUFBRWpFLENBQUMsQ0FBQyxHQUM1QixVQUFVLEtBQUtELENBQUMsR0FDaEIsSUFBSSxDQUFDb0ksY0FBYyxDQUNuQnpKLENBQUMsQ0FBQytELFFBQVEsRUFDVnpDLENBQ0EsQ0FBQyxHQUNELFFBQVEsS0FBS0QsQ0FBQyxHQUNkckIsQ0FBQyxDQUFDMEosR0FBRyxHQUNMLEVBQUU7WUFDTjtVQUNELENBQUMsRUFDRDtZQUNDNUksR0FBRyxFQUFFLGFBQWE7WUFDbEIwQyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWXhELENBQUMsRUFBRXFCLENBQUMsRUFBRTtjQUN0QixPQUNDLDJCQUEyQixHQUMzQkEsQ0FBQyxHQUNELEdBQUcsR0FDSCxJQUFJLENBQUNzSSxjQUFjLENBQUMzSixDQUFDLENBQUM7WUFFeEI7VUFDRCxDQUFDLEVBQ0Q7WUFDQ2MsR0FBRyxFQUFFLGVBQWU7WUFDcEIwQyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWXhELENBQUMsRUFBRXFCLENBQUMsRUFBRTtjQUN0QixJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDcUksY0FBYyxDQUFDM0osQ0FBQyxDQUFDO2NBQzlCLE9BQU8sQ0FBQyxDQUFDLEtBQUtBLENBQUMsQ0FBQ3FGLFFBQVEsR0FDckIsbUNBQW1DLEdBQ25DaEUsQ0FBQyxHQUNELEdBQUcsR0FDSEMsQ0FBQyxHQUNELDBCQUEwQixHQUMxQkQsQ0FBQyxHQUNELEdBQUcsR0FDSEMsQ0FBQztZQUNMO1VBQ0QsQ0FBQyxFQUNEO1lBQ0NSLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIwQyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWXhELENBQUMsRUFBRXFCLENBQUMsRUFBRTtjQUN0QixPQUNDLDJGQUEyRixHQUMzRkEsQ0FBQyxHQUNELEdBQUcsR0FDSCxJQUFJLENBQUNzSSxjQUFjLENBQUMzSixDQUFDLENBQUM7WUFFeEI7VUFDRCxDQUFDLEVBQ0Q7WUFDQ2MsR0FBRyxFQUFFLFNBQVM7WUFDZDBDLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZeEQsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7Y0FDekIsSUFBSUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3FJLFVBQVUsQ0FBQzVKLENBQUMsQ0FBQ3NGLEtBQUssQ0FBQztnQkFDL0I5RCxDQUFDLEdBQUd4QixDQUFDLENBQUN3RyxVQUFVO2NBQ2pCLE9BQ0Msc0JBQXNCLEdBQ3RCaEYsQ0FBQyxDQUFDbUMsVUFBVSxHQUNaLDRDQUE0QyxHQUM1QzNELENBQUMsQ0FBQzhHLElBQUksQ0FBQ0MsV0FBVyxHQUNsQixRQUFRLEdBQ1J6RixDQUFDLEdBQ0QsMEJBQTBCLEdBQzFCRSxDQUFDLENBQUNrRixjQUFjLEdBQ2hCLDRCQUE0QixHQUM1QmxGLENBQUMsQ0FBQ21GLGVBQWUsR0FDakIsMEJBQTBCLEdBQzFCckYsQ0FBQyxHQUNELDhCQUE4QixHQUM5QkUsQ0FBQyxDQUFDb0Ysb0JBQW9CLEdBQ3RCLDBCQUEwQixHQUMxQnJGLENBQUMsR0FDRCxtQ0FBbUMsR0FDbkNDLENBQUMsQ0FBQ3FGLGtCQUFrQixHQUNwQiwyQ0FBMkMsR0FDM0M3RyxDQUFDLENBQUM4RyxJQUFJLENBQUNFLGlCQUFpQixHQUN4QixxRUFBcUUsR0FDckUzRixDQUFDLEdBQ0QscUNBQXFDLEdBQ3JDckIsQ0FBQyxDQUFDcUcsZUFBZSxHQUNqQix3QkFBd0IsSUFDdkJyRyxDQUFDLENBQUNzRyxhQUFhLEdBQ2IsV0FBVyxHQUNYLEVBQUUsQ0FBQyxHQUNOLDhJQUE4STtZQUVoSjtVQUNELENBQUMsQ0FDRCxDQUFDLEVBQ0Z0RyxDQUFDO1FBRUgsQ0FBQyxDQUFFLENBQUM7TUFDSnNCLENBQUMsV0FBUSxHQUFHSyxDQUFDLEVBQUlOLENBQUMsQ0FBQ2EsT0FBTyxHQUFHWixDQUFDLFdBQVM7SUFDekMsQ0FBQyxFQUNEO01BQ0MsYUFBYSxFQUFFLENBQUM7TUFDaEIsdUJBQXVCLEVBQUUsQ0FBQztNQUMxQixtQkFBbUIsRUFBRTtJQUN0QixDQUFDLENBQ0Q7SUFDRCxDQUFDLEVBQUUsQ0FDRixVQUFVdEIsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDbEIsWUFBWTs7TUFDWkQsQ0FBQyxDQUFDYSxPQUFPLEdBQUdsQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pCLENBQUMsRUFDRDtNQUFFLFNBQVMsRUFBRTtJQUFFLENBQUMsQ0FDaEI7SUFDRCxDQUFDLEVBQUUsQ0FDRixVQUFVQSxDQUFDLEVBQUVxQixDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNsQixZQUFZOztNQUNacUIsTUFBTSxDQUFDQyxjQUFjLENBQUN0QixDQUFDLEVBQUUsWUFBWSxFQUFFO1FBQUVrQyxLQUFLLEVBQUUsQ0FBQztNQUFFLENBQUMsQ0FBQztNQUNwRGxDLENBQUMsQ0FBQ3dHLE1BQU0sR0FBRyxVQUFVOUgsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFO1FBQzNCLElBQUlDLENBQUMsR0FBR2xDLFFBQVEsQ0FBQ3lLLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDckMsS0FBS3ZJLENBQUMsQ0FBQ3dJLFNBQVMsR0FBR3pJLENBQUMsRUFBRUMsQ0FBQyxDQUFDZixRQUFRLENBQUNkLE1BQU0sR0FBRyxDQUFDLEdBQzFDTyxDQUFDLENBQUMrSixXQUFXLENBQUN6SSxDQUFDLENBQUNmLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM5QixDQUFDLEVBQ0NlLENBQUMsQ0FBQ29HLFNBQVMsR0FBRyxZQUFZO1FBQzFCLE9BQU8sQ0FDTnNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUN2QmQsSUFBSSxDQUFDZSxNQUFNLENBQUMsQ0FBQyxDQUFDRCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUNaLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDYyxXQUFXLENBQUMsQ0FBQztNQUNoQixDQUFDLEVBQ0E5SSxDQUFDLENBQUN1SCxNQUFNLEdBQUcsVUFBVTdJLENBQUMsRUFBRTtRQUN4QkEsQ0FBQyxJQUFJQSxDQUFDLENBQUNxSyxVQUFVLElBQUlySyxDQUFDLENBQUNxSyxVQUFVLENBQUNDLFdBQVcsQ0FBQ3RLLENBQUMsQ0FBQztNQUNqRCxDQUFDLEVBQ0FzQixDQUFDLENBQUNGLFFBQVEsR0FBRyxVQUFVcEIsQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFO1FBQzdCckIsQ0FBQyxDQUFDdUssU0FBUyxHQUNSdkssQ0FBQyxDQUFDdUssU0FBUyxDQUFDQyxHQUFHLENBQUNuSixDQUFDLENBQUMsR0FDakJyQixDQUFDLENBQUN5SyxTQUFTLElBQUksR0FBRyxHQUFHcEosQ0FBRTtNQUM1QixDQUFDLEVBQ0FDLENBQUMsQ0FBQzJILFlBQVksR0FBRyxVQUFVakosQ0FBQyxFQUFFcUIsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDcEMsSUFBSUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNkMUMsTUFBTSxDQUFDdUQsV0FBVyxHQUNkYixDQUFDLEdBQUcsSUFBSWEsV0FBVyxDQUFDZixDQUFDLEVBQUU7VUFBRWtCLFVBQVUsRUFBRSxDQUFDO1FBQUUsQ0FBQyxDQUFDLElBQ3pDaEIsQ0FBQyxHQUFHbkMsUUFBUSxDQUFDcUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUN6Q2xCLENBQUMsQ0FBQ21CLGVBQWUsQ0FBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUMsRUFDbEN0QixDQUFDLENBQUMwSyxhQUFhLENBQUNuSixDQUFDLENBQUM7TUFDcEIsQ0FBRTtJQUNKLENBQUMsRUFDRCxDQUFDLENBQUM7RUFFSixDQUFDLEVBQ0QsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxDQUFDLENBQ0gsQ0FBQztFQUNEakMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDcUUsVUFBVSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDaHJCRjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBLDhCOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUVyREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL25vZGVfbW9kdWxlcy9lcXVhbGl6ZS1oZWlnaHRzL2Rpc3QvZXF1YWxpemVIZWlnaHRzLmpzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vc3JjL2pzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi9zcmMvc3R5bGUuc2Nzcz80ODVhIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vdGVtcC1rYWxfdGVzdGltb25pYWxzX2Zvcl9sb2FuX29mZmljZXJzLmNzcyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS8uL3RlbXAta2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9ycy5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvLi90ZW1wLXF1ZXJ5Y3JhZnQuY3NzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lLy4vdGVtcC1zb2NpYWwtc2hhcmUuY3NzIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29tcGxldGUtbW9ydGdhZ2UtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvbXBsZXRlLW1vcnRnYWdlLXRoZW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb21wbGV0ZS1tb3J0Z2FnZS10aGVtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cbnZhciBlc19yZWdleHBfZmxhZ3MgPSB7fTtcblxudmFyIGdsb2JhbFRoaXNfMTtcbnZhciBoYXNSZXF1aXJlZEdsb2JhbFRoaXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHbG9iYWxUaGlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkR2xvYmFsVGhpcykgcmV0dXJuIGdsb2JhbFRoaXNfMTtcblx0aGFzUmVxdWlyZWRHbG9iYWxUaGlzID0gMTtcblx0dmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG5cdH07XG5cblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcblx0Z2xvYmFsVGhpc18xID1cblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuXHQgIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG5cdCAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG5cdCAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcblx0ICBjaGVjayh0eXBlb2YgY29tbW9uanNHbG9iYWwgPT0gJ29iamVjdCcgJiYgY29tbW9uanNHbG9iYWwpIHx8XG5cdCAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXNfMSA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzXzEpIHx8XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG5cdCAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0cmV0dXJuIGdsb2JhbFRoaXNfMTtcbn1cblxudmFyIGZhaWxzO1xudmFyIGhhc1JlcXVpcmVkRmFpbHM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGYWlscyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZhaWxzKSByZXR1cm4gZmFpbHM7XG5cdGhhc1JlcXVpcmVkRmFpbHMgPSAxO1xuXHRmYWlscyA9IGZ1bmN0aW9uIChleGVjKSB7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gZmFpbHM7XG59XG5cbnZhciBkZXNjcmlwdG9ycztcbnZhciBoYXNSZXF1aXJlZERlc2NyaXB0b3JzO1xuXG5mdW5jdGlvbiByZXF1aXJlRGVzY3JpcHRvcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREZXNjcmlwdG9ycykgcmV0dXJuIGRlc2NyaXB0b3JzO1xuXHRoYXNSZXF1aXJlZERlc2NyaXB0b3JzID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0Ly8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cblx0ZGVzY3JpcHRvcnMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcblx0fSk7XG5cdHJldHVybiBkZXNjcmlwdG9ycztcbn1cblxudmFyIG1ha2VCdWlsdEluID0ge2V4cG9ydHM6IHt9fTtcblxudmFyIGZ1bmN0aW9uQmluZE5hdGl2ZTtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZE5hdGl2ZTtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uQmluZE5hdGl2ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZE5hdGl2ZSkgcmV0dXJuIGZ1bmN0aW9uQmluZE5hdGl2ZTtcblx0aGFzUmVxdWlyZWRGdW5jdGlvbkJpbmROYXRpdmUgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHRmdW5jdGlvbkJpbmROYXRpdmUgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5cdCAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG5cdCAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG5cdH0pO1xuXHRyZXR1cm4gZnVuY3Rpb25CaW5kTmF0aXZlO1xufVxuXG52YXIgZnVuY3Rpb25VbmN1cnJ5VGhpcztcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpcykgcmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXM7XG5cdGhhc1JlcXVpcmVkRnVuY3Rpb25VbmN1cnJ5VGhpcyA9IDE7XG5cdHZhciBOQVRJVkVfQklORCA9IHJlcXVpcmVGdW5jdGlvbkJpbmROYXRpdmUoKTtcblxuXHR2YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cdHZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcblx0dmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cblx0ZnVuY3Rpb25VbmN1cnJ5VGhpcyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpcztcbn1cblxudmFyIGlzQ2FsbGFibGU7XG52YXIgaGFzUmVxdWlyZWRJc0NhbGxhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNDYWxsYWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzQ2FsbGFibGUpIHJldHVybiBpc0NhbGxhYmxlO1xuXHRoYXNSZXF1aXJlZElzQ2FsbGFibGUgPSAxO1xuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG5cdHZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cblx0Ly8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHRpc0NhbGxhYmxlID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xuXHR9IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xuXHR9O1xuXHRyZXR1cm4gaXNDYWxsYWJsZTtcbn1cblxudmFyIGlzTnVsbE9yVW5kZWZpbmVkO1xudmFyIGhhc1JlcXVpcmVkSXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzTnVsbE9yVW5kZWZpbmVkKSByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQ7XG5cdGhhc1JlcXVpcmVkSXNOdWxsT3JVbmRlZmluZWQgPSAxO1xuXHQvLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5cdGlzTnVsbE9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG5cdH07XG5cdHJldHVybiBpc051bGxPclVuZGVmaW5lZDtcbn1cblxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGU7XG52YXIgaGFzUmVxdWlyZWRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFJlcXVpcmVPYmplY3RDb2VyY2libGUpIHJldHVybiByZXF1aXJlT2JqZWN0Q29lcmNpYmxlO1xuXHRoYXNSZXF1aXJlZFJlcXVpcmVPYmplY3RDb2VyY2libGUgPSAxO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRyZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcblx0ICByZXR1cm4gaXQ7XG5cdH07XG5cdHJldHVybiByZXF1aXJlT2JqZWN0Q29lcmNpYmxlO1xufVxuXG52YXIgdG9PYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRUb09iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZVRvT2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9PYmplY3QpIHJldHVybiB0b09iamVjdDtcblx0aGFzUmVxdWlyZWRUb09iamVjdCA9IDE7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblxuXHQvLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5cdHRvT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xuXHR9O1xuXHRyZXR1cm4gdG9PYmplY3Q7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eV8xO1xudmFyIGhhc1JlcXVpcmVkSGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEhhc093blByb3BlcnR5KSByZXR1cm4gaGFzT3duUHJvcGVydHlfMTtcblx0aGFzUmVxdWlyZWRIYXNPd25Qcm9wZXJ0eSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuXHQvLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcblx0aGFzT3duUHJvcGVydHlfMSA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcblx0ICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xuXHR9O1xuXHRyZXR1cm4gaGFzT3duUHJvcGVydHlfMTtcbn1cblxudmFyIGZ1bmN0aW9uTmFtZTtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uTmFtZTtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uTmFtZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uTmFtZSkgcmV0dXJuIGZ1bmN0aW9uTmFtZTtcblx0aGFzUmVxdWlyZWRGdW5jdGlvbk5hbWUgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXG5cdHZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHR2YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cblx0dmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcblx0Ly8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xuXHR2YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xuXHR2YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cblx0ZnVuY3Rpb25OYW1lID0ge1xuXHQgIEVYSVNUUzogRVhJU1RTLFxuXHQgIFBST1BFUjogUFJPUEVSLFxuXHQgIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG5cdH07XG5cdHJldHVybiBmdW5jdGlvbk5hbWU7XG59XG5cbnZhciBzaGFyZWRTdG9yZSA9IHtleHBvcnRzOiB7fX07XG5cbnZhciBpc1B1cmU7XG52YXIgaGFzUmVxdWlyZWRJc1B1cmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc1B1cmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc1B1cmUpIHJldHVybiBpc1B1cmU7XG5cdGhhc1JlcXVpcmVkSXNQdXJlID0gMTtcblx0aXNQdXJlID0gZmFsc2U7XG5cdHJldHVybiBpc1B1cmU7XG59XG5cbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eTtcbnZhciBoYXNSZXF1aXJlZERlZmluZUdsb2JhbFByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXF1aXJlRGVmaW5lR2xvYmFsUHJvcGVydHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWREZWZpbmVHbG9iYWxQcm9wZXJ0eSkgcmV0dXJuIGRlZmluZUdsb2JhbFByb3BlcnR5O1xuXHRoYXNSZXF1aXJlZERlZmluZUdsb2JhbFByb3BlcnR5ID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cblx0ZGVmaW5lR2xvYmFsUHJvcGVydHkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHQgIHRyeSB7XG5cdCAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcblx0ICB9IHJldHVybiB2YWx1ZTtcblx0fTtcblx0cmV0dXJuIGRlZmluZUdsb2JhbFByb3BlcnR5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRTaGFyZWRTdG9yZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNoYXJlZFN0b3JlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2hhcmVkU3RvcmUpIHJldHVybiBzaGFyZWRTdG9yZS5leHBvcnRzO1xuXHRoYXNSZXF1aXJlZFNoYXJlZFN0b3JlID0gMTtcblx0dmFyIElTX1BVUkUgPSByZXF1aXJlSXNQdXJlKCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZURlZmluZUdsb2JhbFByb3BlcnR5KCk7XG5cblx0dmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xuXHR2YXIgc3RvcmUgPSBzaGFyZWRTdG9yZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG5cdChzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuXHQgIHZlcnNpb246ICczLjQwLjAnLFxuXHQgIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcblx0ICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuXHQgIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjQwLjAvTElDRU5TRScsXG5cdCAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG5cdH0pO1xuXHRyZXR1cm4gc2hhcmVkU3RvcmUuZXhwb3J0cztcbn1cblxudmFyIGluc3BlY3RTb3VyY2U7XG52YXIgaGFzUmVxdWlyZWRJbnNwZWN0U291cmNlO1xuXG5mdW5jdGlvbiByZXF1aXJlSW5zcGVjdFNvdXJjZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEluc3BlY3RTb3VyY2UpIHJldHVybiBpbnNwZWN0U291cmNlO1xuXHRoYXNSZXF1aXJlZEluc3BlY3RTb3VyY2UgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBzdG9yZSA9IHJlcXVpcmVTaGFyZWRTdG9yZSgpO1xuXG5cdHZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG5cdC8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcblx0aWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG5cdCAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuXHQgIH07XG5cdH1cblxuXHRpbnNwZWN0U291cmNlID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcblx0cmV0dXJuIGluc3BlY3RTb3VyY2U7XG59XG5cbnZhciB3ZWFrTWFwQmFzaWNEZXRlY3Rpb247XG52YXIgaGFzUmVxdWlyZWRXZWFrTWFwQmFzaWNEZXRlY3Rpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWFrTWFwQmFzaWNEZXRlY3Rpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWFrTWFwQmFzaWNEZXRlY3Rpb24pIHJldHVybiB3ZWFrTWFwQmFzaWNEZXRlY3Rpb247XG5cdGhhc1JlcXVpcmVkV2Vha01hcEJhc2ljRGV0ZWN0aW9uID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cblx0dmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cblx0d2Vha01hcEJhc2ljRGV0ZWN0aW9uID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcblx0cmV0dXJuIHdlYWtNYXBCYXNpY0RldGVjdGlvbjtcbn1cblxudmFyIGlzT2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkSXNPYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc09iamVjdCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzT2JqZWN0KSByZXR1cm4gaXNPYmplY3Q7XG5cdGhhc1JlcXVpcmVkSXNPYmplY3QgPSAxO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cblx0aXNPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcblx0fTtcblx0cmV0dXJuIGlzT2JqZWN0O1xufVxuXG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHkgPSB7fTtcblxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudDtcbnZhciBoYXNSZXF1aXJlZERvY3VtZW50Q3JlYXRlRWxlbWVudDtcblxuZnVuY3Rpb24gcmVxdWlyZURvY3VtZW50Q3JlYXRlRWxlbWVudCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERvY3VtZW50Q3JlYXRlRWxlbWVudCkgcmV0dXJuIGRvY3VtZW50Q3JlYXRlRWxlbWVudDtcblx0aGFzUmVxdWlyZWREb2N1bWVudENyZWF0ZUVsZW1lbnQgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdHZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG5cdC8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxuXHR2YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5cdGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xuXHR9O1xuXHRyZXR1cm4gZG9jdW1lbnRDcmVhdGVFbGVtZW50O1xufVxuXG52YXIgaWU4RG9tRGVmaW5lO1xudmFyIGhhc1JlcXVpcmVkSWU4RG9tRGVmaW5lO1xuXG5mdW5jdGlvbiByZXF1aXJlSWU4RG9tRGVmaW5lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSWU4RG9tRGVmaW5lKSByZXR1cm4gaWU4RG9tRGVmaW5lO1xuXHRoYXNSZXF1aXJlZEllOERvbURlZmluZSA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlRG9jdW1lbnRDcmVhdGVFbGVtZW50KCk7XG5cblx0Ly8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5cdGllOERvbURlZmluZSA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcblx0ICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuXHQgIH0pLmEgIT09IDc7XG5cdH0pO1xuXHRyZXR1cm4gaWU4RG9tRGVmaW5lO1xufVxuXG52YXIgdjhQcm90b3R5cGVEZWZpbmVCdWc7XG52YXIgaGFzUmVxdWlyZWRWOFByb3RvdHlwZURlZmluZUJ1ZztcblxuZnVuY3Rpb24gcmVxdWlyZVY4UHJvdG90eXBlRGVmaW5lQnVnICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVjhQcm90b3R5cGVEZWZpbmVCdWcpIHJldHVybiB2OFByb3RvdHlwZURlZmluZUJ1Zztcblx0aGFzUmVxdWlyZWRWOFByb3RvdHlwZURlZmluZUJ1ZyA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHQvLyBWOCB+IENocm9tZSAzNi1cblx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxuXHR2OFByb3RvdHlwZURlZmluZUJ1ZyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG5cdCAgICB2YWx1ZTogNDIsXG5cdCAgICB3cml0YWJsZTogZmFsc2Vcblx0ICB9KS5wcm90b3R5cGUgIT09IDQyO1xuXHR9KTtcblx0cmV0dXJuIHY4UHJvdG90eXBlRGVmaW5lQnVnO1xufVxuXG52YXIgYW5PYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRBbk9iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZUFuT2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQW5PYmplY3QpIHJldHVybiBhbk9iamVjdDtcblx0aGFzUmVxdWlyZWRBbk9iamVjdCA9IDE7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdHZhciAkU3RyaW5nID0gU3RyaW5nO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5cdGFuT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuXHQgIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG5cdH07XG5cdHJldHVybiBhbk9iamVjdDtcbn1cblxudmFyIGZ1bmN0aW9uQ2FsbDtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uQ2FsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uQ2FsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uQ2FsbCkgcmV0dXJuIGZ1bmN0aW9uQ2FsbDtcblx0aGFzUmVxdWlyZWRGdW5jdGlvbkNhbGwgPSAxO1xuXHR2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlRnVuY3Rpb25CaW5kTmF0aXZlKCk7XG5cblx0dmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcblx0ZnVuY3Rpb25DYWxsID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uQ2FsbDtcbn1cblxudmFyIGdldEJ1aWx0SW47XG52YXIgaGFzUmVxdWlyZWRHZXRCdWlsdEluO1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0QnVpbHRJbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldEJ1aWx0SW4pIHJldHVybiBnZXRCdWlsdEluO1xuXHRoYXNSZXF1aXJlZEdldEJ1aWx0SW4gPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblxuXHR2YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Z2V0QnVpbHRJbiA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuXHQgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xuXHR9O1xuXHRyZXR1cm4gZ2V0QnVpbHRJbjtcbn1cblxudmFyIG9iamVjdElzUHJvdG90eXBlT2Y7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RJc1Byb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0SXNQcm90b3R5cGVPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdElzUHJvdG90eXBlT2YpIHJldHVybiBvYmplY3RJc1Byb3RvdHlwZU9mO1xuXHRoYXNSZXF1aXJlZE9iamVjdElzUHJvdG90eXBlT2YgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdG9iamVjdElzUHJvdG90eXBlT2YgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcblx0cmV0dXJuIG9iamVjdElzUHJvdG90eXBlT2Y7XG59XG5cbnZhciBlbnZpcm9ubWVudFVzZXJBZ2VudDtcbnZhciBoYXNSZXF1aXJlZEVudmlyb25tZW50VXNlckFnZW50O1xuXG5mdW5jdGlvbiByZXF1aXJlRW52aXJvbm1lbnRVc2VyQWdlbnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnZpcm9ubWVudFVzZXJBZ2VudCkgcmV0dXJuIGVudmlyb25tZW50VXNlckFnZW50O1xuXHRoYXNSZXF1aXJlZEVudmlyb25tZW50VXNlckFnZW50ID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXG5cdHZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcblx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdGVudmlyb25tZW50VXNlckFnZW50ID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcblx0cmV0dXJuIGVudmlyb25tZW50VXNlckFnZW50O1xufVxuXG52YXIgZW52aXJvbm1lbnRWOFZlcnNpb247XG52YXIgaGFzUmVxdWlyZWRFbnZpcm9ubWVudFY4VmVyc2lvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUVudmlyb25tZW50VjhWZXJzaW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW52aXJvbm1lbnRWOFZlcnNpb24pIHJldHVybiBlbnZpcm9ubWVudFY4VmVyc2lvbjtcblx0aGFzUmVxdWlyZWRFbnZpcm9ubWVudFY4VmVyc2lvbiA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHVzZXJBZ2VudCA9IHJlcXVpcmVFbnZpcm9ubWVudFVzZXJBZ2VudCgpO1xuXG5cdHZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xuXHR2YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcblx0dmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xuXHR2YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcblx0dmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5cdGlmICh2OCkge1xuXHQgIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcblx0ICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG5cdCAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcblx0ICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xuXHR9XG5cblx0Ly8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG5cdC8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuXHRpZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG5cdCAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcblx0ICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG5cdCAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG5cdCAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG5cdCAgfVxuXHR9XG5cblx0ZW52aXJvbm1lbnRWOFZlcnNpb24gPSB2ZXJzaW9uO1xuXHRyZXR1cm4gZW52aXJvbm1lbnRWOFZlcnNpb247XG59XG5cbnZhciBzeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbjtcbnZhciBoYXNSZXF1aXJlZFN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlU3ltYm9sQ29uc3RydWN0b3JEZXRlY3Rpb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbikgcmV0dXJuIHN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uO1xuXHRoYXNSZXF1aXJlZFN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uID0gMTtcblx0LyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG5cdHZhciBWOF9WRVJTSU9OID0gcmVxdWlyZUVudmlyb25tZW50VjhWZXJzaW9uKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cblx0dmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHRzeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbiA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcblx0ICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuXHQgIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcblx0ICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG5cdCAgLy8gb2YgY291cnNlLCBmYWlsLlxuXHQgIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG5cdCAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuXHQgICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xuXHR9KTtcblx0cmV0dXJuIHN5bWJvbENvbnN0cnVjdG9yRGV0ZWN0aW9uO1xufVxuXG52YXIgdXNlU3ltYm9sQXNVaWQ7XG52YXIgaGFzUmVxdWlyZWRVc2VTeW1ib2xBc1VpZDtcblxuZnVuY3Rpb24gcmVxdWlyZVVzZVN5bWJvbEFzVWlkICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVXNlU3ltYm9sQXNVaWQpIHJldHVybiB1c2VTeW1ib2xBc1VpZDtcblx0aGFzUmVxdWlyZWRVc2VTeW1ib2xBc1VpZCA9IDE7XG5cdC8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xuXHR2YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmVTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbigpO1xuXG5cdHVzZVN5bWJvbEFzVWlkID0gTkFUSVZFX1NZTUJPTCAmJlxuXHQgICFTeW1ib2wuc2hhbSAmJlxuXHQgIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG5cdHJldHVybiB1c2VTeW1ib2xBc1VpZDtcbn1cblxudmFyIGlzU3ltYm9sO1xudmFyIGhhc1JlcXVpcmVkSXNTeW1ib2w7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc1N5bWJvbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzU3ltYm9sKSByZXR1cm4gaXNTeW1ib2w7XG5cdGhhc1JlcXVpcmVkSXNTeW1ib2wgPSAxO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0SXNQcm90b3R5cGVPZigpO1xuXHR2YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlVXNlU3ltYm9sQXNVaWQoKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblxuXHRpc1N5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcblx0fSA6IGZ1bmN0aW9uIChpdCkge1xuXHQgIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG5cdCAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xuXHR9O1xuXHRyZXR1cm4gaXNTeW1ib2w7XG59XG5cbnZhciB0cnlUb1N0cmluZztcbnZhciBoYXNSZXF1aXJlZFRyeVRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXF1aXJlVHJ5VG9TdHJpbmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUcnlUb1N0cmluZykgcmV0dXJuIHRyeVRvU3RyaW5nO1xuXHRoYXNSZXF1aXJlZFRyeVRvU3RyaW5nID0gMTtcblx0dmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cblx0dHJ5VG9TdHJpbmcgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4gJ09iamVjdCc7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gdHJ5VG9TdHJpbmc7XG59XG5cbnZhciBhQ2FsbGFibGU7XG52YXIgaGFzUmVxdWlyZWRBQ2FsbGFibGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBQ2FsbGFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBQ2FsbGFibGUpIHJldHVybiBhQ2FsbGFibGU7XG5cdGhhc1JlcXVpcmVkQUNhbGxhYmxlID0gMTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlVHJ5VG9TdHJpbmcoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxuXHRhQ2FsbGFibGUgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdH07XG5cdHJldHVybiBhQ2FsbGFibGU7XG59XG5cbnZhciBnZXRNZXRob2Q7XG52YXIgaGFzUmVxdWlyZWRHZXRNZXRob2Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRNZXRob2QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRNZXRob2QpIHJldHVybiBnZXRNZXRob2Q7XG5cdGhhc1JlcXVpcmVkR2V0TWV0aG9kID0gMTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZUlzTnVsbE9yVW5kZWZpbmVkKCk7XG5cblx0Ly8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5cdGdldE1ldGhvZCA9IGZ1bmN0aW9uIChWLCBQKSB7XG5cdCAgdmFyIGZ1bmMgPSBWW1BdO1xuXHQgIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcblx0fTtcblx0cmV0dXJuIGdldE1ldGhvZDtcbn1cblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmU7XG52YXIgaGFzUmVxdWlyZWRPcmRpbmFyeVRvUHJpbWl0aXZlO1xuXG5mdW5jdGlvbiByZXF1aXJlT3JkaW5hcnlUb1ByaW1pdGl2ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9yZGluYXJ5VG9QcmltaXRpdmUpIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlO1xuXHRoYXNSZXF1aXJlZE9yZGluYXJ5VG9QcmltaXRpdmUgPSAxO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHQvLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxuXHRvcmRpbmFyeVRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG5cdCAgdmFyIGZuLCB2YWw7XG5cdCAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG5cdCAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcblx0ICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcblx0fTtcblx0cmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmU7XG59XG5cbnZhciBzaGFyZWQ7XG52YXIgaGFzUmVxdWlyZWRTaGFyZWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTaGFyZWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTaGFyZWQpIHJldHVybiBzaGFyZWQ7XG5cdGhhc1JlcXVpcmVkU2hhcmVkID0gMTtcblx0dmFyIHN0b3JlID0gcmVxdWlyZVNoYXJlZFN0b3JlKCk7XG5cblx0c2hhcmVkID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0ICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcblx0fTtcblx0cmV0dXJuIHNoYXJlZDtcbn1cblxudmFyIHVpZDtcbnZhciBoYXNSZXF1aXJlZFVpZDtcblxuZnVuY3Rpb24gcmVxdWlyZVVpZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFVpZCkgcmV0dXJuIHVpZDtcblx0aGFzUmVxdWlyZWRVaWQgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdHZhciBpZCA9IDA7XG5cdHZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblx0dmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxuXHR1aWQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xuXHR9O1xuXHRyZXR1cm4gdWlkO1xufVxuXG52YXIgd2VsbEtub3duU3ltYm9sO1xudmFyIGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sO1xuXG5mdW5jdGlvbiByZXF1aXJlV2VsbEtub3duU3ltYm9sICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sKSByZXR1cm4gd2VsbEtub3duU3ltYm9sO1xuXHRoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbCA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIHNoYXJlZCA9IHJlcXVpcmVTaGFyZWQoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgdWlkID0gcmVxdWlyZVVpZCgpO1xuXHR2YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmVTeW1ib2xDb25zdHJ1Y3RvckRldGVjdGlvbigpO1xuXHR2YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlVXNlU3ltYm9sQXNVaWQoKTtcblxuXHR2YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG5cdHZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xuXHR2YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cblx0d2VsbEtub3duU3ltYm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0ICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG5cdCAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG5cdCAgICAgID8gU3ltYm9sW25hbWVdXG5cdCAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuXHQgIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcblx0fTtcblx0cmV0dXJuIHdlbGxLbm93blN5bWJvbDtcbn1cblxudmFyIHRvUHJpbWl0aXZlO1xudmFyIGhhc1JlcXVpcmVkVG9QcmltaXRpdmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb1ByaW1pdGl2ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvUHJpbWl0aXZlKSByZXR1cm4gdG9QcmltaXRpdmU7XG5cdGhhc1JlcXVpcmVkVG9QcmltaXRpdmUgPSAxO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBpc1N5bWJvbCA9IHJlcXVpcmVJc1N5bWJvbCgpO1xuXHR2YXIgZ2V0TWV0aG9kID0gcmVxdWlyZUdldE1ldGhvZCgpO1xuXHR2YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmVPcmRpbmFyeVRvUHJpbWl0aXZlKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdHZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cblx0Ly8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuXHR0b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuXHQgIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuXHQgIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG5cdCAgdmFyIHJlc3VsdDtcblx0ICBpZiAoZXhvdGljVG9QcmltKSB7XG5cdCAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuXHQgICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcblx0ICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuXHQgICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG5cdCAgfVxuXHQgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcblx0ICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG5cdH07XG5cdHJldHVybiB0b1ByaW1pdGl2ZTtcbn1cblxudmFyIHRvUHJvcGVydHlLZXk7XG52YXIgaGFzUmVxdWlyZWRUb1Byb3BlcnR5S2V5O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9Qcm9wZXJ0eUtleSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvUHJvcGVydHlLZXkpIHJldHVybiB0b1Byb3BlcnR5S2V5O1xuXHRoYXNSZXF1aXJlZFRvUHJvcGVydHlLZXkgPSAxO1xuXHR2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlVG9QcmltaXRpdmUoKTtcblx0dmFyIGlzU3ltYm9sID0gcmVxdWlyZUlzU3ltYm9sKCk7XG5cblx0Ly8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcblx0dG9Qcm9wZXJ0eUtleSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuXHQgIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG5cdH07XG5cdHJldHVybiB0b1Byb3BlcnR5S2V5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0RGVmaW5lUHJvcGVydHkpIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eTtcblx0aGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0eSA9IDE7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXHR2YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlSWU4RG9tRGVmaW5lKCk7XG5cdHZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmVWOFByb3RvdHlwZURlZmluZUJ1ZygpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlVG9Qcm9wZXJ0eUtleSgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcblx0dmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHR2YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cdHZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xuXHR2YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG5cdHZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cblx0Ly8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5cdG9iamVjdERlZmluZVByb3BlcnR5LmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuXHQgIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuXHQgIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcblx0ICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcblx0ICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG5cdCAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuXHQgICAgICBBdHRyaWJ1dGVzID0ge1xuXHQgICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG5cdCAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG5cdCAgICAgICAgd3JpdGFibGU6IGZhbHNlXG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuXHR9IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuXHQgIGFuT2JqZWN0KE8pO1xuXHQgIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuXHQgIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuXHQgIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcblx0ICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuXHQgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuXHQgIHJldHVybiBPO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydHk7XG59XG5cbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgaGFzUmVxdWlyZWRDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3I7XG5cdGhhc1JlcXVpcmVkQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gMTtcblx0Y3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcblx0ICByZXR1cm4ge1xuXHQgICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcblx0ICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcblx0ICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuXHQgICAgdmFsdWU6IHZhbHVlXG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcjtcbn1cblxudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eTtcbnZhciBoYXNSZXF1aXJlZENyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVxdWlyZUNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSkgcmV0dXJuIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eTtcblx0aGFzUmVxdWlyZWRDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCk7XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlQ3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCk7XG5cblx0Y3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG5cdCAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xuXHR9IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuXHQgIG9iamVjdFtrZXldID0gdmFsdWU7XG5cdCAgcmV0dXJuIG9iamVjdDtcblx0fTtcblx0cmV0dXJuIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eTtcbn1cblxudmFyIHNoYXJlZEtleTtcbnZhciBoYXNSZXF1aXJlZFNoYXJlZEtleTtcblxuZnVuY3Rpb24gcmVxdWlyZVNoYXJlZEtleSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNoYXJlZEtleSkgcmV0dXJuIHNoYXJlZEtleTtcblx0aGFzUmVxdWlyZWRTaGFyZWRLZXkgPSAxO1xuXHR2YXIgc2hhcmVkID0gcmVxdWlyZVNoYXJlZCgpO1xuXHR2YXIgdWlkID0gcmVxdWlyZVVpZCgpO1xuXG5cdHZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cblx0c2hhcmVkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuXHQgIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcblx0fTtcblx0cmV0dXJuIHNoYXJlZEtleTtcbn1cblxudmFyIGhpZGRlbktleXM7XG52YXIgaGFzUmVxdWlyZWRIaWRkZW5LZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlSGlkZGVuS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEhpZGRlbktleXMpIHJldHVybiBoaWRkZW5LZXlzO1xuXHRoYXNSZXF1aXJlZEhpZGRlbktleXMgPSAxO1xuXHRoaWRkZW5LZXlzID0ge307XG5cdHJldHVybiBoaWRkZW5LZXlzO1xufVxuXG52YXIgaW50ZXJuYWxTdGF0ZTtcbnZhciBoYXNSZXF1aXJlZEludGVybmFsU3RhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlcm5hbFN0YXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSW50ZXJuYWxTdGF0ZSkgcmV0dXJuIGludGVybmFsU3RhdGU7XG5cdGhhc1JlcXVpcmVkSW50ZXJuYWxTdGF0ZSA9IDE7XG5cdHZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlV2Vha01hcEJhc2ljRGV0ZWN0aW9uKCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIHNoYXJlZCA9IHJlcXVpcmVTaGFyZWRTdG9yZSgpO1xuXHR2YXIgc2hhcmVkS2V5ID0gcmVxdWlyZVNoYXJlZEtleSgpO1xuXHR2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmVIaWRkZW5LZXlzKCk7XG5cblx0dmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcblx0dmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xuXHR2YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblx0dmFyIHNldCwgZ2V0LCBoYXM7XG5cblx0dmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcblx0fTtcblxuXHR2YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICB2YXIgc3RhdGU7XG5cdCAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG5cdCAgICB9IHJldHVybiBzdGF0ZTtcblx0ICB9O1xuXHR9O1xuXG5cdGlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG5cdCAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcblx0ICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG5cdCAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuXHQgIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcblx0ICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG5cdCAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG5cdCAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuXHQgICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuXHQgICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG5cdCAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcblx0ICAgIHJldHVybiBtZXRhZGF0YTtcblx0ICB9O1xuXHQgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG5cdCAgfTtcblx0ICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuXHQgIH07XG5cdH0gZWxzZSB7XG5cdCAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuXHQgIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcblx0ICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG5cdCAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuXHQgICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG5cdCAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG5cdCAgICByZXR1cm4gbWV0YWRhdGE7XG5cdCAgfTtcblx0ICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuXHQgIH07XG5cdCAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG5cdCAgfTtcblx0fVxuXG5cdGludGVybmFsU3RhdGUgPSB7XG5cdCAgc2V0OiBzZXQsXG5cdCAgZ2V0OiBnZXQsXG5cdCAgaGFzOiBoYXMsXG5cdCAgZW5mb3JjZTogZW5mb3JjZSxcblx0ICBnZXR0ZXJGb3I6IGdldHRlckZvclxuXHR9O1xuXHRyZXR1cm4gaW50ZXJuYWxTdGF0ZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkTWFrZUJ1aWx0SW47XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYWtlQnVpbHRJbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1ha2VCdWlsdEluKSByZXR1cm4gbWFrZUJ1aWx0SW4uZXhwb3J0cztcblx0aGFzUmVxdWlyZWRNYWtlQnVpbHRJbiA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmVGdW5jdGlvbk5hbWUoKS5DT05GSUdVUkFCTEU7XG5cdHZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZUluc3BlY3RTb3VyY2UoKTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXG5cdHZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcblx0dmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcblx0dmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cdHZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblx0dmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcblx0dmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxuXHR2YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xuXHR9KTtcblxuXHR2YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cblx0dmFyIG1ha2VCdWlsdEluJDEgPSBtYWtlQnVpbHRJbi5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG5cdCAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcblx0ICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG5cdCAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuXHQgIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuXHQgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5cdCAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuXHQgIH1cblx0ICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcblx0ICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcblx0ICB9XG5cdCAgdHJ5IHtcblx0ICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG5cdCAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcblx0ICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcblx0ICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcblx0ICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG5cdCAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG5cdCAgfSByZXR1cm4gdmFsdWU7XG5cdH07XG5cblx0Ly8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5cdEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluJDEoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdCAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcblx0fSwgJ3RvU3RyaW5nJyk7XG5cdHJldHVybiBtYWtlQnVpbHRJbi5leHBvcnRzO1xufVxuXG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yO1xudmFyIGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbkFjY2Vzc29yO1xuXG5mdW5jdGlvbiByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbkFjY2Vzc29yKSByZXR1cm4gZGVmaW5lQnVpbHRJbkFjY2Vzc29yO1xuXHRoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IDE7XG5cdHZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmVNYWtlQnVpbHRJbigpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKTtcblxuXHRkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG5cdCAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG5cdCAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG5cdCAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcblx0fTtcblx0cmV0dXJuIGRlZmluZUJ1aWx0SW5BY2Nlc3Nvcjtcbn1cblxudmFyIHJlZ2V4cEZsYWdzO1xudmFyIGhhc1JlcXVpcmVkUmVnZXhwRmxhZ3M7XG5cbmZ1bmN0aW9uIHJlcXVpcmVSZWdleHBGbGFncyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFJlZ2V4cEZsYWdzKSByZXR1cm4gcmVnZXhwRmxhZ3M7XG5cdGhhc1JlcXVpcmVkUmVnZXhwRmxhZ3MgPSAxO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHQvLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncblx0cmVnZXhwRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcblx0ICB2YXIgcmVzdWx0ID0gJyc7XG5cdCAgaWYgKHRoYXQuaGFzSW5kaWNlcykgcmVzdWx0ICs9ICdkJztcblx0ICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG5cdCAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcblx0ICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG5cdCAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuXHQgIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG5cdCAgaWYgKHRoYXQudW5pY29kZVNldHMpIHJlc3VsdCArPSAndic7XG5cdCAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiByZWdleHBGbGFncztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfcmVnZXhwX2ZsYWdzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfcmVnZXhwX2ZsYWdzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNfcmVnZXhwX2ZsYWdzKSByZXR1cm4gZXNfcmVnZXhwX2ZsYWdzO1xuXHRoYXNSZXF1aXJlZEVzX3JlZ2V4cF9mbGFncyA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cdHZhciByZWdFeHBGbGFncyA9IHJlcXVpcmVSZWdleHBGbGFncygpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHQvLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJy4nLCAnZCcpIC0+IC8uL2QgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuXHR2YXIgUmVnRXhwID0gZ2xvYmFsVGhpcy5SZWdFeHA7XG5cdHZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG5cdHZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIElORElDRVNfU1VQUE9SVCA9IHRydWU7XG5cdCAgdHJ5IHtcblx0ICAgIFJlZ0V4cCgnLicsICdkJyk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIElORElDRVNfU1VQUE9SVCA9IGZhbHNlO1xuXHQgIH1cblxuXHQgIHZhciBPID0ge307XG5cdCAgLy8gbW9kZXJuIFY4IGJ1Z1xuXHQgIHZhciBjYWxscyA9ICcnO1xuXHQgIHZhciBleHBlY3RlZCA9IElORElDRVNfU1VQUE9SVCA/ICdkZ2ltc3knIDogJ2dpbXN5JztcblxuXHQgIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbiAoa2V5LCBjaHIpIHtcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIGtleSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgY2FsbHMgKz0gY2hyO1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH0gfSk7XG5cdCAgfTtcblxuXHQgIHZhciBwYWlycyA9IHtcblx0ICAgIGRvdEFsbDogJ3MnLFxuXHQgICAgZ2xvYmFsOiAnZycsXG5cdCAgICBpZ25vcmVDYXNlOiAnaScsXG5cdCAgICBtdWx0aWxpbmU6ICdtJyxcblx0ICAgIHN0aWNreTogJ3knXG5cdCAgfTtcblxuXHQgIGlmIChJTkRJQ0VTX1NVUFBPUlQpIHBhaXJzLmhhc0luZGljZXMgPSAnZCc7XG5cblx0ICBmb3IgKHZhciBrZXkgaW4gcGFpcnMpIGFkZEdldHRlcihrZXksIHBhaXJzW2tleV0pO1xuXG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHQgIHZhciByZXN1bHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJlZ0V4cFByb3RvdHlwZSwgJ2ZsYWdzJykuZ2V0LmNhbGwoTyk7XG5cblx0ICByZXR1cm4gcmVzdWx0ICE9PSBleHBlY3RlZCB8fCBjYWxscyAhPT0gZXhwZWN0ZWQ7XG5cdH0pO1xuXG5cdC8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xuXHRpZiAoRk9SQ0VEKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoUmVnRXhwUHJvdG90eXBlLCAnZmxhZ3MnLCB7XG5cdCAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgIGdldDogcmVnRXhwRmxhZ3Ncblx0fSk7XG5cdHJldHVybiBlc19yZWdleHBfZmxhZ3M7XG59XG5cbnJlcXVpcmVFc19yZWdleHBfZmxhZ3MoKTtcblxudmFyIGVzbmV4dF9hcnJheV9sYXN0SW5kZXggPSB7fTtcblxudmFyIG9iamVjdERlZmluZVByb3BlcnRpZXMgPSB7fTtcblxudmFyIGNsYXNzb2ZSYXc7XG52YXIgaGFzUmVxdWlyZWRDbGFzc29mUmF3O1xuXG5mdW5jdGlvbiByZXF1aXJlQ2xhc3NvZlJhdyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENsYXNzb2ZSYXcpIHJldHVybiBjbGFzc29mUmF3O1xuXHRoYXNSZXF1aXJlZENsYXNzb2ZSYXcgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdHZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcblx0dmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5cdGNsYXNzb2ZSYXcgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG5cdH07XG5cdHJldHVybiBjbGFzc29mUmF3O1xufVxuXG52YXIgaW5kZXhlZE9iamVjdDtcbnZhciBoYXNSZXF1aXJlZEluZGV4ZWRPYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbmRleGVkT2JqZWN0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSW5kZXhlZE9iamVjdCkgcmV0dXJuIGluZGV4ZWRPYmplY3Q7XG5cdGhhc1JlcXVpcmVkSW5kZXhlZE9iamVjdCA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdHZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuXHQvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuXHRpbmRleGVkT2JqZWN0ID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcblx0ICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcblx0fSkgPyBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xuXHR9IDogJE9iamVjdDtcblx0cmV0dXJuIGluZGV4ZWRPYmplY3Q7XG59XG5cbnZhciB0b0luZGV4ZWRPYmplY3Q7XG52YXIgaGFzUmVxdWlyZWRUb0luZGV4ZWRPYmplY3Q7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb0luZGV4ZWRPYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb0luZGV4ZWRPYmplY3QpIHJldHVybiB0b0luZGV4ZWRPYmplY3Q7XG5cdGhhc1JlcXVpcmVkVG9JbmRleGVkT2JqZWN0ID0gMTtcblx0Ly8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3Ncblx0dmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cblx0dG9JbmRleGVkT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xuXHR9O1xuXHRyZXR1cm4gdG9JbmRleGVkT2JqZWN0O1xufVxuXG52YXIgbWF0aFRydW5jO1xudmFyIGhhc1JlcXVpcmVkTWF0aFRydW5jO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aFRydW5jICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aFRydW5jKSByZXR1cm4gbWF0aFRydW5jO1xuXHRoYXNSZXF1aXJlZE1hdGhUcnVuYyA9IDE7XG5cdHZhciBjZWlsID0gTWF0aC5jZWlsO1xuXHR2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG5cdC8vIGBNYXRoLnRydW5jYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcblx0bWF0aFRydW5jID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG5cdCAgdmFyIG4gPSAreDtcblx0ICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcblx0fTtcblx0cmV0dXJuIG1hdGhUcnVuYztcbn1cblxudmFyIHRvSW50ZWdlck9ySW5maW5pdHk7XG52YXIgaGFzUmVxdWlyZWRUb0ludGVnZXJPckluZmluaXR5O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFRvSW50ZWdlck9ySW5maW5pdHkpIHJldHVybiB0b0ludGVnZXJPckluZmluaXR5O1xuXHRoYXNSZXF1aXJlZFRvSW50ZWdlck9ySW5maW5pdHkgPSAxO1xuXHR2YXIgdHJ1bmMgPSByZXF1aXJlTWF0aFRydW5jKCk7XG5cblx0Ly8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcblx0dG9JbnRlZ2VyT3JJbmZpbml0eSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG5cdH07XG5cdHJldHVybiB0b0ludGVnZXJPckluZmluaXR5O1xufVxuXG52YXIgdG9BYnNvbHV0ZUluZGV4O1xudmFyIGhhc1JlcXVpcmVkVG9BYnNvbHV0ZUluZGV4O1xuXG5mdW5jdGlvbiByZXF1aXJlVG9BYnNvbHV0ZUluZGV4ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9BYnNvbHV0ZUluZGV4KSByZXR1cm4gdG9BYnNvbHV0ZUluZGV4O1xuXHRoYXNSZXF1aXJlZFRvQWJzb2x1dGVJbmRleCA9IDE7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblxuXHR2YXIgbWF4ID0gTWF0aC5tYXg7XG5cdHZhciBtaW4gPSBNYXRoLm1pbjtcblxuXHQvLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcblx0Ly8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuXHQvLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxuXHR0b0Fic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuXHQgIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG5cdCAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG5cdH07XG5cdHJldHVybiB0b0Fic29sdXRlSW5kZXg7XG59XG5cbnZhciB0b0xlbmd0aDtcbnZhciBoYXNSZXF1aXJlZFRvTGVuZ3RoO1xuXG5mdW5jdGlvbiByZXF1aXJlVG9MZW5ndGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb0xlbmd0aCkgcmV0dXJuIHRvTGVuZ3RoO1xuXHRoYXNSZXF1aXJlZFRvTGVuZ3RoID0gMTtcblx0dmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlVG9JbnRlZ2VyT3JJbmZpbml0eSgpO1xuXG5cdHZhciBtaW4gPSBNYXRoLm1pbjtcblxuXHQvLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5cdHRvTGVuZ3RoID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuXHQgIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cdH07XG5cdHJldHVybiB0b0xlbmd0aDtcbn1cblxudmFyIGxlbmd0aE9mQXJyYXlMaWtlO1xudmFyIGhhc1JlcXVpcmVkTGVuZ3RoT2ZBcnJheUxpa2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZExlbmd0aE9mQXJyYXlMaWtlKSByZXR1cm4gbGVuZ3RoT2ZBcnJheUxpa2U7XG5cdGhhc1JlcXVpcmVkTGVuZ3RoT2ZBcnJheUxpa2UgPSAxO1xuXHR2YXIgdG9MZW5ndGggPSByZXF1aXJlVG9MZW5ndGgoKTtcblxuXHQvLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5cdGxlbmd0aE9mQXJyYXlMaWtlID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcblx0fTtcblx0cmV0dXJuIGxlbmd0aE9mQXJyYXlMaWtlO1xufVxuXG52YXIgYXJyYXlJbmNsdWRlcztcbnZhciBoYXNSZXF1aXJlZEFycmF5SW5jbHVkZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheUluY2x1ZGVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlJbmNsdWRlcykgcmV0dXJuIGFycmF5SW5jbHVkZXM7XG5cdGhhc1JlcXVpcmVkQXJyYXlJbmNsdWRlcyA9IDE7XG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlVG9JbmRleGVkT2JqZWN0KCk7XG5cdHZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlVG9BYnNvbHV0ZUluZGV4KCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXG5cdC8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG5cdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG5cdCAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG5cdCAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG5cdCAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuXHQgICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcblx0ICAgIHZhciB2YWx1ZTtcblx0ICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcblx0ICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuXHQgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcblx0ICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3Rcblx0ICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuXHQgICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG5cdCAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG5cdCAgfTtcblx0fTtcblxuXHRhcnJheUluY2x1ZGVzID0ge1xuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG5cdCAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2Zcblx0ICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG5cdH07XG5cdHJldHVybiBhcnJheUluY2x1ZGVzO1xufVxuXG52YXIgb2JqZWN0S2V5c0ludGVybmFsO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0S2V5c0ludGVybmFsO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0S2V5c0ludGVybmFsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0S2V5c0ludGVybmFsKSByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsO1xuXHRoYXNSZXF1aXJlZE9iamVjdEtleXNJbnRlcm5hbCA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVUb0luZGV4ZWRPYmplY3QoKTtcblx0dmFyIGluZGV4T2YgPSByZXF1aXJlQXJyYXlJbmNsdWRlcygpLmluZGV4T2Y7XG5cdHZhciBoaWRkZW5LZXlzID0gcmVxdWlyZUhpZGRlbktleXMoKTtcblxuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdG9iamVjdEtleXNJbnRlcm5hbCA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG5cdCAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcblx0ICB2YXIgaSA9IDA7XG5cdCAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgIHZhciBrZXk7XG5cdCAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuXHQgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcblx0ICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuXHQgICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsO1xufVxuXG52YXIgZW51bUJ1Z0tleXM7XG52YXIgaGFzUmVxdWlyZWRFbnVtQnVnS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZUVudW1CdWdLZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW51bUJ1Z0tleXMpIHJldHVybiBlbnVtQnVnS2V5cztcblx0aGFzUmVxdWlyZWRFbnVtQnVnS2V5cyA9IDE7XG5cdC8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xuXHRlbnVtQnVnS2V5cyA9IFtcblx0ICAnY29uc3RydWN0b3InLFxuXHQgICdoYXNPd25Qcm9wZXJ0eScsXG5cdCAgJ2lzUHJvdG90eXBlT2YnLFxuXHQgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCAgJ3RvTG9jYWxlU3RyaW5nJyxcblx0ICAndG9TdHJpbmcnLFxuXHQgICd2YWx1ZU9mJ1xuXHRdO1xuXHRyZXR1cm4gZW51bUJ1Z0tleXM7XG59XG5cbnZhciBvYmplY3RLZXlzO1xudmFyIGhhc1JlcXVpcmVkT2JqZWN0S2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEtleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RLZXlzKSByZXR1cm4gb2JqZWN0S2V5cztcblx0aGFzUmVxdWlyZWRPYmplY3RLZXlzID0gMTtcblx0dmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmVPYmplY3RLZXlzSW50ZXJuYWwoKTtcblx0dmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZUVudW1CdWdLZXlzKCk7XG5cblx0Ly8gYE9iamVjdC5rZXlzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxuXHRvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG5cdCAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG5cdH07XG5cdHJldHVybiBvYmplY3RLZXlzO1xufVxuXG52YXIgaGFzUmVxdWlyZWRPYmplY3REZWZpbmVQcm9wZXJ0aWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydGllcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnRpZXMpIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0aWVzO1xuXHRoYXNSZXF1aXJlZE9iamVjdERlZmluZVByb3BlcnRpZXMgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZVY4UHJvdG90eXBlRGVmaW5lQnVnKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmVUb0luZGV4ZWRPYmplY3QoKTtcblx0dmFyIG9iamVjdEtleXMgPSByZXF1aXJlT2JqZWN0S2V5cygpO1xuXG5cdC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcblx0b2JqZWN0RGVmaW5lUHJvcGVydGllcy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcblx0ICBhbk9iamVjdChPKTtcblx0ICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG5cdCAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuXHQgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblx0ICB2YXIgaW5kZXggPSAwO1xuXHQgIHZhciBrZXk7XG5cdCAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuXHQgIHJldHVybiBPO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydGllcztcbn1cblxudmFyIGh0bWw7XG52YXIgaGFzUmVxdWlyZWRIdG1sO1xuXG5mdW5jdGlvbiByZXF1aXJlSHRtbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEh0bWwpIHJldHVybiBodG1sO1xuXHRoYXNSZXF1aXJlZEh0bWwgPSAxO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cblx0aHRtbCA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuXHRyZXR1cm4gaHRtbDtcbn1cblxudmFyIG9iamVjdENyZWF0ZTtcbnZhciBoYXNSZXF1aXJlZE9iamVjdENyZWF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdENyZWF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdENyZWF0ZSkgcmV0dXJuIG9iamVjdENyZWF0ZTtcblx0aGFzUmVxdWlyZWRPYmplY3RDcmVhdGUgPSAxO1xuXHQvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydGllcygpO1xuXHR2YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlRW51bUJ1Z0tleXMoKTtcblx0dmFyIGhpZGRlbktleXMgPSByZXF1aXJlSGlkZGVuS2V5cygpO1xuXHR2YXIgaHRtbCA9IHJlcXVpcmVIdG1sKCk7XG5cdHZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlRG9jdW1lbnRDcmVhdGVFbGVtZW50KCk7XG5cdHZhciBzaGFyZWRLZXkgPSByZXF1aXJlU2hhcmVkS2V5KCk7XG5cblx0dmFyIEdUID0gJz4nO1xuXHR2YXIgTFQgPSAnPCc7XG5cdHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblx0dmFyIFNDUklQVCA9ICdzY3JpcHQnO1xuXHR2YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cblx0dmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblx0dmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG5cdCAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcblx0fTtcblxuXHQvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuXHR2YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcblx0ICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG5cdCAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG5cdCAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG5cdCAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcblx0ICByZXR1cm4gdGVtcDtcblx0fTtcblxuXHQvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG5cdHZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcblx0ICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblx0ICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG5cdCAgdmFyIGlmcmFtZURvY3VtZW50O1xuXHQgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG5cdCAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG5cdCAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0ICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG5cdCAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcblx0ICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuXHQgIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xuXHR9O1xuXG5cdC8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcblx0Ly8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuXHQvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcblx0Ly8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcblx0Ly8gYXZvaWQgSUUgR0MgYnVnXG5cdHZhciBhY3RpdmVYRG9jdW1lbnQ7XG5cdHZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG5cdCAgdHJ5IHtcblx0ICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG5cdCAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG5cdCAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcblx0ICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG5cdCAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcblx0ICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcblx0ICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuXHQgIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuXHQgIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcblx0fTtcblxuXHRoaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cblx0Ly8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxuXHRvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG5cdCAgdmFyIHJlc3VsdDtcblx0ICBpZiAoTyAhPT0gbnVsbCkge1xuXHQgICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG5cdCAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuXHQgICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcblx0ICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcblx0ICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuXHQgIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcblx0ICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG5cdH07XG5cdHJldHVybiBvYmplY3RDcmVhdGU7XG59XG5cbnZhciBhZGRUb1Vuc2NvcGFibGVzO1xudmFyIGhhc1JlcXVpcmVkQWRkVG9VbnNjb3BhYmxlcztcblxuZnVuY3Rpb24gcmVxdWlyZUFkZFRvVW5zY29wYWJsZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBZGRUb1Vuc2NvcGFibGVzKSByZXR1cm4gYWRkVG9VbnNjb3BhYmxlcztcblx0aGFzUmVxdWlyZWRBZGRUb1Vuc2NvcGFibGVzID0gMTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCkuZjtcblxuXHR2YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG5cdHZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuXHQvLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuXHRpZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09PSB1bmRlZmluZWQpIHtcblx0ICBkZWZpbmVQcm9wZXJ0eShBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcblx0ICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgIHZhbHVlOiBjcmVhdGUobnVsbClcblx0ICB9KTtcblx0fVxuXG5cdC8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cblx0YWRkVG9VbnNjb3BhYmxlcyA9IGZ1bmN0aW9uIChrZXkpIHtcblx0ICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG5cdH07XG5cdHJldHVybiBhZGRUb1Vuc2NvcGFibGVzO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEluZGV4O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X2FycmF5X2xhc3RJbmRleCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SW5kZXgpIHJldHVybiBlc25leHRfYXJyYXlfbGFzdEluZGV4O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SW5kZXggPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlQWRkVG9VbnNjb3BhYmxlcygpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cblx0Ly8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhgIGdldHRlclxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20va2VpdGhhbXVzL3Byb3Bvc2FsLWFycmF5LWxhc3Rcblx0aWYgKERFU0NSSVBUT1JTKSB7XG5cdCAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEFycmF5LnByb3RvdHlwZSwgJ2xhc3RJbmRleCcsIHtcblx0ICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgIGdldDogZnVuY3Rpb24gbGFzdEluZGV4KCkge1xuXHQgICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuXHQgICAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG5cdCAgICAgIHJldHVybiBsZW4gPT09IDAgPyAwIDogbGVuIC0gMTtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIGFkZFRvVW5zY29wYWJsZXMoJ2xhc3RJbmRleCcpO1xuXHR9XG5cdHJldHVybiBlc25leHRfYXJyYXlfbGFzdEluZGV4O1xufVxuXG5yZXF1aXJlRXNuZXh0X2FycmF5X2xhc3RJbmRleCgpO1xuXG52YXIgZXNuZXh0X2FycmF5X2xhc3RJdGVtID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SXRlbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9hcnJheV9sYXN0SXRlbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9hcnJheV9sYXN0SXRlbSkgcmV0dXJuIGVzbmV4dF9hcnJheV9sYXN0SXRlbTtcblx0aGFzUmVxdWlyZWRFc25leHRfYXJyYXlfbGFzdEl0ZW0gPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlQWRkVG9VbnNjb3BhYmxlcygpO1xuXHR2YXIgdG9PYmplY3QgPSByZXF1aXJlVG9PYmplY3QoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cblx0Ly8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhgIGFjY2Vzc29yXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rZWl0aGFtdXMvcHJvcG9zYWwtYXJyYXktbGFzdFxuXHRpZiAoREVTQ1JJUFRPUlMpIHtcblx0ICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoQXJyYXkucHJvdG90eXBlLCAnbGFzdEl0ZW0nLCB7XG5cdCAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGxhc3RJdGVtKCkge1xuXHQgICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuXHQgICAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG5cdCAgICAgIHJldHVybiBsZW4gPT09IDAgPyB1bmRlZmluZWQgOiBPW2xlbiAtIDFdO1xuXHQgICAgfSxcblx0ICAgIHNldDogZnVuY3Rpb24gbGFzdEl0ZW0odmFsdWUpIHtcblx0ICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcblx0ICAgICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuXHQgICAgICByZXR1cm4gT1tsZW4gPT09IDAgPyAwIDogbGVuIC0gMV0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9KTtcblxuXHQgIGFkZFRvVW5zY29wYWJsZXMoJ2xhc3RJdGVtJyk7XG5cdH1cblx0cmV0dXJuIGVzbmV4dF9hcnJheV9sYXN0SXRlbTtcbn1cblxucmVxdWlyZUVzbmV4dF9hcnJheV9sYXN0SXRlbSgpO1xuXG52YXIgZXNuZXh0X2NvbXBvc2l0ZUtleSA9IHt9O1xuXG52YXIgb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0ge307XG5cbnZhciBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRPYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdFByb3BlcnR5SXNFbnVtZXJhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUpIHJldHVybiBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0aGFzUmVxdWlyZWRPYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IDE7XG5cdHZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuXHR2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuXHQvLyBOYXNob3JuIH4gSkRLOCBidWdcblx0dmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cblx0Ly8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcblx0b2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuXHQgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuXHQgIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xuXHR9IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHRyZXR1cm4gb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcikgcmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblx0aGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAxO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmVPYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSgpO1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZUNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigpO1xuXHR2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZVRvSW5kZXhlZE9iamVjdCgpO1xuXHR2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmVUb1Byb3BlcnR5S2V5KCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZUllOERvbURlZmluZSgpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0dmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5cdC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5cdG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcblx0ICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuXHQgIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuXHQgIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcblx0ICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcblx0fTtcblx0cmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbn1cblxudmFyIGRlZmluZUJ1aWx0SW47XG52YXIgaGFzUmVxdWlyZWREZWZpbmVCdWlsdEluO1xuXG5mdW5jdGlvbiByZXF1aXJlRGVmaW5lQnVpbHRJbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW4pIHJldHVybiBkZWZpbmVCdWlsdEluO1xuXHRoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW4gPSAxO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpO1xuXHR2YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlTWFrZUJ1aWx0SW4oKTtcblx0dmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZURlZmluZUdsb2JhbFByb3BlcnR5KCk7XG5cblx0ZGVmaW5lQnVpbHRJbiA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG5cdCAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cdCAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcblx0ICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuXHQgIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuXHQgIGlmIChvcHRpb25zLmdsb2JhbCkge1xuXHQgICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG5cdCAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB0cnkge1xuXHQgICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuXHQgICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG5cdCAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cdCAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcblx0ICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcblx0ICAgICAgdmFsdWU6IHZhbHVlLFxuXHQgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcblx0ICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG5cdCAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuXHQgICAgfSk7XG5cdCAgfSByZXR1cm4gTztcblx0fTtcblx0cmV0dXJuIGRlZmluZUJ1aWx0SW47XG59XG5cbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZE9iamVjdEdldE93blByb3BlcnR5TmFtZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcykgcmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5TmFtZXM7XG5cdGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IDE7XG5cdHZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlT2JqZWN0S2V5c0ludGVybmFsKCk7XG5cdHZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmVFbnVtQnVnS2V5cygpO1xuXG5cdHZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cblx0Ly8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuXHRvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcblx0ICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcztcbn1cblxudmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cdGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzID0gMTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuXHRvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cdHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG59XG5cbnZhciBvd25LZXlzO1xudmFyIGhhc1JlcXVpcmVkT3duS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZU93bktleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPd25LZXlzKSByZXR1cm4gb3duS2V5cztcblx0aGFzUmVxdWlyZWRPd25LZXlzID0gMTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKCk7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG5cdC8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcblx0b3duS2V5cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcblx0ICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuXHQgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcblx0ICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcblx0fTtcblx0cmV0dXJuIG93bktleXM7XG59XG5cbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzO1xudmFyIGhhc1JlcXVpcmVkQ29weUNvbnN0cnVjdG9yUHJvcGVydGllcztcblxuZnVuY3Rpb24gcmVxdWlyZUNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKSByZXR1cm4gY29weUNvbnN0cnVjdG9yUHJvcGVydGllcztcblx0aGFzUmVxdWlyZWRDb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gMTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgb3duS2V5cyA9IHJlcXVpcmVPd25LZXlzKCk7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpO1xuXG5cdGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcblx0ICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcblx0ICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXHQgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0ICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXHQgICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcblx0ICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblx0cmV0dXJuIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXM7XG59XG5cbnZhciBpc0ZvcmNlZF8xO1xudmFyIGhhc1JlcXVpcmVkSXNGb3JjZWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0ZvcmNlZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzRm9yY2VkKSByZXR1cm4gaXNGb3JjZWRfMTtcblx0aGFzUmVxdWlyZWRJc0ZvcmNlZCA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cblx0dmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxuXHR2YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG5cdCAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuXHQgIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG5cdCAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuXHQgICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG5cdCAgICA6ICEhZGV0ZWN0aW9uO1xuXHR9O1xuXG5cdHZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdCAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcblx0fTtcblxuXHR2YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcblx0dmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcblx0dmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cblx0aXNGb3JjZWRfMSA9IGlzRm9yY2VkO1xuXHRyZXR1cm4gaXNGb3JjZWRfMTtcbn1cblxudmFyIF9leHBvcnQ7XG52YXIgaGFzUmVxdWlyZWRfZXhwb3J0O1xuXG5mdW5jdGlvbiByZXF1aXJlX2V4cG9ydCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZF9leHBvcnQpIHJldHVybiBfZXhwb3J0O1xuXHRoYXNSZXF1aXJlZF9leHBvcnQgPSAxO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkuZjtcblx0dmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmVDcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXHR2YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlRGVmaW5lR2xvYmFsUHJvcGVydHkoKTtcblx0dmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlQ29weUNvbnN0cnVjdG9yUHJvcGVydGllcygpO1xuXHR2YXIgaXNGb3JjZWQgPSByZXF1aXJlSXNGb3JjZWQoKTtcblxuXHQvKlxuXHQgIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG5cdCAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuXHQgIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG5cdCAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcblx0ICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cblx0ICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuXHQgIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuXHQgIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cblx0ICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG5cdCAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcblx0ICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcblx0ICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuXHQgIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcblx0Ki9cblx0X2V4cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcblx0ICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG5cdCAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuXHQgIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG5cdCAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblx0ICBpZiAoR0xPQkFMKSB7XG5cdCAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuXHQgIH0gZWxzZSBpZiAoU1RBVElDKSB7XG5cdCAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuXHQgIH1cblx0ICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcblx0ICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG5cdCAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuXHQgICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0ICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG5cdCAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblx0ICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG5cdCAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG5cdCAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcblx0ICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuXHQgICAgfVxuXHQgICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuXHQgICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcblx0ICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuXHQgICAgfVxuXHQgICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIF9leHBvcnQ7XG59XG5cbnZhciBmdW5jdGlvbkFwcGx5O1xudmFyIGhhc1JlcXVpcmVkRnVuY3Rpb25BcHBseTtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uQXBwbHkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGdW5jdGlvbkFwcGx5KSByZXR1cm4gZnVuY3Rpb25BcHBseTtcblx0aGFzUmVxdWlyZWRGdW5jdGlvbkFwcGx5ID0gMTtcblx0dmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZUZ1bmN0aW9uQmluZE5hdGl2ZSgpO1xuXG5cdHZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblx0dmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG5cdHZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQsIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxuXHRmdW5jdGlvbkFwcGx5ID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuXHQgIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xuXHR9KTtcblx0cmV0dXJuIGZ1bmN0aW9uQXBwbHk7XG59XG5cbnZhciBlc19tYXAgPSB7fTtcblxudmFyIGVzX21hcF9jb25zdHJ1Y3RvciA9IHt9O1xuXG52YXIgaW50ZXJuYWxNZXRhZGF0YSA9IHtleHBvcnRzOiB7fX07XG5cbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSB7fTtcblxudmFyIGFycmF5U2xpY2U7XG52YXIgaGFzUmVxdWlyZWRBcnJheVNsaWNlO1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlTbGljZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5U2xpY2UpIHJldHVybiBhcnJheVNsaWNlO1xuXHRoYXNSZXF1aXJlZEFycmF5U2xpY2UgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdGFycmF5U2xpY2UgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XG5cdHJldHVybiBhcnJheVNsaWNlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwpIHJldHVybiBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWw7XG5cdGhhc1JlcXVpcmVkT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gMTtcblx0LyogZXNsaW50LWRpc2FibGUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZSAqL1xuXHR2YXIgY2xhc3NvZiA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlVG9JbmRleGVkT2JqZWN0KCk7XG5cdHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmVPYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzKCkuZjtcblx0dmFyIGFycmF5U2xpY2UgPSByZXF1aXJlQXJyYXlTbGljZSgpO1xuXG5cdHZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG5cdCAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cblx0dmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHJldHVybiBhcnJheVNsaWNlKHdpbmRvd05hbWVzKTtcblx0ICB9XG5cdH07XG5cblx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xuXHRvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcblx0ICByZXR1cm4gd2luZG93TmFtZXMgJiYgY2xhc3NvZihpdCkgPT09ICdXaW5kb3cnXG5cdCAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuXHQgICAgOiAkZ2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcblx0fTtcblx0cmV0dXJuIG9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbDtcbn1cblxudmFyIGFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZTtcbnZhciBoYXNSZXF1aXJlZEFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZSkgcmV0dXJuIGFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZTtcblx0aGFzUmVxdWlyZWRBcnJheUJ1ZmZlck5vbkV4dGVuc2libGUgPSAxO1xuXHQvLyBGRjI2LSBidWc6IEFycmF5QnVmZmVycyBhcmUgbm9uLWV4dGVuc2libGUsIGJ1dCBPYmplY3QuaXNFeHRlbnNpYmxlIGRvZXMgbm90IHJlcG9ydCBpdFxuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHRhcnJheUJ1ZmZlck5vbkV4dGVuc2libGUgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciA9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2V4dGVuc2libGUsIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG5cdCAgICBpZiAoT2JqZWN0LmlzRXh0ZW5zaWJsZShidWZmZXIpKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVmZmVyLCAnYScsIHsgdmFsdWU6IDggfSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGFycmF5QnVmZmVyTm9uRXh0ZW5zaWJsZTtcbn1cblxudmFyIG9iamVjdElzRXh0ZW5zaWJsZTtcbnZhciBoYXNSZXF1aXJlZE9iamVjdElzRXh0ZW5zaWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdElzRXh0ZW5zaWJsZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE9iamVjdElzRXh0ZW5zaWJsZSkgcmV0dXJuIG9iamVjdElzRXh0ZW5zaWJsZTtcblx0aGFzUmVxdWlyZWRPYmplY3RJc0V4dGVuc2libGUgPSAxO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblx0dmFyIEFSUkFZX0JVRkZFUl9OT05fRVhURU5TSUJMRSA9IHJlcXVpcmVBcnJheUJ1ZmZlck5vbkV4dGVuc2libGUoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSAtLSBzYWZlXG5cdHZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblx0dmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IH0pO1xuXG5cdC8vIGBPYmplY3QuaXNFeHRlbnNpYmxlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuaXNleHRlbnNpYmxlXG5cdG9iamVjdElzRXh0ZW5zaWJsZSA9IChGQUlMU19PTl9QUklNSVRJVkVTIHx8IEFSUkFZX0JVRkZFUl9OT05fRVhURU5TSUJMRSkgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpIHtcblx0ICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGZhbHNlO1xuXHQgIGlmIChBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUgJiYgY2xhc3NvZihpdCkgPT09ICdBcnJheUJ1ZmZlcicpIHJldHVybiBmYWxzZTtcblx0ICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZTtcblx0fSA6ICRpc0V4dGVuc2libGU7XG5cdHJldHVybiBvYmplY3RJc0V4dGVuc2libGU7XG59XG5cbnZhciBmcmVlemluZztcbnZhciBoYXNSZXF1aXJlZEZyZWV6aW5nO1xuXG5mdW5jdGlvbiByZXF1aXJlRnJlZXppbmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRGcmVlemluZykgcmV0dXJuIGZyZWV6aW5nO1xuXHRoYXNSZXF1aXJlZEZyZWV6aW5nID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cblx0ZnJlZXppbmcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlLCBlcy9uby1vYmplY3QtcHJldmVudGV4dGVuc2lvbnMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICByZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcblx0fSk7XG5cdHJldHVybiBmcmVlemluZztcbn1cblxudmFyIGhhc1JlcXVpcmVkSW50ZXJuYWxNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVybmFsTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJbnRlcm5hbE1ldGFkYXRhKSByZXR1cm4gaW50ZXJuYWxNZXRhZGF0YS5leHBvcnRzO1xuXHRoYXNSZXF1aXJlZEludGVybmFsTWV0YWRhdGEgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBoaWRkZW5LZXlzID0gcmVxdWlyZUhpZGRlbktleXMoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZU9iamVjdERlZmluZVByb3BlcnR5KCkuZjtcblx0dmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcygpO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsTW9kdWxlID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCgpO1xuXHR2YXIgaXNFeHRlbnNpYmxlID0gcmVxdWlyZU9iamVjdElzRXh0ZW5zaWJsZSgpO1xuXHR2YXIgdWlkID0gcmVxdWlyZVVpZCgpO1xuXHR2YXIgRlJFRVpJTkcgPSByZXF1aXJlRnJlZXppbmcoKTtcblxuXHR2YXIgUkVRVUlSRUQgPSBmYWxzZTtcblx0dmFyIE1FVEFEQVRBID0gdWlkKCdtZXRhJyk7XG5cdHZhciBpZCA9IDA7XG5cblx0dmFyIHNldE1ldGFkYXRhID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgZGVmaW5lUHJvcGVydHkoaXQsIE1FVEFEQVRBLCB7IHZhbHVlOiB7XG5cdCAgICBvYmplY3RJRDogJ08nICsgaWQrKywgLy8gb2JqZWN0IElEXG5cdCAgICB3ZWFrRGF0YToge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcblx0ICB9IH0pO1xuXHR9O1xuXG5cdHZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcblx0ICAvLyByZXR1cm4gYSBwcmltaXRpdmUgd2l0aCBwcmVmaXhcblx0ICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcblx0ICBpZiAoIWhhc093bihpdCwgTUVUQURBVEEpKSB7XG5cdCAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuXHQgICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuXHQgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcblx0ICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuXHQgICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcblx0ICAgIHNldE1ldGFkYXRhKGl0KTtcblx0ICAvLyByZXR1cm4gb2JqZWN0IElEXG5cdCAgfSByZXR1cm4gaXRbTUVUQURBVEFdLm9iamVjdElEO1xuXHR9O1xuXG5cdHZhciBnZXRXZWFrRGF0YSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG5cdCAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuXHQgICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3Rcblx0ICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG5cdCAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuXHQgICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcblx0ICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG5cdCAgICBzZXRNZXRhZGF0YShpdCk7XG5cdCAgLy8gcmV0dXJuIHRoZSBzdG9yZSBvZiB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuXHQgIH0gcmV0dXJuIGl0W01FVEFEQVRBXS53ZWFrRGF0YTtcblx0fTtcblxuXHQvLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcblx0dmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgaWYgKEZSRUVaSU5HICYmIFJFUVVJUkVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhc093bihpdCwgTUVUQURBVEEpKSBzZXRNZXRhZGF0YShpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXG5cdHZhciBlbmFibGUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgbWV0YS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cdCAgUkVRVUlSRUQgPSB0cnVlO1xuXHQgIHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mO1xuXHQgIHZhciBzcGxpY2UgPSB1bmN1cnJ5VGhpcyhbXS5zcGxpY2UpO1xuXHQgIHZhciB0ZXN0ID0ge307XG5cdCAgdGVzdFtNRVRBREFUQV0gPSAxO1xuXG5cdCAgLy8gcHJldmVudCBleHBvc2luZyBvZiBtZXRhZGF0YSBrZXlcblx0ICBpZiAoZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0KS5sZW5ndGgpIHtcblx0ICAgIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGZ1bmN0aW9uIChpdCkge1xuXHQgICAgICB2YXIgcmVzdWx0ID0gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICBpZiAocmVzdWx0W2ldID09PSBNRVRBREFUQSkge1xuXHQgICAgICAgICAgc3BsaWNlKHJlc3VsdCwgaSwgMSk7XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICB9XG5cdCAgICAgIH0gcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cblx0ICAgICQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWxNb2R1bGUuZlxuXHQgICAgfSk7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBtZXRhID0gaW50ZXJuYWxNZXRhZGF0YS5leHBvcnRzID0ge1xuXHQgIGVuYWJsZTogZW5hYmxlLFxuXHQgIGZhc3RLZXk6IGZhc3RLZXksXG5cdCAgZ2V0V2Vha0RhdGE6IGdldFdlYWtEYXRhLFxuXHQgIG9uRnJlZXplOiBvbkZyZWV6ZVxuXHR9O1xuXG5cdGhpZGRlbktleXNbTUVUQURBVEFdID0gdHJ1ZTtcblx0cmV0dXJuIGludGVybmFsTWV0YWRhdGEuZXhwb3J0cztcbn1cblxudmFyIGZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2U7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlO1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2UpIHJldHVybiBmdW5jdGlvblVuY3VycnlUaGlzQ2xhdXNlO1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNDbGF1c2UgPSAxO1xuXHR2YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmVDbGFzc29mUmF3KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0ZnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZSA9IGZ1bmN0aW9uIChmbikge1xuXHQgIC8vIE5hc2hvcm4gYnVnOlxuXHQgIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcblx0ICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG5cdCAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZTtcbn1cblxudmFyIGZ1bmN0aW9uQmluZENvbnRleHQ7XG52YXIgaGFzUmVxdWlyZWRGdW5jdGlvbkJpbmRDb250ZXh0O1xuXG5mdW5jdGlvbiByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZENvbnRleHQpIHJldHVybiBmdW5jdGlvbkJpbmRDb250ZXh0O1xuXHRoYXNSZXF1aXJlZEZ1bmN0aW9uQmluZENvbnRleHQgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpc0NsYXVzZSgpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlRnVuY3Rpb25CaW5kTmF0aXZlKCk7XG5cblx0dmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuXHQvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblx0ZnVuY3Rpb25CaW5kQ29udGV4dCA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuXHQgIGFDYWxsYWJsZShmbik7XG5cdCAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG5cdCAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gZnVuY3Rpb25CaW5kQ29udGV4dDtcbn1cblxudmFyIGl0ZXJhdG9ycztcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdG9ycztcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdG9ycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdG9ycykgcmV0dXJuIGl0ZXJhdG9ycztcblx0aGFzUmVxdWlyZWRJdGVyYXRvcnMgPSAxO1xuXHRpdGVyYXRvcnMgPSB7fTtcblx0cmV0dXJuIGl0ZXJhdG9ycztcbn1cblxudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZDtcbnZhciBoYXNSZXF1aXJlZElzQXJyYXlJdGVyYXRvck1ldGhvZDtcblxuZnVuY3Rpb24gcmVxdWlyZUlzQXJyYXlJdGVyYXRvck1ldGhvZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzQXJyYXlJdGVyYXRvck1ldGhvZCkgcmV0dXJuIGlzQXJyYXlJdGVyYXRvck1ldGhvZDtcblx0aGFzUmVxdWlyZWRJc0FycmF5SXRlcmF0b3JNZXRob2QgPSAxO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgSXRlcmF0b3JzID0gcmVxdWlyZUl0ZXJhdG9ycygpO1xuXG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblx0dmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5cdC8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcblx0aXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG5cdH07XG5cdHJldHVybiBpc0FycmF5SXRlcmF0b3JNZXRob2Q7XG59XG5cbnZhciB0b1N0cmluZ1RhZ1N1cHBvcnQ7XG52YXIgaGFzUmVxdWlyZWRUb1N0cmluZ1RhZ1N1cHBvcnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUb1N0cmluZ1RhZ1N1cHBvcnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb1N0cmluZ1RhZ1N1cHBvcnQpIHJldHVybiB0b1N0cmluZ1RhZ1N1cHBvcnQ7XG5cdGhhc1JlcXVpcmVkVG9TdHJpbmdUYWdTdXBwb3J0ID0gMTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblx0dmFyIHRlc3QgPSB7fTtcblxuXHR0ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5cdHRvU3RyaW5nVGFnU3VwcG9ydCA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuXHRyZXR1cm4gdG9TdHJpbmdUYWdTdXBwb3J0O1xufVxuXG52YXIgY2xhc3NvZjtcbnZhciBoYXNSZXF1aXJlZENsYXNzb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDbGFzc29mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ2xhc3NvZikgcmV0dXJuIGNsYXNzb2Y7XG5cdGhhc1JlcXVpcmVkQ2xhc3NvZiA9IDE7XG5cdHZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlVG9TdHJpbmdUYWdTdXBwb3J0KCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlQ2xhc3NvZlJhdygpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXG5cdHZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblxuXHQvLyBFUzMgd3JvbmcgaGVyZVxuXHR2YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3Jcblx0dmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiBpdFtrZXldO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0fTtcblxuXHQvLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5cdGNsYXNzb2YgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG5cdCAgdmFyIE8sIHRhZywgcmVzdWx0O1xuXHQgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuXHQgICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG5cdCAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG5cdCAgICAvLyBidWlsdGluVGFnIGNhc2Vcblx0ICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG5cdCAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG5cdCAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIGNsYXNzb2Y7XG59XG5cbnZhciBnZXRJdGVyYXRvck1ldGhvZDtcbnZhciBoYXNSZXF1aXJlZEdldEl0ZXJhdG9yTWV0aG9kO1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0SXRlcmF0b3JNZXRob2QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRJdGVyYXRvck1ldGhvZCkgcmV0dXJuIGdldEl0ZXJhdG9yTWV0aG9kO1xuXHRoYXNSZXF1aXJlZEdldEl0ZXJhdG9yTWV0aG9kID0gMTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZigpO1xuXHR2YXIgZ2V0TWV0aG9kID0gcmVxdWlyZUdldE1ldGhvZCgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmVJdGVyYXRvcnMoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cblx0Z2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGdldE1ldGhvZChpdCwgSVRFUkFUT1IpXG5cdCAgICB8fCBnZXRNZXRob2QoaXQsICdAQGl0ZXJhdG9yJylcblx0ICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG5cdH07XG5cdHJldHVybiBnZXRJdGVyYXRvck1ldGhvZDtcbn1cblxudmFyIGdldEl0ZXJhdG9yO1xudmFyIGhhc1JlcXVpcmVkR2V0SXRlcmF0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVHZXRJdGVyYXRvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldEl0ZXJhdG9yKSByZXR1cm4gZ2V0SXRlcmF0b3I7XG5cdGhhc1JlcXVpcmVkR2V0SXRlcmF0b3IgPSAxO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmVUcnlUb1N0cmluZygpO1xuXHR2YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlR2V0SXRlcmF0b3JNZXRob2QoKTtcblxuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHRnZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuXHQgIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoYXJndW1lbnQpIDogdXNpbmdJdGVyYXRvcjtcblx0ICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcblx0fTtcblx0cmV0dXJuIGdldEl0ZXJhdG9yO1xufVxuXG52YXIgaXRlcmF0b3JDbG9zZTtcbnZhciBoYXNSZXF1aXJlZEl0ZXJhdG9yQ2xvc2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRvckNsb3NlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXRlcmF0b3JDbG9zZSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2U7XG5cdGhhc1JlcXVpcmVkSXRlcmF0b3JDbG9zZSA9IDE7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGdldE1ldGhvZCA9IHJlcXVpcmVHZXRNZXRob2QoKTtcblxuXHRpdGVyYXRvckNsb3NlID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuXHQgIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcblx0ICBhbk9iamVjdChpdGVyYXRvcik7XG5cdCAgdHJ5IHtcblx0ICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG5cdCAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG5cdCAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfVxuXHQgICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuXHQgICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcblx0ICB9XG5cdCAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuXHQgIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcblx0ICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG5cdCAgcmV0dXJuIHZhbHVlO1xuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3JDbG9zZTtcbn1cblxudmFyIGl0ZXJhdGU7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdGUpIHJldHVybiBpdGVyYXRlO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdGUgPSAxO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZVRyeVRvU3RyaW5nKCk7XG5cdHZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlSXNBcnJheUl0ZXJhdG9yTWV0aG9kKCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXHR2YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RJc1Byb3RvdHlwZU9mKCk7XG5cdHZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmVHZXRJdGVyYXRvcigpO1xuXHR2YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlR2V0SXRlcmF0b3JNZXRob2QoKTtcblx0dmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlSXRlcmF0b3JDbG9zZSgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdHZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG5cdCAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcblx0ICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcblx0fTtcblxuXHR2YXIgUmVzdWx0UHJvdG90eXBlID0gUmVzdWx0LnByb3RvdHlwZTtcblxuXHRpdGVyYXRlID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcblx0ICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuXHQgIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuXHQgIHZhciBJU19SRUNPUkQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfUkVDT1JEKTtcblx0ICB2YXIgSVNfSVRFUkFUT1IgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfSVRFUkFUT1IpO1xuXHQgIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG5cdCAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQpO1xuXHQgIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cblx0ICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcblx0ICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGNvbmRpdGlvbik7XG5cdCAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuXHQgIH07XG5cblx0ICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICBpZiAoQVNfRU5UUklFUykge1xuXHQgICAgICBhbk9iamVjdCh2YWx1ZSk7XG5cdCAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuXHQgICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG5cdCAgfTtcblxuXHQgIGlmIChJU19SRUNPUkQpIHtcblx0ICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG5cdCAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuXHQgICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuXHQgICAgaWYgKCFpdGVyRm4pIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGl0ZXJhYmxlKSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG5cdCAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuXHQgICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG5cdCAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShpdGVyYWJsZSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG5cdCAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG5cdCAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcblx0ICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG5cdCAgICB9XG5cdCAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuXHQgIH1cblxuXHQgIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcblx0ICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcblx0ICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcblx0ICAgIH1cblx0ICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcblx0ICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcblx0fTtcblx0cmV0dXJuIGl0ZXJhdGU7XG59XG5cbnZhciBhbkluc3RhbmNlO1xudmFyIGhhc1JlcXVpcmVkQW5JbnN0YW5jZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFuSW5zdGFuY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBbkluc3RhbmNlKSByZXR1cm4gYW5JbnN0YW5jZTtcblx0aGFzUmVxdWlyZWRBbkluc3RhbmNlID0gMTtcblx0dmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0SXNQcm90b3R5cGVPZigpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdGFuSW5zdGFuY2UgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuXHQgIGlmIChpc1Byb3RvdHlwZU9mKFByb3RvdHlwZSwgaXQpKSByZXR1cm4gaXQ7XG5cdCAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG5cdH07XG5cdHJldHVybiBhbkluc3RhbmNlO1xufVxuXG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uO1xudmFyIGhhc1JlcXVpcmVkQ2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlQ2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKSByZXR1cm4gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uO1xuXHRoYXNSZXF1aXJlZENoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IDE7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXHR2YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cblx0dHJ5IHtcblx0ICB2YXIgY2FsbGVkID0gMDtcblx0ICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuXHQgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG5cdCAgICB9LFxuXHQgICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gdGhpcztcblx0ICB9O1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tLCBuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5cdCAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxuXHRjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG5cdCAgdHJ5IHtcblx0ICAgIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcblx0ICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gZmFsc2U7IH0gLy8gd29ya2Fyb3VuZCBvZiBvbGQgV2ViS2l0ICsgYGV2YWxgIGJ1Z1xuXHQgIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuXHQgIHRyeSB7XG5cdCAgICB2YXIgb2JqZWN0ID0ge307XG5cdCAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4ge1xuXHQgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH07XG5cdCAgICBleGVjKG9iamVjdCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXHQgIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcblx0fTtcblx0cmV0dXJuIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbjtcbn1cblxudmFyIHNldFRvU3RyaW5nVGFnO1xudmFyIGhhc1JlcXVpcmVkU2V0VG9TdHJpbmdUYWc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRUb1N0cmluZ1RhZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldFRvU3RyaW5nVGFnKSByZXR1cm4gc2V0VG9TdHJpbmdUYWc7XG5cdGhhc1JlcXVpcmVkU2V0VG9TdHJpbmdUYWcgPSAxO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKS5mO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cblx0dmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cblx0c2V0VG9TdHJpbmdUYWcgPSBmdW5jdGlvbiAodGFyZ2V0LCBUQUcsIFNUQVRJQykge1xuXHQgIGlmICh0YXJnZXQgJiYgIVNUQVRJQykgdGFyZ2V0ID0gdGFyZ2V0LnByb3RvdHlwZTtcblx0ICBpZiAodGFyZ2V0ICYmICFoYXNPd24odGFyZ2V0LCBUT19TVFJJTkdfVEFHKSkge1xuXHQgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcblx0ICB9XG5cdH07XG5cdHJldHVybiBzZXRUb1N0cmluZ1RhZztcbn1cblxudmFyIGZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvcjtcbnZhciBoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvcikgcmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3Nvcjtcblx0aGFzUmVxdWlyZWRGdW5jdGlvblVuY3VycnlUaGlzQWNjZXNzb3IgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXG5cdGZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvciA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgbWV0aG9kKSB7XG5cdCAgdHJ5IHtcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcblx0ICAgIHJldHVybiB1bmN1cnJ5VGhpcyhhQ2FsbGFibGUoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSlbbWV0aG9kXSkpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0fTtcblx0cmV0dXJuIGZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3Nvcjtcbn1cblxudmFyIGlzUG9zc2libGVQcm90b3R5cGU7XG52YXIgaGFzUmVxdWlyZWRJc1Bvc3NpYmxlUHJvdG90eXBlO1xuXG5mdW5jdGlvbiByZXF1aXJlSXNQb3NzaWJsZVByb3RvdHlwZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZElzUG9zc2libGVQcm90b3R5cGUpIHJldHVybiBpc1Bvc3NpYmxlUHJvdG90eXBlO1xuXHRoYXNSZXF1aXJlZElzUG9zc2libGVQcm90b3R5cGUgPSAxO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblxuXHRpc1Bvc3NpYmxlUHJvdG90eXBlID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgcmV0dXJuIGlzT2JqZWN0KGFyZ3VtZW50KSB8fCBhcmd1bWVudCA9PT0gbnVsbDtcblx0fTtcblx0cmV0dXJuIGlzUG9zc2libGVQcm90b3R5cGU7XG59XG5cbnZhciBhUG9zc2libGVQcm90b3R5cGU7XG52YXIgaGFzUmVxdWlyZWRBUG9zc2libGVQcm90b3R5cGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBUG9zc2libGVQcm90b3R5cGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRBUG9zc2libGVQcm90b3R5cGUpIHJldHVybiBhUG9zc2libGVQcm90b3R5cGU7XG5cdGhhc1JlcXVpcmVkQVBvc3NpYmxlUHJvdG90eXBlID0gMTtcblx0dmFyIGlzUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlSXNQb3NzaWJsZVByb3RvdHlwZSgpO1xuXG5cdHZhciAkU3RyaW5nID0gU3RyaW5nO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuXHRhUG9zc2libGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0ICBpZiAoaXNQb3NzaWJsZVByb3RvdHlwZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcblx0ICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArICRTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuXHR9O1xuXHRyZXR1cm4gYVBvc3NpYmxlUHJvdG90eXBlO1xufVxuXG52YXIgb2JqZWN0U2V0UHJvdG90eXBlT2Y7XG52YXIgaGFzUmVxdWlyZWRPYmplY3RTZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gcmVxdWlyZU9iamVjdFNldFByb3RvdHlwZU9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkT2JqZWN0U2V0UHJvdG90eXBlT2YpIHJldHVybiBvYmplY3RTZXRQcm90b3R5cGVPZjtcblx0aGFzUmVxdWlyZWRPYmplY3RTZXRQcm90b3R5cGVPZiA9IDE7XG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cblx0dmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpc0FjY2Vzc29yKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXHR2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmVSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCk7XG5cdHZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlQVBvc3NpYmxlUHJvdG90eXBlKCk7XG5cblx0Ly8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG5cdC8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcblx0b2JqZWN0U2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuXHQgIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuXHQgIHZhciB0ZXN0ID0ge307XG5cdCAgdmFyIHNldHRlcjtcblx0ICB0cnkge1xuXHQgICAgc2V0dGVyID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJywgJ3NldCcpO1xuXHQgICAgc2V0dGVyKHRlc3QsIFtdKTtcblx0ICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0ICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcblx0ICAgIHJlcXVpcmVPYmplY3RDb2VyY2libGUoTyk7XG5cdCAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuXHQgICAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIE87XG5cdCAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG5cdCAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG5cdCAgICByZXR1cm4gTztcblx0ICB9O1xuXHR9KCkgOiB1bmRlZmluZWQpO1xuXHRyZXR1cm4gb2JqZWN0U2V0UHJvdG90eXBlT2Y7XG59XG5cbnZhciBpbmhlcml0SWZSZXF1aXJlZDtcbnZhciBoYXNSZXF1aXJlZEluaGVyaXRJZlJlcXVpcmVkO1xuXG5mdW5jdGlvbiByZXF1aXJlSW5oZXJpdElmUmVxdWlyZWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJbmhlcml0SWZSZXF1aXJlZCkgcmV0dXJuIGluaGVyaXRJZlJlcXVpcmVkO1xuXHRoYXNSZXF1aXJlZEluaGVyaXRJZlJlcXVpcmVkID0gMTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdFNldFByb3RvdHlwZU9mKCk7XG5cblx0Ly8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xuXHRpbmhlcml0SWZSZXF1aXJlZCA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcblx0ICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG5cdCAgaWYgKFxuXHQgICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG5cdCAgICBzZXRQcm90b3R5cGVPZiAmJlxuXHQgICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuXHQgICAgaXNDYWxsYWJsZShOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgJiZcblx0ICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuXHQgICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcblx0ICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcblx0ICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuXHQgIHJldHVybiAkdGhpcztcblx0fTtcblx0cmV0dXJuIGluaGVyaXRJZlJlcXVpcmVkO1xufVxuXG52YXIgY29sbGVjdGlvbjtcbnZhciBoYXNSZXF1aXJlZENvbGxlY3Rpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb2xsZWN0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29sbGVjdGlvbikgcmV0dXJuIGNvbGxlY3Rpb247XG5cdGhhc1JlcXVpcmVkQ29sbGVjdGlvbiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgaXNGb3JjZWQgPSByZXF1aXJlSXNGb3JjZWQoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXHR2YXIgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbE1ldGFkYXRhKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlQW5JbnN0YW5jZSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlQ2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKCk7XG5cdHZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmVTZXRUb1N0cmluZ1RhZygpO1xuXHR2YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlSW5oZXJpdElmUmVxdWlyZWQoKTtcblxuXHRjb2xsZWN0aW9uID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUsIHdyYXBwZXIsIGNvbW1vbikge1xuXHQgIHZhciBJU19NQVAgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ01hcCcpICE9PSAtMTtcblx0ICB2YXIgSVNfV0VBSyA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignV2VhaycpICE9PSAtMTtcblx0ICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuXHQgIHZhciBOYXRpdmVDb25zdHJ1Y3RvciA9IGdsb2JhbFRoaXNbQ09OU1RSVUNUT1JfTkFNRV07XG5cdCAgdmFyIE5hdGl2ZVByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yICYmIE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0ICB2YXIgQ29uc3RydWN0b3IgPSBOYXRpdmVDb25zdHJ1Y3Rvcjtcblx0ICB2YXIgZXhwb3J0ZWQgPSB7fTtcblxuXHQgIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG5cdCAgICB2YXIgdW5jdXJyaWVkTmF0aXZlTWV0aG9kID0gdW5jdXJyeVRoaXMoTmF0aXZlUHJvdG90eXBlW0tFWV0pO1xuXHQgICAgZGVmaW5lQnVpbHRJbihOYXRpdmVQcm90b3R5cGUsIEtFWSxcblx0ICAgICAgS0VZID09PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuXHQgICAgICAgIHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgIH0gOiBLRVkgPT09ICdkZWxldGUnID8gZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG5cdCAgICAgIH0gOiBLRVkgPT09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGtleSkge1xuXHQgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gdW5kZWZpbmVkIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuXHQgICAgICB9IDogS0VZID09PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhrZXkpIHtcblx0ICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuXHQgICAgICB9IDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0ICAgICAgICB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICB9XG5cdCAgICApO1xuXHQgIH07XG5cblx0ICB2YXIgUkVQTEFDRSA9IGlzRm9yY2VkKFxuXHQgICAgQ09OU1RSVUNUT1JfTkFNRSxcblx0ICAgICFpc0NhbGxhYmxlKE5hdGl2ZUNvbnN0cnVjdG9yKSB8fCAhKElTX1dFQUsgfHwgTmF0aXZlUHJvdG90eXBlLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCkuZW50cmllcygpLm5leHQoKTtcblx0ICAgIH0pKVxuXHQgICk7XG5cblx0ICBpZiAoUkVQTEFDRSkge1xuXHQgICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3Jcblx0ICAgIENvbnN0cnVjdG9yID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpO1xuXHQgICAgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZS5lbmFibGUoKTtcblx0ICB9IGVsc2UgaWYgKGlzRm9yY2VkKENPTlNUUlVDVE9SX05BTUUsIHRydWUpKSB7XG5cdCAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcblx0ICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcblx0ICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT09IGluc3RhbmNlO1xuXHQgICAgLy8gVjggfiBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2Vcblx0ICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcblx0ICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXcgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcblx0ICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyBuZXcgTmF0aXZlQ29uc3RydWN0b3IoaXRlcmFibGUpOyB9KTtcblx0ICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuXHQgICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuXHQgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG5cdCAgICAgIHZhciBpbmRleCA9IDU7XG5cdCAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG5cdCAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG5cdCAgICB9KTtcblxuXHQgICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG5cdCAgICAgIENvbnN0cnVjdG9yID0gd3JhcHBlcihmdW5jdGlvbiAoZHVtbXksIGl0ZXJhYmxlKSB7XG5cdCAgICAgICAgYW5JbnN0YW5jZShkdW1teSwgTmF0aXZlUHJvdG90eXBlKTtcblx0ICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLCBkdW1teSwgQ29uc3RydWN0b3IpO1xuXHQgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgeyB0aGF0OiB0aGF0LCBBU19FTlRSSUVTOiBJU19NQVAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHRoYXQ7XG5cdCAgICAgIH0pO1xuXHQgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBOYXRpdmVQcm90b3R5cGU7XG5cdCAgICAgIE5hdGl2ZVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuXHQgICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuXHQgICAgICBmaXhNZXRob2QoJ2hhcycpO1xuXHQgICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG5cblx0ICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG5cdCAgICBpZiAoSVNfV0VBSyAmJiBOYXRpdmVQcm90b3R5cGUuY2xlYXIpIGRlbGV0ZSBOYXRpdmVQcm90b3R5cGUuY2xlYXI7XG5cdCAgfVxuXG5cdCAgZXhwb3J0ZWRbQ09OU1RSVUNUT1JfTkFNRV0gPSBDb25zdHJ1Y3Rvcjtcblx0ICAkKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBDb25zdHJ1Y3RvciAhPT0gTmF0aXZlQ29uc3RydWN0b3IgfSwgZXhwb3J0ZWQpO1xuXG5cdCAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuXG5cdCAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApO1xuXG5cdCAgcmV0dXJuIENvbnN0cnVjdG9yO1xuXHR9O1xuXHRyZXR1cm4gY29sbGVjdGlvbjtcbn1cblxudmFyIGRlZmluZUJ1aWx0SW5zO1xudmFyIGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVEZWZpbmVCdWlsdElucyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZERlZmluZUJ1aWx0SW5zKSByZXR1cm4gZGVmaW5lQnVpbHRJbnM7XG5cdGhhc1JlcXVpcmVkRGVmaW5lQnVpbHRJbnMgPSAxO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cblx0ZGVmaW5lQnVpbHRJbnMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcblx0ICBmb3IgKHZhciBrZXkgaW4gc3JjKSBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG5cdCAgcmV0dXJuIHRhcmdldDtcblx0fTtcblx0cmV0dXJuIGRlZmluZUJ1aWx0SW5zO1xufVxuXG52YXIgY29ycmVjdFByb3RvdHlwZUdldHRlcjtcbnZhciBoYXNSZXF1aXJlZENvcnJlY3RQcm90b3R5cGVHZXR0ZXI7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb3JyZWN0UHJvdG90eXBlR2V0dGVyICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29ycmVjdFByb3RvdHlwZUdldHRlcikgcmV0dXJuIGNvcnJlY3RQcm90b3R5cGVHZXR0ZXI7XG5cdGhhc1JlcXVpcmVkQ29ycmVjdFByb3RvdHlwZUdldHRlciA9IDE7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXG5cdGNvcnJlY3RQcm90b3R5cGVHZXR0ZXIgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cblx0ICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuXHQgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xuXHR9KTtcblx0cmV0dXJuIGNvcnJlY3RQcm90b3R5cGVHZXR0ZXI7XG59XG5cbnZhciBvYmplY3RHZXRQcm90b3R5cGVPZjtcbnZhciBoYXNSZXF1aXJlZE9iamVjdEdldFByb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRPYmplY3RHZXRQcm90b3R5cGVPZikgcmV0dXJuIG9iamVjdEdldFByb3RvdHlwZU9mO1xuXHRoYXNSZXF1aXJlZE9iamVjdEdldFByb3RvdHlwZU9mID0gMTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgc2hhcmVkS2V5ID0gcmVxdWlyZVNoYXJlZEtleSgpO1xuXHR2YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZUNvcnJlY3RQcm90b3R5cGVHZXR0ZXIoKTtcblxuXHR2YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cdHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXHR2YXIgT2JqZWN0UHJvdG90eXBlID0gJE9iamVjdC5wcm90b3R5cGU7XG5cblx0Ly8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxuXHRvYmplY3RHZXRQcm90b3R5cGVPZiA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuXHQgIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcblx0ICBpZiAoaGFzT3duKG9iamVjdCwgSUVfUFJPVE8pKSByZXR1cm4gb2JqZWN0W0lFX1BST1RPXTtcblx0ICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG5cdCAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG5cdCAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHQgIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xuXHR9O1xuXHRyZXR1cm4gb2JqZWN0R2V0UHJvdG90eXBlT2Y7XG59XG5cbnZhciBpdGVyYXRvcnNDb3JlO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0b3JzQ29yZTtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdG9yc0NvcmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRvcnNDb3JlKSByZXR1cm4gaXRlcmF0b3JzQ29yZTtcblx0aGFzUmVxdWlyZWRJdGVyYXRvcnNDb3JlID0gMTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBpc0NhbGxhYmxlID0gcmVxdWlyZUlzQ2FsbGFibGUoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cdHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZigpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmVEZWZpbmVCdWlsdEluKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBJU19QVVJFID0gcmVxdWlyZUlzUHVyZSgpO1xuXG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblx0dmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuXHQvLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3Rcblx0dmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cblx0LyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuXHRpZiAoW10ua2V5cykge1xuXHQgIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG5cdCAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG5cdCAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcblx0ICBlbHNlIHtcblx0ICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcblx0ICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuXHQgIH1cblx0fVxuXG5cdHZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gIWlzT2JqZWN0KEl0ZXJhdG9yUHJvdG90eXBlKSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIHRlc3QgPSB7fTtcblx0ICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2Vcblx0ICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG5cdH0pO1xuXG5cdGlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXHRlbHNlIGlmIChJU19QVVJFKSBJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cblx0Ly8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5cdGlmICghaXNDYWxsYWJsZShJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG5cdCAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0pO1xuXHR9XG5cblx0aXRlcmF0b3JzQ29yZSA9IHtcblx0ICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG5cdCAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3JzQ29yZTtcbn1cblxudmFyIGl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3I7XG52YXIgaGFzUmVxdWlyZWRJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlSXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IpIHJldHVybiBpdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZEl0ZXJhdG9yQ3JlYXRlQ29uc3RydWN0b3IgPSAxO1xuXHR2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlSXRlcmF0b3JzQ29yZSgpLkl0ZXJhdG9yUHJvdG90eXBlO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZUNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigpO1xuXHR2YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlU2V0VG9TdHJpbmdUYWcoKTtcblx0dmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmVJdGVyYXRvcnMoKTtcblxuXHR2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cblx0aXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBFTlVNRVJBQkxFX05FWFQpIHtcblx0ICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcblx0ICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKyFFTlVNRVJBQkxFX05FWFQsIG5leHQpIH0pO1xuXHQgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcblx0ICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuXHQgIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3JDcmVhdGVDb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGl0ZXJhdG9yRGVmaW5lO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0b3JEZWZpbmU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJdGVyYXRvckRlZmluZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEl0ZXJhdG9yRGVmaW5lKSByZXR1cm4gaXRlcmF0b3JEZWZpbmU7XG5cdGhhc1JlcXVpcmVkSXRlcmF0b3JEZWZpbmUgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgSVNfUFVSRSA9IHJlcXVpcmVJc1B1cmUoKTtcblx0dmFyIEZ1bmN0aW9uTmFtZSA9IHJlcXVpcmVGdW5jdGlvbk5hbWUoKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmVJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yKCk7XG5cdHZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmVPYmplY3RHZXRQcm90b3R5cGVPZigpO1xuXHR2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0U2V0UHJvdG90eXBlT2YoKTtcblx0dmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZVNldFRvU3RyaW5nVGFnKCk7XG5cdHZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlQ3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCk7XG5cdHZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZURlZmluZUJ1aWx0SW4oKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblx0dmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmVJdGVyYXRvcnMoKTtcblx0dmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlSXRlcmF0b3JzQ29yZSgpO1xuXG5cdHZhciBQUk9QRVJfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5QUk9QRVI7XG5cdHZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5DT05GSUdVUkFCTEU7XG5cdHZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG5cdHZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xuXHR2YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cdHZhciBLRVlTID0gJ2tleXMnO1xuXHR2YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cdHZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG5cdHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuXHRpdGVyYXRvckRlZmluZSA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcblx0ICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG5cdCAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG5cdCAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG5cdCAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG5cblx0ICAgIHN3aXRjaCAoS0lORCkge1xuXHQgICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG5cdCAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG5cdCAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuXHQgIH07XG5cblx0ICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcblx0ICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG5cdCAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuXHQgIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuXHQgICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuXHQgICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcblx0ICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuXHQgIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG5cdCAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG5cdCAgLy8gZml4IG5hdGl2ZVxuXHQgIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuXHQgICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuXHQgICAgaWYgKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuXHQgICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcblx0ICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcblx0ICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcblx0ICAgICAgICAgIGRlZmluZUJ1aWx0SW4oQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcblx0ICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcblx0ICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuXHQgIGlmIChQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiBERUZBVUxUID09PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG5cdCAgICBpZiAoIUlTX1BVUkUgJiYgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUpIHtcblx0ICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCAnbmFtZScsIFZBTFVFUyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuXHQgICAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBjYWxsKG5hdGl2ZUl0ZXJhdG9yLCB0aGlzKTsgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG5cdCAgaWYgKERFRkFVTFQpIHtcblx0ICAgIG1ldGhvZHMgPSB7XG5cdCAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG5cdCAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcblx0ICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG5cdCAgICB9O1xuXHQgICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuXHQgICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG5cdCAgICAgICAgZGVmaW5lQnVpbHRJbihJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG5cdCAgfVxuXG5cdCAgLy8gZGVmaW5lIGl0ZXJhdG9yXG5cdCAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG5cdCAgICBkZWZpbmVCdWlsdEluKEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yLCB7IG5hbWU6IERFRkFVTFQgfSk7XG5cdCAgfVxuXHQgIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuXHQgIHJldHVybiBtZXRob2RzO1xuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3JEZWZpbmU7XG59XG5cbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0O1xudmFyIGhhc1JlcXVpcmVkQ3JlYXRlSXRlclJlc3VsdE9iamVjdDtcblxuZnVuY3Rpb24gcmVxdWlyZUNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdDtcblx0aGFzUmVxdWlyZWRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gMTtcblx0Ly8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcblx0Y3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuXHQgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9O1xuXHR9O1xuXHRyZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdDtcbn1cblxudmFyIHNldFNwZWNpZXM7XG52YXIgaGFzUmVxdWlyZWRTZXRTcGVjaWVzO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0U3BlY2llcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldFNwZWNpZXMpIHJldHVybiBzZXRTcGVjaWVzO1xuXHRoYXNSZXF1aXJlZFNldFNwZWNpZXMgPSAxO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlRGVmaW5lQnVpbHRJbkFjY2Vzc29yKCk7XG5cdHZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sKCk7XG5cdHZhciBERVNDUklQVE9SUyA9IHJlcXVpcmVEZXNjcmlwdG9ycygpO1xuXG5cdHZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cblx0c2V0U3BlY2llcyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG5cdCAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcblxuXHQgIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcblx0ICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuXHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXG5cdCAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuXHQgICAgfSk7XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gc2V0U3BlY2llcztcbn1cblxudmFyIGNvbGxlY3Rpb25TdHJvbmc7XG52YXIgaGFzUmVxdWlyZWRDb2xsZWN0aW9uU3Ryb25nO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29sbGVjdGlvblN0cm9uZyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbGxlY3Rpb25TdHJvbmcpIHJldHVybiBjb2xsZWN0aW9uU3Ryb25nO1xuXHRoYXNSZXF1aXJlZENvbGxlY3Rpb25TdHJvbmcgPSAxO1xuXHR2YXIgY3JlYXRlID0gcmVxdWlyZU9iamVjdENyZWF0ZSgpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZURlZmluZUJ1aWx0SW5BY2Nlc3NvcigpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlRGVmaW5lQnVpbHRJbnMoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmVBbkluc3RhbmNlKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cdHZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmVJdGVyYXRvckRlZmluZSgpO1xuXHR2YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmVDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KCk7XG5cdHZhciBzZXRTcGVjaWVzID0gcmVxdWlyZVNldFNwZWNpZXMoKTtcblx0dmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZURlc2NyaXB0b3JzKCk7XG5cdHZhciBmYXN0S2V5ID0gcmVxdWlyZUludGVybmFsTWV0YWRhdGEoKS5mYXN0S2V5O1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cblx0dmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblx0dmFyIGludGVybmFsU3RhdGVHZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblxuXHRjb2xsZWN0aW9uU3Ryb25nID0ge1xuXHQgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUikge1xuXHQgICAgdmFyIENvbnN0cnVjdG9yID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcblx0ICAgICAgYW5JbnN0YW5jZSh0aGF0LCBQcm90b3R5cGUpO1xuXHQgICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHtcblx0ICAgICAgICB0eXBlOiBDT05TVFJVQ1RPUl9OQU1FLFxuXHQgICAgICAgIGluZGV4OiBjcmVhdGUobnVsbCksXG5cdCAgICAgICAgZmlyc3Q6IG51bGwsXG5cdCAgICAgICAgbGFzdDogbnVsbCxcblx0ICAgICAgICBzaXplOiAwXG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAoIURFU0NSSVBUT1JTKSB0aGF0LnNpemUgPSAwO1xuXHQgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0ZXJhYmxlKSkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHsgdGhhdDogdGhhdCwgQVNfRU5UUklFUzogSVNfTUFQIH0pO1xuXHQgICAgfSk7XG5cblx0ICAgIHZhciBQcm90b3R5cGUgPSBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cblx0ICAgIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcblxuXHQgICAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG5cdCAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG5cdCAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG5cdCAgICAgIHZhciBwcmV2aW91cywgaW5kZXg7XG5cdCAgICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuXHQgICAgICBpZiAoZW50cnkpIHtcblx0ICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuXHQgICAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc3RhdGUubGFzdCA9IGVudHJ5ID0ge1xuXHQgICAgICAgICAgaW5kZXg6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLFxuXHQgICAgICAgICAga2V5OiBrZXksXG5cdCAgICAgICAgICB2YWx1ZTogdmFsdWUsXG5cdCAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMgPSBzdGF0ZS5sYXN0LFxuXHQgICAgICAgICAgbmV4dDogbnVsbCxcblx0ICAgICAgICAgIHJlbW92ZWQ6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICBpZiAoIXN0YXRlLmZpcnN0KSBzdGF0ZS5maXJzdCA9IGVudHJ5O1xuXHQgICAgICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMubmV4dCA9IGVudHJ5O1xuXHQgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSsrO1xuXHQgICAgICAgIGVsc2UgdGhhdC5zaXplKys7XG5cdCAgICAgICAgLy8gYWRkIHRvIGluZGV4XG5cdCAgICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHN0YXRlLmluZGV4W2luZGV4XSA9IGVudHJ5O1xuXHQgICAgICB9IHJldHVybiB0aGF0O1xuXHQgICAgfTtcblxuXHQgICAgdmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuXHQgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuXHQgICAgICAvLyBmYXN0IGNhc2Vcblx0ICAgICAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuXHQgICAgICB2YXIgZW50cnk7XG5cdCAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gc3RhdGUuaW5kZXhbaW5kZXhdO1xuXHQgICAgICAvLyBmcm96ZW4gb2JqZWN0IGNhc2Vcblx0ICAgICAgZm9yIChlbnRyeSA9IHN0YXRlLmZpcnN0OyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uZXh0KSB7XG5cdCAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KSByZXR1cm4gZW50cnk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwge1xuXHQgICAgICAvLyBgeyBNYXAsIFNldCB9LnByb3RvdHlwZS5jbGVhcigpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5jbGVhclxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuY2xlYXJcblx0ICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuXHQgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuXHQgICAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmZpcnN0O1xuXHQgICAgICAgIHdoaWxlIChlbnRyeSkge1xuXHQgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG5cdCAgICAgICAgICBpZiAoZW50cnkucHJldmlvdXMpIGVudHJ5LnByZXZpb3VzID0gZW50cnkucHJldmlvdXMubmV4dCA9IG51bGw7XG5cdCAgICAgICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHN0YXRlLmZpcnN0ID0gc3RhdGUubGFzdCA9IG51bGw7XG5cdCAgICAgICAgc3RhdGUuaW5kZXggPSBjcmVhdGUobnVsbCk7XG5cdCAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplID0gMDtcblx0ICAgICAgICBlbHNlIHRoYXQuc2l6ZSA9IDA7XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlLmRlbGV0ZShrZXkpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5kZWxldGVcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmRlbGV0ZVxuXHQgICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuXHQgICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG5cdCAgICAgICAgaWYgKGVudHJ5KSB7XG5cdCAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5leHQ7XG5cdCAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnByZXZpb3VzO1xuXHQgICAgICAgICAgZGVsZXRlIHN0YXRlLmluZGV4W2VudHJ5LmluZGV4XTtcblx0ICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgaWYgKHByZXYpIHByZXYubmV4dCA9IG5leHQ7XG5cdCAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wcmV2aW91cyA9IHByZXY7XG5cdCAgICAgICAgICBpZiAoc3RhdGUuZmlyc3QgPT09IGVudHJ5KSBzdGF0ZS5maXJzdCA9IG5leHQ7XG5cdCAgICAgICAgICBpZiAoc3RhdGUubGFzdCA9PT0gZW50cnkpIHN0YXRlLmxhc3QgPSBwcmV2O1xuXHQgICAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplLS07XG5cdCAgICAgICAgICBlbHNlIHRoYXQuc2l6ZS0tO1xuXHQgICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmZvcmVhY2hcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmZvcmVhY2hcblx0ICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgICAgICB2YXIgZW50cnk7XG5cdCAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuZmlyc3QpIHtcblx0ICAgICAgICAgIGJvdW5kRnVuY3Rpb24oZW50cnkudmFsdWUsIGVudHJ5LmtleSwgdGhpcyk7XG5cdCAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcblx0ICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSxcblx0ICAgICAgLy8gYHsgTWFwLCBTZXR9LnByb3RvdHlwZS5oYXMoa2V5KWAgbWV0aG9kc1xuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuaGFzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5oYXNcblx0ICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdCAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwgSVNfTUFQID8ge1xuXHQgICAgICAvLyBgTWFwLnByb3RvdHlwZS5nZXQoa2V5KWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5nZXRcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG5cdCAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhpcywga2V5KTtcblx0ICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudmFsdWU7XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKWAgbWV0aG9kXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5zZXRcblx0ICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiBkZWZpbmUodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9IDoge1xuXHQgICAgICAvLyBgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpYCBtZXRob2Rcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmFkZFxuXHQgICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiBkZWZpbmUodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFByb3RvdHlwZSwgJ3NpemUnLCB7XG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuc2l6ZTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gQ29uc3RydWN0b3I7XG5cdCAgfSxcblx0ICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKSB7XG5cdCAgICB2YXIgSVRFUkFUT1JfTkFNRSA9IENPTlNUUlVDVE9SX05BTUUgKyAnIEl0ZXJhdG9yJztcblx0ICAgIHZhciBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cdCAgICB2YXIgZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihJVEVSQVRPUl9OQU1FKTtcblx0ICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlLnsga2V5cywgdmFsdWVzLCBlbnRyaWVzLCBAQGl0ZXJhdG9yIH0oKWAgbWV0aG9kc1xuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmVudHJpZXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5rZXlzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUudmFsdWVzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUtQEBpdGVyYXRvclxuXHQgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmVudHJpZXNcblx0ICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5rZXlzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUudmFsdWVzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUtQEBpdGVyYXRvclxuXHQgICAgZGVmaW5lSXRlcmF0b3IoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuXHQgICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcblx0ICAgICAgICB0eXBlOiBJVEVSQVRPUl9OQU1FLFxuXHQgICAgICAgIHRhcmdldDogaXRlcmF0ZWQsXG5cdCAgICAgICAgc3RhdGU6IGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlKGl0ZXJhdGVkKSxcblx0ICAgICAgICBraW5kOiBraW5kLFxuXHQgICAgICAgIGxhc3Q6IG51bGxcblx0ICAgICAgfSk7XG5cdCAgICB9LCBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSh0aGlzKTtcblx0ICAgICAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuXHQgICAgICB2YXIgZW50cnkgPSBzdGF0ZS5sYXN0O1xuXHQgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcblx0ICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG5cdCAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG5cdCAgICAgIGlmICghc3RhdGUudGFyZ2V0IHx8ICEoc3RhdGUubGFzdCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuc3RhdGUuZmlyc3QpKSB7XG5cdCAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cblx0ICAgICAgICBzdGF0ZS50YXJnZXQgPSBudWxsO1xuXHQgICAgICAgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuXHQgICAgICBpZiAoa2luZCA9PT0gJ2tleXMnKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChlbnRyeS5rZXksIGZhbHNlKTtcblx0ICAgICAgaWYgKGtpbmQgPT09ICd2YWx1ZXMnKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChlbnRyeS52YWx1ZSwgZmFsc2UpO1xuXHQgICAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChbZW50cnkua2V5LCBlbnRyeS52YWx1ZV0sIGZhbHNlKTtcblx0ICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuXHQgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGVbQEBzcGVjaWVzXWAgYWNjZXNzb3JzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1tYXAtQEBzcGVjaWVzXG5cdCAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1zZXQtQEBzcGVjaWVzXG5cdCAgICBzZXRTcGVjaWVzKENPTlNUUlVDVE9SX05BTUUpO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIGNvbGxlY3Rpb25TdHJvbmc7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzX21hcF9jb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzX21hcF9jb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX21hcF9jb25zdHJ1Y3RvcikgcmV0dXJuIGVzX21hcF9jb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRFc19tYXBfY29uc3RydWN0b3IgPSAxO1xuXHR2YXIgY29sbGVjdGlvbiA9IHJlcXVpcmVDb2xsZWN0aW9uKCk7XG5cdHZhciBjb2xsZWN0aW9uU3Ryb25nID0gcmVxdWlyZUNvbGxlY3Rpb25TdHJvbmcoKTtcblxuXHQvLyBgTWFwYCBjb25zdHJ1Y3RvclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC1vYmplY3RzXG5cdGNvbGxlY3Rpb24oJ01hcCcsIGZ1bmN0aW9uIChpbml0KSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGluaXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG5cdH0sIGNvbGxlY3Rpb25TdHJvbmcpO1xuXHRyZXR1cm4gZXNfbWFwX2NvbnN0cnVjdG9yO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc19tYXA7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc19tYXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc19tYXApIHJldHVybiBlc19tYXA7XG5cdGhhc1JlcXVpcmVkRXNfbWFwID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyByZXBsYWNlZCB0byBtb2R1bGUgYmVsb3dcblx0cmVxdWlyZUVzX21hcF9jb25zdHJ1Y3RvcigpO1xuXHRyZXR1cm4gZXNfbWFwO1xufVxuXG52YXIgZXNfd2Vha01hcCA9IHt9O1xuXG52YXIgZXNfd2Vha01hcF9jb25zdHJ1Y3RvciA9IHt9O1xuXG52YXIgaXNBcnJheTtcbnZhciBoYXNSZXF1aXJlZElzQXJyYXk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0FycmF5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNBcnJheSkgcmV0dXJuIGlzQXJyYXk7XG5cdGhhc1JlcXVpcmVkSXNBcnJheSA9IDE7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblxuXHQvLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5cdGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcblx0ICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG5cdH07XG5cdHJldHVybiBpc0FycmF5O1xufVxuXG52YXIgaXNDb25zdHJ1Y3RvcjtcbnZhciBoYXNSZXF1aXJlZElzQ29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJc0NvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkSXNDb25zdHJ1Y3RvcikgcmV0dXJuIGlzQ29uc3RydWN0b3I7XG5cdGhhc1JlcXVpcmVkSXNDb25zdHJ1Y3RvciA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBmYWlscyA9IHJlcXVpcmVGYWlscygpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2YoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmVJbnNwZWN0U291cmNlKCk7XG5cblx0dmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cdHZhciBjb25zdHJ1Y3QgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ2NvbnN0cnVjdCcpO1xuXHR2YXIgY29uc3RydWN0b3JSZWdFeHAgPSAvXlxccyooPzpjbGFzc3xmdW5jdGlvbilcXGIvO1xuXHR2YXIgZXhlYyA9IHVuY3VycnlUaGlzKGNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMpO1xuXHR2YXIgSU5DT1JSRUNUX1RPX1NUUklORyA9ICFjb25zdHJ1Y3RvclJlZ0V4cC50ZXN0KG5vb3ApO1xuXG5cdHZhciBpc0NvbnN0cnVjdG9yTW9kZXJuID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHQgIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcblx0ICB0cnkge1xuXHQgICAgY29uc3RydWN0KG5vb3AsIFtdLCBhcmd1bWVudCk7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0fTtcblxuXHR2YXIgaXNDb25zdHJ1Y3RvckxlZ2FjeSA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0ICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdCAgc3dpdGNoIChjbGFzc29mKGFyZ3VtZW50KSkge1xuXHQgICAgY2FzZSAnQXN5bmNGdW5jdGlvbic6XG5cdCAgICBjYXNlICdHZW5lcmF0b3JGdW5jdGlvbic6XG5cdCAgICBjYXNlICdBc3luY0dlbmVyYXRvckZ1bmN0aW9uJzogcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICB0cnkge1xuXHQgICAgLy8gd2UgY2FuJ3QgY2hlY2sgLnByb3RvdHlwZSBzaW5jZSBjb25zdHJ1Y3RvcnMgcHJvZHVjZWQgYnkgLmJpbmQgaGF2ZW4ndCBpdFxuXHQgICAgLy8gYEZ1bmN0aW9uI3RvU3RyaW5nYCB0aHJvd3Mgb24gc29tZSBidWlsdC1pdCBmdW5jdGlvbiBpbiBzb21lIGxlZ2FjeSBlbmdpbmVzXG5cdCAgICAvLyAoZm9yIGV4YW1wbGUsIGBET01RdWFkYCBhbmQgc2ltaWxhciBpbiBGRjQxLSlcblx0ICAgIHJldHVybiBJTkNPUlJFQ1RfVE9fU1RSSU5HIHx8ICEhZXhlYyhjb25zdHJ1Y3RvclJlZ0V4cCwgaW5zcGVjdFNvdXJjZShhcmd1bWVudCkpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdH07XG5cblx0aXNDb25zdHJ1Y3RvckxlZ2FjeS5zaGFtID0gdHJ1ZTtcblxuXHQvLyBgSXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxuXHRpc0NvbnN0cnVjdG9yID0gIWNvbnN0cnVjdCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIGNhbGxlZDtcblx0ICByZXR1cm4gaXNDb25zdHJ1Y3Rvck1vZGVybihpc0NvbnN0cnVjdG9yTW9kZXJuLmNhbGwpXG5cdCAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihPYmplY3QpXG5cdCAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWU7IH0pXG5cdCAgICB8fCBjYWxsZWQ7XG5cdH0pID8gaXNDb25zdHJ1Y3RvckxlZ2FjeSA6IGlzQ29uc3RydWN0b3JNb2Rlcm47XG5cdHJldHVybiBpc0NvbnN0cnVjdG9yO1xufVxuXG52YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3I7XG52YXIgaGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5U3BlY2llc0NvbnN0cnVjdG9yICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQXJyYXlTcGVjaWVzQ29uc3RydWN0b3IpIHJldHVybiBhcnJheVNwZWNpZXNDb25zdHJ1Y3Rvcjtcblx0aGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IDE7XG5cdHZhciBpc0FycmF5ID0gcmVxdWlyZUlzQXJyYXkoKTtcblx0dmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlSXNDb25zdHJ1Y3RvcigpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXHR2YXIgJEFycmF5ID0gQXJyYXk7XG5cblx0Ly8gYSBwYXJ0IG9mIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG5cdCAgdmFyIEM7XG5cdCAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcblx0ICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuXHQgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcblx0ICAgIGlmIChpc0NvbnN0cnVjdG9yKEMpICYmIChDID09PSAkQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuXHQgICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcblx0ICAgICAgQyA9IENbU1BFQ0lFU107XG5cdCAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXHQgIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/ICRBcnJheSA6IEM7XG5cdH07XG5cdHJldHVybiBhcnJheVNwZWNpZXNDb25zdHJ1Y3Rvcjtcbn1cblxudmFyIGFycmF5U3BlY2llc0NyZWF0ZTtcbnZhciBoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NyZWF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZUFycmF5U3BlY2llc0NyZWF0ZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5U3BlY2llc0NyZWF0ZSkgcmV0dXJuIGFycmF5U3BlY2llc0NyZWF0ZTtcblx0aGFzUmVxdWlyZWRBcnJheVNwZWNpZXNDcmVhdGUgPSAxO1xuXHR2YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlQXJyYXlTcGVjaWVzQ29uc3RydWN0b3IoKTtcblxuXHQvLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcblx0YXJyYXlTcGVjaWVzQ3JlYXRlID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuXHQgIHJldHVybiBuZXcgKGFycmF5U3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsQXJyYXkpKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcblx0fTtcblx0cmV0dXJuIGFycmF5U3BlY2llc0NyZWF0ZTtcbn1cblxudmFyIGFycmF5SXRlcmF0aW9uO1xudmFyIGhhc1JlcXVpcmVkQXJyYXlJdGVyYXRpb247XG5cbmZ1bmN0aW9uIHJlcXVpcmVBcnJheUl0ZXJhdGlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5SXRlcmF0aW9uKSByZXR1cm4gYXJyYXlJdGVyYXRpb247XG5cdGhhc1JlcXVpcmVkQXJyYXlJdGVyYXRpb24gPSAxO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZUluZGV4ZWRPYmplY3QoKTtcblx0dmFyIHRvT2JqZWN0ID0gcmVxdWlyZVRvT2JqZWN0KCk7XG5cdHZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmVMZW5ndGhPZkFycmF5TGlrZSgpO1xuXHR2YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZUFycmF5U3BlY2llc0NyZWF0ZSgpO1xuXG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0Ly8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJSZWplY3QgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuXHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcblx0ICB2YXIgSVNfTUFQID0gVFlQRSA9PT0gMTtcblx0ICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PT0gMjtcblx0ICB2YXIgSVNfU09NRSA9IFRZUEUgPT09IDM7XG5cdCAgdmFyIElTX0VWRVJZID0gVFlQRSA9PT0gNDtcblx0ICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT09IDY7XG5cdCAgdmFyIElTX0ZJTFRFUl9SRUpFQ1QgPSBUWVBFID09PSA3O1xuXHQgIHZhciBOT19IT0xFUyA9IFRZUEUgPT09IDUgfHwgSVNfRklORF9JTkRFWDtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuXHQgICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG5cdCAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG5cdCAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCk7XG5cdCAgICB2YXIgaW5kZXggPSAwO1xuXHQgICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcblx0ICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG5cdCAgICB2YXIgdmFsdWUsIHJlc3VsdDtcblx0ICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuXHQgICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuXHQgICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG5cdCAgICAgIGlmIChUWVBFKSB7XG5cdCAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG5cdCAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcblx0ICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG5cdCAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuXHQgICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuXHQgICAgICAgICAgY2FzZSAyOiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclxuXHQgICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcblx0ICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuXHQgICAgICAgICAgY2FzZSA3OiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclJlamVjdFxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcblx0ICB9O1xuXHR9O1xuXG5cdGFycmF5SXRlcmF0aW9uID0ge1xuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuXHQgIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG5cdCAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuXHQgIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuXHQgIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuXHQgIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG5cdCAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG5cdCAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcblx0ICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcblx0ICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXJyYXktZmlsdGVyaW5nXG5cdCAgZmlsdGVyUmVqZWN0OiBjcmVhdGVNZXRob2QoNylcblx0fTtcblx0cmV0dXJuIGFycmF5SXRlcmF0aW9uO1xufVxuXG52YXIgY29sbGVjdGlvbldlYWs7XG52YXIgaGFzUmVxdWlyZWRDb2xsZWN0aW9uV2VhaztcblxuZnVuY3Rpb24gcmVxdWlyZUNvbGxlY3Rpb25XZWFrICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29sbGVjdGlvbldlYWspIHJldHVybiBjb2xsZWN0aW9uV2Vhaztcblx0aGFzUmVxdWlyZWRDb2xsZWN0aW9uV2VhayA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmVEZWZpbmVCdWlsdElucygpO1xuXHR2YXIgZ2V0V2Vha0RhdGEgPSByZXF1aXJlSW50ZXJuYWxNZXRhZGF0YSgpLmdldFdlYWtEYXRhO1xuXHR2YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmVBbkluc3RhbmNlKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIEFycmF5SXRlcmF0aW9uTW9kdWxlID0gcmVxdWlyZUFycmF5SXRlcmF0aW9uKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXG5cdHZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cdHZhciBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3I7XG5cdHZhciBmaW5kID0gQXJyYXlJdGVyYXRpb25Nb2R1bGUuZmluZDtcblx0dmFyIGZpbmRJbmRleCA9IEFycmF5SXRlcmF0aW9uTW9kdWxlLmZpbmRJbmRleDtcblx0dmFyIHNwbGljZSA9IHVuY3VycnlUaGlzKFtdLnNwbGljZSk7XG5cdHZhciBpZCA9IDA7XG5cblx0Ly8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG5cdHZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdCAgcmV0dXJuIHN0YXRlLmZyb3plbiB8fCAoc3RhdGUuZnJvemVuID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUoKSk7XG5cdH07XG5cblx0dmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgdGhpcy5lbnRyaWVzID0gW107XG5cdH07XG5cblx0dmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uIChzdG9yZSwga2V5KSB7XG5cdCAgcmV0dXJuIGZpbmQoc3RvcmUuZW50cmllcywgZnVuY3Rpb24gKGl0KSB7XG5cdCAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcblx0ICB9KTtcblx0fTtcblxuXHRVbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcblx0ICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnlbMV07XG5cdCAgfSxcblx0ICBoYXM6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuXHQgIH0sXG5cdCAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHQgICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG5cdCAgICBpZiAoZW50cnkpIGVudHJ5WzFdID0gdmFsdWU7XG5cdCAgICBlbHNlIHRoaXMuZW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdCAgfSxcblx0ICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgdmFyIGluZGV4ID0gZmluZEluZGV4KHRoaXMuZW50cmllcywgZnVuY3Rpb24gKGl0KSB7XG5cdCAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuXHQgICAgfSk7XG5cdCAgICBpZiAofmluZGV4KSBzcGxpY2UodGhpcy5lbnRyaWVzLCBpbmRleCwgMSk7XG5cdCAgICByZXR1cm4gISF+aW5kZXg7XG5cdCAgfVxuXHR9O1xuXG5cdGNvbGxlY3Rpb25XZWFrID0ge1xuXHQgIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUikge1xuXHQgICAgdmFyIENvbnN0cnVjdG9yID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcblx0ICAgICAgYW5JbnN0YW5jZSh0aGF0LCBQcm90b3R5cGUpO1xuXHQgICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHtcblx0ICAgICAgICB0eXBlOiBDT05TVFJVQ1RPUl9OQU1FLFxuXHQgICAgICAgIGlkOiBpZCsrLFxuXHQgICAgICAgIGZyb3plbjogbnVsbFxuXHQgICAgICB9KTtcblx0ICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB7IHRoYXQ6IHRoYXQsIEFTX0VOVFJJRVM6IElTX01BUCB9KTtcblx0ICAgIH0pO1xuXG5cdCAgICB2YXIgUHJvdG90eXBlID0gQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5cdCAgICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cblx0ICAgIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuXHQgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuXHQgICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGFuT2JqZWN0KGtleSksIHRydWUpO1xuXHQgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgdW5jYXVnaHRGcm96ZW5TdG9yZShzdGF0ZSkuc2V0KGtleSwgdmFsdWUpO1xuXHQgICAgICBlbHNlIGRhdGFbc3RhdGUuaWRdID0gdmFsdWU7XG5cdCAgICAgIHJldHVybiB0aGF0O1xuXHQgICAgfTtcblxuXHQgICAgZGVmaW5lQnVpbHRJbnMoUHJvdG90eXBlLCB7XG5cdCAgICAgIC8vIGB7IFdlYWtNYXAsIFdlYWtTZXQgfS5wcm90b3R5cGUuZGVsZXRlKGtleSlgIG1ldGhvZHNcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLnByb3RvdHlwZS5kZWxldGVcblx0ICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrc2V0LnByb3RvdHlwZS5kZWxldGVcblx0ICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoa2V5KTtcblx0ICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUoc3RhdGUpWydkZWxldGUnXShrZXkpO1xuXHQgICAgICAgIHJldHVybiBkYXRhICYmIGhhc093bihkYXRhLCBzdGF0ZS5pZCkgJiYgZGVsZXRlIGRhdGFbc3RhdGUuaWRdO1xuXHQgICAgICB9LFxuXHQgICAgICAvLyBgeyBXZWFrTWFwLCBXZWFrU2V0IH0ucHJvdG90eXBlLmhhcyhrZXkpYCBtZXRob2RzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuaGFzXG5cdCAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha3NldC5wcm90b3R5cGUuaGFzXG5cdCAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrRGF0YShrZXkpO1xuXHQgICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZShzdGF0ZSkuaGFzKGtleSk7XG5cdCAgICAgICAgcmV0dXJuIGRhdGEgJiYgaGFzT3duKGRhdGEsIHN0YXRlLmlkKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwgSVNfTUFQID8ge1xuXHQgICAgICAvLyBgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAucHJvdG90eXBlLmdldFxuXHQgICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmIChpc09iamVjdChrZXkpKSB7XG5cdCAgICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGtleSk7XG5cdCAgICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUoc3RhdGUpLmdldChrZXkpO1xuXHQgICAgICAgICAgaWYgKGRhdGEpIHJldHVybiBkYXRhW3N0YXRlLmlkXTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sXG5cdCAgICAgIC8vIGBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAucHJvdG90eXBlLnNldFxuXHQgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCBrZXksIHZhbHVlKTtcblx0ICAgICAgfVxuXHQgICAgfSA6IHtcblx0ICAgICAgLy8gYFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlgIG1ldGhvZFxuXHQgICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWtzZXQucHJvdG90eXBlLmFkZFxuXHQgICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuXHQgICAgICAgIHJldHVybiBkZWZpbmUodGhpcywgdmFsdWUsIHRydWUpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIGNvbGxlY3Rpb25XZWFrO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc193ZWFrTWFwX2NvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfd2Vha01hcF9jb25zdHJ1Y3RvciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX3dlYWtNYXBfY29uc3RydWN0b3IpIHJldHVybiBlc193ZWFrTWFwX2NvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZEVzX3dlYWtNYXBfY29uc3RydWN0b3IgPSAxO1xuXHR2YXIgRlJFRVpJTkcgPSByZXF1aXJlRnJlZXppbmcoKTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlRGVmaW5lQnVpbHRJbnMoKTtcblx0dmFyIEludGVybmFsTWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxNZXRhZGF0YSgpO1xuXHR2YXIgY29sbGVjdGlvbiA9IHJlcXVpcmVDb2xsZWN0aW9uKCk7XG5cdHZhciBjb2xsZWN0aW9uV2VhayA9IHJlcXVpcmVDb2xsZWN0aW9uV2VhaygpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gcmVxdWlyZUludGVybmFsU3RhdGUoKS5lbmZvcmNlO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblx0dmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmVXZWFrTWFwQmFzaWNEZXRlY3Rpb24oKTtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxuXHR2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlIC0tIHNhZmVcblx0dmFyIGlzRXh0ZW5zaWJsZSA9ICRPYmplY3QuaXNFeHRlbnNpYmxlO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZnJvemVuIC0tIHNhZmVcblx0dmFyIGlzRnJvemVuID0gJE9iamVjdC5pc0Zyb3plbjtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc3NlYWxlZCAtLSBzYWZlXG5cdHZhciBpc1NlYWxlZCA9ICRPYmplY3QuaXNTZWFsZWQ7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZnJlZXplIC0tIHNhZmVcblx0dmFyIGZyZWV6ZSA9ICRPYmplY3QuZnJlZXplO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNlYWwgLS0gc2FmZVxuXHR2YXIgc2VhbCA9ICRPYmplY3Quc2VhbDtcblxuXHR2YXIgSVNfSUUxMSA9ICFnbG9iYWxUaGlzLkFjdGl2ZVhPYmplY3QgJiYgJ0FjdGl2ZVhPYmplY3QnIGluIGdsb2JhbFRoaXM7XG5cdHZhciBJbnRlcm5hbFdlYWtNYXA7XG5cblx0dmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAoaW5pdCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCkge1xuXHQgICAgcmV0dXJuIGluaXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG5cdCAgfTtcblx0fTtcblxuXHQvLyBgV2Vha01hcGAgY29uc3RydWN0b3Jcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLWNvbnN0cnVjdG9yXG5cdHZhciAkV2Vha01hcCA9IGNvbGxlY3Rpb24oJ1dlYWtNYXAnLCB3cmFwcGVyLCBjb2xsZWN0aW9uV2Vhayk7XG5cdHZhciBXZWFrTWFwUHJvdG90eXBlID0gJFdlYWtNYXAucHJvdG90eXBlO1xuXHR2YXIgbmF0aXZlU2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5zZXQpO1xuXG5cdC8vIENoYWtyYSBFZGdlIGJ1ZzogYWRkaW5nIGZyb3plbiBhcnJheXMgdG8gV2Vha01hcCB1bmZyZWV6ZSB0aGVtXG5cdHZhciBoYXNNU0VkZ2VGcmVlemluZ0J1ZyA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gRlJFRVpJTkcgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIGZyb3plbkFycmF5ID0gZnJlZXplKFtdKTtcblx0ICAgIG5hdGl2ZVNldChuZXcgJFdlYWtNYXAoKSwgZnJvemVuQXJyYXksIDEpO1xuXHQgICAgcmV0dXJuICFpc0Zyb3plbihmcm96ZW5BcnJheSk7XG5cdCAgfSk7XG5cdH07XG5cblx0Ly8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuXHQvLyBXZSBjYW4ndCB1c2UgZmVhdHVyZSBkZXRlY3Rpb24gYmVjYXVzZSBpdCBjcmFzaCBzb21lIG9sZCBJRSBidWlsZHNcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ4NVxuXHRpZiAoTkFUSVZFX1dFQUtfTUFQKSBpZiAoSVNfSUUxMSkge1xuXHQgIEludGVybmFsV2Vha01hcCA9IGNvbGxlY3Rpb25XZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsICdXZWFrTWFwJywgdHJ1ZSk7XG5cdCAgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZS5lbmFibGUoKTtcblx0ICB2YXIgbmF0aXZlRGVsZXRlID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZVsnZGVsZXRlJ10pO1xuXHQgIHZhciBuYXRpdmVIYXMgPSB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmhhcyk7XG5cdCAgdmFyIG5hdGl2ZUdldCA9IHVuY3VycnlUaGlzKFdlYWtNYXBQcm90b3R5cGUuZ2V0KTtcblx0ICBkZWZpbmVCdWlsdElucyhXZWFrTWFwUHJvdG90eXBlLCB7XG5cdCAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgICBpZiAoaXNPYmplY3Qoa2V5KSAmJiAhaXNFeHRlbnNpYmxlKGtleSkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuXHQgICAgICAgIHJldHVybiBuYXRpdmVEZWxldGUodGhpcywga2V5KSB8fCBzdGF0ZS5mcm96ZW5bJ2RlbGV0ZSddKGtleSk7XG5cdCAgICAgIH0gcmV0dXJuIG5hdGl2ZURlbGV0ZSh0aGlzLCBrZXkpO1xuXHQgICAgfSxcblx0ICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuXHQgICAgICBpZiAoaXNPYmplY3Qoa2V5KSAmJiAhaXNFeHRlbnNpYmxlKGtleSkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuXHQgICAgICAgIHJldHVybiBuYXRpdmVIYXModGhpcywga2V5KSB8fCBzdGF0ZS5mcm96ZW4uaGFzKGtleSk7XG5cdCAgICAgIH0gcmV0dXJuIG5hdGl2ZUhhcyh0aGlzLCBrZXkpO1xuXHQgICAgfSxcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuXHQgICAgICBpZiAoaXNPYmplY3Qoa2V5KSAmJiAhaXNFeHRlbnNpYmxlKGtleSkpIHtcblx0ICAgICAgICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuXHQgICAgICAgIHJldHVybiBuYXRpdmVIYXModGhpcywga2V5KSA/IG5hdGl2ZUdldCh0aGlzLCBrZXkpIDogc3RhdGUuZnJvemVuLmdldChrZXkpO1xuXHQgICAgICB9IHJldHVybiBuYXRpdmVHZXQodGhpcywga2V5KTtcblx0ICAgIH0sXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdCAgICAgIGlmIChpc09iamVjdChrZXkpICYmICFpc0V4dGVuc2libGUoa2V5KSkge1xuXHQgICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuXHQgICAgICAgIGlmICghc3RhdGUuZnJvemVuKSBzdGF0ZS5mcm96ZW4gPSBuZXcgSW50ZXJuYWxXZWFrTWFwKCk7XG5cdCAgICAgICAgbmF0aXZlSGFzKHRoaXMsIGtleSkgPyBuYXRpdmVTZXQodGhpcywga2V5LCB2YWx1ZSkgOiBzdGF0ZS5mcm96ZW4uc2V0KGtleSwgdmFsdWUpO1xuXHQgICAgICB9IGVsc2UgbmF0aXZlU2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuXHQgICAgICByZXR1cm4gdGhpcztcblx0ICAgIH1cblx0ICB9KTtcblx0Ly8gQ2hha3JhIEVkZ2UgZnJvemVuIGtleXMgZml4XG5cdH0gZWxzZSBpZiAoaGFzTVNFZGdlRnJlZXppbmdCdWcoKSkge1xuXHQgIGRlZmluZUJ1aWx0SW5zKFdlYWtNYXBQcm90b3R5cGUsIHtcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcblx0ICAgICAgdmFyIGFycmF5SW50ZWdyaXR5TGV2ZWw7XG5cdCAgICAgIGlmIChpc0FycmF5KGtleSkpIHtcblx0ICAgICAgICBpZiAoaXNGcm96ZW4oa2V5KSkgYXJyYXlJbnRlZ3JpdHlMZXZlbCA9IGZyZWV6ZTtcblx0ICAgICAgICBlbHNlIGlmIChpc1NlYWxlZChrZXkpKSBhcnJheUludGVncml0eUxldmVsID0gc2VhbDtcblx0ICAgICAgfVxuXHQgICAgICBuYXRpdmVTZXQodGhpcywga2V5LCB2YWx1ZSk7XG5cdCAgICAgIGlmIChhcnJheUludGVncml0eUxldmVsKSBhcnJheUludGVncml0eUxldmVsKGtleSk7XG5cdCAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9XG5cdHJldHVybiBlc193ZWFrTWFwX2NvbnN0cnVjdG9yO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc193ZWFrTWFwO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNfd2Vha01hcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX3dlYWtNYXApIHJldHVybiBlc193ZWFrTWFwO1xuXHRoYXNSZXF1aXJlZEVzX3dlYWtNYXAgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHJlcGxhY2VkIHRvIG1vZHVsZSBiZWxvd1xuXHRyZXF1aXJlRXNfd2Vha01hcF9jb25zdHJ1Y3RvcigpO1xuXHRyZXR1cm4gZXNfd2Vha01hcDtcbn1cblxudmFyIGNvbXBvc2l0ZUtleTtcbnZhciBoYXNSZXF1aXJlZENvbXBvc2l0ZUtleTtcblxuZnVuY3Rpb24gcmVxdWlyZUNvbXBvc2l0ZUtleSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbXBvc2l0ZUtleSkgcmV0dXJuIGNvbXBvc2l0ZUtleTtcblx0aGFzUmVxdWlyZWRDb21wb3NpdGVLZXkgPSAxO1xuXHQvLyBUT0RPOiBpbiBjb3JlLWpzQDQsIG1vdmUgL21vZHVsZXMvIGRlcGVuZGVuY2llcyB0byBwdWJsaWMgZW50cmllcyBmb3IgYmV0dGVyIG9wdGltaXphdGlvbiBieSB0b29scyBsaWtlIGBwcmVzZXQtZW52YFxuXHRyZXF1aXJlRXNfbWFwKCk7XG5cdHJlcXVpcmVFc193ZWFrTWFwKCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGNyZWF0ZSA9IHJlcXVpcmVPYmplY3RDcmVhdGUoKTtcblx0dmFyIGlzT2JqZWN0ID0gcmVxdWlyZUlzT2JqZWN0KCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXHR2YXIgTWFwID0gZ2V0QnVpbHRJbignTWFwJyk7XG5cdHZhciBXZWFrTWFwID0gZ2V0QnVpbHRJbignV2Vha01hcCcpO1xuXG5cdHZhciBOb2RlID0gZnVuY3Rpb24gKCkge1xuXHQgIC8vIGtleXNcblx0ICB0aGlzLm9iamVjdCA9IG51bGw7XG5cdCAgdGhpcy5zeW1ib2wgPSBudWxsO1xuXHQgIC8vIGNoaWxkIG5vZGVzXG5cdCAgdGhpcy5wcmltaXRpdmVzID0gbnVsbDtcblx0ICB0aGlzLm9iamVjdHNCeUluZGV4ID0gY3JlYXRlKG51bGwpO1xuXHR9O1xuXG5cdE5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGluaXRpYWxpemVyKSB7XG5cdCAgcmV0dXJuIHRoaXNba2V5XSB8fCAodGhpc1trZXldID0gaW5pdGlhbGl6ZXIoKSk7XG5cdH07XG5cblx0Tm9kZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChpLCBpdCwgSVNfT0JKRUNUKSB7XG5cdCAgdmFyIHN0b3JlID0gSVNfT0JKRUNUXG5cdCAgICA/IHRoaXMub2JqZWN0c0J5SW5kZXhbaV0gfHwgKHRoaXMub2JqZWN0c0J5SW5kZXhbaV0gPSBuZXcgV2Vha01hcCgpKVxuXHQgICAgOiB0aGlzLnByaW1pdGl2ZXMgfHwgKHRoaXMucHJpbWl0aXZlcyA9IG5ldyBNYXAoKSk7XG5cdCAgdmFyIGVudHJ5ID0gc3RvcmUuZ2V0KGl0KTtcblx0ICBpZiAoIWVudHJ5KSBzdG9yZS5zZXQoaXQsIGVudHJ5ID0gbmV3IE5vZGUoKSk7XG5cdCAgcmV0dXJuIGVudHJ5O1xuXHR9O1xuXG5cdHZhciByb290ID0gbmV3IE5vZGUoKTtcblxuXHRjb21wb3NpdGVLZXkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIGFjdGl2ZSA9IHJvb3Q7XG5cdCAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgdmFyIGksIGl0O1xuXHQgIC8vIGZvciBwcmV2ZW50IGxlYWtpbmcsIHN0YXJ0IGZyb20gb2JqZWN0c1xuXHQgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKGlzT2JqZWN0KGl0ID0gYXJndW1lbnRzW2ldKSkgYWN0aXZlID0gYWN0aXZlLm5leHQoaSwgaXQsIHRydWUpO1xuXHQgIH1cblx0ICBpZiAodGhpcyA9PT0gJE9iamVjdCAmJiBhY3RpdmUgPT09IHJvb3QpIHRocm93IG5ldyAkVHlwZUVycm9yKCdDb21wb3NpdGUga2V5cyBtdXN0IGNvbnRhaW4gYSBub24tcHJpbWl0aXZlIGNvbXBvbmVudCcpO1xuXHQgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgaWYgKCFpc09iamVjdChpdCA9IGFyZ3VtZW50c1tpXSkpIGFjdGl2ZSA9IGFjdGl2ZS5uZXh0KGksIGl0LCBmYWxzZSk7XG5cdCAgfSByZXR1cm4gYWN0aXZlO1xuXHR9O1xuXHRyZXR1cm4gY29tcG9zaXRlS2V5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfY29tcG9zaXRlS2V5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X2NvbXBvc2l0ZUtleSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVLZXkpIHJldHVybiBlc25leHRfY29tcG9zaXRlS2V5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVLZXkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhcHBseSA9IHJlcXVpcmVGdW5jdGlvbkFwcGx5KCk7XG5cdHZhciBnZXRDb21wb3NpdGVLZXlOb2RlID0gcmVxdWlyZUNvbXBvc2l0ZUtleSgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBjcmVhdGUgPSByZXF1aXJlT2JqZWN0Q3JlYXRlKCk7XG5cblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cblx0dmFyIGluaXRpYWxpemVyID0gZnVuY3Rpb24gKCkge1xuXHQgIHZhciBmcmVlemUgPSBnZXRCdWlsdEluKCdPYmplY3QnLCAnZnJlZXplJyk7XG5cdCAgcmV0dXJuIGZyZWV6ZSA/IGZyZWV6ZShjcmVhdGUobnVsbCkpIDogY3JlYXRlKG51bGwpO1xuXHR9O1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXJpY2hlci1rZXlzL3RyZWUvbWFzdGVyL2NvbXBvc2l0ZUtleVxuXHQkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGNvbXBvc2l0ZUtleTogZnVuY3Rpb24gY29tcG9zaXRlS2V5KCkge1xuXHQgICAgcmV0dXJuIGFwcGx5KGdldENvbXBvc2l0ZUtleU5vZGUsICRPYmplY3QsIGFyZ3VtZW50cykuZ2V0KCdvYmplY3QnLCBpbml0aWFsaXplcik7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9jb21wb3NpdGVLZXk7XG59XG5cbnJlcXVpcmVFc25leHRfY29tcG9zaXRlS2V5KCk7XG5cbnZhciBlc25leHRfY29tcG9zaXRlU3ltYm9sID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9jb21wb3NpdGVTeW1ib2w7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfY29tcG9zaXRlU3ltYm9sICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZVN5bWJvbCkgcmV0dXJuIGVzbmV4dF9jb21wb3NpdGVTeW1ib2w7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X2NvbXBvc2l0ZVN5bWJvbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdldENvbXBvc2l0ZUtleU5vZGUgPSByZXF1aXJlQ29tcG9zaXRlS2V5KCk7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGFwcGx5ID0gcmVxdWlyZUZ1bmN0aW9uQXBwbHkoKTtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1yaWNoZXIta2V5cy90cmVlL21hc3Rlci9jb21wb3NpdGVLZXlcblx0JCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBjb21wb3NpdGVTeW1ib2w6IGZ1bmN0aW9uIGNvbXBvc2l0ZVN5bWJvbCgpIHtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT0gJ3N0cmluZycpIHJldHVybiBnZXRCdWlsdEluKCdTeW1ib2wnKVsnZm9yJ10oYXJndW1lbnRzWzBdKTtcblx0ICAgIHJldHVybiBhcHBseShnZXRDb21wb3NpdGVLZXlOb2RlLCBudWxsLCBhcmd1bWVudHMpLmdldCgnc3ltYm9sJywgZ2V0QnVpbHRJbignU3ltYm9sJykpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfY29tcG9zaXRlU3ltYm9sO1xufVxuXG5yZXF1aXJlRXNuZXh0X2NvbXBvc2l0ZVN5bWJvbCgpO1xuXG52YXIgZXNuZXh0X21hcF9kZWxldGVBbGwgPSB7fTtcblxudmFyIG1hcEhlbHBlcnM7XG52YXIgaGFzUmVxdWlyZWRNYXBIZWxwZXJzO1xuXG5mdW5jdGlvbiByZXF1aXJlTWFwSGVscGVycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE1hcEhlbHBlcnMpIHJldHVybiBtYXBIZWxwZXJzO1xuXHRoYXNSZXF1aXJlZE1hcEhlbHBlcnMgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXAgLS0gc2FmZVxuXHR2YXIgTWFwUHJvdG90eXBlID0gTWFwLnByb3RvdHlwZTtcblxuXHRtYXBIZWxwZXJzID0ge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXAgLS0gc2FmZVxuXHQgIE1hcDogTWFwLFxuXHQgIHNldDogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLnNldCksXG5cdCAgZ2V0OiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuZ2V0KSxcblx0ICBoYXM6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5oYXMpLFxuXHQgIHJlbW92ZTogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlWydkZWxldGUnXSksXG5cdCAgcHJvdG86IE1hcFByb3RvdHlwZVxuXHR9O1xuXHRyZXR1cm4gbWFwSGVscGVycztcbn1cblxudmFyIGFNYXA7XG52YXIgaGFzUmVxdWlyZWRBTWFwO1xuXG5mdW5jdGlvbiByZXF1aXJlQU1hcCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFNYXApIHJldHVybiBhTWFwO1xuXHRoYXNSZXF1aXJlZEFNYXAgPSAxO1xuXHR2YXIgaGFzID0gcmVxdWlyZU1hcEhlbHBlcnMoKS5oYXM7XG5cblx0Ly8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tNYXBEYXRhXV0pXG5cdGFNYXAgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBoYXMoaXQpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblx0cmV0dXJuIGFNYXA7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZGVsZXRlQWxsO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9kZWxldGVBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2RlbGV0ZUFsbCkgcmV0dXJuIGVzbmV4dF9tYXBfZGVsZXRlQWxsO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZGVsZXRlQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciByZW1vdmUgPSByZXF1aXJlTWFwSGVscGVycygpLnJlbW92ZTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5kZWxldGVBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRlbGV0ZUFsbDogZnVuY3Rpb24gZGVsZXRlQWxsKC8qIC4uLmVsZW1lbnRzICovKSB7XG5cdCAgICB2YXIgY29sbGVjdGlvbiA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYWxsRGVsZXRlZCA9IHRydWU7XG5cdCAgICB2YXIgd2FzRGVsZXRlZDtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgd2FzRGVsZXRlZCA9IHJlbW92ZShjb2xsZWN0aW9uLCBhcmd1bWVudHNba10pO1xuXHQgICAgICBhbGxEZWxldGVkID0gYWxsRGVsZXRlZCAmJiB3YXNEZWxldGVkO1xuXHQgICAgfSByZXR1cm4gISFhbGxEZWxldGVkO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2RlbGV0ZUFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZGVsZXRlQWxsKCk7XG5cbnZhciBlc25leHRfbWFwX2V2ZXJ5ID0ge307XG5cbnZhciBpdGVyYXRlU2ltcGxlO1xudmFyIGhhc1JlcXVpcmVkSXRlcmF0ZVNpbXBsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUl0ZXJhdGVTaW1wbGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJdGVyYXRlU2ltcGxlKSByZXR1cm4gaXRlcmF0ZVNpbXBsZTtcblx0aGFzUmVxdWlyZWRJdGVyYXRlU2ltcGxlID0gMTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cblx0aXRlcmF0ZVNpbXBsZSA9IGZ1bmN0aW9uIChyZWNvcmQsIGZuLCBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCkge1xuXHQgIHZhciBpdGVyYXRvciA9IElURVJBVE9SX0lOU1RFQURfT0ZfUkVDT1JEID8gcmVjb3JkIDogcmVjb3JkLml0ZXJhdG9yO1xuXHQgIHZhciBuZXh0ID0gcmVjb3JkLm5leHQ7XG5cdCAgdmFyIHN0ZXAsIHJlc3VsdDtcblx0ICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcblx0ICAgIHJlc3VsdCA9IGZuKHN0ZXAudmFsdWUpO1xuXHQgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzdWx0O1xuXHQgIH1cblx0fTtcblx0cmV0dXJuIGl0ZXJhdGVTaW1wbGU7XG59XG5cbnZhciBtYXBJdGVyYXRlO1xudmFyIGhhc1JlcXVpcmVkTWFwSXRlcmF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZU1hcEl0ZXJhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXBJdGVyYXRlKSByZXR1cm4gbWFwSXRlcmF0ZTtcblx0aGFzUmVxdWlyZWRNYXBJdGVyYXRlID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cblx0dmFyIE1hcCA9IE1hcEhlbHBlcnMuTWFwO1xuXHR2YXIgTWFwUHJvdG90eXBlID0gTWFwSGVscGVycy5wcm90bztcblx0dmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuZm9yRWFjaCk7XG5cdHZhciBlbnRyaWVzID0gdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmVudHJpZXMpO1xuXHR2YXIgbmV4dCA9IGVudHJpZXMobmV3IE1hcCgpKS5uZXh0O1xuXG5cdG1hcEl0ZXJhdGUgPSBmdW5jdGlvbiAobWFwLCBmbiwgaW50ZXJydXB0aWJsZSkge1xuXHQgIHJldHVybiBpbnRlcnJ1cHRpYmxlID8gaXRlcmF0ZVNpbXBsZSh7IGl0ZXJhdG9yOiBlbnRyaWVzKG1hcCksIG5leHQ6IG5leHQgfSwgZnVuY3Rpb24gKGVudHJ5KSB7XG5cdCAgICByZXR1cm4gZm4oZW50cnlbMV0sIGVudHJ5WzBdKTtcblx0ICB9KSA6IGZvckVhY2gobWFwLCBmbik7XG5cdH07XG5cdHJldHVybiBtYXBJdGVyYXRlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2V2ZXJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9ldmVyeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZXZlcnkpIHJldHVybiBlc25leHRfbWFwX2V2ZXJ5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZXZlcnkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIG1hcCA9IGFNYXAodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgcmV0dXJuIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAoIWJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSkgcmV0dXJuIGZhbHNlO1xuXHQgICAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2V2ZXJ5O1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9ldmVyeSgpO1xuXG52YXIgZXNuZXh0X21hcF9maWx0ZXIgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maWx0ZXI7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2ZpbHRlciAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmlsdGVyKSByZXR1cm4gZXNuZXh0X21hcF9maWx0ZXI7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maWx0ZXIgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgbmV3TWFwID0gbmV3IE1hcCgpO1xuXHQgICAgaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpIHNldChuZXdNYXAsIGtleSwgdmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3TWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2ZpbHRlcjtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZmlsdGVyKCk7XG5cbnZhciBlc25leHRfbWFwX2ZpbmQgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9maW5kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kKSByZXR1cm4gZXNuZXh0X21hcF9maW5kO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5maW5kYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgcmVzdWx0ID0gaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuXHQgICAgfSwgdHJ1ZSk7XG5cdCAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC52YWx1ZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9maW5kO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9maW5kKCk7XG5cbnZhciBlc25leHRfbWFwX2ZpbmRLZXkgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kS2V5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9maW5kS2V5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9maW5kS2V5KSByZXR1cm4gZXNuZXh0X21hcF9maW5kS2V5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZmluZEtleSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5maW5kS2V5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmaW5kS2V5OiBmdW5jdGlvbiBmaW5kS2V5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgcmVzdWx0ID0gaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCBrZXksIG1hcCkpIHJldHVybiB7IGtleToga2V5IH07XG5cdCAgICB9LCB0cnVlKTtcblx0ICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LmtleTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9maW5kS2V5O1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9maW5kS2V5KCk7XG5cbnZhciBlc25leHRfbWFwX2Zyb20gPSB7fTtcblxudmFyIGNvbGxlY3Rpb25Gcm9tO1xudmFyIGhhc1JlcXVpcmVkQ29sbGVjdGlvbkZyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVDb2xsZWN0aW9uRnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENvbGxlY3Rpb25Gcm9tKSByZXR1cm4gY29sbGVjdGlvbkZyb207XG5cdGhhc1JlcXVpcmVkQ29sbGVjdGlvbkZyb20gPSAxO1xuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVJdGVyYXRlKCk7XG5cblx0Y29sbGVjdGlvbkZyb20gPSBmdW5jdGlvbiAoQywgYWRkZXIsIEVOVFJZKSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBPID0gdG9PYmplY3Qoc291cmNlKTtcblx0ICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgdmFyIG1hcEZuID0gbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblx0ICAgIHZhciBtYXBwaW5nID0gbWFwRm4gIT09IHVuZGVmaW5lZDtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gbWFwcGluZyA/IGJpbmQobWFwRm4sIGxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpIDogdW5kZWZpbmVkO1xuXHQgICAgdmFyIHJlc3VsdCA9IG5ldyBDKCk7XG5cdCAgICB2YXIgbiA9IDA7XG5cdCAgICBpdGVyYXRlKE8sIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuXHQgICAgICB2YXIgZW50cnkgPSBtYXBwaW5nID8gYm91bmRGdW5jdGlvbihuZXh0SXRlbSwgbisrKSA6IG5leHRJdGVtO1xuXHQgICAgICBpZiAoRU5UUlkpIGFkZGVyKHJlc3VsdCwgYW5PYmplY3QoZW50cnkpWzBdLCBlbnRyeVsxXSk7XG5cdCAgICAgIGVsc2UgYWRkZXIocmVzdWx0LCBlbnRyeSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfTtcblx0fTtcblx0cmV0dXJuIGNvbGxlY3Rpb25Gcm9tO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2Zyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX2Zyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2Zyb20pIHJldHVybiBlc25leHRfbWFwX2Zyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9mcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uRnJvbSA9IHJlcXVpcmVDb2xsZWN0aW9uRnJvbSgpO1xuXG5cdC8vIGBNYXAuZnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb206IGNyZWF0ZUNvbGxlY3Rpb25Gcm9tKE1hcEhlbHBlcnMuTWFwLCBNYXBIZWxwZXJzLnNldCwgdHJ1ZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2Zyb207XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2Zyb20oKTtcblxudmFyIGVzbmV4dF9tYXBfZ3JvdXBCeSA9IHt9O1xuXG52YXIgZXNfbWFwX2dyb3VwQnkgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNfbWFwX2dyb3VwQnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc19tYXBfZ3JvdXBCeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX21hcF9ncm91cEJ5KSByZXR1cm4gZXNfbWFwX2dyb3VwQnk7XG5cdGhhc1JlcXVpcmVkRXNfbWFwX2dyb3VwQnkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBJU19QVVJFID0gcmVxdWlyZUlzUHVyZSgpO1xuXHR2YXIgZmFpbHMgPSByZXF1aXJlRmFpbHMoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBoYXMgPSBNYXBIZWxwZXJzLmhhcztcblx0dmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xuXHR2YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0dmFyIERPRVNfTk9UX1dPUktfV0lUSF9QUklNSVRJVkVTID0gSVNfUFVSRSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgcmV0dXJuIE1hcC5ncm91cEJ5KCdhYicsIGZ1bmN0aW9uIChpdCkge1xuXHQgICAgcmV0dXJuIGl0O1xuXHQgIH0pLmdldCgnYScpLmxlbmd0aCAhPT0gMTtcblx0fSk7XG5cblx0Ly8gYE1hcC5ncm91cEJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAuZ3JvdXBieVxuXHQkKHsgdGFyZ2V0OiAnTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IERPRVNfTk9UX1dPUktfV0lUSF9QUklNSVRJVkVTIH0sIHtcblx0ICBncm91cEJ5OiBmdW5jdGlvbiBncm91cEJ5KGl0ZW1zLCBjYWxsYmFja2ZuKSB7XG5cdCAgICByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0ZW1zKTtcblx0ICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcblx0ICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG5cdCAgICB2YXIgayA9IDA7XG5cdCAgICBpdGVyYXRlKGl0ZW1zLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgdmFyIGtleSA9IGNhbGxiYWNrZm4odmFsdWUsIGsrKyk7XG5cdCAgICAgIGlmICghaGFzKG1hcCwga2V5KSkgc2V0KG1hcCwga2V5LCBbdmFsdWVdKTtcblx0ICAgICAgZWxzZSBwdXNoKGdldChtYXAsIGtleSksIHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG1hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNfbWFwX2dyb3VwQnk7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZ3JvdXBCeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfZ3JvdXBCeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfZ3JvdXBCeSkgcmV0dXJuIGVzbmV4dF9tYXBfZ3JvdXBCeTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2dyb3VwQnkgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHRyZXF1aXJlRXNfbWFwX2dyb3VwQnkoKTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfZ3JvdXBCeTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfZ3JvdXBCeSgpO1xuXG52YXIgZXNuZXh0X21hcF9pbmNsdWRlcyA9IHt9O1xuXG52YXIgc2FtZVZhbHVlWmVybztcbnZhciBoYXNSZXF1aXJlZFNhbWVWYWx1ZVplcm87XG5cbmZ1bmN0aW9uIHJlcXVpcmVTYW1lVmFsdWVaZXJvICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2FtZVZhbHVlWmVybykgcmV0dXJuIHNhbWVWYWx1ZVplcm87XG5cdGhhc1JlcXVpcmVkU2FtZVZhbHVlWmVybyA9IDE7XG5cdC8vIGBTYW1lVmFsdWVaZXJvYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWV6ZXJvXG5cdHNhbWVWYWx1ZVplcm8gPSBmdW5jdGlvbiAoeCwgeSkge1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgcmV0dXJuIHggPT09IHkgfHwgeCAhPT0geCAmJiB5ICE9PSB5O1xuXHR9O1xuXHRyZXR1cm4gc2FtZVZhbHVlWmVybztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9pbmNsdWRlcztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfaW5jbHVkZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2luY2x1ZGVzKSByZXR1cm4gZXNuZXh0X21hcF9pbmNsdWRlcztcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2luY2x1ZGVzID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgc2FtZVZhbHVlWmVybyA9IHJlcXVpcmVTYW1lVmFsdWVaZXJvKCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCkge1xuXHQgICAgcmV0dXJuIGl0ZXJhdGUoYU1hcCh0aGlzKSwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmIChzYW1lVmFsdWVaZXJvKHZhbHVlLCBzZWFyY2hFbGVtZW50KSkgcmV0dXJuIHRydWU7XG5cdCAgICB9LCB0cnVlKSA9PT0gdHJ1ZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9pbmNsdWRlcztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfaW5jbHVkZXMoKTtcblxudmFyIGVzbmV4dF9tYXBfa2V5QnkgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9rZXlCeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfa2V5QnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX2tleUJ5KSByZXR1cm4gZXNuZXh0X21hcF9rZXlCeTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX2tleUJ5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBNYXAgPSByZXF1aXJlTWFwSGVscGVycygpLk1hcDtcblxuXHQvLyBgTWFwLmtleUJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGtleUJ5OiBmdW5jdGlvbiBrZXlCeShpdGVyYWJsZSwga2V5RGVyaXZhdGl2ZSkge1xuXHQgICAgdmFyIEMgPSBpc0NhbGxhYmxlKHRoaXMpID8gdGhpcyA6IE1hcDtcblx0ICAgIHZhciBuZXdNYXAgPSBuZXcgQygpO1xuXHQgICAgYUNhbGxhYmxlKGtleURlcml2YXRpdmUpO1xuXHQgICAgdmFyIHNldHRlciA9IGFDYWxsYWJsZShuZXdNYXAuc2V0KTtcblx0ICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdCAgICAgIGNhbGwoc2V0dGVyLCBuZXdNYXAsIGtleURlcml2YXRpdmUoZWxlbWVudCksIGVsZW1lbnQpO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gbmV3TWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX2tleUJ5O1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9rZXlCeSgpO1xuXG52YXIgZXNuZXh0X21hcF9rZXlPZiA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX2tleU9mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9rZXlPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5T2YpIHJldHVybiBlc25leHRfbWFwX2tleU9mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfa2V5T2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLmtleU9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBrZXlPZjogZnVuY3Rpb24ga2V5T2Yoc2VhcmNoRWxlbWVudCkge1xuXHQgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdGUoYU1hcCh0aGlzKSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKHZhbHVlID09PSBzZWFyY2hFbGVtZW50KSByZXR1cm4geyBrZXk6IGtleSB9O1xuXHQgICAgfSwgdHJ1ZSk7XG5cdCAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5rZXk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfa2V5T2Y7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX2tleU9mKCk7XG5cbnZhciBlc25leHRfbWFwX21hcEtleXMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBLZXlzO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9tYXBLZXlzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBLZXlzKSByZXR1cm4gZXNuZXh0X21hcF9tYXBLZXlzO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwS2V5cyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYU1hcCA9IHJlcXVpcmVBTWFwKCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdHZhciBNYXAgPSBNYXBIZWxwZXJzLk1hcDtcblx0dmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLm1hcEtleXNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG1hcEtleXM6IGZ1bmN0aW9uIG1hcEtleXMoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciBuZXdNYXAgPSBuZXcgTWFwKCk7XG5cdCAgICBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgc2V0KG5ld01hcCwgYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApLCB2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdNYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfbWFwS2V5cztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXBfbWFwS2V5cygpO1xuXG52YXIgZXNuZXh0X21hcF9tYXBWYWx1ZXMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBWYWx1ZXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX21hcFZhbHVlcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWFwVmFsdWVzKSByZXR1cm4gZXNuZXh0X21hcF9tYXBWYWx1ZXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9tYXBWYWx1ZXMgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBiaW5kID0gcmVxdWlyZUZ1bmN0aW9uQmluZENvbnRleHQoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuXHQvLyBgTWFwLnByb3RvdHlwZS5tYXBWYWx1ZXNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG1hcFZhbHVlczogZnVuY3Rpb24gbWFwVmFsdWVzKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICB2YXIgbmV3TWFwID0gbmV3IE1hcCgpO1xuXHQgICAgaXRlcmF0ZShtYXAsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdCAgICAgIHNldChuZXdNYXAsIGtleSwgYm91bmRGdW5jdGlvbih2YWx1ZSwga2V5LCBtYXApKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld01hcDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9tYXBWYWx1ZXM7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX21hcFZhbHVlcygpO1xuXG52YXIgZXNuZXh0X21hcF9tZXJnZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX21lcmdlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9tZXJnZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWVyZ2UpIHJldHVybiBlc25leHRfbWFwX21lcmdlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfbWVyZ2UgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlSXRlcmF0ZSgpO1xuXHR2YXIgc2V0ID0gcmVxdWlyZU1hcEhlbHBlcnMoKS5zZXQ7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUubWVyZ2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuXHQgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShpdGVyYWJsZSAvKiAuLi5pdGVyYWJsZXMgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICB2YXIgaSA9IDA7XG5cdCAgICB3aGlsZSAoaSA8IGFyZ3VtZW50c0xlbmd0aCkge1xuXHQgICAgICBpdGVyYXRlKGFyZ3VtZW50c1tpKytdLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHQgICAgICAgIHNldChtYXAsIGtleSwgdmFsdWUpO1xuXHQgICAgICB9LCB7IEFTX0VOVFJJRVM6IHRydWUgfSk7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gbWFwO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfbWFwX21lcmdlO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9tZXJnZSgpO1xuXG52YXIgZXNuZXh0X21hcF9vZiA9IHt9O1xuXG52YXIgY29sbGVjdGlvbk9mO1xudmFyIGhhc1JlcXVpcmVkQ29sbGVjdGlvbk9mO1xuXG5mdW5jdGlvbiByZXF1aXJlQ29sbGVjdGlvbk9mICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQ29sbGVjdGlvbk9mKSByZXR1cm4gY29sbGVjdGlvbk9mO1xuXHRoYXNSZXF1aXJlZENvbGxlY3Rpb25PZiA9IDE7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cblx0Y29sbGVjdGlvbk9mID0gZnVuY3Rpb24gKEMsIGFkZGVyLCBFTlRSWSkge1xuXHQgIHJldHVybiBmdW5jdGlvbiBvZigpIHtcblx0ICAgIHZhciByZXN1bHQgPSBuZXcgQygpO1xuXHQgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdCAgICAgIHZhciBlbnRyeSA9IGFyZ3VtZW50c1tpbmRleF07XG5cdCAgICAgIGlmIChFTlRSWSkgYWRkZXIocmVzdWx0LCBhbk9iamVjdChlbnRyeSlbMF0sIGVudHJ5WzFdKTtcblx0ICAgICAgZWxzZSBhZGRlcihyZXN1bHQsIGVudHJ5KTtcblx0ICAgIH0gcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXHR9O1xuXHRyZXR1cm4gY29sbGVjdGlvbk9mO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX29mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hcF9vZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXBfb2YpIHJldHVybiBlc25leHRfbWFwX29mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXBfb2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBNYXBIZWxwZXJzID0gcmVxdWlyZU1hcEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25PZiA9IHJlcXVpcmVDb2xsZWN0aW9uT2YoKTtcblxuXHQvLyBgTWFwLm9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLm9mXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG9mOiBjcmVhdGVDb2xsZWN0aW9uT2YoTWFwSGVscGVycy5NYXAsIE1hcEhlbHBlcnMuc2V0LCB0cnVlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfb2Y7XG59XG5cbnJlcXVpcmVFc25leHRfbWFwX29mKCk7XG5cbnZhciBlc25leHRfbWFwX3JlZHVjZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX3JlZHVjZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfcmVkdWNlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF9yZWR1Y2UpIHJldHVybiBlc25leHRfbWFwX3JlZHVjZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX3JlZHVjZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVNYXBJdGVyYXRlKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG5cdCAgICB2YXIgbWFwID0gYU1hcCh0aGlzKTtcblx0ICAgIHZhciBub0luaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoIDwgMjtcblx0ICAgIHZhciBhY2N1bXVsYXRvciA9IG5vSW5pdGlhbCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcblx0ICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcblx0ICAgIGl0ZXJhdGUobWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXHQgICAgICBpZiAobm9Jbml0aWFsKSB7XG5cdCAgICAgICAgbm9Jbml0aWFsID0gZmFsc2U7XG5cdCAgICAgICAgYWNjdW11bGF0b3IgPSB2YWx1ZTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBhY2N1bXVsYXRvciA9IGNhbGxiYWNrZm4oYWNjdW11bGF0b3IsIHZhbHVlLCBrZXksIG1hcCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgaWYgKG5vSW5pdGlhbCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBtYXAgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG5cdCAgICByZXR1cm4gYWNjdW11bGF0b3I7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfcmVkdWNlO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9yZWR1Y2UoKTtcblxudmFyIGVzbmV4dF9tYXBfc29tZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX3NvbWU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWFwX3NvbWUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWFwX3NvbWUpIHJldHVybiBlc25leHRfbWFwX3NvbWU7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hcF9zb21lID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhTWFwID0gcmVxdWlyZUFNYXAoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlTWFwSXRlcmF0ZSgpO1xuXG5cdC8vIGBNYXAucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHJldHVybiBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIGtleSwgbWFwKSkgcmV0dXJuIHRydWU7XG5cdCAgICB9LCB0cnVlKSA9PT0gdHJ1ZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hcF9zb21lO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF9zb21lKCk7XG5cbnZhciBlc25leHRfbWFwX3VwZGF0ZSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWFwX3VwZGF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXBfdXBkYXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hcF91cGRhdGUpIHJldHVybiBlc25leHRfbWFwX3VwZGF0ZTtcblx0aGFzUmVxdWlyZWRFc25leHRfbWFwX3VwZGF0ZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFDYWxsYWJsZSA9IHJlcXVpcmVBQ2FsbGFibGUoKTtcblx0dmFyIGFNYXAgPSByZXF1aXJlQU1hcCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdHZhciBnZXQgPSBNYXBIZWxwZXJzLmdldDtcblx0dmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xuXHR2YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cblx0Ly8gYE1hcC5wcm90b3R5cGUudXBkYXRlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShrZXksIGNhbGxiYWNrIC8qICwgdGh1bmsgKi8pIHtcblx0ICAgIHZhciBtYXAgPSBhTWFwKHRoaXMpO1xuXHQgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdCAgICBhQ2FsbGFibGUoY2FsbGJhY2spO1xuXHQgICAgdmFyIGlzUHJlc2VudEluTWFwID0gaGFzKG1hcCwga2V5KTtcblx0ICAgIGlmICghaXNQcmVzZW50SW5NYXAgJiYgbGVuZ3RoIDwgMykge1xuXHQgICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignVXBkYXRpbmcgYWJzZW50IHZhbHVlJyk7XG5cdCAgICB9XG5cdCAgICB2YXIgdmFsdWUgPSBpc1ByZXNlbnRJbk1hcCA/IGdldChtYXAsIGtleSkgOiBhQ2FsbGFibGUobGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCkoa2V5LCBtYXApO1xuXHQgICAgc2V0KG1hcCwga2V5LCBjYWxsYmFjayh2YWx1ZSwga2V5LCBtYXApKTtcblx0ICAgIHJldHVybiBtYXA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXBfdXBkYXRlO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hcF91cGRhdGUoKTtcblxudmFyIGVzbmV4dF9tYXRoX2NsYW1wID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2NsYW1wO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfY2xhbXAgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9jbGFtcCkgcmV0dXJuIGVzbmV4dF9tYXRoX2NsYW1wO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2NsYW1wID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdHZhciBtaW4gPSBNYXRoLm1pbjtcblx0dmFyIG1heCA9IE1hdGgubWF4O1xuXG5cdC8vIGBNYXRoLmNsYW1wYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgY2xhbXA6IGZ1bmN0aW9uIGNsYW1wKHgsIGxvd2VyLCB1cHBlcikge1xuXHQgICAgcmV0dXJuIG1pbih1cHBlciwgbWF4KGxvd2VyLCB4KSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2NsYW1wO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfY2xhbXAoKTtcblxudmFyIGVzbmV4dF9tYXRoX2RlZ1BlclJhZCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdQZXJSYWQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9kZWdQZXJSYWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdQZXJSYWQpIHJldHVybiBlc25leHRfbWF0aF9kZWdQZXJSYWQ7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVnUGVyUmFkID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLkRFR19QRVJfUkFEYCBjb25zdGFudFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgbm9uQ29uZmlndXJhYmxlOiB0cnVlLCBub25Xcml0YWJsZTogdHJ1ZSB9LCB7XG5cdCAgREVHX1BFUl9SQUQ6IE1hdGguUEkgLyAxODBcblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9kZWdQZXJSYWQ7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9kZWdQZXJSYWQoKTtcblxudmFyIGVzbmV4dF9tYXRoX2RlZ3JlZXMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZGVncmVlcztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2RlZ3JlZXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdyZWVzKSByZXR1cm4gZXNuZXh0X21hdGhfZGVncmVlcztcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9kZWdyZWVzID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdHZhciBSQURfUEVSX0RFRyA9IDE4MCAvIE1hdGguUEk7XG5cblx0Ly8gYE1hdGguZGVncmVlc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGRlZ3JlZXM6IGZ1bmN0aW9uIGRlZ3JlZXMocmFkaWFucykge1xuXHQgICAgcmV0dXJuIHJhZGlhbnMgKiBSQURfUEVSX0RFRztcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfZGVncmVlcztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX2RlZ3JlZXMoKTtcblxudmFyIGVzbmV4dF9tYXRoX2ZzY2FsZSA9IHt9O1xuXG52YXIgbWF0aFNjYWxlO1xudmFyIGhhc1JlcXVpcmVkTWF0aFNjYWxlO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aFNjYWxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aFNjYWxlKSByZXR1cm4gbWF0aFNjYWxlO1xuXHRoYXNSZXF1aXJlZE1hdGhTY2FsZSA9IDE7XG5cdC8vIGBNYXRoLnNjYWxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cblx0Ly8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuXHRtYXRoU2NhbGUgPSBmdW5jdGlvbiBzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcblx0ICB2YXIgbnggPSAreDtcblx0ICB2YXIgbkluTG93ID0gK2luTG93O1xuXHQgIHZhciBuSW5IaWdoID0gK2luSGlnaDtcblx0ICB2YXIgbk91dExvdyA9ICtvdXRMb3c7XG5cdCAgdmFyIG5PdXRIaWdoID0gK291dEhpZ2g7XG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcblx0ICBpZiAobnggIT09IG54IHx8IG5JbkxvdyAhPT0gbkluTG93IHx8IG5JbkhpZ2ggIT09IG5JbkhpZ2ggfHwgbk91dExvdyAhPT0gbk91dExvdyB8fCBuT3V0SGlnaCAhPT0gbk91dEhpZ2gpIHJldHVybiBOYU47XG5cdCAgaWYgKG54ID09PSBJbmZpbml0eSB8fCBueCA9PT0gLUluZmluaXR5KSByZXR1cm4gbng7XG5cdCAgcmV0dXJuIChueCAtIG5JbkxvdykgKiAobk91dEhpZ2ggLSBuT3V0TG93KSAvIChuSW5IaWdoIC0gbkluTG93KSArIG5PdXRMb3c7XG5cdH07XG5cdHJldHVybiBtYXRoU2NhbGU7XG59XG5cbnZhciBtYXRoU2lnbjtcbnZhciBoYXNSZXF1aXJlZE1hdGhTaWduO1xuXG5mdW5jdGlvbiByZXF1aXJlTWF0aFNpZ24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRNYXRoU2lnbikgcmV0dXJuIG1hdGhTaWduO1xuXHRoYXNSZXF1aXJlZE1hdGhTaWduID0gMTtcblx0Ly8gYE1hdGguc2lnbmAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC5zaWduXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXNpZ24gLS0gc2FmZVxuXHRtYXRoU2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpIHtcblx0ICB2YXIgbiA9ICt4O1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgcmV0dXJuIG4gPT09IDAgfHwgbiAhPT0gbiA/IG4gOiBuIDwgMCA/IC0xIDogMTtcblx0fTtcblx0cmV0dXJuIG1hdGhTaWduO1xufVxuXG52YXIgbWF0aFJvdW5kVGllc1RvRXZlbjtcbnZhciBoYXNSZXF1aXJlZE1hdGhSb3VuZFRpZXNUb0V2ZW47XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoUm91bmRUaWVzVG9FdmVuICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aFJvdW5kVGllc1RvRXZlbikgcmV0dXJuIG1hdGhSb3VuZFRpZXNUb0V2ZW47XG5cdGhhc1JlcXVpcmVkTWF0aFJvdW5kVGllc1RvRXZlbiA9IDE7XG5cdHZhciBFUFNJTE9OID0gMi4yMjA0NDYwNDkyNTAzMTNlLTE2OyAvLyBOdW1iZXIuRVBTSUxPTlxuXHR2YXIgSU5WRVJTRV9FUFNJTE9OID0gMSAvIEVQU0lMT047XG5cblx0bWF0aFJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uIChuKSB7XG5cdCAgcmV0dXJuIG4gKyBJTlZFUlNFX0VQU0lMT04gLSBJTlZFUlNFX0VQU0lMT047XG5cdH07XG5cdHJldHVybiBtYXRoUm91bmRUaWVzVG9FdmVuO1xufVxuXG52YXIgbWF0aEZsb2F0Um91bmQ7XG52YXIgaGFzUmVxdWlyZWRNYXRoRmxvYXRSb3VuZDtcblxuZnVuY3Rpb24gcmVxdWlyZU1hdGhGbG9hdFJvdW5kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aEZsb2F0Um91bmQpIHJldHVybiBtYXRoRmxvYXRSb3VuZDtcblx0aGFzUmVxdWlyZWRNYXRoRmxvYXRSb3VuZCA9IDE7XG5cdHZhciBzaWduID0gcmVxdWlyZU1hdGhTaWduKCk7XG5cdHZhciByb3VuZFRpZXNUb0V2ZW4gPSByZXF1aXJlTWF0aFJvdW5kVGllc1RvRXZlbigpO1xuXG5cdHZhciBhYnMgPSBNYXRoLmFicztcblxuXHR2YXIgRVBTSUxPTiA9IDIuMjIwNDQ2MDQ5MjUwMzEzZS0xNjsgLy8gTnVtYmVyLkVQU0lMT05cblxuXHRtYXRoRmxvYXRSb3VuZCA9IGZ1bmN0aW9uICh4LCBGTE9BVF9FUFNJTE9OLCBGTE9BVF9NQVhfVkFMVUUsIEZMT0FUX01JTl9WQUxVRSkge1xuXHQgIHZhciBuID0gK3g7XG5cdCAgdmFyIGFic29sdXRlID0gYWJzKG4pO1xuXHQgIHZhciBzID0gc2lnbihuKTtcblx0ICBpZiAoYWJzb2x1dGUgPCBGTE9BVF9NSU5fVkFMVUUpIHJldHVybiBzICogcm91bmRUaWVzVG9FdmVuKGFic29sdXRlIC8gRkxPQVRfTUlOX1ZBTFVFIC8gRkxPQVRfRVBTSUxPTikgKiBGTE9BVF9NSU5fVkFMVUUgKiBGTE9BVF9FUFNJTE9OO1xuXHQgIHZhciBhID0gKDEgKyBGTE9BVF9FUFNJTE9OIC8gRVBTSUxPTikgKiBhYnNvbHV0ZTtcblx0ICB2YXIgcmVzdWx0ID0gYSAtIChhIC0gYWJzb2x1dGUpO1xuXHQgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG5cdCAgaWYgKHJlc3VsdCA+IEZMT0FUX01BWF9WQUxVRSB8fCByZXN1bHQgIT09IHJlc3VsdCkgcmV0dXJuIHMgKiBJbmZpbml0eTtcblx0ICByZXR1cm4gcyAqIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIG1hdGhGbG9hdFJvdW5kO1xufVxuXG52YXIgbWF0aEZyb3VuZDtcbnZhciBoYXNSZXF1aXJlZE1hdGhGcm91bmQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVNYXRoRnJvdW5kICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkTWF0aEZyb3VuZCkgcmV0dXJuIG1hdGhGcm91bmQ7XG5cdGhhc1JlcXVpcmVkTWF0aEZyb3VuZCA9IDE7XG5cdHZhciBmbG9hdFJvdW5kID0gcmVxdWlyZU1hdGhGbG9hdFJvdW5kKCk7XG5cblx0dmFyIEZMT0FUMzJfRVBTSUxPTiA9IDEuMTkyMDkyODk1NTA3ODEyNWUtNzsgLy8gMiAqKiAtMjM7XG5cdHZhciBGTE9BVDMyX01BWF9WQUxVRSA9IDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzg7IC8vIDIgKiogMTI4IC0gMiAqKiAxMDRcblx0dmFyIEZMT0FUMzJfTUlOX1ZBTFVFID0gMS4xNzU0OTQzNTA4MjIyODc1ZS0zODsgLy8gMiAqKiAtMTI2O1xuXG5cdC8vIGBNYXRoLmZyb3VuZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC5mcm91bmRcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtZnJvdW5kIC0tIHNhZmVcblx0bWF0aEZyb3VuZCA9IE1hdGguZnJvdW5kIHx8IGZ1bmN0aW9uIGZyb3VuZCh4KSB7XG5cdCAgcmV0dXJuIGZsb2F0Um91bmQoeCwgRkxPQVQzMl9FUFNJTE9OLCBGTE9BVDMyX01BWF9WQUxVRSwgRkxPQVQzMl9NSU5fVkFMVUUpO1xuXHR9O1xuXHRyZXR1cm4gbWF0aEZyb3VuZDtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZnNjYWxlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfZnNjYWxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfZnNjYWxlKSByZXR1cm4gZXNuZXh0X21hdGhfZnNjYWxlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ZzY2FsZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHR2YXIgc2NhbGUgPSByZXF1aXJlTWF0aFNjYWxlKCk7XG5cdHZhciBmcm91bmQgPSByZXF1aXJlTWF0aEZyb3VuZCgpO1xuXG5cdC8vIGBNYXRoLmZzY2FsZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZzY2FsZTogZnVuY3Rpb24gZnNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkge1xuXHQgICAgcmV0dXJuIGZyb3VuZChzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfZnNjYWxlO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfZnNjYWxlKCk7XG5cbnZhciBlc25leHRfbWF0aF9pYWRkaCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pYWRkaDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX2lhZGRoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaWFkZGgpIHJldHVybiBlc25leHRfbWF0aF9pYWRkaDtcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9pYWRkaCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5pYWRkaGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpYWRkaDogZnVuY3Rpb24gaWFkZGgoeDAsIHgxLCB5MCwgeTEpIHtcblx0ICAgIHZhciAkeDAgPSB4MCA+Pj4gMDtcblx0ICAgIHZhciAkeDEgPSB4MSA+Pj4gMDtcblx0ICAgIHZhciAkeTAgPSB5MCA+Pj4gMDtcblx0ICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2lhZGRoO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfaWFkZGgoKTtcblxudmFyIGVzbmV4dF9tYXRoX2ltdWxoID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ltdWxoO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfaW11bGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9pbXVsaCkgcmV0dXJuIGVzbmV4dF9tYXRoX2ltdWxoO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2ltdWxoID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLmltdWxoYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGltdWxoOiBmdW5jdGlvbiBpbXVsaCh1LCB2KSB7XG5cdCAgICB2YXIgVUlOVDE2ID0gMHhGRkZGO1xuXHQgICAgdmFyICR1ID0gK3U7XG5cdCAgICB2YXIgJHYgPSArdjtcblx0ICAgIHZhciB1MCA9ICR1ICYgVUlOVDE2O1xuXHQgICAgdmFyIHYwID0gJHYgJiBVSU5UMTY7XG5cdCAgICB2YXIgdTEgPSAkdSA+PiAxNjtcblx0ICAgIHZhciB2MSA9ICR2ID4+IDE2O1xuXHQgICAgdmFyIHQgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuXHQgICAgcmV0dXJuIHUxICogdjEgKyAodCA+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+IDE2KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfaW11bGg7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9pbXVsaCgpO1xuXG52YXIgZXNuZXh0X21hdGhfaXN1YmggPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaXN1Ymg7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9pc3ViaCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX2lzdWJoKSByZXR1cm4gZXNuZXh0X21hdGhfaXN1Ymg7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfaXN1YmggPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cblx0Ly8gYE1hdGguaXN1YmhgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaXN1Ymg6IGZ1bmN0aW9uIGlzdWJoKHgwLCB4MSwgeTAsIHkxKSB7XG5cdCAgICB2YXIgJHgwID0geDAgPj4+IDA7XG5cdCAgICB2YXIgJHgxID0geDEgPj4+IDA7XG5cdCAgICB2YXIgJHkwID0geTAgPj4+IDA7XG5cdCAgICByZXR1cm4gJHgxIC0gKHkxID4+PiAwKSAtICgofiR4MCAmICR5MCB8IH4oJHgwIF4gJHkwKSAmICR4MCAtICR5MCA+Pj4gMCkgPj4+IDMxKSB8IDA7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX2lzdWJoO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfaXN1YmgoKTtcblxudmFyIGVzbmV4dF9tYXRoX3JhZFBlckRlZyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRQZXJEZWc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9yYWRQZXJEZWcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRQZXJEZWcpIHJldHVybiBlc25leHRfbWF0aF9yYWRQZXJEZWc7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkUGVyRGVnID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLlJBRF9QRVJfREVHYCBjb25zdGFudFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgbm9uQ29uZmlndXJhYmxlOiB0cnVlLCBub25Xcml0YWJsZTogdHJ1ZSB9LCB7XG5cdCAgUkFEX1BFUl9ERUc6IDE4MCAvIE1hdGguUElcblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9yYWRQZXJEZWc7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9yYWRQZXJEZWcoKTtcblxudmFyIGVzbmV4dF9tYXRoX3JhZGlhbnMgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfcmFkaWFucztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9tYXRoX3JhZGlhbnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRpYW5zKSByZXR1cm4gZXNuZXh0X21hdGhfcmFkaWFucztcblx0aGFzUmVxdWlyZWRFc25leHRfbWF0aF9yYWRpYW5zID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdHZhciBERUdfUEVSX1JBRCA9IE1hdGguUEkgLyAxODA7XG5cblx0Ly8gYE1hdGgucmFkaWFuc2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHJhZGlhbnM6IGZ1bmN0aW9uIHJhZGlhbnMoZGVncmVlcykge1xuXHQgICAgcmV0dXJuIGRlZ3JlZXMgKiBERUdfUEVSX1JBRDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfcmFkaWFucztcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3JhZGlhbnMoKTtcblxudmFyIGVzbmV4dF9tYXRoX3NjYWxlID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NjYWxlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfc2NhbGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF9zY2FsZSkgcmV0dXJuIGVzbmV4dF9tYXRoX3NjYWxlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NjYWxlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgc2NhbGUgPSByZXF1aXJlTWF0aFNjYWxlKCk7XG5cblx0Ly8gYE1hdGguc2NhbGVgIG1ldGhvZFxuXHQvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzY2FsZTogc2NhbGVcblx0fSk7XG5cdHJldHVybiBlc25leHRfbWF0aF9zY2FsZTtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3NjYWxlKCk7XG5cbnZhciBlc25leHRfbWF0aF9zZWVkZWRQcm5nID0ge307XG5cbnZhciBudW1iZXJJc0Zpbml0ZTtcbnZhciBoYXNSZXF1aXJlZE51bWJlcklzRmluaXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlTnVtYmVySXNGaW5pdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWROdW1iZXJJc0Zpbml0ZSkgcmV0dXJuIG51bWJlcklzRmluaXRlO1xuXHRoYXNSZXF1aXJlZE51bWJlcklzRmluaXRlID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXG5cdHZhciBnbG9iYWxJc0Zpbml0ZSA9IGdsb2JhbFRoaXMuaXNGaW5pdGU7XG5cblx0Ly8gYE51bWJlci5pc0Zpbml0ZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLmlzZmluaXRlXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1udW1iZXItaXNmaW5pdGUgLS0gc2FmZVxuXHRudW1iZXJJc0Zpbml0ZSA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiBpc0Zpbml0ZShpdCkge1xuXHQgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgZ2xvYmFsSXNGaW5pdGUoaXQpO1xuXHR9O1xuXHRyZXR1cm4gbnVtYmVySXNGaW5pdGU7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NlZWRlZFBybmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9zZWVkZWRQcm5nICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2VlZGVkUHJuZykgcmV0dXJuIGVzbmV4dF9tYXRoX3NlZWRlZFBybmc7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2VlZGVkUHJuZyA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBudW1iZXJJc0Zpbml0ZSA9IHJlcXVpcmVOdW1iZXJJc0Zpbml0ZSgpO1xuXHR2YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmVJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yKCk7XG5cdHZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZUNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoKTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXG5cdHZhciBTRUVERURfUkFORE9NID0gJ1NlZWRlZCBSYW5kb20nO1xuXHR2YXIgU0VFREVEX1JBTkRPTV9HRU5FUkFUT1IgPSBTRUVERURfUkFORE9NICsgJyBHZW5lcmF0b3InO1xuXHR2YXIgU0VFRF9UWVBFX0VSUk9SID0gJ01hdGguc2VlZGVkUFJORygpIGFyZ3VtZW50IHNob3VsZCBoYXZlIGEgXCJzZWVkXCIgZmllbGQgd2l0aCBhIGZpbml0ZSB2YWx1ZS4nO1xuXHR2YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXHR2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNFRURFRF9SQU5ET01fR0VORVJBVE9SKTtcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cblx0dmFyICRTZWVkZWRSYW5kb21HZW5lcmF0b3IgPSBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKGZ1bmN0aW9uIFNlZWRlZFJhbmRvbUdlbmVyYXRvcihzZWVkKSB7XG5cdCAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG5cdCAgICB0eXBlOiBTRUVERURfUkFORE9NX0dFTkVSQVRPUixcblx0ICAgIHNlZWQ6IHNlZWQgJSAyMTQ3NDgzNjQ3XG5cdCAgfSk7XG5cdH0sIFNFRURFRF9SQU5ET00sIGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICB2YXIgc2VlZCA9IHN0YXRlLnNlZWQgPSAoc3RhdGUuc2VlZCAqIDExMDM1MTUyNDUgKyAxMjM0NSkgJSAyMTQ3NDgzNjQ3O1xuXHQgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KChzZWVkICYgMTA3Mzc0MTgyMykgLyAxMDczNzQxODIzLCBmYWxzZSk7XG5cdH0pO1xuXG5cdC8vIGBNYXRoLnNlZWRlZFBSTkdgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZWVkZWQtcmFuZG9tXG5cdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNlZWRlZC1yYW5kb20vYmxvYi83OGI4MjU4ODM1YjU3ZmMyMTAwZDA3NjE1MWFiNTA2YmMzMjAyYWU2L2RlbW8uaHRtbFxuXHQkKHsgdGFyZ2V0OiAnTWF0aCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgc2VlZGVkUFJORzogZnVuY3Rpb24gc2VlZGVkUFJORyhpdCkge1xuXHQgICAgdmFyIHNlZWQgPSBhbk9iamVjdChpdCkuc2VlZDtcblx0ICAgIGlmICghbnVtYmVySXNGaW5pdGUoc2VlZCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFNFRURfVFlQRV9FUlJPUik7XG5cdCAgICByZXR1cm4gbmV3ICRTZWVkZWRSYW5kb21HZW5lcmF0b3Ioc2VlZCk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3NlZWRlZFBybmc7XG59XG5cbnJlcXVpcmVFc25leHRfbWF0aF9zZWVkZWRQcm5nKCk7XG5cbnZhciBlc25leHRfbWF0aF9zaWduYml0ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3NpZ25iaXQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbWF0aF9zaWduYml0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2lnbmJpdCkgcmV0dXJuIGVzbmV4dF9tYXRoX3NpZ25iaXQ7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X21hdGhfc2lnbmJpdCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblxuXHQvLyBgTWF0aC5zaWduYml0YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtTWF0aC5zaWduYml0XG5cdCQoeyB0YXJnZXQ6ICdNYXRoJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzaWduYml0OiBmdW5jdGlvbiBzaWduYml0KHgpIHtcblx0ICAgIHZhciBuID0gK3g7XG5cdCAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgICAgcmV0dXJuIG4gPT09IG4gJiYgbiA9PT0gMCA/IDEgLyBuID09PSAtSW5maW5pdHkgOiBuIDwgMDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X21hdGhfc2lnbmJpdDtcbn1cblxucmVxdWlyZUVzbmV4dF9tYXRoX3NpZ25iaXQoKTtcblxudmFyIGVzbmV4dF9tYXRoX3VtdWxoID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3VtdWxoO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X21hdGhfdW11bGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbWF0aF91bXVsaCkgcmV0dXJuIGVzbmV4dF9tYXRoX3VtdWxoO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9tYXRoX3VtdWxoID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXG5cdC8vIGBNYXRoLnVtdWxoYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ01hdGgnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KSB7XG5cdCAgICB2YXIgVUlOVDE2ID0gMHhGRkZGO1xuXHQgICAgdmFyICR1ID0gK3U7XG5cdCAgICB2YXIgJHYgPSArdjtcblx0ICAgIHZhciB1MCA9ICR1ICYgVUlOVDE2O1xuXHQgICAgdmFyIHYwID0gJHYgJiBVSU5UMTY7XG5cdCAgICB2YXIgdTEgPSAkdSA+Pj4gMTY7XG5cdCAgICB2YXIgdjEgPSAkdiA+Pj4gMTY7XG5cdCAgICB2YXIgdCA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG5cdCAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9tYXRoX3VtdWxoO1xufVxuXG5yZXF1aXJlRXNuZXh0X21hdGhfdW11bGgoKTtcblxudmFyIGVzbmV4dF9udW1iZXJfZnJvbVN0cmluZyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfbnVtYmVyX2Zyb21TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfbnVtYmVyX2Zyb21TdHJpbmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfbnVtYmVyX2Zyb21TdHJpbmcpIHJldHVybiBlc25leHRfbnVtYmVyX2Zyb21TdHJpbmc7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X251bWJlcl9mcm9tU3RyaW5nID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cblx0dmFyIElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OID0gJ0ludmFsaWQgbnVtYmVyIHJlcHJlc2VudGF0aW9uJztcblx0dmFyIElOVkFMSURfUkFESVggPSAnSW52YWxpZCByYWRpeCc7XG5cdHZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG5cdHZhciAkU3ludGF4RXJyb3IgPSBTeW50YXhFcnJvcjtcblx0dmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cdHZhciAkcGFyc2VJbnQgPSBwYXJzZUludDtcblx0dmFyIHBvdyA9IE1hdGgucG93O1xuXHR2YXIgdmFsaWQgPSAvXltcXGQuYS16XSskLztcblx0dmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG5cdHZhciBleGVjID0gdW5jdXJyeVRoaXModmFsaWQuZXhlYyk7XG5cdHZhciBudW1iZXJUb1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cdHZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblx0dmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG5cdC8vIGBOdW1iZXIuZnJvbVN0cmluZ2AgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW51bWJlci1mcm9tc3RyaW5nXG5cdCQoeyB0YXJnZXQ6ICdOdW1iZXInLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb21TdHJpbmc6IGZ1bmN0aW9uIGZyb21TdHJpbmcoc3RyaW5nLCByYWRpeCkge1xuXHQgICAgdmFyIHNpZ24gPSAxO1xuXHQgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT0gJ3N0cmluZycpIHRocm93IG5ldyAkVHlwZUVycm9yKElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OKTtcblx0ICAgIGlmICghc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcihJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTik7XG5cdCAgICBpZiAoY2hhckF0KHN0cmluZywgMCkgPT09ICctJykge1xuXHQgICAgICBzaWduID0gLTE7XG5cdCAgICAgIHN0cmluZyA9IHN0cmluZ1NsaWNlKHN0cmluZywgMSk7XG5cdCAgICAgIGlmICghc3RyaW5nLmxlbmd0aCkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcihJTlZBTElEX05VTUJFUl9SRVBSRVNFTlRBVElPTik7XG5cdCAgICB9XG5cdCAgICB2YXIgUiA9IHJhZGl4ID09PSB1bmRlZmluZWQgPyAxMCA6IHRvSW50ZWdlck9ySW5maW5pdHkocmFkaXgpO1xuXHQgICAgaWYgKFIgPCAyIHx8IFIgPiAzNikgdGhyb3cgbmV3ICRSYW5nZUVycm9yKElOVkFMSURfUkFESVgpO1xuXHQgICAgaWYgKCFleGVjKHZhbGlkLCBzdHJpbmcpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OKTtcblx0ICAgIHZhciBwYXJ0cyA9IHNwbGl0KHN0cmluZywgJy4nKTtcblx0ICAgIHZhciBtYXRoTnVtID0gJHBhcnNlSW50KHBhcnRzWzBdLCBSKTtcblx0ICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSBtYXRoTnVtICs9ICRwYXJzZUludChwYXJ0c1sxXSwgUikgLyBwb3coUiwgcGFydHNbMV0ubGVuZ3RoKTtcblx0ICAgIGlmIChSID09PSAxMCAmJiBudW1iZXJUb1N0cmluZyhtYXRoTnVtLCBSKSAhPT0gc3RyaW5nKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKElOVkFMSURfTlVNQkVSX1JFUFJFU0VOVEFUSU9OKTtcblx0ICAgIHJldHVybiBzaWduICogbWF0aE51bTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X251bWJlcl9mcm9tU3RyaW5nO1xufVxuXG5yZXF1aXJlRXNuZXh0X251bWJlcl9mcm9tU3RyaW5nKCk7XG5cbnZhciBlc25leHRfb2JzZXJ2YWJsZSA9IHt9O1xuXG52YXIgZXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3IgPSB7fTtcblxudmFyIGhvc3RSZXBvcnRFcnJvcnM7XG52YXIgaGFzUmVxdWlyZWRIb3N0UmVwb3J0RXJyb3JzO1xuXG5mdW5jdGlvbiByZXF1aXJlSG9zdFJlcG9ydEVycm9ycyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEhvc3RSZXBvcnRFcnJvcnMpIHJldHVybiBob3N0UmVwb3J0RXJyb3JzO1xuXHRoYXNSZXF1aXJlZEhvc3RSZXBvcnRFcnJvcnMgPSAxO1xuXHRob3N0UmVwb3J0RXJyb3JzID0gZnVuY3Rpb24gKGEsIGIpIHtcblx0ICB0cnkge1xuXHQgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gc2FmZVxuXHQgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblx0fTtcblx0cmV0dXJuIGhvc3RSZXBvcnRFcnJvcnM7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3IgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9jb25zdHJ1Y3RvcikgcmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yID0gMTtcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlRGVzY3JpcHRvcnMoKTtcblx0dmFyIHNldFNwZWNpZXMgPSByZXF1aXJlU2V0U3BlY2llcygpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlQW5JbnN0YW5jZSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgaXNPYmplY3QgPSByZXF1aXJlSXNPYmplY3QoKTtcblx0dmFyIGdldE1ldGhvZCA9IHJlcXVpcmVHZXRNZXRob2QoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlRGVmaW5lQnVpbHRJbigpO1xuXHR2YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlRGVmaW5lQnVpbHRJbnMoKTtcblx0dmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmVEZWZpbmVCdWlsdEluQWNjZXNzb3IoKTtcblx0dmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlSG9zdFJlcG9ydEVycm9ycygpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmVJbnRlcm5hbFN0YXRlKCk7XG5cblx0dmFyICQkT0JTRVJWQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHR2YXIgT0JTRVJWQUJMRSA9ICdPYnNlcnZhYmxlJztcblx0dmFyIFNVQlNDUklQVElPTiA9ICdTdWJzY3JpcHRpb24nO1xuXHR2YXIgU1VCU0NSSVBUSU9OX09CU0VSVkVSID0gJ1N1YnNjcmlwdGlvbk9ic2VydmVyJztcblx0dmFyIGdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xuXHR2YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXHR2YXIgZ2V0T2JzZXJ2YWJsZUludGVybmFsU3RhdGUgPSBnZXR0ZXJGb3IoT0JTRVJWQUJMRSk7XG5cdHZhciBnZXRTdWJzY3JpcHRpb25JbnRlcm5hbFN0YXRlID0gZ2V0dGVyRm9yKFNVQlNDUklQVElPTik7XG5cdHZhciBnZXRTdWJzY3JpcHRpb25PYnNlcnZlckludGVybmFsU3RhdGUgPSBnZXR0ZXJGb3IoU1VCU0NSSVBUSU9OX09CU0VSVkVSKTtcblxuXHR2YXIgU3Vic2NyaXB0aW9uU3RhdGUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcblx0ICB0aGlzLm9ic2VydmVyID0gYW5PYmplY3Qob2JzZXJ2ZXIpO1xuXHQgIHRoaXMuY2xlYW51cCA9IG51bGw7XG5cdCAgdGhpcy5zdWJzY3JpcHRpb25PYnNlcnZlciA9IG51bGw7XG5cdH07XG5cblx0U3Vic2NyaXB0aW9uU3RhdGUucHJvdG90eXBlID0ge1xuXHQgIHR5cGU6IFNVQlNDUklQVElPTixcblx0ICBjbGVhbjogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIGNsZWFudXAgPSB0aGlzLmNsZWFudXA7XG5cdCAgICBpZiAoY2xlYW51cCkge1xuXHQgICAgICB0aGlzLmNsZWFudXAgPSBudWxsO1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGNsZWFudXAoKTtcblx0ICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgICAgICBob3N0UmVwb3J0RXJyb3JzKGVycm9yKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcblx0ICAgIGlmICghREVTQ1JJUFRPUlMpIHtcblx0ICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuZmFjYWRlO1xuXHQgICAgICB2YXIgc3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSB0aGlzLnN1YnNjcmlwdGlvbk9ic2VydmVyO1xuXHQgICAgICBzdWJzY3JpcHRpb24uY2xvc2VkID0gdHJ1ZTtcblx0ICAgICAgaWYgKHN1YnNjcmlwdGlvbk9ic2VydmVyKSBzdWJzY3JpcHRpb25PYnNlcnZlci5jbG9zZWQgPSB0cnVlO1xuXHQgICAgfSB0aGlzLm9ic2VydmVyID0gbnVsbDtcblx0ICB9LFxuXHQgIGlzQ2xvc2VkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5vYnNlcnZlciA9PT0gbnVsbDtcblx0ICB9XG5cdH07XG5cblx0dmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChvYnNlcnZlciwgc3Vic2NyaWJlcikge1xuXHQgIHZhciBzdWJzY3JpcHRpb25TdGF0ZSA9IHNldEludGVybmFsU3RhdGUodGhpcywgbmV3IFN1YnNjcmlwdGlvblN0YXRlKG9ic2VydmVyKSk7XG5cdCAgdmFyIHN0YXJ0O1xuXHQgIGlmICghREVTQ1JJUFRPUlMpIHRoaXMuY2xvc2VkID0gZmFsc2U7XG5cdCAgdHJ5IHtcblx0ICAgIGlmIChzdGFydCA9IGdldE1ldGhvZChvYnNlcnZlciwgJ3N0YXJ0JykpIGNhbGwoc3RhcnQsIG9ic2VydmVyLCB0aGlzKTtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgaG9zdFJlcG9ydEVycm9ycyhlcnJvcik7XG5cdCAgfVxuXHQgIGlmIChzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSByZXR1cm47XG5cdCAgdmFyIHN1YnNjcmlwdGlvbk9ic2VydmVyID0gc3Vic2NyaXB0aW9uU3RhdGUuc3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIoc3Vic2NyaXB0aW9uU3RhdGUpO1xuXHQgIHRyeSB7XG5cdCAgICB2YXIgY2xlYW51cCA9IHN1YnNjcmliZXIoc3Vic2NyaXB0aW9uT2JzZXJ2ZXIpO1xuXHQgICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG5cdCAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGNsZWFudXApKSBzdWJzY3JpcHRpb25TdGF0ZS5jbGVhbnVwID0gaXNDYWxsYWJsZShjbGVhbnVwLnVuc3Vic2NyaWJlKVxuXHQgICAgICA/IGZ1bmN0aW9uICgpIHsgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH1cblx0ICAgICAgOiBhQ2FsbGFibGUoY2xlYW51cCk7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIHN1YnNjcmlwdGlvbk9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0ICAgIHJldHVybjtcblx0ICB9IGlmIChzdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpKSBzdWJzY3JpcHRpb25TdGF0ZS5jbGVhbigpO1xuXHR9O1xuXG5cdFN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSBkZWZpbmVCdWlsdElucyh7fSwge1xuXHQgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcblx0ICAgIHZhciBzdWJzY3JpcHRpb25TdGF0ZSA9IGdldFN1YnNjcmlwdGlvbkludGVybmFsU3RhdGUodGhpcyk7XG5cdCAgICBpZiAoIXN1YnNjcmlwdGlvblN0YXRlLmlzQ2xvc2VkKCkpIHtcblx0ICAgICAgc3Vic2NyaXB0aW9uU3RhdGUuY2xvc2UoKTtcblx0ICAgICAgc3Vic2NyaXB0aW9uU3RhdGUuY2xlYW4oKTtcblx0ICAgIH1cblx0ICB9XG5cdH0pO1xuXG5cdGlmIChERVNDUklQVE9SUykgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFN1YnNjcmlwdGlvbi5wcm90b3R5cGUsICdjbG9zZWQnLCB7XG5cdCAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gY2xvc2VkKCkge1xuXHQgICAgcmV0dXJuIGdldFN1YnNjcmlwdGlvbkludGVybmFsU3RhdGUodGhpcykuaXNDbG9zZWQoKTtcblx0ICB9XG5cdH0pO1xuXG5cdHZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25TdGF0ZSkge1xuXHQgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuXHQgICAgdHlwZTogU1VCU0NSSVBUSU9OX09CU0VSVkVSLFxuXHQgICAgc3Vic2NyaXB0aW9uU3RhdGU6IHN1YnNjcmlwdGlvblN0YXRlXG5cdCAgfSk7XG5cdCAgaWYgKCFERVNDUklQVE9SUykgdGhpcy5jbG9zZWQgPSBmYWxzZTtcblx0fTtcblxuXHRTdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSBkZWZpbmVCdWlsdElucyh7fSwge1xuXHQgIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcblx0ICAgIHZhciBzdWJzY3JpcHRpb25TdGF0ZSA9IGdldFN1YnNjcmlwdGlvbk9ic2VydmVySW50ZXJuYWxTdGF0ZSh0aGlzKS5zdWJzY3JpcHRpb25TdGF0ZTtcblx0ICAgIGlmICghc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkge1xuXHQgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb25TdGF0ZS5vYnNlcnZlcjtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgbmV4dE1ldGhvZCA9IGdldE1ldGhvZChvYnNlcnZlciwgJ25leHQnKTtcblx0ICAgICAgICBpZiAobmV4dE1ldGhvZCkgY2FsbChuZXh0TWV0aG9kLCBvYnNlcnZlciwgdmFsdWUpO1xuXHQgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgIGhvc3RSZXBvcnRFcnJvcnMoZXJyb3IpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSxcblx0ICBlcnJvcjogZnVuY3Rpb24gZXJyb3IodmFsdWUpIHtcblx0ICAgIHZhciBzdWJzY3JpcHRpb25TdGF0ZSA9IGdldFN1YnNjcmlwdGlvbk9ic2VydmVySW50ZXJuYWxTdGF0ZSh0aGlzKS5zdWJzY3JpcHRpb25TdGF0ZTtcblx0ICAgIGlmICghc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkge1xuXHQgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb25TdGF0ZS5vYnNlcnZlcjtcblx0ICAgICAgc3Vic2NyaXB0aW9uU3RhdGUuY2xvc2UoKTtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgZXJyb3JNZXRob2QgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsICdlcnJvcicpO1xuXHQgICAgICAgIGlmIChlcnJvck1ldGhvZCkgY2FsbChlcnJvck1ldGhvZCwgb2JzZXJ2ZXIsIHZhbHVlKTtcblx0ICAgICAgICBlbHNlIGhvc3RSZXBvcnRFcnJvcnModmFsdWUpO1xuXHQgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICBob3N0UmVwb3J0RXJyb3JzKGVycik7XG5cdCAgICAgIH0gc3Vic2NyaXB0aW9uU3RhdGUuY2xlYW4oKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgIHZhciBzdWJzY3JpcHRpb25TdGF0ZSA9IGdldFN1YnNjcmlwdGlvbk9ic2VydmVySW50ZXJuYWxTdGF0ZSh0aGlzKS5zdWJzY3JpcHRpb25TdGF0ZTtcblx0ICAgIGlmICghc3Vic2NyaXB0aW9uU3RhdGUuaXNDbG9zZWQoKSkge1xuXHQgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb25TdGF0ZS5vYnNlcnZlcjtcblx0ICAgICAgc3Vic2NyaXB0aW9uU3RhdGUuY2xvc2UoKTtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB2YXIgY29tcGxldGVNZXRob2QgPSBnZXRNZXRob2Qob2JzZXJ2ZXIsICdjb21wbGV0ZScpO1xuXHQgICAgICAgIGlmIChjb21wbGV0ZU1ldGhvZCkgY2FsbChjb21wbGV0ZU1ldGhvZCwgb2JzZXJ2ZXIpO1xuXHQgICAgICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgICAgIGhvc3RSZXBvcnRFcnJvcnMoZXJyb3IpO1xuXHQgICAgICB9IHN1YnNjcmlwdGlvblN0YXRlLmNsZWFuKCk7XG5cdCAgICB9XG5cdCAgfVxuXHR9KTtcblxuXHRpZiAoREVTQ1JJUFRPUlMpIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihTdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUsICdjbG9zZWQnLCB7XG5cdCAgY29uZmlndXJhYmxlOiB0cnVlLFxuXHQgIGdldDogZnVuY3Rpb24gY2xvc2VkKCkge1xuXHQgICAgcmV0dXJuIGdldFN1YnNjcmlwdGlvbk9ic2VydmVySW50ZXJuYWxTdGF0ZSh0aGlzKS5zdWJzY3JpcHRpb25TdGF0ZS5pc0Nsb3NlZCgpO1xuXHQgIH1cblx0fSk7XG5cblx0dmFyICRPYnNlcnZhYmxlID0gZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmVyKSB7XG5cdCAgYW5JbnN0YW5jZSh0aGlzLCBPYnNlcnZhYmxlUHJvdG90eXBlKTtcblx0ICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcblx0ICAgIHR5cGU6IE9CU0VSVkFCTEUsXG5cdCAgICBzdWJzY3JpYmVyOiBhQ2FsbGFibGUoc3Vic2NyaWJlcilcblx0ICB9KTtcblx0fTtcblxuXHR2YXIgT2JzZXJ2YWJsZVByb3RvdHlwZSA9ICRPYnNlcnZhYmxlLnByb3RvdHlwZTtcblxuXHRkZWZpbmVCdWlsdElucyhPYnNlcnZhYmxlUHJvdG90eXBlLCB7XG5cdCAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcblx0ICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oaXNDYWxsYWJsZShvYnNlcnZlcikgPyB7XG5cdCAgICAgIG5leHQ6IG9ic2VydmVyLFxuXHQgICAgICBlcnJvcjogbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCxcblx0ICAgICAgY29tcGxldGU6IGxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcblx0ICAgIH0gOiBpc09iamVjdChvYnNlcnZlcikgPyBvYnNlcnZlciA6IHt9LCBnZXRPYnNlcnZhYmxlSW50ZXJuYWxTdGF0ZSh0aGlzKS5zdWJzY3JpYmVyKTtcblx0ICB9XG5cdH0pO1xuXG5cdGRlZmluZUJ1aWx0SW4oT2JzZXJ2YWJsZVByb3RvdHlwZSwgJCRPQlNFUlZBQkxFLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxuXHQkKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBPYnNlcnZhYmxlOiAkT2JzZXJ2YWJsZVxuXHR9KTtcblxuXHRzZXRTcGVjaWVzKE9CU0VSVkFCTEUpO1xuXHRyZXR1cm4gZXNuZXh0X29ic2VydmFibGVfY29uc3RydWN0b3I7XG59XG5cbnZhciBlc25leHRfb2JzZXJ2YWJsZV9mcm9tID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX2Zyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9mcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfZnJvbSkgcmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX2Zyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGVfZnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cdHZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZUlzQ29uc3RydWN0b3IoKTtcblx0dmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZUdldEl0ZXJhdG9yKCk7XG5cdHZhciBnZXRNZXRob2QgPSByZXF1aXJlR2V0TWV0aG9kKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZUl0ZXJhdGUoKTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR2YXIgJCRPQlNFUlZBQkxFID0gd2VsbEtub3duU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cblx0Ly8gYE9ic2VydmFibGUuZnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcblx0JCh7IHRhcmdldDogJ09ic2VydmFibGUnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb206IGZ1bmN0aW9uIGZyb20oeCkge1xuXHQgICAgdmFyIEMgPSBpc0NvbnN0cnVjdG9yKHRoaXMpID8gdGhpcyA6IGdldEJ1aWx0SW4oJ09ic2VydmFibGUnKTtcblx0ICAgIHZhciBvYnNlcnZhYmxlTWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpLCAkJE9CU0VSVkFCTEUpO1xuXHQgICAgaWYgKG9ic2VydmFibGVNZXRob2QpIHtcblx0ICAgICAgdmFyIG9ic2VydmFibGUgPSBhbk9iamVjdChjYWxsKG9ic2VydmFibGVNZXRob2QsIHgpKTtcblx0ICAgICAgcmV0dXJuIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMgPyBvYnNlcnZhYmxlIDogbmV3IEMoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG5cdCAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcih4KTtcblx0ICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcblx0ICAgICAgaXRlcmF0ZShpdGVyYXRvciwgZnVuY3Rpb24gKGl0LCBzdG9wKSB7XG5cdCAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG5cdCAgICAgICAgaWYgKG9ic2VydmVyLmNsb3NlZCkgcmV0dXJuIHN0b3AoKTtcblx0ICAgICAgfSwgeyBJU19JVEVSQVRPUjogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSk7XG5cdCAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X29ic2VydmFibGVfZnJvbTtcbn1cblxudmFyIGVzbmV4dF9vYnNlcnZhYmxlX29mID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX29mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X29ic2VydmFibGVfb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZV9vZikgcmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX29mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9vYnNlcnZhYmxlX29mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmVHZXRCdWlsdEluKCk7XG5cdHZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZUlzQ29uc3RydWN0b3IoKTtcblxuXHR2YXIgQXJyYXkgPSBnZXRCdWlsdEluKCdBcnJheScpO1xuXG5cdC8vIGBPYnNlcnZhYmxlLm9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuXHQkKHsgdGFyZ2V0OiAnT2JzZXJ2YWJsZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgb2Y6IGZ1bmN0aW9uIG9mKCkge1xuXHQgICAgdmFyIEMgPSBpc0NvbnN0cnVjdG9yKHRoaXMpID8gdGhpcyA6IGdldEJ1aWx0SW4oJ09ic2VydmFibGUnKTtcblx0ICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXHQgICAgdmFyIGl0ZW1zID0gQXJyYXkobGVuZ3RoKTtcblx0ICAgIHZhciBpbmRleCA9IDA7XG5cdCAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIGl0ZW1zW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcblx0ICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuXHQgICAgICAgIGlmIChvYnNlcnZlci5jbG9zZWQpIHJldHVybjtcblx0ICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9vYnNlcnZhYmxlX29mO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X29ic2VydmFibGUpIHJldHVybiBlc25leHRfb2JzZXJ2YWJsZTtcblx0aGFzUmVxdWlyZWRFc25leHRfb2JzZXJ2YWJsZSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcblx0cmVxdWlyZUVzbmV4dF9vYnNlcnZhYmxlX2NvbnN0cnVjdG9yKCk7XG5cdHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9mcm9tKCk7XG5cdHJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZV9vZigpO1xuXHRyZXR1cm4gZXNuZXh0X29ic2VydmFibGU7XG59XG5cbnJlcXVpcmVFc25leHRfb2JzZXJ2YWJsZSgpO1xuXG52YXIgZXNuZXh0X3Byb21pc2VfdHJ5ID0ge307XG5cbnZhciBlc19wcm9taXNlX3RyeSA9IHt9O1xuXG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkTmV3UHJvbWlzZUNhcGFiaWxpdHk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVOZXdQcm9taXNlQ2FwYWJpbGl0eSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZE5ld1Byb21pc2VDYXBhYmlsaXR5KSByZXR1cm4gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG5cdGhhc1JlcXVpcmVkTmV3UHJvbWlzZUNhcGFiaWxpdHkgPSAxO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdHZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG5cdCAgdmFyIHJlc29sdmUsIHJlamVjdDtcblx0ICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuXHQgICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG5cdCAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuXHQgICAgcmVqZWN0ID0gJCRyZWplY3Q7XG5cdCAgfSk7XG5cdCAgdGhpcy5yZXNvbHZlID0gYUNhbGxhYmxlKHJlc29sdmUpO1xuXHQgIHRoaXMucmVqZWN0ID0gYUNhbGxhYmxlKHJlamVjdCk7XG5cdH07XG5cblx0Ly8gYE5ld1Byb21pc2VDYXBhYmlsaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1uZXdwcm9taXNlY2FwYWJpbGl0eVxuXHRuZXdQcm9taXNlQ2FwYWJpbGl0eS5mID0gZnVuY3Rpb24gKEMpIHtcblx0ICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xuXHR9O1xuXHRyZXR1cm4gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG59XG5cbnZhciBwZXJmb3JtO1xudmFyIGhhc1JlcXVpcmVkUGVyZm9ybTtcblxuZnVuY3Rpb24gcmVxdWlyZVBlcmZvcm0gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRQZXJmb3JtKSByZXR1cm4gcGVyZm9ybTtcblx0aGFzUmVxdWlyZWRQZXJmb3JtID0gMTtcblx0cGVyZm9ybSA9IGZ1bmN0aW9uIChleGVjKSB7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdCAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG5cdCAgfVxuXHR9O1xuXHRyZXR1cm4gcGVyZm9ybTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNfcHJvbWlzZV90cnk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc19wcm9taXNlX3RyeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzX3Byb21pc2VfdHJ5KSByZXR1cm4gZXNfcHJvbWlzZV90cnk7XG5cdGhhc1JlcXVpcmVkRXNfcHJvbWlzZV90cnkgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGFwcGx5ID0gcmVxdWlyZUZ1bmN0aW9uQXBwbHkoKTtcblx0dmFyIHNsaWNlID0gcmVxdWlyZUFycmF5U2xpY2UoKTtcblx0dmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZU5ld1Byb21pc2VDYXBhYmlsaXR5KCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBwZXJmb3JtID0gcmVxdWlyZVBlcmZvcm0oKTtcblxuXHR2YXIgUHJvbWlzZSA9IGdsb2JhbFRoaXMuUHJvbWlzZTtcblxuXHR2YXIgQUNDRVBUX0FSR1VNRU5UUyA9IGZhbHNlO1xuXHQvLyBBdm9pZGluZyB0aGUgdXNlIG9mIHBvbHlmaWxscyBvZiB0aGUgcHJldmlvdXMgaXRlcmF0aW9uIG9mIHRoaXMgcHJvcG9zYWxcblx0Ly8gdGhhdCBkb2VzIG5vdCBhY2NlcHQgYXJndW1lbnRzIG9mIHRoZSBjYWxsYmFja1xuXHR2YXIgRk9SQ0VEID0gIVByb21pc2UgfHwgIVByb21pc2VbJ3RyeSddIHx8IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuXHQgIFByb21pc2VbJ3RyeSddKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXHQgICAgQUNDRVBUX0FSR1VNRU5UUyA9IGFyZ3VtZW50ID09PSA4O1xuXHQgIH0sIDgpO1xuXHR9KS5lcnJvciB8fCAhQUNDRVBUX0FSR1VNRU5UUztcblxuXHQvLyBgUHJvbWlzZS50cnlgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UudHJ5XG5cdCQoeyB0YXJnZXQ6ICdQcm9taXNlJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuXHQgICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbiAvKiAsIC4uLmFyZ3MgKi8pIHtcblx0ICAgIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZShhcmd1bWVudHMsIDEpIDogW107XG5cdCAgICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuXHQgICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gYXBwbHkoYUNhbGxhYmxlKGNhbGxiYWNrZm4pLCB1bmRlZmluZWQsIGFyZ3MpO1xuXHQgICAgfSk7XG5cdCAgICAocmVzdWx0LmVycm9yID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnZhbHVlKTtcblx0ICAgIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc19wcm9taXNlX3RyeTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3Byb21pc2VfdHJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3Byb21pc2VfdHJ5ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3Byb21pc2VfdHJ5KSByZXR1cm4gZXNuZXh0X3Byb21pc2VfdHJ5O1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9wcm9taXNlX3RyeSA9IDE7XG5cdC8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHJlcXVpcmVFc19wcm9taXNlX3RyeSgpO1xuXHRyZXR1cm4gZXNuZXh0X3Byb21pc2VfdHJ5O1xufVxuXG5yZXF1aXJlRXNuZXh0X3Byb21pc2VfdHJ5KCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YSA9IHt9O1xuXG52YXIgcmVmbGVjdE1ldGFkYXRhO1xudmFyIGhhc1JlcXVpcmVkUmVmbGVjdE1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlUmVmbGVjdE1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUmVmbGVjdE1ldGFkYXRhKSByZXR1cm4gcmVmbGVjdE1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZFJlZmxlY3RNZXRhZGF0YSA9IDE7XG5cdC8vIFRPRE86IGluIGNvcmUtanNANCwgbW92ZSAvbW9kdWxlcy8gZGVwZW5kZW5jaWVzIHRvIHB1YmxpYyBlbnRyaWVzIGZvciBiZXR0ZXIgb3B0aW1pemF0aW9uIGJ5IHRvb2xzIGxpa2UgYHByZXNldC1lbnZgXG5cdHJlcXVpcmVFc19tYXAoKTtcblx0cmVxdWlyZUVzX3dlYWtNYXAoKTtcblx0dmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlR2V0QnVpbHRJbigpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgc2hhcmVkID0gcmVxdWlyZVNoYXJlZCgpO1xuXG5cdHZhciBNYXAgPSBnZXRCdWlsdEluKCdNYXAnKTtcblx0dmFyIFdlYWtNYXAgPSBnZXRCdWlsdEluKCdXZWFrTWFwJyk7XG5cdHZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cblx0dmFyIG1ldGFkYXRhID0gc2hhcmVkKCdtZXRhZGF0YScpO1xuXHR2YXIgc3RvcmUgPSBtZXRhZGF0YS5zdG9yZSB8fCAobWV0YWRhdGEuc3RvcmUgPSBuZXcgV2Vha01hcCgpKTtcblxuXHR2YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKSB7XG5cdCAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG5cdCAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xuXHQgICAgaWYgKCFjcmVhdGUpIHJldHVybjtcblx0ICAgIHN0b3JlLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhID0gbmV3IE1hcCgpKTtcblx0ICB9XG5cdCAgdmFyIGtleU1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KHRhcmdldEtleSk7XG5cdCAgaWYgKCFrZXlNZXRhZGF0YSkge1xuXHQgICAgaWYgKCFjcmVhdGUpIHJldHVybjtcblx0ICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhID0gbmV3IE1hcCgpKTtcblx0ICB9IHJldHVybiBrZXlNZXRhZGF0YTtcblx0fTtcblxuXHR2YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuXHQgIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xuXHR9O1xuXG5cdHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG5cdCAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG5cdCAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xuXHR9O1xuXG5cdHZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XG5cdCAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xuXHR9O1xuXG5cdHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSkge1xuXHQgIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKTtcblx0ICB2YXIga2V5cyA9IFtdO1xuXHQgIGlmIChtZXRhZGF0YU1hcCkgbWV0YWRhdGFNYXAuZm9yRWFjaChmdW5jdGlvbiAoXywga2V5KSB7IHB1c2goa2V5cywga2V5KTsgfSk7XG5cdCAgcmV0dXJuIGtleXM7XG5cdH07XG5cblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG5cdH07XG5cblx0cmVmbGVjdE1ldGFkYXRhID0ge1xuXHQgIHN0b3JlOiBzdG9yZSxcblx0ICBnZXRNYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG5cdCAgaGFzOiBvcmRpbmFyeUhhc093bk1ldGFkYXRhLFxuXHQgIGdldDogb3JkaW5hcnlHZXRPd25NZXRhZGF0YSxcblx0ICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG5cdCAga2V5czogb3JkaW5hcnlPd25NZXRhZGF0YUtleXMsXG5cdCAgdG9LZXk6IHRvTWV0YWRhdGFLZXlcblx0fTtcblx0cmV0dXJuIHJlZmxlY3RNZXRhZGF0YTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVmaW5lTWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXHR2YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5zZXQ7XG5cblx0Ly8gYFJlZmxlY3QuZGVmaW5lTWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGRlZmluZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1szXSk7XG5cdCAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9kZWZpbmVNZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2RlZmluZU1ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2RlbGV0ZU1ldGFkYXRhICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGEpIHJldHVybiBlc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YTtcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIFJlZmxlY3RNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmVSZWZsZWN0TWV0YWRhdGEoKTtcblx0dmFyIGFuT2JqZWN0ID0gcmVxdWlyZUFuT2JqZWN0KCk7XG5cblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cdHZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmdldE1hcDtcblx0dmFyIHN0b3JlID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnN0b3JlO1xuXG5cdC8vIGBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBkZWxldGVNZXRhZGF0YTogZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMl0pO1xuXHQgICAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXksIGZhbHNlKTtcblx0ICAgIGlmIChtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKSByZXR1cm4gZmFsc2U7XG5cdCAgICBpZiAobWV0YWRhdGFNYXAuc2l6ZSkgcmV0dXJuIHRydWU7XG5cdCAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcblx0ICAgIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuXHQgICAgcmV0dXJuICEhdGFyZ2V0TWV0YWRhdGEuc2l6ZSB8fCBzdG9yZVsnZGVsZXRlJ10odGFyZ2V0KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZGVsZXRlTWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9kZWxldGVNZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YoKTtcblxuXHR2YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5oYXM7XG5cdHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmdldDtcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0dmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcblx0ICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG5cdCAgaWYgKGhhc093bikgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHQvLyBgUmVmbGVjdC5nZXRNZXRhZGF0YWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYnVja3Rvbi9yZWZsZWN0LW1ldGFkYXRhXG5cdCQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG5cdCAgZ2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcblx0ICAgIHZhciB0YXJnZXRLZXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YWRhdGFLZXkoYXJndW1lbnRzWzJdKTtcblx0ICAgIHJldHVybiBvcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXkpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YTtcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhKCk7XG5cbnZhciBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXMgPSB7fTtcblxudmFyIGFycmF5VW5pcXVlQnk7XG52YXIgaGFzUmVxdWlyZWRBcnJheVVuaXF1ZUJ5O1xuXG5mdW5jdGlvbiByZXF1aXJlQXJyYXlVbmlxdWVCeSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEFycmF5VW5pcXVlQnkpIHJldHVybiBhcnJheVVuaXF1ZUJ5O1xuXHRoYXNSZXF1aXJlZEFycmF5VW5pcXVlQnkgPSAxO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlSXNOdWxsT3JVbmRlZmluZWQoKTtcblx0dmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZUxlbmd0aE9mQXJyYXlMaWtlKCk7XG5cdHZhciB0b09iamVjdCA9IHJlcXVpcmVUb09iamVjdCgpO1xuXHR2YXIgTWFwSGVscGVycyA9IHJlcXVpcmVNYXBIZWxwZXJzKCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZU1hcEl0ZXJhdGUoKTtcblxuXHR2YXIgTWFwID0gTWFwSGVscGVycy5NYXA7XG5cdHZhciBtYXBIYXMgPSBNYXBIZWxwZXJzLmhhcztcblx0dmFyIG1hcFNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXHR2YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5cdC8vIGBBcnJheS5wcm90b3R5cGUudW5pcXVlQnlgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS11bmlxdWVcblx0YXJyYXlVbmlxdWVCeSA9IGZ1bmN0aW9uIHVuaXF1ZUJ5KHJlc29sdmVyKSB7XG5cdCAgdmFyIHRoYXQgPSB0b09iamVjdCh0aGlzKTtcblx0ICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UodGhhdCk7XG5cdCAgdmFyIHJlc3VsdCA9IFtdO1xuXHQgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG5cdCAgdmFyIHJlc29sdmVyRnVuY3Rpb24gPSAhaXNOdWxsT3JVbmRlZmluZWQocmVzb2x2ZXIpID8gYUNhbGxhYmxlKHJlc29sdmVyKSA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIHZhbHVlO1xuXHQgIH07XG5cdCAgdmFyIGluZGV4LCBpdGVtLCBrZXk7XG5cdCAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG5cdCAgICBpdGVtID0gdGhhdFtpbmRleF07XG5cdCAgICBrZXkgPSByZXNvbHZlckZ1bmN0aW9uKGl0ZW0pO1xuXHQgICAgaWYgKCFtYXBIYXMobWFwLCBrZXkpKSBtYXBTZXQobWFwLCBrZXksIGl0ZW0pO1xuXHQgIH1cblx0ICBpdGVyYXRlKG1hcCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICBwdXNoKHJlc3VsdCwgdmFsdWUpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBhcnJheVVuaXF1ZUJ5O1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXMpIHJldHVybiBlc25leHRfcmVmbGVjdF9nZXRNZXRhZGF0YUtleXM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0TWV0YWRhdGFLZXlzID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlRnVuY3Rpb25VbmN1cnJ5VGhpcygpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZU9iamVjdEdldFByb3RvdHlwZU9mKCk7XG5cdHZhciAkYXJyYXlVbmlxdWVCeSA9IHJlcXVpcmVBcnJheVVuaXF1ZUJ5KCk7XG5cblx0dmFyIGFycmF5VW5pcXVlQnkgPSB1bmN1cnJ5VGhpcygkYXJyYXlVbmlxdWVCeSk7XG5cdHZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXHR2YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUua2V5cztcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0dmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24gKE8sIFApIHtcblx0ICB2YXIgb0tleXMgPSBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcblx0ICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG5cdCAgaWYgKHBhcmVudCA9PT0gbnVsbCkgcmV0dXJuIG9LZXlzO1xuXHQgIHZhciBwS2V5cyA9IG9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG5cdCAgcmV0dXJuIHBLZXlzLmxlbmd0aCA/IG9LZXlzLmxlbmd0aCA/IGFycmF5VW5pcXVlQnkoY29uY2F0KG9LZXlzLCBwS2V5cykpIDogcEtleXMgOiBvS2V5cztcblx0fTtcblxuXHQvLyBgUmVmbGVjdC5nZXRNZXRhZGF0YUtleXNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGdldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMV0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cztcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE1ldGFkYXRhS2V5cygpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLmdldDtcblx0dmFyIHRvTWV0YWRhdGFLZXkgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUudG9LZXk7XG5cblx0Ly8gYFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGdldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG5cdCAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFkYXRhS2V5KGFyZ3VtZW50c1syXSk7XG5cdCAgICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5KTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGE7XG59XG5cbnJlcXVpcmVFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YSgpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfZ2V0T3duTWV0YWRhdGFLZXlzID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cztcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cykgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cztcblx0aGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9nZXRPd25NZXRhZGF0YUtleXMgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXG5cdHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5rZXlzO1xuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblxuXHQvLyBgUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcmJ1Y2t0b24vcmVmbGVjdC1tZXRhZGF0YVxuXHQkKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUgfSwge1xuXHQgIGdldE93bk1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMV0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cztcbn1cblxucmVxdWlyZUVzbmV4dF9yZWZsZWN0X2dldE93bk1ldGFkYXRhS2V5cygpO1xuXG52YXIgZXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGEgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGE7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfcmVmbGVjdF9oYXNNZXRhZGF0YSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhKSByZXR1cm4gZXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGE7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGEgPSAxO1xuXHQvLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBSZWZsZWN0TWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlUmVmbGVjdE1ldGFkYXRhKCk7XG5cdHZhciBhbk9iamVjdCA9IHJlcXVpcmVBbk9iamVjdCgpO1xuXHR2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlT2JqZWN0R2V0UHJvdG90eXBlT2YoKTtcblxuXHR2YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5oYXM7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdHZhciBvcmRpbmFyeUhhc01ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG5cdCAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuXHQgIGlmIChoYXNPd24pIHJldHVybiB0cnVlO1xuXHQgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcblx0ICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xuXHR9O1xuXG5cdC8vIGBSZWZsZWN0Lmhhc01ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMl0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2hhc01ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfaGFzTWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9oYXNPd25NZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS5oYXM7XG5cdHZhciB0b01ldGFkYXRhS2V5ID0gUmVmbGVjdE1ldGFkYXRhTW9kdWxlLnRvS2V5O1xuXG5cdC8vIGBSZWZsZWN0Lmhhc093bk1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuXHQgICAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhZGF0YUtleShhcmd1bWVudHNbMl0pO1xuXHQgICAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X2hhc093bk1ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfaGFzT3duTWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9yZWZsZWN0X21ldGFkYXRhID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X21ldGFkYXRhO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3JlZmxlY3RfbWV0YWRhdGEgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfcmVmbGVjdF9tZXRhZGF0YSkgcmV0dXJuIGVzbmV4dF9yZWZsZWN0X21ldGFkYXRhO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9yZWZsZWN0X21ldGFkYXRhID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgUmVmbGVjdE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZVJlZmxlY3RNZXRhZGF0YSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblxuXHR2YXIgdG9NZXRhZGF0YUtleSA9IFJlZmxlY3RNZXRhZGF0YU1vZHVsZS50b0tleTtcblx0dmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBSZWZsZWN0TWV0YWRhdGFNb2R1bGUuc2V0O1xuXG5cdC8vIGBSZWZsZWN0Lm1ldGFkYXRhYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3JidWNrdG9uL3JlZmxlY3QtbWV0YWRhdGFcblx0JCh7IHRhcmdldDogJ1JlZmxlY3QnLCBzdGF0OiB0cnVlIH0sIHtcblx0ICBtZXRhZGF0YTogZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcblx0ICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBrZXkpIHtcblx0ICAgICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdG9NZXRhZGF0YUtleShrZXkpKTtcblx0ICAgIH07XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9yZWZsZWN0X21ldGFkYXRhO1xufVxuXG5yZXF1aXJlRXNuZXh0X3JlZmxlY3RfbWV0YWRhdGEoKTtcblxudmFyIGVzbmV4dF9zZXRfYWRkQWxsID0ge307XG5cbnZhciBzZXRIZWxwZXJzO1xudmFyIGhhc1JlcXVpcmVkU2V0SGVscGVycztcblxuZnVuY3Rpb24gcmVxdWlyZVNldEhlbHBlcnMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRIZWxwZXJzKSByZXR1cm4gc2V0SGVscGVycztcblx0aGFzUmVxdWlyZWRTZXRIZWxwZXJzID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc2V0IC0tIHNhZmVcblx0dmFyIFNldFByb3RvdHlwZSA9IFNldC5wcm90b3R5cGU7XG5cblx0c2V0SGVscGVycyA9IHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc2V0IC0tIHNhZmVcblx0ICBTZXQ6IFNldCxcblx0ICBhZGQ6IHVuY3VycnlUaGlzKFNldFByb3RvdHlwZS5hZGQpLFxuXHQgIGhhczogdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmhhcyksXG5cdCAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGVbJ2RlbGV0ZSddKSxcblx0ICBwcm90bzogU2V0UHJvdG90eXBlXG5cdH07XG5cdHJldHVybiBzZXRIZWxwZXJzO1xufVxuXG52YXIgYVNldDtcbnZhciBoYXNSZXF1aXJlZEFTZXQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBU2V0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQVNldCkgcmV0dXJuIGFTZXQ7XG5cdGhhc1JlcXVpcmVkQVNldCA9IDE7XG5cdHZhciBoYXMgPSByZXF1aXJlU2V0SGVscGVycygpLmhhcztcblxuXHQvLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW1NldERhdGFdXSlcblx0YVNldCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGhhcyhpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHRyZXR1cm4gYVNldDtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9hZGRBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2FkZEFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfYWRkQWxsKSByZXR1cm4gZXNuZXh0X3NldF9hZGRBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9hZGRBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGFkZCA9IHJlcXVpcmVTZXRIZWxwZXJzKCkuYWRkO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmFkZEFsbGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgYWRkQWxsOiBmdW5jdGlvbiBhZGRBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICBhZGQoc2V0LCBhcmd1bWVudHNba10pO1xuXHQgICAgfSByZXR1cm4gc2V0O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2FkZEFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfYWRkQWxsKCk7XG5cbnZhciBlc25leHRfc2V0X2RlbGV0ZUFsbCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2RlbGV0ZUFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZGVsZXRlQWxsICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9kZWxldGVBbGwpIHJldHVybiBlc25leHRfc2V0X2RlbGV0ZUFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2RlbGV0ZUFsbCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgcmVtb3ZlID0gcmVxdWlyZVNldEhlbHBlcnMoKS5yZW1vdmU7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZGVsZXRlQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkZWxldGVBbGw6IGZ1bmN0aW9uIGRlbGV0ZUFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIGNvbGxlY3Rpb24gPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGFsbERlbGV0ZWQgPSB0cnVlO1xuXHQgICAgdmFyIHdhc0RlbGV0ZWQ7XG5cdCAgICBmb3IgKHZhciBrID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG5cdCAgICAgIHdhc0RlbGV0ZWQgPSByZW1vdmUoY29sbGVjdGlvbiwgYXJndW1lbnRzW2tdKTtcblx0ICAgICAgYWxsRGVsZXRlZCA9IGFsbERlbGV0ZWQgJiYgd2FzRGVsZXRlZDtcblx0ICAgIH0gcmV0dXJuICEhYWxsRGVsZXRlZDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9kZWxldGVBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2RlbGV0ZUFsbCgpO1xuXG52YXIgZXNuZXh0X3NldF9kaWZmZXJlbmNlID0ge307XG5cbnZhciBpc0l0ZXJhYmxlO1xudmFyIGhhc1JlcXVpcmVkSXNJdGVyYWJsZTtcblxuZnVuY3Rpb24gcmVxdWlyZUlzSXRlcmFibGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRJc0l0ZXJhYmxlKSByZXR1cm4gaXNJdGVyYWJsZTtcblx0aGFzUmVxdWlyZWRJc0l0ZXJhYmxlID0gMTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZigpO1xuXHR2YXIgaGFzT3duID0gcmVxdWlyZUhhc093blByb3BlcnR5KCk7XG5cdHZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmVJc051bGxPclVuZGVmaW5lZCgpO1xuXHR2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbCgpO1xuXHR2YXIgSXRlcmF0b3JzID0gcmVxdWlyZUl0ZXJhdG9ycygpO1xuXG5cdHZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblx0dmFyICRPYmplY3QgPSBPYmplY3Q7XG5cblx0aXNJdGVyYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBmYWxzZTtcblx0ICB2YXIgTyA9ICRPYmplY3QoaXQpO1xuXHQgIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG5cdCAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuXHQgICAgfHwgaGFzT3duKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XG5cdH07XG5cdHJldHVybiBpc0l0ZXJhYmxlO1xufVxuXG52YXIgdG9TZXRMaWtlO1xudmFyIGhhc1JlcXVpcmVkVG9TZXRMaWtlO1xuXG5mdW5jdGlvbiByZXF1aXJlVG9TZXRMaWtlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVG9TZXRMaWtlKSByZXR1cm4gdG9TZXRMaWtlO1xuXHRoYXNSZXF1aXJlZFRvU2V0TGlrZSA9IDE7XG5cdHZhciBnZXRCdWlsdEluID0gcmVxdWlyZUdldEJ1aWx0SW4oKTtcblx0dmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlSXNDYWxsYWJsZSgpO1xuXHR2YXIgaXNJdGVyYWJsZSA9IHJlcXVpcmVJc0l0ZXJhYmxlKCk7XG5cdHZhciBpc09iamVjdCA9IHJlcXVpcmVJc09iamVjdCgpO1xuXG5cdHZhciBTZXQgPSBnZXRCdWlsdEluKCdTZXQnKTtcblxuXHR2YXIgaXNTZXRMaWtlID0gZnVuY3Rpb24gKGl0KSB7XG5cdCAgcmV0dXJuIGlzT2JqZWN0KGl0KVxuXHQgICAgJiYgdHlwZW9mIGl0LnNpemUgPT0gJ251bWJlcidcblx0ICAgICYmIGlzQ2FsbGFibGUoaXQuaGFzKVxuXHQgICAgJiYgaXNDYWxsYWJsZShpdC5rZXlzKTtcblx0fTtcblxuXHQvLyBmYWxsYmFjayBvbGQgLT4gbmV3IHNldCBtZXRob2RzIHByb3Bvc2FsIGFyZ3VtZW50c1xuXHR0b1NldExpa2UgPSBmdW5jdGlvbiAoaXQpIHtcblx0ICBpZiAoaXNTZXRMaWtlKGl0KSkgcmV0dXJuIGl0O1xuXHQgIHJldHVybiBpc0l0ZXJhYmxlKGl0KSA/IG5ldyBTZXQoaXQpIDogaXQ7XG5cdH07XG5cdHJldHVybiB0b1NldExpa2U7XG59XG5cbnZhciBzZXRJdGVyYXRlO1xudmFyIGhhc1JlcXVpcmVkU2V0SXRlcmF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldEl0ZXJhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRJdGVyYXRlKSByZXR1cm4gc2V0SXRlcmF0ZTtcblx0aGFzUmVxdWlyZWRTZXRJdGVyYXRlID0gMTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cblx0dmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xuXHR2YXIgU2V0UHJvdG90eXBlID0gU2V0SGVscGVycy5wcm90bztcblx0dmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuZm9yRWFjaCk7XG5cdHZhciBrZXlzID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmtleXMpO1xuXHR2YXIgbmV4dCA9IGtleXMobmV3IFNldCgpKS5uZXh0O1xuXG5cdHNldEl0ZXJhdGUgPSBmdW5jdGlvbiAoc2V0LCBmbiwgaW50ZXJydXB0aWJsZSkge1xuXHQgIHJldHVybiBpbnRlcnJ1cHRpYmxlID8gaXRlcmF0ZVNpbXBsZSh7IGl0ZXJhdG9yOiBrZXlzKHNldCksIG5leHQ6IG5leHQgfSwgZm4pIDogZm9yRWFjaChzZXQsIGZuKTtcblx0fTtcblx0cmV0dXJuIHNldEl0ZXJhdGU7XG59XG5cbnZhciBzZXRDbG9uZTtcbnZhciBoYXNSZXF1aXJlZFNldENsb25lO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0Q2xvbmUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRDbG9uZSkgcmV0dXJuIHNldENsb25lO1xuXHRoYXNSZXF1aXJlZFNldENsb25lID0gMTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0dmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xuXHR2YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cblx0c2V0Q2xvbmUgPSBmdW5jdGlvbiAoc2V0KSB7XG5cdCAgdmFyIHJlc3VsdCA9IG5ldyBTZXQoKTtcblx0ICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKGl0KSB7XG5cdCAgICBhZGQocmVzdWx0LCBpdCk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHNldENsb25lO1xufVxuXG52YXIgc2V0U2l6ZTtcbnZhciBoYXNSZXF1aXJlZFNldFNpemU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRTaXplICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0U2l6ZSkgcmV0dXJuIHNldFNpemU7XG5cdGhhc1JlcXVpcmVkU2V0U2l6ZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpc0FjY2Vzc29yID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXNBY2Nlc3NvcigpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cblx0c2V0U2l6ZSA9IHVuY3VycnlUaGlzQWNjZXNzb3IoU2V0SGVscGVycy5wcm90bywgJ3NpemUnLCAnZ2V0JykgfHwgZnVuY3Rpb24gKHNldCkge1xuXHQgIHJldHVybiBzZXQuc2l6ZTtcblx0fTtcblx0cmV0dXJuIHNldFNpemU7XG59XG5cbnZhciBnZXRJdGVyYXRvckRpcmVjdDtcbnZhciBoYXNSZXF1aXJlZEdldEl0ZXJhdG9yRGlyZWN0O1xuXG5mdW5jdGlvbiByZXF1aXJlR2V0SXRlcmF0b3JEaXJlY3QgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRHZXRJdGVyYXRvckRpcmVjdCkgcmV0dXJuIGdldEl0ZXJhdG9yRGlyZWN0O1xuXHRoYXNSZXF1aXJlZEdldEl0ZXJhdG9yRGlyZWN0ID0gMTtcblx0Ly8gYEdldEl0ZXJhdG9yRGlyZWN0KG9iailgIGFic3RyYWN0IG9wZXJhdGlvblxuXHQvLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtaXRlcmF0b3ItaGVscGVycy8jc2VjLWdldGl0ZXJhdG9yZGlyZWN0XG5cdGdldEl0ZXJhdG9yRGlyZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIHJldHVybiB7XG5cdCAgICBpdGVyYXRvcjogb2JqLFxuXHQgICAgbmV4dDogb2JqLm5leHQsXG5cdCAgICBkb25lOiBmYWxzZVxuXHQgIH07XG5cdH07XG5cdHJldHVybiBnZXRJdGVyYXRvckRpcmVjdDtcbn1cblxudmFyIGdldFNldFJlY29yZDtcbnZhciBoYXNSZXF1aXJlZEdldFNldFJlY29yZDtcblxuZnVuY3Rpb24gcmVxdWlyZUdldFNldFJlY29yZCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEdldFNldFJlY29yZCkgcmV0dXJuIGdldFNldFJlY29yZDtcblx0aGFzUmVxdWlyZWRHZXRTZXRSZWNvcmQgPSAxO1xuXHR2YXIgYUNhbGxhYmxlID0gcmVxdWlyZUFDYWxsYWJsZSgpO1xuXHR2YXIgYW5PYmplY3QgPSByZXF1aXJlQW5PYmplY3QoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblx0dmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZUdldEl0ZXJhdG9yRGlyZWN0KCk7XG5cblx0dmFyIElOVkFMSURfU0laRSA9ICdJbnZhbGlkIHNpemUnO1xuXHR2YXIgJFJhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xuXHR2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblx0dmFyIG1heCA9IE1hdGgubWF4O1xuXG5cdHZhciBTZXRSZWNvcmQgPSBmdW5jdGlvbiAoc2V0LCBpbnRTaXplKSB7XG5cdCAgdGhpcy5zZXQgPSBzZXQ7XG5cdCAgdGhpcy5zaXplID0gbWF4KGludFNpemUsIDApO1xuXHQgIHRoaXMuaGFzID0gYUNhbGxhYmxlKHNldC5oYXMpO1xuXHQgIHRoaXMua2V5cyA9IGFDYWxsYWJsZShzZXQua2V5cyk7XG5cdH07XG5cblx0U2V0UmVjb3JkLnByb3RvdHlwZSA9IHtcblx0ICBnZXRJdGVyYXRvcjogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGdldEl0ZXJhdG9yRGlyZWN0KGFuT2JqZWN0KGNhbGwodGhpcy5rZXlzLCB0aGlzLnNldCkpKTtcblx0ICB9LFxuXHQgIGluY2x1ZGVzOiBmdW5jdGlvbiAoaXQpIHtcblx0ICAgIHJldHVybiBjYWxsKHRoaXMuaGFzLCB0aGlzLnNldCwgaXQpO1xuXHQgIH1cblx0fTtcblxuXHQvLyBgR2V0U2V0UmVjb3JkYCBhYnN0cmFjdCBvcGVyYXRpb25cblx0Ly8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNzZWMtZ2V0c2V0cmVjb3JkXG5cdGdldFNldFJlY29yZCA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICBhbk9iamVjdChvYmopO1xuXHQgIHZhciBudW1TaXplID0gK29iai5zaXplO1xuXHQgIC8vIE5PVEU6IElmIHNpemUgaXMgdW5kZWZpbmVkLCB0aGVuIG51bVNpemUgd2lsbCBiZSBOYU5cblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuXHQgIGlmIChudW1TaXplICE9PSBudW1TaXplKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihJTlZBTElEX1NJWkUpO1xuXHQgIHZhciBpbnRTaXplID0gdG9JbnRlZ2VyT3JJbmZpbml0eShudW1TaXplKTtcblx0ICBpZiAoaW50U2l6ZSA8IDApIHRocm93IG5ldyAkUmFuZ2VFcnJvcihJTlZBTElEX1NJWkUpO1xuXHQgIHJldHVybiBuZXcgU2V0UmVjb3JkKG9iaiwgaW50U2l6ZSk7XG5cdH07XG5cdHJldHVybiBnZXRTZXRSZWNvcmQ7XG59XG5cbnZhciBzZXREaWZmZXJlbmNlO1xudmFyIGhhc1JlcXVpcmVkU2V0RGlmZmVyZW5jZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldERpZmZlcmVuY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXREaWZmZXJlbmNlKSByZXR1cm4gc2V0RGlmZmVyZW5jZTtcblx0aGFzUmVxdWlyZWRTZXREaWZmZXJlbmNlID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBjbG9uZSA9IHJlcXVpcmVTZXRDbG9uZSgpO1xuXHR2YXIgc2l6ZSA9IHJlcXVpcmVTZXRTaXplKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXG5cdHZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcblx0dmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmRpZmZlcmVuY2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHRzZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gZGlmZmVyZW5jZShvdGhlcikge1xuXHQgIHZhciBPID0gYVNldCh0aGlzKTtcblx0ICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuXHQgIHZhciByZXN1bHQgPSBjbG9uZShPKTtcblx0ICBpZiAoc2l6ZShPKSA8PSBvdGhlclJlYy5zaXplKSBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG5cdCAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuXHQgIH0pO1xuXHQgIGVsc2UgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGhhcyhPLCBlKSkgcmVtb3ZlKHJlc3VsdCwgZSk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHNldERpZmZlcmVuY2U7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGlmZmVyZW5jZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZGlmZmVyZW5jZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZGlmZmVyZW5jZSkgcmV0dXJuIGVzbmV4dF9zZXRfZGlmZmVyZW5jZTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2RpZmZlcmVuY2UgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJGRpZmZlcmVuY2UgPSByZXF1aXJlU2V0RGlmZmVyZW5jZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmRpZmZlcmVuY2VgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGlmZmVyZW5jZTogZnVuY3Rpb24gZGlmZmVyZW5jZShvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJGRpZmZlcmVuY2UsIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2RpZmZlcmVuY2U7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2RpZmZlcmVuY2UoKTtcblxudmFyIGVzbmV4dF9zZXRfZXZlcnkgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9ldmVyeTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfZXZlcnkgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2V2ZXJ5KSByZXR1cm4gZXNuZXh0X3NldF9ldmVyeTtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2V2ZXJ5ID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHJldHVybiBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmICghYm91bmRGdW5jdGlvbih2YWx1ZSwgdmFsdWUsIHNldCkpIHJldHVybiBmYWxzZTtcblx0ICAgIH0sIHRydWUpICE9PSBmYWxzZTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9ldmVyeTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfZXZlcnkoKTtcblxudmFyIGVzbmV4dF9zZXRfZmlsdGVyID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmlsdGVyO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9maWx0ZXIgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbHRlcikgcmV0dXJuIGVzbmV4dF9zZXRfZmlsdGVyO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfZmlsdGVyID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cblx0dmFyIFNldCA9IFNldEhlbHBlcnMuU2V0O1xuXHR2YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuXHQgICAgdmFyIG5ld1NldCA9IG5ldyBTZXQoKTtcblx0ICAgIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKGJvdW5kRnVuY3Rpb24odmFsdWUsIHZhbHVlLCBzZXQpKSBhZGQobmV3U2V0LCB2YWx1ZSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiBuZXdTZXQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfZmlsdGVyO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9maWx0ZXIoKTtcblxudmFyIGVzbmV4dF9zZXRfZmluZCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbmQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2ZpbmQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2ZpbmQpIHJldHVybiBlc25leHRfc2V0X2ZpbmQ7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9maW5kID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYmluZCA9IHJlcXVpcmVGdW5jdGlvbkJpbmRDb250ZXh0KCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciByZXN1bHQgPSBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmIChib3VuZEZ1bmN0aW9uKHZhbHVlLCB2YWx1ZSwgc2V0KSkgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG5cdCAgICB9LCB0cnVlKTtcblx0ICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LnZhbHVlO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2ZpbmQ7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2ZpbmQoKTtcblxudmFyIGVzbmV4dF9zZXRfZnJvbSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2Zyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2Zyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2Zyb20pIHJldHVybiBlc25leHRfc2V0X2Zyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9mcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBjcmVhdGVDb2xsZWN0aW9uRnJvbSA9IHJlcXVpcmVDb2xsZWN0aW9uRnJvbSgpO1xuXG5cdC8vIGBTZXQuZnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGZyb206IGNyZWF0ZUNvbGxlY3Rpb25Gcm9tKFNldEhlbHBlcnMuU2V0LCBTZXRIZWxwZXJzLmFkZCwgZmFsc2UpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9mcm9tO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9mcm9tKCk7XG5cbnZhciBlc25leHRfc2V0X2ludGVyc2VjdGlvbiA9IHt9O1xuXG52YXIgc2V0SW50ZXJzZWN0aW9uO1xudmFyIGhhc1JlcXVpcmVkU2V0SW50ZXJzZWN0aW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SW50ZXJzZWN0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU2V0SW50ZXJzZWN0aW9uKSByZXR1cm4gc2V0SW50ZXJzZWN0aW9uO1xuXHRoYXNSZXF1aXJlZFNldEludGVyc2VjdGlvbiA9IDE7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIFNldEhlbHBlcnMgPSByZXF1aXJlU2V0SGVscGVycygpO1xuXHR2YXIgc2l6ZSA9IHJlcXVpcmVTZXRTaXplKCk7XG5cdHZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlR2V0U2V0UmVjb3JkKCk7XG5cdHZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXG5cdHZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcblx0dmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xuXHR2YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0c2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG5cdCAgdmFyIHJlc3VsdCA9IG5ldyBTZXQoKTtcblxuXHQgIGlmIChzaXplKE8pID4gb3RoZXJSZWMuc2l6ZSkge1xuXHQgICAgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICBpZiAoaGFzKE8sIGUpKSBhZGQocmVzdWx0LCBlKTtcblx0ICAgIH0pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgYWRkKHJlc3VsdCwgZSk7XG5cdCAgICB9KTtcblx0ICB9XG5cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRyZXR1cm4gc2V0SW50ZXJzZWN0aW9uO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X2ludGVyc2VjdGlvbjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pbnRlcnNlY3Rpb24pIHJldHVybiBlc25leHRfc2V0X2ludGVyc2VjdGlvbjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2ludGVyc2VjdGlvbiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkaW50ZXJzZWN0aW9uID0gcmVxdWlyZVNldEludGVyc2VjdGlvbigpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpbnRlcnNlY3Rpb246IGZ1bmN0aW9uIGludGVyc2VjdGlvbihvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJGludGVyc2VjdGlvbiwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfaW50ZXJzZWN0aW9uO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9pbnRlcnNlY3Rpb24oKTtcblxudmFyIGVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb20gPSB7fTtcblxudmFyIHNldElzRGlzam9pbnRGcm9tO1xudmFyIGhhc1JlcXVpcmVkU2V0SXNEaXNqb2ludEZyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRJc0Rpc2pvaW50RnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldElzRGlzam9pbnRGcm9tKSByZXR1cm4gc2V0SXNEaXNqb2ludEZyb207XG5cdGhhc1JlcXVpcmVkU2V0SXNEaXNqb2ludEZyb20gPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBoYXMgPSByZXF1aXJlU2V0SGVscGVycygpLmhhcztcblx0dmFyIHNpemUgPSByZXF1aXJlU2V0U2l6ZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cdHZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZUl0ZXJhdGVTaW1wbGUoKTtcblx0dmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlSXRlcmF0b3JDbG9zZSgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbVxuXHRzZXRJc0Rpc2pvaW50RnJvbSA9IGZ1bmN0aW9uIGlzRGlzam9pbnRGcm9tKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG5cdCAgaWYgKHNpemUoTykgPD0gb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgcmV0dXJuIGZhbHNlO1xuXHQgIH0sIHRydWUpICE9PSBmYWxzZTtcblx0ICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuXHQgIHJldHVybiBpdGVyYXRlU2ltcGxlKGl0ZXJhdG9yLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG5cdCAgfSkgIT09IGZhbHNlO1xuXHR9O1xuXHRyZXR1cm4gc2V0SXNEaXNqb2ludEZyb207XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb207XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X2lzRGlzam9pbnRGcm9tICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbSkgcmV0dXJuIGVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb207XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9pc0Rpc2pvaW50RnJvbSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGNhbGwgPSByZXF1aXJlRnVuY3Rpb25DYWxsKCk7XG5cdHZhciB0b1NldExpa2UgPSByZXF1aXJlVG9TZXRMaWtlKCk7XG5cdHZhciAkaXNEaXNqb2ludEZyb20gPSByZXF1aXJlU2V0SXNEaXNqb2ludEZyb20oKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5cdC8vIFRPRE86IE9ic29sZXRlIHZlcnNpb24sIHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBpc0Rpc2pvaW50RnJvbTogZnVuY3Rpb24gaXNEaXNqb2ludEZyb20ob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRpc0Rpc2pvaW50RnJvbSwgdGhpcywgdG9TZXRMaWtlKG90aGVyKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfaXNEaXNqb2ludEZyb207XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2lzRGlzam9pbnRGcm9tKCk7XG5cbnZhciBlc25leHRfc2V0X2lzU3Vic2V0T2YgPSB7fTtcblxudmFyIHNldElzU3Vic2V0T2Y7XG52YXIgaGFzUmVxdWlyZWRTZXRJc1N1YnNldE9mO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0SXNTdWJzZXRPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNldElzU3Vic2V0T2YpIHJldHVybiBzZXRJc1N1YnNldE9mO1xuXHRoYXNSZXF1aXJlZFNldElzU3Vic2V0T2YgPSAxO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBzaXplID0gcmVxdWlyZVNldFNpemUoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzU3Vic2V0T2Zcblx0c2V0SXNTdWJzZXRPZiA9IGZ1bmN0aW9uIGlzU3Vic2V0T2Yob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcblx0ICBpZiAoc2l6ZShPKSA+IG90aGVyUmVjLnNpemUpIHJldHVybiBmYWxzZTtcblx0ICByZXR1cm4gaXRlcmF0ZShPLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKCFvdGhlclJlYy5pbmNsdWRlcyhlKSkgcmV0dXJuIGZhbHNlO1xuXHQgIH0sIHRydWUpICE9PSBmYWxzZTtcblx0fTtcblx0cmV0dXJuIHNldElzU3Vic2V0T2Y7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdWJzZXRPZjtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfaXNTdWJzZXRPZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdWJzZXRPZikgcmV0dXJuIGVzbmV4dF9zZXRfaXNTdWJzZXRPZjtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3Vic2V0T2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJGlzU3Vic2V0T2YgPSByZXF1aXJlU2V0SXNTdWJzZXRPZigpO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgaXNTdWJzZXRPZjogZnVuY3Rpb24gaXNTdWJzZXRPZihvdGhlcikge1xuXHQgICAgcmV0dXJuIGNhbGwoJGlzU3Vic2V0T2YsIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X2lzU3Vic2V0T2Y7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2lzU3Vic2V0T2YoKTtcblxudmFyIGVzbmV4dF9zZXRfaXNTdXBlcnNldE9mID0ge307XG5cbnZhciBzZXRJc1N1cGVyc2V0T2Y7XG52YXIgaGFzUmVxdWlyZWRTZXRJc1N1cGVyc2V0T2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVTZXRJc1N1cGVyc2V0T2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRJc1N1cGVyc2V0T2YpIHJldHVybiBzZXRJc1N1cGVyc2V0T2Y7XG5cdGhhc1JlcXVpcmVkU2V0SXNTdXBlcnNldE9mID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaGFzID0gcmVxdWlyZVNldEhlbHBlcnMoKS5oYXM7XG5cdHZhciBzaXplID0gcmVxdWlyZVNldFNpemUoKTtcblx0dmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmVHZXRTZXRSZWNvcmQoKTtcblx0dmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlSXRlcmF0ZVNpbXBsZSgpO1xuXHR2YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmVJdGVyYXRvckNsb3NlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2Zcblx0c2V0SXNTdXBlcnNldE9mID0gZnVuY3Rpb24gaXNTdXBlcnNldE9mKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG5cdCAgaWYgKHNpemUoTykgPCBvdGhlclJlYy5zaXplKSByZXR1cm4gZmFsc2U7XG5cdCAgdmFyIGl0ZXJhdG9yID0gb3RoZXJSZWMuZ2V0SXRlcmF0b3IoKTtcblx0ICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcblx0ICAgIGlmICghaGFzKE8sIGUpKSByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGZhbHNlKTtcblx0ICB9KSAhPT0gZmFsc2U7XG5cdH07XG5cdHJldHVybiBzZXRJc1N1cGVyc2V0T2Y7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdXBlcnNldE9mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9pc1N1cGVyc2V0T2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X2lzU3VwZXJzZXRPZikgcmV0dXJuIGVzbmV4dF9zZXRfaXNTdXBlcnNldE9mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfaXNTdXBlcnNldE9mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRpc1N1cGVyc2V0T2YgPSByZXF1aXJlU2V0SXNTdXBlcnNldE9mKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGlzU3VwZXJzZXRPZjogZnVuY3Rpb24gaXNTdXBlcnNldE9mKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkaXNTdXBlcnNldE9mLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9pc1N1cGVyc2V0T2Y7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X2lzU3VwZXJzZXRPZigpO1xuXG52YXIgZXNuZXh0X3NldF9qb2luID0ge307XG5cbnZhciB0b1N0cmluZztcbnZhciBoYXNSZXF1aXJlZFRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXF1aXJlVG9TdHJpbmcgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRUb1N0cmluZykgcmV0dXJuIHRvU3RyaW5nO1xuXHRoYXNSZXF1aXJlZFRvU3RyaW5nID0gMTtcblx0dmFyIGNsYXNzb2YgPSByZXF1aXJlQ2xhc3NvZigpO1xuXG5cdHZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5cdHRvU3RyaW5nID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdCAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0ICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG5cdH07XG5cdHJldHVybiB0b1N0cmluZztcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9qb2luO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9qb2luICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9qb2luKSByZXR1cm4gZXNuZXh0X3NldF9qb2luO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfam9pbiA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZUZ1bmN0aW9uVW5jdXJyeVRoaXMoKTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgaXRlcmF0ZSA9IHJlcXVpcmVTZXRJdGVyYXRlKCk7XG5cdHZhciB0b1N0cmluZyA9IHJlcXVpcmVUb1N0cmluZygpO1xuXG5cdHZhciBhcnJheUpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblx0dmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgc2VwID0gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiB0b1N0cmluZyhzZXBhcmF0b3IpO1xuXHQgICAgdmFyIGFycmF5ID0gW107XG5cdCAgICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIHB1c2goYXJyYXksIHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIGFycmF5Sm9pbihhcnJheSwgc2VwKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9qb2luO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9qb2luKCk7XG5cbnZhciBlc25leHRfc2V0X21hcCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X21hcDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zZXRfbWFwICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9tYXApIHJldHVybiBlc25leHRfc2V0X21hcDtcblx0aGFzUmVxdWlyZWRFc25leHRfc2V0X21hcCA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdHZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcblx0dmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLm1hcGAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcblx0ICAgIHZhciBzZXQgPSBhU2V0KHRoaXMpO1xuXHQgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcblx0ICAgIHZhciBuZXdTZXQgPSBuZXcgU2V0KCk7XG5cdCAgICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGFkZChuZXdTZXQsIGJvdW5kRnVuY3Rpb24odmFsdWUsIHZhbHVlLCBzZXQpKTtcblx0ICAgIH0pO1xuXHQgICAgcmV0dXJuIG5ld1NldDtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9tYXA7XG59XG5cbnJlcXVpcmVFc25leHRfc2V0X21hcCgpO1xuXG52YXIgZXNuZXh0X3NldF9vZiA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X29mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9vZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfb2YpIHJldHVybiBlc25leHRfc2V0X29mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfb2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBTZXRIZWxwZXJzID0gcmVxdWlyZVNldEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25PZiA9IHJlcXVpcmVDb2xsZWN0aW9uT2YoKTtcblxuXHQvLyBgU2V0Lm9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG9mOiBjcmVhdGVDb2xsZWN0aW9uT2YoU2V0SGVscGVycy5TZXQsIFNldEhlbHBlcnMuYWRkLCBmYWxzZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X29mO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9vZigpO1xuXG52YXIgZXNuZXh0X3NldF9yZWR1Y2UgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9yZWR1Y2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X3JlZHVjZSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfcmVkdWNlKSByZXR1cm4gZXNuZXh0X3NldF9yZWR1Y2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9yZWR1Y2UgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhQ2FsbGFibGUgPSByZXF1aXJlQUNhbGxhYmxlKCk7XG5cdHZhciBhU2V0ID0gcmVxdWlyZUFTZXQoKTtcblx0dmFyIGl0ZXJhdGUgPSByZXF1aXJlU2V0SXRlcmF0ZSgpO1xuXG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdC8vIGBTZXQucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWNvbGxlY3Rpb24tbWV0aG9kc1xuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuXHQgICAgdmFyIHNldCA9IGFTZXQodGhpcyk7XG5cdCAgICB2YXIgbm9Jbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA8IDI7XG5cdCAgICB2YXIgYWNjdW11bGF0b3IgPSBub0luaXRpYWwgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG5cdCAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG5cdCAgICBpdGVyYXRlKHNldCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmIChub0luaXRpYWwpIHtcblx0ICAgICAgICBub0luaXRpYWwgPSBmYWxzZTtcblx0ICAgICAgICBhY2N1bXVsYXRvciA9IHZhbHVlO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGFjY3VtdWxhdG9yID0gY2FsbGJhY2tmbihhY2N1bXVsYXRvciwgdmFsdWUsIHZhbHVlLCBzZXQpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIGlmIChub0luaXRpYWwpIHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgc2V0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuXHQgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X3JlZHVjZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfcmVkdWNlKCk7XG5cbnZhciBlc25leHRfc2V0X3NvbWUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zb21lO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF9zb21lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zb21lKSByZXR1cm4gZXNuZXh0X3NldF9zb21lO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfc29tZSA9IDE7XG5cdHZhciAkID0gcmVxdWlyZV9leHBvcnQoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgYVNldCA9IHJlcXVpcmVBU2V0KCk7XG5cdHZhciBpdGVyYXRlID0gcmVxdWlyZVNldEl0ZXJhdGUoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5zb21lYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG5cdCAgICB2YXIgc2V0ID0gYVNldCh0aGlzKTtcblx0ICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG5cdCAgICByZXR1cm4gaXRlcmF0ZShzZXQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoYm91bmRGdW5jdGlvbih2YWx1ZSwgdmFsdWUsIHNldCkpIHJldHVybiB0cnVlO1xuXHQgICAgfSwgdHJ1ZSkgPT09IHRydWU7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zZXRfc29tZTtcbn1cblxucmVxdWlyZUVzbmV4dF9zZXRfc29tZSgpO1xuXG52YXIgZXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlID0ge307XG5cbnZhciBzZXRTeW1tZXRyaWNEaWZmZXJlbmNlO1xudmFyIGhhc1JlcXVpcmVkU2V0U3ltbWV0cmljRGlmZmVyZW5jZTtcblxuZnVuY3Rpb24gcmVxdWlyZVNldFN5bW1ldHJpY0RpZmZlcmVuY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRTeW1tZXRyaWNEaWZmZXJlbmNlKSByZXR1cm4gc2V0U3ltbWV0cmljRGlmZmVyZW5jZTtcblx0aGFzUmVxdWlyZWRTZXRTeW1tZXRyaWNEaWZmZXJlbmNlID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgU2V0SGVscGVycyA9IHJlcXVpcmVTZXRIZWxwZXJzKCk7XG5cdHZhciBjbG9uZSA9IHJlcXVpcmVTZXRDbG9uZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cblx0dmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xuXHR2YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG5cdHZhciByZW1vdmUgPSBTZXRIZWxwZXJzLnJlbW92ZTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5zeW1tZXRyaWNEaWZmZXJlbmNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0c2V0U3ltbWV0cmljRGlmZmVyZW5jZSA9IGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2Uob3RoZXIpIHtcblx0ICB2YXIgTyA9IGFTZXQodGhpcyk7XG5cdCAgdmFyIGtleXNJdGVyID0gZ2V0U2V0UmVjb3JkKG90aGVyKS5nZXRJdGVyYXRvcigpO1xuXHQgIHZhciByZXN1bHQgPSBjbG9uZShPKTtcblx0ICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgaWYgKGhhcyhPLCBlKSkgcmVtb3ZlKHJlc3VsdCwgZSk7XG5cdCAgICBlbHNlIGFkZChyZXN1bHQsIGUpO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdHJldHVybiBzZXRTeW1tZXRyaWNEaWZmZXJlbmNlO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2UpIHJldHVybiBlc25leHRfc2V0X3N5bW1ldHJpY0RpZmZlcmVuY2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2FsbCA9IHJlcXVpcmVGdW5jdGlvbkNhbGwoKTtcblx0dmFyIHRvU2V0TGlrZSA9IHJlcXVpcmVUb1NldExpa2UoKTtcblx0dmFyICRzeW1tZXRyaWNEaWZmZXJlbmNlID0gcmVxdWlyZVNldFN5bW1ldHJpY0RpZmZlcmVuY2UoKTtcblxuXHQvLyBgU2V0LnByb3RvdHlwZS5zeW1tZXRyaWNEaWZmZXJlbmNlYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcblx0Ly8gVE9ETzogT2Jzb2xldGUgdmVyc2lvbiwgcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0JCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIHN5bW1ldHJpY0RpZmZlcmVuY2U6IGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2Uob3RoZXIpIHtcblx0ICAgIHJldHVybiBjYWxsKCRzeW1tZXRyaWNEaWZmZXJlbmNlLCB0aGlzLCB0b1NldExpa2Uob3RoZXIpKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF9zeW1tZXRyaWNEaWZmZXJlbmNlKCk7XG5cbnZhciBlc25leHRfc2V0X3VuaW9uID0ge307XG5cbnZhciBzZXRVbmlvbjtcbnZhciBoYXNSZXF1aXJlZFNldFVuaW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlU2V0VW5pb24gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTZXRVbmlvbikgcmV0dXJuIHNldFVuaW9uO1xuXHRoYXNSZXF1aXJlZFNldFVuaW9uID0gMTtcblx0dmFyIGFTZXQgPSByZXF1aXJlQVNldCgpO1xuXHR2YXIgYWRkID0gcmVxdWlyZVNldEhlbHBlcnMoKS5hZGQ7XG5cdHZhciBjbG9uZSA9IHJlcXVpcmVTZXRDbG9uZSgpO1xuXHR2YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZUdldFNldFJlY29yZCgpO1xuXHR2YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmVJdGVyYXRlU2ltcGxlKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUudW5pb25gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHRzZXRVbmlvbiA9IGZ1bmN0aW9uIHVuaW9uKG90aGVyKSB7XG5cdCAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuXHQgIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcblx0ICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG5cdCAgaXRlcmF0ZVNpbXBsZShrZXlzSXRlciwgZnVuY3Rpb24gKGl0KSB7XG5cdCAgICBhZGQocmVzdWx0LCBpdCk7XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fTtcblx0cmV0dXJuIHNldFVuaW9uO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc2V0X3VuaW9uO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3NldF91bmlvbiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF9zZXRfdW5pb24pIHJldHVybiBlc25leHRfc2V0X3VuaW9uO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zZXRfdW5pb24gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBjYWxsID0gcmVxdWlyZUZ1bmN0aW9uQ2FsbCgpO1xuXHR2YXIgdG9TZXRMaWtlID0gcmVxdWlyZVRvU2V0TGlrZSgpO1xuXHR2YXIgJHVuaW9uID0gcmVxdWlyZVNldFVuaW9uKCk7XG5cblx0Ly8gYFNldC5wcm90b3R5cGUudW5pb25gIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuXHQvLyBUT0RPOiBPYnNvbGV0ZSB2ZXJzaW9uLCByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxuXHQkKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgdW5pb246IGZ1bmN0aW9uIHVuaW9uKG90aGVyKSB7XG5cdCAgICByZXR1cm4gY2FsbCgkdW5pb24sIHRoaXMsIHRvU2V0TGlrZShvdGhlcikpO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfc2V0X3VuaW9uO1xufVxuXG5yZXF1aXJlRXNuZXh0X3NldF91bmlvbigpO1xuXG52YXIgZXNuZXh0X3N0cmluZ19hdCA9IHt9O1xuXG52YXIgc3RyaW5nTXVsdGlieXRlO1xudmFyIGhhc1JlcXVpcmVkU3RyaW5nTXVsdGlieXRlO1xuXG5mdW5jdGlvbiByZXF1aXJlU3RyaW5nTXVsdGlieXRlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkU3RyaW5nTXVsdGlieXRlKSByZXR1cm4gc3RyaW5nTXVsdGlieXRlO1xuXHRoYXNSZXF1aXJlZFN0cmluZ011bHRpYnl0ZSA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cdHZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZVRvSW50ZWdlck9ySW5maW5pdHkoKTtcblx0dmFyIHRvU3RyaW5nID0gcmVxdWlyZVRvU3RyaW5nKCk7XG5cdHZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZVJlcXVpcmVPYmplY3RDb2VyY2libGUoKTtcblxuXHR2YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcblx0dmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcblx0dmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5cdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcblx0ICAgIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuXHQgICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyT3JJbmZpbml0eShwb3MpO1xuXHQgICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcblx0ICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuXHQgICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcblx0ICAgIGZpcnN0ID0gY2hhckNvZGVBdChTLCBwb3NpdGlvbik7XG5cdCAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG5cdCAgICAgIHx8IChzZWNvbmQgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuXHQgICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkdcblx0ICAgICAgICAgID8gY2hhckF0KFMsIHBvc2l0aW9uKVxuXHQgICAgICAgICAgOiBmaXJzdFxuXHQgICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkdcblx0ICAgICAgICAgID8gc3RyaW5nU2xpY2UoUywgcG9zaXRpb24sIHBvc2l0aW9uICsgMilcblx0ICAgICAgICAgIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcblx0ICB9O1xuXHR9O1xuXG5cdHN0cmluZ011bHRpYnl0ZSA9IHtcblx0ICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG5cdCAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuXHQgIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2Rcblx0ICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG5cdCAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcblx0fTtcblx0cmV0dXJuIHN0cmluZ011bHRpYnl0ZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19hdDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zdHJpbmdfYXQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2F0KSByZXR1cm4gZXNuZXh0X3N0cmluZ19hdDtcblx0aGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2F0ID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY2hhckF0ID0gcmVxdWlyZVN0cmluZ011bHRpYnl0ZSgpLmNoYXJBdDtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXHR2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmVUb0ludGVnZXJPckluZmluaXR5KCk7XG5cdHZhciB0b1N0cmluZyA9IHJlcXVpcmVUb1N0cmluZygpO1xuXG5cdC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuXHQkKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgYXQ6IGZ1bmN0aW9uIGF0KGluZGV4KSB7XG5cdCAgICB2YXIgUyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuXHQgICAgdmFyIGxlbiA9IFMubGVuZ3RoO1xuXHQgICAgdmFyIHJlbGF0aXZlSW5kZXggPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcblx0ICAgIHZhciBrID0gcmVsYXRpdmVJbmRleCA+PSAwID8gcmVsYXRpdmVJbmRleCA6IGxlbiArIHJlbGF0aXZlSW5kZXg7XG5cdCAgICByZXR1cm4gKGsgPCAwIHx8IGsgPj0gbGVuKSA/IHVuZGVmaW5lZCA6IGNoYXJBdChTLCBrKTtcblx0ICB9XG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3N0cmluZ19hdDtcbn1cblxucmVxdWlyZUVzbmV4dF9zdHJpbmdfYXQoKTtcblxudmFyIGVzbmV4dF9zdHJpbmdfY29kZVBvaW50cyA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2NvZGVQb2ludHM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc3RyaW5nX2NvZGVQb2ludHMgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc3RyaW5nX2NvZGVQb2ludHMpIHJldHVybiBlc25leHRfc3RyaW5nX2NvZGVQb2ludHM7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3N0cmluZ19jb2RlUG9pbnRzID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmVJdGVyYXRvckNyZWF0ZUNvbnN0cnVjdG9yKCk7XG5cdHZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZUNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoKTtcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlUmVxdWlyZU9iamVjdENvZXJjaWJsZSgpO1xuXHR2YXIgdG9TdHJpbmcgPSByZXF1aXJlVG9TdHJpbmcoKTtcblx0dmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlSW50ZXJuYWxTdGF0ZSgpO1xuXHR2YXIgU3RyaW5nTXVsdGlieXRlTW9kdWxlID0gcmVxdWlyZVN0cmluZ011bHRpYnl0ZSgpO1xuXG5cdHZhciBjb2RlQXQgPSBTdHJpbmdNdWx0aWJ5dGVNb2R1bGUuY29kZUF0O1xuXHR2YXIgY2hhckF0ID0gU3RyaW5nTXVsdGlieXRlTW9kdWxlLmNoYXJBdDtcblx0dmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xuXHR2YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXHR2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNUUklOR19JVEVSQVRPUik7XG5cblx0Ly8gVE9ETzogdW5pZnkgd2l0aCBTdHJpbmcjQEBpdGVyYXRvclxuXHR2YXIgJFN0cmluZ0l0ZXJhdG9yID0gY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihmdW5jdGlvbiBTdHJpbmdJdGVyYXRvcihzdHJpbmcpIHtcblx0ICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcblx0ICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcblx0ICAgIHN0cmluZzogc3RyaW5nLFxuXHQgICAgaW5kZXg6IDBcblx0ICB9KTtcblx0fSwgJ1N0cmluZycsIGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcblx0ICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuXHQgIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuXHQgIHZhciBwb2ludDtcblx0ICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcblx0ICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcblx0ICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG5cdCAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoeyBjb2RlUG9pbnQ6IGNvZGVBdChwb2ludCwgMCksIHBvc2l0aW9uOiBpbmRleCB9LCBmYWxzZSk7XG5cdH0pO1xuXG5cdC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludHNgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcHJvdG90eXBlLWNvZGVwb2ludHNcblx0JCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIGNvZGVQb2ludHM6IGZ1bmN0aW9uIGNvZGVQb2ludHMoKSB7XG5cdCAgICByZXR1cm4gbmV3ICRTdHJpbmdJdGVyYXRvcih0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKSk7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF9zdHJpbmdfY29kZVBvaW50cztcbn1cblxucmVxdWlyZUVzbmV4dF9zdHJpbmdfY29kZVBvaW50cygpO1xuXG52YXIgZXNuZXh0X3N5bWJvbF9kaXNwb3NlID0ge307XG5cbnZhciBwYXRoO1xudmFyIGhhc1JlcXVpcmVkUGF0aDtcblxuZnVuY3Rpb24gcmVxdWlyZVBhdGggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRQYXRoKSByZXR1cm4gcGF0aDtcblx0aGFzUmVxdWlyZWRQYXRoID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXG5cdHBhdGggPSBnbG9iYWxUaGlzO1xuXHRyZXR1cm4gcGF0aDtcbn1cblxudmFyIHdlbGxLbm93blN5bWJvbFdyYXBwZWQgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sV3JhcHBlZDtcblxuZnVuY3Rpb24gcmVxdWlyZVdlbGxLbm93blN5bWJvbFdyYXBwZWQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xXcmFwcGVkKSByZXR1cm4gd2VsbEtub3duU3ltYm9sV3JhcHBlZDtcblx0aGFzUmVxdWlyZWRXZWxsS25vd25TeW1ib2xXcmFwcGVkID0gMTtcblx0dmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2woKTtcblxuXHR3ZWxsS25vd25TeW1ib2xXcmFwcGVkLmYgPSB3ZWxsS25vd25TeW1ib2w7XG5cdHJldHVybiB3ZWxsS25vd25TeW1ib2xXcmFwcGVkO1xufVxuXG52YXIgd2VsbEtub3duU3ltYm9sRGVmaW5lO1xudmFyIGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sRGVmaW5lO1xuXG5mdW5jdGlvbiByZXF1aXJlV2VsbEtub3duU3ltYm9sRGVmaW5lICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2VsbEtub3duU3ltYm9sRGVmaW5lKSByZXR1cm4gd2VsbEtub3duU3ltYm9sRGVmaW5lO1xuXHRoYXNSZXF1aXJlZFdlbGxLbm93blN5bWJvbERlZmluZSA9IDE7XG5cdHZhciBwYXRoID0gcmVxdWlyZVBhdGgoKTtcblx0dmFyIGhhc093biA9IHJlcXVpcmVIYXNPd25Qcm9wZXJ0eSgpO1xuXHR2YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmVXZWxsS25vd25TeW1ib2xXcmFwcGVkKCk7XG5cdHZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmVPYmplY3REZWZpbmVQcm9wZXJ0eSgpLmY7XG5cblx0d2VsbEtub3duU3ltYm9sRGVmaW5lID0gZnVuY3Rpb24gKE5BTUUpIHtcblx0ICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuXHQgIGlmICghaGFzT3duKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuXHQgICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuXHQgIH0pO1xuXHR9O1xuXHRyZXR1cm4gd2VsbEtub3duU3ltYm9sRGVmaW5lO1xufVxuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX2Rpc3Bvc2U7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfc3ltYm9sX2Rpc3Bvc2UgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX2Rpc3Bvc2UpIHJldHVybiBlc25leHRfc3ltYm9sX2Rpc3Bvc2U7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9kaXNwb3NlID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZVdlbGxLbm93blN5bWJvbERlZmluZSgpO1xuXHR2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlT2JqZWN0RGVmaW5lUHJvcGVydHkoKS5mO1xuXHR2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZU9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcigpLmY7XG5cblx0dmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xuXG5cdC8vIGBTeW1ib2wuZGlzcG9zZWAgd2VsbC1rbm93biBzeW1ib2xcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZXhwbGljaXQtcmVzb3VyY2UtbWFuYWdlbWVudFxuXHRkZWZpbmVXZWxsS25vd25TeW1ib2woJ2Rpc3Bvc2UnKTtcblxuXHRpZiAoU3ltYm9sKSB7XG5cdCAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3ltYm9sLCAnZGlzcG9zZScpO1xuXHQgIC8vIHdvcmthcm91bmQgb2YgTm9kZUpTIDIwLjQgYnVnXG5cdCAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy80ODY5OVxuXHQgIC8vIGFuZCBpbmNvcnJlY3QgZGVzY3JpcHRvciBmcm9tIHNvbWUgdHJhbnNwaWxlcnMgYW5kIHVzZXJsYW5kIGhlbHBlcnNcblx0ICBpZiAoZGVzY3JpcHRvci5lbnVtZXJhYmxlICYmIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICYmIGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcblx0ICAgIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgJ2Rpc3Bvc2UnLCB7IHZhbHVlOiBkZXNjcmlwdG9yLnZhbHVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlIH0pO1xuXHQgIH1cblx0fVxuXHRyZXR1cm4gZXNuZXh0X3N5bWJvbF9kaXNwb3NlO1xufVxuXG5yZXF1aXJlRXNuZXh0X3N5bWJvbF9kaXNwb3NlKCk7XG5cbnZhciBlc25leHRfc3ltYm9sX29ic2VydmFibGUgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlKSByZXR1cm4gZXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF9zeW1ib2xfb2JzZXJ2YWJsZSA9IDE7XG5cdHZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sRGVmaW5lKCk7XG5cblx0Ly8gYFN5bWJvbC5vYnNlcnZhYmxlYCB3ZWxsLWtub3duIHN5bWJvbFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG5cdGRlZmluZVdlbGxLbm93blN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRyZXR1cm4gZXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlO1xufVxuXG5yZXF1aXJlRXNuZXh0X3N5bWJvbF9vYnNlcnZhYmxlKCk7XG5cbnZhciBlc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2gpIHJldHVybiBlc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaDtcblx0aGFzUmVxdWlyZWRFc25leHRfc3ltYm9sX3BhdHRlcm5NYXRjaCA9IDE7XG5cdC8vIFRPRE86IHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5cdHZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlV2VsbEtub3duU3ltYm9sRGVmaW5lKCk7XG5cblx0Ly8gYFN5bWJvbC5wYXR0ZXJuTWF0Y2hgIHdlbGwta25vd24gc3ltYm9sXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXBhdHRlcm4tbWF0Y2hpbmdcblx0ZGVmaW5lV2VsbEtub3duU3ltYm9sKCdwYXR0ZXJuTWF0Y2gnKTtcblx0cmV0dXJuIGVzbmV4dF9zeW1ib2xfcGF0dGVybk1hdGNoO1xufVxuXG5yZXF1aXJlRXNuZXh0X3N5bWJvbF9wYXR0ZXJuTWF0Y2goKTtcblxudmFyIGVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbCA9IHt9O1xuXG52YXIgd2Vha01hcEhlbHBlcnM7XG52YXIgaGFzUmVxdWlyZWRXZWFrTWFwSGVscGVycztcblxuZnVuY3Rpb24gcmVxdWlyZVdlYWtNYXBIZWxwZXJzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2Vha01hcEhlbHBlcnMpIHJldHVybiB3ZWFrTWFwSGVscGVycztcblx0aGFzUmVxdWlyZWRXZWFrTWFwSGVscGVycyA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXdlYWstbWFwIC0tIHNhZmVcblx0dmFyIFdlYWtNYXBQcm90b3R5cGUgPSBXZWFrTWFwLnByb3RvdHlwZTtcblxuXHR3ZWFrTWFwSGVscGVycyA9IHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8td2Vhay1tYXAgLS0gc2FmZVxuXHQgIFdlYWtNYXA6IFdlYWtNYXAsXG5cdCAgc2V0OiB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLnNldCksXG5cdCAgZ2V0OiB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmdldCksXG5cdCAgaGFzOiB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlLmhhcyksXG5cdCAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhXZWFrTWFwUHJvdG90eXBlWydkZWxldGUnXSlcblx0fTtcblx0cmV0dXJuIHdlYWtNYXBIZWxwZXJzO1xufVxuXG52YXIgYVdlYWtNYXA7XG52YXIgaGFzUmVxdWlyZWRBV2Vha01hcDtcblxuZnVuY3Rpb24gcmVxdWlyZUFXZWFrTWFwICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQVdlYWtNYXApIHJldHVybiBhV2Vha01hcDtcblx0aGFzUmVxdWlyZWRBV2Vha01hcCA9IDE7XG5cdHZhciBoYXMgPSByZXF1aXJlV2Vha01hcEhlbHBlcnMoKS5oYXM7XG5cblx0Ly8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tXZWFrTWFwRGF0YV1dKVxuXHRhV2Vha01hcCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGhhcyhpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHRyZXR1cm4gYVdlYWtNYXA7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbCkgcmV0dXJuIGVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9kZWxldGVBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhV2Vha01hcCA9IHJlcXVpcmVBV2Vha01hcCgpO1xuXHR2YXIgcmVtb3ZlID0gcmVxdWlyZVdlYWtNYXBIZWxwZXJzKCkucmVtb3ZlO1xuXG5cdC8vIGBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGVBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1dlYWtNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBkZWxldGVBbGw6IGZ1bmN0aW9uIGRlbGV0ZUFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIGNvbGxlY3Rpb24gPSBhV2Vha01hcCh0aGlzKTtcblx0ICAgIHZhciBhbGxEZWxldGVkID0gdHJ1ZTtcblx0ICAgIHZhciB3YXNEZWxldGVkO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICB3YXNEZWxldGVkID0gcmVtb3ZlKGNvbGxlY3Rpb24sIGFyZ3VtZW50c1trXSk7XG5cdCAgICAgIGFsbERlbGV0ZWQgPSBhbGxEZWxldGVkICYmIHdhc0RlbGV0ZWQ7XG5cdCAgICB9IHJldHVybiAhIWFsbERlbGV0ZWQ7XG5cdCAgfVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbDtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrTWFwX2RlbGV0ZUFsbCgpO1xuXG52YXIgZXNuZXh0X3dlYWtNYXBfZnJvbSA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9mcm9tO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtNYXBfZnJvbSAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2Zyb20pIHJldHVybiBlc25leHRfd2Vha01hcF9mcm9tO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX2Zyb20gPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBXZWFrTWFwSGVscGVycyA9IHJlcXVpcmVXZWFrTWFwSGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbkZyb20gPSByZXF1aXJlQ29sbGVjdGlvbkZyb20oKTtcblxuXHQvLyBgV2Vha01hcC5mcm9tYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha21hcC5mcm9tXG5cdCQoeyB0YXJnZXQ6ICdXZWFrTWFwJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBmcm9tOiBjcmVhdGVDb2xsZWN0aW9uRnJvbShXZWFrTWFwSGVscGVycy5XZWFrTWFwLCBXZWFrTWFwSGVscGVycy5zZXQsIHRydWUpXG5cdH0pO1xuXHRyZXR1cm4gZXNuZXh0X3dlYWtNYXBfZnJvbTtcbn1cblxucmVxdWlyZUVzbmV4dF93ZWFrTWFwX2Zyb20oKTtcblxudmFyIGVzbmV4dF93ZWFrTWFwX29mID0ge307XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX29mO1xuXG5mdW5jdGlvbiByZXF1aXJlRXNuZXh0X3dlYWtNYXBfb2YgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha01hcF9vZikgcmV0dXJuIGVzbmV4dF93ZWFrTWFwX29mO1xuXHRoYXNSZXF1aXJlZEVzbmV4dF93ZWFrTWFwX29mID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgV2Vha01hcEhlbHBlcnMgPSByZXF1aXJlV2Vha01hcEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25PZiA9IHJlcXVpcmVDb2xsZWN0aW9uT2YoKTtcblxuXHQvLyBgV2Vha01hcC5vZmAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAub2Zcblx0JCh7IHRhcmdldDogJ1dlYWtNYXAnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuXHQgIG9mOiBjcmVhdGVDb2xsZWN0aW9uT2YoV2Vha01hcEhlbHBlcnMuV2Vha01hcCwgV2Vha01hcEhlbHBlcnMuc2V0LCB0cnVlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrTWFwX29mO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtNYXBfb2YoKTtcblxudmFyIGVzbmV4dF93ZWFrU2V0X2FkZEFsbCA9IHt9O1xuXG52YXIgd2Vha1NldEhlbHBlcnM7XG52YXIgaGFzUmVxdWlyZWRXZWFrU2V0SGVscGVycztcblxuZnVuY3Rpb24gcmVxdWlyZVdlYWtTZXRIZWxwZXJzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkV2Vha1NldEhlbHBlcnMpIHJldHVybiB3ZWFrU2V0SGVscGVycztcblx0aGFzUmVxdWlyZWRXZWFrU2V0SGVscGVycyA9IDE7XG5cdHZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmVGdW5jdGlvblVuY3VycnlUaGlzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXdlYWstc2V0IC0tIHNhZmVcblx0dmFyIFdlYWtTZXRQcm90b3R5cGUgPSBXZWFrU2V0LnByb3RvdHlwZTtcblxuXHR3ZWFrU2V0SGVscGVycyA9IHtcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8td2Vhay1zZXQgLS0gc2FmZVxuXHQgIFdlYWtTZXQ6IFdlYWtTZXQsXG5cdCAgYWRkOiB1bmN1cnJ5VGhpcyhXZWFrU2V0UHJvdG90eXBlLmFkZCksXG5cdCAgaGFzOiB1bmN1cnJ5VGhpcyhXZWFrU2V0UHJvdG90eXBlLmhhcyksXG5cdCAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhXZWFrU2V0UHJvdG90eXBlWydkZWxldGUnXSlcblx0fTtcblx0cmV0dXJuIHdlYWtTZXRIZWxwZXJzO1xufVxuXG52YXIgYVdlYWtTZXQ7XG52YXIgaGFzUmVxdWlyZWRBV2Vha1NldDtcblxuZnVuY3Rpb24gcmVxdWlyZUFXZWFrU2V0ICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkQVdlYWtTZXQpIHJldHVybiBhV2Vha1NldDtcblx0aGFzUmVxdWlyZWRBV2Vha1NldCA9IDE7XG5cdHZhciBoYXMgPSByZXF1aXJlV2Vha1NldEhlbHBlcnMoKS5oYXM7XG5cblx0Ly8gUGVyZm9ybSA/IFJlcXVpcmVJbnRlcm5hbFNsb3QoTSwgW1tXZWFrU2V0RGF0YV1dKVxuXHRhV2Vha1NldCA9IGZ1bmN0aW9uIChpdCkge1xuXHQgIGhhcyhpdCk7XG5cdCAgcmV0dXJuIGl0O1xuXHR9O1xuXHRyZXR1cm4gYVdlYWtTZXQ7XG59XG5cbnZhciBoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2FkZEFsbDtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrU2V0X2FkZEFsbCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X2FkZEFsbCkgcmV0dXJuIGVzbmV4dF93ZWFrU2V0X2FkZEFsbDtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9hZGRBbGwgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBhV2Vha1NldCA9IHJlcXVpcmVBV2Vha1NldCgpO1xuXHR2YXIgYWRkID0gcmVxdWlyZVdlYWtTZXRIZWxwZXJzKCkuYWRkO1xuXG5cdC8vIGBXZWFrU2V0LnByb3RvdHlwZS5hZGRBbGxgIG1ldGhvZFxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1jb2xsZWN0aW9uLW1ldGhvZHNcblx0JCh7IHRhcmdldDogJ1dlYWtTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcblx0ICBhZGRBbGw6IGZ1bmN0aW9uIGFkZEFsbCgvKiAuLi5lbGVtZW50cyAqLykge1xuXHQgICAgdmFyIHNldCA9IGFXZWFrU2V0KHRoaXMpO1xuXHQgICAgZm9yICh2YXIgayA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuXHQgICAgICBhZGQoc2V0LCBhcmd1bWVudHNba10pO1xuXHQgICAgfSByZXR1cm4gc2V0O1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha1NldF9hZGRBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha1NldF9hZGRBbGwoKTtcblxudmFyIGVzbmV4dF93ZWFrU2V0X2RlbGV0ZUFsbCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9kZWxldGVBbGw7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha1NldF9kZWxldGVBbGwgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9kZWxldGVBbGwpIHJldHVybiBlc25leHRfd2Vha1NldF9kZWxldGVBbGw7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZGVsZXRlQWxsID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgYVdlYWtTZXQgPSByZXF1aXJlQVdlYWtTZXQoKTtcblx0dmFyIHJlbW92ZSA9IHJlcXVpcmVXZWFrU2V0SGVscGVycygpLnJlbW92ZTtcblxuXHQvLyBgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlQWxsYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtY29sbGVjdGlvbi1tZXRob2RzXG5cdCQoeyB0YXJnZXQ6ICdXZWFrU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZGVsZXRlQWxsOiBmdW5jdGlvbiBkZWxldGVBbGwoLyogLi4uZWxlbWVudHMgKi8pIHtcblx0ICAgIHZhciBjb2xsZWN0aW9uID0gYVdlYWtTZXQodGhpcyk7XG5cdCAgICB2YXIgYWxsRGVsZXRlZCA9IHRydWU7XG5cdCAgICB2YXIgd2FzRGVsZXRlZDtcblx0ICAgIGZvciAodmFyIGsgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcblx0ICAgICAgd2FzRGVsZXRlZCA9IHJlbW92ZShjb2xsZWN0aW9uLCBhcmd1bWVudHNba10pO1xuXHQgICAgICBhbGxEZWxldGVkID0gYWxsRGVsZXRlZCAmJiB3YXNEZWxldGVkO1xuXHQgICAgfSByZXR1cm4gISFhbGxEZWxldGVkO1xuXHQgIH1cblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha1NldF9kZWxldGVBbGw7XG59XG5cbnJlcXVpcmVFc25leHRfd2Vha1NldF9kZWxldGVBbGwoKTtcblxudmFyIGVzbmV4dF93ZWFrU2V0X2Zyb20gPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfZnJvbTtcblxuZnVuY3Rpb24gcmVxdWlyZUVzbmV4dF93ZWFrU2V0X2Zyb20gKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9mcm9tKSByZXR1cm4gZXNuZXh0X3dlYWtTZXRfZnJvbTtcblx0aGFzUmVxdWlyZWRFc25leHRfd2Vha1NldF9mcm9tID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgV2Vha1NldEhlbHBlcnMgPSByZXF1aXJlV2Vha1NldEhlbHBlcnMoKTtcblx0dmFyIGNyZWF0ZUNvbGxlY3Rpb25Gcm9tID0gcmVxdWlyZUNvbGxlY3Rpb25Gcm9tKCk7XG5cblx0Ly8gYFdlYWtTZXQuZnJvbWAgbWV0aG9kXG5cdC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWtzZXQuZnJvbVxuXHQkKHsgdGFyZ2V0OiAnV2Vha1NldCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgZnJvbTogY3JlYXRlQ29sbGVjdGlvbkZyb20oV2Vha1NldEhlbHBlcnMuV2Vha1NldCwgV2Vha1NldEhlbHBlcnMuYWRkLCBmYWxzZSlcblx0fSk7XG5cdHJldHVybiBlc25leHRfd2Vha1NldF9mcm9tO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtTZXRfZnJvbSgpO1xuXG52YXIgZXNuZXh0X3dlYWtTZXRfb2YgPSB7fTtcblxudmFyIGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfb2Y7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFc25leHRfd2Vha1NldF9vZiAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVzbmV4dF93ZWFrU2V0X29mKSByZXR1cm4gZXNuZXh0X3dlYWtTZXRfb2Y7XG5cdGhhc1JlcXVpcmVkRXNuZXh0X3dlYWtTZXRfb2YgPSAxO1xuXHR2YXIgJCA9IHJlcXVpcmVfZXhwb3J0KCk7XG5cdHZhciBXZWFrU2V0SGVscGVycyA9IHJlcXVpcmVXZWFrU2V0SGVscGVycygpO1xuXHR2YXIgY3JlYXRlQ29sbGVjdGlvbk9mID0gcmVxdWlyZUNvbGxlY3Rpb25PZigpO1xuXG5cdC8vIGBXZWFrU2V0Lm9mYCBtZXRob2Rcblx0Ly8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha3NldC5vZlxuXHQkKHsgdGFyZ2V0OiAnV2Vha1NldCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG5cdCAgb2Y6IGNyZWF0ZUNvbGxlY3Rpb25PZihXZWFrU2V0SGVscGVycy5XZWFrU2V0LCBXZWFrU2V0SGVscGVycy5hZGQsIGZhbHNlKVxuXHR9KTtcblx0cmV0dXJuIGVzbmV4dF93ZWFrU2V0X29mO1xufVxuXG5yZXF1aXJlRXNuZXh0X3dlYWtTZXRfb2YoKTtcblxudmFyIHdlYl9pbW1lZGlhdGUgPSB7fTtcblxudmFyIHdlYl9jbGVhckltbWVkaWF0ZSA9IHt9O1xuXG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGg7XG52YXIgaGFzUmVxdWlyZWRWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aDtcblxuZnVuY3Rpb24gcmVxdWlyZVZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVmFsaWRhdGVBcmd1bWVudHNMZW5ndGgpIHJldHVybiB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aDtcblx0aGFzUmVxdWlyZWRWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IDE7XG5cdHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5cdHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcblx0ICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuXHQgIHJldHVybiBwYXNzZWQ7XG5cdH07XG5cdHJldHVybiB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aDtcbn1cblxudmFyIGVudmlyb25tZW50SXNJb3M7XG52YXIgaGFzUmVxdWlyZWRFbnZpcm9ubWVudElzSW9zO1xuXG5mdW5jdGlvbiByZXF1aXJlRW52aXJvbm1lbnRJc0lvcyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZEVudmlyb25tZW50SXNJb3MpIHJldHVybiBlbnZpcm9ubWVudElzSW9zO1xuXHRoYXNSZXF1aXJlZEVudmlyb25tZW50SXNJb3MgPSAxO1xuXHR2YXIgdXNlckFnZW50ID0gcmVxdWlyZUVudmlyb25tZW50VXNlckFnZW50KCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZG9zL25vLXZ1bG5lcmFibGUgLS0gc2FmZVxuXHRlbnZpcm9ubWVudElzSW9zID0gLyg/OmlwYWR8aXBob25lfGlwb2QpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KTtcblx0cmV0dXJuIGVudmlyb25tZW50SXNJb3M7XG59XG5cbnZhciBlbnZpcm9ubWVudDtcbnZhciBoYXNSZXF1aXJlZEVudmlyb25tZW50O1xuXG5mdW5jdGlvbiByZXF1aXJlRW52aXJvbm1lbnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRFbnZpcm9ubWVudCkgcmV0dXJuIGVudmlyb25tZW50O1xuXHRoYXNSZXF1aXJlZEVudmlyb25tZW50ID0gMTtcblx0LyogZ2xvYmFsIEJ1biwgRGVubyAtLSBkZXRlY3Rpb24gKi9cblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgdXNlckFnZW50ID0gcmVxdWlyZUVudmlyb25tZW50VXNlckFnZW50KCk7XG5cdHZhciBjbGFzc29mID0gcmVxdWlyZUNsYXNzb2ZSYXcoKTtcblxuXHR2YXIgdXNlckFnZW50U3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0ICByZXR1cm4gdXNlckFnZW50LnNsaWNlKDAsIHN0cmluZy5sZW5ndGgpID09PSBzdHJpbmc7XG5cdH07XG5cblx0ZW52aXJvbm1lbnQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdCdW4vJykpIHJldHVybiAnQlVOJztcblx0ICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnQ2xvdWRmbGFyZS1Xb3JrZXJzJykpIHJldHVybiAnQ0xPVURGTEFSRSc7XG5cdCAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0Rlbm8vJykpIHJldHVybiAnREVOTyc7XG5cdCAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ05vZGUuanMvJykpIHJldHVybiAnTk9ERSc7XG5cdCAgaWYgKGdsb2JhbFRoaXMuQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJykgcmV0dXJuICdCVU4nO1xuXHQgIGlmIChnbG9iYWxUaGlzLkRlbm8gJiYgdHlwZW9mIERlbm8udmVyc2lvbiA9PSAnb2JqZWN0JykgcmV0dXJuICdERU5PJztcblx0ICBpZiAoY2xhc3NvZihnbG9iYWxUaGlzLnByb2Nlc3MpID09PSAncHJvY2VzcycpIHJldHVybiAnTk9ERSc7XG5cdCAgaWYgKGdsb2JhbFRoaXMud2luZG93ICYmIGdsb2JhbFRoaXMuZG9jdW1lbnQpIHJldHVybiAnQlJPV1NFUic7XG5cdCAgcmV0dXJuICdSRVNUJztcblx0fSkoKTtcblx0cmV0dXJuIGVudmlyb25tZW50O1xufVxuXG52YXIgZW52aXJvbm1lbnRJc05vZGU7XG52YXIgaGFzUmVxdWlyZWRFbnZpcm9ubWVudElzTm9kZTtcblxuZnVuY3Rpb24gcmVxdWlyZUVudmlyb25tZW50SXNOb2RlICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkRW52aXJvbm1lbnRJc05vZGUpIHJldHVybiBlbnZpcm9ubWVudElzTm9kZTtcblx0aGFzUmVxdWlyZWRFbnZpcm9ubWVudElzTm9kZSA9IDE7XG5cdHZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmVFbnZpcm9ubWVudCgpO1xuXG5cdGVudmlyb25tZW50SXNOb2RlID0gRU5WSVJPTk1FTlQgPT09ICdOT0RFJztcblx0cmV0dXJuIGVudmlyb25tZW50SXNOb2RlO1xufVxuXG52YXIgdGFzaztcbnZhciBoYXNSZXF1aXJlZFRhc2s7XG5cbmZ1bmN0aW9uIHJlcXVpcmVUYXNrICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkVGFzaykgcmV0dXJuIHRhc2s7XG5cdGhhc1JlcXVpcmVkVGFzayA9IDE7XG5cdHZhciBnbG9iYWxUaGlzID0gcmVxdWlyZUdsb2JhbFRoaXMoKTtcblx0dmFyIGFwcGx5ID0gcmVxdWlyZUZ1bmN0aW9uQXBwbHkoKTtcblx0dmFyIGJpbmQgPSByZXF1aXJlRnVuY3Rpb25CaW5kQ29udGV4dCgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBoYXNPd24gPSByZXF1aXJlSGFzT3duUHJvcGVydHkoKTtcblx0dmFyIGZhaWxzID0gcmVxdWlyZUZhaWxzKCk7XG5cdHZhciBodG1sID0gcmVxdWlyZUh0bWwoKTtcblx0dmFyIGFycmF5U2xpY2UgPSByZXF1aXJlQXJyYXlTbGljZSgpO1xuXHR2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmVEb2N1bWVudENyZWF0ZUVsZW1lbnQoKTtcblx0dmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZVZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKCk7XG5cdHZhciBJU19JT1MgPSByZXF1aXJlRW52aXJvbm1lbnRJc0lvcygpO1xuXHR2YXIgSVNfTk9ERSA9IHJlcXVpcmVFbnZpcm9ubWVudElzTm9kZSgpO1xuXG5cdHZhciBzZXQgPSBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZTtcblx0dmFyIGNsZWFyID0gZ2xvYmFsVGhpcy5jbGVhckltbWVkaWF0ZTtcblx0dmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG5cdHZhciBEaXNwYXRjaCA9IGdsb2JhbFRoaXMuRGlzcGF0Y2g7XG5cdHZhciBGdW5jdGlvbiA9IGdsb2JhbFRoaXMuRnVuY3Rpb247XG5cdHZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbFRoaXMuTWVzc2FnZUNoYW5uZWw7XG5cdHZhciBTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblx0dmFyIGNvdW50ZXIgPSAwO1xuXHR2YXIgcXVldWUgPSB7fTtcblx0dmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuXHR2YXIgJGxvY2F0aW9uLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblxuXHRmYWlscyhmdW5jdGlvbiAoKSB7XG5cdCAgLy8gRGVubyB0aHJvd3MgYSBSZWZlcmVuY2VFcnJvciBvbiBgbG9jYXRpb25gIGFjY2VzcyB3aXRob3V0IGAtLWxvY2F0aW9uYCBmbGFnXG5cdCAgJGxvY2F0aW9uID0gZ2xvYmFsVGhpcy5sb2NhdGlvbjtcblx0fSk7XG5cblx0dmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuXHQgIGlmIChoYXNPd24ocXVldWUsIGlkKSkge1xuXHQgICAgdmFyIGZuID0gcXVldWVbaWRdO1xuXHQgICAgZGVsZXRlIHF1ZXVlW2lkXTtcblx0ICAgIGZuKCk7XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgcnVuKGlkKTtcblx0ICB9O1xuXHR9O1xuXG5cdHZhciBldmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgcnVuKGV2ZW50LmRhdGEpO1xuXHR9O1xuXG5cdHZhciBnbG9iYWxQb3N0TWVzc2FnZURlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXG5cdCAgZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZShTdHJpbmcoaWQpLCAkbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgJGxvY2F0aW9uLmhvc3QpO1xuXHR9O1xuXG5cdC8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcblx0aWYgKCFzZXQgfHwgIWNsZWFyKSB7XG5cdCAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGhhbmRsZXIpIHtcblx0ICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpO1xuXHQgICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcblx0ICAgIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuXHQgICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgYXBwbHkoZm4sIHVuZGVmaW5lZCwgYXJncyk7XG5cdCAgICB9O1xuXHQgICAgZGVmZXIoY291bnRlcik7XG5cdCAgICByZXR1cm4gY291bnRlcjtcblx0ICB9O1xuXHQgIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcblx0ICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG5cdCAgfTtcblx0ICAvLyBOb2RlLmpzIDAuOC1cblx0ICBpZiAoSVNfTk9ERSkge1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgcHJvY2Vzcy5uZXh0VGljayhydW5uZXIoaWQpKTtcblx0ICAgIH07XG5cdCAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG5cdCAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcblx0ICAgIH07XG5cdCAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuXHQgIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG5cdCAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCAmJiAhSVNfSU9TKSB7XG5cdCAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG5cdCAgICBwb3J0ID0gY2hhbm5lbC5wb3J0Mjtcblx0ICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZXZlbnRMaXN0ZW5lcjtcblx0ICAgIGRlZmVyID0gYmluZChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0KTtcblx0ICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcblx0ICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuXHQgIH0gZWxzZSBpZiAoXG5cdCAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIgJiZcblx0ICAgIGlzQ2FsbGFibGUoZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZSkgJiZcblx0ICAgICFnbG9iYWxUaGlzLmltcG9ydFNjcmlwdHMgJiZcblx0ICAgICRsb2NhdGlvbiAmJiAkbG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcblx0ICAgICFmYWlscyhnbG9iYWxQb3N0TWVzc2FnZURlZmVyKVxuXHQgICkge1xuXHQgICAgZGVmZXIgPSBnbG9iYWxQb3N0TWVzc2FnZURlZmVyO1xuXHQgICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXHQgIC8vIElFOC1cblx0ICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuXHQgICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcblx0ICAgICAgaHRtbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuXHQgICAgICAgIHJ1bihpZCk7XG5cdCAgICAgIH07XG5cdCAgICB9O1xuXHQgIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG5cdCAgfSBlbHNlIHtcblx0ICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG5cdCAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG5cdCAgICB9O1xuXHQgIH1cblx0fVxuXG5cdHRhc2sgPSB7XG5cdCAgc2V0OiBzZXQsXG5cdCAgY2xlYXI6IGNsZWFyXG5cdH07XG5cdHJldHVybiB0YXNrO1xufVxuXG52YXIgaGFzUmVxdWlyZWRXZWJfY2xlYXJJbW1lZGlhdGU7XG5cbmZ1bmN0aW9uIHJlcXVpcmVXZWJfY2xlYXJJbW1lZGlhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWJfY2xlYXJJbW1lZGlhdGUpIHJldHVybiB3ZWJfY2xlYXJJbW1lZGlhdGU7XG5cdGhhc1JlcXVpcmVkV2ViX2NsZWFySW1tZWRpYXRlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBjbGVhckltbWVkaWF0ZSA9IHJlcXVpcmVUYXNrKCkuY2xlYXI7XG5cblx0Ly8gYGNsZWFySW1tZWRpYXRlYCBtZXRob2Rcblx0Ly8gaHR0cDovL3czYy5naXRodWIuaW8vc2V0SW1tZWRpYXRlLyNzaS1jbGVhckltbWVkaWF0ZVxuXHQkKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbFRoaXMuY2xlYXJJbW1lZGlhdGUgIT09IGNsZWFySW1tZWRpYXRlIH0sIHtcblx0ICBjbGVhckltbWVkaWF0ZTogY2xlYXJJbW1lZGlhdGVcblx0fSk7XG5cdHJldHVybiB3ZWJfY2xlYXJJbW1lZGlhdGU7XG59XG5cbnZhciB3ZWJfc2V0SW1tZWRpYXRlID0ge307XG5cbnZhciBzY2hlZHVsZXJzRml4O1xudmFyIGhhc1JlcXVpcmVkU2NoZWR1bGVyc0ZpeDtcblxuZnVuY3Rpb24gcmVxdWlyZVNjaGVkdWxlcnNGaXggKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRTY2hlZHVsZXJzRml4KSByZXR1cm4gc2NoZWR1bGVyc0ZpeDtcblx0aGFzUmVxdWlyZWRTY2hlZHVsZXJzRml4ID0gMTtcblx0dmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlR2xvYmFsVGhpcygpO1xuXHR2YXIgYXBwbHkgPSByZXF1aXJlRnVuY3Rpb25BcHBseSgpO1xuXHR2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmVJc0NhbGxhYmxlKCk7XG5cdHZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmVFbnZpcm9ubWVudCgpO1xuXHR2YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmVFbnZpcm9ubWVudFVzZXJBZ2VudCgpO1xuXHR2YXIgYXJyYXlTbGljZSA9IHJlcXVpcmVBcnJheVNsaWNlKCk7XG5cdHZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmVWYWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCgpO1xuXG5cdHZhciBGdW5jdGlvbiA9IGdsb2JhbFRoaXMuRnVuY3Rpb247XG5cdC8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG5cdHZhciBXUkFQID0gL01TSUUgLlxcLi8udGVzdChVU0VSX0FHRU5UKSB8fCBFTlZJUk9OTUVOVCA9PT0gJ0JVTicgJiYgKGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgdmVyc2lvbiA9IGdsb2JhbFRoaXMuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcblx0ICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT09ICcwJyAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PT0gJzMnICYmIHZlcnNpb25bMl0gPT09ICcwJyk7XG5cdH0pKCk7XG5cblx0Ly8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL292ZW4tc2gvYnVuL2lzc3Vlcy8xNjMzXG5cdHNjaGVkdWxlcnNGaXggPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG5cdCAgdmFyIGZpcnN0UGFyYW1JbmRleCA9IGhhc1RpbWVBcmcgPyAyIDogMTtcblx0ICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG5cdCAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG5cdCAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuXHQgICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG5cdCAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGFwcGx5KGZuLCB0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSA6IGZuO1xuXHQgICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcblx0ICB9IDogc2NoZWR1bGVyO1xuXHR9O1xuXHRyZXR1cm4gc2NoZWR1bGVyc0ZpeDtcbn1cblxudmFyIGhhc1JlcXVpcmVkV2ViX3NldEltbWVkaWF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVdlYl9zZXRJbW1lZGlhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWJfc2V0SW1tZWRpYXRlKSByZXR1cm4gd2ViX3NldEltbWVkaWF0ZTtcblx0aGFzUmVxdWlyZWRXZWJfc2V0SW1tZWRpYXRlID0gMTtcblx0dmFyICQgPSByZXF1aXJlX2V4cG9ydCgpO1xuXHR2YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmVHbG9iYWxUaGlzKCk7XG5cdHZhciBzZXRUYXNrID0gcmVxdWlyZVRhc2soKS5zZXQ7XG5cdHZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZVNjaGVkdWxlcnNGaXgoKTtcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcblx0dmFyIHNldEltbWVkaWF0ZSA9IGdsb2JhbFRoaXMuc2V0SW1tZWRpYXRlID8gc2NoZWR1bGVyc0ZpeChzZXRUYXNrLCBmYWxzZSkgOiBzZXRUYXNrO1xuXG5cdC8vIGBzZXRJbW1lZGlhdGVgIG1ldGhvZFxuXHQvLyBodHRwOi8vdzNjLmdpdGh1Yi5pby9zZXRJbW1lZGlhdGUvI3NpLXNldEltbWVkaWF0ZVxuXHQkKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbFRoaXMuc2V0SW1tZWRpYXRlICE9PSBzZXRJbW1lZGlhdGUgfSwge1xuXHQgIHNldEltbWVkaWF0ZTogc2V0SW1tZWRpYXRlXG5cdH0pO1xuXHRyZXR1cm4gd2ViX3NldEltbWVkaWF0ZTtcbn1cblxudmFyIGhhc1JlcXVpcmVkV2ViX2ltbWVkaWF0ZTtcblxuZnVuY3Rpb24gcmVxdWlyZVdlYl9pbW1lZGlhdGUgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRXZWJfaW1tZWRpYXRlKSByZXR1cm4gd2ViX2ltbWVkaWF0ZTtcblx0aGFzUmVxdWlyZWRXZWJfaW1tZWRpYXRlID0gMTtcblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xuXHRyZXF1aXJlV2ViX2NsZWFySW1tZWRpYXRlKCk7XG5cdHJlcXVpcmVXZWJfc2V0SW1tZWRpYXRlKCk7XG5cdHJldHVybiB3ZWJfaW1tZWRpYXRlO1xufVxuXG5yZXF1aXJlV2ViX2ltbWVkaWF0ZSgpO1xuXG4vLyAoT3B0aW9uYWwpIEltcG9ydCBwb2x5ZmlsbHMgc28gdGhhdCBCYWJlbCB3aWxsIGluY2x1ZGUgdGhlbSBpbiB0aGUgYnVuZGxlLlxuLy8gRGVib3VuY2UgaGVscGVyIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XG4gIGxldCB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxNTA7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkodGhpcywgYXJncyksIHdhaXQpO1xuICB9O1xufVxuXG4vLyBEZXRlcm1pbmUgdGhlIGN1cnJlbnQgYWN0aW9uIChcImVxdWFsaXplXCIgb3IgXCJyZXNldFwiKSBiYXNlZCBvbiBhZHZhbmNlZCBicmVha3BvaW50cy5cbmZ1bmN0aW9uIGdldEN1cnJlbnRBY3Rpb24oKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB3aW5kb3cuZXF1YWxpemVIZWlnaHRzT3B0aW9ucyB8fCB7fTtcbiAgaWYgKG9wdGlvbnMuYnJlYWtwb2ludHMgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLmJyZWFrcG9pbnRzKSkge1xuICAgIGZvciAobGV0IGJwIG9mIG9wdGlvbnMuYnJlYWtwb2ludHMpIHtcbiAgICAgIGNvbnN0IG1pbiA9IGJwLm1pbiAhPT0gdW5kZWZpbmVkID8gYnAubWluIDogMDtcbiAgICAgIGNvbnN0IG1heCA9IGJwLm1heCAhPT0gdW5kZWZpbmVkID8gYnAubWF4IDogSW5maW5pdHk7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbWluICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IG1heCkge1xuICAgICAgICByZXR1cm4gYnAuYWN0aW9uOyAvLyBcImVxdWFsaXplXCIgb3IgXCJyZXNldFwiXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMubWluV2lkdGgpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCBvcHRpb25zLm1pbldpZHRoID8gXCJyZXNldFwiIDogXCJlcXVhbGl6ZVwiO1xuICB9XG4gIHJldHVybiBcImVxdWFsaXplXCI7XG59XG5cbi8vIE1haW4gZXF1YWxpemF0aW9uIGZ1bmN0aW9uIHN1cHBvcnRpbmcgZGF0YSBhdHRyaWJ1dGUgb3IgY2xhc3MtYmFzZWQgZ3JvdXBpbmcuXG5mdW5jdGlvbiBlcXVhbGl6ZUhlaWdodHMoKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB3aW5kb3cuZXF1YWxpemVIZWlnaHRzT3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgYWN0aW9uID0gZ2V0Q3VycmVudEFjdGlvbigpO1xuICBpZiAoYWN0aW9uID09PSBcInJlc2V0XCIpIHtcbiAgICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVxdWFsaXplXSwgW2NsYXNzKj1cImVoLVwiXScpO1xuICAgIGFsbEVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2soe30pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lcXVhbGl6ZV0sIFtjbGFzcyo9XCJlaC1cIl0nKTtcbiAgY29uc3QgZ3JvdXBzID0ge307XG4gIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgIGxldCBncm91cEtleSA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZXF1YWxpemVcIik7XG4gICAgaWYgKCFncm91cEtleSkge1xuICAgICAgZ3JvdXBLZXkgPSBBcnJheS5mcm9tKGVsLmNsYXNzTGlzdCkuZmluZChjbHMgPT4gY2xzLnN0YXJ0c1dpdGgoXCJlaC1cIikpO1xuICAgIH1cbiAgICBpZiAoZ3JvdXBLZXkpIHtcbiAgICAgIGlmICghZ3JvdXBzW2dyb3VwS2V5XSkge1xuICAgICAgICBncm91cHNbZ3JvdXBLZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNbZ3JvdXBLZXldLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cEtleSA9PiB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgZ3JvdXBzW2dyb3VwS2V5XS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIH0pO1xuICAgIGdyb3Vwc1tncm91cEtleV0uZm9yRWFjaChlbCA9PiB7XG4gICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heChtYXhIZWlnaHQsIGVsLm9mZnNldEhlaWdodCk7XG4gICAgfSk7XG4gICAgZ3JvdXBzW2dyb3VwS2V5XS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAke21heEhlaWdodH1weGA7XG4gICAgfSk7XG4gIH0pO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIG9wdGlvbnMuY2FsbGJhY2soZ3JvdXBzKTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBkZWJvdW5jZWQgdmVyc2lvbiBmb3IgdGhlIHJlc2l6ZSBldmVudC5cbmNvbnN0IGRlYm91bmNlZEVxdWFsaXplSGVpZ2h0cyA9IGRlYm91bmNlKGVxdWFsaXplSGVpZ2h0cywgMTUwKTtcblxuLy8gUnVuIGVxdWFsaXplSGVpZ2h0cyB3aGVuIHRoZSBET00gaXMgcmVhZHkuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikge1xuICBlcXVhbGl6ZUhlaWdodHMoKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGVxdWFsaXplSGVpZ2h0cyk7XG59XG5cbi8vIFVzZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIG9uIHdpbmRvdyByZXNpemUuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZWRFcXVhbGl6ZUhlaWdodHMpO1xuXG5leHBvcnQgeyBlcXVhbGl6ZUhlaWdodHMgYXMgZGVmYXVsdCB9O1xuIiwiLy8gRXF1YWxpemUgSGVpZ2h0IGFuZCBCcmVha3BvaW50XG53aW5kb3cuZXF1YWxpemVIZWlnaHRzT3B0aW9ucyA9IHtcblx0YnJlYWtwb2ludHM6IFtcblx0XHR7IG1pbjogMCwgbWF4OiA3NjcsIGFjdGlvbjogXCJyZXNldFwiIH0sXG5cdFx0eyBtaW46IDc2OCwgYWN0aW9uOiBcImVxdWFsaXplXCIgfSxcblx0XSxcbn07XG5cbmltcG9ydCBcImVxdWFsaXplLWhlaWdodHMvcnVudGltZVwiO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cdC8vIERlYnVnXG5cdGNvbnNvbGUubG9nKFxuXHRcdFwiRGVza3RvcCBtZW51IGl0ZW1zIHdpdGggY2hpbGRyZW46XCIsXG5cdFx0JChcIi5oZWFkZXItZGVza3RvcC1tZW51IC5tZW51IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIikubGVuZ3RoXG5cdCk7XG5cdGNvbnNvbGUubG9nKFwiTW9iaWxlIG1lbnUgaXRlbXMgd2l0aCBzdWI6XCIsICQoXCIjY3NzbWVudSBsaS5oYXMtc3ViXCIpLmxlbmd0aCk7XG5cblx0Ly8gSGVscGVyOiBjbG9zZSBhbGwgc3VibWVudXNcblx0ZnVuY3Rpb24gY2xvc2VBbGwoKSB7XG5cdFx0JChcIi5zdWItbWVudVwiKS5zbGlkZVVwKCk7XG5cdFx0JChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIilcblx0XHRcdC5yZW1vdmVDbGFzcyhcIm9wZW5cIilcblx0XHRcdC5maW5kKFwiPiBhXCIpXG5cdFx0XHQuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0fVxuXG5cdC8vIFRvZ2dsZSBoYW5kbGVyIGZvciBhbmNob3JzIHRoYXQgaGF2ZSBhIHN1Ym1lbnVcblx0JChcblx0XHRcIiNtZW51LXByaW1hcnktbWVudSBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgI21lbnUtdG9wLW1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIlxuXHQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgbmF2aWdhdGlvblxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIGRvbid0IGJ1YmJsZSB0byBkb2N1bWVudFxuXG5cdFx0Y29uc3QgJGxpID0gJCh0aGlzKS5wYXJlbnQoXCJsaVwiKTtcblxuXHRcdC8vIENsb3NlIHRoZSBvdGhlciBtZW51J3Mgc3VibWVudXMgZmlyc3Rcblx0XHRpZiAoJGxpLmNsb3Nlc3QoXCIjbWVudS1wcmltYXJ5LW1lbnVcIikubGVuZ3RoKSB7XG5cdFx0XHQkKFwiI21lbnUtdG9wLW1lbnUgLnN1Yi1tZW51XCIpXG5cdFx0XHRcdC5zbGlkZVVwKClcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhcIm9wZW5cIilcblx0XHRcdFx0LmZpbmQoXCI+IGFcIilcblx0XHRcdFx0LmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoXCIjbWVudS1wcmltYXJ5LW1lbnUgLnN1Yi1tZW51XCIpXG5cdFx0XHRcdC5zbGlkZVVwKClcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhcIm9wZW5cIilcblx0XHRcdFx0LmZpbmQoXCI+IGFcIilcblx0XHRcdFx0LmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG5cdFx0fVxuXG5cdFx0Ly8gVG9nZ2xlIHRoaXMgb25lIGFuZCBjbG9zZSBzaWJsaW5nc1xuXHRcdGNvbnN0ICRzdWJtZW51ID0gJGxpLmNoaWxkcmVuKFwiLnN1Yi1tZW51XCIpO1xuXHRcdCRsaS50b2dnbGVDbGFzcyhcIm9wZW5cIilcblx0XHRcdC5zaWJsaW5ncygpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpXG5cdFx0XHQuY2hpbGRyZW4oXCIuc3ViLW1lbnVcIilcblx0XHRcdC5zbGlkZVVwKClcblx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0LmZpbmQoXCI+IGFcIilcblx0XHRcdC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuXG5cdFx0JHN1Ym1lbnUuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdCQodGhpcykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgJGxpLmhhc0NsYXNzKFwib3BlblwiKSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKTtcblx0fSk7XG5cblx0Ly8gQ2xpY2sgb3V0c2lkZSBjbG9zZXMgZXZlcnl0aGluZ1xuXHQkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRjbG9zZUFsbCgpO1xuXHR9KTtcblxuXHQvLyAoTmljZSB0byBoYXZlKSBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5OiBvcGVuL2Nsb3NlIG9uIEVudGVyL1NwYWNlXG5cdCQoXG5cdFx0XCIjbWVudS1wcmltYXJ5LW1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsICNtZW51LXRvcC1tZW51IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCJcblx0KVxuXHRcdC5hdHRyKHtcblx0XHRcdFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcblx0XHRcdFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG5cdFx0XHRyb2xlOiBcImJ1dHRvblwiLFxuXHRcdH0pXG5cdFx0Lm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKFwiY2xpY2tcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0Ly8gTW9iaWxlIE1lbnVcblx0JChcIi5vcGVuLW1lbnUtYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHQkKFwiI21vYmlsZS1tZW51XCIpLnNsaWRlRG93bigpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcIm92ZXJmbG93LXlcIiwgXCJoaWRkZW5cIik7XG5cdFx0JChcImJvZHlcIikuY3NzKFwicG9zaXRpb25cIiwgXCJmaXhlZFwiKTtcblx0fSk7XG5cdCQoXCIuY2xvc2UtbWVudS1idXR0b25cIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdCQoXCIjbW9iaWxlLW1lbnVcIikuc2xpZGVVcCgpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcIm92ZXJmbG93LXlcIiwgXCJhdXRvXCIpO1xuXHRcdCQoXCJib2R5XCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cdH0pO1xuXG5cdCQoXCIjY3NzbWVudSBsaS5oYXMtc3ViID4gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBpdGVtIGNsaWNrZWRcIik7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHR2YXIgZWxlbWVudCA9ICQodGhpcykucGFyZW50KFwibGlcIik7XG5cdFx0Y29uc29sZS5sb2coXCJNb2JpbGUgbWVudSBlbGVtZW50OlwiLCBlbGVtZW50KTtcblxuXHRcdGlmIChlbGVtZW50Lmhhc0NsYXNzKFwib3BlblwiKSkge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG5cdFx0XHRlbGVtZW50LmZpbmQoXCJ1bFwiKS5zbGlkZVVwKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuXHRcdFx0ZWxlbWVudC5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVVcCgpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcblx0XHRcdGVsZW1lbnQuc2libGluZ3MoXCJsaVwiKS5maW5kKFwibGlcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuXHRcdFx0ZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvKipcblx0ICogTW9kdWxlcyBpbiB0aGlzIGJ1bmRsZVxuXHQgKiBAbGljZW5zZVxuXHQgKlxuXHQgKiBtb2RhbC12aWRlbzpcblx0ICogICBsaWNlbnNlOiBhcHBsZXBsZVxuXHQgKiAgIGF1dGhvcjogYXBwbGVwbGVcblx0ICogICBob21lcGFnZTogaHR0cDovL2RldmVsb3Blci5hLWJsb2djbXMuanBcblx0ICogICB2ZXJzaW9uOiAyLjQuOFxuXHQgKlxuXHQgKiBjdXN0b20tZXZlbnQtcG9seWZpbGw6XG5cdCAqICAgbGljZW5zZTogTUlUIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKVxuXHQgKiAgIGNvbnRyaWJ1dG9yczogRnJhbmsgUGFuZXR0YSwgTWlraGFpbCBSZWVua28gPHJlZW5rb0B5YW5kZXgucnU+LCBKb3NjaGEgRmV0aCA8am9zY2hhQGZldGguY29tPlxuXHQgKiAgIGhvbWVwYWdlOiBodHRwczovL2dpdGh1Yi5jb20va3JhbWJ1aGwvY3VzdG9tLWV2ZW50LXBvbHlmaWxsI3JlYWRtZVxuXHQgKiAgIHZlcnNpb246IDAuMy4wXG5cdCAqXG5cdCAqIGVzNi1vYmplY3QtYXNzaWduOlxuXHQgKiAgIGxpY2Vuc2U6IE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcblx0ICogICBhdXRob3I6IFJ1YsOpbiBOb3J0ZSA8cnViZW5ub3J0ZUBnbWFpbC5jb20+XG5cdCAqICAgaG9tZXBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9ydWJlbm5vcnRlL2VzNi1vYmplY3QtYXNzaWduXG5cdCAqICAgdmVyc2lvbjogMS4xLjBcblx0ICpcblx0ICogVGhpcyBoZWFkZXIgaXMgZ2VuZXJhdGVkIGJ5IGxpY2Vuc2lmeSAoaHR0cHM6Ly9naXRodWIuY29tL3R3YWRhL2xpY2Vuc2lmeSlcblx0ICovXG5cdCEoZnVuY3Rpb24gKCkge1xuXHRcdGZ1bmN0aW9uIGUodCwgbiwgbykge1xuXHRcdFx0ZnVuY3Rpb24gaShhLCBsKSB7XG5cdFx0XHRcdGlmICghblthXSkge1xuXHRcdFx0XHRcdGlmICghdFthXSkge1xuXHRcdFx0XHRcdFx0dmFyIHUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZTtcblx0XHRcdFx0XHRcdGlmICghbCAmJiB1KSByZXR1cm4gdShhLCAhMCk7XG5cdFx0XHRcdFx0XHRpZiAocikgcmV0dXJuIHIoYSwgITApO1xuXHRcdFx0XHRcdFx0dmFyIGQgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgYSArIFwiJ1wiKTtcblx0XHRcdFx0XHRcdHRocm93ICgoZC5jb2RlID0gXCJNT0RVTEVfTk9UX0ZPVU5EXCIpLCBkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGMgPSAoblthXSA9IHsgZXhwb3J0czoge30gfSk7XG5cdFx0XHRcdFx0dFthXVswXS5jYWxsKFxuXHRcdFx0XHRcdFx0Yy5leHBvcnRzLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG4gPSB0W2FdWzFdW2VdO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaShuIHx8IGUpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0XHRjLmV4cG9ydHMsXG5cdFx0XHRcdFx0XHRlLFxuXHRcdFx0XHRcdFx0dCxcblx0XHRcdFx0XHRcdG4sXG5cdFx0XHRcdFx0XHRvXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gblthXS5leHBvcnRzO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChcblx0XHRcdFx0dmFyIHIgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHJlcXVpcmUgJiYgcmVxdWlyZSwgYSA9IDA7XG5cdFx0XHRcdGEgPCBvLmxlbmd0aDtcblx0XHRcdFx0YSsrXG5cdFx0XHQpXG5cdFx0XHRcdGkob1thXSk7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdFx0cmV0dXJuIGU7XG5cdH0pKCkoXG5cdFx0e1xuXHRcdFx0MTogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgbyA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoXCJ0ZXN0XCIpO1xuXHRcdFx0XHRcdFx0aWYgKChvLnByZXZlbnREZWZhdWx0KCksICEwICE9PSBvLmRlZmF1bHRQcmV2ZW50ZWQpKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcHJldmVudCBkZWZhdWx0XCIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHZhciBpID0gZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG4sIG87XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0KHQgPSB0IHx8IHtcblx0XHRcdFx0XHRcdFx0XHRcdGJ1YmJsZXM6ICExLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogITEsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHZvaWQgMCxcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHQobiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLFxuXHRcdFx0XHRcdFx0XHRcdG4uaW5pdEN1c3RvbUV2ZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHQuYnViYmxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdHQuY2FuY2VsYWJsZSxcblx0XHRcdFx0XHRcdFx0XHRcdHQuZGV0YWlsXG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHQobyA9IG4ucHJldmVudERlZmF1bHQpLFxuXHRcdFx0XHRcdFx0XHRcdChuLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0by5jYWxsKHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJkZWZhdWx0UHJldmVudGVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAhMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSAhMDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRuXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0KGkucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZSksXG5cdFx0XHRcdFx0XHRcdCh3aW5kb3cuQ3VzdG9tRXZlbnQgPSBpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0XSxcblx0XHRcdDI6IFtcblx0XHRcdFx0ZnVuY3Rpb24gKGUsIHQsIG4pIHtcblx0XHRcdFx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRcdFx0XHRmdW5jdGlvbiBvKGUsIHQpIHtcblx0XHRcdFx0XHRcdGlmICh2b2lkIDAgPT09IGUgfHwgbnVsbCA9PT0gZSlcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcblx0XHRcdFx0XHRcdFx0XHRcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgbiA9IE9iamVjdChlKSwgbyA9IDE7XG5cdFx0XHRcdFx0XHRcdG8gPCBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRvKytcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaSA9IGFyZ3VtZW50c1tvXTtcblx0XHRcdFx0XHRcdFx0aWYgKHZvaWQgMCAhPT0gaSAmJiBudWxsICE9PSBpKVxuXHRcdFx0XHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgciA9IE9iamVjdC5rZXlzKE9iamVjdChpKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGEgPSAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsID0gci5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0XHRhIDwgbDtcblx0XHRcdFx0XHRcdFx0XHRcdGErK1xuXHRcdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHUgPSByW2FdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgMCAhPT0gZCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkLmVudW1lcmFibGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0KG5bdV0gPSBpW3VdKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZnVuY3Rpb24gaSgpIHtcblx0XHRcdFx0XHRcdE9iamVjdC5hc3NpZ24gfHxcblx0XHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgXCJhc3NpZ25cIiwge1xuXHRcdFx0XHRcdFx0XHRcdGVudW1lcmFibGU6ICExLFxuXHRcdFx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBvLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dC5leHBvcnRzID0geyBhc3NpZ246IG8sIHBvbHlmaWxsOiBpIH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0XSxcblx0XHRcdDM6IFtcblx0XHRcdFx0ZnVuY3Rpb24gKGUsIHQsIG4pIHtcblx0XHRcdFx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHRcdFx0XHR2YXIgbyA9IGUoXCIuLi9pbmRleFwiKSxcblx0XHRcdFx0XHRcdGkgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRlLmZuLm1vZGFsVmlkZW8gPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcInN0cmluZ3NcIiA9PSB0eXBlb2YgZSB8fCBuZXcgbyh0aGlzLCBlKSxcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXNcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZClcblx0XHRcdFx0XHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGkpO1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHIgPSB3aW5kb3cualF1ZXJ5ID8gd2luZG93LmpRdWVyeSA6IHdpbmRvdy4kO1xuXHRcdFx0XHRcdFx0dm9pZCAwICE9PSByICYmIGkocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQuZXhwb3J0cyA9IGk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgXCIuLi9pbmRleFwiOiA1IH0sXG5cdFx0XHRdLFxuXHRcdFx0NDogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIG8oZSwgdCkge1xuXHRcdFx0XHRcdFx0aWYgKCEoZSBpbnN0YW5jZW9mIHQpKVxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0XHRcdFx0XHRcdFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcblx0XHRcdFx0XHR2YXIgaSA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRmdW5jdGlvbiBlKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG8gPSB0W25dO1xuXHRcdFx0XHRcdFx0XHRcdChvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0KG8uY29uZmlndXJhYmxlID0gITApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgby5rZXksIG8pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHQsIG4sIG8pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG4gJiYgZSh0LnByb3RvdHlwZSwgbiksIG8gJiYgZSh0LCBvKSwgdDtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHRlKFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCIpO1xuXHRcdFx0XHRcdHZhciByID0gZShcIi4uL2xpYi91dGlsXCIpLFxuXHRcdFx0XHRcdFx0YSA9IGUoXCJlczYtb2JqZWN0LWFzc2lnblwiKS5hc3NpZ24sXG5cdFx0XHRcdFx0XHRsID0ge1xuXHRcdFx0XHRcdFx0XHRjaGFubmVsOiBcInlvdXR1YmVcIixcblx0XHRcdFx0XHRcdFx0ZmFjZWJvb2s6IHt9LFxuXHRcdFx0XHRcdFx0XHR5b3V0dWJlOiB7XG5cdFx0XHRcdFx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdFx0XHRcdFx0Y2NfbG9hZF9wb2xpY3k6IDEsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbHM6IDEsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWtiOiAwLFxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZWpzYXBpOiAwLFxuXHRcdFx0XHRcdFx0XHRcdGVuZDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRmczogMSxcblx0XHRcdFx0XHRcdFx0XHRoMTogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRpdl9sb2FkX3BvbGljeTogMSxcblx0XHRcdFx0XHRcdFx0XHRsb29wOiAwLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVzdGJyYW5kaW5nOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdG11dGU6IDAsXG5cdFx0XHRcdFx0XHRcdFx0b3JpZ2luOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHBsYXlzaW5saW5lOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHJlbDogMCxcblx0XHRcdFx0XHRcdFx0XHRzaG93aW5mbzogMSxcblx0XHRcdFx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRcdFx0XHR3bW9kZTogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lOiBcImRhcmtcIixcblx0XHRcdFx0XHRcdFx0XHRub2Nvb2tpZTogITEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHJhdGlvOiBcIjE2OjlcIixcblx0XHRcdFx0XHRcdFx0dmltZW86IHtcblx0XHRcdFx0XHRcdFx0XHRhcGk6ICExLFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9wYXVzZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0YXV0b3BsYXk6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdGJ5bGluZTogITAsXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbHM6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRsb29wOiAhMSxcblx0XHRcdFx0XHRcdFx0XHRtYXhoZWlnaHQ6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0bWF4d2lkdGg6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0bXV0ZWQ6ICExLFxuXHRcdFx0XHRcdFx0XHRcdHBsYXllcl9pZDogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRwb3J0cmFpdDogITAsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICEwLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHhodG1sOiAhMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0YWxsb3dGdWxsU2NyZWVuOiAhMCxcblx0XHRcdFx0XHRcdFx0YWxsb3dBdXRvcGxheTogITAsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblNwZWVkOiAzMDAsXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvOiBcIm1vZGFsLXZpZGVvXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0Nsb3NlOiBcIm1vZGFsLXZpZGVvLWNsb3NlXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kYWxWaWRlb0JvZHk6IFwibW9kYWwtdmlkZW8tYm9keVwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW9Jbm5lcjogXCJtb2RhbC12aWRlby1pbm5lclwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGFsVmlkZW9JZnJhbWVXcmFwOiBcIm1vZGFsLXZpZGVvLW1vdmllLXdyYXBcIixcblx0XHRcdFx0XHRcdFx0XHRtb2RhbFZpZGVvQ2xvc2VCdG46IFwibW9kYWwtdmlkZW8tY2xvc2UtYnRuXCIsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGFyaWE6IHtcblx0XHRcdFx0XHRcdFx0XHRvcGVuTWVzc2FnZTogXCJZb3UganVzdCBvcGVubmVkIHRoZSBtb2RhbCB2aWRlb1wiLFxuXHRcdFx0XHRcdFx0XHRcdGRpc21pc3NCdG5NZXNzYWdlOlxuXHRcdFx0XHRcdFx0XHRcdFx0XCJDbG9zZSB0aGUgbW9kYWwgYnkgY2xpY2tpbmcgaGVyZVwiLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHUgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiBlKHQsIG4pIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgaSA9IHRoaXM7XG5cdFx0XHRcdFx0XHRcdFx0byh0aGlzLCBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdSA9IGEoe30sIGwsIG4pLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIgPT0gdHlwZW9mIHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHQsXG5cdFx0XHRcdFx0XHRcdFx0XHRjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRzID0gdS5jbGFzc05hbWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZiA9IHUuYW5pbWF0aW9uU3BlZWQ7XG5cdFx0XHRcdFx0XHRcdFx0W10uZm9yRWFjaC5jYWxsKGQsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAodCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcIkFcIiA9PT0gZS50YWdOYW1lICYmIHQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG4gPSBlLmRhdGFzZXQudmlkZW9JZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvID0gZS5kYXRhc2V0LmNoYW5uZWwgfHwgdS5jaGFubmVsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGEgPSAoMCwgci5nZXRVbmlxSWQpKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmRhdGFzZXQudmlkZW9VcmwgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkuZ2V0VmlkZW9VcmwodSwgbywgbiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZCA9IGkuZ2V0SHRtbCh1LCBsLCBhKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIuYXBwZW5kKShjLCBkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtID0gdi5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIuanMtbW9kYWwtdmlkZW8tZGlzbWlzcy1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cCA9IHZvaWQgMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQocCA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGUgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkuZ2V0V2lkdGhGdWxmaWxsQXNwZWN0UmF0aW8oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1LnJhdGlvLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmlubmVyV2lkdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwibW9kYWwtdmlkZW8taW5uZXItXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQuc3R5bGUubWF4V2lkdGggIT09XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHQuc3R5bGUubWF4V2lkdGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0di5mb2N1cygpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIuYWRkQ2xhc3MpKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cy5tb2RhbFZpZGVvQ2xvc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwicmVzaXplXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgwLCByLnJlbW92ZSkodiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCBmKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwia2V5ZG93blwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OSA9PT0gZS53aGljaCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChlLnByZXZlbnREZWZhdWx0KCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG0uZm9jdXMoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAodi5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJhcmlhLWxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB2LmZvY3VzKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJyZXNpemVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDAsIHIudHJpZ2dlckV2ZW50KShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdGkoZSwgW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0UGFkZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdCA9IGUuc3BsaXQoXCI6XCIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0biA9IE51bWJlcih0WzBdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KDEwMCAqIE51bWJlcih0WzFdKSkgLyBuICsgXCIlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFdpZHRoRnVsZmlsbEFzcGVjdFJhdGlvXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBvID0gZS5zcGxpdChcIjpcIiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpID0gTnVtYmVyKG9bMF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ciA9IE51bWJlcihvWzFdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdCA8IG4gKiAociAvIGkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IE1hdGguZmxvb3IoKGkgLyByKSAqIHQpICsgXCJweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiMTAwJVwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFF1ZXJ5U3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB0ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoZSkuZm9yRWFjaChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ICs9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiPVwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVbbl0gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCImXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQuc3Vic3RyKDAsIHQubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldFZpZGVvVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInlvdXR1YmVcIiA9PT0gdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldFlvdXR1YmVVcmwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS55b3V0dWJlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcInZpbWVvXCIgPT09IHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRWaW1lb1VybChlLnZpbWVvLCBuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcImZhY2Vib29rXCIgPT09IHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRGYWNlYm9va1VybChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmZhY2Vib29rLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcImN1c3RvbVwiID09PSB0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGUudXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0VmltZW9VcmxcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGZ1bmN0aW9uIChlLCB0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvL1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCI/XCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRRdWVyeVN0cmluZyhlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiZ2V0WW91dHViZVVybFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbiA9IHRoaXMuZ2V0UXVlcnlTdHJpbmcoZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICEwID09PSBlLm5vY29va2llXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiLy93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiP1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiLy93d3cueW91dHViZS5jb20vZW1iZWQvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiP1wiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImdldEZhY2Vib29rVXJsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIi8vd3d3LmZhY2Vib29rLmNvbS92Mi4xMC9wbHVnaW5zL3ZpZGVvLnBocD9ocmVmPWh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mYWNlYm9vay92aWRlb3MvXCIgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIiZcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFF1ZXJ5U3RyaW5nKGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJnZXRIdG1sXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBvID0gdGhpcy5nZXRQYWRkaW5nKGUucmF0aW8pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aSA9IGUuY2xhc3NOYW1lcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1xcbiAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlbyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmFyaWEub3Blbk1lc3NhZ2UgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiIGlkPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0JvZHkgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpLm1vZGFsVmlkZW9Jbm5lciArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnXCIgaWQ9XCJtb2RhbC12aWRlby1pbm5lci0nICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG4gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0lmcmFtZVdyYXAgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1wiIHN0eWxlPVwicGFkZGluZy1ib3R0b206JyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGkubW9kYWxWaWRlb0Nsb3NlQnRuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcganMtbW9kYWwtdmlkZW8tZGlzbWlzcy1idG5cIiBhcmlhLWxhYmVsPVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLmFyaWEuZGlzbWlzc0J0bk1lc3NhZ2UgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD0nNDYwJyBoZWlnaHQ9JzIzMCcgc3JjPVxcXCJcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiXFxcIiBmcmFtZWJvcmRlcj0nMCcgYWxsb3dmdWxsc2NyZWVuPVwiICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuYWxsb3dGdWxsU2NyZWVuICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgdGFiaW5kZXg9XCItMVwiIGFsbG93PVwiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZS5hbGxvd0F1dG9wbGF5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJhdXRvcGxheTtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiXCIpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgYWNjZWxlcm9tZXRlcjsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRlXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdChuLmRlZmF1bHQgPSB1KSwgKHQuZXhwb3J0cyA9IG4uZGVmYXVsdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIi4uL2xpYi91dGlsXCI6IDYsXG5cdFx0XHRcdFx0XCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIjogMSxcblx0XHRcdFx0XHRcImVzNi1vYmplY3QtYXNzaWduXCI6IDIsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0NTogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdHQuZXhwb3J0cyA9IGUoXCIuL2NvcmUvXCIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IFwiLi9jb3JlL1wiOiA0IH0sXG5cdFx0XHRdLFxuXHRcdFx0NjogW1xuXHRcdFx0XHRmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogITAgfSk7XG5cdFx0XHRcdFx0KG4uYXBwZW5kID0gZnVuY3Rpb24gKGUsIHQpIHtcblx0XHRcdFx0XHRcdHZhciBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRcdGZvciAobi5pbm5lckhUTUwgPSB0OyBuLmNoaWxkcmVuLmxlbmd0aCA+IDA7IClcblx0XHRcdFx0XHRcdFx0ZS5hcHBlbmRDaGlsZChuLmNoaWxkcmVuWzBdKTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdChuLmdldFVuaXFJZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHREYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpXG5cdFx0XHRcdFx0XHRcdCkudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0KG4ucmVtb3ZlID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0ZSAmJiBlLnBhcmVudE5vZGUgJiYgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQobi5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlLCB0KSB7XG5cdFx0XHRcdFx0XHRcdGUuY2xhc3NMaXN0XG5cdFx0XHRcdFx0XHRcdFx0PyBlLmNsYXNzTGlzdC5hZGQodClcblx0XHRcdFx0XHRcdFx0XHQ6IChlLmNsYXNzTmFtZSArPSBcIiBcIiArIHQpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQobi50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuXHRcdFx0XHRcdFx0XHR2YXIgbyA9IHZvaWQgMDtcblx0XHRcdFx0XHRcdFx0d2luZG93LkN1c3RvbUV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0PyAobyA9IG5ldyBDdXN0b21FdmVudCh0LCB7IGNhbmNlbGFibGU6ICEwIH0pKVxuXHRcdFx0XHRcdFx0XHRcdDogKChvID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSksXG5cdFx0XHRcdFx0XHRcdFx0ICBvLmluaXRDdXN0b21FdmVudCh0LCAhMSwgITEsIG4pKSxcblx0XHRcdFx0XHRcdFx0XHRlLmRpc3BhdGNoRXZlbnQobyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e30sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e30sXG5cdFx0WzNdXG5cdCk7XG5cdCQoXCIuanMtbW9kYWwtYnRuXCIpLm1vZGFsVmlkZW8oKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvanMvY29yZVwiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMvcXVlcnljcmFmdFwiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiOiAwLFxuXHRcImRpc3QtY3VzdG9tLXBsdWdpbnMvc29jaWFsLXNoYXJlXCI6IDAsXG5cdFwic3R5bGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29tcGxldGVfbW9ydGdhZ2VfdGhlbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29tcGxldGVfbW9ydGdhZ2VfdGhlbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvY29yZS5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3R5bGUuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZW1wLXNvY2lhbC1zaGFyZS5jc3NcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVtcC1rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzLmNzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3F1ZXJ5Y3JhZnRcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsX3Rlc3RpbW9uaWFsc19mb3JfbG9hbl9vZmZpY2Vyc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9rYWxlaWRpY28tY3VzdG9tLWNhbGN1bGF0b3JzXCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL3NvY2lhbC1zaGFyZVwiLFwic3R5bGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90ZW1wLWthbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnMuY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC1jdXN0b20tcGx1Z2lucy9xdWVyeWNyYWZ0XCIsXCJkaXN0LWN1c3RvbS1wbHVnaW5zL2thbF90ZXN0aW1vbmlhbHNfZm9yX2xvYW5fb2ZmaWNlcnNcIixcImRpc3QtY3VzdG9tLXBsdWdpbnMva2FsZWlkaWNvLWN1c3RvbS1jYWxjdWxhdG9yc1wiLFwiZGlzdC1jdXN0b20tcGx1Z2lucy9zb2NpYWwtc2hhcmVcIixcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdGVtcC1xdWVyeWNyYWZ0LmNzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIndpbmRvdyIsImVxdWFsaXplSGVpZ2h0c09wdGlvbnMiLCJicmVha3BvaW50cyIsIm1pbiIsIm1heCIsImFjdGlvbiIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNsb3NlQWxsIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwiZmluZCIsImF0dHIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIiRsaSIsInBhcmVudCIsImNsb3Nlc3QiLCIkc3VibWVudSIsImNoaWxkcmVuIiwidG9nZ2xlQ2xhc3MiLCJzaWJsaW5ncyIsInN0b3AiLCJzbGlkZVRvZ2dsZSIsImhhc0NsYXNzIiwicm9sZSIsImtleSIsInRyaWdnZXIiLCJjbGljayIsInNsaWRlRG93biIsImNzcyIsImVsZW1lbnQiLCJhZGRDbGFzcyIsInQiLCJuIiwibyIsImkiLCJhIiwibCIsInUiLCJyZXF1aXJlIiwiciIsImQiLCJFcnJvciIsImNvZGUiLCJjIiwiZXhwb3J0cyIsImNhbGwiLCJDdXN0b21FdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwcm90b3R5cGUiLCJFdmVudCIsIlR5cGVFcnJvciIsImFyZ3VtZW50cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiYXNzaWduIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsInBvbHlmaWxsIiwiZm4iLCJtb2RhbFZpZGVvIiwiZGVmaW5lIiwiYW1kIiwiY2hhbm5lbCIsImZhY2Vib29rIiwieW91dHViZSIsImF1dG9wbGF5IiwiY2NfbG9hZF9wb2xpY3kiLCJjb2xvciIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiZW5hYmxlanNhcGkiLCJlbmQiLCJmcyIsImgxIiwiaXZfbG9hZF9wb2xpY3kiLCJsb29wIiwibW9kZXN0YnJhbmRpbmciLCJtdXRlIiwib3JpZ2luIiwicGxheXNpbmxpbmUiLCJyZWwiLCJzaG93aW5mbyIsInN0YXJ0Iiwid21vZGUiLCJ0aGVtZSIsIm5vY29va2llIiwicmF0aW8iLCJ2aW1lbyIsImFwaSIsImF1dG9wYXVzZSIsImJ5bGluZSIsImNhbGxiYWNrIiwiaGVpZ2h0IiwibWF4aGVpZ2h0IiwibWF4d2lkdGgiLCJtdXRlZCIsInBsYXllcl9pZCIsInBvcnRyYWl0IiwidGl0bGUiLCJ3aWR0aCIsInhodG1sIiwiYWxsb3dGdWxsU2NyZWVuIiwiYWxsb3dBdXRvcGxheSIsImFuaW1hdGlvblNwZWVkIiwiY2xhc3NOYW1lcyIsIm1vZGFsVmlkZW9DbG9zZSIsIm1vZGFsVmlkZW9Cb2R5IiwibW9kYWxWaWRlb0lubmVyIiwibW9kYWxWaWRlb0lmcmFtZVdyYXAiLCJtb2RhbFZpZGVvQ2xvc2VCdG4iLCJhcmlhIiwib3Blbk1lc3NhZ2UiLCJkaXNtaXNzQnRuTWVzc2FnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwicyIsImYiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhZ05hbWUiLCJkYXRhc2V0IiwidmlkZW9JZCIsImdldFVuaXFJZCIsInZpZGVvVXJsIiwiZ2V0VmlkZW9VcmwiLCJnZXRIdG1sIiwiYXBwZW5kIiwidiIsImdldEVsZW1lbnRCeUlkIiwibSIsInAiLCJiIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldFdpZHRoRnVsZmlsbEFzcGVjdFJhdGlvIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJtYXhXaWR0aCIsImZvY3VzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIndoaWNoIiwiYWN0aXZlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRyaWdnZXJFdmVudCIsInNwbGl0IiwiTnVtYmVyIiwiTWF0aCIsImZsb29yIiwic3Vic3RyIiwiZ2V0WW91dHViZVVybCIsImdldFZpbWVvVXJsIiwiZ2V0RmFjZWJvb2tVcmwiLCJ1cmwiLCJnZXRRdWVyeVN0cmluZyIsImdldFBhZGRpbmciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJyYW5kb20iLCJ0b1VwcGVyQ2FzZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsImRpc3BhdGNoRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9