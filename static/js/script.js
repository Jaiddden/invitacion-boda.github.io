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
    document.getElementById("countdown").innerHTML = `
        <div class="tiempo"><span>${days}</span><span class="label">Días</span></div>
        <div class="colon">:</div>
        <div class="tiempo"><span>${hours.toString().padStart(2, '0')}</span><span class="label">Horas</span></div>
        <div class="colon">:</div>
        <div class="tiempo"><span>${minutes.toString().padStart(2, '0')}</span><span class="label">Minutos</span></div>
        <div class="colon">:</div>
        <div class="tiempo"><span>${seconds.toString().padStart(2, '0')}</span><span class="label">Segundos</span></div>
    `;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡La boda ha comenzado!";
    }
}, 1000);

// Variables para el audio, el botón, la frase y la animación
const music = document.getElementById('music');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = playPauseBtn.querySelector('i');
const songLabel = document.getElementById('songLabel');
const waveAnimation = document.getElementById('waveAnimation');

// Función para reproducir o pausar la música
playPauseBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        songLabel.style.color = "#2ecc71"; // Cambia el color de la frase cuando está en reproducción
        waveAnimation.style.display = "block"; // Muestra la animación de ondas
    } else {
        music.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
        songLabel.style.color = "#555"; // Vuelve al color original cuando se pausa
        waveAnimation.style.display = "none"; // Oculta la animación de ondas
    }
});

// Ajuste para prevenir autoplay en móviles
document.addEventListener('DOMContentLoaded', function() {
    music.pause();
    playPauseIcon.classList.add('fa-play');
});
