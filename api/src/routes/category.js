const server = require('express').Router();
const { Category, Product } = require('../db.js');

server.get('/', function (req, res, next) {
	console.log('pase por aquí')
	Category.findAll()
	
		.then(category => {
			res.send(category);
		})
		.catch(next);
});

//Crea una categoría nueva.
server.post('/', (req,res,next)=>{
  console.log('pase por aquí')
  Category.create({
		name: req.body.name, 
		description: req.body.description
	})
	.then((category) => res.status(201).send(category))
	.catch((error) => res.status(412).send(error));
  })

  //Modificar Categoría
  server.put('/:id', (req, res)=>{
    Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    .then(category => res.status(202).send(category))
  })

  //eliminar Categoria
  server.delete('/:id',(req, res) => {
    Category.destroy({
      where:{
        id : req.params.id
      }
    })
  })
  module.exports = server;