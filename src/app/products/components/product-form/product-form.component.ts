import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
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
  radioModel: boolean[];
  a: boolean = false;

  addRadio() {
    this.product.radio.push(this.newRadio);
    this.newRadio = '';
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
        if (this.product.radio) {
          this.radioModel = [];
          for (let _ in this.product.radio)
            this.radioModel.push(false);
          if (this.product.radioDefault !== undefined && this.product.radioDefault < this.product.radio.size)
            this.radioModel[this.product.radioDefault] = true;
          else
            this.product.radioDefault = 0;
        }

      });
    })
  }

  save() {
    console.log(this.radioModel);
    if (!this.new) {
      this.productsService.put(this.product);
    } else {
      this.productsService.post(this.product);
      this.new = false;
    }
  }

}
