import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Tarefa} from "../model/tarefa";


@Injectable()
export class TarefaProvider {

  constructor(public http: Http) {

  }


  getAll():Array<Tarefa>{
    return new Array();
  }

  adicionar(tarefa:Tarefa){

  }

}
