'use strict';

class TrieNode {
 constructor() {
  this.children = {}; // { part: TrieNode }
  this.isEnd = false;
 }
}

/**
 * Sort by exact domains and subdomains (*.example.com)
 */
class DomainTrie {
 constructor() {
  this.root = new TrieNode();
 }

 /**
  * Enter a domain or subdomain (e.g., *.example.com)
  * @param {string} domain
  */
 insert(domain) {
  const parts = domain.split('.').reverse();
  let node = this.root;
  for (let i = 0; i < parts.length; i++) {
   const part = parts[i];
   if (!node.children[part]) node.children[part] = new TrieNode();
   node = node.children[part];
  }
  node.isEnd = true;
 }

 /**
  * Check if a domain or subdomain match exactly
  * @param {string} domain
  * @returns {boolean}
  */
 search(domain) {
  const parts = domain.split('.').reverse();
  return this._search(parts, 0, this.root);
 }

 _search(parts, index, node) {
  if (node.isEnd) return true;
  if (index >= parts.length) return false;

  const part = parts[index];

  // Domains match
  if (node.children[part] && this._search(parts, index + 1, node.children[part])) return true;

  // Subdomains match *
  if (node.children['*'] && this._search(parts, index + 1, node.children['*'])) return true;

  return false;
 }
}

module.exports = DomainTrie;
