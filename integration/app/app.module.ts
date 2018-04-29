import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilePondModule, registerPlugin } from '@pqina/ngx-filepond';

import { AppComponent } from './app.component';

// Registering plugins
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FilePondModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
