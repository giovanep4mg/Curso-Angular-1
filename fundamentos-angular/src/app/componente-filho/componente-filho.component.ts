import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  //para inserir
  @Input() sobrenome = "";

  //emitir,disparar eventos que estão no pai
  @Output() mostrarnome = new EventEmitter();

  //variável
  nome = "";
}

