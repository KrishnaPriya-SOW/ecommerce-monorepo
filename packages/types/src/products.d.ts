export interface Product {
  id: string
  name: string
  price: number
  description?: string
  imageUrl?: string
}

export interface ProductCreate {
  name: string
  price: number
  description?: string
  imageUrl?: string
}

export interface ProductUpdate {
  name?: string
  price?: number
  description?: string
  imageUrl?: string
}
