/**
 * Exemplo de um módulo básico de avise-me que deve enviar um email ao cliente
 * quando um produto está de volta no estoque.
 * 
 * Para isso, vamos criar interfaces para fazer inversão e injeção de dependências.
 * Respeitar o L do SOLID é fundamental (princípio de substituição de Liskov / LSP)
 */

import { EmailService } from "./interfaces/email-service";
import { InventoryNotification } from "./interfaces/inventory-notification";
import { SubscriptionList } from "./interfaces/subscription-list";

export default class TellMeWhenAvailable {
  private readonly emailService: EmailService
  private readonly subscriptions: SubscriptionList
  constructor(subscriptions: SubscriptionList, emailService: EmailService) {
    this.emailService = emailService
    this.subscriptions = subscriptions
  }

  async processNotification(productNotification: InventoryNotification): Promise<void> {
    const { productId, availableInventory, productName, price } = productNotification

    if (availableInventory === 0) return
    const subscribers = await this.subscriptions.loadSubscribers(productId)

    const promises = subscribers.map(subscriber => this.emailService.sendEmail(
      'Seu produto está disponível!',
      `Olá ${subscriber.userName}! Seu produto ${productName} está disponível por R$${price}!`,
      subscriber.userEmail
    ))
    await Promise.all(promises)
  }
}


