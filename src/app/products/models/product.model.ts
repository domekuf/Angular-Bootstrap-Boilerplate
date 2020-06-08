export interface ProductCheck {
  text: string;
  checked: boolean;
}
export interface Product {
  key?: any;
  name?: any;
  check?: ProductCheck;
  radio?: any;
  radioDefault?: number;
  status?: any;
}
