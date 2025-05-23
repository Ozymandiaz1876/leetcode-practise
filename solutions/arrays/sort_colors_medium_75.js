/**
 * sort_colors_medium_75 - LeetCode Problem
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function sort_colors_medium_75(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (high > low) {
    console.log(low, mid, high, nums);

    if (mid > high) {
      break;
    }

    if (mid < low) {
      mid = low;
    }

    if (nums[low] === 0) {
      low++;
      continue;
    }
    if (nums[high] === 2) {
      high--;
      continue;
    }

    if (nums[mid] > nums[high]) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      continue;
    }
    if (nums[mid] < nums[low]) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      continue;
    }
    mid++;
  }
  return nums;
}
// this can be done by calculating the total 0, 1 & 2's then updating the values in the array for those

console.log(sort_colors_medium_75([2, 0, 2, 1, 1, 0]));
// console.log(sort_colors_medium_75([2, 0, 1]));

module.exports = sort_colors_medium_75;
