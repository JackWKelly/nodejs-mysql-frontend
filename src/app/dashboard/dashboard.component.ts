import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/order';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  orders = {};

  ngOnInit() {
    this.databaseService.listOrders()
      .subscribe(data => {
        console.log(data);
        this.orders = data;
      })
      

  }
}


