exports.id = 3876;
exports.ids = [3876,7522,1587];
exports.modules = {

/***/ 10049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ FlatCard; },
/* harmony export */   "Z": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const FlatCard = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
  backgroundColor: '$white',
  overflow: 'hidden',
  br: '$5',
  p: '$3',
  '@l': {
    p: '$4'
  }
});
const Card = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(FlatCard, {
  boxShadow: '$3'
});

/***/ }),

/***/ 7522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ FullWidthFeatureContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _svg_cornerPatternDark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95594);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7211);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Background = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('div', {
  position: 'relative',
  background: '$N90',
  minHeight: '$10',
  pt: '$7',
  pb: '$6'
});
const BackgroundImage = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_svg_cornerPatternDark_svg__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
  opacity: '0.8',
  position: 'absolute',
  pointerEvents: 'none',
  maxWidth: '100%',
  width: '75%',
  top: '0',
  left: '0',
  '@m': {
    width: '50%'
  },
  '@l': {
    width: 'auto',
    height: '$10'
  }
});
const FullWidthFeatureContainer = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundImage, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
      children: children
    })]
  }));
};

/***/ }),

/***/ 92640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* binding */ Box; },
/* harmony export */   "kC": function() { return /* binding */ Flex; },
/* harmony export */   "sg": function() { return /* binding */ Column; },
/* harmony export */   "fh": function() { return /* binding */ ColumnWrapper; },
/* harmony export */   "L5": function() { return /* binding */ TextHolder; },
/* harmony export */   "i$": function() { return /* binding */ BreakoutTextHolder; },
/* harmony export */   "C8": function() { return /* binding */ HoverGroup; },
/* harmony export */   "Oe": function() { return /* binding */ HoverGroupFlex; }
/* harmony export */ });
/* unused harmony exports Grid, TextHolderClass */
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const Box = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
  variants: {
    rel: {
      true: {
        position: 'relative'
      }
    },
    fillHeight: {
      true: {
        height: '100%'
      }
    },
    alignCenter: {
      true: {
        mx: 'auto',
        alignSelf: 'center'
      }
    }
  }
});
const Flex = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Box, {
  display: 'flex',
  variants: {
    column: {
      true: {
        flexDirection: 'column'
      }
    },
    wrap: {
      true: {
        flexWrap: 'wrap'
      }
    }
  }
});
const Grid = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Box, {
  display: 'grid'
});
const Column = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Box, {
  position: 'relative',
  px: 'calc($space$3 / 2)',
  '@m': {
    px: 'calc($space$4 / 2)'
  },
  '@l': {
    px: 'calc($space$4 / 2)'
  },
  '@xl': {
    px: 'calc($space$5 / 2)'
  }
});
const ColumnWrapper = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Flex, {
  position: 'relative',
  mx: 'calc(-$space$3 / 2)',
  '@m': {
    mx: 'calc(-$space$4 / 2)'
  },
  '@l': {
    mx: 'calc(-$space$4 / 2)'
  },
  '@xl': {
    mx: 'calc(-$space$5 / 2)'
  }
});
const TextHolder = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
  position: 'relative',
  variants: {
    padX: {
      default: {
        px: '$2',
        '@m': {
          px: '$3'
        },
        '@l': {
          px: '$4'
        }
      },
      large: {
        px: '$3',
        '@m': {
          px: '$4'
        },
        '@l': {
          px: '$5'
        }
      },
      xLarge: {
        px: '$3',
        '@s': {
          px: '$4'
        },
        '@m': {
          px: '$5'
        },
        '@l': {
          px: '$6'
        }
      }
    },
    padY: {
      default: {
        py: '$2',
        '@m': {
          py: '$3'
        },
        '@l': {
          py: '$4'
        }
      },
      large: {
        py: '$3',
        '@m': {
          py: '$4'
        },
        '@l': {
          py: '$5'
        }
      },
      xLarge: {
        py: '$3',
        '@s': {
          py: '$4'
        },
        '@m': {
          py: '$5'
        },
        '@l': {
          py: '$6'
        }
      }
    }
  },
  defaultvariants: {
    padX: 'default'
  }
});
const TextHolderClass = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)({
  p: '$2',
  '@m': {
    p: '$3'
  },
  '@l': {
    p: '$4'
  }
});
const BreakoutTextHolder = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
  mx: '-$2',
  '@m': {
    mx: '-$3'
  },
  '@l': {
    mx: '-$4'
  }
});
const HoverGroup = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Box, {
  cursor: 'pointer'
});
const HoverGroupFlex = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(Flex, {
  cursor: 'pointer'
});

/***/ }),

/***/ 14559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "_ListItem": function() { return /* binding */ _ListItem; },
/* harmony export */   "UnorderedList": function() { return /* binding */ UnorderedList; },
/* harmony export */   "OrderedList": function() { return /* binding */ OrderedList; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const List = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
  my: '$5'
});
const _ListItem = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('li', {
  display: 'flex',
  mt: '$3',
  variants: {
    mark: {
      enabled: {
        '&::before': {
          alignSelf: 'flex-end',
          color: '$DA70',
          left: '0',
          content: `'•'`,
          fontSize: '1.25em',
          lineHeight: '1',
          textAlign: 'center',
          marginRight: '1em',
          verticalAlign: 'middle'
        }
      },
      disabled: {}
    },
    defaultVariants: {
      mark: 'enabled'
    }
  }
});
const UnorderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref, ref) => {
  let {
    as
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as
  }, props));
});
const OrderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref2, ref) => {
  let {
    as
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["as"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as !== null && as !== void 0 ? as : 'ol'
  }, props));
});
const ListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref3, ref) => {
  let {
    children,
    icon,
    iconProps = {}
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "icon", "iconProps"]);

  const Mark = typeof icon === 'string' ? _icons__WEBPACK_IMPORTED_MODULE_3__[icon] : icon;

  const {
    css = {}
  } = iconProps,
        iconRest = _objectWithoutProperties(iconProps, ["css"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListItem, _objectSpread(_objectSpread({
    mark: Mark ? 'disabled' : 'enabled',
    role: 'list',
    ref: ref
  }, props), {}, {
    children: [Mark && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mark, _objectSpread(_objectSpread({}, iconRest), {}, {
      css: _objectSpread({
        marginRight: '$3',
        mt: '$1',
        alignSelf: 'flex-start',
        flex: '0 0 $2',
        position: 'relative',
        '& + p': {
          flex: '1 1'
        }
      }, css)
    })), children]
  }));
});

/***/ }),

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X6": function() { return /* reexport */ Heading; },
  "XJ": function() { return /* reexport */ Heading2; },
  "aC": function() { return /* reexport */ Heading3; },
  "k8": function() { return /* reexport */ Heading4; },
  "nv": function() { return /* reexport */ typography_text/* Paragraph */.n; },
  "Dx": function() { return /* reexport */ title/* Title */.D; }
});

// UNUSED EXPORTS: Heading1, Heading5, Heading6, Text

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




/***/ }),

/***/ 35222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visuallyHidden": function() { return /* binding */ visuallyHidden; },
/* harmony export */   "visuallyHiddenUnlessActive": function() { return /* binding */ visuallyHiddenUnlessActive; },
/* harmony export */   "fullHeight": function() { return /* binding */ fullHeight; },
/* harmony export */   "fullWidth": function() { return /* binding */ fullWidth; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const visuallyHidden = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
});
const visuallyHiddenUnlessActive = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)({
  '$:not(:focus):not(:active)': {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  }
});
const fullHeight = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)({
  height: '100%',
  flex: '1 1 100%'
});
const fullWidth = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)({
  position: 'relative',
  width: '100vw',
  mx: '-50vw',
  left: '50%',
  right: '50%'
});

/***/ })

};
;