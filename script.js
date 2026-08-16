// ===============================
// CORAZONES FLOTANDO
// ===============================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "♥";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (10 + Math.random() * 12) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 10000);
}


// Crear corazones cada cierto tiempo

setInterval(crearCorazon, 1800);