import { Component } from '@angular/core';
import { StoredDataService } from '../../services/stored-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers-page',
  imports: [CommonModule],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.css',
})
export class CustomersPageComponent {
  items = [0, 1, 2, 3, 4, 5];
  toggleAllItems(allinp: HTMLInputElement) {
    allinp.checked = allinp.checked;
    console.log(allinp.checked)
    if (allinp.checked === true) {
      for (let i of this.items) {
        let elementX = document.getElementById(`${i}`) as HTMLInputElement;
        elementX.checked = true;
        console.log(elementX.checked);
      }
    } else {
      for (let i of this.items) {
        let elementX = document.getElementById(`${i}`) as HTMLInputElement;
        elementX.checked = false;
        console.log(elementX.checked);
      }
    }
  }
}
