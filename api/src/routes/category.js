const server = require('express').Router();
const { Category, Product } = require('../db.js');

server.get('/category', function (req, res, next) {
  Category.findAll()

    .then(category => {
      res.send(category);
    })
    .catch(next);
});


// S18: Crear ruta para crear/agregar categoría
server.post('/', (req, res, next) => {
  Category.create({
    name: req.body.name,
    description: req.body.description
  })
    .then((category) => res.status(201).send(category))
    .catch((error) => res.status(412).send(error));
})

// S19: Crear ruta para eliminar categoría
server.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(res.send('categoría eliminada'))
})

// S20: Crear ruta para modificar categoría
server.put('/:id', function (req, res) {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(category => res.status(202).send(category))
    .catch((error) => res.send(error))
})

// S22: Crear ruta que devuelva los productos de X categoría
server.get('/:categoryName', (req, res) => {
	const name = req.params.categoryName;
	Product.findAll ({
		include: {
      model: Category,
			where: { name }
		}
	})
	.then((products => {
		if (!products[0]) return res.status(400).json({message : 'Ningún producto corresponde a esa categoría'})
		res.json(products)
	}))
})

module.exports = server;
