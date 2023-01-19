const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');
//const nodemailer = require('nodemailer');
const maxAge = 3 * 24 * 60 * 60 * 1000;

//expiresIn temps avant l'expiration du token
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}


// // Définir les informations de connexion pour le service d'envoi d'e-mails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mixmox07340@gmail.com',
//     pass: 'Appwow07'
//   }
// });

// module.exports.signUp = async (req, res) => {
//   console.log(req.body);

//   const {pseudo, email, password} = req.body

//   try {
//     const user = await UserModel.create({pseudo, email, password});
//     // Générer un jeton de vérification
//     const verificationToken = jwt.sign({ email }, 'secret-key', { expiresIn: '24h' });
//     // Préparer l'e-mail de vérification
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: email,
//       subject: 'Vérifiez votre adresse e-mail',
//       html: `
//         <p>Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse e-mail :</p>
//         <a href="http://your-website.com/verify-email?token=${verificationToken}">Cliquez ici pour vérifier</a>
//       `
//     };
//     // Envoyer l'e-mail de vérification
//     await transporter.sendMail(mailOptions);
//     // Stocker le jeton de vérification associé à l'utilisateur dans la base de données
//     await UserModel.updateOne({ _id: user._id }, { verificationToken });
//     res.status(200).json({ user: user._id});
//   }
//   catch(err) {
//     const errors = signUpErrors(err);
//     res.status(200).send({ errors })
//   }
// }

// module.exports.verifyEmail = async (req, res) => {
//   const { email, token } = req.body;
//   try {
//     // Vérifier le jeton de vérification
//     jwt.verify(token, 'secret-key', async (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ error: 'Jeton de vérification non valide' });
//       }
//       if (decoded.email){

//       }
//     })
//   }catch(err){

//   }
// };

//gestion des erreurs
module.exports.signUp = async (req, res) => {
    console.log(req.body);

    //Attention à enlever
    
    const {pseudo, email, password} = req.body

    try {
        const user = await UserModel.create({pseudo, email, password});
        res.status(200).json({ user: user._id});
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

        const user = await UserModel.login({email, password});


        //creation d'un token 
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge});

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