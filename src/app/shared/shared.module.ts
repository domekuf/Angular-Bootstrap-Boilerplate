import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule
} from 'angular-bootstrap-md';
import { CustomersModalComponent } from './components/customers-modal/customers-modal.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    CustomersModalComponent,
    OrderComponent,
    OrdersListComponent,
    ProjectModalComponent,
    ProjectsListComponent,
    ProjectComponent,
    CustomersListComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    FormsModule,
    ButtonsModule,
    CardsModule
  ],
  exports: [
    ProjectsListComponent, ProjectComponent, CustomersListComponent,
    OrderComponent, OrdersListComponent, ProductComponent, ProductsListComponent
  ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
    CustomersModalComponent,
    ProjectModalComponent
  ]
})
export class SharedModule {}
