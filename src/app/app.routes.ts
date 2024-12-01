import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/admin/admin.routes').then((m) => m.default),
  },
  {
    path: 'login',
    loadComponent: () => LoginComponent,
  },
  {
    path: 'register',
    loadComponent: () => RegisterComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
