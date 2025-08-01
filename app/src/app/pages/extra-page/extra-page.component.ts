import { Component } from '@angular/core';
import { userInfoMods } from '../user-informations/userInfoIndex';
import { ExtraTableComponent } from '../../data-components/extra-table/extra-table.component';

@Component({
  selector: 'app-extra-page',
  imports: [userInfoMods, ExtraTableComponent],
  templateUrl: './extra-page.component.html',
  styleUrl: './extra-page.component.css'
})
export class ExtraPageComponent {

}
