import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

getUsuario() {
  const user = localStorage.getItem('usuario') || sessionStorage.getItem('usuario');
  return user ? JSON.parse(user).id_usuario : null;
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('usuario') || !!sessionStorage.getItem('usuario');
}

logout() {
  localStorage.removeItem('usuario');
  sessionStorage.removeItem('usuario');
}

}
