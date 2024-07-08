const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const searchLogo = document.querySelector(".search_logo");

function validarTexto(texto) {
    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(() => {
            aviso.style = "";
        }, 1500);
        return false;
    }

    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        setTimeout(() => {
            aviso.style = "";
        }, 1500);
        return false;
    }

    if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        setTimeout(() => {
            aviso.style = "";
        }, 1500);
        return false;
    }

    return true;
}

function encriptarTexto(texto) {
    texto = texto.replace(/e/mg, "enter");
    texto = texto.replace(/i/mg, "imes");
    texto = texto.replace(/a/mg, "ai");
    texto = texto.replace(/o/mg, "ober");
    texto = texto.replace(/u/mg, "ufat");
    return texto;
}

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "i");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");
    return texto;
}

txtEncriptar.addEventListener("keyup", () => {
    if (txtEncriptar.value !== "") {
        searchLogo.classList.remove("vibrar");
    }
});

btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    if (validarTexto(texto)) {
        texto = encriptarTexto(texto);
        respuesta.textContent = texto;
        txtEncriptar.value = "";
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    if (validarTexto(texto)) {
        texto = desencriptarTexto(texto);
        respuesta.textContent = texto;
        txtEncriptar.value = "";
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    navigator.clipboard.writeText(respuesta.textContent);
    respuesta.textContent = "";
});

const getRandomColor = () => {
    return Math.floor(Math.random() * 360);
};

const logo = document.querySelector('.logo');

logo.addEventListener('animationiteration', () => {
    const newColor = getRandomColor();
    document.documentElement.style.setProperty('--random-color', `${newColor}deg`);
});

