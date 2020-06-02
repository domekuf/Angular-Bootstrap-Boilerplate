import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.firebase.databaseURL;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  get userId() {
    if (this.afAuth.auth.currentUser) {
      return this.afAuth.auth.currentUser.uid;
    }
  }

  add(product: Product) {
    const products = this.db.list(`products`);
    return products.push(product);
  }

  get(): Observable<Product[]> {
    return this.db.list<Product>(`products`).snapshotChanges().pipe(
      map(actions => actions.map((_) => {
        const product: Product = <Product>_.payload.val();
        if (!product) {
          // TODO alarm
          return _;
        }
        product.key = _.payload.key;
        return product;
      })
      )
    );
  }
}
