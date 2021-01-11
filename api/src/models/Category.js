const { DataTypes } = require('sequelize');   

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