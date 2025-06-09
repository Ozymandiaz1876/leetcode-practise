/**
 * majority_element_2_229_med - LeetCode Problem
 * 
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function majority_element_2_229_med(nums) {
  let count1 = 0;
  let count2 = 0;
  let el1 = Number.MIN_SAFE_INTEGER;
  let el2 = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const currEl = nums[i];
    if (count1 === 0 && currEl !== el2) {
      el1 = currEl;
      count1++;
      continue;
    }
    if (count2 === 0 && currEl !== el1) {
      el2 = currEl;
      count2++;
      continue;
    }

    if (currEl === el1) {
      count1++;
      continue;
    }
    if (currEl === el2) {
      count2++;
      continue;
    }

    count1--;
    count2--;
  }

  count1 = 0;
  count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    const currEl = nums[i];

    if (el1 === currEl) count1++;
    if (el2 === currEl) count2++;
  }

  return [
    ...(count1 > nums.length / 3 ? [el1] : []),
    ...(count2 > nums.length / 3 ? [el2] : []),
  ];
}

// n space solution
// const map = {};

// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   map[num] = map[num] ? map[num] + 1 : 1;
// }
// return Object.keys(map).filter((key) => map[key] > nums.length / 3);

console.log(majority_element_2_229_med([3, 2, 3]));

module.exports = majority_element_2_229_med;
