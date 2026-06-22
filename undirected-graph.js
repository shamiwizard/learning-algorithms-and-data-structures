class UnDirGraph {
  constructor() {
    this.vertices = {}
  }

  addVertex(name) {
    if (!this.vertices[name]) {
      this.vertices[name] = []
    }

    return this
  }

  addEdge(vertex1, vertex2) {
    const firstVertex = this.vertices[vertex1]
    const secondVertex = this.vertices[vertex2]

    if(!firstVertex || !secondVertex || (vertex1 === vertex2)) return undefined

    if(!firstVertex.includes(vertex2)) {
      firstVertex.push(vertex2)
    }

    if(!secondVertex.includes(vertex1)) {
      secondVertex.push(vertex1)
    }

    return this
  }

  removeEdge(v1, v2) {
    const firstVertex = this.vertices[v1]
    const secondVertex = this.vertices[v2]

    if(!firstVertex || !secondVertex || (v1 === v2)) return undefined

    this.vertices[v1] = firstVertex.filter(v => v !== v2)
    this.vertices[v2] = secondVertex.filter(v => v !== v1)

    return this
  }
  removeVertex(vertex){
    const edges = this.vertices[vertex]
    if(!edges) return undefined

    edges.forEach((edge) => {
      this.removeEdge(vertex, edge)
    })

    delete this.vertices[vertex]
  }

  dft(vertex) {
    const visited = {};
    const result = [];

    const travers = (v) => {
      if(!v || visited[v]) return;

      visited[v] = true;
      result.push(v)

      this.vertices[v].forEach((edge) => {
        if(visited[edge]) return;
        
        travers(edge)
      })
    }

    travers(vertex)

    return result;
  }
  dfti(vertex) {
    const visited = {};
    const result = [];
    let stack = [vertex];

    while(stack.length > 0) {
      const v = stack.pop()
      
      if(visited[v]) continue;
      visited[v] = true;
      result.push(v)
      stack.push(...this.vertices[v])
    }

    return result;
  }
  bft(vertex) {
    const visited = {};
    const result = []
    const queue = [vertex];
    let currentVertex;

    while(queue.length > 0) {
      currentVertex = queue.shift();

      if(visited[currentVertex]) continue;

      visited[currentVertex] = true;
      result.push(currentVertex)
      queue.push(...this.vertices[currentVertex])
    }

    return result;
  }
}

const g = new UnDirGraph()

g.addVertex("A").addVertex("B").addVertex("C").addVertex("D").addVertex("E").addVertex("F")
g.addEdge("A", "B").addEdge("A", "C").addEdge("B", "D").addEdge("C","E").addEdge("D","E").addEdge("D", "F").addEdge("E", "F")

console.log(g.dft("A"))
console.log(g.dfti("A"))
console.log(g.bft("A"))

console.log(g)
