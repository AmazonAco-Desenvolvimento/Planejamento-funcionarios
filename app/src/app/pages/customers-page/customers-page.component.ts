import { Component } from '@angular/core';
import { StoredDataService } from '../../services/stored-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { customer } from '../../Interfaces/general-dtos';
import { ProtheusService } from '../../services/api/protheus.service';

@Component({
  selector: 'app-customers-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './customers-page.component.html',
  styleUrl: './customers-page.component.css',
})
export class CustomersPageComponent {
  constructor(public stored: StoredDataService, public api: ProtheusService) {}
  items: any[] = this.stored.searchedUsers;
  apiLoading: boolean = false;

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

  async getcolabs(cc: string) {
    this.apiLoading = true;
    const searchBtn = document.getElementById('searchBtn');
    searchBtn?.setAttribute('disabled', '');

    await this.api.getCC(cc).subscribe({
      next: (response) => {
        console.log(response);
        this.stored.searchedUsers = response;
        for (let sector of this.stored.sectors) {
          for (let user of this.stored.searchedUsers) {
            if (user.sector == sector.ccCode) {
              user.sector = sector.ccDesc;
            }
          }
        }
        this.items = this.stored.searchedUsers;
        this.apiLoading = false;
        searchBtn?.removeAttribute('disabled');
      },
    });
  }
}
