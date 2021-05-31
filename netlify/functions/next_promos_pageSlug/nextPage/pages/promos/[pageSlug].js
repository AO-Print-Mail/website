/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 86562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ FormStepControls; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75843);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38135);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49772);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FormStepControls = (_ref) => {
  let {
    isOpen,
    isSubmitting,
    formName,
    buttonLabel,
    buttonOnClick,
    buttonColor,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isOpen", "isSubmitting", "formName", "buttonLabel", "buttonOnClick", "buttonColor", "children"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
    css: {
      maxWidth: '32rem'
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      as: framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.div,
      css: {
        flex: '0 0',
        pb: '$2',
        '@l': {
          mx: '$6'
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
        fullWidth: true,
        size: "cta",
        css: {
          display: 'block',
          flex: '1',
          '@l': {}
        },
        isLoading: isSubmitting,
        type: formName ? 'submit' : undefined,
        form: formName !== null && formName !== void 0 ? formName : undefined,
        onClick: buttonOnClick,
        color: buttonColor,
        children: buttonLabel
      })
    })
  });
};

/***/ }),

/***/ 58410:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h3": function() { return /* binding */ updateDirectMailForm; },
/* harmony export */   "ff": function() { return /* binding */ updateFeedbackFormForm; },
/* harmony export */   "ap": function() { return /* binding */ resetFormData; },
/* harmony export */   "Al": function() { return /* binding */ updateUserData; }
/* harmony export */ });
/* unused harmony exports createQuote, updateQuote, deleteQuote */
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94138);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function updateDirectMailForm(state, payload) {
  var _state$formData;

  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.formData), {}, {
      directMailForm: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm), payload)
    })
  });
}
function updateFeedbackFormForm(state, payload) {
  var _state$formData2;

  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.formData), {}, {
      feedbackForm: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$formData2 = state.formData) === null || _state$formData2 === void 0 ? void 0 : _state$formData2.feedbackForm), payload)
    })
  });
}
function resetFormData(state, formName) {
  return _objectSpread(_objectSpread({}, state), {}, {
    formData: _objectSpread(_objectSpread({}, state.formData), {}, {
      [formName]: _store__WEBPACK_IMPORTED_MODULE_0__/* .store.formData */ .h.formData[formName]
    })
  });
}
function updateUserData(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    userData: _objectSpread(_objectSpread({}, state.userData), payload)
  });
}
function createQuote(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests, payload]
  });
}
function updateQuote(state, payload) {
  const i = state.quoteRequests.findIndex(quote => quote.id === payload.id);
  if (i < 0) return state;
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests.slice(0, i), payload, ...state.quoteRequests.slice(i + 1)]
  });
}
function deleteQuote(state, payload) {
  const i = state.quoteRequests.findIndex(quote => quote.id === payload.quoteId);
  return _objectSpread(_objectSpread({}, state), {}, {
    quoteRequests: [...state.quoteRequests.slice(0, i), ...state.quoteRequests.slice(i + 1)]
  });
}

/***/ }),

/***/ 80723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   "ap": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.ap; },
/* harmony export */   "h3": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.h3; },
/* harmony export */   "ff": function() { return /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.ff; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94138);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58410);



/***/ }),

/***/ 5035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _pageSlug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/lib/datocms/datocms.ts + 1 modules
var datocms = __webpack_require__(12660);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/components/layout/index.ts + 9 modules
var layout = __webpack_require__(33801);
// EXTERNAL MODULE: ./src/components/client-logo-banner/src/client-logo-banner.tsx + 1 modules
var client_logo_banner = __webpack_require__(72444);
// EXTERNAL MODULE: ./src/components/reviews-io-widget/src/reviews-io-widget.tsx
var reviews_io_widget = __webpack_require__(86858);
// EXTERNAL MODULE: ./src/lib/datocms/structuredText.tsx
var structuredText = __webpack_require__(36330);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./src/components/button/index.ts
var components_button = __webpack_require__(75843);
// EXTERNAL MODULE: ./src/theme/icons/phone.tsx
var phone = __webpack_require__(97919);
;// CONCATENATED MODULE: ./src/components/header-landing/src/header.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const NavContainer = (0,theme/* styled */.zo)('div', {});
function Header(_ref) {
  let {
    sticky = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["sticky"]);

  return /*#__PURE__*/jsx_runtime.jsx(theme/* HeaderBar */.h_, _objectSpread(_objectSpread({
    as: "header"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
      css: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* Logo */.TR, {
            size: {
              '@initial': 'regular',
              '@m': 'large',
              '@l': 'xlarge'
            }
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
        as: "a",
        href: "tel:+61296456777",
        leftIcon: /*#__PURE__*/jsx_runtime.jsx(phone/* Phone */.L, {
          size: "matchFontSize"
        }),
        style: "naked",
        children: "(02) 9645 6777"
      })]
    })
  }));
}
;// CONCATENATED MODULE: ./src/components/header-landing/index.ts

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.js
var use_motion_value = __webpack_require__(70572);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js + 3 modules
var AnimateSharedLayout = __webpack_require__(85646);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js + 20 modules
var motion_minimal = __webpack_require__(49772);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/lib/little-state-machine/actions.ts
var little_state_machine_actions = __webpack_require__(58410);
;// CONCATENATED MODULE: ./src/lib/react/breakpoints/useWindowSize.ts

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = (0,react.useState)({
    width: undefined,
    height: undefined
  });
  (0,react.useEffect)(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
;// CONCATENATED MODULE: ./src/lib/react/breakpoints/useBreakpoints.ts



function useBreakpoints() {
  const {
    width
  } = useWindowSize();
  const bp = (0,react.useMemo)(() => {
    function setBreakpoints(acc, [k, v]) {
      return width >= v ? [...acc, k] : acc;
    }

    return Object.entries(theme/* breakpoints */.AV).reduce(setBreakpoints, []);
  }, [width]);
  return bp;
}
;// CONCATENATED MODULE: ./src/lib/react/breakpoints/index.ts


;// CONCATENATED MODULE: ./src/components/quote-form-direct-mail/src/wrapper.tsx


function wrapper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wrapper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wrapper_ownKeys(Object(source), true).forEach(function (key) { wrapper_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wrapper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Frame = (0,theme/* styled */.zo)(theme/* Card */.Zb, {
  position: 'fixed',
  zIndex: '$3',
  left: '0',
  right: '0',
  bottom: '0',
  minHeight: '$8',
  transform: 'translateY(100%)',
  transition: 'transform 0.2s ease-out',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  '&.visible': {
    transform: 'translateY(0)'
  },
  '@l': {
    transform: 'translateY(0)',
    minHeight: '42rem',
    height: '100%',
    position: 'relative',
    top: '$3',
    ml: '$3',
    mr: '$3',
    mt: '$3',
    width: 'calc(50% - 48px)'
  },
  '@xl': {
    width: 'calc(100% / 12 * 5 - 64px)'
  },
  '@m_max': {
    br: '0'
  }
});
const Wrapper = (_ref) => {
  let props = Object.assign({}, _ref);
  const frameRef = (0,react.useRef)();

  const setVisible = () => frameRef.current.classList.add('visible');

  (0,react.useEffect)(() => {
    setTimeout(setVisible, 2000);
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(Frame, wrapper_objectSpread({
    ref: frameRef
  }, props));
};
// EXTERNAL MODULE: ./src/components/modal/src/modal.tsx
var modal = __webpack_require__(95778);
// EXTERNAL MODULE: ./src/components/landing-page-quote-form/src/bottomBarControls.tsx
var bottomBarControls = __webpack_require__(86562);
;// CONCATENATED MODULE: ./src/components/quote-form-direct-mail/src/intro.tsx




function intro_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = intro_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function intro_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FormImage = (0,theme/* styled */.zo)('div', {
  display: 'block',
  position: 'absolute',
  height: '$9',
  alignSelf: 'flex-end',
  right: '-48px',
  top: '-40px',
  '@s': {
    height: '$10',
    right: '-40px'
  },
  transition: 'opacity 0.4s',
  willChange: 'opacity',
  variants: {
    isOpen: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0.5
      }
    }
  }
});
const Content = (0,theme/* styled */.zo)('div', {
  flex: '1 1',
  opacity: '0',
  position: 'absolute',
  transition: {
    opacity: '0.2s ease-in-out'
  },
  '@l': {
    position: 'static',
    opacity: '1'
  },
  variants: {
    isOpen: {
      true: {
        position: 'static',
        opacity: '1'
      }
    }
  }
});
const contentContainerVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const contentChildrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 1000
      }
    }
  }
};
const QuoteIntro = (_ref) => {
  let {
    keyword = 'direct mail',
    changeStep,
    isSubmitting,
    toggleIsOpen,
    isOpen,
    setSubmitting,
    breakpoints
  } = _ref,
      props = intro_objectWithoutProperties(_ref, ["keyword", "changeStep", "isSubmitting", "toggleIsOpen", "isOpen", "setSubmitting", "breakpoints"]);

  const isDesktop = breakpoints.includes('l');

  function handleClick(e) {
    e.preventDefault();

    if (isOpen) {
      changeStep('1');
    } else if (!isDesktop) {
      toggleIsOpen();
    } else {
      toggleIsOpen();
      changeStep('1');
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(FormImage, {
      layout: true,
      isOpen: isDesktop || isOpen,
      as: motion_minimal.m.div,
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* MailIllustration */.d5, {
        layout: true,
        as: motion_minimal.m.svg,
        css: {
          height: '100%'
        }
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Content, {
      as: motion_minimal.m.div,
      layout: true,
      isOpen: isDesktop || isOpen,
      children: /*#__PURE__*/jsx_runtime.jsx(motion_minimal.m.div, {
        layout: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
          as: motion_minimal.m.div,
          variants: contentContainerVariants,
          css: {
            maxWidth: '32rem',
            pt: '$6',
            '@s': {
              pt: '$7'
            }
          },
          initial: "closed",
          animate: "open",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Heading2 */.XJ, {
            as: motion_minimal.m.h2,
            alignCenter: true,
            color: "primaryGradient",
            css: {
              mt: '0'
            },
            variants: contentChildrenVariants,
            children: ["Get a ", keyword, " quote online"]
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {
            size: "small"
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
            as: motion_minimal.m.p,
            alignCenter: true,
            size: "m",
            variants: contentChildrenVariants,
            children: "You can expect to receive a quote on the same day so that your job can start asap."
          }), !!breakpoints.length && /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
            as: motion_minimal.m.p,
            alignCenter: true,
            size: "m",
            variants: contentChildrenVariants,
            children: "We\u2019ll contact you to clarify any important details that help us plan the right approach and best price."
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      css: {
        maxWidth: '32rem',
        zIndex: '$1',
        flex: '0 0'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
        as: motion_minimal.m.div,
        layout: true,
        children: /*#__PURE__*/jsx_runtime.jsx(bottomBarControls/* FormStepControls */.Q, {
          isOpen: !isDesktop && isOpen,
          isSubmitting: isSubmitting,
          buttonLabel: !isDesktop && isOpen ? 'Continue your Quote' : 'Start your quote',
          buttonOnClick: handleClick
        })
      })
    }), isOpen && /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
      initial: "hide",
      animate: "show",
      size: "small",
      rightIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* Close */.x8, {
        css: {
          color: '$N80'
        }
      }),
      style: "naked",
      color: 'dark',
      css: {
        position: 'absolute'
      },
      onClick: e => {
        e.preventDefault();
        toggleIsOpen();
      },
      as: motion_minimal.m.button,
      children: "Close"
    })]
  });
}; //TODO - skeleton screen

const BlankSkeletonScreen = () => /*#__PURE__*/_jsxs(_Fragment, {
  children: [/*#__PURE__*/_jsx(FormImage, {
    isOpen: true,
    children: /*#__PURE__*/_jsx(MailIllustration, {
      css: {
        height: '100%'
      }
    })
  }), /*#__PURE__*/_jsx(Content, {
    isOpen: true,
    children: /*#__PURE__*/_jsx(Container, {
      css: {
        maxWidth: '32rem',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: '$4',
        height: '30rem'
      }
    })
  }), /*#__PURE__*/_jsx(Container, {
    css: {
      maxWidth: '32rem',
      zIndex: '$1'
    },
    children: /*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(FormStepControls, {
        isOpen: true,
        isSubmitting: true,
        buttonLabel: "",
        buttonOnClick: e => {
          e.preventDefault();
        }
      })
    })
  })]
});
;// CONCATENATED MODULE: ./src/components/quote-form-direct-mail/src/quote-form-direct-mail.tsx



function quote_form_direct_mail_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_form_direct_mail_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_form_direct_mail_ownKeys(Object(source), true).forEach(function (key) { quote_form_direct_mail_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_form_direct_mail_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function quote_form_direct_mail_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormStepper = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 9321).then(__webpack_require__.bind(__webpack_require__, 19321)).then(res => res.FormStepper), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(19321)],
    modules: ["../components/quote-form-direct-mail/src/quote-form-direct-mail.tsx -> " + '../../landing-page-quote-form/src/steps']
  }
});
const QuoteFormDirectMail = props => {
  const breakpoints = useBreakpoints();
  const progress = (0,use_motion_value/* useMotionValue */.c)(0);
  const {
    0: isSubmitting,
    1: setSubmitting
  } = (0,react.useState)(false);
  const router = (0,next_router.useRouter)();
  const {
    step,
    resetForm,
    pageSlug
  } = router.query;
  const {
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    resetFormData: little_state_machine_actions/* resetFormData */.ap
  });

  const handleReset = () => actions.resetFormData('directMailForm');

  function handleClick(toggle) {
    return function (e) {
      e.preventDefault();
      toggle;
    };
  }

  function setStep(newStep) {
    //@ts-ignore
    const newPath = router.pathname.replace('[pageSlug]', pageSlug);
    router.push({
      pathname: `${newPath}`,
      query: newStep ? {
        step: newStep
      } : {}
    }, null, {
      shallow: true
    });
  }

  (0,react.useEffect)(() => {
    if (resetForm) {
      handleReset();
      setStep();
    }
  }, [step]);
  const formControls = {
    step,
    isSubmitting,
    changeStep: setStep,
    setSubmitting,
    progress,
    keyword: 'Direct Mail',
    breakpoints
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AnimateSharedLayout/* AnimateSharedLayout */.s, {
    children: [/*#__PURE__*/jsx_runtime.jsx(modal/* Modal */.u, {
      mobileWidth: "full",
      layoutId: "quote-modal",
      showCloseButton: false,
      opens: ({
        modalIsOpen,
        toggleModal
      }) => step ? /*#__PURE__*/jsx_runtime.jsx(FormStepper, quote_form_direct_mail_objectSpread({
        toggleIsOpen: handleClick(toggleModal),
        isOpen: modalIsOpen
      }, formControls)) : /*#__PURE__*/jsx_runtime.jsx(QuoteIntro, quote_form_direct_mail_objectSpread({
        toggleIsOpen: handleClick(toggleModal),
        isOpen: modalIsOpen
      }, formControls)),
      children: ({
        modalIsOpen,
        toggleModal
      }) => /*#__PURE__*/jsx_runtime.jsx(Wrapper, {
        as: motion_minimal.m.div,
        layoutId: "quote-modal",
        children: /*#__PURE__*/jsx_runtime.jsx(QuoteIntro, quote_form_direct_mail_objectSpread({
          toggleIsOpen: handleClick(toggleModal),
          isOpen: modalIsOpen
        }, formControls))
      })
    }), ")"]
  });
};
;// CONCATENATED MODULE: ./src/components/quote-form-direct-mail/index.ts

;// CONCATENATED MODULE: ./src/pages/promos/[pageSlug].tsx




function _pageSlug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _pageSlug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _pageSlug_ownKeys(Object(source), true).forEach(function (key) { _pageSlug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _pageSlug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _pageSlug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _pageSlug_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _pageSlug_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _pageSlug_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const HeroText = (0,theme/* styled */.zo)('div', {
  '@l': {
    pr: '$2',
    pl: '$3',
    width: '50%'
  },
  '@xl': {
    pr: '$3',
    pl: '$4'
  }
});

const LandingPageContent = ({
  data
}) => {
  const beforeFooter = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      children: /*#__PURE__*/jsx_runtime.jsx(client_logo_banner/* ClientLogoBanner */.Y, {})
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {
      size: "large"
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      css: {
        backgroundColor: '$white',
        py: '$4'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        children: /*#__PURE__*/jsx_runtime.jsx(reviews_io_widget/* ReviewsIoWidget */.R, {})
      })
    })]
  });

  return /*#__PURE__*/jsx_runtime.jsx(layout/* Layout */.A, {
    title: "landing page",
    description: "work in progress",
    beforeFooter: beforeFooter //@ts-ignore
    ,
    metaData: data._seoMetaTags,
    canonicalPath: data.canonicalPath,
    footerCss: {
      paddingBottom: '$7',
      '@l': {
        paddingBottom: '$1'
      }
    },
    landing: true,
    altHeader: /*#__PURE__*/jsx_runtime.jsx(Header, {}),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
      as: "section",
      css: {
        py: '$3',
        '@l': {
          display: 'flex'
        }
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeroText, {
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Title */.Dx, {
          level: "2",
          children: data.title
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {}), /*#__PURE__*/jsx_runtime.jsx(structuredText/* StructuredText */.rZ, {
          data: data.content.document,
          config: {
            paragraphProps: {
              size: 'm',
              css: {
                maxWidth: '50ch'
              }
            },
            headingProps: {
              color: 'primary'
            },
            listItemProps: {
              icon: 'CheckLeaf',
              iconProps: {
                css: {
                  color: '$green',
                  size: '1.125em',
                  marginBottom: '0.125em'
                }
              }
            }
          }
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(QuoteFormDirectMail, {})]
    })
  });
};

/* harmony default export */ var _pageSlug_ = (LandingPageContent);
async function getStaticPaths() {
  //@ts-ignore
  const allLandingPages = await (0,datocms/* request */.W)({
    query: 'GetLandingPages'
  });
  return {
    paths: allLandingPages.allLandingPageV1s.map(({
      pageSlug
    }) => ({
      params: {
        pageSlug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params,
  preview = false
}) {
  const {
    landingPageV1: {
      pageContent
    }
  } = await (0,datocms/* request */.W)({
    query: 'GetLandingPage',
    preview,
    variables: {
      pageSlug: params.pageSlug
    }
  }),
        rest = _pageSlug_objectWithoutProperties((await (0,datocms/* request */.W)({
    query: 'GetLandingPage',
    preview,
    variables: {
      pageSlug: params.pageSlug
    }
  })).landingPageV1, ["pageContent"]);

  const markdownToDast = (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 78161))).markdownToDast;
  const content = await markdownToDast(pageContent);
  return {
    props: {
      data: _pageSlug_objectSpread({
        content
      }, rest),
      pageSlug: params.pageSlug
    }
  };
}

/***/ }),

/***/ 54771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ HeaderBar; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
/* harmony import */ var _contentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78224);


const HeaderBar = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)(_contentWrapper__WEBPACK_IMPORTED_MODULE_1__/* .ContentWrapper */ .v, {
  position: 'relative',
  width: '100%',
  flex: '0',
  backgroundColor: '$white',
  py: '$3',
  borderBottomWidth: '$thin',
  borderBottomColor: '$N30',
  borderBottomStyle: 'solid'
});

/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.xu; },
/* harmony export */   "sg": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.fh; },
/* harmony export */   "kC": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.kC; },
/* harmony export */   "L5": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.L5; },
/* harmony export */   "W2": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W; },
/* harmony export */   "TR": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "FE": function() { return /* reexport safe */ _pageWrapper__WEBPACK_IMPORTED_MODULE_4__.F; },
/* harmony export */   "vs": function() { return /* reexport safe */ _contentWrapper__WEBPACK_IMPORTED_MODULE_6__.v; },
/* harmony export */   "DY": function() { return /* reexport safe */ _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__.D; },
/* harmony export */   "EU": function() { return /* reexport safe */ _radioButton__WEBPACK_IMPORTED_MODULE_10__.E; },
/* harmony export */   "II": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.AZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.Kx; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_12__.X; },
/* harmony export */   "ko": function() { return /* reexport safe */ _progressBar__WEBPACK_IMPORTED_MODULE_13__.k; },
/* harmony export */   "h_": function() { return /* reexport safe */ _headerBar__WEBPACK_IMPORTED_MODULE_14__.h; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_15__.Z; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _spacer__WEBPACK_IMPORTED_MODULE_18__.L; },
/* harmony export */   "OC": function() { return /* reexport safe */ _border__WEBPACK_IMPORTED_MODULE_19__.O; },
/* harmony export */   "wY": function() { return /* reexport safe */ _controlLayout__WEBPACK_IMPORTED_MODULE_21__.w; }
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92640);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7211);
/* harmony import */ var _resetButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70827);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91238);
/* harmony import */ var _pageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62918);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23608);
/* harmony import */ var _contentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78224);
/* harmony import */ var _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82264);
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98102);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14559);
/* harmony import */ var _radioButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20203);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26952);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99672);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78882);
/* harmony import */ var _headerBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54771);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10049);
/* harmony import */ var _fullWidthFeatureContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7522);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5596);
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64480);
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77860);
/* harmony import */ var _listCardWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(84546);
/* harmony import */ var _controlLayout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71000);























/***/ }),

/***/ 89704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": function() { return /* binding */ breakpointPixelValues; },
/* harmony export */   "A": function() { return /* binding */ breakpoints; }
/* harmony export */ });
const breakpointPixelValues = {
  s: 360,
  m: 640,
  l: 960,
  xl: 1280
};
const breakpoints = {
  s: `(min-width: 360px)`,
  m: `(min-width: 640px)`,
  l: `(min-width: 960px)`,
  xl: `(min-width: 1300px)`,
  s_only: `(max-width: 640px) and (min-width: 360px)`,
  m_only: `(max-width: 960px) and (min-width: 640px)`,
  l_only: `(max-width: 1300px) and (min-width: 960px)`,
  s_m_only: `(max-width: 960px) and (min-width: 360px)`,
  initial_max: `(max-width: 360px)`,
  s_max: `(max-width: 640px)`,
  m_max: `(max-width: 960px)`
};

/***/ }),

/***/ 63239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phone": function() { return /* reexport safe */ _phone__WEBPACK_IMPORTED_MODULE_0__.L; },
/* harmony export */   "CovidSafe": function() { return /* reexport safe */ _covidSafe__WEBPACK_IMPORTED_MODULE_1__.J; },
/* harmony export */   "createIcon": function() { return /* reexport safe */ _createIcon__WEBPACK_IMPORTED_MODULE_2__.I; },
/* harmony export */   "Check": function() { return /* reexport safe */ _check__WEBPACK_IMPORTED_MODULE_3__.Jr; },
/* harmony export */   "ErrorCheck": function() { return /* reexport safe */ _check__WEBPACK_IMPORTED_MODULE_3__.$_; },
/* harmony export */   "SuccessCheck": function() { return /* reexport safe */ _check__WEBPACK_IMPORTED_MODULE_3__.qB; },
/* harmony export */   "CheckLeaf": function() { return /* reexport safe */ _checkLeaf__WEBPACK_IMPORTED_MODULE_4__.D; },
/* harmony export */   "MailIllustration": function() { return /* reexport safe */ _mailIllustration__WEBPACK_IMPORTED_MODULE_5__.d; },
/* harmony export */   "ArrowBack": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__.xh; },
/* harmony export */   "ArrowForward": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__.ZJ; },
/* harmony export */   "ChevronDown": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__._M; },
/* harmony export */   "ChevronRight": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__._Q; },
/* harmony export */   "ChevronUp": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__.Kh; },
/* harmony export */   "Close": function() { return /* reexport safe */ _close__WEBPACK_IMPORTED_MODULE_7__.x; },
/* harmony export */   "HomePattern": function() { return /* reexport safe */ _patterns__WEBPACK_IMPORTED_MODULE_8__.J; },
/* harmony export */   "Facebook": function() { return /* reexport safe */ _facebook__WEBPACK_IMPORTED_MODULE_9__.s; },
/* harmony export */   "LinkedIn": function() { return /* reexport safe */ _linkedIn__WEBPACK_IMPORTED_MODULE_10__.y; }
/* harmony export */ });
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97919);
/* harmony import */ var _covidSafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38040);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20017);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25407);
/* harmony import */ var _checkLeaf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78638);
/* harmony import */ var _mailIllustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42638);
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15211);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78313);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16852);
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38475);
/* harmony import */ var _linkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6879);












/***/ }),

/***/ 38135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.iv; },
/* harmony export */   "wU": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.wU; },
/* harmony export */   "zo": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.zo; },
/* harmony export */   "X6": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.X6; },
/* harmony export */   "XJ": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.XJ; },
/* harmony export */   "k8": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.k8; },
/* harmony export */   "nv": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.nv; },
/* harmony export */   "Dx": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.Dx; },
/* harmony export */   "W0": function() { return /* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_2__.W; },
/* harmony export */   "xh": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.ArrowBack; },
/* harmony export */   "x8": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Close; },
/* harmony export */   "s1": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Facebook; },
/* harmony export */   "yh": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.LinkedIn; },
/* harmony export */   "d5": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.MailIllustration; },
/* harmony export */   "LP": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Phone; },
/* harmony export */   "IU": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.createIcon; },
/* harmony export */   "xu": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.xu; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Zb; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.XZ; },
/* harmony export */   "wY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.wY; },
/* harmony export */   "sg": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.fh; },
/* harmony export */   "W2": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.W2; },
/* harmony export */   "vs": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.vs; },
/* harmony export */   "DY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.DY; },
/* harmony export */   "kC": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.kC; },
/* harmony export */   "h_": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.h_; },
/* harmony export */   "II": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.AZ; },
/* harmony export */   "TR": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.TR; },
/* harmony export */   "ko": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.ko; },
/* harmony export */   "EU": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.EU; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.LZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Kx; },
/* harmony export */   "Sh": function() { return /* reexport module object */ _utils_utilityClasses__WEBPACK_IMPORTED_MODULE_6__; },
/* harmony export */   "AV": function() { return /* reexport safe */ _breakpoints__WEBPACK_IMPORTED_MODULE_7__.v; }
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79973);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18988);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34176);
/* harmony import */ var _utils_forwardRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62626);
/* harmony import */ var _utils_utilityClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35222);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89704);










/***/ }),

/***/ 46372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hj": function() { return /* binding */ isNumber; },
/* harmony export */   "iy": function() { return /* binding */ isNotNumber; },
/* harmony export */   "kE": function() { return /* binding */ isNumeric; },
/* harmony export */   "kJ": function() { return /* binding */ isArray; },
/* harmony export */   "yD": function() { return /* binding */ isEmptyArray; },
/* harmony export */   "mf": function() { return /* binding */ isFunction; },
/* harmony export */   "$K": function() { return /* binding */ isDefined; },
/* harmony export */   "o8": function() { return /* binding */ isUndefined; },
/* harmony export */   "Kn": function() { return /* binding */ isObject; },
/* harmony export */   "Qr": function() { return /* binding */ isEmptyObject; },
/* harmony export */   "ez": function() { return /* binding */ isNotEmptyObject; },
/* harmony export */   "Ft": function() { return /* binding */ isNull; },
/* harmony export */   "HD": function() { return /* binding */ isString; },
/* harmony export */   "kA": function() { return /* binding */ isInputEvent; },
/* harmony export */   "xb": function() { return /* binding */ isEmpty; },
/* harmony export */   "jU": function() { return /* binding */ isBrowser; },
/* harmony export */   "Ts": function() { return /* binding */ __DEV__; }
/* harmony export */ });
// Number assertions
function isNumber(value) {
  return typeof value === 'number';
}
const isNotNumber = value => typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
function isNumeric(value) {
  return value != null && value - parseFloat(value) + 1 >= 0;
} // Array assertions

function isArray(value) {
  return Array.isArray(value);
}
const isEmptyArray = value => isArray(value) && value.length === 0; // Function assertions

function isFunction(value) {
  return typeof value === 'function';
} // Generic assertions

const isDefined = value => typeof value !== 'undefined' && value !== undefined;
const isUndefined = value => typeof value === 'undefined' || value === undefined; // Object assertions

const isObject = value => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
};
const isEmptyObject = value => isObject(value) && Object.keys(value).length === 0;
function isNotEmptyObject(value) {
  return value && !isEmptyObject(value);
}
const isNull = value => value == null; // String assertions

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
} // Event assertions

function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
} // Empty assertions

const isEmpty = value => {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === '') return true;
  return false;
};
function isBrowser() {
  return false;
} // eslint-disable-next-line @typescript-eslint/naming-convention

const __DEV__ =  false && 0;

/***/ }),

/***/ 78161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DEV__": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.Ts; },
/* harmony export */   "isArray": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.kJ; },
/* harmony export */   "isBrowser": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.jU; },
/* harmony export */   "isDefined": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.$K; },
/* harmony export */   "isEmpty": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.xb; },
/* harmony export */   "isEmptyArray": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.yD; },
/* harmony export */   "isEmptyObject": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.Qr; },
/* harmony export */   "isFunction": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.mf; },
/* harmony export */   "isInputEvent": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.kA; },
/* harmony export */   "isNotEmptyObject": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.ez; },
/* harmony export */   "isNotNumber": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.iy; },
/* harmony export */   "isNull": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.Ft; },
/* harmony export */   "isNumber": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.hj; },
/* harmony export */   "isNumeric": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.kE; },
/* harmony export */   "isObject": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.Kn; },
/* harmony export */   "isString": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.HD; },
/* harmony export */   "isUndefined": function() { return /* reexport safe */ _assertion__WEBPACK_IMPORTED_MODULE_0__.o8; },
/* harmony export */   "htmlToDast": function() { return /* reexport safe */ _text_transforms__WEBPACK_IMPORTED_MODULE_1__.oH; },
/* harmony export */   "markdownToDast": function() { return /* reexport safe */ _text_transforms__WEBPACK_IMPORTED_MODULE_1__.sM; },
/* harmony export */   "markdownToHtml": function() { return /* reexport safe */ _text_transforms__WEBPACK_IMPORTED_MODULE_1__.c8; },
/* harmony export */   "toCamelCase": function() { return /* reexport safe */ _text_transforms__WEBPACK_IMPORTED_MODULE_1__.zW; }
/* harmony export */ });
/* harmony import */ var _assertion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46372);
/* harmony import */ var _text_transforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54425);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82484);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["default","__DEV__","isArray","isBrowser","isDefined","isEmpty","isEmptyArray","isEmptyObject","isFunction","isInputEvent","isNotEmptyObject","isNotNumber","isNull","isNumber","isNumeric","isObject","isString","isUndefined","htmlToDast","markdownToDast","markdownToHtml","toCamelCase"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ 54425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c8": function() { return /* binding */ markdownToHtml; },
/* harmony export */   "oH": function() { return /* binding */ htmlToDast; },
/* harmony export */   "sM": function() { return /* binding */ markdownToDast; },
/* harmony export */   "zW": function() { return /* binding */ toCamelCase; }
/* harmony export */ });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18835);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unist_utils_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96469);
/* harmony import */ var unist_utils_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unist_utils_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12861);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76388);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rehype_raw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78818);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_rehype__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17532);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rehype_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datocms_html_to_structured_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66683);
/* harmony import */ var datocms_html_to_structured_text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datocms_html_to_structured_text__WEBPACK_IMPORTED_MODULE_6__);







var parse5 = __webpack_require__(42394);



var gfm = __webpack_require__(10043);

var breaks = __webpack_require__(82558);

const processor = unified__WEBPACK_IMPORTED_MODULE_0___default()().use((remark_parse__WEBPACK_IMPORTED_MODULE_2___default())).use(gfm).use(breaks).use((remark_rehype__WEBPACK_IMPORTED_MODULE_4___default()), {
  allowDangerousHtml: true
}).use((rehype_raw__WEBPACK_IMPORTED_MODULE_3___default())).use((rehype_stringify__WEBPACK_IMPORTED_MODULE_5___default()));
const markdownToHtml = async md => {
  const result = await processor.process(md).then(res => res.toString());
  return result;
};
const htmlToDast = async html => {
  return (0,datocms_html_to_structured_text__WEBPACK_IMPORTED_MODULE_6__.parse5ToStructuredText)(parse5.parse(html, {
    sourceCodeLocationInfo: true
  }), {
    preprocess: tree => {
      //@ts-ignore
      (0,unist_utils_core__WEBPACK_IMPORTED_MODULE_1__.findAll)(tree, node => {
        if (node.type === 'element' && node.tagName === 'del') {
          node.tagName = 's';
        }
      });
    },
    newlines: true
  }).then(res => res);
};
const markdownToDast = async md => {
  const html = await markdownToHtml(md).then(res => res);
  const dast = await htmlToDast(html).then(res => res);
  return dast;
};
const toCamelCase = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/\s+/g, '');

/***/ }),

/***/ 82484:
/***/ (function() {



/***/ }),

/***/ 59196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"NEXT_DATOCMS_GRAPHQL_URL=https://graphql.datocms.com\nNEXT_DATOCMS_API_TOKEN=34f84f6a916143bb1c5cc6db6e455c\nNEXT_PUBLIC_URL=https://offers.aomail.com.au\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(31225)

      const appMod = __webpack_require__(77370)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(5035)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(70900),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/promos/[pageSlug]",
        buildId: "5Gjs7nmNpdkWMjYIyCqze",
        escapedBuildId: "5Gjs7nmNpdkWMjYIyCqze",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"84e625f6e1d2d695184c9d1d7cdd7329",previewModeSigningKey:"cdd8ad36dd8bba9713b01bbe16f88042fbc8d151bcb8ea731aa458f309be0d87",previewModeEncryptionKey:"5c3da32d4e7bca66796b03a3e82462c131c5e96bc17c2af32d605f5b6ebd7494"}
      })
      
    

/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 76200:
/***/ (function(module) {

"use strict";
module.exports = require("dgram");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ (function(module) {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7057,4475,168,7099,5026,3735,108,1428,3473,5252,5320,3608,7522,5596,7615,7589,1587,77,2444,7289,6858], function() { return __webpack_require__(59196); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			7090: 1,
/******/ 			9566: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(7057);
/******/ 			__webpack_require__.e(4475);
/******/ 			__webpack_require__.e(168);
/******/ 			__webpack_require__.e(7099);
/******/ 			__webpack_require__.e(5026);
/******/ 			__webpack_require__.e(3735);
/******/ 			__webpack_require__.e(108);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(3473);
/******/ 			__webpack_require__.e(5252);
/******/ 			__webpack_require__.e(5320);
/******/ 			__webpack_require__.e(3608);
/******/ 			__webpack_require__.e(7522);
/******/ 			__webpack_require__.e(5596);
/******/ 			__webpack_require__.e(7615);
/******/ 			__webpack_require__.e(7589);
/******/ 			__webpack_require__.e(1587);
/******/ 			__webpack_require__.e(77);
/******/ 			__webpack_require__.e(2444);
/******/ 			__webpack_require__.e(7289);
/******/ 			__webpack_require__.e(6858);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;