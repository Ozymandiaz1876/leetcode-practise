/**
 * Dynamic Programming Template
 *
 * This file provides templates and examples for solving dynamic programming problems.
 * Dynamic programming is a method for solving complex problems by breaking them down
 * into simpler subproblems and solving each subproblem only once.
 */

/**
 * Top-down approach with memoization (recursion + cache)
 *
 * @param {*} problem - The problem input
 * @return {*} - The solution to the problem
 */
function solveWithMemoization(problem) {
  // Initialize memoization cache
  const memo = new Map();

  /**
   * Recursive function with memoization
   * @param {*} state - The current state/subproblem
   * @return {*} - The solution to the subproblem
   */
  function dp(state) {
    // Convert state to string for memoization key
    const key = JSON.stringify(state);

    // Check if we've already solved this subproblem
    if (memo.has(key)) {
      return memo.get(key);
    }

    // Base case(s)
    if (state === 0 || state === 1) {
      return state; // Example base case (for Fibonacci)
    }

    // Recursive case(s)
    let result;
    // Compute result based on smaller subproblems
    // result = ...

    // Cache the result
    memo.set(key, result);
    return result;
  }

  // Start the recursion with the initial state
  return dp(/* initial state */);
}

/**
 * Bottom-up approach with tabulation
 *
 * @param {*} problem - The problem input
 * @return {*} - The solution to the problem
 */
function solveWithTabulation(problem) {
  // Initialize the DP table
  const dp = []; // Initialize based on problem

  // Fill the base cases

  // Fill the table in bottom-up manner
  for (let i = 0; i < problem.length; i++) {
    // Compute dp[state] based on previously computed values
    // dp[state] = ...
  }

  // Return the final answer
  return dp[dp.length - 1];
}

/**
 * Example: Fibonacci sequence using DP
 *
 * @param {number} n - The position in the Fibonacci sequence
 * @return {number} - The nth Fibonacci number
 */
function fibonacci(n) {
  // Top-down approach with memoization
  function fibMemo(n) {
    const memo = new Map();

    function dp(n) {
      if (n <= 1) return n;

      if (memo.has(n)) return memo.get(n);

      const result = dp(n - 1) + dp(n - 2);
      memo.set(n, result);
      return result;
    }

    return dp(n);
  }

  // Bottom-up approach with tabulation
  function fibTab(n) {
    if (n <= 1) return n;

    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }

  // Using tabulation for efficiency
  return fibTab(n);
}

module.exports = {
  solveWithMemoization,
  solveWithTabulation,
  fibonacci,
};
