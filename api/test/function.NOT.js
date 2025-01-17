

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function abs(a) {
  return Math.abs(a);
}

function randomBool() {
  const randomBool = Math.random() < 0.5;
  return randomBool;
}
 function oneInTen(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  add,
  sub,
  multi,
  abs,
  randomBool,
  oneInTen
}