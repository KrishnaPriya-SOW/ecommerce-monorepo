import { http } from '../http-client'
import type { Product } from '@ecommerce/types'

export const getProducts = async (): Promise<Product[]> => {
  const response = await http.get('/products')
  return response.data
}

export const getProductById = async (id: string): Promise<Product> => {
  const response = await http.get(`/products/${id}`)
  return response.data
}

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await http.post('/products', product)
  return response.data
}

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await http.patch(`/products/${id}`, product)
  return response.data
}

export const deleteProduct = async (id: string): Promise<void> => {
  await http.delete(`/products/${id}`)
}