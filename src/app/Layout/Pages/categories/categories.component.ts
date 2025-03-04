import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../Shared/Services/Categories/categories.service';
import { category } from '../../../Shared/Interfaces/res/categories-res';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categoriesList!:category[];
  subList!:category[];

  constructor(private _CategoriesService:CategoriesService){}

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: res => this.categoriesList = res.data
      
    })
  }

  getSubCategories(cId:string){
    this._CategoriesService.getCategorySubCategories(cId).subscribe({
      next: res => {console.log(res) ; this.subList = res.data}
      
    })
  }

}
