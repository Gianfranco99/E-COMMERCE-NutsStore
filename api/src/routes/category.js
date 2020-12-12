const server = require('express').Router();
const { Category, product_category } = require('../db.js');

server.get('/', function (req, res, next) {
  console.log('pase por aquí')
  Category.findAll()

    .then(category => {
      res.send(category);
    })
    .catch(next);
});

server.get('/', function (req, res, next) {
  console.log('pase por aquí')
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

// S22 Retorna todos los productos de {name} category
server.get('/:name', (req, res) => {
  // :name = trae todos los productos de acuerdo al nombre de la categoría 
  Category.findOne({
    where: {
      name: req.params.name // obtenemos el nombre de la categoría
    }
  })
    .then((category) => {
      const catID = JSON.stringify(category.id)
      product_category.findAll({
        where: {
          categoryId: catID
        }
      })
      .then(products => res.send(JSON.stringify(products.productsId)))
    })
    .catch(error => error)
})

module.exports = server;