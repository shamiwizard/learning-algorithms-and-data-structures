function fib(number) { // BigO(2 ^ n)
  if (number <= 2) return 1

  return fib(number - 1) + fib(number - 2)
}

console.log(fib(5))

let resultTable = {};

function fib2(number, memo=[]) { // BigO(n)
  if (memo[number]) return memo[number]
  if (number <= 2) return 1

  const result = fib2(number - 1, memo) + fib2(number - 2, memo)
  memo[number] = result
  
  return result
}

function fib_table(number) { // BigO(n)
  if(number <= 2) return 1

  let store = [0,1,1];

  for(let i = 3; i <= number; i++) {
   store[i] = store[i - 1] + store[i - 2]
  }

  return store[number]
}

console.log(fib2(45))
console.log(fib_table(45))

