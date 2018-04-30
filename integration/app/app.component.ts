import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myFiles = [];
  // Ref: https://pqina.nl/filepond/docs/patterns/api/server/
  uploadToServer = {

    process: (fieldName, file, metadata, load, error, progress, abort) => {

      // Create data object containing the file and the file metadata
      const formData = new FormData();
      formData.append(fieldName, file, file.name);
      formData.append(fieldName, JSON.stringify(metadata));

      // Progress indicator supported, set progress to 25% of 1
      progress(true, .25, 1);

      // progress(false); // for infinite upload mode

      // Fake completion after 1 second
      const timer = setTimeout(() => {
        load('unique-file-id'); // or { body: 'unique-file-id' }
      }, 1000);

      // Should expose an abort method so the request can be cancelled by the user
      return {
        abort: () => {

          // abort your request here (we clear timer for demo purposes)
          clearTimeout(timer);

          // updates FilePond interface
          abort();
        }
      };
    },

    revert:  (uniqueFileId, load, error) => {
      // Should get a file object here
      // ...

      // Can call the error method if something is wrong, should exit after
      // error('oh my goodness');

      // Should call the load method when done, no parameters required
      load();
    },

    load: (uniqueFileId, load, error, progress, abort, headers) => {
      // Should get a file object here
      // ...

      // Can call the error method if something is wrong, should exit after
      error('oh my goodness');

      // Can call the header method to supply FilePond with early response header string
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
      // headers(headersString);

      // Should call the progress method to update the progress to 100% before calling load
      // (endlessMode, loadedSize, totalSize)
      progress(true, 0, 1024);

      // Should call the load method with a file object or blob when done
      // load(file);

      // Should expose an abort method so the request can be cancelled
      return {
        abort: () => {
          // User tapped abort, cancel our ongoing actions here

          // Let FilePond know the request has been cancelled
          abort();
        }
      };
    },

    load: (uniqueFileId, load, error, progress, abort, headers) => {

    },
    fetch: (url, load, error, progress, abort, headers) => {

    }

  };

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') myPond: any;

  handleFilePondInit() {
    console.log('FilePond has initialised');

    // FilePond instance methods are available on `this.myPond`
  }
}
