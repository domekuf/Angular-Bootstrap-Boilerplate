import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/orders/models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order:Order;

  constructor() { }

  guiDate(): string {
    if (!this.order.created) {
      // TODO alarm
    }
    const d: Date = new Date(this.order.created);
    return d.toLocaleTimeString();
  }

  ngOnInit() {
  }

}
