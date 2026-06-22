function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let index = start;

  for(let i = start + 1; i <= end;i++){
    if(pivotValue >= arr[i]) { 
      index++;

      const temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }

  arr[start] = arr[index]
  arr[index] = pivotValue

  return index
}

module.exports = pivotHelper;

