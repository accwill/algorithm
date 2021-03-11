/* 
* @文件说明: 使用Symbol作为key，表示私有
* @Date: 2021-03-11 19:39:36  
* @Last Modified time: 2021-03-11 19:39:36  
*/
const items = Symbol('stackItems');
const count = Symbol('stackCount');

class Stack {
  constructor() {
    this[count] = 0;
    this[items] = [];
  }

  push(element) {
    this[items][this[count]] = element;
    this[count]++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this[count]--;
    const result = this[items][this[count]];
    delete this[items][this[count]];
    return result;
  }

  peek() {
    return this[items][this[items].length - 1];
  }
  
  isEmpty() {
    return this[count] === 0;
  }

  size() {
    return this[items].length;
  }
  
  clear() {
    return this[items] = [];
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this[items][0]}`;
    for (let i = 1; i < this[count]; i++) {
      objString = `${objString}, ${this[items][i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));

let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols)
console.log(Object.keys(stack));
console.log('stack', stack);