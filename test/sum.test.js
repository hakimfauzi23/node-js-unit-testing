import { sum, sumAll } from '../src/sum';

test('test sum function', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test('test sum all', () => {
  const numbers = [3, 1, 4, 3];
  expect(sumAll(numbers)).toBe(11);
});
