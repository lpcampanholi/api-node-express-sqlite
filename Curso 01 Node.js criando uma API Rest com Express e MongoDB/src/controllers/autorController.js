import { autor } from "../models/Autor.js";

class AutorController {

  static async consultarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch(erro) {
      res.status(500).send(`Erro ao buscar os Autores. ${erro.message}`);
    };
  };

  static async consultarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch(erro) {
      res.status(500).send(`Autor não encontrado - ${erro.message}`);
    };
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor});
    } catch(erro) {
      res.status(500).send(`Falha ao cadastrar autor. Erro:${erro.message}`);
    };
  };

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).send("Autor atualizado");
    } catch(erro) {
      res.status(500).send(`Não foi possível atualizar o autor. Erro: ${erro.message}`);
    };
  };

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      const autorExcluido = await autor.findByIdAndDelete(id);
      res.status(200).send("Autor excluído");
    } catch(erro) {
      res.status(500).send(`Não foi possível excluir o autor. Erro: ${erro.message}`);
    };
  };

};

export default AutorController;