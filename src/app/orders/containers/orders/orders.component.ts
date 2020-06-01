import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Observable<Order[]>;
  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.orders = this.ordersService.get();
  }

  add() {
    const order: Order = {
      items: [{note: "Senza ghiaccio"}]
    };
    this.ordersService.add(order);
  }

}
