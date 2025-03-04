import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { OrdersService } from '../../../Shared/Services/Orders/orders.service';
import { allUserOrders, UserOrders } from '../../../Shared/Interfaces/res/user-orders';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit{

  userId!:string;
  orders!:any;

  constructor(private _AuthenticationService:AuthenticationService, private _OrdersService:OrdersService){}

  ngOnInit(): void {
    this._AuthenticationService.verifyToken().subscribe({
      next: res => {
        this.userId = res.decoded.id;
        this.getUserOrders();
        console.log(res);
      }
    })
  }

  getUserOrders(){
    this._OrdersService.getUserOrders(this.userId).subscribe({
      next: res => {
        this.orders = res;
        console.log(res);
      }
    })
  }
}
