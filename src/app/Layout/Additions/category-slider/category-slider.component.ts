import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../Shared/Services/Categories/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { category } from '../../../Shared/Interfaces/res/categories-res';

@Component({
  selector: 'app-category-slider',
  imports: [CarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss'
})
export class CategorySliderComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  
  categories!:category[]

  constructor(private _CategoriesService:CategoriesService){}

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: res =>  this.categories = res.data
      
    })
  }
}
