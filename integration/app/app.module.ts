import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilePondModule, registerPlugin } from '@pqina/ngx-filepond';

import { AppComponent } from './app.component';

// Registering plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginImagePreview);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FilePondModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
