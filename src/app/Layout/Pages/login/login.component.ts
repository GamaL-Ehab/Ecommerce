import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}


  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9]{8,}$/)])
  })

  submitLogin(){
    if(this.loginForm.valid){
      this._AuthenticationService.login(this.loginForm.value).subscribe({
        next: res => { 
          localStorage.setItem('token', res.token) ; 
          this._AuthenticationService.token.set(localStorage.getItem('token'));
          this._Router.navigate(['home']);
        },
        error: err => {console.log(err);
        }
      })
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
