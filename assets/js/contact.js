const container = document.querySelector(".container");
const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainerImg = document.querySelector(
  "#dark-container .home-img img"
);

darkContainerImg.style.backgroundColor = "#15202b";
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
      darkContainerImg.style.backgroundColor = "#ffffff";
    } else {
      cloneContainer.style.clipPath = "circle(0% at 0 0)";
      darkContainerImg.style.backgroundColor = "#15202b";
    }
  });
});
