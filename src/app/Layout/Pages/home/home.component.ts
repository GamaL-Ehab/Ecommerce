import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Shared/Services/Products/products.service';
import { Product } from '../../../Shared/Interfaces/res/products-res';
import { RouterLink } from '@angular/router';
import { HomeSliderComponent } from '../../Additions/home-slider/home-slider.component';
import { CategorySliderComponent } from '../../Additions/category-slider/category-slider.component';
import { CartService } from '../../../Shared/Services/Cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../Shared/Services/Wishlist/wishlist.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HomeSliderComponent, CategorySliderComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}
