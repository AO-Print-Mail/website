exports.id = 7615;
exports.ids = [7615];
exports.modules = {

/***/ 98102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockQuote": function() { return /* binding */ BlockQuote; }
/* harmony export */ });
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Decoration, {}), children]
    })
  });
};

/***/ }),

/***/ 15211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZJ": function() { return /* binding */ ArrowForward; },
/* harmony export */   "xh": function() { return /* binding */ ArrowBack; },
/* harmony export */   "Kh": function() { return /* binding */ ChevronUp; },
/* harmony export */   "_M": function() { return /* binding */ ChevronDown; },
/* harmony export */   "_Q": function() { return /* binding */ ChevronRight; }
/* harmony export */ });
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

/***/ 25407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jr": function() { return /* binding */ Check; },
/* harmony export */   "qB": function() { return /* binding */ SuccessCheck; },
/* harmony export */   "$_": function() { return /* binding */ ErrorCheck; }
/* harmony export */ });
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
const SuccessCheck = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'SuccessCheck',
  viewBox: '0 0 60 60',
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      filter: "url(#filter0_dd)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#558C46",
        d: "M10 28a20 20 0 1140 0 20 20 0 01-40 0z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M40 21.5L26.7 36 20 29.6l1.6-1.6 5 4.8L38.3 20l1.7 1.5z",
        clipRule: "evenodd"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
        id: "filter0_dd",
        width: "60",
        height: "60",
        x: "0",
        y: "0",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMorphology", {
          in: "SourceAlpha",
          radius: "2",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
          dy: "4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
          stdDeviation: "3.5"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          values: "0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.168627 0 0 0 0.06 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMorphology", {
          in: "SourceAlpha",
          radius: "2",
          result: "effect2_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
          dy: "2"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
          stdDeviation: "6"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0.138889 0 0 0 0 0.490196 0 0 0 0.02 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          in2: "effect1_dropShadow",
          result: "effect2_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          in: "SourceGraphic",
          in2: "effect2_dropShadow",
          result: "shape"
        })]
      })
    })]
  })
});
const ErrorCheck = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'SuccessCheck',
  viewBox: '0 0 60 60',
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      filter: "url(#filter0_dd)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M10 28C10 16.9543 18.9543 8 30 8C41.0457 8 50 16.9543 50 28C50 39.0457 41.0457 48 30 48C18.9543 48 10 39.0457 10 28Z",
        fill: "#DE1334"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M31 33L32 17H28L29 33H31Z",
        fill: "white"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M30 39C31.1046 39 32 38.1046 32 37C32 35.8954 31.1046 35 30 35C28.8954 35 28 35.8954 28 37C28 38.1046 28.8954 39 30 39Z",
        fill: "white"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
        id: "filter0_dd",
        x: "0",
        y: "0",
        width: "60",
        height: "60",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
          "flood-opacity": "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMorphology", {
          radius: "2",
          operator: "erode",
          in: "SourceAlpha",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
          dy: "4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
          stdDeviation: "3.5"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.168627 0 0 0 0.06 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMorphology", {
          radius: "2",
          operator: "erode",
          in: "SourceAlpha",
          result: "effect2_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feOffset", {
          dy: "2"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
          stdDeviation: "6"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0.138889 0 0 0 0 0.490196 0 0 0 0.02 0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow",
          result: "effect2_dropShadow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect2_dropShadow",
          result: "shape"
        })]
      })
    })]
  })
});

/***/ }),

/***/ 78638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ CheckLeaf; }
/* harmony export */ });
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ MailIllustration; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": function() { return /* reexport */ HomePattern; }
});

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

/***/ })

};
;