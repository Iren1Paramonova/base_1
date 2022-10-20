/*function showMessage(message) {
  console.log(message);
}
showMessage("Hi");
showMessage("Hello");
showMessage("You");*/

/*function sum(a, b=0) {
  console.log(a + b);
}
sum(2, 3);
sum(3);*/

/*function sum(a, b) {
  return a + b;
}
const result = sum(3, 5);
console.log(result);
console.log(sum(4, 6));*/

/*function posityfSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  }
  return "Erorr";
}
console.log(posityfSum(-3, 5));*/

//Локальные переменные
/*function getName() {
  const userName = "Alex";
  return userName;
}
function userName() {
  const userName = "Ivan";
  return userName;
}
console.log(getName());
console.log(userName());*/

//Внешние переменные
/*let name = "Ira";
function sayHi(message = "Hello") {
  console.log(`$ {message}``$ {name}`);
}
console.log(sayHi());*/

//Практика

/*function greeting(userName = "Guest") {
  console.log(`Hello ${userName}`);
}
greeting();
greeting("Ivan");*/

/*function num(a, b = 1) {
  return a ** b;
}
console.log((a = 2));
console.log((a = 5));*/

//Синтаксис функций
/*const sayHi = function (name) {
  console.log(`Hello ${name}`);
};
sayHi("Ivan");*/

/*const funcExpression = function (callback) {
  for (let i = 0; 1 < 1000000000000; i += 1) {}
  callback("Alex");
};
console.log("hi");

multyfly(3, 4);
const multyfly = function (a, b) {
  console.log(a * b);
};*/
// ошибка, потому что fun.expression

//Стрелочные функции
/*const getName = (name) => `name -${name}`;
console.log(getName("Alex"));*/

/*const getName = (name) => {
  return `name-${name}`;
};
console.log(getName("Alex"));*/

/*let scr = (string, n) => {
  for (let i = 0; i < n; i++) {
    console.log(string);
  }
};
scr("ghfj", 3);
scr("11111", 7);*/

/*let bu = (letter) => {
  if (letter === "a" || letter === "i" || letter === "u" || letter === "y") {
    return true;
  }
  {
    return false;
  }
};
console.log(bu("a"));
console.log(bu("n"));*/

function welcome(userName = "Nigga") {
  console.log(`You ${userName}`);
}
welcome();
welcome("Ira");
