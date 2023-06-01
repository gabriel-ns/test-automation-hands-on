import { EmailService } from "../../../../src/modules/interfaces/email-service";

export class EmailServiceMock implements EmailService {
  sendEmail(title: string, content: string, recipient: string, sender: string): Promise<void> {
    return Promise.resolve()
  }
}