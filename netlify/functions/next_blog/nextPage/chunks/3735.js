exports.id = 3735;
exports.ids = [3735];
exports.modules = {

/***/ 85646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": function() { return /* binding */ AnimateSharedLayout; }
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(70655);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js
var types = __webpack_require__(7646);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js
var VisualElementDragControls = __webpack_require__(34077);
// EXTERNAL MODULE: ./node_modules/framesync/dist/es/index.js + 2 modules
var es = __webpack_require__(9839);
// EXTERNAL MODULE: ./node_modules/popmotion/dist/es/utils/mix.js
var mix = __webpack_require__(20008);
// EXTERNAL MODULE: ./node_modules/popmotion/dist/es/easing/index.js + 1 modules
var easing = __webpack_require__(72564);
// EXTERNAL MODULE: ./node_modules/popmotion/dist/es/utils/progress.js
var progress = __webpack_require__(45948);
// EXTERNAL MODULE: ./node_modules/popmotion/dist/es/utils/mix-color.js
var mix_color = __webpack_require__(86854);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/animation/animate.js
var animate = __webpack_require__(36724);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/animation/utils/transitions.js + 14 modules
var transitions = __webpack_require__(95507);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.js
var value = __webpack_require__(79585);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js







function createCrossfader() {
    /**
     * The current state of the crossfade as a value between 0 and 1
     */
    var progress = (0,value/* motionValue */.B)(1);
    var options = {
        lead: undefined,
        follow: undefined,
        crossfadeOpacity: false,
        preserveFollowOpacity: false,
    };
    var prevOptions = (0,tslib_es6.__assign)({}, options);
    var leadState = {};
    var followState = {};
    /**
     *
     */
    var isActive = false;
    /**
     *
     */
    var finalCrossfadeFrame = null;
    /**
     * Framestamp of the last frame we updated values at.
     */
    var prevUpdate = 0;
    function startCrossfadeAnimation(target, transition) {
        var lead = options.lead, follow = options.follow;
        isActive = true;
        finalCrossfadeFrame = null;
        var hasUpdated = false;
        var onUpdate = function () {
            hasUpdated = true;
            lead && lead.scheduleRender();
            follow && follow.scheduleRender();
        };
        var onComplete = function () {
            isActive = false;
            /**
             * If the crossfade animation is no longer active, flag a frame
             * that we're still allowed to crossfade
             */
            finalCrossfadeFrame = (0,es/* getFrameData */.$B)().timestamp;
        };
        transition = transition && (0,transitions/* getValueTransition */.ev)(transition, "crossfade");
        return (0,animate/* animate */.j)(progress, target, (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, transition), { onUpdate: onUpdate, onComplete: function () {
                if (!hasUpdated) {
                    progress.set(target);
                    /**
                     * If we never ran an update, for instance if this was an instant transition, fire a
                     * simulated final frame to ensure the crossfade gets applied correctly.
                     */
                    es/* default.read */.ZP.read(onComplete);
                }
                else {
                    onComplete();
                }
                onUpdate();
            } }));
    }
    function updateCrossfade() {
        var _a, _b;
        /**
         * We only want to compute the crossfade once per frame, so we
         * compare the previous update framestamp with the current frame
         * and early return if they're the same.
         */
        var timestamp = (0,es/* getFrameData */.$B)().timestamp;
        var lead = options.lead, follow = options.follow;
        if (timestamp === prevUpdate || !lead)
            return;
        prevUpdate = timestamp;
        /**
         * Merge each component's latest values into our crossfaded state
         * before crossfading.
         */
        var latestLeadValues = lead.getLatestValues();
        Object.assign(leadState, latestLeadValues);
        var latestFollowValues = follow
            ? follow.getLatestValues()
            : options.prevValues;
        Object.assign(followState, latestFollowValues);
        var p = progress.get();
        /**
         * Crossfade the opacity between the two components. This will result
         * in a different opacity for each component.
         */
        var leadTargetOpacity = (_a = latestLeadValues.opacity) !== null && _a !== void 0 ? _a : 1;
        var followTargetOpacity = (_b = latestFollowValues === null || latestFollowValues === void 0 ? void 0 : latestFollowValues.opacity) !== null && _b !== void 0 ? _b : 1;
        if (options.crossfadeOpacity && follow) {
            leadState.opacity = (0,mix/* mix */.C)(
            /**
             * If the follow child has been completely hidden we animate
             * this opacity from its previous opacity, but otherwise from completely transparent.
             */
            follow.isVisible !== false ? 0 : followTargetOpacity, leadTargetOpacity, easeCrossfadeIn(p));
            followState.opacity = options.preserveFollowOpacity
                ? followTargetOpacity
                : (0,mix/* mix */.C)(followTargetOpacity, 0, easeCrossfadeOut(p));
        }
        else if (!follow) {
            leadState.opacity = (0,mix/* mix */.C)(followTargetOpacity, leadTargetOpacity, p);
        }
        mixValues(leadState, followState, latestLeadValues, latestFollowValues || {}, Boolean(follow), p);
    }
    return {
        isActive: function () {
            return leadState &&
                (isActive || (0,es/* getFrameData */.$B)().timestamp === finalCrossfadeFrame);
        },
        fromLead: function (transition) {
            return startCrossfadeAnimation(0, transition);
        },
        toLead: function (transition) {
            var initialProgress = 0;
            if (!options.prevValues && !options.follow) {
                /**
                 * If we're not coming from anywhere, start at the end of the animation.
                 */
                initialProgress = 1;
            }
            else if (prevOptions.lead === options.follow &&
                prevOptions.follow === options.lead) {
                /**
                 * If we're swapping follow/lead we can reverse the progress
                 */
                initialProgress = 1 - progress.get();
            }
            progress.set(initialProgress);
            return startCrossfadeAnimation(1, transition);
        },
        reset: function () { return progress.set(1); },
        stop: function () { return progress.stop(); },
        getCrossfadeState: function (element) {
            updateCrossfade();
            if (element === options.lead) {
                return leadState;
            }
            else if (element === options.follow) {
                return followState;
            }
        },
        setOptions: function (newOptions) {
            prevOptions = options;
            options = newOptions;
            leadState = {};
            followState = {};
        },
        getLatestValues: function () {
            return leadState;
        },
    };
}
var easeCrossfadeIn = compress(0, 0.5, easing/* circOut */.Bn);
var easeCrossfadeOut = compress(0.5, 0.95, easing/* linear */.GE);
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing((0,progress/* progress */.Y)(min, max, p));
    };
}
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
function mixValues(leadState, followState, latestLeadValues, latestFollowValues, hasFollowElement, p) {
    /**
     * Mix border radius
     */
    for (var i = 0; i < numBorders; i++) {
        var borderLabel = "border" + borders[i] + "Radius";
        var followRadius = getRadius(latestFollowValues, borderLabel);
        var leadRadius = getRadius(latestLeadValues, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        /**
         * Currently we're only crossfading between numerical border radius.
         * It would be possible to crossfade between percentages for a little
         * extra bundle size.
         */
        if (typeof followRadius === "number" &&
            typeof leadRadius === "number") {
            var radius = Math.max((0,mix/* mix */.C)(followRadius, leadRadius, p), 0);
            leadState[borderLabel] = followState[borderLabel] = radius;
        }
    }
    /**
     * Mix rotation
     */
    if (latestFollowValues.rotate || latestLeadValues.rotate) {
        var rotate = (0,mix/* mix */.C)(latestFollowValues.rotate || 0, latestLeadValues.rotate || 0, p);
        leadState.rotate = followState.rotate = rotate;
    }
    /**
     * We only want to mix the background color if there's a follow element
     * that we're not crossfading opacity between. For instance with switch
     * AnimateSharedLayout animations, this helps the illusion of a continuous
     * element being animated but also cuts down on the number of paints triggered
     * for elements where opacity is doing that work for us.
     */
    if (!hasFollowElement &&
        latestLeadValues.backgroundColor &&
        latestFollowValues.backgroundColor) {
        /**
         * This isn't ideal performance-wise as mixColor is creating a new function every frame.
         * We could probably create a mixer that runs at the start of the animation but
         * the idea behind the crossfader is that it runs dynamically between two potentially
         * changing targets (ie opacity or borderRadius may be animating independently via variants)
         */
        leadState.backgroundColor = followState.backgroundColor = (0,mix_color/* mixColor */.R)(latestFollowValues.backgroundColor, latestLeadValues.backgroundColor)(p);
    }
}
function getRadius(values, radiusName) {
    var _a;
    return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/stack.js





function layoutStack() {
    var stack = new Set();
    var state = { leadIsExiting: false };
    var prevState = (0,tslib_es6.__assign)({}, state);
    var prevValues;
    var prevViewportBox;
    var prevDragCursor;
    var crossfader = createCrossfader();
    var needsCrossfadeAnimation = false;
    function getFollowViewportBox() {
        return state.follow ? state.follow.prevViewportBox : prevViewportBox;
    }
    function getFollowLayout() {
        var _a;
        return (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getLayoutState().layout;
    }
    return {
        add: function (element) {
            element.setCrossfader(crossfader);
            stack.add(element);
            /**
             * Hydrate new element with previous drag position if we have one
             */
            if (prevDragCursor)
                element.prevDragCursor = prevDragCursor;
            if (!state.lead)
                state.lead = element;
        },
        remove: function (element) {
            stack.delete(element);
        },
        getLead: function () { return state.lead; },
        updateSnapshot: function () {
            if (!state.lead)
                return;
            prevValues = crossfader.isActive()
                ? crossfader.getLatestValues()
                : state.lead.getLatestValues();
            prevViewportBox = state.lead.prevViewportBox;
            var dragControls = VisualElementDragControls/* elementDragControls.get */.o.get(state.lead);
            if (dragControls && dragControls.isDragging) {
                prevDragCursor = dragControls.cursorProgress;
            }
        },
        clearSnapshot: function () {
            prevDragCursor = prevViewportBox = undefined;
        },
        updateLeadAndFollow: function () {
            var _a;
            prevState = (0,tslib_es6.__assign)({}, state);
            var lead;
            var follow;
            var order = Array.from(stack);
            for (var i = order.length; i--; i >= 0) {
                var element = order[i];
                if (lead)
                    follow !== null && follow !== void 0 ? follow : (follow = element);
                lead !== null && lead !== void 0 ? lead : (lead = element);
                if (lead && follow)
                    break;
            }
            state.lead = lead;
            state.follow = follow;
            state.leadIsExiting = ((_a = state.lead) === null || _a === void 0 ? void 0 : _a.presence) === types/* Presence.Exiting */.z.Exiting;
            crossfader.setOptions({
                lead: lead,
                follow: follow,
                prevValues: prevValues,
                crossfadeOpacity: (follow === null || follow === void 0 ? void 0 : follow.isPresenceRoot) || (lead === null || lead === void 0 ? void 0 : lead.isPresenceRoot),
            });
            if (
            // Don't crossfade if we've just animated back from lead and switched the
            // old follow to the new lead.
            state.lead !== prevState.follow &&
                (prevState.lead !== state.lead ||
                    prevState.leadIsExiting !== state.leadIsExiting)) {
                needsCrossfadeAnimation = true;
            }
        },
        animate: function (child, shouldCrossfade) {
            var _a;
            if (shouldCrossfade === void 0) { shouldCrossfade = false; }
            if (child === state.lead) {
                if (shouldCrossfade) {
                    /**
                     * Point a lead to itself in case it was previously pointing
                     * to a different visual element
                     */
                    child.pointTo(state.lead);
                }
                else {
                    child.setVisibility(true);
                }
                var config = {};
                var prevParent = (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getProjectionParent();
                if (prevParent) {
                    /**
                     * We'll use this to determine if the element or its layoutId has been reparented.
                     */
                    config.prevParent = prevParent;
                }
                if (child.presence === types/* Presence.Entering */.z.Entering) {
                    config.originBox = getFollowViewportBox();
                }
                else if (child.presence === types/* Presence.Exiting */.z.Exiting) {
                    config.targetBox = getFollowLayout();
                }
                if (needsCrossfadeAnimation) {
                    needsCrossfadeAnimation = false;
                    var transition = child.getDefaultTransition();
                    child.presence === types/* Presence.Entering */.z.Entering
                        ? crossfader.toLead(transition)
                        : crossfader.fromLead(transition);
                }
                child.notifyLayoutReady(config);
            }
            else {
                if (shouldCrossfade) {
                    state.lead && child.pointTo(state.lead);
                }
                else {
                    child.setVisibility(false);
                }
            }
        },
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js
var SharedLayoutContext = __webpack_require__(59823);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.js
var MotionContext = __webpack_require__(13335);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/transform.js
var transform = __webpack_require__(99148);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/rotate.js


function resetRotate(child) {
    // If there's no detected rotation values, we can early return without a forced render.
    var hasRotate = false;
    // Keep a record of all the values we've reset
    var resetValues = {};
    // Check the rotate value of all axes and reset to 0
    for (var i = 0; i < transform/* transformAxes.length */.r$.length; i++) {
        var axis = transform/* transformAxes */.r$[i];
        var key = "rotate" + axis;
        // If this rotation doesn't exist as a motion value, then we don't
        // need to reset it
        if (!child.hasValue(key) || child.getStaticValue(key) === 0)
            continue;
        hasRotate = true;
        // Record the rotation and then temporarily set it to 0
        resetValues[key] = child.getStaticValue(key);
        child.setStaticValue(key, 0);
    }
    // If there's no rotation values, we don't need to do any more.
    if (!hasRotate)
        return;
    // Force a render of this element to apply the transform with all rotations
    // set to 0.
    child.syncRender();
    // Put back all the values we reset
    for (var key in resetValues) {
        child.setStaticValue(key, resetValues[key]);
    }
    // Schedule a render for the next frame. This ensures we won't visually
    // see the element with the reset rotate value applied.
    child.scheduleRender();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js
var batcher = __webpack_require__(10494);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/projection/utils.js
var utils = __webpack_require__(58839);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js










/**
 * @public
 */
var AnimateSharedLayout = /** @class */ (function (_super) {
    (0,tslib_es6.__extends)(AnimateSharedLayout, _super);
    function AnimateSharedLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A list of all the children in the shared layout
         */
        _this.children = new Set();
        /**
         * As animate components with a defined `layoutId` are added/removed to the tree,
         * we store them in order. When one is added, it will animate out from the
         * previous one, and when it's removed, it'll animate to the previous one.
         */
        _this.stacks = new Map();
        /**
         * Track whether the component has mounted. If it hasn't, the presence of added children
         * are set to Present, whereas if it has they're considered Entering
         */
        _this.hasMounted = false;
        /**
         * Track whether we already have an update scheduled. If we don't, we'll run snapshots
         * and schedule one.
         */
        _this.updateScheduled = false;
        /**
         * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
         */
        _this.renderScheduled = false;
        /**
         * The methods provided to all children in the shared layout tree.
         */
        _this.syncContext = (0,tslib_es6.__assign)((0,tslib_es6.__assign)({}, (0,batcher/* createBatcher */.V)()), { syncUpdate: function (force) { return _this.scheduleUpdate(force); }, forceUpdate: function () {
                // By copying syncContext to itself, when this component re-renders it'll also re-render
                // all children subscribed to the SharedLayout context.
                _this.syncContext = (0,tslib_es6.__assign)({}, _this.syncContext);
                _this.scheduleUpdate(true);
            }, register: function (child) { return _this.addChild(child); }, remove: function (child) { return _this.removeChild(child); } });
        return _this;
    }
    AnimateSharedLayout.prototype.componentDidMount = function () {
        this.hasMounted = true;
    };
    AnimateSharedLayout.prototype.componentDidUpdate = function () {
        this.startLayoutAnimation();
    };
    AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
        this.renderScheduled = true;
        return true;
    };
    AnimateSharedLayout.prototype.startLayoutAnimation = function () {
        var _this = this;
        /**
         * Reset update and render scheduled status
         */
        this.renderScheduled = this.updateScheduled = false;
        var type = this.props.type;
        /**
         * Update presence metadata based on the latest AnimatePresence status.
         * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
         */
        this.children.forEach(function (child) {
            if (!child.isPresent) {
                child.presence = types/* Presence.Exiting */.z.Exiting;
            }
            else if (child.presence !== types/* Presence.Entering */.z.Entering) {
                child.presence =
                    child.presence === types/* Presence.Exiting */.z.Exiting
                        ? types/* Presence.Entering */.z.Entering
                        : types/* Presence.Present */.z.Present;
            }
        });
        this.updateStacks();
        /**
         * Create a handler which we can use to flush the children animations
         */
        var handler = {
            layoutReady: function (child) {
                if (child.getLayoutId() !== undefined) {
                    var stack = _this.getStack(child);
                    stack.animate(child, type === "crossfade");
                }
                else {
                    child.notifyLayoutReady();
                }
            },
            parent: this.context.visualElement,
        };
        /**
         * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
         * This requires some co-ordination across components to stop layout thrashing
         * and ensure measurements are taken at the correct time.
         *
         * Here we use that same mechanism of schedule/flush.
         */
        this.children.forEach(function (child) { return _this.syncContext.add(child); });
        this.syncContext.flush(handler);
        /**
         * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
         */
        this.stacks.forEach(function (stack) { return stack.clearSnapshot(); });
    };
    AnimateSharedLayout.prototype.updateStacks = function () {
        this.stacks.forEach(function (stack) { return stack.updateLeadAndFollow(); });
    };
    AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
        if (force === void 0) { force = false; }
        if (!(force || !this.updateScheduled))
            return;
        /**
         * Flag we've scheduled an update
         */
        this.updateScheduled = true;
        /**
         * Write: Reset transforms so bounding boxes can be accurately measured.
         */
        this.children.forEach(function (child) {
            resetRotate(child);
            if (child.shouldResetTransform())
                child.resetTransform();
        });
        /**
         * Read: Snapshot children
         */
        this.children.forEach(utils/* snapshotViewportBox */.x7);
        /**
         * Every child keeps a local snapshot, but we also want to record
         * snapshots of the visible children as, if they're are being removed
         * in this render, we can still access them.
         *
         * TODO: What would be better here is doing a single loop where we
         * only snapshotViewportBoxes of undefined layoutIds and then one for each stack
         */
        this.stacks.forEach(function (stack) { return stack.updateSnapshot(); });
        /**
         * Force a rerender by setting state if we aren't already going to render.
         */
        if (force || !this.renderScheduled) {
            this.renderScheduled = true;
            this.forceUpdate();
        }
    };
    AnimateSharedLayout.prototype.addChild = function (child) {
        this.children.add(child);
        this.addToStack(child);
        child.presence = this.hasMounted ? types/* Presence.Entering */.z.Entering : types/* Presence.Present */.z.Present;
    };
    AnimateSharedLayout.prototype.removeChild = function (child) {
        this.scheduleUpdate();
        this.children.delete(child);
        this.removeFromStack(child);
    };
    AnimateSharedLayout.prototype.addToStack = function (child) {
        var stack = this.getStack(child);
        stack === null || stack === void 0 ? void 0 : stack.add(child);
    };
    AnimateSharedLayout.prototype.removeFromStack = function (child) {
        var stack = this.getStack(child);
        stack === null || stack === void 0 ? void 0 : stack.remove(child);
    };
    /**
     * Return a stack of animate children based on the provided layoutId.
     * Will create a stack if none currently exists with that layoutId.
     */
    AnimateSharedLayout.prototype.getStack = function (child) {
        var id = child.getLayoutId();
        if (id === undefined)
            return;
        // Create stack if it doesn't already exist
        !this.stacks.has(id) && this.stacks.set(id, layoutStack());
        return this.stacks.get(id);
    };
    AnimateSharedLayout.prototype.render = function () {
        return (react.createElement(SharedLayoutContext/* SharedLayoutContext.Provider */.WH.Provider, { value: this.syncContext }, this.props.children));
    };
    AnimateSharedLayout.contextType = MotionContext/* MotionContext */.v;
    return AnimateSharedLayout;
}(react.Component));




/***/ })

};
;