import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SgundoComponentComponent } from './sgundo-component/sgundo-component.component';
import { MultiplicaPipe } from './multiplica.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { PersonalizadoComponent } from './personalizado/personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { Servico1Component } from './servico1/servico1.component';
import { Servico2Component } from './servico2/servico2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SgundoComponentComponent,
    MultiplicaPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    PersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    Servico1Component,
    Servico2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent,
    AngularComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //para usar a ligação entre receber e mostra dados
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
