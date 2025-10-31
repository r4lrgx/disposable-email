'use strict';

const Trie = require('./lib/trie');

// Original source https://github.com/ivolo/disposable-email-domains
const domains = require('./data/domains.json'); // exact domains
const subdomains = require('./data/subdomains.json'); // subdomains like *.example.com

const trie = new Trie();

// Exact inserts
for (let i = 0; i < domains.length; i++) {
 const d = domains[i];
 if (!d) continue;
 trie.insert(d.toLowerCase().trim());
}

// Insert subdomains
for (let i = 0; i < subdomains.length; i++) {
 const d = subdomains[i];
 if (!d) continue;
 trie.insert(d.toLowerCase().trim());
}

/**
 * Check if a domain or subdomain is blacklisted.
 * @param {string} raw - Email or domain
 * @returns {boolean}
 */
function isBlacklisted(raw) {
 if (!raw || typeof raw !== 'string') return false;

 let domain = raw.trim().toLowerCase();
 const atIndex = domain.indexOf('@');
 if (atIndex !== -1) domain = domain.slice(atIndex + 1);

 if (!domain) return false;

 return trie.search(domain);
}

module.exports = isBlacklisted;
