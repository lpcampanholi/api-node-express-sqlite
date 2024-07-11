import express from "express";
import responsavelController from "../controllers/responsavelController.js";

const routes = express.Router();

routes
  .get("/responsaveis", responsavelController.buscarResponsaveis)
  .post("/responsaveis", responsavelController.cadastrarResponsavel);

export default routes;
