import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {LovProvider} from "../../providers/lov-provider";

@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html'
})
export class TarefasAddPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public lovProvider: LovProvider) {}

    ionViewDidLoad() {
      this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }

  }

}
