import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { ProductsComponent } from './Layout/Pages/products/products.component';
import { WishlistComponent } from './Layout/Pages/wishlist/wishlist.component';
import { CartComponent } from './Layout/Pages/cart/cart.component';
import { LoginComponent } from './Layout/Pages/login/login.component';
import { RegisterComponent } from './Layout/Pages/register/register.component';
import { ProductDetailsComponent } from './Layout/Additions/product-details/product-details.component';
import { loginGuard } from './Shared/Guards/login/login.guard';
import { backToLoginGuard } from './Shared/Guards/backToLogin/back-to-login.guard';
import { SettingsComponent } from './Layout/Pages/settings/settings.component';


export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:'home', component:HomeComponent, title:'Fresh Cart'},
    {path:'products', component:ProductsComponent, title:'Products'},
    {path:'categories', loadComponent:()=> import('./Layout/Pages/categories/categories.component').then((c)=>c.CategoriesComponent), title:'Categories'},
    {path:'brands', loadComponent: ()=> import('./Layout/Pages/brands/brands.component').then((c)=>c.BrandsComponent), title:'Brands'},
    {path:'wishlist', component:WishlistComponent, title:'Wish-List', canActivate:[loginGuard]},
    {path:'cart', component:CartComponent, title:'Cart', canActivate:[loginGuard]},
    {path:'productDetails/:Pid', component:ProductDetailsComponent, title:'Product Details'},
    {path:'settings', component:SettingsComponent, title:'Settings', canActivate:[loginGuard]},
    {path:'checkout', loadComponent: ()=> import('./Layout/Additions/check-out/check-out.component').then((c)=>c.CheckOutComponent), title:'Check Out', canActivate:[loginGuard]},
    {path:'allorders', loadComponent: ()=> import('./Layout/Additions/all-orders/all-orders.component').then((c)=>c.AllOrdersComponent), title:'All Orders', canActivate:[loginGuard]},
    {path:'changepass', loadComponent: ()=> import('./Layout/Additions/change-password/change-password.component').then((c)=>c.ChangePasswordComponent), title:'Change Password', canActivate:[loginGuard]},
    {path:'updatedata', loadComponent: ()=> import('./Layout/Additions/update-user-data/update-user-data.component').then((c)=>c.UpdateUserDataComponent), title:'All Orders', canActivate:[loginGuard]},

    {path:'login', component:LoginComponent, title:'Login', canActivate:[backToLoginGuard]},
    {path:'register', component:RegisterComponent, title:'Register', canActivate:[backToLoginGuard]},
    {path:'forgotPass', loadComponent: ()=> import('./Layout/Additions/forgot-password/forgot-password.component').then((c)=>c.ForgotPasswordComponent), title:'Forgot Password'},
    {path:'resetCode', loadComponent: ()=> import('./Layout/Additions/reset-code/reset-code.component').then((c)=>c.ResetCodeComponent), title:'Reset Code'},
    {path:'resetPass', loadComponent: ()=> import('./Layout/Additions/reset-password/reset-password.component').then((c)=>c.ResetPasswordComponent), title:'Reset Password', canActivate:[backToLoginGuard]},
];
