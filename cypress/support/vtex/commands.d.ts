import { IOrderForm, IOrderFormAddSku } from './types'

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getOrderForm: () => Chainable<IOrderForm>

      addSkuToCart: (
        skus: IOrderFormAddSku[],
        salesChannel: number
      ) => Chainable<IOrderForm>
    }
  }
}
