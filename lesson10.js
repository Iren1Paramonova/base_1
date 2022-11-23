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

/* function CreateUser(userName, userAge) {
  this.name = userName;
  this.age = userAge;
  this.sayHi = function () {
    console.log(`Привет, меня зовут ${this.name}`);
  };
}

CreateUser.prototype.sayAge = function () {
  console.log(`Мне ${this.age}`);
};
const firstUser = new CreateUser("Alex", 28);
const secondUser = new CreateUser("Tony", 24);
const thirdUser = new CreateUser("Ivan", 15);
console.log(firstUser, secondUser, thirdUser);
secondUser.sayHi();
secondUser.sayAge();
thirdUser.sayAge(); */

//практика
/* function Otcrytca(from, to) {
  (this.from = from),
    (this.to = to),
    (this.show = function () {
      console.log(`Эта открытка от ${this.from} для ${this.to}`);
    });
}
Otcrytca.prototype.showFrom = function (from) {
  this.from = from;
};
let firstOtcrytca = new Otcrytca("Octo", "Kate");
let firstOtcrytca2 = new Otcrytca("Lenon", "Ono");
let firstOtcrytca3 = new Otcrytca("Jon", "Merelin");
firstOtcrytca.show();
firstOtcrytca2.show();
firstOtcrytca3.show();

firstOtcrytca.showFrom("Lenon");
firstOtcrytca.show();
console.log(firstOtcrytca); */

//class
class People {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  getFullName() {
    return `${this.name}:${this.surName}`;
  }
}

const firstPeople = new People("Alex", "Ivanov");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surName, rate, day) {
    super(name, surName);
    this.day = day;
    this.rate = rate;
  }
  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.day}`;
  }
}
const firstWorker = new Worker("Alex", "Petrov", 500, 20);
console.log(firstWorker.getFullName());
console.log(firstWorker.getSallary());
