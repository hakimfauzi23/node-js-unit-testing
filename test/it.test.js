import { sum, sumAll } from '../src/sum';

describe('when call sumAll([5,5,5,5,5,5])', () => {
  // it function is alias for test function
  it('should get 30', () => {
    expect(sumAll([5, 5, 5, 5, 5, 5])).toBe(30);
  });
});
