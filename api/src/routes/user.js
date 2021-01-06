const server = require('express').Router();
const { User } = require('../db.js');


//S34: Crear ruta para creación de usuario
server.post('/registrarse', (req, res) => {
    User.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
      .then((created) => res.status(200).send(created))
      .catch((error) => res.status(400).send(error));
})


//iniciar sesion
server.post('/login', (req, res) => {
  User.findByPk(req.body.email)
    .then((user) => {
      if (req.body.password == user.password) {
        res.status(200).send({logueado: true})
      } else {
        res.status(400).send({logueado: false, message: "los datos no coinciden"})
      }
    })
    .catch((error) => res.status(400).send(error));
})


// S35: Crear ruta para modificar usuario
server.put('/users/:id', function (req, res) {
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
  