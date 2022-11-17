/* console.log(this);
var TEST = "TEST";
console.log(this.TEST);
console.log(window.TEST); */

/* console.log(globalThis); */

/* function example() {
  console.log(this);
}

const testObject = {
  testMetod: example,
};
testObject.testMetod();

const testObj = {
  exampleMetod: example,
  exampleValue: "j@#$",
};
testObj.exampleMetod(); */

/* const persona = {
  name: "Ira",
  age: 5,
  getName: function () {
    console.log(this);
  },
};
persona.getName(); */

/*function example() {
  console.log(this);
}
example(); */

/* function example() {
  console.log(this);
}
const testObject = { testMethod: example };
testObject.testMethod(); */

/* const town = {
  name: "Moscow",
  population: "25 mln",
  getName: function () {
    console.log(this.name);
    return this.name;
  },
  getPopulation: function () {
    console.log(this.population);
    return this.population;
  },
  setAnyValue: function (key, value) {
    this[key] = value;
  },
};
town.getPopulation();
town.setAnyValue("name", "London");
town.setAnyValue("country", "UK");
town.getName();
console.log(town); */

const user1 = { name: "Vasya", surName: "Ivanov" };
const user2 = { name: "Petya", surName: "Semenov" };
function greeting(phrase, smile) {
  console.log(`${this.name} ${this.surName} : ${phrase} : ${smile}`);
}
greeting.call(user1, "Hello", "O_o");
greeting.call(user2, "Privet", "^_^");

const greetingUser1 = greeting.bind(user1, "Yuu", "))");
greetingUser1();

const greetingUser2 = greeting.bind(user2);
greetingUser2("kuku", "(((");

const greetingUser3 = greeting.bind(user2, "kuku");
greetingUser3("(((");
