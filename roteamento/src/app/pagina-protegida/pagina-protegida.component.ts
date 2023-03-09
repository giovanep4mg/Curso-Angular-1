import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css'],
})
export class PaginaProtegidaComponent {
  //injetar o auth service
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    //para limpar
    this.auth.logout();
    //navegar para a rota inicial
    this.router.navigate(['']);
  }
}
