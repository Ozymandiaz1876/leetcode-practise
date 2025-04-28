/**
 * valid-parentheses - LeetCode Problem
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s - String containing parentheses characters
 * @return {boolean} - True if the string has valid parentheses, false otherwise
 */
function validParentheses(s) {
  // Use a stack to keep track of opening brackets
  const stack = [];

  // Define matching pairs
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If it's an opening bracket, push to stack
    if (pairs[char]) {
      stack.push(char);
    } else {
      // It's a closing bracket
      // If stack is empty or brackets don't match, return false
      const lastBracket = stack.pop();
      if (pairs[lastBracket] !== char) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets were matched
  return stack.length === 0;
}

module.exports = validParentheses;
