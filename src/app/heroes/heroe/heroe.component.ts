import { Component } from "@angular/core";



@Component({
    selector : "App-heroe",
    templateUrl : `heroe.component.html`
})
export class HeroeComponent{
    
    nombre : string = "Iroman";
    edad   : number = 30;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = "Batman";
    }

    cambiarEdad():void{
        this.edad = 20;
    }
}