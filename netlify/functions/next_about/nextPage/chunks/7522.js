exports.id = 7522;
exports.ids = [7522];
exports.modules = {

/***/ 7522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FullWidthFeatureContainer */
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

  return /*#__PURE__*/_jsxs(Background, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsx(BackgroundImage, {}), /*#__PURE__*/_jsx(Container, {
      children: children
    })]
  }));
};

/***/ })

};
;