export declare class EmailValidator {
    /**
     * Checks whether the given email is valid or not. We use simple
     * validation rules.
     *
     * Various stackoverflow answers suggests actual email delivery to
     * verify the authenticity of the email and no regex can fully match
     * 100% of emails.
     *
     * So we will just check the localpart and domain part of the email
     * and check if they have met min and maximum counts.
     *
     * @param email
     */
    validate(email: string): boolean;
    /**
     * Validates the whole email address. Email address should
     * have a local part and domain part seperated by single @
     *
     * The max length of an email address should be 320.
     *
     * Returns the local part and domain part in an array in the
     * same order.
     *
     * @param email
     */
    validateParts(email: string): string[];
    /**
     * Check if the local part of the email address has
     * the required size.
     *
     * Maximum length of local part is 64
     *
     * @param local Local part of the email address
     */
    validateLocal(local: string): void;
    /**
     * Checks the length of the domain part of the email address.
     * It should have at least 3 characters for the domain name, dot
     * and the extension.
     *
     * Validate for the presense of extension, dot and domain name.
     * In all domain should not be in excess of 255 characters.
     *
     * @param domain Domain part of the email address
     */
    validateDomain(domain: string): void;
}
