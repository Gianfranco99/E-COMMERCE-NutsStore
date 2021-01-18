const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Order = sequelize.define('order', {

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    orderProducts: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
    
    quantity :{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isIn: [[ 'creada', 'cancelada', 'completa']]
    }
    }
  });
}