import { autor } from "../models/Autor.js";

class AutorController {

  static async consultarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch(erro) {
      next(erro);
    };
  };

  static async consultarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).send({message: "Id do Autor não localizado"});
      };

    } catch(erro) {
      next(erro);
    };
  };

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor});
    } catch(erro) {
      next(erro);
    };
  };

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).send("Autor atualizado");
    } catch(erro) {
      next(erro);
    };
  };

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorExcluido = await autor.findByIdAndDelete(id);
      res.status(200).send("Autor excluído");
    } catch(erro) {
      next(erro);
    };
  };

};

export default AutorController;