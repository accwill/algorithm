/**
 * @文件说明: 双向链表
 * @Date: 2021-03-13 10:30:18
 * @Last Modified time: 2021-03-13 10:30:18
 */
const { Node, LinkedList, defaultEqual } = require("./linkedlist");

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqual) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, position) {
    if (position < 0 || position > this.count) {
      return false;
    }

    const node = new DoublyNode(element);

    let current = this.head;

    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if (position === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const prev = this.getElementAt(position - 1);
      current = prev.next;
      prev.next = node;
      node.next = current;
      node.prev = prev;
      current.prev = node;
    }
    this.count++;
    return true;
  }


  removeAt(position) {
    if (position < 0 || position > this.count) {
      return false;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else if(position === this.count) {
      this.tail = this.tail.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(position);
      const prev=  current.prev;
      prev.next = current.next;
      current.next.prev = prev;
      
    }
    this.count--;

    return current;
  }
}


const link = new DoublyLinkedList();

link.insert(10, 0);

module.exports = {
  DoublyNode,
  DoublyLinkedList
}
