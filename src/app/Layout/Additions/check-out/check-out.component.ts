import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdersService } from '../../../Shared/Services/Orders/orders.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

  constructor(
    private _OrdersService:OrdersService, 
    private toastr:ToastrService,
    private _Router:Router

  ){}

  checkOutForm:FormGroup = new FormGroup({
    city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    details: new FormControl(null, [Validators.required, Validators.minLength(10)])
  })

  cashOrder(){
    if(this.checkOutForm.valid){
      this._OrdersService.cashOrder(this.checkOutForm.value, localStorage.getItem('cartId')!).subscribe({
        next: res => {
          this.toastr.success('Order Placed Successfully.');
          this._Router.navigate(['allorders']);
        }
      })
    }else{
      this.checkOutForm.markAllAsTouched();
    }
  }

  onlineOrder(){
    if(this.checkOutForm.valid){
      this._OrdersService.onlinePaidOrder(this.checkOutForm.value, localStorage.getItem('cartId')!).subscribe({
        next: res => {
          open(res.session.url, '_self')
        }
      })
    }else{
      this.checkOutForm.markAllAsTouched();
    }
  }
}
