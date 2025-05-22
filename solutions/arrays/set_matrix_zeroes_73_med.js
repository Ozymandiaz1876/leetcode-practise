/**
 * set_matrix_zeroes_73_med - LeetCode Problem
 * 
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function set_matrix_zeroes_73_med(matrix) {
  const doesFirstRowHaveZero = matrix[0].some((val) => val === 0);
  const doesFirstColHaveZero = matrix.some((val) => val[0] === 0);

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (doesFirstRowHaveZero) {
    matrix[0] = matrix[0].map((val) => 0);
  }

  if (doesFirstColHaveZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

//not optimal solution
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] === 0) {
//       // mark the column as -1
//       for (let k = 0; k < matrix.length; k++) {
//         if (matrix[k][j] !== 0) matrix[k][j] = "zero";
//       }
//       // mark the row as -1
//       for (let l = 0; l < matrix[i].length; l++) {
//         if (matrix[i][l] !== 0) matrix[i][l] = "zero";
//       }
//     }
//   }
// }

// // for (let i = 0; i < matrix.length; i++) {
// //   const currentArray = matrix[i];

// //   //mark all -1 to zero
// //   for (let j = 0; j < currentArray.length; j++) {
// //     if (matrix[i][j] === "zero") {
// //       matrix[i][j] = 0;
// //     }
// //   }
// // }

// return matrix;

console.log(
  set_matrix_zeroes_73_med([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);

module.exports = set_matrix_zeroes_73_med;
