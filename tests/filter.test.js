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

test('Filters so that barney is not returned', () => {
   const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': false }
  ]

  expect(filter(users, ({ user }) => user === 'fred')).toStrictEqual([{
    'user': 'fred',   'active': false
  }]);
});

test('Numerical filtering', () => {
   const users = [
   { 'user': 'barney', 'id': 1 },
   { 'user': 'fred',   'id': 3 },
   { 'user': 'charlie',   'id': 0 }
  ]

  expect(filter(users, ({ id }) => id === 1)).toStrictEqual([
      { 'user': 'barney', 'id': 1 },
  ]);
});

test('Numerical filtering with different types', () => {
   const users = [
   { 'user': 'barney', 'id': 1 },
   { 'user': 'fred',   'id': 3 },
   { 'user': 'charlie',   'id': true }
  ]

  expect(filter(users, ({ id }) => id === 1)).toStrictEqual([
      { 'user': 'barney', 'id': 1 },
  ]);
});

test('Numerical filtering with Index', () => {
   const users = [
   { 'user': 'barney', 'id': 1 },
   { 'user': 'fred',   'id': 3 },
   { 'user': 'charlie',   'id': true }
  ]

  expect(filter(users, ({ }, index) => index === 1)).toStrictEqual([
      { 'user': 'fred',   'id': 3 },
  ]);
});

test('Empty object filtering', () => {
   const users = [
   { 'user': 'barney', 'id': 1 },
   { 'user': 'fred',   'id': 3 },
   { 'user': 'charlie',   'id': true },
   {},
   {}
  ]

  expect(filter(users, ({ id }) => id === 1)).toStrictEqual([
      { 'user': 'barney', 'id': 1 },
  ]);
});