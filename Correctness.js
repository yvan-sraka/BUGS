/* ************************************
 * CORRECTNESS
 * ************************************/

// Return maximum value of an array of positive or negative numbers
//
// Edge cases:
// - if the array is empty will throw "EMPTY_ARRAY" error
const max = T => {
  if (T.length == 0) throw "EMPTY_ARRAY"
  let currentMax = T[0]
  for (i of T)
    if (i > currentMax)
      currentMax = i
  return currentMax
}

/*************** Tests ***************/

console.assert(max([2, 42, 3, 1]) == 42)
console.assert(max([-2, -42, -3, -1]) == -1)
try { max([]) } catch {
  /* Handle error explicitly */
}
