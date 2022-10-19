import { sayHelloAsync } from '../src/async';

test.concurrent('concurrent 1', async () => {
  await expect(sayHelloAsync('Hakim')).resolves.toBe('Hello Hakim');
});
test.concurrent('concurrent 2', async () => {
  await expect(sayHelloAsync('Hakim')).resolves.toBe('Hello Hakim');
});
test.concurrent('concurrent 3', async () => {
  await expect(sayHelloAsync('Hakim')).resolves.toBe('Hello Hakim');
});
