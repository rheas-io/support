import { Str } from '../src/str';
import { EmailValidator } from '../src/emailValidator';

describe('test email validator', () => {
    it('test email', async () => {
        const emailValidator = new EmailValidator();

        //invalid domain
        let randomLocal = 'kaysy.';
        expect(() => {
            emailValidator.validateDomain(randomLocal);
        }).toThrow();

        randomLocal = (await Str.random(256)) + '.com';
        expect(() => {
            emailValidator.validateDomain(randomLocal);
        }).toThrow();
    });
});
