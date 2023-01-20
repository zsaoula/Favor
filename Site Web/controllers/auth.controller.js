const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');
const crypto = require('crypto');
//const nodemailer = require('nodemailer');
const maxAge = 3 * 24 * 60 * 60 * 1000;
//expiresIn temps avant l'expiration du token
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}


// Définir les informations de connexion pour le service d'envoi d'e-mails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mixmox07340@gmail.com',
    pass: 'Appwow07'
  }
});

// module.exports.signUp = async (req, res) => {

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
module.exports.sendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;
    // Générer un jeton de vérification
    const verificationToken = jwt.sign({ email }, 'secret-key', { expiresIn: '24h' });
    // Préparer l'e-mail de vérification
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Vérifiez votre adresse e-mail',
      html: `
        <p>Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse e-mail :</p>
        <a href="http://your-website.com/verify-email?token=${verificationToken}">Cliquez ici pour vérifier</a>
      `
    };
    // Envoyer l'e-mail de vérification
    await transporter.sendMail(mailOptions);
    res.json({ verificationToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

    UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                res.status(404).json({ message: "Aucun utilisateur n'a été trouvé avec cette adresse email" });
            } else {
                // Génération d'un jeton de réinitialisation de mot de passe
                const token = crypto.randomBytes(20).toString('hex');
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 heure
                user.save()
                    .then(() => {
                        // Envoi d'un email avec le lien de réinitialisation de mot de passe
                        const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'mixmox07340@gmail.com',
                                pass: 'fnvepgdxfscstdzl'
                            }
                        });
                        console.log("test5");
                        const mailOptions = {
                            from: 'mixmox07340@gmail.com',
                            to: email,
                            subject: 'Réinitialisation de mot de passe',
                            text: `Pour réinitialiser votre mot de passe, veuillez cliquer sur ce lien : http://localhost:3000/reset/${token}`
                        };
                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                                res.status(500).json({ message: "Une erreur est survenue lors de l'envoi de l'email de réinitialisation de mot de passe" });
                            } else {
                                console.log('Email sent: ' + info.response);
                                res.status(200).json({ message: "Un email de réinitialisation de mot de passe a été envoyé à l'adresse email spécifiée" });
                            }
                        });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Une erreur est survenue lors de la recherche de l'utilisateur" });
        });
};

module.exports.resetGet = async (req, res) => {
  UserModel.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } })
      .then(user => {
          if (!user) {
              res.status(404).json({ message: "Le lien de réinitialisation de mot de passe est soit expiré ou invalide" });
          } else {
              // Affichez une page HTML pour saisir un nouveau mot de passe
              res.status(200).send("Veuillez saisir votre nouveau mot de passe");
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Une erreur est survenue lors de la vérification du jeton de réinitialisation de mot de passe" });
      })};

module.exports.resetPost = async (req, res) => {
  console.log("test");
  UserModel.findOneAndUpdate({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } })
  .then(user => {
  if (!user) {
  res.status(404).json({ message: "Le lien de réinitialisation de mot de passe est soit expiré ou invalide" });
  } else {
  // Modifiez le mot de passe de l'utilisateur et enregistrez-le dans la base de données
  user.password = req.body.password;
  console.log(req.body.password);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  // user.save()
  // .then(() => {
  res.status(200).json({ message: "Mot de passe réinitialisé avec succès" });
  // })
  // .catch(err => {
  // res.status(500).json({ message: "Une erreur est survenue lors de la mise à jour du mot de passe" });
  // });
  }
  })
  .catch(err => {
       res.status(500).json({ message: "Une erreur est survenue lors de la vérification du jeton de réinitialisation de mot de passe" });
});
};

module.exports.verifyEmail = async (req, res) => {
    try {
        const { email, token } = req.body;
        // Vérifier le jeton de vérification
        jwt.verify(token, 'secret-key', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Jeton de vérification non valide' });
            }
            if (decoded.email !== email) {
                return res.status(401).json({ error: 'Adresse e-mail non valide' });
            }
            // Marquer l'adresse e-mail comme vérifiée dans la base de données
            const updateResponse = await User.updateOne({ email }, { isVerified: true });
            if (!updateResponse.nModified) {
                return res.status(404).json({ error: 'Adresse e-mail non trouvée' });
            }
            res.json({ isVerified: true });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "une erreur s'est produte lors de la vérification de l'adresse e-mail" });
    }
};

//gestion des erreurs
module.exports.signUp = async (req, res) => {
    console.log("signUp: ",req.body);
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