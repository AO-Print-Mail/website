exports.id = 7289;
exports.ids = [7289,6330];
exports.modules = {

/***/ 36330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rZ": function() { return /* binding */ StructuredText; }
/* harmony export */ });
/* unused harmony exports structuredTextRules, renderInlineRecordRules, renderLinkToRules */
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};
const renderLinkToRules = node => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};
const StructuredText = (_ref4) => {
  let {
    config,
    data
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["config", "data"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_datocms__WEBPACK_IMPORTED_MODULE_4__.StructuredText, _objectSpread({
    renderInlineRecord: renderInlineRecordRules,
    customRules: structuredTextRules(config),
    renderLinkToRecord: renderLinkToRules,
    data: data
  }, props));
};

/***/ }),

/***/ 14559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "_ListItem": function() { return /* binding */ _ListItem; },
/* harmony export */   "UnorderedList": function() { return /* binding */ UnorderedList; },
/* harmony export */   "OrderedList": function() { return /* binding */ OrderedList; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const List = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
  my: '$5'
});
const _ListItem = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('li', {
  display: 'flex',
  mt: '$3',
  variants: {
    mark: {
      enabled: {
        '&::before': {
          alignSelf: 'flex-end',
          color: '$DA70',
          left: '0',
          content: `'•'`,
          fontSize: '1.25em',
          lineHeight: '1',
          textAlign: 'center',
          marginRight: '1em',
          verticalAlign: 'middle'
        }
      },
      disabled: {}
    },
    defaultVariants: {
      mark: 'enabled'
    }
  }
});
const UnorderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref, ref) => {
  let {
    as
  } = _ref,
      props = _objectWithoutProperties(_ref, ["as"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as
  }, props));
});
const OrderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref2, ref) => {
  let {
    as
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["as"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(List, _objectSpread({
    role: "list",
    ref: ref,
    as: as !== null && as !== void 0 ? as : 'ol'
  }, props));
});
const ListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref3, ref) => {
  let {
    children,
    icon,
    iconProps = {}
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children", "icon", "iconProps"]);

  const Mark = typeof icon === 'string' ? _icons__WEBPACK_IMPORTED_MODULE_3__[icon] : icon;

  const {
    css = {}
  } = iconProps,
        iconRest = _objectWithoutProperties(iconProps, ["css"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListItem, _objectSpread(_objectSpread({
    mark: Mark ? 'disabled' : 'enabled',
    role: 'list',
    ref: ref
  }, props), {}, {
    children: [Mark && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mark, _objectSpread(_objectSpread({}, iconRest), {}, {
      css: _objectSpread({
        marginRight: '$3',
        mt: '$1',
        alignSelf: 'flex-start',
        flex: '0 0 $2',
        position: 'relative',
        '& + p': {
          flex: '1 1'
        }
      }, css)
    })), children]
  }));
});

/***/ }),

/***/ 79973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X6": function() { return /* reexport */ Heading; },
  "XJ": function() { return /* reexport */ Heading2; },
  "k8": function() { return /* reexport */ Heading4; },
  "nv": function() { return /* reexport */ typography_text/* Paragraph */.n; },
  "Dx": function() { return /* reexport */ title/* Title */.D; }
});

// UNUSED EXPORTS: Heading1, Heading3, Heading5, Heading6, Text

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




/***/ })

};
;