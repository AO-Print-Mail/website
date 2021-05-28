exports.id = 6858;
exports.ids = [6858];
exports.modules = {

/***/ 86858:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ ReviewsIoWidget; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38135);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const ReviewsIoWidget = (_ref) => {
  let {
    starColor = '#FE9339',
    numReviews = 20
  } = _ref,
      props = _objectWithoutProperties(_ref, ["starColor", "numReviews"]);

  const ReviewContainer = (0,_theme__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('div', {
    backgroundColor: '$white',
    py: '$4'
  });
  const ReviewWidgetMeta = `richSnippetReviewsWidgets("carousel-widget", { store: "https-www.aomail.com.au", primaryClr: "${starColor}", neutralClr: "#dbdcdd", reviewTextClr: "#32334A", widgetName: "carousel", layout: "fullWidth", numReviews: ${numReviews}, contentMode: "company;third-party", hideDates: false,})`;
  const {
    0: widgetScript,
    1: setWidgetScript
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const widgetScript = document.createElement('script');
    widgetScript.innerHTML = ReviewWidgetMeta;
    widgetScript.async = true;
    document.body.appendChild(widgetScript);
    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    id: "carousel-widget"
  });
};

/***/ })

};
;