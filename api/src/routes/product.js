const server = require('express').Router();
const { Op } = require("sequelize");
const { Product, product_category, Review, User } = require('../db.js');


// S21: Crear ruta que devuelva todos los productos
server.get('/', function (req, res, next) {
	Product.findAll()
		.then(products => {
			
			res.send(products);
		})
		.catch(next);
});

// S24: Retorna un objeto de tipo producto con todos sus datos (incluidas las categorías e imágenes)
server.get('/:id', (req, res, next) => {
	Product.findOne({
		where:{
			id: req.params.id
		}
	})
		.then(product => res.send(product))
		.catch(error => res.send(error))		
})

// S25: Crear ruta para crear/agregar producto
server.post('/', function (req, res, next) {
	try {
		Product.create({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			stock: req.body.stock,
			image: req.body.image,
			category: req.body.category
		})
			.then((product) => res.status(201).send(product))
	} catch (error) {
		console.log(error);
		res.status(412).send(error);
	}
})

// S26: Crear ruta para modificar producto
server.put('/:id', function (req, res, next) {
	Product.update(req.body, {
		where: {
			id: req.params.id
		}
	})
		.then(product => res.send(product))
		.catch((error => res.status(400).send(error)))
})

// S27: Crear ruta para eliminar producto
server.delete('/:id', function (req, res, next) {
	Product.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(res.send('Producto eliminado'))
})

// S17a: Crear ruta para agregar categorías de un producto.
server.post('/:idProducto/category/:idCategoria', (req, res) => {
	const idProducto = req.params.idProducto;
	const idCategoria = req.params.idCategoria;
	product_category.create({
		productId: idProducto,
		categoryId: idCategoria
	})
		.then(res.status(201).send('Categoría y producto se han relacionado'))
		.catch((err) => err)
}
);
// S17b: Crear ruta para sacar categorías de un producto.
server.delete('/:idProducto/category/:idCategoria', (req, res) => {
	const idProducto = req.params.idProducto; // ¿idProducto?
	const idCategoria = req.params.idCategoria;
	product_category.destroy({
		where: {
			categoryId: idCategoria
		}
	})
		.then(
			res.status(201).send('Relación eliminada')
		)
		.catch((err) => err);
}
);
// S23: Retorna todos los productos que tengan {valor} en su nombre o descripcion.
server.get('/search/search', (req, res, next) => {
	const description = req.query.description
	if (description) {
		Product.findAll({
			where: {
				description: {
					[Op.like]:`${description}%`
				}
			}
		})
			.then(products => res.json(products))
	} else {
		next()
	}
});
// S23 --> next
server.get('/search/search', (req, res, next) => {
	const name = req.query.name
	if(name){
		Product.findAll({
			where: {
				name:{
					[Op.like] : `${name}%`
				}
			}
		})
		.then(products => res.json(products))
		.catch(error => error)
	} else {
		next()
	}
});

	//S54: Crear ruta para crear/agregar Review
	server.post('/:id/user/:idUser/review', (req, res, next)=>{
		const {id, idUser} = req.params;
		Review.create({
			qualify: req.body.qualify,
			description: req.body.description,
			userId: idUser,
			productId: id
		})
			.then(res.status(201).send('Se creó el review'))
			.catch((err) => err)
	});

	//S55: Crear ruta para Modificar Review
	server.put('/:id/review/:idReview',(req, res, next)=> {
		console.log(req.body)
		Review.update(req.body, {
			where: {
				id: req.params.idReview,
				productId: req.params.id
			}
		})
			.then(product => res.send(product))
			.catch((error => res.status(400).send(error)))
	})

	//S56: Crear Ruta para eliminar Review
	server.delete('/:id/review/:idReview', (req, res, next)=>{
		const {id, idReview} = req.params;
		Review.destroy({
			where: {
			id: idReview,
			productId: id
		}
		})
			.then(res.status(201).send('Se eliminó el review'))
			.catch((err) => err)
	})

	//S57: Crear Ruta para obtener todas las reviews de un producto.
	server.get('/:id/review', function (req, res, next) {	
		Review.findAll({
			where:{
				productId: req.params.id
			},
			include:[User]
		})
		.then(review => {
			res.send(review);
		})
		.catch(next);
	}
	)


module.exports = server;
