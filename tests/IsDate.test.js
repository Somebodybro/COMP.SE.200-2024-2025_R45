import isDate from "../src/isDate.js"

test('Insanity', () => {
    const input = 'Mon April 23 2012'

  expect(isDate(input)).toEqual(false);
});

test('Insanity number', () => {
   const input = 1678902159

  expect(isDate(input)).toEqual(false);
});

test('Insanity object', () => {
  const  input = {}

  expect(isDate(input)).toEqual(false);
});

test('Insanity fooler', () => {
   const input = {now: ()=>{}, getTime: () => {}, getDate: () => {}}

  expect(isDate(input)).toEqual(false);
});

test('Sanity', () => {
  const  input = new Date

  expect(isDate(input)).toEqual(true);
});