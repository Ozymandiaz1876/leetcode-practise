/**
 * Script to create a new LeetCode solution template
 *
 * Usage: node create-solution.js <category> <problem-name> "<problem-description>"
 * Example: node create-solution.js arrays three-sum "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, j != k, and i != k, and nums[i] + nums[j] + nums[k] == 0."
 */

const fs = require("fs");
const path = require("path");

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
  console.error(
    'Usage: node create-solution.js <category> <problem-name> "<problem-description>"',
  );
  console.error(
    'Example: node create-solution.js arrays three-sum "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, j != k, and i != k, and nums[i] + nums[j] + nums[k] == 0."',
  );
  process.exit(1);
}

const category = args[0];
const problemName = args[1];
const problemDescription = args[2];

// Convert problem name to camel case for function name
function toCamelCase(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

const functionName = toCamelCase(problemName);

// Create directories if they don't exist
const solutionDir = path.join(__dirname, "solutions", category);
const testDir = path.join(__dirname, "tests", category);

if (!fs.existsSync(solutionDir)) {
  fs.mkdirSync(solutionDir, { recursive: true });
}

if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

// Create solution file
const solutionFilePath = path.join(solutionDir, `${problemName}.js`);
const solutionContent = `/**
 * ${problemName} - LeetCode Problem
 * 
 * ${problemDescription}
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function ${functionName}() {
  // TODO: Implement your solution here
  
  return null;
}

module.exports = ${functionName};
`;

fs.writeFileSync(solutionFilePath, solutionContent);
console.log(`Created solution file: ${solutionFilePath}`);

// Create test file
const testFilePath = path.join(testDir, `${problemName}.test.js`);
const testContent = `/**
 * Tests for ${problemName} solution
 */

const ${functionName} = require('../../solutions/${category}/${problemName}');

describe('${problemName
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")}', () => {
  test('Example 1', () => {
    // TODO: Add test cases based on the problem
    // expect(${functionName}(input)).toEqual(expectedOutput);
  });

  test('Example 2', () => {
    // TODO: Add test cases based on the problem
    // expect(${functionName}(input)).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});
`;

fs.writeFileSync(testFilePath, testContent);
console.log(`Created test file: ${testFilePath}`);

console.log("\nTemplate created successfully! Start coding your solution.");
console.log(
  `\nTo run your solution: node run-solution.js ${category} ${problemName} [args...]`,
);
console.log(`To run tests: npm test -- ${testFilePath}`);
