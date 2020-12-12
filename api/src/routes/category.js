const server = require('express').Router();
const { Category, Product } = require('../db.js');

server.get('/', function (req, res, next) {
  console.log('pase por category')
  Category.findAll()

    .then(category => {
      res.send(category);
    })
    .catch(next);
});

server.get('/', function (req, res, next) {
  console.log('pase por category')
  Category.findAll()

    .then(category => {
      res.send(category);
    })
    .catch(next);
});

server.post('/', (req, res, next) => {
  console.log('pase por aquí')
  Category.create({
    name: req.body.name,
    description: req.body.description
  })
    .then((category) => res.status(201).send(category))
    .catch((error) => res.status(412).send(error));
})

server.put("/:id", function (req, res, next) {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(category => res.status(202).send(category))
})

server.delete('/:id', (req, res) => {
  console.log('borrame, amigo')
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
})

server.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.send('Categoria Eliminada'))
});

server.get('/:categoryName', (req, res) => {
	const name = req.params.categoryName;
	Product.findAll ({
		include: {
      model: Category,
			where: { name }
		}
	})
	.then((products => {
		if (!products[0]) return res.status(400).json({message : 'Ningún producto corresponde con esa categoría'})
		res.json(products)
	}))
})
module.exports = server;