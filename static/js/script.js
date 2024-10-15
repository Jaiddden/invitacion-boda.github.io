// Temporizador de cuenta regresiva
const countDownDate = new Date("2025-10-25T17:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza los elementos de la cuenta regresiva
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "¡Es el gran día!";
    }
}, 1000);

// Función para reproducir o pausar el audio
function toggleAudio() {
    const audio = document.getElementById("audio");
    const playIcon = document.querySelector(".play-icon");
    const audioStatus = document.querySelector(".audio-status");

    if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        audioStatus.innerText = "Pausar Música";
    } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        audioStatus.innerText = "Reproducir Música";
    }
}
