import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { WishListRes } from '../../Interfaces/res/wish-list-res';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  getUserWishlist():Observable<WishListRes>{
    return this._HttpClient.get<WishListRes>(`${baseUrl}/api/v1/wishlist`);
  }

  addProductToWishlist(Pid:string):Observable<WishListRes>{
    return this._HttpClient.post<WishListRes>(`${baseUrl}/api/v1/wishlist`, {
      productId:Pid
    });
  }

  removeFromWishlist(Pid:string):Observable<WishListRes>{
    return this._HttpClient.delete<WishListRes>(`${baseUrl}/api/v1/wishlist/${Pid}`);
  }
}
