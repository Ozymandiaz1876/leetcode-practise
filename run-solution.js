/**
 * Script to run a specific LeetCode solution
 *
 * Usage: node run-solution.js <category> <problem-name> [args...]
 * Example: node run-solution.js arrays two-sum 2,7,11,15 9
 */

const path = require("path");
const fs = require("fs");

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error(
    "Usage: node run-solution.js <category> <problem-name> [args...]",
  );
  console.error("Example: node run-solution.js arrays two-sum 2,7,11,15 9");
  process.exit(1);
}

const category = args[0];
const problemName = args[1];
const solutionArgs = args.slice(2);

// Construct the path to the solution file
const solutionPath = path.join(
  __dirname,
  "solutions",
  category,
  `${problemName}.js`,
);

// Check if the solution file exists
if (!fs.existsSync(solutionPath)) {
  console.error(`Solution file not found: ${solutionPath}`);
  process.exit(1);
}

// Import the solution
const solution = require(solutionPath);

// Parse arguments based on common types
function parseArg(arg) {
  // Try to parse as JSON first (for arrays, objects)
  try {
    return JSON.parse(arg);
  } catch (e) {
    // If not valid JSON, try other formats

    // Check if it's a comma-separated list (likely an array)
    if (arg.includes(",")) {
      // Try to parse each item as a number if possible
      return arg.split(",").map((item) => {
        const num = Number(item);
        return isNaN(num) ? item : num;
      });
    }

    // Check if it's a number
    const num = Number(arg);
    if (!isNaN(num)) {
      return num;
    }

    // Otherwise, return as string
    return arg;
  }
}

// Parse the arguments
const parsedArgs = solutionArgs.map(parseArg);

// Check if the solution is a function
if (typeof solution === "function") {
  console.log("Running solution with arguments:", parsedArgs);
  const result = solution(...parsedArgs);
  console.log("Result:", result);
} else {
  console.error("The solution does not export a function.");
  console.log("Exported value:", solution);
}
