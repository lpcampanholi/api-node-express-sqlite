import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    editora: {type: String, required: true},
    paginas: {type: Number},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}
  }, {versionKey: false}
);

const livro = mongoose.model('livros', livroSchema);

export default livro;