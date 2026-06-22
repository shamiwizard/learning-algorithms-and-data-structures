const pivotHelper = require("./pivot_function");

let count = 0

function quickSort(array, start = 0, end = array.length - 1) {
  if(start < end) {
  count++;
    let pivotIndex = pivotHelper(array, start, end)

    console.log(`${"  ".repeat(count)}left `, start, pivotIndex - 1, array)
    quickSort(array, start, pivotIndex - 1)

    
    console.log(`${"  ".repeat(count)}right `, pivotIndex + 1, end, array)
    quickSort(array, pivotIndex + 1, end)
  }

  return array
}

console.log(quickSort([8,2,4,6,3,5,1]))
// [2,4,6,3,5,1,8] 6
// [1,2,4,6,3,5,8] 1
