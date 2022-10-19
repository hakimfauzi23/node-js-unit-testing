import { getBalance } from '../src/async';

test('mock async function', async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance('Hakim', from)).resolves.toEqual({
    name: 'Hakim',
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing('Mock async function rejected', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error('Ups'));
  await getBalance('Hakim', from);
});

test('Mock async function error matchers', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce('Rejected');

  await expect(getBalance('Hakim', from)).rejects.toBe('Rejected');
});
