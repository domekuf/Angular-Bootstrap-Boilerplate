import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [ ProductsComponent ],
  imports: [
    ButtonsModule,
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [ ProductsComponent ],
})

export class ProductsModule { }
