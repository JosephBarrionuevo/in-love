document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg"
        // Agrega más rutas de imágenes aquí
    ];
    const presentDivs = document.querySelectorAll(".present");
    let currentIndex = 0;

    function cambiarImagen() {
        presentDivs.forEach((div, index) => {
            const img = div.querySelector("img");
            img.src = imagenes[currentIndex];
            img.alt = currentIndex + 1;
        });

        currentIndex++;
        if (currentIndex >= imagenes.length) {
            currentIndex = 0; // Reinicia el índice si llega al final de la lista de imágenes
        }

        setTimeout(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
    }

    cambiarImagen(); // Inicia la secuencia de cambio de imágenes
});