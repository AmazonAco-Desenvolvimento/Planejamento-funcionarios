import { Injectable } from '@angular/core';
import { customer, customer_extra_details } from '../Interfaces/general-dtos';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService {
  constructor() {}
  searchedUsers: customer[] = [
    {
      name: 'Ricardo Victor Marques Sampaio Pinheiro',
      id: '12',
      sector: 'Tecnologia da informação',
      desc: 'teste',
    },
    {
      name: 'Ricardo Victor Marques Sampaio Pinheiro',
      id: '004329',
      sector: 'Tecnologia da informação',
      desc: 'Suporte TI',
    },
    {
      name: 'Ricardo Victor Marques Sampaio Pinheiro',
      id: '004328',
      sector: 'Tecnologia da informação',
      desc: 'Suporte TI',
    },
  ];
  userConfirmDetails: customer_extra_details[] = [];
  sectorUsersSelected: customer[] = [];
  confirmedUserData: customer_extra_details[] = [];
}
