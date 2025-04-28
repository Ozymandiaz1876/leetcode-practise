/**
 * Tests for valid-parentheses solution
 */

const validParentheses = require("../../solutions/strings/valid-parentheses");

describe("Valid Parentheses", () => {
  test('Example 1: Valid parentheses "()"', () => {
    expect(validParentheses("()")).toBe(true);
  });

  test('Example 2: Valid parentheses "()[]{}"', () => {
    expect(validParentheses("()[]{}")).toBe(true);
  });

  test('Example 3: Invalid parentheses "(]"', () => {
    expect(validParentheses("(]")).toBe(false);
  });

  test('Example 4: Invalid parentheses "([)]"', () => {
    expect(validParentheses("([)]")).toBe(false);
  });

  test('Example 5: Valid parentheses "{[]}"', () => {
    expect(validParentheses("{[]}")).toBe(true);
  });

  test("Example 6: Empty string", () => {
    expect(validParentheses("")).toBe(true);
  });

  // Add more test cases as needed
});
