exports.id = 3591;
exports.ids = [3591];
exports.modules = {

/***/ 73591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MissionCallout": function() { return /* reexport */ MissionCallout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./node_modules/datocms-structured-text-utils/dist/cjs/index.js
var dist_cjs = __webpack_require__(85444);
;// CONCATENATED MODULE: ./src/components/mission-callout/src/mission-callout.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CalloutText = (0,theme/* styled */.zo)(theme/* Title */.Dx, {
  color: '$LA90'
});
const BoldText = (0,theme/* styled */.zo)('span', {
  color: '$lightBlue',
  textGradient: 'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)'
});
const HighlightedText = (0,theme/* styled */.zo)('span', {
  color: '$orange',
  textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)'
});
const rulez = [(0,cjs.renderRule)(dist_cjs.isParagraph, ({
  key,
  children
}) => /*#__PURE__*/jsx_runtime.jsx(CalloutText, {
  children: children
}, key)), (0,cjs.renderRule)(function (node) {
  var _node$marks;

  return node.type === 'span' && !!((_node$marks = node.marks) !== null && _node$marks !== void 0 && _node$marks.includes('strong'));
}, ({
  node,
  key
}) => /*#__PURE__*/jsx_runtime.jsx(BoldText, {
  children: node.value
}, key)), (0,cjs.renderRule)(function (node) {
  var _node$marks2;

  return node.type === 'span' && !!((_node$marks2 = node.marks) !== null && _node$marks2 !== void 0 && _node$marks2.includes('highlight'));
}, ({
  node,
  key
}) => /*#__PURE__*/jsx_runtime.jsx(HighlightedText, {
  children: node.value
}, key))];
const MissionCallout = (_ref) => {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  return (
    /*#__PURE__*/
    //@ts-expect-error
    jsx_runtime.jsx(theme/* FullWidthFeatureContainer */.WX, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
        css: {
          '@xl': {
            mx: '8.33%'
          }
        },
        children: /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText, {
          customRules: rulez //@ts-ignore
          ,
          data: data.callout
        })
      })
    }))
  );
};
;// CONCATENATED MODULE: ./src/components/mission-callout/index.ts


/***/ })

};
;