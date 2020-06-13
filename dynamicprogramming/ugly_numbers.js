#!/usr/bin/env node
// https://www.geeksforgeeks.org/ugly-numbers/

// Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.

// Given a number n, the task is to find n’th Ugly number.

// ################################
//
// ANALYSIS

const findUglyNumber = (n) => {
  if (n == 1) {
    return 1;
  }
  let uglyArray = [1];
  let index_2 = (index_3 = index_5 = 0);
  let next_multiple_of_2 = 2;
  let next_multiple_of_3 = 3;
  let next_multiple_of_5 = 5;
  for (let i = 1; i < n; i++) {
    let next = Math.min(
      next_multiple_of_2,
      next_multiple_of_3,
      next_multiple_of_5
    );
    uglyArray.push(next);
    if (next == next_multiple_of_2) {
      index_2++;
      next_multiple_of_2 = uglyArray[index_2] * 2;
    }
    if (next == next_multiple_of_3) {
      index_3++;
      next_multiple_of_3 = uglyArray[index_3] * 3;
    }
    if (next == next_multiple_of_5) {
      index_5++;
      next_multiple_of_5 = uglyArray[index_5] * 5;
    }
  }
  return uglyArray[n - 1];
};

console.log(findUglyNumber(150));
