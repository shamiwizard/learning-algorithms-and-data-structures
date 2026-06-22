class Node {
  constructor(val) {
    this.val = val
    this.left = null;
    this.right = null;
  }
}

class BinerySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val)

    if(!this.root) {
      this.root = newNode
    } else {
      this.place(this.root, newNode)
    }

    return this
  }

  find(val) {
    let currentNode = this.root;

    while(currentNode) {
      const currentVal = currentNode.val;
      console.log(currentVal)
      if(currentVal === val) {
        return currentNode
      } else if(currentVal > val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return undefined
  }

  place(currentNode, newNode) {
    if(currentNode.val === newNode.val) return;

    if(currentNode.val > newNode.val) {
      if(currentNode.left) {
        return this.place(currentNode.left, newNode)
      } else {
        currentNode.left = newNode
        return
      }
    } else {
      if(currentNode.right) {
        return this.place(currentNode.right, newNode)
      } else {
        currentNode.right = newNode
        return
      }
    }

    return
  }

  remove(value) {
    let removeNode = this.root;
    let prevNode, prevSide;

    while(removeNode) {
      if(removeNode.val === value) {
        break;
      } else if (value > removeNode.val) {
        prevNode = removeNode
        prevSide = "right"
        removeNode = removeNode.right;
      } else {
        prevNode = removeNode
        prevSide = "left"
        removeNode = removeNode.left;
      }
    }

    let replaceNode, prevReplaceNode;


    if(removeNode.right) {
      replaceNode = removeNode.right

      while(replaceNode.left) {
        prevReplaceNode = replaceNode
        replaceNode = replaceNode.left
      }
    } else if(removeNode.left) {
      replaceNode = removeNode.left
    }


    if(removeNode === this.root) {
      this.root = replaceNode

      if(replaceNode) {
        replaceNode.left = removeNode.left
        replaceNode.right = removeNode.right
      }
    }

    removeNode.left = null;
    removeNode.right = null;

    return removeNode
  }

  travers() {
    const queue = [this.root];
    const visited = [];

    while(queue.length) {
      const element = queue.shift()
      visited.push(element.val)
      
      if(element.left) queue.push(element.left)
      if(element.right) queue.push(element.right)
    }

    return visited
  }

  preOrder(node = this.root) {
    if(!node) return [];

    return [node.val, ...this.preOrder(node.left), ...this.preOrder(node.right)]
  }
  DFSPostOrder(node = this.root) {
    if(!node) return [];

    return [...this.DFSPostOrder(node.left), ...this.DFSPostOrder(node.right), node.val]
  }
  DFSInOrder(node = this.root) {
    if(!node) return [];

    return [...this.DFSInOrder(node.left), node.val, ...this.DFSInOrder(node.right)]
  }
}

const bst = new BinerySearchTree()
bst.insert(10).insert(6).insert(3).insert(8).insert(15).insert(20)

console.log(bst.travers())
console.log(bst.preOrder())
console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())
