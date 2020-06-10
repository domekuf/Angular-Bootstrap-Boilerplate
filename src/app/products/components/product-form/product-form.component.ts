import { Component, OnInit } from '@angular/core';
import { Product, ProductCheck } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

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
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const querySub = this.route.params.subscribe((params: Params) => {
      const serviceSub = this.productsService.getOne(params['key']).subscribe(p => {
        serviceSub.unsubscribe();
        querySub.unsubscribe();
        this.product = p || {};
        this.new = !p;
      });
    })
  }

  save() {
    if (!this.new) {
      this.productsService.put(this.product);
    } else {
      this.productsService.post(this.product);
      this.new = false;
    }
  }

}
