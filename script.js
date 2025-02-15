// Typing Animation
const typing = document.querySelector(".typing");
const text = ["Eeshanee", "a Full Stack Developer", "a Machine Learning Enthusiast", "a Data Science Enthusiast",];
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
