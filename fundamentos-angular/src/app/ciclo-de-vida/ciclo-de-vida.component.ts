import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  //pega a hora atual do pc
    horario = new Date();
    timer : any = null!;

      ngOnInit(): void {
      //mensagem de aviso que foi acionado esse metodo
        console.log("O evento OnInit disparou");


        //setInterval > executa uma ação de tempo em tempos
        this.timer = setInterval(() => this.horario = new Date(), 1000);

    }

    @Input() texto = "";

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

    }

    //para limpar os dados quando fechar a página
    ngOnDestroy(): void {
       // limpa o evento timer
        clearInterval(this.timer);

    }

}
