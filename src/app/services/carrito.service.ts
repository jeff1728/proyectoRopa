import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
private productosEnCarrito = new BehaviorSubject<any[]>([]);
  productos$ = this.productosEnCarrito.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isLoggedIn()) {
      this.cargarCarrito();
    }
  }

  cargarCarrito() {
    const id = this.auth.getUsuario();
    this.http.get<any[]>(`http://localhost/backend_proyecto/config/get_carrito.php?id_usuario=${id}`)
      .subscribe(productos => this.productosEnCarrito.next(productos));
  }

  agregarProducto(producto: any) {
    if (!this.auth.isLoggedIn()) return;

    

    const id = this.auth.getUsuario();
    if (!id) {
    console.error("Usuario no está logueado o ID no disponible");
    return;
  }
  
    this.http.post('http://localhost/backend_proyecto/config/add_carrito.php', {
      usuario_id: id,
      producto_id: producto.id_producto,
      cantidad: 1
    }).subscribe(() => this.cargarCarrito());
    console.log('Enviando al carrito:', {
  usuario_id: id,
  producto_id: producto.id_producto,
  cantidad: 1
});

  }

  actualizarCantidad(idProducto: number, cantidad: number) {
    const id = this.auth.getUsuario();
    this.http.post('http://localhost/backend_proyecto/config/update_carrito.php', {
      usuario_id: id,
      producto_id: idProducto,
      cantidad
    }).subscribe(() => this.cargarCarrito());
  }

  eliminarProducto(idProducto: number) {
    const id = this.auth.getUsuario();
    this.http.post('http://localhost/backend_proyecto/config/delete_carrito.php', {
      usuario_id: id,
      producto_id: idProducto
    }).subscribe(() => this.cargarCarrito());
  }

}
