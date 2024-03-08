const container = document.querySelector(".container");

const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

console.log(cloneContainer);
const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainer = document.querySelectorAll("#dark-container");
const darkContainerImg = document.querySelector(
  "#dark-container .home-img img"
);

darkContainer.src = "assets/img/home-perfil.png";

toggleIcons.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    icons.forEach((icon) => {
      icon.classList.toggle("bx-sun");
    });
  });
});
