/**
 * Length_of_the_longest_subarray_with_zero_Sum_med - LeetCode Problem
 * 
 * Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.

Examples

Example 1:
Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
Result: 5
Explanation: The following subarrays sum to zero:
{-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
Since we require the length of the longest subarray, our answer is 5!

Example 2:
Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
Result: 8
Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
Length of longest subarray = 8

Example 3:
Input Format: N = 3, array[] = {1, 0, -5}
Result: 1
Subarray : {0}
Length of longest subarray = 1

Example 4:
Input Format: N = 5, array[] = {1, 3, -5, 6, -2}
Result: 0
Subarray: There is no subarray that sums to zero
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function Length_of_the_longest_subarray_with_zero_Sum_med(nums) {
  let left = 0;
  let right = nums.length - 1;

  let sum = nums.reduce((prev, curr) => curr + prev, 0);

  while (left < right) {
    if (sum > 0) {
      if (nums[left] > nums[right]) {
        sum -= nums[left];
        left++;
      } else {
        sum -= nums[right];
        right--;
      }
    } else if (sum < 0) {
      if (nums[left] > nums[right]) {
        sum -= nums[right];
        right--;
      } else {
        sum -= nums[left];
        left++;
      }
    } else {
      return right - left + 1;
    }
  }
}

console.log(
  Length_of_the_longest_subarray_with_zero_Sum_med([
    6, -2, 2, -8, 1, 7, 4, -10,
  ]),
);

module.exports = Length_of_the_longest_subarray_with_zero_Sum_med;
