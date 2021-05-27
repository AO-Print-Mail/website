exports.id = 4039;
exports.ids = [4039];
exports.modules = {

/***/ 27273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetlifyWorkaroundForm": function() { return /* binding */ NetlifyWorkaroundForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35222);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11240);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NetlifyWorkaroundForm = ({
  formFields,
  name
}) => {
  const {
    state: {
      userData
    }
  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_2__/* .useStateMachine */ .j_)({});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
    method: "POST",
    "data-netlify": "true",
    name: name,
    "aria-hidden": "true",
    hidden: true,
    className: (0,_theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_1__.visuallyHidden)(),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      type: "hidden",
      hidden: true,
      "aria-hidden": "true",
      name: "form-name",
      value: name
    }), Object.entries(_objectSpread(_objectSpread({}, userData), formFields)).map(([name, value]) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      type: "hidden",
      hidden: true,
      "aria-hidden": "true",
      tabIndex: -1,
      name: name //@ts-ignore
      ,
      value: value || ''
    }, name))]
  });
};

/***/ })

};
;