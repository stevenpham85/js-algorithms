// This implementation violates the rules of immutability and has side effects since it changes the state of the passed array in place.
// TODO: Immutibility implementation

function quick_sort(arr, left, right) {
  if (left < right) {
    let pivot_index = partition(arr, left, right);
    quick_sort(arr, left, pivot_index - 1);
    quick_sort(arr, pivot_index + 1, right);
  }
  return arr;
}

function swapElements(arr, i, j) {
  if (i !== j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swapElements(arr, i, j);
    }
  }
  swapElements(arr, i + 1, right);
  return i + 1;
}

// dummy lazy comparation of two arrays of integers
function areIdentical(arr1, arr2) {
  return arr1.join("") === arr2.join("");
}

let arr1 = [10, 80, 30, 90, 40, 50, 70];
let result1 = [10, 30, 40, 50, 70, 80, 90];
quick_sort(arr, 0, arr.length - 1);
console.log(areIdentical(arr, result));
