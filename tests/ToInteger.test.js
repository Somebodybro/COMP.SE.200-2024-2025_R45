import ToInteger from "../src/toInteger.js"

test('sanity', () => {
   const input = 3

  expect(ToInteger(input)).toEqual(3);
});