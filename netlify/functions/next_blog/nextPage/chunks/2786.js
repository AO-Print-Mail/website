exports.id = 2786;
exports.ids = [2786];
exports.modules = {

/***/ 72786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FeatureParagraphWithImage": function() { return /* reexport */ FeatureParagraphWithImage; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/lib/datocms/structuredText.tsx
var structuredText = __webpack_require__(36330);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
;// CONCATENATED MODULE: ./src/components/feature-paragraph-with-image/src/feature-paragraph-with-image.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FeatureImage = (0,theme/* styled */.zo)(cjs.Image, {
  mt: '$5',
  height: 'auto',
  size: '$12',
  '@l': {
    mx: '16.67%',
    size: 'unset'
  },
  variants: {
    oval: {
      true: {
        br: '50%'
      }
    }
  }
});
const innerImageStyle = (0,theme/* css */.iv)({
  m: '$4'
});
const FeatureParagraphWithImage = (_ref) => {
  let {
    image,
    paragraph,
    heading,
    crop,
    background,
    imagePosition
  } = _ref,
      props = _objectWithoutProperties(_ref, ["image", "paragraph", "heading", "crop", "background", "imagePosition"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* ColumnWrapper */.fh, _objectSpread(_objectSpread({
    css: {
      '@initial': {
        flexDirection: 'column',
        mt: '$4'
      },
      '@m': {
        flexDirection: 'row',
        alignItems: 'center',
        mt: '$5'
      },
      '@l': {
        mt: '$6'
      }
    }
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, {
      css: {
        '@m': {
          pr: '$2'
        },
        '@xl': imagePosition === 'left' ? {
          mr: '8.33%'
        } : {
          ml: '8.33%'
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* TextHolder */.L5, {
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
          as: "h2",
          css: {
            mt: '$2'
          },
          children: heading
        }), /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText, {
          customRules: (0,structuredText/* structuredTextRules */.dr)({}),
          data: paragraph.value
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, _objectSpread(_objectSpread({
      css: {
        '@initial': {
          alignSelf: 'center',
          flex: '0 0 auto'
        },
        '@m': {
          flex: '0 0 40%'
        },
        '@l': {
          flex: '0 0 40%',
          order: imagePosition === 'left' ? '-1' : 1
        } //'@xl': imagePosition === 'left' ? { ml: '8.33%' } : { mr: '8.33%' },

      }
    }, props), {}, {
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* TextHolder */.L5, {
        children: /*#__PURE__*/jsx_runtime.jsx(FeatureImage, {
          imageClassName: innerImageStyle(),
          oval: crop,
          data: image.responsiveImage
        })
      })
    }))]
  }));
};
;// CONCATENATED MODULE: ./src/components/feature-paragraph-with-image/index.ts


/***/ })

};
;