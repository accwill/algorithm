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


  rotationLL(node) {
    const tmp = node.left;
    return tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.right;
    tmp.left = node;
    return tmp;
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