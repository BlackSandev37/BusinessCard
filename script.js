// Función para activar los enlaces en el segundo clic
function activarEnlacesSegundoClic() {
    // Seleccionar todos los botones
    const botones = document.querySelectorAll('button');

    // Iterar sobre cada botón
    botones.forEach(boton => {
        let contador = 0;

        // Agregar evento de clic a cada botón
        boton.addEventListener('click', function() {
            contador++;

            // Si es el segundo clic, activar el enlace
            if (contador == 2) {
                // Obtener el enlace del botón
                const enlace = boton.dataset.enlace;
                const funcion = boton.dataset.funcion;
                const target = boton.dataset.blank ? '_blank' : '_self';

                    // Redirigir a la URL del enlace
                    if (enlace) {
                        window.open(enlace, target);
                        contador = 0;
                    }
                    // Llamar a la función
                    if (funcion && typeof window[funcion] == 'function') {
                        window[funcion]();
                        contador = 0;
                    }
            }
        });
    });
}

// Llamar a la función para activar los enlaces en el segundo clic
activarEnlacesSegundoClic();

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

function AnimacionStandby(elemento) {
    elemento.classList.add('rotar');
    setTimeout(function() {
        elemento.classList.remove('rotar');
    }, 1000); // Duración de la animación (en milisegundos)
}

// Función para verificar si el mouse está sobre el elemento
function verirHover() {
    var elementos = document.querySelectorAll('.pop button svg'); // Seleccionar todos los elementos SVG dentro de los botones con la clase "pops"
    elementos.forEach(function(elemento) {
        if (!elemento.matches(':hover')) { // Si no hay hover
            AnimacionStandby(elemento); // Iniciar la animación para el elemento actual
        }
    });
}

// Ejecutar verificarHover cada 2 segundos
setInterval(verirHover, 3000);

function activarAnimaciones(element) {
    // Obtener los elementos y y z
    var elementoY = element.querySelector('.Layer1');
    var elementoZ = element.querySelector('.Layer2');
    // Agregar clase para activar animación en y
    elementoY.classList.add('salto');
    elementoZ.classList.add('sombra');
    
    // Agregar clase para activar animación en z después de un retraso
    timeoutID = setTimeout(function() {
        elementoY.classList.remove('salto');
        elementoZ.classList.remove('sombra');
    }, 1500); // Retraso de 1000 milisegundos (1 segundo)
  }

  function verifiHover() {
    var elementos = document.querySelectorAll('.direccion'); // Seleccionar todos los elementos SVG dentro de los botones con la clase "pops"
    elementos.forEach(function(element) {
        if (!element.matches(':hover')) { // Si no hay hover
            activarAnimaciones(element); // Iniciar la animación para el elemento actual
        }
    });
}

// Ejecutar verificarHover cada 2 segundos
setInterval(verifiHover, 2000);

function textColoring(){
    document.querySelector('.foot span');
}

document.addEventListener('DOMContentLoaded', function() {
    activarEnlacesSegundoClic();
});
