const sections = document.querySelectorAll("section");
const observableElements = document.querySelectorAll(".observable");
const header = document.querySelector("header");

const observerOptions = {
    root: null, // use viewport as container
    rootMargin: "0px", // distance from bottom until things get detected
    threshold: 0.35, // triggers when 35% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

export function observeSections() {
    observableElements.forEach((element) => {
        observer.observe(element);
    });
}

const headerResizeObserver = new ResizeObserver(() => {
    const height = header.offsetHeight;
    document.documentElement.style.setProperty(`--header-height`, `${height}px`);
});

export const observeHeader = () => headerResizeObserver.observe(header);
