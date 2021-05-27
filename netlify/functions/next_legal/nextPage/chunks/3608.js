exports.id = 3608;
exports.ids = [3608,2749];
exports.modules = {

/***/ 23608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports resetLink, CtaLink, StyledLink */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63239);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _theme_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79973);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92640);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const resetLink = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .css */ .iv)('a', {
  textDecoration: 'none',
  color: 'unset'
});
const Cta = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref, ref) => {
  let {
    href,
    text,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "text", "onClick"]);

  const LinkEl = href ? 'a' : 'span';

  const classNames = _objectSpread(_objectSpread({}, resetLink()), props.className);

  function handleClick(e) {
    e.stopPropagation();
    onClick && onClick(e);
  }

  return /*#__PURE__*/_jsxs(HoverGroupFlex, _objectSpread(_objectSpread({
    ref: ref,
    as: LinkEl,
    onClick: handleClick,
    href: href,
    css: {
      display: 'inline-flex',
      alignSelf: 'flex-start'
    },
    className: classNames
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(Paragraph, {
      size: "s",
      as: "span",
      css: {
        color: '$blue',
        m: 0,
        [`&:hover, ${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
          color: '$B40'
        }
      },
      children: text
    }), /*#__PURE__*/_jsx(ArrowForward, {
      css: {
        willChange: 'transform',
        transition: 'transform 0.2s ease-out',
        color: '$blue',
        ml: '$2',
        alignSelf: 'center',
        [`${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
          transform: 'translateX($space$1)',
          color: '$B40 '
        }
      }
    })]
  }));
})));
const CtaLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref2, ref) => {
  let {
    text,
    href,
    to
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["text", "href", "to"]);

  if (to) {
    return /*#__PURE__*/_jsx(Link, {
      href: to,
      passHref: true,
      children: /*#__PURE__*/_jsx(Cta, _objectSpread({
        ref: ref,
        href: to,
        text: text
      }, props))
    });
  }

  return /*#__PURE__*/_jsx(Cta, _objectSpread({
    ref: ref,
    href: href,
    text: text
  }, props));
})));
const StyledAnchor = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('a', {
  color: '$blue',
  [`&:hover, ${_layout__WEBPACK_IMPORTED_MODULE_6__/* .HoverGroupFlex */ .Oe}:hover &, ${_layout__WEBPACK_IMPORTED_MODULE_6__/* .HoverGroup */ .C8}:hover &`]: {
    color: '$B40'
  },
  variants: {
    underline: {
      false: {
        textDecoration: 'none'
      }
    }
  }
});
const StyledLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref3, ref) => {
  let {
    text,
    href,
    to
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["text", "href", "to"]);

  const link = /*#__PURE__*/_jsx(StyledAnchor, _objectSpread(_objectSpread({
    ref: ref,
    href: href
  }, props), {}, {
    children: text
  }));

  if (to) return /*#__PURE__*/_jsx(Link, {
    href: to,
    passHref: true,
    children: link
  });
  return link;
})));

/***/ })

};
;