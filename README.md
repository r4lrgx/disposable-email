<div align="center">
  <a aria-label="License" href="https://github.com/r4lrgx/disposable-email/blob/main/license.md">
  <img src="https://img.shields.io/github/license/r4lrgx/disposable-email?color=60a5fa&logo=github&label=License&style=flat-square"/>
 </a>
  <a aria-label="Version" href="https://www.npmjs.com/package/@r4lrgx/disposable-email">
    <img src="https://img.shields.io/npm/v/@r4lrgx/disposable-email?color=&logo=npm&label=Version&style=flat-square"/>
  </a>
  <a aria-label="Weekly Downloads" href="https://www.npmjs.com/package/@r4lrgx/disposable-email">
    <img src="https://img.shields.io/npm/dw/@r4lrgx/disposable-email?color=&logo=npm&label=Downloads&style=flat-square"/>
  </a>
</div>

---

### 💾 Installation

```bash
npm install @r4lrgx/disposable-email
yarn add @r4lrgx/disposable-email
pnpm add @r4lrgx/disposable-email
```

### 🔧 Usage

```js
import isBlacklisted from '@r4lrgx/disposable-email';

// Should block a domain exact match
console.log(isBlacklisted('0-30-24.com')); // true
console.log(isBlacklisted('0-180.com')); // true

// Should block emails with blacklisted domains
console.log(isBlacklisted('someone@0-30-24.com')); // true
console.log(isBlacklisted('user@0-180.com')); // true

// Should block a subdomain exact match
console.log(isBlacklisted('abc.0x01.gq')); // true
console.log(isBlacklisted('xyz.0x01.tk')); // true

// Should block emails with blacklisted subdomain
console.log(isBlacklisted('someone@xyz.0x01.tk')); // true
console.log(isBlacklisted('user@abc.0x01.gq')); // true

// Should allow safe domains
console.log(isBlacklisted('user@example.com')); // false
console.log(isBlacklisted('example.com')); // false
```

## 📋 License

This repository is distributed under the terms of the **[MIT License](LICENSE.md)**.
