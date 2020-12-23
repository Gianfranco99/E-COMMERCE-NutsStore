const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Orden = sequelize.define('orden', {
    ordenId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    products: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },

    status: {
        type: DataTypes.STRING,
        validate: {
        isIn: [['carrito', 'creada', 'procesando', 'cancelada', 'completa']]
    }
    }
  });
}