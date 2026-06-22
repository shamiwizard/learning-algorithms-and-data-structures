class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class SinlglyLinckedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this
    }

    pop() {
        if (!this.head)
            return undefined;

        let current = this.head;
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head)
            return undefined;

        let currentHead = this.head

        if (currentHead.next) {
            this.head = currentHead.next
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length -= 1;

        return currentHead;
    }

    unshift(value) {
        let newNode = new Node(value)

        if (this.head) {
            newNode.next = this.head
            console.log("newNode: ", newNode)
            this.head = newNode
        } else {
            this.head = newNode;
            this.tail = this.head
        }

        this.length += 1;

        return this.head
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        let counter = 0;
        let node = this.head;

        while (counter < index) {
            node = node.next
            counter++;
        }

        return node;
    }

    set(index, value) {
        let currentNode = this.get(index)

        if (currentNode) {
            currentNode.value = value
            return true
        }

        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length)
            return false
        if (index === 0) {
            return this.unshift(value) ? true : false
        }

        if (index === this.length) {
            return this.push(value) ? true : false
        }

        let foundNode = this.get(index - 1);
        let newNode = new Node(value)

        newNode.next = foundNode.next
        foundNode.next = newNode

        this.length += 1;

        return true
    }

    remove() {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return !!this.shift()
        if (index === this.length)
            return !!this.pop()

        let foundNode = get(index - 1);
        let removeNode = foundNode.next;

        foundNode.next = removeNode.next;

        return removeNode;
    }
}

const first = new Node("Hello")
first.next = new Node("World")
first.next.next = new Node("It is me")
const list = new SinlglyLinckedList()
list.push("Hi")
list.push("world")
list.push("test")
list.push("test 2")
console.log(list)
console.log(list.get(0))
//console.log(list.set(3, "Test set"))
//console.log(list.set(4, "Test set"))
console.log(list.insert(5, "Test insert"))
console.log(list.get(2))
console.log(list)
//list.pop()
//list.pop()
//list.pop()
//console.log(list.pop())
//console.log(list.pop())
//console.log(list.shift())
//console.log(list.shift())
//console.log(list.shift())
//console.log(list.shift())
//console.log(list.shift())
//console.log(list.unshift(12))
//console.log(list)
//console.log(list.unshift("Start"))
//console.log(list.unshift("more start"))
//console.log(list)
