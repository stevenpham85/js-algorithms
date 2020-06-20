/**
 * @param {number[]} prices
 * @return {number}
 */
var expect = require("expect.js");

var maxProfit = function (prices) {
  let buy1 = (buy2 = Number.MIN_SAFE_INTEGER);
  let sell1 = (sell2 = 0);
  for (let price of prices) {
    buy1 = Math.max(buy1, 0 - price);
    sell1 = Math.max(sell1, buy1 + price);
    buy2 = Math.max(buy2, sell1 - price);
    sell2 = Math.max(sell2, buy2 + price);
  }
  return sell2;
};

let test1 = [3, 3, 5, 0, 0, 3, 1, 4];
let test2 = [1, 2, 3, 4, 5];
let test3 = [7, 6, 4, 3, 1];

// console.log(maxProfit(test1) == 6);
// console.log(maxProfit(test2) == 4);
// console.log(maxProfit(test3) == 0);
expect(maxProfit(test1)).to.equal(6);
expect(maxProfit(test2)).to.equal(4);
expect(maxProfit(test3)).to.equal(0);
