import { SubscriptionListMock, makeFakeSubscription } from "./mocks/subscription-list-mock"
import { EmailServiceMock } from "./mocks/email-service-mock"
import { makeInventoryNotification } from "./mocks/inventory-notification-mock"
import TellMeWhenAvailable from "../../../src/modules/tell-me-when-available"

/**
 * Criamos um factory para instanciar nossa classe porque ela será instanciada
 * em todos os testes, e sem essa função, cada nova dependência no construtor
 * exigiria refatorar todos os testes.
 */
const makeSut = () => {
  const subscriptions = new SubscriptionListMock()
  const emailService = new EmailServiceMock()

  // sut = Software Under Test
  const sut = new TellMeWhenAvailable(subscriptions, emailService)

  return {
    sut,
    subscriptions,
    emailService
  }
}

describe('Módulo TellMeWhenAvailable', () => {
  test('deve buscar a lista de clientes inscritos com os parâmetros corretos', async () => {
    const { sut, subscriptions } = makeSut()

    // verificar como nosso componente interage com outro componente
    const loadSpy = jest.spyOn(subscriptions, 'loadSubscribers')
    const notification = makeInventoryNotification()

    await sut.processNotification(notification)

    expect(loadSpy).toBeCalledTimes(1)
    expect(loadSpy).toBeCalledWith(notification.productId)
  })

  test.todo('deve chamar o serviço de email com os parâmetros corretos')

  test('não deve chamar o serviço de subscrições se o produto estiver indisponível', async () => {
    const { sut, subscriptions } = makeSut()

    const notification = makeInventoryNotification({ availableInventory: 0 })
    const loadSpy = jest.spyOn(subscriptions, 'loadSubscribers')

    await sut.processNotification(notification)
    expect(loadSpy).toBeCalledTimes(0)
  })


  test.todo('não deve mandar email nenhum se o produto estiver indisponível')
  test.todo('não deve mandar email se o preço estiver acima do preço alvo do cliente')

  test('deve mandar email se o produto estiver disponível e abaixo do preço alvo', async () => {
    const { sut, subscriptions, emailService } = makeSut()

    // forçamos um estado conhecido aqui para verificar o resultado esperado
    const subscriber = makeFakeSubscription({ targetPrice: 999 })
    const notification = makeInventoryNotification({ price: 1299, availableInventory: 10 })

    jest.spyOn(subscriptions, 'loadSubscribers').mockResolvedValueOnce([subscriber])
    const sendSpy = jest.spyOn(emailService, 'sendEmail')

    await sut.processNotification(notification)

    expect(sendSpy).toBeCalledTimes(1)
  })

  test.todo('deve mandar email para todos os clientes exceto os que possuem preço alvo abaixo do preço')


  test('deve jogar uma exceção se o serviço de inscrições falhar', async () => {
    const { sut, subscriptions } = makeSut()

    // forçar um comportamento de um componente externo
    const expectedError = new Error('Service failed')
    jest.spyOn(subscriptions, 'loadSubscribers').mockRejectedValueOnce(expectedError)
    const notification = makeInventoryNotification()

    // neste caso, por ser uma operação assíncrona que vai falhar, precisamos
    // receber a promise, e não o resultado
    const promise = sut.processNotification(notification)

    expect(promise).rejects.toEqual(expectedError)
  })

  test.todo('deve jogar uma exceção se o serviço de emails falhar')
})