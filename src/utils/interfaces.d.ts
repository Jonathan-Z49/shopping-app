interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

interface DataAPI {
  isLoaded: boolean;
  products: Product[];
}

interface Cart {
  checkoutItems: Product[];
  totalItems: number;
}
