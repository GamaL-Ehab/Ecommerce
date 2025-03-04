import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/Authentication/authentication.service';

export const backToLoginGuard: CanActivateFn = (route, state) => {
    let authService:AuthenticationService = inject(AuthenticationService);
    let router:Router = inject(Router);
    
    if(authService.token() !== null){
      router.navigate(['home'])
      return false;
    }
    return true;
};
