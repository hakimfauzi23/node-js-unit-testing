import { callMe, MyException } from '../src/exception';

test('exception', () => {
  expect(() => callMe("Hakim")).toThrow();
  expect(() => callMe("Hakim")).toThrow(MyException);
  expect(() => callMe("Hakim")).toThrow('Exceptions Happening!');
});

test('exception not happen', () => {
  expect(callMe('Hanif')).toBe("OK");
});
