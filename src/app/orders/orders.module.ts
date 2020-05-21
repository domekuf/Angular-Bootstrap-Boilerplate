
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './containers/orders/orders.component'
//import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule, InputsModule, CardsModule, WavesModule, IconsModule, ModalModule } from 'angular-bootstrap-md';

//import * as fromOrders from './store/projects.reducer';
//import { EffectsModule } from '@ngrx/effects';
//import { OrdersEffects } from './store/projects.effects';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    OrdersRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    WavesModule,
    IconsModule,
    CardsModule,
//    StoreModule.forFeature('projects', fromOrders.projectsReducer),
//    EffectsModule.forFeature([OrdersEffects])
  ],
  declarations: [OrdersComponent],
  exports: [OrdersComponent],
})
export class OrdersModule { }