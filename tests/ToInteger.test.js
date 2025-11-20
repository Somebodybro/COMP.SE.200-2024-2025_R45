import ToInteger from "../src/toInteger.js"

test('sanity', () => {
   const input = 3

  expect(ToInteger(input)).toStrictEqual(3);
});

test('Rounding down', () => {
   const input = 3.2

  expect(ToInteger(input)).toStrictEqual(3);
});

test('Rounding up', () => {
   const input = 3.8

  expect(ToInteger(input)).toStrictEqual(3);
});

test('Infinity', () => {
   const input = Infinity

  expect(ToInteger(input)).toStrictEqual(Number.MAX_VALUE);
});


test('Very small', () => {
   const input = Number.MIN_VALUE

  expect(ToInteger(input)).toStrictEqual(0);
});

test('Negative large', () => {
   const input = -1 * Infinity

  expect(ToInteger(input)).toStrictEqual(-1.7976931348623157e+308);
});

test('Negative small', () => {
   const input = -1 * Number.MIN_VALUE

  expect(ToInteger(input)).toStrictEqual(0);
});

test('Negative sanity', () => {
   const input = -3

  expect(ToInteger(input)).toStrictEqual(-3);
});

test('Negative rounding', () => {
   const input = -3.3

  expect(ToInteger(input)).toStrictEqual(-3);
});

test('String input', () => {
   const input = '3.3'

  expect(ToInteger(input)).toStrictEqual(3);
});

test('negative string input', () => {
   const input = '-3.3'

  expect(ToInteger(input)).toStrictEqual(-3);
});

test('Zero', () => {
   const input = 0

  expect(ToInteger(input)).toStrictEqual(0);
});

test('null', () => {
   const input = null

  expect(ToInteger(input)).toStrictEqual(0);
});