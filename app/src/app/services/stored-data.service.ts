import { Injectable } from '@angular/core';
import {
  customer,
  customer_extra_details,
  sector,
} from '../Interfaces/general-dtos';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService {
  constructor() {}
  searchedUsers: customer[] = [];
  userConfirmDetails: customer_extra_details[] = [];
  sectorUsersSelected: customer[] = [];
  confirmedUserData: customer_extra_details[] = [];

  sectors: sector[] = [];
  tableDate?: Date;
  tableActivity: string = '';
  tableTurn: string = '';
}
