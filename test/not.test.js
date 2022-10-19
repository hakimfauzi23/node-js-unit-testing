test('string.not', () => {
  const name = 'Hakim Fauzi';
  expect(name).not.toBe('Hanif');
  expect(name).not.toEqual('Hanif');
  expect(name).not.toMatch(/awe/);
});

test('number.not', () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});
