import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class FirebaseDAO {

  constructor() {
    console.log('Hello FirebaseDAO Provider');
  }

  init() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCmvdEuLxvz0VMlb9lBrVY5jZj4KfBGMQU",
      authDomain: "torrid-torch-5138.firebaseapp.com",
      databaseURL: "https://torrid-torch-5138.firebaseio.com",
      storageBucket: "torrid-torch-5138.appspot.com",
      messagingSenderId: "575749887396"
    };
    firebase.initializeApp(config);
    console.log('Init FirebaseDAO Provider');
  }

  login(email : string, password : string) : any{
    return(firebase.auth().signInWithEmailAndPassword(email,password));
  }
}
