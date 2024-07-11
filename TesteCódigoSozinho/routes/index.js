import express from "express";
import alunos from "./alunosRoutes.js";
import responsaveis from "./responsaveisRouter.js";

const routes = (app) => {
  app.route("/", (req, res) => {
    res.send("Bem-vindo ao App!");
  });

  app.use(express.json(), alunos, responsaveis);

};

export default routes;
