/**
 * 3Sum_15_med - LeetCode Problem
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function three_Sum_15_med(nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  const result = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;

    const currVal = nums[i];

    while (left < right) {
      const leftValue = nums[left];
      const rightValue = nums[right];
      const sum = currVal + leftValue + rightValue;

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([currVal, leftValue, rightValue]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return result;
}

// not optimal solution
// can reduce space complexity with sorting
// const resultSet = new Set();

//   const n = nums.length;

//   for (let i = 0; i < n; i++) {
//     const hashTable = new Set();

//     for (let j = i + 1; j < n; j++) {
//       const thirdEl = -(nums[i] + nums[j]);
//       console.log(hashTable, thirdEl);

//       if (hashTable.has(thirdEl)) {
//         const sortedArray = [nums[i], nums[j], thirdEl].sort((a, b) => a - b);
//         resultSet.add(sortedArray.join(","));
//       }
//       hashTable.add(nums[j]);
//     }
//   }

//   return Array.from(resultSet).map((el) => el.split(",").map(Number));

console.log(three_Sum_15_med([-1, 0, 1, 2, -1, -4]));
[2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];

[-4, -1, -1, 0, 1, 2];

module.exports = three_Sum_15_med;
