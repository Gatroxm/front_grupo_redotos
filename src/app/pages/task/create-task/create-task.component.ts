import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { NgFor } from '@angular/common';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent {
  #userService = inject(UserService);
  #taskService = inject(TaskService);

  user: any = {};

  users: any[] = [];

  registerTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    assignedTo: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.#userService.getUsers().subscribe((resp: any) => {
      if (this.user.rol === 'Administrador') {
        this.users = resp.users;
      } else {
        this.users.push(this.user);
      }
    });
  }

  submit() {
    if (this.registerTaskForm.invalid) {
      return;
    }

    const title = this.registerTaskForm.get('title')?.value;
    const description = this.registerTaskForm.get('description')?.value;
    const status = this.registerTaskForm.get('status')?.value;
    const dueDate = this.registerTaskForm.get('dueDate')?.value;
    const priority = this.registerTaskForm.get('priority')?.value;
    const assignedTo = this.registerTaskForm.get('assignedTo')?.value;

    this.#taskService
      .createTask({ title, description, status, dueDate, priority, assignedTo })
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }
}
