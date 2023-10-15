import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>contador: {{contador}}</h3>
  <button (click)="incrementarPor(+1)">+1</button>
  <button (click)="reinicioContador()">Reinicio</button>
  <button (click)="incrementarPor(-1)">-1</button>
  `
})

export class CounterComponent{
  public contador: number= 10;

  constructor() { }

  incrementarPor(valor: number):void{
    this.contador +=valor;

  }
  reinicioContador(){
    this.contador = 10;
  }
}
