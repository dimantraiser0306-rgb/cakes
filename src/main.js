import "./scss/main.scss";

const btnDis = document.querySelector(".btn__disabled");
const checkBox = document.querySelector(".checkBox");

if (checkBox && btnDis) {
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            btnDis.removeAttribute("disabled");
            btnDis.classList.remove("btn__disabled");
        } else {
            btnDis.setAttribute("disabled", "true");
            btnDis.classList.add("btn__disabled");
        }
    });
}

const burgerBtn = document.querySelector(".burger__btn");
const header = document.querySelector(".header__top");
const container = document.querySelector(".container");

burgerBtn.addEventListener("click", function () {
    console.log("click");
    header.classList.toggle("move");
    container.classList.toggle("background__shadow-toggle");
});
