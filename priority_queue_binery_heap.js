class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    let childIndex = this.values.push(newNode) - 1

    while(childIndex > 0) {
      const parentIndex = this.parentIndex(childIndex)
      const parentPriority = this.values[parentIndex].priority

      if(parentPriority > newNode.priority) {
        this.values[childIndex] = this.values[parentIndex]
        this.values[parentIndex] = newNode
        childIndex = parentIndex
      } else {
        childIndex = parentIndex
      }
    }

    return this;
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  dequeue() {
    const dequeueNode = this.values[0]
    if(this.values.length === 1) {
      return this.values.pop();
    }
    this.values[0] = this.values.pop()
    let parentIndex = 0;

    while(parentIndex < this.values.length) {
      const leftChildIndex = this.leftChildIndex(parentIndex)
      const rightChildIndex = this.rightChildIndex(parentIndex)
      const leftNode = this.values[leftChildIndex]
      const rightNode = this.values[rightChildIndex]
      const parentNode = this.values[parentIndex]

      if(leftNode && rightNode) {
        if(leftNode.priority < rightNode.priority && leftNode.priority < parentNode.priority) {
          this.values[leftChildIndex] = parentNode
          this.values[parentIndex] = leftNode
          parentIndex = leftChildIndex
        } else if (rightNode.priority < parentNode.prioirty) {
          this.values[rightChildIndex] = this.values[parentIndex]
          this.values[parentIndex] = rightNode
          parentIndex = rightChildIndex
        } else {
          parentIndex = this.values.length
        }
      } else if(leftNode && leftNode.priority < parentNode.priority) {
        this.values[leftChildIndex] = parentNode
        this.values[parentIndex] = leftNode
        parentIndex = leftChildIndex
      } else if(rightNode && rightNode.priority < parentNode.prioirty) {
        this.values[rightChildIndex] = this.values[parentIndex]
        this.values[parentIndex] = rightNode
        parentIndex = rightChildIndex
      } else {
        parentIndex = this.values.length
      }
    }

    return dequeueNode;
  }

  leftChildIndex(parentIndex) { return (2 * parentIndex) + 1 }

  rightChildIndex(parentIndex) { return (2 * parentIndex) + 2 }

}

const pq = new PriorityQueue()
pq.enqueue("midium", 5).enqueue("low", 1).enqueue("critical",4).enqueue("critical 2", 2).enqueue("low", 3)
console.log(pq)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq)
