/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */

var expect = require("expect.js");
var test = require("../utils/test").test;

const filter = (intervals, position) => {
  return intervals.filter((itv) => itv[0] <= position && itv[1] >= position);
};

const max_right = (intervals) => {
  return intervals.reduce((acc, item) => {
    return item[1] > acc ? item[1] : acc;
  }, 0);
};

var minTaps = function (n, ranges) {
  const to_interval_mapper = (value, index) => [index - value, index + value];
  let intervals = ranges.map(to_interval_mapper);
  intervals = intervals.sort((x, y) => x[0] - y[0]);
  let position = 0;
  let count = 0;
  while (position <= n) {
    let filtered = filter(intervals, position);
    if (filtered.length == 0) return -1;
    position = max_right(filtered) + 0.5;
    count++;
  }
  return count;
};

let r1 = [3, 4, 1, 1, 0, 0];
let r2 = [4, 0, 0, 0, 0, 0, 0, 0, 4]; //n = 8
let r3 = [1, 2, 1, 0, 2, 1, 0, 1];
let r4 = [4, 0, 0, 0, 4, 0, 0, 0, 4]; // n = 5 , mt = 1
let r0 = [0, 0, 0, 0];
const test1 = { input: [5, r1], expected: 1 };
const test2 = { input: [8, r2], expected: 2 };
const test3 = { input: [7, r3], expected: 3 };
const test4 = { input: [8, r4], expected: 1 };
const test5 = { input: [3, r0], expected: -1 };
const testSuite = [test1, test2, test3, test4, test5];
test(minTaps, testSuite);
