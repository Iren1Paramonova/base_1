/* console.log("script init");
console.log(window.location); */
//Практика
//п1
const header = document.querySelector(".header");
header.textContent = "Моя попытка написать страницу на JS";

//кнопка смены темы
const themeBtn = document.getElementById("theme_button");

const themeToggle = function () {
  const body = document.body;

  body.classList.toggle("light_theme");

  if (body.classList.contains("light_theme")) {
    themeBtn.textContent = "Темная тема";
  } else {
    themeBtn.textContent = "Светлая тема";
  }
};

themeBtn.addEventListener("click", themeToggle);

//п2
const container = document.querySelector(".container");
container.textContent = "Список элементов";
const list = document.querySelector(".list");


const listItem=document.querySelector("li + .active");
console.log(listItem);

//2
/* const content = document.querySelector(".content");

content.addEventListener("click", (even) =>
  console.log(even.target, even.currentTarget)
);

const list = document.querySelector(".list");

list.addEventListener("click", () => console.log("list"));

const listItems = document.querySelectorAll(".list_item");

for (let item of listItems) {
  item.addEventListener("click", (even) => even.stopPropagation());
} */
