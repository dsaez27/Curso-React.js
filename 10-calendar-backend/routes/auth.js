const { Router } = require('express');
const {
    crearUsuario,
    loginUsuario,
    revalidarToken,
} = require('../controllers/auth');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJwt } = require('../middlewares/validarJwt');

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password to be at least 6 characters').isLength({
            min: 6,
        }),
        validarCampos,
    ],
    crearUsuario
);
router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password to be at least 6 characters')
            .not()
            .isEmpty(),
        validarCampos,
    ],
    loginUsuario
);
router.get('/renew', validarJwt, revalidarToken);

module.exports = router;
