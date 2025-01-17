const { it, describe } = require("node:test");
const assert = require("node:assert");
const {
  add,
  sub,
  multi,
  abs,
  randomBool,
  oneInTen,
} = require("./function.test.js");

// describe("math tests", () => {
//   it("should add postive numbers", () => {
//     assert.strictEqual(add(2, 2), 4, "2 + 2 = 4!!!!!!");
//   });
//   it("should add negative numbers", () => {
//     assert.strictEqual(add(-2, -2), -4, "-2 + -2 = -4!!!!!!");
//   });
//   it("Should subtract postive Numbers", () => {
//     assert.strictEqual(sub(12, 24), -12, "12 - 24 = -12!!!!");
//   });
//   it("Should subtract negative Numbers", () => {
//     assert.strictEqual(sub(-12, -24), 12, "-12 - -24 = 12!!!!");
//   });
//   it("Should Multiply postive numbers", () => {
//     assert.strictEqual(multi(10, 10), 100, "10 * 10 = 100!!!!!");
//   });
//   it("Should Multiply negative numbers", () => {
//     assert.strictEqual(multi(-10, 10), -100, "-10 * 10 = -100!!!!!");
//   });
//   it("Should Use Absolute Function", () => {
//     assert.strictEqual(abs(-120), 120, "Abs Function aint Functioning");
//   });
// });

describe("random checks", () => {
  it("Should be True", () => {
    assert.strictEqual(randomBool(), true, "IT DIDINT CHOOSE TRUE!!!");
  });
  it("Should Match Numbers", () => {
    let randomNumber = Math.floor(Math.random() * 2);
    assert.strictEqual(
      oneInTen(2),
      randomNumber,
      "Didint choose the same number"
    );
    console.log(randomNumber);
  });
});
