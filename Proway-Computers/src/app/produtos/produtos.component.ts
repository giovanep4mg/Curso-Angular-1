import { IProduto, produtos } from './../../../produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})



export class ProdutosComponent {
  //
  produtos: IProduto[] = produtos;


  OnInit(): void {

  }


}
