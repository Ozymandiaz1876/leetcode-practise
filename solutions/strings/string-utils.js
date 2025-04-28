/**
 * String Utilities for LeetCode Problems
 *
 * This file contains common utility functions for string manipulation
 * that can be helpful when solving LeetCode string problems.
 */

/**
 * Check if a string is a palindrome
 * @param {string} s - The string to check
 * @return {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

/**
 * Find the longest palindromic substring in a string
 * @param {string} s - The input string
 * @return {string} - The longest palindromic substring
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  // Check each position as a potential center
  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes
    expandAroundCenter(i, i);
    // Even length palindromes
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

/**
 * Count the frequency of each character in a string
 * @param {string} s - The input string
 * @return {Object} - An object with characters as keys and frequencies as values
 */
function characterFrequency(s) {
  const freq = {};

  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

/**
 * Check if two strings are anagrams of each other
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {boolean} - True if the strings are anagrams, false otherwise
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freqS = characterFrequency(s);
  const freqT = characterFrequency(t);

  for (const char in freqS) {
    if (freqS[char] !== freqT[char]) return false;
  }

  return true;
}

/**
 * Find all anagrams of pattern p in string s
 * @param {string} s - The string to search in
 * @param {string} p - The pattern to search for
 * @return {number[]} - Array of starting indices of all anagrams of p in s
 */
function findAnagrams(s, p) {
  const result = [];
  if (s.length < p.length) return result;

  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  // Count characters in pattern
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // Sliding window
  for (let i = 0; i < s.length; i++) {
    // Add one character from the right
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // Remove one character from the left
    if (i >= p.length) {
      sCount[s.charCodeAt(i - p.length) - "a".charCodeAt(0)]--;
    }

    // Check if the window contains an anagram
    if (i >= p.length - 1) {
      let match = true;
      for (let j = 0; j < 26; j++) {
        if (pCount[j] !== sCount[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        result.push(i - p.length + 1);
      }
    }
  }

  return result;
}

module.exports = {
  isPalindrome,
  longestPalindrome,
  characterFrequency,
  isAnagram,
  findAnagrams,
};
