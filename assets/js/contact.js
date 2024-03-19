const container = document.querySelector(".container");

const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

console.log(cloneContainer);
const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainer = document.querySelectorAll("#dark-container");

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

document.getElementById("send-message").addEventListener("click", function () {
  var name = document.getElementById("name").value.replace(/ /g, "%20");
  var email = document.getElementById("email").value.replace(/@/g, "%40");
  var message = document.getElementById("message").value.replace(/ /g, "%20");
  var subject = encodeURIComponent("New Message from Portfolio Contact Form");
  var body =
    "Name: " +
    name +
    "%0D%0A" +
    "Email: " +
    email +
    "%0D%0A" +
    "Message: " +
    message;
  window.location.href =
    "mailto:sezin.akbulut@gmail.com?subject=" + subject + "&body=" + body;
});
