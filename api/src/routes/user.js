const server = require('express').Router();
const { User } = require('../db.js');

//Las rutas de crear usuario e iniciar sesion estan en auth.js

// S35: Crear ruta para modificar usuario
server.put('/:id', function (req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(User => res.status(200).send(User))
      .catch((error) => res.send(error))
  })


//S36: Crear ruta que retorne todos los usuarios
  server.get('/', function (req, res, next) {
    User.findAll()
      .then(User => {
        res.send(User);
      })
      .catch(next);
  });

module.exports = server;
  