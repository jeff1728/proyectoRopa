import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Listbox } from 'primeng/listbox';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup  } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';


interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [ButtonModule, FormsModule]
})
export class LayoutComponent implements OnInit {

  constructor() { }

      items: MenuItem[] | undefined;


    ngOnInit() {
      
    }

      
    }
