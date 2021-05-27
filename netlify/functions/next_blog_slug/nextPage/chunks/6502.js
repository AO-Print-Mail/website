exports.id = 6502;
exports.ids = [6502];
exports.modules = {

/***/ 56502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TwoColumnList": function() { return /* reexport */ TwoColumnList; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
;// CONCATENATED MODULE: ./src/components/two-column-list/src/two-column-list.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const TwoColUl = (0,theme/* styled */.zo)(theme/* UnorderedList */.QI, {
  '-webkit-columns': '50% 2',
  '-moz-columns': '50% 2',
  columns: '2 auto',
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
const Li = (0,theme/* styled */.zo)(theme/* ListItem */.HC, {
  display: 'inline-flex',
  width: '100%',
  my: '$2',
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
const TwoColumnList = (_ref) => {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  return /*#__PURE__*/jsx_runtime.jsx(theme/* BreakoutTextHolder */.i$, _objectSpread(_objectSpread({
    css: {
      my: '$6'
    }
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(theme/* FlatCard */.VP, {
      css: {
        boxShadow: '$1'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(TwoColUl, {
        children: items.map(item => /*#__PURE__*/jsx_runtime.jsx(Li, {
          icon: "CheckLeaf",
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
            size: "s",
            css: {
              mt: '0'
            },
            children: item
          })
        }, item))
      })
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/two-column-list/index.ts


/***/ })

};
;