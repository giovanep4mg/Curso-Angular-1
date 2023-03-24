import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  nome = "Giovani";
  dataNascimento = "12/02/1989";
  cidade = "Passa-Quatro, MG"
  idade = "38" ;




  mostrarNome(){
    alert("O nome dele é "+this.nome);
  }

  mostrarNomeIdade(){
    alert("O nome dele é "+this.nome+ " e sua idade é: "+this.idade);
  }

  mostrarTudo(){
    alert("O nome "+this.nome+
    " , idade "+this.idade+ ", cidade "+this.cidade);
  }


}
