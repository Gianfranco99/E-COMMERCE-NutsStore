const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const { User } = require("./db.js");
const jwt = require("jsonwebtoken");
const { TOKEN_PASSWORD } = process.env;


passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", session: false },
    async (mail, password, done) => {
      const user = await User.findOne({ where: { email: mail } });  //busca el usuario en la database
      if (!user) return done(null, false); //login es false
      if (!user.compare(password)) return done(null, false); //contraseña incorrecta, login false
      const {
        id,
        name,
        email,
        isAdmin,
        isBanned

      } = user;
      return done(null, {  //devolver usuario
        id,
        name,
        email,
        isAdmin,
        isBanned
      });
    }
  )
);

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, TOKEN_PASSWORD, function (err, user) {
      if (err) return done(err);
      return done(null, user ? user : false);
    });
  })
);

module.exports = passport;