exports.id = 6330;
exports.ids = [6330];
exports.modules = {

/***/ 36330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dr": function() { return /* binding */ structuredTextRules; },
/* harmony export */   "rZ": function() { return /* binding */ StructuredText; }
/* harmony export */ });
/* unused harmony exports renderInlineRecordRules, renderLinkToRules */
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

/***/ })

};
;