class WeightedGraph {
  constructor() {
    this.vertices = {}
  }

  addVertex(name) {
    if(this.vertices[name]) return;

    this.vertices[name] = [];

    return this;
  }

  addEdge(vertex1, vertex2, weight) {
    const v1 = this.vertices[vertex1]
    const v2 = this.vertices[vertex2]

    if(!v1 || !v2) return; 

    v1.push({vertex: vertex2, weight})
    v2.push({vertex: vertex1, weight})

    return this;
  }

  findShortWay(v1, v2) {
    const prev = {};
    const dist = {};
    const queue = new PriorityQueue()
    queue.enqueue(v1, 0)
    prev[v1] = null;
    dist[v1] = 0;

    while(queue.queue.length > 0) {
      const currentVertex = queue.dequeue();
      const edges = this.vertices[currentVertex.value];

      edges.forEach((edge) => {
        const newWeight = currentVertex.priority + edge.weight;
        const oldWeight = dist[edge.vertex]

        if(oldWeight === undefined || oldWeight > newWeight) {
          prev[edge.vertex] = currentVertex.value
          dist[edge.vertex] = newWeight

          queue.enqueue(edge.vertex, newWeight)
        }
      })
    }

    const result = [];
    let val = v2;

    while(val) {
      result.push(val);
      val = prev[val];
    }

    return result.reverse();
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    let newNodeIndex = this.queue.push(newNode) - 1;
    
    while(newNodeIndex > 0) {
      const childNode = this.queue[newNodeIndex];
      const parentIndex = this.parentIndex(newNodeIndex);
      const parentNode = this.queue[parentIndex];

      if(childNode.priority < parentNode.priority) {
        this.queue[newNodeIndex] = parentNode;
        this.queue[parentIndex] = childNode;
        newNodeIndex = parentIndex;
      } else {
        newNodeIndex = 0;
      }
    }

    return this;
  }

  dequeue() {
    const dequeueNode = this.queue[0];
    const newRoot = this.queue.pop()

    if (this.queue.length === 0) return dequeueNode;

    this.queue[0] = newRoot;
    let index = 0;

    while(index < this.queue.length - 1) {
      const leftChildIndex = this.leftChildIndex(index)
      const leftNode = this.queue[leftChildIndex]
      const rightChildIndex = this.rightChildIndex(index)
      const rightNode = this.queue[rightChildIndex]
  
      if(leftNode && rightNode) {
        if(leftNode.priority < rightNode.priority && leftNode.priority < this.queue[index].priority) {
          this.queue[leftChildIndex] = this.queue[index];
          this.queue[index] = leftNode;

          index = leftChildIndex;
        } else if (rightNode.priority < this.queue[index]) {
          this.queue[rightChildIndex] = this.queue[index];
          this.queue[index] = rightNode;

          index = rightChildIndex;
        } else {
          index = this.queue.length
        }
      } else if(leftNode && leftNode.priority < this.queue[index].priority) {
          this.queue[leftChildIndex] = this.queue[index];
          this.queue[index] = leftNode;

          index = leftChildIndex;
      } else if(rightNode && rightNode.priority < this.queue[index].priority) {
          this.queue[rightChildIndex] = this.queue[index];
          this.queue[index] = rightNode;

          index = rightChildIndex;
      } else {
        index = this.queue.length
      }
    }

    return dequeueNode;
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  leftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }

  rightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }
}

const graph = new WeightedGraph();

["A","B","C","D","E","F"].forEach((v) => {
  graph.addVertex(v)
});
[
  { v1: "A", v2: "C", w: 2 },
  { v1: "A", v2: "B", w: 4 },
  { v1: "C", v2: "D", w: 2 },
  { v1: "C", v2: "F", w: 4 },
  { v1: "B", v2: "E", w: 3 },
  { v1: "D", v2: "E", w: 3 },
  { v1: "D", v2: "F", w: 1 },
  { v1: "F", v2: "E", w: 1 }
].forEach((e) => {
  graph.addEdge(e.v1, e.v2, e.w)
});
console.log("find: ", graph.findShortWay("A", "E"))

// console.log(graph.vertices)
// console.log(pq.queue)
