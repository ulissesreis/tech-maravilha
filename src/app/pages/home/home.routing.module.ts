import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
  },
];
