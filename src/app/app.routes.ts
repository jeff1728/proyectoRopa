import { Routes } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { HomepageContentComponent } from './layout/components/homepage-content/homepage-content.component';
import { RegisterComponent } from './layout/register/register.component';
import { ProductosComponent } from './layout/productos/productos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', component: HomepageContentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'productos', component: ProductosComponent },
    ]
  },

];
