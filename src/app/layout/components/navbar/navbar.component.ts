import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, FormsModule, Menubar, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor() { }

    menuItems: MenuItem[] = [];

 
     ngOnInit() {
        this.menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
    { label: 'Features', icon: 'pi pi-star' },
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
}
