import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.css']
})
export class PrimeiraPaginaComponent {

//depedencia, servico,gerado
constructor(private router:Router){}

//metodo que vai retorna o link da segunda página.
moverParaSegundaPagina(){

  // para onde deve ir ? "segunda-pagina"
  this.router.navigate(["segunda-pagina"]);
}


}
