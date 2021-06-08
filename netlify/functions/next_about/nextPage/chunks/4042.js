exports.id = 4042;
exports.ids = [4042];
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

/***/ 97919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ Phone; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);


const Phone = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'Phone',
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M4.827 10.521c1.92 3.459 5.013 6.282 8.786 8.055l2.934-2.69c.36-.33.893-.44 1.36-.293 1.493.453 3.106.697 4.76.697.733 0 1.333.55 1.333 1.222v4.266C24 22.45 23.4 23 22.667 23 10.147 23 0 13.699 0 2.222 0 1.55.6 1 1.333 1H6c.733 0 1.333.55 1.333 1.222 0 1.528.267 2.995.76 4.364.147.427.04.904-.333 1.246l-2.933 2.69z",
    fill: "currentColor"
  })
});

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