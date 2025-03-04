import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../Shared/Services/Wishlist/wishlist.service';
import { product } from '../../../Shared/Interfaces/res/wish-list-res';
import { CartService } from '../../../Shared/Services/Cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{

  wishProducts!:product[];

  constructor(private _WishlistService:WishlistService, private _CartService:CartService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getUserWishlist();
  }

  getUserWishlist(){
    this._WishlistService.getUserWishlist().subscribe({
      next: res => {
        this.wishProducts = res.data;
      }
    })
  }

  removeProduct(Pid:string){
    this._WishlistService.removeFromWishlist(Pid).subscribe({
      next: res => {
        this.getUserWishlist();
      }
    })
  }

  addToCart(Pid:string){
    this._CartService.addProductToCart(Pid).subscribe({
      next: res => {
        this.toastr.success('Product Added Successfully To Your Cart')
      }
    })
  }
}
