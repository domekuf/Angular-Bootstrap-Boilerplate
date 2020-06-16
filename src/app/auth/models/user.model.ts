import { Product } from "src/app/products/models/product.model";

export interface User {
  uid: string;
  displayName: string;
  email: string;
  providerId: string;
  photoUrl: string;
  isNewUser?: boolean;
  isAdmin?: boolean;
  isOnline?: boolean;
  cart?: Product[];
}
