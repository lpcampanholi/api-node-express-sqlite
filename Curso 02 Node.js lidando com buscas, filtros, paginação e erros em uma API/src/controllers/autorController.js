import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;
      next();
    } catch (erro) {
      next(erro);
    };
  };

  static async listarAutorPorId(req, res, next) {
    const id = req.params.id;
    try {
      const autorEncontrado = await autores.findById(id);
      if (autorEncontrado !== null){
        res.status(200).send(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado"));
      };
    } catch (erro) {
      next(erro); 
    };
  };

  static async cadastrarAutor(req, res, next) {
    const novoAutor = req.body;
    try {
      await autores.create(novoAutor);
      res.status(201).send("Autor cadastrado com sucesso");
    } catch (erro) {
      next(erro);
    };
  };

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;

      const autorResultado = await autores.findByIdAndUpdate(id, req.body);

      if (autorResultado ==! null) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado"));
      };

    } catch (erro) {
      next(erro);
    };
  };

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findByIdAndDelete(id);
      if (autorResultado !== null) {
        res.status(200).send("Autor removido com sucesso");
      } else {
        next(new NaoEncontrado("Id do Autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    };
  };

};

export default AutorController;
