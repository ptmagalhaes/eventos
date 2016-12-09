import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Evento} from "../../model/evento";
import {EventosProvider} from "../../providers/eventos-provider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

eventos:Array<Evento>;

constructor(public navCtrl: NavController,
            public eventosProvider: EventosProvider,
            public ngZone: NgZone) {}

ionViewDidLoad() {


      this.eventosProvider.reference.on('value', (snapshot) => {
        this.ngZone.run( () => {
          let innerArray = new Array();
          snapshot.forEach(elemento => {
            let el = elemento.val();
            innerArray.push(el);
          })
          this.eventos = innerArray;
        })
      })

}

}
