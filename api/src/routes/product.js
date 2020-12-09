const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});
server.get("/products/categoria/:nombreCat",function(req,res,next){

})

server.post("/products",function(req,res,next){

})

server.put("/products/:id",function(req,res,next){

})

server.delete("/products/:id",function(req,res,next){
	
})
module.exports = server;
