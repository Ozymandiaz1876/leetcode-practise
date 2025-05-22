/**
 * spiral_matrix_54_med - LeetCode Problem
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function spiral_matrix_54_med(matrix) {
  const ans = [];

  let rows = matrix.length;
  let columns = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let right = columns - 1;

  let left = 0;

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    // right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }

      left++;
    }
  }

  return ans;
}

console.log(
  spiral_matrix_54_med([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

module.exports = spiral_matrix_54_med;
