import { DatePipe, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, NgIf],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() descrpcion: string = '';
  @Input() date: string = '';
  @Input() priority: string = '';
  @Input() status: string = '';
  @Input() _id: string = '';
  @Input() assignedTo: any = {};

  #taskService = inject(TaskService);

  edit = false;
  registerTaskForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.registerTaskForm.get('status')?.setValue(this.status);
  }

  statusChange(event: any) {
    this.edit = true;
    this.#taskService
      .updateTask({ status: event.target.value, id: this._id })
      .subscribe((resp: any) => {
        this.edit = false;
        console.log(resp);
      });
  }
  deleteTask() {
    this.#taskService.deleteTask(this._id).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
