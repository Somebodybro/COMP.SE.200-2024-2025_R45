import isEmpty from '../src/isEmpty.js';
// isEmpty useful for checking empty carts, or if filter results are empty

test('return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
})

test('return true for empty array and object', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
})

test('return true for empty set and map', () => {
    expect(isEmpty(new Set())).toBe(true)
    expect(isEmpty(new Map())).toBe(true)
})

test('return false for non-empty array and object', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty({ a: 1 })).toBe(false)
})

test('return false for non-empty set and map', () => {
    const set = new Set()
    set.add(1)
    expect(isEmpty(set)).toBe(false)

    const map = new Map()
    map.set('a', 1)
    expect(isEmpty(map)).toBe(false)
})

test('return true for primitives', () => {
    expect(isEmpty(123)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(1.2)).toBe(true)
})

test('return false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false)
})
