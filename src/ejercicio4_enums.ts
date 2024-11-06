/**Enums */
/*const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
};

function mostrarMensaje(tipoDeError: any) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}
*/
const enum ERROR_TYPES {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}
function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}
