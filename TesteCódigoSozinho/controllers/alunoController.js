import aluno from "../models/Aluno.js";

class alunoController {

  static async buscarAlunos(req, res) {
    const alunos = await aluno.find({});
    res.status(200).send(alunos);
  };

  static async cadastrarAluno (req, res) {
    const novoAluno = await aluno.create(req.body);
    res.status(201).send("Aluno cadastrado com sucesso");
  }

};

export default alunoController;
