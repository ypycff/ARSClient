import { Component, OnInit } from '@angular/core';
import productItems from 'src/app/data/products';
import { IProduct } from 'src/app/data/api.service';
import { carouselImages, carouselThumbs, ICarouselImage } from 'src/app/data/carousels';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent implements OnInit {
  detailImages: ICarouselImage[] = carouselImages;
  detailThumbs: ICarouselImage[] = carouselThumbs;
  constructor() { }

  data: IProduct[] = productItems.slice(0, 6);
  
  ngOnInit() {
  }

}
