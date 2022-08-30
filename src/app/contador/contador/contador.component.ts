import { Component } from "@angular/core";


//creacion de nuestras propias etiquetas html
//en este caso estoy creando la etiqueta con el nombre de Gicson que seria asi: <Gicson></Gicson> 

@Component({
    selector : "Gicson",
    template : `

        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)=" acumular( base ) "> + {{ base }} </button>

        <span> {{numero}} </span>

        <button (click)=" acumular(- base) "> - {{ base }} </button>
    
    `
})
export class ContadorComponent {

    titulo: string = 'Contador APP';
    numero: number = 10;
    base  : number = 5; // aumenta o disminuye de 5 en 5 el valor.

    acumular(valor: number){
      this.numero += valor;
    }
}