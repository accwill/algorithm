/**
 * @文件说明: 说明
 * 在AVL树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）之间的差值，该值（hr－hl）应为0、1或-1。
 * 
 * @Date: 2021-03-15 20:11:10
 * @Last Modified time: 2021-03-15 20:11:10
 */
const { defaultCompare, BalanceFactor, Compare } = require('../utils');
const { BinarySearchTree } = require('./binarySerachTree');

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }

    // const leftHeight = this.getNodeHeight(node.left);
    // const rightHeight = this.getNodeHeight(node.right);
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (heightDifference) {
      case -2: 
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }


  // 向右旋转
  rotationLL(node) {
    const nextHead = node.left;
    node.left = nextHead.right;
    nextHead.right = node;
    return nextHead;
  }

  // 向左旋转
  rotationRR(node) {
    const nextHead = node.right;
    node.right = nextHead.left;
    nextHead.left = node;
    return nextHead;
  }
  
  // 先左后右
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // 先右后左
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }


  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key ,node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, nodr.key) === Compare.BIGGER_THAN) {
      nodex.right = this.insertNode(node.right, key);
    } else {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(ndoe);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    

    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key); // {1}
    if (node == null) {
      return node; // null，不需要进行平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node); // {2}
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // {3}
      const balanceFactorLeft = this.getBalanceFactor(node.left); // {4}
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) { // {5}
        return this.rotationLL(node); // {6}
      }
      if (
          balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
          ) { // {7}
        return this.rotationLR(node.left); // {8}
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // {9}
      const balanceFactorRight = this.getBalanceFactor(node.right); // {10}
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) { // {11}
        return this.rotationRR(node); // {12}
      }
      if (
          balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
          ) { // {13}
        return this.rotationRL(node.right); // {14}
      }
    }
    return node;
  }
  
}

const tree = new AVLTree();

tree.insert(3)
tree.insert(2)
tree.insert(6)
tree.insert(5)
tree.insert(7)
tree.insert(4)


console.log('height', tree.getNodeHeight(tree.root))

console.log();