import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto/detalhe-produto.component';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },

  //para carregar a página logo quando se inicia
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  //rota para carregar a página não encontrada
  {path:'**',component: NaoEncontradaComponent},

  //rota para carregar a página detalhe-produto
  //{path:':id',component:DetalheProdutoComponent}

  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
