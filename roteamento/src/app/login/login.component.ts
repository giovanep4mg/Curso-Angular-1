import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //variáveis vazias só para inicializar
  email = ' ';
  senha = ' ';

  //injeta nessa classe
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    // se foi autenticado o email e a senha
    if (this.auth.login(this.email, this.senha)) {
      //vai fazer a navegação e entrar na página protegida
      this.router.navigate(['pagina-protegida']);
      return;
    }
    // se não teve a autenticação do email e da senha, exibirá a "janelinha" com essa mensagem
    alert('O login está inválido');

    // depois vai limpar os campos digitados, para que o usuário possa digitar novamente.
    this.email = '';
    this.senha = '';
  }
}
