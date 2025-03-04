import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../Shared/Services/Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-code',
  imports: [ReactiveFormsModule],
  templateUrl: './reset-code.component.html',
  styleUrl: './reset-code.component.scss'
})
export class ResetCodeComponent {
  
 constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}

  resetCode:FormGroup = new FormGroup({
    resetCode:new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,6}$/)])
  })

  submitCode(){
    if(this.resetCode.valid){
      this._AuthenticationService.resetCode(this.resetCode.value).subscribe({
        next: res => { 
          this._Router.navigate(['resetPass'])
        }
      })
    }else{
      this.resetCode.markAllAsTouched();
    }
  }
}
