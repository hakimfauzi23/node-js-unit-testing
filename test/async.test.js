import { sayHelloAsync } from '../src/async';

test('async function test', async () => {
  const result = await sayHelloAsync('Hakim');
  expect(result).toBe('Hello Hakim');
});

test('async function test with matchers', async () => {
  await expect(sayHelloAsync('Hakim')).resolves.toBe('Hello Hakim');
  await expect(sayHelloAsync()).rejects.toBe('Name is empty');
});
