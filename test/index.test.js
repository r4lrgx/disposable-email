import { describe, it, expect } from 'vitest';
import isBlacklisted from './../index.js';

describe('Domain Blacklist', () => {
 it('should block a domain exact match', () => {
  expect(isBlacklisted('0-30-24.com')).toBe(true);
  expect(isBlacklisted('0-180.com')).toBe(true);
 });

 it('should block emails with blacklisted domains', () => {
  expect(isBlacklisted('someone@0-30-24.com')).toBe(true);
  expect(isBlacklisted('user@0-180.com')).toBe(true);
 });

 it('should block a subdomain exact match', () => {
  expect(isBlacklisted('abc.0x01.gq')).toBe(true);
  expect(isBlacklisted('xyz.0x01.tk')).toBe(true);
 });

 it('should block emails with blacklisted subdomain', () => {
  expect(isBlacklisted('someone@xyz.0x01.tk')).toBe(true);
  expect(isBlacklisted('user@abc.0x01.gq')).toBe(true);
 });

 it('should allow safe domains', () => {
  expect(isBlacklisted('user@example.com')).toBe(false);
  expect(isBlacklisted('example.com')).toBe(false);
 });

 it('should return false for invalid inputs', () => {
  expect(isBlacklisted('')).toBe(false);
  expect(isBlacklisted(null)).toBe(false);
  expect(isBlacklisted(undefined)).toBe(false);
  expect(isBlacklisted(123)).toBe(false);
 });
});
