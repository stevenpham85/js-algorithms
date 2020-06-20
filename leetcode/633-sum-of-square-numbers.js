/**
 * @param {number} c
 * @return {boolean}
 */

const expect = require("expect.js");
const test = require("./test").test;

const isSquared = (num) => {
  return Math.floor(Math.sqrt(num)) ** 2 == num;
};

var judgeSquareSum = function (c) {
  const ceiling = Math.floor(Math.sqrt(c)) + 1;
  for (let i = 1; i < ceiling - 1; i++) {
    if (isSquared(c - i ** 2)) {
      return true;
    }
  }
  return false;
};

const testSuite = [
  { input: [5], expected: true },
  { input: [3], expected: false },
];

test(judgeSquareSum, testSuite);
