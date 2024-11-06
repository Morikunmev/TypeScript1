"use strict";
const canvas = document.getElementById("span");
if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
}
const divElement = document.getElementById("miDiv");
if (divElement instanceof HTMLCanvasElement) {
    divElement.innerHTML = "Nuevo contenido";
}
const inputElemet = document.getElementById("miInput");
if (inputElemet instanceof HTMLInputElement) {
    inputElemet.value = "Nuevo valor";
    inputElemet.disabled = true;
}
const videoElement = document.getElementById("miVideo");
if (videoElement instanceof HTMLVideoElement) {
    videoElement.play();
    videoElement.pause();
}
function setupForm() {
    const form = document.getElementById("registro");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const submitBtn = document.getElementById("enviar");
    if (form instanceof HTMLFormElement &&
        nombre instanceof HTMLInputElement &&
        email instanceof HTMLInputElement &&
        submitBtn instanceof HTMLButtonElement) {
        form.onsubmit = (e) => {
            e.preventDefault();
            console.log(nombre.value, email.value);
            submitBtn.disabled = true;
        };
    }
}
//# sourceMappingURL=ejercicio5_aserciones_tipos.js.map