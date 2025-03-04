import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { CategoriesRes } from '../../Interfaces/res/categories-res';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<CategoriesRes>{
    return this._HttpClient.get<CategoriesRes>(`${baseUrl}/api/v1/categories`);
  }

  getCategorySubCategories(cId:string):Observable<CategoriesRes>{
    return this._HttpClient.get<CategoriesRes>(`${baseUrl}/api/v1/categories/${cId}/subcategories`);
  }
}
