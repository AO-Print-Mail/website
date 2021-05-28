exports.id = 5519;
exports.ids = [5519];
exports.modules = {

/***/ 35519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Testimonial": function() { return /* reexport */ Testimonial; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
;// CONCATENATED MODULE: ./src/components/testimonial/src/testimonial.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Photo = (0,theme/* styled */.zo)(cjs.Image, {
  objectFit: 'cover',
  br: '50%',
  size: '$9',
  mr: '$3',
  '@m': {
    mr: '$5'
  },
  '@l': {
    size: '$10',
    m: '0'
  }
});
const ProfileWrapper = (0,theme/* styled */.zo)(theme/* Flex */.kC, {
  mt: '$6',
  alignItems: 'center',
  '@l': {
    flexFlow: 'column nowrap',
    mb: '-$2'
  }
});
const ProfileText = (0,theme/* styled */.zo)(theme/* Paragraph */.nv, {
  my: '$1',
  variants: {
    name: {
      true: {
        color: '$white',
        fontWeight: '600'
      }
    }
  },
  '@l': {
    textAlign: 'center'
  }
});
const TestimonialTextHolder = (0,theme/* styled */.zo)(theme/* ColumnWrapper */.fh, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  '@l': {
    flexFlow: 'row-reverse nowrap',
    alignItems: 'flex-end',
    mb: '$6'
  }
});
const Quote = (0,theme/* styled */.zo)(theme/* Title */.Dx, {
  color: '$white',
  mx: '0',
  p: '0',
  position: 'relative',
  '&:after': {
    content: '”',
    ml: '$1'
  },
  '&:before': {
    content: '“',
    ml: '$2',
    position: 'absolute',
    left: '-$4'
  }
});
const Testimonial = (_ref) => {
  let {
    testimonial,
    image,
    name,
    company
  } = _ref,
      props = _objectWithoutProperties(_ref, ["testimonial", "image", "name", "company"]);

  return (
    /*#__PURE__*/
    //@ts-ignore
    jsx_runtime.jsx(theme/* FullWidthFeatureContainer */.WX, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(TestimonialTextHolder, {
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, {
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* TextHolder */.L5, {
            children: /*#__PURE__*/jsx_runtime.jsx(Quote, {
              level: "3",
              as: "blockquote",
              children: testimonial
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* Column */.sg, {
          css: {
            '@l': {
              flex: '0 0 25%'
            }
          },
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* TextHolder */.L5, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProfileWrapper, {
              children: [/*#__PURE__*/jsx_runtime.jsx(Photo, {
                data: image
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
                css: {
                  my: '$4'
                },
                children: [/*#__PURE__*/jsx_runtime.jsx(ProfileText, {
                  size: "s",
                  name: true,
                  children: name
                }), /*#__PURE__*/jsx_runtime.jsx(ProfileText, {
                  size: "s",
                  color: "light",
                  children: company
                })]
              })]
            })
          })
        })]
      })
    }))
  );
};
;// CONCATENATED MODULE: ./src/components/testimonial/index.ts


/***/ })

};
;