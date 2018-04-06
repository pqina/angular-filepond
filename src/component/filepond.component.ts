import {
    Component,
    EventEmitter,
    ViewEncapsulation,
    ElementRef,
    SimpleChanges,
    NgZone
} from '@angular/core';

import {
    OptionTypes,
    create,
    supported,
    registerPlugin as register
} from 'filepond';

// Do this once
const isSupported: boolean = supported();

// Methods not made available to the component
const filteredComponentMethods: Array<string> = [
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
const inputs: Array<any> = [];

// All the events that need to be mapped to emitters
const outputs: Array<any> = [];

const update = () => {
    inputs.length = 0;
    outputs.length = 0;
    for (const prop in OptionTypes) {
        // don't add events to the props array
        if (/^on/.test(prop)) {
            outputs.push(prop);
            continue;
        }

        // get property type
        inputs.push(prop);
    }
};

// get initial inputs and outputs
update();

export const registerPlugin = (...args: Array<any>) => {

    // register plugin
    register(...args);

    // update props
    update();
};

@Component({
    selector: 'FilePond',
    template: `
      <div class="filepond--wrapper">
        <input type="file" id={{id}} name={{name}} class={{className}} required={{required}} multiple={{allowMultiple}} accept={{acceptedFileTypes}}/>
      </div>
    `,
    encapsulation: ViewEncapsulation.None,
    inputs,
    outputs
})

export class FilePond {

    private _pond: any;
    private _root: any;
    private _element: any;
    private _options: any;

    constructor(_root: ElementRef, private _ngZone: NgZone) {
        this._root = _root;

        // init with empty options object
        this._options = {};

        // Programmatically create event emitters for output properties
        outputs.forEach(output => {
            this[output] = new EventEmitter();
        });

    }

    ngAfterViewInit() {

        this._element = this._root.nativeElement.querySelector('input');

        // Map FilePond callback methods to Angular $emitters
        const emitters = outputs.reduce((obj, output) => {
            obj[output] = (...args: Array<any>) => {
                this[output].emit(output, ...args);
            };
            return obj;
        }, {});

        // will block angular from listening to events inside the pond
        this._ngZone.runOutsideAngular(() => {
            this._pond = create(this._element, Object.assign(this._options, emitters));
        });

        // Copy instance method references to component instance
        Object.keys(this._pond)
            .filter(key => !filteredComponentMethods.includes(key))
            .forEach(key => {
                this[key] = this._pond[key];
            });
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const key in this) {
            if (!inputs.includes(key)) { continue; }
            this._options[key] = this[key];
        }
        if (!this._pond) {
            return;
        }
        this._pond.setOptions(this._options);
    }

    ngOnDestroy() {
        if (!this._pond) {
            return;
        }
        this._pond.destroy();
    }

}