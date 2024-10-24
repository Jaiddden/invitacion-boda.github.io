document.addEventListener("DOMContentLoaded", function() {
    // 1. Manejo del Formulario de Confirmación
    const form = document.getElementById('confirmationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío tradicional del formulario

            // Obtener los datos del formulario
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                attendance: formData.get('attendance'),
                phone: formData.get('phone'),
                email: formData.get('email')
            };

            // URL de tu Google Apps Script
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyEXlbrZERjxkoQtY1Dck6ceiSgoVvXCuVUkzk2su0GFHOHKua-c3R6TqZnJ39v6GoSSA/exec'; // Reemplaza con la URL correcta

            // Enviar la solicitud POST
            fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'no-cors' // Usar modo 'no-cors' temporalmente
            })
            .then(() => {
                window.location.href = 'success.html'; // Redirige a la página de éxito
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario.');
            });
            
        });
    }

    // 2. Temporizador de Cuenta Regresiva
    function updateCountdown() {
        const weddingDate = new Date("2025-10-25T15:00:00").getTime(); // Fecha de la boda
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        } else {
            document.getElementById("days").textContent = 0;
            document.getElementById("hours").textContent = 0;
            document.getElementById("minutes").textContent = 0;
            document.getElementById("seconds").textContent = 0;
        }
    }

    // Actualiza la cuenta regresiva cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 3. Control de Música
    const music = document.getElementById("music");
    const playPauseBtn = document.getElementById("playPauseBtn");
    let isPlaying = false;

    if (playPauseBtn && music) {
        playPauseBtn.addEventListener("click", function() {
            if (isPlaying) {
                music.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Ícono de play
            } else {
                music.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Ícono de pausa
            }
            isPlaying = !isPlaying;
        });
    }

    // 4. Botón para Agendar Evento en Google Calendar
    const agendaBtn = document.getElementById('agendaBtn');
    if (agendaBtn) {
        agendaBtn.addEventListener('click', function() {
            const calendarLink = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Nuestra%20Boda&dates=20251025T150000Z/20251025T180000Z';
            window.open(calendarLink, '_blank');
        });
    }
});
