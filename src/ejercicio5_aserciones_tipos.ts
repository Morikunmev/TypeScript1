const canvas = document.getElementById("span");
//nukk si no lo encuentra
//HTMLElement si lo encuentra

//?? como sabe TypeScript que realmente esta recuperando un elemento  <canvas />

//es inferencia -> TypeScript se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement
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
  // Métodos específicos de video
  videoElement.play();
  videoElement.pause();
}

function setupForm() {
  const form = document.getElementById("registro");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const submitBtn = document.getElementById("enviar");
  if (
    form instanceof HTMLFormElement &&
    nombre instanceof HTMLInputElement &&
    email instanceof HTMLInputElement &&
    submitBtn instanceof HTMLButtonElement
  ) {
    form.onsubmit = (e) => {
      e.preventDefault();
      console.log(nombre.value, email.value);
      submitBtn.disabled = true;
    };
  }
}

//typeof - para tipos
// instanceof - para instancias