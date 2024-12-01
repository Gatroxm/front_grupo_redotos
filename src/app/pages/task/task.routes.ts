import { Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UserService } from '../../services/user.service';
const routes: Routes = [
  {
    path: '',

    loadComponent: () => ListTaskComponent,
  },
  {
    path: 'create',
    loadComponent: () => CreateTaskComponent,
  },
];
export default routes;
