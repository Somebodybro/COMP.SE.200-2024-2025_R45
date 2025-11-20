import filter from "../src/filter.js"

test('Filters so that only barney is returned', () => {
   const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': false }
  ]

  expect(filter(users, ({ active }) => active)).toStrictEqual([{
    'user': 'barney', 'active': true
  }]);
});