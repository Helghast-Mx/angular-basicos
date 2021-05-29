import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Batman', 'Spiderman', 'Captain America', 'Dr. Strange']
  heroeBorrado:string = '';
  condicion:boolean = false;
  borrarHeroe():void{
   
   
   this.heroeBorrado = this.heroes.shift() || '';
   this.condicion = true;
    console.log(`Borrando heroe ${this.heroes}`)
   
  }
}
