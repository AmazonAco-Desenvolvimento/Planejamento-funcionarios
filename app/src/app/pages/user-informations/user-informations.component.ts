import { Component, OnInit } from '@angular/core';
import { StoredDataService } from '../../services/stored-data.service';
import {
  customer,
  customer_extra_details,
} from '../../Interfaces/general-dtos';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { userInfoMods } from './userInfoIndex';

@Component({
  selector: 'app-user-informations',
  imports: [...userInfoMods],
  templateUrl: './user-informations.component.html',
  styleUrl: './user-informations.component.css',
  providers: [
    provideNativeDateAdapter(),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB',
    },
  ],
})
export class UserInformationsComponent implements OnInit {
  constructor(public stored: StoredDataService) {}
  items: customer[] = this.stored.searchedUsers;
  customerDetails: customer_extra_details[] = this.stored.userConfirmDetails;

  ngOnInit(): void {
    for (let item of this.items) {
      this.stored.userConfirmDetails.push({
        nome_funcionario: item.name,
        id: item.id,
        setor: item.sector,
        desc: item.desc,
      });
    }
    this.customerDetails = this.stored.userConfirmDetails;
    console.log(this.customerDetails);
  }

  updateDate(items: customer_extra_details[]) {
    let workDate = (document.getElementById('workDate') as HTMLInputElement)
      .value;
    for (let item of items) {
      item.data = workDate;
      console.log(item);
    }
  }

  backPage() {
    this.items = [];
    this.stored.userConfirmDetails = [];
  }

  // ! Function used just to prevent boiler code for the toggle function below
  toggleAllCustomerSupportFun(
    item: customer_extra_details,
    boolValue: boolean
  ) {
    let toggleAllUniControll = document.getElementById(
      `toggleAllForm${item.id}`
    ) as HTMLInputElement;

    let rotaEl = document.getElementById(`route${item.id}`) as HTMLInputElement;
    let ceiaEL = document.getElementById(`ceia${item.id}`) as HTMLInputElement;
    let almEl = document.getElementById(`alm${item.id}`) as HTMLInputElement;
    let lancDobEl = document.getElementById(
      `lancDob${item.id}`
    ) as HTMLInputElement;
    let lanc2El = document.getElementById(
      `2lanc${item.id}`
    ) as HTMLInputElement;
    let desjEl = document.getElementById(`desj${item.id}`) as HTMLInputElement;
    let lanc1El = document.getElementById(
      `1lanc${item.id}`
    ) as HTMLInputElement;
    let lancEsp = document.getElementById(
      `lancesp${item.id}`
    ) as HTMLInputElement;
    let jan = document.getElementById(`jan${item.id}`) as HTMLInputElement;
    if (boolValue) {
      //checkbox
      toggleAllUniControll.checked = true;
      rotaEl.checked = true;
      almEl.checked = true;
      ceiaEL.checked = true;
      lancDobEl.checked = true;
      lanc2El.checked = true;
      desjEl.checked = true;
      lanc1El.checked = true;
      lancEsp.checked = true;
      jan.checked = true;
      //data modification
      item.rota = true;
      item.desj = true;
      item.almoco = true;
      item.ceia = true;
      item.lancDob = true;
      item.lanc2 = true;
      item.lanc1 = true;
      item.lancEsp = true;
      item.jan = true;
    } else if (!boolValue) {
      //checkbox
      toggleAllUniControll.checked = false;
      rotaEl.checked = false;
      item.desj = false;
      almEl.checked = false;
      ceiaEL.checked = false;
      lancDobEl.checked = false;
      lanc2El.checked = false;
      desjEl.checked = false;
      lanc1El.checked = false;
      lancEsp.checked = false;
      jan.checked = false;
      item.rota = false;
      //Data modification
      item.rota = false;
      item.almoco = false;
      item.ceia = false;
      item.lancDob = false;
      item.lanc2 = false;
      item.lanc1 = false;
      item.lancEsp = false;
      item.jan = false;
    }
  }

  toggleAllCustomers(customers: customer_extra_details[]) {
    let toggleAll = document.getElementById(`allData`) as HTMLInputElement;
    console.log(toggleAll.checked);
    if (toggleAll.checked) {
      for (let item of customers) {
        this.toggleAllCustomerSupportFun(item, toggleAll.checked);
      }
      console.log(this.customerDetails);
    } else if (!toggleAll.checked) {
      for (let item of customers) {
        this.toggleAllCustomerSupportFun(item, toggleAll.checked);
      }
      console.log(this.customerDetails);
    }
  }
  toggleAllUniqueCustomer(item: customer_extra_details) {
    let toggleAlluCustomer = document.getElementById(
      `toggleAllForm${item.id}`
    ) as HTMLInputElement;
    if (toggleAlluCustomer.checked) {
      this.toggleAllCustomerSupportFun(item, toggleAlluCustomer.checked);
      console.log(this.customerDetails);
    } else if (!toggleAlluCustomer.checked) {
      this.toggleAllCustomerSupportFun(item, toggleAlluCustomer.checked);
      console.log(this.customerDetails);
    }
  }

  //! Toggle unique checkbox function needs to be multiple functions for each checkbox element(Just getting the id of the item to make it more dinamic)
  // ! Functions below here
}
