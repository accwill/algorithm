class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  enqueue(elemnt) {
    this.items[this.count] = elemnt;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = [];
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

module.exports = Queue;

function test() {
  const queue = new Queue();
  queue.enqueue('John');
  queue.enqueue('Jack');
  console.log(queue.isEmpty());
  queue.enqueue('Camila');
  console.log(queue.toString());
  queue.dequeue(); // 移除John
  queue.dequeue(); // 移除Jack
  console.log(queue.toString()); // Camila
  
  console.log(queue.items.length, queue.size());
}