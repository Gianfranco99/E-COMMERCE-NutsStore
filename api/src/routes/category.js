const server = require('express').Router();
const { Category } = require('../db');

//Crea una categoría nueva.
server.post('/category', (req,res,next)=>{
  console.log('pase por aquí')
	Category.create({
		name: req.body.name, 
		description: req.body.description
		// price: req.body.price, 
		// stock: req.body.stock, 
		// image: req.body.image,
	})
	.then((category) => res.status(201).send(category))
	.catch((error) => res.status(412).send(error));
  })

  //Modificar Categoría
  server.put('/products/category/:id', (req, res)=>{
      
  })

  //Agrega la categoría al producto.
  server.post('/products/:idProducto/category/:idCategoria', (req, res) => {

  })

  

  //Elimina la categoría al producto
  server.delete('/products/:idProducto/category/:idCategoria', (req, res) => {

  })

  //eliminar Categoria
  server.delete('/products/category/:id',(req, res) => {

  })