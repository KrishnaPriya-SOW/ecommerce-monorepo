import { http } from '../http-client'
import type { CartItem } from '../../../types/src/cart'

export const getCart = async (userId: string): Promise<CartItem[]> => {
  const response = await http.get(`/cart/${userId}`)
  return response.data
}

export const addToCart = async (userId: string, productId: string, quantity = 1): Promise<CartItem> => {
  const response = await http.post(`/cart/${userId}/items`, { productId, quantity })
  return response.data
}

export const updateCartItem = async (userId: string, itemId: string, quantity: number): Promise<CartItem> => {
  const response = await http.patch(`/cart/${userId}/items/${itemId}`, { quantity })
  return response.data
}

export const removeFromCart = async (userId: string, itemId: string): Promise<void> => {
  await http.delete(`/cart/${userId}/items/${itemId}`)
}

export const clearCart = async (userId: string): Promise<void> => {
  await http.delete(`/cart/${userId}`)
}