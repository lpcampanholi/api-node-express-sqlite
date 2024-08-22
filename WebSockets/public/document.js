import { emitirTextoEditor } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

textoEditor.addEventListener("input", (e) => {
  emitirTextoEditor(e.target.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
};

export { atualizaTextoEditor };
