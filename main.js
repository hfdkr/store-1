const btn = document.getElementById("mobile-btn");
const mobileNav = document.getElementById("mobile-nav");

btn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});