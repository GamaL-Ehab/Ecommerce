import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/Authentication/authentication.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  let authService:AuthenticationService = inject(AuthenticationService);
  let router:Router = inject(Router);
  
  if(authService.token() !== null){
    return true;
  }
  router.navigate(['login'])
  return false;
};
