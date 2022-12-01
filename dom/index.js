/* console.log("script init");
console.log(window.location); */
//Практика
//п1
const header = document.querySelector(".header");
header.textContent = "Моя попытка написать страницу на JS";

/*кнопка смены темы*/
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
container.outerHTML =
  "<div><div><h2>Список элементов</h2><ol><li>Пунктик #1</li><li>Номер 2</li><li>Значение три</li></ol></div></div>";

/*const listItem = document.querySelector("li + .active");
const listItems = document.querySelectorAll(".list_item");
console.log(listItem, listItems);*/

/*const header = document.querySelector("header");
header.innerHTML = "<h3>NEW TITLE</h3>";
console.log(header.innerHTML);*/

/*const footer = document.querySelector("footer");
footer.outerHTML = "<div><p>HELLO FOOTER</p></div>";
console.log(footer.outerHTML);*/

/*const addButton = document.getElementById("addButton");
addButton.textContent = "Создать новый жлемент"; */

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
