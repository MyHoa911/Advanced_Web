export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
}

export interface CheckoutForm {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
}

export interface CartResponse {
  cart: CartItem[];
  total: number;
  message?: string;
  orderId?: any;
}
