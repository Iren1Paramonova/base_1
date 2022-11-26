/* console.log("script init");
console.log(window.location); */
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

//2
const content = document.querySelector(".content");

content.addEventListener("click", (even) =>
  console.log(even.target, even.currentTarget)
);

const list = document.querySelector(".list");

list.addEventListener("click", () => console.log("list"));

const listItems = document.querySelectorAll(".list_item");

for (let item of listItems) {
  item.addEventListener("click", (even) => even.stopPropagation());
}
