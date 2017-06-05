import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(auth : AngularFireAuth){
    
    var email:string="gilles.blanc@live.fr";
    var password:string="omomom";

    auth.auth.signInWithEmailAndPassword(email,password).then((ok)=>{
        console.log("login OK :",ok);
    },
    (ko) =>
    {
      console.log("login KO :",ko);
    });
  }
}
