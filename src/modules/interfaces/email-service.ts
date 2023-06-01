export interface EmailService {
  sendEmail(title: string, content: string, recipient: string, sender?: string): Promise<void>
}