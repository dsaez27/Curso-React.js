const jwt = require('jsonwebtoken');

const validarJwt = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'No hay token',
            },
        });
    }

    try {
        const {uid, name}= jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token',
        });
    }

    next();
};

module.exports = { validarJwt };
