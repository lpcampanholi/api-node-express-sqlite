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
      const livroResultados = await livro.findById(id).populate("autor").exec();
      res.status(200).send(livroResultados);
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
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).send("Livro atualizado com sucesso");
    } catch(erro) {
      next(erro);
    };
  };

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send({message: "Livro removido com sucesso"});
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
