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
import { ExcellSheetService } from '../../services/excell-sheet.service';

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
  constructor(
    public stored: StoredDataService,
    public sheet: ExcellSheetService
  ) {}
  items: customer[] = this.stored.sectorUsersSelected;
  customerDetails: customer_extra_details[] = this.stored.userConfirmDetails;

  ngOnInit(): void {
    for (let item of this.items) {
      this.stored.userConfirmDetails.push({
        nome_funcionario: item.name,
        id: item.id,
        setor: item.sector,
        desc: item.desc,
        empresa: item.empresa,
      });
    }
    this.customerDetails = this.stored.userConfirmDetails;
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
    this.stored.sectorUsersSelected = [];
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

  toggleRota(item: customer_extra_details) {
    let routeCheckbox = document.getElementById(
      `route${item.id}`
    ) as HTMLInputElement;
    if (routeCheckbox.checked) {
      routeCheckbox.checked = true;
      item.rota = true;
      console.log(this.customerDetails);
    } else if (!routeCheckbox.checked) {
      routeCheckbox.checked = false;
      item.rota = false;
      console.log(this.customerDetails);
    }
  }

  toggleCeia(item: customer_extra_details) {
    let ceiaCheckbox = document.getElementById(
      `ceia${item.id}`
    ) as HTMLInputElement;
    if (ceiaCheckbox.checked) {
      ceiaCheckbox.checked = true;
      item.ceia = true;
      console.log(this.customerDetails);
    } else if (!ceiaCheckbox.checked) {
      ceiaCheckbox.checked = false;
      item.ceia = false;
      console.log(this.customerDetails);
    }
  }

  toggleDesj(item: customer_extra_details) {
    let desjCheckbox = document.getElementById(
      `desj${item.id}`
    ) as HTMLInputElement;
    if (desjCheckbox.checked) {
      desjCheckbox.checked = true;
      item.desj = true;
      console.log(this.customerDetails);
    } else if (!desjCheckbox.checked) {
      desjCheckbox.checked = false;
      item.desj = false;
      console.log(this.customerDetails);
    }
  }

  toggleAlm(item: customer_extra_details) {
    let almCheckbox = document.getElementById(
      `alm${item.id}`
    ) as HTMLInputElement;
    if (almCheckbox.checked) {
      almCheckbox.checked = true;
      item.almoco = true;
      console.log(this.customerDetails);
    } else if (!almCheckbox.checked) {
      almCheckbox.checked = false;
      item.almoco = false;
      console.log(this.customerDetails);
    }
  }

  toggle1lanc(item: customer_extra_details) {
    let lanc1Checkbox = document.getElementById(
      `1lanc${item.id}`
    ) as HTMLInputElement;
    if (lanc1Checkbox.checked) {
      lanc1Checkbox.checked = true;
      item.lanc1 = true;
      console.log(this.customerDetails);
    } else if (!lanc1Checkbox.checked) {
      lanc1Checkbox.checked = false;
      item.lanc1 = false;
      console.log(this.customerDetails);
    }
  }

  toggleLancDob(item: customer_extra_details) {
    let lancDobCheckbox = document.getElementById(
      `lancDob${item.id}`
    ) as HTMLInputElement;
    if (lancDobCheckbox.checked) {
      lancDobCheckbox.checked = true;
      item.lancDob = true;
      console.log(this.customerDetails);
    } else if (!lancDobCheckbox.checked) {
      lancDobCheckbox.checked = false;
      item.lancDob = false;
      console.log(this.customerDetails);
    }
  }

  toggleLancEsp(item: customer_extra_details) {
    let lancEspCheckbox = document.getElementById(
      `lancesp${item.id}`
    ) as HTMLInputElement;
    if (lancEspCheckbox.checked) {
      lancEspCheckbox.checked = true;
      item.lancEsp = true;
      console.log(this.customerDetails);
    } else if (!lancEspCheckbox.checked) {
      lancEspCheckbox.checked = false;
      item.lancEsp = false;
      console.log(this.customerDetails);
    }
  }

  toggle2Lanc(item: customer_extra_details) {
    let lanc2Checkbox = document.getElementById(
      `2lanc${item.id}`
    ) as HTMLInputElement;
    if (lanc2Checkbox.checked) {
      lanc2Checkbox.checked = true;
      item.lanc2 = true;
      console.log(this.customerDetails);
    } else if (!lanc2Checkbox.checked) {
      lanc2Checkbox.checked = false;
      item.lanc2 = false;
      console.log(this.customerDetails);
    }
  }

  toggleJan(item: customer_extra_details) {
    let janCheckbox = document.getElementById(
      `jan${item.id}`
    ) as HTMLInputElement;
    if (janCheckbox.checked) {
      janCheckbox.checked = true;
      item.jan = true;
      console.log(this.customerDetails);
    } else if (!janCheckbox.checked) {
      janCheckbox.checked = false;
      item.jan = false;
      console.log(this.customerDetails);
    }
  }

  //! Toggle all unique checkbox
  // ! Functions below here

  toggleAllRota(customers: customer_extra_details[]) {}
  toggleAllCeia(customers: customer_extra_details[]) {}
  toggleAllCDesj(customers: customer_extra_details[]) {}
  toggleAllAlm(customers: customer_extra_details[]) {}
  toggleAll1lanc(customers: customer_extra_details[]) {}
  toggleAlllancDob(customers: customer_extra_details[]) {}
  toggleAlllancEsp(customers: customer_extra_details[]) {}
  toggleAll2lanc(customers: customer_extra_details[]) {}
  toggleAlljan(customers: customer_extra_details[]) {}

  //Sheets area

  generateSheets(
    generalTurn: HTMLInputElement,
    generalDate: HTMLInputElement,
    generalActivity: HTMLInputElement,
    generalIndustry: HTMLSelectElement
  ) {
    for (let item of this.customerDetails) {
      if (item.turno === undefined) {
        item.turno = generalTurn.value;
      }
      if (item.atv === undefined) {
        item.atv = generalActivity.value;
      }
      if (item.empresa === undefined) {
        item.empresa = generalIndustry.value;
      }
      item.data = generalDate.value;
    }
    this.sheet.downloadExcel(this.customerDetails);
  }
}
