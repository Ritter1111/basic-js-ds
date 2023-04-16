const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node_root = null;
  }
  root() {
    return this.node_root;
  }

  add(data) {
    this.node_root = addDataNode(this.node_root, data);
    function addDataNode(node, data) {
      if (!node) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = addDataNode(node.left, data);
      } else {
        node.right = addDataNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasDataNode(this.node_root, data);

    function hasDataNode(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return hasDataNode(node.left, data);
      } else {
        return hasDataNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNodeData(this.node_root, data);

    function findNodeData(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNodeData(node.left, data);
      } else {
        return findNodeData(node.right, data);
      }
    }
  }

  remove(data) {
    this.node_root = removeNodeData(this.node_root, data);

    function removeNodeData(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = removeNodeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNodeData(node.right, data);
        return node;
      } else if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      let minFrom = node.right;
      while (minFrom.left) {
        minFrom = minFrom.left;
      }
      node.data = minFrom.data;

      node.right = removeNodeData(node.right, minFrom.data);
      return node;
    }
  }

  min() {
    let node_root = this.node_root;
    while (node_root.left) {
      node_root = node_root.left;
    }
    return node_root.data;
  }

  max() {
    let node_root = this.node_root;
    while (node_root.right) {
      node_root = node_root.right;
    }
    return node_root.data;
  }
}

module.exports = {
  BinarySearchTree,
};
