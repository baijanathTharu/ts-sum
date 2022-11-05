import { expect, test } from 'vitest';
import { sum } from '../index';

test('testing sum', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 10)).toBe(12);
  expect(sum(2, 5)).not.toBe(8);
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 100)).toBe(136);
});
