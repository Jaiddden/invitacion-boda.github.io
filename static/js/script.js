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

    // Mostrar resultados en los elementos
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡La boda ha llegado!";
    }
}, 1000);

// Reproductor de música
const audio = document.getElementById("audio");
const audioButton = document.getElementById("audio-button");
const audioStatus = document.querySelector(".audio-status");

audioButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        audioStatus.innerText = "Pausar Música";
        audioButton.classList.add("playing");
    } else {
        audio.pause();
        audioStatus.innerText = "Reproducir Música";
        audioButton.classList.remove("playing");
    }
});
