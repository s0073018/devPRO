import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';

export const configFB = {
    apiKey: "AIzaSyCmvdEuLxvz0VMlb9lBrVY5jZj4KfBGMQU",
    authDomain: "torrid-torch-5138.firebaseapp.com",
    databaseURL: "https://torrid-torch-5138.firebaseio.com",
    projectId: "torrid-torch-5138",
    storageBucket: "torrid-torch-5138.appspot.com",
    messagingSenderId: "575749887396"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(configFB),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
