const server = require("express").Router();
const {Order} = require("../db.js");

//s38- crear ruta de creacion de orden // ok

server.post('/',function (req,res){
    Order.create({
        price : req.body.price,
        orderProducts : req.body.orderProducts,
        status : req.body.status
    })
    .then(order => res.status(201).send(order))
})

// s44- crear ruta que retorne todas las ordenes //ok
server.get("/",function(req,res){
    Order.findAll()
    .then(orden => res.send(orden))
})


// s46- crear ruta que devuelva una orden //ok
server.get("/:id",function(req,res){
    Order.findOne({
        where:{
            id : req.params.id
        }
    }) 
    .then(orden => res.send(orden))
})

// s47- crear ruta que modifique una orden //ok
server.put("/:id",function(req,res){
    Order.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    .then(orden => res.send(orden))
})

module.exports= server;