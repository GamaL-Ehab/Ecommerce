import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private _AuthenticationService:AuthenticationService,private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{5,20}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, this.rePassMatch)

  rePassMatch(form:AbstractControl){
    if(form.get('password')?.value == form.get('rePassword')?.value){
      return null;
    }else{
      form.get('rePassword')?.setErrors({mismatch:true})
      return {mismatch:true};
    }
  }

  submitRegister(){
    if(this.registerForm.valid){
      this._AuthenticationService.register(this.registerForm.value).subscribe({
        next: res => {
          localStorage.setItem('token', res.token) ; 
          this._AuthenticationService.token.set(localStorage.getItem('token'));
          this._Router.navigate(['home']);
        },
      })
    }else{
      this.registerForm.markAllAsTouched();
    }
    
  }

}
