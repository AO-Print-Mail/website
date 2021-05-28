exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 80662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": function() { return /* reexport */ LinkCard; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./node_modules/datocms-structured-text-utils/dist/cjs/index.js
var dist_cjs = __webpack_require__(85444);
;// CONCATENATED MODULE: ./src/components/link-card/src/link-card.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CardBackground = (0,theme/* styled */.zo)(theme/* Card */.Zb, {
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  color: '$DBA70',
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  minHeight: '100%',
  '&:hover': {
    transform: 'translateY(-$space$1)',
    cursor: 'pointer'
  }
});
const textRules = [(0,cjs.renderRule)(dist_cjs.isParagraph, node => /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
  size: "s",
  css: {
    color: 'inherit',
    mt: '$1'
  },
  children: node.children
}, node.key))];
const ImgWrapper = (0,theme/* styled */.zo)('div', {
  order: '-1',
  br: '$2',
  overflow: 'hidden'
});
const Img = (0,theme/* styled */.zo)(cjs.Image, {
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  [`${theme/* HoverGroup */.C8}:hover &`]: {
    transform: 'scale(1.01)'
  }
});

const Summary = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText, {
    data: data,
    customRules: textRules
  });
};

const LinkCard = (_ref) => {
  let {
    description,
    image,
    link,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["description", "image", "link", "title"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(CardBackground, _objectSpread(_objectSpread({
    as: theme/* HoverGroup */.C8
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading6 */.Cd, {
      as: "h2",
      marginTop: "small",
      children: /*#__PURE__*/jsx_runtime.jsx("a", {
        href: link,
        style: {
          textDecoration: 'none',
          color: 'unset',
          fontFamily: 'unset'
        },
        children: title
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
      css: {
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        flex: '1 1'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(Summary, {
        data: description
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {
        size: "large"
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* CtaLink */.eu, {
        text: "Read more"
      })]
    }), image && /*#__PURE__*/jsx_runtime.jsx(ImgWrapper, {
      children: /*#__PURE__*/jsx_runtime.jsx(Img, {
        data: image
      })
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/link-card/index.ts


/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.xu; },
/* harmony export */   "sg": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.fh; },
/* harmony export */   "kC": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.kC; },
/* harmony export */   "C8": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.C8; },
/* harmony export */   "L5": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.L5; },
/* harmony export */   "W2": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W; },
/* harmony export */   "TR": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "FE": function() { return /* reexport safe */ _pageWrapper__WEBPACK_IMPORTED_MODULE_4__.F; },
/* harmony export */   "eu": function() { return /* reexport safe */ _links__WEBPACK_IMPORTED_MODULE_5__.eu; },
/* harmony export */   "vs": function() { return /* reexport safe */ _contentWrapper__WEBPACK_IMPORTED_MODULE_6__.v; },
/* harmony export */   "DY": function() { return /* reexport safe */ _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__.D; },
/* harmony export */   "EU": function() { return /* reexport safe */ _radioButton__WEBPACK_IMPORTED_MODULE_10__.E; },
/* harmony export */   "II": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.AZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.Kx; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_12__.X; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_15__.Z; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _spacer__WEBPACK_IMPORTED_MODULE_18__.L; },
/* harmony export */   "OC": function() { return /* reexport safe */ _border__WEBPACK_IMPORTED_MODULE_19__.O; },
/* harmony export */   "wY": function() { return /* reexport safe */ _controlLayout__WEBPACK_IMPORTED_MODULE_21__.w; }
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92640);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7211);
/* harmony import */ var _resetButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70827);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91238);
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62918);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23608);
/* harmony import */ var _contentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78224);
/* harmony import */ var _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82264);
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98102);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14559);
/* harmony import */ var _radioButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20203);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26952);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99672);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78882);
/* harmony import */ var _headerBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54771);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10049);
/* harmony import */ var _fullWidthFeatureContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7522);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5596);
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64480);
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77860);
/* harmony import */ var _listCardWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(84546);
/* harmony import */ var _controlLayout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71000);























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

/***/ 15211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZJ": function() { return /* binding */ ArrowForward; },
/* harmony export */   "_Q": function() { return /* binding */ ChevronRight; }
/* harmony export */ });
/* unused harmony exports ArrowBack, ChevronUp, ChevronDown */
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20017);

const ArrowForward = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Forward Arrow',
  d: 'M3 13h14.2l-5.6 5.6L13 20l8-8-8-8-1.4 1.4 5.6 5.6H3v2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Forward arrow'
  }
});
const ArrowBack = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Back Arrow',
  d: 'M21 11H6.8l5.6-5.6L11 4l-8 8 8 8 1.4-1.4L6.8 13H21v-2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Back arrow'
  }
});
const ChevronUp = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Up',
  d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Up'
  }
});
const ChevronDown = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Down',
  d: 'M7.4 7.8l4.6 4.6 4.6-4.6L18 9.2l-6 6-6-6 1.4-1.4z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Down'
  }
});
const ChevronRight = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Right',
  d: 'M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6-6-6z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Right'
  }
});

/***/ }),

/***/ 63239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phone": function() { return /* reexport safe */ _phone__WEBPACK_IMPORTED_MODULE_0__.L; },
/* harmony export */   "CovidSafe": function() { return /* reexport safe */ _covidSafe__WEBPACK_IMPORTED_MODULE_1__.J; },
/* harmony export */   "ArrowForward": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__.ZJ; },
/* harmony export */   "Close": function() { return /* reexport safe */ _close__WEBPACK_IMPORTED_MODULE_7__.x; },
/* harmony export */   "Facebook": function() { return /* reexport safe */ _facebook__WEBPACK_IMPORTED_MODULE_9__.s; },
/* harmony export */   "LinkedIn": function() { return /* reexport safe */ _linkedIn__WEBPACK_IMPORTED_MODULE_10__.y; }
/* harmony export */ });
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97919);
/* harmony import */ var _covidSafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38040);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20017);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25407);
/* harmony import */ var _checkLeaf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78638);
/* harmony import */ var _mailIllustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42638);
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15211);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78313);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16852);
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38475);
/* harmony import */ var _linkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6879);












/***/ }),

/***/ 38135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.iv; },
/* harmony export */   "wU": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.wU; },
/* harmony export */   "zo": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.zo; },
/* harmony export */   "nL": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.nL; },
/* harmony export */   "XJ": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.XJ; },
/* harmony export */   "k8": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.k8; },
/* harmony export */   "Cd": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.Cd; },
/* harmony export */   "nv": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.nv; },
/* harmony export */   "W0": function() { return /* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_2__.W; },
/* harmony export */   "s1": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Facebook; },
/* harmony export */   "yh": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.LinkedIn; },
/* harmony export */   "LP": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Phone; },
/* harmony export */   "xu": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.xu; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Zb; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.XZ; },
/* harmony export */   "wY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.wY; },
/* harmony export */   "sg": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.fh; },
/* harmony export */   "W2": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.W2; },
/* harmony export */   "vs": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.vs; },
/* harmony export */   "DY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.DY; },
/* harmony export */   "eu": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.eu; },
/* harmony export */   "kC": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.kC; },
/* harmony export */   "C8": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.C8; },
/* harmony export */   "II": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.AZ; },
/* harmony export */   "TR": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.TR; },
/* harmony export */   "EU": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.EU; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.LZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Kx; },
/* harmony export */   "L5": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.L5; },
/* harmony export */   "Sh": function() { return /* reexport module object */ _utils_utilityClasses__WEBPACK_IMPORTED_MODULE_6__; }
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79973);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18988);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34176);
/* harmony import */ var _utils_forwardRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62626);
/* harmony import */ var _utils_utilityClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35222);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89704);










/***/ }),

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nL": function() { return /* reexport */ Heading1; },
  "XJ": function() { return /* reexport */ Heading2; },
  "k8": function() { return /* reexport */ Heading4; },
  "Cd": function() { return /* reexport */ Heading6; },
  "nv": function() { return /* reexport */ typography_text/* Paragraph */.n; }
});

// UNUSED EXPORTS: Heading, Heading3, Heading5, Text, Title

// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
// EXTERNAL MODULE: ./src/theme/utils/setComponentProps.tsx
var setComponentProps = __webpack_require__(55424);
;// CONCATENATED MODULE: ./src/theme/typography/heading.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headingSizes = {
  1: {
    fontSize: '$h1m',
    lineHeight: '$h1m',
    marginBottom: '-9px',
    letterSpacing: '$xcosy',
    color: '$DBA100',
    '@m': {
      fontSize: '$h1t',
      lineHeight: '$h1t',
      marginBottom: '-7px'
    },
    '@l': {
      fontSize: '$h1d',
      lineHeight: '$h1d',
      marginBottom: '-7px'
    }
  },
  2: {
    fontSize: '$h2m',
    lineHeight: '$h2m',
    marginBottom: '-8px',
    color: '$DBA90',
    '@m': {
      fontSize: '$h2t',
      lineHeight: '$h2t',
      marginBottom: '-6px',
      letterSpacing: '$xcosy'
    },
    '@l': {
      fontSize: '$h2d',
      lineHeight: '$h2d',
      marginBottom: '-5px'
    }
  },
  3: {
    fontSize: '$h3m',
    lineHeight: '$h3m',
    marginBottom: '-8px',
    color: '$DBA85',
    '@m': {
      fontSize: '$h3t',
      lineHeight: '$h3t',
      marginBottom: '-7px'
    },
    '@l': {
      fontSize: '$h3d',
      lineHeight: '$h3d',
      marginBottom: '-6px'
    }
  },
  4: {
    fontSize: '$h4m',
    lineHeight: '$h4m',
    marginBottom: '-7px',
    color: '$DBA80',
    '@m': {
      fontSize: '$h4t',
      lineHeight: '$h4t',
      marginBottom: '-6px'
    },
    '@l': {
      fontSize: '$h4d',
      lineHeight: '$h4d',
      marginBottom: '-5px'
    }
  },
  5: {
    fontSize: '$h5m',
    lineHeight: '$h5m',
    marginBottom: '-8px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h5t',
      lineHeight: '$h5t',
      marginBottom: '-5px'
    },
    '@l': {
      fontSize: '$h5d',
      lineHeight: '$h5d',
      marginBottom: '-5px'
    }
  },
  6: {
    fontSize: '$h6m',
    lineHeight: '$h6m',
    marginBottom: '-6px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h6t',
      lineHeight: '$h6t',
      marginBottom: '-5px'
    },
    '@l': {
      fontSize: '$h6d',
      lineHeight: '$h6d',
      marginBottom: '-4px'
    }
  }
};
const Heading = (0,stitches_config/* styled */.zo)('h1', {
  fontWeight: '$bold',
  mt: '$4',
  overflow: 'visible',
  letterSpacing: '$cosy',
  variants: {
    level: _objectSpread({}, headingSizes),
    color: {
      primary: {
        color: '$DBA100'
      },
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
      },
      false: {
        textAlign: 'auto'
      }
    },
    alignRight: {
      true: {
        textAlign: 'right'
      },
      false: {
        textAlign: 'auto'
      }
    },
    alignCenter: {
      true: {
        textAlign: 'center'
      },
      false: {
        textAlign: 'auto'
      }
    },
    marginTop: {
      none: {
        mt: '0'
      },
      default: {
        '@m': {
          mt: '$5'
        },
        '@l': {
          mt: '$6'
        }
      },
      small: {
        mt: '$2',
        '@m': {
          mt: '$3'
        },
        '@l': {
          mt: '$4'
        }
      }
    }
  },
  compoundVariants: [{
    level: '1',
    color: 'light',
    css: {
      color: '$LA100'
    }
  }, {
    level: '2',
    color: 'light',
    css: {
      color: '$LA90'
    }
  }, {
    level: '3',
    color: 'light',
    css: {
      color: '$LA85'
    }
  }, {
    level: '4',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }, {
    level: '5',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }, {
    level: '6',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }],
  defaultVariants: {
    marginTop: 'normal',
    alignRight: 'false',
    alignCenter: 'false'
  }
});
const Heading1 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h1',
  level: '1'
});
const Heading2 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h2',
  level: '2'
});
const Heading3 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h3',
  level: '3'
});
const Heading4 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h4',
  level: '4'
});
const Heading5 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h5',
  level: '5'
});
const Heading6 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h6',
  level: '6'
});
// EXTERNAL MODULE: ./src/theme/typography/title.tsx
var title = __webpack_require__(69286);
// EXTERNAL MODULE: ./src/theme/typography/text.tsx
var typography_text = __webpack_require__(31950);
;// CONCATENATED MODULE: ./src/theme/typography/index.ts




/***/ })

};
;