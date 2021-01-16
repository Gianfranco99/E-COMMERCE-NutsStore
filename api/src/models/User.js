const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt")

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        if (value === "") {
          this.setDataValue("password", "")
        }
        else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);        //hashear contraseña
        }
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    isBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });



  User.prototype.compare = function (pass) {
    return bcrypt.compareSync(pass, this.password);     //comparar contraseña
    //compareSync: devuelve true o false
    //devuelve true si la pass (la hashea) tiene relacion con this.password (hash)
  };
  return User;
}
