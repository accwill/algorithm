const { defaultCompare, Compare } = require('../utils');

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  /**
   * 向树种插入一个新的键
   * @param {*} key 
   */
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  
  // 节点，需要插入的值
  // key 小于 node.key, 小的放在左边，大的放在右边
  insertNode(node, key) {
    // 左边
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
        return;
      }
      this.insertNode(node.left, key);
      return;
    }

    // 右边
    if (node.right == null) {
      node.right = new Node(key);
      return;
    }

    this.insertNode(node.right, key);
  }

  /**
   * 在树中查找一个键
   * 如果节点存在，则返回true
   * 如果节点不存在，则返回false
   * @param {string} key 
   */
  search(key) {

  }

  /**
   * 中序遍历
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback); // {1}
  }


  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  
  
  /**
   * 先序遍历
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    } 
  }

  /**
   * 后序遍历
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 返回树中最小的值/键
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // 返回树中最大的值/键
  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right !== null) {
      current = current.right;
    }
    return current;
  }


  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
    
  }

  // 从树中移除某个键
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return null
    }


    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (
      this.compareFn(key, node.key) === Compare.BIGGER_THAN
    ) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      // 第三种情况

      const minNode = this.minNode(node.right);
      node.key = minNode.key;
      node.right = this.removeNode(node.right, minNode.key);
      return node;
    }

    
    
    
  }

}


module.exports = {
  BinarySearchTree
}

function test() {

  const tree = new BinarySearchTree();
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);
  tree.insert(6);
  
  const nums = [];
  const printNode = (value) => nums.push(value); // {6}
  tree.postOrderTraverse(printNode); // {7}
  
  console.log('nums', nums.join(' '));
  console.log('minNode', tree.min().key);
  console.log('maxNode', tree.max().key);
  console.log('seracg', tree.search(25));
  
  
  console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
  console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
  console.log(tree.remove(15));
  
  
  console.log();
}


// 后续
// 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
// 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

// 中序
// 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
// 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

// 先序
// 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
// 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25 