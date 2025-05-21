/**
 * max_consecutive_one_485 - LeetCode Problem
 * 
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var max_consecutive_one_485 = function (nums) {
  let max = 0;
  let current = 0;

  for (const val of nums) {
    if (val === 1) {
      current++;
      if (current > max) {
        max = current;
      }
      continue;
    }
    current = 0;
  }
  return max;
};

module.exports = max_consecutive_one_485;
