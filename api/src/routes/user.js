const server = require('express').Router();
//const { json, JSON } = require('sequelize-types');
const { User } = require('../db.js');


//S34: Crear ruta para creación de usuario
server.post('/registrarse', (req, res) => {
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
    })
      .then((created) => res.status(201).send(created))
      .catch((error) => res.status(412).send(error));
})


// S35: Crear ruta para modificar usuario
server.put('/:id', function (req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(User => res.status(202).send(User))
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

//s37: crear ruta para eliminar usuario
server.delete('/:id', function(req,res){
 User.destroy({
   where:{
     id : req.params.id
   }
 }).then(user => res.send("User Eliminado"))
})

//s45: crear ruta que retorne todas las ordenes de usuario
server.get('/:id/orders',function(req,res){
  User.findOne({
    where :{
      id : req.params.id
    }
  }).then(user => res.send(JSON.stringify(user.order)))
})



module.exports = server;
  