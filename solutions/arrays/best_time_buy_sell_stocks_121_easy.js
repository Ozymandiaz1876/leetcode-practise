/**
 * best_time_buy_sell_stocks_121_easy - LeetCode Problem
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 * 
 * @param {*} - Add parameter types based on the problem
 * @return {*} - Add return type based on the problem
 */
function best_time_buy_sell_stocks_121_easy(nums) {
  let buyIdx = 0,
    sellIdx = 0;

  let maxProfit = 0;

  let currProfit = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentDayPrice = nums[i];

    const buyDayPrice = nums[buyIdx];

    const sellDayePrice = nums[sellIdx];

    if (currentDayPrice < buyDayPrice) {
      currProfit = sellDayePrice - buyDayPrice;
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
      buyIdx = i;
      sellIdx = i;
    } else if (currentDayPrice > sellDayePrice) {
      currProfit = currentDayPrice - buyDayPrice;
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
      sellIdx = i;
    }
  }

  if (buyIdx > sellIdx) {
    return 0;
  }

  return maxProfit;
}

console.log(best_time_buy_sell_stocks_121_easy([7, 1, 5, 3, 6, 4]));

module.exports = best_time_buy_sell_stocks_121_easy;
