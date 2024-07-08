import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", (req, res) => {
  res.send("Página Sobre");
});

app.get("/blog", (req, res) => {
  res.send("Página Blog");
});

app.get("/ola/:cargo/:nome", (req, res) => {
  res.send(`<h1>Seja bem-vindo ${req.params.cargo} ${req.params.nome}!</h1>`);
});

const port = 8081;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})