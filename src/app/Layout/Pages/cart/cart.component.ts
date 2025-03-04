import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Shared/Services/Cart/cart.service';
import { Products } from '../../../Shared/Interfaces/res/cart-res';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartItems!:Products[];
  totalPrice!:number;
  cartId!:string;

  constructor(private _CartService:CartService, private toastr:ToastrService, private _Router:Router){}

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: res =>{ 
        this.cartItems = res.data.products;
        this.totalPrice = res.data.totalCartPrice;
        this.cartId = res.cartId;
        console.log(this.cartId);
        
      }
    })
  }

  clearCart(){
    if(this.totalPrice !== 0){
      this._CartService.clearUserCart().subscribe({
        next: res => {
          this.cartItems= [] ; 
          this.totalPrice = 0
        }
      });
    }
  }

  removeCartItem(Pid:string){
    this._CartService.removeCartItem(Pid).subscribe({
      next: res => {
        this.toastr.success('Item Removed Succesfully'); 
        this.cartItems = res.data.products;
        this.totalPrice = res.data.totalCartPrice;
      }
    })
  }

  updateQuantity(Pid:string ,count:number){
    this._CartService.updateQuantity(Pid , count.toString()).subscribe({
      next: res => {
        this.cartItems = res.data.products;
        this.totalPrice = res.data.totalCartPrice;
      }
    })
  }

  checkOut(){
    if(this.totalPrice !== 0){
      localStorage.setItem('cartId', this.cartId);
      this._Router.navigate(['checkout'])
    }
  }
}
