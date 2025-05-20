import { create } from 'zustand'
import { getProducts } from '@ecommerce/api-client'
import type { Product } from '@ecommerce/types'  // Changed from '../../types'

type ProductState = {
  products: Product[]
  featuredProducts: Product[]
  loading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  getProductById: (id: string) => Product | undefined
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  featuredProducts: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null })
    try {
      const products = await getProducts()
      set({
        products,
        featuredProducts: products.slice(0, 4),
        loading: false,
      })
    } catch (error) {
      set({ error: 'Failed to fetch products', loading: false })
    }
  },
  getProductById: (id: any) => {
    return get().products.find((product: { id: any }) => product.id === id)
  },
}))