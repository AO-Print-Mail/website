exports.id = 9206;
exports.ids = [9206];
exports.modules = {

/***/ 9206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalBackground": function() { return /* binding */ ModalBackground; },
/* harmony export */   "ModalBody": function() { return /* binding */ ModalBody; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _lib_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21967);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38135);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49772);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35172);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69283);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ScreenWrapper = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('div', {
  position: 'fixed',
  tlbr: '0',
  zIndex: '$5',
  overflow: 'auto'
});
const BackDrop = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div, {
  zIndex: '$4',
  position: 'fixed',
  tlbr: '0',
  background: '$DA50',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80'
  }
});
const ModalWrapper = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)('div', {
  position: 'relative',
  my: '$6',
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  variants: {
    height: {
      contain: {
        height: '480px',
        '@s': {
          height: '640px'
        },
        '@m': {
          height: '848px'
        },
        '@l': {
          height: '640px'
        },
        '@xl': {
          height: '768px'
        }
      }
    },
    width: {
      s: {
        width: '100%',
        '@m': {
          width: '83.33%'
        },
        '@l': {
          width: '66.67%'
        },
        '@xl': {
          width: '50%'
        }
      },
      m: {
        width: '100%',
        '@l': {
          width: '83.33%'
        },
        '@xl': {
          width: '66.67%'
        }
      },
      l: {
        width: '100%',
        '@xl': {
          width: '83.33%'
        }
      },
      full: {
        width: '100%'
      }
    },
    mobileWidth: {
      full: {
        '@m_max': {
          height: 'auto',
          minHeight: '100vh',
          minWidth: '100vw',
          my: '0',
          mx: '50%',
          left: '-50vw',
          right: '-50vw',
          p: '0'
        }
      }
    }
  },
  defaultVariants: {
    width: 'full'
  }
});
const backdropMotionVariants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const ModalBackground = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
  position: 'absolute',
  p: '0',
  tlbr: '0',
  variants: {
    mobileWidth: {
      full: {
        '@m_max': {
          m: 0,
          br: '0'
        }
      },
      contain: {}
    }
  },
  defaultVariants: {
    mobileWidth: 'contain'
  }
});
const modalMotionVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 48
  }
};
const ModalBody = (_ref) => {
  let {
    layoutId,
    children,
    toggle,
    mobileWidth,
    width,
    showCloseButton = false,
    main,
    controls,
    hideControlsBorder
  } = _ref,
      props = _objectWithoutProperties(_ref, ["layoutId", "children", "toggle", "mobileWidth", "width", "showCloseButton", "main", "controls", "hideControlsBorder"]);

  const backDropControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .useAnimation */ ._)();
  const closeButtonControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .useAnimation */ ._)();
  const [isPresent, safeToRemove] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .usePresence */ .oO)();

  async function modalAnimateOut() {
    await backDropControls.start('hidden');
    safeToRemove();
  }

  async function handleUnmount() {
    setTimeout(modalAnimateOut, 50);
  }

  function handleMount() {
    backDropControls.start('visible');
    closeButtonControls.start('visible');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleMount();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isPresent) {
      handleUnmount();
    }
  }, [isPresent]);
  const [bgAnimations, wpAnimations] = layoutId ? [{
    layoutId
  }, {}] : [{
    variants: modalMotionVariants,
    initial: 'hidden',
    animate: backDropControls
  }, {
    variants: modalMotionVariants,
    initial: 'hidden',
    animate: backDropControls
  }];

  function stopPropagationOnClick(e) {
    e.stopPropagation();
  }

  async function handleToggle() {
    await closeButtonControls.start('clicked');
    toggle();
  }

  function handleClick() {
    handleToggle();
  }

  return (0,_lib_react__WEBPACK_IMPORTED_MODULE_2__/* .ClientOnlyPortal */ .H)({
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackDrop, {
        initial: "hidden",
        animate: backDropControls,
        variants: backdropMotionVariants
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScreenWrapper, {
        onClick: handleClick,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .ColumnWrapper */ .fh, {
            css: {
              display: 'block'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .sg, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalWrapper, _objectSpread(_objectSpread(_objectSpread({
                as: framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div,
                mobileWidth: mobileWidth,
                onClick: stopPropagationOnClick,
                width: width
              }, wpAnimations), props), {}, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalBackground, _objectSpread(_objectSpread({
                  as: framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div,
                  layoutId: layoutId,
                  layout: true
                }, bgAnimations), {}, {
                  mobileWidth: mobileWidth
                })), children]
              }))
            })
          })
        })
      })]
    }),
    selector: '#portal-modal'
  });
};

/***/ })

};
;