import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    rol: new FormControl('Usuario', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    const correo = this.registerForm.get('correo')?.value;
    const nombre = this.registerForm.get('nombre')?.value;
    const nickname = this.registerForm.get('nickname')?.value;
    const rol = this.registerForm.get('rol')?.value;
    const password = this.registerForm.get('password')?.value;

    console.log({ correo, nombre, nickname, rol, password });
    // Authenticate with an API or Google Firebase Auth
  }
}
