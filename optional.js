//callbacks
/* const request = () => {
  console.log("init request");
  setTimeout(() => {
    console.log("create response");
    const response = {
      name: "Ira",
      age: 28,
    };
    setTimeout(() => {
      response.modifide = true;
      console.log(response);
    }, 2000);
  }, 2000);
};
request(); */

//Promise
const requestOne = () => {
  console.log("init request");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("create response");
      const response = {
        name: "Ira",
        age: 28,
      };
      resolve(response);
    }, 2000);
  });
};
const requestTwo = (result) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      result.modifide = true;
      /* reject("Custom error");
      throw new Error("CUSTOM ERROR"); */
      resolve(result);
    }, 2000);
  });
};
/* console.log(requestOne()); */
/* requestOne().then((result) => console.log(result)); */

/* requestOne()
  .then((result) => requestTwo(result))
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("finelly")); */

//асинхронные ф-ии
const requestFunc = async () => {
  const result = await requestOne();
  const response = await requestTwo(result);
  console.log(response);
};
requestFunc();
