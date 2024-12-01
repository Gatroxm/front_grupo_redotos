import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  #apiUrl = environment.apiUrl;
  #urlBase = this.#apiUrl + '/tasks';
  #token = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {}

  getTasks() {
    const headers = new HttpHeaders({
      Authorization: `${this.#token}`,
    });
    return this.http.get(`${this.#urlBase}`, { headers });
  }

  createTask(task: any) {
    const headers = new HttpHeaders({
      Authorization: `${this.#token}`,
    });
    return this.http.post(`${this.#urlBase}`, task, { headers });
  }

  updateTask(task: any) {
    const headers = new HttpHeaders({
      Authorization: `${this.#token}`,
    });
    console.log(task);
    return this.http.put(`${this.#urlBase}/${task.id}`, task, {
      headers,
    });
  }

  deleteTask(id: string) {
    const headers = new HttpHeaders({
      Authorization: `${this.#token}`,
    });
    return this.http.delete(`${this.#urlBase}/${id}`);
  }
}
