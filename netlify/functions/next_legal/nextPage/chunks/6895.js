exports.id = 6895;
exports.ids = [6895];
exports.modules = {

/***/ 26895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ QuoteCta; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38135);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75843);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49772);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35172);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49540);
/* harmony import */ var _components_temp_quote_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20494);
/* harmony import */ var _components_modal_src_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95778);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Bg = (0,_theme__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_theme__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
  position: 'relative',
  pt: '$5',
  pb: '$6',
  '@m': {
    px: '$5'
  },
  '@l': {
    pb: '$6',
    px: '12.25%'
  },
  '@xl': {
    pb: '$6',
    px: '25%'
  }
});
const Content = (0,_theme__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
});
const contentVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 25
  }
};
const QuoteCta = (_ref) => {
  let {
    heading,
    paragraph
  } = _ref,
      props = _objectWithoutProperties(_ref, ["heading", "paragraph"]);

  const contentControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useAnimation */ ._)();

  function handleOpenModal({
    modalIsOpen,
    toggleModal
  }) {
    return async function (e) {
      if (!modalIsOpen) {
        e.preventDefault();
        await contentControls.start('hidden');
        toggleModal();
      }
    };
  }

  function handleCloseModal({
    modalIsOpen,
    toggleModal
  }) {
    return async function (e) {
      if (modalIsOpen) {
        e.preventDefault();
        toggleModal();
        setTimeout(contentControls.start, 300, 'visible');
      }
    };
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .AnimateSharedLayout */ .s, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_src_modal__WEBPACK_IMPORTED_MODULE_8__/* .Modal */ .u, {
      opens: ({
        modalIsOpen,
        toggleModal
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_temp_quote_form__WEBPACK_IMPORTED_MODULE_3__/* .TempQuoteForm */ .D, {
        toggle: handleCloseModal({
          modalIsOpen,
          toggleModal
        }),
        active: modalIsOpen
      }),
      children: ({
        modalIsOpen,
        toggleModal
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bg, _objectSpread(_objectSpread({
        as: framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div,
        layoutId: "quoteCta"
      }, props), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
          layout: true,
          animate: contentControls,
          variants: contentVariants,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_1__/* .Title */ .Dx, {
            layout: true,
            layoutId: "quote-title",
            as: framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.h2,
            level: "3",
            alignCenter: true,
            children: heading || 'Get a quote for your next job'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_1__/* .TextHolder */ .L5, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_1__/* .Paragraph */ .nv, {
              alignCenter: true,
              size: "m",
              children: paragraph || 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .LZ, {
            size: "large"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
            css: {
              '@initial': {
                minWidth: '75%',
                height: '$5'
              },
              '@s': {
                minWidth: '50%'
              },
              '@m': {
                minWidth: '$12'
              }
            },
            type: "primary",
            onClick: handleOpenModal({
              modalIsOpen,
              toggleModal
            }),
            children: "Start your quote"
          })]
        })
      }))
    })
  });
};

/***/ })

};
;