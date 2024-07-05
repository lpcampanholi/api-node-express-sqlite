import livro from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res) => {
    try {
      const listaLivros = await livro.find({})
      res.status(200).json(listaLivros);
    } catch(erro) {
      res.status(500).json({ message: `Erro interno no servidor. Erro: ${erro}`});
    };
  };

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const livroResultados = await livro.findById(id);
      res.status(200).send(livroResultados);
    } catch(erro) {
      res.status(400).send({message: `${erro.message} - Id do livro não localizado.`});
    };
  };

  static cadastrarLivro = async (req, res) => {
    const novoLivro = req.body;
    try {
      await livro.create(novoLivro);
      res.status(201).status("Livro criado com sucesso");
    } catch(erro) {
      res.status(500).send({message: `${erro.message} - falha ao cadastrar livro.`});
    };
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).send("Livro atualizado com sucesso");
    } catch(erro) {
      res.status(500).send(`Não foi possível atualizar. Erro -${erro.message}`);
    };
  };

  static async excluirLivro (req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send({message: "Livro removido com sucesso"});
    } catch(erro) {
      res.status(500).send({message: erro.message});
    };
  };

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;
      const livrosResultado = await livro.find({"editora": editora});
      res.status(200).send(livrosResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    };
  };

};

export default LivroController;
