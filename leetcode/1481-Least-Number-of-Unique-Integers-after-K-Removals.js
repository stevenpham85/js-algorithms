/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var hash = (nums) => {
  let hash = new Map();
  for (let num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  return hash;
};
var findLeastNumOfUniqueInts = function (arr, k) {
  let hashed = hash(arr);
  let occurrance = [...hashed.values()].sort((x, y) => x - y);
  console.log(occurrance);
  let index = (sum = 0);
  while (sum <= k) {
    sum += occurrance[index];
    index++;
  }
  return occurrance.length - index + 1;
};
