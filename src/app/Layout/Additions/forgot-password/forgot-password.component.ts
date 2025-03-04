import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}

  forgotPass:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email])
  })

  submitEmail(){
    if(this.forgotPass.valid){
      this._AuthenticationService.forgotPass(this.forgotPass.value).subscribe({
        next: res => { 
          this._Router.navigate(['resetCode'])
        }
      })
    }else{
      this.forgotPass.markAllAsTouched();
    }
  }
}
