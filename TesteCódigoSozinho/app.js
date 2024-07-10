import express from "express";
import routes from "./routes/index.js";
import db from "./dataBase/dataBase.js";

// Conexão com o banco de dados
db.on("error", console.log.bind(console, "Erro de conexão com o Banco"));
db.once("open", () => {
  console.log("Conexão com o Banco feita com sucesso");
});

const app = express();

// Configurar rotas
routes(app);

// Iniciar o servidor
app.listen(3035, () => {
  console.log("Servidor escutando");
});
