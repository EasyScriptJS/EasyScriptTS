/**
 * @function `validateCNAMERecord` - Validate a CNAME record
 * @returns { Boolean } - Returns true if valid, returns false if invalid
 */

export function cname(record: string): boolean {
    const regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

    return regex.test(record);
}