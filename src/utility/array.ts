export function integerArray(start: number, length: number) {
  if(length < 0) { throw new Error('Array length must be greater than 0')}
  return [...Array(length).keys()].map(i => i + start)
}
