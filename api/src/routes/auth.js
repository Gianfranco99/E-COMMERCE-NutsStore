const server = require("express").Router();
const { User } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { TOKEN_PASSWORD } = process.env;

server.get("/me", async (req, res, next) => {
  try {
    if (req.user) {
      const { id } = req.user;
      const result = await User.findByPk(id);
      res.json(result);
    } else res.sendStatus(401);
  } catch (error) {
    next(error);
  }
});

server.post("/registrarse", async function (req, res, next) {
  try {
    const user = await User.create(req.body);
    const { id, name, email, isAdmin, isBanned} = user;
    console.log(user)
    res.status(200).send(
      jwt.sign(
        {
            id,
            name,
            email,
            isAdmin,
            isBanned,
        },
        TOKEN_PASSWORD
      )
    );
  } catch (error) {
    console.log(error)
    res.sendStatus(500).send(error);
  }
});

server.post("/login", function (req, res, next) {
  try{
    passport.authenticate("local", function (err, user) { //recibe la estrategia que se usa: "local" para LocalStrategy y una funcion que se autoejecuta
     console.log(err, user);
     console.log(TOKEN_PASSWORD)
     const { id, name, email, isAdmin, isBanned} = user;
     console.log(isBanned)
    if (err) return next(err);
      else if (!user || isBanned) return res.status(401).send("No existe su usuario o su usario esta baneado");
      else return res.send({
        token: jwt.sign( 
        {
            id,
            name,
            email, 
            isAdmin,
            isBanned,
        }, TOKEN_PASSWORD
      ),
      user
      });
    })(req, res, next);
  } catch(err){
    console.log(err)
    res.status(400).send(err)
  }
});

module.exports = server;