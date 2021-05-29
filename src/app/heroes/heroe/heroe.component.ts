import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Batman'
    edad:number = 40

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerFuncion(){
        return `${this.nombre} - ${this.edad}`
    }
}