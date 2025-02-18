function nextSlide(slideNumber) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(`slide${slideNumber}`).classList.remove('hidden');
}

function runAway(button) {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function fadeText() {
    document.getElementById("fadeMessage").style.opacity = 1;
}

function celebrate() {
    nextSlide(5);
    document.body.style.background = "gold";
    setTimeout(() => document.body.style.background = "linear-gradient(to bottom, #ffe4e1, #fff8e7)", 1000);
}