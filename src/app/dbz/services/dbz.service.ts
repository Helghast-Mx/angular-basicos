import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

    
// Como no queremos que en otro lado se manipule la data, 
// debemos crear una funcion que lo regrese o un get
    private _personajes : Personaje [] = [
        {
          nombre: "Cell",
          poder: 700
        },
        {
          nombre: "Majin Boo",
          poder: 1000
        }
     ];
// Creamos la funcion que regrese la data para que pueda ser usado en otro lado
     get personajes():Personaje[] {
         return [...this._personajes];
     }

     constructor(){
        console.log('servicio DBZ inicializado')
    }

    agregarPersonaje(dataPersonaje:Personaje) {
        this._personajes.push( dataPersonaje )
    }
}