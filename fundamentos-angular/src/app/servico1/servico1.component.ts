import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component {

  //propriedade
  nome = "";


  constructor(private logger: LoggerService){}

  //metodo
  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
    alert("O nome é : "+this.nome);
  }
}
