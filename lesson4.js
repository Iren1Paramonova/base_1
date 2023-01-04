/*if (true) {
  console.log("true");
}
if (false) {
  console.log("false");
}*/

/*const name = "Ira";
if (name === "Inna") {
  console.log(`Hello ${name}`);
} else {
  console.log('Hello noname');
}*/

/*const name = "Ira";
if ("Ivan" === "Ira") {
  console.log(`Hello ${name}`);
} else {
  console.log("Hello noname");
}*/

/*const name = "Ira";
if (name === "Ira") {
  console.log(`Hello ${name}`);
} else if{(name === "Alex")
  console.log(`Hi ${name}`);
  } else if {(name === "Petr")
  console.log(`Hey ${name}`);
}else { console.log("Привет незнакомец"); }*/

/*if (true) {
    if (true) { console.log("true"); }
    else {console.log("false");
    }
}*/

/*const userName = "Alex";
const result = userName === "Alex" ? "Hello Alex" : "Hello User";
console.log(result);*/

/*const a = 17;
const b = 50;
const c = 41;
if (a > b) {
  console.log(`Big ${a}`);
} else if (a > c) {
  console.log(`Big# ${a}`);
} else if (b > c) {
  console.log(`Самое большое число ${b}`);
}*/

//не рабочий код
/*const a = 17;
const b = 50;
const c = 41;
if (a > b > c) {
  console.log(`Big ${a}`);
} else if (b > c > a) {
  console.log(`Big# ${b}`);
} else {
  console.log(`Самое большое число ${c}`);*/

/*const userRole = "manager";
switch (userRole) {
  case "admin":
    console.log("Любит манго");
    break;
  case "manager":
    console.log("Не обнаружен любитель манго");
    break;
}*/

/*const a = 17;
const b = 13;
const c = 50;
if (a < b && b < c) {
  console.log("Big c");
} else if (a < b && b > c) {
  console.log("B");
} else if (a < c) {
  console.log("c Big");
} else {
  console.log("A big");
}*/

/* const temp = -9;
if (temp <= -30) {
  console.log("Оставайтесь дома!");
} else if (temp > -30 && temp <= -10) {
  console.log("Сегодня холодно");
} else if (temp > -10 && temp <= 5) {
  console.log("Не холодно");
} else if (temp > 5 && temp <= 15) {
  console.log("Тепло");
} */

/*let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}
let i = 0;
do {
  console.log(i);
} while (false);*/

/*let i = 0;
for (; i <= 3; i++) {
  console.log(i);
}*/
/*let i = 0;
while (true) {
  if (i < 30) {
    i += 1;
  } else {
    30;
    break;
  }
  console.log(i);
}*/

/*for (let i = 0; i <= 5; i += 1) {
  if (i === 1 || i === 3) continue;
  console.log(i);
}*/

/*const [1, 2, 3, 4, 8, 7, 9, 10, 17, 22, 26]
const result = []
for (let i = 0; i <= arr.length; i += 1)
{
  if (arr[i] % 2 === 0)
    result.let(arr[i]);
}
console.log(result);*/

/*let n = 0;
for (; n <= 8; n++) {
  console.log(n);
}*/

/*if (1 || 0) {
  console.log(`Go ${result}`);
}
const a = 0;
const b = 1;
let result1 = a || b;
let result2 = a || false || "GO" || b;*/

/*let b = 0;
for (let a = 1800; a <= 2022; a += 4) {
  if (a === 1800) {
    continue;
  }
  if (a === 1900) {
    continue;
  }
  b += 1;
}
console.log(b);*/

//2 заход
/*const a = 20;
const b = 16;
const c = 25;
if (a > b && a > c) {
  console.log(`Самый длинный отрезок A равный ${a}`);
} else if (b > c && b > a) {
  console.log(`Самый длинный отрезок B равный ${b}`);
} else {
  console.log(`Самый длинный отрезок C равный ${c}`);
}*/

/* console.log(null || 0 || "" || undefined);
console.log("яблоко" && true && null && 1);
console.log(0 || (true && "false") || null);
console.log((0 && true) || ("false" && null));
console.log(!0 && !!1);
console.log(!(null || (!"апельсин" && true)));*/

/* let temperature = 7;
if (temperature <= -30) {
  console.log("Оставайтесь дома!");
} else if (temperature > -30 && temperature <= -10) {
  console.log("Сегодня холодно");
} else if (temperature > -10 && temperature <= +5) {
  console.log("Не холодно");
} else {
  console.log("false");
}

let value = "gic";
switch (value) {
  case "admin":
    console.log(`${value} любит кактусы`);
    break;
  case "manager":
    console.log(`${value} пишет карандашом`);
    break;
  case "user":
    console.log(`${value} не понимает как тут оказался`);
    break;
  default:
    console.log(`${value} кто ты?`);
    break;
} */

/* for (i = 0; i < 4; i++) {
  if (i === 2) continue;
  console.log("Ku-ku");
} */

let n = 100;
let m = 30;
let i = n / m + 1;
console.log(i);
