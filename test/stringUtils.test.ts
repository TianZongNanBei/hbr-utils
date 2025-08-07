import { test, expect } from 'vitest'
import { toCamelCase } from '../src/stringUtils.ts'

test('toCamelCase function', () => {
  expect(toCamelCase('hello_world')).toBe('helloWorld')
  expect(toCamelCase('my_user_name')).toBe('myUserName')
})
