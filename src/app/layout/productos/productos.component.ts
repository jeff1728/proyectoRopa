import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
       private productoService: ProductoService,
    private carritoService: CarritoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: res => {
        if (res.success) {
          this.productos = res.productos;
        }
      },
      error: err => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  agregarAlCarrito(producto: Producto) {
    if (this.authService.isLoggedIn()) {
      this.carritoService.agregarProducto(producto);
    } else {
      alert("Debes iniciar sesión para agregar productos al carrito.");
    }
  }
}
