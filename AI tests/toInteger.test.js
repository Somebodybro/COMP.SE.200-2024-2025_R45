import toInteger from '../src/toInteger.js';
import toFinite from '../src/toFinite.js';

/*
Created by ChatGPT GPT-5 with the following prompt:
Making unit tests for an ecommerce application using Jest.
Please create unit tests for this function toInteger: (copied toInteger here)
*/

// Mock toFinite so we test toInteger logic independently
jest.mock('../src/toFinite.js');

describe('toInteger (AI)', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('converts a positive float to an integer', () => {
    toFinite.mockReturnValue(3.2);
    expect(toInteger(3.2)).toBe(3);
  });

  test('converts a string number to integer', () => {
    toFinite.mockReturnValue(3.2);
    expect(toInteger('3.2')).toBe(3);
  });

  test('returns 0 for Number.MIN_VALUE', () => {
    toFinite.mockReturnValue(Number.MIN_VALUE); // extremely small number
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  test('handles Infinity by returning largest finite number', () => {
    const max = 1.7976931348623157e+308;
    toFinite.mockReturnValue(max);
    expect(toInteger(Infinity)).toBe(max);
  });

  test('returns negative integer for negative floats', () => {
    toFinite.mockReturnValue(-4.7);
    expect(toInteger(-4.7)).toBe(-4);
  });

  test('returns the number if it is already an integer', () => {
    toFinite.mockReturnValue(10);
    expect(toInteger(10)).toBe(10);
  });

  test('removes decimal part properly when remainder exists', () => {
    toFinite.mockReturnValue(5.999);
    expect(toInteger(5.999)).toBe(5);
  });

  test('returns 0 when toFinite returns 0', () => {
    toFinite.mockReturnValue(0);
    expect(toInteger(null)).toBe(0);
  });

  test('handles NaN correctly (NaN % 1 is NaN → remainder truthy → NaN - NaN = NaN)', () => {
    toFinite.mockReturnValue(NaN);
    expect(toInteger(NaN)).toBeNaN();
  });

});
