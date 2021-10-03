const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');

const crearUsuario = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        console.log(user);
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exists',
            });
        }

        user = new User(req.body);

        //Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Generate token
        const token = await generateJwt(user._id, user.name);

        res.status(201).json({
            ok: true,
            uid: user._id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Plase report this error to the admin',
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'User created',
    });
};

const loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'User not exists with this email',
            });
        }

        //Validate password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid password',
            });
        }

        //Generate token
        const token = await generateJwt(user._id, user.name);

        res.status(200).json({
            ok: true,
            uid: user._id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Plase report this error to the admin',
        });
    }
};

const revalidarToken = async (req, res) => {
    const uid = req.uid;
    const name = req.name;

     //Generate token
     const token = await generateJwt(uid, name);

    res.json({
        ok: true,
        token
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
