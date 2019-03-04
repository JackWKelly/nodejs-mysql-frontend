import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails } from '../classes/order';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  orders: Order[];

  async ngOnInit() {
    this.databaseService.listOrders()
      .subscribe(data => {
        console.log(data);
        this.orders = <Order[]> data;
        this.orders.map(order => {
          this.databaseService.totalCost(order.orderNumber).subscribe((result) => {
            order.details = new OrderDetails;
            order.details.cost = result[0]['total'];
          })
        })
        }
      )
  }
}
