/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

const reshape = (vector, m, n) => {
  vector = [...vector];
  let grid = [];
  for (let i = 0; i < m; i++) {
    grid.push(vector.splice(0, n));
  }
  return grid;
};

var shiftGrid = function (grid, k) {
  let vector = grid.flat();
  let m = grid.length;
  let n = grid[0].length;
  k = k % (m * n);
  let shifted_vector = [...vector.slice(m * n - k, m * n)].concat(
    ...vector.slice(0, m * n - k)
  );
  return reshape(shifted_vector, m, n);
};
