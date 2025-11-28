import slice from '../src/slice';

// Used in chunk.js (product pagination). useful for a lot of things

const array = [1, 2, 3, 4, 5]

test('no start, no end provided returns whole array', () => {
    expect(slice(array)).toEqual([1, 2, 3, 4, 5])
})

test('only positive start provided', () => {
    expect(slice(array, 2)).toEqual([3, 4, 5])
})

test('only negative start provided', () => {
    expect(slice(array, -2)).toEqual([4, 5])
})

test('positive start and end provided', () => {
    expect(slice(array, 1, 4)).toEqual([2, 3, 4])
})

test('negative start and positive end provided', () => {
    expect(slice(array, -4, 4)).toEqual([2, 3, 4])
})

test('positive start and negative end provided', () => {
    expect(slice(array, 1, -1)).toEqual([2, 3, 4])
})

test('negative start and end provided', () => {
    expect(slice(array, -4, -1)).toEqual([2, 3, 4])
})

test('start greater than end', () => {
    expect(slice(array, 4, 2)).toEqual([])
})

test('end greater than array length', () => {
    expect(slice(array, 2, 10)).toEqual([3, 4, 5])
})

test('empty array', () => {
    expect(slice([], 2, 4)).toEqual([])
})

test('null or undefined array', () => {
    expect(slice(null, 2, 4)).toEqual([])
    expect(slice(undefined, 2, 4)).toEqual([])
})