import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userInfoMods } from '../user-informations/userInfoIndex';

@Component({
  selector: 'app-main-page',
  imports: [userInfoMods],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
