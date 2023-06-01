import {
  IOrderForm,
  IOrderFormAddSku,
} from './types'

function updateInternalOrderform(response: Cypress.Response<IOrderForm>) {
  const orderForm = response.body
  const { orderFormId } = orderForm

  cy.wrap(orderFormId).as('orderFormId')
  cy.wrap(orderForm).as('orderForm')

  return new Promise<IOrderForm>((resolve) => resolve(orderForm))
}

export function getOrderForm(): Cypress.Chainable<IOrderForm> {
  const endpoint = '/api/checkout/pub/orderForm'

  // perttier-ignore
  return cy.request<IOrderForm>('GET', endpoint).then(updateInternalOrderform)
}

export function addSkuToCart(
  skus: IOrderFormAddSku[],
  salesChannel
): Cypress.Chainable<IOrderForm> {
  return cy.get<IOrderForm>('@orderFormId').then((orderFormId) => {
    const endpoint = `/api/checkout/pub/orderForm/${orderFormId}/items${salesChannel ? `?sc=${salesChannel}` : ''
      }`

    const orderItems = skus.map((sku) => {
      const { skuId, quantity, seller } = sku

      return {
        id: skuId,
        quantity,
        seller: seller || '1',
      }
    })

    const body = {
      orderItems,
    }

    // prettier-ignore
    return cy.request<IOrderForm>('POST', endpoint, body)
      .then(updateInternalOrderform)
  })
}