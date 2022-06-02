import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl: '../heroe/heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Iroman'
    edad: number = 30

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${ this.edad}`
    }
}