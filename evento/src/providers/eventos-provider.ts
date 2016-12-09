import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginProvider} from "./login-provider";
import firebase from "firebase";


@Injectable()
export class EventosProvider {

 reference;

 constructor(public http: Http,
               public loginProvider: LoginProvider) {
     this.initialize();
   }

   private initialize(){
       this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/eventos/');
     }




}
