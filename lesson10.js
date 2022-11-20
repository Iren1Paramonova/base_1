/* function cubeValue(a) {
  return function (b, c) {
    return a * b * c;
  };
}
const first = cubeValue(10);
console.log(first(10, 10));
console.log(first(2, 5));
console.log(first(5, 7));
const second = cubeValue(4);
console.log(second(10, 10));
console.log(second(2, 5));
console.log(second(5, 7)); */

const cubeCarryValue = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

const cubeCarryValue2 = (a) => (b) => (c) => a * b * c;

const cubeCarryValue3 = (a, b, c) => a * b * c;

console.log(cubeCarryValue(1)(3)(3));
const twoArgs = cubeCarryValue(1)(3);
console.log(twoArgs(3));
console.log(twoArgs(4));
console.log(twoArgs(5));
