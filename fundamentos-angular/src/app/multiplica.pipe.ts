import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
//classe que vai multiplicar um número
export class MultiplicaPipe implements PipeTransform {
  //pega  valor "num1" multiplica por "num2"
  transform(valor: number, multiplicador: number): number{

    //retorna o valor vezes multiplicação
    return valor * multiplicador ;
  }

}
