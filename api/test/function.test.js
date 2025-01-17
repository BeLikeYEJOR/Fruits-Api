export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function multi(a, b) {
  return a * b;
}

export function abs(a) {
  return Math.abs(a);
}

export function randomBool() {
  const randomBool = Math.random() < 0.5;
  return randomBool;
}
export function oneInTen(max) {
  return Math.floor(Math.random() * max);
}