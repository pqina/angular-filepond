import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myFiles = [];

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') myPond: any;

  handleFilePondInit() {
    console.log('FilePond has initialised');

    // FilePond instance methods are available on `this.myPond`
  }
}
