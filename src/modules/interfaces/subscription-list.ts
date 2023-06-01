
export interface ProductSubscription {
  userEmail: string
  userName: string
  productId: string
  targetPrice: number
}

export interface SubscriptionList {
  loadSubscribers(productId: string): Promise<ProductSubscription[]>
}