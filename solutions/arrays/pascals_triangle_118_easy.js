/**
 * pascals_triangle_118_easy - LeetCode Problem
 * 
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function pascals_triangle_118_easy(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }
    if (i === 1) {
      result.push([1, 1]);
      continue;
    }
    const previousRow = result[i - 1];
    const currentRow = [];

    for (let j = 0; j < previousRow.length; j++) {
      if (j === 0) {
        currentRow.push(1);
        continue;
      }
      currentRow.push(previousRow[j - 1] + previousRow[j]);
      if (j === previousRow.length - 1) {
        currentRow.push(1);
      }
    }
    result.push(currentRow);
  }
  return result;
}

console.log(pascals_triangle_118_easy(5));

module.exports = pascals_triangle_118_easy;
