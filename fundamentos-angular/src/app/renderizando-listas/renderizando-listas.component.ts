import { Celular } from './../types/Celular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
    celulares: Celular [] = [
      { id:1, nome:"cel A", descricao:"grande", esgotado: false},
      { id:2, nome:"cel B", descricao:"medio", esgotado: true},
      { id:3, nome:"cel AB", descricao:"pequeno", esgotado: false},
      { id:4, nome:"cel XA", descricao:"grande", esgotado: false}
    ];

}
