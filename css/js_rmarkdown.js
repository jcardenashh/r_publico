// Crear el contenedor para el botón y aplicar estilos de alineación
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "flex-end";
buttonContainer.style.padding = "10px";

// Crear el botón de cambio de tema
const button = document.createElement("button");
button.id = "modo_dark";
button.className = "btn";
button.textContent = "Cambiar a modo oscuro";

// Insertar el botón en el contenedor
buttonContainer.appendChild(button);
document.body.insertBefore(buttonContainer, document.body.firstChild);

// Agregar el evento de clic al botón
button.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        button.textContent = "Cambiar a modo claro";
    } else {
        button.textContent = "Cambiar a modo oscuro";
    }
});
