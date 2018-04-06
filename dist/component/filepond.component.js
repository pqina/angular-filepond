/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, ViewEncapsulation, ElementRef, NgZone } from '@angular/core';
import { OptionTypes, create, supported, registerPlugin as register } from 'filepond';
// Do this once
var /** @type {?} */ isSupported = supported();
// Methods not made available to the component
var /** @type {?} */ filteredComponentMethods = [
    'setOptions',
    'on',
    'off',
    'onOnce',
    'appendTo',
    'insertAfter',
    'insertBefore',
    'isAttachedTo',
    'replaceElement',
    'restoreElement',
    'destroy'
];
// All the properties that can be bound
var /** @type {?} */ inputs = [];
// All the events that need to be mapped to emitters
var /** @type {?} */ outputs = [];
var /** @type {?} */ update = function () {
    inputs.length = 0;
    outputs.length = 0;
    for (var /** @type {?} */ prop in OptionTypes) {
        // don't add events to the props array
        // don't add events to the props array
        if (/^on/.test(prop)) {
            outputs.push(prop);
            continue;
        }
        // get property type
        inputs.push(prop);
    }
};
var ɵ0 = update;
// get initial inputs and outputs
update();
export var /** @type {?} */ registerPlugin = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // register plugin
    register.apply(void 0, args);
    // update props
    update();
};
var FilePond = /** @class */ (function () {
    function FilePond(_root, _ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this._root = _root;
        // init with empty options object
        this._options = {};
        // Programmatically create event emitters for output properties
        outputs.forEach(function (output) {
            _this[output] = new EventEmitter();
        });
    }
    /**
     * @return {?}
     */
    FilePond.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._element = this._root.nativeElement.querySelector('input');
        // Map FilePond callback methods to Angular $emitters
        var /** @type {?} */ emitters = outputs.reduce(function (obj, output) {
            obj[output] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = _this[output]).emit.apply(_a, [output].concat(args));
                var _a;
            };
            return obj;
        }, {});
        // will block angular from listening to events inside the pond
        this._ngZone.runOutsideAngular(function () {
            _this._pond = create(_this._element, Object.assign(_this._options, emitters));
        });
        // Copy instance method references to component instance
        Object.keys(this._pond)
            .filter(function (key) { return !filteredComponentMethods.includes(key); })
            .forEach(function (key) {
            _this[key] = _this._pond[key];
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FilePond.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var /** @type {?} */ key in this) {
            if (!inputs.includes(key)) {
                continue;
            }
            this._options[key] = this[key];
        }
        if (!this._pond) {
            return;
        }
        this._pond.setOptions(this._options);
    };
    /**
     * @return {?}
     */
    FilePond.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!this._pond) {
            return;
        }
        this._pond.destroy();
    };
    FilePond.decorators = [
        { type: Component, args: [{
                    selector: 'FilePond',
                    template: "\n      <div class=\"filepond--wrapper\">\n        <input type=\"file\" id={{id}} name={{name}} class={{className}} required={{required}} multiple={{allowMultiple}} accept={{acceptedFileTypes}}/>\n      </div>\n    ",
                    encapsulation: ViewEncapsulation.None,
                    inputs: inputs,
                    outputs: outputs
                },] },
    ];
    /** @nocollapse */
    FilePond.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    return FilePond;
}());
export { FilePond };
function FilePond_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilePond.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilePond.ctorParameters;
    /** @type {?} */
    FilePond.prototype._pond;
    /** @type {?} */
    FilePond.prototype._root;
    /** @type {?} */
    FilePond.prototype._element;
    /** @type {?} */
    FilePond.prototype._options;
    /** @type {?} */
    FilePond.prototype._ngZone;
}
export { ɵ0 };
//# sourceMappingURL=filepond.component.js.map