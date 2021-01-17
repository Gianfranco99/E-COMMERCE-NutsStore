const jwt = require('jsonwebtoken');
const { TOKEN_PASSWORD } = process.env;

let verifyToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, TOKEN_PASSWORD, (err, decoded) => {

        if (err) {
            console.log(`error, ${JSON.stringify(err)}`)
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token No Valido',
                    err: err
                }
            });
        };

        req.usuario = decoded.usuario;
        next();

    });
};

module.exports = verifyToken;