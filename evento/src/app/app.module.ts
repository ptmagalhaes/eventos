import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginProvider} from "../providers/login-provider";
import {RegistrarPage} from "../pages/registrar/registrar";
import { LoginPage } from '../pages/login/login';
import firebase from "firebase";
import {TarefaListItem} from "../components/tarefa-list-item/tarefa-list-item";
import {TarefaListPage} from "../pages/tarefa-list/tarefa-list";
import {TarefasAddPage} from "../pages/tarefas-add/tarefas-add";
import {TarefaProvider} from "../providers/tarefa-provider";
import {LovProvider} from "../providers/lov-provider";
import {EventosProvider} from "../providers/eventos-provider";
import {EventoListItem} from "../components/evento-list-item/evento-list-item";


const firebaseConfig  = {
  apiKey: "AIzaSyCpBd41NUWAGo0RcApvEQk7esXrJqTM0fU",
  authDomain: "eventos-ad494.firebaseapp.com",
  databaseURL: "https://eventos-ad494.firebaseio.com",
  storageBucket: "eventos-ad494.appspot.com",
  messagingSenderId: "194902049492"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaListPage,
    TarefaListItem,
    EventoListItem,
    TarefasAddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaListPage,
    TarefaListItem,
    EventoListItem,
    TarefasAddPage
  ],
  providers: [
    LoginProvider,
    TarefaProvider,
    LovProvider,
    EventosProvider

  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
