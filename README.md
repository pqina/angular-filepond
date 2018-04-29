# Angular FilePond

Angular FilePond is a handy adapter component for [FilePond](https://github.com/pqina/filepond), a JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pqina/angular-filepond/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/angular-filepond.svg)](https://www.npmjs.com/package/angular-filepond)
[![Donate with PayPal](https://img.shields.io/badge/donate-PayPal.me-pink.svg)](https://www.paypal.me/rikschennink/10)

<img src="https://github.com/pqina/filepond-github-assets/blob/master/filepond-animation-01.gif?raw=true" width="370" alt=""/>

## Docs

[documentation](https://xmlking.github.io/ngx-filepond/)
 
## Installation

Install FilePond component from npm.

```bash
npm install angular-filepond --save
```

Add `FilePond` to an NgModule and if needed register any plugins. Please note that plugins need to be [installed from npm](https://pqina.nl/filepond/docs/patterns/plugins/introduction/#installing-plugins) separately.

```ts
import { FilePond, registerPlugin } from 'ngx-filepond';

// Registering plugins
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilepondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginFileValidateType, FilepondPluginFileValidateSize, FilepondPluginImagePreview);

// Adding FilePond to imports
@NgModule({
  imports: [
    FilePondModule
  ]
})

export class AppModule { }
```

Add the FilePond stylesheet to your `angular-cli.json` build script.

```json
"styles": [
  "styles.css",
  "./node_modules/filepond/dist/filepond.min.css",
  "./filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
]
```

Now FilePond can be used in your templates.

```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="root">
      <FilePond #myPond
                name="myFilePond"
                required="true"
                allowMultiple="true"
                maxFiles="3"
                maxFileSize="1MB"
                [acceptedFileTypes]="['image/*', 'application/pdf', 'application/*', 'text/plain', 'text/csv', '.vsd']"
                server="/api"
                [files]="myFiles"
                (oninit)="handleFilePondInit()">
      </FilePond>
    </div>
  `
})

export class AppComponent {

  myFiles = ['index.html'];

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') myPond: any;

  handleFilePondInit = () => {

    console.log('FilePond has initialised');

    // FilePond instance methods are available on `this.myPond`

  }
}
```

[Read the docs for more information](https://pqina.nl/filepond/docs/patterns/frameworks/angular/)
