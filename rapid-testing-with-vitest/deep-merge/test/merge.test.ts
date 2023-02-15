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

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Vinicius',
      accounts: {
        github: 'unknown'
      }
    },
    {
      accounts: {
        twitter: 'vinicius'
      }
    }
  )
    
  expect(merged).toEqual({
    name: 'Vinicius',
    accounts: {
      github: 'unknown',
      twitter: 'vinicius'
    }
  })
})

test('deep merge with overlaps snapshot', () => {
  const merged = deepMerge(
    {
      name: 'Vinicius',
      accounts: {
        github: 'unknown'
      }
    },
    {
      accounts: {
        twitter: 'vinicius'
      }
    }
  )
    
  expect(merged).toMatchSnapshot()
})

test('throws errors on merging two different types', () => {
  expect(() => deepMerge(
    ['foo', 'bar'],
    { foo: 'bar' }
  )).toThrowError('Error: Can not merge two different types')


})