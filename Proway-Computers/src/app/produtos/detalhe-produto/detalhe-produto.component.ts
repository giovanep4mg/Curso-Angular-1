import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'produtos';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {
  // Cria a propriedade, variável "produto" que será a lista de produtos ou pode ser indefinida.
  produto: IProduto | undefined ;



  //propriedade sobre a quantidade de produtos
  Quantidade = 1;

  //Para importa os serviços de produtos, e ativar as rotas
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService : NotificacaoService
    ){}

  //Pegar os parametros
  ngOnInit(): void {

    // vai trazer todos os parametros da rota
    const routeParams = this.route.snapshot.paramMap;

    //Para pegar o id do produto,"Number" => converte em "número"
    const produtoId = Number (routeParams.get("id"))

    //pegar o id do produto,
    this.produto = this.produtosService.getOne(produtoId);
    
  }

  //para passar uma mensagem quando clicar para adiconar no carrinho.
  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
  }


}
