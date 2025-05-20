// packages/store/src/types/index.ts
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  // Add other product properties as needed
}