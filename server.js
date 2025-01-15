const app = require("./api/main.js");

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listning on ${PORT}`);
});
