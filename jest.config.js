/**
 * Jest configuration for LeetCode practice project
 */

module.exports = {
  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/tests/**/*.test.js"],

  // An array of regexp pattern strings that are matched against all test paths
  testPathIgnorePatterns: ["/node_modules/"],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/"],
};
