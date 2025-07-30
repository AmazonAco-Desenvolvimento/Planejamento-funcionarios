import { Routes } from '@angular/router';
import { UserInformationsComponent } from './pages/user-informations/user-informations.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ExtraPageComponent } from './pages/extra-page/extra-page.component';
import { RoutePageComponent } from './pages/route-page/route-page.component';

export const routes: Routes = [
  { path: 'login', title: 'login', component: LoginComponent },
  { path: '', title: 'main', component: MainPageComponent },
  { path: 'extracreation', title: 'extra', component: CustomersPageComponent },
  {
    path: 'extrainfo',
    title: 'extra',
    component: UserInformationsComponent,
  },
  { path: 'extra', title: 'extra', component: ExtraPageComponent },
  { path: 'route', title: 'rota', component: RoutePageComponent },
];
