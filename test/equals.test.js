test('test toBe', () => {
  const name = 'Hanif';
  const hello = `Hello ${name}`;

  expect(hello).toBe('Hello Hanif');
});

test('should test toEqual', () => {
  let person = { id: 'Hanif' };
  Object.assign(person, { name: 'Hakim' });

  expect(person).toEqual({ id: 'Hanif', name: 'Hakim' });
});
