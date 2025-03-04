import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../Shared/Services/Products/products.service';
import { Product } from '../../../Shared/Interfaces/res/products-res';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../Shared/Services/Cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../Shared/Services/Wishlist/wishlist.service';

@Component({
  selector: 'app-product-details',
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

  Pid!:string;
  product!:Product;
  pImages!:string[];

  constructor(private _ActivatedRoute:ActivatedRoute, 
    private _ProductsService:ProductsService, 
    private _CartService:CartService, 
    private toastr:ToastrService,
    private _WishlistService:WishlistService
  ){}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: res => {console.log(res['Pid']); this.Pid = res['Pid']}
    })

    this._ProductsService.getSpecificProduct(this.Pid).subscribe({
      next: res=> {console.log(res.data); this.product = res.data; this.pImages = res.data.images}
      
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
