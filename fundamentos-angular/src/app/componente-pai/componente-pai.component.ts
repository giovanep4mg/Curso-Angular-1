import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {


  //variável
  sobrenome = "da Silva";



    //metodo, para mostrar uma janelinha que exibirá o nome completo
    mostrarNomeCompleto(nomeCompleto: any){

        //pega esse texto e exibi ele na janelinha
        alert(`O nome completo é:  ${nomeCompleto}` );
    }
    //esse metodo será disparado no elemento filho

}
