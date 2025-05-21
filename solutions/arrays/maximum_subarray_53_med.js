/**
 * maximum_subarray_53_med - LeetCode Problem
 * 
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function maximum_subarray_53_med(nums) {
  let maxi = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxi) {
      maxi = sum;
    }

    // If sum < 0: discard the sum calculated
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}

console.log(maximum_subarray_53_med([-2, -1]));

module.exports = maximum_subarray_53_med;
