const { describe, expect, it, todo } = require("@jest/globals");
const fruits = require("../data/foods.json");
const { getFood } = require("./functions.GetFood");

describe("getFood()", () => {
  it("Returns a list of fruits", () => {
    const result = getFood(fruits);

    expect(result).toHaveLength(fruits.length);
  });
  it("Filters the list of fruits by name", () => {
    const request = { name: "Banana" };

    const result = getFood(fruits, request);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Banana");
  });
  it("Filters the list of fruits by vitamins", () => {
    const request = { vitamins: "Vitamin C" };

    const result = getFood(fruits, request);

    // Check that the number of filtered results matches expectations
    expect(result).toHaveLength(147);
    // Verify the first result includes "Vitamin C" in its vitamins thing
    expect(result[0].vitamins).toContain("Vitamin C");
  });
  it("Filters the list of fruits by name & vitamins", () => {
    const request = { name: "Dragon", vitamins: "Magnesium" };

    const result = getFood(fruits, request);

    expect(result).toHaveLength(1);

    expect(result[0].name).toContain(request.name);
    expect(result[0].vitamins).toContain(request.vitamins);
  });
  it.todo("Make Copper Work");
});
