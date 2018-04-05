import { NgModule } from '@angular/core';

import { FilePond } from './component/filepond.component';
export * from './component/filepond.component';

@NgModule({
    declarations: [FilePond],
    exports: [FilePond],
    providers: []
})

export class FilePondModule { }