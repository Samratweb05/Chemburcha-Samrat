let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

// Auto-slide every 3 seconds
setInterval(() => changeSlide(0), 3000);

// Initialize slider
showSlides();

// Visitor Counter (Stored in Local Storage)
document.addEventListener("DOMContentLoaded", function () {
    let count = localStorage.getItem("visitorCount") || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").innerText = count;
});


