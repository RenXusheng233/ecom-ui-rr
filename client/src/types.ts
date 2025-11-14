import { ReactElement } from 'react'

export const ALL = 'all'
export const CATEGORY = 'category'
export const SORT = 'sort'

export type Category = {
  name: string
  icon: ReactElement
  slug: string
}

export type ProductType = {
  id: number | string
  name: string
  shortDescription: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  images: Record<string, string>
}

export type CartItemType = ProductType & {
  quantity: number
  selectedSize: string
  selectedColor: string
}
