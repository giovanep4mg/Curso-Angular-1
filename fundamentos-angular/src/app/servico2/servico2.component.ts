import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servico2',
  templateUrl: './servico2.component.html',
  styleUrls: ['./servico2.component.css']
})
export class Servico2Component {
  descricao = "";

  constructor(public logger: LoggerService){}

  adicionarProdutos() {
    this.logger.logar(`O produto com a descrição ${this.descricao} foi adicionado`);
  }



}
