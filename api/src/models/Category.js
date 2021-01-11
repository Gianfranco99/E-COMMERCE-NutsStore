const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   const Category = sequelize.define('category', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }, 
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };    

const Category = function(sequelize){
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}

module.exports = Category;