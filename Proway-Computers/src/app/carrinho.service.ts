import { IProdutoCarrinho } from './../../produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  //itens é um vetor "lista de produtos", que vai iniciar vazia
  itens: IProdutoCarrinho[] = [] ;

  constructor() { }
}
