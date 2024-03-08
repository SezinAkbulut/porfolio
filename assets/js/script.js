const container = document.querySelector(".container");

const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

console.log(cloneContainer);

const darkContainer = document.querySelector("#dark-container .home-img img");

darkContainer.src = "assets/img/home-perfil.png";
