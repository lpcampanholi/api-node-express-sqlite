import autor from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const autoresResultado = await autor.find({});
      res.status(200).json(autoresResultado);
    } catch (erro) {
      next(erro);
    };
  };

  static async listarAutorPorId(req, res, next) {
    const id = req.params.id;
    try {
      const autorEncontrado = await autor.findById(id);
      if (autorEncontrado !== null){
        res.status(200).send(autorEncontrado);
      } else {
        res.status(404).send( {message: "Id do Autor não localizado"} );
      };
    } catch (erro) {
      next(erro);
    };
  };

  static async cadastrarAutor(req, res, next) {
    const novoAutor = req.body;
    try {
      await autor.create(novoAutor);
      res.status(201).send("Autor cadastrado com sucesso");
    } catch (erro) {
      next(erro);
    };
  };

  static async atualizarAutor(req, res, next) {
    const id = req.params.id;
    try {
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).send("Autor atualizado com sucesso");
    } catch (erro) {
      next(erro);
    };
  };

  static async excluirAutor(req, res, next) {
    const id = req.params.id;
    try {
      await autor.findByIdAndDelete(id);
      res.status(200).send("Autor removido com sucesso");
    } catch (erro) {
      next(erro);
    };
  };

};

export default AutorController;
