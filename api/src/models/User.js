const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('user', {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        isEmail: true,
      }
    },
    password: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
        isAlphanumeric: true,
     }
    },
  });
}
