import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-modal',
  imports: [CommonModule],
  templateUrl: './carrito-modal.component.html',
  styleUrls: ['./carrito-modal.component.css']
})
export class CarritoModalComponent implements OnInit {

  
  productos: any[] = [];
  visible = false;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.productos$.subscribe(data => {
      this.productos = data;
    });
  }

  abrir() {
    this.visible = true;
  }

  cerrar() {
    this.visible = false;
  }

  aumentar(prod: any) {
    this.carritoService.actualizarCantidad(prod.id_producto, prod.cantidad + 1);
  }

  disminuir(prod: any) {
    if (prod.cantidad > 1) {
      this.carritoService.actualizarCantidad(prod.id_producto, prod.cantidad - 1);
    }
  }

  eliminar(prod: any) {
    this.carritoService.eliminarProducto(prod.id_producto);
  }

  total(): number {
    return this.productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  }

}
