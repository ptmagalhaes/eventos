import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login-provider";
import {Credencial} from "../../model/credencial";
import {HomePage} from "../home/home";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credencial:Credencial;

    constructor(public navCtrl: NavController,
                public loginProvider: LoginProvider) {
      this.initialize();
    }

    private initialize(){
      this.credencial = new Credencial();
    }


    ionViewDidLoad() {
       this.loginProvider.loginSucessoEventEmitter.subscribe(
         user => {
           this.navCtrl.setRoot(HomePage)
         }
       );
       this.loginProvider.loginFalhaEventEmitter.subscribe(
         error => console.log(error)
       )
     }

     loginComFacebook(){
       this.loginProvider.loginComFacebook();
     }

     loginComCredencial(){
       this.loginProvider.loginComCredencial(this.credencial);
     }

     loginComGoogle(){
       this.loginProvider.loginComGoogle();
     }

     sair(){
       this.loginProvider.sair();
     }

     doRegister(){
       this.navCtrl.push(RegistrarPage);
     }

}
