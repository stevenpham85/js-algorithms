// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Rationale

// The problem can be easily solve by using extra space labelling what numbers have appeared.
// The appoarch is alter the array in-place, marking appeared numbers by flipping the sign of its corresponding index. For example, if 2 appeared, mark nums[2] as negative. Those remain positive, their indexes are not seen.

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let num of nums) {
    let val = Math.abs(num) - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
