function compartir() {
    if (navigator.share) {
        navigator.share({
            title: 'Tarjeta de presentación',
            text: 'Tarjeta del Dr Fabricio Vásquez',
            url: 'https://reaperdev.netlify.app/'
        })
        .then(() => console.log('Contenido compartido con éxito.'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
        window.open('whatsapp://send?text=Tarjeta%20del%20Dr%20Fabricio%20Vásquez%20-%20https%3A%2F%2Fwww.ejemplo.com', '_blank');
    }
}

    function hoverEffect(isHover) {
        var decoracion = document.querySelector('.mid-decoration');
        if (isHover) {
            decoracion.classList.add('animate');
        } else {
            decoracion.classList.remove('animate');
        }
    }

    // Función para iniciar la animación
    function iniciarAnimacion() {
        var decoracion = document.querySelector('.mid-decoration');
        decoracion.classList.add('move');
        setTimeout(function() {
            decoracion.classList.remove('move');
        }, 1500); // Duración de la animación (en milisegundos)
    }

    // Función para verificar si el mouse está sobre el elemento
    function verificarHover() {
        var decoracion = document.querySelector('button');
        if (!decoracion.matches(':hover')) { // Si no hay hover
            iniciarAnimacion(); // Iniciar la animación
        }
    }

    // Ejecutar iniciarAnimacion cada 5 segundos
    setInterval(verificarHover, 5000);
