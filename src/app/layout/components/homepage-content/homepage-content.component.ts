import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  imports: [
     CarruselComponent,
     CardsComponent
  ],
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
