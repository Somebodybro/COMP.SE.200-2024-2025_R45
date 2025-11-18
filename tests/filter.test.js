import filter from "../src/filter.js"

test('adds 1 + 2 to equal 3', () => {
  expect(filter(1, 2)).toBe(3);
});