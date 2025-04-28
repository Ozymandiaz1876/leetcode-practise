# LeetCode Practice Project

A simple Node.js project structure for practicing and organizing LeetCode solutions.

## Project Structure

```
leetcode-practise/
├── index.js                 # Entry point
├── package.json             # Project configuration
├── solutions/               # Solutions organized by category
│   ├── arrays/              # Array-related problems
│   ├── strings/             # String-related problems
│   ├── linked-lists/        # Linked list problems
│   ├── trees/               # Tree-related problems
│   ├── dynamic-programming/ # DP problems
│   └── ...                  # Other categories
└── tests/                   # Test files for solutions
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create your solution in the appropriate category folder
4. Write tests for your solution
5. Run tests:
   ```
   npm test
   ```
6. Run a specific solution:
   ```
   npm run solution <category> <problem-name> [args...]
   ```
   For example:
   ```
   npm run solution arrays two-sum 2,7,11,15 9
   ```

7. Create a new solution template:
   ```
   npm run create <category> <problem-name> "<problem-description>"
   ```
   For example:
   ```
   npm run create arrays three-sum "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, j != k, and i != k, and nums[i] + nums[j] + nums[k] == 0."
   ```

## Adding a New Solution

1. Create a new JavaScript file in the appropriate category folder:
   ```
   solutions/arrays/two-sum.js
   ```

2. Implement your solution:
   ```javascript
   /**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
   function twoSum(nums, target) {
     const map = new Map();
     
     for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       
       if (map.has(complement)) {
         return [map.get(complement), i];
       }
       
       map.set(nums[i], i);
     }
     
     return [];
   }
   
   module.exports = twoSum;
   ```

3. Create a test file:
   ```
   tests/arrays/two-sum.test.js
   ```

4. Write tests:
   ```javascript
   const twoSum = require('../../solutions/arrays/two-sum');
   
   test('Two Sum test cases', () => {
     expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
     expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
     expect(twoSum([3, 3], 6)).toEqual([0, 1]);
   });
   ```

5. Run the tests:
   ```
   npm test
   ```

## Tips for LeetCode Practice

1. Understand the problem thoroughly before coding
2. Think about edge cases
3. Consider time and space complexity
4. Try to solve the problem on your own before looking at the solution
5. After solving, look for optimizations
6. Review and learn from others' solutions