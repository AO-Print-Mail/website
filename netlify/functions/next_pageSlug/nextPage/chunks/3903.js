exports.id = 3903;
exports.ids = [3903];
exports.modules = {

/***/ 58410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": function() { return /* binding */ updateUserData; }
/* harmony export */ });
/* unused harmony exports updateDirectMailForm, updateFeedbackFormForm, resetFormData, createQuote, updateQuote, deleteQuote */
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94138);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function updateDirectMailForm(state, payload) {
  var _state$formData;

  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.formData), {}, {
      directMailForm: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm), payload)
    })
  });
}
function updateFeedbackFormForm(state, payload) {
  var _state$formData2;

  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.formData), {}, {
      feedbackForm: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$formData2 = state.formData) === null || _state$formData2 === void 0 ? void 0 : _state$formData2.feedbackForm), payload)
    })
  });
}
function resetFormData(state, formName) {
  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state.formData), {}, {
      [formName]: store.formData[formName]
    })
  });
}
function updateUserData(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    userData: _objectSpread(_objectSpread({}, state.userData), payload)
  });
}
function createQuote(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests, payload]
  });
}
function updateQuote(state, payload) {
  const i = state.quoteRequests.findIndex(quote => quote.id === payload.id);
  if (i < 0) return state;
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests.slice(0, i), payload, ...state.quoteRequests.slice(i + 1)]
  });
}
function deleteQuote(state, payload) {
  const i = state.quoteRequests.findIndex(quote => quote.id === payload.quoteId);
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests.slice(0, i), ...state.quoteRequests.slice(i + 1)]
  });
}

/***/ }),

/***/ 80723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.h; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94138);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58410);



/***/ }),

/***/ 54771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HeaderBar */
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
/* harmony import */ var _contentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78224);


const HeaderBar = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(_contentWrapper__WEBPACK_IMPORTED_MODULE_1__/* .ContentWrapper */ .v, {
  position: 'relative',
  width: '100%',
  flex: '0',
  backgroundColor: '$white',
  py: '$3',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid'
});

/***/ }),

/***/ 78882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Bg = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  position: 'relative',
  mx: '$2',
  '@m': {
    mx: '$3'
  },
  '@l': {
    mx: '$4'
  },
  my: '$2'
});
const Fill = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  width: '100%',
  willChange: 'transform'
});
const ProgressBar = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref, ref) => {
  let {
    progress
  } = _ref,
      props = _objectWithoutProperties(_ref, ["progress"]);

  const {
    0: {
      newProgress,
      previousProgress
    },
    1: setProgress
  } = useState({
    newProgress: 0,
    previousProgress: 0
  });
  useEffect(() => {
    const updateProgress = () => setProgress({
      newProgress: progress.get(),
      previousProgress: progress.getPrevious()
    });

    updateProgress();
    const listener = progress.onChange(updateProgress);
    return listener;
  }, []);
  return /*#__PURE__*/_jsx(Bg, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/_jsx(Fill, {
      as: motion.div,
      initial: {
        x: `-${100 - previousProgress}%`
      },
      animate: {
        x: `-${100 - newProgress}%`
      }
    })
  }));
})));

/***/ }),

/***/ 89704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ breakpoints; }
/* harmony export */ });
/* unused harmony export breakpointPixelValues */
const breakpointPixelValues = {
  s: 360,
  m: 640,
  l: 960,
  xl: 1280
};
const breakpoints = {
  s: `(min-width: 360px)`,
  m: `(min-width: 640px)`,
  l: `(min-width: 960px)`,
  xl: `(min-width: 1300px)`,
  s_only: `(max-width: 640px) and (min-width: 360px)`,
  m_only: `(max-width: 960px) and (min-width: 640px)`,
  l_only: `(max-width: 1300px) and (min-width: 960px)`,
  s_m_only: `(max-width: 960px) and (min-width: 360px)`,
  initial_max: `(max-width: 360px)`,
  s_max: `(max-width: 640px)`,
  m_max: `(max-width: 960px)`
};

/***/ }),

/***/ 46372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jU": function() { return /* binding */ isBrowser; },
/* harmony export */   "Ts": function() { return /* binding */ __DEV__; }
/* harmony export */ });
/* unused harmony exports isNumber, isNotNumber, isNumeric, isArray, isEmptyArray, isFunction, isDefined, isUndefined, isObject, isEmptyObject, isNotEmptyObject, isNull, isString, isInputEvent, isEmpty */
// Number assertions
function isNumber(value) {
  return typeof value === 'number';
}
const isNotNumber = value => typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
function isNumeric(value) {
  return value != null && value - parseFloat(value) + 1 >= 0;
} // Array assertions

function isArray(value) {
  return Array.isArray(value);
}
const isEmptyArray = value => isArray(value) && value.length === 0; // Function assertions

function isFunction(value) {
  return typeof value === 'function';
} // Generic assertions

const isDefined = value => typeof value !== 'undefined' && value !== undefined;
const isUndefined = value => typeof value === 'undefined' || value === undefined; // Object assertions

const isObject = value => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
};
const isEmptyObject = value => isObject(value) && Object.keys(value).length === 0;
function isNotEmptyObject(value) {
  return value && !isEmptyObject(value);
}
const isNull = value => value == null; // String assertions

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
} // Event assertions

function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
} // Empty assertions

const isEmpty = value => {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === '') return true;
  return false;
};
function isBrowser() {
  return false;
} // eslint-disable-next-line @typescript-eslint/naming-convention

const __DEV__ =  false && 0;

/***/ }),

/***/ 78161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DEV__": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.Ts; },
/* harmony export */   "isBrowser": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.jU; }
/* harmony export */ });
/* harmony import */ var _assertion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46372);
/* harmony import */ var _text_transforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54425);




/***/ }),

/***/ 54425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zW": function() { return /* binding */ toCamelCase; }
/* harmony export */ });
/* unused harmony exports markdownToHtml, htmlToDast, markdownToDast */
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18835);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_utils_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96469);
/* harmony import */ var unist_utils_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unist_utils_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12861);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76388);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rehype_raw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78818);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_rehype__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17532);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rehype_stringify__WEBPACK_IMPORTED_MODULE_5__);







var parse5 = __webpack_require__(42394);



var gfm = __webpack_require__(10043);

var breaks = __webpack_require__(82558);

const processor = unified__WEBPACK_IMPORTED_MODULE_0___default()().use((remark_parse__WEBPACK_IMPORTED_MODULE_2___default())).use(gfm).use(breaks).use((remark_rehype__WEBPACK_IMPORTED_MODULE_4___default()), {
  allowDangerousHtml: true
}).use((rehype_raw__WEBPACK_IMPORTED_MODULE_3___default())).use((rehype_stringify__WEBPACK_IMPORTED_MODULE_5___default()));
const markdownToHtml = async md => {
  const result = await processor.process(md).then(res => res.toString());
  return result;
};
const htmlToDast = async html => {
  return parse5ToStructuredText(parse5.parse(html, {
    sourceCodeLocationInfo: true
  }), {
    preprocess: tree => {
      //@ts-ignore
      findAll(tree, node => {
        if (node.type === 'element' && node.tagName === 'del') {
          node.tagName = 's';
        }
      });
    },
    newlines: true
  }).then(res => res);
};
const markdownToDast = async md => {
  const html = await markdownToHtml(md).then(res => res);
  const dast = await htmlToDast(html).then(res => res);
  return dast;
};
const toCamelCase = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/\s+/g, '');

/***/ })

};
;