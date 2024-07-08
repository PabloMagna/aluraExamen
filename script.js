const textarea = document.querySelector(".textarea");
const salidaTexto = document.querySelector(".salida-texto");
const seccionTexto1 = document.querySelector(".texto1");
const seccionTexto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".copiar");

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚáéíóú".split("");

function validar(textoValidar) {
    return [...textoValidar].every(char => !letras.includes(char));
}

function encriptar() {
    const texto = textarea.value;
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }

    const reglas = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
    const salida = [...texto].map(char => reglas[char] || char).join("");

    textarea.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function desencriptar() {
    const texto = textarea.value;
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }

    const reglas = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };
    let salida = texto;

    for (const [key, value] of Object.entries(reglas)) {
        salida = salida.split(key).join(value);
    }

    textarea.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "block";
}

function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
    btnCopiar.style.display = "none";
}

function copiar() {
    const copia = salidaTexto.value;
    navigator.clipboard.writeText(copia);

    const anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
