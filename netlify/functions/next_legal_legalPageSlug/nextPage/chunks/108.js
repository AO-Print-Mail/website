exports.id = 108;
exports.ids = [108,7109,6071];
exports.modules = {

/***/ 62712:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveUrl = exports.wrapText = exports.wrapListItems = exports.handlers = exports.withMark = exports.noop = exports.extractInlineStyles = exports.base = exports.head = exports.highlight = exports.strikethrough = exports.underline = exports.italic = exports.strong = exports.inlineCode = exports.newLine = exports.span = exports.link = exports.listItem = exports.list = exports.blockquote = exports.code = exports.heading = exports.thematicBreak = exports.paragraph = exports.root = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
var convert_1 = __importDefault(__webpack_require__(83216));
var hast_util_to_text_1 = __importDefault(__webpack_require__(85330));
var hast_util_has_property_1 = __importDefault(__webpack_require__(85415));
var datocms_structured_text_utils_1 = __webpack_require__(85444);
var visit_children_1 = __importDefault(__webpack_require__(97804));
var wrap_1 = __webpack_require__(65732);
var root = function root(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: 'root' }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) &&
                        children.some(function (child) { return child && !datocms_structured_text_utils_1.allowedChildren.root.includes(child.type); })) {
                        children = wrap_1.wrap(children);
                    }
                    if (!Array.isArray(children) || children.length === 0) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, createNode('root', {
                            children: Array.isArray(children) ? children : [],
                        })];
            }
        });
    });
};
exports.root = root;
var paragraph = function paragraph(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('paragraph');
                    return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: isAllowedChild ? 'paragraph' : context.parentNodeType }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        return [2 /*return*/, isAllowedChild ? createNode('paragraph', { children: children }) : children];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.paragraph = paragraph;
var thematicBreak = function thematicBreak(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild;
        return __generator(this, function (_a) {
            isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('thematicBreak');
            return [2 /*return*/, isAllowedChild ? createNode('thematicBreak', {}) : undefined];
        });
    });
};
exports.thematicBreak = thematicBreak;
var heading = function heading(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('heading') &&
                        context.allowedBlocks.includes('heading');
                    return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: isAllowedChild ? 'heading' : context.parentNodeType, wrapText: isAllowedChild ? false : context.wrapText }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        return [2 /*return*/, isAllowedChild
                                ? createNode('heading', {
                                    level: Number(node.tagName.charAt(1)) || 1,
                                    children: children,
                                })
                                : children];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.heading = heading;
var code = function code(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, prefix, isPre, isCode, children, index, classList, language;
        return __generator(this, function (_a) {
            isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('code');
            if (!isAllowedChild) {
                return [2 /*return*/, exports.inlineCode(createNode, node, context)];
            }
            if (!context.allowedBlocks.includes('code')) {
                return [2 /*return*/, visit_children_1.default(createNode, node, context)];
            }
            prefix = typeof context.codePrefix === 'string' ? context.codePrefix : 'language-';
            isPre = convert_1.default('pre');
            isCode = convert_1.default('code');
            children = node.children;
            index = -1;
            classList = null;
            language = {};
            if (isPre(node)) {
                while (++index < children.length) {
                    if (typeof children[index] === 'object' &&
                        isCode(children[index]) &&
                        hast_util_has_property_1.default(children[index], 'className')) {
                        // error TS2339: Property 'properties' does not exist on type 'HastNode'.
                        //               Property 'properties' does not exist on type 'HastTextNode'
                        // isCode (convert) checks that the node is an element and therefore it'll have properties
                        // @ts-ignore
                        classList = children[index].properties.className;
                        break;
                    }
                }
            }
            else if (isCode(node) && hast_util_has_property_1.default(node, 'className')) {
                classList = node.properties.className;
            }
            if (Array.isArray(classList)) {
                index = -1;
                while (++index < classList.length) {
                    if (classList[index].slice(0, prefix.length) === prefix) {
                        language = { language: classList[index].slice(prefix.length) };
                        break;
                    }
                }
            }
            return [2 /*return*/, createNode('code', __assign(__assign({}, language), { code: String(wrapText(context, hast_util_to_text_1.default(node))).replace(/\n+$/, '') }))];
        });
    });
};
exports.code = code;
var blockquote = function blockquote(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('blockquote') &&
                        context.allowedBlocks.includes('blockquote');
                    return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: isAllowedChild ? 'blockquote' : context.parentNodeType }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        return [2 /*return*/, isAllowedChild
                                ? createNode('blockquote', { children: wrap_1.wrap(children) })
                                : children];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.blockquote = blockquote;
var list = function list(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('list') &&
                        context.allowedBlocks.includes('list');
                    if (!!isAllowedChild) return [3 /*break*/, 2];
                    return [4 /*yield*/, visit_children_1.default(createNode, node, context)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, exports.wrapListItems(createNode, node, __assign(__assign({}, context), { parentNodeType: 'list' }))];
                case 3:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        return [2 /*return*/, createNode('list', {
                                children: children,
                                style: node.tagName === 'ol' ? 'numbered' : 'bulleted',
                            })];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.list = list;
var listItem = function listItem(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, children;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('listItem') &&
                        context.allowedBlocks.includes('list');
                    return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: isAllowedChild ? 'listItem' : context.parentNodeType }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        return [2 /*return*/, isAllowedChild
                                ? createNode('listItem', {
                                    children: wrap_1.wrap(children),
                                })
                                : children];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.listItem = listItem;
var link = function link(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var isAllowedChild, allowedChildrenWrapped, wrapsHeadings, i_1, splitChildren_1, children, props, meta_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!context.allowedBlocks.includes('link')) {
                        return [2 /*return*/, visit_children_1.default(createNode, node, context)];
                    }
                    isAllowedChild = false;
                    if (datocms_structured_text_utils_1.allowedChildren[context.parentNodeType] === 'inlineNodes') {
                        isAllowedChild = datocms_structured_text_utils_1.inlineNodeTypes.includes('link');
                    }
                    else if (Array.isArray(datocms_structured_text_utils_1.allowedChildren[context.parentNodeType])) {
                        isAllowedChild = datocms_structured_text_utils_1.allowedChildren[context.parentNodeType].includes('link');
                    }
                    if (!isAllowedChild) {
                        allowedChildrenWrapped = ['root', 'list', 'listItem'];
                        isAllowedChild = allowedChildrenWrapped.includes(context.parentNodeType);
                    }
                    wrapsHeadings = node.children.some(function (child) { return child.type === 'element' && child.tagName.startsWith('h'); });
                    if (wrapsHeadings) {
                        i_1 = 0;
                        splitChildren_1 = [];
                        node.children.forEach(function (child) {
                            if (child.type === 'element' && child.tagName.startsWith('h')) {
                                if (splitChildren_1.length > 0) {
                                    i_1++;
                                }
                                splitChildren_1.push(__assign(__assign({}, child), { children: [
                                        __assign(__assign({}, node), { children: child.children }),
                                    ] }));
                                i_1++;
                            }
                            else if (splitChildren_1[i_1]) {
                                splitChildren_1[i_1].children.push(child);
                            }
                            else {
                                splitChildren_1[i_1] = __assign(__assign({}, node), { children: [child] });
                            }
                        });
                        node.children = splitChildren_1;
                        isAllowedChild = false;
                    }
                    return [4 /*yield*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), { parentNodeType: isAllowedChild ? 'link' : context.parentNodeType }))];
                case 1:
                    children = _a.sent();
                    if (Array.isArray(children) && children.length) {
                        if (!isAllowedChild) {
                            return [2 /*return*/, children];
                        }
                        props = {
                            url: resolveUrl(context, node.properties.href),
                            children: children,
                        };
                        meta_1 = [];
                        if (node.properties) {
                            ['target', 'rel', 'title'].forEach(function (attr) {
                                var value = Array.isArray(node.properties[attr])
                                    ? node.properties[attr].join(' ')
                                    : node.properties[attr];
                                if (value) {
                                    meta_1.push({ id: attr, value: value });
                                }
                            });
                        }
                        if (meta_1.length > 0) {
                            props.meta = meta_1;
                        }
                        return [2 /*return*/, createNode('link', props)];
                    }
                    return [2 /*return*/, undefined];
            }
        });
    });
};
exports.link = link;
var span = function span(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var marks, allowedMarks;
        return __generator(this, function (_a) {
            marks = {};
            if (Array.isArray(context.marks)) {
                allowedMarks = context.marks.filter(function (mark) {
                    return context.allowedMarks.includes(mark);
                });
                if (allowedMarks.length > 0) {
                    marks.marks = allowedMarks;
                }
            }
            return [2 /*return*/, createNode('span', __assign({ value: wrapText(context, node.value) }, marks))];
        });
    });
};
exports.span = span;
var newLine = function newLine(createNode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, createNode('span', {
                    value: '\n',
                })];
        });
    });
};
exports.newLine = newLine;
exports.inlineCode = withMark('code');
exports.strong = withMark('strong');
exports.italic = withMark('emphasis');
exports.underline = withMark('underline');
exports.strikethrough = withMark('strikethrough');
exports.highlight = withMark('highlight');
var head = function head(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var baseElement;
        return __generator(this, function (_a) {
            baseElement = node.children.find(function (child) { return child.tagName === 'base'; });
            if (baseElement) {
                return [2 /*return*/, context.handlers.base(createNode, baseElement, context)];
            }
            else {
                return [2 /*return*/, undefined];
            }
            return [2 /*return*/];
        });
    });
};
exports.head = head;
var base = function base(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!context.global.baseUrlFound &&
                typeof node.properties === 'object' &&
                node.properties.href) {
                context.global.baseUrl = node.properties.href.replace(/\/$/, '');
                context.global.baseUrlFound = true;
            }
            return [2 /*return*/];
        });
    });
};
exports.base = base;
var extractInlineStyles = function extractInlineStyles(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var marks, newMarks_1;
        return __generator(this, function (_a) {
            marks = { marks: Array.isArray(context.marks) ? context.marks : [] };
            if (node.properties && typeof node.properties.style === 'string') {
                newMarks_1 = [];
                node.properties.style.split(';').forEach(function (declaration) {
                    var _a = declaration.split(':'), firstChunk = _a[0], otherChunks = _a.slice(1);
                    var prop = firstChunk.trim();
                    var value = otherChunks.join(':').trim();
                    switch (prop) {
                        case 'font-weight':
                            if (value === 'bold' || Number(value) > 400) {
                                newMarks_1.push('strong');
                            }
                            break;
                        case 'font-style':
                            if (value === 'italic') {
                                newMarks_1.push('emphasis');
                            }
                            break;
                        case 'text-decoration':
                            if (value === 'underline') {
                                newMarks_1.push('underline');
                            }
                            break;
                        default:
                            break;
                    }
                });
                if (newMarks_1.length > 0) {
                    marks.marks = marks.marks.concat(newMarks_1.filter(function (mark) {
                        return !marks.marks.includes(mark) && context.allowedMarks.includes(mark);
                    }));
                }
            }
            if (marks.marks.length === 0) {
                marks = {};
            }
            return [2 /*return*/, visit_children_1.default(createNode, node, __assign(__assign({}, context), marks))];
        });
    });
};
exports.extractInlineStyles = extractInlineStyles;
// eslint-disable-next-line @typescript-eslint/no-empty-function,  @typescript-eslint/explicit-module-boundary-types
function noop() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
exports.noop = noop;
function withMark(type) {
    return function markHandler(createNode, node, context) {
        if (!context.allowedMarks.includes(type)) {
            return visit_children_1.default(createNode, node, context);
        }
        var marks = { marks: [type] };
        if (Array.isArray(context.marks)) {
            marks = {
                marks: context.marks.includes(type)
                    ? context.marks
                    : context.marks.concat([type]),
            };
        }
        return visit_children_1.default(createNode, node, __assign(__assign({}, context), marks));
    };
}
exports.withMark = withMark;
exports.handlers = {
    root: exports.root,
    p: exports.paragraph,
    summary: exports.paragraph,
    h1: exports.heading,
    h2: exports.heading,
    h3: exports.heading,
    h4: exports.heading,
    h5: exports.heading,
    h6: exports.heading,
    ul: exports.list,
    ol: exports.list,
    dir: exports.list,
    dt: exports.listItem,
    dd: exports.listItem,
    li: exports.listItem,
    listing: exports.code,
    plaintext: exports.code,
    pre: exports.code,
    xmp: exports.code,
    blockquote: exports.blockquote,
    a: exports.link,
    code: exports.code,
    kbd: exports.code,
    samp: exports.code,
    tt: exports.code,
    var: exports.code,
    strong: exports.strong,
    b: exports.strong,
    em: exports.italic,
    i: exports.italic,
    u: exports.underline,
    strike: exports.strikethrough,
    s: exports.strikethrough,
    mark: exports.highlight,
    base: exports.base,
    span: exports.extractInlineStyles,
    text: exports.span,
    br: exports.newLine,
    hr: exports.thematicBreak,
    head: exports.head,
    comment: noop,
    script: noop,
    style: noop,
    title: noop,
    video: noop,
    audio: noop,
    embed: noop,
    iframe: noop,
};
var wrapListItems = function wrapListItems(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var children, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, visit_children_1.default(createNode, node, context)];
                case 1:
                    children = _a.sent();
                    if (!Array.isArray(children)) {
                        return [2 /*return*/, []];
                    }
                    index = -1;
                    while (++index < children.length) {
                        if (typeof children[index] !== 'undefined' &&
                            children[index].type !== 'listItem') {
                            children[index] = {
                                type: 'listItem',
                                children: [
                                    datocms_structured_text_utils_1.allowedChildren.listItem.includes(children[index].type)
                                        ? children[index]
                                        : createNode('paragraph', { children: [children[index]] }),
                                ],
                            };
                        }
                    }
                    return [2 /*return*/, children];
            }
        });
    });
};
exports.wrapListItems = wrapListItems;
function wrapText(context, value) {
    return context.wrapText ? value : value.replace(/\r?\n|\r/g, ' ');
}
exports.wrapText = wrapText;
function resolveUrl(context, url) {
    if (url === null || url === undefined) {
        return '';
    }
    if (context.global.baseUrl && typeof URL !== 'undefined') {
        var isRelative = /^\.?\//.test(url);
        var parsed = new URL(url, context.global.baseUrl);
        if (isRelative) {
            var parsedBase = new URL(context.global.baseUrl);
            if (!parsed.pathname.startsWith(parsedBase.pathname)) {
                parsed.pathname = "" + parsedBase.pathname + parsed.pathname;
            }
        }
        return parsed.toString();
    }
    return url;
}
exports.resolveUrl = resolveUrl;
//# sourceMappingURL=handlers.js.map

/***/ }),

/***/ 66683:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.visitChildren = exports.visitNode = exports.hastToStructuredText = exports.parse5ToStructuredText = exports.htmlToStructuredText = void 0;
// @ts-ignore
var rehype_minify_whitespace_1 = __importDefault(__webpack_require__(59197));
var visit_node_1 = __importDefault(__webpack_require__(18297));
exports.visitNode = visit_node_1.default;
var visit_children_1 = __importDefault(__webpack_require__(97804));
exports.visitChildren = visit_children_1.default;
var handlers_1 = __webpack_require__(62712);
var hast_util_from_parse5_1 = __importDefault(__webpack_require__(92114));
var hast_util_from_dom_1 = __importDefault(__webpack_require__(64952));
var datocms_structured_text_utils_1 = __webpack_require__(85444);
function htmlToStructuredText(html, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var document, tree;
        return __generator(this, function (_a) {
            if (typeof DOMParser === 'undefined') {
                throw new Error('DOMParser is not available. Consider using `parse5ToStructuredText` instead!');
            }
            document = new DOMParser().parseFromString(html, 'text/html');
            tree = hast_util_from_dom_1.default(document);
            return [2 /*return*/, hastToStructuredText(tree, options)];
        });
    });
}
exports.htmlToStructuredText = htmlToStructuredText;
function parse5ToStructuredText(document, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var tree;
        return __generator(this, function (_a) {
            tree = hast_util_from_parse5_1.default(document);
            return [2 /*return*/, hastToStructuredText(tree, options)];
        });
    });
}
exports.parse5ToStructuredText = parse5ToStructuredText;
function hastToStructuredText(tree, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var createNode, rootNode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rehype_minify_whitespace_1.default({ newlines: options.newlines === true })(tree);
                    createNode = function (type, props) {
                        props.type = type;
                        return props;
                    };
                    if (typeof options.preprocess === 'function') {
                        options.preprocess(tree);
                    }
                    return [4 /*yield*/, visit_node_1.default(createNode, tree, {
                            parentNodeType: 'root',
                            parentNode: null,
                            defaultHandlers: handlers_1.handlers,
                            handlers: Object.assign({}, handlers_1.handlers, options.handlers || {}),
                            wrapText: true,
                            allowedBlocks: Array.isArray(options.allowedBlocks)
                                ? options.allowedBlocks
                                : ['blockquote', 'code', 'heading', 'link', 'list'],
                            allowedMarks: Array.isArray(options.allowedMarks)
                                ? options.allowedMarks
                                : datocms_structured_text_utils_1.allowedMarks,
                            global: __assign({ baseUrl: null, baseUrlFound: false }, (options.shared || {})),
                        })];
                case 1:
                    rootNode = _a.sent();
                    if (rootNode) {
                        return [2 /*return*/, {
                                schema: 'dast',
                                document: rootNode,
                            }];
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
exports.hastToStructuredText = hastToStructuredText;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97804:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var visit_node_1 = __importDefault(__webpack_require__(18297));
// visitChildren() is for visiting all the children of a node
exports.default = (function visitChildren(createNode, parentNode, context) {
    return __awaiter(this, void 0, void 0, function () {
        var nodes, values, index, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nodes = Array.isArray(parentNode.children)
                        ? parentNode.children
                        : [];
                    values = [];
                    index = -1;
                    _a.label = 1;
                case 1:
                    if (!(++index < nodes.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, visit_node_1.default(createNode, nodes[index], __assign(__assign({}, context), { parentNode: parentNode }))];
                case 2:
                    result = (_a.sent());
                    if (!result) return [3 /*break*/, 5];
                    if (!Array.isArray(result)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all(result.map(function (nodeOrPromise) {
                            if (nodeOrPromise instanceof Promise) {
                                return nodeOrPromise;
                            }
                            return Promise.resolve(nodeOrPromise);
                        }))];
                case 3:
                    result = (_a.sent());
                    _a.label = 4;
                case 4:
                    values = values.concat(result);
                    _a.label = 5;
                case 5: return [3 /*break*/, 1];
                case 6: return [2 /*return*/, values];
            }
        });
    });
});
//# sourceMappingURL=visit-children.js.map

/***/ }),

/***/ 18297:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var visit_children_1 = __importDefault(__webpack_require__(97804));
// visitNode() is for visiting a single node
exports.default = (function visitNode(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        var handlers, handler;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    handlers = context.handlers;
                    if (node.type === 'element') {
                        if (typeof node.tagName === 'string' &&
                            typeof handlers[node.tagName] === 'function') {
                            handler = handlers[node.tagName];
                        }
                        else {
                            handler = unknownHandler;
                        }
                    }
                    else if (node.type === 'root') {
                        handler = handlers.root;
                    }
                    else if (node.type === 'text') {
                        handler = handlers.text;
                    }
                    if (typeof handler !== 'function') {
                        return [2 /*return*/, undefined];
                    }
                    return [4 /*yield*/, handler(createNode, node, context)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
});
// This is a default handler for unknown nodes.
// It skips the current node and processes its children.
var unknownHandler = function unknownHandler(createNode, node, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, visit_children_1.default(createNode, node, context)];
        });
    });
};
//# sourceMappingURL=visit-node.js.map

/***/ }),

/***/ 65732:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.needed = exports.wrap = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
var extend_1 = __importDefault(__webpack_require__(94470));
var convert_1 = __importDefault(__webpack_require__(48145));
var isPhrasing = convert_1.default(['span', 'link']);
function wrap(nodes) {
    return runs(nodes, onphrasing);
    function onphrasing(nodes) {
        var head = nodes[0];
        if (nodes.length === 1 &&
            head.type === 'span' &&
            (head.value === ' ' || head.value === '\n')) {
            return [];
        }
        return { type: 'paragraph', children: nodes };
    }
}
exports.wrap = wrap;
// Wrap all runs of dast phrasing content in `paragraph` nodes.
function runs(nodes, onphrasing, onnonphrasing) {
    var nonphrasing = onnonphrasing || identity;
    var flattened = flatten(nodes);
    var result = [];
    var index = -1;
    var node;
    var queue;
    while (++index < flattened.length) {
        node = flattened[index];
        if (isPhrasing(node)) {
            if (!queue)
                queue = [];
            queue.push(node);
        }
        else {
            if (queue) {
                result = result.concat(onphrasing(queue));
                queue = undefined;
            }
            result = result.concat(nonphrasing(node));
        }
    }
    if (queue) {
        result = result.concat(onphrasing(queue));
    }
    return result;
}
// Flatten a list of nodes.
function flatten(nodes) {
    var flattened = [];
    var index = -1;
    var node;
    while (++index < nodes.length) {
        node = nodes[index];
        // Straddling: some elements are *weird*.
        // Namely: `map`, `ins`, `del`, and `a`, as they are hybrid elements.
        // See: <https://html.spec.whatwg.org/#paragraphs>.
        // Paragraphs are the weirdest of them all.
        // See the straddling fixture for more info!
        // `ins` is ignored in mdast, so we don’t need to worry about that.
        // `map` maps to its content, so we don’t need to worry about that either.
        // `del` maps to `delete` and `a` to `link`, so we do handle those.
        // What we’ll do is split `node` over each of its children.
        if ((node.type === 'delete' || node.type === 'link') &&
            needed(node.children)) {
            flattened = flattened.concat(split(node));
        }
        else {
            flattened.push(node);
        }
    }
    return flattened;
}
// Check if there are non-phrasing mdast nodes returned.
// This is needed if a fragment is given, which could just be a sentence, and
// doesn’t need a wrapper paragraph.
function needed(nodes) {
    var index = -1;
    var node;
    while (++index < nodes.length) {
        node = nodes[index];
        if (!isPhrasing(node) || (node.children && needed(node.children))) {
            return true;
        }
    }
    return false;
}
exports.needed = needed;
function split(node) {
    return runs(node.children, onphrasing, onnonphrasing);
    // Use `child`, add `parent` as its first child, put the original children
    // into `parent`.
    function onnonphrasing(child) {
        var parent = extend_1.default(true, {}, shallow(node));
        var copy = shallow(child);
        copy.children = [parent];
        parent.children = child.children;
        return copy;
    }
    // Use `parent`, put the phrasing run inside it.
    function onphrasing(nodes) {
        var parent = extend_1.default(true, {}, shallow(node));
        parent.children = nodes;
        return parent;
    }
}
function identity(n) {
    return n;
}
function shallow(node) {
    var copy = {};
    var key;
    for (key in node) {
        if ({}.hasOwnProperty.call(node, key) && key !== 'children') {
            copy[key] = node[key];
        }
    }
    return copy;
}
//# sourceMappingURL=wrap.js.map

/***/ }),

/***/ 58885:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(83216)

module.exports = convert([
  'audio',
  'canvas',
  'embed',
  'iframe',
  'img',
  'math',
  'object',
  'picture',
  'svg',
  'video'
])


/***/ }),

/***/ 64952:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var ns = __webpack_require__(54992);
var h = __webpack_require__(52579);
var s = __webpack_require__(9505);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ns__default = /*#__PURE__*/_interopDefaultLegacy(ns);
var h__default = /*#__PURE__*/_interopDefaultLegacy(h);
var s__default = /*#__PURE__*/_interopDefaultLegacy(s);

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = 11;

function transform(value) {
  var node = value || {};

  switch (node.nodeType) {
    case ELEMENT_NODE:
      return element(node);

    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      return root(node);

    case TEXT_NODE:
      return text(node);

    case COMMENT_NODE:
      return comment(node);

    case DOCUMENT_TYPE_NODE:
      return doctype(node);

    default:
      return null;
  }
} // Transform a document.


function root(node) {
  return {
    type: 'root',
    children: all(node)
  };
} // Transform a doctype.


function doctype(node) {
  return {
    type: 'doctype',
    name: node.name || '',
    "public": node.publicId || null,
    system: node.systemId || null
  };
} // Transform text.


function text(node) {
  return {
    type: 'text',
    value: node.nodeValue
  };
} // Transform a comment.


function comment(node) {
  return {
    type: 'comment',
    value: node.nodeValue
  };
} // Transform an element.


function element(node) {
  var space = node.namespaceURI;
  var fn = space === ns__default['default'].svg ? s__default['default'] : h__default['default'];
  var tagName = space === ns__default['default'].html ? node.tagName.toLowerCase() : node.tagName;
  var content = space === ns__default['default'].html && tagName === 'template' ? node.content : node;
  var attributes = node.getAttributeNames();
  var length = attributes.length;
  var props = {};
  var index = 0;

  while (index < length) {
    var key = attributes[index];
    props[key] = node.getAttribute(key);
    index += 1;
  }

  return fn(tagName, props, all(content));
}

function all(node) {
  var nodes = node.childNodes;
  var length = nodes.length;
  var children = [];
  var index = 0;

  while (index < length) {
    var child = transform(nodes[index]);

    if (child !== null) {
      children.push(child);
    }

    index += 1;
  }

  return children;
}

function fromDOM(node) {
  return transform(node) || {
    type: 'root',
    children: []
  };
}

module.exports = fromDOM;


/***/ }),

/***/ 85415:
/***/ (function(module) {

"use strict";


var own = {}.hasOwnProperty

module.exports = hasProperty

// Check if `node` has a set `name` property.
function hasProperty(node, name) {
  var props
  var value

  if (!node || !name || typeof node !== 'object' || node.type !== 'element') {
    return false
  }

  props = node.properties
  value = props && own.call(props, name) && props[name]

  return value !== null && value !== undefined && value !== false
}


/***/ }),

/***/ 85330:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(96464)
var convert = __webpack_require__(83216)
var findAfter = __webpack_require__(33262)

module.exports = toText

var searchLineFeeds = /\n/g
var searchTabOrSpaces = /[\t ]+/g

var br = convert('br')
var p = convert('p')
var cell = convert(['th', 'td'])
var row = convert('tr')

// Note that we don’t need to include void elements here as they don’t have text.
// See: <https://github.com/wooorm/html-void-elements>
var notRendered = convert([
  // List from: <https://html.spec.whatwg.org/#hidden-elements>
  'datalist',
  'head',
  'noembed',
  'noframes',
  'rp',
  'script',
  'style',
  'template',
  'title',
  // Act as if we support scripting.
  'noscript',
  // Hidden attribute.
  hidden,
  // From: <https://html.spec.whatwg.org/#flow-content-3>
  closedDialog
])

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
var blockOrCaption = convert([
  'caption', // `table-caption`
  // Page
  'html',
  'body',
  // Flow content
  'address',
  'blockquote',
  'center', // Legacy
  'dialog',
  'div',
  'figure',
  'figcaption',
  'footer',
  'form,',
  'header',
  'hr',
  'legend',
  'listing', // Legacy
  'main',
  'p',
  'plaintext', // Legacy
  'pre',
  'xmp', // Legacy
  // Sections and headings
  'article',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'nav',
  'section',
  // Lists
  'dir', // Legacy
  'dd',
  'dl',
  'dt',
  'menu',
  'ol',
  'ul'
])

// Implementation of the `innerText` getter:
// <https://html.spec.whatwg.org/#the-innertext-idl-attribute>
// Note that we act as if `node` is being rendered, and as if we’re a
// CSS-supporting user agent.
function toText(node) {
  var children = node.children || []
  var block = blockOrCaption(node)
  var whiteSpace = inferWhiteSpace(node, {})
  var index = -1
  var results
  var result
  var value
  var count

  // Treat `text` and `comment` as having normal white-space.
  // This deviates from the spec as in the DOM the node’s `.data` has to be
  // returned.
  // If you want that behavior use `hast-util-to-string`.
  // All other nodes are later handled as if they are `element`s (so the
  // algorithm also works on a `root`).
  // Nodes without children are treated as a void element, so `doctype` is thus
  // ignored.
  if (node.type === 'text' || node.type === 'comment') {
    return collectText(node, {
      whiteSpace: whiteSpace,
      breakBefore: true,
      breakAfter: true
    })
  }

  // 1.  If this element is not being rendered, or if the user agent is a
  //     non-CSS user agent, then return the same value as the textContent IDL
  //     attribute on this element.
  //
  //     Note: we’re not supporting stylesheets so we’re acting as if the node
  //     is rendered.
  //
  //     If you want that behavior use `hast-util-to-string`.
  //     Important: we’ll have to account for this later though.

  // 2.  Let results be a new empty list.
  results = []

  // 3.  For each child node node of this element:
  while (++index < children.length) {
    // 3.1. Let current be the list resulting in running the inner text
    //      collection steps with node.
    //      Each item in results will either be a JavaScript string or a
    //      positive integer (a required line break count).
    // 3.2. For each item item in current, append item to results.
    results = results.concat(
      innerTextCollection(children[index], index, node, {
        whiteSpace: whiteSpace,
        breakBefore: index ? null : block,
        breakAfter:
          index < children.length - 1 ? br(children[index + 1]) : block
      })
    )
  }

  // 4.  Remove any items from results that are the empty string.
  // 5.  Remove any runs of consecutive required line break count items at the
  //     start or end of results.
  // 6.  Replace each remaining run of consecutive required line break count
  //     items with a string consisting of as many U+000A LINE FEED (LF)
  //     characters as the maximum of the values in the required line break
  //     count items.
  index = -1
  result = []

  while (++index < results.length) {
    value = results[index]

    if (typeof value === 'number') {
      if (count !== undefined && value > count) count = value
    } else if (value) {
      if (count) result.push(repeat('\n', count))
      count = 0
      result.push(value)
    }
  }

  // 7.  Return the concatenation of the string items in results.
  return result.join('')
}

// <https://html.spec.whatwg.org/#inner-text-collection-steps>
function innerTextCollection(node, index, parent, options) {
  if (node.type === 'element') {
    return collectElement(node, index, parent, options)
  }

  if (node.type === 'text') {
    return [
      options.whiteSpace === 'normal'
        ? collectText(node, options)
        : collectPreText(node, options)
    ]
  }

  return []
}

// Collect an element.
function collectElement(node, _, parent, options) {
  // First we infer the `white-space` property.
  var whiteSpace = inferWhiteSpace(node, options)
  var children = node.children || []
  var index = -1
  var items = []
  var prefix
  var suffix

  // We’re ignoring point 3, and exiting without any content here, because we
  // deviated from the spec in `toText` at step 3.
  if (notRendered(node)) {
    return items
  }

  // Note: we first detect if there is going to be a break before or after the
  // contents, as that changes the white-space handling.

  // 2.  If node’s computed value of `visibility` is not `visible`, then return
  //     items.
  //
  //     Note: Ignored, as everything is visible by default user agent styles.

  // 3.  If node is not being rendered, then return items. [...]
  //
  //     Note: We already did this above.

  // See `collectText` for step 4.

  // 5.  If node is a `<br>` element, then append a string containing a single
  //     U+000A LINE FEED (LF) character to items.
  if (br(node)) {
    suffix = '\n'
  }

  // 7.  If node’s computed value of `display` is `table-row`, and node’s CSS
  //     box is not the last `table-row` box of the nearest ancestor `table`
  //     box, then append a string containing a single U+000A LINE FEED (LF)
  //     character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  //     Note: needs further investigation as this does not account for implicit
  //     rows.
  else if (row(node) && findAfter(parent, node, row)) {
    suffix = '\n'
  }

  // 8.  If node is a `<p>` element, then append 2 (a required line break count)
  //     at the beginning and end of items.
  else if (p(node)) {
    prefix = 2
    suffix = 2
  }

  // 9.  If node’s used value of `display` is block-level or `table-caption`,
  //     then append 1 (a required line break count) at the beginning and end of
  //     items.
  else if (blockOrCaption(node)) {
    prefix = 1
    suffix = 1
  }

  // 1.  Let items be the result of running the inner text collection steps with
  //     each child node of node in tree order, and then concatenating the
  //     results to a single list.
  while (++index < children.length) {
    items = items.concat(
      innerTextCollection(children[index], index, node, {
        whiteSpace: whiteSpace,
        breakBefore: index ? null : prefix,
        breakAfter:
          index < children.length - 1 ? br(children[index + 1]) : suffix
      })
    )
  }

  // 6.  If node’s computed value of `display` is `table-cell`, and node’s CSS
  //     box is not the last `table-cell` box of its enclosing `table-row` box,
  //     then append a string containing a single U+0009 CHARACTER TABULATION
  //     (tab) character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  if (cell(node) && findAfter(parent, node, cell)) {
    items.push('\t')
  }

  // Add the pre- and suffix.
  if (prefix) items.unshift(prefix)
  if (suffix) items.push(suffix)

  return items
}

// 4.  If node is a Text node, then for each CSS text box produced by node,
//     in content order, compute the text of the box after application of the
//     CSS `white-space` processing rules and `text-transform` rules, set
//     items to the list of the resulting strings, and return items.
//     The CSS `white-space` processing rules are slightly modified:
//     collapsible spaces at the end of lines are always collapsed, but they
//     are only removed if the line is the last line of the block, or it ends
//     with a br element.
//     Soft hyphens should be preserved.
//
//     Note: See `collectText` and `collectPreText`.
//     Note: we don’t deal with `text-transform`, no element has that by
//     default.
//
// See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
function collectText(node, options) {
  var value = String(node.value)
  var lines = []
  var result = []
  var start = 0
  var index = -1
  var match
  var end
  var join

  while (start < value.length) {
    searchLineFeeds.lastIndex = start
    match = searchLineFeeds.exec(value)
    end = match ? match.index : value.length

    lines.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      trimAndcollapseSpacesAndTabs(
        // [...] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        value
          .slice(start, end)
          .replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, ''),
        options.breakBefore,
        options.breakAfter
      )
    )

    start = end + 1
  }

  // Collapsible segment breaks are transformed for rendering according to the
  // segment break transformation rules.
  // So here we jump to 4.1.2 of [CSSTEXT]:
  // Any collapsible segment break immediately following another collapsible
  // segment break is removed
  while (++index < lines.length) {
    // *   If the character immediately before or immediately after the segment
    //     break is the zero-width space character (U+200B), then the break is
    //     removed, leaving behind the zero-width space.
    if (
      lines[index].charCodeAt(lines[index].length - 1) === 0x200b /* ZWSP */ ||
      (index < lines.length - 1 &&
        lines[index + 1].charCodeAt(0) === 0x200b) /* ZWSP */
    ) {
      result.push(lines[index])
      join = ''
    }

    // *   Otherwise, if the East Asian Width property [UAX11] of both the
    //     character before and after the segment break is Fullwidth, Wide, or
    //     Halfwidth (not Ambiguous), and neither side is Hangul, then the
    //     segment break is removed.
    //
    //     Note: ignored.
    // *   Otherwise, if the writing system of the segment break is Chinese,
    //     Japanese, or Yi, and the character before or after the segment break
    //     is punctuation or a symbol (Unicode general category P* or S*) and
    //     has an East Asian Width property of Ambiguous, and the character on
    //     the other side of the segment break is Fullwidth, Wide, or Halfwidth,
    //     and not Hangul, then the segment break is removed.
    //
    //     Note: ignored.

    // *   Otherwise, the segment break is converted to a space (U+0020).
    else if (lines[index]) {
      if (join) result.push(join)
      result.push(lines[index])
      join = ' '
    }
  }

  return result.join('')
}

function collectPreText(node) {
  return String(node.value)
}

// 3.  Every collapsible tab is converted to a collapsible space (U+0020).
// 4.  Any collapsible space immediately following another collapsible
//     space—even one outside the boundary of the inline containing that
//     space, provided both spaces are within the same inline formatting
//     context—is collapsed to have zero advance width. (It is invisible,
//     but retains its soft wrap opportunity, if any.)
function trimAndcollapseSpacesAndTabs(value, breakBefore, breakAfter) {
  var result = []
  var start = 0
  var match
  var end

  while (start < value.length) {
    searchTabOrSpaces.lastIndex = start
    match = searchTabOrSpaces.exec(value)
    end = match ? match.index : value.length

    // If we’re not directly after a segment break, but there was white space,
    // add an empty value that will be turned into a space.
    if (!start && !end && match && !breakBefore) {
      result.push('')
    }

    if (start !== end) {
      result.push(value.slice(start, end))
    }

    start = match ? end + match[0].length : end
  }

  // If we reached the end, there was trailing white space, and there’s no
  // segment break after this node, add an empty value that will be turned
  // into a space.
  if (start !== end && !breakAfter) {
    result.push('')
  }

  return result.join(' ')
}

// We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
function inferWhiteSpace(node, options) {
  var props = node.properties || {}
  var inherit = options.whiteSpace || 'normal'

  switch (node.tagName) {
    case 'listing':
    case 'plaintext':
    case 'xmp':
      return 'pre'
    case 'nobr':
      return 'nowrap'
    case 'pre':
      return props.wrap ? 'pre-wrap' : 'pre'
    case 'td':
    case 'th':
      return props.noWrap ? 'nowrap' : inherit
    case 'textarea':
      return 'pre-wrap'
    default:
      return inherit
  }
}

function hidden(node) {
  return (node.properties || {}).hidden
}

function closedDialog(node) {
  return node.tagName === 'dialog' && !(node.properties || {}).open
}


/***/ }),

/***/ 16071:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = __webpack_require__(69448);

__webpack_unused_export__ = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(67294));

var _router = __webpack_require__(11689);

var _router2 = __webpack_require__(72441);

var _useIntersection = __webpack_require__(75749);

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ 72441:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(69448);

var _interopRequireDefault = __webpack_require__(62426);

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _router2 = _interopRequireWildcard(__webpack_require__(11689));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(61642);

var _withRouter = _interopRequireDefault(__webpack_require__(33168));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ 11163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72441)


/***/ }),

/***/ 39522:
/***/ (function(module) {

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
module.exports = [
  // Contribute whitespace intrinsically.
  'br',
  'wbr',
  // Similar to block.
  'li',
  'table',
  'caption',
  'colgroup',
  'col',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'td',
  'th',
  'summary',
  'optgroup',
  'option',
  // Page
  'html',
  'head',
  'body',
  // Flow content
  'address',
  'blockquote',
  'center', // Legacy
  'dialog',
  'div',
  'figure',
  'figcaption',
  'footer',
  'form',
  'header',
  'hr',
  'legend',
  'listing', // Legacy
  'main',
  'p',
  'plaintext', // Legacy
  'pre',
  'xmp', // Legacy
  // Sections and headings
  'article',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'nav',
  'section',
  // Lists
  'dir', // Legacy
  'dd',
  'dl',
  'dt',
  'menu',
  'ol',
  'ul',
  // Block-like:
  'li',
  'th',
  'td'
]


/***/ }),

/***/ 19418:
/***/ (function(module) {

module.exports = [
  // Form.
  'button',
  'input',
  'select',
  'textarea'
]


/***/ }),

/***/ 59197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 *   Collapse whitespace.
 *
 *   Normally, collapses to a single space.
 *   If `newlines: true`, collapses whitespace containing newlines to `'\n'`
 *   instead of `' '`.
 * @example
 *   <h1>Heading</h1>
 *   <p><strong>This</strong> and <em>that</em></p>
 */



var is = __webpack_require__(78909)
var embedded = __webpack_require__(58885)
var convert = __webpack_require__(48145)
var whitespace = __webpack_require__(53560)
var blocks = __webpack_require__(39522)
var contents = __webpack_require__(19418)
var skippables = __webpack_require__(95874)

module.exports = minifyWhitespace

var ignorableNode = convert(['doctype', 'comment'])
var parent = convert(['element', 'root'])
var root = convert(['root'])
var element = convert(['element'])
var text = convert(['text'])

function minifyWhitespace(options) {
  var collapse = collapseFactory(
    (options || {}).newlines ? replaceNewlines : replaceWhitespace
  )

  return transform

  function transform(tree) {
    minify(tree, {collapse: collapse, whitespace: 'normal'})
  }
}

function minify(node, options) {
  var settings

  if (parent(node)) {
    settings = Object.assign({}, options)

    if (root(node) || blocklike(node)) {
      settings.before = true
      settings.after = true
    }

    settings.whitespace = inferWhiteSpace(node, options)

    return all(node, settings)
  }

  if (text(node)) {
    if (options.whitespace === 'normal') {
      return minifyText(node, options)
    }

    // Naïve collapse, but no trimming:
    if (options.whitespace === 'nowrap') {
      node.value = options.collapse(node.value)
    }

    // The `pre-wrap` or `pre` whitespace settings are neither collapsed nor
    // trimmed.
  }

  return {
    remove: false,
    ignore: ignorableNode(node),
    stripAtStart: false
  }
}

function minifyText(node, options) {
  var value = options.collapse(node.value)
  var start = 0
  var end = value.length
  var result = {remove: false, ignore: false, stripAtStart: false}

  if (options.before && removable(value.charAt(0))) {
    start++
  }

  if (start !== end && removable(value.charAt(end - 1))) {
    if (options.after) {
      end--
    } else {
      result.stripAtStart = true
    }
  }

  if (start === end) {
    result.remove = true
  } else {
    node.value = value.slice(start, end)
  }

  return result
}

function all(parent, options) {
  var before = options.before
  var after = options.after
  var children = parent.children
  var length = children.length
  var index = -1
  var result

  while (++index < length) {
    result = minify(
      children[index],
      Object.assign({}, options, {
        before: before,
        after: collapsableAfter(children, index, after)
      })
    )

    if (result.remove) {
      children.splice(index, 1)
      index--
      length--
    } else if (!result.ignore) {
      before = result.stripAtStart
    }

    // If this element, such as a `<select>` or `<img>`, contributes content
    // somehow, allow whitespace again.
    if (content(children[index])) {
      before = false
    }
  }

  return {
    remove: false,
    ignore: false,
    stripAtStart: before || after
  }
}

function collapsableAfter(nodes, index, after) {
  var length = nodes.length
  var node
  var result

  while (++index < length) {
    node = nodes[index]
    result = inferBoundary(node)

    if (result === undefined && node.children && !skippable(node)) {
      result = collapsableAfter(node.children, -1)
    }

    if (typeof result === 'boolean') {
      return result
    }
  }

  return after
}

// Infer two types of boundaries:
//
// 1. `true` — boundary for which whitespace around it does not contribute
//    anything
// 2. `false` — boundary for which whitespace around it *does* contribute
//
// No result (`undefined`) is returned if it is unknown.
function inferBoundary(node) {
  if (element(node)) {
    if (content(node)) {
      return false
    }

    if (blocklike(node)) {
      return true
    }

    // Unknown: either depends on siblings if embedded or metadata, or on
    // children.
  } else if (text(node)) {
    if (!whitespace(node)) {
      return false
    }
  } else if (!ignorableNode(node)) {
    return false
  }
}

// Infer whether a node is skippable.
function content(node) {
  return embedded(node) || is(node, contents)
}

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
function blocklike(node) {
  return is(node, blocks)
}

function skippable(node) {
  /* istanbul ignore next - currently only used on elements, but just to make sure. */
  var props = node.properties || {}

  return ignorableNode(node) || is(node, skippables) || props.hidden
}

function removable(character) {
  return character === ' ' || character === '\n'
}

function replaceNewlines(value) {
  var match = /\r?\n|\r/.exec(value)
  return match ? match[0] : ' '
}

function replaceWhitespace() {
  return ' '
}

function collapseFactory(replace) {
  return collapse
  function collapse(value) {
    return String(value).replace(/[\t\n\v\f\r ]+/g, replace)
  }
}

// We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
function inferWhiteSpace(node, options) {
  var props = node.properties || {}

  switch (node.tagName) {
    case 'listing':
    case 'plaintext':
    case 'xmp':
      return 'pre'
    case 'nobr':
      return 'nowrap'
    case 'pre':
      return props.wrap ? 'pre-wrap' : 'pre'
    case 'td':
    case 'th':
      return props.noWrap ? 'nowrap' : options.whitespace
    case 'textarea':
      return 'pre-wrap'
    default:
      return options.whitespace
  }
}


/***/ }),

/***/ 95874:
/***/ (function(module) {

module.exports = [
  'area',
  'base',
  'basefont',
  'dialog',
  'datalist',
  'head',
  'link',
  'meta',
  'noembed',
  'noframes',
  'param',
  'rp',
  'script',
  'source',
  'style',
  'template',
  'track',
  'title'
]


/***/ }),

/***/ 33262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var convert = __webpack_require__(48145)

module.exports = findAfter

function findAfter(parent, index, test) {
  var is = convert(test)
  var children
  var child
  var length

  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node')
  }

  children = parent.children
  length = children.length

  if (index && index.type) {
    index = children.indexOf(index)
  }

  if (isNaN(index) || index < 0 || index === Infinity) {
    throw new Error('Expected positive finite index or child node')
  }

  while (++index < length) {
    child = children[index]

    if (is(child, index, parent)) {
      return child
    }
  }

  return null
}


/***/ }),

/***/ 96469:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(62239);
tslib_1.__exportStar(__webpack_require__(66533), exports);
tslib_1.__exportStar(__webpack_require__(77546), exports);
tslib_1.__exportStar(__webpack_require__(93064), exports);
tslib_1.__exportStar(__webpack_require__(26224), exports);
tslib_1.__exportStar(__webpack_require__(78001), exports);
//# sourceMappingURL=index.js.map

/***/ })

};
;