interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly category: string;
  readonly description: string;
  readonly image: string;
  quantity: number;
  priceOfAllQuantity: number;
}

interface DataAPI {
  isLoaded: boolean;
  products: Product[];
}

interface Cart {
  checkoutItems: Product[];
  totalItems: number;
  totalPrice: number;
}

interface ReducerAction {
  type: 'ADD_TO_CART' | 'SUBTRACT_FROM_CART' | 'DELETE_FROM_CART';
  payload: Product;
}
