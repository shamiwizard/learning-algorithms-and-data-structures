class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new Node(value);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;

    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let oldTail = this.tail;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if(this.length === 0) return undefined;

    let oldHead = this.head;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    
    let middle = Math.floor(this.length / 2)
    let foundNode, counter;

    if(index > middle) {
      counter = this.length - 1
      foundNode = this.tail
      while(counter !== index) {
        foundNode = foundNode.prev
        counter--;
      }
    } else {
      counter = 0
      foundNode = this.head

      while(counter !== index) {
        foundNode = foundNode.next
        counter++;
      }
    }

    return foundNode;
  }

  set(index, val) {
    if(index < 0 || index > this.length) return false
    let newNode = new Node(val)
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }else if(index === 0) {
      return !!this.unshift(val)
    } else if(index === this.length) {
      return !!this.push(val)
    }
    let prevNode = this.get(index - 1)
    newNode.prev = prevNode.prev
    prevNode.prev = newNode
    newNode.next = prevNode
    this.length++;

    return true
  }
}

let dls = new DoubleLinkedList()
dls.unshift(1)
dls.unshift(2)
dls.unshift(3)
dls.push(4)
dls.push(5)
dls.set()
console.log(dls)


