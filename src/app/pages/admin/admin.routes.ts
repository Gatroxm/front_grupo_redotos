import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    providers: [],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'task',
        loadChildren: () =>
          import('./../task/task.routes').then((m) => m.default),
      },
    ],
  },
];

export default routes;
