import Sequelize from "sequelize";
import sequelize from "./db.js";

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.TEXT
  },
  idade: {
    type: Sequelize.INTEGER
  }
});

// Usuario.sync({force: true});

export default Usuario;
