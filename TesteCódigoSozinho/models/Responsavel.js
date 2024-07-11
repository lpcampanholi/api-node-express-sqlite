import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.ObjectId},
  tipo: {type: String, required: true},
  nome: {type: String, required: true}
}, {versionKey: false});

const responsavel = mongoose.model("responsaveis", responsavelSchema);

export default responsavel;
