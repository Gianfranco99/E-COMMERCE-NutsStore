const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo
  const OrderLine = function(sequelize){
    sequelize.define('orderLine', { 
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  }

  module.exports = OrderLine;