import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
