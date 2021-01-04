const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const LineaDeOrden = sequelize.define('linea de orden', { 
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