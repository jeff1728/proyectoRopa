import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { CarritoModalComponent } from "../../modals/carrito-modal/carrito-modal.component";

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, FormsModule, Menubar, RouterLink, CommonModule, CarritoModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

 
  isLoggedIn: boolean = false;
  nombreUsuario: string = '';
  menuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const userObj = JSON.parse(usuario);
      this.isLoggedIn = true;
      this.nombreUsuario = userObj.nombre || 'Usuario';
    }

    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
      { label: 'Productos', icon: 'pi pi-star', routerLink: ['/productos'] },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          { label: 'Components', icon: 'pi pi-bolt' },
          { label: 'Blocks', icon: 'pi pi-server' },
          { label: 'UI Kit', icon: 'pi pi-pencil' },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              { label: 'Apollo', icon: 'pi pi-palette' },
              { label: 'Ultima', icon: 'pi pi-palette' }
            ]
          }
        ]
      },
      { label: 'Contact', icon: 'pi pi-envelope' }
    ];
  }

  logout() {
    localStorage.removeItem('usuario');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    window.location.reload(); 
  }
}
