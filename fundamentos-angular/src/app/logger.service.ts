import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  //vetor de strings
  mensagens: String[] = [];


    logar(mensagem:string){
      console.log(mensagem);
      this.mensagens.push(mensagem);
    }

      exibeTodosOsLogs(){
        console.log(this.mensagens);
        alert("Os dados adicionado foram : "+this.mensagens);
      }

}
