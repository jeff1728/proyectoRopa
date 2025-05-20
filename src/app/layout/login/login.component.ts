import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, RouterLink, InputTextModule, PasswordModule, ButtonModule, CheckboxModule, RouterModule, InputTextModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  

   email!: string;
  password!: string;
  rememberMe: boolean = false;
  primeIcons = PrimeIcons;

  constructor(private router: Router) {}

  ngOnInit() {}
  
  login() {
    console.log('Iniciando sesión con:', this.email, this.password, 'Recordarme:', this.rememberMe);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }

  
}