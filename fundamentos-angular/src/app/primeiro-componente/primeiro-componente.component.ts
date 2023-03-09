import { Component } from "@angular/core";
/* primeiro componente,criado a mão, todos esses códigos foram digitados manualmente.
Depois tem que adicionar ele no app.module.ts, para inicializar ele .
E para aparecer na página, vai no app.componente.html, chama ele lá :
<app-primeiro-componete></app-primeiro-componete>
*/
@Component({
  // para dizer como é nome desse componente quando precisar usar ele
  selector: "app-primeiro-componete",
  //é o que irá aparecer na tela, arquuivo html
  template: "<h2>Primeiro componente</h2> <h3>Feito tudo na mão, criando uma pasta, criou o arquivo, o componente é basicamente uma classe. <br> Essa forma que foi feita é mais trabalhoso, mas você vê tudo que acontece e que deve acontecer para ser adicionado um componente.<br></h3>",
  // é o estilo do html, que irá aparecer
  styles: ["h2{color:red;}"]
})
export class PrimeiroComponenteComponent{}
