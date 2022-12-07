/* console.log("script init");
console.log(window.location); */
//Практика
//п1
const header = document.querySelector("header");
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
/* const section = document.querySelector(".container");
section.outerHTML = "<section><h2>Заголовок списка</h2></section>"; */

let section = document.createElement("section");
section.className = "container";
themeBtn.after(section);

let blockContent = document.createElement("div");
blockContent.className = "content";
section.prepend(blockContent);

let blockList = document.createElement("div");
blockList.className = "list_title";
blockContent.prepend(blockList);

let listOl = document.createElement("ol");
listOl.className = "list";
blockList.prepend(listOl);

let li1 = document.createElement("li");
li1.className = "list_item";
li1.innerHTML = "Пункт №1";
listOl.prepend(li1);

let li2 = document.createElement("li");
li2.className = "list_item";
li2.innerHTML = "Пункт №2";
li1.after(li2);

let li3 = document.createElement("li");
li3.className = "list_item";
li3.innerHTML = "Пункт №3";
li2.after(li3);

const h2 = document.createElement("h2");
h2.innerHTML = "Заголовок списка";
listOl.before(h2);

//3
const buttonElem = document.createElement("button");
buttonElem.className = "btn";
buttonElem.innerHTML = "Добавить Элемент";
blockContent.append(buttonElem);

const input = document.createElement("input");
input.type = "text";
input.className = "css-class-name"; // set the CSS class
buttonElem.append(input);

let inputClick = document.querySelector(".btn");
function myClick() {
  document.querySelector("css-class-name").value;
  document.querySelector(".list_item").innerHTML += a;
}
buttonElem.addEventListener("click", myClick);

/*const listItem = document.querySelector("li + .active");
const listItems = document.querySelectorAll(".list_item");
console.log(listItem, listItems);*/

/*const header = document.querySelector("header");
header.innerHTML = "<h3>NEW TITLE</h3>";
console.log(header.innerHTML);

const footer = document.querySelector("footer");
footer.outerHTML = "<div><p>HELLO FOOTER</p></div>";
console.log(footer.outerHTML);*/

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
