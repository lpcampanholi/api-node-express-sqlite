import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

  routes.get("/autores", AutorController.consultarAutores)
  .get("/autores/:id", AutorController.consultarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);

export default routes;