/* =========================================
   NAVEGACIÓN
========================================= */

function mostrarSeccion(id) {

    // Ocultar todas las pantallas
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    // Mostrar la pantalla seleccionada
    const nuevaSeccion = document.getElementById(id);

    nuevaSeccion.classList.remove("hidden");

    // Volver al principio
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    // Animación
    nuevaSeccion.classList.add("fade-in");

    setTimeout(() => {
        nuevaSeccion.classList.remove("fade-in");
    }, 1000);

    // Si es la pantalla final, crear corazones
    if (id === "final") {
        crearCorazones();
    }
}


/* =========================================
   COMENZAR
========================================= */

function comenzar() {

    mostrarSeccion("intro");

    /*
    Si posteriormente quieres agregar música,
    puedes descomentar el audio del HTML
    y activar esto:

    const music = document.getElementById("music");

    if (music) {
        music.volume = 0.25;
        music.play();
    }
    */
}


/* =========================================
   VOLVER AL INICIO
========================================= */

function volverInicio() {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById("inicio").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================
   CORAZONES FLOTANDO
========================================= */

function crearCorazones() {

    const container = document.querySelector(".hearts-container");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        heart.style.animationDelay =
            (Math.random() * 5) + "s";

        container.appendChild(heart);
    }
}


/* =========================================
   EFECTO DE ESTRELLAS
========================================= */

function crearEstrellas() {

    const starsContainer = document.querySelector(".stars");

    if (!starsContainer) return;

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("div");

        star.style.position = "absolute";
        star.style.width = Math.random() * 5 + "px";
        star.style.height = star.style.width;

        star.style.background = "white";
        star.style.borderRadius = "50%";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.opacity = Math.random() * 0.6 + 0.1;

        const duracion = Math.random() * 1.5 + 0.5;

        star.style.animation = `twinkle ${duracion}s infinite alternate`;

        // Cada estrella empieza en un momento diferente
        star.style.animationDelay = Math.random() * 5 + "s";

        starsContainer.appendChild(star);
    }
}

crearEstrellas();