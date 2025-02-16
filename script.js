// Typing Animation
const typing = document.querySelector(".typing");
const text = ["Eeshanee", "a Developer", "a Blockchain Enthusiast", "a Data Scientist", "a Machine Learning Engineer"];
let i = 0, j = 0, isDeleting = false;

function type() {
    if (j < text[i].length && !isDeleting) {
        typing.innerHTML += text[i][j];
        j++;
        setTimeout(type, 100);
    } else if (j > 0 && isDeleting) {
        typing.innerHTML = text[i].substring(0, j - 1);
        j--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % text.length;
        setTimeout(type, 800);
    }
}
type();

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Effect for Sections
const sections = document.querySelectorAll("section");

const fadeInOptions = {
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("fade-in");
        fadeInObserver.unobserve(entry.target);
    });
}, fadeInOptions);

sections.forEach(section => {
    fadeInObserver.observe(section);
});
particlesJS.load("particles-js", "particles-config.json", function () {
    console.log("Particles.js loaded successfully!");
});
