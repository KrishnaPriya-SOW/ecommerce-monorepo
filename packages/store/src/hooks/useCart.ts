import { Product } from '@ecommerce/types'
import { useCartStore } from '../cart/cart-store'
import type { CartItem } from '../cart/cart-store' // Import the CartItem type

// Define the return type interface
interface UseCartReturn {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  cartTotal: number
}

export function useCart(): UseCartReturn {
  const {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
  } = useCartStore()

  return {
    cartItems: items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    cartTotal: items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),
  }
}