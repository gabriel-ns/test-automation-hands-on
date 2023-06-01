import faker from 'faker'
import { ProductSubscription, SubscriptionList } from '../../../../src/modules/interfaces/subscription-list'

export const makeFakeSubscription = (params?: Partial<ProductSubscription>): ProductSubscription => ({
  targetPrice: params?.targetPrice ?? faker.datatype.number({ min: 100 }),
  userEmail: params?.userEmail ?? faker.internet.email(),
  userName: params?.userName ?? faker.name.firstName(),
  productId: params?.productId ?? faker.random.alphaNumeric(5)
})

export class SubscriptionListMock implements SubscriptionList {
  /**
   * Normalmente criamos um mock para um caso de sucesso simples.
   * Para todos os outros, podemos usar o jest para forçar um retorno
   */
  loadSubscribers(productId: string): Promise<ProductSubscription[]> {
    return Promise.resolve([makeFakeSubscription({ productId })])
  }
}