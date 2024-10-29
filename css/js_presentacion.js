

// botón de cambio de tema oscuro
// Agregar el evento de clic al botón

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light');
    // Cambia el texto del botón según el tema
    if (document.body.classList.contains('light')) {
        this.textContent = 'Cambiar a modo oscuo';
    } else {
        this.textContent = 'Cambiar a modo claro';
    }
});



// pantalla completa

function openFullscreen() {
if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
}
}