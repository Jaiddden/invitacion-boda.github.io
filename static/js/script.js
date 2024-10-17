document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("music");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const waveAnimation = document.getElementById("waveAnimation");
    const pulseAnimation = document.getElementById("pulseAnimation");
    let isPlaying = false;

    // Manejo del botón de reproducción/pausa
    playPauseBtn.addEventListener("click", function() {
        if (isPlaying) {
            music.pause(); // Pausar música
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Cambiar ícono a play
            waveAnimation.style.display = 'none'; // Ocultar ondas
            pulseAnimation.style.display = 'none'; // Ocultar pulso
            isPlaying = false;
        } else {
            music.play(); // Reproducir música
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Cambiar ícono a pausa
            waveAnimation.style.display = 'block'; // Mostrar ondas
            pulseAnimation.style.display = 'block'; // Mostrar pulso
            isPlaying = true;
        }
    });

    // Lógica de cuenta regresiva
    function updateCountdown() {
        const weddingDate = new Date("2025-10-25T15:00:00Z").getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar resultados
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown-container").innerHTML = "<h2>¡Es el gran día!</h2>";
        }
    }

    // Actualizar cuenta regresiva cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);
});

// Crear el Intersection Observer
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Añadir clase 'visible' al elemento que entra en vista
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element); // Observar cada elemento con la clase 'fade-in'
    });
});

// Función para abrir el modal
function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Mostrar el modal
    modalImg.src = img.src; // Establecer la fuente de la imagen ampliada
    captionText.innerHTML = img.alt; // Establecer el texto de la imagen
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Ocultar el modal
}
