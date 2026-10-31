// Formula 1 Race Intelligence Dashboard
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    // Display current year in the footer
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    // Dashboard loading indicator
    const dashboard = document.querySelector("iframe");
    if (dashboard) {
        dashboard.addEventListener("load", function () {
            dashboard.style.opacity = "1";
        });
    }
    console.log("F1 Race Intelligence website loaded successfully!");
});
