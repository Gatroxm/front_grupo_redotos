import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #apiUrl = environment.apiUrl;
  #token: string | null = null;
  role!: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(login: any) {
    return this.http.post(`${this.#apiUrl}/users/login`, login).pipe(
      tap((data) => {
        this.savedLocalStorage(data);
      })
    );
  }
  savedLocalStorage(data: any) {
    this.#token = data.token;
    this.role = data.user.rol;
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    this.router.navigate(['']);
  }

  getToken() {
    return this.#token || localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.#token || localStorage.getItem('token');
  }
}
