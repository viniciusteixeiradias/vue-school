import { test, expect } from 'vitest'
import { deepMerge } from '../src'

test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: 'Vinicius'
    },
    {
      github: 'viniciusteixeiradias'
    }
  )
    
  expect(merged).toEqual({
    name: 'Vinicius',
    github: 'viniciusteixeiradias'
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Vinicius',
      github: 'unknown'
    },
    {
      github: 'viniciusteixeiradias',
      twitter: 'vinicius'
    }
  )
    
  expect(merged).toEqual({
    name: 'Vinicius',
    github: 'viniciusteixeiradias',
    twitter: 'vinicius'
  })
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['vue', 'react'],
    ['svelte', 'solid']
  )
    
  expect(merged).toEqual([
    'vue', 'react', 'svelte', 'solid'
  ])
})