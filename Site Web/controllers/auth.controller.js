const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;

//expiresIn temps avant l'expiration du token
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}


//gestion des erreurs
module.exports.signUp = async (req, res) => {
    console.log(req.body);

    //Attention à enlever
    
    const {pseudo, email, password} = req.body

    try {
        const user = await UserModel.create({pseudo, email, password});
        res.status(201).json({ user: user._id});
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(200).send({ errors })
    }
}

module.exports.signIn = async (req, res) => {
    console.log("signin: ",req.body);
    const {email, password} = req.body
    try {
        console.log("test user1 ");

        const user = await UserModel.login({email, password});
        console.log("test user2 ");


        //creation d'un token 
        const token = createToken(user._id);
        console.log("test user3 ");

        res.cookie('jwt', token, { httpOnly: true, maxAge});
        console.log("test user4 ");

        res.status(200).json({ user: user._id});
    }
    catch(err) {

        const errors = signInErrors(err);
        console.log("echec test user ",errors);

        res.status(200).send({ errors });
    }
}

module.exports.logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1});
    res.redirect('/');
}