import { Injectable } from '@angular/core';
import { Order } from './classes/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  apiBase = 'http://localhost:3000/api';

  listOrders() {
    return this.http.get(this.apiBase + '/order/listorders');
  }

  totalCost(id: number): Observable<Order> {
    return this.http.get(this.apiBase + '/order/totalcost/' + id)
      .pipe(map(response => response as Order));
  }

}
