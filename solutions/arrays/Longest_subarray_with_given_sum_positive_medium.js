/**
 * Longest_subarray_with_given_sum_positive_medium - LeetCode Problem
 * 
 * Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Examples

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function Longest_subarray_with_given_sum_positive_medium(nums, sum) {
  let start = 0;
  let end = 0;

  let max = 0;

  let currentSum = 0;

  while (end < nums.length) {
    currentSum += nums[end];

    if (currentSum === sum) {
      const currentLength = end - start + 1;
      max = Math.max(max, currentLength);
      start = end;
    } else if (currentSum > sum) {
      currentSum -= nums[start];
      start++;
    }

    end++;
  }
  return max;
}

console.log(Longest_subarray_with_given_sum_positive_medium([-1, 1, 1], 1));

module.exports = Longest_subarray_with_given_sum_positive_medium;
