/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var test = require("./test");
test = test.test;
const expect = require("expect.js");

const height = (root) => {
  if (root.value == null) {
    return 0;
  }
  return Math.max(height(root.left), height(root, root.right)) + 1;
};

var isBalanced = function (root) {
  if (height(root) <= 1) {
    return true;
  }
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
function testHeightFunction() {}

const testSuite = [
  { input: [[3, 9, 20, null, null, 15, 7]], expected: true },
  { input: [[1, 2, 2, 3, 3, null, null, 4, 4]], expected: false },
  { input: [[1, 2, 2, 3, 3, null, null, 4, 4]], expected: false },
];

test(isBalanced, testSuite);
