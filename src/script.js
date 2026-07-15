import "./normalize.css";
import "./style.css";

const navMenu = document.querySelector("nav");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navOptions = document.querySelectorAll(".nav-option");

if (screen.width <= 600) {
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
}
