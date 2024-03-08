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
    toggle.classList.add("disabled");
    setTimeout(() => {
      toggle.classList.remove("disabled");
    }, 1500);

    icons.forEach((icon) => {
      icon.classList.toggle("bx-sun");
    });

    container.classList.toggle("active");
    cloneContainer.classList.toggle("active");

    if (cloneContainer.classList.contains("active")) {
      cloneContainer.style.clipPath = "circle(150% at 0 0)";
    } else {
      cloneContainer.style.clipPath = "circle(0% at 0 0)";
    }
  });
});
