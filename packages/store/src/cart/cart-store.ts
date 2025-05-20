import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '@ecommerce/types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => set((state) => {
        const existingItem = state.items.find(item => item.product.id === product.id);
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return { items: [...state.items, { product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        items: state.items.filter(item => item.product.id !== productId)
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);