import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { User } from '../../auth/models/user.model';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public cart: Cart;
  cartSubscription: Subscription;
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;

  @Output() logout = new EventEmitter<User>();

  constructor( private cartService: CartService ) {
   }

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe((cart)=>{
      if (cart)
        this.cart = cart;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  get cartLength(): number {
  if (!this.cart
        || !this.cart.products)
      return 0;
    return this.cart.products.length;
  }
}
