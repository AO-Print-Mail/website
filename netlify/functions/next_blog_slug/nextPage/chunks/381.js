exports.id = 381;
exports.ids = [381];
exports.modules = {

/***/ 381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SideBySideParagraphs": function() { return /* reexport */ SideBySideParagraphs; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./src/lib/datocms/structuredText.tsx
var structuredText = __webpack_require__(36330);
;// CONCATENATED MODULE: ./src/components/side-by-side-paragraphs/src/side-by-side-paragraphs.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ColWrap = (0,theme/* styled */.zo)(theme/* ColumnWrapper */.fh, {
  flexFlow: 'column nowrap',
  '@m': {
    flexFlow: 'row nowrap'
  },
  '@l': {
    px: '8.335%'
  }
});
const Col = (0,theme/* styled */.zo)(theme/* Column */.sg, {
  '@m': {
    flex: '1 1 50%'
  }
});

const Text = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText, {
    data: data,
    customRules: (0,structuredText/* structuredTextRules */.dr)({
      paragraphProps: {
        size: 's'
      }
    })
  });
};

const Bg = (0,theme/* styled */.zo)('div', {
  my: '$7'
});
const SideBySideParagraphs = (_ref) => {
  let {
    leftHeading,
    leftParagraph,
    rightHeading,
    rightParagraph
  } = _ref,
      props = _objectWithoutProperties(_ref, ["leftHeading", "leftParagraph", "rightHeading", "rightParagraph"]);

  return /*#__PURE__*/jsx_runtime.jsx(Bg, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ColWrap, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Col, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* TextHolder */.L5, {
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading3 */.aC, {
              children: leftHeading
            }), /*#__PURE__*/jsx_runtime.jsx(Text, {
              data: leftParagraph
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Col, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* TextHolder */.L5, {
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading3 */.aC, {
              children: rightHeading
            }), /*#__PURE__*/jsx_runtime.jsx(Text, {
              data: rightParagraph
            })]
          })
        })]
      })
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/side-by-side-paragraphs/index.ts


/***/ })

};
;