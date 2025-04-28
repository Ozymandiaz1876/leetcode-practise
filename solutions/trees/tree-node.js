/**
 * Definition for a binary tree node.
 * This is a common structure used in many LeetCode tree problems.
 */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /**
   * Helper method to create a binary tree from an array (level order traversal)
   * null values in the array represent null nodes
   * @param {Array} arr - Array representation of the tree (level order)
   * @return {TreeNode} - Root of the created binary tree
   */
  static fromArray(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const node = queue.shift();

      // Left child
      if (i < arr.length) {
        if (arr[i] !== null) {
          node.left = new TreeNode(arr[i]);
          queue.push(node.left);
        }
        i++;
      }

      // Right child
      if (i < arr.length) {
        if (arr[i] !== null) {
          node.right = new TreeNode(arr[i]);
          queue.push(node.right);
        }
        i++;
      }
    }

    return root;
  }

  /**
   * Helper method to convert a binary tree to an array (level order traversal)
   * @param {TreeNode} root - Root of the binary tree
   * @return {Array} - Array representation of the tree (level order)
   */
  static toArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node) {
        result.push(node.val);
        queue.push(node.left || null);
        queue.push(node.right || null);
      } else {
        result.push(null);
      }
    }

    // Remove trailing nulls
    while (result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }

  /**
   * Helper method for in-order traversal
   * @param {TreeNode} root - Root of the binary tree
   * @return {Array} - Array of values in in-order traversal
   */
  static inOrderTraversal(root) {
    const result = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }

    traverse(root);
    return result;
  }

  /**
   * Helper method for pre-order traversal
   * @param {TreeNode} root - Root of the binary tree
   * @return {Array} - Array of values in pre-order traversal
   */
  static preOrderTraversal(root) {
    const result = [];

    function traverse(node) {
      if (!node) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(root);
    return result;
  }

  /**
   * Helper method for post-order traversal
   * @param {TreeNode} root - Root of the binary tree
   * @return {Array} - Array of values in post-order traversal
   */
  static postOrderTraversal(root) {
    const result = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }

    traverse(root);
    return result;
  }
}

module.exports = TreeNode;
