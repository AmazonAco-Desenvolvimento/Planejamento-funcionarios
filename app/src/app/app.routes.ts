import { Routes } from '@angular/router';
import { UserInformationsComponent } from './pages/user-informations/user-informations.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';

export const routes: Routes = [
  {path: '', title: 'test', component: CustomersPageComponent},
  {
    path: 'userinformation',
    title: 'userInfo',
    component: UserInformationsComponent,
  },
];
