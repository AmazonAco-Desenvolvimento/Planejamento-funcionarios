import { Component } from '@angular/core';
import { userInfoMods } from '../user-informations/userInfoIndex';

@Component({
  selector: 'app-extra-page',
  imports: [userInfoMods],
  templateUrl: './extra-page.component.html',
  styleUrl: './extra-page.component.css'
})
export class ExtraPageComponent {

}
