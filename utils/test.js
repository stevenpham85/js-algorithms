const expect = require("expect.js");

// @params function -
// testSuite: array of Object { input: { ...params}, expected: value}
const test = (fn, testSuite, outStream = console.log) => {
  let count = 1;
  outStream(
    `Begin testing function ${fn.name.toString().toUpperCase()}() for ${
      testSuite.length
    } case(s)`
  );
  for (let testCase of testSuite) {
    outStream(
      `Test case ${count} with input ${testCase.input} and expecting ${testCase.expected}...`
    );
    outStream(`Result is ${fn(...testCase.input)}`);
    expect(fn(...testCase.input)).to.equal(testCase.expected);
    outStream(`Test case ${count} passed!`);
  }
  outStream(`All ${testSuite.length} passed`);
  count++;
};

module.exports = {
  test,
};
