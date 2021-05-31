exports.id = 5252;
exports.ids = [5252];
exports.modules = {

/***/ 75843:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zx": function() { return /* reexport safe */ _src_button__WEBPACK_IMPORTED_MODULE_0__.zx; },
/* harmony export */   "hU": function() { return /* reexport safe */ _src_button__WEBPACK_IMPORTED_MODULE_0__.hU; },
/* harmony export */   "j2": function() { return /* reexport safe */ _src_menuButton__WEBPACK_IMPORTED_MODULE_1__.j; }
/* harmony export */ });
/* harmony import */ var _src_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90136);
/* harmony import */ var _src_menuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61801);



/***/ }),

/***/ 33801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* reexport */ Layout; }
});

// UNUSED EXPORTS: getStaticProps

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./src/theme/index.ts
var theme = __webpack_require__(38135);
// EXTERNAL MODULE: ./src/components/button/index.ts
var components_button = __webpack_require__(75843);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./src/components/footer/src/footer.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FooterWrapper = (0,theme/* styled */.zo)(theme/* ContentWrapper */.vs, {
  flex: '0',
  variants: {
    style: {
      none: {},
      normal: {
        pt: '$5',
        backgroundColor: '$N90'
      }
    }
  },
  defaultVariants: {
    style: 'normal'
  }
});
const LayoutGrid = (0,theme/* styled */.zo)(theme/* Container */.W2, {
  '@m': {
    display: 'grid',
    gridGap: '$4',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'
  },
  '@l': {
    gridGap: '$5',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
  }
});
const ContentColumn = (0,theme/* styled */.zo)('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  '@m': {
    gridColumnStart: '1',
    gridColumnEnd: 'span 3'
  },
  '@l': {
    gridColumnEnd: 'span 2'
  }
});
const row3 = (0,theme/* css */.iv)({
  gridColumnStart: '1',
  gridColumnEnd: 'span 4',
  alignSelf: 'start',
  '@s': {
    gridColumnEnd: 'span 3'
  },
  '@m': {
    gridColumnStart: '4',
    gridColumnEnd: 'span 3'
  },
  '@l': {
    gridColumnStart: '6',
    gridColumnEnd: 'span 3'
  }
});
const staticData = [{
  section_label: 'Services',
  menu_items: [{
    name: 'Direct Mail',
    link: '/direct-mail'
  }, {
    name: 'Fulfilment',
    link: '/package-fulfilment'
  }, {
    name: 'Printing',
    link: '/printing'
  }]
}, {
  section_label: 'Company',
  menu_items: [{
    name: 'About Us',
    link: '/about'
  }, {
    name: 'Contact',
    link: '/contact'
  }, {
    name: 'Blog',
    link: '/blog'
  }]
}, {
  section_label: 'Legal',
  menu_items: [{
    name: 'Privacy policy',
    link: '/legal/privacy'
  }, {
    name: 'Terms of service',
    link: '/legal/terms'
  }]
}];
const Column = (0,theme/* styled */.zo)('section', {
  px: '$2',
  width: '50%',
  mb: '$3',
  '@m': {
    px: '$3',
    width: '33.3%'
  },
  '@l': {
    px: '$4',
    width: '16.6%'
  }
});
const SectionLabel = (0,theme/* styled */.zo)(theme/* Paragraph */.nv, {
  ml: '$2',
  color: '$LA60',
  fontWeight: '600'
});
const LinkText = (0,theme/* styled */.zo)(theme/* Paragraph */.nv, {
  color: '$N30',
  p: '$2',
  mt: '$1',
  '&:hover': {
    color: '$grey'
  }
});

const Section = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
    css: {
      mt: '$3'
    },
    children: data.map(d => /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: d.link,
      prefetch: false,
      children: /*#__PURE__*/jsx_runtime.jsx("a", {
        style: {
          textDecoration: 'none'
        },
        children: /*#__PURE__*/jsx_runtime.jsx(LinkText, {
          size: "xs",
          children: d.name
        })
      })
    }, d.name))
  });
};

const MainFooter = (_ref) => {
  let {
    data = staticData
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
    css: {
      backgroundColor: '$N90'
    },
    children: [/*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
        as: "nav",
        wrap: true,
        css: {
          '@initial': {
            mx: '-$2',
            mb: '$4',
            position: 'relative'
          },
          '@m': {
            mx: '-$3'
          },
          '@l': {
            mx: '-$4'
          }
        },
        children: [/*#__PURE__*/jsx_runtime.jsx(Column, {
          css: {
            '@initial': {
              width: '100%',
              mb: '$2',
              ml: '$2'
            },
            '@l': {
              width: '16.6%',
              ml: '0',
              mt: '$2'
            }
          },
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: /*#__PURE__*/jsx_runtime.jsx(theme/* Logo */.TR, {
                color: "white",
                size: {
                  '@initial': 'small',
                  '@xl': 'regular'
                }
              })
            })
          })
        }), data.map(section => /*#__PURE__*/(0,jsx_runtime.jsxs)(Column, {
          as: "section",
          css: {
            mt: '$4'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx(SectionLabel, {
            size: "s",
            as: "h3",
            children: section.section_label
          }), /*#__PURE__*/jsx_runtime.jsx(Section, {
            data: section.menu_items
          })]
        }, `${section.section_label}`))]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
      css: {
        backgroundColor: '$LA10',
        py: '$4'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
          css: {
            '@initial': {
              mx: '-$2',
              position: 'relative',
              flexDirection: 'column'
            },
            '@m': {
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              mx: '-$3'
            },
            '@l': {
              mx: '-$4'
            }
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Column, {
            css: {
              '@initial': {
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start'
              },
              '@m': {
                width: '40%'
              },
              '@l': {
                width: '33.33%',
                ml: '8.33%'
              }
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
              as: "a",
              href: "https://g.page/ao-mail",
              color: "light",
              style: "naked",
              size: "small",
              css: {
                mt: '$3',
                color: '$LA60'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Paragraph */.nv, {
                size: "xs",
                color: "light",
                css: {
                  my: 0
                },
                children: ["9 Clearview Pl", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Brookvale NSW 2100"]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
              as: "a",
              href: "tel:+61296456777",
              leftIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* Phone */.LP, {
                size: "matchFontSize"
              }),
              color: "light",
              style: "naked",
              size: "small",
              css: {
                mt: '$2',
                color: '$LA60'
              },
              children: /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
                size: "xs",
                color: "light",
                css: {
                  my: 0
                },
                children: "(02) 9645 6777"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Flex */.kC, {
              css: {
                justifyContent: 'flex-start'
              },
              children: [/*#__PURE__*/jsx_runtime.jsx(components_button/* IconButton */.hU, {
                as: "a",
                href: "",
                color: "light",
                style: "naked",
                size: "small",
                css: {
                  mt: '$2',
                  color: '$LA60'
                },
                label: "Visit our Facebook page",
                children: /*#__PURE__*/jsx_runtime.jsx(theme/* Facebook */.s1, {
                  size: "regular"
                })
              }), /*#__PURE__*/jsx_runtime.jsx(components_button/* IconButton */.hU, {
                as: "a",
                href: "",
                color: "light",
                style: "naked",
                size: "small",
                css: {
                  mt: '$2',
                  color: '$LA60'
                },
                label: "Visit our LinkedIn page",
                children: /*#__PURE__*/jsx_runtime.jsx(theme/* LinkedIn */.yh, {
                  size: "regular"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Column, {
            css: {
              '@initial': {
                width: '100% !important',
                mt: '$3'
              },
              '@m': {
                width: '50% !important'
              },
              '@l': {
                width: '33.3% !important',
                mr: '8.33%'
              }
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(theme/* CovidSafeBanner */.DY, {
              css: {
                m: '0',
                width: '100%'
              }
            }), /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
              size: "xs",
              css: {
                color: '$LA40',
                mt: '$3',
                '@m': {
                  textAlign: 'right'
                }
              },
              children: "\xA9 ANO PTY Ltd. All rights reserved."
            })]
          })]
        })
      })
    })]
  });
};
const Footer = (_ref2) => {
  let {
    beforeFooter,
    footerCss,
    landing
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["beforeFooter", "footerCss", "landing"]);

  const landingFooter = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutGrid, {
      css: {
        pb: '$5'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ContentColumn, {
        children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: /*#__PURE__*/jsx_runtime.jsx(theme/* Logo */.TR, {
              color: "white",
              size: {
                '@initial': 'regular',
                '@m': 'large',
                '@l': 'xlarge'
              }
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
          as: "a",
          href: "https://g.page/ao-mail",
          color: "light",
          style: "naked",
          size: "small",
          offset: "left",
          css: {
            mt: '$3',
            color: '$LA60'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Paragraph */.nv, {
            size: "s",
            color: "light",
            css: {
              my: 0
            },
            children: ["9 Clearview Pl", /*#__PURE__*/jsx_runtime.jsx("br", {}), "Brookvale NSW 2100"]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
          as: "a",
          href: "tel:+61296456777",
          leftIcon: /*#__PURE__*/jsx_runtime.jsx(theme/* Phone */.LP, {
            size: "matchFontSize"
          }),
          color: "light",
          style: "naked",
          size: "small",
          offset: "left",
          css: {
            mt: '$3',
            color: '$LA60'
          },
          children: "(02) 9645 6777"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentColumn, {
        className: row3(),
        children: [/*#__PURE__*/jsx_runtime.jsx(theme/* CovidSafeBanner */.DY, {
          css: {
            mt: '$2'
          }
        }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
          as: "a",
          href: "#",
          color: "light",
          style: "naked",
          size: "small",
          offset: "left",
          css: {
            display: 'flex',
            mt: '$4',
            color: '$LA60'
          },
          children: "Privacy and Cookie Policies"
        }), /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
          as: "a",
          href: "#",
          color: "light",
          style: "naked",
          size: "small",
          offset: "left",
          css: {
            display: 'flex',
            mt: '$1',
            color: '$LA60'
          },
          children: "Terms of Service"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(theme/* ContentWrapper */.vs, {
      css: {
        backgroundColor: '$black'
      },
      children: /*#__PURE__*/jsx_runtime.jsx(theme/* Container */.W2, {
        children: /*#__PURE__*/jsx_runtime.jsx(theme/* Paragraph */.nv, {
          size: "xs",
          css: _objectSpread({
            color: '$LA60',
            my: '$2',
            pb: `$1`
          }, footerCss),
          children: "\xA9 ANO PTY Ltd. All rights reserved."
        })
      })
    })]
  });

  if (beforeFooter) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(FooterWrapper, _objectSpread(_objectSpread({
      style: "none"
    }, props), {}, {
      children: [beforeFooter, /*#__PURE__*/jsx_runtime.jsx(FooterWrapper, {
        as: "footer",
        children: landing ? landingFooter : /*#__PURE__*/jsx_runtime.jsx(MainFooter, {})
      })]
    }));
  }

  return /*#__PURE__*/jsx_runtime.jsx(FooterWrapper, _objectSpread(_objectSpread({
    as: "footer"
  }, props), {}, {
    children: landing ? landingFooter : /*#__PURE__*/jsx_runtime.jsx(MainFooter, {})
  }));
};
;// CONCATENATED MODULE: ./src/components/footer/index.ts

// EXTERNAL MODULE: ./src/lib/datocms/datocms.ts + 1 modules
var datocms = __webpack_require__(12660);
// EXTERNAL MODULE: ./node_modules/react-datocms/dist/cjs/index.js
var cjs = __webpack_require__(6354);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js + 20 modules
var motion_minimal = __webpack_require__(49772);
;// CONCATENATED MODULE: ./src/components/mobile-navigation/src/mobile-navigation.tsx



function mobile_navigation_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = mobile_navigation_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function mobile_navigation_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function mobile_navigation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function mobile_navigation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mobile_navigation_ownKeys(Object(source), true).forEach(function (key) { mobile_navigation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mobile_navigation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mobile_navigation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const mobile_navigation_staticData = [{
  section_label: 'Services',
  menu_items: [{
    name: 'Direct Mail',
    link: '/direct-mail'
  }, {
    name: 'Fulfilment',
    link: '/package-fulfilment'
  }, {
    name: 'Printing',
    link: '/printing'
  }]
}, {
  section_label: 'Company',
  menu_items: [{
    name: 'About Us',
    link: '/about'
  }, {
    name: 'Contact',
    link: '/contact'
  }, {
    name: 'Blog',
    link: '/blog'
  }]
}];
const NavWrapper = (0,theme/* styled */.zo)('div', {
  pointerEvents: 'none',
  opacity: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  variants: {
    open: {
      true: {
        clip: 'none',
        clipPath: 'none',
        overflow: 'auto',
        position: 'relative',
        whiteSpace: 'auto',
        size: 'auto',
        pointerEvents: 'auto',
        opacity: 1,
        mt: '$4',
        height: '100%'
      }
    }
  }
});
const BottomBorder = (0,theme/* styled */.zo)('span', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '1px',
  background: '$dotted-horizontal',
  backgroundSize: '16px 1px'
});
const mobile_navigation_SectionLabel = (0,theme/* styled */.zo)(theme/* Heading4 */.k8, {
  color: '$DA40',
  fontWeight: '$semibold',
  mt: '0',
  mb: '0',
  ml: '$2',
  '@m': {
    ml: '$3'
  }
});

const SectionLink = ({
  name,
  link,
  toggleNav
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, {
    as: "li",
    css: {
      flex: '0 0 50%',
      '& > a': {
        textDecoration: 'none'
      }
    },
    children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: link,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime.jsx(components_button/* Button */.zx, {
        style: "naked",
        as: "a",
        css: {
          display: 'inline-block',
          mt: '$3',
          py: '$2'
        },
        onClick: toggleNav,
        children: name
      })
    })
  });
};

const NavSection = ({
  section_label,
  menu_items,
  toggleNav
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Box */.xu, {
    css: {
      pt: '$5',
      pb: '$4',
      position: 'relative'
    },
    children: [/*#__PURE__*/jsx_runtime.jsx(BottomBorder, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(theme/* Container */.W2, {
      as: "section",
      children: [/*#__PURE__*/jsx_runtime.jsx(mobile_navigation_SectionLabel, {
        as: "h3",
        children: section_label
      }), /*#__PURE__*/jsx_runtime.jsx(theme/* Flex */.kC, {
        as: "ul",
        css: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
          mt: '$2',
          '@m': {
            width: '75%'
          }
        },
        wrap: true,
        children: menu_items.map(item => /*#__PURE__*/jsx_runtime.jsx(SectionLink, mobile_navigation_objectSpread(mobile_navigation_objectSpread({}, item), {}, {
          toggleNav: toggleNav
        }), item.name))
      })]
    })]
  });
};

const MobileNavigation = (_ref) => {
  let {
    navIsOpen,
    data = mobile_navigation_staticData
  } = _ref,
      props = mobile_navigation_objectWithoutProperties(_ref, ["navIsOpen", "data"]);

  return /*#__PURE__*/jsx_runtime.jsx(NavWrapper, mobile_navigation_objectSpread(mobile_navigation_objectSpread({
    open: navIsOpen
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(theme/* Flex */.kC, {
      column: true,
      css: {
        height: '100%',
        justifyContents: 'space-between'
      },
      children: data.map(section => /*#__PURE__*/jsx_runtime.jsx(NavSection, {
        section_label: section.section_label,
        menu_items: section.menu_items
      }, section.section_label))
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/mobile-navigation/index.ts

;// CONCATENATED MODULE: ./src/components/desktop-navigation/src/desktop-navigation.tsx


function desktop_navigation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function desktop_navigation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { desktop_navigation_ownKeys(Object(source), true).forEach(function (key) { desktop_navigation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { desktop_navigation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function desktop_navigation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function desktop_navigation_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = desktop_navigation_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function desktop_navigation_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const desktop_navigation_staticData = [{
  section_label: 'Services',
  menu_items: [{
    name: 'Direct Mail',
    link: '/direct-mail'
  }, {
    name: 'Fulfilment',
    link: '/package-fulfilment'
  }, {
    name: 'Printing',
    link: '/printing'
  }]
}, {
  section_label: 'Company',
  menu_items: [{
    name: 'About Us',
    link: '/about'
  }, {
    name: 'Contact',
    link: '/contact'
  }, {
    name: 'Blog',
    link: '/blog'
  }]
}];
const NavLinkText = (0,theme/* styled */.zo)(theme/* Paragraph */.nv, {
  cursor: 'pointer',
  color: '$B80',
  lineHeight: '24px',
  textDecoration: 'none',
  '&:hover': {
    color: '$DBA60'
  }
});

const NavLink = (_ref) => {
  let {
    name,
    link
  } = _ref,
      props = desktop_navigation_objectWithoutProperties(_ref, ["name", "link"]);

  return /*#__PURE__*/jsx_runtime.jsx(theme/* Box */.xu, desktop_navigation_objectSpread(desktop_navigation_objectSpread({}, props), {}, {
    css: {
      mr: '$4',
      '& > a': {
        textDecoration: 'none'
      },
      '@xl': {
        mr: '$5'
      }
    },
    as: "li",
    children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: link,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime.jsx(NavLinkText, {
        as: "a",
        children: name
      })
    })
  }));
};

const MenuWrapper = (0,theme/* styled */.zo)('nav', {
  display: 'flex',
  mx: '0',
  my: '$2',
  listStyle: 'none'
});
const DesktopNavigation = (_ref2) => {
  let props = Object.assign({}, _ref2);
  //const [services, ...rest] = staticData
  const menuItems = desktop_navigation_staticData.reduce((acc, i) => [...acc, ...i.menu_items], []);
  return /*#__PURE__*/jsx_runtime.jsx(MenuWrapper, desktop_navigation_objectSpread(desktop_navigation_objectSpread({
    as: "ul"
  }, props), {}, {
    children: [menuItems.map(service => /*#__PURE__*/jsx_runtime.jsx(NavLink, desktop_navigation_objectSpread({}, service), `service-${service.name}`))]
  }));
};
;// CONCATENATED MODULE: ./src/components/desktop-navigation/index.ts

// EXTERNAL MODULE: ./src/theme/stitches.config.ts + 5 modules
var stitches_config = __webpack_require__(54944);
// EXTERNAL MODULE: ./src/theme/atoms/index.ts
var atoms = __webpack_require__(34176);
// EXTERNAL MODULE: ./src/components/layout/src/layoutContext.ts
var layoutContext = __webpack_require__(42832);
// EXTERNAL MODULE: ./src/components/quoteButton.tsx
var quoteButton = __webpack_require__(10568);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./src/components/header-main/src/header-main.tsx



function header_main_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_main_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_main_ownKeys(Object(source), true).forEach(function (key) { header_main_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_main_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_main_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_main_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_main_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_main_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const HeaderOuter = (0,stitches_config/* styled */.zo)('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '$3',
  variants: {
    expanded: {
      true: {
        bottom: '0',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }
});
const Header = (0,stitches_config/* styled */.zo)('header', {
  backgroundColor: '$LA80',
  backdropFilter: 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  boxShadow: '0px 6px 12px $colors$DBA15',
  py: '$3',
  height: '100%',
  '@l': {
    pb: '$4'
  },
  moz: {
    backgroundColor: '$white'
  }
});
const NavContainer = (0,stitches_config/* styled */.zo)('div', {
  flex: '1 1',
  alignSelf: 'flex-end',
  ml: '$3',
  '@xl': {
    ml: '$6'
  }
});
const headerVariants = {
  hide: {
    y: '-100%'
  },
  show: {
    y: 0
  }
};
const spring = {
  type: 'spring',
  stiffness: 800,
  damping: 100
};
const HeaderMain = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    show
  } = _ref,
      props = header_main_objectWithoutProperties(_ref, ["show"]);

  const {
    0: menuIsOpen,
    1: setMenuIsOpen
  } = (0,react.useState)(false);
  const {
    toggleScrollLock
  } = (0,react.useContext)(layoutContext/* LayoutContext */.V);
  const router = (0,next_router.useRouter)();

  function handleMenuClick(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    toggleScrollLock();
    setMenuIsOpen(!menuIsOpen);
  } //close the menu if the route changes (navigating within dynmic links would leave it open)


  (0,react.useEffect)(() => {
    if (menuIsOpen) {
      handleMenuClick();
    }
  }, [router]);
  return /*#__PURE__*/jsx_runtime.jsx(HeaderOuter, header_main_objectSpread(header_main_objectSpread({
    as: motion_minimal.m.header,
    variants: headerVariants,
    animate: show ? 'show' : 'hide',
    expanded: menuIsOpen,
    transition: spring,
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Header, {
      as: motion_minimal.m.nav,
      layout: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(atoms/* Container */.W2, {
        as: motion_minimal.m.div,
        layout: true,
        css: {
          display: 'flex'
        },
        transition: spring,
        children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            style: {
              flex: '0 0'
            },
            children: /*#__PURE__*/jsx_runtime.jsx(atoms/* Logo */.TR, {
              size: {
                '@initial': 'regular',
                '@l': 'large'
              }
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(NavContainer, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(atoms/* Flex */.kC, {
            css: {
              justifyContent: 'flex-end',
              '@l': {
                justifyContent: 'space-between',
                alignItems: 'baseline',
                fontSize: '$p4d'
              }
            },
            children: [/*#__PURE__*/jsx_runtime.jsx(DesktopNavigation, {
              css: {
                display: 'none',
                mt: '$4',
                '@l': {
                  display: 'flex'
                }
              }
            }), /*#__PURE__*/jsx_runtime.jsx(quoteButton/* QuoteButton */.n, {
              css: {
                display: 'none',
                '@m': {
                  display: 'inline-flex'
                }
              }
            }), /*#__PURE__*/jsx_runtime.jsx(components_button/* MenuButton */.j2, {
              open: menuIsOpen,
              "aria-expanded": menuIsOpen,
              "aria-controls": "drawer-menu",
              onClick: handleMenuClick,
              css: {
                py: '$2',
                ml: '$3',
                '@l': {
                  display: 'none'
                }
              }
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(atoms/* Box */.xu, {
        as: motion_minimal.m.div,
        css: {
          '@l': {
            display: 'none'
          }
        },
        layout: true,
        children: /*#__PURE__*/jsx_runtime.jsx(MobileNavigation, {
          id: "drawer-menu",
          navIsOpen: menuIsOpen,
          toggleNav: handleMenuClick
        })
      })]
    })
  }));
});
;// CONCATENATED MODULE: ./src/components/header-main/index.ts

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-cycle.js + 1 modules
var use_cycle = __webpack_require__(47336);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.js
var use_motion_value = __webpack_require__(70572);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.js + 1 modules
var use_viewport_scroll = __webpack_require__(49957);
;// CONCATENATED MODULE: ./src/components/layout/src/layout.tsx



function layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const getStaticProps = async () => {
  const data = await request({
    query: 'GetFavicons'
  });
  return {
    props: data
  };
};
const Layout = (_ref) => {
  var _data$site;

  let {
    title,
    description,
    beforeFooter,
    metaData = [],
    canonicalPath,
    data,
    footerCss,
    altHeader,
    landing
  } = _ref,
      props = layout_objectWithoutProperties(_ref, ["title", "description", "beforeFooter", "metaData", "canonicalPath", "data", "footerCss", "altHeader", "landing"]);

  const [scrollLock, toggleScroll] = (0,use_cycle/* useCycle */.n)(false, true);
  const {
    0: velocityListener,
    1: setVelocityListener
  } = (0,react.useState)(true);
  const {
    0: showNav,
    1: setShowNav
  } = (0,react.useState)(true);
  const scrollPosition = (0,use_motion_value/* useMotionValue */.c)(0);
  const headerRef = (0,react.useRef)(); //@ts-ignore

  const meta = (0,cjs.renderMetaTags)(metaData.concat((data === null || data === void 0 ? void 0 : (_data$site = data.site) === null || _data$site === void 0 ? void 0 : _data$site.favicon) || []));
  const {
    scrollY
  } = (0,use_viewport_scroll/* useViewportScroll */.M)();
  (0,react.useEffect)(() => {
    if (!scrollLock) {
      const top = scrollPosition.get();
      window.scroll({
        top
      });
      setTimeout(setVelocityListener, 500, true);
    }
  }, [scrollLock]);
  (0,react.useEffect)(() => {
    let listener;

    function update() {
      if (scrollY.get() < 100) {
        setShowNav(true);
        return;
      }

      const velocity = scrollY.getVelocity();

      if (velocityListener && velocity > 100) {
        setShowNav(false);
        return;
      }

      if (velocity < -100) {
        setShowNav(true);
        return;
      }
    }

    function focusHeader() {
      setShowNav(true);
    }

    const hr = headerRef.current;

    if (hr) {
      hr.addEventListener('focusin', focusHeader);
    }

    const addScrollListener = window.setTimeout(() => {
      listener = scrollY.onChange(update);
    }, 1000);
    return () => {
      window.clearTimeout(addScrollListener);
      listener && listener();

      if (hr) {
        hr.removeEventListener('focusin', focusHeader);
      }
    };
  }, []);

  const toggleScrollLock = (skipPositionSet = false) => {
    const scrollIsLocked = !scrollLock;

    if (scrollIsLocked && !skipPositionSet) {
      scrollPosition.set(scrollY.get());
    }

    toggleScroll();
    setVelocityListener(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layoutContext/* LayoutContext.Provider */.V.Provider, {
    value: {
      scrollLock,
      toggleScrollLock,
      showNav,
      setShowNav
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [meta, /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "canonical",
        href: canonicalPath
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(atoms/* PageWrapper */.FE, {
      as: motion_minimal.m.main,
      style: scrollLock ? {
        position: 'fixed',
        width: '100%',
        left: '0',
        top: `-${scrollY.getPrevious()}px`
      } : {},
      children: [altHeader !== null && altHeader !== void 0 ? altHeader : /*#__PURE__*/jsx_runtime.jsx(HeaderMain, {
        show: showNav,
        ref: headerRef
      }), /*#__PURE__*/jsx_runtime.jsx(atoms/* ContentWrapper */.vs, {
        as: props.layoutElement,
        children: props.children
      }), /*#__PURE__*/jsx_runtime.jsx(Footer, {
        landing: landing,
        beforeFooter: beforeFooter,
        footerCss: footerCss
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/layout/index.ts


/***/ }),

/***/ 42832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ LayoutContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const LayoutContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  scrollLock: false,
  toggleScrollLock: undefined,
  showNav: false,
  setShowNav: undefined
});

/***/ }),

/***/ 21893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ ModalLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34176);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49772);






const ContentWrapper = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .TextHolder */ .L5, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  zIndex: '$3',
  overflow: 'hidden'
});
const borderMotionVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 48
  }
};
const ModalLayout = ({
  controls,
  main,
  hideControlsBorder,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [controls && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .TextHolder */ .L5, {
      padX: "xLarge",
      padY: "default",
      css: {
        flex: '0 0 auto',
        py: '$2',
        '@m': {
          py: '$3'
        }
      },
      children: controls
    }), controls && !hideControlsBorder && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_atoms__WEBPACK_IMPORTED_MODULE_1__/* .Border */ .OC, {
      as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.span,
      inherit: true,
      "aria-hidden": true,
      intial: "hidden",
      animate: "visible",
      exit: "hidden",
      css: {
        position: 'relative'
      },
      variants: borderMotionVariants
    }), (main || children) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
      padX: "xLarge",
      padY: "default",
      css: {
        flex: '1 1 auto'
      },
      children: main || children
    })]
  });
};

/***/ }),

/***/ 95778:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _components_layout_src_layoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42832);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47336);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53869);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ModalBody = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5172), __webpack_require__.e(9206)]).then(__webpack_require__.bind(__webpack_require__, 9206)).then(res => res.ModalBody), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9206)],
    modules: ["../components/modal/src/modal.tsx -> " + '@components/modal/src/modalBody']
  }
});
const Modal = (_ref) => {
  let {
    width,
    height,
    opens,
    children,
    layoutId
  } = _ref,
      props = _objectWithoutProperties(_ref, ["width", "height", "opens", "children", "layoutId"]);

  const [modalIsOpen, toggleModalIsOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .useCycle */ .n)(false, true);
  const {
    toggleScrollLock,
    setShowNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_layout_src_layoutContext__WEBPACK_IMPORTED_MODULE_1__/* .LayoutContext */ .V);

  function toggleModal() {
    toggleScrollLock();
    toggleModalIsOpen();
  }

  const modalProps = _objectSpread({
    toggle: toggleModal,
    layoutId
  }, props);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      modalIsOpen,
      toggleModal
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .AnimatePresence */ .M, {
      children: modalIsOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalBody, _objectSpread(_objectSpread({
        width: width,
        height: height
      }, modalProps), {}, {
        children: opens({
          modalIsOpen,
          toggleModal
        })
      }))
    })]
  });
};

/***/ }),

/***/ 10568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ QuoteButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75843);
/* harmony import */ var _modal_src_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95778);
/* harmony import */ var _temp_quote_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15320);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const QuoteButton = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: formWasSubmitted,
    1: setFormWasSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function handleFormSubmit() {
    setFormWasSubmitted(true);
  }

  function handleSubmitComplete(toggle) {
    return function () {
      toggle();
      setFormWasSubmitted(false);
    };
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal_src_modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
    opens: ({
      modalIsOpen,
      toggleModal
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_temp_quote_form__WEBPACK_IMPORTED_MODULE_3__/* .TempQuoteForm */ .D, {
      toggle: toggleModal,
      onSubmissionClose: handleSubmitComplete(toggleModal),
      onSubmissionComplete: handleFormSubmit,
      active: modalIsOpen
    }),
    children: ({
      toggleModal
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, _objectSpread(_objectSpread({
      onClick: toggleModal
    }, props), {}, {
      children: children || 'Get a quote'
    }))
  });
};

/***/ }),

/***/ 12660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": function() { return /* binding */ request; }
});

// EXTERNAL MODULE: ./node_modules/graphql-tag/main.js
var main = __webpack_require__(69901);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./src/lib/datocms/__generated__/types.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let BlogArticleModelOrderBy;

(function (BlogArticleModelOrderBy) {
  BlogArticleModelOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  BlogArticleModelOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  BlogArticleModelOrderBy["createdAt_ASC"] = "createdAt_ASC";
  BlogArticleModelOrderBy["createdAt_DESC"] = "createdAt_DESC";
  BlogArticleModelOrderBy["id_ASC"] = "id_ASC";
  BlogArticleModelOrderBy["id_DESC"] = "id_DESC";
  BlogArticleModelOrderBy["_firstPublishedAt_ASC"] = "_firstPublishedAt_ASC";
  BlogArticleModelOrderBy["_firstPublishedAt_DESC"] = "_firstPublishedAt_DESC";
  BlogArticleModelOrderBy["_publicationScheduledAt_ASC"] = "_publicationScheduledAt_ASC";
  BlogArticleModelOrderBy["_publicationScheduledAt_DESC"] = "_publicationScheduledAt_DESC";
  BlogArticleModelOrderBy["_unpublishingScheduledAt_ASC"] = "_unpublishingScheduledAt_ASC";
  BlogArticleModelOrderBy["_unpublishingScheduledAt_DESC"] = "_unpublishingScheduledAt_DESC";
  BlogArticleModelOrderBy["_publishedAt_ASC"] = "_publishedAt_ASC";
  BlogArticleModelOrderBy["_publishedAt_DESC"] = "_publishedAt_DESC";
  BlogArticleModelOrderBy["_status_ASC"] = "_status_ASC";
  BlogArticleModelOrderBy["_status_DESC"] = "_status_DESC";
  BlogArticleModelOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  BlogArticleModelOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  BlogArticleModelOrderBy["updatedAt_ASC"] = "updatedAt_ASC";
  BlogArticleModelOrderBy["updatedAt_DESC"] = "updatedAt_DESC";
  BlogArticleModelOrderBy["_isValid_ASC"] = "_isValid_ASC";
  BlogArticleModelOrderBy["_isValid_DESC"] = "_isValid_DESC";
  BlogArticleModelOrderBy["title_ASC"] = "title_ASC";
  BlogArticleModelOrderBy["title_DESC"] = "title_DESC";
})(BlogArticleModelOrderBy || (BlogArticleModelOrderBy = {}));

let ColorBucketType;

(function (ColorBucketType) {
  ColorBucketType["red"] = "red";
  ColorBucketType["orange"] = "orange";
  ColorBucketType["pink"] = "pink";
  ColorBucketType["cyan"] = "cyan";
  ColorBucketType["purple"] = "purple";
  ColorBucketType["blue"] = "blue";
  ColorBucketType["yellow"] = "yellow";
  ColorBucketType["green"] = "green";
  ColorBucketType["brown"] = "brown";
  ColorBucketType["grey"] = "grey";
  ColorBucketType["white"] = "white";
  ColorBucketType["black"] = "black";
})(ColorBucketType || (ColorBucketType = {}));

let FaviconType;

(function (FaviconType) {
  FaviconType["icon"] = "icon";
  FaviconType["appleTouchIcon"] = "appleTouchIcon";
  FaviconType["msApplication"] = "msApplication";
})(FaviconType || (FaviconType = {}));

let ImgixParamsAuto;

(function (ImgixParamsAuto) {
  ImgixParamsAuto["enhance"] = "enhance";
  ImgixParamsAuto["format"] = "format";
  ImgixParamsAuto["redeye"] = "redeye";
  ImgixParamsAuto["compress"] = "compress";
})(ImgixParamsAuto || (ImgixParamsAuto = {}));

let ImgixParamsBlendAlign;

(function (ImgixParamsBlendAlign) {
  ImgixParamsBlendAlign["top"] = "top";
  ImgixParamsBlendAlign["bottom"] = "bottom";
  ImgixParamsBlendAlign["middle"] = "middle";
  ImgixParamsBlendAlign["left"] = "left";
  ImgixParamsBlendAlign["right"] = "right";
  ImgixParamsBlendAlign["center"] = "center";
})(ImgixParamsBlendAlign || (ImgixParamsBlendAlign = {}));

let ImgixParamsBlendCrop;

(function (ImgixParamsBlendCrop) {
  ImgixParamsBlendCrop["top"] = "top";
  ImgixParamsBlendCrop["bottom"] = "bottom";
  ImgixParamsBlendCrop["left"] = "left";
  ImgixParamsBlendCrop["right"] = "right";
  ImgixParamsBlendCrop["faces"] = "faces";
})(ImgixParamsBlendCrop || (ImgixParamsBlendCrop = {}));

let ImgixParamsBlendFit;

(function (ImgixParamsBlendFit) {
  ImgixParamsBlendFit["clamp"] = "clamp";
  ImgixParamsBlendFit["clip"] = "clip";
  ImgixParamsBlendFit["crop"] = "crop";
  ImgixParamsBlendFit["scale"] = "scale";
  ImgixParamsBlendFit["max"] = "max";
})(ImgixParamsBlendFit || (ImgixParamsBlendFit = {}));

let ImgixParamsBlendMode;

(function (ImgixParamsBlendMode) {
  ImgixParamsBlendMode["color"] = "color";
  ImgixParamsBlendMode["burn"] = "burn";
  ImgixParamsBlendMode["dodge"] = "dodge";
  ImgixParamsBlendMode["darken"] = "darken";
  ImgixParamsBlendMode["difference"] = "difference";
  ImgixParamsBlendMode["exclusion"] = "exclusion";
  ImgixParamsBlendMode["hardlight"] = "hardlight";
  ImgixParamsBlendMode["hue"] = "hue";
  ImgixParamsBlendMode["lighten"] = "lighten";
  ImgixParamsBlendMode["luminosity"] = "luminosity";
  ImgixParamsBlendMode["multiply"] = "multiply";
  ImgixParamsBlendMode["overlay"] = "overlay";
  ImgixParamsBlendMode["saturation"] = "saturation";
  ImgixParamsBlendMode["screen"] = "screen";
  ImgixParamsBlendMode["softlight"] = "softlight";
  ImgixParamsBlendMode["normal"] = "normal";
})(ImgixParamsBlendMode || (ImgixParamsBlendMode = {}));

let ImgixParamsBlendSize;

(function (ImgixParamsBlendSize) {
  ImgixParamsBlendSize["inherit"] = "inherit";
})(ImgixParamsBlendSize || (ImgixParamsBlendSize = {}));

let ImgixParamsCh;

(function (ImgixParamsCh) {
  ImgixParamsCh["width"] = "width";
  ImgixParamsCh["dpr"] = "dpr";
  ImgixParamsCh["saveData"] = "saveData";
})(ImgixParamsCh || (ImgixParamsCh = {}));

let ImgixParamsCrop;

(function (ImgixParamsCrop) {
  ImgixParamsCrop["top"] = "top";
  ImgixParamsCrop["bottom"] = "bottom";
  ImgixParamsCrop["left"] = "left";
  ImgixParamsCrop["right"] = "right";
  ImgixParamsCrop["faces"] = "faces";
  ImgixParamsCrop["entropy"] = "entropy";
  ImgixParamsCrop["edges"] = "edges";
  ImgixParamsCrop["focalpoint"] = "focalpoint";
})(ImgixParamsCrop || (ImgixParamsCrop = {}));

let ImgixParamsCs;

(function (ImgixParamsCs) {
  ImgixParamsCs["srgb"] = "srgb";
  ImgixParamsCs["adobergb1998"] = "adobergb1998";
  ImgixParamsCs["tinysrgb"] = "tinysrgb";
  ImgixParamsCs["strip"] = "strip";
})(ImgixParamsCs || (ImgixParamsCs = {}));

let ImgixParamsFill;

(function (ImgixParamsFill) {
  ImgixParamsFill["solid"] = "solid";
  ImgixParamsFill["blur"] = "blur";
})(ImgixParamsFill || (ImgixParamsFill = {}));

let ImgixParamsFit;

(function (ImgixParamsFit) {
  ImgixParamsFit["clamp"] = "clamp";
  ImgixParamsFit["clip"] = "clip";
  ImgixParamsFit["crop"] = "crop";
  ImgixParamsFit["facearea"] = "facearea";
  ImgixParamsFit["fill"] = "fill";
  ImgixParamsFit["fillmax"] = "fillmax";
  ImgixParamsFit["max"] = "max";
  ImgixParamsFit["min"] = "min";
  ImgixParamsFit["scale"] = "scale";
})(ImgixParamsFit || (ImgixParamsFit = {}));

let ImgixParamsFlip;

(function (ImgixParamsFlip) {
  ImgixParamsFlip["h"] = "h";
  ImgixParamsFlip["v"] = "v";
  ImgixParamsFlip["hv"] = "hv";
})(ImgixParamsFlip || (ImgixParamsFlip = {}));

let ImgixParamsFm;

(function (ImgixParamsFm) {
  ImgixParamsFm["gif"] = "gif";
  ImgixParamsFm["jpg"] = "jpg";
  ImgixParamsFm["jp2"] = "jp2";
  ImgixParamsFm["json"] = "json";
  ImgixParamsFm["jxr"] = "jxr";
  ImgixParamsFm["pjpg"] = "pjpg";
  ImgixParamsFm["mp4"] = "mp4";
  ImgixParamsFm["png"] = "png";
  ImgixParamsFm["png8"] = "png8";
  ImgixParamsFm["png32"] = "png32";
  ImgixParamsFm["webp"] = "webp";
  ImgixParamsFm["webm"] = "webm";
})(ImgixParamsFm || (ImgixParamsFm = {}));

let ImgixParamsMarkAlign;

(function (ImgixParamsMarkAlign) {
  ImgixParamsMarkAlign["top"] = "top";
  ImgixParamsMarkAlign["middle"] = "middle";
  ImgixParamsMarkAlign["bottom"] = "bottom";
  ImgixParamsMarkAlign["left"] = "left";
  ImgixParamsMarkAlign["center"] = "center";
  ImgixParamsMarkAlign["right"] = "right";
})(ImgixParamsMarkAlign || (ImgixParamsMarkAlign = {}));

let ImgixParamsMarkFit;

(function (ImgixParamsMarkFit) {
  ImgixParamsMarkFit["clip"] = "clip";
  ImgixParamsMarkFit["crop"] = "crop";
  ImgixParamsMarkFit["fill"] = "fill";
  ImgixParamsMarkFit["max"] = "max";
  ImgixParamsMarkFit["scale"] = "scale";
})(ImgixParamsMarkFit || (ImgixParamsMarkFit = {}));

let ImgixParamsPalette;

(function (ImgixParamsPalette) {
  ImgixParamsPalette["css"] = "css";
  ImgixParamsPalette["json"] = "json";
})(ImgixParamsPalette || (ImgixParamsPalette = {}));

let ImgixParamsTransparency;

(function (ImgixParamsTransparency) {
  ImgixParamsTransparency["grid"] = "grid";
})(ImgixParamsTransparency || (ImgixParamsTransparency = {}));

let ImgixParamsTrim;

(function (ImgixParamsTrim) {
  ImgixParamsTrim["auto"] = "auto";
  ImgixParamsTrim["color"] = "color";
})(ImgixParamsTrim || (ImgixParamsTrim = {}));

let ImgixParamsTxtAlign;

(function (ImgixParamsTxtAlign) {
  ImgixParamsTxtAlign["top"] = "top";
  ImgixParamsTxtAlign["middle"] = "middle";
  ImgixParamsTxtAlign["bottom"] = "bottom";
  ImgixParamsTxtAlign["left"] = "left";
  ImgixParamsTxtAlign["center"] = "center";
  ImgixParamsTxtAlign["right"] = "right";
})(ImgixParamsTxtAlign || (ImgixParamsTxtAlign = {}));

let ImgixParamsTxtClip;

(function (ImgixParamsTxtClip) {
  ImgixParamsTxtClip["start"] = "start";
  ImgixParamsTxtClip["middle"] = "middle";
  ImgixParamsTxtClip["end"] = "end";
  ImgixParamsTxtClip["ellipsis"] = "ellipsis";
})(ImgixParamsTxtClip || (ImgixParamsTxtClip = {}));

let ImgixParamsTxtFit;
/** Specifies how to filter by usage */

(function (ImgixParamsTxtFit) {
  ImgixParamsTxtFit["max"] = "max";
})(ImgixParamsTxtFit || (ImgixParamsTxtFit = {}));

let ItemStatus;
/** Specifies how to filter JSON fields */

(function (ItemStatus) {
  ItemStatus["draft"] = "draft";
  ItemStatus["updated"] = "updated";
  ItemStatus["published"] = "published";
})(ItemStatus || (ItemStatus = {}));

let LandingPageV1ModelOrderBy;
/** Record of type Landing Page v1 (landing_page_v1) */

(function (LandingPageV1ModelOrderBy) {
  LandingPageV1ModelOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  LandingPageV1ModelOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  LandingPageV1ModelOrderBy["createdAt_ASC"] = "createdAt_ASC";
  LandingPageV1ModelOrderBy["createdAt_DESC"] = "createdAt_DESC";
  LandingPageV1ModelOrderBy["id_ASC"] = "id_ASC";
  LandingPageV1ModelOrderBy["id_DESC"] = "id_DESC";
  LandingPageV1ModelOrderBy["_firstPublishedAt_ASC"] = "_firstPublishedAt_ASC";
  LandingPageV1ModelOrderBy["_firstPublishedAt_DESC"] = "_firstPublishedAt_DESC";
  LandingPageV1ModelOrderBy["_publicationScheduledAt_ASC"] = "_publicationScheduledAt_ASC";
  LandingPageV1ModelOrderBy["_publicationScheduledAt_DESC"] = "_publicationScheduledAt_DESC";
  LandingPageV1ModelOrderBy["_unpublishingScheduledAt_ASC"] = "_unpublishingScheduledAt_ASC";
  LandingPageV1ModelOrderBy["_unpublishingScheduledAt_DESC"] = "_unpublishingScheduledAt_DESC";
  LandingPageV1ModelOrderBy["_publishedAt_ASC"] = "_publishedAt_ASC";
  LandingPageV1ModelOrderBy["_publishedAt_DESC"] = "_publishedAt_DESC";
  LandingPageV1ModelOrderBy["_status_ASC"] = "_status_ASC";
  LandingPageV1ModelOrderBy["_status_DESC"] = "_status_DESC";
  LandingPageV1ModelOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  LandingPageV1ModelOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  LandingPageV1ModelOrderBy["updatedAt_ASC"] = "updatedAt_ASC";
  LandingPageV1ModelOrderBy["updatedAt_DESC"] = "updatedAt_DESC";
  LandingPageV1ModelOrderBy["_isValid_ASC"] = "_isValid_ASC";
  LandingPageV1ModelOrderBy["_isValid_DESC"] = "_isValid_DESC";
  LandingPageV1ModelOrderBy["title_ASC"] = "title_ASC";
  LandingPageV1ModelOrderBy["title_DESC"] = "title_DESC";
})(LandingPageV1ModelOrderBy || (LandingPageV1ModelOrderBy = {}));

let LegalPageModelOrderBy;

(function (LegalPageModelOrderBy) {
  LegalPageModelOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  LegalPageModelOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  LegalPageModelOrderBy["createdAt_ASC"] = "createdAt_ASC";
  LegalPageModelOrderBy["createdAt_DESC"] = "createdAt_DESC";
  LegalPageModelOrderBy["id_ASC"] = "id_ASC";
  LegalPageModelOrderBy["id_DESC"] = "id_DESC";
  LegalPageModelOrderBy["_firstPublishedAt_ASC"] = "_firstPublishedAt_ASC";
  LegalPageModelOrderBy["_firstPublishedAt_DESC"] = "_firstPublishedAt_DESC";
  LegalPageModelOrderBy["_publicationScheduledAt_ASC"] = "_publicationScheduledAt_ASC";
  LegalPageModelOrderBy["_publicationScheduledAt_DESC"] = "_publicationScheduledAt_DESC";
  LegalPageModelOrderBy["_unpublishingScheduledAt_ASC"] = "_unpublishingScheduledAt_ASC";
  LegalPageModelOrderBy["_unpublishingScheduledAt_DESC"] = "_unpublishingScheduledAt_DESC";
  LegalPageModelOrderBy["_publishedAt_ASC"] = "_publishedAt_ASC";
  LegalPageModelOrderBy["_publishedAt_DESC"] = "_publishedAt_DESC";
  LegalPageModelOrderBy["_status_ASC"] = "_status_ASC";
  LegalPageModelOrderBy["_status_DESC"] = "_status_DESC";
  LegalPageModelOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  LegalPageModelOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  LegalPageModelOrderBy["updatedAt_ASC"] = "updatedAt_ASC";
  LegalPageModelOrderBy["updatedAt_DESC"] = "updatedAt_DESC";
  LegalPageModelOrderBy["_isValid_ASC"] = "_isValid_ASC";
  LegalPageModelOrderBy["_isValid_DESC"] = "_isValid_DESC";
  LegalPageModelOrderBy["title_ASC"] = "title_ASC";
  LegalPageModelOrderBy["title_DESC"] = "title_DESC";
})(LegalPageModelOrderBy || (LegalPageModelOrderBy = {}));

let MuxThumbnailFormatType;
/** Specifies how to filter by image orientation */

(function (MuxThumbnailFormatType) {
  MuxThumbnailFormatType["jpg"] = "jpg";
  MuxThumbnailFormatType["png"] = "png";
  MuxThumbnailFormatType["gif"] = "gif";
})(MuxThumbnailFormatType || (MuxThumbnailFormatType = {}));

let ResolutionType;

(function (ResolutionType) {
  ResolutionType["icon"] = "icon";
  ResolutionType["small"] = "small";
  ResolutionType["medium"] = "medium";
  ResolutionType["large"] = "large";
})(ResolutionType || (ResolutionType = {}));

let ServiceModelOrderBy;

(function (ServiceModelOrderBy) {
  ServiceModelOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  ServiceModelOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  ServiceModelOrderBy["createdAt_ASC"] = "createdAt_ASC";
  ServiceModelOrderBy["createdAt_DESC"] = "createdAt_DESC";
  ServiceModelOrderBy["id_ASC"] = "id_ASC";
  ServiceModelOrderBy["id_DESC"] = "id_DESC";
  ServiceModelOrderBy["_firstPublishedAt_ASC"] = "_firstPublishedAt_ASC";
  ServiceModelOrderBy["_firstPublishedAt_DESC"] = "_firstPublishedAt_DESC";
  ServiceModelOrderBy["position_ASC"] = "position_ASC";
  ServiceModelOrderBy["position_DESC"] = "position_DESC";
  ServiceModelOrderBy["_publicationScheduledAt_ASC"] = "_publicationScheduledAt_ASC";
  ServiceModelOrderBy["_publicationScheduledAt_DESC"] = "_publicationScheduledAt_DESC";
  ServiceModelOrderBy["_unpublishingScheduledAt_ASC"] = "_unpublishingScheduledAt_ASC";
  ServiceModelOrderBy["_unpublishingScheduledAt_DESC"] = "_unpublishingScheduledAt_DESC";
  ServiceModelOrderBy["_publishedAt_ASC"] = "_publishedAt_ASC";
  ServiceModelOrderBy["_publishedAt_DESC"] = "_publishedAt_DESC";
  ServiceModelOrderBy["_status_ASC"] = "_status_ASC";
  ServiceModelOrderBy["_status_DESC"] = "_status_DESC";
  ServiceModelOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  ServiceModelOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  ServiceModelOrderBy["updatedAt_ASC"] = "updatedAt_ASC";
  ServiceModelOrderBy["updatedAt_DESC"] = "updatedAt_DESC";
  ServiceModelOrderBy["_isValid_ASC"] = "_isValid_ASC";
  ServiceModelOrderBy["_isValid_DESC"] = "_isValid_DESC";
  ServiceModelOrderBy["illustration_ASC"] = "illustration_ASC";
  ServiceModelOrderBy["illustration_DESC"] = "illustration_DESC";
  ServiceModelOrderBy["mainHeading_ASC"] = "mainHeading_ASC";
  ServiceModelOrderBy["mainHeading_DESC"] = "mainHeading_DESC";
  ServiceModelOrderBy["title_ASC"] = "title_ASC";
  ServiceModelOrderBy["title_DESC"] = "title_DESC";
})(ServiceModelOrderBy || (ServiceModelOrderBy = {}));

let SiteLocale;
/** Specifies how to filter Slug fields */

(function (SiteLocale) {
  SiteLocale["en"] = "en";
})(SiteLocale || (SiteLocale = {}));

let StaffProfileModelOrderBy;
/** Record of type Staff Profile (staff_profile) */

(function (StaffProfileModelOrderBy) {
  StaffProfileModelOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  StaffProfileModelOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  StaffProfileModelOrderBy["createdAt_ASC"] = "createdAt_ASC";
  StaffProfileModelOrderBy["createdAt_DESC"] = "createdAt_DESC";
  StaffProfileModelOrderBy["id_ASC"] = "id_ASC";
  StaffProfileModelOrderBy["id_DESC"] = "id_DESC";
  StaffProfileModelOrderBy["_firstPublishedAt_ASC"] = "_firstPublishedAt_ASC";
  StaffProfileModelOrderBy["_firstPublishedAt_DESC"] = "_firstPublishedAt_DESC";
  StaffProfileModelOrderBy["position_ASC"] = "position_ASC";
  StaffProfileModelOrderBy["position_DESC"] = "position_DESC";
  StaffProfileModelOrderBy["_publicationScheduledAt_ASC"] = "_publicationScheduledAt_ASC";
  StaffProfileModelOrderBy["_publicationScheduledAt_DESC"] = "_publicationScheduledAt_DESC";
  StaffProfileModelOrderBy["_unpublishingScheduledAt_ASC"] = "_unpublishingScheduledAt_ASC";
  StaffProfileModelOrderBy["_unpublishingScheduledAt_DESC"] = "_unpublishingScheduledAt_DESC";
  StaffProfileModelOrderBy["_publishedAt_ASC"] = "_publishedAt_ASC";
  StaffProfileModelOrderBy["_publishedAt_DESC"] = "_publishedAt_DESC";
  StaffProfileModelOrderBy["_status_ASC"] = "_status_ASC";
  StaffProfileModelOrderBy["_status_DESC"] = "_status_DESC";
  StaffProfileModelOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  StaffProfileModelOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  StaffProfileModelOrderBy["updatedAt_ASC"] = "updatedAt_ASC";
  StaffProfileModelOrderBy["updatedAt_DESC"] = "updatedAt_DESC";
  StaffProfileModelOrderBy["_isValid_ASC"] = "_isValid_ASC";
  StaffProfileModelOrderBy["_isValid_DESC"] = "_isValid_DESC";
  StaffProfileModelOrderBy["jobTitle_ASC"] = "jobTitle_ASC";
  StaffProfileModelOrderBy["jobTitle_DESC"] = "jobTitle_DESC";
  StaffProfileModelOrderBy["name_ASC"] = "name_ASC";
  StaffProfileModelOrderBy["name_DESC"] = "name_DESC";
})(StaffProfileModelOrderBy || (StaffProfileModelOrderBy = {}));

let UploadOrderBy;

(function (UploadOrderBy) {
  UploadOrderBy["_createdAt_ASC"] = "_createdAt_ASC";
  UploadOrderBy["_createdAt_DESC"] = "_createdAt_DESC";
  UploadOrderBy["size_ASC"] = "size_ASC";
  UploadOrderBy["size_DESC"] = "size_DESC";
  UploadOrderBy["resolution_ASC"] = "resolution_ASC";
  UploadOrderBy["resolution_DESC"] = "resolution_DESC";
  UploadOrderBy["filename_ASC"] = "filename_ASC";
  UploadOrderBy["filename_DESC"] = "filename_DESC";
  UploadOrderBy["basename_ASC"] = "basename_ASC";
  UploadOrderBy["basename_DESC"] = "basename_DESC";
  UploadOrderBy["mimeType_ASC"] = "mimeType_ASC";
  UploadOrderBy["mimeType_DESC"] = "mimeType_DESC";
  UploadOrderBy["format_ASC"] = "format_ASC";
  UploadOrderBy["format_DESC"] = "format_DESC";
  UploadOrderBy["_updatedAt_ASC"] = "_updatedAt_ASC";
  UploadOrderBy["_updatedAt_DESC"] = "_updatedAt_DESC";
  UploadOrderBy["id_ASC"] = "id_ASC";
  UploadOrderBy["id_DESC"] = "id_DESC";
})(UploadOrderBy || (UploadOrderBy = {}));

let UploadOrientation;
/** Specifies how to filter by size */

(function (UploadOrientation) {
  UploadOrientation["landscape"] = "landscape";
  UploadOrientation["portrait"] = "portrait";
  UploadOrientation["square"] = "square";
})(UploadOrientation || (UploadOrientation = {}));

let UploadType;
/** Specifies how to filter by update datetime */

(function (UploadType) {
  UploadType["image"] = "image";
  UploadType["audio"] = "audio";
  UploadType["video"] = "video";
  UploadType["richtext"] = "richtext";
  UploadType["presentation"] = "presentation";
  UploadType["spreadsheet"] = "spreadsheet";
  UploadType["pdfdocument"] = "pdfdocument";
  UploadType["archive"] = "archive";
})(UploadType || (UploadType = {}));

let VideoMp4Res;

(function (VideoMp4Res) {
  VideoMp4Res["low"] = "low";
  VideoMp4Res["medium"] = "medium";
  VideoMp4Res["high"] = "high";
})(VideoMp4Res || (VideoMp4Res = {}));

const MetaTagsFragmentFragmentDoc = (main_default())`
    fragment metaTagsFragment on Tag {
  attributes
  content
  tag
}
    `;
const ResponsiveImageFragmentFragmentDoc = (main_default())`
    fragment responsiveImageFragment on ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}
    `;
const FeatureParagraphImageRecordFragmentFragmentDoc = (main_default())`
    fragment featureParagraphImageRecordFragment on FeatureParagraphImageRecord {
  __typename
  id
  heading
  cropImage
  imagePosition
  paragraph {
    value
  }
  image {
    responsiveImage(imgixParams: {fit: crop, w: 480, h: 480, auto: format}) {
      ...responsiveImageFragment
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
const CtaRecordFragmentFragmentDoc = (main_default())`
    fragment ctaRecordFragment on CtaRecord {
  __typename
  id
  heading
  subtext
}
    `;
const FullWidthCalloutRecordFragmentFragmentDoc = (main_default())`
    fragment fullWidthCalloutRecordFragment on FullWidthCalloutRecord {
  id
  __typename
  subheading
  callout {
    value
  }
}
    `;
const SideBySidePRecordFragmentFragmentDoc = (main_default())`
    fragment sideBySidePRecordFragment on SideBySidePRecord {
  id
  __typename
  leftHeading
  leftParagraph {
    value
  }
  rightHeading
  rightParagraph {
    value
  }
}
    `;
const StaffProfileCollectionRecordFragmentFragmentDoc = (main_default())`
    fragment staffProfileCollectionRecordFragment on StaffProfileCollectionRecord {
  id
  __typename
  profiles {
    id
    name
    jobTitle
    position
    biography {
      value
    }
    avatar {
      responsiveImage(imgixParams: {fit: fill, w: 288, h: 288, auto: format}) {
        ...responsiveImageFragment
      }
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
const TwoColumnListRecordFragmentFragmentDoc = (main_default())`
    fragment twoColumnListRecordFragment on TwoColumnListRecord {
  __typename
  id
  serviceList
}
    `;
const TestimonialRecordFragmentFragmentDoc = (main_default())`
    fragment testimonialRecordFragment on TestimonialRecord {
  __typename
  id
  name
  testimonial
  positionCompany
  photo {
    responsiveImage(imgixParams: {fit: crop, w: 240, h: 240, auto: format}) {
      ...responsiveImageFragment
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
const GetAboutUsDocument = (main_default())`
    query GetAboutUs {
  aboutUsPage {
    _seoMetaTags {
      ...metaTagsFragment
    }
    mainHeading
    heroParagraph {
      value
    }
    pageContent {
      value
      blocks {
        ... on CtaRecord {
          ...ctaRecordFragment
        }
        ... on FeatureParagraphImageRecord {
          ...featureParagraphImageRecordFragment
        }
        ... on FullWidthCalloutRecord {
          ...fullWidthCalloutRecordFragment
        }
        ... on SideBySidePRecord {
          ...sideBySidePRecordFragment
        }
        ... on StaffProfileCollectionRecord {
          ...staffProfileCollectionRecordFragment
        }
        ... on TwoColumnListRecord {
          ...twoColumnListRecordFragment
        }
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${CtaRecordFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}
${FullWidthCalloutRecordFragmentFragmentDoc}
${SideBySidePRecordFragmentFragmentDoc}
${StaffProfileCollectionRecordFragmentFragmentDoc}
${TwoColumnListRecordFragmentFragmentDoc}`;
const GetBlogPageDocument = (main_default())`
    query GetBlogPage {
  blogPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    pageSlug
    title
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
const GetBlogPostSummariesDocument = (main_default())`
    query getBlogPostSummaries {
  allBlogArticles {
    id
    slug
    title
    mainImage {
      responsiveImage(imgixParams: {fit: crop, w: 336, h: 192, auto: format}) {
        ...responsiveImageFragment
      }
    }
    summary {
      value
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;
const GetBlogPostDocument = (main_default())`
    query getBlogPost($pageSlug: String!) {
  blogArticle(filter: {slug: {eq: $pageSlug}}) {
    id
    slug
    title
    mainImage {
      responsiveImage(imgixParams: {fit: crop, w: 800, h: 400, auto: format}) {
        ...responsiveImageFragment
      }
    }
    _seoMetaTags {
      ...metaTagsFragment
    }
    updatedAt
    article {
      value
    }
    summary {
      value
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}
${MetaTagsFragmentFragmentDoc}`;
const GetBlogPostPathsDocument = (main_default())`
    query getBlogPostPaths {
  allBlogArticles {
    id
    slug
  }
}
    `;
const GetContactPageDocument = (main_default())`
    query GetContactPage {
  contactPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    pageSlug
    title
    location {
      latitude
      longitude
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
const GetFaviconsDocument = (main_default())`
    query GetFavicons {
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
const GetHomePageDocument = (main_default())`
    query GetHomePage {
  homepage {
    _seoMetaTags {
      ...metaTagsFragment
    }
    mainHeading
    heroParagraph {
      value
    }
    serviceCards {
      title
      description
      image {
        responsiveImage(imgixParams: {fit: crop, w: 400, h: 240, auto: format}) {
          ...responsiveImageFragment
        }
      }
      linkText
      linkTarget {
        pageSlug
      }
    }
    contentSections {
      ... on FeatureParagraphImageRecord {
        ...featureParagraphImageRecordFragment
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${ResponsiveImageFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}`;
const GetLandingPageDocument = (main_default())`
    query GetLandingPage($pageSlug: String!) {
  landingPageV1(filter: {pageSlug: {eq: $pageSlug}}) {
    _seoMetaTags {
      content
      tag
      attributes
    }
    title
    pageContent
    id
    canonicalPath
  }
}
    `;
const GetLandingPagesDocument = (main_default())`
    query GetLandingPages {
  allLandingPageV1s {
    pageSlug
  }
}
    `;
const GetLegalListPageDocument = (main_default())`
    query GetLegalListPage {
  legalPage {
    id
    _seoMetaTags {
      ...metaTagsFragment
    }
    legalPageSlug
    title
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
const GetLegalPageDocument = (main_default())`
    query GetLegalPage($legalPageSlug: String!) {
  legalPage(filter: {legalPageSlug: {eq: $legalPageSlug}}) {
    id
    legalPageSlug
    title
    _seoMetaTags {
      ...metaTagsFragment
    }
    summary {
      value
    }
    legalText {
      value
      links {
        __typename
        ... on ContactPageRecord {
          id
          __typename
          pageSlug
        }
        ... on LegalPageRecord {
          id
          __typename
          legalPageSlug
        }
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}`;
const GetLegalPagesDocument = (main_default())`
    query GetLegalPages {
  allLegalPages {
    id
    legalPageSlug
    title
    summary {
      value
    }
  }
}
    `;
const GetServicePageDocument = (main_default())`
    query GetServicePage($pageSlug: String!) {
  service(filter: {pageSlug: {eq: $pageSlug}}) {
    _seoMetaTags {
      ...metaTagsFragment
    }
    canonicalPath
    id
    mainHeading
    illustration
    heroParagraph {
      value
    }
    leftRightParagraphs {
      ... on FeatureParagraphImageRecord {
        ...featureParagraphImageRecordFragment
      }
    }
    pageContent {
      value
      blocks {
        ... on TwoColumnListRecord {
          ...twoColumnListRecordFragment
        }
      }
    }
    modularContent {
      ... on SideBySidePRecord {
        ...sideBySidePRecordFragment
      }
      ... on TestimonialRecord {
        ...testimonialRecordFragment
      }
      ... on CtaRecord {
        ...ctaRecordFragment
      }
    }
  }
}
    ${MetaTagsFragmentFragmentDoc}
${FeatureParagraphImageRecordFragmentFragmentDoc}
${TwoColumnListRecordFragmentFragmentDoc}
${SideBySidePRecordFragmentFragmentDoc}
${TestimonialRecordFragmentFragmentDoc}
${CtaRecordFragmentFragmentDoc}`;
const GetServicePagesDocument = (main_default())`
    query GetServicePages {
  allServices {
    pageSlug
  }
}
    `;

const defaultWrapper = (action, _operationName) => action();

function getSdk(client, withWrapper = defaultWrapper) {
  return {
    GetAboutUs(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetAboutUsDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetAboutUs');
    },

    GetBlogPage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetBlogPageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetBlogPage');
    },

    getBlogPostSummaries(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetBlogPostSummariesDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'getBlogPostSummaries');
    },

    getBlogPost(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetBlogPostDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'getBlogPost');
    },

    getBlogPostPaths(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetBlogPostPathsDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'getBlogPostPaths');
    },

    GetContactPage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetContactPageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetContactPage');
    },

    GetFavicons(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetFaviconsDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetFavicons');
    },

    GetHomePage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetHomePageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetHomePage');
    },

    GetLandingPage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetLandingPageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetLandingPage');
    },

    GetLandingPages(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetLandingPagesDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetLandingPages');
    },

    GetLegalListPage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetLegalListPageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetLegalListPage');
    },

    GetLegalPage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetLegalPageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetLegalPage');
    },

    GetLegalPages(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetLegalPagesDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetLegalPages');
    },

    GetServicePage(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetServicePageDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetServicePage');
    },

    GetServicePages(variables, requestHeaders) {
      return withWrapper(wrappedRequestHeaders => client.request(GetServicePagesDocument, variables, _objectSpread(_objectSpread({}, requestHeaders), wrappedRequestHeaders)), 'GetServicePages');
    }

  };
}
;// CONCATENATED MODULE: ./src/lib/datocms/datocms.ts

async function request({
  query,
  preview,
  pageHeaders,
  variables
}) {
  const endpoint = preview ? `${process.env.NEXT_DATOCMS_GRAPHQL_URL}/preview` : process.env.NEXT_DATOCMS_GRAPHQL_URL;
  const GraphQLClient = await __webpack_require__.e(/* import() */ 8687).then(__webpack_require__.t.bind(__webpack_require__, 28687, 23)).then(res => res.GraphQLClient);
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  const sdk = getSdk(client); //@ts-ignore

  return sdk[query](variables, pageHeaders);
}

/***/ }),

/***/ 21967:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": function() { return /* reexport */ ClientOnlyPortal; },
  "m": function() { return /* reexport */ UserData/* UserData */.m; }
});

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
;// CONCATENATED MODULE: ./src/lib/react/clientOnlyPortal.ts
//import { useRef, useEffect, useState } from 'react'

function ClientOnlyPortal({
  children,
  selector = '#portal-modal'
}) {
  var _document;

  /*
  
  Using a ref to ensure the portal only fires in the client would stop layout animations flowing through the portal on mount
  
  const ref = useRef()
  const [mounted, setMounted] = useState(false)
   useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])
  */
  return document ? /*#__PURE__*/(0,react_dom.createPortal)(children, (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(selector)) : null;
}
// EXTERNAL MODULE: ./src/lib/react/UserData.ts + 1 modules
var UserData = __webpack_require__(98681);
;// CONCATENATED MODULE: ./src/lib/react/index.ts



/***/ }),

/***/ 26952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": function() { return /* binding */ InputLabel; },
/* harmony export */   "Kx": function() { return /* binding */ TextArea; },
/* harmony export */   "II": function() { return /* binding */ Input; }
/* harmony export */ });
/* unused harmony exports InputStyles, TextAreaStyles */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35222);
/* harmony import */ var _theme_atoms_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92640);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54944);
/* harmony import */ var _theme_typography_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31950);




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const InputStyles = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_theme_typography_text__WEBPACK_IMPORTED_MODULE_5__/* .Paragraph */ .n, {
  willChange: 'border-color',
  backgroundColor: '$DA10',
  px: 'calc($3 - 2px)',
  py: 'calc($2 - 2px)',
  br: '$3',
  color: '$DBA70',
  overflow: 'hidden',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mt: '$2',
  mx: '0',
  mb: '0',
  width: '100%',
  '&::placeholder': {
    color: '$DBA50'
  },
  '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button,': {
    '-webkit-appearance': 'none'
  },
  '&:hover': {
    borderColor: '$DBA40'
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$blue',
    color: '$DBA80'
  },
  variants: {
    state: {
      error: {
        backgroundColor: '$R10',
        borderColor: '$R30',
        color: '$red',
        '&:hover': {
          borderColor: '$red'
        },
        '&:focus': {
          borderColor: '$R40',
          color: '$R40'
        },
        '&::placeholder': {
          color: '$R30'
        }
      }
    }
  }
});
const TextAreaStyles = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(InputStyles, {
  lineHeight: 1.5,
  variants: {
    resizeVertical: {
      true: {
        resize: 'vertical'
      }
    }
  }
});
const InputLabel = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_theme_typography_text__WEBPACK_IMPORTED_MODULE_5__/* .Paragraph */ .n, {
  color: '$DA70',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline'
});
const TextArea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextAreaStyles, _objectSpread(_objectSpread({
  ref: ref
}, props), {}, {
  as: "textarea"
})));
const Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    id,
    children,
    value,
    defaultValue,
    name,
    type,
    placeholder,
    errors,
    required,
    onChange,
    onBlur
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "children", "value", "defaultValue", "name", "type", "placeholder", "errors", "required", "onChange", "onBlur"]);

  const inputProps = !children && props;
  const error = errors === null || errors === void 0 ? void 0 : errors[name];

  const _input = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputStyles, _objectSpread({
    id: id,
    as: "input",
    value: value,
    defaultValue: defaultValue,
    name: name,
    type: type,
    placeholder: placeholder,
    ref: ref,
    state: error && 'error',
    "aria-invalid": error ? 'true' : 'false',
    onChange: onChange,
    onBlur: onBlur
  }, inputProps));

  if (!children) {
    return _input;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_atoms_layout__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, _objectSpread(_objectSpread({
    css: {
      mt: '$3'
    }
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputLabel, {
      as: "label",
      size: "s",
      htmlFor: id,
      children: [children, !required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: (0,_theme_utils_utilityClasses__WEBPACK_IMPORTED_MODULE_2__.visuallyHidden)(),
          children: "\u2014"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_typography_text__WEBPACK_IMPORTED_MODULE_5__/* .Paragraph */ .n, {
          size: "xs",
          css: {
            color: '$DA50'
          },
          children: "optional"
        })]
      })]
    }), _input, error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_atoms_layout__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      css: {
        backgroundColor: '$R30',
        display: 'inline-block',
        mt: '$2',
        px: '$2',
        br: '$2'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_typography_text__WEBPACK_IMPORTED_MODULE_5__/* .Paragraph */ .n, {
        size: "xs",
        css: {
          my: '0',
          display: 'inline-block',
          color: '$white'
        },
        role: "alert",
        children: errors[name].message
      })
    })]
  }));
});

/***/ }),

/***/ 77860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ Border; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);
/* harmony import */ var _theme_atoms_listCardWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84546);


const Border = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('span', {
  position: 'absolute',
  variants: {
    position: {
      bottom: {
        background: '$dotted-horizontal',
        height: '1px',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundSize: '16px 1px'
      },
      top: {
        background: '$dotted-horizontal',
        height: '1px',
        top: '0',
        bottom: 'auto',
        left: '0',
        width: '100%',
        backgroundSize: '16px 1px'
      },
      left: {
        background: '$dotted-vertical',
        width: '1px',
        top: '0',
        left: '0',
        height: '100%',
        backgroundSize: '1px 16px'
      },
      right: {
        background: '$dotted-vertical',
        width: '1px',
        top: '0',
        right: '0',
        left: 'auto',
        height: '100%',
        backgroundSize: '1px 16px'
      }
    }
  },
  defaultVariants: {
    position: 'bottom'
  },
  [`${_theme_atoms_listCardWrapper__WEBPACK_IMPORTED_MODULE_1__/* .ListCardWrapper */ .Y}:last-child > &`]: {
    display: 'none'
  }
});

/***/ }),

/***/ 99672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ Checkbox; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _theme_typography_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31950);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92640);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CheckboxStyles = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('input', {
  backgroundColor: '$white',
  size: '$2',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mr: '$3'
});
const LabelStyles = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_typography_text__WEBPACK_IMPORTED_MODULE_3__/* .Paragraph */ .n, {
  color: '$DA70'
});
const Checkbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    id,
    checked,
    defaultChecked,
    children,
    name,
    onChange,
    onBlur
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "checked", "defaultChecked", "children", "name", "onChange", "onBlur"]);

  const inputProps = !children && props;

  const _checkbox = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckboxStyles, _objectSpread({
    id: id,
    type: "checkbox",
    defaultChecked: defaultChecked,
    name: name,
    checked: checked,
    ref: ref,
    onChange: onChange,
    onBlur: onBlur
  }, inputProps));

  if (!children) {
    return _checkbox;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, _objectSpread(_objectSpread({}, props), {}, {
    children: [_checkbox, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LabelStyles, {
      size: "xs",
      as: "label",
      htmlFor: id,
      children: children
    })]
  }));
});

/***/ }),

/***/ 7211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const Container = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('div', {
  position: 'relative',
  mx: 'auto',
  px: '$3',
  '@m': {
    px: '$4',
    maxWidth: '60rem'
  },
  '@l': {
    maxWidth: '96rem',
    px: '$5'
  }
});

/***/ }),

/***/ 71000:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ CloseControls; }
/* harmony export */ });
/* unused harmony export ControlLayout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75843);
/* harmony import */ var _theme_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54944);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49772);



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Background = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)('div', {
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    flex: '1 1 auto',
    '@m': {
      px: '$3'
    },
    '@l': {
      px: '$5'
    }
  },
  '& > *:first-child, & > *:last-child': {
    flex: '0 0 auto',
    px: '0'
  },
  width: '100%'
});
const childAnimationVariants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const childAnimations = {
  initial: 'hidden',
  exit: 'hidden',
  variants: childAnimationVariants,
  animate: 'visible'
};

function createMotionElementsWithControls(children) {
  return children.map((child, i) => {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.span, _objectSpread(_objectSpread({}, childAnimations), {}, {
      key: i
    }), child);
  });
}

const ControlLayout = (_ref) => {
  let {
    padding,
    leftChild = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
    rightChild = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
    centerChild = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
  } = _ref,
      props = _objectWithoutProperties(_ref, ["padding", "leftChild", "rightChild", "centerChild"]);

  const _children = [leftChild, centerChild, rightChild];
  const motionChildren = createMotionElementsWithControls(_children);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, _objectSpread(_objectSpread(_objectSpread({}, padding), props), {}, {
    children: motionChildren
  }));
};
const CloseControls = (_ref2) => {
  let {
    handleClose
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["handleClose"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ControlLayout, _objectSpread(_objectSpread({}, props), {}, {
    rightChild: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
      leftIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_icons__WEBPACK_IMPORTED_MODULE_3__.Close, {}),
      size: "small",
      style: "naked",
      color: "dark",
      onClick: handleClose,
      children: "Close"
    })
  }));
};

/***/ }),

/***/ 82264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ CovidSafeBanner; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);
/* harmony import */ var _theme_typography_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31950);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63239);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Background = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  backgroundColor: '$LA25',
  br: '$4',
  display: 'flex',
  alignItems: 'center',
  px: '$3',
  py: '$1',
  '@m': {
    px: '$4',
    py: '$2'
  },
  '@l': {
    px: '$5',
    py: '$2'
  }
});
const CovidSafeBanner = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Background, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_3__.CovidSafe, {
      css: {
        flex: '0 0 $10',
        size: '$9'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_typography_text__WEBPACK_IMPORTED_MODULE_2__/* .Paragraph */ .n, {
      size: "xs",
      css: {
        ml: '$4',
        color: '$LA80',
        mt: '0',
        flex: '0 1 100%'
      },
      children: "A&O is fully open for business and operating with a COVID safe plan."
    })]
  }));
};

/***/ }),

/***/ 91238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ Logo; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Svg = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('svg', {
  variants: {
    size: {
      small: {
        height: '$4'
      },
      regular: {
        height: '$5'
      },
      large: {
        height: '$6'
      }
    }
  }
});
const Text = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('path', {
  variants: {
    color: {
      primary: {
        fill: '$darkBlue'
      },
      white: {
        fill: '$white'
      },
      allWhite: {
        fill: '$white'
      }
    }
  }
});
const Leaf = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('path', {
  variants: {
    color: {
      primary: {
        fill: '$green'
      },
      white: {
        fill: '$green'
      },
      allWhite: {
        fill: '$white'
      }
    }
  }
});
const Orange = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('path', {
  variants: {
    color: {
      primary: {
        fill: 'url(#logoOrangeGradient)'
      },
      white: {
        fill: 'url(#logoOrangeGradient)'
      },
      allWhite: {
        fill: '$white'
      }
    }
  }
});
const Logo = (_ref) => {
  let {
    color = 'primary',
    size = 'regular'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Svg, _objectSpread(_objectSpread({
    size: size
  }, props), {}, {
    viewBox: "0 0 84 40",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Orange, {
      color: color,
      d: "M60.06 25.26c0 2.64.9 4.84 2.7 6.58a8.52 8.52 0 006.17 2.59c2.53 0 4.66-.9 6.4-2.64a8.83 8.83 0 002.58-6.47c0-2.6-.84-4.73-2.58-6.47a8.5 8.5 0 00-6.34-2.65c-2.53 0-4.6.9-6.35 2.65a8.7 8.7 0 00-2.58 6.41z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
      color: color,
      d: "M40.86 23.74l5.06 6.13.16-.17c.57-.61 1.07-1.18 1.58-1.74.5-.56.95-1.12 1.4-1.74l2.75 2.87c-.34.5-.79 1.06-1.35 1.68-.56.62-1.23 1.41-1.96 2.25l5.22 6.47h-5.28l-2.8-3.43c-2.59 2.59-5.23 3.88-8.03 3.88-2.47 0-4.6-.78-6.34-2.42a7.96 7.96 0 01-2.53-5.96c0-2.81 1.35-5.17 4.04-7.03l1.85-1.24.12-.11c.05-.06.16-.11.28-.23-1.86-1.97-2.81-3.93-2.81-5.85 0-1.91.62-3.43 1.85-4.67a6.98 6.98 0 014.89-1.8c1.9 0 3.53.57 4.77 1.75a5.68 5.68 0 011.9 4.39c0 1.23-.33 2.3-1.06 3.31-.67 1.07-1.91 2.25-3.7 3.66zM37.5 26.1l-.23.17a18.44 18.44 0 00-3.53 2.93 3.6 3.6 0 00-.96 2.3c0 1.19.45 2.26 1.4 3.21a4.4 4.4 0 003.2 1.4c1.63 0 3.54-1.06 5.67-3.2l-5.55-6.8zm.95-5.4l.34-.28c.61-.45 1.06-.84 1.46-1.18.39-.34.67-.62.84-.84.34-.45.56-1.02.56-1.7a2.3 2.3 0 00-.73-1.8 2.93 2.93 0 00-2.02-.67c-.79 0-1.4.23-1.9.73-.51.45-.8 1.02-.8 1.75 0 .84.34 1.63 1.02 2.47l1.06 1.3c-.05 0 .06.11.17.22zM14.65 10.97h-1.4L0 39.44h4.6l3.15-6.87H19.8l2.98 6.87h4.66l-12.8-28.47zm-5.16 17.6l4.37-9.61 4.16 9.62H9.49zM54.28 25.2c0-3.99 1.46-7.37 4.38-10.23a14.26 14.26 0 0110.44-4.28c3.98 0 7.46 1.46 10.33 4.33a14.22 14.22 0 014.32 10.35c0 4.05-1.46 7.49-4.32 10.35A14.61 14.61 0 0168.93 40a14.3 14.3 0 01-9.77-3.77c-3.3-2.87-4.88-6.53-4.88-11.03zm4.27.06c0 3.1 1.06 5.68 3.14 7.7a10.02 10.02 0 007.18 3.05 9.94 9.94 0 007.47-3.1 10.46 10.46 0 003.03-7.54c0-2.98-1-5.51-3.03-7.54a10.03 10.03 0 00-7.41-3.09 9.9 9.9 0 00-7.4 3.1 10.1 10.1 0 00-2.98 7.42z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Leaf, {
      color: color,
      d: "M71.62 8.04H69V5.4A5.4 5.4 0 0174.37 0h2.64v2.64a5.4 5.4 0 01-5.39 5.4z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
        id: "logoOrangeGradient",
        x1: "60.07",
        y1: "25.33",
        x2: "77.92",
        y2: "25.33",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
          offset: "0",
          stopColor: "#EE3131"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
          offset: "1",
          stopColor: "#F89E33"
        })]
      })
    })]
  }));
};

/***/ }),

/***/ 62918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ PageWrapper; }
/* harmony export */ });
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54944);

const PageWrapper = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)('main', {
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  boxSizing: 'content-box',
  position: 'relative'
});

/***/ }),

/***/ 78882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ ProgressBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54944);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49772);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Bg = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  position: 'relative',
  mx: '$2',
  '@m': {
    mx: '$3'
  },
  '@l': {
    mx: '$4'
  },
  my: '$2'
});
const Fill = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)('div', {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  width: '100%',
  willChange: 'transform'
});
const ProgressBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref, ref) => {
  let {
    progress
  } = _ref,
      props = _objectWithoutProperties(_ref, ["progress"]);

  const {
    0: {
      newProgress,
      previousProgress
    },
    1: setProgress
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    newProgress: 0,
    previousProgress: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const updateProgress = () => setProgress({
      newProgress: progress.get(),
      previousProgress: progress.getPrevious()
    });

    updateProgress();
    const listener = progress.onChange(updateProgress);
    return listener;
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bg, _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fill, {
      as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div,
      initial: {
        x: `-${100 - previousProgress}%`
      },
      animate: {
        x: `-${100 - newProgress}%`
      }
    })
  }));
});

/***/ }),

/***/ 20203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ RadioButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54944);
/* harmony import */ var _theme_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79973);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HiddenRadio = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('input', {
  opacity: 0,
  position: 'fixed',
  width: 0
});
const Block = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)('div', {
  mr: '$2',
  mt: '$2',
  '& > label:hover': {
    color: '$DBA80',
    backgroundColor: '$GA20',
    cursor: 'pointer'
  },
  '& > input[type="radio"]:focus + label': {
    boxShadow: '$1',
    backgroundColor: '$DA20',
    border: '2px solid $GA75',
    color: '$DBA80',
    py: 'calc($2 - 2px)',
    px: 'calc($2 - 2px)',
    '&:hover': {
      backgroundColor: '$GA40'
    }
  },
  '& > input[type="radio"]:checked + label': {
    backgroundColor: '$green',
    color: '$LA90',
    '&:hover': {
      backgroundColor: '$G40'
    },
    '&:focus': {
      border: '1px solid black'
    }
  }
});
const Label = (0,_theme_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_theme_typography__WEBPACK_IMPORTED_MODULE_3__/* .Paragraph */ .nv, {
  py: '$2',
  px: '$2',
  display: 'block',
  br: '$3',
  backgroundColor: '$DA10',
  color: '$DBA70',
  lineHeight: '1'
});
const RadioButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    id,
    children,
    value,
    name,
    defaultChecked,
    checked,
    onChange,
    onBlur
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "children", "value", "name", "defaultChecked", "checked", "onChange", "onBlur"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Block, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenRadio, {
      type: "radio",
      id: id,
      name: name,
      value: value,
      defaultChecked: defaultChecked,
      checked: checked,
      ref: ref,
      onChange: onChange,
      onBlur: onBlur
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
      as: "label",
      size: "s",
      htmlFor: id,
      children: children
    })]
  }));
});

/***/ }),

/***/ 78313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ Close; }
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20017);

const Close = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Close',
  d: 'M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Close'
  }
});

/***/ }),

/***/ 38040:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ CovidSafe; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20017);




const CovidSafe = (0,_createIcon__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)({
  displayName: 'Covid Safe Badge',
  viewBox: '0 0 512 512',
  path: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
      cx: "256",
      cy: "256",
      r: "256",
      fill: "#fff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
      cx: "256",
      cy: "256",
      r: "240",
      fill: "#00ADEE"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M102 363l13-15c8 7 17 10 26 10 7 0 10-2 10-6 0-3-3-5-14-8-17-4-31-9-31-25v-1c0-15 12-26 32-26 14 0 25 4 34 11l-12 16c-7-5-15-8-23-8-5 0-8 2-8 5 0 4 3 6 14 8 19 5 31 11 31 26 0 17-13 27-33 27-15 0-29-5-39-14M206 293h22l35 83h-24l-6-15h-32l-6 15h-24l35-83zm20 50l-9-23-9 23h18zM269 294h65v19h-43v14h39v19h-39v30h-22v-82zM340 294h66v19h-44v12h40v18h-40v13h44v20h-66v-82zM128 152h10l6 19 7-19h8l6 19 6-19h10l-12 34h-8l-7-20-6 20h-8l-12-34zM183 152h28v8h-18v5h16v7h-16v6h18v8h-28v-34zM214 166c3-1 5-2 5-5h-4v-9h9v7c0 8-4 10-10 10v-3zM227 152h16c5 0 9 1 11 3s3 5 3 8c0 6-2 9-7 11l8 11h-10l-7-10h-4v10h-10v-33zm16 16c3 0 5-2 5-4 0-3-2-4-5-4h-6v8h6zM262 152h27v8h-18v5h16v7h-16v6h18v8h-27v-34zM71 240c0-24 18-42 43-42 17 0 28 7 35 17l-17 13c-5-6-10-10-18-10-12 0-20 10-20 22 0 13 8 22 20 22 8 0 13-4 18-10l17 12c-7 11-18 19-36 19-23 0-42-18-42-43M149 240c0-23 19-42 45-42 25 0 44 18 44 42s-19 43-45 43c-25 0-44-19-44-43zm65 0c0-12-8-22-21-22-12 0-20 10-20 22s8 22 21 22c12 0 20-10 20-22zM353 199h-23v82h23v-82zM363 199h32c29 0 46 17 46 41s-17 41-47 41h-31v-82zm32 62c14 0 23-7 23-21 0-13-9-21-23-21h-9v42h9z",
      fill: "#fff"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M342 80l-63 168-18-49h-26l33 82h25l72-201h-23z",
      fill: "#E2183D"
    })]
  })
});

/***/ }),

/***/ 38475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ Facebook; }
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20017);

const Facebook = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'Facebook',
  viewBox: '0 0 24 24',
  d: 'M24 12a12 12 0 10-13.9 12v-8.5h-3v-3.4h3V9.4c0-3 1.8-4.6 4.6-4.6.9 0 1.8 0 2.6.2v3h-1.5a1.7 1.7 0 00-2 1.8v2.3h3.4l-.5 3.4h-2.8V24A12 12 0 0024 12.1z'
});

/***/ }),

/***/ 6879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ LinkedIn; }
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20017);

const LinkedIn = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__/* .createIcon */ .I)({
  displayName: 'LinkedIn',
  viewBox: '0 0 24 24',
  d: 'M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3.6 20.5V9h3.6v11.5H3.6zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1a2 2 0 01-2.1 2.1zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z'
});

/***/ })

};
;