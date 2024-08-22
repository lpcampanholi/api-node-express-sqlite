import { atualizaTextoEditor } from "./document.js";

const socket = io();

function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto)
};

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado! \n Motivo: ${motivo}`);
});

export { emitirTextoEditor };
