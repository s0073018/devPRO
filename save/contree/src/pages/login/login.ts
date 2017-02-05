import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FirebaseDAO } from '../../providers/firebase-dao';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  password: string;
  constructor(public navCtrl: NavController, public dao : FirebaseDAO) { 

    this.email="gilles.blanc@live.fr";
    this.password = "omomom";
  }

  login() {
    this.dao.login(this.email,this.password).then((dataUser) =>{
      console.log("ident ok :",dataUser);
      this.navCtrl.setRoot(TabsPage);
    },(error) =>{
      console.log("ident ko :",error);
      
    });
    
  }
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
