import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../Shared/Services/Cart/cart.service';
import { ProductsService } from '../../../Shared/Services/Products/products.service';
import { WishlistService } from '../../../Shared/Services/Wishlist/wishlist.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../../Shared/Interfaces/res/products-res';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    productsList!:Product[];
  
    constructor(
      private _ProductsService:ProductsService , 
      private _CartService:CartService, 
      private toastr:ToastrService,
      private _WishlistService:WishlistService){}
  
    ngOnInit(): void {
      this._ProductsService.getAllProducts('1').subscribe({
        next: res => { 
          this.productsList = res.data;
        }
      })
    }
  
    changePage(page:string){
      this._ProductsService.getAllProducts(page).subscribe({
        next: res => {
          this.productsList = res.data;
        }
      })
    }
  
    addProductToCart(Pid:string){
      this._CartService.addProductToCart(Pid).subscribe({
        next:res => this.toastr.success('Product Added Successfully To Your Cart')
        
      })
    }
  
    addProductToWishlist(Pid:string){
      this._WishlistService.addProductToWishlist(Pid).subscribe({
        next:res => this.toastr.success('Product Added Successfully To Your WishList')
      })
    }
  }
