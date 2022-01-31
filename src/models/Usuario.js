const { Model, DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const configBD = require("../config/configDatabase")

const connection = new Sequelize(configBD.configMYSQL);

class Usuario extends Model {}
Usuario.init(
  {     
    nome: DataTypes.STRING,    
    email: DataTypes.STRING,    
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },    
    data_alteracao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },        
    status_cadastro: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  },  
  {
    timestamps: false,
    sequelize: connection,
    modelName: "Usuarios",
    tableName: "usuarios"
    
});

module.exports = Usuario;