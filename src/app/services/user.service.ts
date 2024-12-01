import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #apiUrl = environment.apiUrl;
  #urlBase = this.#apiUrl + '/users';
  #token = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    console.log(this.#token);
    const headers = new HttpHeaders({
      Authorization: `${this.#token}`,
    });
    return this.http.get(`${this.#urlBase}/users`, { headers });
  }
}
