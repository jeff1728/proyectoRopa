import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  
})
export class CarruselComponent implements OnInit, OnDestroy {

  overlayText = 'Bienvenido Fashion Store, ofertamos prendas para hombres y mujeres con estilo y diseño modernos.'


   images: string[] = [
  'https://img.freepik.com/foto-gratis/mujer-joven-sombrero-negro-gafas-sol-aislado-sobre-fondo-blanco_231208-2055.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740',
  'https://img.freepik.com/foto-gratis/dos-jovenes-hermosas-rubias-sonrientes-mujeres-hipster-ropa-moda-verano-mujeres-despreocupadas-sexy-posando-junto-pared-azul-gafas-sol-modelos-positivos-volviendose-locos_158538-7634.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740',
  'https://img.freepik.com/foto-gratis/hombre-casco-bicicleta_23-2148139049.jpg?uid=R179494143&ga=GA1.1.528863901.1747024996&semt=ais_hybrid&w=740',
];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    if (this.images.length > 0) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000); // Cambia la imagen cada 5 segundos
  }
  clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
   next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  goTo(index: number): void {
    this.currentIndex = index;
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  
}
