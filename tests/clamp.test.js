import clamp from "../src/clamp";

// Clamp could be useful for product quantities, pricing

test('below minimum', () => {
    expect(clamp(1, 2, 10)).toBe(2)
})

test('above maximum', () => {
    expect(clamp(11, 1, 10)).toBe(10)
})

test('floats above max & below min', () => {
    expect(clamp(5.5, 6.1, 10.2)).toBe(6.1)
    expect(clamp(10.5, 1.2, 10.2)).toBe(10.2)
})

test('float value and integer boundary', () => {
    expect(clamp(0.01, 0, 10)).toBe(0.01)
})

test('value between boundary should return the value itself', () => {
    expect(clamp(6, 1, 10)).toBe(6)
})

test('negative value between boundaries', () => {
    expect(clamp(-5, -10, -1)).toBe(-5)

})

test('negative value under boundary', () => {
    expect(clamp(-15, -10, -1)).toBe(-10)
})

test('negative value over boundary', () => {
    expect(clamp(-1, -10, -2)).toBe(-2)
})

test('boundaries are NaN', () => {
    expect(clamp(5, NaN, NaN)).toBe(5)
})

test('value equal to lower boundary', () => {
    expect(clamp(5, 5, 10)).toBe(5)
})

test('value equal to upper boundary', () => {
    expect(clamp(10, 1, 10)).toBe(10)
})