// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/

// Find the location that the rotation happened.
function findPivotIndex(arr, start, end) {
  // base cases
  if (end < start) {
    return -1;
  }
  if (start == end) {
    return end;
  }
  let mid = Math.floor((start + end) / 2);
  if (mid < end && arr[mid] > arr[mid + 1]) {
    return mid;
  }
  if (mid > start && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }
  if (arr[start] > arr[mid]) {
    return findPivotIndex(arr, start, mid);
  }
  if (arr[mid] > arr[end]) {
    return findPivotIndex(arr, mid, end);
  }
}

function binarySearch(arr, key, start, end) {
  // base cases
  if (start == end) {
    if (arr[start] == key) {
      return start;
    } else return -1;
  }
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (key == arr[mid]) {
    return mid;
  }
  if (key > arr[mid]) {
    return binarySearch(arr, key, mid + 1, end);
  } else {
    return binarySearch(arr, key, start, mid - 1);
  }
}

function rotatedBinarySearch(arr, key) {
  let pivot = findPivotIndex(arr, 0, arr.length - 1);
  if (key > arr[0]) {
    return binarySearch(arr, key, 0, pivot);
  } else {
    return binarySearch(arr, key, pivot + 1, arr.length - 1);
  }
}

const test1 = [4, 7, 9, 1, 2];
console.log(findPivotIndex(test1, 0, 4) == 2);
const test2 = [1, 3, 7, 9, 11];
console.log(binarySearch(test2, 3, 0, 4) == 1);
console.log(rotatedBinarySearch(test1, 1));
