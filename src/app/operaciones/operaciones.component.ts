import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valor1?:string;
  valor2?:string;
  resultado?:string;
  Sumar(){

  }

  Restar(){

  }

}
