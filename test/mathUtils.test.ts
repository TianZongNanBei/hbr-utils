import { test, expect } from 'vitest'
import { add } from '../src/mathUtils.ts'

test('add function', () => {
  expect(add(1, 2)).toBe(3)
  expect(add(5, -1)).toBe(4)
})
