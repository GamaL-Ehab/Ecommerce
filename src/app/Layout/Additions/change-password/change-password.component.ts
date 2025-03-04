import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
 constructor(private _AuthenticationService:AuthenticationService,private _Router:Router, private toastr:ToastrService){}

  changePassForm:FormGroup = new FormGroup({
    currentPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,20}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,20}$/)]),
    rePassword: new FormControl(null, [Validators.required])
  }, this.rePassMatch)

  rePassMatch(form:AbstractControl){
    if(form.get('password')?.value == form.get('rePassword')?.value){
      return null;
    }else{
      form.get('rePassword')?.setErrors({mismatch:true})
      return {mismatch:true};
    }
  }

  changePass(){
    if(this.changePassForm.valid){
      this._AuthenticationService.changePassword(this.changePassForm.value).subscribe({
        next: res => {
          this.toastr.success('Password Changed Successfully')
          localStorage.setItem('token', res.token) ; 
          this._AuthenticationService.token.set(localStorage.getItem('token'));
          this._Router.navigate(['settings']);
        },
      })
    }else{
      this.changePassForm.markAllAsTouched();
    }
    
  }
}
