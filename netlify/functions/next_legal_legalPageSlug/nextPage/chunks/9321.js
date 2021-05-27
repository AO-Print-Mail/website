exports.id = 9321;
exports.ids = [9321];
exports.modules = {

/***/ 19321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FormStepper": function() { return /* binding */ FormStepper; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(42283);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/components/landing-page-quote-form/src/bottomBarControls.tsx
var bottomBarControls = __webpack_require__(86562);
// EXTERNAL MODULE: ./src/lib/little-state-machine/index.ts
var lib_little_state_machine = __webpack_require__(80723);
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/step1.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FORM_NAME = 'step1form';
const Step1Form = ({
  changeStep,
  progress,
  setSubmitting
}) => {
  var _state$formData;

  const {
    state,
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateDirectMailForm: lib_little_state_machine/* updateDirectMailForm */.h3
  });
  const {
    register,
    handleSubmit
  } = (0,index_esm/* useForm */.cI)();

  const onSubmit = data => {
    setSubmitting(true);
    actions.updateDirectMailForm(_objectSpread({}, data));
    changeStep('2');
  };

  const {
    mailFormat,
    services,
    itemQuantity,
    frequency //@ts-ignore

  } = (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm;
  (0,react.useEffect)(() => {
    progress.set(30);
    setSubmitting(false);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    id: FORM_NAME,
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      children: "What are you sending?"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
      wrap: true,
      css: {
        mt: '$3',
        pb: '$3'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "format1",
        name: "mailFormat"
      }, register('mailFormat')), {}, {
        value: "flyers/postcards",
        defaultChecked: mailFormat === 'flyers/postcards',
        children: "Flyers / Postcards"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "format2",
        name: "mailFormat"
      }, register('mailFormat')), {}, {
        value: "brochures",
        defaultChecked: mailFormat === 'brochures',
        children: "Brochures"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "format3",
        name: "mailFormat"
      }, register('mailFormat')), {}, {
        value: "letters",
        defaultChecked: mailFormat === 'letters',
        children: "Letters"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "format4",
        name: "mailFormat"
      }, register('mailFormat')), {}, {
        value: "plastic wrap",
        defaultChecked: mailFormat === 'plastic wrap',
        children: "Plastic wrap"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "format5",
        name: "mailFormat"
      }, register('mailFormat')), {}, {
        value: "other",
        defaultChecked: mailFormat === 'other',
        children: "Something else"
      }))]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      children: "Which services do you need?"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
      wrap: true,
      css: {
        mt: '$3',
        pb: '$3'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "services1",
        name: "services"
      }, register('services')), {}, {
        value: "Print and mail",
        defaultChecked: services === 'Print and mail',
        children: "Printing and mailing"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "services2",
        name: "services"
      }, register('services')), {}, {
        value: "Mail only",
        defaultChecked: services === 'Mail only',
        children: "Mailing only"
      }))]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      as: "label",
      htmlFor: "quantity",
      css: {
        display: 'block',
        color: '$DA80'
      },
      children: "How many items? (approximate is fine)"
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      css: {
        mt: '$3',
        pb: '$2'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({
        name: "itemQuantity",
        id: "quantity"
      }, register('itemQuantity')), {}, {
        type: "number",
        defaultValue: itemQuantity
      }))
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      css: {
        color: '$DA80'
      },
      children: "How often?"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
      wrap: true,
      css: {
        mt: '$3',
        pb: '$3'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "frequency1",
        name: "frequency"
      }, register('frequency')), {}, {
        value: "One-off",
        defaultChecked: frequency === 'One-off',
        children: "Once-off"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "frequency2",
        name: "frequency"
      }, register('frequency')), {}, {
        value: "daily",
        defaultChecked: frequency === 'daily',
        children: "Daily"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "frequency3",
        name: "frequency"
      }, register('frequency')), {}, {
        value: "weekly",
        defaultChecked: frequency === 'weekly',
        children: "Weekly"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, _objectSpread(_objectSpread({
        id: "frequency4",
        name: "frequency"
      }, register('frequency')), {}, {
        value: "monthly",
        defaultChecked: frequency === 'monthly',
        children: "Monthly"
      }))]
    })]
  });
};
const Step1Controls = ({
  isSubmitting,
  isOpen,
  toggleIsOpen
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(bottomBarControls/* FormStepControls */.Q, {
    isOpen: isOpen,
    isSubmitting: isSubmitting,
    buttonLabel: isOpen ? 'Next' : 'Continue your quote',
    buttonOnClick: e => {
      if (!isOpen) {
        e.preventDefault();
        toggleIsOpen();
      }
    },
    formName: FORM_NAME
  });
};
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/step2.tsx




function step2_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function step2_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { step2_ownKeys(Object(source), true).forEach(function (key) { step2_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { step2_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function step2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const step2_FORM_NAME = 'step2form';
const Step2Form = ({
  changeStep,
  progress,
  setSubmitting
}) => {
  var _state$formData;

  const {
    state,
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateDirectMailForm: lib_little_state_machine/* updateDirectMailForm */.h3
  });
  const {
    register,
    handleSubmit
  } = (0,index_esm/* useForm */.cI)();

  const onSubmit = data => {
    actions.updateDirectMailForm(step2_objectSpread({}, data));
    changeStep('3');
  };

  const {
    artworkReady,
    addressDataReady,
    additionalInformation,
    services //@ts-ignore

  } = (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm;
  const requiresArtwork = services === 'Print and mail';
  (0,react.useEffect)(() => {
    setSubmitting(false);
    progress.set(75);

    if (!requiresArtwork) {
      actions.updateDirectMailForm({
        artworkReady: '[n/a]'
      });
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    id: step2_FORM_NAME,
    onSubmit: handleSubmit(onSubmit),
    children: [requiresArtwork && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
        css: {
          color: '$DA80'
        },
        children: "Do you have artwork ready for printing?"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
        wrap: true,
        css: {
          mt: '$3',
          pb: '$2'
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
          id: "artworkReady1",
          name: "artworkReady"
        }, register('artworkReady')), {}, {
          value: "yes",
          defaultChecked: artworkReady === 'yes',
          children: "Yes"
        })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
          id: "artworkReady2",
          name: "artworkReady"
        }, register('artworkReady')), {}, {
          value: "no",
          defaultChecked: artworkReady === 'no',
          children: "Not yet"
        })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
          id: "artworkReady3",
          name: "artworkReady"
        }, register('artworkReady')), {}, {
          value: "interested in print design",
          defaultChecked: artworkReady === 'interested in print design',
          children: "Interested in print design"
        }))]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      css: {
        color: '$DA80'
      },
      children: "Is your recipient data file ready?"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
      wrap: true,
      css: {
        mt: '$3',
        pb: '$2'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
        id: "addressDataReady1",
        name: "addressDataReady"
      }, register('addressDataReady')), {}, {
        value: "yes",
        defaultChecked: addressDataReady === 'yes',
        children: "Yes"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
        id: "addressDataReady2",
        name: "addressDataReady"
      }, register('addressDataReady')), {}, {
        value: "no",
        defaultChecked: addressDataReady === 'no',
        children: "Not yet"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* RadioButton */.EU, step2_objectSpread(step2_objectSpread({
        id: "addressDataReady3",
        name: "addressDataReady"
      }, register('addressDataReady')), {}, {
        value: "interested in buying a list",
        defaultChecked: addressDataReady === 'interested in buying a list',
        children: "Interested in buying a list"
      }))]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      as: "label",
      htmlFor: "additionalInformation",
      css: {
        color: '$DA80',
        display: 'block'
      },
      children: "Your brief (optional)"
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      css: {
        mt: '$3',
        pb: '$2'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* TextArea */.Kx, step2_objectSpread(step2_objectSpread({
        resizeVertical: true,
        id: "additionalInformation",
        name: "additionalInformation",
        rows: 8,
        cols: 30,
        placeholder: "Please include any additional information that is applicable to your job."
      }, register('additionalInformation')), {}, {
        autoComplete: "off",
        defaultValue: additionalInformation,
        css: {
          width: '100%'
        }
      }))
    })]
  });
};
const Step2Controls = ({
  isSubmitting,
  isOpen,
  toggleIsOpen
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(bottomBarControls/* FormStepControls */.Q, {
    isOpen: isOpen,
    isSubmitting: isSubmitting,
    buttonLabel: isOpen ? 'Next' : 'Continue your quote',
    buttonOnClick: e => {
      if (!isOpen) {
        e.preventDefault();
        toggleIsOpen();
      }
    },
    formName: step2_FORM_NAME
  });
};
// EXTERNAL MODULE: ./node_modules/react-text-mask/dist/reactTextMask.js
var reactTextMask = __webpack_require__(91749);
var reactTextMask_default = /*#__PURE__*/__webpack_require__.n(reactTextMask);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(10070);
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/step3.tsx



function step3_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function step3_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { step3_ownKeys(Object(source), true).forEach(function (key) { step3_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { step3_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function step3_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const schema = lib/* object */.Ry().shape({
  firstName: lib/* string */.Z_().required('Please enter a first name'),
  lastName: lib/* string */.Z_(),
  companyName: lib/* string */.Z_(),
  email: lib/* string */.Z_().email('Please provide a valid email address').required('We need an email to send your quote!'),
  phone: lib/* string */.Z_().required(`Please enter a telephone number`).min(9, 'Please enter a full telephone number').max(14, 'The telephone number you entered seems too long.'),
  country: lib/* string */.Z_()
});
const mobileMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/];
const step3_FORM_NAME = 'step3form';
const Step3Form = ({
  fireFormSubmission,
  progress,
  setSubmitting
}) => {
  var _state$formData;

  const {
    state,
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    updateDirectMailForm: lib_little_state_machine/* updateDirectMailForm */.h3
  });
  const {
    register,
    handleSubmit,
    formState
  } = (0,index_esm/* useForm */.cI)({
    resolver: (0,yup/* yupResolver */.X)(schema),
    mode: 'onBlur'
  });
  const {
    errors
  } = formState;

  const onSubmit = data => {
    progress.set(100);
    setSubmitting(true);
    actions.updateDirectMailForm(step3_objectSpread(step3_objectSpread({}, data), {}, {
      readyToSubmit: true
    }));
    window && window.setTimeout(fireFormSubmission, 1000);
  };

  (0,react.useEffect)(() => {
    progress.set(95);
    setSubmitting(false);
  }, []);
  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    joinMailingList //@ts-ignore

  } = (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm;
  const {
    0: submittable,
    1: setSubmittable
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (formState.isValid) {
      setSubmittable(true);
    } else {
      setSubmittable(false);
    }
  }, [formState]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    id: step3_FORM_NAME,
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
      css: {
        color: '$DA80',
        mt: '$2'
      },
      children: "Your contact information"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
      css: {
        my: '$4',
        pb: '$2'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
        css: {
          mx: '-$2'
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, step3_objectSpread(step3_objectSpread({}, register('firstName')), {}, {
          id: "firstName",
          name: "firstName",
          placeholder: "Jane",
          defaultValue: firstName || '',
          css: {
            px: '$2',
            flexBasis: '50% '
          },
          errors: errors,
          children: "First name"
        })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, step3_objectSpread(step3_objectSpread({}, register('lastName')), {}, {
          id: "lastName",
          name: "lastName",
          placeholder: "Appleseed",
          defaultValue: lastName || '',
          css: {
            px: '$2',
            flexBasis: '50%'
          },
          errors: errors,
          children: "Last name"
        }))]
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, step3_objectSpread(step3_objectSpread({}, register('companyName')), {}, {
        id: "companyName",
        name: "companyName",
        placeholder: "Acme inc",
        defaultValue: companyName || '',
        errors: errors,
        children: "Company name"
      })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, step3_objectSpread(step3_objectSpread({}, register('email')), {}, {
        id: "email",
        name: "email",
        placeholder: "jane@example.com.au",
        type: "email",
        defaultValue: email || '',
        errors: errors,
        children: "Email address"
      })), /*#__PURE__*/jsx_runtime.jsx((reactTextMask_default()), step3_objectSpread(step3_objectSpread({
        id: "phone",
        placeholder: "04xx xxx xxx",
        mask: mobileMask,
        inputMode: "numeric",
        guide: false,
        type: "text",
        defaultValue: phone || '',
        errors: errors
      }, register('phone')), {}, {
        render: (textMaskRef, props) => /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, step3_objectSpread(step3_objectSpread({
          ref: node => {
            textMaskRef(node);
          },
          name: "phone"
        }, props), {}, {
          children: "Contact number"
        }))
      }))]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Checkbox */.XZ, step3_objectSpread(step3_objectSpread({}, register('joinMailingList')), {}, {
      id: "joinMailingList",
      name: "joinMailingList",
      defaultChecked: joinMailingList,
      children: "I\u2019d like to keep updated with news and special offers"
    })), /*#__PURE__*/jsx_runtime.jsx("p", {
      "aria-hidden": "true",
      className: theme/* classes.visuallyHidden */.Sh.visuallyHidden(),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
        children: ["Skip this field if you\u2019re human:", /*#__PURE__*/jsx_runtime.jsx("input", step3_objectSpread(step3_objectSpread({
          tabIndex: -1
        }, register('bot-field-step3')), {}, {
          name: "bot-field-step3"
        }))]
      })
    })]
  });
};
const Step3Controls = ({
  isSubmitting,
  toggleIsOpen,
  isOpen
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(bottomBarControls/* FormStepControls */.Q, {
    isOpen: isOpen,
    isSubmitting: isSubmitting,
    buttonLabel: isOpen ? 'Submit quote request' : 'Continue your quote',
    buttonOnClick: e => {
      if (!isOpen) {
        e.preventDefault();
        toggleIsOpen();
      }
    },
    buttonColor: "success",
    formName: step3_FORM_NAME
  });
};
// EXTERNAL MODULE: ./src/lib/little-state-machine/actions.ts
var little_state_machine_actions = __webpack_require__(58410);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/lib/netlify/utils.ts
var utils = __webpack_require__(42871);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./src/components/button/index.ts
var components_button = __webpack_require__(75843);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js + 20 modules
var motion_minimal = __webpack_require__(49772);
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/topBarControls.tsx




function topBarControls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function topBarControls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { topBarControls_ownKeys(Object(source), true).forEach(function (key) { topBarControls_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { topBarControls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function topBarControls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const variants = {
  hide: {
    opacity: 0,
    pointerEvents: 'none'
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto'
  }
};
const Wrapper = (0,theme/* styled */.zo)(theme/* Container */.W2, {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  left: '0',
  top: '0',
  padding: 'inherit',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '@m': {
    py: '$4'
  }
});
const BottomBorder = (0,theme/* styled */.zo)('span', {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '1px',
  background: '$dotted-horizontal',
  backgroundSize: '16px 1px'
});
const TopBarControls = (_ref) => {
  let {
    progress,
    toggleIsOpen,
    success
  } = _ref,
      props = _objectWithoutProperties(_ref, ["progress", "toggleIsOpen", "success"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, topBarControls_objectSpread(topBarControls_objectSpread({
    as: motion_minimal.m.div
  }, props), {}, {
    children: [!success && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
        initial: "hide",
        animate: "show",
        exit: "hide",
        size: "small",
        leftIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* ArrowBack */.xh, {
          css: {
            color: '$N80'
          },
          as: motion_minimal.m.svg
        }),
        style: "naked",
        color: "dark",
        onClick: e => {
          e.preventDefault();
          router.default.back();
        },
        as: motion_minimal.m.button,
        variants: variants,
        children: "Back"
      }), /*#__PURE__*/jsx_runtime.jsx(BottomBorder, {})]
    }), !success && /*#__PURE__*/jsx_runtime.jsx(theme/* ProgressBar */.ko, {
      initial: "hide",
      animate: "show",
      exit: "hide",
      as: motion_minimal.m.div,
      progress: progress,
      css: {
        flex: '1 1'
      },
      variants: variants
    }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
      initial: "hide",
      animate: "show",
      exit: "hide",
      size: "small",
      rightIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* Close */.x8, {
        css: {
          color: success ? '$LA70' : '$N80'
        },
        as: motion_minimal.m.svg
      }),
      style: "naked",
      color: success ? 'light' : 'dark',
      onClick: e => {
        e.preventDefault();
        toggleIsOpen();
      },
      as: motion_minimal.m.button,
      variants: variants,
      children: "Close"
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/stepWrapper.tsx




function stepWrapper_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = stepWrapper_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function stepWrapper_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Background = (0,theme/* styled */.zo)('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-end',
  position: 'relative',
  background: '$white',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  overflow: 'hidden',
  btlr: '$4',
  btrr: '$4',
  boxShadow: '$footer',
  variants: {
    isOpen: {
      true: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        btlr: '0',
        btrr: '0',
        '@l': {
          br: '$5',
          height: 'auto'
        }
      },
      false: {
        height: 'auto'
      }
    }
  },
  '@l': {
    br: '$5',
    boxShadow: '$3'
  }
});
const Content = (0,theme/* styled */.zo)('div', {
  flex: '1 1',
  alignSelf: 'center',
  mt: '$5',
  '@m': {
    mt: '$6'
  },
  variants: {
    isOpen: {
      true: {
        position: 'static'
      }
    }
  },
  '@l': {
    position: 'static',
    top: '$3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch'
  }
});
const SuccessBackground = (0,theme/* styled */.zo)('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: '$green'
});
const contentContainerVariants = {
  open: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const StepWrapper = (_ref) => {
  let {
    isSubmitting,
    isOpen,
    breakpoints,
    main,
    header,
    footer,
    success
  } = _ref,
      props = stepWrapper_objectWithoutProperties(_ref, ["isSubmitting", "isOpen", "breakpoints", "main", "header", "footer", "success"]);

  const isNotDesktop = !breakpoints.includes('l');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [success && /*#__PURE__*/jsx_runtime.jsx(SuccessBackground, {
      as: motion_minimal.m.div,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      }
    }), /*#__PURE__*/jsx_runtime.jsx(Content, {
      as: motion_minimal.m.div,
      layout: true,
      isOpen: isOpen,
      children: main
    }), footer && /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      as: motion_minimal.m.div,
      layout: true,
      css: {
        maxWidth: '32rem',
        flex: '0 0'
      },
      children: footer
    }), !success && header]
  });
};
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/confirmation.tsx



function confirmation_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = confirmation_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function confirmation_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ConfirmationPage = (_ref) => {
  var _state$formData;

  let {
    changeStep,
    keyword
  } = _ref,
      props = confirmation_objectWithoutProperties(_ref, ["changeStep", "keyword"]);

  const {
    state,
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    resetFormData: lib_little_state_machine/* resetFormData */.ap,
    updateFeedbackFormForm: lib_little_state_machine/* updateFeedbackFormForm */.ff
  }); //@ts-ignore

  const {
    firstName,
    email
  } = (_state$formData = state.formData) === null || _state$formData === void 0 ? void 0 : _state$formData.directMailForm;
  (0,react.useEffect)(() => {
    actions.updateFeedbackFormForm({
      firstName,
      email
    });
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
      css: {
        flex: '1 1'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Heading4 */.k8, {
        alignCenter: true,
        css: {
          color: '$white'
        },
        children: ["Your quote is in progress", firstName && `, ${firstName}`, "!"]
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
        size: "s",
        css: {
          color: '$LA90',
          mt: '$6'
        },
        alignCenter: true,
        children: "Thanks so much for giving us the opportunity to quote on your next job!"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Paragraph */.nv, {
        size: "s",
        css: {
          color: '$LA90'
        },
        alignCenter: true,
        children: ["A ", keyword, " specialist is reviewing your requirements. Please keep checking your inbox for your quote to arrive."]
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
        size: "s",
        css: {
          color: '$LA90'
        },
        alignCenter: true,
        children: "If we have any questions we will contact you via email or your preferred contact number."
      })]
    })
  });
};
const SuccessControls = ({
  isOpen,
  toggleIsOpen
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(bottomBarControls/* FormStepControls */.Q, {
    isSubmitting: false,
    isOpen: isOpen,
    buttonLabel: "Close",
    buttonColor: "light",
    buttonOnClick: toggleIsOpen
  });
};
;// CONCATENATED MODULE: ./src/components/landing-page-quote-form/src/steps/index.tsx




function steps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function steps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { steps_ownKeys(Object(source), true).forEach(function (key) { steps_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { steps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function steps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function steps_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = steps_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function steps_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const WorkaroundForm = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4039).then(__webpack_require__.bind(__webpack_require__, 27273)).then(res => res.NetlifyWorkaroundForm), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(27273)],
    modules: ["../components/landing-page-quote-form/src/steps/index.tsx -> " + '@components/netlify-workaraound-form']
  }
});
const FormStepper = ({
  step,
  breakpoints,
  isOpen,
  toggleIsOpen,
  changeStep,
  progress
}) => {
  const {
    0: isSubmitting,
    1: setSubmitting
  } = (0,react.useState)(false);
  const {
    state,
    actions
  } = (0,little_state_machine/* useStateMachine */.j_)({
    resetFormData: little_state_machine_actions/* resetFormData */.ap,
    updateDirectMailForm: little_state_machine_actions/* updateDirectMailForm */.h3
  });
  const {
    0: readyToSubmit,
    1: fireSubmit
  } = (0,react.useState)(false);

  const {
    //@ts-ignore
    formData: {
      submitted
    },
    //@ts-ignore
    userData
  } = state,
        formData = steps_objectWithoutProperties(state.formData, ["submitted"]);

  const resetForm = () => actions.resetFormData('directMailForm');

  const sendForm = () => {
    setSubmitting(true);
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: (0,utils/* encode */.c)(steps_objectSpread(steps_objectSpread({
        'form-name': 'directMailForm'
      }, formData), userData))
    }).then(() => {
      changeStep('success');
      actions.updateDirectMailForm({
        submitted: true
      });
      resetForm();
    }).catch(error => console.error(error)).finally(() => {});
  };

  (0,react.useEffect)(() => {
    if (readyToSubmit) {
      sendForm();
      fireSubmit(false);
    }
  }, [readyToSubmit]);
  let Main, Footer;

  switch (step) {
    case '1':
      Main = Step1Form;
      Footer = Step1Controls;
      break;

    case '2':
      Main = Step2Form;
      Footer = Step2Controls;
      break;

    case '3':
      Main = Step3Form;
      Footer = Step3Controls;
      break;

    case 'success':
      Main = ConfirmationPage;
      Footer = SuccessControls;
      break;

    default:
      changeStep();
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(StepWrapper, {
      isSubmitting: isSubmitting,
      isOpen: isOpen,
      breakpoints: breakpoints,
      success: step === 'success',
      main: /*#__PURE__*/jsx_runtime.jsx(Main, {
        sendForm: step === '3' && sendForm,
        resetForm: resetForm,
        isSubmitting: isSubmitting,
        setSubmitting: setSubmitting,
        changeStep: changeStep,
        isOpen: isOpen,
        toggleIsOpen: toggleIsOpen,
        progress: progress,
        breakpoints: breakpoints,
        fireFormSubmission: step === '3' && (() => fireSubmit(true))
      }),
      header: /*#__PURE__*/jsx_runtime.jsx(TopBarControls, {
        success: step === 'success',
        toggleIsOpen: toggleIsOpen,
        progress: progress
      }),
      footer: Footer && /*#__PURE__*/jsx_runtime.jsx(Footer, {
        isSubmitting: isSubmitting,
        isOpen: isOpen,
        toggleIsOpen: toggleIsOpen,
        breakpoints: breakpoints
      })
    }), /*#__PURE__*/jsx_runtime.jsx(WorkaroundForm, {
      name: "directMailForm",
      formFields: formData
    })]
  });
};

/***/ })

};
;