/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverse = (str) => {
  return str.split("").reverse().join("");
};
var reverseStr = function (s, k) {
  if (s.length <= 2 * k) {
    return reverse(s.slice(0, k)) + s.slice(k);
  }
  return reverseStr(s.slice(0, 2 * k), k) + reverseStr(s.slice(2 * k), k);
};

let s = "abcdde";
console.log(reverseStr(s, 2));
