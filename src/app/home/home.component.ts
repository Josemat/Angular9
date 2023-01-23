import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  titulo: string = 'persona';
  constructor() {}
  cambiarNombre(params: string) {
    this.titulo = params;
  }
}
