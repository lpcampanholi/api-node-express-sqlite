const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res))
  .get("/pessoas/todos", (req, res) => pessoaController.pegaTodasAsPessoas(req, res))
  .get("/pessoas/:id", (req, res) => pessoaController.pegaUmPorId(req, res))
  .post("/pessoas", (req, res) => pessoaController.criaNovo(req, res))
  .put("/pessoas/:id", (req, res) => pessoaController.atualiza(req, res))
  .delete("/pessoas/:id", (req, res) => pessoaController.exclui(req, res))
  .get("/pessoas/:estudante_id/matriculas", (req, res) => pessoaController.pegaMatriculasAtivas(req, res))
  .get("/pessoas/:estudante_id/matriculas/todos", (req, res) => pessoaController.pegaTodasAsMatriculas(req, res))
  .get("/pessoas/:estudante_id/matriculas/confirmadas", (req, res) => matriculaController.pegaMatriculasPorEstudante(req, res))
  .get("/pessoas/matriculas/lotadas", (req, res) => matriculaController.pegaCursosLotados(req, res))
  .get("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.pegaUm(req, res))
  .post("/pessoas/:estudante_id/matriculas", (req, res) => matriculaController.criaNovo(req, res))
  .put("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.atualiza(req, res))
  .delete("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.exclui(req, res));

module.exports = router;
