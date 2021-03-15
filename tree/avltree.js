/**
 * @文件说明: 说明
 * 在AVL树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）之间的差值，该值（hr－hl）应为0、1或-1。
 * 
 * @Date: 2021-03-15 20:11:10
 * @Last Modified time: 2021-03-15 20:11:10
 */
const { defaultCompare, BalanceFactor } = require('../utils');
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
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  // 向左旋转
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
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