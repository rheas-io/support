import { app } from './index';
import { MailMessage } from '@rheas/mail/mailMessage';
import { IMail, IMailer, IMailMessage } from '@rheas/contracts/mail';

/**
 * Returns the application mailer.
 *
 * @returns
 */
export function mail(): IMailer {
    const mailer: IMailer = app().get('mail');

    return mailer;
}

/**
 * Returns a mailMessage wrapping the given email.
 *
 * @param email
 */
export function mailMessage(email: IMail): IMailMessage {
    return new MailMessage(mail(), email);
}
