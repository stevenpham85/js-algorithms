/**
 * @param {number[]} nums
 * @return {number}
 */
const expect = require("expect.js");
var naiveFindMaximumXOR = function (nums) {
  nums = [...nums];
  let max_xor = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j, nums[i] ^ nums[j], max_xor);
      if ((nums[i] ^ nums[j]) > max_xor) {
        max_xor = nums[i] ^ nums[j];
      }
    }
  }
  return max_xor;
};

var findMaximumXOR = (nums) => {
  nums = [...nums];
  let max = 0;
  let mask = 0;
  for (let i = 30; i >= 0; i--) {
    mask = mask | (1 << i);
    new_max = max | (1 << i);
    let set = new Set();
    for (let num of nums) {
      set.add(num & mask);
    }
    for (let value of set) {
      if (set.has(new_max ^ value)) {
        max = new_max;
      }
    }
  }
  return max;
};

const testNaiveSolution = () => {
  const input1 = [3, 10, 5, 25, 2, 8];
  const input2 = [8, 10, 2]; // 10
  expect(naiveFindMaximumXOR(input1)).to.equal(28);
  expect(naiveFindMaximumXOR(input2)).to.equal(10);
  console.log("All Test Passed!");
};

const testSolution = () => {
  const input1 = [3, 10, 5, 25, 2, 8];
  const input2 = [8, 10, 2]; // 10
  expect(findMaximumXOR(input1)).to.equal(28);
  expect(findMaximumXOR(input2)).to.equal(10);
  console.log("All Test Passed!");
};

testSolution();
