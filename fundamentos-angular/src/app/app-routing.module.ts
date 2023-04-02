import { RoteamentoParametroRotaComponent } from './roteamento-parametro-rota/roteamento-parametro-rota.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CardComponent } from './card/card.component';
import { CarregarImagensComponent } from './carregar-imagens/carregar-imagens.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolacaoDeTextComponent } from './interpolacao-de-text/interpolacao-de-text.component';
import { NavegacaoPaginasComponent } from './navegacao-paginas/navegacao-paginas.component';
import { PersonalizadoComponent } from './personalizado/personalizado.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { PiperComponent } from './piper/piper.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { RoteamentoComponent } from './roteamento/roteamento.component';
import { Servico1Component } from './servico1/servico1.component';
import { SgundoComponentComponent } from './sgundo-component/sgundo-component.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { RoteamentoPaginaNEncontradaComponent } from './roteamento-pagina-n-encontrada/roteamento-pagina-n-encontrada.component';
import { RoteamentoLazyLoadingComponent } from './roteamento-lazy-loading/roteamento-lazy-loading.component';
import { RoteamentoRouterGuardComponent } from './roteamento-router-guard/roteamento-router-guard.component';

const routes: Routes = [

  {path:'', component:AngularComponent},
  {path:'angular', component:AngularComponent},
  {path:'primeiro-componente', component:PrimeiroComponenteComponent},
  {path:'segundo-componente', component:SgundoComponentComponent},
  {path:'interpolacao-de-texto', component:InterpolacaoDeTextComponent},
  {path:'piper', component:PiperComponent},
  {path:'pipe-customizado', component: PipeCustomizadoComponent},
  {path:'carregar-imagens', component:CarregarImagensComponent},
  {path:'event-binding', component:EventBindingComponent},
  {path:'two-way-data-binding', component:TwoWayDataBindingComponent},
  {path:'renderizando-listas', component:RenderizandoListasComponent},
  {path:'personalizado', component:PersonalizadoComponent},
  {path:'interacao-componentes', component:ComponentePaiComponent},
  { path: 'card', component:CardComponent},
  { path:'service1', component: Servico1Component},
  { path: 'ciclo-de-vida-pai', component: CicloDeVidaPaiComponent},
  { path:'roteamento', component: RoteamentoComponent},
  { path:'navegacao-paginas', component : NavegacaoPaginasComponent},
  { path: 'pagina-nao-encontrada', component: RoteamentoPaginaNEncontradaComponent},
  { path: 'parametro-rota', component: RoteamentoParametroRotaComponent},
  { path: 'lazy-loading', component: RoteamentoLazyLoadingComponent},
  { path: 'router-guard', component: RoteamentoRouterGuardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
