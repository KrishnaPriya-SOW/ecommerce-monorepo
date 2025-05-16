import { create } from 'zustand'
import { getProducts } from '@ecommerce/api-client'
import type { Product } from '../../types'

type ProductState = {
  products: Product[]
  featuredProducts: Product[]
  loading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  getProductById: (id: string) => Product | undefined
}

export const useProductStore = create<ProductState>((set: (arg0: { loading: boolean; error?: string | null; products?: any; featuredProducts?: any }) => void, get: () => { (): any; new(): any; products: any[] }) => ({
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