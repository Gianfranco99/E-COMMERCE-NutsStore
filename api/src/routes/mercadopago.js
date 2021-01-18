const server = require("express").Router();
const { payment } = require("mercadopago");
const mercadopago = require("mercadopago")
const { ACCESS_TOKEN } = process.env;
const { Order } = require("../db.js");

mercadopago.configure({
    access_token : ACCESS_TOKEN
})

server.get("/",function (req,res){

    ordenID= 1
    const carrito=[
        {nombre : "almendra", quantity : 1, price:20},
        {nombre : "nueces", quantity : 2, price:20}
    ]

    const items_ml = carrito.map(p =>({
        nombre : p.nombre,
        quantity : p.quantity,
        unit_price : p.price
    }))
//   const orden =  Order.findOne({
//         where :{

//         }
//     })
//     //cargamos los productos de la orden
// const items_ml = orden.orderProducts.map(p => {
//     nombre = p.name,
//     quantity = p.quantity,
//     price = p.price
//     })
//creamos un objeto de preferencia
let preference={
    items : items_ml,
    external_reference : `${ordenID}`,
    payment_methods:{
        exclude_payments_types:[
            {
                id: "atm"
            }
        ],
    installments:3   
    },
    back_urls:{
        succes:   "http://localhost:3001/mercadopago/pagos",
        failure : "http://localhost:3001/mercadopago/pagos"   
    },
};

mercadopago.preferences.create(preference)
.then((r)=>
{
    console.info("respondio")
    global.id= r.body.id,
    console.log(r.body),
    res.json({id : global.id})
})
.catch(err => 
    {
    console.log(err)
    })
})

module.exports = server;