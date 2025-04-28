/**
 * Definition for singly-linked list node.
 * This is a common structure used in many LeetCode linked list problems.
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  /**
   * Helper method to create a linked list from an array
   * @param {Array} arr - Array of values to convert to a linked list
   * @return {ListNode} - Head of the created linked list
   */
  static fromArray(arr) {
    if (!arr || arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }

    return head;
  }

  /**
   * Helper method to convert a linked list to an array
   * @param {ListNode} head - Head of the linked list
   * @return {Array} - Array representation of the linked list
   */
  static toArray(head) {
    const result = [];
    let current = head;

    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  /**
   * Helper method to print a linked list
   * @param {ListNode} head - Head of the linked list
   * @return {string} - String representation of the linked list
   */
  static toString(head) {
    return ListNode.toArray(head).join(" -> ") + " -> null";
  }
}

module.exports = ListNode;
