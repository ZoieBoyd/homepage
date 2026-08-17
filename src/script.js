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

observeSections();

/*
const projectData = {
    battleship: {
        title: "Battleship",
        description: "",
        link: "https://zoieboyd.github.io/battleship/",
    },
    todo: {
        title: "To Do",
        description: "",
        link: "https://zoieboyd.github.io/to-do-list/",
    },
    weather: {
        title: "Weather App",
        description: "",
        link: "https://zoieboyd.github.io/weather-app/",
    },
    tictactoe: {
        title: "Tic-Tac-Toe",
        description: "",
        link: "https://zoieboyd.github.io/tic-tac-toe/",
    },
    library: {
        title: "Library",
        description: "",
        link: "https://zoieboyd.github.io/library/",
    },
    calculator: {
        title: "Calculator",
        description: "",
        link: "https://zoieboyd.github.io/calculator/",
    },
};

for (const card of projectCards) {
    card.addEventListener("click", () => {
        console.log(projectData[card.id]);
    });
}
*/
