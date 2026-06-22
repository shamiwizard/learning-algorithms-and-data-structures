class MaxBineryHeap {
  constructor(){
    this.values = []
  }

  insert(val) {
    let index = this.values.push(val) - 1
    
    while(index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      
      if(this.values[parentIndex] && this.values[parentIndex] < val) {
        this.values[index] = this.values[parentIndex]
        this.values[parentIndex] = val;
        index = parentIndex;
      } else {
        index = 0
      }
    }

    return this
  }

  extractMax() {
    const removedElement = this.values[0];
    this.values[0] = this.values.pop();
    let index = 0;
    
    while(index < this.values.length - 1) {
      const leftIndex = this.leftNodeIndex(index)
      const rightIndex = this.rightNodeIndex(index)
      const leftValue = this.values[leftIndex]
      const rightValue = this.values[rightIndex]

      if(rightValue && leftValue) {
        if(rightValue > leftValue) {
          this.values[rightIndex] = this.values[index]
          this.values[index] = rightValue
          index = rightIndex
        } else {
          this.values[leftIndex] = this.values[index]
          this.values[index] = leftValue
          index = leftIndex
        }
      } else if(leftValue && leftValue > this.values[index]) {
        this.values[leftIndex] = this.values[index]
        this.values[index] = leftValue
        index = leftIndex
      } else if(rightValue && rightValue > this.values[index]) {
          this.values[rightIndex] = this.values[index]
          this.values[index] = rightValue
          index = rightIndex
      } else {
        index = this.values.length
      }
    }

    return removedElement;
  }

  leftNodeIndex(index) { return (2*index) + 1 }

  rightNodeIndex(index) { return (2*index) + 2 }

  remove(index) {
  }
}

const mbh = new MaxBineryHeap()

mbh.insert(60).insert(20).insert(15).insert(21).insert(89).insert(91).insert(87)
console.log(mbh.values)
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
console.log(mbh.values)
