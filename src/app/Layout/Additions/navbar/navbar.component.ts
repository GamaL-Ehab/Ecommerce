import { Component, effect, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../../../Shared/Services/darkmode/darkmode.service';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { CartService } from '../../../Shared/Services/Cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  isLogin:boolean = false;
  userName!:string;

  constructor(private darkModeService: DarkModeService, 
    private _AuthenticationService: AuthenticationService, 
    private _Router:Router,
    private _CartService:CartService
  ) {
    effect(()=>{
      if(this._AuthenticationService.token() != null){
        _AuthenticationService.verifyToken().subscribe({
          next : res => {
            this.userName = res.decoded.name;
            this.isLogin = true;
          }, 
          error : err => {_Router.navigate(['login'])}
        })
        
      }else{
        this.isLogin = false;
    }
    })
  }

  ngOnInit(): void {

  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
