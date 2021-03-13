/**
 * @文件说明: 有序链表
 * 
 * 
 * 在插入操作的时候index的值会被忽略
 *     因为有内部进行插入
 * 
 * 
 * @Date: 2021-03-13 10:28:29
 * @Last Modified time: 2021-03-13 10:28:29
 */

const { LinkedList, defaultEqual } = require('./linkedlist');

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqual, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, position) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    console.log(123, pos)
    return super.insert(element, pos);
  }
  
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

const list = new SortedLinkedList();

console.log('list.insert(1): ', list.insert(1));
console.log('list.insert(7): ', list.insert(7));
console.log('list.insert(5): ', list.insert(5));
console.log('list.insert(3): ', list.insert(3));
console.log('list.insert(10): ', list.insert(10));

console.log('size', list.size())
console.log('toString', list.toString())


console.log();



