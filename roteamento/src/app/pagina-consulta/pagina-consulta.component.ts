import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-consulta',
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.css'],
})
export class PaginaConsultaComponent {
  //
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = '';

  //
  constructor(private route: ActivatedRoute) {}

  //
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.route.queryParamMap.subscribe((params) => {
      this.idade = Number(params.get('idade'));
      this.nome = params.get('nome');
    });
  }
}
