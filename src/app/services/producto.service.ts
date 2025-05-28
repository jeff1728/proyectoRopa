import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost/backend_proyecto/config/productos.php';

   constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<{ success: boolean; productos: Producto[] }> {
    return this.http.get<{ success: boolean; productos: Producto[] }>(this.apiUrl);
  }

}
