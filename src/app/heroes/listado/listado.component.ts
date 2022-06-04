import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'Goku', 'Iroman', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.pop()|| '';
    
  }

  

}


