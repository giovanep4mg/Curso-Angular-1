import { IProduto, produtos } from './../../../produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})



export class ProdutosComponent {
  //pode ser uma lista de produtos ou indefinida
  produtos: IProduto[] | undefined;


  //Para importa os serviços de produtos
  constructor(private produtosService: ProdutosService){}


  //Para obter todos os produtos
  OnInit(): void {
    this.produtos = this.produtosService.getAll()
  }


}
