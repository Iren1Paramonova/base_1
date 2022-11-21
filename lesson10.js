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

/* const cubeCarryValue = (a) => {
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
 */

//прототипы

/* const russian = {
  country: "Russia",
  city: "NN",
  __proto__: null, //прекращение цепи наследования
};
const people = {
  name: "Ira",
  age: 32,
  __proto__: russian,
};
console.log(people.city, people);
 */
/* const obj = {
  city: "NN",
};
const russian = {
  country: "Russia",
  __proto__: obj,
};
const people = {
  name: "Ira",
  age: 32,
  __proto__: russian,
};
console.log(people.city); */

//функции-конструкторы

/* const userName = "Ira";
const user = {
  userName,
};
console.log(user); */

function CreateUser(userName, userAge) {
  this.name = userName;
  this.age = userAge;
  this.sayHi = function () {
    console.log(`Привет, меня зовут ${this.name}`);
  };
}
const firstUser = new CreateUser("Alex", 28);
const secondUser = new CreateUser("Tony", 24);
const thirdUser = new CreateUser("Ivan", 15);
console.log(firstUser, secondUser, thirdUser);
secondUser.sayHi();
