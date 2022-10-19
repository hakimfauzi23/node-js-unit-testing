test('string', () => {
  const name = 'Hanif Fauzi Hakim';

  expect(name).toBe('Hanif Fauzi Hakim');
  expect(name).toMatch(/uzi/);
});
