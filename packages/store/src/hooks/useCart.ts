import { useCartStore } from '../cart/cart-store'

export function useCart() {
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
      (total: number, item: { product: { price: number }; quantity: number }) => total + item.product.price * item.quantity,
      0
    ),
  }
}