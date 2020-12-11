const server = require('express').Router();
const { Category } = require('../db');

//Crea una categoría nueva.
server.get('/', function (req, res, next) {
	console.log('pase por aquí')
	Category.findAll()
	
		.then(category => {
			res.send(category);
		})
		.catch(next);
});

server.post('/', (req,res,next)=>{
  console.log('pase por aquí')
	Category.create({
		name: req.body.name, 
		description: req.body.description
	})
	.then((category) => res.status(201).send(category))
	.catch((error) => res.status(412).send(error));
  })

  server.put("/:id",function(req,res,next){
    Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    .then(category => res.status(201).send(category))
  })
  
  // server.delete("/:id",function(req,res,next){
  //   Category.destroy({
  //     where:{
  //       id : req.params.id
  //     } 
  //   }) 
  //   .then(res.send('Categoria Eliminada'))
  // })
  module.exports = server;