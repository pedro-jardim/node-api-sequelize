const Sequelize = require("sequelize");
const configBD = require("../config/configDatabase")

const connection = new Sequelize(configBD.configMYSQL);

try {
  connection.authenticate();
  console.log("Autenticação realizada com sucesso!");
} catch (error) {
  console.error(error)
}

module.exports = connection;