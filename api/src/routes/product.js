const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', function (req, res, next) {
	console.log('pase por aquí')
	Product.findAll()
	
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.post('/', function(req,res,next){
	console.log('pase por aquí')
	Product.create({
		name: req.body.name, 
		description: req.body.description, 
		price: req.body.price, 
		stock: req.body.stock, 
		image: req.body.image,
	})
	.then((product) => res.status(201).send(product))
	.catch((error) => res.status(412).send(error));
})

server.put("/:id",function(req,res,next){
	Product.update(req.body,{
        where :{
            id:req.params.id
        }
    })
})

server.delete("/:id",function(req,res,next){
	Product.destroy({
		where:{
			id : req.params.id
		} 
	}) 
	.then(res.send('Producto Eliminado'))
})

module.exports = server;
