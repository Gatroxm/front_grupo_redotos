import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(AuthService);
  const router = inject(Router);
  const user = isAuthenticated.isAuthenticated();
  if (user) {
    return true;
  } else {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.navigate(['/login']);
    return false;
  }
};
