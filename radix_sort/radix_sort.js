function getNumber(number, position) {
  let string = Number(Math.abs(number)).toString()
  return string[string.length - position - 1]
}

function numberCount(number) {
  return Number(Math.abs(number)).toString().length
}

function mostNumbers(arr) {
  let bigestNumber = 0;
  arr.forEach((number) => {
    const newNumber = numberCount(number)

    if(bigestNumber < newNumber) bigestNumber = newNumber;
  })

  return bigestNumber
}

function mostDigist(arr) {
  let bigestNumber = 0;
  
  for(let i = 0; i < arr.length; i++) {
    bigestNumber = Math.max(bigestNumber, digistCount(arr[i]))
  }

  return bigestNumber;
}

function getDigist(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digistCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function radixSort(numbers) {
  for(let i = 0; i < mostDigist(numbers); i++) {
    const bucket = Array.from({length: 10}, () => []);

    for(let k = 0; k < numbers.length; k++) {
      let digist = getDigist(numbers[k], i)

      bucket[digist].push(numbers[k])
    }

    numbers = [].concat(...bucket)
  }

  return numbers;
}

console.log(radixSort([124,1,6,325,7859,3892,6544]))


// console.log(getNumber(-5321, 3))
// console.log(getDigist(-5321, 3))
// console.log(numberCount(-1))
// console.log(digistCount(-1))

// console.log(mostNumbers([1,22,33,44,555,666,1,8888, 892314]))
// console.log(mostDigist([1,22,33,44,555,666,1,8888, 892314]))
