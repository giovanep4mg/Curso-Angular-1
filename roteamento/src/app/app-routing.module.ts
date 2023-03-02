import { PaginaConsultaComponent } from './pagina-consulta/pagina-consulta.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//criando a rota, que será um vetor, uma lista de rotas
const routes: Routes = [
  //quando você digita "primeira pagina" ou "segunda pagina", sem o hifén entre as palavras, após a barra "http://localhost:4200/" no navegador será redirecionado para o menu.

  //quando você digita "primeira-pagina", após a barra "http://localhost:4200/" no navegador será executado esse componente "PrimeiraPaginaComponent", que abri a primeira página.
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent },

  //quando você digita "segunda-pagina", após a barra "http://localhost:4200/" no navegador será executado esse componente "SegundaPaginaComponent", que abri a segunda página.
  { path: 'segunda-pagina', component: SegundaPaginaComponent },

  //quando você não digita nada, após a barra "http://localhost:4200/" no navegador, você será redirecionado para a primeira página.
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },

  // "/:id" esse é o parametro que tem que acessar na classe, e qual componente será executado.
  { path: 'pagina-consulta/:id', component: PaginaConsultaComponent },

  //quando você não digita algo errado, que não é "primeira-pagina", nem "segunda-pagina", após a barra "http://localhost:4200/" no navegador, será executado esse componente que exibirá uma mensagem de erro "404!Página não encontrada" .
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  declarations: [],
  // importa e ultiliza esse metodo "forRoot()", precisa passar uma rota pra ele
  imports: [RouterModule.forRoot(routes)],

  // para pode ser ultilizado no  app.module.ts, tem que estar lá no imports => AppRoutingModule.
  exports: [RouterModule],
})
export class AppRoutingModule {}
