import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//criando a rota, que será um vetor
const routes : Routes = [

  //o que vai ser digitado após a barra no navegador, qual será o componente que irá aparecer é "PrimeiraPaginaComponent".
  { path : 'primeira-pagina', component : PrimeiraPaginaComponent },

  //o que vai ser digitado após a barra no navegador, qual será o componente que irá aparecer é "PrimeiraPaginaComponent".
  {path:'segunda-pagina', component: SegundaPaginaComponent}

]


@NgModule({
  declarations: [],
  // importa e ultiliza esse metodo "forRoot()", precisa passar uma rota pra ele
  imports : [RouterModule.forRoot(routes)],

  // para pode ser ultilizado no  app.module.ts, tem que estar lá no imports => AppRoutingModule.
  exports: [RouterModule]

})
export class AppRoutingModule { }

