function getFood(food, { name, vitamins } = {}) {
  let results = food;
  if (name) {
    results = results.filter((fruit) => {
      return fruit.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  return results;
}

module.exports = {
  getFood,
};
