/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 36330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dr": function() { return /* binding */ structuredTextRules; }
/* harmony export */ });
/* unused harmony exports renderInlineRecordRules, renderLinkToRules, StructuredText */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85444);
/* harmony import */ var datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6354);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datocms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38135);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BlockQuote = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 98102)).then(res => res.BlockQuote), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(98102)],
    modules: ["../lib/datocms/structuredText.tsx -> " + '@theme/atoms/blockquote']
  }
});
const UnorderedList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14559)).then(res => res.UnorderedList), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(14559)],
    modules: ["../lib/datocms/structuredText.tsx -> " + '@theme/atoms/lists']
  }
});
const OrderedList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14559)).then(res => res.OrderedList), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(14559)],
    modules: ["../lib/datocms/structuredText.tsx -> " + '@theme/atoms/lists']
  }
});
const ListItem = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14559)).then(res => res.ListItem), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(14559)],
    modules: ["../lib/datocms/structuredText.tsx -> " + '@theme/atoms/lists']
  }
});

const setLevel = (start = 1, level) => {
  const bump = start - 1;
  if (level + bump >= 6) return 6;
  return level + bump;
};

function isStrikethroughGuard(node) {
  var _node$marks;

  return node.type === 'span' && !!((_node$marks = node.marks) !== null && _node$marks !== void 0 && _node$marks.includes('strikethrough'));
}

const defaults = {
  isHeading: (_ref = {}) => {
    let {
      headingProps: {
        fromSize = 1,
        fromLevel = 1
      } = {}
    } = _ref,
        props = _objectWithoutProperties(_ref.headingProps, ["fromSize", "fromLevel"]);

    return (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__.isHeading, ({
      node,
      children,
      key
    }) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Heading */ .X6, _objectSpread({
        level: setLevel(fromSize, node.level),
        as: `h${setLevel(fromLevel, node.level)}`,
        children: children
      }, props), key);
    });
  },
  isParagraph: (_ref2) => {
    let {
      paragraphProps: {
        size
      } = {
        size: 'm'
      }
    } = _ref2,
        props = _objectWithoutProperties(_ref2.paragraphProps, ["size"]);

    return (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__.isParagraph, ({
      children,
      key
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme__WEBPACK_IMPORTED_MODULE_3__/* .Paragraph */ .nv, _objectSpread({
      children: children,
      size: size
    }, props), key));
  },
  isBlockquote: ({
    blockquoteProps
  }) => (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__.isBlockquote, ({
    children,
    key
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockQuote, _objectSpread({
    children: children
  }, blockquoteProps), key)),
  isList: ({
    listProps
  }) => (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__.isList, ({
    node,
    children,
    key
  }) => {
    if (node.style === 'numbered') {
      //@ts-ignore - expects component but we are still rendering dast tree
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderedList, _objectSpread({
        children: children
      }, listProps), key);
    } //@ts-ignore - expects component but we are still rendering dast tree


    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnorderedList, _objectSpread({
      children: children
    }, listProps), key);
  }),
  isListItem: ({
    listItemProps
  }) => (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(datocms_structured_text_utils__WEBPACK_IMPORTED_MODULE_5__.isListItem, ({
    key,
    children
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, _objectSpread({
    children: children
  }, listItemProps), key)),
  isStrikethrough: ({
    strikethroughProps
  }) => (0,react_datocms__WEBPACK_IMPORTED_MODULE_4__.renderRule)(isStrikethroughGuard, ({
    children,
    key
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("s", _objectSpread({
    children: children
  }, strikethroughProps), key))
  /*isLink: ({ linkProps }) =>
    renderRule(isLinkGuard, ({ node, key, children }) => {}),*/

};

const isStrikethrough = ({
  strikethroughProps
} = {
  strikethroughProps: {}
}) => renderRule(isStrikethroughGuard, ({
  children,
  key
}) => /*#__PURE__*/_jsx("s", _objectSpread({
  children: children
}, strikethroughProps), key));

const isCode = ({
  codeProps
}) => renderRule(isCodeGuard, ({
  key,
  children,
  node
}) => /*#__PURE__*/_jsx("code", _objectSpread({
  children: children
}, codeProps), key));

const isBlock = props => renderRule(isBlockGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isInlineItem = props => renderRule(isInlineItemGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isThematicBreak = props => renderRule(isThematicBreakGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isInlineNode = props => renderRule(isInlineNodeGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isItemLink = props => renderRule(isItemLinkGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isLink = props => renderRule(isLinkGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isRoot = props => renderRule(isRootGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));

const isSpan = props => renderRule(isSpanGuard, node => /*#__PURE__*/_jsx(_Fragment, {}));
/**function (node: Node): node is Span {
      return node.type === 'span' && !!node.marks?.includes('strikethrough')
    },
    ({ node, key, children }) => {
      const markLookup = {
        underline: underlineClass,
        strikethrough: strikethroughClass,
      }
      const classNames: string = node.marks.reduce(
        (acc, m) => (markLookup[m] ? acc.concat(' ' + markLookup[m]) : acc),
        ''
      )
      return (
        <s aria-hidden={true} className={classNames} key={key}>
          {node.value || children}
        </s>
      )
    }
  ), */


const structuredTextRules = (_ref3 = {}) => {
  let {
    ruleOverrides
  } = _ref3,
      propConfig = _objectWithoutProperties(_ref3, ["ruleOverrides"]);

  return Object.values(Object.assign({}, defaults, ruleOverrides)).map(k => k(propConfig));
};
const renderInlineRecordRules = node => {
  return /*#__PURE__*/_jsx("div", {});
};
const renderLinkToRules = node => {
  return /*#__PURE__*/_jsx("div", {});
};
const StructuredText = (_ref4) => {
  let {
    config,
    data
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["config", "data"]);

  return /*#__PURE__*/_jsx(ConfigurableText, _objectSpread({
    renderInlineRecord: renderInlineRecordRules,
    customRules: structuredTextRules(config),
    renderLinkToRecord: renderLinkToRules,
    data: data
  }, props));
};

/***/ }),

/***/ 62878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ConfiguredText": function() { return /* binding */ ConfiguredText; },
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
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./src/lib/datocms/structuredText.tsx
var structuredText = __webpack_require__(36330);
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
// EXTERNAL MODULE: ./src/components/quoteButton.tsx
var quoteButton = __webpack_require__(10568);
;// CONCATENATED MODULE: ./src/pages/[pageSlug].tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Printer = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 8990).then(__webpack_require__.bind(__webpack_require__, 38990)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(38990)],
    modules: ["[pageSlug].tsx -> " + '../svg/printer.svg']
  }
});
const Inserter = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 3226).then(__webpack_require__.bind(__webpack_require__, 3226)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3226)],
    modules: ["[pageSlug].tsx -> " + '../svg/inserter.svg']
  }
});
const heroGraphics = {
  printing: (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 9189).then(__webpack_require__.bind(__webpack_require__, 89189)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(89189)],
      modules: ["[pageSlug].tsx -> " + '../svg/printHero.svg']
    }
  }),
  'direct-mail': (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 5225).then(__webpack_require__.bind(__webpack_require__, 25225)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(25225)],
      modules: ["[pageSlug].tsx -> " + '../svg/directMailHero.svg']
    }
  }),
  'package-fulfilment': (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 1985).then(__webpack_require__.bind(__webpack_require__, 71985)), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(71985)],
      modules: ["[pageSlug].tsx -> " + '../svg/fulfilmentHero.svg']
    }
  })
};
const HeroText = (0,theme/* styled */.zo)('div', {
  willChange: 'opacity',
  '@s': {
    pr: '$2',
    pl: '$2',
    pt: '$3',
    pb: '$6'
  },
  '@m': {
    pr: '$2',
    pl: '$3',
    pt: '$6',
    width: '75%'
  },
  '@l': {
    pr: '$2',
    pl: '$4',
    width: '50%'
  },
  '@xl': {
    pr: '$3',
    pl: '$4'
  }
});
const ConfiguredText = ({
  data,
  size
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText, {
    data: data //@ts-expect-error
    ,
    renderBlock: structuredTextBlockRules,
    customRules: (0,structuredText/* structuredTextRules */.dr)({
      headingProps: {
        color: 'primary'
      },
      paragraphProps: {
        size
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
    })
  });
};

const ServicePage = ({
  data,
  pageSlug
}) => {
  const Illustration = props => {
    if (data.illustration === 'inserter') {
      return /*#__PURE__*/jsx_runtime.jsx(Inserter, _objectSpread({}, props));
    }

    if (data.illustration === 'printer') {
      return /*#__PURE__*/jsx_runtime.jsx(Printer, _objectSpread({}, props));
    }

    return null;
  };

  const beforeFooter = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      css: {
        mb: '$5'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(client_logo_banner/* ClientLogoBanner */.Y, {})
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

  const HeroSvg = (0,theme/* styled */.zo)(heroGraphics[pageSlug], {
    position: 'absolute',
    bottom: '-$7',
    minHeight: '600px',
    left: '50%',
    display: 'none',
    '@l': {
      display: 'block',
      height: '80%'
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Layout */.A, {
    beforeFooter: beforeFooter //@ts-ignore
    ,
    metaData: data._seoMetaTags,
    canonicalPath: data.canonicalPath,
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      as: "section",
      css: {
        backgroundColor: '$N10',
        position: 'relative',
        overflow: 'hidden',
        '@m:': {
          minHeight: '640px'
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
        css: {
          pt: '$7'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeroText, {
          children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Title */.Dx, {
            css: {
              marginTop: '0',
              '@m': {
                mt: '$2'
              },
              '@l': {
                mt: '$4'
              }
            },
            children: data.mainHeading
          }), /*#__PURE__*/jsx_runtime.jsx(theme/* Spacer */.LZ, {}), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
            css: {
              maxWidth: '60ch',
              mt: '$4'
            },
            children: /*#__PURE__*/jsx_runtime.jsx(ConfiguredText, {
              data: data.heroParagraph,
              size: "m"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(quoteButton/* QuoteButton */.n, {
            css: {
              my: '$6',
              width: '$11',
              minHeight: '$5',
              '@m': {
                width: '$12'
              }
            }
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(HeroSvg, {})]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
        children: [/*#__PURE__*/jsx_runtime.jsx(ModularContent //@ts-ignore
        , {
          data: data.leftRightParagraphs
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* TextHolder */.L5, {
          css: {
            '@initial': {
              mt: '$7'
            },
            '@l': {
              mx: '16.67%'
            }
          },
          children: /*#__PURE__*/jsx_runtime.jsx(cjs.StructuredText //@ts-ignore
          , {
            data: data.pageContent,
            customRules: (0,structuredText/* structuredTextRules */.dr)({
              paragraphProps: {
                size: 'm'
              }
            }) //@ts-expect-error
            ,
            renderBlock: structuredTextBlockRules
          })
        }), /*#__PURE__*/jsx_runtime.jsx(theme/* BreakoutTextHolder */.i$, {
          css: {
            mr: '16.67%',
            mt: '$6',
            overflow: 'hidden'
          },
          children: /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
            css: {
              position: 'relative',
              bottom: '-$3'
            },
            children: /*#__PURE__*/jsx_runtime.jsx(Illustration, {})
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(ModularContent //@ts-ignore
      , {
        data: data.modularContent
      })]
    })]
  });
};

/* harmony default export */ var _pageSlug_ = (ServicePage);
async function getStaticPaths() {
  //@ts-ignore
  const allServicePages = await (0,datocms/* request */.W)({
    query: 'GetServicePages'
  });
  return {
    paths: allServicePages.allServices.map(({
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
    service
  } = await (0,datocms/* request */.W)({
    query: 'GetServicePage',
    preview,
    variables: {
      pageSlug: params.pageSlug
    }
  });
  return {
    props: {
      data: _objectSpread({}, service),
      pageSlug: params.pageSlug
    }
  };
}

/***/ }),

/***/ 34176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.xu; },
/* harmony export */   "i$": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.i$; },
/* harmony export */   "sg": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.sg; },
/* harmony export */   "fh": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.fh; },
/* harmony export */   "kC": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.kC; },
/* harmony export */   "L5": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.L5; },
/* harmony export */   "W2": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W; },
/* harmony export */   "TR": function() { return /* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_3__.T; },
/* harmony export */   "FE": function() { return /* reexport safe */ _pageWrapper__WEBPACK_IMPORTED_MODULE_4__.F; },
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

/***/ 93079:
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

      const compMod = __webpack_require__(62878)

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
        page: "/[pageSlug]",
        buildId: "5QM5N7MyeaFl-_82uHmZ2",
        escapedBuildId: "5QM5N7MyeaFl\-_82uHmZ2",
        basePath: "",
        pageIsDynamic: true,
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7057,4475,168,7109,7099,6071,5026,1428,3473,5252,9566,5320,3608,5596,7615,77,2444,5429,1801,6858], function() { return __webpack_require__(93079); })
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
/******/ 			4472: 1,
/******/ 			6330: 1
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
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(3473);
/******/ 			__webpack_require__.e(5252);
/******/ 			__webpack_require__.e(9566);
/******/ 			__webpack_require__.e(5320);
/******/ 			__webpack_require__.e(3608);
/******/ 			__webpack_require__.e(5596);
/******/ 			__webpack_require__.e(7615);
/******/ 			__webpack_require__.e(77);
/******/ 			__webpack_require__.e(2444);
/******/ 			__webpack_require__.e(5429);
/******/ 			__webpack_require__.e(1801);
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