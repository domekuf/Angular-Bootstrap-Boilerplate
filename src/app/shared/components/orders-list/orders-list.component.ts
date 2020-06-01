import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/orders/models/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  @Input() orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
