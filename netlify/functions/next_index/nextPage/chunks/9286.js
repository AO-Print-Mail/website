exports.id = 9286;
exports.ids = [9286];
exports.modules = {

/***/ 69286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Title */
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