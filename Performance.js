/**************************************
 * PERFORMANCE *
 * ************************************/

// -- Haskell is cool <3
// fib n = fib (n - 1) + fib (n - 2)
// fib 1 = 1
// fib 0 = 1

const CACHE = {}

// /!\ Warning: memoization require f to be determinist!
const memoize = f => {
  return x => {
    if (!CACHE[x]) CACHE[x] = f(x)
    return CACHE[x]
  }
}

// Compute n-th number of fibonnaci sequence
// 1 1 2 3 5 8 13 21 34 55 ...
const fib = n => {
  if (n < 2) return 1
  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(fib)

for (let i = 0; i <= 100; i += 1)
  console.log(`fib(${i}) == ${fib(i)}`)
