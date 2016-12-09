import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {TarefaProvider} from "../../providers/tarefa-provider";
import {TarefasAddPage} from "../tarefas-add/tarefas-add";



@Component({
  selector: 'page-tarefa-list',
  templateUrl: 'tarefa-list.html'
})
export class TarefaListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
  public tarefaProvider: TarefaProvider) {}

  ionViewDidLoad() {
    this.tarefas = this.tarefaProvider.getAll();
  }

  adicionarTarefa(){
  this.navCtrl.push(TarefasAddPage,{'tarefa' : new Tarefa()});
  }

}
