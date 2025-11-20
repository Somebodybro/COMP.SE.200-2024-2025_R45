import difference from '../src/difference.js'

test('sanity', () => {
   const first = [1]
   const second = [1]
  expect(difference(first,second)).toStrictEqual([]);
});

test('multi sanity', () => {
   const first = [1]
   const second = [1]
   const third = [1]
  expect(difference(first,second, third)).toStrictEqual([]);
});

test('sanity2', () => {
   const first = [1, 2]
   const second = [1]
  expect(difference(first,second)).toStrictEqual([2]);
});


test('multi sanity2', () => {
   const first = [1, 2]
   const second = [1]
   const third = [1, 3]
  expect(difference(first,second, third)).toStrictEqual([2]);
});

test('multi sanity3', () => {
   const first = [1, 2]
   const second = [3]
   const third = [1, 3]
  expect(difference(first,second, third)).toStrictEqual([2]);
});

test('multiple objects', () => {
    const obj1 = {is:'here'}
    const obj2 = {isNotOthers: 'yes'}
   const first = [1, {}, obj1, obj2, {dup:'dup'}, {unique:'unique'}]
   const second = [3, {}, {dup: 'dup'}]
   const third = [1, 3, obj1]
  expect(difference(first,second, third)).toStrictEqual([obj2, {unique:'unique'}]);
});

test('strings', () => {
   const first = [1, '2', '3']
   const second = [3, '3']
   const third = [1, 2]
  expect(difference(first,second, third)).toStrictEqual(['2']);
});

test('floats', () => {
   const first = [1, 2.5, 3.0, 4.2]
   const second = [3, 4.2]
   const third = [1, 2]
  expect(difference(first,second, third)).toStrictEqual([2.5]);
});

test('many arrays', () => {
    const first = [1, 2, 3, 4]
    const arrays = []
    for (let i = 0; i < 200; i++) {
        arrays[i] = [1]
    }
    const arrays2 = []
    for (let i = 0; i < 200; i++) {
        arrays2[i] = [3]
    }
    expect(difference(first,...arrays, ...arrays2)).toStrictEqual([2,4]);
});