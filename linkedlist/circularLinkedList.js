/**
 * @文件说明: 循环链表
 * @Date: 2021-03-13 10:30:30
 * @Last Modified time: 2021-03-13 10:30:30
 */
const { LinkedList, defaultEqual, Node } = require('./linkedlist');

class CirulayLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqual) {
    super(this.equalFn)
  }

  insert(element, position) {
    if (position < 0 || position > this.count) {
      return false;
    }

    let node = new Node(element);
    let current = this.head;
    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        node.next = this.head;
      } else {
        node.next = current;
        this.head = node;
        current = this.getElementAt(this.size());
        current.next = node;
      }
    } else {
      const prev = this.getElementAt(position - 1);
      // current = prev.next;
      // prev.next = node;
      // node.next = current;
      node.next = prev.next;
      prev.next= node;
    }
    this.count++;
    return true;
  }
  
  removeAt(position) {
    if (position < 0 || position > this.count || this.size() === 0) {
      return false;
    }

    let current = this.head;

    if (position === 0) {
      if (this.size() === 1) {
        this.head = null;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size());
        this.head = remove.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const prev = this.getElementAt(position - 1);
      prev.next = prev.next.next ?? null;
    }
    
    
    this.count--;
    return current;
  }
}