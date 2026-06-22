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
}

let bst = new BinerySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(4)
console.log(bst.remove(5))
console.log(bst)
console.log(bst.remove(10))
console.log(bst)
// bst.insert(4)
// bst.insert(1)
// bst.insert(11)
// bst.insert(9)
// bst.insert(3)
// bst.insert(2)
// bst.insert(8)
// bst.insert(12)

