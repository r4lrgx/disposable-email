declare module '@r4lrgx/disposable-email' {
 /**
  * Checks if a given domain or email is blacklisted.
  * Supports wildcards, subdomains, and large datasets (millions of domains).
  *
  * @param raw - The domain or email string to check.
  * @returns `true` if the domain is blacklisted, otherwise `false`.
  *
  * @example
  * import isBlacklisted from "@r4lrgx/disposable-email";
  *
  * console.log(isBlacklisted("example.com"));
  * console.log(isBlacklisted("user@temp-mail.org"));
  */
 export default function isBlacklisted(raw: string): boolean;
}
