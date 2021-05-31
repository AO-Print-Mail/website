exports.id = 8148;
exports.ids = [8148];
exports.modules = {

/***/ 28148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": function() { return /* reexport */ ReviewsIoWidget; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
;// CONCATENATED MODULE: ./src/components/reviews-io-widget/src/reviews-io-widget.tsx


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const ReviewsIoWidget = (_ref) => {
  let {
    starColor = '#FE9339',
    numReviews = 20
  } = _ref,
      props = _objectWithoutProperties(_ref, ["starColor", "numReviews"]);

  const ReviewContainer = (0,theme/* styled */.zo)('div', {
    backgroundColor: '$white',
    py: '$4'
  });
  const ReviewWidgetMeta = `richSnippetReviewsWidgets("carousel-widget", { store: "https-www.aomail.com.au", primaryClr: "${starColor}", neutralClr: "#dbdcdd", reviewTextClr: "#32334A", widgetName: "carousel", layout: "fullWidth", numReviews: ${numReviews}, contentMode: "company;third-party", hideDates: false,})`;
  const {
    0: widgetScript,
    1: setWidgetScript
  } = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    const widgetScript = document.createElement('script');
    widgetScript.innerHTML = ReviewWidgetMeta;
    widgetScript.async = true;
    document.body.appendChild(widgetScript);
    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    id: "carousel-widget"
  });
};
;// CONCATENATED MODULE: ./src/components/reviews-io-widget/index.ts


/***/ })

};
;