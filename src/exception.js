export class MyException extends Error {}

export const callMe = (name) => {
  if (name === 'Hakim') {
    throw new MyException('Exceptions Happening!');
  } else {
    return 'OK';
  }
};
