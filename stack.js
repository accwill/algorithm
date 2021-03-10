class Stack {
  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {

  }

  size() {
    return this.items.length;
  }
  
  clear() {
    return this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log('stack', stack)