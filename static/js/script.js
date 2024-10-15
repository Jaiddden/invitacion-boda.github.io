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

    // Actualizar el contenido del temporizador
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡La boda ha comenzado!";
    }
}, 1000);

// Control del audio
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.querySelector('.play-icon');
const audioStatus = document.querySelector('.audio-status');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
            .then(() => {
                playIcon.textContent = "⏸️"; // Cambia el icono a pausa
                audioStatus.textContent = "Pausar Música";
                playPauseButton.classList.add('audio-playing');
            })
            .catch(error => {
                console.error("Error al intentar reproducir:", error);
                alert("Por favor, permite la reproducción de audio en tu dispositivo.");
            });
    } else {
        audio.pause();
        playIcon.textContent = "▶️"; // Cambia el icono a play
        audioStatus.textContent = "Reproducir Música";
        playPauseButton.classList.remove('audio-playing');
    }
});
