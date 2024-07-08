import Sequelize from "sequelize";

// Conexão com o Banco MySQL
const sequelize = new Sequelize("postapp", "root", "Lpcampanholi123!", {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then(() => {
  console.log("Conectado com sucesso");
}).catch((erro) => {
  console.log(`Falha ao se conectar: ${erro}`);
});

export default sequelize;
