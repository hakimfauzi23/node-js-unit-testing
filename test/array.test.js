test('array simple', () => {
  const names = ['hanif', 'fauzi', 'hakim'];
  expect(names).toEqual(['hanif', 'fauzi', 'hakim']);
  expect(names).toContain('fauzi');
});

test('array object', () => {
  const persons = [
    {
      name: 'Hanif',
    },
    {
      name: 'Fauzi',
    },
  ];
  expect(persons).toContainEqual({
    name: 'Fauzi',
  });
});
