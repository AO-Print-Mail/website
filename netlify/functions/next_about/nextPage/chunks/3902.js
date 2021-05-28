exports.id = 3902;
exports.ids = [3902,5596,77,9286];
exports.modules = {

/***/ 39690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": function() { return /* reexport */ ArticleSummary; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/atoms/index.ts
var atoms = __webpack_require__(34176);
// EXTERNAL MODULE: ./src/theme/typography/index.ts + 1 modules
var typography = __webpack_require__(79973);
// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
// EXTERNAL MODULE: ./node_modules/datocms-structured-text-utils/dist/cjs/index.js
var cjs = __webpack_require__(85444);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var dist_cjs = __webpack_require__(6354);
;// CONCATENATED MODULE: ./src/components/article-summary/src/article-summary.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Updated = (0,stitches_config/* styled */.zo)(typography/* Paragraph */.nv, {
  color: '$DBA70'
});
const structuredTextRulez = [(0,dist_cjs.renderRule)(cjs.isParagraph, ({
  key,
  children
}) => /*#__PURE__*/jsx_runtime.jsx(typography/* Paragraph */.nv, {
  size: "m",
  children: children
}, key))];
const ArticleSummary = (_ref) => {
  let {
    title,
    lastUpdated,
    summary,
    breadcrumbLinks
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "lastUpdated", "summary", "breadcrumbLinks"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(atoms/* Box */.xu, _objectSpread(_objectSpread({}, props), {}, {
    children: [breadcrumbLinks && /*#__PURE__*/jsx_runtime.jsx(atoms/* Breadcrumbs */.Oo, {
      links: breadcrumbLinks
    }), /*#__PURE__*/jsx_runtime.jsx(atoms/* Spacer */.LZ, {
      size: breadcrumbLinks ? 'small' : 'large'
    }), /*#__PURE__*/jsx_runtime.jsx(typography/* Title */.Dx, {
      color: "primaryGradient",
      css: {
        my: '0'
      },
      children: title
    }), lastUpdated && /*#__PURE__*/(0,jsx_runtime.jsxs)(Updated, {
      size: "s",
      children: ["Last updated ", lastUpdated]
    }), /*#__PURE__*/jsx_runtime.jsx(atoms/* Box */.xu, {
      css: {
        '@m': {
          pr: '$5'
        },
        '@l': {
          pr: '$6'
        }
      },
      children: /*#__PURE__*/jsx_runtime.jsx(dist_cjs.StructuredText, {
        data: summary,
        customRules: structuredTextRulez
      })
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/article-summary/index.ts


/***/ }),

/***/ 5596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ Breadcrumbs; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92640);
/* harmony import */ var _theme_typography_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31950);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var _theme_icons_arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15211);
/* harmony import */ var _theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35222);









const A = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_typography_text__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .n, {
  color: '$DBA70',
  textDecoration: 'none',
  p: '$1',
  br: '$2',
  '&:hover': {
    color: '$DBA80',
    background: '$DBA10'
  }
});
const Symbol = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_icons_arrows__WEBPACK_IMPORTED_MODULE_6__/* .ChevronRight */ ._Q, {
  color: '$DBA50',
  size: '$2'
});
const Ul = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('ul', {
  listStyle: 'none',
  p: '0',
  m: '0'
});
const Li = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('li', {
  display: 'inline-block'
});
const Breadcrumbs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  links
}, ref) => {
  const bdLinks = [{
    name: 'Home',
    url: '/'
  }, ...links];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    as: "nav",
    css: {
      alignItems: 'center'
    },
    ref: ref,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: (0,_theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_7__.visuallyHidden)(),
      children: "Breadcrumb Navigation"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Ul, {
      children: bdLinks.map((link, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Li, {
        children: [i > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Symbol, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
          href: link.url,
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, {
            size: "5",
            as: "a",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (0,_theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_7__.visuallyHidden)(),
              children: "Back to"
            }), link.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (0,_theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_7__.visuallyHidden)(),
              children: "page"
            })]
          })
        }, i)]
      }, i))
    })]
  });
});

/***/ }),

/***/ 64480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ Spacer; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const Spacer = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('span', {
  display: 'block',
  flex: '0 0 $space$3',
  height: '$space$3',
  minHeight: '$space$3',
  variants: {
    size: {
      none: {
        display: 'none'
      },
      xsmall: {
        flex: '0 0 $space$1',
        height: '$space$1',
        minHeight: '$space$1'
      },
      small: {
        flex: '0 0 $space$2',
        height: '$space$2',
        minHeight: '$space$2'
      },
      large: {
        flex: '0 0 $space$4',
        height: '$space$4',
        minHeight: '$space$4'
      },
      xlarge: {
        flex: '0 0 $space$5',
        height: '$space$5',
        minHeight: '$space$5'
      }
    }
  }
});

/***/ }),

/***/ 69286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const titleSizes = {
  1: {
    fontSize: '$t1m',
    lineHeight: '$t1m',
    marginBottom: '-13px',
    letterSpacing: '$xcosy',
    '@m': {
      fontSize: '$t1t',
      lineHeight: '$t1t',
      marginBottom: '-14px'
    },
    '@l': {
      fontSize: '$t1d',
      lineHeight: '$t1d',
      marginBottom: '-17px'
    }
  },
  2: {
    fontSize: '$t2m',
    lineHeight: '$t2m',
    marginBottom: '-10px',
    '@m': {
      fontSize: '$t2t',
      lineHeight: '$t2t',
      marginBottom: '-11px',
      letterSpacing: '$xcosy'
    },
    '@l': {
      fontSize: '$t2d',
      lineHeight: '$t2d',
      marginBottom: '-15px'
    }
  },
  3: {
    fontSize: '$t3m',
    lineHeight: '$t3m',
    marginBottom: '-9px',
    letterSpacing: '$cosy',
    '@m': {
      fontSize: '$t3t',
      lineHeight: '$t3t',
      marginBottom: '-10px'
    },
    '@l': {
      fontSize: '$t3d',
      lineHeight: '$t3d',
      marginBottom: '-12px'
    }
  }
};
const Title = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('h1', {
  color: '$DBA100',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  marginTop: '$4',
  '@m': {
    marginTop: '$5'
  },
  '@l': {
    marginTop: '$6'
  },
  variants: {
    level: _objectSpread({}, titleSizes),
    color: {
      light: {
        color: '$LA100'
      },
      primaryGradient: {
        textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)'
      },
      lightGradient: {
        textGradient: 'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)'
      },
      orangeGradient: {
        textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)'
      }
    },
    alignLeft: {
      true: {
        textAlign: 'left'
      }
    },
    alignRight: {
      true: {
        textAlign: 'right'
      }
    },
    alignCenter: {
      true: {
        textAlign: 'center'
      }
    }
  },
  defaultVariants: {
    level: '1'
  }
});

/***/ })

};
;