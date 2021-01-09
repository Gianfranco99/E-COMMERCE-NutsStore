const server = require('express').Router();
//const { json, JSON } = require('sequelize-types');
const { User } = require('../db.js');
const {Order} = require('../db.js')
const { Op } = require("sequelize");

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

//s38 : crear ruta para agregar item al carrito
server.post('/:id/order',function(req,res){
const user = req.params.id;
Order.findOrCreate({
  where:{ 
    [Op.and]:
    [
      { userId : user},
      { status : ["carrito","creada"]}
    ] 
  },
  default : {
    price : req.body.price,
    orderProducts : req.body.orderProducts,
    status : req.body.status
  }
})
.then(order => res.send(order))
})

//s39 : crear ruta que retorne todos los items del carrito
server.get('/:id/order',function(req,res){
  
})

//s40 : crear ruta para vaciar carrito
server.delete('/:id/order',function(req,res){

})

//s45: crear ruta que retorne todas las ordenes de usuario
server.get('/:id/orders',function(req,res){
  const {id} = req.params
  Order.findAll({
  where: {
  userId: id
},
  //include: [Product]
  }).then(orders => res.send(JSON.stringify(orders)))
})



module.exports = server;
  