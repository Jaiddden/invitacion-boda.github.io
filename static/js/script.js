document.addEventListener("DOMContentLoaded", function() {
    // Manejo del Formulario de Confirmación
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
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = 'success.html'; // Redirige a la página de éxito
                } else {
                    alert('Error: ' + data.message); // Muestra un mensaje de error
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario.'); // Muestra un mensaje de error
            });
        });
    }
});
