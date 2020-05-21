import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = environment.firebase.databaseURL;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  get userId() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.uid;
    }
  }

  add(order: Order) {
    order.created = (new Date()).toJSON();
    const orders = this.db.list(`orders/${this.userId}`);
    return orders.push(order);
  }
}
