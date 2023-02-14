import { test, expect } from 'vitest'

const sum = (...nums) => {
  return nums.reduce((a, b) => a + b, 0)
}

test('1 + 1', () => {
  expect(sum(1, 1)).toEqual(2)
})

test('1 + 2 + 3', () => {
  expect(sum(1, 2, 3)).toEqual(6)
})

test('10 numbers', () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
})

test('10 numbers', () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55)
})

test('1 number', () => {
  expect(sum(100)).toEqual(100)
})

test('0 number', () => {
  expect(sum()).toEqual(0)
})