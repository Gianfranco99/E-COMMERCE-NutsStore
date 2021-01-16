const server = require('express').Router();
const { User } = require('../db.js');
const { Order } = require('../db.js')
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const { TOKEN_PASSWORD } = process.env;
const nodemailer= require("nodemailer")

server.post("/send-email",function (req,res){
  const {email} = req.body
  const token = jwt.sign({email},TOKEN_PASSWORD)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "gianfranco.benvenuto99@gmail.com", // generated ethereal user
      pass:"ijeyuyyomxdhlelq", // generated ethereal password
    },
  });

  transporter.verify().then( ()=>{
      console.log("ready for send emails")
  } )
console.log(email)

  const linkReset = `http://localhost:3000/registrarse/recuperar-contraseña/${token}`
  console.log(linkReset)
  const data={
    from: "no-reply@nuts-store.com",
    to: email,
    subject: "reset-password",
    html: `<p>
            Por favor, haga click en el siguiente enlace para crear una nueva contraseña:
            <a href=${linkReset}>
              LINK
            </a>
          </p>`
  }
  transporter.sendMail(data)
  console.log(data)
})


/*
INTRODUZCA E-MAIL PARA RECUPERAR CONSTRASEÑA

[CAMPO PARA E-MAIL]

BOTÓN: ENVIAR --> dispara                    
                    --> un onSubmit --> sendMail

*/

/*
PASS RESET --> PUT / user.password = {Number}

*/

// ruta para password reset
server.put('/:id/password-reset', (req, res) => {
  const { id } = req.params;  
  User.update(req.body, {
    where: {
      id: id
    },
  })
  .then(user => res.send(user))
  .catch(error => error)
});

//S34: Crear ruta para creación de usuario
server.post('/registrarse', (req, res) => {
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
    })
      .then((created) => res.status(201).send(created))
      .catch((error) => res.status(412).send(error));
})

// S35: Crear ruta para modificar usuario
server.put('/:id', function (req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(User => res.status(200).send(User))
      .catch((error) => res.send(error))
  })


//S36: Crear ruta que retorne todos los usuarios
  server.get('/', function (req, res, next) {
    User.findAll()
      .then(User => {
        res.send(User);
      })
      .catch(next);
  });

//s37: crear ruta para eliminar usuario
server.delete('/:id', function(req,res){
 User.destroy({
   where:{
     id : req.params.id
   }
 }).then(user => res.send("User Eliminado"))
})

//s38 : crear ruta para agregar item al carrito
server.post('/:id/order',function(req,res){
const user = req.params.id;
Order.create({
    userId: user,
    price : req.body.price,
    quantity : req.body.quantity,
    orderProducts : req.body.orderProducts,
    status : req.body.status
})
.then(order => res.send(order))
})

//s39 : crear ruta que retorne todos los items del carrito
server.get('/:id/order',function(req,res){
  const user = req.params.id;
  Order.findAll({
    where:{
      [Op.and]:[
        {userId : user},
        {status : "carrito"}
      ]
    }
  })
  .then(order => res.send(order))
})

//s40 : crear ruta para vaciar carrito
server.delete('/:id/order',function(req,res){

})

//s45: crear ruta que retorne todas las ordenes de usuario
server.get('/:id/orders',function(req,res){
  const {id} = req.params
  Order.findAll({
  where: {
  userId: id
},
  }).then(orders => res.send(JSON.stringify(orders)))
})



module.exports = server;
  