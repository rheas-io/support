export class EmailValidator {

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
    public validate(email: string): boolean {

        try {
            let [local, domain] = this.validateParts(email);

            this.validateLocal(local);
            this.validateDomain(domain);
        } catch (err) {
            return false;
        }
        return true;
    }

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
    public validateParts(email: string): string[] {

        let split_parts: string[] = email.split("@");

        // Email address should not have more than 1 @ symbol.
        // Though RFC supports it inside a quotes, we will skip
        // those as it is not commonly used.
        if (split_parts.length !== 2 || email.length > 320) {
            throw Error("Invalid email address");
        }
        return split_parts;
    }

    /**
     * Check if the local part of the email address has 
     * the required size.
     * 
     * Maximum length of local part is 64
     * 
     * @param local Local part of the email address
     */
    public validateLocal(local: string) {
        local = local.trim();

        // Local parts should not start with or
        // end with a dot.
        if (local.endsWith(".") || local.startsWith(".")) {
            return false;
        }

        return local.length > 0 && local.length < 65;
    }

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
    public validateDomain(domain: string) {
        domain = domain.trim();

        if (domain.length === 0 || domain.length > 255 || domain.endsWith("-") || domain.startsWith("-")) {
            throw ("Invalid domain part.");
        }
        // Split the domain by dots. A domain should have
        // minimum two parts after this split and each part 
        // should have at least one character and not more than
        // 63 characters.
        let domainParts = domain.split(".");
        let partsCheck = function (part: string) {
            part = part.trim();
            return part.length === 0 || part.length > 63;
        };

        if (domainParts.length < 2 || domainParts.some(partsCheck))
            throw ("Invalid domain part.");
    }
}