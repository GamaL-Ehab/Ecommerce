import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{

  userName!:string;

  constructor(private _AuthenticationService:AuthenticationService,private _Router:Router){}

  ngOnInit(): void {
    this._AuthenticationService.verifyToken().subscribe({
      next: res => {this.userName = res.decoded.name},
      error: err => {this._Router.navigate(['login'])}
    })
  }

  logOut(){
    localStorage.removeItem('token');
    this._AuthenticationService.token.set(null)
  }
}
