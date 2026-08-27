import "./normalize.css";
import "./style.css";
import { observeSections, observeHeader } from "./observer.js";

const navMenu = document.querySelector("nav");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navOptions = document.querySelectorAll(".nav-option");
const projectCards = document.querySelectorAll(".project-card");

hamburgerBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
    hamburgerBtn.ariaExpanded = isOpen ? "true" : "false";
    hamburgerBtn.ariaLabel = isOpen ? "Close navigation menu" : "Open navigation menu";
});

for (const option of navOptions) {
    option.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.ariaExpanded = "false";
        hamburgerBtn.ariaLabel = "Open navigation menu";
    });
}

for (const card of projectCards) {
    const closeBtn = card.querySelector(".close-project");
    const cardFront = card.querySelector(".card-front");

    const openCard = () => card.classList.add("back-visible");
    const closeCard = () => card.classList.remove("back-visible");

    cardFront.addEventListener("click", openCard);
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter") openCard();
    });
    closeBtn.addEventListener("click", closeCard);
}

observeSections();
observeHeader();
