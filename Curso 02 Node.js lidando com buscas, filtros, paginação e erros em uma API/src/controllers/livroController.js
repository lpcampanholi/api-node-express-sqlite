import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";

class LivroController {

  static async listarLivros(req, res, next) {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;
      next();
    } catch(erro) {
      next(erro);
    };
  };

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livrosResultado = await livros.findById(id);
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
      await livros.create(novoLivro);
      res.status(201).json({message: "Livro criado com sucesso", livro: novoLivro});
    } catch(erro) {
      next(erro);
    };
  };

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findByIdAndUpdate(id, req.body);
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
      const livroResultado = await livros.findByIdAndDelete(id);
      if (livroResultado !== null) {
      res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado"));
      };
    } catch(erro) {
      next(erro);
    };
  };

  static async listarLivroPorFiltro(req, res, next) {
    try {
      const busca = await processaBusca(req.query);
      if (busca !== null) {
        const livrosResultado = livros.find(busca);
        req.resultado = livrosResultado;
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    };
  };

};

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
  let busca = {};
  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.paginas = {};

  // gte = Greater Than or Equal = Maior ou igual que
  if (minPaginas) busca.paginas.$gte = minPaginas;
  // lte = Less Than or Equal = Menor ou igual que
  if (maxPaginas) busca.paginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if(autor !== null) {
      busca.autor = autor._id;;
    } else {
      busca = null;
    };
  };

  return busca;
};

export default LivroController;
