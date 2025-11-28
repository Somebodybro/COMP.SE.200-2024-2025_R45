/**
 * @file Unit tests for isDate
 * Created by ChatGPT GPT-5 with the following prompt:
 * Making unit tests for an ecommerce application using Jest.
 * Please create unit tests for this function isDate: (copied isDate here)
 */

import isDate from '../src/isDate.js';
import getTag from '../src/.internal/getTag.js';
import isObjectLike from '../src/isObjectLike.js';
import nodeTypes from '../src/.internal/nodeTypes.js';

jest.mock('../src/.internal/getTag.js');
jest.mock('../src/isObjectLike.js');
jest.mock('../src/.internal/nodeTypes.js', () => ({
  isDate: null // default: simulate environment WITHOUT nodeIsDate
}));

describe('isDate - fallback implementation (no nodeIsDate)', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    nodeTypes.isDate = null; // ensure fallback path
    jest.resetModules();
  });

  test('returns true for a real Date object', () => {
    const date = new Date();
    isObjectLike.mockReturnValue(true);
    getTag.mockReturnValue('[object Date]');

    expect(isDate(date)).toBe(true);
    expect(isObjectLike).toHaveBeenCalledWith(date);
  });

  test('returns false for a string date', () => {
    const value = "2020-01-01";
    isObjectLike.mockReturnValue(false);

    expect(isDate(value)).toBe(false);
  });

  test('returns false when object is object-like but tag is not Date', () => {
    const obj = {};
    isObjectLike.mockReturnValue(true);
    getTag.mockReturnValue('[object Object]');

    expect(isDate(obj)).toBe(false);
  });

  test('returns false for null', () => {
    isObjectLike.mockReturnValue(false);
    expect(isDate(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    isObjectLike.mockReturnValue(false);
    expect(isDate(undefined)).toBe(false);
  });
});


/* -----------------------------------------------------------------------
   Tests for when nodeTypes.isDate EXISTS (Node environment path)
------------------------------------------------------------------------ */

describe('isDate - nodeIsDate implementation', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    nodeTypes.isDate = jest.fn(); // Enable native node path
  });

  test('uses nodeTypes.isDate when available', () => {
    const date = new Date();
    nodeTypes.isDate.mockReturnValue(true);

    expect(isDate(date)).toBe(true);
    expect(nodeTypes.isDate).toHaveBeenCalledWith(date);
  });

  test('returns false when nodeTypes.isDate returns false', () => {
    const value = {};
    nodeTypes.isDate.mockReturnValue(false);

    expect(isDate(value)).toBe(false);
  });
});
