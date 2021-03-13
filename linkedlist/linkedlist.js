
const defaultEqual = (a, b) => {
  return a === b;
};


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor(equalFn = defaultEqual) {
    this.count = 0;
    this.head = null;
    this.equalFn = equalFn;
  }


  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current?.next) { // 获取最后一项
        current = current.next;
      }
      // 将next赋值为新元素，建立链接
      current.next = node;
    }
    this.count++;
  }

  insert(element, position) {
    if (position < 0 || position > this.count) {
      return false;
    }
    let prev;
    let current = this.head;
    const node = new Node(element);
    if (position === 0) {
      this.head = node;
      node.next = current;
      this.count++;
      return true;
    }

    prev = this.getElementAt(position - 1);
    current = prev.next;
    prev.next = node;
    node.next = current;
    this.count++;
    // for (let i = 0; i < position; i++) {
    //   prev = current;
    //   current = current.next;
    // }
    // const node = new Node(element);
    // prev.next = node;
    // node.next = current;

    return true;
  }

  getElementAt(position) {
    if (position < 0 || position > this.count) {
      return undefined;
    }
    let node = this.head;
    for (let i = 0; i < position; i++) {
      node = node.next;
    }
    return node;
  }

  remove(element) {
    // let current = this.head;
    // let prev;
    // let i = 0

    // if (current.element === element) {
    //   return 0;
    // }
    
    
    // for (; i < this.count; i++) {
    //   prev = current;
    //   current = current.next;
    //   if (current.element === element) {
    //     break;
    //   }
    // }

    // prev.next = current.next;
    // return i + 1;

    // 简单版本
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    
    return  -1;
    
  }

  removeAt(position) {
    // 检查越界值
    if (position < 0 || position > this.count) {
      return undefined;
    }

    let current = this.head;
    let prev;
    if (position === 0) {
      // 直接返回头
      this.head = current?.next;
      return current;
    }

    for (let i = 0; i < position; i++) {
      prev = current;
      current = current?.next;
    }
    
    prev.next = current?.next;
    this.count--;
    return current;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }
  
  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${current.element}`;
      current = current?.next;
    }
    return objString;
  }

}


function text() {
  const linkedlist = new LinkedList();
  
  linkedlist.push(15);
  linkedlist.push(16);
  linkedlist.push(17);
  linkedlist.push(18);
  
  
  console.log('size', linkedlist.size())
  console.log('toString', linkedlist.toString());
  console.log('remove' ,linkedlist.remove(17).element)
  console.log('toString', linkedlist.toString());
}

module.exports = {
  LinkedList,
  Node,
  defaultEqual
};