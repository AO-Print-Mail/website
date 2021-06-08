exports.id = 5517;
exports.ids = [5517];
exports.modules = {

/***/ 45517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NameBadge": function() { return /* reexport */ NameBadge; },
  "StaffProfile": function() { return /* reexport */ StaffProfile; },
  "StaffProfileCollection": function() { return /* reexport */ StaffProfileCollection; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./src/lib/datocms/structuredText.tsx
var structuredText = __webpack_require__(36330);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
;// CONCATENATED MODULE: ./src/components/staff-profile-collection/src/staff-profile-collection.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Avatar = (0,theme/* styled */.zo)(cjs.Image, {
  alignSelf: 'center',
  flex: '0 0 $sizes$8',
  mr: '$3',
  '@m': {
    flex: '0 0 $sizes$9',
    mr: '$3'
  },
  '@xl': {
    mr: '$4'
  }
});
const NameBadge = ({
  name,
  jobTitle,
  avatar
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Avatar, {
      data: avatar.responsiveImage
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
      css: {
        alignSelf: 'center'
      },
      children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Heading3 */.aC, {
        color: "primaryGradient",
        marginTop: "none",
        children: name
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
        size: "m",
        marginTop: "small",
        children: jobTitle
      })]
    })]
  });
};
const Col = (0,theme/* styled */.zo)(theme/* Column */.sg, {
  my: '$3',
  flexBasis: '100%',
  '@m': {
    mx: '16.67%'
  },
  '@l': {
    mx: '0',
    flexBasis: '50%',
    alignSelf: 'stretch'
  }
});
const BiographyStRules = (0,structuredText/* structuredTextRules */.dr)({
  paragraphProps: {
    size: 's'
  }
});
const StaffProfile = (_ref) => {
  let {
    name,
    jobTitle,
    biography,
    avatar
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "jobTitle", "biography", "avatar"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* FlatCard */.VP, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime.jsx(NameBadge, {
      name: name,
      jobTitle: jobTitle,
      avatar: avatar
    }), /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText //@ts-ignore
    , {
      data: biography,
      customRules: BiographyStRules,
      children: biography
    })]
  }));
};
const StaffProfileCollection = (_ref2) => {
  let {
    data
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["data"]);

  return /*#__PURE__*/jsx_runtime.jsx(theme/* ColumnWrapper */.fh, _objectSpread(_objectSpread({
    css: {
      my: '$6',
      flexFlow: 'column nowrap',
      '@l': {
        flexFlow: 'row nowrap'
      },
      '@xl': {
        mx: '8.33%'
      }
    }
  }, props), {}, {
    children: data.map(staff => {
      return /*#__PURE__*/jsx_runtime.jsx(Col, {
        children: /*#__PURE__*/jsx_runtime.jsx(StaffProfile, {
          avatar: staff.avatar,
          biography: staff.biography,
          jobTitle: staff.jobTitle,
          name: staff.name,
          css: {
            minHeight: '100%',
            pb: '$5',
            boxShadow: '$1'
          }
        })
      }, staff.id);
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/staff-profile-collection/index.ts


/***/ })

};
;