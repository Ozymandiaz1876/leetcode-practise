/**
 * majority_element_169_easy - LeetCode Problem
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function majority_element_169_easy(nums) {
  let majorityElem = null;
  let count = 0;

  for (const val of nums) {
    if (count === 0) {
      majorityElem = val;
      count = 1;
    } else if (majorityElem === val) {
      count++;
    } else {
      count--;
    }
  }
  return majorityElem;
}

module.exports = majority_element_169_easy;
