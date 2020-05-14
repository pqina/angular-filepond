
**This adapter has been deprecated, please use [ngx-filepond](https://github.com/pqina/ngx-filepond) instead.**

---

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
import { FilePond, registerPlugin } from '@pqina/ngx-filepond';

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


## Development  

### Build Lib

Run `ng build @pqina/ngx-filepond` to build the lib. The build artifacts will be stored in the `dist/@pqina/ngx-filepond` directory.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Release 

To generate your changelog for your first release, simply do:
```bash
npm run release -- --first-release
```
This will tag a release without bumping the version in package.json (et al.).

When ready, push the git tag and npm publish your first release. \o/

Release as a pre-release
```bash
# you will get version 1.0.1-0.
npm run release -- --prerelease
f you want to name the pre-release, you specify the name via --prerelease <name>.
npm run release -- --prerelease alpha
# Release as a target type imperatively like npm version
npm run release -- --release-as 1.1.0
# running standard-version with the flag --dry-run allows you to see what commands would be run, without committing to git or updating files.
npm run release -- --dry-run
```
### Publishing

```bash
ng build @pqina/ngx-filepond --prod
cd dist/@pqina/ngx-filepond
npm publish
```
> The --prod flag should be used when building to publish because it will completely clean the build directory for the library beforehand, removing old code leftover code from previous versions.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
