import { Component ,  Input} from '@angular/core';
import {Evento} from "../../model/evento";

@Component({
  selector: 'evento-list-item',
  templateUrl: 'evento-list-item.html'
})
export class EventoListItem {

  @Input()
   evento:Evento;

}
