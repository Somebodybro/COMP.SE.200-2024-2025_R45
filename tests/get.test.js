import get from "../src/get.js";


const obj = { a: [{ b: { c: 42 } }] }

test('get value with string', () => {
    expect(get(obj, 'a[0].b.c')).toBe(42)
})

test('get value with array', () => {
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(42)
})

test('get default val if undefined', () => {
    expect(get(obj, 'cba', 'default')).toBe('default')
})

test('get undefined if val not found and no defaultval included', () => {
    expect(get(obj, 'cba')).toBe(undefined)
})

test('get default value if object is null', () => {
    expect(get(null, 'a[0].b.c', 'default')).toBe('default')
})

test('get default value if object is undefined', () => {
    expect(get(undefined, 'a[0].b.c', 'default')).toBe('default')
})

test('get null when actual value is null', () => {
    const obj2 = { a: null }
    expect(get(obj2, 'a', 'default')).toBe(null)
})