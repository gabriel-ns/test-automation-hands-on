import faker from 'faker'
import { InventoryNotification } from '../../../../src/modules/interfaces/inventory-notification'

export const makeInventoryNotification = (params?: Partial<InventoryNotification>): InventoryNotification => ({
  availableInventory: params?.availableInventory ?? faker.datatype.number(),
  price: params?.price ?? faker.datatype.number({ min: 0 }),
  productId: params?.productId ?? faker.random.alphaNumeric(5),
  productName: params?.productName ?? faker.random.words(10)
})