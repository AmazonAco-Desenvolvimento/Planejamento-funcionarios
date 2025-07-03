import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

export const userInfoMods = [
  CommonModule,
  RouterLink,
  MatFormField,
  MatInputModule,
  MatDatepickerModule,
  FormsModule,
];
