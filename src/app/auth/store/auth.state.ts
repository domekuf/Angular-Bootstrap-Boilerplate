import { User } from '../models/user.model';
import { Product } from 'src/app/products/models/product.model';

export interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
  cart: Product[];
}

export const authInitialState: AuthState = {
  user: null,
  isAdmin: false,
  isLoggedIn: false,
  isLoading: true,
  error: null,
  cart: []
};
