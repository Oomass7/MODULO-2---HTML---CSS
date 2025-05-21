const formulario = document.getElementById('my-form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('msg').value;

    const webhookUrl = 'https://discordapp.com/api/webhooks/1374576815116521482/8_y1fBW1z7Q2pKS4KU8iRhH_81kQeUml4wpTR6_o2-O8d8XCYaRxTjggYsj-iAp6HAFf'; // Reemplaza con tu URL del webhook

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `**Nuevo envío de formulario:**\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Datos enviados a Discord');
            // Puedes agregar una confirmación al usuario aquí, por ejemplo
            alert('¡Gracias por tu envío!');
            formulario.reset(); // Limpiar el formulario
        } else {
            console.error('Error al enviar los datos:', response.status);
            alert('Hubo un error al enviar los datos. Intenta de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos. Intenta de nuevo.');
    });
});