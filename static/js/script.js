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
