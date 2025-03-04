import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";
import { spinnerInterceptor } from './Shared/interceptors/spinner/spinner.interceptor';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './Shared/interceptors/error/error.interceptor';
import { headersInterceptor } from './Shared/interceptors/headers/headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([spinnerInterceptor, errorInterceptor, headersInterceptor])),
    importProvidersFrom(NgxSpinnerModule, RouterModule, BrowserAnimationsModule),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
};
