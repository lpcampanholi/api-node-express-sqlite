import responsavel from "../models/Responsavel.js";

class responsavelController {

  static async buscarResponsaveis(req, res) {

    const responsaveis = await responsavel.find({});
    res.status(200).send(responsaveis);

  };

  static async cadastrarResponsavel(req, res) {

    const novoResponsavel = req.body;
    await responsavel.create(novoResponsavel);
    res.status(200).send("Responsável criado com sucesso");

  };

};

export default responsavelController;
