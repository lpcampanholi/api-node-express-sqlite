import autor from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {
    try {
      const autoresResultado = await autor.find({});
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    };
  };

  static async listarAutorPorId(req, res) {
    const id = req.params.id;
    try {
      const autorEncontrado = await autor.findById(id);
      res.status(200).send(autorEncontrado);
    } catch (erro) {
      res.status(400).json({message: `${erro.message} - Id do Autor não localizado.`});
    };
  };

  static async cadastrarAutor(req, res) {
    const novoAutor = req.body;
    try {
      await autor.create(novoAutor);
      res.status(201).send("Autor cadastrado com sucesso");
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar Autor.`});
    };
  };
  
  static async atualizarAutor(req, res) {
    const id = req.params.id;
    try {
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).send("Autor atualizado com sucesso");
    } catch (erro) {
      res.status(500).json({message: erro.message});
    };
  };
  
  static async excluirAutor(req, res) {
    const id = req.params.id;
    try {
      await autor.findByIdAndDelete(id);
      res.status(200).send("Autor removido com sucesso");
    } catch (erro) {
      res.status(500).json({message: erro.message});
    };
  };
  
};

export default AutorController;
