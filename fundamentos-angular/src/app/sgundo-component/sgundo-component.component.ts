import { Component } from '@angular/core';
/** Esse segundo componente já foi criado pelo "cmd", tudo é criado automaticamente, o nome, de onde virá o html, de onde vai vir o style "css".
 * E a classe que é para você, colocar os dados, variáveis, metodos...
 *
 */
@Component({
  selector: 'app-sgundo-component',
  templateUrl: './sgundo-component.component.html',
  styleUrls: ['./sgundo-component.component.css'],
})
//vai carregar no SgundoComponent, seria as variáveis
export class SgundoComponentComponent {
  nome = 'Giovani';
  cidade = 'Passa-Quatro, Minas Gerais';
  idade = 39;

  dataNascimento = "11/08/1983" ;


  urlimagem = '/assets/nego1.jpg';

  //cria um metodo para exibir a data numa "janelinha na página"
  mostrarDataNascimento(): void {
    // comando que exibe a janelinha,
    alert("A data de nascimento do Giovani é: " + this.dataNascimento);
  }
}
