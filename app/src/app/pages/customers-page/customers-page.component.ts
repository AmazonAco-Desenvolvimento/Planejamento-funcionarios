import { Component } from '@angular/core';
import { StoredDataService } from '../../services/stored-data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { customer } from '../../Interfaces/general-dtos';

@Component({
  selector: 'app-customers-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.css',
})
export class CustomersPageComponent {
  constructor(public stored: StoredDataService) {}
  items: any[] = this.stored.searchedUsers;
  
  toggleAllItems(allinp: HTMLInputElement) {
    allinp.checked = allinp.checked;
    console.log(allinp.checked);
    if (allinp.checked === true) {
      for (let i of this.items) {
        let elementX = document.getElementById(`${i.id}`) as HTMLInputElement;
        elementX.checked = true;
        this.stored.sectorUsersSelected.push(i);
      }
    } else {
      for (let i of this.items) {
        let elementX = document.getElementById(`${i.id}`) as HTMLInputElement;
        elementX.checked = false;
        this.stored.sectorUsersSelected = [];
        console.log(this.stored.sectorUsersSelected);
      }
    }
  }

  dataSelectedToggle(itemID: string, data: customer) {
    let inpEL = document.getElementById(itemID) as HTMLInputElement;
    if (inpEL.checked) {
      this.stored.sectorUsersSelected.push(data);
      console.log(this.stored.sectorUsersSelected);
    } else if (!inpEL.checked) {
      let toggleAllbtn = document.getElementById(
        'allItems'
      ) as HTMLInputElement;
      toggleAllbtn.checked = false;
      let index = this.stored.sectorUsersSelected.findIndex(
        (el: customer) => el.id === itemID
      );
      this.stored.sectorUsersSelected.splice(index, 1);
      console.log(this.stored.sectorUsersSelected);
    }
  }
}
