import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.get();
  }

  add() {
    const product: Product = {
      name: 'Birra alla spina',
      radio: ['Media', 'Piccola'],
      check: []
    };
    this.productsService.add(product);
  }

}
