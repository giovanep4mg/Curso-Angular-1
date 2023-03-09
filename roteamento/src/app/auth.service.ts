import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  acessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem('acess-token');
  }

  login(email: string, senha: string): boolean {
    // se email e senha forem iguais a esse
    if (email == 'admin@admin.com.br' && senha == '123456') {
      //vai carrega o token de acesso do cliente
      sessionStorage.setItem('acess-token', this.acessToken);
      //retorna dizendo que é verdadeiro
      return true;
    }
    //se não for tudo igual a verificação, vai retorna false
    return false;
  }

  logout() {
    //vai limpar
    sessionStorage.clear();
  }

  constructor() {}
}
