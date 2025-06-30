import { Injectable } from '@angular/core';
import { customer } from '../Interfaces/general-dtos';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService {
  constructor() {}
  searchedUsers: customer[] = [
    { name: 'Ricardo', id: '12', sector: 'TI', desc: 'teste' },
    { name: 'Ricardo', id: '13', sector: 'TI', desc: 'teste' },
    { name: 'Ricardo', id: '14', sector: 'TI', desc: 'teste' },
  ];
  sectorUsersSelected: customer[] = [];
}
