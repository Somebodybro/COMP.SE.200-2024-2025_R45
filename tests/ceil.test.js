import ceil from '../src/ceil.js';
// Ceil useful for pricing calculations, rounding up

test('round up, default precision', () => {
    expect(ceil(1.006)).toBe(2)
})

test('round up, default precision, negative number', () => {
    expect(ceil(-1.006)).toBe(-1)
})

test('round up, higher precisions', () => {
    expect(ceil(1.004, 2)).toBe(1.01)
    expect(ceil(1.0044, 3)).toBe(1.005)
    expect(ceil(1.00044444, 7)).toBe(1.0004445)
})

test('round up, higher precisions, negative number', () => {
    expect(ceil(-1.567, 2)).toBe(-1.56)
    expect(ceil(-1.5678, 3)).toBe(-1.567)
    expect(ceil(-1.00044444, 7)).toBe(-1.0004444)
})

test('round up, negative precisions', () => {
    expect(ceil(1234, -2)).toBe(1300)
    expect(ceil(989, -1)).toBe(990)
    expect(ceil(1234, -3)).toBe(2000)
    expect(ceil(123456789, -7)).toBe(130000000)
})

test('round up, negative precisions, negative number', () => {
    expect(ceil(-1234, -2)).toBe(-1200)
    expect(ceil(-999, -1)).toBe(-990)
    expect(ceil(-1234, -3)).toBe(-1000)
    expect(ceil(-123456789, -7)).toBe(-120000000)
})

test('input is NaN or null or undefined', () => {
    expect(ceil(NaN)).toBe(NaN)
    expect(ceil(null)).toBe(0)
    expect(ceil(undefined)).toBe(NaN)
})

test('precision is NaN or null or undefined or zero', () => {
    expect(ceil(5, NaN)).toBe(5)
    expect(ceil(5, null)).toBe(5)
    expect(ceil(5, undefined)).toBe(5)
    expect(ceil(5, 0)).toBe(5)
})