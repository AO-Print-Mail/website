exports.id = 1587;
exports.ids = [1587];
exports.modules = {

/***/ 10049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Card; }
/* harmony export */ });
/* unused harmony export FlatCard */
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

/***/ 92640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* binding */ Box; },
/* harmony export */   "kC": function() { return /* binding */ Flex; },
/* harmony export */   "sg": function() { return /* binding */ Column; },
/* harmony export */   "fh": function() { return /* binding */ ColumnWrapper; },
/* harmony export */   "L5": function() { return /* binding */ TextHolder; },
/* harmony export */   "C8": function() { return /* binding */ HoverGroup; },
/* harmony export */   "Oe": function() { return /* binding */ HoverGroupFlex; }
/* harmony export */ });
/* unused harmony exports Grid, TextHolderClass, BreakoutTextHolder */
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