/* 
* @文件说明: 使用下划线约定表示私有
* @Date: 2021-03-11 19:39:15  
* @Last Modified time: 2021-03-11 19:39:15  
*/
class Stack {
  constructor() {
    this.__count = 0;
    this.__items = [];
  }

  push(element) {
    this.__items[this.__count] = element;
    this.__count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.__count--;
    const result = this.__items[this.__count];
    delete this.__items[this.__count];
    return result;
  }

  peek() {
    return this.__items[this.__items.length - 1];
  }
  
  isEmpty() {
    return this.__count === 0;
  }

  size() {
    return this.__items.length;
  }
  
  clear() {
    return this.__items = [];
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.__items[0]}`;
    for (let i = 1; i < this.__count; i++) {
      objString = `${objString}, ${this.__items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log('stack', stack);