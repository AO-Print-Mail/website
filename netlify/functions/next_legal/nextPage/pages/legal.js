/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 25673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ FormSuccess; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34176);
/* harmony import */ var _theme_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63239);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70572);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36724);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49772);
/* harmony import */ var _theme_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79973);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75843);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ParentAnimationVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
};
const ChildAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const FormSuccess = (_ref) => {
  let {
    heading,
    paragraph,
    handleClose,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["heading", "paragraph", "handleClose", "error"]);

  const progress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .useMotionValue */ .c)(0);

  function handleClick(e) {
    e.preventDefault();
    handleClose(e);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    !error && (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .animate */ .j)(progress, 100, {
      duration: 4,
      onComplete: handleClose
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    as: framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: ParentAnimationVariants,
    css: {
      height: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      p: '$6',
      background: '$white',
      position: 'absolute',
      tlbr: '0'
    },
    children: [error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_icons__WEBPACK_IMPORTED_MODULE_2__.ErrorCheck, {
      css: {
        size: '$9',
        flex: '0 0 auto'
      },
      as: framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.svg,
      variants: ChildAnimationVariants
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_icons__WEBPACK_IMPORTED_MODULE_2__.SuccessCheck, {
      css: {
        size: '$9',
        flex: '0 0 auto'
      },
      as: framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.svg,
      variants: ChildAnimationVariants
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
      css: {
        pb: '$4',
        flex: '1 1 640px',
        maxWidth: '640px'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_typography__WEBPACK_IMPORTED_MODULE_3__/* .Paragraph */ .nv, {
        alignCenter: true,
        size: "l",
        as: framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.h2,
        variants: ChildAnimationVariants,
        children: heading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_typography__WEBPACK_IMPORTED_MODULE_3__/* .Paragraph */ .nv, {
        alignCenter: true,
        size: "s",
        as: framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.h2,
        variants: ChildAnimationVariants,
        children: paragraph
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
        css: {
          display: 'block',
          mx: 'auto',
          mt: '$6'
        },
        onClick: handleClose,
        children: "Close"
      })]
    }), !error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .ProgressBar */ .ko, {
      css: {
        alignSelf: 'stretch'
      },
      progress: progress
    })]
  });
};

/***/ }),

/***/ 20494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": function() { return /* reexport */ TempQuoteForm; },
  "o": function() { return /* reexport */ tempQuoteFormInputs; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(42283);
// EXTERNAL MODULE: ./node_modules/react-text-mask/dist/reactTextMask.js
var reactTextMask = __webpack_require__(91749);
var reactTextMask_default = /*#__PURE__*/__webpack_require__.n(reactTextMask);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(10070);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/lib/netlify/utils.ts
var utils = __webpack_require__(42871);
// EXTERNAL MODULE: ./src/components/button/index.ts
var components_button = __webpack_require__(75843);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js + 2 modules
var AnimatePresence = __webpack_require__(53869);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./src/theme/atoms/index.ts
var atoms = __webpack_require__(34176);
// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js + 20 modules
var motion_minimal = __webpack_require__(49772);
;// CONCATENATED MODULE: ./src/components/modal/src/layout.tsx






const ContentWrapper = (0,stitches_config/* styled */.zo)(atoms/* TextHolder */.L5, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  zIndex: '$3',
  overflow: 'hidden'
});
const borderMotionVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 48
  }
};
const ModalLayout = ({
  controls,
  main,
  hideControlsBorder,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [controls && /*#__PURE__*/jsx_runtime.jsx(atoms/* TextHolder */.L5, {
      padX: "xLarge",
      padY: "default",
      css: {
        flex: '0 0 auto',
        py: '$2',
        '@m': {
          py: '$3'
        }
      },
      children: controls
    }), controls && !hideControlsBorder && /*#__PURE__*/jsx_runtime.jsx(atoms/* Border */.OC, {
      as: motion_minimal.m.span,
      inherit: true,
      "aria-hidden": true,
      intial: "hidden",
      animate: "visible",
      exit: "hidden",
      css: {
        position: 'relative'
      },
      variants: borderMotionVariants
    }), (main || children) && /*#__PURE__*/jsx_runtime.jsx(ContentWrapper, {
      padX: "xLarge",
      padY: "default",
      css: {
        flex: '1 1 auto'
      },
      children: main || children
    })]
  });
};
// EXTERNAL MODULE: ./src/components/notifications/confirmations/formSuccess.tsx
var formSuccess = __webpack_require__(25673);
;// CONCATENATED MODULE: ./src/components/temp-quote-form/src/temp-quote-form.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const FORM_NAME = 't_request-quote';
const tempQuoteFormInputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  deadline: '',
  service: '',
  quantity: '',
  message: '',
  joinMailingList: false,
  'bot-field': ''
};
const schema = lib/* object */.Ry().shape({
  firstName: lib/* string */.Z_().required('Please enter a first name'),
  lastName: lib/* string */.Z_(),
  service: lib/* string */.Z_(),
  deadline: lib/* string */.Z_(),
  quantity: lib/* string */.Z_(),
  companyName: lib/* string */.Z_(),
  email: lib/* string */.Z_().email('Please provide a valid email address').required('We need an email to send your quote!'),
  phone: lib/* string */.Z_(),
  message: lib/* string */.Z_(),
  'bot-field': lib/* string */.Z_(),
  joinMailingList: lib/* boolean */.O7()
});
const mobileMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/];
const submissionMessages = {
  heading: {
    success: 'Your quote request was sent!',
    error: 'There was a problem sending your quote request'
  },
  paragraph: {
    success: `Thank so much for requesting a quote. A team member will be in touch with you very soon to confirm the details of your brief. We aim to provide a quote within 4 hours.`,
    error: `Please try again, or email us at sales@aomail.com.au`
  }
};
const Background = (0,theme/* styled */.zo)('div', {});
const TempQuoteForm = (_ref) => {
  var _submissionMessages$h, _submissionMessages$p;

  let {
    toggle,
    modalLayoutId,
    active,
    onSubmissionClose,
    onSubmissionComplete
  } = _ref,
      props = _objectWithoutProperties(_ref, ["toggle", "modalLayoutId", "active", "onSubmissionClose", "onSubmissionComplete"]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = (0,index_esm/* useForm */.cI)({
    resolver: (0,yup/* yupResolver */.X)(schema),
    mode: 'onBlur'
  });
  const router = (0,next_router.useRouter)();
  const {
    0: submitting,
    1: setSubmitting
  } = (0,react.useState)(false);
  const {
    0: submission,
    1: setSubmission
  } = (0,react.useState)({
    result: null,
    message: null,
    form: FORM_NAME
  });
  const {
    state: {
      userData
    }
  } = (0,little_state_machine/* useStateMachine */.j_)({});

  const onSubmit = data => {
    setSubmitting(true);
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: (0,utils/* encode */.c)(_objectSpread(_objectSpread({
        'form-name': FORM_NAME
      }, data), userData))
    }).then(() => {
      setSubmission({
        result: 'success',
        message: 'null',
        form: FORM_NAME
      });
      router.push({
        pathname: router.pathname,
        query: _objectSpread({
          submission: 'success',
          form: submission.form
        }, router.query)
      }, null, {
        shallow: true
      });
    }).catch(error => {
      setSubmission({
        result: 'error',
        message: error,
        form: FORM_NAME
      }), console.error(error);
      router.push({
        pathname: router.pathname,
        query: _objectSpread({
          submission: 'error',
          form: submission.form
        }, router.query)
      }, null, {
        shallow: true
      });
    }).finally(() => {
      onSubmissionComplete();
      setSubmitting(false);
      reset();
    });
  };

  function removeSubmissionState(e) {
    const _router$query = router.query,
          {
      form,
      submission: subm
    } = _router$query,
          queries = _objectWithoutProperties(_router$query, ["form", "submission"]);

    router.push({
      pathname: router.pathname,
      query: queries
    }, null, {
      shallow: true
    });
    setSubmission({
      result: null,
      message: null,
      form: FORM_NAME
    });
    onSubmissionClose();
  }

  (0,react.useEffect)(() => {
    var _router$query2;

    if (router !== null && router !== void 0 && (_router$query2 = router.query) !== null && _router$query2 !== void 0 && _router$query2.submission && !submission.result) {
      removeSubmissionState();
    }
  }, [router]);

  const _register = register('phone'),
        {
    ref: phoneRef
  } = _register,
        phoneFormProps = _objectWithoutProperties(_register, ["ref"]);

  return /*#__PURE__*/jsx_runtime.jsx(ModalLayout, {
    hideControlsBorder: true,
    controls: /*#__PURE__*/jsx_runtime.jsx(theme/* CloseControls */.wY, {
      handleClose: toggle
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Background, _objectSpread(_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
        marginTop: "small",
        level: "4",
        children: "Request a quote"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        id: FORM_NAME,
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
          css: {
            my: '$4',
            pb: '$2'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
            css: {
              mx: '-$2'
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('firstName')), {}, {
              id: "firstName",
              placeholder: "Jane",
              defaultValue: tempQuoteFormInputs.firstName,
              css: {
                px: '$2',
                flexBasis: '50%'
              },
              errors: errors,
              required: true,
              children: "First name"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('lastName')), {}, {
              id: "lastName",
              placeholder: "Appleseed",
              defaultValue: tempQuoteFormInputs.lastName,
              css: {
                px: '$2',
                flexBasis: '50%'
              },
              errors: errors,
              children: "Last name"
            }))]
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('companyName')), {}, {
            id: "companyName",
            placeholder: "Acme inc",
            defaultValue: tempQuoteFormInputs.companyName,
            errors: errors,
            children: "Company name"
          })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('email')), {}, {
            id: "email",
            placeholder: "jane@example.com.au",
            type: "email",
            defaultValue: tempQuoteFormInputs.email,
            errors: errors,
            required: true,
            children: "Email address"
          })), /*#__PURE__*/jsx_runtime.jsx((reactTextMask_default()), {
            id: "phone",
            placeholder: "04xx xxx xxx",
            mask: mobileMask,
            inputMode: "numeric",
            guide: false,
            type: "text",
            defaultValue: tempQuoteFormInputs.phone,
            errors: errors,
            render: (textMaskRef, props) => /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread(_objectSpread({}, phoneFormProps), {}, {
              ref: node => {
                textMaskRef(node);
                phoneRef(node);
              }
            }, props), {}, {
              name: "phone",
              children: "Contact number"
            }))
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* InputLabel */.AZ, {
            css: {
              mt: '$8'
            },
            size: "s",
            as: "label",
            htmlFor: "service",
            children: "Which service do you need?"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
            wrap: true,
            css: {
              pb: '$3'
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "services1"
            }, register('service')), {}, {
              value: "Print and mail",
              children: "Printing and mailing"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "services2"
            }, register('service')), {}, {
              value: "Mail",
              children: "Mailing only"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "services3"
            }, register('service')), {}, {
              value: "Print",
              children: "Printing only"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "services4"
            }, register('service')), {}, {
              value: "Fulfilment",
              children: "Fulfilment"
            }))]
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* InputLabel */.AZ, {
            as: "label",
            size: "s",
            htmlFor: "deadline",
            children: "How urgent is the job?"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
            wrap: true,
            css: {
              mt: '$3',
              pb: '$3'
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "deadline1"
            }, register('deadline')), {}, {
              value: "none",
              children: "No deadline yet"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "deadline2"
            }, register('deadline')), {}, {
              value: "3_weeks",
              children: "3 weeks or more"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "deadline3"
            }, register('deadline')), {}, {
              value: "'2_weeks",
              children: "2 weeks or more"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "deadline4"
            }, register('deadline')), {}, {
              value: "next_week",
              children: "Next week"
            })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
              id: "deadline5"
            }, register('deadline')), {}, {
              value: "urgently",
              children: "Urgently!"
            }))]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
            css: {
              mt: '$3',
              pb: '$2'
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* InputLabel */.AZ, {
              as: "label",
              size: "s",
              htmlFor: "quantity",
              children: "How many items?"
            }), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({
              name: "quantity"
            }, register('quantity')), {}, {
              type: "number"
            }))]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
            css: {
              mt: '$3'
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* InputLabel */.AZ, {
              as: "label",
              size: "s",
              htmlFor: "message",
              children: "Message"
            }), /*#__PURE__*/jsx_runtime.jsx(theme/* TextArea */.Kx, _objectSpread(_objectSpread({}, register('message')), {}, {
              resizeVertical: true,
              id: "message",
              rows: 8,
              cols: 30,
              placeholder: "Please include any additional information that is applicable to your job.",
              autoComplete: "off",
              defaultValue: tempQuoteFormInputs.message,
              css: {
                width: '100%'
              }
            }))]
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Checkbox */.XZ, _objectSpread(_objectSpread({}, register('joinMailingList')), {}, {
            id: "joinMailingList",
            defaultChecked: tempQuoteFormInputs.joinMailingList,
            css: {
              mt: '$3'
            },
            children: "Keep me up to date with news and special offers"
          }))]
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          "aria-hidden": "true",
          className: theme/* classes.visuallyHidden */.Sh.visuallyHidden(),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            children: ["Skip this field if you\u2019re human:", /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread({
              tabIndex: -1
            }, register('bot-field')))]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
          fullWidth: true,
          size: "cta",
          isLoading: submitting,
          type: "submit",
          children: "Request quote"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(AnimatePresence/* AnimatePresence */.M, {
        children: submission.result && /*#__PURE__*/jsx_runtime.jsx(formSuccess/* FormSuccess */.M, {
          heading: (_submissionMessages$h = submissionMessages.heading) === null || _submissionMessages$h === void 0 ? void 0 : _submissionMessages$h[submission.result],
          paragraph: (_submissionMessages$p = submissionMessages.paragraph) === null || _submissionMessages$p === void 0 ? void 0 : _submissionMessages$p[submission.result],
          handleClose: removeSubmissionState,
          error: submission.result === 'error'
        })
      })]
    }))
  });
};
;// CONCATENATED MODULE: ./src/components/temp-quote-form/index.ts


/***/ }),

/***/ 42871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ encode; }
/* harmony export */ });
/* unused harmony export serverUrl */
/* harmony import */ var _utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78161);

const encode = obj => Object.entries(obj).map(([key, val]) => `${typeof val === 'string' ? `${encodeURIComponent(key)}=${encodeURIComponent(val)}` : val !== null && typeof val === 'object' ? `${encode(val)}` : ''}`, '').join('&');
const serverUrl = _utils_src__WEBPACK_IMPORTED_MODULE_0__.__DEV__ && !process.env.NETLIFY ? 'http://localhost:3000' : 'https://offers.aomail.com.au';

/***/ }),

/***/ 48495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _lib_datocms_datocms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12660);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33801);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38135);
/* harmony import */ var _components_link_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80662);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67294);
/* harmony import */ var _components_temp_quote_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20494);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);










const WorkaroundForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__.default)(() => __webpack_require__.e(/* import() */ 4039).then(__webpack_require__.bind(__webpack_require__, 27273)).then(res => res.NetlifyWorkaroundForm), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(27273)],
    modules: ["legal.tsx -> " + '@components/netlify-workaraound-form']
  }
});
const PREFETCH_ARTICLES = 3;
const ListWrapper = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_theme__WEBPACK_IMPORTED_MODULE_3__/* .ColumnWrapper */ .fh, {
  position: 'relative',
  top: '-$4',
  flexFlow: 'column wrap',
  '@m': {
    flexFlow: 'row wrap'
  },
  '@l': {
    ml: '16.67%'
  },
  '@xl': {
    ml: '25%',
    mr: '8.33%'
  }
});
const CardWrapper = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .sg, {
  flex: '0 0 100%',
  mb: '$5',
  '@m': {
    flex: '0 0 50%',
    alignSelf: 'stretch'
  }
});

const Legal = ({
  data
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    data.articleSummaries.slice(0, PREFETCH_ARTICLES).forEach(article => router.prefetch(`/legal/${article.legalPageSlug}`));
  }, //need to add param here if filtering is being used
  //if queries being made on the client, need to check package.json[browser]
  []);

  const handleClick = link => e => {
    e.preventDefault();
    router.push(link);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
    canonicalPath: "https://www.aomail.com.au/legal" //@ts-ignore
    ,
    metaData: data.legalPage._seoMetaTags,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      as: "section",
      css: {
        backgroundColor: '$N10',
        position: 'relative',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
        css: {
          pt: '$6',
          minHeight: '280px',
          '@m': {
            minHeight: '400px'
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .TextHolder */ .L5, {
          css: {
            mt: '$7',
            '@m': {
              mt: '$8'
            },
            '@l': {
              ml: '8.33%'
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Heading1 */ .nL, {
            children: data.legalPage.title
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListWrapper, {
        children: data.articleSummaries.map(article => {
          const targetUrl = `/legal/${article.legalPageSlug}`;
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardWrapper, {
            as: "article",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_link_card__WEBPACK_IMPORTED_MODULE_4__/* .LinkCard */ .k, {
              title: article.title,
              description: article.summary.value,
              link: targetUrl,
              css: {
                height: '100%'
              },
              onClick: handleClick(targetUrl)
            })
          }, article.id);
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WorkaroundForm, {
      formFields: _components_temp_quote_form__WEBPACK_IMPORTED_MODULE_7__/* .tempQuoteFormInputs */ .o,
      name: "t_request-quote"
    })]
  });
};

async function getStaticProps({
  preview = false
}) {
  //@ts-expect-error
  const summaries = await (0,_lib_datocms_datocms__WEBPACK_IMPORTED_MODULE_1__/* .request */ .W)({
    query: 'GetLegalPages',
    preview
  });
  const {
    legalPage
  } = await (0,_lib_datocms_datocms__WEBPACK_IMPORTED_MODULE_1__/* .request */ .W)({
    query: 'GetLegalListPage',
    preview
  });
  return {
    props: {
      data: {
        articleSummaries: summaries.allLegalPages,
        legalPage
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Legal);

/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.xu; },
/* harmony export */   "sg": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.fh; },
/* harmony export */   "kC": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.kC; },
/* harmony export */   "C8": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.C8; },
/* harmony export */   "L5": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.L5; },
/* harmony export */   "W2": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W; },
/* harmony export */   "TR": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "FE": function() { return /* reexport safe */ _pageWrapper__WEBPACK_IMPORTED_MODULE_4__.F; },
/* harmony export */   "eu": function() { return /* reexport safe */ _links__WEBPACK_IMPORTED_MODULE_5__.eu; },
/* harmony export */   "vs": function() { return /* reexport safe */ _contentWrapper__WEBPACK_IMPORTED_MODULE_6__.v; },
/* harmony export */   "DY": function() { return /* reexport safe */ _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__.D; },
/* harmony export */   "EU": function() { return /* reexport safe */ _radioButton__WEBPACK_IMPORTED_MODULE_10__.E; },
/* harmony export */   "II": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.AZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.Kx; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_12__.X; },
/* harmony export */   "ko": function() { return /* reexport safe */ _progressBar__WEBPACK_IMPORTED_MODULE_13__.k; },
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

/***/ 48347:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

      const compMod = __webpack_require__(48495)

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
        page: "/legal",
        buildId: "UkD_Cs6c4nTMyvVdMGNko",
        escapedBuildId: "UkD_Cs6c4nTMyvVdMGNko",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"f4be9476d949992a880ef02a282f89b7",previewModeSigningKey:"803bd9ffc92d4f65c1d7aaa60c1ce64966ff936e8f6bf0db898c19bbd6022629",previewModeEncryptionKey:"2926eb1e303ac195eac94257bb89d2ea25feb676007948f0b73b94f17976a033"}
      })
      
    

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 76200:
/***/ (function(module) {

module.exports = require("dgram");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ (function(module) {

module.exports = require("net");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ (function(module) {

module.exports = require("tls");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7057,4475,168,7109,6071,8697,269,1428,3473,2317,9566,7522,5596,7589,1587,4090,3239,2749,9286,3355], function() { return __webpack_require__(48347); })
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
/******/ 			3270: 1,
/******/ 			494: 1
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
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(7109);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(8697);
/******/ 			__webpack_require__.e(269);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(3473);
/******/ 			__webpack_require__.e(2317);
/******/ 			__webpack_require__.e(9566);
/******/ 			__webpack_require__.e(7522);
/******/ 			__webpack_require__.e(5596);
/******/ 			__webpack_require__.e(7589);
/******/ 			__webpack_require__.e(1587);
/******/ 			__webpack_require__.e(4090);
/******/ 			__webpack_require__.e(3239);
/******/ 			__webpack_require__.e(2749);
/******/ 			__webpack_require__.e(9286);
/******/ 			__webpack_require__.e(3355);
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