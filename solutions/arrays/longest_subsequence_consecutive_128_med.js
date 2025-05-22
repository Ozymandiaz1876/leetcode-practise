/**
 * longest_subsequence_consecutive_128_med - LeetCode Problem
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function longest_subsequence_consecutive_128_med(nums) {
  if (nums == null || nums.length === 0) return 0;
  let max = 0;

  const set = new Set(nums);

  for (currentVal of set) {
    let currentVal = nums[i];

    // if it's first el, then skip
    if (set.has(currentVal - 1)) {
      continue;
    }

    let currentLength = 1;

    while (set.has(currentVal + 1)) {
      currentLength++;
      currentVal++;
    }

    if (currentLength > max) {
      max = currentLength;
    }
  }
  return max;
}

// sorting solution
// var longestConsecutive = function(nums) {
//   if(nums.length===0) return 0
//   nums = new Int32Array(nums).sort();
//   let max = 1, window = 1;
//   for (let i = 1; i < nums.length; i++) {
//       if(nums[i-1]==nums[i]) continue;
//       window = nums[i - 1] + 1 === nums[i] ? window + 1 : 1;
//       max = Math.max(window, max);
//   }
//   return max;
// };

console.log(longest_subsequence_consecutive_128_med([100, 4, 200, 1, 3, 2]));

module.exports = longest_subsequence_consecutive_128_med;
