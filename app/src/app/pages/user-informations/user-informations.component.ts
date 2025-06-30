import { Component } from '@angular/core';
import { StoredDataService } from '../../services/stored-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { customer } from '../../Interfaces/general-dtos';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-user-informations',
  imports: [
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './user-informations.component.html',
  styleUrl: './user-informations.component.css',
  providers: [provideNativeDateAdapter()],
})
export class UserInformationsComponent {
  constructor(public stored: StoredDataService) {}
  items: customer[] = this.stored.sectorUsersSelected;

  backPage() {
    this.stored.sectorUsersSelected = [];
  }
}
