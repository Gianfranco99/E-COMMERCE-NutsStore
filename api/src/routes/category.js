const server = require('express').Router();
const { Category } = require('../db');

//Crea una categoría nueva.
server.post('/products/category/', (req,res,next)=>{
    console.log("entro aca")
	Category.create(
        {
		name: req.body.name,
        description: req.body.description
        })
        
	.then((category) => {
	  res.status(201).json(category);
	});
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