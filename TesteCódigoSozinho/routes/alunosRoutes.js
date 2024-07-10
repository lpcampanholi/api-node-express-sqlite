import express from "express";
import alunoController from "../controllers/alunoController.js";

const routes = express.Router();

routes
  .get("/alunos", alunoController.buscarAlunos)
  .post("/alunos", alunoController.cadastrarAluno);

export default routes;
