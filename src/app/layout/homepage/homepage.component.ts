import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { CardsComponent } from '../components/cards/cards.component';
import { RouterModule } from '@angular/router';
interface Image {
    url: string;
    alt: string;
}

@Component({
    selector: 'app-homepage',
    imports: [NavbarComponent,
        CarouselModule,
        FooterComponent,
        ButtonModule,
        RouterModule],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    servicio: any;

    constructor() { }

    images: Image[] = [];
    responsiveOptions: any[] | undefined;

    ngOnInit() {


        this.images = [
            { url: '../src/assets/images/5974.jpg', alt: 'Imagen 1' },
            { url: '', alt: 'Imagen 2' },
            { url: 'ruta/a/imagen3.jpg', alt: 'Imagen 3' },
            { url: 'ruta/a/imagen4.jpg', alt: 'Imagen 4' },
            { url: 'ruta/a/imagen5.jpg', alt: 'Imagen 5' }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

}
