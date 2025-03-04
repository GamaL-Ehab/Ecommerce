import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../../Shared/Services/Brands/brands.service';
import { brands } from '../../../Shared/Interfaces/res/brands-res';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{

  categories!:brands[];

  constructor(private _BrandsService:BrandsService){}

  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next : res => {
        this.categories = res.data;
      }
      
    })
  }
}
