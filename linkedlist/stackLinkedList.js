const { DoublyLinkedList } = require('./doubleLinkedList');


console.log('123')

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1)?.element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items = new DoublyLinkedList();
  }

  toString() {
    return this.items.toString();
  }
}

const list = new StackLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log('list.size', list.size());
console.log('list.peek', list.peek());

list.pop();
list.pop();
list.pop();
list.pop();

console.log('list', list.size());

console.log();