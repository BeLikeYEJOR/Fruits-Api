const { describe, expect, it, todo } = require("@jest/globals");
const fruits = require("../data/foods.json");
const { getFood } = require("./functions.GetFood");

describe("getFood()", () => {
  it("Returns a list of fruits", () => {
    const result = getFood(fruits);

    expect(result).toHaveLength(fruits.length);
  });
  it("Filters the list of fruits by name", () => {
    const request = {name: "Banana"};

    const result = getFood(fruits, request);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Banana");
  });
  it.todo("Filters the list of fruits by vitamins");
  it.todo("Filters the list of fruits by name & vitamins");
});
