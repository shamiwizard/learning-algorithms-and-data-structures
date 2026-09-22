function areThereDuplicates(...args) {
  let counter = new Set();

  for(let value of args) {
    if(counter.has(value)) {
      return true
    } else {
      counter.add(value)
    }
  }

  return false
}

console.log("false :", areThereDuplicates(1, 2, 3))
console.log("true :", areThereDuplicates(1, 2, 2))
console.log("true :", areThereDuplicates('a', 'b', 'c', 'a'))
