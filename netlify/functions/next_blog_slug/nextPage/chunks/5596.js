exports.id = 5596;
exports.ids = [5596];
exports.modules = {

/***/ 5596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Breadcrumbs */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92640);
/* harmony import */ var _theme_typography_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31950);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var _theme_icons_arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15211);
/* harmony import */ var _theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35222);









const A = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_typography_text__WEBPACK_IMPORTED_MODULE_4__/* .Paragraph */ .n, {
  color: '$DBA70',
  textDecoration: 'none',
  p: '$1',
  br: '$2',
  '&:hover': {
    color: '$DBA80',
    background: '$DBA10'
  }
});
const Symbol = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_icons_arrows__WEBPACK_IMPORTED_MODULE_6__/* .ChevronRight */ ._Q, {
  color: '$DBA50',
  size: '$2'
});
const Ul = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('ul', {
  listStyle: 'none',
  p: '0',
  m: '0'
});
const Li = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('li', {
  display: 'inline-block'
});
const Breadcrumbs = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(({
  links
}, ref) => {
  const bdLinks = [{
    name: 'Home',
    url: '/'
  }, ...links];
  return /*#__PURE__*/_jsxs(Flex, {
    as: "nav",
    css: {
      alignItems: 'center'
    },
    ref: ref,
    children: [/*#__PURE__*/_jsx("span", {
      className: visuallyHidden(),
      children: "Breadcrumb Navigation"
    }), /*#__PURE__*/_jsx(Ul, {
      children: bdLinks.map((link, i) => /*#__PURE__*/_jsxs(Li, {
        children: [i > 0 && /*#__PURE__*/_jsx(Symbol, {}), /*#__PURE__*/_jsx(Link, {
          href: link.url,
          passHref: true,
          children: /*#__PURE__*/_jsxs(A, {
            size: "5",
            as: "a",
            children: [/*#__PURE__*/_jsx("span", {
              className: visuallyHidden(),
              children: "Back to"
            }), link.name, /*#__PURE__*/_jsx("span", {
              className: visuallyHidden(),
              children: "page"
            })]
          })
        }, i)]
      }, i))
    })]
  });
})));

/***/ })

};
;