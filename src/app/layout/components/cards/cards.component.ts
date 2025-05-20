import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface Categoria {
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  imports: [CommonModule],
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categorias: Categoria[] = [
    {
      nombre: 'Mujer',
      descripcion: 'Descubre nuestra colección de ropa para mujer, con estilos modernos y elegantes.',
      imagen: 'https://img.freepik.com/foto-gratis/mujer-joven-sombrero-negro-gafas-sol-aislado-sobre-fondo-blanco_231208-2055.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740'
    },
    {
      nombre: 'Hombre',
      descripcion: 'Encuentra las últimas tendencias en moda masculina, desde casual hasta formal.',
      imagen: 'https://img.freepik.com/foto-gratis/hombre-casco-bicicleta_23-2148139049.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740'
    },
    {
      nombre: 'Niño',
      descripcion: 'Ropa divertida y cómoda para los más pequeños de la casa.',
      imagen: 'https://img.freepik.com/foto-gratis/nino-jugando-juguetes_23-2148139050.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740'
    },
    {
      nombre: 'Accesorios',
      descripcion: 'Completa tu look con nuestros accesorios únicos y a la moda.',
      imagen: 'https://img.freepik.com/foto-gratis/accesorios-moda_23-2148139051.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740'
    }
  ];

}
