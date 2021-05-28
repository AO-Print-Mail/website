/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/components/layout/index.ts + 9 modules
var layout = __webpack_require__(33801);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/lib/datocms/datocms.ts + 1 modules
var datocms = __webpack_require__(12660);
// EXTERNAL MODULE: ./src/components/button/index.ts
var components_button = __webpack_require__(75843);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(10070);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(42283);
// EXTERNAL MODULE: ./node_modules/react-text-mask/dist/reactTextMask.js
var reactTextMask = __webpack_require__(91749);
var reactTextMask_default = /*#__PURE__*/__webpack_require__.n(reactTextMask);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/lib/netlify/utils.ts
var utils = __webpack_require__(42871);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js + 20 modules
var motion_minimal = __webpack_require__(49772);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/little-state-machine/dist/little-state-machine.js
var little_state_machine = __webpack_require__(11240);
;// CONCATENATED MODULE: ./src/components/contact-form/src/contact-form.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const WorkaroundForm = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4039).then(__webpack_require__.bind(__webpack_require__, 27273)).then(res => res.NetlifyWorkaroundForm), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(27273)],
    modules: ["../components/contact-form/src/contact-form.tsx -> " + '@components/netlify-workaraound-form']
  }
});
const FORM_NAME = 'contactForm';
const inputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
  joinMailingList: false,
  'bot-field': ''
};
const schema = lib/* object */.Ry().shape({
  firstName: lib/* string */.Z_().required('Please enter a first name'),
  lastName: lib/* string */.Z_(),
  companyName: lib/* string */.Z_(),
  email: lib/* string */.Z_().email('Please provide a valid email address').required('We need an email to send your quote!'),
  phone: lib/* lazy */.Vo(value => value.length > 0 ? lib/* string */.Z_().min(9, 'Please enter a full telephone number').max(14, 'The telephone number you entered seems too long.') : lib/* string */.Z_()),
  message: lib/* string */.Z_(),
  'bot-field': lib/* string */.Z_(),
  joinMailingList: lib/* boolean */.O7()
});
const mobileMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/];
const Background = (0,theme/* styled */.zo)(theme/* Card */.Zb, {
  boxShadow: '$1',
  px: '$4',
  pb: '$6',
  '@m': {
    px: '$6'
  },
  '@xl': {
    px: '$7'
  }
});
const ContactForm = props => {
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
  const SuccessBackground = (0,theme/* styled */.zo)(Background, {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: '$green',
    zIndex: '$3'
  });
  const {
    0: submitting,
    1: setSubmitting
  } = (0,react.useState)(false);
  const {
    0: firstName,
    1: setFirstname
  } = (0,react.useState)('');
  const {
    state: {
      userData
    }
  } = (0,little_state_machine/* useStateMachine */.j_)({});

  const onSubmit = data => {
    setSubmitting(true);
    setFirstname(data.firstName);
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: (0,utils/* encode */.c)(_objectSpread(_objectSpread({
        'form-name': FORM_NAME
      }, data), userData))
    }).then(() => {
      router.push({
        pathname: router.pathname,
        query: _objectSpread({
          success: 'true'
        }, router.query)
      }, null, {
        shallow: true
      });
    }).catch(error => console.error(error)).finally(() => {
      setSubmitting(false);
      reset();
    });
  };

  const _register = register('phone'),
        {
    ref: phoneRef
  } = _register,
        phoneFormProps = _objectWithoutProperties(_register, ["ref"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Background, _objectSpread(_objectSpread({}, props), {}, {
    children: [router.query['success'] && /*#__PURE__*/jsx_runtime.jsx(SuccessBackground, {
      as: motion_minimal.m.div,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Flex */.kC, {
        css: {
          alignItems: 'center',
          height: '100%'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
          css: {
            flex: '1 1',
            pb: '$9'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Heading2 */.XJ, {
            alignCenter: true,
            css: {
              color: '$white'
            },
            children: ["Thanks for your message", firstName && `, ${firstName}`, "!"]
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
            size: "s",
            css: {
              color: '$LA90',
              mt: '$6'
            },
            alignCenter: true,
            children: "We'll get back to you very soon."
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
      marginTop: "small",
      level: "4",
      children: "Send a message"
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
            name: "firstName",
            placeholder: "Jane",
            defaultValue: inputs.firstName,
            css: {
              px: '$2',
              flexBasis: '50%'
            },
            errors: errors,
            required: true,
            children: "First name"
          })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('lastName')), {}, {
            id: "lastName",
            name: "lastName",
            placeholder: "Appleseed",
            defaultValue: inputs.lastName,
            css: {
              px: '$2',
              flexBasis: '50%'
            },
            errors: errors,
            children: "Last name"
          }))]
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('companyName')), {}, {
          id: "companyName",
          name: "companyName",
          placeholder: "Acme inc",
          defaultValue: inputs.companyName,
          errors: errors,
          children: "Company name"
        })), /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread({}, register('email')), {}, {
          id: "email",
          name: "email",
          placeholder: "jane@example.com.au",
          type: "email",
          defaultValue: inputs.email,
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
          defaultValue: inputs.phone,
          errors: errors,
          render: (textMaskRef, props) => /*#__PURE__*/jsx_runtime.jsx(theme/* Input */.II, _objectSpread(_objectSpread(_objectSpread({
            ref: node => {
              textMaskRef(node);
              phoneRef(node);
            },
            name: "phone"
          }, props), phoneFormProps), {}, {
            children: "Contact number"
          }))
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
            name: "message",
            rows: 8,
            cols: 30,
            placeholder: "Please include any additional information that is applicable to your job.",
            autoComplete: "off",
            defaultValue: inputs.message,
            css: {
              width: '100%'
            }
          }))]
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* Checkbox */.XZ, _objectSpread(_objectSpread({}, register('joinMailingList')), {}, {
          id: "joinMailingList",
          name: "joinMailingList",
          defaultChecked: inputs.joinMailingList,
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
        children: "Send Message"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(WorkaroundForm, {
      formFields: inputs,
      name: FORM_NAME
    })]
  }));
};
;// CONCATENATED MODULE: ./src/components/contact-form/index.ts

;// CONCATENATED MODULE: ./src/pages/contact.tsx



function contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_ownKeys(Object(source), true).forEach(function (key) { contact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function contact_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = contact_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function contact_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const openingHours = [{
  day: 'Monday',
  hours: [{
    open: '8.30am',
    close: '5pm'
  }]
}, {
  day: 'Tuesday',
  hours: [{
    open: '8.30am',
    close: '5pm'
  }]
}, {
  day: 'Wednesday',
  hours: [{
    open: '8.30am',
    close: '5pm'
  }]
}, {
  day: 'Thursday',
  hours: [{
    open: '8.30am',
    close: '5pm'
  }]
}, {
  day: 'Friday',
  hours: [{
    open: '8.30am',
    close: '5pm'
  }]
}, {
  day: 'Saturday',
  hours: []
}, {
  day: 'Sunday',
  hours: []
}];
const Th = (0,theme/* styled */.zo)('th', {
  py: '$1',
  textAlign: 'left',
  pr: '$4',
  color: '$DBA75',
  fontWeight: '$semibold'
});
const Td = (0,theme/* styled */.zo)('td', {
  py: '$1',
  color: '$DBA80'
});
const Ul = (0,theme/* styled */.zo)('ul', {
  listStyle: 'none',
  m: '0',
  p: '0'
});

const OpeningHoursTable = (_ref) => {
  let {
    data
  } = _ref,
      props = contact_objectWithoutProperties(_ref, ["data"]);

  return /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, contact_objectSpread(contact_objectSpread({
    as: "table"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx("tbody", {
      children: data.map(({
        day,
        hours
      }) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime.jsx(Th, {
            children: day
          }), /*#__PURE__*/jsx_runtime.jsx(Td, {
            children: hours.length === 0 ? 'Closed' : /*#__PURE__*/jsx_runtime.jsx(Ul, {
              children: hours.map(({
                open,
                close
              }) => /*#__PURE__*/jsx_runtime.jsx("li", {
                children: `${open} – ${close}`
              }, open))
            })
          })]
        }, day);
      })
    })
  }));
};

const Img = (0,theme/* styled */.zo)(next_image.default, {
  maxHeight: '200px'
});

const Contact = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Layout */.A, {
    canonicalPath: "https://www.aomail.com.au/blog" //@ts-ignore
    ,
    metaData: data.contactPage._seoMetaTags,
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      as: "section",
      css: {
        backgroundColor: '$N10',
        position: 'relative',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        css: {
          pt: '$6',
          minHeight: '280px',
          '@m': {
            minHeight: '400px'
          }
        },
        children: /*#__PURE__*/jsx_runtime.jsx(theme/* TextHolder */.L5, {
          css: {
            mt: '$7',
            '@l': {
              ml: '8.33%'
            }
          },
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* Title */.Dx, {
            color: "primaryGradient",
            children: data.contactPage.title
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* ColumnWrapper */.fh, {
        css: {
          flexFlow: 'column nowrap',
          mb: '-$5',
          '@s_max': {
            p: '0',
            mx: '-$4'
          },
          '@l': {
            flexFlow: 'row nowrap',
            mb: '-$6',
            justifyContent: 'stretch'
          }
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, {
          css: {
            pb: '$5',
            '@l': {
              flex: '0 0 40%'
            }
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* TextHolder */.L5, {
            css: {
              '@l': {
                display: 'flex',
                flexFlow: 'column '
              }
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
              css: {
                '@m': {
                  width: '50%',
                  float: 'left'
                },
                '@l': {
                  width: 'auto',
                  float: 'none'
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
                marginTop: "small",
                level: "6",
                css: {
                  fontWeight: 'bold'
                },
                children: "Call us:"
              }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
                as: "a",
                href: "tel:+61296456777",
                leftIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* Phone */.LP, {
                  size: "matchFontSize"
                }),
                style: "naked",
                offset: "left",
                children: "(02) 9645 6777"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
              css: {
                '@m': {
                  width: '50%',
                  float: 'right'
                },
                '@l': {
                  width: 'auto',
                  float: 'none'
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
                level: "6",
                marginTop: "small",
                css: {
                  fontWeight: 'bold'
                },
                children: "Opening hours:"
              }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {}), /*#__PURE__*/jsx_runtime.jsx(OpeningHoursTable, {
                data: openingHours
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
              css: {
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'flex-start',
                flex: '1 1',
                justifyContents: 'flex-end',
                '@m': {
                  width: '50%',
                  float: 'left'
                },
                '@l': {
                  width: 'auto',
                  float: 'none'
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading2 */.XJ, {
                level: "6",
                marginTop: "small",
                css: {
                  fontWeight: 'bold'
                },
                children: "Visit Us:"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Paragraph */.nv, {
                size: "s",
                children: ["9 Clearview Pl", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Brookvale NSW 2100"]
              }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {
                size: "large"
              }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
                as: "a",
                href: "https://g.page/ao-mail",
                rightIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* ArrowForward */.ZJ, {}),
                style: "naked",
                offset: "left",
                size: "small",
                css: {
                  color: '$blue'
                },
                children: "Directions on Google Maps"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, {
          css: {
            zIndex: '$1',
            mx: '0',
            p: '0',
            '@m': {
              mx: '8.33%'
            },
            '@l': {
              position: 'relative',
              top: '-$4',
              mx: '0',
              flex: '0 0 60%'
            }
          },
          children: /*#__PURE__*/jsx_runtime.jsx(ContactForm, {
            css: {
              width: '100vw',
              mx: '50%',
              left: '-50vw',
              right: '-50vw',
              position: 'relative',
              br: '0',
              '@m': {
                width: 'unset',
                mx: 'unset',
                left: 'unset',
                right: 'unset',
                br: '$4'
              }
            }
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Img, {
      src: `https://maps.googleapis.com/maps/api/staticmap?center=Frenchs%20Forest,AU&zoom=11&size=2048x2048&scale=4&markers=color:red%7Csize:small%7Clabel:%7C${data.contactPage.location.latitude + ',' + data.contactPage.location.longitude}&key=AIzaSyA0lPP3L0uEs2k40H9-5LitOrPKNj_EA4U&map_id=50e424b1c87e9d57`,
      width: "1920px",
      height: "768px",
      objectFit: "cover"
    })]
  });
};

async function getStaticProps({
  preview = false
}) {
  const {
    contactPage
  } = await (0,datocms/* request */.W)({
    query: 'GetContactPage',
    preview
  });
  return {
    props: {
      data: {
        contactPage
      }
    }
  };
}
/* harmony default export */ var contact = (Contact);

/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 15211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZJ": function() { return /* binding */ ArrowForward; },
/* harmony export */   "_Q": function() { return /* binding */ ChevronRight; }
/* harmony export */ });
/* unused harmony exports ArrowBack, ChevronUp, ChevronDown */
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20017);

const ArrowForward = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Forward Arrow',
  d: 'M3 13h14.2l-5.6 5.6L13 20l8-8-8-8-1.4 1.4 5.6 5.6H3v2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Forward arrow'
  }
});
const ArrowBack = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Back Arrow',
  d: 'M21 11H6.8l5.6-5.6L11 4l-8 8 8 8 1.4-1.4L6.8 13H21v-2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Back arrow'
  }
});
const ChevronUp = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Up',
  d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Up'
  }
});
const ChevronDown = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Down',
  d: 'M7.4 7.8l4.6 4.6 4.6-4.6L18 9.2l-6 6-6-6 1.4-1.4z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Down'
  }
});
const ChevronRight = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Chevron Right',
  d: 'M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6-6-6z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Right'
  }
});

/***/ }),

/***/ 63239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phone": function() { return /* reexport safe */ _phone__WEBPACK_IMPORTED_MODULE_0__.L; },
/* harmony export */   "CovidSafe": function() { return /* reexport safe */ _covidSafe__WEBPACK_IMPORTED_MODULE_1__.J; },
/* harmony export */   "ArrowForward": function() { return /* reexport safe */ _arrows__WEBPACK_IMPORTED_MODULE_6__.ZJ; },
/* harmony export */   "Close": function() { return /* reexport safe */ _close__WEBPACK_IMPORTED_MODULE_7__.x; },
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

/***/ 97919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ Phone; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);


const Phone = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'Phone',
  path: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M4.827 10.521c1.92 3.459 5.013 6.282 8.786 8.055l2.934-2.69c.36-.33.893-.44 1.36-.293 1.493.453 3.106.697 4.76.697.733 0 1.333.55 1.333 1.222v4.266C24 22.45 23.4 23 22.667 23 10.147 23 0 13.699 0 2.222 0 1.55.6 1 1.333 1H6c.733 0 1.333.55 1.333 1.222 0 1.528.267 2.995.76 4.364.147.427.04.904-.333 1.246l-2.933 2.69z",
    fill: "currentColor"
  })
});

/***/ }),

/***/ 38135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.iv; },
/* harmony export */   "wU": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.wU; },
/* harmony export */   "zo": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.zo; },
/* harmony export */   "XJ": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.XJ; },
/* harmony export */   "k8": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.k8; },
/* harmony export */   "nv": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.nv; },
/* harmony export */   "Dx": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.Dx; },
/* harmony export */   "W0": function() { return /* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_2__.W; },
/* harmony export */   "ZJ": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.ArrowForward; },
/* harmony export */   "s1": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Facebook; },
/* harmony export */   "yh": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.LinkedIn; },
/* harmony export */   "LP": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Phone; },
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
/* harmony export */   "II": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.AZ; },
/* harmony export */   "TR": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.TR; },
/* harmony export */   "EU": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.EU; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.LZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Kx; },
/* harmony export */   "L5": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.L5; },
/* harmony export */   "Sh": function() { return /* reexport module object */ _utils_utilityClasses__WEBPACK_IMPORTED_MODULE_6__; }
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

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "XJ": function() { return /* reexport */ Heading2; },
  "k8": function() { return /* reexport */ Heading4; },
  "nv": function() { return /* reexport */ typography_text/* Paragraph */.n; },
  "Dx": function() { return /* reexport */ title/* Title */.D; }
});

// UNUSED EXPORTS: Heading, Heading1, Heading3, Heading5, Heading6, Text

// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
// EXTERNAL MODULE: ./src/theme/utils/setComponentProps.tsx
var setComponentProps = __webpack_require__(55424);
;// CONCATENATED MODULE: ./src/theme/typography/heading.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headingSizes = {
  1: {
    fontSize: '$h1m',
    lineHeight: '$h1m',
    marginBottom: '-9px',
    letterSpacing: '$xcosy',
    color: '$DBA100',
    '@m': {
      fontSize: '$h1t',
      lineHeight: '$h1t',
      marginBottom: '-7px'
    },
    '@l': {
      fontSize: '$h1d',
      lineHeight: '$h1d',
      marginBottom: '-7px'
    }
  },
  2: {
    fontSize: '$h2m',
    lineHeight: '$h2m',
    marginBottom: '-8px',
    color: '$DBA90',
    '@m': {
      fontSize: '$h2t',
      lineHeight: '$h2t',
      marginBottom: '-6px',
      letterSpacing: '$xcosy'
    },
    '@l': {
      fontSize: '$h2d',
      lineHeight: '$h2d',
      marginBottom: '-5px'
    }
  },
  3: {
    fontSize: '$h3m',
    lineHeight: '$h3m',
    marginBottom: '-8px',
    color: '$DBA85',
    '@m': {
      fontSize: '$h3t',
      lineHeight: '$h3t',
      marginBottom: '-7px'
    },
    '@l': {
      fontSize: '$h3d',
      lineHeight: '$h3d',
      marginBottom: '-6px'
    }
  },
  4: {
    fontSize: '$h4m',
    lineHeight: '$h4m',
    marginBottom: '-7px',
    color: '$DBA80',
    '@m': {
      fontSize: '$h4t',
      lineHeight: '$h4t',
      marginBottom: '-6px'
    },
    '@l': {
      fontSize: '$h4d',
      lineHeight: '$h4d',
      marginBottom: '-5px'
    }
  },
  5: {
    fontSize: '$h5m',
    lineHeight: '$h5m',
    marginBottom: '-8px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h5t',
      lineHeight: '$h5t',
      marginBottom: '-5px'
    },
    '@l': {
      fontSize: '$h5d',
      lineHeight: '$h5d',
      marginBottom: '-5px'
    }
  },
  6: {
    fontSize: '$h6m',
    lineHeight: '$h6m',
    marginBottom: '-6px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h6t',
      lineHeight: '$h6t',
      marginBottom: '-5px'
    },
    '@l': {
      fontSize: '$h6d',
      lineHeight: '$h6d',
      marginBottom: '-4px'
    }
  }
};
const Heading = (0,stitches_config/* styled */.zo)('h1', {
  fontWeight: '$bold',
  mt: '$4',
  overflow: 'visible',
  letterSpacing: '$cosy',
  variants: {
    level: _objectSpread({}, headingSizes),
    color: {
      primary: {
        color: '$DBA100'
      },
      light: {
        color: '$LA100'
      },
      primaryGradient: {
        textGradient: 'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)'
      },
      lightGradient: {
        textGradient: 'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)'
      },
      orangeGradient: {
        textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)'
      }
    },
    alignLeft: {
      true: {
        textAlign: 'left'
      },
      false: {
        textAlign: 'auto'
      }
    },
    alignRight: {
      true: {
        textAlign: 'right'
      },
      false: {
        textAlign: 'auto'
      }
    },
    alignCenter: {
      true: {
        textAlign: 'center'
      },
      false: {
        textAlign: 'auto'
      }
    },
    marginTop: {
      none: {
        mt: '0'
      },
      default: {
        '@m': {
          mt: '$5'
        },
        '@l': {
          mt: '$6'
        }
      },
      small: {
        mt: '$2',
        '@m': {
          mt: '$3'
        },
        '@l': {
          mt: '$4'
        }
      }
    }
  },
  compoundVariants: [{
    level: '1',
    color: 'light',
    css: {
      color: '$LA100'
    }
  }, {
    level: '2',
    color: 'light',
    css: {
      color: '$LA90'
    }
  }, {
    level: '3',
    color: 'light',
    css: {
      color: '$LA85'
    }
  }, {
    level: '4',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }, {
    level: '5',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }, {
    level: '6',
    color: 'light',
    css: {
      color: '$LA80'
    }
  }],
  defaultVariants: {
    marginTop: 'normal',
    alignRight: 'false',
    alignCenter: 'false'
  }
});
const Heading1 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h1',
  level: '1'
});
const Heading2 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h2',
  level: '2'
});
const Heading3 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h3',
  level: '3'
});
const Heading4 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h4',
  level: '4'
});
const Heading5 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h5',
  level: '5'
});
const Heading6 = (0,setComponentProps/* setComponentProps */.O)(Heading, {
  as: 'h6',
  level: '6'
});
// EXTERNAL MODULE: ./src/theme/typography/title.tsx
var title = __webpack_require__(69286);
// EXTERNAL MODULE: ./src/theme/typography/text.tsx
var typography_text = __webpack_require__(31950);
;// CONCATENATED MODULE: ./src/theme/typography/index.ts




/***/ }),

/***/ 58360:
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

      const compMod = __webpack_require__(4364)

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
        page: "/contact",
        buildId: "VXSL37vejTUCwsco7WiIr",
        escapedBuildId: "VXSL37vejTUCwsco7WiIr",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"39730ab9481f9026b008be2abcece585",previewModeSigningKey:"99949977aa80c07eb6a52002c87dd2619e637e9929ff738da537412caf63b9cd",previewModeEncryptionKey:"29c8b2285b47bb7d64bcb6b006de95b50183e25e09839db7e8ef92864839793f"}
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7057,4475,1522,6187,6071,8697,5675,1428,3473,9185,3903,3608,7522,5596,1587,3992,77,1801], function() { return __webpack_require__(58360); })
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
/******/ 			9335: 1
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
/******/ 			__webpack_require__.e(1522);
/******/ 			__webpack_require__.e(6187);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(8697);
/******/ 			__webpack_require__.e(5675);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(3473);
/******/ 			__webpack_require__.e(9185);
/******/ 			__webpack_require__.e(3903);
/******/ 			__webpack_require__.e(3608);
/******/ 			__webpack_require__.e(7522);
/******/ 			__webpack_require__.e(5596);
/******/ 			__webpack_require__.e(1587);
/******/ 			__webpack_require__.e(3992);
/******/ 			__webpack_require__.e(77);
/******/ 			__webpack_require__.e(1801);
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