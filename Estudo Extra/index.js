import express from "express";
import Usuario from "./models/Usuario.js";

import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({extende: false}));
app.use(express.json());

// Rotas

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/usuarios", (req, res) => {
  res.sendFile(__dirname + "/html/cadastrousuarios.html");
});

app.post("/usuarios", (req, res) => {
  Usuario.create({
    nome: req.body.nome,
    email: req.body.email,
    idade: req.body.idade,
  }).then(() => {
    res.send("Usuário criado com sucesso");
  }).catch((erro) => {
    res.status(500).send(`Houve um erro. ${erro}`);
  });
});

const port = 8081;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
