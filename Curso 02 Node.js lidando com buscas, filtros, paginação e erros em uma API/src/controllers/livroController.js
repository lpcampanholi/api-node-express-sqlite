import NaoEncontrado from "../erros/NaoEncontrado.js";
import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({}).populate("autor").exec();
      res.status(200).json(listaLivros);
    } catch(erro) {
      next(erro);
    };
  };

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livrosResultado = await livro.findById(id).populate("autor").exec();
      if (livrosResultado !== null) {
        res.status(200).send(livrosResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      await livro.create(novoLivro);
      res.status(201).send("Livro criado com sucesso");
    } catch(erro) {
      next(erro);
    };
  };

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroResultado = await livro.findByIdAndUpdate(id, req.body);
      if (livroResultado !== null) {
      res.status(200).send("Livro atualizado com sucesso");
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroResultado = await livro.findByIdAndDelete(id);
      if (livroResultado !== null) {
      res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async listarLivroPorEditora(req, res, next) {
    try {
      const editora = req.query.editora;
      const livrosResultado = await livro.find({ editora: editora });
      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    };
  };

};

export default LivroController;
