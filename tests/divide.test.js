import Divide from "../src/divide.js"

test('sanity', () => {
   const dividend = 3
   const divider = 3
  expect(Divide(dividend,divider)).toStrictEqual(1);
});

test('sanity smaller than one', () => {
   const dividend = 1
   const divider = 3
  expect(Divide(dividend,divider)).toStrictEqual(1/3);
});


test('sanity bigger than one', () => {
   const dividend = 3
   const divider = 2
  expect(Divide(dividend,divider)).toStrictEqual(3/2);
});


test('to int divide', () => {
   const dividend = 4
   const divider = 2
  expect(Divide(dividend,divider)).toStrictEqual(2);
});

test('divide with floats', () => {
   const dividend = 4.0
   const divider = 2.0
  expect(Divide(dividend,divider)).toStrictEqual(2);
});

test('divide with string', () => {
   const dividend = '4.0'
   const divider = '2.0'
  expect(Divide(dividend,divider)).toStrictEqual(2);
});

test('divide with zero', () => {
   const dividend = 1
   const divider = 0
  expect(Divide(dividend,divider)).toStrictEqual(NaN);
});