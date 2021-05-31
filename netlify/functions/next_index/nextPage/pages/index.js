/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 69881:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteCta": function() { return /* reexport safe */ _src_quote_cta__WEBPACK_IMPORTED_MODULE_0__.h; }
/* harmony export */ });
/* harmony import */ var _src_quote_cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26895);


/***/ }),

/***/ 96166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/components/layout/index.ts + 9 modules
var layout = __webpack_require__(33801);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/theme/utils/utilityClasses.ts
var utilityClasses = __webpack_require__(35222);
;// CONCATENATED MODULE: ./src/lib/datocms/blockRules.tsx





const FeatureParagraphImage = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(6330), __webpack_require__.e(2786)]).then(__webpack_require__.bind(__webpack_require__, 72786)).then(res => res.FeatureParagraphWithImage), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(72786)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/feature-paragraph-with-image']
  }
});
const TwoColumnList = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 6502).then(__webpack_require__.bind(__webpack_require__, 56502)).then(res => res.TwoColumnList), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(56502)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/two-column-list']
  }
});
const Testimonial = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 5519).then(__webpack_require__.bind(__webpack_require__, 35519)).then(res => res.Testimonial), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(35519)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/testimonial']
  }
});
const SideBySideParagraphs = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(6330), __webpack_require__.e(381)]).then(__webpack_require__.bind(__webpack_require__, 381)).then(res => res.SideBySideParagraphs), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(381)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/side-by-side-paragraphs']
  }
});
const QuoteCta = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3735), __webpack_require__.e(5172), __webpack_require__.e(6895), __webpack_require__.e(9881)]).then(__webpack_require__.bind(__webpack_require__, 69881)).then(res => res.QuoteCta), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(69881)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/quote-cta']
  }
});
const StaffProfileCollection = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(6330), __webpack_require__.e(5517)]).then(__webpack_require__.bind(__webpack_require__, 45517)).then(res => res.StaffProfileCollection), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(45517)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/staff-profile-collection']
  }
});
const MissionCallout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 3591).then(__webpack_require__.bind(__webpack_require__, 73591)).then(res => res.MissionCallout), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(73591)],
    modules: ["../lib/datocms/blockRules.tsx -> " + '@components/mission-callout']
  }
});
function structuredTextBlockRules({
  record
}) {
  switch (record.__typename) {
    case 'FeatureParagraphImageRecord':
      return /*#__PURE__*/jsx_runtime.jsx(FeatureParagraphImage, {
        heading: record.heading,
        paragraph: record.paragraph,
        image: record.image,
        crop: record.cropImage,
        background: record.patternBackground,
        imagePosition: record.imagePosition
      }, record.id);

    case 'TwoColumnListRecord':
      return /*#__PURE__*/jsx_runtime.jsx(TwoColumnList, {
        items: record.serviceList
      }, record.id);

    case 'TestimonialRecord':
      return /*#__PURE__*/jsx_runtime.jsx(Testimonial, {
        testimonial: record.testimonial,
        name: record.name,
        company: record.positionCompany,
        image: record.photo.responsiveImage
      }, record.id);

    case 'SideBySidePRecord':
      return /*#__PURE__*/jsx_runtime.jsx(SideBySideParagraphs, {
        leftHeading: record.leftHeading,
        rightHeading: record.rightHeading,
        leftParagraph: record.leftParagraph,
        rightParagraph: record.rightParagraph,
        css: {
          my: '$5'
        }
      }, record.id);

    case 'CtaRecord':
      return /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        children: /*#__PURE__*/jsx_runtime.jsx(QuoteCta, {
          heading: record.heading,
          css: {
            my: '$5'
          },
          paragraph: record.subtext
        })
      }, record.id);

    case 'StaffProfileCollectionRecord':
      return /*#__PURE__*/jsx_runtime.jsx(StaffProfileCollection, {
        data: record.profiles
      }, record.id);

    case 'FullWidthCalloutRecord':
      const {
        id,
        callout,
        subheading
      } = record;
      return /*#__PURE__*/jsx_runtime.jsx(MissionCallout, {
        css: {
          my: '$7'
        },
        className: (0,utilityClasses.fullWidth)(),
        data: {
          callout,
          subheading,
          id
        }
      }, id);

    default:
      return null;
  }
}
function ModularContent({
  data
}) {
  return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
    children: data.map(record => structuredTextBlockRules({
      record
    }))
  });
}
// EXTERNAL MODULE: ./src/lib/datocms/datocms.ts + 1 modules
var datocms = __webpack_require__(12660);
// EXTERNAL MODULE: ./src/components/quote-cta/index.ts
var quote_cta = __webpack_require__(69881);
// EXTERNAL MODULE: ./src/components/client-logo-banner/src/client-logo-banner.tsx + 1 modules
var client_logo_banner = __webpack_require__(72444);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./src/theme/atoms/index.ts
var atoms = __webpack_require__(34176);
// EXTERNAL MODULE: ./src/theme/typography/index.ts + 1 modules
var typography = __webpack_require__(79973);
// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
;// CONCATENATED MODULE: ./src/components/list-card/src/list-card.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Background = (0,stitches_config/* styled */.zo)('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '0',
  '@l': {
    flexDirection: 'row',
    py: '$5'
  }
});
const ServiceEntryLayout = (0,stitches_config/* styled */.zo)(atoms/* HoverGroupFlex */.Oe, {
  flex: '0 0 100%',
  position: 'relative',
  '@l': {
    flexDirection: 'column',
    flex: '1 1'
  }
}); // const BottomBorder = styled('span', {
//   display: 'none',
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '1px',
//   [`${ListCardWrapper}:not(:first-child) > &`]: {
//     display: 'block',
//     background: '$dotted-horizontal',
//     backgroundSize: '16px 1px',
//   },
//   '@l': {
//     [`${ListCardWrapper}:not(:first-child) > &`]: {
//       background: '$dotted-vertical',
//       backgroundSize: '1px 16px',
//       height: '100%',
//       width: '1px',
//     },
//   },
// })

const ServiceEntryText = (0,stitches_config/* styled */.zo)(atoms/* Box */.xu, {
  '@l': {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column'
  }
});
const ServiceImage = (0,stitches_config/* styled */.zo)(cjs.Image, {
  br: '$3',
  flex: '0 0 $sizes$8',
  height: '$7',
  mr: '$3',
  display: 'none !important',
  '@s': {
    display: 'block !important'
  },
  '@m': {
    flexBasis: '$sizes$10',
    height: 'auto'
  },
  '@l': {
    maxWidth: '$12'
  }
});

const ServiceEntry = (_ref) => {
  let {
    image,
    title,
    description,
    linkText,
    link,
    linkRef
  } = _ref,
      props = _objectWithoutProperties(_ref, ["image", "title", "description", "linkText", "link", "linkRef"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ServiceEntryLayout, {
    children: [/*#__PURE__*/jsx_runtime.jsx(ServiceImage, {
      pictureStyle: {
        objectFit: 'cover'
      },
      data: image
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ServiceEntryText, {
      children: [/*#__PURE__*/jsx_runtime.jsx(typography/* Heading3 */.aC, {
        marginTop: {
          '@initial': 'none',
          '@l': 'small'
        },
        children: title
      }), /*#__PURE__*/jsx_runtime.jsx(typography/* Paragraph */.nv, {
        marginTop: {
          '@m': 'small'
        },
        size: "s",
        css: {
          color: '$DA70',
          '@l': {
            flexBasis: '100%',
            mr: '$4'
          }
        },
        children: description
      }), /*#__PURE__*/jsx_runtime.jsx(atoms/* Spacer */.LZ, {}), /*#__PURE__*/jsx_runtime.jsx(atoms/* CtaLink */.eu //@ts-expect-error
      , {
        ref: linkRef,
        text: linkText,
        to: link
      })]
    })]
  });
};

const ListCard = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  const linkRefs = (0,react.useRef)({});

  function setLinkRef(refId) {
    return function (el) {
      linkRefs.current[refId] = el;
    };
  }

  function handleClick(refId) {
    return function (e) {
      e.preventDefault();
      linkRefs.current[refId].click();
    };
  }

  return children ? /*#__PURE__*/jsx_runtime.jsx(Background, _objectSpread(_objectSpread({
    as: atoms/* Card */.Zb
  }, props), {}, {
    children: react.Children.map(children, (child, i) => {
      const id = child.key || i.toString();
      const innerChild = /*#__PURE__*/react.cloneElement(child, {
        onClick: handleClick(id),
        linkRef: setLinkRef(id)
      });
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(atoms/* ListCardWrapper */.Ys, {
        onClick: handleClick(id),
        children: [/*#__PURE__*/jsx_runtime.jsx(atoms/* Border */.OC, {
          position: {
            '@initial': 'bottom',
            '@l': 'right'
          },
          "aria-hidden": true
        }), innerChild]
      }, id);
    })
  })) : null;
};
const ArticleListCard = (_ref3) => {
  let {
    data,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["data", "children"]);

  return /*#__PURE__*/jsx_runtime.jsx(ListCard, _objectSpread(_objectSpread({}, props), {}, {
    children: data.map(d => /*#__PURE__*/jsx_runtime.jsx(ServiceEntry, _objectSpread({}, d), d.title))
  }));
};
;// CONCATENATED MODULE: ./src/components/list-card/index.ts

// EXTERNAL MODULE: ./src/components/article-summary/index.ts + 1 modules
var article_summary = __webpack_require__(39690);
;// CONCATENATED MODULE: ./src/svg/desktop-hero.svg
var _g, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgDesktopHero(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 2049 960"
  }, props), _g || (_g = /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip0)"
  }, /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1377.06-416.24L1888.7 95.4"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip1)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1889.17 54.7l-29.29-29.3-37.33 37.34 29.28 29.3 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1851.83 92.03l8.05-66.62-37.33 37.33 29.28 29.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1860.95 35.53l29.29 29.29-30.47 30.46-6.93-6.93-6.87 6.87-1.44-1.43-20.92-20.92 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1855.62 73.98l-12.61-12.6 12.55-12.55 3.11 3.12 2.28-16.42-37.34 37.34 20.92 20.92 1.44 1.43 7.73-1.32 1.92-19.92zm-9.06 5.36L1835.8 68.6l.87-.88 10.76 10.76-.87.87zm1.74-1.74l-10.75-10.76.87-.87 10.75 10.76-.87.87zm1.75-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1870.46 52.89l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1855.67 74.03l12.54-12.54-12.65-12.66-12.55 12.55 12.61 12.6.05.05zm-.71 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.24.03.48.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1849.46 83.18a5.33 5.33 0 004.78 5.05l1.02-10.47a5.22 5.22 0 00-5.8 5.43zm1.46-8.19l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.75 1.74l-10.75-10.76-.87.87 10.75 10.76.87-.87zm-1.74 1.74l-10.75-10.76-.88.88 10.76 10.75.87-.87zm-4.42-17.09l12.61 12.6 3.05-22.03-3.11-3.12-12.55 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1313.04-352.22l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip2)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1732.65 59.48a8.41 8.41 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.82l-5.95-5.96a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1732.65 59.48a8.42 8.42 0 0011.91 0l-11.91-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1750.51 41.62a16.84 16.84 0 00-23.81 0l5.95 5.96a8.42 8.42 0 0111.91 11.9l5.95 5.96a16.85 16.85 0 000-23.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1744.56 47.58a8.42 8.42 0 00-11.91 0l11.91 11.9a8.43 8.43 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1726.7 65.43l-.59-.58a16 16 0 00-22.64 0l-9.19 9.2 11.9 11.9 20.52-20.52z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1727.28 88.66a16.02 16.02 0 000-22.64l-.58-.58-20.52 20.5 11.91 11.91 9.19-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip3)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1762.61 117.75l7.58 32.2 20.83-20.83-7.57-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1796.34 156.1l6.05 1.43 20.84-20.84-32.2-7.57 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1791.03 129.12l5.31 26.99-26.15-6.16 20.84-20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1793.35 140.9h-.01c-1.1.36-2.24.53-3.21.42-2.12-.24-2.59-1.67-1.07-3.2a8.54 8.54 0 013.37-1.9l-.82-4.15-10.01 10.06 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1775.4 113.92l3.79 16.38 3.12-3.11-2.85-12.32-4.06-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1775.92 130.83l-3.55 14.3-2.05-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1785.37 149.82l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.82-.42l.8.18 3.25-3.26-.8-.18-3.25 3.25zm-1.83-.44l.8.19 3.26-3.25-.8-.2-3.26 3.26zm-1.83-.43l.81.19 3.25-3.25-.8-.2-3.26 3.26zm-1.82-.43l.8.2 3.26-3.26-.81-.2-3.25 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1804.47 152.04l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1790.19 148.68l-1.84 1.84 7.22 1.7-.47-2.39-4.91-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1767.12 116.64l-1.17 1.18 3.63 15.42 1.17-1.18-3.63-15.42zm2.22-2.21l-1.18 1.18 3.63 15.42 1.18-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1783.7 121.12l-1.84-7.82 4.41-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1783.45 96.92l2.82 11.97 31.44 8.13-3.2-11.4-31.06-8.7zm36.36 27.59l-31.7-7.8 2.91 12.4 32.21 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1817.71 117.03l-31.44-8.14 1.84 7.83 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1778.51 110.8l-3.11 3.12 4.06.95-.95-4.06z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1791.61 132.07l.82 4.15.01-.01a7.97 7.97 0 013.2-.4c2.12.23 2.59 1.66 1.07 3.18a8.51 8.51 0 01-3.36 1.91l.81 4.14 10.06-10.05-12.61-2.92z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1249.01-288.19l511.64 511.63"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip4)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1620.1 44.18a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1615.17 78.66a20.9 20.9 0 01-29.55-29.55l-4.92-4.93a27.86 27.86 0 1039.4 39.4l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1610.25 73.73a13.93 13.93 0 01-19.7-19.7l-4.93-4.92a20.9 20.9 0 1029.55 29.55l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1615.17 49.1a20.9 20.9 0 00-29.55 0l4.93 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1610.25 54.03a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 119.85 9.85l4.93 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1605.32 68.8a6.97 6.97 0 01-9.85-9.84l-4.92-4.93a13.93 13.93 0 1019.7 19.7l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1595.47 58.96a6.96 6.96 0 109.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1605.32 58.96a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip5)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1690.2 121.88l-25.26-25.27 32.75 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1664.94 96.61l23.2 32.94 8.95-8.95-32.15-23.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1688.43 134.87l-5.02-7.97 5.02-6.81L1665 96.67l-.06-.06-39.3 39.3 30.88 30.88 31.91-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1664.94 96.61l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1671.87 142.28l-6.26-6.26-.94.94 6.26 6.26.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1655.12 137.6l-10.93-10.93-.94.94 10.93 10.93.94-.94zm-3.75 3.75l-10.93-10.93-.93.93 10.93 10.93.93-.93zm1.88-1.88l-10.93-10.93-.94.94 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1660.62 132.87c1.97.35 4.03.12 5.89-.7l-5.18-5.18-.71 5.88zm4.39-12.5l6.65 6.64a10.13 10.13 0 00-8.61-14.2l-1.31 10.83 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1671.66 127.01l-6.65-6.64-3.27 3.27-.41 3.35 5.18 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1655.25 115.75a10.11 10.11 0 005.37 17.12l.71-5.88-1.47-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1659.86 125.52l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1688.43 134.87V120.1l-7.39 7.4 7.39 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1648.11 146.72l9.66 9.65 1.16-9.65h-10.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1667.43 146.72h-8.51l-1.15 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip6)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1716.13 169.77l-14.77 4.93 14.77 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1745.68 216.56l1.23-1.23-11.08-11.09h-2.46l12.31 12.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1729.68 200.55l3.69 3.7h2.46l-4.92-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1743.22 219.02l1.23-1.23-13.54-13.54h-2.47l14.78 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1727.21 203.02l1.24 1.23h2.46l-2.46-2.47-1.24 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1691.51 179.62l24.62 24.63v-14.78l-14.77-14.77 14.77-4.93V155l-24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1716.13 155v14.77l3.7-1.23-3.7 11.08 11.08-3.7-6.15 18.48-4.93-4.93v14.78l24.63-24.63-24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1748.91 212.4l8.14-8.16h-16.29l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1748.91 196.1l-8.15 8.15h16.29l-8.14-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1757.05 204.25l-8.14 8.14-8.15-8.14h-4.93l11.08 11.08-1.23 1.23-12.31-12.31h-2.46l13.54 13.54-1.23 1.23-14.78-14.77h-12.31l24.63 24.62 24.62-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1716.13 204.25h12.31l-1.23-1.24 1.24-1.23 2.46 2.47h2.46l-3.69-3.7 1.23-1.23 4.92 4.93h4.93l8.15-8.15 8.14 8.15h8.33l-24.62-24.63-24.63 24.63z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1184.99-224.17l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip7)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1475.6 76.22l25.16-25.17-31.36.18-25.17 25.17 31.37-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1500.59 82.42l.17-31.37-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.13l.18-31.37-8.04 8.04-.17 31.37 8.03-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1461.12 59.52l-8.85 8.84 31.37-.18 8.84-8.84-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1492.3 90.7l-8.84 8.85.18-31.37 8.84-8.84-.18 31.36zm-31.18-31.19l-8.85 8.85.17-31.36 8.84-8.84-.16 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1469.4 51.23l.18-31.36-8.29 8.29-.17 31.35 8.28-8.28zm-24.99-6.19l-.18 31.36 8.04-8.04.17-31.36-8.03 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip8)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1569.05 118.72l-29.29-29.29-37.34 37.34 29.29 29.29 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1531.71 156.06l8.05-66.63-37.34 37.34 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1540.83 99.56l29.28 29.28-30.46 30.47-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.34-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1535.49 138l-12.6-12.6 12.54-12.54 3.12 3.11 2.28-16.41-37.34 37.33 20.92 20.92 1.44 1.44 7.73-1.33 1.91-19.91zm-9.05 5.37l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.75-.87.88zm1.74-1.75l-10.75-10.75.87-.88 10.75 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1550.34 116.91l.11 25.46-12.78-12.79 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1535.54 138.06l12.55-12.55-12.65-12.65-12.55 12.55 12.61 12.6.04.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.05l-1.02 10.48c.24.02.47.03.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1529.33 147.2a5.33 5.33 0 004.79 5.06l1.02-10.48a5.22 5.22 0 00-5.81 5.42zm1.47-8.19l-10.76-10.75-.87.87 10.75 10.75.88-.87zm-1.75 1.74L1518.29 130l-.87.87 10.76 10.76.87-.88zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-4.42-17.1l12.61 12.61 3.05-22.04-3.11-3.11-12.55 12.55zm9.83 26.98l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip9)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1637.33 204.25L1588.08 155l-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1588.08 204.25v-24.63h-24.62l24.62 24.63zm24.63 24.62v-24.62h-24.63l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1612.71 204.25h-24.63v-24.63l24.63 24.63zm-49.25-24.63h24.62V155l-24.62 24.62zm73.87 24.63h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1606.46 191.93a6.07 6.07 0 00-10.35-4.28l8.57 8.57a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1600.4 198c1.67 0 3.19-.68 4.28-1.78l-8.57-8.57a6.07 6.07 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip10)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1668.62 251.56a8.43 8.43 0 010-11.91l-5.95-5.95a16.85 16.85 0 0023.81 23.8l-5.95-5.94a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1668.62 251.56a8.42 8.42 0 0011.91 0l-11.91-11.91a8.43 8.43 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1686.48 233.7a16.84 16.84 0 00-23.81 0l5.96 5.95a8.41 8.41 0 1111.9 11.9l5.95 5.96a16.83 16.83 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1680.53 239.65a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1662.67 257.5l-.58-.58a16.02 16.02 0 00-22.65 0l-9.19 9.2 11.91 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1663.26 280.74a16.01 16.01 0 000-22.65l-.59-.58-20.51 20.51 11.9 11.9 9.2-9.18z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1120.96-160.15l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip11)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1314.44 53.72l7.58 32.2 20.83-20.83-7.57-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1348.17 92.08l6.05 1.42 20.84-20.83-32.21-7.58 5.32 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1342.85 65.09l5.32 26.99-26.15-6.15 20.83-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1345.18 76.88h-.01c-1.1.35-2.24.52-3.22.41-2.11-.24-2.58-1.67-1.06-3.19a8.5 8.5 0 013.36-1.91l-.81-4.14-10.01 10.05 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1327.23 49.89l3.79 16.38 3.11-3.1-2.85-12.32-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1327.75 66.8l-3.56 14.3-2.04-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1337.2 85.8l.8.18 3.26-3.26-.81-.18-3.25 3.25zm-1.83-.44l.81.2 3.25-3.26-.8-.2-3.26 3.26zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.44l.81.2 3.25-3.26-.8-.19-3.26 3.26zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1356.3 88.01l-9.37-2.2.47 2.39 7.06 1.66 1.84-1.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1342.02 84.65l-1.84 1.84 7.22 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1318.95 52.62l-1.17 1.17 3.63 15.42 1.17-1.17-3.63-15.42zm2.21-2.22l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1335.53 57.1l-1.84-7.83 4.41-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1335.28 32.89l2.82 11.97 31.44 8.14-3.2-11.4-31.06-8.71zm36.36 27.6l-31.71-7.8 2.92 12.4 32.2 7.58-3.41-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1369.54 53l-31.44-8.13 1.84 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1330.34 46.78l-3.11 3.1 4.05.97-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1343.44 68.05l.81 4.14h.02a7.98 7.98 0 013.2-.42c2.11.24 2.59 1.67 1.07 3.2a8.52 8.52 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip12)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1428.02 108.2a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1423.1 142.68a20.9 20.9 0 01-29.55-29.55l-4.93-4.92a27.86 27.86 0 0039.4 39.4l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1418.17 137.76a13.93 13.93 0 01-19.7-19.7l-4.92-4.93a20.9 20.9 0 0029.55 29.55l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1423.1 113.13a20.9 20.9 0 00-29.55 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.93 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1418.17 118.06a13.93 13.93 0 00-19.7 0l4.93 4.92a6.97 6.97 0 019.85 9.85l4.92 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1413.25 132.83a6.97 6.97 0 01-9.85-9.85l-4.93-4.92a13.93 13.93 0 1019.7 19.7l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1403.4 122.98a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1413.25 122.98a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip13)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1498.13 185.9l-25.27-25.27 32.76 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1472.86 160.63l23.21 32.94 8.95-8.94-32.16-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1496.36 198.9l-5.02-7.97 5.02-6.82-23.43-23.41-.07-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1472.86 160.63l-39.3 39.3 30.88 30.89 8.42-70.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1479.79 206.3l-6.26-6.26-.93.94 6.26 6.26.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1463.04 201.63l-10.93-10.94-.93.94 10.93 10.93.93-.93zm-3.74 3.74l-10.93-10.93-.94.94 10.93 10.93.94-.94zm1.87-1.87l-10.93-10.93-.93.93 10.93 10.93.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1468.55 196.9c1.97.35 4.02.11 5.88-.71l-5.17-5.18-.71 5.89zm4.39-12.5l6.64 6.64a10.12 10.12 0 00-8.6-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1479.58 191.04l-6.64-6.65-3.27 3.27-.41 3.35 5.17 5.18 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1463.17 179.78a10.13 10.13 0 005.38 17.12l.71-5.89-1.47-1.47 1.88-1.88 1.31-10.82a10.1 10.1 0 00-7.81 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1467.79 189.54l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1496.36 198.9v-14.8l-7.39 7.4 7.39 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1456.04 210.74l9.65 9.66 1.16-9.66h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1475.36 210.74h-8.51l-1.16 9.66h.01l9.66-9.66z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip14)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1524.06 233.8l-14.78 4.92 14.78 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1553.61 280.58l1.23-1.23-11.08-11.08h-2.46l12.31 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1537.6 264.58l3.7 3.69h2.46l-4.93-4.92-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1551.15 283.04l1.23-1.23-13.55-13.54h-2.46l14.78 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1535.14 267.04l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1499.43 243.64l24.63 24.63v-14.78l-14.78-14.77 14.78-4.93v-14.77l-24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1524.06 219.02v14.77l3.69-1.23-3.69 11.08 11.08-3.69-6.16 18.47-4.92-4.93v14.78l24.62-24.63-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1556.83 276.42l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1556.83 260.12l-8.15 8.15h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1564.98 268.27l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.31-12.31h-2.47l13.55 13.54-1.23 1.23-14.78-14.77h-12.31l24.62 24.62 24.63-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1524.06 268.27h12.31l-1.23-1.23 1.23-1.23 2.46 2.46h2.47l-3.7-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.62-24.62 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip15)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1603.64 332.32l25.17-25.17-31.36.18-25.17 25.17 31.36-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1628.64 338.52l.17-31.37-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.12l.18-31.36-8.05 8.04-.17 31.37 8.04-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1589.16 315.61l-8.84 8.85 31.36-.18 8.85-8.84-31.37.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1620.35 346.8l-8.84 8.84.17-31.36 8.85-8.84-.18 31.36zm-31.18-31.19l-8.85 8.85.17-31.36 8.84-8.84-.16 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1597.45 307.33l.17-31.37-8.29 8.3-.16 31.35 8.28-8.28zm-24.99-6.2l-.18 31.37 8.04-8.05.17-31.35-8.03 8.03z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1056.94-96.12l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip16)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1219.5 76.22l25.17-25.17-31.37.18-25.17 25.17 31.37-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1244.5 82.42l.17-31.37-8.29 8.29-.17 31.36 8.29-8.28zm-17.14 17.13l.18-31.37-8.04 8.04-.17 31.37 8.03-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1205.02 59.51l-8.85 8.85 31.37-.18 8.84-8.84-31.36.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1236.21 90.7l-8.85 8.84.18-31.36 8.84-8.84-.17 31.36zm-31.19-31.19l-8.84 8.85.16-31.36 8.85-8.84-.17 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1213.3 51.23l.18-31.36-8.29 8.29-.17 31.35 8.28-8.28zm-24.99-6.19l-.18 31.36 8.05-8.04.17-31.36-8.04 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip17)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1312.95 118.72l-29.29-29.29-37.34 37.34 29.29 29.29 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1275.61 156.06l8.05-66.63-37.34 37.34 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1284.73 99.55l29.29 29.3-30.47 30.46-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1279.4 138l-12.61-12.6 12.55-12.54 3.11 3.11 2.28-16.42-37.34 37.34 20.92 20.92 1.44 1.44 7.73-1.33 1.92-19.91zm-9.06 5.37l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.75l-10.75-10.75.87-.87 10.75 10.75-.87.88zm1.75-1.74l-10.76-10.75.87-.88 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1294.24 116.91l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1279.45 138.06l12.54-12.55-12.65-12.65-12.55 12.54 12.61 12.6.05.06zm-.71 14.22a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.48c.24.02.48.03.72.02z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1273.24 147.2a5.33 5.33 0 004.78 5.06l1.02-10.48a5.22 5.22 0 00-5.8 5.42zm1.46-8.19l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-1.75 1.74L1262.2 130l-.87.87 10.75 10.75.87-.87zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-4.42-17.1l12.61 12.6 3.05-22.03-3.11-3.11-12.55 12.54zm9.83 26.98l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip18)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1381.24 204.25L1331.99 155l-24.63 24.62 49.25 49.25 24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1331.99 204.25v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1356.61 228.87v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1356.61 204.25h-24.62v-24.63l24.62 24.63zm-49.25-24.63h24.63v-24.63l-24.63 24.63zm73.88 24.63h-24.63v24.62l24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1350.36 191.93a6.06 6.06 0 00-10.35-4.28l8.57 8.57a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1344.3 198c1.67 0 3.19-.68 4.28-1.78l-8.57-8.57a6.07 6.07 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip19)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1412.53 251.56a8.41 8.41 0 010-11.91l-5.96-5.95a16.85 16.85 0 0023.82 23.8l-5.96-5.94a8.41 8.41 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1412.53 251.56a8.41 8.41 0 0011.9 0l-11.9-11.91a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1430.39 233.7a16.85 16.85 0 00-23.82 0l5.96 5.95a8.41 8.41 0 1111.9 11.9l5.96 5.96a16.85 16.85 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1424.43 239.65a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1406.57 257.5l-.58-.58a16 16 0 00-22.64 0l-9.19 9.2 11.9 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1407.16 280.74a16.01 16.01 0 000-22.65l-.58-.58-20.52 20.51 11.91 11.9 9.19-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip20)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1442.49 309.82l7.58 32.2 20.83-20.83-7.57-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1476.22 348.18l6.05 1.42 20.83-20.83-32.2-7.58 5.32 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1470.9 321.19l5.32 26.99-26.15-6.15 20.83-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1473.23 332.98h-.01a8 8 0 01-3.22.41c-2.11-.24-2.59-1.67-1.06-3.2a8.51 8.51 0 013.36-1.9l-.81-4.14-10.01 10.05 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1455.28 305.99l3.79 16.38 3.11-3.1-2.85-12.32-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1455.79 322.9l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1465.25 341.9l.8.18 3.26-3.25-.81-.2-3.25 3.26zm-1.83-.44l.81.2 3.25-3.26-.8-.2-3.26 3.26zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.44l.81.2 3.25-3.26-.8-.19-3.26 3.26zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.81-.19-3.25 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1484.35 344.11l-9.37-2.2.47 2.38 7.06 1.67 1.84-1.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1470.07 340.75l-1.85 1.84 7.23 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1447 308.71l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43zm2.21-2.21l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1463.58 313.2l-1.84-7.83 4.41-4.4 1.83 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1463.33 288.99l2.81 11.97 31.45 8.14-3.2-11.4-31.06-8.71zm36.36 27.59l-31.71-7.79 2.92 12.4 32.2 7.58-3.41-12.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1497.59 309.1l-31.44-8.13 1.84 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1458.39 302.88l-3.11 3.1 4.05.97-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1471.49 324.15l.81 4.14h.02a7.96 7.96 0 013.2-.42c2.11.24 2.59 1.67 1.07 3.2a8.67 8.67 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip21)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1556.07 364.3a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1551.15 398.78a20.9 20.9 0 01-29.55-29.55l-4.93-4.92a27.86 27.86 0 1039.4 39.4l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1546.22 393.86a13.93 13.93 0 01-19.7-19.7l-4.92-4.93a20.9 20.9 0 0029.55 29.55l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1551.15 369.23a20.9 20.9 0 00-29.55 0l4.92 4.92a13.93 13.93 0 0119.7 19.7l4.93 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1546.22 374.16a13.93 13.93 0 00-19.7 0l4.93 4.92a6.97 6.97 0 019.85 9.85l4.92 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1541.3 388.93a6.97 6.97 0 01-9.85-9.85l-4.93-4.93a13.93 13.93 0 0019.7 19.7l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1531.45 379.08a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1541.3 379.08a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M992.91-32.1l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip22)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1058.34 53.72l7.58 32.2 20.84-20.83-7.58-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1092.07 92.08l6.05 1.42 20.84-20.83-32.2-7.58 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1086.76 65.09l5.31 26.99-26.15-6.15 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1089.08 76.88a8.02 8.02 0 01-3.22.41c-2.12-.24-2.59-1.67-1.07-3.19a8.55 8.55 0 013.37-1.91l-.82-4.14-10.01 10.05 12.56 2.92-.81-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1071.13 49.9l3.79 16.38 3.12-3.12-2.85-12.31-4.06-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1071.65 66.8l-3.55 14.3-2.05-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1081.1 85.8l.81.18 3.25-3.25-.8-.2-3.26 3.26zm-1.82-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.8-.19-3.26 3.26zm-1.82-.44l.8.2 3.25-3.26-.8-.19-3.25 3.26zm-1.83-.42l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.83-.43l.8.18 3.26-3.25-.8-.19-3.26 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1100.21 88.01l-9.37-2.2.47 2.39 7.05 1.66 1.85-1.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1085.92 84.65l-1.84 1.84 7.22 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1062.85 52.62l-1.17 1.17 3.63 15.42 1.18-1.17-3.64-15.42zm2.22-2.22l-1.18 1.18 3.63 15.42 1.18-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1079.43 57.1l-1.84-7.83 4.41-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1079.18 32.89l2.82 11.97 31.44 8.14-3.2-11.4-31.06-8.71zm36.36 27.6l-31.7-7.8 2.91 12.4 32.21 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1113.44 53L1082 44.87l1.84 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1074.24 46.78l-3.11 3.1 4.06.97-.95-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1087.34 68.05l.82 4.14h.01a7.98 7.98 0 013.2-.41c2.12.23 2.59 1.66 1.07 3.19a8.52 8.52 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip23)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1171.92 108.2a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1167 142.68a20.9 20.9 0 01-29.55-29.55l-4.93-4.92a27.86 27.86 0 0039.4 39.4l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1162.07 137.76a13.93 13.93 0 01-19.7-19.7l-4.92-4.93a20.9 20.9 0 0029.55 29.55l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1167 113.13a20.9 20.9 0 00-29.55 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.93 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1162.07 118.06a13.93 13.93 0 00-19.7 0l4.93 4.92a6.97 6.97 0 019.85 9.85l4.92 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1157.15 132.83a6.97 6.97 0 01-9.85-9.85l-4.93-4.92a13.93 13.93 0 1019.7 19.7l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1147.3 122.98a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1157.15 122.98a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip24)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1242.03 185.9l-25.26-25.27 32.75 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1216.77 160.63l23.2 32.94 8.95-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1240.26 198.9l-5.02-7.97 5.02-6.82-23.43-23.41-.06-.06-39.3 39.3 30.87 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1216.77 160.63l-39.3 39.3 30.87 30.89 8.43-70.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1223.7 206.3l-6.27-6.26-.93.94 6.26 6.26.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1206.95 201.63l-10.93-10.94-.94.94 10.93 10.93.94-.93zm-3.75 3.74l-10.93-10.93-.93.94 10.93 10.93.93-.94zm1.87-1.87l-10.93-10.93-.93.93 10.93 10.93.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1212.45 196.9c1.97.35 4.03.11 5.89-.71l-5.18-5.18-.71 5.89zm4.39-12.5l6.65 6.64a10.13 10.13 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1223.49 191.04l-6.65-6.65-3.27 3.27-.41 3.35 5.18 5.18 7.73 7.74 5.16-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1207.08 179.78a10.11 10.11 0 005.37 17.12l.71-5.89-1.47-1.47 1.88-1.88 1.31-10.82c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1211.69 189.54l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1240.26 198.9v-14.8l-7.39 7.4 7.39 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1199.94 210.74l9.66 9.65 1.15-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1219.26 210.74h-8.51l-1.16 9.65h.01l9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip25)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1267.96 233.8l-14.77 4.92 14.77 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1297.51 280.58l1.23-1.23-11.08-11.08h-2.46l12.31 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1281.51 264.58l3.69 3.69h2.46l-4.92-4.92-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1295.05 283.04l1.23-1.23-13.54-13.54h-2.47l14.78 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1279.04 267.04l1.23 1.23h2.47l-2.47-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1243.34 243.64l24.62 24.63v-14.78l-14.77-14.77 14.77-4.93v-14.77l-24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1267.96 219.02v14.77l3.69-1.23-3.69 11.08 11.08-3.69-6.15 18.47-4.93-4.93v14.78l24.63-24.63-24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1300.73 276.42l8.15-8.15h-16.29l8.14 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1300.73 260.12l-8.14 8.15h16.29l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1308.88 268.27l-8.15 8.15-8.14-8.15h-4.93l11.08 11.08-1.23 1.23-12.31-12.31h-2.46l13.54 13.54-1.23 1.23-14.78-14.77h-12.31l24.63 24.62 24.62-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1267.96 268.27h12.31l-1.23-1.23 1.23-1.23 2.47 2.46h2.46l-3.7-3.7 1.24-1.23 4.92 4.93h4.93l8.14-8.15 8.15 8.15h8.33l-24.62-24.62-24.63 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip26)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1347.55 332.32l25.17-25.17-31.37.18-25.17 25.17 31.37-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1372.54 338.52l.18-31.37-8.29 8.29-.18 31.36 8.29-8.28zm-17.13 17.12l.18-31.36-8.04 8.04-.17 31.37 8.03-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1333.07 315.61l-8.85 8.85 31.37-.18 8.84-8.84-31.36.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1364.25 346.8l-8.84 8.84.18-31.36 8.84-8.84-.18 31.36zm-31.18-31.19l-8.85 8.85.17-31.36 8.85-8.84-.17 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1341.35 307.33l.18-31.37-8.29 8.3-.17 31.35 8.28-8.28zm-24.99-6.2l-.18 31.37 8.05-8.05.16-31.35-8.03 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip27)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1441 374.82l-29.29-29.3-37.34 37.34 29.29 29.3 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1403.66 412.15l8.05-66.62-37.34 37.33 29.29 29.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1412.78 355.65l29.29 29.3-30.47 30.45-6.93-6.93-6.87 6.88-1.44-1.44-20.92-20.92 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1407.45 394.1l-12.61-12.6 12.55-12.55 3.11 3.12 2.28-16.42-37.34 37.34 20.92 20.92 1.44 1.44 7.73-1.33 1.92-19.91zm-9.06 5.36l-10.76-10.75.87-.87 10.76 10.75-.87.87zm1.74-1.74l-10.76-10.76.88-.87 10.75 10.76-.87.87zm1.74-1.74l-10.75-10.76.87-.87 10.76 10.76-.88.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1422.29 373l.11 25.46-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1407.49 394.15l12.55-12.54-12.65-12.65-12.55 12.54 12.61 12.6.04.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.48c.24.02.47.03.72.02z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1401.28 403.3a5.34 5.34 0 004.79 5.05l1.02-10.47a5.23 5.23 0 00-5.81 5.43zm1.47-8.19l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.75 1.74l-10.75-10.76-.88.88 10.76 10.75.87-.87zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.75.87-.87zm-4.42-17.1l12.61 12.6 3.05-22.03-3.11-3.11-12.55 12.54zm9.83 26.98l-6.87 6.87 13.8.05-6.93-6.92z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip28)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1509.28 460.34l-49.25-49.25-24.62 24.63 49.25 49.25 24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1460.03 460.34v-24.62h-24.62l24.62 24.62zm24.63 24.63v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1484.66 460.34h-24.63v-24.62l24.63 24.62zm-49.25-24.62h24.62v-24.63l-24.62 24.63zm73.87 24.62h-24.62v24.63l24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1478.41 448.03a6.07 6.07 0 00-10.35-4.29l8.57 8.58a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1472.35 454.1c1.67 0 3.19-.69 4.28-1.78l-8.57-8.58a6.07 6.07 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1953.28 31.93l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip29)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1972.48 41.97l-14.77 4.93 14.77 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M2002.03 88.76l1.23-1.23-11.08-11.08h-2.46l12.31 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1986.03 72.75l3.69 3.7h2.46l-4.92-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1999.57 91.22l1.23-1.23-13.54-13.54h-2.47l14.78 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1983.56 75.22l1.23 1.23h2.47l-2.47-2.47-1.23 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1947.86 51.82l24.62 24.63V61.67l-14.77-14.77 14.77-4.93V27.2l-24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1972.48 27.2v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.15 18.48-4.93-4.93v14.78l24.63-24.63-24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M2005.25 84.6l8.15-8.15h-16.29l8.14 8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M2005.25 68.3l-8.14 8.15h16.29l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M2013.4 76.45l-8.15 8.14-8.14-8.14h-4.93l11.08 11.08-1.23 1.23-12.31-12.31h-2.46l13.54 13.54-1.23 1.23-14.78-14.77h-12.31l24.63 24.62 24.62-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1972.48 76.45h12.31l-1.23-1.24 1.23-1.23 2.47 2.47h2.46l-3.7-3.7 1.24-1.23 4.92 4.93h4.93l8.14-8.15 8.15 8.15h8.33l-24.62-24.63-24.63 24.63z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1889.26 95.95l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip30)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1957.71 140.47l-49.25-49.25-24.63 24.63 49.25 49.25 24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1908.46 140.47v-24.62h-24.63l24.63 24.62zm24.62 24.63v-24.63h-24.62l24.62 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1933.08 140.47h-24.62v-24.62l24.62 24.62zm-49.25-24.62h24.63V91.22l-24.63 24.63zm73.88 24.62h-24.63v24.63l24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1926.83 128.16a6.06 6.06 0 00-10.35-4.29l8.58 8.58a6.07 6.07 0 001.77-4.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1920.77 134.22c1.67 0 3.19-.68 4.29-1.77l-8.58-8.58a6.06 6.06 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip31)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1989 187.78a8.41 8.41 0 010-11.9l-5.96-5.96a16.85 16.85 0 0023.82 23.82l-5.96-5.96a8.41 8.41 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1989 187.78a8.41 8.41 0 0011.9 0l-11.9-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M2006.86 169.92a16.83 16.83 0 00-23.81 0l5.95 5.96a8.41 8.41 0 1111.9 11.9l5.96 5.95a16.85 16.85 0 000-23.8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M2000.9 175.88a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1983.04 193.73l-.58-.58a16 16 0 00-22.64 0l-9.19 9.2 11.9 11.9 20.51-20.52z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1983.63 216.96a16.02 16.02 0 000-22.64l-.58-.58-20.52 20.5 11.91 11.91 9.19-9.19z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1825.23 159.98l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip32)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1876.44 172.48a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1871.52 206.96a20.9 20.9 0 01-29.55-29.55l-4.93-4.93a27.86 27.86 0 0039.4 39.4l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1866.59 202.03a13.93 13.93 0 01-19.7-19.7l-4.92-4.92a20.9 20.9 0 0029.55 29.55l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1871.52 177.4a20.9 20.9 0 00-29.55 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.93 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1866.59 182.33a13.93 13.93 0 00-19.7 0l4.93 4.93a6.97 6.97 0 019.85 9.85l4.92 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1861.67 197.1a6.97 6.97 0 01-9.85-9.84l-4.93-4.93a13.93 13.93 0 0019.7 19.7l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1851.82 187.26a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1861.67 187.26a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip33)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1946.55 250.17l-25.26-25.26 32.75 17.78-7.49 7.48z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1921.29 224.9l23.2 32.95 8.95-8.95-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1944.78 263.17l-5.02-7.97 5.02-6.81-23.43-23.42-.06-.06-39.31 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1921.29 224.9l-39.3 39.3 30.87 30.89 8.43-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1928.22 270.58l-6.27-6.26-.93.93 6.26 6.26.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1911.47 265.9l-10.93-10.93-.94.94 10.93 10.92.94-.93zm-3.75 3.74l-10.93-10.93-.93.94 10.93 10.93.93-.94zm1.87-1.87l-10.93-10.93-.93.94 10.93 10.93.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1916.97 261.17c1.97.35 4.03.12 5.89-.7l-5.18-5.18-.71 5.88zm4.39-12.51l6.65 6.65a10.13 10.13 0 00-8.61-14.2l-1.31 10.83 3.27-3.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1928.01 255.31l-6.65-6.65-3.27 3.28-.41 3.35 5.18 5.17 7.73 7.74 5.16-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1911.6 244.05a10.11 10.11 0 005.37 17.12l.71-5.88-1.47-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1916.21 253.82l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1944.78 263.17V248.4l-7.39 7.39 7.39 7.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1904.46 275.02l9.66 9.65 1.15-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1923.78 275.02h-8.51l-1.16 9.65h.01l9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip34)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1972.48 298.07l-14.77 4.92 14.77 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M2002.03 344.86l1.23-1.24-11.08-11.08h-2.46l12.31 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1986.03 328.85l3.69 3.7h2.46l-4.92-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1999.57 347.32l1.23-1.23-13.54-13.55h-2.47l14.78 14.78z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1983.56 331.31l1.23 1.23h2.47l-2.47-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1947.86 307.92l24.62 24.62v-14.77l-14.77-14.78 14.77-4.92v-14.78l-24.62 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1972.48 283.3v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.15 18.47-4.93-4.92v14.77l24.63-24.62-24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M2005.25 340.7l8.15-8.16h-16.29l8.14 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M2005.25 324.4l-8.14 8.14h16.29l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M2013.4 332.54l-8.15 8.15-8.14-8.15h-4.93l11.08 11.08-1.23 1.24-12.31-12.32h-2.46l13.54 13.55-1.23 1.23-14.78-14.78h-12.31l24.63 24.63 24.62-24.63h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1972.48 332.54h12.31l-1.23-1.23 1.23-1.23 2.47 2.46h2.46l-3.7-3.69 1.24-1.23 4.92 4.92h4.93l8.14-8.15 8.15 8.15h8.33l-24.62-24.62-24.63 24.62z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1761.21 224l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip35)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1795.97 268.55l25.17-25.17-31.37.17-25.16 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1820.97 274.75l.17-31.37-8.29 8.28-.17 31.37 8.29-8.28zm-17.14 17.12l.18-31.37-8.04 8.05-.17 31.37 8.03-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1781.49 251.84l-8.84 8.84 31.36-.17 8.84-8.85-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1812.68 283.03l-8.85 8.84.18-31.36 8.84-8.85-.17 31.37zm-31.19-31.19l-8.84 8.84.16-31.36 8.85-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1789.77 243.55l.18-31.36-8.29 8.3-.17 31.35 8.28-8.29zm-24.99-6.19l-.17 31.36 8.04-8.04.17-31.36-8.04 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip36)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1889.42 311.04l-29.29-29.28-37.33 37.33 29.28 29.29 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1852.08 348.38l8.05-66.62-37.33 37.33 29.28 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1861.2 291.88l29.29 29.29-30.47 30.46-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.34-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1855.87 330.33l-12.61-12.6 12.55-12.55 3.11 3.12 2.28-16.42-37.34 37.33 20.92 20.92 1.44 1.44 7.73-1.33 1.92-19.9zm-9.06 5.36l-10.76-10.76.88-.87 10.75 10.76-.87.87zm1.74-1.74l-10.75-10.76.87-.87 10.76 10.76-.88.87zm1.75-1.74l-10.76-10.76.87-.87 10.76 10.75-.87.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1870.71 309.24l.11 25.45-12.78-12.78 12.67-12.68z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1855.92 330.38l12.54-12.55-12.65-12.65-12.55 12.55 12.61 12.6.05.05zm-.71 14.22a5.22 5.22 0 005.03-5.45 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.24.02.48.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1849.71 339.53a5.33 5.33 0 004.78 5.05l1.02-10.47a5.22 5.22 0 00-5.8 5.42zm1.46-8.19l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.87 10.75 10.76.88-.87zm-1.75 1.74l-10.75-10.76-.88.88 10.76 10.75.87-.87zm-4.42-17.09l12.61 12.6 3.05-22.03-3.11-3.12-12.55 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip37)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1957.71 396.57l-49.25-49.25-24.63 24.62 49.25 49.25 24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1908.46 396.57v-24.63h-24.63l24.63 24.63zm24.62 24.63v-24.63h-24.62l24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1933.08 396.57h-24.62v-24.63l24.62 24.63zm-49.25-24.63h24.63v-24.62l-24.63 24.62zm73.88 24.63h-24.63v24.62l24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1926.83 384.25a6.06 6.06 0 00-10.35-4.28l8.58 8.57a6.07 6.07 0 001.77-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1920.77 390.32c1.67 0 3.19-.68 4.29-1.78l-8.58-8.57a6.06 6.06 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip38)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1989 443.88a8.42 8.42 0 010-11.9l-5.96-5.96a16.85 16.85 0 0023.82 23.81l-5.96-5.95a8.41 8.41 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1989 443.88a8.41 8.41 0 0011.9 0l-11.9-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M2006.86 426.02a16.84 16.84 0 00-23.81 0l5.95 5.95a8.41 8.41 0 1111.9 11.9l5.96 5.96a16.85 16.85 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M2000.9 431.97a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1983.04 449.83l-.58-.58a16 16 0 00-22.64 0l-9.19 9.19 11.9 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1983.63 473.06a16.01 16.01 0 000-22.64l-.58-.59-20.52 20.52 11.91 11.9 9.19-9.2z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1697.18 288.03l511.64 511.63"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip39)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1698.84 310.07l7.57 32.2 20.84-20.83-7.58-32.2-20.83 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1732.57 348.43l6.05 1.42 20.83-20.83-32.2-7.58 5.32 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1727.25 321.44l5.32 26.99-26.15-6.15 20.83-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1729.57 333.23a8 8 0 01-3.22.41c-2.11-.24-2.59-1.67-1.06-3.19a8.51 8.51 0 013.36-1.91l-.81-4.14-10.01 10.05 12.56 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1711.63 306.24l3.79 16.38 3.11-3.1-2.85-12.32-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1712.14 323.15l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1721.6 342.14l.8.19 3.26-3.25-.81-.2-3.25 3.26zm-1.83-.43l.81.2 3.25-3.26-.8-.19-3.26 3.25zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.25-3.26-.8-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1740.7 344.37l-9.37-2.21.47 2.39 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1726.42 341l-1.85 1.84 7.23 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1703.35 308.97l-1.17 1.17 3.63 15.42 1.17-1.17-3.63-15.42zm2.21-2.22l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1719.93 313.44l-1.84-7.82 4.4-4.4 1.84 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1719.67 289.24l2.82 11.97 31.45 8.14-3.2-11.4-31.07-8.71zm36.36 27.59l-31.7-7.79 2.92 12.4 32.2 7.58-3.42-12.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1753.94 309.35l-31.45-8.13 1.84 7.82 31.71 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1714.74 303.13l-3.11 3.1 4.05.97-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1727.84 324.4l.81 4.14h.01a8 8 0 013.21-.42c2.11.24 2.59 1.67 1.07 3.2a8.67 8.67 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip40)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1812.42 364.56a27.86 27.86 0 00-39.4 0l4.92 4.92a20.9 20.9 0 0129.55 29.55l4.93 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1807.49 399.03a20.9 20.9 0 11-29.54-29.55l-4.93-4.92a27.86 27.86 0 1039.4 39.4l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1802.57 394.1a13.93 13.93 0 01-19.7-19.7l-4.92-4.92a20.9 20.9 0 1029.54 29.55l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1807.49 369.48a20.88 20.88 0 00-29.54 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1802.57 374.4a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 119.85 9.85l4.93 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1797.64 389.18a6.97 6.97 0 01-9.85-9.85l-4.92-4.92a13.93 13.93 0 0019.7 19.7l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1787.8 379.33a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1797.65 379.33a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip41)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1882.53 442.25l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1857.26 416.98l23.21 32.94 8.94-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1880.76 455.25l-5.02-7.98 5.02-6.81-23.44-23.42-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1857.26 416.98l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1864.19 462.65l-6.26-6.26-.94.94 6.27 6.26.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1847.44 457.97l-10.93-10.93-.93.94 10.93 10.93.93-.94zm-3.74 3.75l-10.93-10.93-.94.93 10.93 10.93.94-.93zm1.87-1.88l-10.93-10.93-.94.94 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1852.94 453.25c1.98.35 4.03.11 5.89-.71l-5.17-5.18-.72 5.88zm4.39-12.51l6.65 6.65a10.12 10.12 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1863.98 447.38l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.18 7.74 7.73 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1847.57 436.13a10.13 10.13 0 005.38 17.12l.71-5.89-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1852.18 445.89l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1880.76 455.24v-14.78l-7.4 7.4 7.4 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1840.44 467.09l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1859.75 467.09h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip42)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1908.46 490.14l-14.78 4.93 14.78 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1938.01 536.93l1.23-1.23-11.08-11.08h-2.47l12.32 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1922 520.92l3.69 3.7h2.47l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1935.54 539.4l1.23-1.24-13.54-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1919.54 523.39l1.23 1.23h2.46l-2.46-2.47-1.23 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1883.83 500l24.63 24.62v-14.78l-14.78-14.77 14.78-4.93v-14.77l-24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1908.46 475.37v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.16 18.48-4.92-4.93v14.78l24.62-24.63-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1941.23 532.76l8.15-8.14h-16.3l8.15 8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1941.23 516.47l-8.15 8.14h16.3l-8.15-8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1949.38 524.62l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.32-12.31h-2.46l13.55 13.54-1.24 1.23-14.77-14.77h-12.31l24.62 24.62 24.63-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1908.46 524.62h12.31l-1.23-1.23 1.23-1.24 2.46 2.47h2.46l-3.69-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.63-24.62 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip43)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1988.04 588.67l25.17-25.17-31.36.17-25.17 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M2013.04 594.87l.17-31.37-8.28 8.28-.18 31.37 8.29-8.28zM1995.91 612l.17-31.37-8.04 8.04-.17 31.37 8.04-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1973.56 571.96l-8.84 8.84 31.36-.17 8.85-8.84-31.37.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M2004.75 603.15l-8.84 8.84.17-31.36 8.84-8.84-.17 31.36zm-31.19-31.19l-8.84 8.84.17-31.35 8.84-8.85-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1981.85 563.68l.17-31.37-8.29 8.3-.17 31.35 8.29-8.28zm-25-6.2l-.17 31.37 8.04-8.05.17-31.35-8.04 8.03z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1633.16 352.05l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip44)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1697.35 375.07l-29.29-29.29-37.34 37.34 29.29 29.28 37.34-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1660.01 412.4l8.05-66.62-37.34 37.34 29.29 29.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1669.12 355.9l29.29 29.3-30.46 30.45-6.93-6.92-6.87 6.87-1.44-1.44-20.92-20.92 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1663.79 394.36l-12.6-12.6 12.54-12.56 3.12 3.12 2.27-16.42-37.33 37.34 20.92 20.92 1.44 1.44 7.72-1.33 1.92-19.91zm-9.05 5.35l-10.76-10.75.87-.87 10.76 10.75-.87.88zm1.74-1.74l-10.76-10.75.87-.88 10.76 10.76-.87.87zm1.74-1.74l-10.75-10.76.87-.87 10.75 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1678.64 373.26l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1663.84 394.4l12.55-12.54-12.66-12.65-12.54 12.54 12.6 12.6.05.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.48c.23.02.47.03.72.02z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1657.63 403.55a5.33 5.33 0 004.79 5.05l1.02-10.47a5.22 5.22 0 00-5.81 5.43zm1.46-8.19l-10.75-10.76-.87.88 10.75 10.75.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.76.87-.88zm-4.42-17.09l12.6 12.6 3.06-22.03-3.12-3.11-12.54 12.54zm9.83 26.98l-6.87 6.87 13.8.05-6.93-6.92z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip45)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1765.63 460.6l-49.25-49.26-24.62 24.63 49.25 49.25 24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1716.38 460.6v-24.63h-24.62l24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1741.01 485.22v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1741.01 460.6h-24.63v-24.63l24.63 24.62zm-49.25-24.63h24.62v-24.63l-24.62 24.63zm73.87 24.63h-24.62v24.62l24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1734.76 448.28a6.07 6.07 0 00-10.35-4.29l8.57 8.58a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1728.69 454.34c1.68 0 3.19-.68 4.29-1.77l-8.57-8.58a6.07 6.07 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip46)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1796.92 507.9a8.43 8.43 0 010-11.9l-5.95-5.95a16.85 16.85 0 0023.81 23.8l-5.95-5.95a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1796.92 507.9a8.42 8.42 0 0011.91 0l-11.91-11.9a8.43 8.43 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1814.78 490.04a16.83 16.83 0 00-23.81 0l5.95 5.96a8.42 8.42 0 0111.91 11.9l5.95 5.96a16.83 16.83 0 000-23.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1808.83 496a8.42 8.42 0 00-11.91 0l11.91 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1790.97 513.86l-.58-.59a16.02 16.02 0 00-22.65 0l-9.19 9.2 11.91 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1791.56 537.08a16.02 16.02 0 000-22.64l-.59-.58-20.51 20.5 11.9 11.91 9.2-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip47)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1826.89 566.17l7.57 32.2 20.84-20.83-7.58-32.2-20.83 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1860.61 604.53l6.06 1.42 20.83-20.84-32.2-7.57 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1855.3 577.54l5.31 26.99-26.15-6.16 20.84-20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1857.62 589.33a8 8 0 01-3.22.41c-2.11-.24-2.59-1.67-1.07-3.2a8.61 8.61 0 013.37-1.9l-.81-4.14-10.01 10.05 12.56 2.91-.82-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1839.68 562.34l3.79 16.38 3.11-3.11-2.85-12.32-4.05-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1840.19 579.25l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1849.65 598.24l.8.19 3.25-3.26-.8-.18-3.25 3.25zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25zm-1.83-.43l.81.2 3.25-3.26-.8-.2-3.26 3.26zm-1.82-.43l.8.2 3.26-3.26-.81-.2-3.25 3.26zm-1.83-.42l.81.18 3.25-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.18 3.25-3.25-.8-.2-3.25 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1868.75 600.46l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1854.46 597.1l-1.84 1.84 7.23 1.7-.47-2.38-4.92-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1831.4 565.06l-1.18 1.18 3.64 15.42 1.17-1.17-3.63-15.43zm2.21-2.21l-1.17 1.18 3.63 15.42 1.17-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1847.98 569.54l-1.84-7.82 4.4-4.4 1.84 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1847.72 545.34l2.82 11.97 31.44 8.13-3.19-11.4-31.07-8.7zm36.36 27.59l-31.7-7.8 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1881.99 565.45l-31.45-8.14 1.84 7.83 31.71 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1842.79 559.23l-3.11 3.1 4.05.96-.94-4.06z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1855.89 580.5l.81 4.13h.01a8 8 0 013.21-.4c2.11.23 2.59 1.66 1.06 3.18a8.51 8.51 0 01-3.36 1.92l.82 4.13 10.05-10.05-12.6-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip48)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1940.47 620.65a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1935.54 655.13a20.9 20.9 0 01-29.55-29.55l-4.92-4.93a27.86 27.86 0 0039.4 39.4l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1930.62 650.2a13.93 13.93 0 01-19.7-19.7l-4.93-4.92a20.9 20.9 0 0029.55 29.55l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1935.54 625.58a20.9 20.9 0 00-29.55 0l4.93 4.92a13.93 13.93 0 0119.7 19.7l4.92 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1930.62 630.5a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 019.85 9.85l4.93 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1925.69 645.28a6.97 6.97 0 01-9.85-9.85l-4.92-4.93a13.93 13.93 0 0019.7 19.7l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1915.84 635.43a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1925.69 635.43a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip49)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M2010.58 698.35l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1985.31 673.08l23.21 32.94 8.94-8.95-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M2008.81 711.34l-5.02-7.97 5.02-6.81-23.44-23.42-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1985.31 673.08l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1992.24 718.75l-6.26-6.26-.94.93 6.27 6.27.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1975.49 714.07l-10.93-10.93-.94.94 10.93 10.93.94-.94zm-3.74 3.75l-10.93-10.94-.94.94 10.93 10.93.94-.93zm1.87-1.88l-10.93-10.93-.94.94 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1980.99 709.34c1.98.35 4.03.12 5.89-.7l-5.17-5.18-.72 5.88zm4.39-12.5l6.65 6.64a10.12 10.12 0 00-8.61-14.2l-1.31 10.83 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1992.03 703.48l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1975.62 692.22a10.13 10.13 0 005.37 17.12l.72-5.88-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1980.23 701.99l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M2008.81 711.34v-14.78l-7.4 7.39 7.4 7.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1968.49 723.19l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1987.8 723.19h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1569.13 416.07l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip50)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1626.43 442.25l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1601.16 416.98l23.21 32.94 8.95-8.94-32.16-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1624.66 455.25l-5.02-7.97 5.02-6.82-23.43-23.41-.07-.07-39.3 39.3 30.88 30.88 31.92-31.91z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1601.16 416.98l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1608.09 462.65l-6.26-6.26-.93.94 6.26 6.26.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1591.34 457.97l-10.93-10.93-.93.94 10.93 10.93.93-.94zm-3.74 3.75l-10.93-10.93-.94.93 10.93 10.93.94-.93zm1.87-1.87l-10.93-10.94-.93.94 10.93 10.93.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1596.85 453.25c1.97.35 4.02.11 5.88-.71l-5.17-5.18-.71 5.89zm4.39-12.51l6.64 6.65a10.12 10.12 0 00-8.6-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1607.88 447.39l-6.64-6.65-3.27 3.27-.41 3.35 5.17 5.18 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1591.47 436.13a10.13 10.13 0 005.38 17.12l.71-5.89-1.47-1.47 1.88-1.88 1.31-10.83a10.1 10.1 0 00-7.81 2.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1596.09 445.89l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1624.66 455.25v-14.79l-7.39 7.4 7.39 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1584.34 467.09l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1603.65 467.09h-8.5l-1.16 9.65h.01l9.65-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip51)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1652.36 490.14l-14.78 4.93 14.78 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1681.91 536.93l1.23-1.23-11.08-11.08h-2.46l12.31 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1665.9 520.92l3.7 3.7h2.46l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1679.45 539.4l1.23-1.24-13.55-13.54h-2.46l14.78 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1663.44 523.39l1.23 1.23h2.46l-2.46-2.47-1.23 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1627.73 500l24.63 24.62v-14.78l-14.78-14.77 14.78-4.93v-14.77l-24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1652.36 475.37v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.16 18.48-4.92-4.93v14.78l24.62-24.63-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1685.13 532.76l8.15-8.14h-16.3l8.15 8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1685.13 516.47l-8.15 8.14h16.3l-8.15-8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1693.28 524.62l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.31-12.31h-2.47l13.55 13.54-1.23 1.23-14.78-14.77h-12.31l24.62 24.62 24.63-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1652.36 524.62h12.31l-1.23-1.23 1.23-1.24 2.46 2.47h2.47l-3.7-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.63-24.62 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip52)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1731.94 588.67l25.17-25.17-31.36.17-25.17 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1756.94 594.87l.17-31.37-8.28 8.28-.18 31.37 8.29-8.28zM1739.81 612l.18-31.37-8.05 8.04-.17 31.37 8.04-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1717.46 571.96l-8.84 8.84 31.36-.17 8.85-8.84-31.37.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1748.65 603.15l-8.84 8.84.17-31.36 8.85-8.84-.18 31.36zm-31.19-31.19l-8.84 8.84.17-31.35 8.84-8.85-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1725.75 563.68l.17-31.37-8.29 8.3-.16 31.35 8.28-8.28zm-24.99-6.2l-.18 31.37 8.04-8.05.17-31.35-8.03 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip53)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1825.39 631.17l-29.28-29.3-37.34 37.34 29.29 29.3 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1788.06 668.5l8.05-66.62-37.34 37.33 29.29 29.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1797.17 612l29.29 29.29-30.46 30.46-6.93-6.93-6.87 6.87-1.44-1.43-20.92-20.92 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1791.84 650.45l-12.6-12.6 12.54-12.55 3.12 3.12 2.27-16.42-37.33 37.34 20.92 20.92 1.44 1.43 7.72-1.32 1.92-19.92zm-9.05 5.36l-10.76-10.75.87-.88 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.88-.87 10.75 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1806.69 629.36l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1791.89 650.5l12.55-12.54-12.66-12.66-12.54 12.55 12.6 12.6.05.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.23.03.47.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1785.68 659.65a5.33 5.33 0 004.79 5.05l1.02-10.47a5.22 5.22 0 00-5.81 5.43zm1.46-8.19l-10.75-10.76-.87.87 10.75 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.12-3.12-12.54 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip54)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1893.68 716.69l-49.25-49.25-24.62 24.63 49.25 49.25 24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1844.43 716.69v-24.63h-24.62l24.62 24.63zm24.63 24.63v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1869.06 716.69h-24.63v-24.63l24.63 24.63zm-49.25-24.62h24.62v-24.63l-24.62 24.63zm73.87 24.62h-24.62v24.63l24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1862.81 704.38a6.07 6.07 0 00-10.35-4.29l8.57 8.57a6.03 6.03 0 001.78-4.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1856.74 710.44c1.68 0 3.19-.68 4.29-1.78l-8.57-8.57a6.07 6.07 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip55)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1924.97 764a8.43 8.43 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.81l-5.95-5.95a8.43 8.43 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1924.97 764a8.42 8.42 0 0011.91 0l-11.91-11.9a8.43 8.43 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1942.83 746.14a16.84 16.84 0 00-23.81 0l5.95 5.95a8.43 8.43 0 0111.91 11.91l5.95 5.95a16.83 16.83 0 000-23.8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1936.88 752.1a8.42 8.42 0 00-11.91 0l11.91 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1919.02 769.95l-.58-.58a16.02 16.02 0 00-22.65 0l-9.19 9.19 11.91 11.9 20.51-20.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1919.6 793.18a16 16 0 00.01-22.64l-.59-.59-20.51 20.52 11.9 11.9 9.19-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip56)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1954.94 822.27l7.57 32.2 20.84-20.84-7.58-32.2-20.83 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1988.66 860.63l6.05 1.42 20.84-20.84-32.2-7.57 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1983.35 833.63l5.31 27-26.15-6.16 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1985.67 845.42c-1.1.36-2.25.53-3.22.42-2.11-.24-2.59-1.67-1.07-3.2a8.61 8.61 0 013.37-1.9l-.82-4.15-10 10.05 12.56 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1967.73 818.44l3.79 16.38 3.11-3.11-2.85-12.32-4.05-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1968.24 835.35l-3.55 14.29-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1977.69 854.34l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.18-3.26 3.25zm-1.82-.43l.8.19 3.26-3.26-.81-.18-3.25 3.25zm-1.83-.43l.81.19 3.25-3.25-.8-.2-3.26 3.26zm-1.83-.42l.81.18 3.25-3.26-.8-.18-3.26 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1996.8 856.56l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1982.51 853.2l-1.84 1.84 7.23 1.7-.47-2.39-4.92-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1959.45 821.16l-1.18 1.18 3.63 15.42 1.18-1.18-3.63-15.42zm2.21-2.21l-1.18 1.17 3.64 15.43 1.17-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1976.02 825.64l-1.83-7.82 4.4-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1975.77 801.43l2.82 11.98 31.44 8.13-3.19-11.4-31.07-8.7zm36.36 27.6l-31.7-7.8 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M2010.03 821.54l-31.44-8.13 1.84 7.83 31.71 7.8-2.11-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1970.84 815.32l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1983.93 836.6l.82 4.13h.01a8.02 8.02 0 013.21-.41c2.11.24 2.59 1.67 1.06 3.2a8.52 8.52 0 01-3.36 1.9l.82 4.14 10.05-10.06-12.61-2.9z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1505.11 480.1l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip57)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1540.83 507.9a8.41 8.41 0 010-11.9l-5.96-5.95a16.85 16.85 0 0023.82 23.8l-5.96-5.95a8.41 8.41 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1540.83 507.9a8.41 8.41 0 0011.9 0l-11.9-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1558.69 490.05a16.85 16.85 0 00-23.82 0l5.96 5.95a8.41 8.41 0 1111.9 11.9l5.96 5.96a16.85 16.85 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1552.73 496a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1534.87 513.86l-.58-.59a16 16 0 00-22.64 0l-9.19 9.2 11.9 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1535.46 537.09a16.02 16.02 0 000-22.65l-.58-.58-20.52 20.51 11.91 11.9 9.19-9.18z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip58)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1570.79 566.17l7.58 32.2 20.83-20.83-7.58-32.2-20.83 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1604.52 604.53l6.05 1.42 20.83-20.83-32.2-7.58 5.32 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1599.2 577.54l5.32 26.99-26.15-6.16 20.83-20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1601.53 589.33h-.01a8 8 0 01-3.22.41c-2.11-.24-2.59-1.67-1.06-3.2a8.5 8.5 0 013.36-1.9l-.81-4.14-10.01 10.05 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1583.58 562.34l3.79 16.38 3.11-3.1-2.85-12.33-4.05-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1584.09 579.25l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1593.55 598.24l.8.19 3.26-3.26-.81-.18-3.25 3.25zm-1.83-.43l.81.2 3.25-3.26-.8-.2-3.26 3.26zm-1.82-.43l.8.2 3.26-3.26-.81-.2-3.25 3.26zm-1.83-.42l.81.18 3.25-3.25-.8-.19-3.26 3.25zm-1.82-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.81-.19-3.25 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1612.65 600.46l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1598.37 597.1l-1.85 1.84 7.23 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1575.3 565.06l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43zm2.21-2.21l-1.17 1.18 3.63 15.42 1.17-1.17-3.63-15.43z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1591.88 569.54l-1.84-7.82 4.41-4.4 1.83 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1591.63 545.34l2.81 11.97 31.45 8.13-3.2-11.4-31.06-8.7zm36.36 27.59l-31.71-7.8 2.92 12.4 32.2 7.59-3.41-12.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1625.89 565.45l-31.45-8.13 1.85 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1586.69 559.23l-3.11 3.1 4.05.96-.94-4.06z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1599.79 580.5l.81 4.14h.01a8 8 0 013.21-.42c2.11.24 2.59 1.67 1.07 3.2a8.65 8.65 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip59)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1684.37 620.65a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1679.45 655.13a20.9 20.9 0 01-29.55-29.55l-4.93-4.93a27.86 27.86 0 0039.4 39.4l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1674.52 650.2a13.93 13.93 0 01-19.7-19.7l-4.92-4.92a20.9 20.9 0 0029.55 29.55l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1679.45 625.58a20.9 20.9 0 00-29.55 0l4.92 4.92a13.93 13.93 0 0119.7 19.7l4.93 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1674.52 630.5a13.93 13.93 0 00-19.7 0l4.93 4.93a6.97 6.97 0 019.85 9.85l4.92 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1669.6 645.28a6.97 6.97 0 01-9.85-9.85l-4.93-4.92a13.93 13.93 0 0019.7 19.7l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1659.75 635.43a6.96 6.96 0 109.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1669.6 635.43a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip60)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1754.48 698.35l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1729.21 673.08l23.21 32.94 8.94-8.95-32.15-23.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1752.71 711.34l-5.02-7.97 5.02-6.81-23.44-23.42-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1729.21 673.08l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1736.14 718.75l-6.26-6.26-.93.93 6.26 6.27.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1719.39 714.07l-10.93-10.93-.93.94 10.93 10.93.93-.94zm-3.74 3.75l-10.93-10.93-.94.93 10.93 10.93.94-.93zm1.87-1.88l-10.93-10.93-.94.94 10.94 10.93.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1724.9 709.35c1.97.35 4.02.1 5.88-.71l-5.17-5.18-.71 5.88zm4.39-12.51l6.64 6.64a10.12 10.12 0 00-8.61-14.2l-1.31 10.83 3.28-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1735.93 703.48l-6.64-6.64-3.28 3.27-.4 3.35 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1719.52 692.23a10.13 10.13 0 005.38 17.11l.71-5.88-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.17-5.66.8-7.8 2.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1724.13 701.99l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1752.71 711.34v-14.78l-7.39 7.4 7.39 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1712.39 723.19l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1731.7 723.19h-8.5l-1.16 9.65h.01l9.65-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip61)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1780.41 746.24l-14.78 4.92 14.78 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1809.96 793.03l1.23-1.23-11.08-11.08h-2.47l12.32 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1793.95 777.02l3.7 3.7h2.46l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1807.49 795.5l1.24-1.24-13.55-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1791.49 779.48l1.23 1.24h2.46l-2.46-2.47-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1755.78 756.1l24.63 24.62v-14.78l-14.78-14.77 14.78-4.93v-14.77l-24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1780.41 731.47v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.16 18.48-4.92-4.93v14.77l24.62-24.62-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1813.18 788.86l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1813.18 772.57l-8.15 8.14h16.3l-8.15-8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1821.33 780.72l-8.15 8.14-8.15-8.14h-4.92l11.08 11.08-1.23 1.23-12.31-12.31h-2.47l13.55 13.54-1.24 1.23-14.77-14.77h-12.31l24.62 24.62 24.63-24.62h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1780.41 780.72h12.31l-1.23-1.24 1.23-1.23 2.46 2.47h2.47l-3.7-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.14h8.33l-24.63-24.62-24.62 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip62)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1859.99 844.77l25.17-25.17-31.36.17-25.17 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1884.99 850.97l.17-31.37-8.28 8.28-.18 31.37 8.29-8.28zm-17.13 17.13l.17-31.37-8.04 8.04-.17 31.37 8.04-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1845.51 828.06l-8.84 8.84 31.36-.17 8.85-8.85-31.37.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1876.7 859.25l-8.84 8.84.17-31.36 8.85-8.85-.18 31.37zm-31.19-31.19l-8.84 8.84.17-31.35 8.84-8.85-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1853.8 819.77l.17-31.36-8.29 8.3-.17 31.35 8.29-8.28zm-24.99-6.19l-.18 31.36 8.04-8.04.17-31.35-8.03 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip63)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1953.44 887.26l-29.29-29.28-37.33 37.33 29.29 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1916.11 924.6l8.04-66.62-37.33 37.33 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1925.22 868.1l29.29 29.29-30.46 30.46-6.93-6.93-6.87 6.87-1.44-1.43-20.92-20.93 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1919.89 906.55l-12.6-12.6 12.54-12.55 3.12 3.12 2.27-16.42-37.33 37.33 20.92 20.93 1.44 1.43 7.72-1.33 1.92-19.9zm-9.05 5.36l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1934.74 885.46l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1919.94 906.6l12.55-12.54-12.66-12.66-12.54 12.55 12.6 12.6.05.05zm-.71 14.23a5.22 5.22 0 005.04-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.23.03.47.04.71.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1913.73 915.75a5.33 5.33 0 004.79 5.05l1.02-10.47a5.22 5.22 0 00-5.81 5.42zm1.46-8.19l-10.75-10.76-.88.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.12-3.12-12.54 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M352.67-416.24L864.31 95.4"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip64)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M864.78 54.7l-29.3-29.3-37.33 37.34 29.3 29.3 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M827.44 92.03l8.05-66.62-37.34 37.33 29.3 29.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M836.56 35.53l29.28 29.29-30.46 30.46-6.93-6.93-6.87 6.87-1.44-1.43-20.92-20.92 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M831.22 73.98l-12.6-12.6 12.54-12.55 3.12 3.12 2.28-16.42-37.34 37.34 20.92 20.92 1.44 1.43 7.73-1.32 1.91-19.92zm-9.05 5.36L811.4 68.6l.87-.88 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.88-.87 10.75 10.76-.87.87zm1.74-1.74L814.9 65.1l.87-.87 10.75 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M846.07 52.89l.1 25.45-12.77-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M831.27 74.03l12.55-12.54-12.65-12.66-12.55 12.55 12.6 12.6.05.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.24.03.47.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M825.06 83.18a5.33 5.33 0 004.79 5.05l1.02-10.47a5.22 5.22 0 00-5.8 5.43zm1.47-8.19l-10.76-10.76-.87.87 10.75 10.76.88-.87zm-1.75 1.74l-10.75-10.76-.88.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.88 10.76 10.75.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.11-3.12-12.55 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M288.64-352.22l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip65)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M708.26 59.48a8.42 8.42 0 010-11.9l-5.96-5.96a16.84 16.84 0 1023.82 23.82l-5.96-5.96a8.42 8.42 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M708.26 59.48a8.42 8.42 0 0011.9 0l-11.9-11.9a8.42 8.42 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M726.12 41.62a16.84 16.84 0 00-23.82 0l5.96 5.96a8.42 8.42 0 1111.9 11.9l5.96 5.96a16.84 16.84 0 000-23.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M720.16 47.58a8.42 8.42 0 00-11.9 0l11.9 11.9a8.42 8.42 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M702.3 65.43l-.58-.58a16.01 16.01 0 00-22.64 0l-9.2 9.2 11.91 11.9 20.51-20.52z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M702.89 88.66a16.01 16.01 0 000-22.64l-.58-.58-20.52 20.5 11.9 11.91 9.2-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip66)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M738.22 117.75l7.58 32.2 20.83-20.83-7.57-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M771.95 156.1l6.05 1.43 20.84-20.84-32.2-7.57 5.3 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M766.63 129.12l5.32 26.99-26.15-6.16 20.83-20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M768.96 140.9a8 8 0 01-3.23.42c-2.1-.24-2.59-1.67-1.06-3.2a8.55 8.55 0 013.36-1.9l-.81-4.15-10.01 10.06 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M751.01 113.92l3.8 16.38 3.1-3.11-2.85-12.32-4.05-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M751.52 130.83l-3.55 14.3-2.04-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M760.98 149.82l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.83-.42l.8.18 3.26-3.26-.8-.18-3.26 3.25zm-1.82-.44l.8.19 3.26-3.25-.8-.2-3.26 3.26zm-1.83-.43l.8.19 3.26-3.25-.8-.2-3.26 3.26zm-1.82-.43l.8.2 3.26-3.26-.8-.2-3.26 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M780.08 152.04l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M765.8 148.68l-1.84 1.84 7.22 1.7-.47-2.39-4.91-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M742.73 116.64l-1.17 1.18 3.63 15.42 1.17-1.18-3.63-15.42zm2.21-2.21l-1.17 1.18 3.63 15.42 1.17-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M759.3 121.12l-1.83-7.82 4.4-4.4 1.84 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M759.06 96.92l2.81 11.97 31.45 8.13-3.2-11.4-31.06-8.7zm36.36 27.59l-31.7-7.8 2.91 12.4 32.2 7.58-3.41-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M793.32 117.03l-31.44-8.14 1.84 7.83 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M754.12 110.8l-3.11 3.12 4.05.95-.94-4.06z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M767.22 132.07l.81 4.15.02-.01a7.98 7.98 0 013.2-.4c2.11.23 2.6 1.66 1.07 3.18a8.56 8.56 0 01-3.36 1.91l.81 4.14L779.83 135l-12.61-2.92z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M224.62-288.19l511.64 511.63M160.6-224.17l511.63 511.64M96.57-160.15l511.64 511.64M32.55-96.12l511.63 511.64M928.89 31.93l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip67)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M947.84 41.72l-14.78 4.92 14.78 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M977.39 88.5l1.23-1.23-11.08-11.08h-2.46l12.3 12.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M961.38 72.5l3.7 3.7h2.46l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M974.93 90.97l1.23-1.23-13.55-13.55h-2.46l14.78 14.78z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M958.92 74.96l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M923.21 51.57l24.63 24.62V61.42l-14.78-14.78 14.78-4.92V26.94L923.2 51.57z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M947.84 26.94v14.78l3.7-1.23-3.7 11.08 11.08-3.7-6.16 18.47-4.92-4.92v14.77l24.62-24.62-24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M980.61 84.34l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M980.61 68.04l-8.15 8.15h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M988.76 76.2l-8.15 8.14-8.15-8.15h-4.92l11.08 11.09-1.23 1.23-12.31-12.32h-2.47l13.55 13.55-1.23 1.23-14.78-14.78h-12.31l24.62 24.63 24.63-24.63h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M947.84 76.2h12.31l-1.23-1.24 1.23-1.23 2.46 2.46h2.47l-3.7-3.69 1.23-1.23 4.93 4.92h4.92l8.15-8.14 8.15 8.14h8.33l-24.63-24.62-24.62 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip68)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1027.42 140.25l25.17-25.17-31.36.17-25.17 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1052.42 146.45l.17-31.37-8.28 8.28-.18 31.37 8.29-8.28zm-17.13 17.12l.18-31.36-8.05 8.04-.17 31.37 8.04-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1012.94 123.54l-8.84 8.84 31.36-.17 8.85-8.85-31.37.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1044.13 154.73l-8.84 8.84.17-31.36 8.85-8.85-.18 31.37zm-31.19-31.19l-8.84 8.84.17-31.35 8.84-8.85-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1021.23 115.25l.17-31.36-8.29 8.3-.16 31.35 8.28-8.29zm-24.99-6.19l-.18 31.36 8.04-8.04.17-31.35-8.03 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip69)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1120.87 182.75l-29.28-29.3-37.34 37.34 29.29 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1083.54 220.08l8.05-66.62-37.34 37.33 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1092.65 163.58l29.29 29.29-30.46 30.46-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1087.32 202.03l-12.6-12.6 12.54-12.55 3.12 3.12 2.27-16.42-37.33 37.33 20.92 20.92 1.44 1.44 7.72-1.33 1.92-19.9zm-9.05 5.36l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.88-.87 10.75 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1102.17 180.94l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1087.37 202.08l12.55-12.55-12.66-12.65-12.54 12.55 12.6 12.6.05.05zm-.7 14.22a5.22 5.22 0 005.03-5.45 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.23.02.47.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1081.16 211.23a5.33 5.33 0 004.79 5.05l1.02-10.47a5.22 5.22 0 00-5.81 5.43zm1.46-8.19l-10.75-10.76-.87.87 10.75 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.88 10.76 10.75.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.12-3.12-12.54 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip70)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1189.16 268.27l-49.25-49.25-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1139.91 268.27v-24.63h-24.62l24.62 24.63zm24.63 24.63v-24.63h-24.63l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1164.54 268.27h-24.63v-24.62l24.63 24.62zm-49.25-24.63h24.62v-24.62l-24.62 24.62zm73.87 24.63h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1158.29 255.96a6.07 6.07 0 00-10.35-4.29l8.57 8.57a6.03 6.03 0 001.78-4.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1152.22 262.02c1.68 0 3.19-.68 4.29-1.78l-8.57-8.57a6.07 6.07 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip71)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1220.45 315.58a8.43 8.43 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.81l-5.95-5.95a8.43 8.43 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1220.45 315.58a8.42 8.42 0 0011.91 0l-11.91-11.9a8.43 8.43 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1238.31 297.72a16.84 16.84 0 00-23.81 0l5.95 5.95a8.43 8.43 0 0111.91 11.9l5.95 5.96a16.83 16.83 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1232.36 303.67a8.42 8.42 0 00-11.91 0l11.91 11.91a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1214.5 321.53l-.58-.58a16.02 16.02 0 00-22.65 0l-9.19 9.19 11.91 11.9 20.51-20.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1215.08 344.76a16 16 0 00.01-22.64l-.59-.59-20.51 20.52 11.9 11.9 9.19-9.2z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip72)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1250.42 373.85l7.57 32.2 20.84-20.84-7.58-32.2-20.83 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1284.14 412.2l6.05 1.43 20.84-20.84-32.2-7.58 5.31 27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1278.83 385.21l5.31 27-26.15-6.16 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1281.15 397a8 8 0 01-3.22.41c-2.11-.24-2.59-1.66-1.07-3.19a8.61 8.61 0 013.37-1.9l-.82-4.15-10 10.05 12.56 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1263.21 370.01l3.79 16.39 3.11-3.11-2.85-12.32-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1263.72 386.92l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1273.17 405.92l.81.18 3.25-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1292.28 408.14l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1277.99 404.77l-1.84 1.85 7.23 1.7-.47-2.39-4.92-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1254.93 372.74l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42zm2.21-2.21l-1.18 1.17 3.64 15.42 1.17-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1271.5 377.22l-1.83-7.83 4.4-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1271.25 353.01l2.82 11.98 31.44 8.13-3.19-11.4-31.07-8.7zm36.36 27.59l-31.7-7.79 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1305.51 373.12l-31.44-8.13 1.84 7.82 31.71 7.8-2.11-7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1266.32 366.9l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1279.41 388.17l.82 4.14h.01a8.02 8.02 0 013.21-.41c2.11.24 2.59 1.67 1.06 3.19a8.51 8.51 0 01-3.36 1.91l.82 4.14 10.05-10.06-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip73)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1364 428.33a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1359.07 462.8a20.9 20.9 0 01-29.55-29.55l-4.92-4.92a27.86 27.86 0 0039.4 39.4l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1354.15 457.88a13.93 13.93 0 01-19.7-19.7l-4.93-4.93a20.9 20.9 0 0029.55 29.56l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1359.07 433.25a20.9 20.9 0 00-29.55 0l4.93 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1354.15 438.18a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 019.85 9.84l4.93 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1349.22 452.95a6.97 6.97 0 01-9.85-9.84l-4.92-4.93a13.93 13.93 0 1019.7 19.7l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1339.37 443.1a6.97 6.97 0 009.85 9.85l-9.85-9.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1349.22 443.1a6.97 6.97 0 00-9.85 0l9.85 9.86a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip74)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1434.1 506.02l-25.26-25.26 32.75 17.78-7.49 7.48z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1408.84 480.76l23.21 32.94 8.94-8.95-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1432.34 519.02l-5.02-7.97 5.02-6.81-23.44-23.42-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1408.84 480.76l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1415.77 526.43l-6.26-6.26-.94.93 6.26 6.26.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1399.02 521.75l-10.93-10.93-.94.93 10.93 10.93.94-.93zm-3.74 3.75l-10.93-10.94-.94.94 10.93 10.93.94-.94zm1.87-1.88l-10.93-10.93-.94.93 10.93 10.94.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1404.52 517.02c1.97.35 4.03.11 5.89-.7l-5.18-5.18-.71 5.88zm4.39-12.51l6.65 6.65a10.1 10.1 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1415.56 511.16l-6.65-6.65-3.27 3.27-.4 3.36 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1399.15 499.9a10.13 10.13 0 005.37 17.12l.72-5.88-1.48-1.48 1.88-1.88 1.31-10.82c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1403.76 509.66l1.48 1.48.4-3.36-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1432.34 519.02l-.01-14.79-7.39 7.4 7.4 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1392.02 530.86l9.65 9.66 1.16-9.66h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1411.33 530.86h-8.5l-1.16 9.66 9.66-9.66z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M864.87 95.95l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip75)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M933.06 140.22l-49.25-49.25-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M883.81 140.22v-24.63H859.2l24.62 24.63zm24.63 24.62v-24.62H883.8l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M908.44 140.22H883.8v-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M859.19 115.6h24.62V90.96l-24.62 24.62zm73.87 24.62h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M902.19 127.9a6.06 6.06 0 00-10.35-4.28l8.57 8.57a6.05 6.05 0 001.78-4.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M896.13 133.97c1.67 0 3.19-.68 4.28-1.78l-8.57-8.57a6.04 6.04 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip76)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M964.36 187.53a8.42 8.42 0 010-11.9l-5.96-5.96a16.84 16.84 0 0023.81 23.81l-5.95-5.95a8.42 8.42 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M964.36 187.53a8.42 8.42 0 0011.9 0l-11.9-11.9a8.42 8.42 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M982.22 169.67a16.84 16.84 0 00-23.82 0l5.96 5.95a8.42 8.42 0 1111.9 11.91l5.96 5.95a16.84 16.84 0 000-23.8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M976.26 175.62a8.42 8.42 0 00-11.9 0l11.9 11.91a8.42 8.42 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M958.4 193.48l-.58-.58a16.01 16.01 0 00-22.65 0l-9.18 9.19 11.9 11.9 20.51-20.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M958.99 216.71a16.01 16.01 0 000-22.64l-.59-.59L937.9 214l11.9 11.9 9.2-9.19z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip77)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M994.32 245.8l7.57 32.2 20.84-20.84-7.58-32.2-20.83 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1028.05 284.15l6.05 1.43 20.83-20.84-32.2-7.57 5.32 26.98z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1022.73 257.16l5.32 27-26.15-6.16 20.83-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1025.05 268.95a8 8 0 01-3.22.42c-2.11-.24-2.59-1.67-1.06-3.2a8.5 8.5 0 013.36-1.9l-.81-4.15-10.01 10.06 12.56 2.9-.82-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1007.11 241.97l3.79 16.38 3.11-3.11-2.85-12.32-4.05-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1007.62 258.88l-3.55 14.29-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1017.08 277.87l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.18-3.25 3.25zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25zm-1.82-.43l.8.19 3.25-3.26-.8-.18-3.25 3.25zm-1.83-.43l.8.19 3.26-3.26-.81-.18-3.25 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1036.18 280.09l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1021.9 276.73l-1.85 1.84 7.23 1.7-.47-2.39-4.91-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M998.83 244.69l-1.17 1.18 3.63 15.42 1.17-1.18-3.63-15.42zm2.21-2.21l-1.17 1.17 3.63 15.43 1.17-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1015.41 249.17l-1.84-7.82 4.4-4.4 1.84 7.81-4.4 4.41z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1015.15 224.96l2.82 11.98 31.45 8.13-3.2-11.4-31.07-8.7zm36.36 27.6l-31.7-7.8 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1049.42 245.07l-31.45-8.13 1.84 7.83 31.71 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1010.22 238.85l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1023.32 260.12l.81 4.14h.01a8 8 0 013.21-.41c2.11.24 2.59 1.67 1.07 3.2a8.65 8.65 0 01-3.36 1.9l.81 4.14 10.06-10.06-12.61-2.9z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip78)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1107.9 300.28a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1102.97 334.76a20.9 20.9 0 11-29.54-29.55l-4.93-4.93a27.86 27.86 0 0039.4 39.4l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1098.05 329.83a13.93 13.93 0 01-19.7-19.7l-4.92-4.92a20.9 20.9 0 0029.54 29.55l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1102.97 305.2a20.88 20.88 0 00-29.54 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1098.05 310.13a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 019.85 9.85l4.93 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1093.12 324.9a6.95 6.95 0 11-9.84-9.84l-4.93-4.93a13.93 13.93 0 0019.7 19.7l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1083.28 315.06a6.96 6.96 0 109.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1093.13 315.06a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip79)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1178.01 377.97l-25.27-25.26 32.75 17.78-7.48 7.48z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1152.74 352.7l23.21 32.95 8.94-8.95-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1176.24 390.97l-5.02-7.97 5.02-6.81-23.44-23.42-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1152.74 352.7l-39.3 39.3 30.88 30.89 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1159.67 398.38l-6.26-6.26-.94.93 6.27 6.26.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1142.92 393.7l-10.93-10.93-.93.93 10.93 10.94.93-.94zm-3.74 3.74l-10.93-10.93-.94.94 10.93 10.93.94-.94zm1.87-1.87l-10.93-10.93-.94.94 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1148.42 388.97c1.98.35 4.03.11 5.89-.7l-5.17-5.18-.72 5.88zm4.39-12.51l6.65 6.65a10.12 10.12 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1159.46 383.11l-6.65-6.65-3.27 3.27-.4 3.36 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1143.05 371.85a10.13 10.13 0 005.38 17.12l.71-5.88-1.48-1.48 1.88-1.88 1.31-10.82c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1147.66 381.62l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1176.24 390.97v-14.79l-7.4 7.4 7.4 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1135.92 402.81l9.65 9.66 1.16-9.66h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1155.23 402.81h-8.5l-1.16 9.66 9.66-9.66z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip80)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1203.94 425.87l-14.78 4.92 14.78 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1233.49 472.65l1.23-1.23-11.08-11.08h-2.47l12.32 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1217.48 456.65l3.69 3.7h2.47l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1231.02 475.12l1.23-1.23-13.54-13.55h-2.46l14.77 14.78z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1215.02 459.11l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1179.31 435.72l24.63 24.62v-14.77l-14.78-14.78 14.78-4.92v-14.78l-24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1203.94 411.1v14.77l3.69-1.23-3.69 11.08 11.08-3.7-6.16 18.47-4.92-4.92v14.77l24.62-24.62-24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1236.71 468.5l8.15-8.16h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1236.71 452.2l-8.15 8.14h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1244.86 460.34l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.32-12.3h-2.46l13.55 13.54-1.24 1.23-14.77-14.78h-12.31l24.62 24.63 24.63-24.63h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1203.94 460.34h12.31l-1.23-1.23 1.23-1.23 2.46 2.46h2.46l-3.69-3.7 1.23-1.22 4.93 4.92h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.62-24.62 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip81)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1283.52 524.4l25.17-25.17-31.36.17-25.17 25.17 31.36-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1308.52 530.6l.17-31.38-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.12l.17-31.37-8.04 8.04-.17 31.37 8.04-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1269.04 507.69l-8.84 8.84 31.36-.18 8.85-8.84-31.37.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1300.23 538.87l-8.84 8.85.17-31.37 8.84-8.84-.17 31.36zm-31.19-31.18l-8.84 8.84.17-31.36 8.84-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1277.33 499.4l.17-31.36-8.29 8.29-.17 31.36 8.29-8.29zm-25-6.2l-.17 31.37 8.04-8.04.17-31.36-8.04 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip82)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1376.97 566.9l-29.29-29.3-37.33 37.34 29.29 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1339.64 604.23l8.04-66.63-37.33 37.34 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1348.75 547.73l29.29 29.28-30.46 30.47-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1343.42 586.18l-12.6-12.6 12.54-12.55 3.12 3.11 2.27-16.41-37.33 37.33 20.92 20.92 1.44 1.44 7.72-1.33 1.92-19.91zm-9.05 5.36l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.75-.87.88zm1.74-1.75l-10.76-10.75.87-.88 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1358.27 565.08l.11 25.45-12.79-12.78 12.68-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1343.47 586.23l12.55-12.55-12.66-12.65-12.54 12.55 12.6 12.6.05.05zm-.71 14.23a5.22 5.22 0 005.04-5.46 5.33 5.33 0 00-4.73-5.05l-1.02 10.48c.23.02.47.04.71.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1337.26 595.38a5.33 5.33 0 004.79 5.05l1.02-10.48a5.22 5.22 0 00-5.81 5.42zm1.46-8.2l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.76.87-.88zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.04-3.12-3.11-12.54 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M800.84 159.98l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip83)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M851.8 172.23a27.86 27.86 0 00-39.4 0l4.93 4.93a20.9 20.9 0 0129.55 29.55l4.92 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M846.88 206.7a20.9 20.9 0 01-29.55-29.54l-4.93-4.93a27.86 27.86 0 0039.4 39.4l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M841.95 201.78a13.93 13.93 0 01-19.7-19.7l-4.92-4.92a20.9 20.9 0 0029.55 29.55l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M846.88 177.16a20.9 20.9 0 00-29.55 0l4.92 4.92a13.93 13.93 0 0119.7 19.7l4.93 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M841.95 182.08a13.93 13.93 0 00-19.7 0l4.93 4.93a6.97 6.97 0 019.85 9.85l4.92 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M837.03 196.86a6.97 6.97 0 01-9.85-9.85l-4.93-4.93a13.93 13.93 0 0019.7 19.7l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M827.18 187a6.97 6.97 0 009.85 9.86l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M837.03 187a6.97 6.97 0 00-9.85 0l9.85 9.86a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip84)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M921.9 249.92l-25.26-25.26 32.75 17.78-7.48 7.48z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M896.64 224.66l23.2 32.94 8.96-8.95-32.16-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M920.14 262.92l-5.02-7.97 5.02-6.81-23.43-23.42-.07-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M896.64 224.66l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M903.57 270.33l-6.26-6.26-.93.93 6.26 6.27.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M886.82 265.65l-10.93-10.93-.93.94 10.93 10.92.93-.93zm-3.74 3.75l-10.93-10.94-.94.94 10.93 10.93.94-.94zm1.87-1.88l-10.93-10.93-.93.94 10.93 10.93.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M892.33 260.92c1.97.35 4.02.12 5.88-.7l-5.17-5.18-.71 5.88zm4.39-12.51l6.64 6.65a10.12 10.12 0 00-8.6-14.2l-1.31 10.83 3.27-3.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M903.36 255.06l-6.64-6.65-3.27 3.28-.41 3.35 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M886.95 243.8a10.12 10.12 0 005.38 17.12l.7-5.88-1.46-1.48 1.88-1.88 1.3-10.82c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M891.57 253.56l1.47 1.48.4-3.35-1.87 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M920.14 262.92v-14.79l-7.4 7.4 7.4 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M879.82 274.76l9.65 9.66 1.16-9.66h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M899.13 274.76h-8.5l-1.16 9.66 9.66-9.66z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip85)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M947.84 297.82l-14.78 4.92 14.78 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M977.39 344.6l1.23-1.23-11.08-11.08h-2.46l12.3 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M961.38 328.6l3.7 3.7h2.46l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M974.93 347.07l1.23-1.23-13.55-13.55h-2.46l14.78 14.78z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M958.92 331.06l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M923.21 307.67l24.63 24.62v-14.77l-14.78-14.78 14.78-4.92v-14.78l-24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M947.84 283.04v14.78l3.7-1.23-3.7 11.08 11.08-3.7-6.16 18.47-4.92-4.92v14.77l24.62-24.62-24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M980.61 340.44l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M980.61 324.14l-8.15 8.15h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M988.76 332.3l-8.15 8.14-8.15-8.15h-4.92l11.08 11.08-1.23 1.24-12.31-12.32h-2.47l13.55 13.55-1.23 1.23-14.78-14.78h-12.31l24.62 24.63 24.63-24.63h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M947.84 332.3h12.31l-1.23-1.24 1.23-1.23 2.46 2.46h2.47l-3.7-3.7 1.23-1.22 4.93 4.92h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.62-24.62 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip86)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1027.42 396.35l25.17-25.17-31.36.17-25.17 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1052.42 402.55l.17-31.37-8.28 8.28-.18 31.37 8.29-8.28zm-17.13 17.12l.18-31.37-8.05 8.05-.17 31.36 8.04-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1012.94 379.64l-8.84 8.84 31.36-.18 8.85-8.84-31.37.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1044.13 410.82l-8.84 8.85.17-31.37 8.85-8.84-.18 31.37zm-31.19-31.18l-8.84 8.84.17-31.36 8.84-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1021.23 371.35l.17-31.36-8.29 8.29-.16 31.36 8.28-8.29zm-24.99-6.19l-.18 31.36 8.04-8.04.17-31.36-8.03 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip87)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1120.87 438.84l-29.28-29.29-37.34 37.34 29.29 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1083.54 476.18l8.05-66.63-37.34 37.34 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1092.65 419.68l29.29 29.28-30.46 30.47-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1087.32 458.13l-12.6-12.6 12.54-12.55 3.12 3.11 2.27-16.41-37.33 37.33 20.92 20.92 1.44 1.44 7.72-1.33 1.92-19.91zm-9.05 5.36l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.75-.87.88zm1.74-1.75l-10.76-10.75.88-.87 10.75 10.75-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1102.17 437.03l.11 25.46-12.78-12.79 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1087.37 458.18l12.55-12.55-12.66-12.65-12.54 12.55 12.6 12.6.05.05zm-.7 14.22a5.22 5.22 0 005.03-5.45 5.33 5.33 0 00-4.73-5.05l-1.02 10.48c.23.02.47.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1081.16 467.33a5.33 5.33 0 004.79 5.05l1.02-10.48a5.22 5.22 0 00-5.81 5.42zm1.46-8.2l-10.75-10.75-.87.87 10.75 10.76.87-.88zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.12-3.12-12.54 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip88)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1189.16 524.37l-49.25-49.25-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1139.91 524.37v-24.63h-24.62l24.62 24.63zm24.63 24.63v-24.63h-24.63l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1164.54 524.37h-24.63v-24.63l24.63 24.63zm-49.25-24.63h24.62v-24.62l-24.62 24.62zm73.87 24.63h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1158.29 512.05a6.07 6.07 0 00-10.35-4.28l8.57 8.57a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1152.22 518.12c1.68 0 3.19-.68 4.29-1.78l-8.57-8.57a6.07 6.07 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip89)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1220.45 571.68a8.43 8.43 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.81l-5.95-5.95a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1220.45 571.68a8.42 8.42 0 0011.91 0l-11.91-11.9a8.43 8.43 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1238.31 553.82a16.84 16.84 0 00-23.81 0l5.95 5.95a8.42 8.42 0 0111.91 11.9l5.95 5.96a16.83 16.83 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1232.36 559.77a8.43 8.43 0 00-11.91 0l11.91 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1214.5 577.63l-.58-.59a16.02 16.02 0 00-22.65 0l-9.19 9.2 11.91 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1215.08 600.86a16 16 0 00.01-22.64l-.59-.59-20.51 20.51 11.9 11.9 9.19-9.18z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip90)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1250.42 629.95l7.57 32.2 20.84-20.84-7.58-32.2-20.83 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1284.14 668.3l6.05 1.42 20.84-20.83-32.2-7.58 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1278.83 641.31l5.31 27-26.15-6.16 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1281.15 653.1a8 8 0 01-3.22.41c-2.11-.24-2.59-1.66-1.07-3.19a8.62 8.62 0 013.37-1.91l-.82-4.14-10 10.05 12.56 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1263.21 626.11l3.79 16.39 3.11-3.12-2.85-12.31-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1263.72 643.02l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1273.17 662.01l.81.2 3.25-3.26-.8-.19-3.26 3.25zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1292.28 664.24l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1277.99 660.87l-1.84 1.85 7.23 1.7-.47-2.4-4.92-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1254.93 628.84l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42zm2.21-2.21l-1.18 1.17 3.64 15.42 1.17-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1271.5 633.32l-1.83-7.83 4.4-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1271.25 609.1l2.82 11.99 31.44 8.13-3.19-11.4-31.07-8.71zm36.36 27.6l-31.7-7.79 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1305.51 629.22l-31.44-8.13 1.84 7.82 31.71 7.8-2.11-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1266.32 623l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1279.41 644.27l.82 4.14h.01a8 8 0 013.21-.41c2.11.24 2.59 1.66 1.06 3.19a8.52 8.52 0 01-3.36 1.9l.82 4.14 10.05-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M736.82 224l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip91)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M771.33 268.3l25.16-25.17-31.36.17-25.17 25.17 31.37-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M796.32 274.5l.17-31.37-8.28 8.28-.18 31.37 8.3-8.28zm-17.12 17.12l.17-31.37-8.04 8.05-.17 31.37 8.03-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M756.85 251.59l-8.85 8.84 31.37-.18 8.84-8.84-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M788.03 282.77l-8.84 8.85.18-31.37 8.84-8.84-.18 31.36zm-31.18-31.18l-8.85 8.84.17-31.36 8.85-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M765.13 243.3l.18-31.36-8.3 8.29-.16 31.36 8.28-8.29zm-24.99-6.2l-.18 31.37 8.04-8.04.17-31.36-8.03 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip92)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M864.78 310.8l-29.3-29.3-37.33 37.34 29.3 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M827.44 348.13l8.05-66.63-37.34 37.34 29.3 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M836.56 291.63l29.29 29.29-30.47 30.46-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.34-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M831.23 330.08l-12.61-12.6 12.54-12.55 3.12 3.12 2.28-16.42-37.34 37.33 20.92 20.92 1.44 1.44 7.73-1.33 1.92-19.9zm-9.06 5.36l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.88-.87 10.75 10.76-.87.87zm1.74-1.75L814.9 321.2l.87-.87 10.75 10.75-.87.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M846.07 308.98l.1 25.46-12.77-12.78 12.67-12.68z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M831.27 330.13l12.55-12.55-12.65-12.65-12.55 12.55 12.6 12.6.05.05zm-.7 14.23a5.22 5.22 0 005.03-5.46 5.32 5.32 0 00-4.73-5.05l-1.02 10.48c.24.02.47.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M825.06 339.28a5.33 5.33 0 004.79 5.05l1.02-10.48a5.22 5.22 0 00-5.8 5.43zm1.47-8.19l-10.76-10.76-.87.87 10.75 10.76.88-.87zm-1.75 1.74l-10.75-10.76-.88.87 10.76 10.76.87-.87zm-1.74 1.74l-10.76-10.76-.87.88 10.76 10.75.87-.87zm-4.42-17.09l12.6 12.6 3.06-22.03-3.11-3.12-12.55 12.55zm9.83 26.97l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip93)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M933.06 396.32l-49.25-49.25-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M883.81 396.32v-24.63H859.2l24.62 24.63zm24.63 24.62v-24.62H883.8l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M908.44 396.32H883.8v-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M859.19 371.7h24.62v-24.63l-24.62 24.62zm73.87 24.62h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M902.19 384a6.06 6.06 0 00-10.35-4.28l8.57 8.57a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M896.13 390.07c1.67 0 3.19-.68 4.28-1.78l-8.57-8.57a6.06 6.06 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip94)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M964.36 443.63a8.42 8.42 0 010-11.9l-5.96-5.96a16.84 16.84 0 0023.81 23.81l-5.95-5.95a8.42 8.42 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M964.36 443.63a8.42 8.42 0 0011.9 0l-11.9-11.9a8.42 8.42 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M982.22 425.77a16.84 16.84 0 00-23.82 0l5.96 5.95a8.42 8.42 0 0111.9 11.9l5.96 5.96a16.84 16.84 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M976.26 431.72a8.42 8.42 0 00-11.9 0l11.9 11.9a8.42 8.42 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M958.4 449.58l-.58-.59a16.01 16.01 0 00-22.65 0l-9.19 9.2 11.9 11.9 20.52-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M958.99 472.8a16.01 16.01 0 000-22.63l-.59-.59-20.51 20.51 11.9 11.9 9.2-9.18z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip95)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M994.32 501.9l7.57 32.2 20.84-20.84-7.58-32.2-20.83 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1028.05 540.25l6.05 1.42 20.83-20.83-32.2-7.58 5.32 27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1022.73 513.26l5.32 27-26.15-6.16 20.83-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1025.05 525.05c-1.1.35-2.25.52-3.22.41-2.11-.24-2.59-1.67-1.06-3.19a8.5 8.5 0 013.36-1.91l-.81-4.14-10.01 10.05 12.56 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1007.11 498.06l3.79 16.39 3.11-3.12-2.85-12.31-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1007.62 514.97l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1017.08 533.97l.8.18 3.26-3.25-.81-.19-3.25 3.25zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26zm-1.82-.44l.8.2 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.42l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.25-3.26-.8-.19-3.25 3.26zm-1.83-.43l.8.18 3.26-3.25-.81-.19-3.25 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1036.18 536.19l-9.37-2.2.47 2.38 7.06 1.66 1.84-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1021.9 532.82l-1.85 1.84 7.23 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M998.83 500.79l-1.17 1.17 3.63 15.42 1.17-1.17-3.63-15.42zm2.21-2.21l-1.17 1.17 3.63 15.42 1.17-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1015.41 505.27l-1.84-7.83 4.4-4.4 1.84 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1015.15 481.06l2.82 11.98 31.45 8.13-3.2-11.4-31.07-8.71zm36.36 27.6l-31.7-7.8 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1049.42 501.17l-31.45-8.13 1.84 7.82 31.71 7.8-2.1-7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1010.22 494.95l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1023.32 516.22l.81 4.14h.01a8.02 8.02 0 013.21-.41c2.11.24 2.59 1.66 1.07 3.19a8.67 8.67 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip96)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1107.9 556.38a27.86 27.86 0 00-39.4 0l4.92 4.92a20.9 20.9 0 0129.55 29.55l4.93 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1102.97 590.85a20.9 20.9 0 01-29.55-29.55l-4.92-4.92a27.86 27.86 0 0039.4 39.4l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1098.05 585.93a13.93 13.93 0 01-19.7-19.7l-4.92-4.93a20.9 20.9 0 0029.54 29.55l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1102.97 561.3a20.88 20.88 0 00-29.54 0l4.92 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1098.05 566.23a13.93 13.93 0 00-19.7 0l4.92 4.92a6.97 6.97 0 019.85 9.85l4.93 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1093.12 581a6.97 6.97 0 01-9.85-9.85l-4.92-4.92a13.93 13.93 0 1019.7 19.7l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1083.28 571.15a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1093.13 571.15a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip97)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1178.01 634.07l-25.27-25.27 32.75 17.79-7.48 7.48z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1152.74 608.8l23.21 32.94 8.94-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1176.24 647.07l-5.02-7.97 5.02-6.82-23.44-23.41-.06-.06-39.3 39.3 30.88 30.88 31.92-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1152.74 608.8l-39.3 39.3 30.88 30.89 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1159.67 654.48l-6.26-6.27-.94.94 6.27 6.26.93-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1142.92 649.8l-10.93-10.93-.93.93 10.93 10.93.93-.93zm-3.74 3.74l-10.93-10.93-.94.94 10.93 10.93.94-.94zm1.87-1.87l-10.93-10.93-.94.93 10.93 10.93.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1148.42 645.07c1.98.35 4.03.11 5.89-.71l-5.17-5.17-.72 5.88zm4.39-12.51l6.65 6.65a10.12 10.12 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1159.46 639.2l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.18 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1143.05 627.95a10.13 10.13 0 005.38 17.12l.71-5.89-1.48-1.47 1.88-1.88 1.31-10.82c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1147.66 637.71l1.48 1.48.4-3.36-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1176.24 647.07v-14.79l-7.4 7.4 7.4 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1135.92 658.91l9.65 9.66 1.16-9.66h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1155.23 658.91h-8.5l-1.16 9.66 9.66-9.66z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip98)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1203.94 681.97l-14.78 4.92 14.78 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1233.49 728.75l1.23-1.23-11.08-11.08h-2.47l12.32 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1217.48 712.75l3.69 3.69h2.47l-4.93-4.92-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1231.02 731.22l1.23-1.24-13.54-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1215.02 715.21l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1179.31 691.82l24.63 24.62v-14.78l-14.78-14.77 14.78-4.92v-14.78l-24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1203.94 667.19v14.77l3.69-1.23-3.69 11.09 11.08-3.7-6.16 18.47-4.92-4.93v14.78l24.62-24.63-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1236.71 724.59l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1236.71 708.3l-8.15 8.14h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1244.86 716.44l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.32-12.31h-2.46l13.55 13.54-1.24 1.24-14.77-14.78h-12.31l24.62 24.63 24.63-24.63h-8.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1203.94 716.44h12.31l-1.23-1.23 1.23-1.23 2.46 2.46h2.46l-3.69-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.15h8.33l-24.63-24.63-24.62 24.63z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M672.79 288.03l511.64 511.63"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip99)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M857.88 442l-25.26-25.27 32.75 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M832.62 416.73l23.2 32.94 8.95-8.95-32.15-23.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M856.12 455l-5.02-7.98 5.01-6.81-23.43-23.42-.06-.06-39.3 39.3 30.88 30.88L856.1 455z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M832.62 416.73l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M839.55 462.4l-6.26-6.26-.94.94 6.26 6.26.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M822.8 457.72l-10.93-10.93-.94.94 10.93 10.93.94-.94zm-3.75 3.75l-10.92-10.93-.94.93 10.93 10.93.93-.93zm1.88-1.87L810 448.65l-.94.94L820 460.53l.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M828.3 453c1.97.35 4.03.1 5.89-.71L829 447.1l-.7 5.88zm4.4-12.51l6.64 6.64a10.13 10.13 0 00-8.6-14.2l-1.32 10.83 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M839.34 447.13l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.18 7.74 7.73 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M822.93 435.87A10.12 10.12 0 00828.3 453l.72-5.88-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M827.54 445.64l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M856.12 455v-14.8l-7.4 7.4 7.4 7.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M815.8 466.84l9.65 9.65 1.16-9.65h-10.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M835.11 466.84h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip100)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M883.81 489.9l-14.77 4.92 14.77 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M913.36 536.68l1.24-1.23-11.09-11.08h-2.46l12.31 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M897.36 520.67l3.7 3.7h2.46l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M910.9 539.14l1.23-1.23-13.54-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M894.9 523.14l1.23 1.23h2.46l-2.46-2.47-1.23 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M859.19 499.74l24.62 24.63v-14.78l-14.77-14.77 14.77-4.93v-14.77l-24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M883.81 475.12v14.77l3.7-1.23-3.7 11.08 11.09-3.7-6.16 18.48-4.93-4.93v14.78l24.63-24.63-24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M916.59 532.51l8.15-8.14h-16.3l8.15 8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M916.59 516.22l-8.15 8.15h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M924.74 524.37l-8.15 8.15-8.15-8.15h-4.93l11.09 11.08-1.24 1.23-12.3-12.31h-2.47l13.54 13.54-1.23 1.23-14.77-14.77H883.8l24.63 24.62 24.62-24.62h-8.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M883.81 524.37h12.32l-1.24-1.23 1.24-1.24 2.46 2.47h2.46l-3.7-3.7 1.24-1.23 4.92 4.93h4.93l8.15-8.15 8.15 8.15h8.32l-24.62-24.63-24.63 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip101)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M963.4 588.42l25.17-25.17-31.37.17-25.16 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M988.4 594.62l.17-31.37-8.29 8.28-.17 31.37 8.29-8.28zm-17.14 17.12l.18-31.36-8.04 8.04-.17 31.37 8.03-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M948.92 571.71l-8.84 8.84 31.36-.17 8.84-8.85-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M980.1 602.9l-8.84 8.84.18-31.36 8.84-8.85-.17 31.37zm-31.18-31.19l-8.84 8.84.17-31.35 8.84-8.85-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M957.2 563.42l.18-31.36-8.3 8.3-.16 31.35 8.28-8.29zm-24.99-6.19l-.17 31.37 8.04-8.05.17-31.35-8.04 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip102)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1056.85 630.92l-29.29-29.3-37.33 37.34 29.29 29.29 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1019.52 668.25l8.04-66.62-37.33 37.33 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1028.63 611.75l29.29 29.29-30.47 30.46-6.93-6.93-6.87 6.87-1.43-1.44-20.93-20.91 37.34-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1023.3 650.2l-12.61-12.6 12.55-12.55 3.11 3.12 2.28-16.42-37.34 37.34 20.93 20.91 1.43 1.44 7.73-1.33 1.92-19.9zm-9.06 5.36l-10.75-10.75.87-.88 10.75 10.76-.87.87zm1.75-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1038.14 629.1l.11 25.46-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1023.35 650.25l12.54-12.54-12.65-12.66-12.55 12.55 12.61 12.6.05.05zm-.71 14.23a5.22 5.22 0 005.03-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.47c.24.03.48.04.72.03z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1017.14 659.4a5.33 5.33 0 004.78 5.05l1.02-10.47a5.22 5.22 0 00-5.8 5.43zm1.46-8.2l-10.76-10.75-.87.87 10.76 10.76.87-.87zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-1.75 1.75l-10.75-10.77-.87.88 10.75 10.75.87-.87zm-4.42-17.1l12.61 12.6 3.05-22.03-3.11-3.12-12.55 12.55zm9.84 26.97l-6.88 6.87 13.81.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip103)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1125.14 716.44l-49.25-49.25-24.63 24.63 49.25 49.25 24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1075.89 716.44v-24.63h-24.63l24.63 24.63zm24.62 24.63v-24.63h-24.62l24.62 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1100.51 716.44h-24.62v-24.63l24.62 24.63zm-49.25-24.62h24.63v-24.63l-24.63 24.63zm73.88 24.62h-24.63v24.63l24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1094.26 704.13a6.06 6.06 0 00-10.35-4.29l8.58 8.57a6.07 6.07 0 001.77-4.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1088.2 710.19c1.67 0 3.19-.68 4.29-1.78l-8.58-8.57a6.07 6.07 0 004.29 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip104)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1156.43 763.75a8.41 8.41 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.81l-5.96-5.95a8.41 8.41 0 01-11.9 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1156.43 763.75a8.41 8.41 0 0011.9 0l-11.9-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1174.29 745.9a16.84 16.84 0 00-23.81 0l5.95 5.94a8.43 8.43 0 0111.91 11.91l5.95 5.95a16.85 16.85 0 000-23.8z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1168.33 751.85a8.41 8.41 0 00-11.9 0l11.9 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1150.48 769.7l-.59-.58a16 16 0 00-22.64 0l-9.19 9.19 11.9 11.9 20.52-20.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1151.06 792.93a16.01 16.01 0 000-22.64l-.58-.59-20.52 20.52 11.91 11.9 9.19-9.19z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M608.77 352.05l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip105)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M915.83 620.4a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M910.9 654.88a20.9 20.9 0 11-29.55-29.55l-4.92-4.93a27.86 27.86 0 0039.4 39.4l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M905.98 649.95a13.93 13.93 0 11-19.7-19.7l-4.93-4.92a20.9 20.9 0 0029.55 29.55l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M910.9 625.33a20.9 20.9 0 00-29.55 0l4.93 4.92a13.93 13.93 0 1119.7 19.7l4.92 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M905.98 630.25a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 019.85 9.85l4.93 4.92a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M901.05 645.03a6.97 6.97 0 01-9.85-9.85l-4.92-4.93a13.93 13.93 0 0019.7 19.7l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M891.2 635.18a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M901.05 635.18a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip106)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M985.93 698.1l-25.26-25.27 32.75 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M960.67 672.83l23.2 32.94 8.95-8.95-32.15-23.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M984.16 711.1l-5.02-7.98 5.02-6.81-23.43-23.42-.06-.06-39.3 39.3 30.88 30.88 31.91-31.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M960.67 672.83l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M967.6 718.5l-6.26-6.26-.94.94 6.26 6.26.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M950.85 713.82l-10.93-10.93-.94.94 10.93 10.93.94-.94zm-3.75 3.75l-10.93-10.93-.93.93 10.93 10.93.94-.93zm1.88-1.87l-10.93-10.94-.94.94 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M956.35 709.1c1.97.35 4.03.1 5.89-.72l-5.18-5.17-.7 5.88zm4.39-12.51l6.65 6.64a10.12 10.12 0 00-8.61-14.2l-1.31 10.83 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M967.39 703.23l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.17 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M950.98 691.97a10.12 10.12 0 005.37 17.12l.71-5.88-1.47-1.47 1.88-1.88 1.31-10.83c-2.8-.18-5.66.8-7.8 2.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M955.59 701.74l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M984.16 711.1v-14.8l-7.39 7.4 7.4 7.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M943.84 722.94l9.66 9.65 1.16-9.65h-10.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M963.16 722.94h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip107)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1011.86 745.99l-14.77 4.92 14.77 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1041.41 792.78l1.23-1.23-11.08-11.08h-2.46l12.31 12.3z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1025.41 776.77l3.69 3.7h2.46l-4.92-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1038.95 795.24l1.23-1.23-13.54-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1022.94 779.24l1.24 1.23h2.46l-2.46-2.47-1.24 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M987.24 755.84l24.62 24.63v-14.78l-14.77-14.77 14.77-4.93v-14.77l-24.62 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1011.86 731.22v14.77l3.7-1.23-3.7 11.08 11.08-3.7-6.15 18.48-4.93-4.93v14.77l24.63-24.62-24.63-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1044.64 788.61l8.14-8.14h-16.29l8.15 8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1044.64 772.32l-8.15 8.14h16.29l-8.14-8.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1052.79 780.47l-8.15 8.14-8.15-8.14h-4.93l11.08 11.08-1.23 1.23-12.31-12.31h-2.46l13.54 13.54-1.23 1.23-14.77-14.77h-12.32l24.63 24.62 24.62-24.62h-8.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1011.86 780.47h12.32l-1.24-1.24 1.24-1.23 2.46 2.47h2.46l-3.69-3.7 1.23-1.23 4.92 4.93h4.93l8.15-8.15 8.15 8.14h8.32l-24.62-24.62-24.63 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip108)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1091.45 844.52l25.17-25.17-31.37.17-25.16 25.17 31.36-.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1116.45 850.72l.17-31.37-8.29 8.28-.17 31.37 8.29-8.28zm-17.14 17.12l.18-31.36-8.04 8.04-.17 31.37 8.03-8.05z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1076.97 827.8l-8.84 8.85 31.36-.17 8.84-8.85-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1108.16 859l-8.85 8.84.18-31.36 8.84-8.85-.17 31.37zm-31.19-31.2l-8.84 8.85.16-31.36 8.85-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1085.25 819.52l.18-31.36-8.29 8.3-.17 31.35 8.28-8.29zm-24.99-6.19l-.17 31.36 8.04-8.04.17-31.36-8.04 8.04z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M544.74 416.07l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip109)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M930.3 822.02l7.57 32.2 20.84-20.84-7.58-32.2-20.84 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M964.02 860.38l6.05 1.42 20.84-20.84-32.2-7.57 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M958.7 833.39l5.32 26.99-26.15-6.16 20.84-20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M961.03 845.17c-1.1.36-2.25.53-3.22.42-2.11-.24-2.6-1.67-1.07-3.2a8.55 8.55 0 013.37-1.9l-.82-4.15-10 10.05 12.55 2.92-.81-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M943.08 818.19l3.8 16.38 3.1-3.11-2.84-12.32-4.06-.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M943.6 835.1l-3.55 14.29-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M953.05 854.09l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25zm-1.82-.43l.8.19 3.25-3.26-.8-.18-3.25 3.25zm-1.83-.43l.8.19 3.26-3.25-.8-.2-3.26 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M972.16 856.31l-9.37-2.2.47 2.38 7.05 1.66 1.85-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M957.87 852.95l-1.84 1.84 7.23 1.7-.48-2.39-4.9-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M934.8 820.91l-1.17 1.18 3.63 15.42 1.18-1.18-3.63-15.42zm2.22-2.21l-1.18 1.17 3.63 15.43 1.18-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M951.38 825.4l-1.84-7.83 4.41-4.4 1.84 7.82-4.4 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M951.13 801.18l2.82 11.98 31.44 8.13-3.2-11.4-31.06-8.7zm36.36 27.6l-31.7-7.8 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M985.4 821.3l-31.45-8.14 1.84 7.83 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M946.2 815.07l-3.12 3.11 4.06.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M959.3 836.34l.8 4.14h.02a8 8 0 013.2-.41c2.12.24 2.6 1.67 1.07 3.2a8.56 8.56 0 01-3.36 1.9l.82 4.14 10.05-10.06-12.6-2.9z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip110)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1043.88 876.5a27.86 27.86 0 00-39.4 0l4.92 4.93a20.9 20.9 0 0129.55 29.55l4.93 4.92a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1038.95 910.98a20.9 20.9 0 01-29.55-29.55l-4.92-4.93a27.85 27.85 0 1039.4 39.4l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1034.03 906.05a13.93 13.93 0 01-19.7-19.7l-4.93-4.92a20.9 20.9 0 0029.55 29.55l-4.92-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1038.95 881.43a20.9 20.9 0 00-29.55 0l4.93 4.92a13.93 13.93 0 0119.7 19.7l4.92 4.93a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1034.03 886.35a13.93 13.93 0 00-19.7 0l4.92 4.93a6.97 6.97 0 019.85 9.85l4.92 4.92a13.93 13.93 0 00.01-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1029.1 901.13a6.97 6.97 0 01-9.85-9.85l-4.92-4.93a13.93 13.93 0 1019.7 19.7l-4.93-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1019.25 891.28a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1029.1 891.28a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M480.72 480.1l511.64 511.64m448.73-447.62l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip111)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1460.29 554.17l-14.78 4.92 14.78 14.78v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1489.84 600.95l1.23-1.23-11.09-11.08h-2.46l12.32 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1473.83 584.95l3.69 3.7h2.47l-4.93-4.93-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1487.37 603.42l1.23-1.24-13.54-13.54h-2.46l14.77 14.78z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1471.37 587.41l1.23 1.23h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1435.66 564.02l24.63 24.62v-14.77l-14.78-14.78 14.78-4.92v-14.78l-24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1460.29 539.4v14.77l3.69-1.24-3.69 11.09 11.08-3.7-6.16 18.47-4.92-4.92v14.77l24.62-24.62-24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1493.06 596.79l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1493.06 580.5l-8.15 8.14h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1501.21 588.64l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.32-12.3h-2.46l13.54 13.53-1.23 1.24-14.77-14.78h-12.31l24.62 24.63 24.62-24.63h-8.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1460.29 588.64h12.31l-1.23-1.23 1.23-1.23 2.46 2.46h2.46l-3.69-3.7 1.23-1.22 4.93 4.92h4.92l8.15-8.15 8.15 8.15h8.32l-24.62-24.62-24.62 24.62z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip112)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1539.87 652.7l25.17-25.18-31.36.18-25.17 25.17 31.36-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1564.87 658.9l.17-31.38-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.12l.17-31.37-8.04 8.04-.17 31.37 8.04-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1525.39 635.99l-8.84 8.84 31.36-.18 8.84-8.84-31.36.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1556.58 667.17l-8.84 8.85.17-31.37 8.84-8.84-.17 31.36zm-31.19-31.18l-8.84 8.84.17-31.36 8.84-8.84-.17 31.36z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1533.68 627.7l.17-31.36-8.29 8.29-.17 31.35 8.29-8.28zm-25-6.2l-.17 31.37 8.04-8.04.17-31.36-8.04 8.04z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip113)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1633.32 695.2l-29.29-29.3-37.33 37.34 29.29 29.29 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1595.99 732.53l8.04-66.63-37.33 37.34 29.29 29.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1605.1 676.02l29.29 29.3-30.46 30.46-6.93-6.93-6.88 6.87-1.43-1.44-20.92-20.92 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1599.77 714.48l-12.61-12.6 12.55-12.55 3.11 3.11 2.28-16.42-37.33 37.34 20.92 20.92 1.43 1.44 7.73-1.33 1.92-19.91zm-9.06 5.36l-10.75-10.76.87-.87 10.76 10.76-.88.87zm1.75-1.75l-10.76-10.75.87-.87 10.76 10.75-.87.88zm1.74-1.74l-10.76-10.75.87-.88 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1614.61 693.38l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1599.82 714.53l12.54-12.55-12.65-12.65-12.54 12.54 12.6 12.6.05.06zm-.71 14.22a5.22 5.22 0 005.03-5.46 5.32 5.32 0 00-4.72-5.04l-1.03 10.48c.24.02.48.03.72.02z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1593.61 723.68a5.33 5.33 0 004.78 5.05l1.03-10.48a5.22 5.22 0 00-5.81 5.43zm1.46-8.2l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.76.87-.88zm-1.74 1.75l-10.76-10.76-.87.87 10.75 10.76.88-.87zm-4.42-17.1l12.6 12.6 3.06-22.03-3.12-3.11-12.54 12.54zm9.83 26.98l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip114)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1701.61 780.71l-49.25-49.25-24.63 24.63 49.25 49.25 24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1652.36 780.71V756.1h-24.63l24.63 24.62zm24.62 24.63V780.7h-24.62l24.62 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1676.98 780.72h-24.62v-24.63l24.62 24.63zm-49.25-24.63h24.63v-24.63l-24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1701.61 780.72h-24.63v24.62l24.63-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1670.73 768.4a6.06 6.06 0 00-10.35-4.28l8.58 8.57a6.07 6.07 0 001.77-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1664.67 774.47c1.67 0 3.19-.68 4.29-1.78l-8.58-8.58a6.07 6.07 0 004.29 10.36z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip115)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1732.9 828.02a8.41 8.41 0 010-11.9l-5.95-5.95a16.83 16.83 0 1023.81 23.8l-5.95-5.95a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1732.9 828.02a8.42 8.42 0 0011.91 0l-11.91-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1750.76 810.17a16.83 16.83 0 00-23.81 0l5.95 5.95a8.42 8.42 0 0111.91 11.9l5.95 5.96a16.85 16.85 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1744.81 816.12a8.42 8.42 0 00-11.91 0l11.91 11.9a8.43 8.43 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1726.95 833.98l-.59-.59a16 16 0 00-22.64 0l-9.19 9.2 11.9 11.9 20.52-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1727.53 857.2a16 16 0 000-22.64l-.58-.58-20.51 20.51 11.9 11.9 9.19-9.18z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip116)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1762.86 886.3l7.58 32.2 20.84-20.84-7.58-32.2-20.84 20.83z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1796.59 924.65l6.05 1.42 20.84-20.83-32.2-7.58 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1791.28 897.66l5.31 26.99-26.15-6.15 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1793.6 909.45a8.02 8.02 0 01-3.22.41c-2.12-.24-2.59-1.67-1.07-3.19a8.54 8.54 0 013.37-1.91l-.82-4.14-10.01 10.05 12.56 2.91-.81-4.13z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1775.65 882.46l3.79 16.38 3.12-3.1-2.85-12.32-4.06-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1776.17 899.37l-3.55 14.3-2.05-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1785.62 918.36l.81.19 3.25-3.25-.8-.2-3.26 3.26zm-1.82-.43l.8.2 3.26-3.26-.81-.2-3.25 3.26zm-1.83-.43l.8.2 3.26-3.26-.8-.19-3.26 3.26zm-1.82-.42l.8.18 3.25-3.25-.8-.19-3.25 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.19-3.26 3.26zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1804.73 920.58l-9.37-2.2.47 2.39 7.05 1.66 1.85-1.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1790.44 917.22l-1.84 1.84 7.22 1.7-.47-2.38-4.91-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1767.38 885.19l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42zm2.21-2.21l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1783.95 889.66l-1.84-7.82 4.41-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1783.7 865.46l2.82 11.97 31.44 8.14-3.2-11.4-31.06-8.71zm36.36 27.59l-31.7-7.8 2.91 12.4 32.21 7.59-3.42-12.19z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1817.96 885.57l-31.44-8.13 1.84 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1778.76 879.35l-3.11 3.1 4.06.97-.95-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1791.86 900.62l.82 4.14h.01a7.97 7.97 0 013.2-.41c2.12.23 2.59 1.66 1.07 3.19a8.51 8.51 0 01-3.36 1.9l.81 4.14 10.06-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1377.06 608.15l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip117)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1445.51 652.67l-49.25-49.25-24.62 24.62 49.25 49.25 24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1396.26 652.67v-24.63h-24.62l24.62 24.63zm24.63 24.63l-.01-24.63h-24.62l24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1420.89 652.67h-24.63v-24.63l24.63 24.63zm-49.25-24.63h24.62v-24.62l-24.62 24.62zm73.87 24.63h-24.62v24.62l24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1414.64 640.35a6.07 6.07 0 00-10.35-4.28l8.57 8.57a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1408.57 646.42c1.68 0 3.19-.68 4.29-1.78l-8.57-8.57a6.06 6.06 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip118)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1476.8 699.98a8.41 8.41 0 010-11.9l-5.95-5.96a16.83 16.83 0 1023.81 23.81l-5.95-5.95a8.42 8.42 0 01-11.91 0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1476.8 699.98a8.42 8.42 0 0011.91 0l-11.91-11.9a8.41 8.41 0 000 11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1494.66 682.12a16.83 16.83 0 00-23.81 0l5.95 5.95a8.42 8.42 0 0111.91 11.9l5.95 5.96a16.83 16.83 0 000-23.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1488.71 688.07a8.42 8.42 0 00-11.91 0l11.91 11.9a8.41 8.41 0 000-11.9z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1470.85 705.93l-.59-.59a16 16 0 00-22.64 0l-9.19 9.2 11.91 11.9 20.51-20.51z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1471.43 729.16a16 16 0 000-22.65l-.58-.58-20.51 20.51 11.9 11.9 9.19-9.18z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip119)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1506.76 758.25l7.58 32.2 20.84-20.84-7.58-32.2-20.84 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1540.49 796.6l6.05 1.42 20.84-20.83-32.2-7.58 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1535.18 769.61l5.31 26.99-26.15-6.15 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1537.5 781.4a8.02 8.02 0 01-3.22.41c-2.11-.24-2.59-1.67-1.07-3.19a8.62 8.62 0 013.37-1.91l-.82-4.14-10.01 10.05 12.57 2.92-.82-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1519.56 754.41l3.79 16.38 3.11-3.1-2.85-12.32-4.05-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1520.07 771.32l-3.55 14.3-2.04-8.7 5.59-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1529.52 790.31l.81.2 3.25-3.26-.8-.2-3.26 3.26zm-1.82-.42l.8.18 3.26-3.25-.81-.19-3.25 3.26zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.81.19 3.25-3.26-.8-.19-3.26 3.26zm-1.83-.43l.81.18 3.25-3.25-.8-.19-3.26 3.26z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1548.63 792.53l-9.37-2.2.47 2.39 7.06 1.66 1.84-1.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1534.34 789.17l-1.84 1.84 7.23 1.7-.47-2.38-4.92-1.16z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1511.28 757.14l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42zm2.21-2.21l-1.18 1.17 3.63 15.42 1.18-1.17-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1527.85 761.62l-1.83-7.83 4.4-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1527.6 737.4l2.82 11.99 31.44 8.13-3.19-11.4-31.07-8.71zm36.36 27.6l-31.7-7.79 2.92 12.4 32.2 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1561.86 757.52l-31.44-8.13 1.84 7.82 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1522.67 751.3l-3.11 3.11 4.05.96-.94-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1535.76 772.57l.82 4.14h.01a7.99 7.99 0 013.21-.41c2.11.24 2.59 1.66 1.06 3.19a8.52 8.52 0 01-3.36 1.9l.82 4.14 10.05-10.05-12.61-2.91z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip120)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1620.35 812.73a27.86 27.86 0 00-39.4 0l4.92 4.92a20.9 20.9 0 0129.55 29.55l4.93 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1615.42 847.2a20.9 20.9 0 01-29.55-29.55l-4.92-4.92a27.86 27.86 0 1039.4 39.4l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1610.5 842.28a13.93 13.93 0 01-19.7-19.7l-4.93-4.93a20.9 20.9 0 0029.55 29.55l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1615.42 817.65a20.9 20.9 0 00-29.55 0l4.93 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1610.5 822.58a13.93 13.93 0 00-19.7 0l4.92 4.92a6.97 6.97 0 119.85 9.85l4.93 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1605.57 837.35a6.97 6.97 0 01-9.85-9.85l-4.92-4.92a13.93 13.93 0 0019.7 19.7l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1595.72 827.5a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1605.57 827.5a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip121)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1690.45 890.42l-25.26-25.27 32.75 17.78-7.49 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1665.19 865.15l23.2 32.94 8.95-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1688.68 903.42l-5.02-7.97 5.02-6.82-23.43-23.41-.06-.07-39.3 39.3 30.88 30.88 31.91-31.91z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1665.19 865.15l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1672.12 910.82l-6.26-6.26-.94.94 6.26 6.26.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1655.37 906.14l-10.93-10.93-.94.94 10.93 10.93.94-.94zm-3.75 3.75l-10.93-10.93-.93.93 10.93 10.93.93-.93zm1.88-1.87l-10.93-10.93-.94.93 10.93 10.93.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1660.87 901.42c1.97.35 4.03.11 5.89-.71l-5.18-5.18-.71 5.89zm4.39-12.52l6.65 6.66a10.13 10.13 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1671.91 895.56l-6.65-6.65-3.27 3.27-.41 3.35 5.18 5.18 7.74 7.74 5.15-5.16-7.74-7.73z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1655.5 884.3a10.11 10.11 0 005.37 17.12l.71-5.89-1.47-1.47 1.88-1.88 1.31-10.83c-2.8-.17-5.66.8-7.8 2.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1660.11 894.06l1.47 1.47.41-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1688.68 903.41v-14.78l-7.39 7.4 7.39 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1648.36 915.26l9.66 9.65 1.16-9.65h-10.82z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1667.68 915.26h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1313.04 672.17l511.63 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip122)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1364.25 684.68a27.86 27.86 0 00-39.4 0l4.92 4.92a20.9 20.9 0 0129.55 29.55l4.93 4.93a27.86 27.86 0 000-39.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1359.32 719.15a20.9 20.9 0 01-29.55-29.55l-4.92-4.92a27.86 27.86 0 1039.4 39.4l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1354.4 714.23a13.93 13.93 0 01-19.7-19.7l-4.93-4.93a20.9 20.9 0 1029.55 29.55l-4.92-4.92z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1359.32 689.6a20.9 20.9 0 00-29.55 0l4.93 4.93a13.93 13.93 0 0119.7 19.7l4.92 4.92a20.9 20.9 0 000-29.55z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1354.4 694.53a13.93 13.93 0 00-19.7 0l4.92 4.92a6.97 6.97 0 019.85 9.85l4.93 4.93a13.93 13.93 0 000-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1349.47 709.3a6.97 6.97 0 01-9.85-9.85l-4.92-4.92a13.93 13.93 0 0019.7 19.7l-4.93-4.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1339.62 699.45a6.97 6.97 0 009.85 9.85l-9.85-9.85z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1349.47 699.45a6.97 6.97 0 00-9.85 0l9.85 9.85a6.97 6.97 0 000-9.85z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip123)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1434.36 762.37l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1409.09 737.1l23.21 32.94 8.94-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1432.59 775.37l-5.02-7.97 5.02-6.82-23.44-23.41-.06-.07-39.3 39.3 30.88 30.88 31.92-31.91z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1409.09 737.1l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1416.02 782.77l-6.26-6.26-.94.94 6.27 6.26.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1399.27 778.1l-10.93-10.94-.94.94 10.93 10.93.94-.94zm-3.74 3.74l-10.93-10.93-.94.93 10.93 10.93.94-.93zm1.87-1.87l-10.93-10.93-.94.93 10.93 10.93.94-.93z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1404.77 773.37c1.98.35 4.03.11 5.89-.71l-5.17-5.18-.72 5.89zm4.39-12.51l6.65 6.65a10.12 10.12 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1415.81 767.5l-6.65-6.64-3.27 3.27-.4 3.35 5.17 5.18 7.74 7.74 5.15-5.15-7.74-7.74z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1399.4 756.25a10.13 10.13 0 005.37 17.12l.72-5.89-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.17-5.66.8-7.8 2.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1404.01 766.01l1.48 1.48.4-3.36-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1432.59 775.37v-14.79l-7.4 7.4 7.4 7.39z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1392.27 787.21l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1411.58 787.21h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip124)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1460.29 810.26l-14.78 4.93 14.78 14.77v-19.7z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1489.84 857.05l1.23-1.23-11.09-11.08h-2.46l12.32 12.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1473.83 841.05l3.69 3.69h2.47l-4.93-4.93-1.23 1.24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1487.37 859.51l1.23-1.23-13.54-13.54h-2.46l14.77 14.77z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1471.37 843.5l1.23 1.24h2.46l-2.46-2.46-1.23 1.23z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1435.66 820.11l24.63 24.63v-14.78l-14.78-14.77 14.78-4.93V795.5l-24.63 24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1460.29 795.49v14.77l3.69-1.23-3.69 11.08 11.08-3.69-6.16 18.47-4.92-4.93v14.78l24.62-24.63-24.62-24.62z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1493.06 852.89l8.15-8.15h-16.3l8.15 8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1493.06 836.59l-8.15 8.15h16.3l-8.15-8.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1501.21 844.74l-8.15 8.15-8.15-8.15h-4.92l11.08 11.08-1.23 1.23-12.32-12.31h-2.46l13.54 13.54-1.23 1.23-14.77-14.77h-12.31l24.62 24.62 24.62-24.62h-8.32z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1460.29 844.74h12.31l-1.23-1.23 1.23-1.23 2.46 2.46h2.46l-3.69-3.7 1.23-1.23 4.93 4.93h4.92l8.15-8.15 8.15 8.15h8.32l-24.62-24.63-24.62 24.63z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip125)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1539.87 908.8l25.17-25.18-31.36.18-25.17 25.17 31.36-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1564.87 915l.17-31.38-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.12l.17-31.37-8.04 8.04-.17 31.37 8.04-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1525.39 892.08l-8.84 8.85 31.36-.18 8.84-8.84-31.36.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1556.58 923.27l-8.84 8.84.17-31.36 8.84-8.84-.17 31.36zm-31.19-31.19l-8.84 8.85.17-31.36 8.84-8.84-.17 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1533.68 883.8l.17-31.36-8.29 8.29-.17 31.35 8.29-8.28zm-25-6.2l-.17 31.37 8.04-8.04.17-31.36-8.04 8.03z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1249.01 736.2l511.64 511.63"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip126)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1283.77 780.74l25.17-25.17-31.36.18-25.17 25.17 31.36-.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1308.77 786.94l.17-31.37-8.28 8.29-.18 31.36 8.29-8.28zm-17.13 17.13l.17-31.37-8.04 8.04-.17 31.37 8.04-8.04z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1269.29 764.03l-8.84 8.85 31.36-.18 8.85-8.84-31.37.17z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1300.48 795.22l-8.84 8.84.17-31.36 8.85-8.84-.18 31.36zm-31.19-31.19l-8.84 8.85.17-31.36 8.84-8.84-.17 31.35z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1277.58 755.75l.17-31.36-8.29 8.29-.17 31.35 8.29-8.28zm-25-6.2l-.17 31.37 8.04-8.04.17-31.36-8.04 8.03z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip127)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1377.22 823.24l-29.29-29.29-37.33 37.34 29.29 29.28 37.33-37.33z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1339.89 860.57l8.04-66.62-37.33 37.34 29.29 29.28z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1349 804.07l29.29 29.3-30.46 30.46-6.93-6.93-6.87 6.87-1.44-1.44-20.92-20.92 37.33-37.34z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1343.67 842.53l-12.6-12.6 12.54-12.55 3.12 3.11 2.27-16.42-37.33 37.34 20.92 20.92 1.44 1.44 7.72-1.33 1.92-19.91zm-9.05 5.36l-10.76-10.76.87-.87 10.76 10.75-.87.88zm1.74-1.75l-10.76-10.75.87-.88 10.76 10.76-.87.87zm1.74-1.74l-10.76-10.76.87-.87 10.76 10.76-.87.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1358.52 821.43l.11 25.45-12.78-12.78 12.67-12.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1343.72 842.58l12.55-12.55-12.66-12.65-12.54 12.54 12.6 12.6.05.06zm-.71 14.22a5.23 5.23 0 005.04-5.46 5.33 5.33 0 00-4.73-5.04l-1.02 10.48c.23.02.47.03.71.02z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1337.51 851.73a5.33 5.33 0 004.79 5.05l1.02-10.48a5.22 5.22 0 00-5.81 5.43zm1.46-8.2l-10.75-10.76-.88.88 10.76 10.75.87-.87zm-1.74 1.74l-10.76-10.75-.87.87 10.76 10.75.87-.87zm-1.74 1.75l-10.76-10.76-.87.87 10.76 10.76.87-.87zm-4.42-17.1l12.6 12.6 3.06-22.03-3.12-3.11-12.54 12.54zm9.83 26.98l-6.87 6.87 13.8.06-6.93-6.93z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip128)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1445.51 908.76l-49.25-49.25-24.62 24.63 49.25 49.25 24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1396.26 908.76v-24.62h-24.62l24.62 24.62zm24.63 24.63l-.01-24.63h-24.62l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1420.89 908.76h-24.63v-24.62l24.63 24.62zm-49.25-24.62h24.62V859.5l-24.62 24.63zm73.87 24.62h-24.62v24.63l24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1414.64 896.45a6.07 6.07 0 00-10.35-4.29l8.57 8.58a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1408.57 902.51c1.68 0 3.19-.67 4.29-1.77l-8.57-8.58a6.06 6.06 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1184.99 800.22l511.64 511.64"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip129)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1186.64 822.27l7.58 32.2 20.84-20.84-7.58-32.2-20.84 20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1220.37 860.63l6.05 1.42 20.84-20.84-32.2-7.57 5.31 26.99z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1215.06 833.63l5.31 27-26.15-6.16 20.84-20.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1217.38 845.42a8.04 8.04 0 01-3.22.42c-2.12-.24-2.59-1.67-1.07-3.2a8.54 8.54 0 013.37-1.9l-.82-4.15-10.01 10.05 12.56 2.92-.81-4.14z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1199.43 818.43l3.79 16.39 3.12-3.11-2.85-12.32-4.06-.96z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1199.95 835.35l-3.55 14.29-2.05-8.7 5.6-5.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1209.4 854.34l.8.18 3.26-3.25-.8-.19-3.26 3.26zm-1.82-.43l.8.19 3.26-3.26-.81-.19-3.25 3.26zm-1.83-.43l.8.19 3.26-3.26-.8-.18-3.26 3.25zm-1.83-.43l.81.19 3.25-3.26-.8-.18-3.26 3.25zm-1.82-.43l.8.19 3.26-3.25-.8-.2-3.26 3.26zm-1.83-.42l.8.18 3.26-3.26-.8-.18-3.26 3.25z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1228.51 856.56l-9.37-2.2.47 2.38 7.05 1.66 1.85-1.84z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1214.22 853.2l-1.84 1.84 7.22 1.7-.47-2.39-4.91-1.15z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1191.15 821.16l-1.17 1.18 3.63 15.42 1.18-1.18-3.64-15.42zm2.22-2.21l-1.18 1.17 3.63 15.43 1.18-1.18-3.63-15.42z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1207.73 825.64l-1.84-7.82 4.41-4.4 1.84 7.82-4.41 4.4z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1207.48 801.43l2.82 11.98 31.44 8.13-3.2-11.4-31.06-8.7zm36.36 27.6l-31.7-7.8 2.91 12.4 32.21 7.58-3.42-12.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1241.74 821.54l-31.44-8.13 1.84 7.83 31.7 7.8-2.1-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1202.54 815.32l-3.11 3.11 4.06.96-.95-4.07z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1215.64 836.6l.82 4.13h.01a8 8 0 013.2-.41c2.12.24 2.59 1.67 1.07 3.2a8.52 8.52 0 01-3.36 1.9l.81 4.14 10.06-10.06-12.61-2.9z"
  })), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip130)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1306.31 890.42l-25.27-25.27 32.75 17.78-7.48 7.49z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1281.04 865.15l23.21 32.94 8.94-8.94-32.15-24z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1304.54 903.42l-5.02-7.97 5.02-6.82-23.44-23.41-.06-.07-39.3 39.3 30.88 30.88 31.92-31.91z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1281.04 865.15l-39.3 39.3 30.88 30.88 8.42-70.18z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1287.97 910.82l-6.26-6.26-.94.94 6.27 6.26.93-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1271.22 906.14l-10.93-10.93-.93.94 10.93 10.93.93-.94zm-3.74 3.75l-10.93-10.93-.94.93 10.93 10.93.94-.93zm1.87-1.88l-10.93-10.92-.94.93 10.93 10.93.94-.94z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1276.72 901.42c1.98.35 4.03.11 5.89-.71l-5.17-5.18-.72 5.89zm4.39-12.52l6.65 6.66a10.12 10.12 0 00-8.61-14.2l-1.31 10.82 3.27-3.27z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1287.76 895.56l-6.65-6.65-3.27 3.27-.4 3.35 5.17 5.18 7.74 7.74 5.15-5.16-7.74-7.73z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1271.35 884.3a10.13 10.13 0 005.37 17.12l.72-5.89-1.48-1.47 1.88-1.88 1.31-10.83c-2.8-.17-5.66.8-7.8 2.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1275.96 894.06l1.48 1.47.4-3.35-1.88 1.88z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1304.54 903.41v-14.78l-7.4 7.4 7.4 7.38z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#B8C1DC",
    d: "M1264.22 915.26l9.65 9.65 1.16-9.65h-10.81z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1283.53 915.26h-8.5l-1.16 9.65 9.66-9.65z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1120.96 864.25l511.64 511.63"
  }), /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#desktop-hero_svg__clip131)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#F7F7F7",
    d: "M1189.41 908.76l-49.25-49.25-24.62 24.63 49.25 49.25 24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C3CFE6",
    d: "M1140.16 908.76v-24.62h-24.62l24.62 24.62zm24.63 24.63v-24.63h-24.63l24.63 24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#D9DFEC",
    d: "M1164.79 908.76h-24.63v-24.62l24.63 24.62zm-49.25-24.62h24.62V859.5l-24.62 24.63zm73.87 24.62h-24.62v24.63l24.62-24.63z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F9EFF",
    d: "M1158.54 896.45a6.07 6.07 0 00-10.35-4.29l8.57 8.58a6.04 6.04 0 001.78-4.29z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5588EB",
    d: "M1152.47 902.51c1.68 0 3.19-.68 4.29-1.77l-8.57-8.58a6.07 6.07 0 004.28 10.35z"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#D9DFEC",
    strokeDasharray: "1.74 1.74",
    strokeLinecap: "round",
    strokeWidth: 0.44,
    d: "M1056.94 928.27l511.64 511.64"
  }))), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip0"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h2049v960H0z"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip1"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 910.58 2248.3)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip2"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 846.55 2093.73)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip3"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 801.28 2203.03)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip4"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 782.54 1939.17)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip5"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 737.26 2048.46)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip6"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 691.99 2157.75)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip7"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 718.51 1784.6)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip8"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 673.23 1893.9)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip9"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 627.97 2003.2)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip10"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 582.7 2112.49)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip11"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 654.49 1630.03)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip12"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 609.21 1739.32)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip13"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 563.94 1848.63)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip14"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 518.67 1957.92)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip15"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 473.4 2067.22)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip16"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 590.46 1475.46)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip17"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 545.19 1584.75)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip18"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 499.92 1694.06)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip19"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 454.64 1803.35)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip20"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 409.37 1912.65)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip21"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 364.1 2021.94)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip22"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 526.44 1320.89)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip23"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 481.16 1430.18)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 435.9 1539.49)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip25"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 390.62 1648.78)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip26"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 345.35 1758.08)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip27"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 300.07 1867.37)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip28"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 254.8 1976.67)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip29"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 974.43 2403.3)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip30"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 865.13 2358.03)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip31"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 819.86 2467.32)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip32"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 755.83 2312.75)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip33"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 710.56 2422.05)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip34"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 665.3 2531.34)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip35"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 646.54 2267.48)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip36"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 601.27 2376.77)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip37"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 556 2486.08)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip38"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 510.72 2595.37)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip39"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 537.25 2222.22)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip40"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 491.97 2331.5)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip41"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 446.7 2440.8)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip42"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 401.43 2550.1)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip43"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 356.15 2659.4)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip44"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 427.95 2176.94)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip45"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 382.68 2286.24)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip46"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 337.4 2395.53)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip47"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 292.13 2504.82)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip48"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 246.86 2614.13)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip49"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 201.58 2723.42)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip50"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 318.65 2131.67)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip51"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 273.38 2240.96)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip52"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 228.1 2350.27)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip53"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 182.83 2459.56)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip54"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 137.56 2568.85)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip55"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 92.3 2678.15)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip56"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 47.02 2787.44)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip57"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 209.35 2086.4)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip58"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 164.08 2195.7)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip59"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 118.8 2304.99)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip60"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 73.54 2414.29)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip61"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 28.26 2523.58)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip62"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -17.01 2632.87)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip63"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -62.28 2742.18)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip64"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 398.39 1011.75)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip65"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 334.36 857.18)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip66"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 289.09 966.48)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip67"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 462.41 1166.32)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip68"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 417.14 1275.62)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip69"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 371.87 1384.92)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip70"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 326.6 1494.2)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip71"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 281.32 1603.5)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip72"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 236.05 1712.8)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip73"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 190.78 1822.1)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip74"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 145.5 1931.4)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip75"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 353.12 1121.05)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip76"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 307.84 1230.35)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip77"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 262.57 1339.65)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip78"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 217.3 1448.94)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip79"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 172.02 1558.23)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip80"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 126.75 1667.53)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip81"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 81.48 1776.83)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip82"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 36.21 1886.13)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip83"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 243.82 1075.78)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip84"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 198.55 1185.07)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip85"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 153.27 1294.37)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip86"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 108 1403.67)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip87"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 62.73 1512.96)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip88"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 17.45 1622.26)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip89"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -27.81 1731.56)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip90"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -73.09 1840.85)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip91"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 134.52 1030.5)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip92"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 89.25 1139.8)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip93"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 43.98 1249.1)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip94"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -1.3 1358.4)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip95"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -46.57 1467.7)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip96"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -91.84 1576.99)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip97"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -137.11 1686.28)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip98"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -182.38 1795.58)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip99"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -65.32 1203.83)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip100"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -110.6 1313.12)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip101"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -155.86 1422.42)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip102"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -201.13 1531.72)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip103"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -246.4 1641.01)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip104"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -291.68 1750.3)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip105"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -265.16 1377.15)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip106"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -310.43 1486.44)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip107"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -355.7 1595.75)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip108"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -400.98 1705.04)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip109"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -465 1550.47)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip110"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -510.27 1659.77)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip111"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 100.06 2041.13)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip112"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 54.78 2150.42)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip113"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 9.51 2259.72)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip114"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -35.76 2369.01)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip115"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -81.03 2478.31)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip116"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -126.3 2587.6)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip117"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -9.24 1995.85)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip118"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -54.51 2105.15)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip119"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -99.78 2214.44)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip120"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -145.05 2323.74)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip121"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -190.33 2433.04)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip122"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -118.54 1950.58)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip123"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -163.8 2059.87)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip124"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -209.08 2169.17)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip125"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -254.35 2278.47)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip126"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -227.83 1905.3)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip127"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -273.1 2014.6)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip128"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -318.38 2123.9)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip129"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -337.13 1860.03)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip130"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -382.4 1969.33)"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "desktop-hero_svg__clip131"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h69.65v69.65H0z",
    transform: "rotate(45 -446.42 1814.77)"
  })))));
}

/* harmony default export */ var desktop_hero = (SvgDesktopHero);
// EXTERNAL MODULE: ./src/components/quoteButton.tsx
var quoteButton = __webpack_require__(10568);
;// CONCATENATED MODULE: ./src/pages/index.tsx



function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const DesktopHero = (0,theme/* styled */.zo)(desktop_hero, {
  position: 'absolute',
  top: '0',
  height: '1024px',
  display: 'none',
  '@l': {
    display: 'block'
  }
});

const LandingPageContent = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Layout */.A, {
    canonicalPath: "https://www.aomail.com.au" //@ts-ignore
    ,
    metaData: data._seoMetaTags,
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      as: "section",
      css: {
        backgroundColor: '$N10',
        position: 'relative',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
        css: {
          pt: '$7',
          pb: '$8',
          '@m': {
            minHeight: '680px'
          },
          '@l': {
            display: 'flex',
            py: '$7'
          }
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(DesktopHero, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* TextHolder */.L5, {
          css: {
            '@m': {
              mr: '16.67%'
            },
            '@l': {
              mr: '33.3%'
            },
            '@xl': {
              mr: '50%'
            }
          },
          children: [/*#__PURE__*/jsx_runtime.jsx(article_summary/* ArticleSummary */.S, {
            title: data.mainHeading,
            summary: data.heroParagraph.value
          }), /*#__PURE__*/jsx_runtime.jsx(quoteButton/* QuoteButton */.n, {
            css: {
              mt: '$6',
              width: '$11',
              minHeight: '$5',
              '@m': {
                width: '$12'
              }
            }
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      css: {
        mb: '-$6'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(ArticleListCard, {
        data: data.cardData,
        css: {
          top: '-$7',
          '@l': {
            top: '-$6'
          }
        }
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        children: /*#__PURE__*/jsx_runtime.jsx(ModularContent //@ts-ignore
        , {
          data: data.contentSections
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      css: {
        my: '$5'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
        children: [/*#__PURE__*/jsx_runtime.jsx(quote_cta.QuoteCta, {
          css: {
            mb: '$4'
          },
          paragraph: "Get a competitive quote for your next job now. Our friendly team of experts are standing by to complete your project with ease and to make the process as seamless as possible."
        }), /*#__PURE__*/jsx_runtime.jsx(client_logo_banner/* ClientLogoBanner */.Y, {})]
      })
    })]
  });
};

async function getStaticProps({
  preview = false
}) {
  const {
    homepage
  } = await (0,datocms/* request */.W)({
    query: 'GetHomePage',
    preview,
    variables: {}
  });

  const data = pages_objectSpread(pages_objectSpread({}, homepage), {}, {
    cardData: homepage.serviceCards.map(card => ({
      title: card.title,
      image: card.image.responsiveImage,
      description: card.description,
      link: card.linkTarget.pageSlug,
      linkText: card.linkText
    }))
  });

  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var pages = (LandingPageContent);

/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.xu; },
/* harmony export */   "i$": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.i$; },
/* harmony export */   "sg": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.fh; },
/* harmony export */   "kC": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.kC; },
/* harmony export */   "Oe": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.Oe; },
/* harmony export */   "L5": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.L5; },
/* harmony export */   "W2": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W; },
/* harmony export */   "TR": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "FE": function() { return /* reexport safe */ _pageWrapper__WEBPACK_IMPORTED_MODULE_4__.F; },
/* harmony export */   "eu": function() { return /* reexport safe */ _links__WEBPACK_IMPORTED_MODULE_5__.eu; },
/* harmony export */   "vs": function() { return /* reexport safe */ _contentWrapper__WEBPACK_IMPORTED_MODULE_6__.v; },
/* harmony export */   "DY": function() { return /* reexport safe */ _covidSafeBanner__WEBPACK_IMPORTED_MODULE_7__.D; },
/* harmony export */   "HC": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_9__.ListItem; },
/* harmony export */   "QI": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_9__.UnorderedList; },
/* harmony export */   "EU": function() { return /* reexport safe */ _radioButton__WEBPACK_IMPORTED_MODULE_10__.E; },
/* harmony export */   "II": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.AZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_11__.Kx; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_12__.X; },
/* harmony export */   "ko": function() { return /* reexport safe */ _progressBar__WEBPACK_IMPORTED_MODULE_13__.k; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_15__.Z; },
/* harmony export */   "VP": function() { return /* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_15__.V; },
/* harmony export */   "WX": function() { return /* reexport safe */ _fullWidthFeatureContainer__WEBPACK_IMPORTED_MODULE_16__.W; },
/* harmony export */   "Oo": function() { return /* reexport safe */ _breadcrumbs__WEBPACK_IMPORTED_MODULE_17__.O; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _spacer__WEBPACK_IMPORTED_MODULE_18__.L; },
/* harmony export */   "OC": function() { return /* reexport safe */ _border__WEBPACK_IMPORTED_MODULE_19__.O; },
/* harmony export */   "Ys": function() { return /* reexport safe */ _listCardWrapper__WEBPACK_IMPORTED_MODULE_20__.Y; },
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

/***/ 63239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.iv; },
/* harmony export */   "wU": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.wU; },
/* harmony export */   "zo": function() { return /* reexport safe */ _stitches_config__WEBPACK_IMPORTED_MODULE_0__.zo; },
/* harmony export */   "X6": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.X6; },
/* harmony export */   "XJ": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.XJ; },
/* harmony export */   "aC": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.aC; },
/* harmony export */   "k8": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.k8; },
/* harmony export */   "nv": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.nv; },
/* harmony export */   "Dx": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.Dx; },
/* harmony export */   "W0": function() { return /* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_2__.W; },
/* harmony export */   "s1": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Facebook; },
/* harmony export */   "yh": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.LinkedIn; },
/* harmony export */   "LP": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.Phone; },
/* harmony export */   "IU": function() { return /* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_3__.createIcon; },
/* harmony export */   "xu": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.xu; },
/* harmony export */   "i$": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.i$; },
/* harmony export */   "Zb": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Zb; },
/* harmony export */   "XZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.XZ; },
/* harmony export */   "wY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.wY; },
/* harmony export */   "sg": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.fh; },
/* harmony export */   "W2": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.W2; },
/* harmony export */   "vs": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.vs; },
/* harmony export */   "DY": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.DY; },
/* harmony export */   "VP": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.VP; },
/* harmony export */   "kC": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.kC; },
/* harmony export */   "WX": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.WX; },
/* harmony export */   "II": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.II; },
/* harmony export */   "AZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.AZ; },
/* harmony export */   "HC": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.HC; },
/* harmony export */   "TR": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.TR; },
/* harmony export */   "EU": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.EU; },
/* harmony export */   "LZ": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.LZ; },
/* harmony export */   "Kx": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.Kx; },
/* harmony export */   "L5": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.L5; },
/* harmony export */   "QI": function() { return /* reexport safe */ _atoms__WEBPACK_IMPORTED_MODULE_4__.QI; },
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

/***/ 27727:
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

      const compMod = __webpack_require__(96166)

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
        page: "/",
        buildId: "5QM5N7MyeaFl-_82uHmZ2",
        escapedBuildId: "5QM5N7MyeaFl\-_82uHmZ2",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"f42222999b849f86cc87e7417a938051",previewModeSigningKey:"2e7f3773ced62b40245dfeb5f8f1cd4e7bf9e415939ba9b4e028fecfcfeba52d",previewModeEncryptionKey:"2e5354f0133facdf3c2efe566b23365a4bb13bd3f7f400b187d7866b68e3f540"}
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7057,4475,168,7109,7099,6071,5026,3735,5172,1428,3473,5252,9566,5320,7615,6895,2444,5429,1801,3902,2749], function() { return __webpack_require__(27727); })
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
/******/ 			5405: 1,
/******/ 			9881: 1
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
/******/ 			__webpack_require__.e(7099);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(5026);
/******/ 			__webpack_require__.e(3735);
/******/ 			__webpack_require__.e(5172);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(3473);
/******/ 			__webpack_require__.e(5252);
/******/ 			__webpack_require__.e(9566);
/******/ 			__webpack_require__.e(5320);
/******/ 			__webpack_require__.e(7615);
/******/ 			__webpack_require__.e(6895);
/******/ 			__webpack_require__.e(2444);
/******/ 			__webpack_require__.e(5429);
/******/ 			__webpack_require__.e(1801);
/******/ 			__webpack_require__.e(3902);
/******/ 			__webpack_require__.e(2749);
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