const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Review = sequelize.define('review', {
  
    qualify: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  });
}