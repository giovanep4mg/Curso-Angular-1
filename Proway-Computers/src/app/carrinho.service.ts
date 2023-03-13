import { IProdutoCarrinho } from './../../produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  //itens é um vetor "lista de produtos", que vai iniciar vazia
  itens: IProdutoCarrinho[] = [] ;

  constructor() { }

  //vai trazer a lista de itens
  obtemCarrinho(){
    /**
     * JSON.parse => vai modificar de string para objeto.
     * se não tiver uma string, vai pegar uma string vazia.
     */
    return JSON.parse(localStorage.getItem("carrinho") || " " );

  }

  //
  adicionarAoCarrinho( produto: IProdutoCarrinho){
    //
    this.itens.push(produto);

    //
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  //
  limparCarrinho(){
    //para limpar o carrinho
    this.itens = [] ;

    //para limpar o "localStorage"
    localStorage.clear();
  }

}
