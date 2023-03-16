import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

// Para criar as rotas, OS LINKS PARA OUTRAS PÁGINAS
const routes: Routes = [
  /** Rota destinada a produtos
   * path = é o navegador, onde você coloca o endereço.
   * Então quando estiver escrito produtos, vai abrir o componente "produtos.module"
   */
 { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},

  // quando não estiver nada escrito no navegador, vai ser redirecionado para a página produtos.
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  //
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },


  //rota para carregar a página não encontrada
  {path:'**',component: NaoEncontradaComponent},



  //
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
