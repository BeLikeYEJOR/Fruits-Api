function getFood(food, { name, vitamins } = {}) {
  let results = food;

  if (name) {
    results = results.filter((fruit) => {
      return fruit.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  if (vitamins) {
    results = results.filter((fruit) => {
      // Check if any vitamin matches the input
      return fruit.vitamins.some((vitamin) =>
        vitamin.toLowerCase().includes(vitamins.trim().toLowerCase())
      );
    });
  }

  if (name && vitamins) {
    return food.filter((fruit) => {
      const matchesName = name
        ? fruit.name.toLowerCase().includes(name.toLowerCase()) : true
      const matchesVitamins = vitamins
        ? fruit.vitamins.some((vitamin) =>
            vitamin.toLowerCase().includes(vitamins.trim().toLowerCase())
          )
        : true; // If no vitamins filter, allow all
  
      return matchesName && matchesVitamins; // Must match both
    });
  }

  return results;
}

module.exports = {
  getFood,
};
