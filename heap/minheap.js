const { defaultCompare, Compare } = require('../utils');


// function swap(array, a, b) {
//   const temp = array[a];
//   array[a] = array[b];
//   array[b] = temp;
// }

// 思路为 解构赋值
const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];



class MinHeap {

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * 向堆中插入新值
   * @param {*} value 被插入的值
   * @return {boolean}
   */
  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    const cur = this.heap[index];
    const parentIndex = this.getParentIndex(index);
    const parent = this.heap[parentIndex];
    /**
     * 
     * 对于最小堆，如果当前节点小于父节点则互换位置
     * 
     * 对于最大堆，如果当前节点大于父节点则互换位置
     * 
     * 
     */
    while (index > 0 && this.compareFn(cur, parent) === Compare.LESS_THAN) {
      swap(this.heap, index, parentIndex);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 移除最大值或最小值，并返回这个值
   */
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap.shift();
    this.siftDown(0);
    return removedValue;
  }


  // 对于最大堆，删除根节点就是删除最大值；对于最小堆，是删除最小值。然后，把堆存储的最后那个节点移到填在根节点处。再从上而下调整父节点与它的子节点：对于最大堆，父节点如果小于具有最大值的子节点，则交换二者。这一操作称作down-heap或bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down,extract-min/max等。直至当前节点与它的子节点满足堆性质为止。
  siftDown(index) {
    let curIndex = index;
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    const size = this.size();


    if (leftIndex < size && this.compareFn(this.heap[curIndex], this.heap[leftIndex]) < Compare.BIGGER_THAN) {
      curIndex = leftIndex;
    }

    if (rightIndex < size && this.compareFn(this.heap[curIndex], this.heap[rightIndex]) < Compare.BIGGER_THAN) {
      curIndex = rightIndex;
    }

    if (index !== curIndex) {
      swap(this.heap, index, curIndex);
      this.siftDown(curIndex);
    }
    
  }

  /**
   * 返回最小值或最大值且不会移除这个值
   */
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }



  
}

heap = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}

console.log('Extract minimum: ', heap.extract()); // 1

console.log(12)