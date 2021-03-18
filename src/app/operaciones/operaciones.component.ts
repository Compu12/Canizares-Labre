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

    do {
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
      num1_idx--;
      num2_idx--;
    } while (num1_idx > -1);

    return num1.join('').replace(/^[0]+/g,"");
  }

  Restar(){
    this.resultado = this.restarInterno(this.valor1, this.valor2)
  }

  restarInterno(num1:string, num2:string):string
  {
      if(num1==num2)
      {
          return "0";
      }
      else if (Number(num1) > Number(num2)) {
      return this.restarOrdenado(num1, num2);
    } else {
      return this.restarOrdenado(num2, num1)
    }
  }

  restarOrdenado(num1:any, num2:any):string
  {
    var num1_idx = num1.length - 1;
    var num2_idx = num1.length - num2.length;
    var remainder = 0;
    var respuesta = new Array();

    var index1 = num1_idx;
      do {
        if(index1-num2_idx>= 0)
          {

              var sumaRemainder = Number(num2[index1-num2_idx]) + remainder;
              if(num1[index1] >= sumaRemainder)
              {
                  var res = num1[index1] - sumaRemainder;
                  respuesta.push(res);
                  remainder = 0;
              }
              else
              {
                  var suma = Number(num1[index1]) + 10;
                  var res = suma - sumaRemainder;
                  respuesta.push(res);
                  remainder = 1;
              }
          }
          else
          {
              if(remainder > 0)
              {
                  if(Number(num1[index1])>=remainder)
                  {
                      var res = num1[index1] - remainder;
                      respuesta.push(res);
                      remainder = 0;
                  }
                  else
                  {
                      var suma = Number(num1[index1]) + 10;
                      var res = suma - remainder;
                      respuesta.push(res);
                      remainder = 1;
                  }
              }
              else
              {
                  var res = num1[index1] - remainder;
                      respuesta.push(res);
                      remainder = 0;
              }
          }
          index1--;
      } while (index1 >= 0);

     var respuestaOrdenada = "";
      var index2 = respuesta.length-1;
      do {
        respuestaOrdenada += respuesta[index2];
        index2--;
      } while (index2 >=0);

      return respuestaOrdenada;
  }
}
