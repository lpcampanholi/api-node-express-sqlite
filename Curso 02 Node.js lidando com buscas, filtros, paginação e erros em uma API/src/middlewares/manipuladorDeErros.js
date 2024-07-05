import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {

  // console.log(erro);

  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send( {message: "Os dados fornecidos estão incorretos"} );
  } else if (erro instanceof mongoose.Error.ValidationError ) {
    console.log(erro.errors);
    const mensagensErro = Object.values(erro.errors)
    .map(erro => erro.message)
    .join("; ");
    res.status(400).send( {message: `O seguintes erros foram encontrados: ${mensagensErro}`});
  } else {
    res.status(500).send( {message: "Erro interno do servidor"} );
  };
};

export default manipuladorDeErros;
