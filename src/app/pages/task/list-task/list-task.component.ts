import { NgFor } from '@angular/common';
import { TaskService } from './../../../services/task.service';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [NgFor, CardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './list-task.component.html',
})
export class ListTaskComponent implements OnInit {
  #TaskService = inject(TaskService);

  taskList: any[] = [];
  searchForm = new FormGroup({
    clase_busqueda: new FormControl('', [Validators.required]),
    texto: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.#TaskService.getTasks().subscribe((resp: any) => {
      this.taskList = resp;
      console.log(this.taskList);
    });
  }

  submit() {
    if (this.searchForm.invalid) {
      return;
    }
    if (this.searchForm.value.clase_busqueda === 'estado') {
      this.taskList = this.taskList.filter(
        (item) => item.status === this.searchForm.value.texto
      );
    }
    if (this.searchForm.value.clase_busqueda === 'prioridad') {
      this.taskList = this.taskList.filter(
        (item) => item.priority === this.searchForm.value.texto
      );
    }
  }
}
