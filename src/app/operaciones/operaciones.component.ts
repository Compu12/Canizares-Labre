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

  Sumar()
  {
    this.resultado =  this.sumarInterno(this.valor1, this.valor2)
  }

   sumarInterno(num1:any, num2:any) {
      num1 = num1.split('');
    num2 = num2.split('');

    num1 = num1.map(function (num:any) {
      return parseInt(num, 10);
    });

    num2 = num2.map(function (num:any) {
      return parseInt(num, 10);
    });

      if (num2.length > num1.length) {
      return this.sumarOrdenado(num2, num1);
    } else {
      return this.sumarOrdenado(num1, num2)
    }
  }

  sumarOrdenado(num1:any, num2:any) {
      var num1_idx = num1.length-1;
    var num2_idx = num2.length-1;
    var remainder = 0;

    for (; num1_idx > -1; num1_idx--, num2_idx--) {
      var sum = num1[num1_idx] + remainder;

      if (num2_idx > -1) {
          sum += num2[num2_idx];
      }

          if (sum <= 9 || num1_idx === 0) {
          remainder = 0;
          num1[num1_idx] = sum;
      } else if (sum >= 10) {
          remainder = 1;
        num1[num1_idx] = sum - 10;
      }

    }

    return num1.join('').replace(/^[0]+/g,"");
  }

  Restar(){

  }

}
