import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../../Environments/baseUrl';
import { Observable } from 'rxjs';
import { cardCheckOut, CheckOutRes } from '../../Interfaces/res/check-out-res';
import { UserOrders } from '../../Interfaces/res/user-orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }

  cashOrder(address:object, cartId:string):Observable<CheckOutRes>{
    return this._HttpClient.post<CheckOutRes>(`${baseUrl}/api/v1/orders/${cartId}`, 
      {
      shippingAddress: address
      })
  }

  onlinePaidOrder(address:object, cartId:string):Observable<cardCheckOut>{
    return this._HttpClient.post<cardCheckOut>(`${baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, 
      {
      shippingAddress: address
      })
  }

  getUserOrders(userId:string):Observable<UserOrders>{
   return this._HttpClient.get<UserOrders>(`${baseUrl}/api/v1/orders/user/${userId}`);
  }
}
