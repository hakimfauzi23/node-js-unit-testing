import { sayHello } from '../src/sayHello';

test('sayHello success', () => {
  expect(sayHello('Hakim')).toBe('Hello Hakim');
});

test.failing('sayHello error', () => {
  sayHello(null);
});

test('sayHello error matchers', () => {
  expect(() => sayHello(null)).toThrow();
});
