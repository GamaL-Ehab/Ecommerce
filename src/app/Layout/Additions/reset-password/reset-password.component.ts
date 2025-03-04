import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  
  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}


  resetPass:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{8,}$/)])
  })

  submitLogin(){
    if(this.resetPass.valid){
      this._AuthenticationService.resetPassword(this.resetPass.value).subscribe({
        next: res => { 
          localStorage.setItem('token', res.token) ; 
          this._AuthenticationService.token.set(localStorage.getItem('token'));
          this._Router.navigate(['home']);
        },
        error: err => {console.log(err);
        }
      })
    }else{
      this.resetPass.markAllAsTouched();
    }
  }
}
