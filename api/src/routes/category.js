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
		// price: req.body.price, 
		// stock: req.body.stock, 
		// image: req.body.image,
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


  

  //Elimina la categoría al producto
  server.delete('/:idProducto/category/:idCategoria', (req, res) => {
    	let { idProducto, idCategoria } = req.params;
        Product.findOne({
          where: {
          id: idProducto,
          },
        })
          .then((product) => {
          if (!product) {
            return res
            .status(400)
            .json({ message: "No se encontraron productos con ese id." });
          }
          Product.removeCategories(idCategoria);
          res.status(201).json({ message: "Categoria borrada" });
          })
          .catch((err) => err);
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