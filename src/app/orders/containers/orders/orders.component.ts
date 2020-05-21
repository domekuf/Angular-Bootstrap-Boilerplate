import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
  }

  add() {
    const order: Order = {
      items: [{note: "Senza ghiaccio"}]
    };
    this.ordersService.add(order);
  }

}
