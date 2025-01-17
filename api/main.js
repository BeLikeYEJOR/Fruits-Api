const express = require("express");
const cors = require("cors");
const fruits = require("./data/foods.json");
let app = express();

app.use(cors());

app.get("/fruits", (req, res) => {
  const name = req.query.name;
  const vitamins = req.query.vitamins;

  let filters = [];
  let searchFunction = null; 

  if (name) {
    filters.push((fruit) =>
      fruit.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }

  if (vitamins) {
    filters.push((fruit) =>
      fruit.vitamins.map((i) => i.toLocaleLowerCase()).includes(vitamins)
    );
  }

  let result = fruits;

  filters.forEach((filter) => {
    result = result.filter(filter);
  });

  // let res;

  res.json({ result });
});

app.get("/fruits/:id", (req, res) => {
  const id = req.params.id;
  if (id < 0 || id > fruits.length + 1)
    res.json({ error: "745 error, fruit Id not found" });
  else {
    res.json({ food: fruits[parseInt(id)] });
  }
});

module.exports = app;
