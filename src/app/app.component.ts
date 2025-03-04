import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Layout/Additions/navbar/navbar.component';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-Commerce';
}
