const server = require('express').Router();
const { Product, product_category } = require('../db.js');

server.get('/', function (req, res, next) {
	console.log('pase por product')
	Product.findAll()
	
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.post('/', function(req,res,next){
	console.log('pase por product')
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
//----------------------------------------------------//
//agregar category de product
server.post("/:idProducto/category/:idCategoria", (req, res) => {
    console.log('paso')
     const idProducto = req.params.idProducto;
     const idCategoria  = req.params.idCategoria;
     console.log(idProducto, ' asdads ', idCategoria)
	 product_category.create({
			productId: idProducto,
			categoryId: idCategoria        
    })
    .then(
    	res.status(201).send('Categoría y producto se han relacionado')
    )
    .catch((err) => err);
   
  }
);
//eliminar category de product
server.delete("/:idProducto/category/:idCategoria", (req, res) => {
    console.log('paso')
     const idProducto = req.params.idProducto;
     const idCategoria  = req.params.idCategoria;
     console.log(idProducto, ' asdads ', idCategoria)
	 product_category.destroy({
		 where:{
			productId: idProducto,
			categoryId: idCategoria
		 }     
    })
    .then(
    	res.status(201).send('Relación eliminada')
    )
    .catch((err) => err);
   
  }
);
module.exports = server;
