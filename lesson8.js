/* let obj1 = {
  name: "Ira",
  age: 32,
  "favorite fruit": "ingir",
};
let newObj = Object.assign(obj1);
let newObj2 = { ...obj1 };
newObj2.age = 18;
console.log(obj1, newObj, newObj2);*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* let filterArr = arr.filter((e) => e % 2 === 0);
let reduceArr = filterArr.reduce((accum, curent) => accum + curent);
console.log(reduceArr); */
for (let varibal of arr) {
  let filterArr = arr.filter((e) => e % 2 === 0);
  let reduceArr = filterArr.reduce((accum, curent) => accum + curent);
  console.log(reduceArr);
}
