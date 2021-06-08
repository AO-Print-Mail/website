exports.id = 269;
exports.ids = [269,7099];
exports.modules = {

/***/ 10070:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": function() { return /* binding */ r; }
});

// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(42283);
;// CONCATENATED MODULE: ./node_modules/@hookform/resolvers/dist/resolvers.mjs
var resolvers_a=function(a,e){var f={};for(var t in a){var n=(0,index_esm/* get */.U2)(e,t);(0,index_esm/* set */.t8)(f,t,Object.assign(a[t],{ref:n&&n.ref}))}return f};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs
var r=function(r,o,n){return void 0===o&&(o={abortEarly:!1}),void 0===n&&(n={}),function(s,a,c){try{return Promise.resolve(function(e,t){try{var c=(o.context&&"development"==="production"&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(r["sync"===n.mode?"validateSync":"validate"](s,Object.assign({},o,{context:a}))).then(function(e){return{values:e,errors:{}}}))}catch(e){return t(e)}return c&&c.then?c.then(void 0,t):c}(0,function(r){return{values:{},errors:resolvers_a((o=r,n="all"===c.criteriaMode,o.inner.reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),n){var o=e[r.path].types,s=o&&o[r.type];e[r.path]=(0,index_esm/* appendErrors */.KN)(r.path,n,e,r.type,s?[].concat(s,r.message):r.message)}return e},{})),c.fields)};var o,n}))}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=yup.module.js.map


/***/ }),

/***/ 11163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(72441)


/***/ }),

/***/ 42283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KN": function() { return /* binding */ appendErrors; },
/* harmony export */   "U2": function() { return /* binding */ get; },
/* harmony export */   "t8": function() { return /* binding */ set; },
/* harmony export */   "cI": function() { return /* binding */ useForm; }
/* harmony export */ });
/* unused harmony exports Controller, FormProvider, useController, useFieldArray, useFormContext, useFormState, useWatch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (isObject(obj) && path) {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    }
    return undefined;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => React.useContext(FormContext);
const FormProvider = (props) => (React.createElement(FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (isProxyEnabled, formState, readFormStateRef, localReadFormStateRef, isRoot = true) => isProxyEnabled
    ? new Proxy(formState, {
        get: (obj, prop) => {
            if (prop in obj) {
                if (readFormStateRef.current[prop] !== VALIDATION_MODE.all) {
                    readFormStateRef.current[prop] = isRoot
                        ? VALIDATION_MODE.all
                        : true;
                }
                localReadFormStateRef &&
                    (localReadFormStateRef.current[prop] = true);
                return obj[prop];
            }
            return undefined;
        },
    })
    : formState;

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, readFormStateRef, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(readFormStateRef).length ||
        Object.keys(formState).find((key) => readFormStateRef[key] ===
            (isRoot ? VALIDATION_MODE.all : true)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

var isWeb = typeof window !== UNDEFINED &&
    typeof window.HTMLElement !== UNDEFINED &&
    typeof document !== UNDEFINED;

const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;

function useFormState(props) {
    const { control, name } = props || {};
    const methods = useFormContext();
    const { formStateRef, formStateSubjectRef, readFormStateRef } = control || methods.control;
    const nameRef = React.useRef(name);
    nameRef.current = name;
    const [formState, updateFormState] = React.useState(formStateRef.current);
    const readFormState = React.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    React.useEffect(() => {
        const formStateSubscription = formStateSubjectRef.current.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, readFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, formStateRef.current), formState)),
        });
        return () => formStateSubscription.unsubscribe();
    }, []);
    return getProxyFormState(isProxyEnabled, formState, readFormStateRef, readFormState, false);
}

function useController({ name, rules, defaultValue, control, shouldUnregister, }) {
    const methods = useFormContext();
    const { defaultValuesRef, register, fieldsRef, unregister, fieldArrayNamesRef, controllerSubjectRef, shouldUnmount, inFieldArrayActionRef, } = control || methods.control;
    const { onChange, onBlur, ref } = register(name, rules);
    const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
    const [value, setInputStateValue] = React.useState(isUndefined(get(fieldsRef.current, name)._f.value) || isFieldArray
        ? isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue
        : get(fieldsRef.current, name)._f.value);
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    const field = get(fieldsRef.current, name);
    field._f.value = value;
    field._f.nest = true;
    React.useEffect(() => {
        const controllerSubscription = controllerSubjectRef.current.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        return () => {
            controllerSubscription.unsubscribe();
            const shouldUnmountField = shouldUnmount || shouldUnregister;
            if (isFieldArray
                ? shouldUnmountField && !inFieldArrayActionRef.current
                : shouldUnmountField) {
                unregister(name);
            }
            else if (get(fieldsRef.current, name)) {
                get(fieldsRef.current, name)._f.mount = false;
            }
        };
    }, [name]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                onBlur({
                    target: {
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => elm && ref(elm),
        },
        formState,
        fieldState: Object.defineProperties({}, {
            invalid: {
                get() {
                    return !!get(formState.errors, name);
                },
            },
            isDirty: {
                get() {
                    return !!get(formState.dirtyFields, name);
                },
            },
            isTouched: {
                get() {
                    return !!get(formState.touchedFields, name);
                },
            },
            error: {
                get() {
                    return get(formState.errors, name);
                },
            },
        }),
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

const getFieldsValues = (fieldsRef, defaultValuesRef, output = {}) => {
    for (const name in fieldsRef.current) {
        const field = fieldsRef.current[name];
        if (field && !isNullOrUndefined(output)) {
            const _f = field._f;
            const current = omit(field, '_f');
            set(output, name, _f && _f.ref
                ? _f.ref.disabled || (_f.refs && _f.refs.every((ref) => ref.disabled))
                    ? undefined
                    : _f.value
                : Array.isArray(field)
                    ? []
                    : {});
            current &&
                (!_f || !_f.nest) &&
                getFieldsValues({
                    current,
                }, defaultValuesRef, output[name]);
        }
    }
    return output;
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign({ [keyName]: (value && value[keyName]) || generateId() }, value)));

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        object1 instanceof Date ||
        object2 instanceof Date) {
        return object1 === object2;
    }
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

function append(data, value) {
    return [...data, ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var isString = (value) => typeof value === 'string';

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...data];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const useFieldArray = ({ control, name, keyName = 'id', shouldUnregister, }) => {
    const methods = useFormContext();
    const focusNameRef = React.useRef('');
    const { isWatchAllRef, watchFieldsRef, getIsDirty, watchSubjectRef, fieldArraySubjectRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, formStateRef, formStateSubjectRef, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, unregister, shouldUnmount, inFieldArrayActionRef, } = control || methods.control;
    const [fields, setFields] = React.useState(mapIds(get(fieldsRef.current, name)
        ? get(getFieldsValues(fieldsRef), name)
        : get(fieldArrayDefaultValuesRef.current, getNodeParentName(name))
            ? get(fieldArrayDefaultValuesRef.current, name, [])
            : get(defaultValuesRef.current, name, []), keyName));
    set(fieldArrayDefaultValuesRef.current, name, [...fields]);
    fieldArrayNamesRef.current.add(name);
    const omitKey = (fields) => fields.map((field) => omit((field || {}), keyName));
    const getCurrentFieldsValues = () => {
        const values = get(getFieldsValues(fieldsRef), name, []);
        return mapIds(get(fieldArrayDefaultValuesRef.current, name, []).map((item, index) => (Object.assign(Object.assign({}, item), values[index]))), keyName);
    };
    const getFocusDetail = (index, options) => options
        ? !isUndefined(options.focusIndex)
            ? `${name}.${options.focusIndex}`
            : options.focusName
                ? options.focusName
                : !options.shouldFocus
                    ? ''
                    : `${name}.${index}`
        : `${name}.${index}`;
    const resetFields = (index) => convertToArrayPayload(index).forEach((currentIndex) => set(fieldsRef.current, `${name}${isUndefined(currentIndex) ? '' : `.${currentIndex}`}`, isUndefined(currentIndex) ? [] : undefined));
    const setFieldsAndNotify = (fieldsValues = []) => setFields(mapIds(fieldsValues, keyName));
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => updatedFieldArrayValues &&
        set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
    const batchStateUpdate = (method, args, updatedFieldArrayValues = [], shouldSet = true) => {
        inFieldArrayActionRef.current = true;
        if (get(fieldsRef.current, name)) {
            const output = method(get(fieldsRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldsRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touchedFields &&
            get(formStateRef.current.touchedFields, name)) {
            const output = method(get(formStateRef.current.touchedFields, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touchedFields, name, output);
            cleanup(formStateRef.current.touchedFields);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updateDirtyFieldsWithDefaultValues(updatedFieldArrayValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (readFormStateRef.current.isValid) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        formStateSubjectRef.current.next({
            isDirty: getIsDirty(name, omitKey(updatedFieldArrayValues)),
            errors: formStateRef.current.errors,
            isValid: formStateRef.current.isValid,
        });
    };
    const registerFieldArray = (values, index = 0, parentName = '') => values.forEach((appendValueItem, valueIndex) => !isPrimitive(appendValueItem) &&
        Object.entries(appendValueItem).forEach(([key, value]) => {
            const inputName = `${parentName || name}.${parentName ? valueIndex : index + valueIndex}.${key}`;
            Array.isArray(value)
                ? registerFieldArray(value, valueIndex, inputName)
                : set(fieldsRef.current, inputName, {
                    _f: {
                        ref: {
                            name: inputName,
                        },
                        name: inputName,
                        value: isPrimitive(value) ? value : Object.assign({}, value),
                    },
                });
        }));
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = append(getCurrentFieldsValues(), appendValue);
        const currentIndex = updatedFieldArrayValues.length - appendValue.length;
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues, false);
        registerFieldArray(appendValue, currentIndex);
        focusNameRef.current = getFocusDetail(currentIndex, options);
    };
    const prepend$1 = (value, options) => {
        const prependValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), prependValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(prependValue);
        focusNameRef.current = getFocusDetail(0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValues = removeArrayAt(getCurrentFieldsValues(), index);
        resetFields(index);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValues);
    };
    const insert$1 = (index, value, options) => {
        const insertValue = convertToArrayPayload(value);
        const updatedFieldArrayValues = insert(getCurrentFieldsValues(), index, insertValue);
        setFieldsAndNotify(updatedFieldArrayValues);
        batchStateUpdate(insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValues);
        registerFieldArray(insertValue, index);
        focusNameRef.current = getFocusDetail(index, options);
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, fieldValues, false);
        setFieldsAndNotify(fieldValues);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        setFieldsAndNotify(fieldValues);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
        }, fieldValues, false);
    };
    React.useEffect(() => {
        inFieldArrayActionRef.current = false;
        if (isWatchAllRef.current) {
            formStateSubjectRef.current.next({});
        }
        else {
            for (const watchField of watchFieldsRef.current) {
                if (name.startsWith(watchField)) {
                    formStateSubjectRef.current.next({});
                    break;
                }
            }
        }
        watchSubjectRef.current.next({
            name,
            formValues: getFieldsValues(fieldsRef),
        });
        focusNameRef.current &&
            focusFieldBy(fieldsRef.current, (key) => isString(key) && key.startsWith(focusNameRef.current));
        focusNameRef.current = '';
        fieldArraySubjectRef.current.next({
            name,
            fields: omitKey([...fields]),
        });
    }, [fields, name]);
    React.useEffect(() => {
        const fieldArraySubscription = fieldArraySubjectRef.current.subscribe({
            next({ name: inputFieldArrayName, fields, isReset }) {
                if (isReset) {
                    unset(fieldsRef.current, inputFieldArrayName || name);
                    inputFieldArrayName
                        ? set(fieldArrayDefaultValuesRef.current, inputFieldArrayName, fields)
                        : (fieldArrayDefaultValuesRef.current = fields);
                    setFieldsAndNotify(get(fieldArrayDefaultValuesRef.current, name));
                }
            },
        });
        !get(fieldsRef.current, name) && set(fieldsRef.current, name, []);
        return () => {
            fieldArraySubscription.unsubscribe();
            (shouldUnmount || shouldUnregister) && unregister(name);
        };
    }, []);
    return {
        swap: React.useCallback(swap, [name]),
        move: React.useCallback(move, [name]),
        prepend: React.useCallback(prepend$1, [name]),
        append: React.useCallback(append$1, [name]),
        remove: React.useCallback(remove, [name]),
        insert: React.useCallback(insert$1, [name]),
        fields: fields,
    };
};

function getFields(fieldsNames, fieldsRefs) {
    const currentFields = {};
    for (const name of fieldsNames) {
        const field = get(fieldsRefs, name);
        if (field) {
            !isKey(name)
                ? set(currentFields, name, field._f)
                : (currentFields[name] = field._f);
        }
    }
    return currentFields;
}

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

var isRadioInput = (element) => element.type === 'radio';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => valueAsNumber
    ? value === ''
        ? NaN
        : +value
    : valueAsDate
        ? new Date(value)
        : setValueAs
            ? setValueAs(value)
            : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(field) {
    if (field && field._f) {
        const ref = field._f.ref;
        if (ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field._f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field._f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? field._f.ref.value : ref.value, field._f);
    }
}

var hasValidation = (options, mounted) => options &&
    mounted &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async ({ _f: { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, value: inputValue, valueAsNumber, mount, }, }, validateAllFieldCriteria) => {
    if (!mount) {
        return {};
    }
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox ? (refs || [])[0] || {} : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) &&
        inputValue !== '') {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(inputValue) && !isEmpty && (maxLength || minLength)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(inputValue) && pattern && !isEmpty) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const validateRef = isRadioOrCheckbox && refs ? refs[0] : ref;
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(inputValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isHTMLElement = (value) => value instanceof HTMLElement;

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

const isWindowUndefined = typeof window === UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister, criteriaMode, } = {}) {
    const fieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const fieldsNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const formStateSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const unregisterFieldsNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const watchSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const controllerSubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const fieldArraySubjectRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Subject());
    const fieldArrayDefaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const inFieldArrayActionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const watchFieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const fieldsWithValidationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const validFieldsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const defaultValuesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultValues);
    const isWatchAllRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const contextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(context);
    const resolverRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(resolver);
    const fieldArrayNamesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set());
    const validationMode = getValidationModes(mode);
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !validationMode.isOnSubmit,
        errors: {},
    });
    const readFormStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touchedFields: !isProxyEnabled,
        isValidating: !isProxyEnabled,
        isValid: !isProxyEnabled,
        errors: !isProxyEnabled,
    });
    const formStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(formState);
    contextRef.current = context;
    resolverRef.current = resolver;
    const getIsValid = () => {
        formStateRef.current.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
        return formStateRef.current.isValid;
    };
    const shouldRenderBaseOnError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, error, shouldRender = false, state = {}, isValid, isWatched) => {
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            set(formStateRef.current.errors, name, error);
        }
        else {
            (get(fieldsWithValidationRef.current, name) || resolverRef.current) &&
                set(validFieldsRef.current, name, true);
            unset(formStateRef.current.errors, name);
        }
        if ((shouldRender ||
            isWatched ||
            (error ? !deepEqual(previousError, error, true) : previousError) ||
            !isEmptyObject(state) ||
            (readFormStateRef.current.isValid &&
                formStateRef.current.isValid !==
                    (resolverRef.current ? !!isValid : getIsValid()))) &&
            !isNullOrUndefined(shouldRender)) {
            const updatedFormState = Object.assign(Object.assign({}, state), { isValid: resolverRef.current ? !!isValid : getIsValid(), errors: formStateRef.current.errors, name });
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), updatedFormState);
            formStateSubjectRef.current.next(isWatched ? { name } : updatedFormState);
        }
        formStateSubjectRef.current.next({
            isValidating: false,
        });
    }, []);
    const setFieldValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, rawValue, options = {}, shouldRender, shouldRegister) => {
        shouldRegister && register(name);
        const field = get(fieldsRef.current, name);
        if (field) {
            const _f = field._f;
            if (_f) {
                const value = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(rawValue)
                    ? ''
                    : rawValue;
                _f.value = getFieldValueAs(rawValue, _f);
                if (isRadioInput(_f.ref)) {
                    (_f.refs || []).forEach((radioRef) => (radioRef.checked = radioRef.value === value));
                }
                else if (isFileInput(_f.ref) && !isString(value)) {
                    _f.ref.files = value;
                }
                else if (isMultipleSelect(_f.ref)) {
                    [..._f.ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
                }
                else if (isCheckBoxInput(_f.ref) && _f.refs) {
                    _f.refs.length > 1
                        ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(value)
                            ? !!value.find((data) => data === checkboxRef.value)
                            : value === checkboxRef.value))
                        : (_f.refs[0].checked = !!value);
                }
                else {
                    _f.ref.value = value;
                }
                if (shouldRender) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, name, rawValue);
                    controllerSubjectRef.current.next({
                        values: Object.assign(Object.assign({}, defaultValuesRef.current), values),
                        name,
                    });
                }
                options.shouldDirty && updateAndGetDirtyState(name, value);
                options.shouldValidate && trigger(name);
            }
            else {
                field._f = {
                    ref: {
                        name,
                        value: rawValue,
                    },
                    value: rawValue,
                };
            }
        }
    }, []);
    const getIsDirty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, data) => {
        const formValues = getFieldsValues(fieldsRef);
        name && data && set(formValues, name, data);
        return !deepEqual(formValues, defaultValuesRef.current);
    }, []);
    const updateAndGetDirtyState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, inputValue, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), inputValue);
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            formStateRef.current.isDirty = getIsDirty();
            const state = {
                isDirty: formStateRef.current.isDirty,
                dirtyFields: formStateRef.current.dirtyFields,
                name,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            isChanged && shouldRender && formStateSubjectRef.current.next(state);
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name, skipReRender) => {
        const error = (await validateField(get(fieldsRef.current, name), isValidateAllFieldCriteria))[name];
        shouldRenderBaseOnError(name, error, skipReRender);
        return isUndefined(error);
    }, [isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (names, currentNames = []) => {
        const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, {
            criteriaMode,
            names: currentNames,
            fields: getFields(fieldsNamesRef.current, fieldsRef.current),
        });
        for (const name of names) {
            const error = get(errors, name);
            error
                ? set(formStateRef.current.errors, name, error)
                : unset(formStateRef.current.errors, name);
        }
        return errors;
    }, [criteriaMode]);
    const validateForm = async (fieldsRef) => {
        let isValid = true;
        for (const name in fieldsRef) {
            const field = fieldsRef[name];
            if (field) {
                const _f = field._f;
                const current = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, isValidateAllFieldCriteria);
                    if (fieldError[_f.name]) {
                        isValid = false;
                        set(formStateRef.current.errors, _f.name, fieldError[_f.name]);
                        unset(validFieldsRef.current, _f.name);
                    }
                    else if (get(fieldsWithValidationRef.current, _f.name)) {
                        set(validFieldsRef.current, _f.name, true);
                        unset(formStateRef.current.errors, _f.name);
                    }
                }
                current && (await validateForm(current));
            }
        }
        return isValid;
    };
    const trigger = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (name) => {
        const fields = isUndefined(name)
            ? Object.keys(fieldsRef.current)
            : convertToArrayPayload(name);
        let isValid;
        let schemaResult = {};
        formStateSubjectRef.current.next({
            isValidating: true,
        });
        if (resolverRef.current) {
            schemaResult = await executeSchemaOrResolverValidation(fields, isUndefined(name) ? undefined : fields);
            isValid = fields.every((name) => !get(schemaResult, name));
        }
        else {
            isValid = isUndefined(name)
                ? await validateForm(fieldsRef.current)
                : (await Promise.all(fields
                    .filter((fieldName) => get(fieldsRef.current, fieldName))
                    .map(async (fieldName) => await executeValidation(fieldName, null)))).every(Boolean);
        }
        formStateSubjectRef.current.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: formStateRef.current.errors, isValidating: false, isValid: resolverRef.current
                ? isEmptyObject(schemaResult)
                : getIsValid() }));
        return isValid;
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, value, options) => Object.entries(value).forEach(([inputKey, inputValue]) => {
        const fieldName = `${name}.${inputKey}`;
        const field = get(fieldsRef.current, fieldName);
        const isFieldArray = fieldArrayNamesRef.current.has(name);
        isFieldArray || !isPrimitive(inputValue) || (field && !field._f)
            ? setInternalValues(fieldName, inputValue, options)
            : setFieldValue(fieldName, inputValue, options, true, !field);
    }), [trigger]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const updateValidAndValue = (name, options, ref, isWithinRefCallback) => {
        const field = get(fieldsRef.current, name);
        const defaultValue = isUndefined(field._f.value)
            ? get(defaultValuesRef.current, name)
            : field._f.value;
        if (field && !isUndefined(defaultValue)) {
            if (ref && ref.defaultChecked) {
                field._f.value = getFieldValue(field);
            }
            else if (!isNameInFieldArray(fieldArrayNamesRef.current, name)) {
                setFieldValue(name, defaultValue);
            }
            else {
                field._f.value = defaultValue;
            }
        }
        if ((!isUndefined(defaultValue) || isWithinRefCallback) &&
            hasValidation(options, field._f.mount) &&
            !validationMode.isOnSubmit &&
            field &&
            readFormStateRef.current.isValid) {
            validateField(field, isValidateAllFieldCriteria).then((error) => {
                isEmptyObject(error)
                    ? set(validFieldsRef.current, name, true)
                    : unset(validFieldsRef.current, name);
                formStateRef.current.isValid !== getIsValid() &&
                    updateFormState(Object.assign(Object.assign({}, formStateRef.current), { isValid: getIsValid() }));
            });
        }
        return defaultValue;
    };
    const setValue = (name, value, options = {}) => {
        const field = get(fieldsRef.current, name);
        const isFieldArray = fieldArrayNamesRef.current.has(name);
        if (isFieldArray) {
            fieldArraySubjectRef.current.next({
                fields: value,
                name,
                isReset: true,
            });
            if ((readFormStateRef.current.isDirty ||
                readFormStateRef.current.dirtyFields) &&
                options.shouldDirty) {
                set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                formStateSubjectRef.current.next({
                    name,
                    dirtyFields: formStateRef.current.dirtyFields,
                    isDirty: getIsDirty(name, value),
                });
            }
            !value.length &&
                set(fieldsRef.current, name, []) &&
                set(fieldArrayDefaultValuesRef.current, name, []);
        }
        ((field && !field._f) || isFieldArray) && !isNullOrUndefined(value)
            ? setInternalValues(name, value, isFieldArray ? {} : options)
            : setFieldValue(name, value, options, true, !field);
        isFieldWatched(name) && formStateSubjectRef.current.next({});
        watchSubjectRef.current.next({ name, formValues: getValues() });
    };
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async ({ type, target, target: { value, type: inputType } }) => {
        let name = target.name;
        let error;
        let isValid;
        const field = get(fieldsRef.current, name);
        if (field) {
            let inputValue = inputType ? getFieldValue(field) : undefined;
            inputValue = isUndefined(inputValue) ? value : inputValue;
            const isBlurEvent = type === EVENTS.BLUR;
            const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = getValidationModes(reValidateMode);
            const shouldSkipValidation = (!hasValidation(field._f, field._f.mount) &&
                !resolverRef.current &&
                !get(formStateRef.current.errors, name)) ||
                skipValidation(Object.assign({ isBlurEvent, isTouched: !!get(formStateRef.current.touchedFields, name), isSubmitted: formStateRef.current.isSubmitted, isReValidateOnBlur,
                    isReValidateOnChange }, validationMode));
            const isWatched = !isBlurEvent && isFieldWatched(name);
            if (!isUndefined(inputValue)) {
                field._f.value = inputValue;
            }
            const state = updateAndGetDirtyState(name, field._f.value, false);
            if (isBlurEvent && !get(formStateRef.current.touchedFields, name)) {
                set(formStateRef.current.touchedFields, name, true);
                readFormStateRef.current.touchedFields &&
                    (state.touchedFields = formStateRef.current.touchedFields);
            }
            let shouldRender = !isEmptyObject(state) || isWatched;
            if (shouldSkipValidation) {
                !isBlurEvent &&
                    watchSubjectRef.current.next({
                        name,
                        type,
                        formValues: getValues(),
                    });
                return (shouldRender &&
                    formStateSubjectRef.current.next(isWatched ? { name } : Object.assign(Object.assign({}, state), { name })));
            }
            formStateSubjectRef.current.next({
                isValidating: true,
            });
            if (resolverRef.current) {
                const { errors } = await resolverRef.current(getFieldsValues(fieldsRef), contextRef.current, {
                    criteriaMode,
                    fields: getFields([name], fieldsRef.current),
                    names: [name],
                });
                const previousFormIsValid = formStateRef.current.isValid;
                error = get(errors, name);
                if (isCheckBoxInput(target) && !error) {
                    const parentNodeName = getNodeParentName(name);
                    const currentError = get(errors, parentNodeName, {});
                    currentError.type && currentError.message && (error = currentError);
                    if (currentError ||
                        get(formStateRef.current.errors, parentNodeName)) {
                        name = parentNodeName;
                    }
                }
                isValid = isEmptyObject(errors);
                previousFormIsValid !== isValid && (shouldRender = true);
            }
            else {
                error = (await validateField(field, isValidateAllFieldCriteria))[name];
            }
            !isBlurEvent &&
                watchSubjectRef.current.next({
                    name,
                    type,
                    formValues: getValues(),
                });
            shouldRenderBaseOnError(name, error, shouldRender, state, isValid, isWatched);
        }
    }, []);
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, defaultValuesRef.current), getFieldsValues(fieldsRef));
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const updateIsValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (values = {}) => {
        const previousIsValid = formStateRef.current.isValid;
        if (resolver) {
            const { errors } = await resolverRef.current(Object.assign(Object.assign({}, getFieldsValues(fieldsRef)), values), contextRef.current, {
                criteriaMode,
                fields: getFields(fieldsNamesRef.current, fieldsRef.current),
            });
            formStateRef.current.isValid = isEmptyObject(errors);
        }
        else {
            getIsValid();
        }
        previousIsValid !== formStateRef.current.isValid &&
            formStateSubjectRef.current.next({
                isValid: formStateRef.current.isValid,
            });
    }, [criteriaMode]);
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(formStateRef.current.errors, inputName))
            : (formStateRef.current.errors = {});
        formStateSubjectRef.current.next({
            errors: formStateRef.current.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = ((get(fieldsRef.current, name) || { _f: {} })._f || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        formStateSubjectRef.current.next({
            name,
            errors: formStateRef.current.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watchInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((fieldNames, defaultValue, isGlobal, formValues) => {
        const isArrayNames = Array.isArray(fieldNames);
        const fieldValues = formValues || isMountedRef.current
            ? Object.assign(Object.assign({}, defaultValuesRef.current), (formValues || getFieldsValues(fieldsRef))) : isUndefined(defaultValue)
            ? defaultValuesRef.current
            : isArrayNames
                ? defaultValue
                : { [fieldNames]: defaultValue };
        if (isUndefined(fieldNames)) {
            isGlobal && (isWatchAllRef.current = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of convertToArrayPayload(fieldNames)) {
            isGlobal && watchFieldsRef.current.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return isArrayNames ? result : result[0];
    }, []);
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? watchSubjectRef.current.subscribe({
            next: (info) => fieldName(watchInternal(undefined, defaultValue), info),
        })
        : watchInternal(fieldName, defaultValue, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name
            ? convertToArrayPayload(name)
            : Object.keys(fieldsNamesRef.current)) {
            fieldsNamesRef.current.delete(inputName);
            fieldArrayNamesRef.current.delete(inputName);
            if (get(fieldsRef.current, inputName)) {
                if (!options.keepIsValid) {
                    unset(fieldsWithValidationRef.current, inputName);
                    unset(validFieldsRef.current, inputName);
                }
                !options.keepError && unset(formStateRef.current.errors, inputName);
                !options.keepValue && unset(fieldsRef.current, inputName);
                !options.keepDirty &&
                    unset(formStateRef.current.dirtyFields, inputName);
                !options.keepTouched &&
                    unset(formStateRef.current.touchedFields, inputName);
                !shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(defaultValuesRef.current, inputName);
                watchSubjectRef.current.next({
                    name: inputName,
                    formValues: getValues(),
                });
            }
        }
        formStateSubjectRef.current.next(Object.assign(Object.assign(Object.assign({}, formStateRef.current), (!options.keepDirty ? {} : { isDirty: getIsDirty() })), (resolverRef.current ? {} : { isValid: getIsValid() })));
        !options.keepIsValid && updateIsValid();
    };
    const registerFieldRef = (name, ref, options) => {
        register(name, options);
        let field = get(fieldsRef.current, name);
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isWeb && isHTMLElement(field._f.ref) && !isHTMLElement(ref)) ||
            (isRadioOrCheckbox &&
                Array.isArray(field._f.refs) &&
                compact(field._f.refs).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], nest: true, ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(fieldsRef.current, name, field);
        const defaultValue = updateValidAndValue(name, options, ref, true);
        if (isRadioOrCheckbox && Array.isArray(defaultValue)
            ? !deepEqual(get(fieldsRef.current, name)._f.value, defaultValue)
            : isUndefined(get(fieldsRef.current, name)._f.value)) {
            get(fieldsRef.current, name)._f.value = getFieldValue(get(fieldsRef.current, name));
        }
    };
    const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, options) => {
        const isInitialRegister = !get(fieldsRef.current, name);
        set(fieldsRef.current, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (isInitialRegister
                ? { ref: { name } }
                : Object.assign({ ref: (get(fieldsRef.current, name)._f || {}).ref || {} }, get(fieldsRef.current, name)._f))), { name, mount: true }), options),
        });
        hasValidation(options, true) &&
            set(fieldsWithValidationRef.current, name, true);
        fieldsNamesRef.current.add(name);
        isInitialRegister && updateValidAndValue(name, options);
        return isWindowUndefined
            ? { name: name }
            : {
                name,
                onChange: handleChange,
                onBlur: handleChange,
                ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(fieldsRef.current, name);
                        const shouldUnmount = shouldUnregister || (options && options.shouldUnregister);
                        field && (field._f.mount = false);
                        if (isWeb &&
                            (isNameInFieldArray(fieldArrayNamesRef.current, name)
                                ? shouldUnmount && !inFieldArrayActionRef.current
                                : shouldUnmount)) {
                            unregisterFieldsNamesRef.current.add(name);
                        }
                    }
                },
            };
    }, [defaultValuesRef.current]);
    const handleSubmit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = getFieldsValues(fieldsRef);
        formStateSubjectRef.current.next({
            isSubmitting: true,
        });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, {
                    criteriaMode,
                    fields: getFields(fieldsNamesRef.current, fieldsRef.current),
                });
                formStateRef.current.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(fieldsRef.current);
            }
            if (isEmptyObject(formStateRef.current.errors) &&
                Object.keys(formStateRef.current.errors).every((name) => get(fieldValues, name))) {
                formStateSubjectRef.current.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusFieldBy(fieldsRef.current, (key) => get(formStateRef.current.errors, key), fieldsNamesRef.current);
            }
        }
        catch (_a) {
            hasNoPromiseError = false;
        }
        finally {
            formStateRef.current.isSubmitted = true;
            formStateSubjectRef.current.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors) && hasNoPromiseError,
                submitCount: formStateRef.current.submitCount + 1,
                errors: formStateRef.current.errors,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria, criteriaMode]);
    const resetFromState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ keepErrors, keepDirty, keepIsSubmitted, keepTouched, keepDefaultValues, keepIsValid, keepSubmitCount, }, values) => {
        if (!keepIsValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        formStateSubjectRef.current.next({
            submitCount: keepSubmitCount ? formStateRef.current.submitCount : 0,
            isDirty: keepDirty
                ? formStateRef.current.isDirty
                : keepDefaultValues
                    ? deepEqual(values, defaultValuesRef.current)
                    : false,
            isSubmitted: keepIsSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: keepIsValid
                ? formStateRef.current.isValid
                : !!updateIsValid(values),
            dirtyFields: keepDirty ? formStateRef.current.dirtyFields : {},
            touchedFields: keepTouched ? formStateRef.current.touchedFields : {},
            errors: keepErrors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    }, []);
    const registerAbsentFields = (value, name = '') => {
        const field = get(fieldsRef.current, name);
        !field &&
            (isPrimitive(value) ||
                (isWeb && (value instanceof File || value instanceof Date))) &&
            set(fieldsRef.current, name, {
                _f: {
                    ref: { name, value },
                    value,
                    name,
                },
            });
        if (field && field._f && field._f.nest) {
            return;
        }
        if (Array.isArray(value) || isObject(value)) {
            if (name && !get(fieldsRef.current, name)) {
                set(fieldsRef.current, name, Array.isArray(value) ? [] : {});
            }
            for (const key in value) {
                registerAbsentFields(value[key], name + (name ? '.' : '') + key);
            }
        }
    };
    const reset = (values, keepStateOptions = {}) => {
        const updatedValues = values || defaultValuesRef.current;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of fieldsNamesRef.current) {
                const field = get(fieldsRef.current, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    try {
                        isHTMLElement(inputRef) && inputRef.closest('form').reset();
                        break;
                    }
                    catch (_a) { }
                }
            }
        }
        !keepStateOptions.keepDefaultValues &&
            (defaultValuesRef.current = Object.assign({}, updatedValues));
        if (!keepStateOptions.keepValues) {
            fieldsRef.current = {};
            controllerSubjectRef.current.next({
                values: Object.assign({}, updatedValues),
            });
            watchSubjectRef.current.next({
                formValues: Object.assign({}, updatedValues),
            });
            fieldArraySubjectRef.current.next({
                fields: Object.assign({}, updatedValues),
                isReset: true,
            });
        }
        !keepStateOptions.keepDefaultValues &&
            registerAbsentFields(Object.assign({}, updatedValues));
        resetFromState(keepStateOptions, values);
    };
    const setFocus = (name) => get(fieldsRef.current, name)._f.ref.focus();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        registerAbsentFields(defaultValuesRef.current);
        const formStateSubscription = formStateSubjectRef.current.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, readFormStateRef.current, true)) {
                    formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), formState);
                    updateFormState(formStateRef.current);
                }
            },
        });
        const useFieldArraySubscription = fieldArraySubjectRef.current.subscribe({
            next(state) {
                if (state.fields && state.name && readFormStateRef.current.isValid) {
                    const values = getFieldsValues(fieldsRef);
                    set(values, state.name, state.fields);
                    updateIsValid(values);
                }
            },
        });
        resolverRef.current && readFormStateRef.current.isValid && updateIsValid();
        return () => {
            watchSubjectRef.current.unsubscribe();
            formStateSubscription.unsubscribe();
            useFieldArraySubscription.unsubscribe();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const isLiveInDom = (ref) => !isHTMLElement(ref) || !document.contains(ref);
        isMountedRef.current = true;
        for (const name of unregisterFieldsNamesRef.current) {
            const field = get(fieldsRef.current, name);
            field &&
                (field._f.refs
                    ? field._f.refs.every(isLiveInDom)
                    : isLiveInDom(field._f.ref)) &&
                unregister(name);
        }
        unregisterFieldsNamesRef.current = new Set();
    });
    return {
        control: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
            register,
            isWatchAllRef,
            inFieldArrayActionRef,
            watchFieldsRef,
            getIsDirty,
            formStateSubjectRef,
            fieldArraySubjectRef,
            controllerSubjectRef,
            watchSubjectRef,
            watchInternal,
            fieldsRef,
            validFieldsRef,
            fieldsWithValidationRef,
            fieldArrayNamesRef,
            readFormStateRef,
            formStateRef,
            defaultValuesRef,
            fieldArrayDefaultValuesRef,
            unregister,
            shouldUnmount: shouldUnregister,
        }), []),
        formState: getProxyFormState(isProxyEnabled, formState, readFormStateRef),
        trigger,
        register,
        handleSubmit,
        watch: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(watch, []),
        setValue: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setValue, [setInternalValues]),
        getValues: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(getValues, []),
        reset: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(reset, []),
        clearErrors: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(clearErrors, []),
        unregister: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(unregister, []),
        setError: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setError, []),
        setFocus: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(setFocus, []),
    };
}

function useWatch(props) {
    const { control, name, defaultValue } = props || {};
    const methods = useFormContext();
    const nameRef = React.useRef(name);
    nameRef.current = name;
    const { watchInternal, watchSubjectRef } = control || methods.control;
    const [value, updateValue] = React.useState(isUndefined(defaultValue)
        ? watchInternal(name)
        : defaultValue);
    React.useEffect(() => {
        watchInternal(name);
        const watchSubscription = watchSubjectRef.current.subscribe({
            next: ({ name: inputName, formValues }) => (!nameRef.current ||
                !inputName ||
                convertToArrayPayload(nameRef.current).some((fieldName) => inputName &&
                    fieldName &&
                    (fieldName.startsWith(inputName) ||
                        inputName.startsWith(fieldName)))) &&
                updateValue(watchInternal(nameRef.current, defaultValue, false, formValues)),
        });
        return () => watchSubscription.unsubscribe();
    }, []);
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 91749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),p=n(c),d=r(9),h=n(d),v=r(5),y=n(v),m=r(2),b=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.setRef=u.setRef.bind(u),u.onBlur=u.onBlur.bind(u),u.onChange=u.onChange.bind(u),u}return u(t,e),l(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,y.default)(s({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,i=t.guide,a=t.placeholderChar,u=t.showMask,s={guide:i,placeholderChar:a,showMask:u},l="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,m.isNil)(n)&&!(0,m.isNil)(e.pipe)||!(0,m.isNil)(n)&&(0,m.isNil)(e.pipe),f=o.toString()!==e.mask.toString(),c=Object.keys(s).some(function(t){return s[t]!==e[t]})||f||l,p=r!==this.inputElement.value;(p||c)&&this.initTextMask()}},{key:"render",value:function e(){var t=this.props,e=t.render,r=o(t,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,e(this.setRef,s({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(p.default.PureComponent);t.default=b,b.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},b.defaultProps={render:function(e,t){return p.default.createElement("input",s({ref:e},t))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function s(e){for(var t=[],r=void 0;r=e.indexOf(c),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=i,t.isNumber=a,t.isNil=u,t.processCaretTraps=s;var l=r(1),f=[],c="[]"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(t)){if(("undefined"==typeof t?"undefined":o(t))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,i.processCaretTraps)(t).maskWithoutCaretTraps}var n=r.guide,l=void 0===n||n,f=r.previousConformedValue,c=void 0===f?s:f,p=r.placeholderChar,d=void 0===p?a.placeholderChar:p,h=r.placeholder,v=void 0===h?(0,i.convertMaskToPlaceholder)(t,d):h,y=r.currentCaretPosition,m=r.keepCharPositions,b=l===!1&&void 0!==c,g=e.length,k=c.length,C=v.length,O=t.length,T=g-k,P=T>0,x=y+(P?-T:0),w=x+Math.abs(T);if(m===!0&&!P){for(var S=s,_=x;_<w;_++)v[_]===d&&(S+=d);e=e.slice(0,x)+S+e.slice(x,g)}for(var M=e.split(s).map(function(e,t){return{char:e,isNew:t>=x&&t<w}}),j=g-1;j>=0;j--){var E=M[j].char;if(E!==d){var R=j>=x&&k===O;E===v[R?j-T:j]&&M.splice(j,1)}}var V=s,N=!1;e:for(var A=0;A<C;A++){var B=v[A];if(B===d){if(M.length>0)for(;M.length>0;){var I=M.shift(),F=I.char,q=I.isNew;if(F===d&&b!==!0){V+=d;continue e}if(t[A].test(F)){if(m===!0&&q!==!1&&c!==s&&l!==!1&&P){for(var D=M.length,L=null,W=0;W<D;W++){var J=M[W];if(J.char!==d&&J.isNew===!1)break;if(J.char===d){L=W;break}}null!==L?(V+=F,M.splice(L,1)):A--}else V+=F;continue e}N=!0}b===!1&&(V+=v.substr(A,C));break}V+=B}if(b&&P===!1){for(var U=null,H=0;H<V.length;H++)v[H]===d&&(U=H);V=null!==U?V.substr(0,U+1):s}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var i=r(2),a=r(1),u=[],s=""},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===s||!f.length)return 0;var m=f.length,b=r.length,g=p.length,k=l.length,C=m-b,O=C>0,T=0===b,P=C>1&&!O&&!T;if(P)return s;var x=O&&(r===l||l===p),w=0,S=void 0,_=void 0;if(x)w=s-C;else{var M=l.toLowerCase(),j=f.toLowerCase(),E=j.substr(0,s).split(o),R=E.filter(function(e){return M.indexOf(e)!==-1});_=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,A=N!==V,B=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(A||B)&&V>0&&p.indexOf(_)>-1&&void 0!==f[s]&&(S=!0,_=f[s]);for(var I=h.map(function(e){return M[e]}),F=I.filter(function(e){return e===_}).length,q=R.filter(function(e){return e===_}).length,D=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===_&&f[t]!==e}).length,L=D+q+F+(S?1:0),W=0,J=0;J<k;J++){var U=M[J];if(w=J+1,U===_&&W++,W>=L)break}}if(O){for(var H=w,Y=w;Y<=g;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===g)return H}else if(S){for(var z=w-1;z>=0;z--)if(l[z]===_||y.indexOf(z)!==-1||0===z)return z}else for(var G=w;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,l=n.mask,c=n.guide,y=n.pipe,b=n.placeholderChar,g=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,C=void 0!==k&&k,O=n.showMask,T=void 0!==O&&O;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===m&&void 0!==l.pipe&&void 0!==l.mask&&(y=l.pipe,l=l.mask);var P=void 0,x=void 0;if(l instanceof Array&&(P=(0,d.convertMaskToPlaceholder)(l,g)),l!==!1){var w=a(r),S=o.selectionEnd,_=t.previousConformedValue,M=t.previousPlaceholder,j=void 0;if(("undefined"==typeof l?"undefined":s(l))===h.strFunction){if(x=l(w,{currentCaretPosition:S,previousConformedValue:_,placeholderChar:g}),x===!1)return;var E=(0,d.processCaretTraps)(x),R=E.maskWithoutCaretTraps,V=E.indexes;x=R,j=V,P=(0,d.convertMaskToPlaceholder)(x,g)}else x=l;var N={previousConformedValue:_,guide:c,placeholderChar:g,pipe:y,placeholder:P,currentCaretPosition:S,keepCharPositions:C},A=(0,p.default)(w,x,N),B=A.conformedValue,I=("undefined"==typeof y?"undefined":s(y))===h.strFunction,F={};I&&(F=y(B,u({rawValue:w},N)),F===!1?F={value:_,rejected:!0}:(0,d.isString)(F)&&(F={value:F}));var q=I?F.value:B,D=(0,f.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:q,placeholder:P,rawValue:w,currentCaretPosition:S,placeholderChar:g,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:j}),L=q===P&&0===D,W=T?P:v,J=L?W:q;t.previousConformedValue=J,t.previousPlaceholder=P,o.value!==J&&(o.value=J,i(o,D))}}}}}function i(e,t){document.activeElement===e&&(b?g(function(){return e.setSelectionRange(t,t,y)},0):e.setSelectionRange(t,t,y))}function a(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(void 0===e||null===e)return v;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=r(4),f=n(l),c=r(3),p=n(c),d=r(2),h=r(1),v="",y="none",m="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,s){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,s],c=0;l=new Error(t.replace(/%s/g,function(){return f[c++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports=r(8)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(t,r){t.exports=e}])});

/***/ })

};
;