import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, required: true},
  email: {type: String},
  responsavel: {type: mongoose.Schema.Types.ObjectId, ref: "responsaveis", required: true}
}, {versionKey: false});

const aluno = mongoose.model("alunos", alunoSchema);

export default aluno;
