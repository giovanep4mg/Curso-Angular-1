import { PrimeiraPaginaComponent } from './../primeira-pagina/primeira-pagina.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  { path : 'primeira pagina', component : PrimeiraPaginaComponent }
]


@NgModule({
  declarations: [],
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

