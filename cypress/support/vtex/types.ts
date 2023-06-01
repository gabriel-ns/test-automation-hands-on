export interface IOrderForm {
  orderFormId: string
  items: IOrderFormItem[]
}

export interface IOrderFormAddSku {
  skuId: number
  quantity: number
  seller?: string
}

export interface IOrderFormItem {
  id: number | string
  productRefId: string
  productId: string
  uniqueId: string
  seller: string
  quantity: number
}