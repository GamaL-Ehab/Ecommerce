import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { Product, ProductsRes } from '../../Interfaces/res/products-res';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts(page:string):Observable<ProductsRes>{
    return this._HttpClient.get<ProductsRes>(`${baseUrl}/api/v1/products?page=${page}`)
  }

  getSpecificProduct(productId:string):Observable<{data:Product}>{
    return this._HttpClient.get<{data:Product}>(`${baseUrl}/api/v1/products/${productId}`)
  }
}
