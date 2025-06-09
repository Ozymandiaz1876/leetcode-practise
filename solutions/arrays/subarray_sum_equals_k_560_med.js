/**
 * subarray_sum_equals_k_560_med - LeetCode Problem
 * 
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function subarray_sum_equals_k_560_med(arr, k) {
  const n = arr.length; // Size of the array
  const mpp = new Map(); // Map to store prefix sum frequencies
  let preSum = 0; // Running prefix sum
  let cnt = 0; // Count of subarrays with sum k

  // Initialize map with prefix sum 0 (for subarrays starting at index 0)
  mpp.set(0, 1);

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    // Update prefix sum with current element
    preSum += arr[i];

    // Calculate prefix sum to find (x - k)
    const remove = preSum - k;

    // Add frequency of remove to count (number of valid subarrays)
    cnt += mpp.get(remove) || 0;

    // Update frequency of current prefix sum
    mpp.set(preSum, (mpp.get(preSum) || 0) + 1);
  }

  return cnt;
}
console.log(subarray_sum_equals_k_560_med([1, 2, 3], 3));

// wont work for negative numbers
// if (k === 0 && nums.length < 2) {
//   return 0;
// }

// let sum = 0;

// let left = 0;

// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   while (sum > k) {
//     sum -= nums[left];
//     left++;
//   }
//   if (sum === k) {
//     total++;
//   }
//   console.log(sum);
// }
// return total;

module.exports = subarray_sum_equals_k_560_med;
