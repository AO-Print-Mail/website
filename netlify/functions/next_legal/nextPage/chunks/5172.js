exports.id = 5172;
exports.ids = [5172];
exports.modules = {

/***/ 35172:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": function() { return /* binding */ useAnimation; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(70655);
// EXTERNAL MODULE: ./node_modules/hey-listen/dist/index.js
var dist = __webpack_require__(91320);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/utils/animation.js
var animation = __webpack_require__(16368);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/utils/setters.js
var setters = __webpack_require__(13311);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animation-controls.js





/**
 * @public
 */
function animationControls() {
    /**
     * Track whether the host component has mounted.
     */
    var hasMounted = false;
    /**
     * Pending animations that are started before a component is mounted.
     * TODO: Remove this as animations should only run in effects
     */
    var pendingAnimations = [];
    /**
     * A collection of linked component animation controls.
     */
    var subscribers = new Set();
    var controls = {
        subscribe: function (visualElement) {
            subscribers.add(visualElement);
            return function () { return void subscribers.delete(visualElement); };
        },
        start: function (definition, transitionOverride) {
            /**
             * TODO: We only perform this hasMounted check because in Framer we used to
             * encourage the ability to start an animation within the render phase. This
             * isn't behaviour concurrent-safe so when we make Framer concurrent-safe
             * we can ditch this.
             */
            if (hasMounted) {
                var animations_1 = [];
                subscribers.forEach(function (visualElement) {
                    animations_1.push((0,animation/* animateVisualElement */.d5)(visualElement, definition, {
                        transitionOverride: transitionOverride,
                    }));
                });
                return Promise.all(animations_1);
            }
            else {
                return new Promise(function (resolve) {
                    pendingAnimations.push({
                        animation: [definition, transitionOverride],
                        resolve: resolve,
                    });
                });
            }
        },
        set: function (definition) {
            (0,dist/* invariant */.kG)(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach(function (visualElement) {
                (0,setters/* setValues */.gg)(visualElement, definition);
            });
        },
        stop: function () {
            subscribers.forEach(function (visualElement) {
                (0,animation/* stopAnimation */.p_)(visualElement);
            });
        },
        mount: function () {
            hasMounted = true;
            pendingAnimations.forEach(function (_a) {
                var animation = _a.animation, resolve = _a.resolve;
                controls.start.apply(controls, (0,tslib_es6.__spreadArray)([], (0,tslib_es6.__read)(animation))).then(resolve);
            });
            return function () {
                hasMounted = false;
                controls.stop();
            };
        },
    };
    return controls;
}



// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.js
var use_constant = __webpack_require__(45930);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/use-animation.js




/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var controls = (0,use_constant/* useConstant */.h)(animationControls);
    (0,react.useEffect)(controls.mount, []);
    return controls;
}




/***/ })

};
;