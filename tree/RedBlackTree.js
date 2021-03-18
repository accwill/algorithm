const { defaultCompare, Compare } = require("../utils");
const { BinarySearchTree } = require("./binarySerachTree");

const Colors = {
  BLACK: '1',
  RED: '2'
};


class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}


class ReadBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }


  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }
  
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;

      // 情形A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;

        // 情形1A：叔节点也是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形2A：节点是右侧子节点——左旋转
          if (node === parent.right) {
            this.rotationRR(parent); // {12}
            node = parent; // {13}
            parent = node.parent; // {14}
          }
          // 情形3A：节点是左侧子节点——右旋转
          this.rotationLL(grandParent); // {15}
          parent.color = Colors.BLACK; // {16}
          grandParent.color = Colors.RED; // {17}
          node = parent; // {18}
        }
        
      } else { // 情形B：父节点是右侧子节点
        const uncle = grandParent.left;
        // 情形1B：叔节点是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
        } else {
          // 情形2B：节点是左侧子节点——右旋转// 情形2B：节点是左侧子节点——左旋转
          if (node === parent.left) {
            this.rotationLL(parent); // {19}
            node = parent;
            parent = node.parent;
          }
          // 情形3B：节点是右侧子节点——左旋转
          this.rotationRR(grandParent); // {20}
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
      
      this.root.color = Colors.BLACK;
    }

    // 右旋
    rotationLL(node) {
      const tmp = node.left; // 右旋left会上位

      node.left = tmp.right; // 将左节点的右节点 赋值给 当前节点的左节点

      if (tmp.right && tmp.right.key) {  // 
        tmp.right.parent = node;
      }
      

      tmp.parent = node.parent;

      if (!node.parent) {
        this.root = tmp;
      } else {
        if (node === node.parent.left) {
          node.parent.left = tmp;
        } lse {
          node.parent.right = tmp
        }
      }

      tmp.right = node;
      node.parent = tmp;
    }
  }

  // 左旋
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }

    tmp.parent = node.parent;;

    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }

    tmp.right = node;
    node.parent = tmp;

  }
  
}