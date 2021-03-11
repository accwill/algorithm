/* 
* @文件说明: 双端队列
* @Date: 2021-03-11 20:13:19  
* @Last Modified time: 2021-03-11 20:13:19  
*/

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.count - 1];
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


module.exports = Deque;

function test() {

  const deque = new Deque();
  console.log(deque.isEmpty()); // 输出true
  deque.addBack('John');
  deque.addBack('Jack');
  console.log(deque.toString()); // John, Jack
  deque.addBack('Camila');
  console.log(deque.toString()); // John, Jack, Camila
  console.log(deque.size()); // 输出3
  console.log(deque.isEmpty()); // 输出false
  deque.removeFront(); // 移除John
  console.log(deque.toString()); // Jack, Camila
  deque.removeBack(); // Camila决定离开
  console.log(deque.toString()); // Jack
  deque.addFront('John'); // John回来询问一些信息
  console.log(deque.toString()); // John, Jack
  console.log();
  
}


