const server = require('express').Router();
const { Product, product_category } = require('../db.js');

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
				description: description
			}
		})
			.then(products => res.json(products))
	} else {
		next()
	}
})
// S23 --> next
server.get('/search/search', (req, res, next) => {
	const name = req.query.name
	if(name){
		
		Product.findAll({
			where: {
				name: req.query.name
			}
		})
		.then(products => res.json(products))
		.catch(error => error)
	} else {
		next()
	}
})

module.exports = server;