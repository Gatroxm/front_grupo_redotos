import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ToastComponent, NgIf],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  #logInService = inject(AuthService);
  mmessage: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.#logInService
      .login({ correo: username, password: password })
      .subscribe((resp) => {
        if (resp) {
          this.mmessage = 'Bienvenido ' + username;
        }
      });
    console.log({ username, password });
    // Authenticate with an API or Google Firebase Auth
  }
}
