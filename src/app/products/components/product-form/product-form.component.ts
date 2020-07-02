import { Component, OnInit } from '@angular/core';
import { Product, ProductCheck } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getIsAdmin } from 'src/app/auth/store/auth.selectors';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  isAdmin$: Observable<boolean>;
  new: boolean;
  product: Product;
  newRadio: string;
  newCheck: ProductCheck = {
    text: '',
    checked: false
  };

  addRadio() {
    this.product.radio.push(this.newRadio);
    this.newRadio = '';
  }

  resetRadio() {
    this.product.radio = [];
    this.newRadio = '';
  }

  addCheck() {
    if (!this.product.check)
      this.product.check = [];
    this.product.check.push(this.newCheck);
    this.newCheck = {
      text: '',
      checked: false
    };
  }

  resetCheck() {
    this.product.check = [];
  }

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const querySub = this.route.params.subscribe((params: Params) => {
      const serviceSub = this.productsService.getOne(params['key']).subscribe(p => {
        serviceSub.unsubscribe();
        querySub.unsubscribe();
        this.product = p || {};
        this.new = !p;
      });
    });
    this.isAdmin$ = this.store.select(getIsAdmin);
  }

  save() {
    if (!this.new) {
      this.productsService.put(this.product);
    } else {
      this.productsService.post(this.product);
      this.new = false;
    }
  }

  addToCart() {
    this.cartService.put(this.product);
  }

}
