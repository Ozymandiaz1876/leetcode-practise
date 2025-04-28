/**
 * Tests for Two Sum solution
 */

const twoSum = require("../../solutions/arrays/two-sum");

describe("Two Sum", () => {
  test("Example 1: nums = [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("Example 2: nums = [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
  });

  test("Example 3: nums = [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });

  test("No solution: nums = [1,2,3], target = 7", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  test("Negative numbers: nums = [-1,-2,-3,-4], target = -7", () => {
    expect(twoSum([-1, -2, -3, -4], -7)).toEqual(
      expect.arrayContaining([2, 3]),
    );
  });
});
