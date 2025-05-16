import type { Product } from './products'

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
}
