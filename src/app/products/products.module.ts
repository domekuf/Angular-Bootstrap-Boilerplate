import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './containers/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonsModule, InputsModule, CheckboxModule, WavesModule } from 'angular-bootstrap-md';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ ProductsComponent, ProductFormComponent ],
  imports: [
    ButtonsModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    InputsModule,
    ProductsRoutingModule,
    SharedModule,
    WavesModule
  ],
  exports: [ ProductsComponent ],
})

export class ProductsModule { }
