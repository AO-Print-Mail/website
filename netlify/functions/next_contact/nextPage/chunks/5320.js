exports.id = 5320;
exports.ids = [5320];
exports.modules = {

/***/ 25673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 15320:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": function() { return /* reexport */ TempQuoteForm; }
});

// UNUSED EXPORTS: tempQuoteFormInputs

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
// EXTERNAL MODULE: ./src/components/modal/src/layout.tsx
var layout = __webpack_require__(21893);
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

  return /*#__PURE__*/jsx_runtime.jsx(layout/* ModalLayout */.P, {
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ encode; }
/* harmony export */ });
/* unused harmony export serverUrl */
/* harmony import */ var _utils_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78161);

const encode = obj => Object.entries(obj).map(([key, val]) => `${typeof val === 'string' ? `${encodeURIComponent(key)}=${encodeURIComponent(val)}` : val !== null && typeof val === 'object' ? `${encode(val)}` : ''}`, '').join('&');
const serverUrl = _utils_src__WEBPACK_IMPORTED_MODULE_0__.__DEV__ && !process.env.NETLIFY ? 'http://localhost:3000' : 'https://offers.aomail.com.au';

/***/ })

};
;