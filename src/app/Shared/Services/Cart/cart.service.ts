import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { CartRes } from '../../Interfaces/res/cart-res';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  getUserCart():Observable<CartRes>{
    return this._HttpClient.get<CartRes>(`${baseUrl}/api/v1/cart`);
  }

  addProductToCart(Pid:string):Observable<CartRes>{
    return this._HttpClient.post<CartRes>(`${baseUrl}/api/v1/cart`, {productId:Pid});
  }

  clearUserCart():Observable<any>{
    return this._HttpClient.delete(`${baseUrl}/api/v1/cart`);
  }

  removeCartItem(Pid:string):Observable<CartRes>{
    return this._HttpClient.delete<CartRes>(`${baseUrl}/api/v1/cart/${Pid}`)
  }

  updateQuantity(Pid:string ,count:string):Observable<CartRes>{
   return this._HttpClient.put<CartRes>(`${baseUrl}/api/v1/cart/${Pid}`,{
      count:count
    })
  }
}
