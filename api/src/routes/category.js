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
    Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    .then(category => res.status(202).send(category))
  })

  //Agrega la categoría al producto.
  server.post('/products/:idProducto/category/:idCategoria', (req, res) => {
    console.log('pasoporaki')
	const PROD = await products.findByPk(idProducto);
	const CAT = await category.findByPk(idCategoria);
	 PROD.addCategories(CAT.dataValues.id)

.then((products) => {
 // console.log(product)
 res.status(200).json(products);
  })
})

  

  //Elimina la categoría al producto
  server.delete('/products/:idProducto/category/:idCategoria', (req, res) => {
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
          product.removeCategories(idCategoria);
          res.status(201).json({ message: "Categoria borrada" });
          })
          .catch((err) => err);
  })

  //eliminar Categoria
  server.delete('/products/category/:id',(req, res) => {
    Category.destroy({
      where:{
        id : req.params.id
      }
    })
  })