import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { customer } from '../../Interfaces/general-dtos';

@Injectable({
  providedIn: 'root',
})
export class ProtheusService {
  constructor(private http: HttpClient) {}
  url: string = 'http://192.168.1.5:58905/rest/apifun/getset?id=';

  getCC(cc: string): Observable<customer[]> {
    return this.http
      .get<{ FUNCIONARIOS: customer[] }>(`${this.url}${cc}`)
      .pipe(map((response) => response.FUNCIONARIOS));
  }
}
