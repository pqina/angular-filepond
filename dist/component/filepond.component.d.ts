import { ElementRef, SimpleChanges, NgZone } from '@angular/core';
export declare const registerPlugin: (...args: any[]) => void;
export declare class FilePond {
    private _ngZone;
    private _pond;
    private _root;
    private _element;
    private _options;
    constructor(_root: ElementRef, _ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
