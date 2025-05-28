import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
   standalone: true,
  imports: [FormsModule, ButtonModule, FieldsetModule, InputTextModule, CommonModule, PasswordModule, RouterLink],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

   register() {

     if (!this.name || !this.email || !this.password || !this.phone) {
    alert('Por favor, completa todos los campos.');
    return;
  }

    const data = {
      nombre: this.name,
      correo: this.email,
      contrasena: this.password,
      telefono: this.phone
    };

     this.http.post('http://localhost/backend_proyecto/config/registro.php', data).subscribe(
      (response: any) => {
        if (response.success) {
          alert('Registro exitoso');
        } else {
          alert('Error al registrar: ' + response.message);
        }
      },
      error => {
        console.error('Error en la petición:', error);
        alert('Ocurrió un error al conectar con el servidor');
      }
    );
  }

}
