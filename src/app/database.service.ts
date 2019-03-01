import { Injectable } from '@angular/core';
import { Order } from './classes/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  apiBase = 'http://localhost:3000/api';

  listOrders() {
    return this.http.get(this.apiBase + '/order/listorders');
  }

}
