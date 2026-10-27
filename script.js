const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
const petalsContainer = document.querySelector(".petals");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    const size = Math.random() * 10 + 10;
    petal.style.width = size + "px";
    petal.style.height = size * 1.4 + "px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 8 + 10 + "s";
    petal.style.animationDelay = Math.random() * 6 + "s";
    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 20000);
}

setInterval(createPetal, 450);

async function playMusic() {
    try {
        music.volume = 0.4;
        await music.play();
        musicBtn.classList.add("hidden");
    } catch (error) {
        console.warn("Otomatik çalma engellendi, butona tıklanması gerekiyor.", error);
    }
}

musicBtn.addEventListener("click", playMusic);

window.addEventListener("load", playMusic);