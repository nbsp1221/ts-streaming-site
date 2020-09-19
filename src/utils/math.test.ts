import * as math from './math';

describe('math utils', () => {
  it('round', () => {
    expect(math.round(0.123456789, 1)).toBe(0.1);
    expect(math.round(0.123456789, 2)).toBe(0.12);
    expect(math.round(0.123456789, 3)).toBe(0.123);
    expect(math.round(0.123456789, 4)).toBe(0.1235);
    expect(math.round(0.123456789, 5)).toBe(0.12346);
    expect(math.round(0.123456789, 6)).toBe(0.123457);
    expect(math.round(0.123456789, 7)).toBe(0.1234568);
    expect(math.round(0.123456789, 8)).toBe(0.12345679);
  });
});