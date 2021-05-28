exports.id = 3992;
exports.ids = [3992];
exports.modules = {

/***/ 98102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockQuote */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);



const Wrapper = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  my: '$6',
  '@l': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '$4'
  }
});
const Background = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('figure', {
  display: 'block',
  position: 'relative',
  background: '$DA05',
  borderWidth: '$thin',
  borderColor: '$DA20',
  borderStyle: 'solid',
  margin: '0',
  pb: '$5',
  pt: '$1',
  pl: '$5',
  pr: '$4',
  br: '$3',
  '@m': {
    display: 'inline-block'
  },
  '@l': {
    gridColumnStart: '1',
    gridColumnEnd: 'span 3'
  }
});
const Decoration = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  width: '8px',
  btlr: '$3',
  bblr: '$3',
  position: 'absolute',
  height: '100%',
  background: '$darkBlue',
  left: '0',
  top: '0'
});
const BlockQuote = ({
  children
}) => {
  return /*#__PURE__*/_jsx(Wrapper, {
    children: /*#__PURE__*/_jsxs(Background, {
      children: [/*#__PURE__*/_jsx(Decoration, {}), children]
    })
  });
};

/***/ }),

/***/ 14559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports List, _ListItem, UnorderedList, OrderedList, ListItem */
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
const UnorderedList = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref, ref) => {
  let {
    as
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as"]);

  return /*#__PURE__*/_jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as
  }, props));
})));
const OrderedList = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref2, ref) => {
  let {
    as
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["as"]);

  return /*#__PURE__*/_jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as !== null && as !== void 0 ? as : 'ol'
  }, props));
})));
const ListItem = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref3, ref) => {
  let {
    children,
    icon,
    iconProps = {}
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "icon", "iconProps"]);

  const Mark = typeof icon === 'string' ? icons[icon] : icon;

  const {
    css = {}
  } = iconProps,
        iconRest = _objectWithoutProperties(iconProps, ["css"]);

  return /*#__PURE__*/_jsxs(_ListItem, _objectSpread(_objectSpread({
    mark: Mark ? 'disabled' : 'enabled',
    role: 'list',
    ref: ref
  }, props), {}, {
    children: [Mark && /*#__PURE__*/_jsx(Mark, _objectSpread(_objectSpread({}, iconRest), {}, {
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
})));

/***/ }),

/***/ 25407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Check */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);


const Check = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'Check',
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M22 5.5L8.7 20 2 13.6 3.6 12l5 4.8L20.3 4 22 5.5z",
    fill: "currentColor"
  })
});

/***/ }),

/***/ 78638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CheckLeaf */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);




const CheckLeaf = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'CheckLeaf',
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M0 21.6c0-3.34 0-5.02.22-6.42A18 18 0 0115.18.22C16.58 0 18.26 0 21.6 0c.37 0 .56 0 .71.02a2 2 0 011.67 1.67c.02.15.02.34.02.71 0 3.34 0 5.02-.22 6.42A18 18 0 018.82 23.78C7.42 24 5.74 24 2.4 24c-.37 0-.56 0-.71-.02A2 2 0 01.02 22.3C0 22.16 0 21.97 0 21.6z",
      fill: "#558C46"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 7.9L10.03 17 6 12.98l.98-.97 2.98 2.97 7-7.98 1.04.9z",
      fill: "#fff"
    })]
  })
});

/***/ }),

/***/ 42638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MailIllustration */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);




const MailIllustration = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'MailGraphic',
  viewBox: '0 0 280 218',
  defaultProps: {
    size: 'custom',
    title: 'Direct Mail Graphic',
    description: 'Conceptual geometic artwork to convey the Direct Mail process',
    role: 'img'
  },
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M187 94v62l-31-31V63l31 31z",
      fill: "#FE9339"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M187 125l-31-31",
      stroke: "#FA253A",
      strokeDasharray: "5 2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M124 218H0v-62l124 62z",
      fill: "#B6DDF6"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M62 156H0l62 31 62-31H62z",
      fill: "#00237D"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M124 156v62l-62-31 62-31z",
      fill: "url(#mailIllustrationGradient)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M218 156h31v31l-31-31zM218 125h31v31l-31-31z",
      fill: "#00237D"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M156 218h31c17 0 31-14 31-31h-31c-18 0-31 14-31 31z",
      fill: "#558C46"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M187 94v62l31-31V63l-31 31zM62 32v62l31 31V94L62 63l31 31V63L62 32z",
      fill: "#B6DDF6"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M156 125a62 62 0 00-63-62v62h63z",
      fill: "#242334"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M280 94h-62a31 31 0 0162 0z",
      fill: "#FA253A"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M218 94a31 31 0 0062 0h-62z",
      fill: "#0072CE"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M156 0a62 62 0 00-63 63h63V0z",
      fill: "#558C46"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M156 125l-32 31",
      stroke: "#558C46",
      strokeDasharray: "5 2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M93 125l31-31",
      stroke: "#fff",
      strokeDasharray: "5 2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M218 125l31-31",
      stroke: "#00237D",
      strokeDasharray: "5 2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
      cx: "140",
      cy: "47",
      rx: "15.6",
      ry: "15.5",
      fill: "#FE9339"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M156 63l-32-31",
      stroke: "#fff",
      strokeDasharray: "5 2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
        id: "mailIllustrationGradient",
        x1: "66.3",
        y1: "46.1",
        x2: "125.4",
        y2: "57.7",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
          stopColor: "#00217D"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
          offset: "100%",
          stopColor: "#0072CE"
        })]
      })
    })]
  })
});

/***/ }),

/***/ 16852:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: HomePattern

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/icons/createIcon.tsx + 1 modules
var createIcon = __webpack_require__(20017);
;// CONCATENATED MODULE: ./src/theme/icons/patterns/homePattern.tsx




const HomePattern = (0,createIcon/* createIcon */.I)({
  viewBox: '0 0 491 678',
  displayName: 'HomePattern',
  defaultProps: {
    title: 'Direct Mail and printing abstract art',
    description: 'A neo-geometric pattern visualising envelopes and folded paper.',
    role: 'img'
  },
  path: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
      opacity: ".9",
      children: [/*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#0F173C",
        d: "M429 122.6A122.6 122.6 0 00306.4 0v122.6H429z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#002A7D",
        d: "M306.4 370.2A122.6 122.6 0 00429 247.6H306.4v122.6z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FE9339",
        d: "M429 122.6h30.7v30.6L429 122.6zM429 182.6h30.7v30.7L429 182.6zM459.7 182.6h30.6v30.7l-30.6-30.7zM459.7 122.6h30.6v30.6l-30.6-30.6z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FE9339",
        d: "M429 152h30.7v30.6L429 152zM429 212h30.7v30.7L429 212.1zM459.7 212h30.6v30.7l-30.6-30.6zM459.7 152h30.6v30.6L459.7 152z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#B6DDF6",
        d: "M367.7 247.6h-61.3v-61.3l61.3 61.3zM367.7 186.3h-61.3V125l61.3 61.3zM429 247.6h-61.3v-61.3l61.3 61.3zM429 186.3h-61.3V125l61.3 61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FE9339",
        d: "M367.7 431.5h-61.3v-61.3l61.3 61.3zM367.7 492.8h-61.3v-61.3l61.3 61.3zM306.4 492.8h61.3V554l-61.3-61.2z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FE9339",
        d: "M306.4 431.5h61.3v61.3l-61.3-61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        stroke: "#EE3131",
        strokeDasharray: "5 2",
        d: "M367.7 492.8l-61.3-61.3"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#B6DDF6",
        d: "M245.2 676.6H0V554l245.2 122.6z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#00217D",
        fillRule: "evenodd",
        d: "M122.6 554H.6l122 61v.3l.2-.1.3.1v-.2l122-61H122.7z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "url(#paint0_linear)",
        d: "M245.2 554v122.6l-122.6-61.3L245.2 554z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#002A7D",
        d: "M429 555h61.7v61.7L429.1 555zM429 493.4h61.7V555l-61.6-61.6z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#558C46",
        d: "M368.3 678h61.3a61.3 61.3 0 0061.2-61.3h-61.2a61.3 61.3 0 00-61.3 61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#B6DDF6",
        d: "M183.9 370.2h-61.3v-61.3l61.3 61.3zM429 492.8h-61.3V554l61.3-61.2zM183.9 431.5h-61.3v-61.3l61.3 61.3zM429 431.5h-61.3v61.3l61.3-61.3zM122.6 431.5h61.3v61.3l-61.3-61.3zM367.7 431.5H429v-61.3l-61.3 61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#B6DDF6",
        d: "M429 431.5v61.3h-61.3l61.3-61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#002A7D",
        d: "M122.6 370.2h61.3v61.3l-61.3-61.3z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#10102B",
        d: "M306.4 492.8A122.6 122.6 0 00184 370.2v122.6h122.5z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#558C46",
        fillRule: "evenodd",
        d: "M106.6 54l77.3 77.2h-39.3c-21 0-38-17-38-38V53.9z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#006D38",
        fillRule: "evenodd",
        d: "M183.9 131.2l-77.3-77.3H146c21 0 38 17 38 38v39.3z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#397A39",
        d: "M184.1 131l49-49v31.3c0 9.8-7.8 17.7-17.6 17.7h-31.4z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#558C46",
        d: "M233.5 82L184 131.2V99.7c0-9.8 8-17.8 17.8-17.8h31.6zM306.4 247.6A122.6 122.6 0 00184 370.2h122.5V247.6zM490.7 370a61.7 61.7 0 00-61.6 61.7h61.6V370zM490.7 493.4a61.7 61.7 0 01-61.6-61.7h61.6v61.7z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        stroke: "#558C46",
        strokeDasharray: "5 2",
        d: "M306.4 492.8L245.2 554"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        stroke: "#00217D",
        strokeDasharray: "5 2",
        d: "M429 492.8l61.3-61.3"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FF212D",
        fillRule: "evenodd",
        d: "M183.9 253.7V131.2h0a61.3 61.3 0 100 122.5z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#FE9339",
        fillRule: "evenodd",
        d: "M183.9 131.2v122.5h-.1a61.3 61.3 0 000-122.5z",
        clipRule: "evenodd"
      }), /*#__PURE__*/jsx_runtime.jsx("circle", {
        cx: "275.8",
        cy: "339.5",
        r: "30.6",
        fill: "#FE9339"
      }), /*#__PURE__*/jsx_runtime.jsx("circle", {
        cx: "215.1",
        cy: "462.3",
        r: "30.6",
        fill: "#002A7D"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        stroke: "#fff",
        strokeDasharray: "5 2",
        d: "M306.4 370.2l-61.2-61.3"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: "#B6DDF6",
        d: "M429 247.6H306.4V125L429 247.6z"
      }), /*#__PURE__*/jsx_runtime.jsx("path", {
        stroke: "#fff",
        strokeDasharray: "5 2",
        d: "M183.9 492.8l61.3-61.3"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: "paint0_linear",
        x1: "130.5",
        x2: "247",
        y1: "337.6",
        y2: "360.6",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime.jsx("stop", {
          stopColor: "#00217D"
        }), /*#__PURE__*/jsx_runtime.jsx("stop", {
          offset: "1",
          stopColor: "#0072CE"
        })]
      })
    })]
  })
});
;// CONCATENATED MODULE: ./src/theme/icons/patterns/index.ts


/***/ })

};
;