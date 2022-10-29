/* const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
const mapArr = names.map((el) => el.name);
console.log(mapArr); */

/* const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
const mapArr = names.map((el) => ({ name: el.name, handCout: 2 }));
console.log(mapArr); */

/* const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
console.log(names);
const arr = names.map(() => ({ name: "Unknown" }));
console.log(arr);
console.log(names); */

/* const arr = [1, -2, 5, -6, 9, -8, 5];
const result = arr.reduce((prev, cur) => {
  if (cur > 0) {
    return prev + cur;
  }
  return prev;
});
console.log(result); */

//практика №1 вар.1
/* const positiveEvenSum = (arr) => {
  arr.reduce((prev, cur) => {
    if (cur % 2 === 0 && cur > 0) {
      return prev + cur;
    }
    return prev;
  }, 0);
};
console.log(positiveEvenSum([1, 2, -3, -4, 5, 6])); */

//№1 вар.2
/* const positiveEvenSum = (arr) =>
  arr.filter((el) => el > 0 && el % 2 === 0).reduce((prev, cur) => prev + cur);
console.log(positiveEvenSum([1, 2, -3, -4, 5, 6])); */

//№2 вар.1
/* const arr = [1, 2, 1, 3, 4, 5, 2, 3]; */
/* let arr2 = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(arr2); */

//вар.2
function uniqArrItem(itemArray) {
  const result = [];
  for (let index = 0; index < itemArray.length; index++) {
    if (!result.includes(itemArray[index])) {
      result.push(itemArray[index]);
    }
  }
  return result;
}
const uniqResult = uniqArrItem([1, 2, 1, 3, 4, 5, 2, 3]);
console.log(uniqResult);
