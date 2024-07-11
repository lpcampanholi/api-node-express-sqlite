import aluno from "../models/Aluno.js";

class alunoController {

  static async buscarAlunos(req, res) {
    try {
      const alunos = await aluno.find({}).populate("responsavel").exec();
      res.status(200).send(alunos);
    } catch(erro) {
      res.send(erro);
    }
  };

  static async cadastrarAluno (req, res) {
    const novoAluno = await aluno.create(req.body);
    res.status(201).send("Aluno cadastrado com sucesso");
  };

};

export default alunoController;
