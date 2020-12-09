const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.get("/products",function(req,res,next){
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
})

server.post("/products",function(req,res,next){
	Product.create(req.body)
	.then(product => res.status(201).send(product))
})

server.put("/products/id",function(req,res,next){
	Product.update(req.body,{
		where:{
			id:req.params.id
		}
	})
	.then(product => res.status(201).send(product))
})

server.delete("/products/id",function(req,res,next){
	Product.destroy({
		where:{
			id : req.params.id
		}
	})
})
module.exports = server;
