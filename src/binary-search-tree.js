const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  constructor() {
    this.node = null
  }

  root() {
    return this.node
  }

  add(data) {
    let node = this.node
    if(node === null) {
      this.node = new Node(data)
      return;
    } else {
      return this.searchValue(data, node)
    }
  }

  has(data) {
    let current = this.node
    while(current) {
      if(data === current.data) {
        return true
      }
      if(data < current.data) {
        current = current.left
      }else {
        current = current.right
      }
    }
    return false
  }

  find(data) {
    let current = this.node
    while(current.data !== data) {
      if(data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if(current === null) {
        return null
      }
    }
    return current
  }

  remove(data) {
    let node = this.node
    this.removeValue(node, data)
  }

  min() {
    let currenNode = this.node
    while(currenNode.left !== null) {
      currenNode = currenNode.left
    }
    return currenNode.data
  }

  max() {
    let currenNode = this.node
    while(currenNode.right !== null) {
      currenNode = currenNode.right
    }
    return currenNode.data
  }
  removeValue(node, data) {
    let tmpNode = null
    if(node === null) {
      return null
    }
    if(data === node.data) {
      if(node.left === null && node.right === null) {
        return null
      }
      if(node.left === null) {
        return node.right
      }
      if(node.right === null) {
        return node.left
      }
      tmpNode = node.right
      while(tmpNode.left !== null) {
        tmpNode = tmpNode.left
      }
      node.data = tmpNode.data
      node.right = this.removeValue(node.right, tmpNode.data)
      return node
    } else if (data < node.data) {
      node.left = this.removeValue(node.left, data)
      return node
    } else {
      node.right = this.removeValue(node.right, data)
      return node
    }
    this.node = this.removeValue(this.node, data)
  }
  searchValue(data, node) {

    if(data < node.data) {

      if(node.left === null) {
        node.left = new Node(data)
        return;
      } else if (node.left !== null) {
        return this.searchValue(data, node.left)
      }
    } else if (data > node.data) {

      if(node.right === null) {
        node.right = new Node(data)

        return;
      } else if (node.right !== null) {
        return this.searchValue(data, node.right)
      }
    } else return null
  }

}


