/* console.log(this);
var TEST = "TEST";
console.log(this.TEST);
console.log(window.TEST); */

/* console.log(globalThis); */

function example() {
  console.log(this);
}
const testObject = {
  testMetod: example,
};
testObject.testMetod();

/* const testObj = {
  exampleMetod: example,
  exampleValue: "j@#$"
};
exampleObj.exampleMetod(); */

/* function test() {
  console.log(this);
}
test(); */

/*let obj = {
  name: "NN",
  age: 802,
  cize: 1000000,
  getName: function () {
    console.log(this.age);
    return this.name;
  },
};
console.log();
 */

/*function example() {
  console.log(this);
}
example(); */

/* function example() {
  console.log(this);
}
const testObject = { testMethod: example };
testObject.testMethod(); */
