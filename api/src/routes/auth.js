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
    const { id, name, email: userEmail, isAdmin} = user;
    return res.send(
      jwt.sign(
        {
            id,
            name,
            email: userEmail,
            isAdmin,
        },
        TOKEN_PASSWORD
      )
    );
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

server.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user) { //recibe la estrategia que se usa: "local" para LocalStrategy y una funcion que se autoejecuta
    if (err) return next(err);
    else if (!user) return res.sendStatus(401);
    else return res.send(jwt.sign(user, "secreto"));
  })(req, res, next);
});

module.exports = server;