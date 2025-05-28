import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeIcons } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    RouterModule,
    FormsModule,
    RouterLink,
    InputTextModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

email!: string;
  password!: string;
  rememberMe: boolean = false;
  primeIcons = PrimeIcons;

   constructor(private router: Router, private http: HttpClient) {}

  login() {
    if (!this.email || !this.password) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    const loginData = {
      correo: this.email,
      contrasena: this.password
    };

    this.http.post<any>('http://localhost/backend_proyecto/config/login.php', loginData).subscribe(
      (response) => {
        if (response.success) {
          alert('Inicio de sesión exitoso. Bienvenido ' + response.usuario.nombre);
          localStorage.setItem('usuario', JSON.stringify(response.usuario));
          console.log("Respuesta del backend:", response.usuario);

          // window.location.reload(); 
          this.router.navigate(['/']);

          // if (this.rememberMe) {
          //   localStorage.setItem('usuario', JSON.stringify(response.usuario));
          // } else {
          //   sessionStorage.setItem('usuario', JSON.stringify(response.usuario));
          // }

          this.router.navigate(['/']);
        } else {
          alert('Error: ' + response.message);
        }
      },
      (error) => {
        console.error('Error en la petición', error);
        alert('Error en la conexión con el servidor');
      }
    );
  }


}