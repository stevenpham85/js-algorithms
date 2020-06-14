// https://www.geeksforgeeks.org/two-elements-whose-sum-is-closest-to-zero/

// https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/

// TWO-POINTER TECHNIQUE
// 1) Sort all the elements of the input array using their absolute values.
// 2) Check absolute sum of arr[i-1] and arr[i] if their absolute sum is less than min update min with their absolute value.
// 3) Use two variables to store the index of the elements.

function findMinAbsSum(arr) {
  let min_sum = Number.MAX_SAFE_INTEGER;
  let left_ptr = 0;
  arr = [...arr].sort((x, y) => x - y); //copy array to a new one to left the passed array intacted.
  let right_ptr = arr.length - 1;
  while (left_ptr < right_ptr) {
    let sum = arr[left_ptr] + arr[right_ptr];
    if (Math.abs(sum) < min_sum) {
      min_sum = Math.abs(sum);
    }
    if (sum < 0) {
      left_ptr++;
    } else right_ptr--;
  }
  return min_sum;
}

function exactSum(arr, target_value) {
  arr = [...arr].sort((x, y) => x - y);
  let left_ptr = 0;
  let right_ptr = arr.length - 1;
  while (left_ptr < right_ptr) {
    let sum = arr[left_ptr] + arr[right_ptr];
    if (sum == target_value) {
      return 1;
    }
    if (sum < target_value) {
      left_ptr++;
    } else right_ptr--;
  }
  return -1;
}

let arr = [-8, 1, 4, 6, 10, 45];
let target_value = 16;
console.log(exactSum(arr, target_value) == 1);

let r = [1, 60, -10, 70, -80, 85];
console.log(findMinAbsSum(r) == 5);
