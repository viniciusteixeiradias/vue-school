export const deepMerge = (a, b) => {
  if (Array.isArray(a)) {
    return [...a, ...b]
  }
  
  return Object.assign(a, b)
}