import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Product } from '@ecommerce/types'

type CartItem = {
  product: Product
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set: (arg0: { (state: any): { items: any }; (state: any): { items: any }; (state: any): { items: any }; items?: never[] }) => any, get: () => { (): any; new(): any; items: any[] }) => ({
      items: [],
      addToCart: (product: { id: any }) => set((state) => {
        const existingItem = state.items.find((item: { product: { id: any } }) => item.product.id === product.id)
        if (existingItem) {
          return {
            items: state.items.map((item: { product: { id: any }; quantity: number }) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        }
        return { items: [...state.items, { product, quantity: 1 }] }
      }),
      removeFromCart: (productId: any) => set((state) => ({
        items: state.items.filter((item: { product: { id: any } }) => item.product.id !== productId),
      })),
      updateQuantity: (productId: any, quantity: any) => set((state) => ({
        items: state.items.map((item: { product: { id: any } }) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
      })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)