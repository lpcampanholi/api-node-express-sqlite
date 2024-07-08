import { Sequelize } from "sequelize";

const sequelize = new Sequelize("teste", "root", "Lpcampanholi123!", {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then(() => {
  console.log("Conectado com sucesso");
}).catch((erro) => {
  console.log(`Falha ao se conectar: ${erro}`);
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,

  }
});

const Usuario = sequelize.define ("usuarios", {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

// CRIAR TABELAS - Está comentado porque deve ser excutado apenas uma vez para não repetir a criação das Tabelas
// Usuario.sync( {force: true} );
// Postagem.sync( {force: true} );

// Criar novo registro
Postagem.create({
  titulo: "A ordem cronológica dos filmes para assistir a saga de Harry Potter",
  conteudo: "Saiba a ordem dos filmes de Harry Potter e como se encaixam ainda Animais Fantásticos e outros projetos do mundo bruxo da série"
});
