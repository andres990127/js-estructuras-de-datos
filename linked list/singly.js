1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value){
    const newNodo = new Node(value);
    this.tail.next = newNodo;
    this.tail = newNodo;
    this.length ++;
  }

  prepend(value){
    const newNodo = new Node(value);
    newNodo.next = this.head;
    this.head = newNodo;
    this.length ++;
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    const newNodo = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNodo;
    newNodo.next = holdingPointer;

    this.length ++;
    return this;
  } 

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new MySinglyLinkedList(1);