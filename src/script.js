import "./normalize.css";
import "./style.css";
import { observeSections } from "./observer.js";

const navMenu = document.querySelector("nav");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navOptions = document.querySelectorAll(".nav-option");
const projectCards = document.querySelectorAll(".project-card");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
});

for (const option of navOptions) {
    option.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburgerBtn.classList.remove("active");
    });
}

for (const card of projectCards) {
    const closeBtn = card.querySelector(".close-project");
    const cardFront = card.querySelector(".card-front");

    cardFront.addEventListener("click", () => {
        card.classList.add("back-visible");
    });

    closeBtn.addEventListener("click", () => {
        card.classList.remove("back-visible");
    });
}

observeSections();
