import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("here")
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if(authService.isAuthenticated()){
    console.log("User is authenticated")
    return true;
  } else {
    console.log("User is not authenticated")
    return router.navigate(['login']);
  }
};