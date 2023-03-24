import { Component } from '@angular/core';

@Component({
  selector: 'app-carregar-imagens',
  templateUrl: './carregar-imagens.component.html',
  styleUrls: ['./carregar-imagens.component.css']
})
export class CarregarImagensComponent {
  urlimagem = '/assets/nego1.jpg';

 dataNascimento = "11/02/2023"
  //cria um metodo para exibir a data numa "janelinha na página"
  mostrarDataNascimento(): void {
    // comando que exibe a janelinha,
    alert("A data de nascimento do Giovani é: " + this.dataNascimento);
  }

}
