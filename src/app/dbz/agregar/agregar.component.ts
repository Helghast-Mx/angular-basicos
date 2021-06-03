import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor( private dbzService : DbzService ) { }
 
  
  @Input()nuevo : Personaje = {
    nombre : "",
    poder : 0
  }

  // @Output() onNewCharacter : EventEmitter<Personaje> = new EventEmitter();

  
  agregar(){
    // console.log(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo)
    // this.onNewCharacter.emit(this.nuevo)

    this.nuevo = 
    {
      nombre : "",
      poder : 0
    };

  }


}
